#!/usr/bin/env node

import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";

import { answerFromIndex, buildSearchIndex } from "./lib/indexer.mjs";
import { answerWithOpenRouter } from "./lib/openrouter.mjs";
import { getRagPaths } from "./lib/paths.mjs";

function printUsage() {
  console.error('Usage: npm run rag:ask -- "How should we improve GEO visibility?"');
}

const question = process.argv.slice(2).join(" ").trim();
if (!question) {
  printUsage();
  process.exit(1);
}

const paths = getRagPaths();
if (!existsSync(paths.indexFile)) {
  console.error(`Missing index: ${paths.indexFile}`);
  console.error("Run npm run rag:build first.");
  process.exit(1);
}

const indexFile = JSON.parse(await readFile(paths.indexFile, "utf8"));
const index = buildSearchIndex(indexFile.chunks || []);
const retrievalAnswer = answerFromIndex(index, question, { topK: 6 });

let answerText = retrievalAnswer.answer;
let generationWarning = "";

if (retrievalAnswer.sources.length && process.env.OPENROUTER_API_KEY && process.env.OPENROUTER_MODEL) {
  try {
    answerText = (await answerWithOpenRouter(question, retrievalAnswer)) || answerText;
  } catch (error) {
    generationWarning = `OpenRouter generation failed, using extractive answer: ${error.message}`;
  }
}

if (retrievalAnswer.warning) console.log(`Warning: ${retrievalAnswer.warning}\n`);
if (generationWarning) console.log(`Warning: ${generationWarning}\n`);

console.log(answerText || "No grounded answer could be generated.");

console.log("\nSources:");
if (!retrievalAnswer.sources.length) {
  console.log("- none");
} else {
  for (const source of retrievalAnswer.sources) {
    console.log(`- ${source.sourceId} ${source.title} (${source.chunkId})`);
    console.log(`  ${source.url}`);
  }
}
