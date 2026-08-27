import { isValidEmail, normalizeEmail } from '../../src/lib/email.js';

/*
 * Waitlist signups → a Resend audience.
 *
 * Until now the only record of a signup was a PostHog event property. PostHog
 * is analytics: the addresses sit inside events, expire with the project's
 * retention, and can only be got out as a CSV export. A waitlist that cannot
 * be mailed is not a waitlist.
 *
 * This runs at the edge so the Resend key never reaches the browser. The form
 * keeps sending its PostHog event too — that stays the record of intent, this
 * becomes the record of the person.
 *
 * Requires two Pages environment variables:
 *   RESEND_API_KEY      — a Resend key with contacts write access (encrypt it)
 *   RESEND_AUDIENCE_ID  — the audience to add people to
 * Missing either one answers 503 rather than pretending to have stored anything.
 */

const MAX_BODY = 1024;

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      // Nothing here is cacheable and none of it should be shared.
      'cache-control': 'no-store',
    },
  });
}

export async function onRequest(context) {
  const { request, env } = context;

  // A signup form is a POST. Anything else is a probe.
  if (request.method !== 'POST') return json(405, { error: 'method-not-allowed' });

  // Same-origin only. The endpoint writes to our audience, so a form on
  // someone else's page has no business calling it.
  const origin = request.headers.get('origin');
  if (origin && new URL(request.url).origin !== origin) {
    return json(403, { error: 'cross-origin' });
  }

  if (!env.RESEND_API_KEY || !env.RESEND_AUDIENCE_ID) {
    return json(503, { error: 'not-configured' });
  }

  let payload;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY) return json(413, { error: 'too-large' });
    payload = JSON.parse(raw);
  } catch {
    return json(400, { error: 'bad-json' });
  }

  const email = normalizeEmail(payload?.email);
  if (!isValidEmail(email)) return json(400, { error: 'bad-email' });

  const res = await fetch(
    `https://api.resend.com/audiences/${env.RESEND_AUDIENCE_ID}/contacts`,
    {
      method: 'POST',
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    },
  );

  if (!res.ok) {
    // Never echo Resend's response to the browser: it can carry account
    // details, and the visitor can do nothing with them either way.
    console.error('resend contacts failed', res.status, await res.text());
    return json(502, { error: 'upstream' });
  }

  return json(200, { ok: true });
}
