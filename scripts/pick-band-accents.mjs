#!/usr/bin/env node
/**
 * Verifies the band/footer colour pairings in tokens.ts clear WCAG AA.
 * Run after touching any band, footer, card or accent token.
 */
import { readFileSync } from 'node:fs';

const src = readFileSync(new URL('../src/platform/tokens.ts', import.meta.url), 'utf8');
const block = (site) => src.split(`  ${site}: {`)[1].split('\n  },')[0];
const val = (site, key) => {
  const m = block(site).match(new RegExp(`${key}: '([^']+)'`));
  return m ? m[1] : null;
};

const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const lum = (c) => {
  const f = (v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2]);
};
const cr = (a, b) => {
  const l1 = lum(hex(a));
  const l2 = lum(hex(b));
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};

let fails = 0;
for (const site of ['hub', 'oahu', 'maui', 'kauai', 'bigisland']) {
  const t = Object.fromEntries(
    ['bg', 'card', 'ink', 'ink2', 'accentText', 'bandBg', 'bandInk', 'bandAccent', 'footerBg', 'footerInk', 'footerAccent'].map(
      (k) => [k, val(site, k)],
    ),
  );
  const checks = [
    ['body on page', t.ink, t.bg, 4.5],
    ['secondary on page', t.ink2, t.bg, 4.5],
    ['link on page', t.accentText, t.bg, 4.5],
    ['link on card', t.accentText, t.card, 4.5],
    ['band ink on band', t.bandInk, t.bandBg, 4.5],
    ['band link on band', t.bandAccent, t.bandBg, 4.5],
    ['footer ink on footer', t.footerInk, t.footerBg, 4.5],
    ['footer link on footer', t.footerAccent, t.footerBg, 4.5],
    ['card ink on card in band', t.ink, t.card, 4.5],
    ['card link on card in band', t.accentText, t.card, 4.5],
  ];
  for (const [label, fg, bg, need] of checks) {
    const r = cr(fg, bg);
    const ok = r >= need;
    if (!ok) fails++;
    console.log(`${ok ? ' ok ' : 'FAIL'}  ${site.padEnd(10)} ${label.padEnd(26)} ${fg} on ${bg}  ${r.toFixed(2)} (need ${need})`);
  }
}
console.log(fails ? `\n${fails} pairing(s) below AA` : '\nAll token pairings clear AA.');
process.exit(fails ? 1 : 0);
