# myCHEF Hawaii

Statewide private chef and estate catering network across all four Hawaiian islands: Oʻahu, Maui, Kauaʻi, and Hawaiʻi Island (Big Island).

- **Statewide Hub:** https://mychef-hawaii.com
- **Oʻahu:** https://oahu.mychef-hawaii.com
- **Maui:** https://maui.mychef-hawaii.com
- **Kauaʻi:** https://kauai.mychef-hawaii.com
- **Big Island:** https://bigisland.mychef-hawaii.com

## Architecture & Features

- **531 Pages:** Complete keyword-led architecture covering every corridor, category, cuisine, occasion, and pricing tier across all 5 properties.
- **Published Rates & Itemized Fee Stack:** Every quote carries the approved rates, 20% service charge, and Hawaiʻi GET up to 4.7120% on separate lines.
- **Five Island Design Territories:** Dedicated visual languages, custom tokens, and full-screen hero photography with WCAG AA compliant scrims.
- **WhatsApp Concierge:** Direct live concierge at `+971 55 174 4849` (`https://wa.me/971551744849`) and six-step written quote engine.
- **Multi-domain / Subdomain Support:** Works seamlessly on apex domain (`mychef-hawaii.com`), path routing (`/oahu`, `/maui`), and subdomains (`oahu.mychef-hawaii.com`).
- **AI-Readiness:** Full structured data (Schema.org), `robots.txt` allowing verified AI crawlers, and comprehensive `llms.txt`.

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

Build generates all 531 sitemap entries, Chapter 4 briefs, typechecks via `tsc -b`, and bundles through Vite to `dist/`.
