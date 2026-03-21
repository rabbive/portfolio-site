import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const OUTPUT_DIR = path.resolve(process.cwd(), "artifacts/motion");
const VIEWPORT = { width: 1280, height: 900 };
const SAMPLE_MS = 900;

function getArg(name, fallback = "") {
  const prefixed = `--${name}=`;
  const arg = process.argv.find((item) => item.startsWith(prefixed));
  return arg ? arg.slice(prefixed.length) : fallback;
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function captureInteraction(page, config) {
  const startedAt = Date.now();
  await config.before?.(page);
  await config.trigger(page);
  await page.waitForTimeout(16);
  const selector = await page.evaluate((candidates) => {
    for (const candidate of candidates) {
      if (document.querySelector(candidate)) return candidate;
    }
    return null;
  }, [config.sampleSelector, ...(config.sampleSelectors || [])].filter(Boolean));
  if (!selector) {
    return {
      id: config.id,
      route: config.route,
      sampleSelector: config.sampleSelector ?? "",
      timestamp: new Date().toISOString(),
      captureDurationMs: Date.now() - startedAt,
      samples: [],
    };
  }
  const samples = await page.evaluate(async ({ selector, durationMs }) => {
    const target = document.querySelector(selector);
    if (!target) return [];
    const frames = [];
    const read = () => {
      const style = window.getComputedStyle(target);
      frames.push({
        t: performance.now(),
        opacity: style.opacity,
        transform: style.transform,
        color: style.color,
        backgroundColor: style.backgroundColor,
        borderColor: style.borderColor,
        gridTemplateRows: style.gridTemplateRows,
        marginTop: style.marginTop,
      });
    };
    read();
    const start = performance.now();
    while (performance.now() - start < durationMs) {
      await new Promise((resolve) => requestAnimationFrame(resolve));
      read();
    }
    return frames;
  }, { selector: config.sampleSelector, durationMs: config.sampleMs ?? SAMPLE_MS });
  await page.waitForTimeout(config.waitAfterMs ?? SAMPLE_MS);
  return {
    id: config.id,
    route: config.route,
    sampleSelector: config.sampleSelector,
    timestamp: new Date().toISOString(),
    captureDurationMs: Date.now() - startedAt,
    samples,
  };
}

async function findFirstSelector(page, selectors) {
  for (const selector of selectors) {
    if ((await page.locator(selector).count()) > 0) return selector;
  }
  return null;
}

async function clickFirst(page, selectors) {
  for (const selector of selectors) {
    const locator = page.locator(selector).first();
    if ((await locator.count()) > 0) {
      await locator.click();
      return true;
    }
  }
  return false;
}

async function toggleDarkIfNeeded(page, theme) {
  if (theme !== "dark") return;
  await clickFirst(page, [
    "button[aria-label^='Switch to dark mode']",
    "button[aria-label^='Switch to dark']",
    "button[aria-label*='dark']",
  ]);
}

function scenarios(theme = "light", kind = "local") {
  return [
    ...(kind === "local" ? [{
      id: "command_palette_overlay_open",
      route: "/",
      sampleSelectors: [".fixed.inset-0.z-\\[120\\]", ".fixed.inset-0"],
      resolveAfterTrigger: true,
      before: async (page) => {
        await toggleDarkIfNeeded(page, theme);
      },
      trigger: async (page) => {
        await clickFirst(page, ["button[aria-label='Open command palette (⌘K)']", "button:has-text('⌘')"]);
      },
    }, {
      id: "command_palette_panel_open",
      route: "/",
      sampleSelectors: [".max-w-xl.rounded-xl.border", "[role='dialog']"],
      resolveAfterTrigger: true,
      before: async (page) => {
        await toggleDarkIfNeeded(page, theme);
      },
      trigger: async (page) => {
        await clickFirst(page, ["button[aria-label='Open command palette (⌘K)']", "button:has-text('⌘')"]);
      },
    }] : []),
    {
      id: "header_nav_hover_home",
      route: "/",
      sampleSelectors: ["header nav a[href='/']", "nav a[href='/']"],
      before: async (page) => {
        await toggleDarkIfNeeded(page, theme);
      },
      trigger: async (page) => {
        await page.hover("header nav a[href='/']");
      },
    },
    {
      id: "theme_toggle_click",
      route: "/",
      sampleSelectors: ["button[aria-label^='Switch to ']", "button[aria-label*='theme']"],
      before: async () => {},
      trigger: async (page) => {
        await clickFirst(page, ["button[aria-label^='Switch to ']", "button[aria-label*='theme']"]);
      },
    },
    {
      id: "experience_expand",
      route: "/",
      sampleSelectors: [".group .grid", ".group [style*='grid-template-rows']"],
      before: async (page) => {
        await toggleDarkIfNeeded(page, theme);
      },
      trigger: async (page) => {
        await page.getByLabel("Expand details").first().click();
      },
      sampleMs: 1100,
      waitAfterMs: 1100,
    },
    {
      id: "copy_email_feedback",
      route: "/",
      sampleSelectors: ["button[aria-label='Copy email']"],
      before: async (page) => {
        await toggleDarkIfNeeded(page, theme);
      },
      trigger: async (page) => {
        await page.getByLabel("Copy email").click();
      },
      sampleMs: 2300,
      waitAfterMs: 2300,
    },
    {
      id: "blog_tag_filter_select",
      route: "/blog",
      sampleSelectors: ["button.rounded-lg.border:nth-of-type(2)", "button:has-text('All')"],
      before: async (page) => {
        await toggleDarkIfNeeded(page, theme);
      },
      trigger: async (page) => {
        await page.locator("button.rounded-lg.border").nth(1).click();
      },
    },
  ];
}

async function run() {
  const baseUrl = getArg("baseUrl");
  const label = getArg("label", "local");
  const theme = getArg("theme", "light");
  const kind = getArg("kind", "local");
  if (!baseUrl) {
    throw new Error("Missing --baseUrl argument");
  }

  await ensureDir(OUTPUT_DIR);
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: VIEWPORT });
  const page = await context.newPage();
  await page.goto(baseUrl);

  const records = [];
  const skipped = [];
  for (const config of scenarios(theme, kind)) {
    await page.goto(new URL(config.route, baseUrl).toString());
    const sampleSelector = await findFirstSelector(page, config.sampleSelectors);
    if (!sampleSelector && !config.resolveAfterTrigger) {
      skipped.push({ id: config.id, reason: "sample selector not found", candidates: config.sampleSelectors });
      continue;
    }
    config.sampleSelector = sampleSelector ?? config.sampleSelectors[0];
    const record = await captureInteraction(page, config);
    records.push(record);
  }

  const outFile = path.join(OUTPUT_DIR, `${label}-${theme}.json`);
  await fs.writeFile(outFile, JSON.stringify({ baseUrl, label, theme, kind, viewport: VIEWPORT, records, skipped }, null, 2));
  await browser.close();
  console.log(`Wrote ${outFile}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
