/*
 * Email address checking, shared by the browser form and the edge function.
 *
 * Deliberately loose: the only authority on whether an address exists is the
 * mail server that accepts it. A strict pattern rejects valid addresses —
 * plus-tags, new TLDs, apostrophes — and every one of those is a lost signup.
 * This catches typing accidents and obvious junk, nothing more.
 */

const SHAPE = /^[^\s@,;]+@[^\s@,;.]+(\.[^\s@,;.]+)+$/;

export function isValidEmail(value) {
  const email = String(value ?? '').trim();
  if (email.length < 6 || email.length > 254) return false;
  return SHAPE.test(email);
}

/** Normalized for storage: trimmed and lowercased, never altered further. */
export function normalizeEmail(value) {
  return String(value ?? '').trim().toLowerCase();
}
