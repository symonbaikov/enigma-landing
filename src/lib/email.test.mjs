import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { isValidEmail, normalizeEmail } from './email.js';

test('accepts the addresses people actually have', () => {
  for (const email of [
    'a@b.co',
    'symon+waitlist@enigmavisibility.com',
    "o'brien@example.io",
    'user.name@sub.domain.co.uk',
    'ivan@почта.рф',
  ]) {
    assert.ok(isValidEmail(email), `rejected a valid address: ${email}`);
  }
});

test('rejects what a typing accident produces', () => {
  for (const email of ['', '   ', 'plainstring', 'no@dot', '@example.com', 'two@@at.com',
    'spaces in@example.com', 'a@b.c,d@e.f', `${'x'.repeat(250)}@example.com`]) {
    assert.equal(isValidEmail(email), false, `accepted junk: ${JSON.stringify(email)}`);
  }
});

test('normalizes for storage without altering the address', () => {
  assert.equal(normalizeEmail('  Symon@Enigma.COM '), 'symon@enigma.com');
  // Plus-tags and dots are meaningful to some providers; never strip them.
  assert.equal(normalizeEmail('a.b+tag@gmail.com'), 'a.b+tag@gmail.com');
});

test('the launch email keeps its promise and its unsubscribe link', () => {
  // The signup form promises one launch email and no newsletter. If that
  // sentence or the unsubscribe token ever gets edited out of the artifact,
  // we are sending marketing mail without either.
  for (const lang of ['en', 'uk', 'ru']) {
    const html = readFileSync(new URL(`../../emails/out/launch-${lang}.html`, import.meta.url), 'utf8');
    assert.match(html, /\{\{\{RESEND_UNSUBSCRIBE_URL\}\}\}/, `${lang}: no unsubscribe token`);
    assert.match(html, /enigmavisibility\.com/, `${lang}: no link back to the site`);
    assert.ok(!html.includes('undefined'), `${lang}: unrendered value in the output`);
  }
});
