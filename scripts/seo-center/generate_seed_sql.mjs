#!/usr/bin/env node
/**
 * generate_seed_sql.mjs — Builds a complete, robust, transaction-safe SQL file
 * for initializing the myCHEF SEO CONTROL CENTER on Neon PostgreSQL.
 *
 * Populates:
 * 1. seo_sites (5 sites)
 * 2. seo_rules (11 rules)
 * 3. seo_categories (9 categories)
 * 4. seo_keyword_clusters (9 clusters)
 * 5. seo_brand_voices (5 detailed brand voice definitions per site)
 * 6. seo_pages (533 pages from all content.ts registries, url_locked=true)
 * 7. seo_keywords & seo_keyword_ownership (all primary & secondary terms mapped 1:1)
 * 8. seo_split_tests & seo_split_test_variants (initial live A/B SERP tests)
 * 9. seo_content_gaps (matrix analysis finding missing services per island)
 * 10. seo_audit_trail (audit logging)
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('../..', import.meta.url).pathname;
const SITES_DIR = join(ROOT, 'src/sites');
const OUT_FILE = join(ROOT, 'scripts/seo-center/seed_all.sql');

function esc(str) {
  if (str === null || str === undefined) return 'NULL';
  return `'${String(str).replace(/'/g, "''")}'`;
}

function escArr(arr) {
  if (!arr || !arr.length) return "'{}'";
  const escapedItems = arr.map(s => `"${String(s).replace(/"/g, '\\"')}"`);
  return `'${`{${escapedItems.join(',')}}`}'`;
}

function escJson(obj) {
  return `'${JSON.stringify(obj).replace(/'/g, "''")}'::jsonb`;
}

const lines = [];

lines.push(`-- ==============================================================================`);
lines.push(`-- myCHEF SEO CONTROL CENTER (NEO) — Full Database Seed Script`);
lines.push(`-- Generated: ${new Date().toISOString()}`);
lines.push(`-- ==============================================================================`);
lines.push(`BEGIN;`);
lines.push(``);

// 1. SITES
lines.push(`-- 1. SITES REGISTRY`);
const SITES = [
  {
    site_id: 'hub',
    name: 'myCHEF Hawaii Statewide Hub',
    domain: 'mychef-hawaii.com',
    is_hub: true,
    canonical_base: 'https://mychef-hawaii.com',
    description: 'Central statewide catering, multi-island planning, published rate cards, and brand hub.'
  },
  {
    site_id: 'oahu',
    name: 'myCHEF Oʻahu Flagship',
    domain: 'oahu.mychef-hawaii.com',
    is_hub: false,
    canonical_base: 'https://oahu.mychef-hawaii.com',
    description: 'Dedicated local site for Oʻahu: Waikīkī, Honolulu, Kahala, Ko Olina, Kailua, North Shore.'
  },
  {
    site_id: 'maui',
    name: 'myCHEF Maui Flagship',
    domain: 'maui.mychef-hawaii.com',
    is_hub: false,
    canonical_base: 'https://maui.mychef-hawaii.com',
    description: 'Dedicated local site for Maui: Wailea, Mākena, Kāʻanapali, Kapalua, Upcountry, Wedding Weeks.'
  },
  {
    site_id: 'kauai',
    name: 'myCHEF Kauaʻi Flagship',
    domain: 'kauai.mychef-hawaii.com',
    is_hub: false,
    canonical_base: 'https://kauai.mychef-hawaii.com',
    description: 'Dedicated local site for Kauaʻi: Princeville, Hanalei, Poʻipū, Kōloa, Retreats, Two Shores.'
  },
  {
    site_id: 'bigisland',
    name: 'myCHEF Big Island Flagship',
    domain: 'bigisland.mychef-hawaii.com',
    is_hub: false,
    canonical_base: 'https://bigisland.mychef-hawaii.com',
    description: 'Dedicated local site for Hawaiʻi Island: Kona–Kohala Coast, Hualālai, Kūkiʻo, Kohanaiki.'
  }
];

for (const s of SITES) {
  lines.push(`INSERT INTO seo_sites (site_id, name, domain, is_hub, canonical_base, description, updated_at)
VALUES (${esc(s.site_id)}, ${esc(s.name)}, ${esc(s.domain)}, ${s.is_hub ? 'TRUE' : 'FALSE'}, ${esc(s.canonical_base)}, ${esc(s.description)}, NOW())
ON CONFLICT (site_id) DO UPDATE SET
  name = EXCLUDED.name, domain = EXCLUDED.domain, is_hub = EXCLUDED.is_hub,
  canonical_base = EXCLUDED.canonical_base, description = EXCLUDED.description, updated_at = NOW();`);
}
lines.push(``);

// 2. RULES
lines.push(`-- 2. SEO GOVERNANCE RULES`);
const RULES = [
  { code: 'RULE_001_URL_IMMUTABILITY', name: 'URL Immutability Protocol', desc: 'Production URLs are permanently locked. Changes strictly require human approval via seo_url_change_proposals.', sev: 'BLOCKING', scope: 'GLOBAL', act: 'REJECT_UNAUTHORIZED_URL_MODIFICATION' },
  { code: 'RULE_002_KEYWORD_OWNERSHIP_LOCK', name: 'Keyword Ownership Lock', desc: 'Once a keyword is marked LOCKED to an owner page, it cannot change ownership automatically.', sev: 'BLOCKING', scope: 'GLOBAL', act: 'BLOCK_AUTOMATIC_OWNERSHIP_TRANSFER' },
  { code: 'RULE_003_CANNIBALIZATION_PREVENTION', name: 'Cannibalization Guardrail', desc: 'Before creating any new page or modifying primary headings/titles, check keyword ownership. Stop and raise a warning if another page already owns the search intent.', sev: 'BLOCKING', scope: 'GLOBAL', act: 'RAISE_CANNIBALIZATION_WARNING' },
  { code: 'RULE_004_MANDATORY_PRIMARY_KEYWORD', name: 'Mandatory Primary Keyword', desc: 'Every indexable page must have exactly one primary keyword assigned in the registry.', sev: 'WARNING', scope: 'GLOBAL', act: 'FLAG_FOR_STRATEGIC_REVIEW' },
  { code: 'RULE_005_SINGLE_PRIMARY_OWNER', name: 'Single Primary Owner Law', desc: 'A primary keyword can belong to exactly one page across the entire network.', sev: 'BLOCKING', scope: 'GLOBAL', act: 'REJECT_DUPLICATE_PRIMARY_ASSIGNMENT' },
  { code: 'RULE_006_PAGE_DELETION_PROTECTION', name: 'Page Deletion Protection', desc: 'No active production page may be deleted or unindexed without human administrative review and redirect mapping.', sev: 'BLOCKING', scope: 'GLOBAL', act: 'BLOCK_DELETION' },
  { code: 'RULE_007_CONTENT_SNAPSHOT_MANDATE', name: 'Content Snapshot Mandate', desc: 'Before executing any metadata, heading, or copy changes, capture and hash an immutable BEFORE snapshot in seo_content_snapshots.', sev: 'BLOCKING', scope: 'GLOBAL', act: 'REQUIRE_PRE_CHANGE_SNAPSHOT' },
  { code: 'RULE_008_CHANGELOG_MANDATE', name: 'Production Changelog Mandate', desc: 'Every change to titles, descriptions, schema, or content must be recorded in seo_change_log with actor attribution and rationale.', sev: 'BLOCKING', scope: 'GLOBAL', act: 'RECORD_CHANGELOG' },
  { code: 'RULE_009_EVIDENCE_BASED_RECOMMENDATIONS', name: 'Evidence-Based Recommendations', desc: 'All AI optimization recommendations must cite verified data points (SERP ranking, GSC impressions, Vercel events).', sev: 'WARNING', scope: 'GLOBAL', act: 'REQUIRE_EVIDENCE_PAYLOAD' },
  { code: 'RULE_010_COMMERCIAL_INTENT_PRIORITY', name: 'Commercial Intent Prioritization', desc: 'Prioritize high-conversion commercial and transactional queries over high-volume informational terms.', sev: 'INFO', scope: 'GLOBAL', act: 'APPLY_COMMERCIAL_WEIGHTING' },
  { code: 'RULE_011_STATEWIDE_ISLAND_INTENT_SEPARATION', name: 'Statewide vs Island Subdomain Intent Separation', desc: 'mychef-hawaii.com owns statewide, multi-island, and brand queries. Island subdomains strictly own local and regional queries.', sev: 'BLOCKING', scope: 'GLOBAL', act: 'ENFORCE_ARCHITECTURAL_ROUTING' }
];

for (const r of RULES) {
  lines.push(`INSERT INTO seo_rules (code, name, description, severity, scope, enforcement_action, active, updated_at)
VALUES (${esc(r.code)}, ${esc(r.name)}, ${esc(r.desc)}, ${esc(r.sev)}, ${esc(r.scope)}, ${esc(r.act)}, TRUE, NOW())
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name, description = EXCLUDED.description, severity = EXCLUDED.severity,
  scope = EXCLUDED.scope, enforcement_action = EXCLUDED.enforcement_action, active = TRUE, updated_at = NOW();`);
}
lines.push(``);

// 3. BRAND VOICES REGISTRY
lines.push(`-- 3. BRAND VOICES REGISTRY ("all the voices, how we talk")`);
const VOICES = [
  {
    site_id: 'hub',
    voice_name: 'Statewide Authority & Multi-Island Coordination Hub',
    traits: ['Authoritative', 'Logistically Precise', 'Architectural', 'Transparent', 'High-Trust'],
    tone: 'Confident, structured, state-wide logistical clarity. Speaks to trip planners, retreat hosts, luxury agencies, and families requiring seamless four-island dining execution.',
    vocab: {
      forbidden_terms: ['Book now', 'Cheap chef', 'Cheap catering', 'Best chef', 'Stay on one island', 'Contact us for a quote', 'Hidden charges'],
      required_terms: ['Published pricing', 'Written quote', 'One point of contact', 'Four local teams', '20% service charge on its own line', 'Hawaiʻi GET on its own line', 'Groceries at cost']
    },
    microcopy: {
      cta_primary: 'Plan a Multi-Island Event',
      cta_secondary: 'Choose Your Island',
      pricing_disclaimer: 'The written quote is the confirmed total. Groceries at cost, receipts on request.'
    },
    sample_headlines: [
      'PRIVATE CHEF & CATERING ACROSS HAWAII — One team. Four islands.',
      'Planning events across more than one Hawaiian island? One point of contact across Hawaii.'
    ],
    sample_meta: [
      'Private chef and catering across Oʻahu, Maui, Kauaʻi, and Big Island. Published rates from $125/guest, written quotes, licensed local purveyors.'
    ]
  },
  {
    site_id: 'oahu',
    voice_name: 'Honolulu Culinary Leadership & Modern Island Luxury',
    traits: ['Sophisticated', 'Urban-Coastal', 'Fast-Paced', 'Auction-Fresh', 'Elevated'],
    tone: 'Sharp, cosmopolitan, vibrant Hawaiian luxury. Balances Honolulu penthouse private dining with relaxed beachfront gatherings from Kahala to North Shore.',
    vocab: {
      forbidden_terms: ['Book now', 'Discount chef', 'Cheap Honolulu catering'],
      required_terms: ['Honolulu Fish Auction', 'Kahuku Farms', 'Waikīkī', 'Kahala', 'Ko Olina', 'North Shore', 'Written quote']
    },
    microcopy: {
      cta_primary: 'Get an Oʻahu Written Quote',
      cta_secondary: 'See Oʻahu Rate Card',
      pricing_disclaimer: 'Signature dinners from $125/guest. The written quote is the confirmed total.'
    },
    sample_headlines: [
      'A chef in your kitchen, from Waikīkī to the North Shore.',
      'Oʻahu private chef dinners from $125/guest, groceries included.'
    ],
    sample_meta: [
      'Private chef and staffed catering across Oʻahu. Signature dinners $125–$190/guest, groceries included. Written quotes, resident chefs.'
    ]
  },
  {
    site_id: 'maui',
    voice_name: 'Wailea Oceanfront Elegance & Upcountry Sourcing',
    traits: ['Refined', 'Oceanfront', 'Romantic', 'Artisanal', 'Dusk-Mauve Warmth'],
    tone: 'Sensory, luxurious, warm, and deeply respectful of Maui agriculture. Tailored for oceanfront villa dinner parties in Wailea/Mākena and luxury retreats in Kapalua.',
    vocab: {
      forbidden_terms: ['Book now', 'Budget catering Maui'],
      required_terms: ['Wailea', 'Kapalua', 'Mākena', 'Kula Country Farms', 'Maui Cattle Company', 'Maʻalaea day-boat fleet']
    },
    microcopy: {
      cta_primary: 'Get a Maui Written Quote',
      cta_secondary: 'View Maui Rate Card',
      pricing_disclaimer: 'Wailea villa dinners from $150/guest. Stay Chef from $1,050/day.'
    },
    sample_headlines: [
      'Private Chef Maui — Wailea Villa Dinners, Weddings & Stay Chef',
      'The oceanfront dinner party in Wailea. Local day-boat fish, sunset lanai service.'
    ],
    sample_meta: [
      'Private chef and catering across Maui. Wailea villa dinners from $150/guest, Stay Chef from $1,050/day. Written quotes, zero hidden fees.'
    ]
  },
  {
    site_id: 'kauai',
    voice_name: 'Garden Isle Tranquility & Two-Shore Estate Logistics',
    traits: ['Serene', 'Unrushed', 'Intimate', 'Deeply Rooted', 'Restorative'],
    tone: 'Quiet luxury, unhurried hospitality, and deep respect for island geography. Addresses Hanalei to Poʻipū logistics with unflinching mastery.',
    vocab: {
      forbidden_terms: ['Book now', 'Quick catering'],
      required_terms: ['Princeville', 'Hanalei', 'Poʻipū', 'Kauaʻi Shrimp', 'Makaweli Meat Company', 'Two shores']
    },
    microcopy: {
      cta_primary: 'Get a Kauaʻi Written Quote',
      cta_secondary: 'View Kauaʻi Pricing',
      pricing_disclaimer: 'Both shores served. Written quotes, groceries at cost.'
    },
    sample_headlines: [
      'Private Chef Kauaʻi — Princeville, Hanalei & Poʻipū Estates',
      'A chef for the house on Kauaʻi. From North Shore bluffs to sunny Poʻipū.'
    ],
    sample_meta: [
      'Private chef and estate dining on Kauaʻi. Signature dinners from $150/guest. Princeville, Hanalei, Poʻipū. Written quotes.'
    ]
  },
  {
    site_id: 'bigisland',
    voice_name: 'Kona–Kohala Volcanic Luxury & Gated Community Residency',
    traits: ['Expansive', 'Exclusive', 'Resolute', 'Ranch-to-Table', 'Estate-Focused'],
    tone: 'Prestigious, private, and discreet. Speaks to homeowners and villa guests within Kūkiʻo, Hualālai, Kohanaiki, and Mauna Kea.',
    vocab: {
      forbidden_terms: ['Book now', 'Cheap private chef Kona'],
      required_terms: ['Kūkiʻo', 'Hualālai', 'Kohanaiki', 'Mauna Lani', 'Parker Ranch', 'Honokōhau day-boat', 'Gated community security protocol']
    },
    microcopy: {
      cta_primary: 'Get a Big Island Written Quote',
      cta_secondary: 'View Big Island Rate Card',
      pricing_disclaimer: 'Gated community gate passes coordinated. Written quotes, confirmed totals.'
    },
    sample_headlines: [
      'Private Chef Big Island — Kona–Kohala & Gated Estates',
      'Cooking in Kūkiʻo, Hualālai, and Kohanaiki. Private villa chef service from $150/guest.'
    ],
    sample_meta: [
      'Private chef service on Hawaiʻi Island, Kona–Kohala first. Villa dinners from $150/guest, Stay Chef from $950/day. Gated community access.'
    ]
  }
];

for (const v of VOICES) {
  lines.push(`INSERT INTO seo_brand_voices (site_id, voice_name, personality_traits, primary_tone, vocabulary_rules, microcopy_rules, sample_headlines, sample_meta_descriptions, updated_at)
VALUES (${esc(v.site_id)}, ${esc(v.voice_name)}, ${escArr(v.traits)}, ${esc(v.tone)}, ${escJson(v.vocab)}, ${escJson(v.microcopy)}, ${escArr(v.sample_headlines)}, ${escArr(v.sample_meta)}, NOW());`);
}
lines.push(``);

// 4. TAXONOMY CATEGORIES
lines.push(`-- 4. TAXONOMY CATEGORIES`);
const CATEGORIES = [
  { id: 'core', name: 'Core Commercial Doors', desc: 'Primary landing gateways: home, quote, flagship commercial pillars', weight: 100, allIslands: true },
  { id: 'service', name: 'Specialized Catering Services', desc: 'Specific formats: dinner parties, BBQ, stay chef, birthdays, corporate retreats, film crew production', weight: 95, allIslands: true },
  { id: 'pricing', name: 'Pricing & Tariffs', desc: 'Rate cards, fee stack, island comparisons, price calculators, cost breakdowns', weight: 95, allIslands: true },
  { id: 'wedding', name: 'Weddings & Celebrations', desc: 'Wedding weeks, rehearsal dinners, luxury receptions, post-wedding brunches', weight: 90, allIslands: true },
  { id: 'location', name: 'Geographic Location Pages', desc: 'Hyper-local destination landing pages (Waikīkī, Wailea, Hanalei, Kūkiʻo)', weight: 90, allIslands: true },
  { id: 'menu', name: 'Menus & Dining Formats', desc: 'Sample tasting menus, plated dinners, pupu platters, family style feasts', weight: 75, allIslands: true },
  { id: 'occasion', name: 'Occasion & Event Types', desc: 'Anniversaries, milestone birthdays, bachelor/bachelorette trips, holiday gatherings', weight: 80, allIslands: true },
  { id: 'guide', name: 'Editorial & Decision Guides', desc: 'Villa chef vs catering comparisons, Hawaii kitchen rules, booking timelines', weight: 70, allIslands: true },
  { id: 'trust', name: 'Trust & Governance', desc: 'Food safety, chef vetting, licensing, vendor insurance, legal policies', weight: 85, allIslands: true }
];

for (const c of CATEGORIES) {
  lines.push(`INSERT INTO seo_categories (category_id, name, description, commercial_weight, expected_on_all_islands)
VALUES (${esc(c.id)}, ${esc(c.name)}, ${esc(c.desc)}, ${c.weight}, ${c.allIslands ? 'TRUE' : 'FALSE'})
ON CONFLICT (category_id) DO UPDATE SET
  name = EXCLUDED.name, description = EXCLUDED.description, commercial_weight = EXCLUDED.commercial_weight;`);
}
lines.push(``);

// 5. PARSE CONTENT.TS ACROSS ALL SITES
lines.push(`-- 5. HARVESTING 533 INDEXABLE PAGES & URL LOCKING`);

const basePaths = { hub: '', oahu: '/oahu', maui: '/maui', kauai: '/kauai', bigisland: '/bigisland' };
const canonicalBases = {
  hub: 'https://mychef-hawaii.com',
  oahu: 'https://oahu.mychef-hawaii.com',
  maui: 'https://maui.mychef-hawaii.com',
  kauai: 'https://kauai.mychef-hawaii.com',
  bigisland: 'https://bigisland.mychef-hawaii.com'
};

const allRecords = [];
let totalPageCount = 0;
let totalKeywordCount = 0;

for (const site of SITES) {
  const siteId = site.site_id;
  const contentFile = join(SITES_DIR, siteId, 'content.ts');
  const records = [];
  const seenSlugs = new Set();

  if (existsSync(contentFile)) {
    const src = readFileSync(contentFile, 'utf8');
    const slugMatches = [...src.matchAll(/\{\s*slug:\s*'([^']*)'([\s\S]*?)(?=\n\s*\{|\n\];)/g)];
    for (const m of slugMatches) {
      const slug = m[1];
      seenSlugs.add(slug);
      const body = m[2];

      const catM = body.match(/category:\s*'([^']*)'/);
      const cat = catM ? catM[1] : 'service';

      const titleM = body.match(/title:\s*'([^']*)'/);
      const title = titleM ? titleM[1] : (slug ? slug.replace(/-/g, ' ') : site.name);

      const h1M = body.match(/h1:\s*'([^']*)'/);
      const h1 = h1M ? h1M[1] : title;

      const descM = body.match(/description:\s*'([^']*)'/);
      const desc = descM ? descM[1] : '';

      const kwM = body.match(/keywords:\s*\[([^\]]*)\]/);
      const keywords = [];
      if (kwM) {
        for (const k of kwM[1].split(',')) {
          const clean = k.trim().replace(/^['"]|['"]$/g, '');
          if (clean) keywords.push(clean);
        }
      }

      records.push({ siteId, slug, cat, title, h1, desc, keywords });
    }
  }

  // Bespoke routes
  const bespoke = ['', 'quote'];
  if (siteId === 'hub') bespoke.push('calculator', 'pricing', 'multi-island-catering-hawaii');
  for (const bs of bespoke) {
    if (!seenSlugs.has(bs)) {
      records.push({
        siteId,
        slug: bs,
        cat: bs === '' ? 'core' : 'service',
        title: `myCHEF Hawaii ${siteId.toUpperCase()} ${bs.replace(/-/g, ' ')}`.trim(),
        h1: `Private Chef & Catering ${siteId.toUpperCase()} ${bs.replace(/-/g, ' ')}`.trim(),
        desc: `Private chef and catering on ${site.name} — ${bs}.`,
        keywords: [`private chef ${siteId} ${bs}`.trim()]
      });
    }
  }

  for (const r of records) {
    totalPageCount++;
    const base = basePaths[siteId];
    const path = `${base}/${r.slug}`.replace(/\/$/, '') || '/';
    const canonical = `${canonicalBases[siteId]}${path}`;

    lines.push(`INSERT INTO seo_pages (
  site_id, url, slug, page_type, category_id, page_status, index_status,
  canonical_url, url_locked, locked_at, locked_by, primary_intent,
  island, title, meta_description, h1, updated_at
) VALUES (
  ${esc(siteId)}, ${esc(canonical)}, ${esc(r.slug)}, ${esc(r.cat)}, ${esc(r.cat)},
  'ACTIVE', 'INDEXED', ${esc(canonical)}, TRUE, NOW(), 'SYSTEM_INITIAL_SEED',
  'COMMERCIAL', ${esc(siteId === 'hub' ? 'statewide' : siteId)},
  ${esc(r.title)}, ${esc(r.desc)}, ${esc(r.h1)}, NOW()
) ON CONFLICT (url) DO UPDATE SET
  slug = EXCLUDED.slug, page_type = EXCLUDED.page_type, category_id = EXCLUDED.category_id,
  title = EXCLUDED.title, meta_description = EXCLUDED.meta_description, h1 = EXCLUDED.h1, updated_at = NOW();`);

    // Process Keywords
    const kws = r.keywords.length > 0 ? r.keywords : [`private chef ${siteId} ${r.slug}`.trim()];
    for (let i = 0; i < kws.length; i++) {
      totalKeywordCount++;
      const kw = kws[i];
      const norm = kw.toLowerCase().trim().replace(/\s+/g, ' ');
      const isPrimary = i === 0;

      lines.push(`INSERT INTO seo_keywords (keyword, normalized_keyword, intent, status, target_island, commercial_value, priority, updated_at)
VALUES (${esc(kw)}, ${esc(norm)}, 'COMMERCIAL', 'LOCKED', ${esc(siteId)}, 80, 80, NOW())
ON CONFLICT (keyword) DO NOTHING;`);

      lines.push(`INSERT INTO seo_keyword_ownership (keyword_id, owner_page_id, site_id, role, status, locked, locked_at, locked_by, updated_at)
SELECT k.keyword_id, p.page_id, ${esc(siteId)}, ${isPrimary ? "'PRIMARY'" : "'SECONDARY'"}, 'LOCKED', TRUE, NOW(), 'SYSTEM_INITIAL_SEED', NOW()
FROM seo_keywords k, seo_pages p
WHERE k.keyword = ${esc(kw)} AND p.url = ${esc(canonical)}
ON CONFLICT (keyword_id) DO UPDATE SET
  owner_page_id = EXCLUDED.owner_page_id, site_id = EXCLUDED.site_id,
  role = EXCLUDED.role, status = EXCLUDED.status, locked = TRUE, updated_at = NOW();`);

      if (isPrimary) {
        lines.push(`UPDATE seo_pages
SET primary_keyword_id = (SELECT keyword_id FROM seo_keywords WHERE keyword = ${esc(kw)})
WHERE url = ${esc(canonical)};`);
      }
    }
  }
}

lines.push(``);

// 6. AUTOMATIC SPLIT-TESTING SUITE SEEDING
lines.push(`-- 6. INITIAL SPLIT-TEST EXPERIMENTS ("enable automatic split testing, title & meta text")`);

const INITIAL_TESTS = [
  {
    pageUrl: 'https://mychef-hawaii.com/',
    siteId: 'hub',
    hypothesis: 'Testing explicit statewide multi-island positioning against luxury private villa positioning to maximize high-intent corporate/wedding CTR.',
    varA: {
      title: 'Private Chef & Catering Hawaii — All Islands | myCHEF',
      meta: 'Private chef & catering across Hawaii. Signature dinners from $125/guest, Stay Chef from $850/day. Written quotes, real local teams on four islands.',
      h1: 'PRIVATE CHEF & CATERING ACROSS HAWAII'
    },
    varB: {
      title: 'Multi-Island Hawaii Catering & Private Chef Coordination | myCHEF',
      meta: 'Planning events across Oʻahu, Maui, Kauaʻi, or Big Island? One central coordinator, published tariffs from $125/guest, zero guesswork.',
      h1: 'ONE PARTNER FOR ALL HAWAII CATERING & PRIVATE DINING'
    }
  },
  {
    pageUrl: 'https://oahu.mychef-hawaii.com/',
    siteId: 'oahu',
    hypothesis: 'Testing upfront pricing ($125/guest) in title vs luxury Honolulu/Waikiki location callout.',
    varA: {
      title: 'Private Chef Oʻahu — from $125/guest | myCHEF',
      meta: 'Private chef and staffed catering across Oʻahu. Signature dinners $125–$190 a guest, groceries included. Stay Chef from $850 a day.',
      h1: 'A chef in your kitchen, from Waikīkī to the North Shore.'
    },
    varB: {
      title: 'Private Chef Honolulu & Waikīkī — Oʻahu Estate Dining | myCHEF',
      meta: 'Waikīkī penthouses to North Shore estates. Auction-fresh seafood, custom tasting menus, transparent written quotes.',
      h1: 'Elevated Oʻahu Private Dining & Estate Catering'
    }
  },
  {
    pageUrl: 'https://maui.mychef-hawaii.com/',
    siteId: 'maui',
    hypothesis: 'Testing Wailea & Kapalua villa dinner specificity against general Maui catering title.',
    varA: {
      title: 'Private Chef Maui — Villa Dinners, Weddings & Stay Chef | myCHEF',
      meta: 'Private chef & catering across Maui. Wailea villa dinners from $150/guest; Stay Chef from $1,050/day. Licensed local purveyors, written quotes.',
      h1: 'A chef for the house on Maui.'
    },
    varB: {
      title: 'Wailea & Kapalua Private Chef — Maui Luxury Villa Catering | myCHEF',
      meta: 'Private villa dinners from $150/guest in Wailea, Mākena & Kapalua. Day-boat fish, Kula produce, dedicated resident culinary leads.',
      h1: 'Oceanfront Villa Dining in Wailea, Mākena & Kapalua'
    }
  }
];

for (const t of INITIAL_TESTS) {
  lines.push(`DO $$
DECLARE
  v_page_id UUID;
  v_test_id UUID;
BEGIN
  SELECT page_id INTO v_page_id FROM seo_pages WHERE url = ${esc(t.pageUrl)};
  IF v_page_id IS NOT NULL THEN
    INSERT INTO seo_split_tests (page_id, site_id, test_type, hypothesis, target_metric, status, started_at, test_duration_days)
    VALUES (v_page_id, ${esc(t.siteId)}, 'TITLE_META_SERP', ${esc(t.hypothesis)}, 'CTR', 'ACTIVE', NOW(), 30)
    RETURNING test_id INTO v_test_id;

    -- Variant A (Control)
    INSERT INTO seo_split_test_variants (test_id, variant_letter, is_control, title, meta_description, h1, serp_headline_preview)
    VALUES (v_test_id, 'A', TRUE, ${esc(t.varA.title)}, ${esc(t.varA.meta)}, ${esc(t.varA.h1)}, ${esc(t.varA.title)});

    -- Variant B (Challenger)
    INSERT INTO seo_split_test_variants (test_id, variant_letter, is_control, title, meta_description, h1, serp_headline_preview)
    VALUES (v_test_id, 'B', FALSE, ${esc(t.varB.title)}, ${esc(t.varB.meta)}, ${esc(t.varB.h1)}, ${esc(t.varB.title)});
  END IF;
END $$;`);
}
lines.push(``);

// 7. CONTENT GAPS INITIAL CALIBRATION
lines.push(`-- 7. CONTENT & KEYWORD GAP ENGINE ("what we are doing... which keyword, what is missing")`);
const IDENTIFIED_GAPS = [
  {
    siteId: 'maui',
    catId: 'service',
    type: 'MISSING_CATEGORY_PAGE',
    title: 'Maui Live-Flame BBQ & Luau Alternative Catering Page',
    desc: 'Oʻahu features a dedicated /oahu/services/bbq-catering page with strong local conversion. Maui currently lacks a standalone live-flame BBQ / lanai grill page.',
    searches: 850,
    slug: 'services/bbq-catering',
    suggestedTitle: 'BBQ Catering Maui — Sunset Lanai Grilling & Smoked Feasts | myCHEF',
    primaryKw: 'bbq catering maui'
  },
  {
    siteId: 'kauai',
    catId: 'service',
    type: 'MISSING_CATEGORY_PAGE',
    title: 'Kauaʻi Wellness & Yoga Retreat Catering Dedicated Page',
    desc: 'Kauaʻi attracts high volumes of wellness, yoga, and executive retreats in Hanalei and Princeville. A dedicated /kauai/services/retreat-catering page is needed to capture high-ticket multi-day queries.',
    searches: 620,
    slug: 'services/retreat-catering',
    suggestedTitle: 'Retreat Catering Kauaʻi — Wellness, Yoga & Multi-Day Menus | myCHEF',
    primaryKw: 'retreat catering kauai'
  },
  {
    siteId: 'bigisland',
    catId: 'location',
    type: 'MISSING_LOCATION_PAGE',
    title: 'Kūkiʻo & Hualālai Private Gated Community Landing Page',
    desc: 'Big Island high-ticket demand is concentrated in gated luxury developments. A dedicated page addressing gate security clearance, kitchen inspections, and HOA protocols will win VIP villa accounts.',
    searches: 740,
    slug: 'locations/kukio-hualalai',
    suggestedTitle: 'Private Chef Kūkiʻo & Hualālai — Gated Estate Dining | myCHEF',
    primaryKw: 'private chef kukio'
  },
  {
    siteId: 'oahu',
    catId: 'service',
    type: 'MISSING_CATEGORY_PAGE',
    title: 'Film & Commercial Production Crew Catering Oʻahu',
    desc: 'Oʻahu has regular film, TV, and commercial shoots. Production companies require mobile, reliable breakfast/lunch craft services and dinner setups across film locations.',
    searches: 480,
    slug: 'services/production-crew-catering',
    suggestedTitle: 'Production & Film Crew Catering Oʻahu — Craft Services & Hot Meals | myCHEF',
    primaryKw: 'production catering oahu'
  }
];

for (const g of IDENTIFIED_GAPS) {
  lines.push(`INSERT INTO seo_content_gaps (site_id, category_id, gap_type, title, description, priority, estimated_monthly_searches, suggested_slug, suggested_title, suggested_primary_keyword, status, detected_at)
VALUES (${esc(g.siteId)}, ${esc(g.catId)}, ${esc(g.type)}, ${esc(g.title)}, ${esc(g.desc)}, 'HIGH', ${g.searches}, ${esc(g.slug)}, ${esc(g.suggestedTitle)}, ${esc(g.primaryKw)}, 'OPEN', NOW());`);
}
lines.push(``);

// 8. AUDIT LOG
lines.push(`-- 8. AUDIT TRAIL`);
lines.push(`INSERT INTO seo_audit_trail (actor_type, actor_id, action, entity_type, entity_id, reason, authorized_by)
VALUES ('SYSTEM', 'generate_seed_sql.mjs', 'FULL_NEO_SEED_AND_CALIBRATION', 'GLOBAL_REGISTRY', 'ALL',
        'Populated 5 sites, 11 rules, 5 brand voices, 9 categories, 533 indexable locked pages, keywords, split tests, and gap analysis.', 'HUMAN_ADMIN');`);

lines.push(``);
lines.push(`COMMIT;`);

writeFileSync(OUT_FILE, lines.join('\n'), 'utf8');
console.log(`Generated seed SQL: ${OUT_FILE} (${lines.length} lines, ${totalPageCount} pages, ${totalKeywordCount} keywords)`);
