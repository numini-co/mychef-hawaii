#!/usr/bin/env node
/**
 * Ping Bing/Yandex IndexNow for myCHEF Hawaii URLs.
 *
 * Usage:
 *   node scripts/indexnow.mjs                 # money pages + recently lastmod'd
 *   node scripts/indexnow.mjs --urls u1 u2    # explicit list
 *   node scripts/indexnow.mjs --since 2026-10-09
 *   node scripts/indexnow.mjs --dry-run
 *
 * Key file must be live at https://{host}/{key}.txt for every host in the list
 * (Next.js serves public/ on hub + island hosts).
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const args = process.argv.slice(2);
const dry = args.includes('--dry-run');
const sinceIdx = args.indexOf('--since');
const since = sinceIdx === -1 ? null : args[sinceIdx + 1];
const urlsIdx = args.indexOf('--urls');
const explicit = urlsIdx === -1 ? null : args.slice(urlsIdx + 1).filter((a) => !a.startsWith('--'));

const root = process.cwd();
const cfg = JSON.parse(readFileSync(join(root, 'data/indexnow.json'), 'utf8'));
const key = cfg.key;
if (!key || !/^[a-f0-9]{32}$/i.test(key)) {
  console.error('data/indexnow.json key must be 32 hex chars');
  process.exit(1);
}

const MONEY = [
  'https://mychef-hawaii.com/',
  'https://mychef-hawaii.com/catering',
  'https://mychef-hawaii.com/weddings',
  'https://mychef-hawaii.com/private-chef',
  'https://mychef-hawaii.com/pricing',
  'https://oahu.mychef-hawaii.com/',
  'https://oahu.mychef-hawaii.com/catering',
  'https://oahu.mychef-hawaii.com/weddings',
  'https://oahu.mychef-hawaii.com/private-chef',
  'https://oahu.mychef-hawaii.com/pricing',
  'https://maui.mychef-hawaii.com/',
  'https://maui.mychef-hawaii.com/catering',
  'https://maui.mychef-hawaii.com/weddings',
  'https://maui.mychef-hawaii.com/private-chef',
  'https://kauai.mychef-hawaii.com/',
  'https://kauai.mychef-hawaii.com/catering',
  'https://kauai.mychef-hawaii.com/weddings',
  'https://bigisland.mychef-hawaii.com/',
  'https://bigisland.mychef-hawaii.com/catering',
  'https://bigisland.mychef-hawaii.com/weddings',
];

function urlsFromLastmod(sinceDay) {
  const manifestPath = join(root, 'data/sitemap-lastmod.json');
  if (!existsSync(manifestPath)) return [];
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  const out = [];
  for (const [u, meta] of Object.entries(manifest)) {
    if (!meta?.lastmod) continue;
    if (sinceDay && !String(meta.lastmod).startsWith(sinceDay)) continue;
    out.push(u);
  }
  return out;
}

let urlList = explicit?.length
  ? explicit
  : [...new Set([...MONEY, ...urlsFromLastmod(since || new Date().toISOString().slice(0, 10))])];

urlList = urlList.filter((u) => /^https:\/\/([a-z0-9-]+\.)?mychef-hawaii\.com(\/|$)/i.test(u));
if (!urlList.length) {
  console.error('no URLs to submit');
  process.exit(1);
}

// IndexNow caps at 10,000 URLs; we stay tiny. Group by host so keyLocation matches.
const byHost = new Map();
for (const u of urlList) {
  const host = new URL(u).host;
  if (!byHost.has(host)) byHost.set(host, []);
  byHost.get(host).push(u);
}

async function submit(host, urls) {
  const keyLocation = `https://${host}/${key}.txt`;
  const body = { host, key, keyLocation, urlList: urls };
  if (dry) {
    console.log(JSON.stringify(body, null, 2));
    return { host, status: 'dry-run', count: urls.length };
  }
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  return { host, status: res.status, count: urls.length, body: text.slice(0, 200) };
}

const results = [];
for (const [host, urls] of byHost) {
  results.push(await submit(host, urls));
}
console.log(JSON.stringify({ submitted: urlList.length, results }, null, 2));
// 200/202 = accepted; 4xx = client error
const bad = results.filter((r) => typeof r.status === 'number' && (r.status < 200 || r.status >= 300) && r.status !== 202);
if (bad.length) process.exit(1);
