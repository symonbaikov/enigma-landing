import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const libDir = dirname(fileURLToPath(import.meta.url));

export const repoRoot = resolve(libDir, "../../..");
export const defaultCacheRoot = resolve(
  repoRoot,
  process.env.GEO_RAG_CACHE_DIR || ".rag-cache/geo-research",
);

export function getRagPaths(cacheRoot = defaultCacheRoot) {
  const root = resolve(repoRoot, cacheRoot);

  return {
    root,
    rawDir: resolve(root, "raw"),
    textDir: resolve(root, "text"),
    sourcesFile: resolve(root, "sources.json"),
    reportFile: resolve(root, "report.json"),
    indexFile: resolve(root, "index.json"),
    researchFile: resolve(repoRoot, "docs/geo-research.md"),
  };
}

export async function ensureRagDirs(paths = getRagPaths()) {
  await mkdir(paths.root, { recursive: true });
  await mkdir(paths.rawDir, { recursive: true });
  await mkdir(paths.textDir, { recursive: true });
}
