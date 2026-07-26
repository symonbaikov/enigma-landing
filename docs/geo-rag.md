# GEO RAG CLI

Internal tooling for the research catalog in `docs/geo-research.md`.

The pipeline is local-first:

1. parse the 84 catalog links
2. crawl available HTML/PDF sources into `.rag-cache/geo-research`
3. extract readable text
4. chunk and index the corpus with MiniSearch
5. answer questions from retrieved chunks with citations
6. optionally use OpenRouter only for answer synthesis

Raw third-party text and PDFs stay in `.rag-cache/` and are intentionally ignored by Git.

## Commands

```bash
npm run rag:test
npm run rag:crawl
npm run rag:index
npm run rag:build
npm run rag:ask -- "What improves GEO visibility?"
```

Useful crawl options:

```bash
npm run rag:crawl -- --limit 5
npm run rag:crawl -- --ids S01,S24,S65
npm run rag:crawl -- --refresh
npm run rag:crawl -- --concurrency 2 --delay-ms 500
```

Graphify:

```bash
npm run graphify:build
npm run graphify:query -- "geo research"
```

## Outputs

Generated local files:

- `.rag-cache/geo-research/sources.json`
- `.rag-cache/geo-research/text/*.txt`
- `.rag-cache/geo-research/index.json`
- `.rag-cache/geo-research/report.json`
- `graphify-out/graph.json`

## OpenRouter

Retrieval is always local. OpenRouter is only used by `rag:ask` when both variables are set:

```bash
OPENROUTER_API_KEY=...
OPENROUTER_MODEL=openai/gpt-5.2
```

Optional headers:

```bash
OPENROUTER_HTTP_REFERER=https://enigma.com
OPENROUTER_APP_TITLE="Enigma GEO RAG CLI"
```

If OpenRouter is not configured, `rag:ask` returns an extractive answer from the matched chunks.

## Statuses

The crawler writes one status per source in `report.json`:

- `ok`: text was extracted or reused from cache
- `blocked`: the host blocked access, rate-limited, or timed out
- `paywalled`: the source returned a paywall/legal restriction status
- `pdf_unavailable`: PDF extraction failed or `pdftotext` is unavailable
- `parse_failed`: the source was reachable but readable text could not be extracted

Failed sources do not break the build. They stay visible in the report so the corpus can be improved later.
