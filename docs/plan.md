# myCHEF Hawaii — Total Build Plan (Deliverables 2+3: the full ecosystem)

## Mission
Build the complete researched ecosystem as one React+Vite app hosting FIVE distinct sites:
hub `/` + `/oahu` + `/maui` + `/kauai` + `/bigisland`. Every island gets its Chapter-6 design
world and its full Chapter-4 sitemap as real routes (data-driven category templates + bespoke
flagship pages). Real AI-generated imagery per island. Frontend-only static delivery;
quote flow hands off to WhatsApp/mailto (matches business's WhatsApp-first posture).

## Stage 1 — Init & handoff (DONE)
- init-webapp.sh → /mnt/agents/output/app (shared repo)
- info.md = research handoff (approved prices, design worlds, sitemap contract, image rules)

## Stage 2 — Design (Pro_Designer subagent, foreground)
- design.md: global platform + five island design systems (from Ch6), asset manifest
- Per-page designs: 5 homepages + core templates (private-chef, pricing, catering, wedding, location, quote)

## Stage 3 — Scaffold (single subagent)
- Theme engine (per-island token sets), multi-site router shell, shared platform components
  (SEO/JSON-LD helper, QuoteProvider, page-category templates API), hub homepage,
  global media batch 1, content-registry architecture (src/sites/<island>/content.ts per island — merge isolation)

## Stage 4 — Parallel build (≤8 background agents)
1. island-oahu — full Oʻahu site: bespoke homepage + all templates filled + full sitemap routes + Oʻahu images
2. island-maui — same (deepest wedding cluster)
3. island-kauai — same (retreat cluster)
4. island-bigisland — same (dual-hub geography)
5. hub-pages — statewide pages (island chooser, statewide pricing/guides/trust)
6. quote-system — multi-step conditional quote flow + price estimator + shared conversion components
(Each agent generates its island's images into public/img/<island>/ via the image_generation script.)

## Stage 5 — Merge, wire, build, QA, version (main agent)
- Octopus merge, route wiring, contract checks, npm build, visual QA spot-check,
  build_version (static) → deliver. Then report.
