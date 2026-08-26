import posthog from 'posthog-js';

/**
 * Click tracking for the pre-launch landing.
 *
 * The point of this file is one question: do people actually want the product?
 * Every CTA records the click itself, separately from whatever the visitor does
 * next, so an unconverted click is still a signal rather than a lost one.
 *
 * Nothing is sent unless VITE_POSTHOG_KEY is set, which keeps local development
 * and preview builds out of the production numbers.
 */

const KEY = import.meta.env.VITE_POSTHOG_KEY;
// Default to the EU cloud: the audience is EU/UA and the waitlist stores an
// email address, so the data should not leave the region by accident.
const HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com';

let ready = false;

export function initAnalytics() {
  if (ready || !KEY) return;
  posthog.init(KEY, {
    api_host: HOST,
    person_profiles: 'identified_only',
    capture_pageview: true,
    capture_pageleave: true,
  });
  ready = true;
}

/**
 * `where` identifies the button, not the page — the same CTA appears in several
 * places, and knowing which one earns clicks is the entire experiment.
 */
export function track(event, props = {}) {
  // Attach the page automatically: the same CTA lives on many routes, and
  // without this a generic source like "demo" cannot be told apart.
  const payload = {
    ...props,
    path: typeof window === 'undefined' ? null : window.location.pathname,
  };
  if (!ready) {
    if (import.meta.env.DEV) console.info('[analytics]', event, payload);
    return;
  }
  posthog.capture(event, payload);
}

export const EVENTS = {
  /** A visitor pressed a CTA. Fires before anything is shown in response. */
  ctaClicked: 'cta_clicked',
  /** A visitor left an email on the waitlist. */
  waitlistSubmitted: 'waitlist_submitted',
};

export default posthog;
