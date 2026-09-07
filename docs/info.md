# myCHEF Hawaii — Build Research Handoff (for Designer & Builders)

## Mission
Build the complete myCHEF Hawaii digital ecosystem as ONE React+Vite app presenting FIVE distinct websites:
- `/` — statewide hub (mychef-hawaii.com equivalent): authority, island chooser, statewide pricing/guides, trust
- `/oahu/*` — Oʻahu site ("Modern Pacific Metropolitan Luxury")
- `/maui/*` — Maui site ("Cinematic Resort-Villa Hospitality")
- `/kauai/*` — Kauaʻi site ("Organic Estate Luxury")
- `/bigisland/*` — Big Island site ("Volcanic Minimalism")

Each island site MUST look and feel like a deliberately different website (different hero concept, typography pairing, palette, spacing rhythm, section sequencing, card language, motion signature, footer) while sharing the brand name and engineering platform. This is the client's absolute rule.

## Mandatory reading (ground truth — do not improvise strategy)
- Design theses, tokens, fonts, wireframes, image direction: `/mnt/agents/output/mychef-hawaii-discovery_sec06.md` (Chapter 6)
- Full 531-page sitemaps + URL registry + page categories/waves: `/mnt/agents/output/mychef-hawaii-discovery_sec04.md` (Chapter 4)
- Published pricing corpus (USE THESE EXACT NUMBERS — they are approved/published): `/mnt/agents/output/mychef-hawaii-discovery_sec01.md` (Chapter 1) and commercial architecture/products/menus/wedding-week: `mychef-hawaii-discovery_sec05.md` (Chapter 5)
- Competitor/pricing evidence: `mychef-hawaii-discovery_sec02.md`; keywords/FAQ bank/seasonality: `mychef-hawaii-discovery_sec03.md`; technical/analytics: `mychef-hawaii-discovery_sec07.md`
- Research source files: `/mnt/agents/output/research/mychef_hi_dim01..08.md`

## Key approved business facts (use verbatim)
- Signature/CORE dinner per guest: Oʻahu $125–$190 · Maui $150–$250 · Kauaʻi $150–$250 · Big Island $150–$225 (ENTRY tier from $110; Premium $190–$275; Chef's table $275–$400+)
- Stay Chef day rates: Oʻahu $850 · Maui $1,050 · Kauaʻi $1,100 · Big Island $950
- Date Night from: Oʻahu $450 · Maui $500+ · Kauaʻi $650–$950 · Big Island $550
- Packaged bar cart: from $650/4hr + $45pp (Oʻahu) to $850 + $60pp (Kauaʻi)
- Staffing: server $55/hr, sous chef $75/hr · Kamaʻāina weekly from $300/wk
- Fee stack (always itemized): 20% service charge + Hawaiʻi GET up to 4.7120% on its own line + 50% deposit; gratuity voluntary; groceries at cost with receipts; written quote is the confirmed total
- Trust posture: NO fake reviews, no invented addresses/chefs/awards. Honesty-register voice. Contact = quote form + WhatsApp.
- Never display obsolete 4.166% GET. Big Island hero must NOT say "from $125" (known bug — CORE is $150–$225).

## Site architecture contract (shared engine, different experiences)
- One app, island route trees: `/` hub; `/oahu`, `/maui`, `/kauai`, `/bigisland` prefixes.
- Every island implements its FULL sitemap from Chapter 4 as real routes: core commercial pages, services, locations, menus, occasions, pricing, wedding cluster, retreat (Kauaʻi), guides, trust/legal. Data-driven category templates fed by per-island content modules; flagship pages (homepages, /private-chef, /pricing, /catering, /weddings, /quote) are bespoke per island.
- Quote experience: premium multi-step flow with conditional logic (island → service → date/guests → details → contact), ending in WhatsApp/mailto handoff. One primary + one secondary CTA per page.
- SEO layer: per-page title/meta/OG, JSON-LD (Organization, FoodService, Service, FAQPage, BreadcrumbList — NO fake AggregateRating/Review), sitemap.xml + robots.txt in public/.

## Image system
Generate real AI images (plugin script: `python3 /app/.agents/plugins/image_generation/scripts/image_generation_tool.py generate --description "..." --ratio 16:9 --resolution 2K --output <path>`). Follow Chapter 6's per-island image art direction: Oʻahu=blue-hour metropolitan/editorial; Maui=golden-hour cinematic; Kauaʻi=overcast botanical tactility; Big Island=hard low sun / basalt contrast. No AI clichés (no generic poke bowls, no costume imagery, no fake text, realistic hands/food). Unique hero per island site; no cross-island reuse.

## Copy voice
Premium, precise, human. Specificity beats adjectives ("Your chef shops that morning, arrives before service, cooks in your villa kitchen, serves dinner and leaves the kitchen clean."). Banned: "unforgettable culinary journey", "world-class", "exquisite", "bespoke", "elevate your experience", keyword-stuffed sentences.