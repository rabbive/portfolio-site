import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { mapGithubSnapshot } from "./github-sync-lib.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const OUTPUT = path.join(ROOT, "lib", "github-data.generated.json");
const TMP_OUTPUT = `${OUTPUT}.tmp`;

const USERNAME = "rabbive";
const REPO_LIMIT = 6;

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "portfolio-site-github-sync",
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API ${res.status} for ${url}: ${body}`);
  }

  return res.json();
}

async function main() {
  const profile = await fetchJson(`https://api.github.com/users/${USERNAME}`);
  const repos = await fetchJson(
    `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`,
  );

  const snapshot = mapGithubSnapshot({ profile, repos, repoLimit: REPO_LIMIT });
  const payload = `${JSON.stringify(snapshot, null, 2)}\n`;

  await fs.writeFile(TMP_OUTPUT, payload, "utf8");
  await fs.rename(TMP_OUTPUT, OUTPUT);

  console.log(`Wrote ${OUTPUT} with ${snapshot.projects.length} projects.`);
}

main().catch((err) => {
  console.error("GitHub sync failed:", err.message);
  process.exitCode = 1;
});
