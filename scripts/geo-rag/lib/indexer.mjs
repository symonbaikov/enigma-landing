import MiniSearch from "minisearch";

const SEARCH_OPTIONS = {
  fields: ["title", "text"],
  storeFields: ["chunkId", "sourceId", "title", "url", "text", "wordCount"],
  searchOptions: {
    boost: { title: 2, text: 1 },
    prefix: true,
    fuzzy: 0.15,
  },
};

function queryTerms(query) {
  return new Set(
    expandDomainQuery(query)
      .toLowerCase()
      .split(/[^\p{L}\p{N}]+/u)
      .filter((term) => term.length > 2),
  );
}

function expandDomainQuery(query) {
  return String(query || "")
    .replace(/\bgeo\b/gi, "geo generative engine optimization visibility")
    .replace(/\brag\b/gi, "rag retrieval augmented generation")
    .replace(/\baeo\b/gi, "aeo answer engine optimization")
    .replace(/\bcite\b/gi, "cite citation citations source sources");
}

function chunkOverlapScore(query, chunk) {
  const terms = queryTerms(query);
  if (terms.size === 0) return 0;

  const haystack = `${chunk.title} ${chunk.text}`.toLowerCase();
  let matches = 0;
  for (const term of terms) {
    if (haystack.includes(term)) matches += 1;
  }

  return matches / terms.size;
}

export function buildSearchIndex(chunks) {
  const miniSearch = new MiniSearch(SEARCH_OPTIONS);
  const normalizedChunks = chunks.map((chunk) => ({
    id: chunk.chunkId,
    ...chunk,
  }));

  miniSearch.addAll(normalizedChunks);

  return {
    miniSearch,
    chunks: normalizedChunks,
    chunksById: new Map(normalizedChunks.map((chunk) => [chunk.chunkId, chunk])),
  };
}

export function answerFromIndex(index, query, options = {}) {
  const topK = options.topK ?? 6;
  const minOverlap = options.minOverlap ?? 0.12;
  const expandedQuery = expandDomainQuery(query);
  const rawResults = index.miniSearch.search(expandedQuery, SEARCH_OPTIONS.searchOptions);
  const selected = [];
  const seenSources = new Set();

  for (const result of rawResults) {
    const chunk = index.chunksById.get(result.id);
    if (!chunk) continue;

    const overlapScore = chunkOverlapScore(expandedQuery, chunk);
    if (overlapScore < minOverlap) continue;

    selected.push({ ...chunk, score: result.score, overlapScore });
    seenSources.add(chunk.sourceId);
    if (selected.length >= topK) break;
  }

  if (selected.length === 0) {
    return {
      answer: "",
      warning: "Weak or missing evidence: no indexed source chunk matched the question.",
      sources: [],
      chunks: [],
    };
  }

  const uniqueSources = [];
  const emitted = new Set();

  for (const chunk of selected) {
    if (emitted.has(chunk.sourceId)) continue;
    emitted.add(chunk.sourceId);
    uniqueSources.push({
      sourceId: chunk.sourceId,
      title: chunk.title,
      url: chunk.url,
      chunkId: chunk.chunkId,
      score: Number(chunk.score.toFixed(3)),
    });
  }

  return {
    answer: selected.map((chunk) => `[${chunk.chunkId}] ${chunk.text}`).join("\n\n"),
    warning: seenSources.size < 2 ? "Weak evidence: answer is grounded in fewer than two sources." : null,
    sources: uniqueSources,
    chunks: selected,
  };
}
