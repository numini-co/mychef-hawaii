#!/usr/bin/env node
/** Count authored + longform words for every content record via Vite SSR. */
import { createServer } from 'vite';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

const { renderedWordCount } = await vite.ssrLoadModule('/src/platform/longform/expand.ts');
const sites = {
  hub: (await vite.ssrLoadModule('/src/sites/hub/content.ts')).content,
  oahu: (await vite.ssrLoadModule('/src/sites/oahu/content.ts')).content,
  maui: (await vite.ssrLoadModule('/src/sites/maui/content.ts')).content,
  kauai: (await vite.ssrLoadModule('/src/sites/kauai/content.ts')).content,
  bigisland: (await vite.ssrLoadModule('/src/sites/bigisland/content.ts')).content,
};

const TARGET = 1000;
const CAP = 1500;
let total = 0;
let below = 0;
let above = 0;
const thin = [];

for (const [siteId, recs] of Object.entries(sites)) {
  const counts = recs.map((r) => ({ slug: r.slug || '(home)', n: renderedWordCount(r, siteId) }));
  const avg = Math.round(counts.reduce((a, c) => a + c.n, 0) / counts.length);
  const lo = counts.filter((c) => c.n < TARGET);
  const hi = counts.filter((c) => c.n > CAP + 250);
  below += lo.length;
  above += hi.length;
  total += counts.length;
  thin.push(...lo.map((c) => `${siteId}/${c.slug} ${c.n}`));
  const min = Math.min(...counts.map((c) => c.n));
  const max = Math.max(...counts.map((c) => c.n));
  console.log(`${siteId.padEnd(10)} ${String(recs.length).padStart(3)} pages  avg ${avg}  min ${min}  max ${max}  <${TARGET}: ${lo.length}`);
}

console.log(`\nnetwork ${total}  below ${TARGET}: ${below}  very long (>${CAP + 250}): ${above}`);
if (thin.length) {
  console.log('\nthin pages:');
  thin.slice(0, 40).forEach((t) => console.log(' ', t));
}

await vite.close();
process.exit(below ? 1 : 0);
