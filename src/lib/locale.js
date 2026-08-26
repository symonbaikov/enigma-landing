/*
 * URL-based locales.
 *
 * English is the default and lives at the bare path (`/pricing`); the other
 * languages live under a prefix (`/uk/pricing`, `/ru/pricing`). A prefix per
 * language is what makes the translations indexable at all — with the old
 * in-memory switch every language shared one URL, so search and AI crawlers
 * could only ever see one of them.
 *
 * The prefix is read once from the address bar and never changes for the life
 * of the document: switching language is a real navigation, not a state
 * update. That keeps `<html lang>`, canonical, hreflang and analytics from
 * ever disagreeing with the URL.
 */

export const DEFAULT_LOCALE = 'en';
export const LOCALES = ['en', 'uk', 'ru'];

/** Native names, used by the language menu. */
export const LOCALE_NAMES = {
  en: 'English',
  uk: 'Українська',
  ru: 'Русский',
};

/** Language subtag of a possibly regional tag: "uk-UA" → "uk". */
export function primary(lang) {
  return String(lang || '').toLowerCase().split('-')[0];
}

function fromPathname(pathname) {
  const seg = String(pathname || '/').split('/')[1];
  // `en` is never a prefix — /en/pricing would be a duplicate of /pricing.
  return LOCALES.includes(seg) && seg !== DEFAULT_LOCALE ? seg : DEFAULT_LOCALE;
}

/** Locale of the document being rendered. Constant per page load. */
export const currentLocale =
  typeof window === 'undefined' ? DEFAULT_LOCALE : fromPathname(window.location.pathname);

/** Router basename, so every in-app <Link to="/pricing"> stays locale-correct. */
export const basename = currentLocale === DEFAULT_LOCALE ? '/' : `/${currentLocale}`;

/** Locale-agnostic path → path for `lang`. localePath('/pricing', 'uk') → '/uk/pricing' */
export function localePath(path = '/', lang = currentLocale) {
  const clean = String(path || '/').startsWith('/') ? path : `/${path}`;
  if (primary(lang) === DEFAULT_LOCALE) return clean;
  return clean === '/' ? `/${primary(lang)}` : `/${primary(lang)}${clean}`;
}

/**
 * Languages a corpus actually has text for, in LOCALES order.
 *
 * Long-form content is translated per language, so a language that only gets
 * a fallback must not be advertised in hreflang or the sitemap: telling search
 * engines that a Ukrainian article is the English version is worse than having
 * no English version at all.
 */
export function localesWith(byLang = {}) {
  return LOCALES.filter((lang) => byLang[lang]?.length);
}
