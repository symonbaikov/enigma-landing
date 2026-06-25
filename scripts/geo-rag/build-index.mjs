#!/usr/bin/env node

import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

import { chunkDocuments } from "./lib/chunker.mjs";
import { buildSearchIndex } from "./lib/indexer.mjs";
import { ensureRagDirs, getRagPaths } from "./lib/paths.mjs";
import { parseGeoResearchCatalog } from "./lib/parser.mjs";

function parseArgs(argv) {
  const options = { maxWords: 180, overlapWords: 30 };
  for (let index = 0; index < argv.length; index += 1) {
    if (argv[index] === "--max-words") options.maxWords = Number(argv[++index]);
    if (argv[index] === "--overlap-words") options.overlapWords = Number(argv[++index]);
  }
  return options;
}

async function loadSources(paths) {
  if (existsSync(paths.sourcesFile)) {
    return JSON.parse(await readFile(paths.sourcesFile, "utf8"));
  }

  return parseGeoResearchCatalog(await readFile(paths.researchFile, "utf8"));
}

const options = parseArgs(process.argv.slice(2));
const paths = getRagPaths();
await ensureRagDirs(paths);

const sources = await loadSources(paths);
const documents = [];
const missing = [];

for (const source of sources) {
  const textPath = resolve(paths.textDir, `${source.id}.txt`);
  if (!existsSync(textPath)) {
    missing.push(source.id);
    continue;
  }

  const text = await readFile(textPath, "utf8");
  if (!text.trim()) {
    missing.push(source.id);
    continue;
  }

  documents.push({
    sourceId: source.id,
    title: source.title,
    url: source.url,
    text,
  });
}

const chunks = chunkDocuments(documents, options);
const index = buildSearchIndex(chunks);
const output = {
  generatedAt: new Date().toISOString(),
  sourceCount: sources.length,
  indexedSourceCount: documents.length,
  missingSourceIds: missing,
  chunkCount: chunks.length,
  chunks: index.chunks,
};

await writeFile(paths.indexFile, JSON.stringify(output, null, 2), "utf8");

console.log(`Indexed sources: ${documents.length}/${sources.length}`);
console.log(`Chunks: ${chunks.length}`);
console.log(`Index: ${paths.indexFile}`);
if (missing.length) console.log(`Missing text for: ${missing.join(", ")}`);
