import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { chunkDocuments } from "./lib/chunker.mjs";
import { buildSearchIndex, answerFromIndex } from "./lib/indexer.mjs";
import { parseGeoResearchCatalog } from "./lib/parser.mjs";

test("parser extracts all 84 geo research sources with stable metadata", async () => {
  const markdown = await readFile(new URL("../../docs/geo-research.md", import.meta.url), "utf8");

  const sources = parseGeoResearchCatalog(markdown);
  const urls = new Set(sources.map((source) => source.url));

  assert.equal(sources.length, 84);
  assert.equal(urls.size, 84);
  assert.deepEqual(
    {
      id: sources[0].id,
      number: sources[0].number,
      title: sources[0].title,
      url: sources[0].url,
      category: sources[0].category,
      sourceLine: sources[0].sourceLine,
    },
    {
      id: "S01",
      number: 1,
      title: "GEO: Generative Engine Optimization",
      url: "https://arxiv.org/abs/2311.09735",
      category: "Прямые GEO/AEO и AI-search visibility",
      sourceLine: 36,
    },
  );
});

test("local index returns cited chunks for GEO and RAG questions", () => {
  const documents = [
    {
      sourceId: "S01",
      title: "GEO: Generative Engine Optimization",
      url: "https://arxiv.org/abs/2311.09735",
      text:
        "Generative Engine Optimization improves visibility in generative engine responses. " +
        "The GEO benchmark evaluates citations, source visibility, and content optimization.",
    },
    {
      sourceId: "S24",
      title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
      url: "https://arxiv.org/abs/2005.11401",
      text:
        "Retrieval augmented generation combines parametric memory with non-parametric memory. " +
        "A retriever selects passages and the generator produces grounded answers with provenance.",
    },
  ];

  const chunks = chunkDocuments(documents, { maxWords: 18, overlapWords: 4 });
  const index = buildSearchIndex(chunks);
  const answer = answerFromIndex(index, "How should a GEO RAG system cite sources?", { topK: 3 });

  assert.equal(answer.warning, null);
  assert.ok(answer.answer.includes("Generative Engine Optimization"));
  assert.ok(answer.answer.includes("Retrieval augmented generation"));
  assert.equal(answer.sources.length, 2);
  assert.deepEqual(
    answer.sources.map((source) => source.sourceId).sort(),
    ["S01", "S24"],
  );
  assert.ok(answer.sources.every((source) => source.chunkId && source.url));
});

test("local index reports weak evidence instead of inventing an answer", () => {
  const chunks = chunkDocuments([
    {
      sourceId: "S01",
      title: "GEO",
      url: "https://example.com/geo",
      text: "Visibility and citations are measurable GEO signals.",
    },
  ]);
  const index = buildSearchIndex(chunks);
  const answer = answerFromIndex(index, "quantum biology wet lab protocol", { topK: 3 });

  assert.equal(answer.answer, "");
  assert.match(answer.warning, /weak or missing evidence/i);
  assert.equal(answer.sources.length, 0);
});
