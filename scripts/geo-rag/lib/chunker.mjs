function normalizeText(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .trim();
}

export function chunkDocuments(documents, options = {}) {
  const maxWords = options.maxWords ?? 180;
  const overlapWords = Math.min(options.overlapWords ?? 30, Math.max(0, maxWords - 1));
  const chunks = [];

  for (const document of documents) {
    const text = normalizeText(document.text);
    if (!text) continue;

    const words = text.split(" ");
    let cursor = 0;
    let chunkNumber = 1;

    while (cursor < words.length) {
      const slice = words.slice(cursor, cursor + maxWords);
      const chunkText = slice.join(" ").trim();
      if (chunkText) {
        chunks.push({
          chunkId: `${document.sourceId}#${String(chunkNumber).padStart(3, "0")}`,
          sourceId: document.sourceId,
          title: document.title,
          url: document.url,
          text: chunkText,
          wordCount: slice.length,
        });
      }

      if (cursor + maxWords >= words.length) break;
      cursor += maxWords - overlapWords;
      chunkNumber += 1;
    }
  }

  return chunks;
}
