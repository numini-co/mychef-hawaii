# Dimension 01 — Existing myCHEF Hawaii Web Properties: Full Audit

**Research date:** 2026-09-06 · **Researcher:** Sub-agent dimension 01 (historical/legacy audit)
**Properties audited:** `mychef-hawaii.com` (statewide hub) + `oahu.`, `maui.`, `kauai.`, `bigisland.` subdomains
**Method:** 20+ direct page fetches (web_open_url), full XML sitemap extraction (637 URLs), robots.txt, HTTP header/HTML-head inspection, Google `site:` index queries, HTTP status probes. Every factual claim below is quoted or paraphrased from a fetched page with an inline citation; anything not directly verifiable is marked **UNVERIFIED**.

---

## 0. Executive Summary

- The current network is a **Next.js/Vercel site** launched in "launch" posture: it openly states it has **no Hawaii reviews, no named chefs, no 808 phone number, no street office, no founding year**, and refuses to invent them.[^10^][^11^] The parent brand "myCHEF" is described as operating private-chef services internationally (Bali/Dubai mentioned in indexed snippets), with Hawaii "launching now."[^10^][^24^]
- **Scale:** 637 URLs across 5 hosts in the sitemap (hub 94, Oʻahu 136, Maui 135, Kauaʻi 134, Big Island 138).[^2^] The apex `mychef-hawaii.com/sitemap.xml` is a **network-wide mega-sitemap** listing all five hosts; each subdomain also serves its own sitemap.[^2^]
- **Key pages live outside the sitemap:** `/pricing`, `/quote`, `/trust`, `/legal`, `/corporate` on the hub and `/pricing`, `/quote`, `/private-chef`, `/bar` on subdomains all return 200 but are **absent from the XML sitemaps** — despite being the site's most-linked conversion pages.[^2^][^25^]
- **Location/neighborhood pages DO exist** — but only on the island subdomains (`/wailea`, `/honolulu`, `/princeville`, `/kona`, etc., ~30 corridor pages total). The hub deliberately avoids location URLs: *"Neighborhood corridors live on the island hosts — /wailea on Maui, /waikiki on Oʻahu… They are not hub paths."*[^1^]
- **Editorial depth is the biggest weakness:** journal and blog "articles" are 2–4 sentence doorway/"picker" stubs whose visible copy leaks **internal SEO annotations** like *"Private chef Oahu (90) stays on this host's home"* and *"Oahu catering (720) stays on /catering"* (keyword + monthly search volume notes rendered to users).[^13^][^15^][^22^]
- **Pricing is published, specific, and consistent** — the site's core asset (see §3 for the full verbatim tariff).[^8^][^21^][^23^]

---

## 1. URL Inventory

Source: `https://mychef-hawaii.com/sitemap.xml` (network-wide, 637 URLs) + per-host sitemaps, fetched 2026-09-06.[^2^] robots.txt is wide open (`Allow: /`, declares the sitemap).[^3^]

### 1.1 Counts by host and page type

| Host | Total | Home | Top-level pages | /journal | /blog | /events/* | /catering/* | /fine-dining/* | /staffing/* | /menus/* | /help/* |
|---|---|---|---|---|---|---|---|---|---|---|---|
| mychef-hawaii.com | 94 | 1 | 27 | 10 | 27 | 7 | 6 | 4 | 3 | 4 | 5 |
| oahu.mychef-hawaii.com | 136 | 1 | 54 | 11 | 41 | 7 | 6 | 4 | 3 | 4 | 5 |
| maui.mychef-hawaii.com | 135 | 1 | 53 | 11 | 41 | 7 | 6 | 4 | 3 | 4 | 5 |
| kauai.mychef-hawaii.com | 134 | 1 | 53 | 11 | 40 | 7 | 6 | 4 | 3 | 4 | 5 |
| bigisland.mychef-hawaii.com | 138 | 1 | 55 | 11 | 42 | 7 | 6 | 4 | 3 | 4 | 5 |

### 1.2 Hub (mychef-hawaii.com) — 94 URLs

| Type | URLs |
|---|---|
| Core/service | `/`, `/catering`, `/weddings`, `/mobile-bar`, `/about`, `/personal-chef`, `/chefs-table`, `/private-chef-cost`, `/meal-prep`, `/cooking-classes`, `/omakase-at-home`, `/honeymoon-dinners`, `/kids-menus`, `/rehearsal-dinners`, `/retreat-catering`, `/corporate-catering`, `/fine-dining`, `/staffing`, `/events`, `/menus`, `/dietary`, `/guest-counts` |
| Info/support | `/faq`, `/coverage`, `/contact`, `/locations`, `/help`, `/what-we-dont-do` |
| Events sub | `/events/birthdays`, `/events/welcome-dinners`, `/events/retreats`, `/events/anniversaries`, `/events/corporate-events`, `/events/villa-parties`, `/events/brunch` |
| Catering sub | `/catering/bbq`, `/catering/plated`, `/catering/family-style`, `/catering/buffet`, `/catering/grazing`, `/catering/drop-off` |
| Fine-dining sub | `/fine-dining/romantic-dinner`, `/fine-dining/tasting-menu`, `/fine-dining/chefs-table-evening`, `/fine-dining/celebration-dinner` |
| Staffing sub | `/staffing/servers`, `/staffing/bartenders`, `/staffing/butlers` |
| Menus sub | `/menus/three-course`, `/menus/family-style-menu`, `/menus/breakfast`, `/menus/lunch` |
| Help sub | `/help/getting-started`, `/help/menu-guide`, `/help/wedding-guide`, `/help/corporate-guide`, `/help/managing-booking` |
| Journal (10) | `/journal/how-much-does-a-private-chef-cost`, `/journal/how-to-hire-a-private-chef`, `/journal/villa-kitchens`, `/journal/dietary-needs`, `/journal/what-is-included`, `/journal/how-far-ahead-to-book`, `/journal/private-chef-vs-restaurant`, `/journal/wedding-week`, `/journal/vacation-chef-week`, `/journal/travel-zones` |
| Blog (27) | `/blog/grocery-at-cost`, `/blog/wine-and-alcohol`, `/blog/weather-backup`, `/blog/sourcing-honesty`, `/blog/cleanup-standard`, `/blog/condo-load-in`, `/blog/family-reunions`, `/blog/photoshoot-catering`, `/blog/proposal-dinners`, `/blog/estate-logistics`, `/blog/shoulder-season`, `/blog/named-farms`, `/blog/fish-species`, `/blog/coffee-labeling`, `/blog/peak-season`, `/blog/no-fake-reviews`, `/blog/anniversary-dinners`, `/blog/kids-at-the-table`, `/blog/breakfast-in-the-villa`, `/blog/lunch-service`, `/blog/staffing-servers`, `/blog/bartender-add-on`, `/blog/welcome-dinner`, `/blog/day-after-brunch`, `/blog/rehearsal-dinner`, `/blog/corporate-offsites`, `/blog/retreat-full-board` |
| **Live but NOT in sitemap** (HTTP 200 verified) | `/pricing`, `/quote`, `/trust`, `/legal`, `/corporate` [^25^] |
| **Location pages on hub** | **None — by design** ("They are not hub paths") [^1^] |

### 1.3 Oʻahu (oahu.mychef-hawaii.com) — 136 URLs

| Type | URLs |
|---|---|
| **Location/corridor pages** | `/honolulu`, `/waikiki`, `/kailua`, `/north-shore`, `/kahala`, `/ko-olina`, `/gold-coast`, `/lanikai`, `/hawaii-kai`, `/diamond-head`, `/kakaako`, `/downtown`, `/kaneohe`, `/ewa` (14) |
| Island-specific service | `/kamaaina`, `/personal-chef`, `/vacation-chef`, `/short-stay`, `/conventions`, `/corporate`, `/gatherings`, `/islands` |
| Standard set (mirrored on all islands) | `/catering`, `/weddings`, `/mobile-bar`, `/faq`, `/coverage`, `/how-it-works`, `/menus`, `/about`, `/events`, `/legal`, `/journal`, `/blog`, `/locations`, `/areas`, `/contact`, `/trust`, `/services`, `/help`, `/fine-dining`, `/staffing`, `/sitemap`, `/what-we-dont-do`, `/guest-counts`, `/dietary`, `/honeymoon-dinners`, `/chefs-table`, `/kids-menus`, `/rehearsal-dinners`, `/meal-prep`, `/cooking-classes`, `/omakase-at-home`, `/corporate-catering`, `/retreat-catering`, `/private-chef-cost` |
| Sub-directories | Identical 7 events/*, 6 catering/*, 4 fine-dining/*, 3 staffing/*, 4 menus/*, 5 help/* as hub |
| Journal (11) | Same 10 hub slugs + `/journal` index |
| Blog (41) | 13 dining-in-* posts (`dining-in-honolulu`, `-waikiki`, `-kailua`, `-north-shore`, `-kahala`, `-ko-olina`, `-lanikai`, `-hawaii-kai`, `-diamond-head`, `-kakaako`, `-downtown`, `-kaneohe`, `-ewa`) + same 27-topic set as hub + index |
| **Live but NOT in sitemap** | `/pricing`, `/quote`, `/private-chef` (200); `/locations/waikiki` (301 redirect) [^24^][^25^] |

### 1.4 Maui (maui.mychef-hawaii.com) — 135 URLs

| Type | URLs |
|---|---|
| **Location/corridor pages** | `/wailea`, `/kaanapali`, `/lahaina`, `/kihei`, `/kapalua`, `/makena`, `/south-maui`, `/west-maui`, `/upcountry`, `/napili`, `/paia`, `/makawao`, `/honokowai`, `/waikapu`, `/haleakala` (15) |
| Island-specific | `/wedding-week`, `/personal-chef`, `/vacation-chef`, `/corporate`, `/gatherings`, `/islands` |
| Standard set | Same ~40 mirrored slugs as Oʻahu (see 1.3) |
| Sub-directories | Same 31 sub-URLs as hub |
| Journal (11) / Blog (41) | Same journal slugs; blog adds `dining-in-wailea`, `-kaanapali`, `-lahaina`, `-kihei`, `-kapalua`, `-makena`, `-upcountry`, `-napili`, `-paia`, `-honokowai`, `-makawao`, `-waikapu`, `-haleakala` |
| **Live but NOT in sitemap** | `/pricing`, `/quote` (incl. parameterized `/quote?island=maui&service=wedding` — indexed), `/wedding-catering` (301) [^24^][^25^] |

### 1.5 Kauaʻi (kauai.mychef-hawaii.com) — 134 URLs

| Type | URLs |
|---|---|
| **Location/corridor pages** | `/princeville`, `/poipu`, `/hanalei`, `/kapaa`, `/north-shore`, `/south-shore`, `/haena`, `/koloa`, `/lihue`, `/kalaheo`, `/waimea`, `/hanapepe`, `/anahola`, `/eleele`, `/hanalei-bridge` (15) |
| Island-specific | `/wedding-week`, `/personal-chef`, `/vacation-chef`, `/corporate`, `/gatherings`, `/islands` |
| Standard set | Same mirrored slugs as Oʻahu/Maui |
| Journal (11) / Blog (40) | Same journal slugs; blog adds dining-in-* for its corridors |
| **Live but NOT in sitemap** | `/pricing` (indexed by Google), `/bar`, `/kauai/events` (odd nested path, 200) [^24^][^25^] |

### 1.6 Hawaiʻi Island (bigisland.mychef-hawaii.com) — 138 URLs

| Type | URLs |
|---|---|
| **Location/corridor pages** | `/kona`, `/kailua-kona`, `/keauhou`, `/holualoa`, `/kohala`, `/kohala-corridor`, `/waikoloa`, `/mauna-kea`, `/mauna-lani`, `/puako`, `/waimea`, `/hilo`, `/volcano`, `/honokaa`, `/kau`, `/east-side` (16) |
| Island-specific | `/ironman-weeks`, `/coffee-act-198` (Kona coffee labeling law content), `/personal-chef`, `/vacation-chef`, `/corporate`, `/gatherings`, `/islands` |
| Standard set | Same mirrored slugs as other islands |
| Journal (11) / Blog (42) | Same journal slugs; blog adds dining-in-* for its corridors |
| **Live but NOT in sitemap** | `/pricing`, `/private-chef` (indexed), `/bigisland/catering` (odd nested path, 200) [^24^][^25^] |

---

## 2. Products & Services Offered (as published)

From homepages, pricing pages, and service pages:[^1^][^4^][^5^][^6^][^7^][^8^][^18^]

1. **Signature dinner** (a.k.a. "Villa dinner", "CORE") — coursed in-villa dinner; band includes "menu design, same-day shopping, cooking, table service, cleanup"; groceries inside the band.
2. **Stay Chef** — multi-day chef day rate; "groceries billed at cost with receipts"; extra meals quoted same-day; full-board available.
3. **Date Night / dinner for two / elopement** — fixed-price evening for two.
4. **Wedding week** — "welcome dinner, rehearsal, reception, recovery brunch as separate lines"; per-guest food + hourly staffing.
5. **Catering** — staffed villa/estate events "10–75 guests"; formats: buffet, plated, family-style, grazing, pūpū, BBQ, drop-off. *"Over seventy-five is a written exception, never implied as standard."*[^18^]
6. **Mobile bar / "Packaged cart"** — 4-hour bar package; bartenders also as staffing add-on.
7. **Personal chef / kamaʻāina weekly line** — resident household cook day, "from $300 a week plus groceries" (Oʻahu).[^4^]
8. **Vacation chef / multi-day** — per-person/day program.
9. **Meal prep, cooking classes, omakase-at-home, chefs-table, kids menus, honeymoon dinners, rehearsal dinners, retreat & corporate catering, event staffing** (servers/bartenders/butlers) — each with dedicated URLs.[^2^]
10. **Explicitly declined:** hotel rooms without kitchens, "ballrooms", "citywide convention holds", restaurant-style bookings, named-chef marketplace bookings.[^1^][^18^]

---

## 3. Published Pricing — Verbatim Record (USD)

### 3.1 Statewide summary (hub /pricing and homepage)

> "Signature dinner: $125–$190 a guest on Oʻahu, $150–$250 on Maui and Kauaʻi, $150–$225 on Hawaiʻi Island (Table from $110). Stay Chef day rates from $850 Oʻahu / $1,050 Maui / $1,100 Kauaʻi / $950 Hawaiʻi Island."[^8^]

> "What is added once, as its own lines: 20% service, Hawaiʻi GET up to 4.712%, and a 50% deposit to lock the date. Gratuity is voluntary."[^8^]

Homepage shorthand: *"Signature dinner from $125 a guest on Oʻahu and $150 on Maui and Kauaʻi. Stay Chef from $850 a day on Oʻahu."*[^1^]

### 3.2 Oʻahu rate card (/pricing, oahu host)[^21^]

| Line | Price (verbatim) |
|---|---|
| Table | $95–$125 per guest, groceries included |
| Signature (CORE) | $125–$190 per guest, groceries included |
| Premium | $190–$275 per guest |
| Chef's table | $275–$400+ per guest, quoted manually |
| Stay Chef | from $850/day |
| Packaged cart | from $650/4 hr + $45/guest |
| Dinner for two / elopement | from $450 per event |
| Wedding reception / week | from $125 per person + staffing |
| Vacation chef / multi-day | from $179–$300+ per person/day |
| Weekly meal prep (kamaʻāina) | from $300–$1,200 per week |
| Event staffing | from $55/hr (server); sous-chef $75/hr; 4–5 hr minimums |
| Travel beyond base | from $75 (North Shore/Turtle Bay surcharge) |

### 3.3 Maui[^5^][^14^]

- Villa dinner **$150–$250/guest**; Stay Chef **from $1,050/day**; Wedding week **from $150/guest + staffing**; Packaged cart **from $800/4 hr**; Date Night **from $500+**; Upcountry travel **from $75** ("Upcountry quoted", Pāʻia/Haʻikū quote-only).

### 3.4 Kauaʻi (/pricing, kauai host)[^23^]

| Line | Price (verbatim) |
|---|---|
| Table | $125–$150 per guest |
| Signature (CORE) | $150–$250 per guest |
| Premium | $250–$350 per guest |
| Chef's table | $350+ per guest |
| Stay Chef | from $1,100/day |
| Packaged cart | from $850/4 hr + $60/guest |
| Dinner for two / elopement | from $650–$950 per event |
| Wedding week | from $175 per person + staffing |
| Vacation chef / multi-day | from $250–$300+ per person/day |
| Weekly meal prep | from $550–$1,200 per week |
| Staffing | server $55/hr; sous $75/hr; four-hour floor |
| Travel | "from $50–$75 Princeville / Poʻipū surcharge · far-North quote-only"; Hāʻena needs 72-hour notice [^6^] |

### 3.5 Hawaiʻi Island[^7^]

- Villa dinner CORE **$150–$225/guest**; **ENTRY from $110/guest**; PREMIUM above CORE; Stay Chef **from $950/day**; Wedding week **from $150/guest + staffing**; Packaged cart **from $725/4 hr**; Date Night **from $550**; travel outside Kona–Kohala corridor **from $75 zone line** ("east side is its own quote"); staffing server $55/hr, sous $75/hr, 4-hr floor.
- Homepage hero inconsistency: Big Island homepage banner says *"Signature dinner from $125 a guest, Hawaiʻi Island"* while its own card and the hub say CORE starts at $150 with ENTRY from $110.[^7^] **Flag for rebuild copy QA.**

### 3.6 Fee stack (all islands, consistent)[^8^][^19^][^20^]

> "Service charge — 20% market convention; distributed to staff or disclosed in writing (HRS §481B-14 posture) · GET — up to 4.7120% incl. county surcharge, shown as its own line, valid through Dec 31, 2030 · Booking deposit — 50% market norm, locks your date · Gratuity — always voluntary, never hidden in the bill."[^19^]

> "We will never display the obsolete 4.166% figure."[^19^]

Cancellation posture (proposed, "pending attorney review"): "28+ days partial refund posture; 14–28 days deposit retained; under 7 days full balance posture. Force-majeure (road closures, flood advisories, Hanalei bridge) reschedules rather than forfeits."[^19^]

---

## 4. Terminology & Brand Voice

Product/brand vocabulary used consistently across the network:[^1^][^4^][^8^][^18^]

- **"Signature dinner"** / **"CORE"** band; tiers **Table / Signature / Premium / Chef's table** (Big Island: **ENTRY / CORE / PREMIUM**).[^7^][^21^]
- **"Stay Chef"** — proprietary multi-day day-rate product name.[^1^]
- **"Date Night"**, **"Family Feast"**, **"Packaged cart"** (bar), **"kamaʻāina line"** (weekly resident service), **"wedding week"**, **"recovery brunch"**, **"corridor"** (service-area geography), **"base zone"** vs **"published zone line/surcharge"**.[^4^][^5^][^18^]
- **"The written quote is the confirmed total — never a chat estimate"** — repeated mantra; hub /pricing calls itself **"the tariff"**, /private-chef-cost **"the stack"**.[^8^][^16^]
- Voice: terse, declarative, anti-hype ("honesty as inventory"). Signature lines: *"We will not pretend a coffee maker and a minibar are a pass"*; *"Honesty is the inventory"*; *"We do not laminate a fake carte"*; *"A dinner for six is not a reception for sixty"*; *"The table is yours. The guest list is yours. The night ends when you say it ends."*[^1^][^7^]
- Copy eschews a "named-chef marketplace" identity: *"You book myCHEF Hawaii. We staff the crew to the size of the house."*[^1^]
- Diacritics used in body copy (Oʻahu, Kauaʻi, Hawaiʻi, Kāʻanapali, Poʻipū, Waikīkī, lānai, pūpū) but **URL slugs and title tags use ASCII** (oahu, waikiki, poipu) — a deliberate SEO convention.[^2^][^4^]

---

## 5. Trust Posture (verbatim evidence)

- **No-reviews policy:** *"We do not yet have Hawaiʻi guest reviews. We will not invent them, buy them, or write them in-house. Reviews publish after verified events. Until then the proof is published prices, sample menus, cleanup, and a written quote."*[^1^] The /trust page is styled as an **"Honesty register"** with status chips: reviews "NOT AVAILABLE — YET", local awards/press "PROHIBITED — LAUNCH GATE", farm claims "PENDING — WRITTEN VERIFICATION", itemised fees "VERIFIED — POLICY".[^10^]
- **Identity minimalism:** *"We do not publish an 808 number, a street office, a founding year, or chef names. Contact is the quote form and WhatsApp."*[^1^]
- **Photo disclaimer (unusual, candid):** About-page photos of large crews carry the caption *"They illustrate how a booking is crewed. They are not a claim that twenty-five W-2 employees live on every island."*[^11^]
- **Sourcing honesty:** farm/producer names printed only with written verification; Big Island page invokes Kona coffee origin-labeling ("coffee-act-198" URL exists).[^7^][^2^]
- **Legal page candor:** cancellation tiers and deposit windows are explicitly *"proposed until counsel drafts the booking terms"* / *"pending attorney review"*; licenses/insurance "publish here when issued and verifiable. We do not display license numbers or certificates we don't hold."[^19^]
- **Parent-brand claim:** indexed snippets state *"Part of the myCHEF family. Bali Verified — International; Dubai Verified — International"* — international operating history is claimed via meta/snippets; the Hawaii entity itself is self-described as launching.[^24^] The extent/verifiability of Bali/Dubai operations is **UNVERIFIED** in this audit.
- **No licensing, insurance, food-handler, or health-permit specifics published anywhere** (by their own admission).[^19^]

---

## 6. Content Strengths

1. **Radical price transparency.** Full per-island rate cards with tiers, day rates, staffing hourlys, travel surcharges, deposit %, service %, GET % — almost no competitor publishes this. Consistent across hub + 4 subdomains.[^8^][^21^][^23^]
2. **Distinctive, ownable brand voice.** Terse "honesty register" tone; quotable lines; consistent across 600+ pages. Differentiates from generic luxury-chef copy.[^1^][^10^]
3. **Deep local operational knowledge.** Hanalei bridge closure clause, Ironman-week compression, Kona–Hilo same-day refusal ("a logistics fantasy"), Ko Olina provisioning runs, Waikīkī freight-elevator/COI logistics, North Shore Oʻahu 60–90+ min drive policy, Upcountry elevation surcharge.[^4^][^5^][^6^][^7^]
4. **Clear service-area taxonomy:** base zones vs published zone lines vs quote-only areas, per island.[^1^][^19^]
5. **Trust architecture as content:** /trust honesty register, /what-we-dont-do, /legal with HRS §481B-14 service-charge posture and GET-through-2030 accuracy, explicit no-fake-reviews stance.[^10^][^19^]
6. **Comprehensive service taxonomy:** ~40 service/format pages per host (catering formats, staffing roles, menu types, event types, help guides).[^2^]
7. **Rich structured data:** Organization, WebPage, LocalBusiness (with priceRange "$125–$250"), OfferCatalog with min/max USD price specifications, FoodService, FAQPage JSON-LD on the homepage.[^25^]
8. **Sample menus** (3-course per island + estate catering menu) give concrete product imagery: ahi poke, miso-glazed/macadamia-crusted catch, lilikoi cheesecake.[^4^][^5^][^18^]

## 7. Content Weaknesses

1. **Journal/blog are thin doorway stubs.** Sampled hub journal article = 3 sentences + "Open the island document below. Kauaʻi and Hawaiʻi Island stay inquiry."[^13^] Sampled Oʻahu blog post = ~4 short paragraphs, mostly cross-links.[^22^] ~150 journal/blog URLs network-wide with little substantive editorial content — classic thin-content risk.
2. **Internal SEO notes leak into visible copy.** Verbatim: *"Private chef Oahu (90) stays on this host's home. This article does not steal that title."*[^15^] *"Oahu catering (720) stays on /catering."*[^22^] *"hawaii catering (210) stays on hub /catering."*[^13^] *"Private chef Maui (260) stays on this host's home."*[^20^] *"Oahu catering is the larger door (720/mo)"* (indexed meta description).[^24^] These are keyword-volume/canonicalization annotations exposed to users and Google — amateur-hour signal on an otherwise polished site.
3. **Extreme copy repetition.** Every page ends with an identical "Where we cook" locations block + identical footer slogan (*"Published prices. Written quote. 20% service and Hawaiʻi GET are their own lines. Oʻahu Signature $125–$190 a guest. Maui $150–$250."*)[^1^][^4^] — the Oʻahu home even renders the locations block **twice** in a row.[^4^] The 31 sub-directory pages (events/*, catering/*, etc.) are cloned across all 5 hosts.
4. **Zero social proof.** No reviews, no testimonials, no chef bios, no client stories, no event photos with real captions (photos are illustrative stock-style AI-looking imagery).[^10^][^11^]
5. **No business identity.** No phone, no address, no founding year, no team names, no email address published (contact = form + WhatsApp only).[^1^] Conversion friction + local SEO (NAP) void.
6. **Pricing inconsistency:** Big Island hero says Signature "from $125" while its own rate card says CORE $150–$225 / ENTRY from $110.[^7^] Hub /pricing tiers labeled Table/Signature/Premium while island copy uses ENTRY/CORE — terminology drift.[^7^][^8^][^21^]
7. **Self-aware hedging everywhere** ("inquiry-stage", "proposed tiers pending attorney review", "launch gate") is honest but reads as not-open-for-business on Kauaʻi/Big Island.[^6^][^19^]
8. **Duplicate/odd URL artifacts indexed:** `/bigisland/catering` on the bigisland host, `/kauai/events` on the kauai host, parameterized `/quote?island=maui&service=wedding` — all live/indexed, suggesting loose routing/canonical hygiene.[^24^][^25^]

## 8. Design/UX & SEO Observations

**Technical (observed from headers/markup):**[^25^]
- Next.js on Vercel (`x-powered-by: Next.js`, `server: Vercel`, `/_next/` assets), server-rendered HTML, canonical tags, meta descriptions on every sampled page, multiple JSON-LD blocks (Organization, LocalBusiness, OfferCatalog, FoodService, FAQPage).
- `cache-control: private, no-cache, no-store` on the homepage — **edge caching disabled** (x-vercel-cache: MISS); potential TTFB/perf concern.
- Heavy imagery: full-bleed hero PNGs (`/photos/heroes/hero-hub.png`) served via `/_next/image` with srcset 640–3840w. Imagery is polished but appears AI-generated/stock-illustrative, and About explicitly disclaims photos as illustrative.[^11^][^25^]
- robots.txt fully open; sitemap declared.[^3^] But note §0: money pages (/pricing, /quote, /trust, /legal) are **missing from the sitemap** while thin /blog and /journal stubs are included — an inverted priority signal.[^2^][^25^]
- Sitemap priorities: home 1.0/0.9, catering & weddings 0.8, everything else 0.55–0.6 — flat below the top tier.[^2^]
- Claims WCAG 2.2 AA ("contrast-checked, keyboard-navigable, reduced-motion respected") — **UNVERIFIED** by this audit.[^19^]

**SEO strategy (visible):**
- **Subdomain-per-island architecture**, each subdomain owning its island phrase: *"This home still owns private chef Oahu"* / *"Hub `/` owns private chef Hawaii. This page is the tariff."*[^8^][^15^] Explicit canonicalization-in-copy to prevent internal cannibalization ("This page does not steal that title").[^15^]
- **Title-tag patterns:** `Private Chef Hawaii | Four Island Villa Chefs | myCHEF` (hub), `Private Chef Oahu | Villa and Household Chefs | myCHEF`, `Private Chef Kauai | Both Shores — Inquiry | myCHEF`, corridor pages like `Private chef Wailea Maui — from $150/pp | myCHEF` (price-in-title).[^1^][^4^][^6^][^14^]
- **Location URL strategy:** hub has zero location pages by design (*"They are not hub paths"*); ~60 corridor/neighborhood pages live on island subdomains, plus ~54 `blog/dining-in-*` posts targeting neighborhood queries.[^1^][^2^] (The brief's assumption that the site "avoids location URLs and neighborhood pages" holds **only for the apex domain** — the subdomains are saturated with them.)
- Keyword-stuffing echoes remain in meta descriptions, e.g. Maui home description repeats *"Best private chef Maui from $150/pp"* twice.[^24^]
- Google indexation confirmed via site: queries for all 5 hosts, but only ~40 results surfaced — plausible the site is young/partially indexed. **Exact index counts UNVERIFIED** (search tool returned no reliable count).[^24^]

**UX (inferred from markup/text):**
- Single conversion door: 5-field /quote form (island, dates, party size, service, contact) + WhatsApp; *"The button is not 'Book now.'"*[^9^] No account, no online payment, no live availability. Deliberately low-friction but zero instant booking.
- Kauaʻi/Big Island CTAs lead to an "inquiry list" rather than a quote — a second-class funnel.[^6^][^9^]
- Persistent redundant footer/locations block on every page adds scroll weight without value.[^1^]

## 9. Preservation Candidates (carry into rebuild)

1. **The complete pricing corpus** — all rate cards, fee-stack rules, deposit/cancellation posture (§3). Highest-value content on the site; unique vs competitors.[^8^][^19^][^21^][^23^]
2. **The trust/honesty framework** — /trust honesty register, no-fake-reviews policy, photo disclaimers, HRS §481B-14 service-charge handling, GET 4.7120%-through-2030 accuracy, "never the obsolete 4.166%".[^10^][^19^]
3. **Terminology system** — Signature dinner, Stay Chef, Date Night, Family Feast, Packaged cart, kamaʻāina line, CORE band, "the tariff"/"the stack", corridor/base-zone language.[^1^][^8^]
4. **Operational-truth content** — Hanalei bridge clause, Ironman week, Kona–Hilo same-day refusal, Waikīkī COI/freight logistics, Ko Olina provisioning, Upcountry surcharge logic.[^4^][^5^][^6^][^7^]
5. **Sample menus** per island + estate catering menu.[^4^][^5^][^18^]
6. **/legal page structure** — 7-section fine-print-in-large-type model (quotes, deposits, cancellation/weather, GET, service charge, licensing, privacy/WCAG).[^19^]
7. **Voice** — terse anti-hype copy style; selectively.[^1^]
8. **URLs with potential search equity** (keep + 301 if restructured): the 5 homepages, `/pricing` (all 5 hosts — despite sitemap omission, Kauaʻi's is indexed[^24^]), `/catering`, `/weddings`, `/private-chef-cost`, corridor pages (`/wailea`, `/honolulu`, `/kahala`, `/princeville`, `/kona`, `/waikoloa` — several confirmed indexed[^24^]), `/journal/how-much-does-a-private-chef-cost`, `/trust`, `/legal`, `/quote`.

## 10. Migration Risks

1. **637 URLs across 5 hosts** — a rebuild consolidating subdomains into path-based routing (or vice versa) requires a full 301 map; the cloned 31-sub-page × 5-host block and ~150 thin blog/journal URLs are prune candidates but each needs a redirect decision.[^2^]
2. **Money pages outside the sitemap** (/pricing, /quote, /trust, /legal on all hosts) — easy to overlook in a crawl-based migration inventory; several are indexed.[^24^][^25^]
3. **Indexed orphan/artifact URLs** (`/bigisland/catering`, `/kauai/events`, `/quote?island=maui&service=wedding`, 301s like `/locations/waikiki`, `/wedding-catering`) indicate historical URL variants exist beyond the sitemap; a pre-migration crawl + log/GSC export is essential. **UNVERIFIED:** full set of legacy redirects.[^24^][^25^]
4. **Keyword-ownership scheme** (hub owns "private chef Hawaii", each subdomain owns its island phrase, corridors own neighborhoods) is enforced in copy; a naive consolidation could collapse this and create cannibalization or equity loss.[^1^][^15^]
5. **Structured data richness** (OfferCatalog with prices, FAQPage, LocalBusiness) must be re-implemented or rich-result eligibility is lost.[^25^]
6. **Subdomain equity split:** 5 hosts each accumulate authority separately; any domain consolidation changes the link-equity equation. Inbound-link profile **UNVERIFIED** in this audit.
7. **Copy inconsistencies to fix, not migrate** (Big Island "$125" hero vs $150 CORE; ENTRY/Table naming drift; duplicated locations block; leaked SEO annotations).[^4^][^7^][^15^]
8. **No verifiable business identity** (no NAP, license, insurance) — the rebuild will need real trust assets if the business has since matured; migrating the "launch posture" verbatim could anchor the brand as perpetually-new.[^10^][^19^]

---

## Sources (all accessed 2026-09-06)

1. https://mychef-hawaii.com/ — hub homepage
2. https://mychef-hawaii.com/sitemap.xml — network-wide sitemap (637 URLs; per-host sitemaps at each subdomain /sitemap.xml)
3. https://mychef-hawaii.com/robots.txt
4. https://oahu.mychef-hawaii.com/ — Oʻahu homepage
5. https://maui.mychef-hawaii.com/ — Maui homepage
6. https://kauai.mychef-hawaii.com/ — Kauaʻi homepage
7. https://bigisland.mychef-hawaii.com/ — Hawaiʻi Island homepage
8. https://mychef-hawaii.com/pricing — statewide tariff
9. https://mychef-hawaii.com/quote — quote mechanism
10. https://mychef-hawaii.com/trust — honesty register
11. https://mychef-hawaii.com/about — brigade/about, photo disclaimer
12. https://mychef-hawaii.com/blog/no-fake-reviews — review-policy blog stub
13. https://mychef-hawaii.com/journal/how-much-does-a-private-chef-cost — hub journal stub
14. https://maui.mychef-hawaii.com/wailea — corridor page sample
15. https://oahu.mychef-hawaii.com/journal/how-much-does-a-private-chef-cost — island journal stub w/ leaked SEO note
16. https://oahu.mychef-hawaii.com/private-chef-cost — Oʻahu fee stack
17. https://oahu.mychef-hawaii.com/kamaaina — resident weekly line
18. https://mychef-hawaii.com/catering — catering service page
19. https://mychef-hawaii.com/legal — legal/booking notes (GET, HRS §481B-14, cancellation posture)
20. https://maui.mychef-hawaii.com/legal — Maui legal variant
21. https://oahu.mychef-hawaii.com/pricing — Oʻahu rate card
22. https://oahu.mychef-hawaii.com/blog/cleanup-standard — blog stub sample
23. https://kauai.mychef-hawaii.com/pricing — Kauaʻi rate card
24. Google site: queries (site:mychef-hawaii.com and per-subdomain) — indexed titles/snippets, 2026-09-06
25. Direct HTTP inspection (curl) of headers, HTML head, JSON-LD, and status codes for sitemap-vs-live URL comparison, 2026-09-06
