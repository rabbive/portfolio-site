import fs from "node:fs/promises";
import path from "node:path";

const INPUT_DIR = path.resolve(process.cwd(), "artifacts/motion");
const DEFAULT_DURATION_TOLERANCE_MS = 16.7;

function getArg(name, fallback = "") {
  const prefixed = `--${name}=`;
  const arg = process.argv.find((item) => item.startsWith(prefixed));
  return arg ? arg.slice(prefixed.length) : fallback;
}

function parseNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function getDuration(samples, property) {
  if (!samples?.length) return null;
  const first = samples[0]?.[property];
  const last = samples[samples.length - 1]?.[property];
  if (first === undefined || last === undefined || first === last) return null;
  const firstTime = samples[0].t;
  let finalChangeTs = firstTime;
  for (const sample of samples) {
    if (sample[property] !== first) {
      finalChangeTs = sample.t;
    }
  }
  return Math.max(0, finalChangeTs - firstTime);
}

function compareRecord(sourceRecord, localRecord, durationToleranceMs) {
  const properties = [
    "opacity",
    "transform",
    "color",
    "backgroundColor",
    "borderColor",
    "gridTemplateRows",
    "marginTop",
  ];
  const deltas = [];
  let pass = true;

  for (const prop of properties) {
    const srcDur = getDuration(sourceRecord.samples, prop);
    const locDur = getDuration(localRecord.samples, prop);
    if (srcDur === null || locDur === null) continue;
    const delta = Math.abs(srcDur - locDur);
    deltas.push({ property: prop, sourceMs: srcDur, localMs: locDur, deltaMs: delta });
    if (delta > durationToleranceMs) pass = false;
  }

  return { id: sourceRecord.id, pass, deltas };
}

async function run() {
  const sourceFile = getArg("source", path.join(INPUT_DIR, "source-light.json"));
  const localFile = getArg("local", path.join(INPUT_DIR, "local-light.json"));
  const durationToleranceMs = parseNumber(getArg("durationToleranceMs", `${DEFAULT_DURATION_TOLERANCE_MS}`)) ?? DEFAULT_DURATION_TOLERANCE_MS;

  const source = JSON.parse(await fs.readFile(sourceFile, "utf8"));
  const local = JSON.parse(await fs.readFile(localFile, "utf8"));
  const localById = new Map(local.records.map((r) => [r.id, r]));

  const results = [];
  for (const src of source.records) {
    const loc = localById.get(src.id);
    if (!loc) {
      results.push({ id: src.id, pass: false, missing: true, deltas: [] });
      continue;
    }
    results.push(compareRecord(src, loc, durationToleranceMs));
  }

  const failed = results.filter((r) => !r.pass);
  const hasComparisons = results.length > 0;
  const out = {
    sourceFile,
    localFile,
    durationToleranceMs,
    pass: hasComparisons && failed.length === 0,
    results,
  };

  const reportFile = path.join(INPUT_DIR, "report.json");
  await fs.writeFile(reportFile, JSON.stringify(out, null, 2));

  if (!out.pass) {
    if (!hasComparisons) {
      console.error(`Motion parity failed: no overlapping interactions to compare. See ${reportFile}`);
      process.exit(1);
    }
    console.error(`Motion parity failed (${failed.length} interactions out of ${results.length}). See ${reportFile}`);
    process.exit(1);
  }

  console.log(`Motion parity passed (${results.length} interactions). Report: ${reportFile}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
