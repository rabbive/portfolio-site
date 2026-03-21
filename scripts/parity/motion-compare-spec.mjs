import fs from "node:fs/promises";
import path from "node:path";

const INPUT_DIR = path.resolve(process.cwd(), "artifacts/motion");
const DURATION_TOLERANCE_MS = 24;

const SPEC = {
  experience_expand: { property: "gridTemplateRows", durationMs: 362 },
  blog_tag_filter_select: { property: "backgroundColor", durationMs: 361 },
  command_palette_overlay_open: { property: "opacity", durationMs: 251 },
  command_palette_panel_open: { property: "transform", durationMs: 388 },
};

function getDuration(samples, property) {
  if (!samples?.length) return null;
  const first = samples[0]?.[property];
  const firstTs = samples[0]?.t;
  if (first === undefined || firstTs === undefined) return null;
  let finalTs = null;
  let stableFrames = 0;
  let previous = first;
  for (const sample of samples) {
    const value = sample[property];
    if (value !== first) finalTs = sample.t;
    if (value === previous) stableFrames += 1;
    else stableFrames = 0;
    previous = value;
    if (finalTs !== null && stableFrames >= 5) break;
  }
  if (finalTs === null) return null;
  return Math.max(0, finalTs - firstTs);
}

async function run() {
  const localFile = process.argv[2] || path.join(INPUT_DIR, "local-light.json");
  const local = JSON.parse(await fs.readFile(localFile, "utf8"));
  const localById = new Map(local.records.map((r) => [r.id, r]));
  const results = [];

  for (const [id, spec] of Object.entries(SPEC)) {
    const rec = localById.get(id);
    if (!rec) {
      results.push({ id, pass: false, reason: "missing record" });
      continue;
    }
    const measured = getDuration(rec.samples, spec.property);
    if (measured === null) {
      results.push({ id, pass: false, reason: `no measurable ${spec.property} transition` });
      continue;
    }
    const delta = Math.abs(measured - spec.durationMs);
    results.push({
      id,
      property: spec.property,
      targetMs: spec.durationMs,
      measuredMs: measured,
      deltaMs: delta,
      pass: delta <= DURATION_TOLERANCE_MS,
    });
  }

  const pass = results.every((r) => r.pass);
  const report = { localFile, toleranceMs: DURATION_TOLERANCE_MS, pass, results };
  const reportFile = path.join(INPUT_DIR, "report-spec.json");
  await fs.writeFile(reportFile, JSON.stringify(report, null, 2));

  if (!pass) {
    console.error(`Motion spec parity failed. See ${reportFile}`);
    process.exit(1);
  }
  console.log(`Motion spec parity passed. Report: ${reportFile}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
