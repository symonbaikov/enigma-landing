# Deploying to Cloudflare Pages

Static Vite build. Nothing here talks to the Enigma platform — while the product
is pre-launch every CTA records the click and offers the waitlist instead.

## 1. PostHog project

Create a project at posthog.com and copy the **Project API key** (starts with
`phc_`). Pick the **EU** region: the waitlist stores an email address, and the
audience is EU/UA.

Nothing is sent while the key is unset, so local development and preview builds
stay out of the numbers.

## 2. Connect the repo

Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git →
`symonbaikov/enigma-landing`.

| Setting | Value |
|---|---|
| Framework preset | None (or Vite) |
| Build command | `npm run build` |
| Output directory | `dist` |

Git-connected beats `wrangler pages deploy`: every push to `master` redeploys,
and no API token has to live on a developer machine.

## 3. Environment variables

Add these under Settings → Environment variables, for **Production** and
**Preview**:

```
VITE_POSTHOG_KEY=phc_...
VITE_POSTHOG_HOST=https://eu.i.posthog.com
```

**Vite inlines `VITE_*` at build time.** Changing either value requires a
redeploy — editing them without rebuilding changes nothing.

## 4. SPA routing

`public/_redirects` sends every path to `index.html` so a direct hit on
`/pricing` is handled by react-router instead of returning 404. It is already in
the repo; just do not delete it.

## What gets measured

Two events, deliberately separate — a click counts even when no email follows,
which is the whole point of measuring before launch.

| Event | Fires when | Properties |
|---|---|---|
| `cta_clicked` | any CTA is pressed, before anything is shown | `source`, `plan`, `path` |
| `waitlist_submitted` | an email is left | `source`, `plan`, `path`, `email`, `url` |

`source` values: `hero_audit`, `pricing_plan`, `pricing_final_cta`,
`pricing_demo`, `home_cta_demo`, `home_cta_audit`, `nav_signin`, `nav_trial`,
`nav_demo`, `nav_trial_mobile`, `nav_demo_mobile`, `demo` (the generic
"book a demo" button on product/blog/resource/solution pages — `path` tells them
apart).

The hero form also records `url`: the site a visitor wanted audited is as much a
demand signal as their address.

The funnel worth watching is `cta_clicked` → `waitlist_submitted`, split by
`source`. It answers which promise people actually respond to.

## Going live later

`src/lib/demo.js` still holds the real platform call. Restore it in
`src/components/DemoButton.jsx`, and put the `/api/audits/free` fetch back in
`src/components/Hero.jsx`, once the platform is public.
