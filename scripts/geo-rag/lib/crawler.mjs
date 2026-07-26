import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { basename, resolve } from "node:path";
import { promisify } from "node:util";

import { Readability } from "@mozilla/readability";
import { JSDOM } from "jsdom";

import { ensureRagDirs, getRagPaths } from "./paths.mjs";

const execFileAsync = promisify(execFile);
const USER_AGENT =
  "EnigmaGeoRag/0.1 (+https://enigma.com; internal research cache; contact: research@enigma.com)";

function safeFileStem(source) {
  const hash = createHash("sha1").update(source.url).digest("hex").slice(0, 10);
  return `${source.id}-${hash}`;
}

function cleanText(text) {
  return String(text || "")
    .replace(/\u0000/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

function classifyHttpStatus(status, url) {
  if (status === 401 || status === 403 || status === 429) return "blocked";
  if (status === 402 || status === 451) return "paywalled";
  if ((status === 404 || status === 410) && /\.pdf($|[?#])/i.test(url)) return "pdf_unavailable";
  return "parse_failed";
}

function extractHtmlText(html, url) {
  const dom = new JSDOM(html, { url });
  const article = new Readability(dom.window.document).parse();
  const title = article?.title || dom.window.document.querySelector("title")?.textContent || "";
  const content = article?.textContent || dom.window.document.body?.textContent || "";

  return cleanText([title, content].filter(Boolean).join("\n\n"));
}

async function extractPdfText(buffer, source, paths) {
  const stem = safeFileStem(source);
  const pdfPath = resolve(paths.rawDir, `${stem}.pdf`);
  const textPath = resolve(paths.textDir, `${source.id}.txt`);

  await writeFile(pdfPath, Buffer.from(buffer));

  if (!existsSync("/usr/bin/pdftotext") && !existsSync("/bin/pdftotext")) {
    return { status: "pdf_unavailable", text: "", note: "pdftotext is not installed" };
  }

  try {
    await execFileAsync("pdftotext", ["-layout", pdfPath, textPath], { timeout: 60_000 });
    const text = cleanText(await readFile(textPath, "utf8"));
    return text
      ? { status: "ok", text, note: "pdf extracted with pdftotext" }
      : { status: "parse_failed", text: "", note: "pdftotext produced empty text" };
  } catch (error) {
    return { status: "pdf_unavailable", text: "", note: error.message };
  }
}

async function fetchSource(source, paths, options = {}) {
  const textPath = resolve(paths.textDir, `${source.id}.txt`);
  if (!options.refresh && existsSync(textPath)) {
    const cached = cleanText(await readFile(textPath, "utf8"));
    if (cached) {
      return { sourceId: source.id, status: "ok", cached: true, bytes: cached.length, note: "cached" };
    }
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), options.timeoutMs ?? 45_000);

  try {
    const response = await fetch(source.url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": USER_AGENT,
        accept: "text/html,application/pdf,application/xhtml+xml,text/plain;q=0.9,*/*;q=0.5",
      },
    });

    if (!response.ok) {
      return {
        sourceId: source.id,
        status: classifyHttpStatus(response.status, source.url),
        httpStatus: response.status,
        cached: false,
        note: response.statusText,
      };
    }

    const contentType = response.headers.get("content-type") || "";
    const isPdf = contentType.includes("application/pdf") || /\.pdf($|[?#])/i.test(source.url);
    let text = "";
    let status = "ok";
    let note = "";

    if (isPdf) {
      const pdfResult = await extractPdfText(await response.arrayBuffer(), source, paths);
      text = pdfResult.text;
      status = pdfResult.status;
      note = pdfResult.note;
    } else {
      text = extractHtmlText(await response.text(), response.url || source.url);
      if (!text) {
        status = "parse_failed";
        note = "HTML extraction produced empty text";
      }
    }

    if (text) {
      const header = [
        `Title: ${source.title}`,
        `Source: ${source.url}`,
        `Source ID: ${source.id}`,
        "",
      ].join("\n");
      await writeFile(textPath, `${header}${text}\n`, "utf8");
    }

    return {
      sourceId: source.id,
      status,
      httpStatus: response.status,
      cached: false,
      bytes: text.length,
      finalUrl: response.url,
      contentType,
      note,
    };
  } catch (error) {
    return {
      sourceId: source.id,
      status: error.name === "AbortError" ? "blocked" : "parse_failed",
      cached: false,
      note: error.message,
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function runWorkers(items, worker, options = {}) {
  const concurrency = Math.max(1, options.concurrency ?? 3);
  const delayMs = Math.max(0, options.delayMs ?? 250);
  const results = [];
  let cursor = 0;

  async function next() {
    while (cursor < items.length) {
      const item = items[cursor];
      cursor += 1;
      const result = await worker(item);
      results.push(result);
      if (delayMs) await new Promise((resolveDelay) => setTimeout(resolveDelay, delayMs));
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, next));
  return results;
}

export async function crawlSources(sources, options = {}) {
  const paths = getRagPaths(options.cacheRoot);
  await ensureRagDirs(paths);

  const selectedSources = options.limit ? sources.slice(0, options.limit) : sources;
  const results = await runWorkers(
    selectedSources,
    (source) => fetchSource(source, paths, options),
    options,
  );

  return results.sort((a, b) => a.sourceId.localeCompare(b.sourceId));
}

export function textFileNameForSource(sourceId) {
  return `${basename(sourceId)}.txt`;
}
