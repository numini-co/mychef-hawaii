#!/usr/bin/env node
/**
 * Sitemap <lastmod> manifest.
 *
 * Fetches every sitemap URL from a running production build (next start),
 * hashes the page's <main> content + title + meta description + canonical,
 * and records a lastmod date only when that hash changes. Google uses
 * <lastmod> only when it is consistently accurate, so pages are never
 * re-stamped on a deploy that did not change their content.
 *
 * Usage (after `npx next build`):
 *   npx next start -p 3100 &
 *   node scripts/update-lastmod.mjs --base http://localhost:3100 [--date 2026-10-07T01:30:00Z]
 *   npm run sitemap:write   # re-emit public/_sitemaps with the new dates
 *
 * Flags:
 *   --base      origin of the running build (required)
 *   --date      ISO timestamp to stamp on changed pages (default: now, UTC)
 *   --manifest  manifest path (default: data/sitemap-lastmod.json)
 *   --no-stamp  record hashes only (used once to seed the baseline)
 */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? undefined : args[i + 1];
};
const base = flag('base');
if (!base) {
  console.error('missing --base http://localhost:PORT');
  process.exit(1);
}
const stamp = args.includes('--no-stamp') ? null : flag('date') || new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
const manifestPath = flag('manifest') || join(process.cwd(), 'data', 'sitemap-lastmod.json');

const files = ['hub', 'oahu', 'maui', 'kauai', 'bigisland'].map((f) => join(process.cwd(), 'public', '_sitemaps', `${f}.xml`));
const urls = [...new Set(files.flatMap((f) => [...readFileSync(f, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])))].sort();

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'");

function fingerprint(html) {
  const head = html.split('</head>')[0];
  const title = head.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '';
  const desc = head.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  const canonical = head.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? '';
  let main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? '';
  main = main
    .replace(/<(script|style|template)[^>]*>[\s\S]*?<\/\1>/g, ' ')
    .replace(/<img\b[^>]*\balt="([^"]*)"[^>]*>/g, ' [img:$1] ')
    .replace(/<a\b[^>]*\bhref="([^"]*)"[^>]*>/g, ' [a:$1] ')
    .replace(/<[^>]+>/g, ' ');
  const text = decode(`${title}\n${desc}\n${canonical}\n${main}`).replace(/\s+/g, ' ').trim();
  return createHash('sha256').update(text).digest('hex').slice(0, 20);
}

async function hashUrl(u) {
  const { host, pathname } = new URL(u);
  const res = await fetch(`${base}${pathname}`, { headers: { 'x-forwarded-host': host, 'user-agent': 'mychef-lastmod' }, redirect: 'manual' });
  const body = await res.text();
  return res.status === 200 ? fingerprint(body) : `status-${res.status}`;
}

const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')) : {};
const next = {};
let changed = 0;
let added = 0;
const queue = [...urls];
async function worker() {
  while (queue.length) {
    const u = queue.shift();
    const hash = await hashUrl(u);
    if (hash.startsWith('status-') && stamp) throw new Error(`${u} returned ${hash}`);
    const prev = manifest[u];
    if (!prev) {
      next[u] = { hash, lastmod: stamp };
      added++;
    } else if (prev.hash !== hash) {
      next[u] = { hash, lastmod: stamp ?? prev.lastmod ?? null };
      changed++;
    } else {
      next[u] = prev;
    }
  }
}
await Promise.all(Array.from({ length: 12 }, worker));

const sorted = Object.fromEntries(Object.keys(next).sort().map((k) => [k, next[k]]));
writeFileSync(manifestPath, `${JSON.stringify(sorted, null, 1)}\n`);
const dated = Object.values(sorted).filter((r) => r.lastmod).length;
console.log(`lastmod manifest · ${urls.length} urls · ${changed} changed · ${added} new · ${dated} with lastmod · stamp ${stamp ?? 'none'}`);
