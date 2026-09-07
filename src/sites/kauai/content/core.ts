import type { ContentRecord } from '@/platform/types';
import { CTA_QUOTE, CTA_RETREAT, FEE_FOOTNOTE, PROVENANCE, SEASON_NORTH, SEASON_SOUTH } from './shared';

/**
 * Kauaʻi commercial core (Ch.4 §4.2.3 Table 4.2.3a, rows 1–8).
 * '', private-chef, pricing, catering, weddings, retreat-catering render
 * through bespoke overrides — these records feed the sitemap, breadcrumbs,
 * and the SEO registry.
 */
export const core: ContentRecord[] = [
  {
    slug: '',
    category: 'core',
    title: 'Private Chef Kauaʻi — Both Shores, One Written Quote',
    h1: 'Kauaʻi, cooked in.',
    meta: {
      description:
        'A private chef for your Kauaʻi estate, retreat, or whole stay — North Shore and South Shore. Signature dinners $150–$250 a guest; Stay Chef from $1,100 a day. The written quote is the confirmed total.',
      ogImage: '/img/kauai/hero-home.jpg',
    },
    intro:
      'A private chef for your estate, your retreat, your whole stay — both shores. Signature dinners $150–$250 a guest; Stay Chef from $1,100 a day.',
    sections: [
      {
        heading: 'Two shores, two seasons',
        body: [
          'Kauaʻi runs on two clocks. The North Shore — Princeville, Hanalei, Kīlauea — is at its best June through September; the South Shore — Poʻipū, Kōloa — carries November through March. We cook on both, with the season line printed on every page.',
        ],
        links: [
          { label: 'North Shore: Princeville · Hanalei · Kīlauea', href: 'locations/princeville' },
          { label: 'South Shore: Poʻipū · Kōloa', href: 'locations/poipu' },
        ],
      },
      {
        heading: 'The long stay is the Kauaʻi stay',
        body: [
          'Kauaʻi visits average more than a week, and the bluff estates sleep 8–16. Stay Chef puts the same chef in your kitchen for the length of the trip — from $1,100 a day, groceries at cost with receipts. It is the only published multi-day chef rate on the island.',
          'Retreat hosts get one contract for every meal: 8–30 guests, 3–7 days, menus labeled by dietary protocol.',
        ],
        links: [
          { label: 'Stay Chef, from $1,100 a day', href: 'stay-chef' },
          { label: 'Retreat catering', href: 'retreat-catering' },
        ],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef Kauai', 'Kauai private chef', 'chef for estate Kauai'],
  },
  {
    slug: 'private-chef',
    category: 'core',
    title: 'Hire a Private Chef on Kauaʻi — Estate Dinners & Stay Chef',
    h1: 'A private chef for the house, the week, the estate.',
    meta: {
      description:
        'Signature dinners $150–$250 a guest, Date Night $650–$950, Stay Chef from $1,100 a day — groceries inside the band or at cost with receipts. Both shores of Kauaʻi, inquiry-first.',
      ogImage: '/img/kauai/hero-private-chef.jpg',
    },
    intro:
      'Your chef shops the Saturday market, arrives before service, cooks in your kitchen, serves each course, and leaves the kitchen clean. Kauaʻi runs inquiry-first — a written quote before any date is held.',
    sections: [
      {
        heading: 'The estate week, staffed',
        body: [
          'Estates on both shores sleep 8–16, and the way chef service is bought today — one dinner at a time through a concierge — wastes the week. Our Stay Chef and estate-week products put one chef in your kitchen across the stay: breakfasts, beach-day provisioning, dinners, the occasional lunch nobody asked for and everybody eats.',
          `${SEASON_NORTH} ${SEASON_SOUTH}`,
        ],
        links: [
          { label: 'Stay Chef, from $1,100 a day', href: 'stay-chef' },
          { label: 'The estate-week chef', href: 'services/estate-week-chef' },
        ],
      },
      {
        heading: 'The dinner, course by course',
        body: [
          `A signature dinner is a restaurant-grade evening in your own dining room: menu agreed in writing, groceries bought that day, courses plated and introduced, dietary flags handled quietly. ${PROVENANCE}`,
          'Pricing is per guest and published: Table $125–$150, Signature $150–$250, Premium $250–$350, Chef’s Table from $350 — groceries inside the band.',
        ],
        links: [
          { label: 'The menus', href: 'menus' },
          { label: 'The Kauaʻi rate card', href: 'pricing' },
        ],
      },
      {
        heading: 'The kitchen gate',
        body: [
          'We will not pretend a coffee maker and a minibar are a pass — hotel rooms without kitchens are declined, politely and early. Villas, estates, plantation houses, and suites with real kitchens are the stage. If your rental has four burners and a counter, we can cook in it; if it doesn’t, we’ll tell you before you’ve paid anything.',
        ],
        links: [{ label: 'What a kitchen needs', href: 'guides/villa-kitchen' }],
      },
      {
        heading: 'Included, and separate',
        body: ['One dinner, itemized — nothing hides in the per-guest number.'],
        list: [
          'Included: menu design, same-day shopping, cooking, table service, cleanup — groceries inside the band',
          'Separate, on their own lines: servers $55/hr and sous chefs $75/hr (4-hour floor), bar cart $850/4hr + $60/guest, shore travel surcharges $50–$75, rentals',
        ],
      },
    ],
    faq: [
      {
        q: 'How much does a private chef cost on Kauaʻi?',
        a: 'Signature dinners run $150–$250 per guest with groceries included; the Table tier is $125–$150. Stay Chef multi-day service starts at $1,100 a day plus groceries at cost. The 20% service charge and Hawaiʻi GET up to 4.7120% always appear on their own lines.',
        links: [{ label: 'The full rate card', href: '/kauai/pricing' }],
      },
      {
        q: 'Which parts of Kauaʻi do you serve?',
        a: 'Both shores and the East Side: Princeville, Hanalei, and Kīlauea in the north; Poʻipū and Kōloa in the south; Kāpaʻa–Līhuʻe on the east. Princeville and Poʻipū carry a $50–$75 shore surcharge; far-North service past Hanalei is quoted at inquiry with 72-hour notice.',
        links: [{ label: 'Coverage, shore by shore', href: '/kauai/coverage' }],
      },
      {
        q: 'Can you handle dietary restrictions?',
        a: 'Yes — eleven dietary flags as standard (vegetarian, vegan, gluten-free, halal, kosher-style, dairy-free, nut-free, keto, pescatarian, low-sodium, diabetic-friendly), with separate prep for allergens. Kauaʻi’s retreat work means we cook plant-based and protocol-labeled menus weekly, not as an exception.',
        links: [{ label: 'Dietary, in depth', href: '/kauai/services/dietary' }],
      },
      {
        q: 'How far ahead should we book?',
        a: 'Two to four weeks is comfortable for a dinner; estate weeks and December–March dates book first and deserve a month or more. Far-North service past Hanalei needs 72-hour notice minimum. A 50% deposit locks the date — only after you have the written quote.',
        links: [{ label: 'Booking lead times', href: '/kauai/guides/booking-lead-times' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['hire a private chef Kauai', 'private chef Kauai', 'estate chef Kauai'],
  },
  {
    slug: 'catering',
    category: 'core',
    title: 'Catering Kauaʻi — Estate & Garden Events, 10–75 Guests',
    h1: 'Catering for the garden gathering.',
    meta: {
      description:
        'Estate and garden catering on both shores of Kauaʻi: staffed events for 10–75 guests, wedding weeks, retreat tables. 20% service itemized — not the 23–25% venue norm. Written quote first.',
      ogImage: '/img/kauai/hero-catering.jpg',
    },
    intro:
      'Staffed events for 10–75 guests on estates, in gardens, under tree cover. Over 75 is a written exception — quoted, never implied. Kauaʻi’s catering strength is the retreat table; this page is the front door.',
    sections: [
      {
        heading: 'Formats, priced per guest',
        body: [
          'Every format is a per-guest line plus staffing — no packages that hide the math. Best-fit guidance is honest: a dinner for six is not a reception for sixty, and we say which is which before you inquire.',
        ],
        list: [
          'Family-style — Table band $125–$150/guest · best for retreat tables and reunion dinners',
          'Plated coursed — Signature $150–$250/guest · best for estate dinners and rehearsal evenings',
          'Premium tasting — $250–$350/guest · best for small weddings and milestone dinners',
          'Pūpū & grazing — quoted per event · best for welcome evenings and cocktail hours',
          'Chef-attended stations — Premium band + staffing · best for receptions up to 75',
        ],
        links: [{ label: 'Retreat catering — the Kauaʻi signature', href: 'retreat-catering' }],
      },
      {
        heading: 'Staffing and bar, itemized',
        body: [
          'Servers run $55 an hour and sous chefs $75, with a 4-hour floor; one server per 10–12 guests is the planning math. The packaged bar cart is $850 for four hours plus $60 a guest — alcohol itself is client-supplied or arranged through a licensed bartending referral; we do not sell alcohol.',
          'Our service charge is 20%, itemized on its own line. Island venues and resorts run 23–25%; one Kauaʻi caterer adds 25% gratuity to all food and drink. Read quotes line by line — ours are built to be read.',
        ],
        links: [
          { label: 'The mobile bar', href: 'services/mobile-bar' },
          { label: 'Event staffing', href: 'services/staffing' },
        ],
      },
      {
        heading: 'Both shores, honestly',
        body: [
          `${SEASON_NORTH} ${SEASON_SOUTH} Princeville and Poʻipū carry a $50–$75 shore surcharge; far-North events past Hanalei are quoted at inquiry with 72-hour notice and a reschedule-not-forfeit closure clause.`,
          'Load-in on Kauaʻi means plantation houses, estate lawns, and garden venues — we coordinate rentals, power, and rain cover with your venue or planner, and we have cooked through a passing squall under a tent more than once.',
        ],
        links: [
          { label: 'Poʻipū catering', href: 'locations/poipu/catering' },
          { label: 'Kapaʻa–Līhuʻe catering', href: 'locations/kapaa-lihue/catering' },
        ],
      },
    ],
    faq: [
      {
        q: 'What group sizes do you cater?',
        a: 'Ten to seventy-five guests staffed is the standard envelope; over 75 is a written exception we quote explicitly — never implied, never discovered on the day. Retreat tables of 8–30 across multiple days are our Kauaʻi specialty.',
      },
      {
        q: 'Do you provide alcohol or bartending?',
        a: 'The bar cart package ($850/4hr + $60/guest) covers the cart, setup, and bartender service; alcohol itself is client-supplied or arranged via a licensed bartending referral — we do not sell alcohol. Kauaʻi County rules govern, and we keep to them.',
        links: [{ label: 'Alcohol and bar, explained', href: '/kauai/guides/alcohol-and-bar' }],
      },
      {
        q: 'What is the service charge?',
        a: 'Twenty percent, always itemized on its own line, plus Hawaiʻi GET up to 4.7120% on its own line. Venues and resorts commonly charge 23–25%; ours is lower and it is never buried.',
        links: [{ label: 'The fee stack', href: '/kauai/pricing/fee-stack' }],
      },
      {
        q: 'Can you cater an outdoor garden event?',
        a: 'Yes — garden and estate events are the Kauaʻi default, and rain planning is part of the quote: covered service areas, a weather call 48 hours out, and menus that survive a tent. Waiʻaleʻale’s rainfall is not a rumor; we plan for it.',
        links: [{ label: 'Weather backup planning', href: '/kauai/guides/weather-backup' }],
      },
    ],
    cta: { ...CTA_QUOTE, secondaryLabel: 'Wedding catering', secondaryHref: 'weddings' },
    keywords: ['catering Kauai', 'estate catering Kauai', 'garden party catering Kauai'],
  },
  {
    slug: 'weddings',
    category: 'wedding',
    title: 'Wedding Catering Kauaʻi — Two Shores, One Estate Week',
    h1: 'Married in the garden.',
    meta: {
      description:
        'Estate wedding catering on Kauaʻi from $175 a guest plus staffing — welcome dinner through recovery brunch under one contract. Elopements $650–$950 fixed. Both shores, written quote first.',
      ogImage: '/img/kauai/hero-weddings.jpg',
    },
    intro:
      'Kauaʻi’s wedding identity is the estate: bluff lawns in the north, plantation gardens in the south. We are not the island’s $75-a-plate buffet average — we are the estate week, welcome dinner through recovery brunch, one contract.',
    sections: [
      {
        heading: 'The wedding week, one contract',
        body: [
          'Five meals across the week, each priced on its own line: the welcome dinner, the rehearsal, ceremony-adjacent pūpū, the reception, and the recovery brunch. From $175 a guest plus staffing — servers $55/hr, sous chefs $75/hr, 4-hour floor.',
          'One culinary conversation instead of five vendors; one deposit schedule; one crew that already knows the kitchen.',
        ],
        links: [
          { label: 'The wedding week', href: 'weddings/wedding-week' },
          { label: 'What it costs, worked out', href: 'weddings/wedding-cost' },
        ],
      },
      {
        heading: 'Two shores, two seasons',
        body: [
          `North Shore estates — Princeville, Hanalei, Kīlauea bluffs — shine June through September. South Shore venues — Poʻipū, Kōloa, the plantation belt — carry November through March. ${SEASON_SOUTH}`,
          'Far-North venues past the Hanalei bridge carry our written clause: 72-hour notice, and closures reschedule rather than forfeit.',
        ],
        links: [
          { label: 'Hanalei estate weddings', href: 'locations/hanalei/estate-wedding' },
          { label: 'Poʻipū wedding catering', href: 'locations/poipu/wedding-catering' },
        ],
      },
      {
        heading: 'Elopements, fixed',
        body: [
          'A coursed dinner for two to eight, cooked where you’re staying — $650–$950 fixed, groceries included, the fee stack itemized as always. The unbundled micro-wedding: no staffing minimums, no reception math.',
        ],
        links: [{ label: 'Elopement dinners', href: 'weddings/elopement' }],
      },
    ],
    faq: [
      {
        q: 'What does wedding catering cost on Kauaʻi?',
        a: 'Our wedding lines start at $175 a guest plus staffing, against an island caterer average of roughly $75 a plate — the difference is the estate-week format: multiple events, one crew, coursed menus, and a written quote that is the confirmed total. A 50-guest estate week is worked out line by line on our cost page.',
        links: [{ label: 'Kauaʻi wedding costs, worked', href: '/kauai/weddings/wedding-cost' }],
      },
      {
        q: 'Do you cater at venues like Nā ʻĀina Kai?',
        a: 'We cater at estates, botanical gardens, and private property across both shores, working with your planner and the venue’s vendor rules. Some venues hold exclusive caterer lists; where we’re on the outside of one, we say so early.',
        links: [{ label: 'Estate venues, honestly assessed', href: '/kauai/weddings/venues' }],
      },
      {
        q: 'What happens if the Hanalei bridge closes before our North Shore event?',
        a: 'It has happened — HDOT closures are documented. Our written clause: far-North events take 72-hour notice, and if a closure lands on your date we reschedule rather than forfeit. Deposits don’t evaporate over weather.',
        links: [{ label: 'The bridge clause', href: '/kauai/guides/hanalei-bridge-clause' }],
      },
    ],
    cta: { ...CTA_QUOTE, secondaryLabel: 'The wedding week', secondaryHref: 'weddings/wedding-week' },
    keywords: ['wedding catering Kauai', 'Kauai wedding caterer', 'estate wedding Kauai'],
  },
  {
    slug: 'stay-chef',
    category: 'core',
    title: 'Stay Chef Kauaʻi — A Chef for the Week, from $1,100/Day',
    h1: 'The only published week rate on the island.',
    meta: {
      description:
        'Stay Chef on Kauaʻi from $1,100 a day, groceries at cost with receipts: breakfasts, provisioning, and dinners by the same chef across your whole stay. Both shores; estate weeks for 8–16 guests.',
      ogImage: '/img/kauai/card-stay-chef.jpg',
    },
    intro:
      'One chef, your kitchen, the length of the stay. From $1,100 a day plus groceries at cost with receipts — the only published multi-day chef rate on Kauaʻi. No invented weekly discount: the written quote is the total.',
    sections: [
      {
        heading: 'How a week actually runs',
        body: [
          'A sample three-day rhythm: Day one, an arrival dinner timed to your landing — the table set, the fridge stocked, nobody driving to a restaurant on island time. Day two, a proper breakfast, a beach-day provision run (cooler, fruit, sandwiches that survive the sand), and a family-style dinner. Day three, a slow brunch and a Signature coursed dinner at the hour the light comes through the trees.',
          'Extra meals are quoted same-day when plans change — a wet afternoon becomes a cooking afternoon, and nobody renegotiates a contract over it.',
        ],
      },
      {
        heading: 'The money, itemized',
        body: [
          'The day rate covers the chef’s day: menu planning, shopping, cooking, service, and kitchen reset. Groceries are billed at cost with receipts — Kauaʻi food prices run well above the mainland, and you see exactly what the ahi cost.',
          'Servers ($55/hr) and sous chefs ($75/hr, 4-hour floor) join for larger tables and event nights; shore surcharges of $50–$75 apply to Princeville and Poʻipū; far-North stays past Hanalei take 72-hour notice under the bridge clause.',
        ],
        links: [
          { label: 'Stay Chef cost, worked by the day', href: 'pricing/stay-chef-cost' },
          { label: 'The estate-week product', href: 'services/estate-week-chef' },
        ],
      },
      {
        heading: 'Who books it',
        body: [
          'Families in Princeville estates for the summer prime. Multi-generational groups in Poʻipū plantation houses over the holidays. Retreat hosts who want one chef across a five-day program rather than five separate contracts. If the rental sleeps eight or more and the stay runs five nights or longer, the math usually beats dining out — and nobody drives.',
        ],
        links: [
          { label: 'Stay Chef in Princeville', href: 'locations/princeville/stay-chef' },
          { label: 'A chef for the week in Hanalei', href: 'locations/hanalei/stay-chef' },
        ],
      },
    ],
    faq: [
      {
        q: 'What does Stay Chef cost on Kauaʻi?',
        a: 'From $1,100 per day plus groceries at cost with receipts; staffing for larger tables is extra at published hourly rates. There is no published weekly discount — the written quote is the total, and it itemizes everything.',
        links: [{ label: 'Stay Chef cost page', href: '/kauai/pricing/stay-chef-cost' }],
      },
      {
        q: 'Are groceries included in the day rate?',
        a: 'No — multi-day service bills groceries at cost with receipts, so you pay the real price of the fish and not a padded allowance. Single dinners, by contrast, include groceries inside the per-guest band.',
        links: [{ label: 'Groceries at cost, explained', href: '/kauai/guides/groceries-at-cost' }],
      },
      {
        q: 'Can one chef handle a house of twelve?',
        a: 'For daily rhythm cooking, yes — breakfast, provisioning, dinner. For event nights inside the week (a birthday dinner, a reception), we add servers and a sous at the published hourly rates so service stays calm.',
      },
      {
        q: 'What if we’re staying past Hanalei?',
        a: 'Far-North stays are possible with 72-hour notice and the bridge clause in writing: if a documented closure blocks the road on a service day, we reschedule rather than forfeit. We shop before crossing, and the pantry plan reflects the road.',
        links: [{ label: 'The Hanalei bridge clause', href: '/kauai/guides/hanalei-bridge-clause' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['stay chef Kauai', 'chef for a week Kauai', 'private chef week Kauai'],
  },
  {
    slug: 'pricing',
    category: 'pricing',
    title: 'Private Chef Kauaʻi Cost — The Published Rate Card',
    h1: 'The Kauaʻi rate card.',
    meta: {
      description:
        'Published Kauaʻi private chef prices: Table $125–$150, Signature $150–$250, Premium $250–$350, Chef’s Table $350+ per guest; Stay Chef from $1,100/day; staffing $55–$75/hr; shore surcharges $50–$75.',
    },
    intro:
      'Two of Kauaʻi’s fourteen operators publish any price at all. This is the whole card — per-guest tiers, the day rate, staffing, travel — framed by where the food comes from and what the island’s logistics honestly cost.',
    sections: [
      {
        heading: 'Worked math on published rates',
        body: [
          'Illustrative math, not a quote: four guests at the Signature mid-band ($200) is $800 for the evening, groceries included; eight at the Table band top ($150) is $1,200; twelve at Premium ($300) is $3,600 before staffing. Add a server ($55/hr, 4-hour floor = $220) for tables over eight, then the fee stack on its own lines: 20% service, GET up to 4.7120%.',
          'The written quote is the confirmed total — this grid exists so the quote never surprises you.',
        ],
      },
      {
        heading: 'Where the food comes from',
        body: [
          PROVENANCE,
          'The Saturday Hanalei Farmers’ Market sets the week’s greens on North Shore bookings; South Shore weeks lean on Kōloa-side growers and the same day-boat fish. When a farm name appears on a menu, it’s because the box came from that farm — sourcing claims are printed only when verifiable.',
        ],
        links: [{ label: 'The Hanalei Table menu', href: 'menus/farm-to-table' }],
      },
      {
        heading: 'Travel, as estate logistics',
        body: [
          'Kauaʻi is one island and two commitments. Base service covers Kāpaʻa–Līhuʻe and the near corridors; Princeville and Poʻipū carry a $50–$75 shore surcharge — the honest cost of an hour each way with a cooler and a kit.',
          'Past Hanalei the geography turns binary: one bridge, one road. Far-North service — Wainiha, Hāʻena — is quoted at inquiry with 72-hour notice, and documented closures reschedule rather than forfeit. West-side requests (Waimea, Hanapēpē, Kalāheo) are covered from the island card at inquiry; the rental stock there is thin and we’d rather quote honestly than imply a fleet.',
        ],
        links: [
          { label: 'Travel zones, line by line', href: 'pricing/travel-zones' },
          { label: 'The Hanalei bridge clause', href: 'guides/hanalei-bridge-clause' },
        ],
      },
      {
        heading: 'What moves the number',
        body: ['Five things, in order of weight:'],
        list: [
          'Guest count — per-guest pricing means the headcount is the multiplier',
          'Menu tier — Table to Chef’s Table is a $125-to-$350+ spread per guest',
          'Hawaiʻi grocery prices — roughly a third to a half above mainland, which is why groceries sit inside the band on dinners and at cost on stays',
          'Date — December and holiday weeks book first and price honestly; holiday premiums are market standard on-island',
          'Crew size — servers $55/hr, sous chefs $75/hr, 4-hour floor',
        ],
      },
      {
        heading: 'The 20% line, against the market',
        body: [
          'Our service charge is 20%, itemized. Island venues and resorts run 23–25%, and at least one Kauaʻi caterer adds 25% gratuity across all food and drink. On a $10,000 event week, the difference between 20% and 25% is $500 — visible, because every line on our quote is visible.',
        ],
        links: [{ label: 'The fee stack, explained', href: 'pricing/fee-stack' }],
      },
    ],
    priceTable: {
      title: 'The Kauaʻi rate card',
      rows: [
        { label: 'Table', value: '$125–$150 / guest', note: 'Family-style, groceries included' },
        { label: 'Signature', value: '$150–$250 / guest', note: 'Coursed, groceries included' },
        { label: 'Premium', value: '$250–$350 / guest', note: 'Tasting format, groceries included' },
        { label: 'Chef’s Table', value: 'from $350 / guest', note: 'Quoted by menu' },
        { label: 'Date Night (two)', value: '$650–$950', note: 'Fixed, coursed, groceries included' },
        { label: 'Elopement dinner', value: '$650–$950', note: 'Fixed, two to eight guests' },
        { label: 'Stay Chef', value: 'from $1,100 / day', note: 'Groceries at cost, receipts' },
        { label: 'Meal prep (kamaʻāina weekly)', value: '$550–$1,200 / week', note: 'Resident households' },
        { label: 'Bar cart', value: '$850 / 4hr + $60 / guest', note: 'Alcohol client-supplied or licensed referral' },
        { label: 'Server', value: '$55 / hr', note: '4-hour floor' },
        { label: 'Sous chef', value: '$75 / hr', note: '4-hour floor' },
        { label: 'Shore surcharge — Princeville · Poʻipū', value: '$50–$75', note: 'Far-North past Hanalei: quoted at inquiry, 72-hour notice' },
      ],
      footnote: FEE_FOOTNOTE,
    },
    faq: [
      {
        q: 'Is the quote really the final price?',
        a: 'Yes. The written quote itemizes menu, staffing, travel, 20% service, and GET up to 4.7120% — and that document is the confirmed total. A 50% deposit locks the date only after you have seen it.',
      },
      {
        q: 'Why are Kauaʻi groceries priced at cost on stays?',
        a: 'Because island food costs run roughly 31–53% above the mainland and vary by what the boats and farms actually have. At-cost with receipts means you pay the true price of the ahi — not a padded allowance, and not a surprise.',
        links: [{ label: 'Groceries at cost, explained', href: '/kauai/guides/groceries-at-cost' }],
      },
      {
        q: 'What does a full estate week cost?',
        a: 'Stay Chef runs from $1,100 a day plus groceries; a seven-day estate week with a welcome dinner and one staffed event night is worked out line by line on the Stay Chef cost page. Every figure traces to this rate card.',
        links: [{ label: 'Stay Chef cost, worked', href: '/kauai/pricing/stay-chef-cost' }],
      },
    ],
    cta: { ...CTA_QUOTE, secondaryLabel: 'Estimate your table', secondaryHref: 'pricing/estimate' },
    keywords: ['private chef Kauai cost', 'private chef Kauai prices', 'Kauai chef rates'],
  },
  {
    slug: 'quote',
    category: 'core',
    title: 'Get a Written Quote — Private Chef Kauaʻi',
    h1: 'Tell us the table.',
    meta: {
      description:
        'Six steps, two minutes, one written quote. Dates, shore, headcount — the written quote you receive is the confirmed total, and we never hold a date we can’t crew.',
    },
    sections: [],
    cta: { label: 'Begin an inquiry', href: 'quote' },
    keywords: ['book a private chef Kauai'],
  },
  {
    slug: 'retreat-catering',
    category: 'core',
    title: 'Retreat Catering Kauaʻi — One Contract, Every Meal',
    h1: 'You run the retreat. We run the table.',
    meta: {
      description:
        'Retreat catering on Kauaʻi for 8–30 guests across 3–7 days: per-person/day meal plans from the published Stay Chef rate, dietary protocols labeled by menu family — plant-based, Ayurvedic-fluent, detox. Written quote first.',
      ogImage: '/img/kauai/hero-retreats.jpg',
    },
    intro:
      'Kauaʻi’s retreat houses sleep 8–30 and run $2,000–$4,499 tickets — and today their food is ad hoc: restaurants, a hired cook, a hopeful host. This is the island’s only dedicated retreat table: multi-day meal plans, protocol-labeled menus, one contract.',
    sections: [
      {
        heading: 'The retreat table, structured',
        body: [
          'Pricing builds from the published card, not from vibes: Stay Chef from $1,100 a day for the chef, with full-board per-person/day plans in the $250–$300+ range depending on protocol and menu depth. Eight to thirty guests, three to seven days, every meal under one line of accountability.',
          'Meal frequency is planned with your program, not around it: early light breakfasts before practice, working lunches, the long communal dinner, and the quiet kitchen-stocking that keeps a retreat house fed between services.',
        ],
        links: [
          { label: 'Meal plans and per-day pricing', href: 'retreat-catering/meal-plans' },
          { label: 'For retreat hosts', href: 'retreat-catering/for-hosts' },
        ],
      },
      {
        heading: 'Menus labeled by protocol',
        body: [
          'Plant-based, Ayurvedic-fluent, detox and raw-leaning, paleo — the vocabulary your guests booked for is the vocabulary on the menu. Every dish carries its protocol labels, allergens get separate prep, and the omnivore table never feels like an afterthought.',
          PROVENANCE,
        ],
        links: [{ label: 'Dietary protocols, in depth', href: 'retreat-catering/dietary-protocols' }],
      },
      {
        heading: 'Where retreats actually happen',
        body: [
          'Kīlauea’s retreat corridor — hundred-acre properties, lakeside estates — the Anahola beach camps with certified kitchens nearby, and the big North Shore houses that host yoga weeks all summer. We cook in the venue’s kitchen; our kitchen-standard check happens before the contract does.',
          'Far-North venues past Hanalei carry the written bridge clause: 72-hour notice, closures reschedule rather than forfeit.',
        ],
        links: [
          { label: 'Retreat catering in Kīlauea', href: 'locations/kilauea/retreat-catering' },
          { label: 'Yoga & wellness retreats', href: 'retreat-catering/yoga-wellness' },
        ],
      },
    ],
    faq: [
      {
        q: 'What does retreat catering cost on Kauaʻi?',
        a: 'The structure is published: the chef day rate from $1,100, with full-board meal plans in the $250–$300+ per person per day range depending on protocol depth and headcount. The written quote itemizes every day, every meal, and the fee stack.',
        links: [{ label: 'Retreat meal-plan pricing', href: '/kauai/retreat-catering/meal-plans' }],
      },
      {
        q: 'What group sizes and trip lengths work?',
        a: 'Eight to thirty guests across three to seven days is the envelope the product is built for — retreat houses and estate buyouts, not conferences. Larger or longer formats are quoted explicitly as written exceptions.',
      },
      {
        q: 'Can you handle Ayurvedic or detox protocols?',
        a: 'Yes — protocol-labeled menu families (plant-based, Ayurvedic-fluent, detox, raw-leaning, paleo) are a named product line here, not a special request. Menus are labeled dish by dish, and allergen prep is separated.',
        links: [{ label: 'The protocol matrix', href: '/kauai/retreat-catering/dietary-protocols' }],
      },
      {
        q: 'Do retreat hosts get a single contract?',
        a: 'Yes — one contract covers every meal of the program, priced in writing before you commit, with the 50% deposit locking dates only after you have the quote. Hosts re-book; the contract is built to be re-booked.',
        links: [{ label: 'The host page', href: '/kauai/retreat-catering/for-hosts' }],
      },
    ],
    cta: CTA_RETREAT,
    keywords: ['retreat catering Kauai', 'yoga retreat catering Kauai', 'wellness retreat chef Kauai'],
  },
];
