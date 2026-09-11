/**
 * Screaming Frog–aligned SEO gate for prerendered HTML.
 *
 * Catalog: docs/screaming-frog-issues-catalog.json (320 SF issue types)
 * Source:  https://www.screamingfrog.co.uk/seo-spider/issues/
 *
 * Hard fails exit 1. Soft opportunities (title/meta length) print as warnings.
 * Run: node scripts/check-seo-frog.mjs [distDir]
 * Wired into postbuild after prerender + check-seo-copy.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const target = path.resolve(process.argv[2] || path.join(root, 'dist'));

const SKIP = new Set(['404.html']);
const SKIP_PREFIX = ['google'];

/** Banned NEO vocabulary — allow negated educational quotes ("not Book now"). */
const BANNED = [
  { re: /Book now/gi, allow: /not\s+[“"']?Book now/i },
  { re: /Cheap private chef/gi, allow: null },
  { re: /Best chef in Hawaii/gi, allow: null },
  { re: /Contact us for pricing/gi, allow: null },
  { re: /Inquire for rates/gi, allow: null },
];

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (name.endsWith('.html')) out.push(p);
  }
  return out;
}

function rel(file) {
  return path.relative(target, file);
}

function shouldSkip(file) {
  const r = rel(file);
  if (SKIP.has(r)) return true;
  return SKIP_PREFIX.some((p) => r.startsWith(p));
}

function hasBanned(html) {
  for (const { re, allow } of BANNED) {
    re.lastIndex = 0;
    if (re.test(html) && !(allow && allow.test(html))) return re.source;
  }
  return null;
}

function analyze(html, file) {
  const hard = [];
  const soft = [];
  const lines = html.split('\n').length;
  const r = rel(file);

  const titles = [...html.matchAll(/<title[^>]*>([\s\S]*?)<\/title>/gi)].map((m) =>
    m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(),
  );
  if (!titles.length) hard.push(['missing_title', 'Missing <title>']);
  else if (titles.length > 1) hard.push(['multiple_title', `${titles.length} <title> tags`]);
  else {
    if (titles[0].length > 70) soft.push(['title_long', `${titles[0].length} chars`]);
    if (titles[0].length < 30) soft.push(['title_short', `${titles[0].length} chars`]);
  }

  const metas = [
    ...html.matchAll(/<meta[^>]+name=["']description["'][^>]*content=["']([\s\S]*?)["']/gi),
    ...html.matchAll(/<meta[^>]+content=["']([\s\S]*?)["'][^>]*name=["']description["']/gi),
  ].map((m) => m[1]);
  if (!metas.length) soft.push(['missing_meta', 'Missing meta description']);
  else if (metas.length > 1) hard.push(['multiple_meta', `${metas.length} meta descriptions`]);
  else if (metas[0].length > 160) soft.push(['meta_long', `${metas[0].length} chars`]);

  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(),
  );
  if (!h1s.length) hard.push(['missing_h1', 'Missing <h1>']);
  else if (h1s.length > 1) hard.push(['multiple_h1', `${h1s.length} <h1> tags`]);
  else if (!h1s[0]) hard.push(['empty_h1', 'Empty <h1>']);
  else if (h1s[0].length > 70) soft.push(['h1_long', `${h1s[0].length} chars`]);

  const canons = [];
  for (const m of html.matchAll(/<link\b[^>]*>/gi)) {
    const tag = m[0];
    if (!/rel=["']canonical["']/i.test(tag)) continue;
    const hm = tag.match(/href=["']([^"']+)["']/i);
    if (hm) canons.push(hm[1]);
  }
  if (!canons.length) hard.push(['missing_canonical', 'Missing canonical']);
  else if (canons.length > 1) hard.push(['multiple_canonical', `${canons.length} canonicals`]);
  else {
    if (!canons[0].startsWith('https://')) hard.push(['relative_canonical', canons[0]]);
    if (canons[0].includes('#')) hard.push(['canonical_fragment', canons[0]]);
  }

  if (/name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) {
    soft.push(['noindex', 'noindex present']);
  }
  if (/lorem ipsum|placeholder text/i.test(html)) hard.push(['lorem', 'Lorem/placeholder']);
  if (/href=["']\/https?:/i.test(html)) hard.push(['broken_href', 'href="/https:…"']);
  if (/href=["']https?:\/\/localhost/i.test(html)) hard.push(['localhost', 'localhost outlink']);
  if (/(?:src|href)=["']http:\/\//i.test(html)) hard.push(['http_resource', 'http:// resource']);
  if (/(?:src|href)=["']\/\//.test(html)) soft.push(['protocol_relative', '// link']);
  if (html.includes('code-path=')) hard.push(['code_path', 'debug code-path attr']);

  for (const img of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt=/i.test(img[0])) {
      hard.push(['img_alt', 'img missing alt attribute']);
      break;
    }
  }

  for (const block of html.matchAll(
    /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  )) {
    try {
      JSON.parse(block[1].trim());
    } catch (e) {
      hard.push(['jsonld', String(e.message || e).slice(0, 80)]);
      break;
    }
  }

  if (html.includes('wa.me/18084687748')) hard.push(['old_wa', 'old WhatsApp number']);
  const banned = hasBanned(html);
  if (banned) hard.push(['banned', banned]);

  if (lines < 400) soft.push(['thin_html', `${lines} lines`]);
  if (!/<meta[^>]+name=["']viewport["']/i.test(html)) hard.push(['missing_viewport', 'no viewport']);
  if (!/<html[^>]+lang=/i.test(html)) hard.push(['missing_lang', 'no html lang']);

  return { r, lines, hard, soft };
}

const files = walk(target).filter((f) => !shouldSkip(f));
if (!files.length) {
  console.error(`[check-seo-frog] No HTML under ${target} — run after prerender.`);
  process.exit(1);
}

let hardHits = 0;
let softHits = 0;
const hardByCode = new Map();

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const { r, hard, soft } = analyze(html, file);
  for (const [code, detail] of hard) {
    hardHits += 1;
    hardByCode.set(code, (hardByCode.get(code) || 0) + 1);
    if (hardHits <= 40) {
      console.error(`[check-seo-frog] HARD ${code} :: ${r} — ${detail}`);
    }
  }
  softHits += soft.length;
}

if (hardHits > 40) {
  console.error(`[check-seo-frog] … and ${hardHits - 40} more hard hit(s)`);
}

console.log(
  `[check-seo-frog] scanned ${files.length} HTML · hard=${hardHits} soft=${softHits}`,
);
if (hardByCode.size) {
  console.log(
    '[check-seo-frog] hard by code:',
    [...hardByCode.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([k, v]) => `${k}:${v}`)
      .join(' '),
  );
}

if (hardHits) {
  console.error(`[check-seo-frog] FAIL — ${hardHits} hard Screaming Frog–class issue(s).`);
  process.exit(1);
}

console.log('[check-seo-frog] OK — no hard SF-class issues on prerendered HTML.');
