#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";

import { crawlSources } from "./lib/crawler.mjs";
import { ensureRagDirs, getRagPaths } from "./lib/paths.mjs";
import { assertUniqueSources, parseGeoResearchCatalog } from "./lib/parser.mjs";

function parseArgs(argv) {
  const options = { concurrency: 3, delayMs: 250, refresh: false };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--limit") options.limit = Number(argv[++index]);
    if (arg === "--concurrency") options.concurrency = Number(argv[++index]);
    if (arg === "--delay-ms") options.delayMs = Number(argv[++index]);
    if (arg === "--ids") options.ids = argv[++index].split(",").map((id) => id.trim());
    if (arg === "--refresh") options.refresh = true;
  }

  return options;
}

function summarize(results) {
  const counts = {};
  for (const result of results) {
    counts[result.status] = (counts[result.status] || 0) + 1;
  }
  return counts;
}

const options = parseArgs(process.argv.slice(2));
const paths = getRagPaths();
await ensureRagDirs(paths);

const markdown = await readFile(paths.researchFile, "utf8");
const allSources = parseGeoResearchCatalog(markdown);
assertUniqueSources(allSources);

const selectedSources = options.ids
  ? allSources.filter((source) => options.ids.includes(source.id))
  : allSources;

await writeFile(paths.sourcesFile, JSON.stringify(allSources, null, 2), "utf8");

const results = await crawlSources(selectedSources, options);
const report = {
  generatedAt: new Date().toISOString(),
  totalSources: allSources.length,
  attemptedSources: results.length,
  counts: summarize(results),
  results,
};

await writeFile(paths.reportFile, JSON.stringify(report, null, 2), "utf8");

console.log(`Sources parsed: ${allSources.length}`);
console.log(`Sources attempted: ${results.length}`);
console.log(`Report: ${paths.reportFile}`);
console.log(`Text cache: ${paths.textDir}`);
console.log(`Status counts: ${JSON.stringify(report.counts)}`);
