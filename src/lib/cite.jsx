import React from 'react';

/*
 * Citation helper.
 *
 * Content strings carry inline source markers written as literal text:
 *   [Джерело 09]   [Источник 70, 74, 75]   [Source 9]   [06]
 * and source-list descriptions carry bare URLs (arxiv.org/abs/..., etc.).
 *
 * renderText() turns those markers into superscript links that jump to the
 * matching entry in the page's "Sources (E-E-A-T)" list (anchored via
 * sourceId()), and turns bare URLs into real external links.
 */

// [Джерело 09] | [Источник 70, 74, 75] | [Source 9] | [06] | [20, 30]
// ...or a bare URL (optionally without scheme): arxiv.org/abs/2405.00175
const TOKEN_RE =
  /(\[\s*(?:Джерело|Источник|Source)?\s*\d+(?:\s*,\s*\d+)*\s*\])|((?:https?:\/\/)?(?:[a-z0-9-]+\.)+[a-z]{2,}\/[^\s)\]]+)/gi;
const NUMS_RE = /\d+(?:\s*,\s*\d+)*/;

function scrollToSrc(e, id) {
  e.preventDefault(); // never push a dead #hash into the URL
  const el = document.getElementById(id);
  if (!el) return; // source list not on this page (e.g. home) — inert
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  el.classList.add('cite-flash');
  setTimeout(() => el.classList.remove('cite-flash'), 1200);
  if (window.history?.replaceState) window.history.replaceState(null, '', '#' + id);
}

/**
 * Convert a content string into React nodes with live citation + URL links.
 * Non-strings (already-rendered nodes) pass through unchanged.
 */
export function renderText(text) {
  if (typeof text !== 'string') return text;

  const out = [];
  let last = 0;
  let key = 0;
  let m;
  TOKEN_RE.lastIndex = 0;

  while ((m = TOKEN_RE.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));

    if (m[1]) {
      // Citation marker → superscript reference link(s)
      const nums = m[1].match(NUMS_RE)[0].split(',').map((s) => parseInt(s.trim(), 10));
      out.push(
        <sup className="cite-ref" key={`c${key++}`}>
          [
          {nums.map((n, i) => (
            <React.Fragment key={n}>
              {i > 0 ? ', ' : ''}
              <a href={`#src-${n}`} onClick={(e) => scrollToSrc(e, `src-${n}`)}>
                {n}
              </a>
            </React.Fragment>
          ))}
          ]
        </sup>
      );
    } else {
      // Bare URL → external link (keep trailing sentence punctuation outside)
      let url = m[2];
      let trail = '';
      while (/[.,;:]$/.test(url)) {
        trail = url.slice(-1) + trail;
        url = url.slice(0, -1);
      }
      const href = url.startsWith('http') ? url : `https://${url}`;
      out.push(
        <a
          key={`u${key++}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="cite-url"
        >
          {url}
        </a>
      );
      if (trail) out.push(trail);
    }

    last = m.index + m[0].length;
  }

  if (last < text.length) out.push(text.slice(last));
  return out.length ? out : text;
}

/**
 * For a source-list entry titled like "09 · Schulte, 2026" return the anchor
 * id ("src-9") that inline citations point to. Returns undefined for
 * non-source rows so it can be spread onto `id` safely.
 */
export function sourceId(title) {
  const mm = /^\s*(\d+)\s*·/.exec(typeof title === 'string' ? title : '');
  return mm ? `src-${parseInt(mm[1], 10)}` : undefined;
}
