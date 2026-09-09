/**
 * Regression gate for the 2026-09-09 audit: never ship broken SEO template soup
 * or internal SERP notes in prerendered HTML / source that reaches the browser.
 *
 * Run: node scripts/check-seo-copy.mjs [distDir]
 * Wired into postbuild after prerender.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const target = path.resolve(process.argv[2] || path.join(root, 'dist'));

/** Phrases that proved the expandRecord longform was live in production. */
const FORBIDDEN = [
  /every the /i,
  /in the honesty register/i,
  /honesty register in the honesty/i,
  /\bSERP\b/,
  /head term/i,
  /STATEWIDE-OWNED/,
  /Hub `\/` owns/,
  /actually runs in/i,
  /Who books .+ in the honesty register/i,
  /What this page covers:/i,
  /conversion-door/i,
  /Fee stack on every the /i,
  /href=["']\/https?:/i,
  /href=["']\/http\b/i,
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

const files = walk(target);
if (!files.length) {
  console.error(`[check-seo-copy] No HTML under ${target} — run after prerender.`);
  process.exit(1);
}

let hits = 0;
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  for (const re of FORBIDDEN) {
    if (re.test(text)) {
      hits += 1;
      const m = text.match(re);
      console.error(`[check-seo-copy] ${path.relative(root, file)} :: ${re} → ${m?.[0]}`);
    }
  }
}

if (hits) {
  console.error(`[check-seo-copy] FAIL — ${hits} forbidden pattern hit(s) across ${files.length} HTML files.`);
  process.exit(1);
}

console.log(`[check-seo-copy] OK — scanned ${files.length} HTML files, no forbidden SEO soup.`);
