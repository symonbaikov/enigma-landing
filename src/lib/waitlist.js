/*
 * Sends a signup to our own edge function, which stores it in the Resend
 * audience (see functions/api/waitlist.js).
 *
 * Never throws and never blocks the UI. The visitor has already been told they
 * are on the list, and taking that back because a network call failed would be
 * both rude and pointless — the PostHog event still records the signup, so a
 * failure here costs us a mailable address, not the knowledge that someone
 * wanted in.
 */
export function joinWaitlist(email) {
  try {
    return fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email }),
      keepalive: true, // survives the visitor navigating away right after
    }).catch(() => {});
  } catch {
    return Promise.resolve();
  }
}
