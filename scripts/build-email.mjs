/*
 * Renders the launch email to HTML, one file per locale.
 *
 *   npm run email
 *
 * Output lands in emails/out/. Paste a file into a Resend broadcast (code
 * view) or pass it as the `html` field of the API call. A plain-text twin is
 * written alongside it: some clients show it, and spam filters look for it.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import * as esbuild from 'esbuild';
import { render } from '@react-email/render';
import React from 'react';

/* Node cannot import JSX, so the template is transpiled first. esbuild already
   ships with Vite; dependencies stay external and are resolved at run time. */
const bundle = new URL('../node_modules/.cache/email/launch.mjs', import.meta.url);
await esbuild.build({
  entryPoints: [new URL('../emails/launch.jsx', import.meta.url).pathname],
  outfile: bundle.pathname,
  bundle: true,
  format: 'esm',
  platform: 'node',
  jsx: 'automatic',
  packages: 'external',
  logLevel: 'error',
});
const { default: LaunchEmail } = await import(bundle);

const LOCALES = ['en', 'uk', 'ru'];
const outDir = new URL('../emails/out/', import.meta.url);
mkdirSync(outDir, { recursive: true });

for (const lang of LOCALES) {
  const element = React.createElement(LaunchEmail, { lang });
  const html = await render(element, { pretty: true });
  const text = await render(element, { plainText: true });
  writeFileSync(new URL(`launch-${lang}.html`, outDir), html);
  writeFileSync(new URL(`launch-${lang}.txt`, outDir), text);
  console.log(`emails/out/launch-${lang}.html  ${(html.length / 1024).toFixed(1)} KB`);
}
