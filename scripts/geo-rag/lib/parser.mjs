const SOURCE_HEADING_RE = /^##\s+(\d+)\.\s+(.+?)\s*$/;
const CATEGORY_HEADING_RE = /^#\s+(.+?)\s*$/;
const MARKDOWN_URL_RE = /\]\((https?:\/\/[^)\s]+)\)/;

function stripField(line, label) {
  const prefix = `**${label}:**`;
  if (!line.startsWith(prefix)) return "";
  return line.slice(prefix.length).trim();
}

function parseMetaLine(line) {
  const clean = line.replaceAll("**", "");
  const pairs = clean.split(/\s+\|\s+/).map((part) => part.trim());
  const meta = {};

  for (const pair of pairs) {
    const [rawKey, ...rest] = pair.split(":");
    if (!rawKey || rest.length === 0) continue;
    const key = rawKey.trim().toLowerCase();
    const value = rest.join(":").trim();
    if (key.includes("авторы")) meta.authors = value;
    if (key.includes("год")) meta.year = value;
    if (key.includes("площадка")) meta.venue = value;
    if (key.includes("тип")) meta.type = value;
  }

  return meta;
}

export function parseGeoResearchCatalog(markdown) {
  const lines = markdown.split(/\r?\n/);
  const sources = [];
  let category = "";
  let current = null;

  lines.forEach((line, index) => {
    const lineNumber = index + 1;
    const categoryMatch = line.match(CATEGORY_HEADING_RE);
    const sourceMatch = line.match(SOURCE_HEADING_RE);

    if (categoryMatch && !sourceMatch) {
      category = categoryMatch[1].trim();
      return;
    }

    if (sourceMatch) {
      const number = Number(sourceMatch[1]);
      current = {
        id: `S${String(number).padStart(2, "0")}`,
        number,
        title: sourceMatch[2].trim(),
        category,
        headingLine: lineNumber,
        sourceLine: null,
        url: "",
        authors: "",
        year: "",
        venue: "",
        type: "",
        description: "",
        geoValue: "",
      };
      sources.push(current);
      return;
    }

    if (!current) return;

    if (line.startsWith("**Авторы/организация:**")) {
      Object.assign(current, parseMetaLine(line));
      return;
    }

    const urlMatch = line.match(MARKDOWN_URL_RE);
    if (urlMatch && !current.url) {
      current.url = urlMatch[1];
      current.sourceLine = lineNumber;
      return;
    }

    const description = stripField(line, "Краткое описание");
    if (description) {
      current.description = description;
      return;
    }

    const geoValue = stripField(line, "Ценность для GEO/AEO");
    if (geoValue) current.geoValue = geoValue;
  });

  return sources.filter((source) => source.url);
}

export function assertUniqueSources(sources) {
  const ids = new Set();
  const urls = new Set();

  for (const source of sources) {
    if (ids.has(source.id)) throw new Error(`Duplicate source id: ${source.id}`);
    if (urls.has(source.url)) throw new Error(`Duplicate source URL: ${source.url}`);
    ids.add(source.id);
    urls.add(source.url);
  }
}
