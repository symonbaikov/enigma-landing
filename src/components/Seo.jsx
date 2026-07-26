import { useEffect } from 'react';
import {
  absoluteUrl,
  buildJsonLdGraph,
  truncate,
} from '../lib/seo.js';

function upsertMeta(selector, attrs) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement('meta');
    document.head.appendChild(node);
  }
  Object.entries(attrs).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    node.setAttribute(key, value);
  });
}

function upsertLink(rel, href) {
  let node = document.head.querySelector(`link[rel="${rel}"]`);
  if (!node) {
    node = document.createElement('link');
    node.setAttribute('rel', rel);
    document.head.appendChild(node);
  }
  node.setAttribute('href', href);
}

export default function Seo({
  title,
  description,
  path = '/',
  lang = 'uk',
  robots = 'index,follow',
  image = '/logo.png',
  schema = [],
}) {
  const pageTitle = title ? `${title} | Enigma` : 'Enigma - AI search visibility platform';
  const pageDescription = truncate(description);
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.title = pageTitle;
    upsertMeta('meta[name="description"]', { name: 'description', content: pageDescription });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: robots });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Enigma' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: pageTitle });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: pageDescription });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: pageTitle });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: pageDescription });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl });
    upsertLink('canonical', url);
  }, [imageUrl, lang, pageDescription, pageTitle, robots, url]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLdGraph(schema)) }}
    />
  );
}
