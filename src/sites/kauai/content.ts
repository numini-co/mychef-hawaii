import type { ContentRecord } from '@/platform/types';
import { FEE_FOOTNOTE, CTA_QUOTE, CTA_RETREAT, BRIDGE_SECTION, PROVENANCE, SEASON_NORTH, SEASON_SOUTH } from './content/shared';

/**
 * Kauaʻi commercial core (Ch.4 §4.2.3 Table 4.2.3a, rows 1–8).
 * '', private-chef, pricing, catering, weddings, retreat-catering render
 * through bespoke overrides — these records feed the sitemap, breadcrumbs,
 * and the SEO registry.
 */
const core: ContentRecord[] = [
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

/** Kauaʻi services cluster (Table 4.2.3a rows 9–26). Parent: private-chef unless noted. */
const services: ContentRecord[] = [
  {
    slug: 'services/personal-chef',
    category: 'service',
    title: 'Personal Chef Kauaʻi — Weekly Cook Days & Kitchen Stocking',
    h1: 'A personal chef, in the island sense.',
    parent: 'private-chef',
    meta: {
      description:
        'Personal chef service on Kauaʻi: weekly cook days for resident households ($550–$1,200/week), fridge stocking, and recurring meals — groceries at cost, menus written down.',
    },
    intro:
      'The personal-chef relationship is recurring: the same kitchen, the same preferences, a fridge that fills itself. On Kauaʻi that runs as a weekly cook day for resident households — $550–$1,200 a week depending on volume — plus stocking for arriving guests.',
    sections: [
      {
        heading: 'The weekly cook day',
        body: [
          'One morning a week, your chef shops, cooks the household’s meals for the days ahead, labels and packs them, and leaves the kitchen clean. Menus are written down in advance and priced inside the published $550–$1,200 weekly band — the exact line depends on headcount and how many meals the week needs to cover.',
          PROVENANCE,
        ],
      },
      {
        heading: 'For visitors: stocking and the first night',
        body: [
          'If you’re arriving for a week rather than living here, the personal-chef shape is different: pre-arrival stocking so the fridge is full when you land, then dinners or a Stay Chef rhythm on top. Arrival-day stocking is quoted with the receipts attached — at cost, always.',
        ],
        links: [
          { label: 'Villa pre-stocking', href: 'services/grocery-stocking' },
          { label: 'Stay Chef weeks', href: 'stay-chef' },
        ],
      },
      {
        heading: 'The money, on its lines',
        body: [
          'Weekly service runs $550–$1,200 per week with groceries at cost and receipts. Single dinners, if you want them instead, run $125–$250 a guest with groceries inside the band. Either way, 20% service and GET up to 4.7120% appear on their own lines.',
        ],
        links: [{ label: 'The Kauaʻi rate card', href: 'pricing' }],
      },
    ],
    faq: [
      {
        q: 'What’s the difference between a personal and private chef here?',
        a: 'On Kauaʻi the practical split is cadence: personal chef means recurring household service (weekly cook days, stocking), private chef means event service (dinners, stays, celebrations). Same kitchen standard, same written quote.',
        links: [{ label: 'Private vs personal, compared', href: '/kauai/compare/private-vs-personal-chef' }],
      },
      {
        q: 'Do you serve year-round residents?',
        a: 'Yes — the kamaʻāina weekly line ($550–$1,200/week) exists for resident households, and it books month to month. December compression affects visitors first; resident weeks are protected by the calendar, not the season.',
      },
      {
        q: 'Which areas does weekly service cover?',
        a: 'Kāpaʻa–Līhuʻe and the near corridors as base; Princeville and Poʻipū carry the $50–$75 shore surcharge; far-North households past Hanalei are quoted at inquiry with the 72-hour bridge notice.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['personal chef Kauai', 'weekly chef Kauai', 'kitchen stocking Kauai'],
  },
  {
    slug: 'services/vacation-chef',
    category: 'service',
    title: 'Vacation Chef Kauaʻi — A Chef for Your Rental',
    h1: 'The rental has a kitchen. Use it.',
    parent: 'private-chef',
    meta: {
      description:
        'A chef for your Kauaʻi vacation rental: arrival dinners from $150/guest, Stay Chef weeks from $1,100/day, pre-arrival stocking at cost. Villas, estates, and plantation houses on both shores.',
    },
    intro:
      'Kauaʻi visits average over a week, and the good rentals have real kitchens. A vacation chef turns the rental into the best table on the trip: arrival dinner the first night, a few coursed evenings, or the full Stay Chef week.',
    sections: [
      {
        heading: 'Three shapes of the trip',
        body: [
          'One dinner — the arrival-night table, $125–$250 a guest depending on tier, groceries inside the band. A few evenings — date night for the parents while the kids eat early, a celebration midweek. The full week — Stay Chef from $1,100 a day, groceries at cost with receipts.',
          'Concierge desks at the island’s villa agencies arrange exactly this today, one dinner at a time. Booking direct gets you the written quote instead of the phone chain.',
        ],
        links: [
          { label: 'Stay Chef, from $1,100/day', href: 'stay-chef' },
          { label: 'Arrival-night menus', href: 'menus' },
        ],
      },
      {
        heading: 'The kitchen check',
        body: [
          'Before we quote, we ask about the kitchen: four burners, an oven, counter space, running water. Most Kauaʻi rental kitchens pass easily; the ones that don’t get told early, with alternatives. Hotel rooms without kitchens are declined — a coffee maker is not a kitchen.',
        ],
        links: [{ label: 'What a kitchen needs', href: 'guides/villa-kitchen' }],
      },
      {
        heading: 'Arrive to a full fridge',
        body: [
          'Pre-arrival stocking pairs with any booking: breakfast things, fruit, coffee, the good poke if the shop has it — bought at cost, receipts attached, put away before you land. On an island where the nearest market might be forty minutes of two-lane road, the first morning matters.',
        ],
        links: [{ label: 'Villa pre-stocking', href: 'services/grocery-stocking' }],
      },
    ],
    faq: [
      {
        q: 'Can you cook in any vacation rental?',
        a: 'Any rental with a workable kitchen — stove, oven, counter, water. We check the kitchen before quoting, bring the kit the kitchen lacks, and tell you honestly if a condo galley won’t support your headcount.',
      },
      {
        q: 'What does a vacation chef week cost on Kauaʻi?',
        a: 'Stay Chef runs from $1,100 per day plus groceries at cost; individual dinners run $125–$250 per guest with groceries included. Shore surcharges of $50–$75 apply to Princeville and Poʻipū.',
        links: [{ label: 'The rate card', href: '/kauai/pricing' }],
      },
      {
        q: 'We’re splitting a house between two families — does that work?',
        a: 'It’s the most common Kauaʻi booking shape: 8–12 people, one kitchen, mixed dietary needs. Per-guest pricing makes splitting the bill arithmetic, and kids’ menus run alongside the adult table without a second contract.',
        links: [{ label: 'Kids’ menus', href: '/kauai/services/kids-menus' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['in-villa chef Kauai', 'chef for vacation rental Kauai', 'vacation chef Kauai'],
  },
  {
    slug: 'services/date-night',
    category: 'service',
    title: 'Private Chef for Two Kauaʻi — Date Night $650–$950',
    h1: 'Dinner for two, priced as dinner for two.',
    parent: 'private-chef',
    meta: {
      description:
        'Date Night on Kauaʻi: a coursed dinner for two, $650–$950 fixed with groceries included. Proposals, anniversaries, honeymoons — at your villa, at the hour the light is right.',
    },
    intro:
      'Two-person economics are real — the market charges $210 a head for a table of two on Kauaʻi. Our Date Night is a fixed $650–$950 for the evening: coursed menu, groceries inside, the fee stack on its own lines, no per-guest multiplier games.',
    sections: [
      {
        heading: 'The evening',
        body: [
          'Your chef arrives before you’ve thought about it, cooks a coursed menu agreed in writing, serves at the pace the evening wants, and leaves the kitchen clean before the last course lands. On a veranda in Hanalei or a lānai in Poʻipū, the restaurant is wherever you’re staying.',
          'The $650–$950 band flexes with the menu — a Table-tier evening at the low end, a Premium tasting with the good fish at the top. The number is fixed in the written quote before you commit.',
        ],
        links: [{ label: 'Proposal dinners', href: 'occasions/proposal' }],
      },
      {
        heading: 'What the price buys',
        body: [
          'Everything except the wine: menu design, that day’s shopping, the cooking, the service, the cleanup. Groceries are inside the fixed price. The 20% service charge and GET up to 4.7120% appear on their own lines — on a fixed price, that transparency is the whole point.',
        ],
      },
      {
        heading: 'Pairings people add',
        body: [
          'A photographer for the proposal hour (we time the courses around it, never through it). Flowers placed before we arrive. A next-morning brunch cooked in the same kitchen. All quoted separately, in writing, before the date is held.',
        ],
        links: [{ label: 'Anniversary dinners', href: 'occasions/anniversary' }],
      },
    ],
    faq: [
      {
        q: 'Is $650–$950 really the whole cost?',
        a: 'It is the whole food cost — menu, shopping, cooking, service, cleanup, groceries inside. Added on their own lines: 20% service and Hawaiʻi GET up to 4.7120%. Travel surcharges apply only to Princeville/Poʻipū ($50–$75) and far-North quotes.',
      },
      {
        q: 'Can you do a proposal dinner without giving it away?',
        a: 'Yes — we’ve timed dessert courses around rings before. Tell us the plan in the inquiry; the chef works to your signal, and the kitchen stays invisible until it’s supposed to.',
        links: [{ label: 'Proposal dinners on Kauaʻi', href: '/kauai/occasions/proposal' }],
      },
      {
        q: 'What’s the lead time for two people?',
        a: 'Two weeks is comfortable; December and Valentine’s week compress everything. Far-North locations past Hanalei need 72 hours minimum under the bridge clause.',
      },
    ],
    cta: { ...CTA_QUOTE, secondaryLabel: 'Elopement dinners', secondaryHref: 'weddings/elopement' },
    keywords: ['private chef for two Kauai', 'date night chef Kauai', 'romantic dinner Kauai'],
  },
  {
    slug: 'services/meal-prep',
    category: 'service',
    title: 'Meal Prep Chef Kauaʻi — From $550–$1,200 a Week',
    h1: 'The week, cooked ahead.',
    parent: 'private-chef',
    meta: {
      description:
        'Meal prep chef service on Kauaʻi from $550–$1,200 a week: a weekly cook day, labeled and packed meals, dietary flags handled, groceries at cost with receipts.',
    },
    intro:
      'A weekly cook day for households that eat well and don’t want to think about it: your chef shops, cooks, packs, and labels the week’s meals in one session. Published band: $550–$1,200 a week, groceries at cost.',
    sections: [
      {
        heading: 'How the cook day runs',
        body: [
          'Menus are agreed in writing midweek; shopping happens the morning of the cook day; by early afternoon the fridge holds labeled, dated meals with reheating notes. The kitchen is left clean, and the receipts are attached to the invoice.',
          'The $550–$1,200 band flexes with household size and meal count — a couple eating five dinners lands low; a family with kids’ lunches and dietary splits lands higher. The written quote fixes the line before the first cook day.',
        ],
      },
      {
        heading: 'Dietary depth as standard',
        body: [
          'Meal prep is where dietary discipline matters most — the same flags every week, no drift. Eleven standard flags (vegetarian, vegan, gluten-free, halal, kosher-style, dairy-free, nut-free, keto, pescatarian, low-sodium, diabetic-friendly) with separate prep for allergens, labeled container by container.',
        ],
        links: [{ label: 'Dietary service', href: 'services/dietary' }],
      },
      {
        heading: 'Visitor version: the stocked fridge',
        body: [
          'Visiting rather than residing? The same service shapes into pre-arrival stocking and a mid-stay refresh for rental weeks — at cost with receipts, quoted before you land.',
        ],
        links: [{ label: 'Villa pre-stocking', href: 'services/grocery-stocking' }],
      },
    ],
    faq: [
      {
        q: 'What’s included in the weekly band?',
        a: 'The cook day itself: planning, shopping, cooking, packing, labeling, cleanup. Groceries are billed at cost with receipts on top of the band. The 20% service charge and GET appear on their own lines, as everywhere.',
      },
      {
        q: 'Which areas do you cover for weekly prep?',
        a: 'Kāpaʻa–Līhuʻe base; Princeville and Poʻipū carry the $50–$75 shore surcharge; far-North past Hanalei is quoted at inquiry with 72-hour notice.',
      },
      {
        q: 'Can meals be frozen?',
        a: 'Where the dish survives freezing, yes — and the label says so. Island fish and market greens are written into the first half of the week; braises and soups carry the back half. The menu plan sequences it for you.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['meal prep chef Kauai', 'weekly meal prep Kauai', 'personal chef meal prep Kauai'],
  },
  {
    slug: 'services/cooking-classes',
    category: 'service',
    title: 'Private Cooking Classes Kauaʻi — In Your Kitchen',
    h1: 'Learn the island’s food in your own kitchen.',
    parent: 'private-chef',
    meta: {
      description:
        'Private cooking classes on Kauaʻi: market-to-table sessions in your rental kitchen — knife work, local fish, lilikoi everything. Quoted per session from the Signature band.',
    },
    intro:
      'A hands-on session in your kitchen: the morning’s market fish, knife work, the difference between good poke and great poke, and a meal you cooked at the end of it. Quoted per session from the published bands — no invented class pricing.',
    sections: [
      {
        heading: 'The format',
        body: [
          'Two to three hours, up to six hands-on students at the counter (more can watch and eat). The session ends at the table: what you made is lunch or dinner. Pricing follows the published per-guest bands — Signature $150–$250 per guest, groceries inside — because a class is a dinner with better stories.',
          'For kids, the format shifts to shorter attention spans and safer knives; family classes are some of the best afternoons we cook.',
        ],
        links: [{ label: 'Kids at the table', href: 'services/kids-menus' }],
      },
      {
        heading: 'What we teach on Kauaʻi',
        body: [
          'The island curriculum writes itself: breaking down a whole reef fish, taro and its patience, lilikoi in three forms, the Saturday-market greens and what to actually do with them. Sessions follow what the market had that morning — that’s the lesson too.',
        ],
        links: [{ label: 'The Hanalei market, explained', href: 'guides/groceries-at-cost' }],
      },
      {
        heading: 'For retreats and groups',
        body: [
          'A cooking afternoon slots neatly into retreat programming — the wet-day answer on the North Shore, the rest-day answer everywhere. Quoted inside the retreat contract as its own line.',
        ],
        links: [{ label: 'Retreat catering', href: 'retreat-catering' }],
      },
    ],
    faq: [
      {
        q: 'How much does a private cooking class cost?',
        a: 'Sessions price from the published bands — $150–$250 per guest, groceries included, with the fee stack itemized. The written quote fixes the number before the date is held.',
      },
      {
        q: 'Do you come to our rental?',
        a: 'Yes — classes run in your kitchen, which is half the point. We check the kitchen first (counter space matters more for classes than dinners) and bring whatever the rental lacks.',
      },
      {
        q: 'Can kids join?',
        a: 'Absolutely — family classes are built around ages and attention spans, with real tasks for small hands and none of the danger. Say the ages in the inquiry and we shape the session.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['cooking class Kauai private', 'private cooking lesson Kauai'],
  },
  {
    slug: 'services/fine-dining',
    category: 'service',
    title: 'Fine Dining at Home Kauaʻi — Premium & Chef’s Table',
    h1: 'The tasting menu, without the dining room.',
    parent: 'private-chef',
    meta: {
      description:
        'Fine dining at home on Kauaʻi: Premium tastings $250–$350 per guest and Chef’s Table from $350+, plated and paced in your villa or estate — groceries inside the band.',
    },
    intro:
      'The upper tiers of the published card: Premium at $250–$350 a guest, Chef’s Table from $350. Longer menus, better fish, more hands in the kitchen — the restaurant experience relocated to your veranda.',
    sections: [
      {
        heading: 'What Premium buys',
        body: [
          'Five to seven courses, day-boat fish and the farms’ best boxes, a sous chef in the kitchen, and pacing set by the table rather than a reservation book. Groceries inside the band; service staff on their own lines.',
          PROVENANCE,
        ],
      },
      {
        heading: 'Chef’s Table, from $350',
        body: [
          'The counter format: the kitchen becomes the room, courses arrive off the pass with the story attached, and the menu is written for your table alone. Quoted per event from $350 a guest — the written quote names every course before the deposit.',
        ],
        links: [{ label: 'The Chef’s Table page', href: 'services/chefs-table' }],
      },
      {
        heading: 'Where it works best',
        body: [
          'Estate kitchens and big plantation verandas — Princeville bluff houses in summer, Poʻipū garden estates in winter. A Premium tasting wants counter space and a working oven; the kitchen check happens before the quote, not at the door.',
        ],
        links: [
          { label: 'Princeville', href: 'locations/princeville' },
          { label: 'Poʻipū', href: 'locations/poipu' },
        ],
      },
    ],
    faq: [
      {
        q: 'What does fine dining at home cost on Kauaʻi?',
        a: 'Premium tastings run $250–$350 per guest and Chef’s Table formats from $350, groceries inside the band. Staffing ($55/hr servers, $75/hr sous, 4-hour floor) and the fee stack are itemized separately.',
      },
      {
        q: 'How many guests can a tasting menu serve?',
        a: 'Tastings are built for two to twelve; beyond that the format becomes a coursed reception with extra crew. We’ll tell you where the line lands for your kitchen and headcount — in the quote, not on the night.',
      },
      {
        q: 'Can the menu be built around an occasion?',
        a: 'That’s the default. Anniversaries, milestones, the last night of the trip — the menu call happens after we know what the evening means, and every course is named in the written quote.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['fine dining at home Kauai', 'tasting menu private chef Kauai'],
  },
  {
    slug: 'services/chefs-table',
    category: 'service',
    title: 'Chef’s Table Kauaʻi — From $350 a Guest',
    h1: 'The kitchen is the room.',
    parent: 'services/fine-dining',
    meta: {
      description:
        'Chef’s Table on Kauaʻi from $350 a guest: counter seating, courses off the pass, a menu written for your table alone. Quoted per event, every course named in writing.',
    },
    intro:
      'The top of the card: a counter, a chef, and a menu that exists once. From $350 a guest, quoted per event — the written quote names every course before any deposit moves.',
    sections: [
      {
        heading: 'The format',
        body: [
          'Four to eight seats at the counter or the kitchen table; seven-plus courses arriving off the pass with the provenance attached — which farm, which boat, why this course follows that one. The evening runs two and a half to three hours and ends when you say it ends.',
          'Chef’s Table seats are the scarcest thing we sell on Kauaʻi — one crew, one evening. Inquiry-first is literal here: we confirm the crew before we hold the date.',
        ],
      },
      {
        heading: 'The menu conversation',
        body: [
          'Two calls: the first about the table (who, what the evening marks, what nobody eats), the second about the menu itself, written out course by course with the farms named. Nothing is a surprise except the parts meant to be.',
          PROVENANCE,
        ],
      },
      {
        heading: 'Kitchen requirements',
        body: [
          'A real kitchen with counter seating or a table within sight of the stove; estate kitchens are ideal. We bring the kit the kitchen lacks, but we can’t bring the room — hotel suites need not apply.',
        ],
        links: [{ label: 'What a kitchen needs', href: 'guides/villa-kitchen' }],
      },
    ],
    faq: [
      {
        q: 'Why is Chef’s Table quoted rather than fixed?',
        a: 'Because the menu is written per table — the fish that week, the farms’ boxes, your occasion. From $350 a guest is the published floor; the written quote fixes the exact number with every course named.',
      },
      {
        q: 'How far ahead do we need to ask?',
        a: 'A month is comfortable; December and the summer prime book further out. The constraint is crew, not ingredients — one team does one Chef’s Table an evening.',
      },
      {
        q: 'Can dietary flags survive a tasting menu?',
        a: 'Yes — flags are settled in the menu call, not at the pass. Separate prep for allergens is standard; a vegan Chef’s Table is a different menu written with the same care, not a subtraction.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ["chef's table Kauai", 'private chef tasting Kauai'],
  },
  {
    slug: 'services/honeymoon-dinners',
    category: 'service',
    title: 'Honeymoon Private Chef Kauaʻi — Dinners for Two',
    h1: 'The honeymoon table, without the reservation app.',
    parent: 'private-chef',
    meta: {
      description:
        'Honeymoon private chef dinners on Kauaʻi: Date Night $650–$950 fixed, or a private dinner rhythm across the week. Both shores — Hanalei verandas to Poʻipū gardens.',
    },
    intro:
      'The honeymoon week deserves better than seven straight reservations. One or two private dinners in your own space — $650–$950 fixed for two — and the rest of the week is yours to keep lazy.',
    sections: [
      {
        heading: 'The one great dinner',
        body: [
          'Most honeymoon bookings are a single Date Night: a coursed menu, the good fish, served on your veranda at the hour the light comes through the trees. $650–$950 fixed, groceries inside, fee stack itemized — a known number in a week of unknown ones.',
          'Time it for the second or third night, after the travel fog lifts. We’ll say the same in the inquiry reply; nobody’s best dinner happens on landing day.',
        ],
        links: [{ label: 'Date Night, in detail', href: 'services/date-night' }],
      },
      {
        heading: 'The rhythm version',
        body: [
          'Two or three dinners across the week — a Table-tier family-style night early, a Premium tasting for the last evening — reads like a food trip without a single drive. Multi-dinner weeks quote as their own lines; the Stay Chef day rate applies if you want mornings covered too.',
        ],
        links: [{ label: 'Stay Chef weeks', href: 'stay-chef' }],
      },
      {
        heading: 'Where honeymooners stay, we cook',
        body: [
          'Hanalei and Princeville for the summer prime, Poʻipū and Kōloa for the winter sun, the Kīlauea estate corridor year-round. The kitchen check is the only gate: a real stove, a counter, and we handle the rest.',
        ],
        links: [
          { label: 'Hanalei', href: 'locations/hanalei' },
          { label: 'Poʻipū', href: 'locations/poipu' },
        ],
      },
    ],
    faq: [
      {
        q: 'What does a honeymoon dinner for two cost?',
        a: 'Date Night is $650–$950 fixed with groceries included; 20% service and GET up to 4.7120% appear on their own lines. Princeville and Poʻipū add the $50–$75 shore surcharge.',
      },
      {
        q: 'Can you arrange flowers or a photographer?',
        a: 'We coordinate timing with photographers for proposal-style moments and can suggest where flowers come from, but we sell food and service — additions are quoted separately and never bundled invisibly.',
      },
      {
        q: 'We’re staying in a condo, not an estate — is that fine?',
        a: 'If the kitchen works, yes. Condo kitchens on Kauaʻi are often better than rental-villa ones; the kitchen check happens before the quote either way.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['honeymoon private chef Kauai', 'honeymoon dinner Kauai'],
  },
  {
    slug: 'services/estate-week-chef',
    category: 'service',
    title: 'Estate Chef Kauaʻi — The Week, Bundled Honestly',
    h1: 'The estate week, staffed end to end.',
    parent: 'stay-chef',
    meta: {
      description:
        'An estate-week chef on Kauaʻi: Stay Chef from $1,100/day across a 5–7 night buyout, event nights crewed at published rates, groceries at cost. Bluff estates sleeping 8–16, both shores.',
    },
    intro:
      'North Shore bluff estates rent at $3,750–$8,250 a night with seven-night minimums, and today their chef service arrives one concierge phone call at a time. The estate week bundles it: one chef, one contract, the whole stay.',
    sections: [
      {
        heading: 'What the week includes',
        body: [
          'The Stay Chef day rate (from $1,100) covers the daily rhythm: breakfasts, provisioning, dinners, the kitchen reset. Event nights inside the week — a welcome dinner for fourteen, a birthday evening — add crew at published rates: servers $55/hr, sous chefs $75/hr, 4-hour floor.',
          'Groceries run at cost with receipts; the pantry plan is written before arrival so the first morning is already handled. No invented weekly discount — the written quote is the total, itemized by day.',
        ],
        links: [{ label: 'Stay Chef cost, worked by the day', href: 'pricing/stay-chef-cost' }],
      },
      {
        heading: 'The houses this fits',
        body: [
          'Eight to sixteen guests across five to seven nights: bluff estates above Hanalei Bay, the Kīlauea estate corridor, big Poʻipū plantation houses, the Kukuiʻula rentals whose guests aren’t club members. If the house has a kitchen and the week has a shape, the product fits.',
          PROVENANCE,
        ],
        links: [
          { label: 'Stay Chef in Princeville', href: 'locations/princeville/stay-chef' },
          { label: 'A chef for the week in Hanalei', href: 'locations/hanalei/stay-chef' },
        ],
      },
      {
        heading: 'Booking it without the concierge markup',
        body: [
          'Villa agencies arrange this today through their desks; booking direct gets the same island crew with the written quote in your hands first. We work cleanly with house managers either way — access, gate codes, and house rules are settled before the chef drives out.',
        ],
        links: [{ label: 'For villa managers', href: 'partners/villa-managers' }],
      },
    ],
    faq: [
      {
        q: 'What does an estate week cost all-in?',
        a: 'Seven days of Stay Chef runs from $7,700 for the chef’s time, plus groceries at cost and any staffed event nights at published hourly rates — then 20% service and GET on their own lines. The written quote itemizes every day before the deposit.',
        links: [{ label: 'The worked math', href: '/kauai/pricing/stay-chef-cost' }],
      },
      {
        q: 'Can the chef handle both quiet days and a 20-guest night?',
        a: 'Yes — that’s the product. Rhythm days run on the day rate; event nights add servers and sous chefs at $55/$75 an hour. One contract covers both, so nobody renegotiates midweek.',
      },
      {
        q: 'Do you serve far-North estates past Hanalei?',
        a: 'With 72-hour notice and the bridge clause in writing: documented closures reschedule rather than forfeit, and the pantry plan is built so the road can’t starve the week.',
        links: [{ label: 'The bridge clause', href: '/kauai/guides/hanalei-bridge-clause' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['estate chef Kauai', 'chef for estate buyout Kauai', 'private estate chef Kauai'],
  },
  {
    slug: 'services/wellness-menus',
    category: 'service',
    title: 'Wellness Retreat Menus Kauaʻi — Protocol-Labeled',
    h1: 'Wellness menus with the labels printed.',
    parent: 'retreat-catering',
    meta: {
      description:
        'Wellness retreat menus on Kauaʻi: plant-based, Ayurvedic-fluent, detox and raw-leaning menu families, labeled dish by dish — built for retreats, priced from published Stay Chef rates.',
    },
    intro:
      'Retreat guests book for the protocol; the menu should speak it. Our wellness menu families — plant-based, Ayurvedic-fluent, detox, raw-leaning, paleo — carry labels dish by dish, built from Kauaʻi farms and priced from the published card.',
    sections: [
      {
        heading: 'The menu families',
        body: [
          'Plant-based as a cuisine, not a subtraction. Ayurvedic-fluent menus built with the retreat’s own program notes — kitchari days where the schedule calls for them. Detox and raw-leaning formats for the reset weeks. Paleo and clean-omnivore lines for mixed tables.',
          'Every dish carries its labels; allergens get separate prep. The vocabulary comes from the venues themselves — it’s how Kauaʻi retreats already describe their food, finally matched by a caterer.',
        ],
        links: [{ label: 'The full protocol matrix', href: 'retreat-catering/dietary-protocols' }],
      },
      {
        heading: 'Sourced from the island’s farms',
        body: [
          PROVENANCE,
          'Wellness menus lean hardest on the Saturday Hanalei market: the week’s greens, herbs, and fruit are bought there for North Shore programs, and the menu follows the boxes rather than the other way round.',
        ],
      },
      {
        heading: 'Priced like everything else: openly',
        body: [
          'Wellness menus price from the same published structure — Stay Chef from $1,100 a day, full-board plans in the $250–$300+ per-person/day range, itemized by day in the written quote. Protocol depth costs what it costs; the quote shows where.',
        ],
        links: [{ label: 'Retreat meal-plan pricing', href: 'retreat-catering/meal-plans' }],
      },
    ],
    faq: [
      {
        q: 'Can menus follow our retreat’s own program?',
        a: 'Yes — send the program notes and the menu family is built around them: cleanse days, feast nights, caffeine rules, all of it. The menu draft comes back labeled dish by dish before the contract.',
      },
      {
        q: 'Do you cook Ayurvedic food specifically?',
        a: 'Ayurvedic-fluent, honestly stated: kitchari, kitchari variations, warm breakfasts, spiced-but-not-hot builds aligned to program notes. We cook to your practitioner’s or host’s specification and label accordingly.',
      },
      {
        q: 'What about a mixed table — some guests eat everything?',
        a: 'The omnivore line runs alongside, never as an afterthought. Mixed tables are the norm on Kauaʻi retreats; the written quote shows both lines so hosts see exactly what each guest’s week costs.',
      },
    ],
    cta: CTA_RETREAT,
    keywords: ['wellness retreat menus Kauai', 'plant-based retreat catering Kauai', 'Ayurvedic chef Kauai'],
  },
  {
    slug: 'services/mobile-bar',
    category: 'service',
    title: 'Mobile Bar Kauaʻi — $850/4hr + $60 a Guest',
    h1: 'The bar cart, priced like everything else.',
    parent: 'catering',
    meta: {
      description:
        'Mobile bar service on Kauaʻi: packaged cart $850 per four hours plus $60 a guest, with alcohol client-supplied or via licensed referral — we do not sell alcohol. Itemized, in writing.',
    },
    intro:
      'A packaged bar cart for estate evenings and wedding weeks: $850 for four hours plus $60 a guest, staffing included in the structure, alcohol itself client-supplied or arranged through a licensed bartending referral. We do not sell alcohol — that line is printed, not implied.',
    sections: [
      {
        heading: 'What the package covers',
        body: [
          'The cart and its setup, ice, glassware coordination, garnish and mixers built from the same market run as the food, and bartender service across the four hours. The per-guest line scales the package to the table; over four hours extends at the quoted rate.',
          'Alcohol posture, verbatim: client-supplied or via licensed bartending referral. Kauaʻi County’s liquor rules are its own; we keep to them and put the posture on every quote.',
        ],
        links: [{ label: 'Alcohol and bar, explained', href: 'guides/alcohol-and-bar' }],
      },
      {
        heading: 'Where the cart earns its keep',
        body: [
          'Welcome dinners where the pūpū hour runs long, wedding-week receptions under tree cover, retreat closing nights that want two good cocktails and not a party. The cart travels with the crew — shore surcharges follow the same $50–$75 lines as the kitchen.',
        ],
        links: [{ label: 'Wedding-week formats', href: 'weddings/wedding-week' }],
      },
      {
        heading: 'The math, itemized',
        body: [
          'Cart $850 + $60 × guests + the fee stack on its own lines. Twenty guests: $850 + $1,200 = $2,050 before service and GET. Every line published; the written quote is the confirmed total.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do you supply the alcohol?',
        a: 'No — alcohol is client-supplied or arranged through a licensed bartending referral. We provide the cart, the service, the mixers and garnish; that posture is printed on every quote and never fudged.',
        links: [{ label: 'The alcohol guide', href: '/kauai/guides/alcohol-and-bar' }],
      },
      {
        q: 'What does a bar for 30 guests cost?',
        a: 'The package math: $850 for four hours plus $60 × 30 = $2,650, before 20% service and GET on their own lines. Alcohol is your purchase — we’ll advise quantities honestly.',
      },
      {
        q: 'Can the cart run alongside a dinner?',
        a: 'Yes — the common pairing is cart for the arrival hour, then dinner service. One crew, one quote, both lines itemized.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['mobile bar Kauai', 'bar cart catering Kauai', 'event bartender Kauai'],
  },
  {
    slug: 'services/staffing',
    category: 'service',
    title: 'Event Staffing Kauaʻi — Servers $55/hr, Sous $75/hr',
    h1: 'Crew, at published hourly rates.',
    parent: 'catering',
    meta: {
      description:
        'Event staffing on Kauaʻi at published rates: servers $55/hr, sous chefs $75/hr, 4-hour floor. Inquiry-stage honesty — we confirm the crew before we hold the date.',
    },
    intro:
      'Servers at $55 an hour, sous chefs at $75, a 4-hour floor — published, itemized, and honest about the island’s thin labor pool: we confirm the crew exists before the date is held, never after.',
    sections: [
      {
        heading: 'The planning math',
        body: [
          'One server per 10–12 seated guests, one per 15–20 standing. A sous joins any table over eight or any coursed menu. The 4-hour floor covers load-in through cleanup; longer events extend at the same hourly lines.',
          'Staffing is quoted with the event, not discovered after it: the written quote names the crew size and the hours before the deposit.',
        ],
        links: [{ label: 'Catering on Kauaʻi', href: 'catering' }],
      },
      {
        heading: 'Inquiry-stage, honestly',
        body: [
          'Kauaʻi’s chef-and-server pool is thin — that’s market fact, not modesty. Our posture: we never hold a date we can’t crew. If the roster can’t cover your date, you hear it in the inquiry reply, not the week of the event.',
          'This is why the deposit only ever follows the written quote. The quote exists when the crew exists.',
        ],
      },
      {
        heading: 'The roles',
        body: ['Three lines, all published:'],
        list: [
          'Servers — $55/hr, 4-hour floor · table service, tray pass, reset',
          'Sous chefs — $75/hr, 4-hour floor · the second pair of hands any menu over eight guests needs',
          'Butlers and bartenders — quoted per event, referral-based where licensing applies',
        ],
        links: [
          { label: 'Servers', href: 'services/staffing/servers' },
          { label: 'Bartenders', href: 'services/staffing/bartenders' },
          { label: 'Butlers', href: 'services/staffing/butlers' },
        ],
      },
    ],
    faq: [
      {
        q: 'Can we book staff without a chef?',
        a: 'Staffing-only requests are quoted at inquiry and depend on the roster; the published hourly lines apply either way. Most staffing travels with our food — that’s where the coordination value lives.',
      },
      {
        q: 'What does staffing a 40-guest reception cost?',
        a: 'Planning math: three to four servers and a sous across a five-hour evening runs roughly $1,300–$1,600 at the published rates, itemized in the quote before you commit.',
      },
      {
        q: 'Do staff travel to the far North Shore?',
        a: 'With the same rules as the kitchen: 72-hour notice past Hanalei, the bridge clause in writing, shore surcharges itemized. We crew it if the calendar and the road allow — and say so early if they don’t.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['event staffing Kauai', 'servers for hire Kauai', 'event crew Kauai'],
  },
  {
    slug: 'services/staffing/servers',
    category: 'service',
    title: 'Event Servers Kauaʻi — $55 an Hour, 4-Hour Floor',
    h1: 'Servers who know the estate drill.',
    parent: 'services/staffing',
    meta: {
      description:
        'Event servers on Kauaʻi at $55/hr with a 4-hour floor: table service, tray pass, and reset for estate dinners, wedding weeks, and retreat tables. Itemized in every written quote.',
    },
    intro:
      'The difference between a cooked dinner and a served evening: $55 an hour, 4-hour floor, one server per 10–12 seated guests. Quoted by name in the written quote — never a surprise line.',
    sections: [
      {
        heading: 'What a server covers',
        body: [
          'Table setting and reset, course service, tray pass for standing formats, water and wine attention, and the quiet clearing that lets a dinner run long. Servers arrive with the crew and leave when the kitchen does — the 4-hour floor covers the real arc of an evening.',
          'For wedding weeks, the same servers follow the events, so by the reception they know the family.',
        ],
        links: [{ label: 'Wedding-week formats', href: 'weddings/wedding-week' }],
      },
      {
        heading: 'How many you need',
        body: [
          'Seated coursed dinners: one per 10–12. Family-style: one per 12–15. Standing pūpū hours: one per 15–20. The quote does this math in front of you — the line item shows headcount, hours, and rate.',
        ],
      },
      {
        heading: 'The honest constraint',
        body: [
          'Kauaʻi’s service pool is thin in the peaks. December and the summer prime book the roster first; inquiry-first exists so you never learn about a crew gap the week of your event.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is gratuity expected on top of $55/hr?',
        a: 'No — gratuity is always voluntary, printed as such on every quote. The 20% service charge is a separate, itemized line that covers the operation; tipping is your call, never an assumption.',
      },
      {
        q: 'Can servers work a venue that isn’t an estate?',
        a: 'Yes — garden venues, plantation houses, and permitted sites across both shores. Load-in logistics (power, water, cover) are settled in the quote phase with the venue.',
      },
      {
        q: 'Do servers handle bar work?',
        a: 'Servers pour table wine and keep water honest; cocktail service belongs to the bar cart package ($850/4hr + $60/guest) with alcohol client-supplied or via licensed referral.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['event servers Kauai', 'wait staff hire Kauai'],
  },
  {
    slug: 'services/staffing/bartenders',
    category: 'service',
    title: 'Bartender Hire Kauaʻi — Licensed, Referred, Itemized',
    h1: 'Bar service, inside the lines.',
    parent: 'services/staffing',
    meta: {
      description:
        'Bartender hire on Kauaʻi: packaged cart $850/4hr + $60 a guest, alcohol client-supplied or via licensed bartending referral — Kauaʻi County rules respected, posture printed on every quote.',
    },
    intro:
      'Bartending on Kauaʻi runs through the packaged cart — $850 per four hours plus $60 a guest — with alcohol itself client-supplied or arranged via a licensed referral. The county’s rules govern; our posture is printed on every quote.',
    sections: [
      {
        heading: 'Why the referral model',
        body: [
          'Hawaiʻi’s liquor regulation runs through four county commissions, and Kauaʻi County’s rules are their own. Rather than blur the line, we print it: we don’t sell alcohol. Your purchase, or a licensed bartending referral — with the cart, ice, mixers, and garnish handled by us.',
          'It reads conservative because it is. The quote shows exactly who provides what, and nothing about the bar is ambiguous on the night.',
        ],
        links: [{ label: 'Alcohol and bar, in depth', href: 'guides/alcohol-and-bar' }],
      },
      {
        heading: 'The drink program',
        body: [
          'Built from the same market run as the kitchen: lilikoi, calamansi when it’s around, the good local spirits where they exist, zero-proof builds that aren’t an apology. Two signature serves per event is the sweet spot — the quote names them.',
        ],
      },
      {
        heading: 'Where bars get built',
        body: [
          'Estate verandas, garden receptions, retreat closing nights, wedding-week welcome hours. The cart travels with the crew; far-North setups follow the 72-hour bridge rule like everything else.',
        ],
        links: [{ label: 'The mobile bar package', href: 'services/mobile-bar' }],
      },
    ],
    faq: [
      {
        q: 'Can your bartender serve alcohol we bought?',
        a: 'Yes — client-supplied alcohol with our cart and service is the standard model, and a licensed bartending referral covers the rest where the venue or county requires it. The quote prints the posture explicitly.',
      },
      {
        q: 'What does bar service for 40 cost?',
        a: 'Cart $850 + $60 × 40 = $3,250 for four hours, plus 20% service and GET on their own lines. Alcohol is your purchase — we advise quantities so you buy once, correctly.',
      },
      {
        q: 'Zero-proof options?',
        a: 'Standard, not special — every bar program includes zero-proof builds with the same garnish discipline. Retreat tables often run zero-proof only; the cart handles that format weekly.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['bartender hire Kauai', 'event bartender Kauai', 'wedding bar Kauai'],
  },
  {
    slug: 'services/staffing/butlers',
    category: 'service',
    title: 'Butler Service Kauaʻi — Estate-Level Front of House',
    h1: 'Front of house, estate register.',
    parent: 'services/staffing',
    meta: {
      description:
        'Butler and estate front-of-house service on Kauaʻi, quoted per event: the receiving, pouring, and pacing layer for estate weeks and wedding receptions. Itemized in writing.',
    },
    intro:
      'The layer above serving: receiving guests, running the room, pacing the evening so the hosts never think about it. Quoted per event — the written quote names the role and the hours.',
    sections: [
      {
        heading: 'When a butler earns the line',
        body: [
          'Estate weeks with guests arriving in waves. Wedding receptions where the couple should never be asked a logistical question. Chef’s Table evenings where the room and the pass need one mind. For a family dinner of eight, a good server is enough — we’ll say so.',
          'The role is quoted per event at inquiry with hours and rate itemized; it follows the same honesty rules as every line we publish.',
        ],
      },
      {
        heading: 'What the role covers',
        body: [
          'Arrival and coat-and-bag flow, drinks continuity between bar and table, timing liaison with the kitchen, the quiet handling of the host’s list — the dietary flag at seat nine, the toast that must land before dessert. The evening’s memory lives in these details; the butler owns them.',
        ],
      },
      {
        heading: 'Estate weeks, especially',
        body: [
          'On multi-day estate bookings the butler becomes the house’s front of house: breakfast pacing, provisioning visibility, the evening reset. It folds into the estate-week contract as its own line.',
        ],
        links: [{ label: 'The estate-week chef', href: 'services/estate-week-chef' }],
      },
    ],
    faq: [
      {
        q: 'How is butler service priced?',
        a: 'Quoted per event with hours and rate itemized in the written quote — the same inquiry-first posture as every Kauaʻi line. For most dinners, servers at $55/hr are the right tool; we recommend the butler only where the room justifies it.',
      },
      {
        q: 'Can a butler manage other vendors on the night?',
        a: 'Within reason — florals placed before service, a photographer’s timing, the musician’s break. Planner-level coordination stays with your planner; the butler runs the room, not the production.',
      },
      {
        q: 'Is this available for retreats?',
        a: 'Rarely needed — retreat tables run family-style and self-paced. Where a host wants a polished closing night, the role quotes like any other event line.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['butler service Kauai', 'estate front of house Kauai'],
  },
  {
    slug: 'services/kids-menus',
    category: 'service',
    title: 'Kid-Friendly Private Chef Kauaʻi — Early Seatings, Real Food',
    h1: 'The kids eat first, and well.',
    parent: 'private-chef',
    meta: {
      description:
        'Kid-friendly private chef service on Kauaʻi: early seatings, real food sized down, allergies handled with separate prep — inside every family booking, priced per guest like everything else.',
    },
    intro:
      'Family bookings are the Kauaʻi default, and the kids’ table is designed, not improvised: early seating, real food sized down, allergies handled with separate prep, priced per guest inside the same quote.',
    sections: [
      {
        heading: 'How the split table works',
        body: [
          'Kids eat at five-thirty, adults at seven-thirty — the kitchen runs both from the same market bag. The kids’ menu is real food sized and seasoned for small people: the same fish, less ceremony; the vegetables they’ll actually eat, cooked properly.',
          'Per-guest pricing applies to the adult table; kids’ plates price inside the quote at honest portions. No separate contract, no second vendor, no nugget-shaped compromise unless the kids overrule us — they sometimes do.',
        ],
      },
      {
        heading: 'Allergies, taken seriously',
        body: [
          'Separate prep for allergens is standard, and the kids’ table is where it matters most. Flags are settled in the menu call and labeled per dish; a nut-free house stays nut-free for the whole booking, not just the kid courses.',
        ],
        links: [{ label: 'Dietary service', href: 'services/dietary' }],
      },
      {
        heading: 'The week version',
        body: [
          'On Stay Chef weeks the kids’ rhythm becomes infrastructure: breakfasts at their hour, beach-day coolers, the early dinner, and a parents-only Date Night midweek while the kitchen handles the kids’ table first.',
        ],
        links: [{ label: 'Stay Chef weeks', href: 'stay-chef' }],
      },
    ],
    faq: [
      {
        q: 'Do kids cost the full per-guest rate?',
        a: 'No — kids’ plates price at honest portions inside the written quote. The per-guest bands describe the adult table; the quote shows both lines so splitting families see the real math.',
      },
      {
        q: 'Can you handle a severe allergy?',
        a: 'With separate prep, labeled dishes, and the flag settled before the menu is written. For severe airborne allergies we’ll tell you exactly what our controls are — and are not — in writing, before you commit.',
      },
      {
        q: 'What about picky eaters?',
        a: 'The menu call includes the kids’ actual preferences — this is a private kitchen, not a restaurant with a kids’ card. If the answer is buttered pasta three nights running, the pasta will be excellent.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['kid-friendly private chef Kauai', 'family chef Kauai', 'kids menu private chef'],
  },
  {
    slug: 'services/dietary',
    category: 'service',
    title: 'Vegan & Gluten-Free Private Chef Kauaʻi — 11 Flags Standard',
    h1: 'Dietary depth, as infrastructure.',
    parent: 'private-chef',
    meta: {
      description:
        'Dietary-restriction private chef service on Kauaʻi: eleven standard flags from vegan to low-sodium, separate allergen prep, protocol-labeled retreat menus — settled in the menu call, not at the table.',
    },
    intro:
      'Eleven dietary flags as standard infrastructure — vegetarian, vegan, gluten-free, halal, kosher-style, dairy-free, nut-free, keto, pescatarian, low-sodium, diabetic-friendly — with separate prep for allergens and menus that name their protocols.',
    sections: [
      {
        heading: 'Settled before the shopping',
        body: [
          'Dietary flags live in the menu call, not the table announcement. The written menu labels every dish; the shopping respects it; the prep separates allergens with dedicated boards, pans, and oil. By the time anyone sits down, the questions are already answered.',
          'One kitchen, one standard: the vegan courses are written with the same care as the fish, because on Kauaʻi the farms make that easy.',
        ],
        links: [{ label: 'Vegetarian & vegan menus', href: 'menus/vegetarian-vegan' }],
      },
      {
        heading: 'The retreat-grade version',
        body: [
          'Kauaʻi’s retreat work means protocol depth beyond the eleven flags: Ayurvedic-fluent menu families, detox and raw-leaning formats, multi-day plans where the labels carry across a week. If your group eats by a program, we cook by the program.',
        ],
        links: [{ label: 'Dietary protocols for retreats', href: 'retreat-catering/dietary-protocols' }],
      },
      {
        heading: 'Honest limits, in writing',
        body: [
          'We cook in rental kitchens, not certified facilities. Separate prep is disciplined and real — dedicated equipment, sequenced prep, labeled storage — but severe airborne allergies get the full honest paragraph about what a private kitchen can and cannot guarantee, before you commit.',
        ],
        links: [{ label: 'The dietary guide', href: 'guides/dietary' }],
      },
    ],
    faq: [
      {
        q: 'Does dietary accommodation cost extra?',
        a: 'No — the eleven flags are standard inside the published bands. Deeply specialized sourcing (a strict protocol week, hard-to-find ingredients) shows up honestly in the groceries-at-cost line, with receipts.',
      },
      {
        q: 'Can you cook gluten-free safely for celiac guests?',
        a: 'With dedicated prep sequence, clean equipment, and separate oil and boards — yes, and we describe the exact controls in writing. Rental kitchens aren’t certified GF facilities; the honest paragraph is part of the quote conversation.',
      },
      {
        q: 'Mixed table — vegans and carnivores?',
        a: 'The Kauaʻi norm. Courses are built so the vegan plate is a dish, not a subtraction, and the table shares most of the menu. The market’s greens carry it.',
        links: [{ label: 'The Hanalei Table menu', href: '/kauai/menus/farm-to-table' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['vegan private chef Kauai', 'gluten free private chef Kauai', 'dietary restrictions chef Kauai'],
  },
  {
    slug: 'services/grocery-stocking',
    category: 'service',
    title: 'Villa Pre-Stocking Kauaʻi — Arrive to a Full Fridge',
    h1: 'Land late. Eat well anyway.',
    parent: 'services/vacation-chef',
    meta: {
      description:
        'Villa pre-arrival grocery stocking on Kauaʻi: the fridge and pantry filled before you land, at cost with receipts — breakfast things, local fruit, coffee, and the good poke when the shop has it.',
    },
    intro:
      'The most-requested small service on the island: arrive after a six-hour flight to a fridge that’s already full. Stocking runs at cost with receipts — you pay what the store charged, plus the service line, itemized.',
    sections: [
      {
        heading: 'What lands in the fridge',
        body: [
          'Your list, refined by people who shop here weekly: breakfast things, good coffee, apple bananas and whatever the fruit stand had, snacks that survive the beach, the poke worth eating if the shop has it that day. Dietary flags apply to stocking exactly as they do to cooking.',
          'On Kauaʻi this is logistics, not luxury: the North Shore’s markets close early, the nearest full grocery might be forty minutes of two-lane road, and landing day shouldn’t cost you a dinner run.',
        ],
      },
      {
        heading: 'Priced like everything else',
        body: [
          'Groceries at cost with receipts, plus a service line quoted in writing before you land. No markup on the food, no mystery “stocking fee” discovered at checkout — the receipt envelope is part of the product.',
        ],
        links: [{ label: 'Groceries at cost, explained', href: 'guides/groceries-at-cost' }],
      },
      {
        heading: 'Pairs with',
        body: ['Stocking is the opening move of most multi-day bookings:'],
        list: [
          'Arrival-night dinner — the table set while you’re still shaking off the flight',
          'Stay Chef weeks — stocking becomes the standing pantry plan',
          'Mid-stay refresh — the Wednesday run so Thursday’s beach day has a cooler',
        ],
        links: [
          { label: 'Stay Chef', href: 'stay-chef' },
          { label: 'Vacation chef service', href: 'services/vacation-chef' },
        ],
      },
    ],
    faq: [
      {
        q: 'How much does pre-stocking cost?',
        a: 'The groceries at cost — receipts attached — plus a service line quoted in writing. The written quote fixes the service line before you land; the receipts show the food was never marked up.',
      },
      {
        q: 'Can you stock before a late arrival?',
        a: 'Yes — that’s the point. With house-manager or lockbox coordination, the fridge is full and cold before you turn the key. Perishables are timed to your landing window.',
      },
      {
        q: 'Which areas do you stock?',
        a: 'Both shores and the East Side; Princeville and Poʻipū carry the standard $50–$75 shore surcharge, far-North past Hanalei is quoted at inquiry with 72-hour notice.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['villa pre-stocking Kauai', 'grocery stocking Kauai vacation rental'],
  },
];

/** Kauaʻi locations cluster (Table 4.2.3a rows 27–43): index + 6 areas + 10 service×location. */
const locations: ContentRecord[] = [
  {
    slug: 'locations',
    category: 'location',
    title: 'Private Chef Kauaʻi — Areas Served, Both Shores',
    h1: 'Two shores, one east side, honestly mapped.',
    parent: '',
    meta: {
      description:
        'Where myCHEF cooks on Kauaʻi: North Shore (Princeville, Hanalei, Kīlauea), South Shore (Poʻipū, Kōloa), East Side (Kāpaʻa–Līhuʻe) — with drive times, shore surcharges, and the far-North bridge clause.',
      ogImage: '/img/kauai/shore-north.jpg',
    },
    intro:
      'Kauaʻi is one island and two commitments. North Shore estates peak June through September; the South Shore carries November through March; the East Side is the year-round residential belt. Surcharges and closure rules are published, not discovered.',
    sections: [
      {
        eyebrow: 'North Shore',
        heading: 'Princeville · Hanalei · Kīlauea',
        body: [
          SEASON_NORTH,
          'Bluff estates and plantation houses above the bay; $50–$75 shore surcharge from our base; everything past the Hanalei bridge runs on 72-hour notice with the written closure clause.',
        ],
        media: { src: '/img/kauai/shore-north.jpg', alt: 'Hanalei taro fields backed by waterfall-striped mountains in morning mist', ratio: '4/5' },
        links: [
          { label: 'Princeville', href: 'locations/princeville' },
          { label: 'Hanalei', href: 'locations/hanalei' },
          { label: 'Kīlauea', href: 'locations/kilauea' },
        ],
      },
      {
        eyebrow: 'South Shore',
        heading: 'Poʻipū · Kōloa',
        body: [
          SEASON_SOUTH,
          'The dry side: garden estates, plantation architecture, the Kukuiʻula belt. Same $50–$75 shore surcharge; no bridge between us and dinner.',
        ],
        media: { src: '/img/kauai/shore-south.jpg', alt: 'A Poʻipū estate garden under soft post-rain light', ratio: '4/5' },
        links: [
          { label: 'Poʻipū', href: 'locations/poipu' },
          { label: 'Kōloa', href: 'locations/koloa' },
        ],
      },
      {
        eyebrow: 'East Side',
        heading: 'Kāpaʻa · Līhuʻe',
        body: [
          'The island’s largest towns and its residential heart: base-zone service with no surcharge, the strongest year-round availability, and the island’s only combined East Side page — because that’s how the demand actually reads.',
        ],
        links: [{ label: 'Kāpaʻa–Līhuʻe', href: 'locations/kapaa-lihue' }],
      },
      {
        eyebrow: 'The honest edges',
        heading: 'Far North and the west',
        body: [
          'Wainiha and Hāʻena are served under the bridge clause: 72-hour notice, documented closures reschedule rather than forfeit. West-side requests — Waimea, Hanapēpē, Kalāheo — are quoted at inquiry; the rental stock there is thin and we’d rather say so than imply a fleet.',
        ],
        links: [
          { label: 'The bridge clause', href: 'guides/hanalei-bridge-clause' },
          { label: 'Coverage and travel zones', href: 'coverage' },
        ],
      },
    ],
    faq: [
      {
        q: 'Do you charge travel fees on Kauaʻi?',
        a: 'Kāpaʻa–Līhuʻe and near corridors are base zone. Princeville and Poʻipū carry a $50–$75 shore surcharge per service day. Far-North service past Hanalei is quoted at inquiry with 72-hour notice.',
        links: [{ label: 'Travel zones, line by line', href: '/kauai/pricing/travel-zones' }],
      },
      {
        q: 'Which shore should we stay on?',
        a: 'Summer and holidays: North Shore, at its best June–September. November through March: the South Shore is drier and calmer. The seasons invert, which is exactly why our coverage runs both.',
        links: [{ label: 'The two-shore season guide', href: '/kauai/guides/shore-seasonality' }],
      },
      {
        q: 'Do you serve Waimea or Hanapēpē?',
        a: 'At inquiry, honestly: the west side has thin luxury rental stock, so we quote per event rather than imply standing coverage. If we can crew it, the written quote says exactly what it costs.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef Kauai areas served', 'Kauai private chef coverage'],
  },
  {
    slug: 'locations/princeville',
    category: 'location',
    title: 'Private Chef Princeville — Bluff Estates, Summer Prime',
    h1: 'Private chef Princeville.',
    parent: 'locations',
    meta: {
      description:
        'Private chef service in Princeville, Kauaʻi: bluff-estate dinners $150–$250/guest, Stay Chef weeks from $1,100/day, estate portfolios from the concierge belt. Shore surcharge $50–$75, published.',
      ogImage: '/img/kauai/shore-north.jpg',
    },
    intro:
      'The North Shore’s planned bluff community: estate portfolios, resort-adjacent villas, and the island’s summer-prime tables. Shore surcharge $50–$75, published up front; summer books first.',
    sections: [
      {
        eyebrow: 'North Shore',
        heading: 'The bluff-estate table',
        body: [
          'Princeville’s stock is made for private dining: big kitchens, long verandas, dining rooms built for twelve. The concierge desks at the estate agencies arrange chef dinners today — booking direct gets you the written quote instead of the phone chain.',
          SEASON_NORTH,
        ],
        media: { src: '/img/kauai/shore-north.jpg', alt: 'Morning mist over Hanalei taro fields below the Princeville bluffs', ratio: '4/5' },
      },
      {
        heading: 'What gets booked here',
        body: ['Princeville’s rhythm, in order of frequency:'],
        list: [
          'Stay Chef weeks — estates sleeping 8–16, from $1,100/day + groceries at cost',
          'Arrival-night Signature dinners — $150–$250/guest, groceries inside the band',
          'Estate-week buyouts — one chef, one contract, event nights crewed at published rates',
          'Date Nights and elopement dinners — $650–$950 fixed',
        ],
        links: [
          { label: 'Stay Chef in Princeville', href: 'locations/princeville/stay-chef' },
          { label: 'Vacation chef in Princeville', href: 'locations/princeville/vacation-chef' },
        ],
      },
      {
        heading: 'Logistics, Princeville-specific',
        body: [
          'The shore surcharge ($50–$75) covers the drive with a cooler and a kit; it’s on the quote’s own line. Gate access and house rules settle before service day. December compresses: holiday weeks book months out and price honestly.',
          PROVENANCE,
        ],
      },
    ],
    faq: [
      {
        q: 'What does a private chef in Princeville cost?',
        a: 'Signature dinners $150–$250 per guest with groceries inside the band, plus the $50–$75 shore surcharge, 20% service, and GET up to 4.7120% on their own lines. Stay Chef weeks run from $1,100 a day plus groceries at cost.',
      },
      {
        q: 'Can you cook in our Princeville rental’s kitchen?',
        a: 'Princeville kitchens are among the island’s best — full ranges, real counters. We confirm the kitchen before quoting and bring the kit it lacks.',
      },
      {
        q: 'How far ahead for a summer week?',
        a: 'June through September is the North Shore’s prime: a month ahead is comfortable, two is safer for estate weeks. The 50% deposit locks the date after you’ve seen the written quote.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef Princeville', 'Princeville chef', 'estate chef Princeville Kauai'],
  },
  {
    slug: 'locations/hanalei',
    category: 'location',
    title: 'Private Chef Hanalei — The Bay, the Bridge, the Clause',
    h1: 'Private chef Hanalei.',
    parent: 'locations',
    meta: {
      description:
        'Private chef service in Hanalei, Kauaʻi: veranda dinners $150–$250/guest, chef-for-a-week from $1,100/day, and the written Hanalei bridge clause — 72-hour notice, closures reschedule rather than forfeit.',
      ogImage: '/img/kauai/shore-north.jpg',
    },
    intro:
      'Hanalei is the island’s postcard and its logistics exam: one bridge in, the best summer tables on Kauaʻi, and a written closure clause nobody else publishes. We cook here weekly in the prime — and we put the road rules in writing.',
    sections: [
      {
        eyebrow: 'North Shore',
        heading: 'The bay and its season',
        body: [
          'Hanalei’s stock is plantation houses, bay-front estates, and the wellness-flagship resort corridor. Summer is the prime: calm water, long light, and taro fields going green below the waterfalls.',
          'Winter is honest here: rain, swell, and road risk November through March. We serve Hanalei year-round — but winter far-North bookings carry the clause, not crossed fingers.',
        ],
        media: { src: '/img/kauai/shore-north.jpg', alt: 'Rain-washed taro fields in Hanalei with mist on the mountains', ratio: '4/5' },
      },
      {
        heading: 'What gets booked here',
        body: ['Hanalei’s table, by frequency:'],
        list: [
          'Chef-for-a-week stays — from $1,100/day, groceries at cost',
          'Estate wedding weeks — from $175/guest + staffing',
          'Signature veranda dinners — $150–$250/guest',
          'Elopement dinners for two — $650–$950 fixed',
        ],
        links: [
          { label: 'A chef for the week in Hanalei', href: 'locations/hanalei/stay-chef' },
          { label: 'Hanalei estate weddings', href: 'locations/hanalei/estate-wedding' },
        ],
      },
      BRIDGE_SECTION,
    ],
    faq: [
      {
        q: 'What happens to our booking if the Hanalei bridge closes?',
        a: 'The written clause governs: documented HDOT closures reschedule your service rather than forfeit the deposit. We track the road, we plan the shopping before crossings, and the 72-hour notice window exists precisely so the plan holds.',
        links: [{ label: 'The full clause', href: '/kauai/guides/hanalei-bridge-clause' }],
      },
      {
        q: 'Is Hanalei service more expensive?',
        a: 'Hanalei sits inside the standard $50–$75 North Shore surcharge. Far-North addresses past the bridge — Wainiha, Hāʻena — are quoted at inquiry because the road, not the distance, is the variable.',
      },
      {
        q: 'Can you cater our Hanalei wedding week?',
        a: 'Yes — estate wedding weeks are a Hanalei specialty: welcome dinner through recovery brunch, from $175/guest plus staffing, one contract. Summer dates book first.',
        links: [{ label: 'Hanalei estate weddings', href: '/kauai/locations/hanalei/estate-wedding' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef Hanalei', 'Hanalei chef', 'chef for a week Hanalei'],
  },
  {
    slug: 'locations/kilauea',
    category: 'location',
    title: 'Private Chef Kīlauea — The Estate & Retreat Corridor',
    h1: 'Private chef Kīlauea.',
    parent: 'locations',
    meta: {
      description:
        'Private chef service in Kīlauea, Kauaʻi: the estate and retreat corridor — hundred-acre retreat houses, lakeside estates, bluff properties at $3,750–$8,250/night. Dinners, estate weeks, retreat tables.',
      ogImage: '/img/kauai/band-retreat.jpg',
    },
    intro:
      'Kīlauea is Kauaʻi’s quiet power corridor: hundred-acre retreat houses, lakeside eco-estates, bluff properties renting at $3,750–$8,250 a night — and, until now, nobody serving them with a published rate card.',
    sections: [
      {
        eyebrow: 'North Shore',
        heading: 'Estates and retreat houses',
        body: [
          'The corridor’s properties sleep 8–30: faith retreats, wellness weeks, family buyouts, corporate offsites that want to feel like neither. The food has historically been ad hoc — a hired cook, a restaurant run, a hopeful host. The retreat table fixes that: one contract, every meal, dietary depth included.',
        ],
        media: { src: '/img/kauai/band-retreat.jpg', alt: 'Mist in trees above a communal retreat table at a Kīlauea estate', ratio: '4/5' },
        links: [{ label: 'Retreat catering in Kīlauea', href: 'locations/kilauea/retreat-catering' }],
      },
      {
        heading: 'The estate-week play',
        body: [
          'At $3,750–$8,250 a night with seven-night minimums, these houses already spend like resorts — but chef service arrives one concierge call at a time. The estate week bundles it: Stay Chef from $1,100/day, event nights crewed at published rates, one written quote for the whole stay.',
        ],
        links: [{ label: 'The estate-week chef', href: 'services/estate-week-chef' }],
      },
      {
        heading: 'Logistics on the corridor',
        body: [
          'Kīlauea sits inside the standard North Shore surcharge ($50–$75) and before the bridge — no far-North clause required. Farm stands and the Saturday market are minutes away; the sourcing is as short as the drive.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you cater a full retreat at a Kīlauea property?',
        a: 'Yes — 8–30 guests across 3–7 days is the retreat product’s exact envelope, priced from the published Stay Chef rate with per-person/day meal plans. One contract, dietary protocols labeled, kitchen check before the contract.',
        links: [{ label: 'Retreat catering in Kīlauea', href: '/kauai/locations/kilauea/retreat-catering' }],
      },
      {
        q: 'What does chef service cost for a Kīlauea estate week?',
        a: 'Stay Chef from $1,100 a day plus groceries at cost; staffed event nights add servers ($55/hr) and sous chefs ($75/hr). The $50–$75 North Shore surcharge applies per service day. All of it itemized in the written quote.',
      },
      {
        q: 'Do Kīlauea bookings need the bridge clause?',
        a: 'No — Kīlauea sits town-side of the Hanalei bridge. The clause applies to Wainiha and Hāʻena, past the bridge; Kīlauea bookings carry the standard terms.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef Kilauea Kauai', 'Kilauea estate chef', 'retreat house chef Kauai'],
  },
  {
    slug: 'locations/poipu',
    category: 'location',
    title: 'Private Chef Poʻipū — The Dry Side, Year-Round',
    h1: 'Private chef Poʻipū.',
    parent: 'locations',
    meta: {
      description:
        'Private chef service in Poʻipū, Kauaʻi: garden-estate dinners $150–$250/guest, Stay Chef from $1,100/day, wedding catering from $175/guest. The South Shore carries winter — drier November through March.',
      ogImage: '/img/kauai/shore-south.jpg',
    },
    intro:
      'The South Shore is Kauaʻi’s winter answer: when the North gets its rain, Poʻipū stays dry. Garden estates, plantation architecture, the resort belt — and the island’s steadiest year-round table.',
    sections: [
      {
        eyebrow: 'South Shore',
        heading: 'The dry side’s season',
        body: [
          SEASON_SOUTH,
          'Poʻipū is where winter bookings should land, and we say so in the inquiry reply when your dates argue for it. The two-shore seasonality guide is the honest version of the brochure.',
        ],
        media: { src: '/img/kauai/shore-south.jpg', alt: 'A Poʻipū estate garden in soft post-rain light, table set under tree cover', ratio: '4/5' },
        links: [{ label: 'North vs South, month by month', href: 'guides/shore-seasonality' }],
      },
      {
        heading: 'What gets booked here',
        body: ['Poʻipū’s table, by frequency:'],
        list: [
          'Vacation-chef weeks in the Poipu Kapili and villa-belt rentals — from $1,100/day',
          'Wedding catering across the South Shore venue corridor — from $175/guest + staffing',
          'Garden-event catering, 10–75 guests — per-guest bands + published staffing',
          'Signature dinners — $150–$250/guest, groceries inside the band',
        ],
        links: [
          { label: 'Vacation chef in Poʻipū', href: 'locations/poipu/vacation-chef' },
          { label: 'Wedding catering in Poʻipū', href: 'locations/poipu/wedding-catering' },
          { label: 'Catering in Poʻipū', href: 'locations/poipu/catering' },
        ],
      },
      {
        heading: 'Logistics, Poʻipū-specific',
        body: [
          'The $50–$75 South Shore surcharge covers the drive; no bridges, no clauses — the dry side’s logistics are as calm as its winters. Resort-belt events coordinate with house managers on load-in; we’ve worked the plantation venues’ kitchens before.',
          PROVENANCE,
        ],
      },
    ],
    faq: [
      {
        q: 'What does a private chef in Poʻipū cost?',
        a: 'Signature dinners $150–$250 per guest, groceries inside the band, plus the $50–$75 South Shore surcharge; Stay Chef weeks from $1,100 a day. The fee stack — 20% service, GET up to 4.7120% — is itemized on every quote.',
      },
      {
        q: 'We’re coming in February — is Poʻipū the right call?',
        a: 'Almost certainly: the South Shore is the dry side November through March, and Poʻipū’s gardens and plantation houses are at their best when the North Shore is underwater. Book the shore for the season.',
        links: [{ label: 'The seasonality guide', href: '/kauai/guides/shore-seasonality' }],
      },
      {
        q: 'Can you cater a wedding near the resort belt?',
        a: 'Yes — the South Shore venue corridor is core ground: estate gardens, plantation venues, villa receptions to 75 guests, from $175/guest plus staffing. Venue vendor rules settle in the quote phase.',
        links: [{ label: 'Poʻipū wedding catering', href: '/kauai/locations/poipu/wedding-catering' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef Poipu', 'Poipu chef', 'South Shore Kauai private chef'],
  },
  {
    slug: 'locations/koloa',
    category: 'location',
    title: 'Private Chef Kōloa — Old Town to Kukuiʻula',
    h1: 'Private chef Kōloa.',
    parent: 'locations/poipu',
    meta: {
      description:
        'Private chef service in Kōloa, Kauaʻi: plantation-town dinners, Kukuiʻula rental weeks for non-member guests, and wedding catering from $175/guest. South Shore surcharge $50–$75, published.',
    },
    intro:
      'One of Hawaiʻi’s oldest plantation towns, now the South Shore’s estate belt: Old Kōloa’s wooden storefronts below, Kukuiʻula’s plantation-style luxury above. We cook both — and the Kukuiʻula play is built for non-member guests.',
    sections: [
      {
        eyebrow: 'South Shore',
        heading: 'The Kukuiʻula opening',
        body: [
          'The Club at Kukuiʻula runs its own dining for members — which leaves the non-member guests in Kukuiʻula’s rental villas with beautiful kitchens and no table. That gap is exactly our product: Stay Chef weeks from $1,100/day, arrival dinners from $150/guest, all of it in writing.',
          SEASON_SOUTH,
        ],
      },
      {
        heading: 'What gets booked here',
        body: ['Kōloa’s table, by frequency:'],
        list: [
          'Stay Chef weeks in Kukuiʻula rentals — from $1,100/day + groceries at cost',
          'Plantation-house celebration dinners — $150–$250/guest',
          'Wedding catering at Kukuiʻula-adjacent estates — from $175/guest + staffing',
          'Holiday-week full-board — December books first, island-wide',
        ],
        links: [{ label: 'Wedding catering in Kōloa', href: 'locations/koloa/wedding-catering' }],
      },
      {
        heading: 'Plantation kitchens, honestly assessed',
        body: [
          'Kōloa’s older plantation houses have character and occasionally 1960s ovens; the newer estate kitchens are among the island’s best. The kitchen check before the quote tells you which you have — and what we bring to close the gap.',
        ],
        links: [{ label: 'What a kitchen needs', href: 'guides/villa-kitchen' }],
      },
    ],
    faq: [
      {
        q: 'We’re renting in Kukuiʻula but aren’t members — can you cook for us?',
        a: 'That is precisely the opening: the Club’s dining serves members, while non-member rental guests have the island’s best kitchens and no chef. Stay Chef weeks, dinners, and stocking all serve Kukuiʻula rentals directly.',
      },
      {
        q: 'What does a Kōloa wedding dinner cost?',
        a: 'Wedding lines start at $175/guest plus staffing ($55/hr servers, $75/hr sous, 4-hour floor), with the $50–$75 South Shore surcharge and the fee stack itemized. The written quote is the confirmed total.',
        links: [{ label: 'Kōloa wedding catering', href: '/kauai/locations/koloa/wedding-catering' }],
      },
      {
        q: 'Is Kōloa covered in winter?',
        a: 'Fully — the South Shore carries November through March, and Kōloa’s garden estates are winter’s best rooms. Book December early; it compresses first.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef Koloa', 'Kukuiula private chef', 'Koloa catering'],
  },
  {
    slug: 'locations/kapaa-lihue',
    category: 'location',
    title: 'Private Chef Kāpaʻa & Līhuʻe — The East Side, Base Zone',
    h1: 'Private chef Kāpaʻa–Līhuʻe.',
    parent: 'locations',
    meta: {
      description:
        'Private chef service in Kāpaʻa and Līhuʻe, Kauaʻi: base-zone pricing with no shore surcharge, resident weekly service $550–$1,200/week, event catering 10–75 guests, Royal Sonesta-corridor weddings.',
      ogImage: '/img/kauai/card-stay-chef.jpg',
    },
    intro:
      'The island’s largest towns and its residential heart — and our base zone, which means no shore surcharge and the strongest year-round availability. One combined East Side page because that’s how the demand honestly reads.',
    sections: [
      {
        eyebrow: 'East Side',
        heading: 'The year-round table',
        body: [
          'East Side demand is different from the shores: more residents, more condo kitchens, more Tuesday-night reasons. The kamaʻāina weekly line ($550–$1,200/week) lives here, alongside family celebrations, condo dinners, and the Royal Sonesta corridor’s weddings.',
          'Base zone means the rate card applies clean: no surcharge, no 72-hour clause, the fee stack itemized as always.',
        ],
        media: { src: '/img/kauai/card-stay-chef.jpg', alt: 'A Kauaʻi estate kitchen with worn wood counters and open windows to green outside', ratio: '4/5' },
      },
      {
        heading: 'What gets booked here',
        body: ['East Side bookings, by frequency:'],
        list: [
          'Resident weekly service — $550–$1,200/week, groceries at cost',
          'Family and milestone catering, 10–75 guests — per-guest bands + staffing',
          'Condo and vacation-rental dinners — $125–$250/guest',
          'Wedding catering across the Līhuʻe resort corridor — from $175/guest + staffing',
        ],
        links: [
          { label: 'Catering in Kāpaʻa–Līhuʻe', href: 'locations/kapaa-lihue/catering' },
          { label: 'Meal prep service', href: 'services/meal-prep' },
        ],
      },
      {
        heading: 'Condo kitchens, respectfully',
        body: [
          'East Side condos often have better kitchens than rental villas — full ranges, dishwashers, real counters. The kitchen check still applies, and hotel rooms without kitchens are still declined; but the East Side’s stock passes more often than anywhere on the island.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is there a travel fee for Kāpaʻa or Līhuʻe?',
        a: 'No — the East Side is base zone. The rate card applies clean: per-guest bands, published staffing, the fee stack itemized. Surcharges begin at the shores ($50–$75 to Princeville or Poʻipū).',
      },
      {
        q: 'Do you serve residents, or only visitors?',
        a: 'Residents are the East Side’s core: weekly cook days, meal prep, and family events book month to month, protected from the visitor season’s compression.',
        links: [{ label: 'Weekly meal prep', href: '/kauai/services/meal-prep' }],
      },
      {
        q: 'Can you cater our Līhuʻe wedding?',
        a: 'Yes — the Līhuʻe resort corridor’s weddings and resident celebrations are regular ground: from $175/guest plus staffing, venue coordination included in the quote phase.',
        links: [{ label: 'East Side catering', href: '/kauai/locations/kapaa-lihue/catering' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef Kapaa', 'private chef Lihue', 'East Side Kauai chef'],
  },
  {
    slug: 'locations/princeville/stay-chef',
    category: 'location',
    title: 'Stay Chef Princeville — The Week, from $1,100/Day',
    h1: 'A Stay Chef week in Princeville.',
    parent: 'stay-chef',
    meta: {
      description:
        'Stay Chef weeks in Princeville, Kauaʻi: from $1,100/day plus groceries at cost in bluff-estate kitchens — the service the estate-agency concierges arrange, booked direct with a written quote.',
    },
    intro:
      'Princeville’s estate portfolios run from $450 a night to five figures a week — and their concierges arrange chef service one dinner at a time. A Stay Chef week books the same island crew direct: from $1,100 a day, itemized, in writing.',
    sections: [
      {
        heading: 'Why Princeville weeks work',
        body: [
          'The stock is ideal: big kitchens, veranda dining, houses that sleep 8–16. The season is known: June through September plus the holidays. And the drive to the Saturday Hanalei market is measured in minutes, which means the week’s greens are that morning’s.',
          'The $50–$75 North Shore surcharge applies per service day; it’s on the quote, not discovered on the invoice.',
        ],
      },
      {
        heading: 'A Princeville week, sketched',
        body: ['Seven days, one chef:'],
        list: [
          'Day 1 — arrival dinner timed to your landing; fridge already stocked',
          'Day 2 — breakfast, beach-day cooler, family-style dinner',
          'Day 3 — rest-day brunch; evening free for the house',
          'Day 4 — Signature coursed dinner for the whole table',
          'Day 5 — kids’ early seating, parents’ late Date Night',
          'Day 6 — pūpū hour on the veranda, light supper after',
          'Day 7 — farewell brunch; the kitchen left cleaner than arrival',
        ],
      },
      {
        heading: 'Booking it',
        body: [
          'Send dates, the house (or its manager), and headcount. The written quote itemizes the day rate, expected staffing for event nights, the surcharge, and the fee stack. The 50% deposit locks the week only after you’ve read every line.',
        ],
        links: [{ label: 'Stay Chef cost, worked', href: 'pricing/stay-chef-cost' }],
      },
    ],
    faq: [
      {
        q: 'What does a Stay Chef week in Princeville cost?',
        a: 'Seven days run from $7,700 for the chef’s time plus groceries at cost, the North Shore surcharge per service day, and any staffed event nights — then 20% service and GET on their own lines. The quote itemizes all of it.',
      },
      {
        q: 'Do you work with our villa agency’s house rules?',
        a: 'Yes — gate access, quiet hours, and kitchen rules settle before service. We work cleanly with Princeville’s estate agencies; booking direct simply puts the written quote in your hands first.',
      },
      {
        q: 'Can the week include one big celebration night?',
        a: 'That’s the common pattern: rhythm days on the day rate, one event night with servers and a sous at published hourlys. One contract covers both.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['stay chef Princeville', 'chef for the week Princeville', 'Princeville estate chef'],
  },
  {
    slug: 'locations/princeville/vacation-chef',
    category: 'location',
    title: 'Vacation Chef Princeville — Dinners in Your Rental',
    h1: 'A vacation chef in Princeville.',
    parent: 'services/vacation-chef',
    meta: {
      description:
        'A vacation chef for your Princeville rental: arrival dinners from $150/guest, pre-arrival stocking at cost, Date Nights $650–$950 — booked direct, quoted in writing.',
    },
    intro:
      'The concierge version of this service costs you a phone chain and an opaque markup. The direct version: a written quote, published rates, and a chef who’s cooked in Princeville kitchens all season.',
    sections: [
      {
        heading: 'The first night, handled',
        body: [
          'Landing day on Kauaʻi ends early — the light goes, the jet lag lands, and nobody wants a forty-minute drive to dinner. The arrival-night dinner is Princeville’s most-booked service: $125–$250 a guest depending on tier, groceries inside, on the table at the hour you name.',
          'Add pre-arrival stocking and the week starts fed: breakfast things, fruit, coffee, the good poke — at cost, receipts attached.',
        ],
        links: [{ label: 'Villa pre-stocking', href: 'services/grocery-stocking' }],
      },
      {
        heading: 'The rest of the week, your call',
        body: [
          'Some tables want one great dinner and the grill; some want three evenings and a Date Night; some want the whole Stay Chef rhythm. All of it prices from the same published card, and the written quote shows every line before the deposit.',
        ],
        links: [
          { label: 'Stay Chef weeks', href: 'stay-chef' },
          { label: 'Date Night $650–$950', href: 'services/date-night' },
        ],
      },
      {
        heading: 'Princeville logistics',
        body: [
          'The $50–$75 North Shore surcharge applies per service day. Gate codes and house rules settle before service day. December books first — holiday weeks in Princeville deserve months, not weeks, of lead.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is booking direct really the same service the concierge offers?',
        a: 'The same island crew pool, yes — with the difference that our rates are published and the written quote is the confirmed total. Concierge desks add a layer; direct inquiry removes it.',
      },
      {
        q: 'What’s the minimum booking?',
        a: 'A single dinner — no stay minimum. Per-guest bands apply from two guests up; two-person evenings price as Date Night ($650–$950 fixed).',
      },
      {
        q: 'Can you stock the villa before we land?',
        a: 'Yes — groceries at cost with receipts plus a quoted service line, timed to your landing window. The fridge is full before you turn the key.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['vacation chef Princeville', 'chef for vacation rental Princeville'],
  },
  {
    slug: 'locations/hanalei/stay-chef',
    category: 'location',
    title: 'Chef for a Week Hanalei — Summer’s Best Table',
    h1: 'A chef for the week in Hanalei.',
    parent: 'stay-chef',
    meta: {
      description:
        'A chef for the week in Hanalei, Kauaʻi: Stay Chef from $1,100/day in bay-side and plantation kitchens, the Saturday market minutes away, and the bridge clause in writing for far-North houses.',
    },
    intro:
      'Hanalei in summer is the island’s best week: calm bay, long light, the Saturday market a morning walk away. Stay Chef from $1,100 a day turns the rental into the reservation you can’t get.',
    sections: [
      {
        heading: 'The market at the end of the road',
        body: [
          'Hanalei weeks shop themselves: the Saturday farmers’ market sets the week’s greens, Kunana Dairy is up the road, and the fish question is answered by which boats went out. The menu follows the boxes — that’s not a slogan, it’s how a Hanalei week actually cooks.',
          PROVENANCE,
        ],
      },
      {
        heading: 'Summer prime, winter honesty',
        body: [
          'June through September, Hanalei is the island’s prime table and books accordingly — a month ahead minimum, more for estate weeks. Winter stays are beautiful and wetter: we serve them with the pantry plan built around the road, and the clause in writing for houses past the bridge.',
        ],
        links: [{ label: 'The bridge clause', href: 'guides/hanalei-bridge-clause' }],
      },
      {
        heading: 'The week’s numbers',
        body: [
          'From $1,100 a day plus groceries at cost; staffed event nights add servers ($55/hr) and sous chefs ($75/hr); the $50–$75 North Shore surcharge applies per service day. Far-North houses — Wainiha, Hāʻena — quote at inquiry with 72-hour notice.',
        ],
        links: [{ label: 'Stay Chef cost, worked', href: 'pricing/stay-chef-cost' }],
      },
    ],
    faq: [
      {
        q: 'We’re past the bridge in Hāʻena — can you do a full week?',
        a: 'Yes, with the clause: 72-hour notice, shopping sequenced before crossings, and documented closures reschedule rather than forfeit. The pantry plan is built so the road can’t starve the week.',
      },
      {
        q: 'What does the week cost all-in?',
        a: 'Seven days from $7,700 for the chef plus groceries at cost, the shore surcharge per service day, and staffed nights at published hourlys — itemized in the written quote, which is the confirmed total.',
      },
      {
        q: 'How early should a summer Hanalei week book?',
        a: 'June–September is the North Shore’s prime: a month is the floor, six to eight weeks is comfortable, and the holidays deserve more. The 50% deposit locks the dates after you’ve seen the quote.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['chef for a week Hanalei', 'stay chef Hanalei', 'Hanalei vacation chef'],
  },
  {
    slug: 'locations/hanalei/estate-wedding',
    category: 'location',
    title: 'Hanalei Estate Wedding Catering — Bluff Lawns, Written Terms',
    h1: 'Estate weddings in Hanalei.',
    parent: 'weddings/estate-wedding',
    meta: {
      description:
        'Estate wedding catering in Hanalei, Kauaʻi: bluff-lawn receptions from $175/guest plus staffing, the full wedding week under one contract, and the bridge clause in writing for far-North venues.',
    },
    intro:
      'The bluff lawns above Hanalei Bay are Kauaʻi’s definitive wedding ground — and its most logistically honest one. From $175 a guest plus staffing, with the bridge clause written into every far-North contract.',
    sections: [
      {
        heading: 'The Hanalei wedding week',
        body: [
          'Welcome dinner on the veranda Thursday, rehearsal in the garden Friday, the reception on the bluff lawn Saturday, recovery brunch whenever Sunday allows. Five events, one crew, one contract — from $175/guest plus staffing, every line published.',
          'Summer is the prime: June through September gives the bay its calm and the lawns their light. Winter Hanalei weddings are beautiful and wetter — tents and timing are part of the quote, not an afterthought.',
        ],
        links: [{ label: 'The wedding-week formats', href: 'weddings/wedding-week' }],
      },
      {
        heading: 'The clause, at the altar',
        body: [
          'For venues past the bridge — and the planner should always ask — our written terms: 72-hour notice, shopping sequenced before crossings, documented HDOT closures reschedule rather than forfeit. Your deposit does not evaporate over a landslide.',
          'Nobody else on the island publishes this. Your planner will recognize why it matters.',
        ],
        links: [{ label: 'The full bridge clause', href: 'guides/hanalei-bridge-clause' }],
      },
      {
        heading: 'Working with your venue and planner',
        body: [
          'Estate venues run on house rules: load-in windows, kitchen access, sound curfews. We coordinate with your planner and the estate manager in the quote phase — vendor lists, insurance paperwork, and the rain plan all settle before the deposit.',
        ],
        links: [{ label: 'For wedding planners', href: 'partners/wedding-planners' }],
      },
    ],
    faq: [
      {
        q: 'What does a Hanalei estate wedding cost?',
        a: 'From $175/guest plus staffing (servers $55/hr, sous $75/hr, 4-hour floor), against the island’s ~$75/plate caterer average — the difference is the estate-week format and a written quote that is the confirmed total. A 50-guest week is worked out on our cost page.',
        links: [{ label: 'Wedding costs, worked', href: '/kauai/weddings/wedding-cost' }],
      },
      {
        q: 'What’s the guest ceiling on a bluff estate?',
        a: 'Seventy-five staffed is the standard envelope; over 75 is a written exception quoted explicitly. Bluff lawns also carry their own realities — wind, access, power — settled in the site check before the quote.',
      },
      {
        q: 'What if it rains on the reception?',
        a: 'On the North Shore, the rain plan is the plan: tenting coordinated with your rentals vendor, menus that survive cover, and a weather call 48 hours out. Waiʻaleʻale’s rainfall is not a rumor; we cook accordingly.',
        links: [{ label: 'Weather backup planning', href: '/kauai/guides/weather-backup' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['Hanalei estate wedding catering', 'Hanalei wedding caterer', 'North Shore Kauai wedding'],
  },
  {
    slug: 'locations/kilauea/retreat-catering',
    category: 'location',
    title: 'Retreat Catering Kīlauea — The Corridor’s Missing Table',
    h1: 'Retreat catering in Kīlauea.',
    parent: 'retreat-catering',
    meta: {
      description:
        'Retreat catering in Kīlauea, Kauaʻi: hundred-acre retreat houses and lakeside estates fed under one contract — 8–30 guests, 3–7 days, protocol-labeled menus from published rates.',
      ogImage: '/img/kauai/hero-retreats.jpg',
    },
    intro:
      'Kīlauea’s retreat corridor — hundred-acre properties, lakeside eco-estates, faith and wellness houses — hosts retreats year-round and feeds them ad hoc. This page exists because the corridor deserves a table, not a workaround.',
    sections: [
      {
        heading: 'Built for the corridor’s houses',
        body: [
          'The retreat houses here sleep 8–30 and run 3–7 day programs: morning practice, working afternoons, the long communal dinner. Our retreat product maps exactly: Stay Chef from $1,100/day, full-board plans in the $250–$300+ per-person/day range, every meal under one contract.',
          'Kitchens on these properties range from excellent estate ranges to camp-adjacent certified kitchens — the kitchen standard check happens before the contract, and we bring what the kitchen lacks.',
        ],
        media: { src: '/img/kauai/hero-retreats.jpg', alt: 'A retreat breakfast spread on a Kīlauea veranda, steam rising in morning mist', ratio: '4/5' },
        links: [{ label: 'Retreat meal plans and pricing', href: 'retreat-catering/meal-plans' }],
      },
      {
        heading: 'Protocols the corridor asks for',
        body: [
          'Plant-based weeks, Ayurvedic-fluent programs, detox formats, the omnivore staff table alongside — menus labeled dish by dish, allergens on separate prep. Kīlauea’s faith and wellness houses get the same dietary depth as the yoga estates; the labels are the product.',
        ],
        links: [{ label: 'The protocol matrix', href: 'retreat-catering/dietary-protocols' }],
      },
      {
        heading: 'Logistics on the corridor',
        body: [
          'Kīlauea sits town-side of the Hanalei bridge — no far-North clause, the standard $50–$75 North Shore surcharge. The Saturday market is minutes away; mid-program restocks are a short drive, not an expedition.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you cater a 20-person retreat for five days in Kīlauea?',
        a: 'That is the product’s center of gravity: 8–30 guests, 3–7 days, every meal under one contract priced from published rates. The written quote itemizes each day before the deposit.',
      },
      {
        q: 'The property’s kitchen is basic — is that a problem?',
        a: 'The kitchen check exists for exactly this: we assess before the contract, bring the kit the kitchen lacks, and tell you honestly if the space can’t support the program. Most corridor kitchens pass with a gear list.',
      },
      {
        q: 'Do hosts get one invoice?',
        a: 'One contract, one itemized quote, one invoice sequence — deposit, balance, receipts for groceries. Hosts re-book; the paperwork is built to be re-booked.',
        links: [{ label: 'For retreat hosts', href: '/kauai/retreat-catering/for-hosts' }],
      },
    ],
    cta: CTA_RETREAT,
    keywords: ['retreat catering Kilauea', 'Kilauea retreat chef', 'retreat house catering Kauai'],
  },
  {
    slug: 'locations/poipu/catering',
    category: 'location',
    title: 'Catering Poʻipū — Garden Events on the Dry Side',
    h1: 'Catering in Poʻipū.',
    parent: 'catering',
    meta: {
      description:
        'Event catering in Poʻipū, Kauaʻi: garden estates and plantation venues, 10–75 guests staffed, per-guest bands from $125–$350, 20% service itemized — the dry side’s year-round table.',
    },
    intro:
      'Poʻipū’s event ground is gardens and plantation architecture, and its season is year-round — winter especially, when the North Shore is underwater and the South stays dry. Staffed events 10–75 guests; over 75 by written exception.',
    sections: [
      {
        heading: 'The Poʻipū event shapes',
        body: ['What the dry side books, by frequency:'],
        list: [
          'Garden celebration dinners — Signature $150–$250/guest, plated and staffed',
          'Villa receptions and pūpū hours — quoted per event, tray pass included',
          'Family reunions in the rental belt — Table band $125–$150/guest, family-style',
          'Corporate offsite dinners — Premium band, itemized like everything else',
        ],
      },
      {
        heading: 'Venue coordination, included in the quote phase',
        body: [
          'The resort and plantation venue corridor runs on house rules — load-in windows, preferred rentals, kitchen access. We settle all of it before the quote is written, so the number you approve already contains the logistics.',
          'Staffing is published math: servers $55/hr, sous $75/hr, 4-hour floor, one server per 10–12 seated guests.',
        ],
        links: [{ label: 'Event staffing', href: 'services/staffing' }],
      },
      {
        heading: 'The fee honesty paragraph',
        body: [
          'Our service charge is 20%, itemized. Island venues commonly run 23–25%, and at least one local caterer adds 25% gratuity across food and drink. On a 50-guest event the difference is real money — our quote is built to be compared line by line.',
        ],
      },
    ],
    faq: [
      {
        q: 'What does catering for 40 in Poʻipū cost?',
        a: 'Forty guests at the Signature mid-band is $8,000 for food, plus three to four servers and a sous at published hourlys (roughly $1,300–$1,600), the $50–$75 shore surcharge, then 20% service and GET on their own lines. The written quote fixes every figure.',
      },
      {
        q: 'Can you cater at our Poʻipū rental rather than a venue?',
        a: 'Yes — the villa-belt rentals are core ground. The kitchen and access check happens before the quote; most Poʻipū houses pass easily.',
      },
      {
        q: 'What about a winter event?',
        a: 'Winter is Poʻipū’s season — drier and calmer November through March while the North gets its rain. December still books first island-wide; a month’s lead is the floor.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['catering Poipu', 'Poipu event catering', 'South Shore Kauai catering'],
  },
  {
    slug: 'locations/poipu/wedding-catering',
    category: 'location',
    title: 'Wedding Catering Poʻipū — The South Shore Corridor',
    h1: 'Wedding catering in Poʻipū.',
    parent: 'weddings',
    meta: {
      description:
        'Wedding catering in Poʻipū, Kauaʻi: estate and plantation-venue receptions from $175/guest plus staffing, winter-reliable weather, the full wedding week under one written contract.',
    },
    intro:
      'The South Shore’s venue corridor — plantation estates, garden venues, the resort belt — with the island’s most reliable weather. From $175 a guest plus staffing; November through March dates are the dry side’s home ground.',
    sections: [
      {
        heading: 'Why winter weddings land here',
        body: [
          'When the North Shore takes its winter rain, Poʻipū keeps its light — which is why November-to-March wedding weeks route south, and why we say so in the inquiry reply when your dates argue for it. The corridor’s venues know the drill; so do we.',
        ],
        links: [{ label: 'The two-shore season guide', href: 'guides/shore-seasonality' }],
      },
      {
        heading: 'The week, one contract',
        body: [
          'Welcome dinner at the rental, rehearsal in a garden, reception on the estate lawn, recovery brunch on the veranda. From $175/guest plus staffing across the week — five events, one crew, one itemized quote.',
          'Receptions run plated (two to three courses) or premium buffet for 30–75 guests; over 75 is a written exception, never implied.',
        ],
        links: [
          { label: 'The wedding-week formats', href: 'weddings/wedding-week' },
          { label: 'Reception catering', href: 'weddings/reception-catering' },
        ],
      },
      {
        heading: 'Venue and planner coordination',
        body: [
          'Vendor lists, load-in windows, kitchen access, rentals coordination — settled in the quote phase with your planner and the venue, so the approved number already contains the logistics. 20% service, itemized, against the corridor’s 23–25% norms.',
        ],
        links: [{ label: 'For wedding planners', href: 'partners/wedding-planners' }],
      },
    ],
    faq: [
      {
        q: 'What does a Poʻipū wedding reception cost?',
        a: 'From $175/guest plus staffing — a 60-guest reception at mid-band runs about $13,500 for food, plus crew at published hourlys, the shore surcharge, 20% service, and GET, every line itemized before the deposit.',
        links: [{ label: 'Wedding costs, worked', href: '/kauai/weddings/wedding-cost' }],
      },
      {
        q: 'Can you work at [our venue]?',
        a: 'If it’s an estate, garden, or plantation venue on the South Shore, almost certainly — vendor-list venues are handled in the quote phase with your planner, and we say early if a venue’s exclusivity blocks outside catering.',
      },
      {
        q: 'How far ahead should a Poʻipū wedding book?',
        a: 'Three to six months is comfortable; December and holiday weeks compress to more. The 50% deposit locks dates only after the written quote.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['wedding catering Poipu', 'Poipu wedding caterer', 'South Shore Kauai wedding catering'],
  },
  {
    slug: 'locations/poipu/vacation-chef',
    category: 'location',
    title: 'Vacation Chef Poʻipū — The Villa-Belt Table',
    h1: 'A vacation chef in Poʻipū.',
    parent: 'services/vacation-chef',
    meta: {
      description:
        'A vacation chef for your Poʻipū rental: arrival dinners from $150/guest, Stay Chef weeks from $1,100/day, pre-arrival stocking at cost — the concierge service, booked direct.',
    },
    intro:
      'The Poipu Kapili concierge desk has offered “Private Gourmet Chef” for years — proof the demand is real and the markup is too. Book the same island service direct: published rates, written quote, your kitchen.',
    sections: [
      {
        heading: 'The villa-belt week',
        body: [
          'Poipu Kapili, the Villas at Poipu Kai, the plantation rentals above the green — the South Shore’s condo-and-villa belt is built for chef service: real kitchens, big lānai tables, and a dry evening nearly every night of winter.',
          'The shapes: an arrival dinner the first night ($125–$250/guest), a midweek Date Night for the parents ($650–$950 fixed), or the full Stay Chef rhythm from $1,100 a day.',
        ],
        links: [
          { label: 'Stay Chef weeks', href: 'stay-chef' },
          { label: 'Date Night', href: 'services/date-night' },
        ],
      },
      {
        heading: 'Stocking the condo before you land',
        body: [
          'South Shore groceries are closer than the North’s, but landing day still shouldn’t cost you a store run. Pre-arrival stocking fills the fridge at cost — receipts attached — timed to your landing window.',
        ],
        links: [{ label: 'Villa pre-stocking', href: 'services/grocery-stocking' }],
      },
      {
        heading: 'Logistics, the easy version',
        body: [
          'The $50–$75 South Shore surcharge applies per service day; no bridges, no clauses. Condo access and parking settle in the inquiry exchange. December books first — the dry side at the holidays is not a secret.',
        ],
      },
    ],
    faq: [
      {
        q: 'What does a vacation chef cost in Poʻipū?',
        a: 'Dinners run $125–$250 per guest with groceries inside the band; Stay Chef from $1,100/day plus groceries at cost. The $50–$75 South Shore surcharge and the fee stack appear on their own lines.',
      },
      {
        q: 'Our condo kitchen is small — workable?',
        a: 'Usually yes — Poʻipū’s condo kitchens are compact but real. The kitchen check before the quote confirms it, and we bring the kit that’s missing.',
      },
      {
        q: 'Can we book just one dinner?',
        a: 'Yes — no stay minimum. A single arrival dinner is the most-booked Poʻipū service we run.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['vacation chef Poipu', 'chef for vacation rental Poipu', 'Poipu private chef'],
  },
  {
    slug: 'locations/koloa/wedding-catering',
    category: 'location',
    title: 'Wedding Catering Kōloa — Plantation Estates & Kukuiʻula',
    h1: 'Wedding catering in Kōloa.',
    parent: 'weddings',
    meta: {
      description:
        'Wedding catering in Kōloa, Kauaʻi: plantation-estate receptions and Kukuiʻula-adjacent events from $175/guest plus staffing, 20% service itemized, the wedding week under one contract.',
    },
    intro:
      'Kōloa’s wedding ground is plantation architecture and estate lawns — the 1930s plantation-house venues, the Kukuiʻula belt’s private events, Old Town’s wooden charm. From $175 a guest plus staffing, itemized to the line.',
    sections: [
      {
        heading: 'The Kukuiʻula-adjacent event',
        body: [
          'Club venues serve members; the weddings that happen around the club — estate lawns, rental villas, private property — need an outside caterer who quotes like a professional. From $175/guest plus staffing, with 20% service itemized against the 23–25% venue norm.',
          'Plantation venues bring character and constraints: kitchen access, load-in windows, historic-house rules. All of it settles in the quote phase, before the deposit.',
        ],
      },
      {
        heading: 'The week in Kōloa',
        body: [
          'Rehearsal dinner in a plantation garden, reception on the estate lawn, recovery brunch at the rental. The wedding-week contract covers all of it from $175/guest plus staffing — one crew that knows the kitchen by the reception.',
        ],
        links: [
          { label: 'The wedding-week formats', href: 'weddings/wedding-week' },
          { label: 'Rehearsal dinners', href: 'weddings/rehearsal-dinner' },
        ],
      },
      {
        heading: 'Season and logistics',
        body: [
          `${SEASON_SOUTH} The $50–$75 South Shore surcharge applies; Old Kōloa’s venues are minutes from our logistics base, and none of it involves a bridge.`,
        ],
      },
    ],
    faq: [
      {
        q: 'What does a Kōloa estate wedding cost?',
        a: 'From $175/guest plus staffing (servers $55/hr, sous $75/hr, 4-hour floor), against the island’s ~$75/plate average — the gap buys the estate-week format and an itemized written quote. Worked examples live on the wedding-cost page.',
        links: [{ label: 'Wedding costs, worked', href: '/kauai/weddings/wedding-cost' }],
      },
      {
        q: 'Can you cater at a historic plantation venue?',
        a: 'Yes, within the house rules — kitchen access and load-in are settled with the venue in the quote phase, and menus adapt to the kitchen the house actually has.',
      },
      {
        q: 'Is December in Kōloa bookable?',
        a: 'Yes — the dry side carries winter, and December is the island’s compression point. Book three to six months out for December wedding weeks.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['wedding catering Koloa', 'Kukuiula wedding catering', 'plantation wedding Kauai'],
  },
  {
    slug: 'locations/kapaa-lihue/catering',
    category: 'location',
    title: 'Catering Kāpaʻa & Līhuʻe — Resident Events, Base Zone',
    h1: 'Catering in Kāpaʻa–Līhuʻe.',
    parent: 'catering',
    meta: {
      description:
        'Event catering in Kāpaʻa and Līhuʻe, Kauaʻi: resident celebrations, resort-corridor weddings, and community events, 10–75 guests — base-zone pricing, no shore surcharge, 20% service itemized.',
    },
    intro:
      'The East Side’s events are the island’s resident backbone: milestone birthdays, church-hall-adjacent celebrations, resort-corridor weddings, office parties that deserve better than trays. Base zone — no surcharge, the card applies clean.',
    sections: [
      {
        heading: 'The East Side event shapes',
        body: ['What Kāpaʻa–Līhuʻe books, by frequency:'],
        list: [
          'Milestone birthdays and graduations — Table band $125–$150/guest, family-style',
          'Resort-corridor weddings and rehearsals — from $175/guest + staffing',
          'Office and team dinners — Signature band, itemized for the company card',
          'Celebration-of-life gatherings — handled quietly, priced plainly',
        ],
        links: [{ label: 'Celebration of life', href: 'occasions/celebration-of-life' }],
      },
      {
        heading: 'Base-zone pricing, spelled out',
        body: [
          'No shore surcharge, no 72-hour clause: per-guest bands from $125–$350, servers $55/hr and sous $75/hr with a 4-hour floor, 20% service and GET up to 4.7120% on their own lines. The written quote is the confirmed total.',
        ],
        links: [{ label: 'The full rate card', href: 'pricing' }],
      },
      {
        heading: 'Venues and kitchens, East Side',
        body: [
          'From resort event rooms to church halls to backyard lānai, the East Side’s venues share one trait: kitchens that range from commercial to none. The site check in the quote phase determines what we cook on-site and what arrives ready — the quote reflects the real logistics either way.',
        ],
      },
    ],
    faq: [
      {
        q: 'What does catering for 30 in Kāpaʻa cost?',
        a: 'Thirty guests at the Table band top ($150) is $4,500 for food, plus two to three servers at published hourlys (roughly $700–$1,000), then 20% service and GET on their own lines. No surcharge — the East Side is base zone.',
      },
      {
        q: 'Do you cater resident events, or only visitor bookings?',
        a: 'Resident events are the East Side’s core — monthly, year-round, protected from the visitor season’s compression. The kamaʻāina weekly line lives here too.',
        links: [{ label: 'Weekly resident service', href: '/kauai/services/meal-prep' }],
      },
      {
        q: 'Can you handle a celebration of life with care?',
        a: 'Yes — those pages and those bookings drop the sales register entirely. Calm planning, plain pricing, and a table that lets the family be together.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['catering Kapaa', 'catering Lihue', 'East Side Kauai catering'],
  },
];

/** Kauaʻi retreat cluster (Table 4.2.3b rows 1–7) — the island's signature whitespace. */
const retreats: ContentRecord[] = [
  {
    slug: 'retreat-catering/yoga-wellness',
    category: 'service',
    title: 'Yoga & Wellness Retreat Catering Kauaʻi — The Table Matches the Program',
    h1: 'Yoga retreat catering, protocol-fluent.',
    parent: 'retreat-catering',
    meta: {
      description:
        'Yoga and wellness retreat catering on Kauaʻi: plant-based and Ayurvedic-fluent menus, meal timing around practice, 8–30 guests across 3–7 days — priced from published rates, one contract.',
      ogImage: '/img/kauai/card-retreat.jpg',
    },
    intro:
      'The booking platforms sell the yoga; the food is usually the host’s headache. We run the table for Kauaʻi yoga and wellness retreats: menus that match the program, timing that matches the practice, pricing from the published card.',
    sections: [
      {
        heading: 'Built around practice, not beside it',
        body: [
          'Light early breakfasts before morning practice — fruit, oats, the good yogurt, nothing that argues with downward dog. The real breakfast after. Working lunches that don’t sedate the afternoon. The long communal dinner that becomes the day’s second practice.',
          'Meal frequency is planned with your schedule in the first call: two meals, three meals, the all-day grazing table — and the quiet kitchen-stocking that keeps a retreat house fed between services.',
        ],
      },
      {
        heading: 'Menus that speak the program',
        body: [
          'Plant-based as a cuisine. Ayurvedic-fluent weeks with kitchari days where your program calls for them. Detox and raw-leaning formats for reset retreats. Every dish labeled by protocol, every allergen on separate prep — your guests read the menu and recognize their own retreat.',
          PROVENANCE,
        ],
        links: [{ label: 'The dietary protocol matrix', href: 'retreat-catering/dietary-protocols' }],
      },
      {
        heading: 'The numbers a host can budget',
        body: [
          'Stay Chef from $1,100 a day for the chef, full-board meal plans in the $250–$300+ per-person/day range depending on protocol depth and headcount. Eight to thirty guests, three to seven days. The written quote itemizes every day and every meal — your per-ticket food cost is arithmetic, not hope.',
        ],
        links: [{ label: 'Meal plans and per-day pricing', href: 'retreat-catering/meal-plans' }],
      },
      {
        heading: 'Where yoga retreats actually happen',
        body: [
          'Princeville’s bluff houses, the Anahola-side properties, Kīlauea’s hundred-acre retreat estates. Summer is the North Shore’s prime; winter programs route south or east. Far-North venues carry the written bridge clause.',
        ],
        links: [{ label: 'Retreat catering in Kīlauea', href: 'locations/kilauea/retreat-catering' }],
      },
    ],
    faq: [
      {
        q: 'What does catering a yoga retreat cost on Kauaʻi?',
        a: 'From the published card: the chef day rate from $1,100, with full-board plans in the $250–$300+ per-person/day range. A 12-person, 5-day retreat runs roughly $15,000–$18,000 for full board, itemized by day in the written quote.',
      },
      {
        q: 'Can the menu be fully plant-based?',
        a: 'Yes — plant-based weeks are a named menu family, not a special request. Kunana Dairy aside (happily, for tables that take dairy), the island’s farms carry a full vegan week without repetition.',
      },
      {
        q: 'Do you work with our venue’s kitchen?',
        a: 'Yes — the kitchen standard check happens before the contract, we bring the kit the kitchen lacks, and we tell you honestly if a venue can’t support your headcount.',
      },
      {
        q: 'Can you handle a silent breakfast?',
        a: 'Yes — service style follows the program: silent mornings, labeled self-serve, or full table service. The retreat’s rhythm is the spec; we cook to it.',
      },
    ],
    cta: CTA_RETREAT,
    keywords: ['yoga retreat catering Kauai', 'wellness retreat catering Kauai', 'yoga retreat chef Kauai'],
  },
  {
    slug: 'retreat-catering/retreat-chef',
    category: 'service',
    title: 'Retreat Chef Kauaʻi — One Chef for the Whole Program',
    h1: 'A chef for the retreat, not a caterer for the event.',
    parent: 'retreat-catering',
    meta: {
      description:
        'A dedicated retreat chef on Kauaʻi: the same chef across your 3–7 day program — breakfasts, working lunches, communal dinners — from $1,100/day with groceries at cost and protocol-labeled menus.',
    },
    intro:
      'The retreat-chef model is continuity: one chef who learns the group on day one and feeds it better by day four. From $1,100 a day plus groceries at cost — the only published multi-day chef rate on the island.',
    sections: [
      {
        heading: 'Why continuity is the product',
        body: [
          'A different caterer each night means re-explaining the nut allergy nightly and never learning that the group eats light before breathwork. One chef across the program means the dietary flags settle once, the menu arcs across the week — grounding food early, the feast night where the program earns it — and the kitchen becomes part of the retreat’s calm rather than its logistics.',
          'Hosts hiring ad hoc today (a cook here, a restaurant run there) spend the same money for none of the continuity. The retreat chef is the line item that makes the rest of the program land.',
        ],
      },
      {
        heading: 'The working relationship',
        body: [
          'The chef joins your planning call, reads the program schedule, and writes the menu draft against it — labeled by protocol, priced by day. During the retreat, the kitchen runs on your timetable: early service before practice, the dinner hour when you say it is.',
          'Staffing scales with the format: a chef alone covers daily rhythm to about 12–14; service staff join at published hourlys ($55/$75) for feast nights and larger groups.',
        ],
      },
      {
        heading: 'The money, in the open',
        body: [
          'From $1,100 per day plus groceries at cost with receipts — and on Kauaʻi, at-cost matters: island food runs well above mainland prices, and receipts are how a host audits the week. The 20% service charge and GET appear on their own lines; the written quote is the confirmed total.',
        ],
        links: [{ label: 'Retreat meal-plan pricing', href: 'retreat-catering/meal-plans' }],
      },
    ],
    faq: [
      {
        q: 'Is a retreat chef different from hiring a caterer per meal?',
        a: 'Fundamentally: one contract, one chef, one dietary conversation, a menu that arcs across the week. Per-meal catering re-runs the logistics daily and prices every delivery as an event; the retreat chef prices the program.',
      },
      {
        q: 'What group size does one chef cover?',
        a: 'Daily rhythm cooking for up to about 12–14; beyond that, or for event nights inside the program, service staff join at $55/hr (servers) and $75/hr (sous) with a 4-hour floor. The quote names the crew per day.',
      },
      {
        q: 'Can the chef live the retreat’s rules — no alcohol kitchen, silent mornings?',
        a: 'Yes. Program rules are part of the spec: alcohol-free kitchens, silent service windows, caffeine policies. The kitchen conforms to the retreat, not the reverse.',
      },
    ],
    cta: CTA_RETREAT,
    keywords: ['retreat chef Kauai', 'chef for retreat Kauai', 'private chef retreat Kauai'],
  },
  {
    slug: 'retreat-catering/meal-plans',
    category: 'service',
    title: 'Retreat Meal Plan Pricing Kauaʻi — Per Person, Per Day, Published',
    h1: 'Retreat meal plans, priced by the day.',
    parent: 'retreat-catering',
    meta: {
      description:
        'Retreat meal plan pricing on Kauaʻi: full-board $250–$300+ per person per day, built on the published Stay Chef rate from $1,100/day — the only multi-day retreat pricing published on the island.',
    },
    intro:
      'Nobody else on Kauaʻi publishes multi-day retreat food pricing. Ours is arithmetic on the published card: the chef’s day rate from $1,100, plus full-board plans in the $250–$300+ per-person/day range, itemized day by day.',
    sections: [
      {
        heading: 'The two-line structure',
        body: [
          'Line one: the chef — Stay Chef from $1,100 per day, covering planning, shopping, cooking, service, and reset across the program day. Line two: the food — full-board per-person/day plans in the $250–$300+ range, scaled by protocol depth, course count, and headcount.',
          'For larger groups the structure inverts gracefully: per-person/day dominates and extra crew joins at published hourlys ($55/hr servers, $75/hr sous, 4-hour floor). The written quote shows both lines for every day of the program.',
        ],
      },
      {
        heading: 'What a day’s plan covers',
        body: ['Full board, per person:'],
        list: [
          'Early light breakfast — fruit, oats, yogurt, coffee and tea service',
          'Post-practice breakfast or brunch — the real one',
          'Working lunch — built to not sedate the afternoon',
          'Afternoon provisioning — snacks, hydration, the house’s grazing board',
          'The communal dinner — family-style or coursed, labeled by protocol',
          'Beverages beyond coffee/tea — alcohol client-supplied or via licensed referral',
        ],
      },
      {
        heading: 'Worked examples, honestly labeled',
        body: [
          'Illustrative math on published rates: 12 guests, 5 days, full board at $265/person/day = $15,900 for food and daily service, plus the chef’s day rate structure, 20% service, and GET on their own lines. 24 guests, 4 days at $255 = $24,480. Your quote itemizes your actual numbers — these exist so the quote never surprises.',
          'Groceries on deep-protocol weeks (specific superfoods, out-of-season asks) move within the band honestly; receipts always available.',
        ],
      },
      {
        heading: 'Why per-day beats per-event',
        body: [
          'Per-event catering prices every meal as a production: minimums, delivery fees, setup charges, fifteen invoices. Per-day pricing prices the program: one kitchen, running continuously, amortizing its own logistics. For retreats, the day rate is simply the honest shape of the work.',
        ],
        links: [{ label: 'For retreat hosts — the B2B page', href: 'retreat-catering/for-hosts' }],
      },
    ],
    faq: [
      {
        q: 'Is $250–$300+ per person per day really all food?',
        a: 'Yes — full board means every meal and provisioning across the day, with the per-day line flexing on protocol depth and course count. The chef’s day rate (from $1,100) and staffing are separate, itemized lines. Nothing hides.',
      },
      {
        q: 'Can we do partial board — dinners only?',
        a: 'Yes — two-meal and dinner-only structures quote at lower per-day lines from the same published structure. The quote shows the per-meal math either way.',
      },
      {
        q: 'How does deposit and payment work for a full retreat?',
        a: 'The 50% deposit locks the dates after you approve the written quote; the balance follows the booking terms. Groceries at cost are reconciled with receipts — you audit the week, line by line, if you want to.',
        links: [{ label: 'Booking terms', href: '/kauai/legal' }],
      },
    ],
    cta: CTA_RETREAT,
    keywords: ['retreat meal plan pricing Kauai', 'retreat catering cost Kauai', 'per day retreat chef Kauai'],
  },
  {
    slug: 'retreat-catering/for-hosts',
    category: 'partner',
    title: 'Cater My Retreat Kauaʻi — For Hosts & Operators',
    h1: 'You run the retreat. We run the table.',
    parent: 'retreat-catering',
    meta: {
      description:
        'For Kauaʻi retreat hosts: one contract for every meal, per-person/day pricing in writing, dietary protocols labeled, and a catering partner built to be re-booked season after season.',
    },
    intro:
      'Hosts are our favorite client because you re-book. This page speaks your language: per-day meal-plan pricing, dietary protocols as menu infrastructure, group logistics solved once — and a written quote your ticket math can rely on.',
    sections: [
      {
        heading: 'The host’s math, made easy',
        body: [
          'Retreat tickets on Kauaʻi run $2,000–$4,499 for 4–8 days, and food is the line item hosts estimate worst. Our structure makes it arithmetic: full-board $250–$300+ per person per day plus the chef day rate from $1,100, itemized by day in the written quote — months before you need to price the ticket.',
          'One contract covers every meal of the program. One invoice sequence: deposit, balance, grocery receipts. No per-meal vendors, no delivery minimums, no day-three scramble.',
        ],
      },
      {
        heading: 'What we need from you',
        body: ['Four things, and the rest is ours:'],
        list: [
          'Dates and headcount — with the honest maximum the house sleeps',
          'The program schedule — practice times, excursion days, the feast night',
          'The dietary census — we send the template; guests’ flags become menu labels',
          'Kitchen access and house rules — our kitchen check happens before the contract',
        ],
      },
      {
        heading: 'The re-booking relationship',
        body: [
          'Retreat operators run the same properties season after season; the second booking is a one-email affair because the menu family, the kitchen map, and the house rules already exist in our file. Hosts who run multiple weeks a season get scheduling priority — that’s the loyalty program, honestly stated.',
          'Referral runs both ways: venues we’ve cooked recommend us; hosts we’ve fed introduce the next venue. The island is small; the work is the marketing.',
        ],
        links: [
          { label: 'Meal-plan pricing', href: 'retreat-catering/meal-plans' },
          { label: 'The protocol matrix', href: 'retreat-catering/dietary-protocols' },
        ],
      },
      {
        heading: 'Honest capacity',
        body: [
          'Kauaʻi’s chef pool is thin, and we don’t pretend otherwise: peak weeks book out, and we never hold dates we can’t crew. Early inquiry — a season ahead for multi-week programs — is how your retreat gets the yes.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can we get a quote before our venue deposit?',
        a: 'Yes — that ordering is common and smart. Send dates, headcount, and the venue’s kitchen photos; the written quote is yours to budget with, whether or not you book.',
      },
      {
        q: 'Do you handle guests’ dietary forms?',
        a: 'We supply the dietary census template; you collect it at registration; flags become labeled menu lines. Allergen guests get separate prep as standard.',
      },
      {
        q: 'What’s your cancellation posture for retreats?',
        a: 'Booking terms render as proposed until counsel locks them: 28+ days partial refund, 14–28 deposit retained, under 7 days full balance, force majeure — including documented road closures — reschedules rather than forfeits.',
        links: [{ label: 'Booking terms', href: '/kauai/legal' }],
      },
      {
        q: 'Do you cater retreats outside Kīlauea?',
        a: 'Across the island: Princeville and Hanalei houses, Anahola-side properties, South Shore estates. Shore surcharges ($50–$75) and the far-North bridge clause apply exactly as published.',
      },
    ],
    cta: { ...CTA_RETREAT, label: 'Start a host inquiry' },
    keywords: ['cater my retreat Kauai', 'retreat catering partner Kauai', 'retreat host catering'],
  },
  {
    slug: 'retreat-catering/corporate-retreats',
    category: 'service',
    title: 'Corporate Retreat Catering Kauaʻi — Estates, Not Ballrooms',
    h1: 'The offsite that doesn’t feel like one.',
    parent: 'retreat-catering',
    meta: {
      description:
        'Corporate retreat catering on Kauaʻi: estate buyouts for 8–30, working lunches that work, celebration dinners — priced from published rates, itemized for the finance team.',
    },
    intro:
      'Kauaʻi’s estates are marketed for corporate retreats precisely because a bluff house beats a ballroom. We run the food side: working lunches, family-style dinners, the closing feast — itemized lines your finance team will actually enjoy.',
    sections: [
      {
        heading: 'The working day, fed properly',
        body: [
          'Offsite food has one job: keep the room working. Breakfasts that start on time, lunches built to not sedate the afternoon session, coffee that never runs out, and dinners that become the day’s reward. The menu plan is written against your agenda in the first call.',
          'Eight to thirty across three to seven days is the envelope — leadership offsites, team weeks, board retreats. The estate buyout plus the retreat table is the whole package, minus the resort’s meeting-room beige.',
        ],
      },
      {
        heading: 'The numbers finance wants',
        body: [
          'Per-person/day full board in the $250–$300+ range, the chef day rate from $1,100, staffing at published hourlys — every line itemized, 20% service and GET on their own lines, receipts for groceries. The written quote is the confirmed total, which makes the expense report a photocopy.',
        ],
        links: [{ label: 'Meal-plan pricing', href: 'retreat-catering/meal-plans' }],
      },
      {
        heading: 'The celebration night',
        body: [
          'Most offsites earn one big evening: a Premium coursed dinner ($250–$350/guest), the bar cart ($850/4hr + $60/guest, alcohol client-supplied or via licensed referral), maybe a cooking session as the team-builder that isn’t embarrassing.',
        ],
        links: [{ label: 'The mobile bar', href: 'services/mobile-bar' }],
      },
    ],
    faq: [
      {
        q: 'Can you invoice a company rather than an individual?',
        a: 'Yes — corporate invoicing with itemized lines is standard for retreat contracts. Deposit schedule and terms are identical; the paperwork is built for finance teams.',
      },
      {
        q: 'What about dietary restrictions across a whole team?',
        a: 'The dietary census template handles it at registration scale: flags become labeled menu lines, allergen prep is separate, and nobody eats a “special plate” in front of their VP.',
      },
      {
        q: 'Alcohol policy for a company event?',
        a: 'Client-supplied or via licensed bartending referral — we do not sell alcohol, and that posture prints on the quote, which tends to make HR happy too.',
      },
    ],
    cta: CTA_RETREAT,
    keywords: ['corporate retreat catering Kauai', 'company offsite Kauai catering'],
  },
  {
    slug: 'retreat-catering/surf-retreats',
    category: 'service',
    title: 'Surf Retreat Catering Kauaʻi — Fuel for the Dawn Patrol',
    h1: 'Surf weeks, fed like training weeks.',
    parent: 'retreat-catering',
    meta: {
      description:
        'Surf retreat catering on Kauaʻi: early breakfasts before the dawn patrol, recovery dinners, cooler provisioning for the beach — 8–20 guests, priced from published retreat rates.',
    },
    intro:
      'Surf camps on Kauaʻi feed their guests via restaurant runs today — nobody cooks for them. The retreat table fixes that: breakfasts before the dawn patrol, coolers for the beach, dinners that rebuild what the ocean took.',
    sections: [
      {
        heading: 'The surf-day rhythm',
        body: [
          'Five a.m. coffee and something fast before the session. The real breakfast when everyone’s back, salty and starving. Beach coolers on the two-session days. Dinner early, big, and carbohydrate-honest — surf weeks are training weeks with better scenery.',
          'Meal timing follows the tide chart more than the clock; the menu plan is written around your session schedule in the first call.',
        ],
      },
      {
        heading: 'Food that survives the format',
        body: [
          'Protein-forward recovery dinners, big family-style tables, the kind of lunch that works in a cooler at Hanalei or a day pack on a west-side trailhead. Dietary flags handled as always — surf groups skew young and varied, and the labels keep everyone fed without a nightly negotiation.',
        ],
        links: [{ label: 'Retreat meal plans', href: 'retreat-catering/meal-plans' }],
      },
      {
        heading: 'Season and shore, honestly',
        body: [
          'North Shore surf season is winter — which is also the North Shore’s rain and road season, so winter surf retreats carry the bridge clause where applicable and the pantry plan built around the road. Summer programs flip south. We’ll tell you which shore your dates argue for in the inquiry reply.',
        ],
        links: [{ label: 'The two-shore season guide', href: 'guides/shore-seasonality' }],
      },
    ],
    faq: [
      {
        q: 'What does feeding a surf retreat cost?',
        a: 'The same published structure as every retreat: full-board $250–$300+ per person per day plus the chef day rate from $1,100. Eight to twenty guests is the sweet spot for surf houses.',
      },
      {
        q: 'Can meals flex around swell?',
        a: 'Yes — the menu plan includes swell-day contingencies: the big breakfast that slides two hours, the dinner that becomes a grill night when the session runs long. Flexibility is priced into the day rate, not charged as change fees.',
      },
      {
        q: 'Do you cater girls’ and youth surf camps?',
        a: 'Yes — youth programs get the same dietary rigor plus allergen controls as standard, and menus sized for actual teenagers. Staffing ratios and service style adjust in the quote.',
      },
    ],
    cta: CTA_RETREAT,
    keywords: ['surf retreat catering Kauai', 'surf camp chef Kauai', 'surf retreat food Kauai'],
  },
  {
    slug: 'retreat-catering/dietary-protocols',
    category: 'service',
    title: 'Ayurvedic, Detox & Protocol Catering Kauaʻi — Labeled by Dish',
    h1: 'The protocol matrix, printed on the menu.',
    parent: 'retreat-catering',
    meta: {
      description:
        'Protocol-labeled retreat catering on Kauaʻi: Ayurvedic-fluent, detox, plant-based, raw-leaning, and paleo menu families — every dish labeled, allergens on separate prep, priced from published rates.',
    },
    intro:
      'Kauaʻi’s retreat venues already speak this language — Ayurvedic, detox, plant-based, raw. This is the island’s only catering product that answers in it: menu families labeled dish by dish, built to your program notes.',
    sections: [
      {
        heading: 'The menu families',
        body: ['Five protocol families, each a full multi-day menu architecture:'],
        list: [
          'Plant-based — a cuisine, not a subtraction; the island’s farms carry it without repetition',
          'Ayurvedic-fluent — kitchari days, warm breakfasts, spice builds aligned to your program notes',
          'Detox — clean, structured, broth-and-greens-anchored weeks that still eat like food',
          'Raw-leaning — raw-forward formats with the cooked line alongside for mixed tables',
          'Paleo / clean omnivore — Kauaʻi grass-fed beef, day-boat fish, market vegetables, no grains',
        ],
      },
      {
        heading: 'Labels as infrastructure',
        body: [
          'Every dish on a retreat menu carries its protocol labels and allergen flags — printed, not memorized. Guests self-serve correctly without asking; hosts stop fielding food questions by day one. Separate prep for allergens runs underneath everything.',
          'The eleven standard dietary flags (vegetarian through diabetic-friendly) nest inside the protocol families, so a detox week with two celiac guests and a nut allergy is a solved problem before the contract.',
        ],
        links: [{ label: 'Wellness menus overview', href: 'services/wellness-menus' }],
      },
      {
        heading: 'Sourcing for protocol weeks',
        body: [
          `${PROVENANCE} Deep-protocol sourcing — specific superfoods, out-of-season asks, particular suppliers — is quoted honestly in the groceries-at-cost line with receipts.`,
        ],
      },
      {
        heading: 'Honest limits',
        body: [
          'We are cooks, not clinicians: we execute your practitioner’s or program’s specification precisely and label it honestly — but protocol design belongs to your program, and medical claims belong to no one’s menu. That boundary is part of the product’s integrity.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you cook a strict Ayurvedic cleanse week?',
        a: 'Ayurvedic-fluent, executed to your program’s specification: kitchari days, mono-diet phases, warm and spiced per the notes. We follow the program document precisely and label every dish.',
      },
      {
        q: 'Does protocol depth change the price?',
        a: 'It moves within the published band: deeper protocols with specialized sourcing sit toward the $300+/person/day end; clean omnivore weeks sit lower. The written quote shows exactly where your program lands.',
      },
      {
        q: 'What if only some guests are on the protocol?',
        a: 'Mixed tables are the norm — the protocol line and the omnivore line run alongside, both labeled. Nobody eats a visibly lesser plate.',
      },
    ],
    cta: CTA_RETREAT,
    keywords: ['Ayurvedic detox retreat catering Kauai', 'protocol menus Kauai retreat', 'plant-based retreat Kauai'],
  },
];

/** Kauaʻi occasions cluster (Table 4.2.3b rows 8–16): index + 8 occasions. */
const occasions: ContentRecord[] = [
  {
    slug: 'occasions',
    category: 'occasion',
    title: 'Private Chef for Events Kauaʻi — Every Occasion, One Standard',
    h1: 'Point us at the table.',
    parent: '',
    meta: {
      description:
        'Private chef occasions on Kauaʻi: birthdays, anniversaries, proposals, family reunions, holiday dinners, villa parties, corporate offsites, celebrations of life — every one quoted in writing.',
      ogImage: '/img/kauai/card-estate-dinner.jpg',
    },
    intro:
      'Whatever the table is for, the shape is the same: published prices, a written quote, a kitchen left clean. Tell us the occasion and the headcount; we name the package.',
    sections: [
      {
        heading: 'The occasions, one by one',
        body: ['Each occasion has its own page, its own price anchor, its own honest notes:'],
        links: [
          { label: 'Birthday dinners', href: 'occasions/birthday' },
          { label: 'Anniversaries', href: 'occasions/anniversary' },
          { label: 'Proposals', href: 'occasions/proposal' },
          { label: 'Family reunions', href: 'occasions/family-reunion' },
          { label: 'Holiday dinners', href: 'occasions/holiday-dinner' },
          { label: 'Villa parties', href: 'occasions/villa-party' },
          { label: 'Corporate offsites', href: 'occasions/corporate-offsite' },
          { label: 'Celebrations of life', href: 'occasions/celebration-of-life' },
        ],
      },
      {
        heading: 'The price anchors, up front',
        body: ['From the published Kauaʻi card:'],
        list: [
          'Dinners for two (proposals, anniversaries) — Date Night $650–$950 fixed',
          'Family tables (birthdays, reunions) — $125–$250/guest by tier',
          'Big gatherings (villa parties, offsites) — per-guest bands + staffing, 10–75 guests',
          'Holiday weeks — the same card, honestly compressed calendars',
        ],
      },
      {
        heading: 'One promise across all of them',
        body: [
          'The written quote is the confirmed total. No occasion page on this site ends in a number that changes later — 20% service and GET up to 4.7120% on their own lines, every time, before you commit.',
        ],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef for events Kauai', 'Kauai event chef'],
  },
  {
    slug: 'occasions/birthday',
    category: 'occasion',
    title: 'Birthday Private Chef Kauaʻi — The Milestone Table',
    h1: 'The birthday dinner, at the house.',
    parent: 'occasions',
    meta: {
      description:
        'Birthday private chef on Kauaʻi: milestone dinners at your rental or estate, $125–$250 per guest, kids’ tables and dietary flags handled — the kitchen left clean, the evening yours.',
    },
    intro:
      'Sixty deserves better than a reservation for twelve at seven-oh-whatever-they-have. The birthday dinner happens at the house: the menu written around the guest of honor, the kitchen invisible, the dishes not your problem.',
    sections: [
      {
        heading: 'The evening, shaped',
        body: [
          'Family-style for the loud tables — Table band $125–$150 a guest, platters down the middle, seconds guaranteed. Coursed for the milestone evenings — Signature $150–$250, the guest of honor’s favorite food elevated by someone who cooks for a living.',
          'The menu call covers the person, not just the palate: what they order when nobody’s watching, the dish from the trip they still talk about. That’s the brief.',
        ],
      },
      {
        heading: 'The logistics of a good surprise',
        body: [
          'We’ve done the “everyone hide in the kitchen” arrival and the quiet dinner that turns out to have a second seating of cousins. Timing, parking, the decoy plan — settled in the inquiry exchange, invisible on the night.',
        ],
      },
      {
        heading: 'Kids, grandparents, one kitchen',
        body: [
          'Birthday tables are the most generationally mixed we cook: early kids’ seating, the grandparent who needs low-sodium, the vegan cousin. All standard, all inside the same quote.',
        ],
        links: [{ label: 'Kids’ menus', href: 'services/kids-menus' }],
      },
    ],
    faq: [
      {
        q: 'What does a birthday dinner for 12 cost?',
        a: 'Twelve at the Signature mid-band ($200) is $2,400 for food and service, plus the fee stack on its own lines and any shore surcharge. The written quote fixes the number before the date is held.',
      },
      {
        q: 'Can you do a cake?',
        a: 'A birthday dessert course, absolutely — and we coordinate with island bakers when the occasion wants a proper cake, quoted separately with no mystery markup.',
      },
      {
        q: 'How far ahead for a December birthday?',
        a: 'December compresses the whole island: a month minimum, six weeks comfortable. Other seasons, two to three weeks usually finds the date.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['birthday private chef Kauai', 'birthday dinner chef Kauai'],
  },
  {
    slug: 'occasions/anniversary',
    category: 'occasion',
    title: 'Anniversary Dinner Private Chef Kauaʻi — No Reservation App',
    h1: 'Twenty years in, dinner shouldn’t need an app.',
    parent: 'occasions',
    meta: {
      description:
        'Anniversary dinners on Kauaʻi: Date Night $650–$950 fixed for two, or a family anniversary table $150–$250/guest — cooked in your villa, at the hour the light is right.',
    },
    intro:
      'Your chef cooks the meal you talked about on the flight over, in the villa, at the hour the light is right. Date Night runs $650–$950 fixed for two; bigger family anniversaries price per guest from the published bands.',
    sections: [
      {
        heading: 'For two',
        body: [
          'A coursed menu written around the two of you — the dish from your first trip, the wine you actually like, the pace the evening wants. $650–$950 fixed, groceries inside, kitchen left clean. On a Hanalei veranda or a Poʻipū lānai, the restaurant is wherever you’re staying.',
        ],
        links: [{ label: 'Date Night, in detail', href: 'services/date-night' }],
      },
      {
        heading: 'For the whole family',
        body: [
          'The 40th with kids and grandkids is a different and better chaos: one big table, family-style platters, the anniversary toast before dessert. $125–$250 a guest by tier, kids’ plates priced honestly, everyone’s flags settled before the shopping.',
        ],
      },
      {
        heading: 'The details that mark it',
        body: [
          'The menu printed for the table as a keepsake. The first-dance song era’s food, if you’re game. A next-morning brunch for the ones staying over. All quoted in writing; nothing appears on the invoice that wasn’t on the quote.',
        ],
      },
    ],
    faq: [
      {
        q: 'What does an anniversary dinner for two cost on Kauaʻi?',
        a: 'Date Night is $650–$950 fixed with groceries included; 20% service and GET up to 4.7120% appear on their own lines. Princeville and Poʻipū add the $50–$75 shore surcharge.',
      },
      {
        q: 'Can you recreate a dish from our wedding?',
        a: 'Send the memory — the menu, a photo, a description — and the menu call turns it into courses. Recreation with better fish is one of the great anniversary formats.',
      },
      {
        q: 'Is a vow-renewal dinner different?',
        a: 'In format, no; in feeling, entirely. Vow renewals usually run as a small family table with a Date Night’s care — tell us the shape and the quote follows it.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['anniversary dinner private chef Kauai', 'anniversary chef Kauai'],
  },
  {
    slug: 'occasions/proposal',
    category: 'occasion',
    title: 'Proposal Dinner Private Chef Kauaʻi — Timed to the Yes',
    h1: 'The dinner where the ring lands.',
    parent: 'occasions',
    meta: {
      description:
        'Proposal dinners on Kauaʻi: Date Night $650–$950 fixed, courses timed around the question, photographer coordination, complete discretion — verandas and gardens on both shores.',
    },
    intro:
      'We’ve timed dessert courses around rings before. A proposal dinner is a Date Night with choreography: $650–$950 fixed, the courses built around your signal, and a kitchen that knows how to be invisible until it matters.',
    sections: [
      {
        heading: 'The choreography',
        body: [
          'You tell us the plan in the inquiry — the moment, the signal, the photographer’s hiding spot. The menu is written around it: nothing flambéed during the question, the toast wine poured before, dessert timed to the yes rather than the clock.',
          'If the plan changes mid-evening — nerves, weather, a spontaneous sunset walk — the kitchen flexes. The proposal runs the dinner, not the reverse.',
        ],
      },
      {
        heading: 'Where it works',
        body: [
          'Your veranda or garden, honestly, beats any overlook: private, controllable, and dinner follows the yes without a drive. Hanalei bay-side houses in summer, Poʻipū gardens in winter, Kīlauea estates year-round. We cook where you’re staying.',
        ],
        links: [{ label: 'North Shore tables', href: 'locations/hanalei' }],
      },
      {
        heading: 'After the yes',
        body: [
          'Some couples book the elopement dinner for later in the week — same $650–$950 fixed format, this time with the paperwork done. Some book the engagement announcement dinner for the family flying in. Both are our favorite kind of repeat customer.',
        ],
        links: [{ label: 'Elopement dinners', href: 'weddings/elopement' }],
      },
    ],
    faq: [
      {
        q: 'Can you keep it a secret from my partner?',
        a: 'Discretion is the format: inquiry by your channel only, arrival while they’re out or “the rental’s welcome dinner,” and a crew that has absolutely done this before.',
      },
      {
        q: 'What does a proposal dinner cost?',
        a: 'Date Night pricing: $650–$950 fixed, groceries inside, fee stack itemized. Photographer timing coordination is free; the photographer is yours to book.',
      },
      {
        q: 'What if it rains?',
        a: 'On Kauaʻi, the rain plan is the plan: covered veranda service as default, and the menu doesn’t care about weather. We make the call with you 48 hours out.',
        links: [{ label: 'Weather backup planning', href: '/kauai/guides/weather-backup' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['proposal dinner private chef Kauai', 'Kauai proposal chef'],
  },
  {
    slug: 'occasions/family-reunion',
    category: 'occasion',
    title: 'Family Reunion Catering Kauaʻi — Ten People, One Table',
    h1: 'The reunion table, without the cooking rotation.',
    parent: 'occasions',
    meta: {
      description:
        'Family reunion catering on Kauaʻi: 10-person rental-house groups fed family-style from $125–$150/guest, both-shore logistics, kids’ tables and dietary flags handled.',
    },
    intro:
      'The Kauaʻi reunion shape is known: ten to sixteen people, one big rental house, and a cooking rotation somebody always loses. We end the rotation — family-style dinners from $125–$150 a guest, or the whole week under a Stay Chef.',
    sections: [
      {
        heading: 'Built for the rental-house group',
        body: [
          'The forums are full of ten-person families asking how to feed everyone in a Princeville house — this page is the answer. Family-style platters down a long table, kids fed early, the dietary flags (there are always flags) settled before the shopping.',
          'Two or three dinners across the week is the common pattern: arrival night, the midweek celebration, the farewell. Each prices from the same published card.',
        ],
        links: [{ label: 'Stay Chef for the whole week', href: 'stay-chef' }],
      },
      {
        heading: 'Both shores, one contract',
        body: [
          'Reunions split across two rentals — one Princeville, one Poʻipū — are a Kauaʻi specialty of ours: dinners on alternating shores, surcharges itemized per service day, one quote covering the whole family’s week.',
        ],
        links: [{ label: 'Two-shore coverage', href: 'pricing/two-shore-coverage' }],
      },
      {
        heading: 'The money, split fairly',
        body: [
          'Per-guest pricing makes the family math clean: the quote shows per-person lines, and splitting it is arithmetic, not negotiation. Groceries inside the band on dinners; at cost with receipts on weeks.',
        ],
      },
    ],
    faq: [
      {
        q: 'What does feeding a 14-person reunion cost?',
        a: 'Family-style at the Table band ($125–$150/guest): fourteen guests runs $1,750–$2,100 per dinner, groceries included, plus staffing if you want full service and the fee stack on its own lines.',
      },
      {
        q: 'Can you handle three generations’ dietary needs?',
        a: 'Weekly — the eleven standard flags, separate allergen prep, kids’ plates, and the grandparent’s low-sodium line all settle in the menu call, labeled per dish.',
      },
      {
        q: 'We have two houses on different shores — one contract?',
        a: 'Yes — one quote, alternating-shore dinners, surcharges itemized per service day. Simpler for you, and honestly easier for us than pretending a single shore fits everyone.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['family reunion catering Kauai', 'family reunion chef Kauai', 'group dinner Kauai rental'],
  },
  {
    slug: 'occasions/holiday-dinner',
    category: 'occasion',
    title: 'Christmas Private Chef Kauaʻi — Holiday Tables, Booked Early',
    h1: 'The holiday table, without the holiday kitchen.',
    parent: 'occasions',
    meta: {
      description:
        'Holiday private chef on Kauaʻi: Christmas and New Year estate dinners, Thanksgiving tables, December week-long Stay Chef service — December compresses first; the calendar truth, published.',
    },
    intro:
      'December is Kauaʻi’s compression point: peak rates, full estates, and every kitchen on the island booked. The holiday table is our most valuable and most honest page: same published card, earlier deadlines.',
    sections: [
      {
        heading: 'The December truth',
        body: [
          'Holiday weeks are when the island’s rental stock peaks — December daily rates run well above fall — and when chef demand compresses hardest. We don’t add holiday surcharges to the published card; we do run out of dates. Sixty days out is the honest floor for Christmas week; ninety is comfortable.',
          'The 50% deposit locks the date after the written quote — and in December, the quote window matters more than the menu.',
        ],
      },
      {
        heading: 'The holiday table itself',
        body: [
          'Christmas dinner as a Signature coursed evening or a Premium tasting; Thanksgiving as the island’s best family-style table — local farms’ squash, the good bird, pies that didn’t travel. New Year’s Eve with the bar cart ($850/4hr + $60/guest, alcohol client-supplied or via licensed referral).',
          'Estate weeks over the holidays fold the feasts into the Stay Chef rhythm: from $1,100/day, with the celebration nights crewed at published hourlys.',
        ],
        links: [{ label: 'Estate-week chef', href: 'services/estate-week-chef' }],
      },
      {
        heading: 'Both shores at the holidays',
        body: [
          'December is South Shore season — drier, calmer, the reliable holiday bet — but North Shore estate weeks over Christmas are their own tradition, booked with the pantry plan and the bridge clause where applicable.',
        ],
        links: [{ label: 'Shore seasonality', href: 'guides/shore-seasonality' }],
      },
    ],
    faq: [
      {
        q: 'Is there a holiday surcharge?',
        a: 'No invented surcharges — the published card holds. The honest December cost is availability: dates compress, so early inquiry and a locked deposit are the whole game.',
      },
      {
        q: 'How early should Christmas week book?',
        a: 'Sixty days minimum, ninety comfortable. Christmas-week estate service is the first thing on the island to sell out, every year, without exception.',
      },
      {
        q: 'Can you cook a traditional holiday meal?',
        a: 'Yes — the full traditional table, or the island version of it, or both across the week. Dietary flags and kids’ tables fold in as always.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['Christmas private chef Kauai', 'holiday catering Kauai', 'Thanksgiving chef Kauai'],
  },
  {
    slug: 'occasions/villa-party',
    category: 'occasion',
    title: 'Villa Party Catering Kauaʻi — Pūpū Hours to Full Receptions',
    h1: 'The house party, professionally fed.',
    parent: 'occasions',
    meta: {
      description:
        'Villa party catering on Kauaʻi: pūpū and grazing formats, chef-attended stations, the bar cart — 10–75 guests staffed, per-guest pricing, house rules respected.',
    },
    intro:
      'The villa party is its own format: not a seated dinner, not a venue event — a house full of people who should never see the kitchen working. Pūpū hours, grazing tables, attended stations, 10–75 guests.',
    sections: [
      {
        heading: 'Formats that fit a house',
        body: ['By energy level:'],
        list: [
          'The pūpū hour that becomes the evening — grazing and tray pass, quoted per event',
          'Chef-attended stations — Premium band + staffing; the poke station alone justifies the party',
          'Family-style big table — $125–$150/guest for the sit-down version',
          'The bar cart alongside — $850/4hr + $60/guest, alcohol client-supplied or via licensed referral',
        ],
        links: [{ label: 'Pūpū & grazing menus', href: 'menus/pupu-and-grazing' }],
      },
      {
        heading: 'House rules are part of the quote',
        body: [
          'Rental houses have rules — guest counts, quiet hours, parking limits — and the party works inside them or doesn’t work. We settle the house rules in the inquiry exchange; a party that violates the rental agreement is a bad night for everyone, including us.',
          'Load-in, power, and the rain plan are assessed in the quote phase. Kauaʻi evenings are kind; the covered lānai is the default dance floor.',
        ],
      },
      {
        heading: 'The staffing math',
        body: [
          'Standing formats run one server per 15–20 guests; the bar runs its own line; a sous holds the stations. All of it published — $55/hr servers, $75/hr sous, 4-hour floor — and itemized before the deposit.',
        ],
        links: [{ label: 'Event staffing', href: 'services/staffing' }],
      },
    ],
    faq: [
      {
        q: 'What does a villa party for 30 cost?',
        a: 'Thirty guests on a pūpū-and-stations format runs roughly $4,500–$7,500 for food depending on depth, plus two to three servers and a sous at published hourlys, the bar cart if you want it, and the fee stack on its own lines.',
      },
      {
        q: 'Will our rental allow a catered party?',
        a: 'Check the house rules first — most allow catered gatherings within guest-count limits, many prohibit events beyond occupancy. We work inside the rules; the quote phase includes the access conversation.',
      },
      {
        q: 'How late can service run?',
        a: 'The crew works to your timeline within house rules and county noise norms; late-night formats quote the extended hours honestly in advance.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['villa party catering Kauai', 'house party chef Kauai', 'pupu catering Kauai'],
  },
  {
    slug: 'occasions/corporate-offsite',
    category: 'occasion',
    title: 'Corporate Offsite Catering Kauaʻi — The Working Table',
    h1: 'Offsites that eat like they matter.',
    parent: 'occasions',
    meta: {
      description:
        'Corporate offsite catering on Kauaʻi: team dinners, retreat-week full board, celebration evenings — itemized per-person pricing, dietary census handled, invoices finance teams approve.',
    },
    intro:
      'The offsite’s food should be the easy part: itemized per-person pricing, every dietary flag handled without a meeting about it, and an invoice your finance team approves without a follow-up email.',
    sections: [
      {
        heading: 'The offsite formats',
        body: ['By agenda:'],
        list: [
          'Team dinners at the rental — Signature $150–$250/guest, plated or family-style',
          'Full-board retreat weeks — $250–$300+/person/day, the whole program fed',
          'Working lunches during sessions — built to not sedate the afternoon',
          'The closing celebration — Premium band, bar cart, the toast that lands',
        ],
        links: [{ label: 'Corporate retreats, in depth', href: 'retreat-catering/corporate-retreats' }],
      },
      {
        heading: 'The dietary census, solved',
        body: [
          'We send the template; your coordinator collects flags at registration; the menus come back labeled per dish. Allergen prep is separate; nobody eats a visibly “special” plate in front of colleagues. It’s infrastructure, not accommodation theater.',
        ],
      },
      {
        heading: 'Paperwork, designed for finance',
        body: [
          'One written quote, itemized by line — food, staffing, travel, 20% service, GET up to 4.7120% — and the quote is the confirmed total. The expense report becomes a photocopy; the receipts envelope covers the groceries.',
        ],
      },
    ],
    faq: [
      {
        q: 'What does an offsite dinner for 20 cost?',
        a: 'Twenty at the Signature mid-band ($200) is $4,000 for food and service, plus any staffing and the bar cart if you want it — then 20% service and GET on their own lines. The written quote fixes everything.',
      },
      {
        q: 'Can you cater a multi-day offsite?',
        a: 'Yes — that’s the retreat product: one contract, every meal, 8–30 guests across 3–7 days, priced per person per day from published rates.',
      },
      {
        q: 'Alcohol policy?',
        a: 'Client-supplied or via licensed bartending referral; we do not sell alcohol. The posture prints on the quote — HR-friendly by default.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['corporate offsite catering Kauai', 'company retreat Kauai chef', 'team dinner Kauai'],
  },
  {
    slug: 'occasions/celebration-of-life',
    category: 'occasion',
    title: 'Celebration of Life Catering Kauaʻi — We Handle the Food',
    h1: 'So the family can be together.',
    parent: 'occasions',
    meta: {
      description:
        'Celebration of life catering on Kauaʻi: calm planning, plain pricing, quiet service for family gatherings on both shores. We handle the food so the family can be together.',
    },
    intro:
      'Some gatherings shouldn’t have to think about food. We plan quietly, price plainly, serve gently, and leave the kitchen clean — the family’s day belongs to the family.',
    sections: [
      {
        heading: 'How we work these days',
        body: [
          'One planning call, kept short. A menu shaped around the person — the dishes they were known for, the table they’d have set. Service that reads the room: present when needed, invisible when not.',
          'Pricing is the same published card, stated plainly: family-style from $125–$150 a guest, staffing at $55 an hour, the fee stack itemized. No packages, no upsells, no follow-up calls.',
        ],
      },
      {
        heading: 'The practical parts, handled',
        body: [
          'We coordinate with the house, the church hall, or the beachside park pavilion on access and timing. Dietary needs of elderly guests and kids are handled quietly. Leftovers are packed for the family — tomorrow should be easier too.',
          'East Side and South Shore gatherings are base-zone; North Shore carries the standard surcharge. Far-North family land past Hanalei — we know the road, and we plan for it.',
        ],
      },
      {
        heading: 'Timing',
        body: [
          'These gatherings rarely plan months out, and we hold flexibility for them: tell us the date and the headcount and we answer honestly — yes or no — within a day. If we can crew it, the written quote follows immediately.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you cater on short notice?',
        a: 'We answer within a day, honestly. When the roster allows, yes — and we keep the planning burden near zero: one short call, one written quote, and we take it from there.',
      },
      {
        q: 'What does it cost?',
        a: 'Family-style service from $125–$150 per guest, staffing $55/hr, 20% service and GET itemized. The written quote is the confirmed total; nothing is added later.',
      },
      {
        q: 'Can you serve at a beachside pavilion or family property?',
        a: 'Yes — we coordinate access, power, and water needs with the venue or the family beforehand, and we keep the setup quiet and quick.',
      },
    ],
    cta: { label: 'Talk to us', href: 'quote', note: 'One short call or message is enough. We answer within a day, honestly — and if we can crew your date, the written quote follows immediately.' },
    keywords: ['celebration of life catering Kauai', 'memorial catering Kauai', 'funeral reception Kauai'],
  },
];

const PROVENANCE_LINE =
  'Sourcing stays named on wedding menus too: Kunana Dairy, the Saturday Hanalei market, Kauaʻi grass-fed beef, day-boat fish when the boats go out.';

/** Kauaʻi weddings cluster (Table 4.2.3c rows 1–9): the estate-week identity + elopements. */
const weddings: ContentRecord[] = [
  {
    slug: 'weddings/wedding-week',
    category: 'wedding',
    title: 'Kauaʻi Wedding Week Catering — Five Meals, One Contract',
    h1: 'The wedding week, meal by meal.',
    parent: 'weddings',
    meta: {
      description:
        'Kauaʻi wedding week catering: welcome dinner, rehearsal, ceremony pūpū, reception, recovery brunch — from $175/guest plus staffing, five events under one written contract.',
    },
    intro:
      'The estate-week format is Kauaʻi’s wedding identity: not one reception but five meals across the week, each its own line, all one crew. From $175 a guest plus staffing — itemized before the deposit.',
    sections: [
      {
        heading: 'The five events',
        body: ['The week’s shape, event by event:'],
        list: [
          'Welcome dinner (Thursday) — family-style, 20–75 guests · Table band $125–$150/guest',
          'Rehearsal dinner (Friday) — plated or family-style, 12–40 · Signature $150–$250/guest',
          'Ceremony-adjacent pūpū (Saturday, golden hour) — tray pass while the photos run',
          'The reception (Saturday evening) — plated 2–3 courses or premium buffet, 30–75 · from $175/guest',
          'Recovery brunch (Sunday, late) — the gentle one · quoted per event',
        ],
      },
      {
        heading: 'Why one contract beats five vendors',
        body: [
          'The same kitchen crew all week means the dietary flags settle once, the welcome-dinner conversation informs the reception menu, and the family knows the servers by Saturday. One deposit schedule. One written quote where every event is its own line.',
          'Against the island’s caterer average of roughly $75 a plate: the estate week costs more per event and transforms the week — nobody who’s done both books the $75 version twice.',
        ],
        links: [{ label: 'Wedding costs, worked line by line', href: 'weddings/wedding-cost' }],
      },
      {
        heading: 'The staffing spine',
        body: [
          'Servers $55/hr, sous chefs $75/hr, 4-hour floor, one server per 10–12 seated guests. The crew scales per event — two servers Thursday, five Saturday — and the quote shows the per-event math, not a lump sum.',
        ],
      },
      BRIDGE_SECTION,
    ],
    faq: [
      {
        q: 'What does a full wedding week cost on Kauaʻi?',
        a: 'A 50-guest week — welcome dinner, rehearsal, pūpū, reception, brunch — runs roughly $20,000–$30,000 all-in depending on tiers, worked line by line on our cost page. Every figure traces to the published rate card.',
        links: [{ label: 'The worked math', href: '/kauai/weddings/wedding-cost' }],
      },
      {
        q: 'Can we book just some of the week?',
        a: 'Yes — each event is its own line. Reception-only bookings are fine; the week exists because one crew across all five is better and usually cheaper than five vendors.',
      },
      {
        q: 'Do you work with our wedding planner?',
        a: 'Daily — venue rules, rentals, timelines, and load-in all settle in the quote phase with your planner. The written quote already contains the logistics when you approve it.',
        links: [{ label: 'For wedding planners', href: '/kauai/partners/wedding-planners' }],
      },
    ],
    cta: { ...CTA_QUOTE, secondaryLabel: 'Wedding costs, worked', secondaryHref: 'weddings/wedding-cost' },
    keywords: ['Kauai wedding week catering', 'wedding week chef Kauai', 'estate wedding week Kauai'],
  },
  {
    slug: 'weddings/rehearsal-dinner',
    category: 'wedding',
    title: 'Rehearsal Dinner Kauaʻi — The Week’s Best-Kept Secret',
    h1: 'The rehearsal dinner is the week’s best-kept secret.',
    parent: 'weddings',
    meta: {
      description:
        'Rehearsal dinner catering on Kauaʻi: plated or family-style for 12–40 guests at $150–$250/guest — the intimate evening before the big one, on verandas and in gardens on both shores.',
    },
    intro:
      'Smaller than the reception, looser than the reception, and — ask anyone married — often the better meal. Twelve to forty guests, plated or family-style, $150–$250 a guest.',
    sections: [
      {
        heading: 'The format that works',
        body: [
          'Family-style wins rehearsal dinners: platters down the table, the two families passing food before they’ve finished introducing themselves. Plated coursed works for smaller, dressier evenings. Both run the Signature band; groceries inside; toasts timed between courses, never through them.',
          'The menu usually runs more relaxed than the reception — the fish tacos elevated, the family-style spread, the lilikoi dessert — saving the formal register for Saturday.',
        ],
      },
      {
        heading: 'Where rehearsal dinners happen',
        body: [
          'The estate’s garden, the rental’s veranda, the plantation house’s back lawn. North Shore Fridays in summer, South Shore year-round. We coordinate load-in with your venue or house manager in the quote phase.',
          PROVENANCE_LINE,
        ],
        links: [
          { label: 'Hanalei estate weddings', href: 'locations/hanalei/estate-wedding' },
          { label: 'Poʻipū wedding catering', href: 'locations/poipu/wedding-catering' },
        ],
      },
      {
        heading: 'The numbers',
        body: [
          'Twenty-five guests at the Signature mid-band ($200) is $5,000 for food and service, plus two servers ($55/hr, 4-hour floor = $440), then 20% service and GET on their own lines. The written quote is the confirmed total.',
        ],
      },
    ],
    faq: [
      {
        q: 'What does a rehearsal dinner for 30 cost on Kauaʻi?',
        a: 'Thirty at $150–$250/guest runs $4,500–$7,500 for food and service, plus staffing at published hourlys and the fee stack itemized. The quote fixes the exact number before the deposit.',
      },
      {
        q: 'Can the rehearsal be more casual than the reception?',
        a: 'It should be — the contrast is the point. Family-style Hawaiian-leaning menus on Friday make Saturday’s plated courses land harder.',
      },
      {
        q: 'Do toasts disrupt the kitchen?',
        a: 'Never — we build the toast windows into the service plan. Speeches run between courses; the kitchen holds; nothing arrives cold or mid-anecdote.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['rehearsal dinner Kauai', 'rehearsal dinner catering Kauai'],
  },
  {
    slug: 'weddings/welcome-dinner',
    category: 'wedding',
    title: 'Welcome Dinner Kauaʻi — Thursday Night, Both Families, One Table',
    h1: 'The welcome dinner sets the week.',
    parent: 'weddings',
    meta: {
      description:
        'Welcome dinner catering on Kauaʻi: family-style arrival evenings for 20–75 guests at $125–$150/guest — the first night that turns two families into one table.',
    },
    intro:
      'Thursday night, everyone’s landed, nobody knows the cousins’ names yet. The welcome dinner’s job is social engineering via family-style food: big platters, long tables, $125–$150 a guest.',
    sections: [
      {
        heading: 'Family-style is the point',
        body: [
          'Plated service puts people in seats; family-style makes them talk. The welcome dinner runs Table band — generous platters, seconds guaranteed, the menu built for passing. By dessert, the two families have a shared opinion about the short ribs.',
          'Twenty to seventy-five guests is the envelope; the format scales by adding platters and servers, not complexity.',
        ],
      },
      {
        heading: 'Timing it with arrivals',
        body: [
          'Island arrival days run late and jet-lagged; we time service to the last flight that matters, hold the start gracefully, and keep the early part of the evening grazing-friendly for the stragglers. The kitchen is invisible; the food just keeps appearing.',
        ],
      },
      {
        heading: 'The week starts here',
        body: [
          'The welcome dinner is usually the first event of a wedding-week contract — the same crew that runs it runs your reception Saturday, so the dietary flags and the family dynamics are already known quantities by the big night.',
        ],
        links: [{ label: 'The full wedding week', href: 'weddings/wedding-week' }],
      },
    ],
    faq: [
      {
        q: 'What does a welcome dinner for 50 cost?',
        a: 'Fifty at the Table band ($125–$150/guest) runs $6,250–$7,500 for food and service, plus four to five servers at published hourlys, then 20% service and GET on their own lines.',
      },
      {
        q: 'Buffet or family-style?',
        a: 'Family-style, almost always — buffets create lines; platters create conversation. Buffet service is available where the venue layout demands it.',
      },
      {
        q: 'Can the welcome dinner be at our rental?',
        a: 'Yes — rental houses and estate lawns are the common ground. The kitchen and access check happens in the quote phase.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['welcome dinner Kauai', 'wedding welcome dinner Kauai'],
  },
  {
    slug: 'weddings/reception-catering',
    category: 'wedding',
    title: 'Wedding Reception Catering Kauaʻi — From $175/Guest',
    h1: 'The reception, priced like adults.',
    parent: 'weddings',
    meta: {
      description:
        'Wedding reception catering on Kauaʻi from $175/guest plus staffing: plated 2–3 courses or premium buffet for 30–75 guests — against the island’s $75/plate average, itemized line by line.',
    },
    intro:
      'The island’s caterer average runs around $75 a plate — wedding.marketing’s average, buffet-adjacent. Our receptions start at $175 a guest plus staffing. This page exists to explain the difference, line by line.',
    sections: [
      {
        heading: 'What $175 a guest buys',
        body: [
          'Plated two-to-three courses or a premium buffet that isn’t a steam-table line: day-boat fish, Kauaʻi grass-fed beef, the Saturday market’s vegetables, dietary flags handled invisibly, and a menu written for your table rather than pulled from a catering binder.',
          'Staffing is separate and published: servers $55/hr, sous $75/hr, 4-hour floor, one server per 10–12 guests. Thirty to seventy-five guests is the envelope; over 75 is a written exception.',
        ],
      },
      {
        heading: 'The $75 comparison, honestly',
        body: [
          'The $75 average buys volume catering: fixed menus, buffet lines, staff ratios that keep costs down and service thin. The gap to $175 buys the estate-week register — coursed food, real staffing, a crew that cooked your welcome dinner too.',
          'Our 20% service charge is itemized; the market runs 23–25%, and one Kauaʻi caterer adds 25% gratuity to all food and drink. Compare quotes line by line — ours are built for it.',
        ],
        links: [{ label: 'The fee stack, explained', href: 'pricing/fee-stack' }],
      },
      {
        heading: 'Reception logistics on Kauaʻi',
        body: [
          'Estate lawns and garden venues mean load-in planning, power checks, and rain cover settled in the quote phase. Golden-hour timing is choreography we’ve done: the pūpū hour while photos run, the first course as the light goes.',
        ],
        links: [{ label: 'Weather backup planning', href: 'guides/weather-backup' }],
      },
    ],
    faq: [
      {
        q: 'What does a 60-guest reception cost?',
        a: 'Sixty at $175–$250/guest runs $10,500–$15,000 for food, plus five servers and a sous at published hourlys (~$1,600–$2,000), the bar cart if you want it, then 20% service and GET itemized. The written quote is the confirmed total.',
      },
      {
        q: 'Plated or buffet?',
        a: 'Plated two-to-three courses for the formal register; premium buffet for the generous, abundant one. Both run the same per-guest band; the difference is service style and staffing.',
      },
      {
        q: 'Can you cater at our venue?',
        a: 'Estates, gardens, plantation venues on both shores — yes, with vendor-list and house-rule coordination in the quote phase. If a venue holds an exclusive caterer list, we say so early.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['wedding reception catering Kauai', 'Kauai reception caterer', 'wedding catering cost Kauai'],
  },
  {
    slug: 'weddings/recovery-brunch',
    category: 'wedding',
    title: 'Recovery Brunch Kauaʻi — The Gentle Last Morning',
    h1: 'Sunday, late, gently.',
    parent: 'weddings',
    meta: {
      description:
        'Recovery brunch catering on Kauaʻi: the morning-after wedding meal — coffee that keeps coming, island breakfast done properly, quoted per event for 20–75 guests.',
    },
    intro:
      'The last meal of the wedding week, and the one everyone remembers with their sunglasses on. Recovery brunch is quoted per event — the format is generosity, not courses.',
    sections: [
      {
        heading: 'The format',
        body: [
          'Late start — eleven is early. Coffee that never stops. The spread: island fruit that’s actually ripe, malasada-adjacent things from the oven, eggs every way, last night’s best flavors revisited, and enough food that nobody has to make decisions.',
          'Quoted per event from the Table band logic, scaled to headcount and service style — the written quote shows the line like any other.',
        ],
      },
      {
        heading: 'The send-off function',
        body: [
          'Recovery brunch is where the week’s stories get told and the airport runs get planned. We keep service grazing-style and unhurried: food out for hours, the kitchen cleaning itself up behind the scene, the family free to be the family.',
        ],
      },
      {
        heading: 'Part of the week contract',
        body: [
          'Most recovery brunches book as the fifth line of a wedding-week contract — same crew, same kitchen, the dietary flags long since settled. Standalone brunches book the same way, per event.',
        ],
        links: [{ label: 'The wedding week', href: 'weddings/wedding-week' }],
      },
    ],
    faq: [
      {
        q: 'What does a recovery brunch for 40 cost?',
        a: 'Brunch formats run lighter than dinners — typically quoted in the $85–$125/guest range depending on spread and service, with staffing at published hourlys. The written quote fixes the exact line.',
      },
      {
        q: 'How early does the crew arrive?',
        a: 'Quietly and early — the coffee is ready before the first guest surfaces. Load-in respects the house and the hangover.',
      },
      {
        q: 'Can brunch be outdoors?',
        a: 'Yes — garden and veranda brunches are the Kauaʻi default, with the rain plan settled in the quote as always.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['recovery brunch Kauai', 'morning after wedding brunch Kauai'],
  },
  {
    slug: 'weddings/elopement',
    category: 'wedding',
    title: 'Elopement Dinner Kauaʻi — $650–$950, Fixed',
    h1: 'Two people, one table, no production.',
    parent: 'weddings',
    meta: {
      description:
        'Elopement dinners on Kauaʻi: $650–$950 fixed, groceries included — a coursed dinner for two to eight where you’re staying. The unbundled micro-wedding, priced like dinner.',
    },
    intro:
      'The elopement dinner is the unbundled micro-wedding: no staffing minimums, no reception math — a coursed dinner for two to eight, cooked where you’re staying, $650–$950 fixed with groceries inside.',
    sections: [
      {
        heading: 'What the fixed price buys',
        body: [
          'A coursed menu written for the two of you, that day’s shopping, the cooking and service, the kitchen left clean. $650–$950 fixed by menu depth; 20% service and GET on their own lines; nothing else unless you add it in writing.',
          'Nā Pali-adjacent views optional — the meal needs no helicopter. A Hanalei veranda, a Poʻipū garden, a Kīlauea estate kitchen: the table is wherever you’re staying.',
        ],
      },
      {
        heading: 'Up to eight, still fixed',
        body: [
          'Witnesses and the two sets of parents hold the fixed format to eight guests. Beyond eight it becomes a small wedding dinner and prices per guest — the quote will say which one yours is.',
        ],
      },
      {
        heading: 'The planner-free wedding',
        body: [
          'Many eloping couples have no planner, and don’t need one for dinner: one inquiry, one menu call, one written quote. We coordinate timing with your photographer if there is one; the rest is dinner.',
        ],
        links: [{ label: 'Proposal dinners', href: 'occasions/proposal' }],
      },
    ],
    faq: [
      {
        q: 'Is the elopement dinner really $650–$950 all-in?',
        a: 'Fixed for food and service with groceries inside; the fee stack (20% service, GET up to 4.7120%) and any shore surcharge appear on their own lines. The written quote is the confirmed total.',
      },
      {
        q: 'Can you marry us too?',
        a: 'We cook; we don’t officiate. We happily time courses around your officiant and photographer, and we know how the evening flows — but the paperwork is theirs.',
      },
      {
        q: 'What if it rains on our beach plan?',
        a: 'We cook where you’re staying, not on the sand — the veranda or kitchen is the venue, rain-proof by construction. The beach is for the photos; dinner is guaranteed.',
      },
    ],
    cta: { ...CTA_QUOTE, secondaryLabel: 'Date Night, compared', secondaryHref: 'services/date-night' },
    keywords: ['elopement dinner Kauai', 'micro wedding Kauai catering', 'elopement chef Kauai'],
  },
  {
    slug: 'weddings/estate-wedding',
    category: 'wedding',
    title: 'Estate Wedding Catering Kauaʻi — Against the $75/Plate Average',
    h1: 'The estate wedding, itemized.',
    parent: 'weddings',
    meta: {
      description:
        'Estate wedding catering on Kauaʻi from $175/guest plus staffing: bluff lawns and plantation gardens, one crew across the week, 20% service itemized — the full case against the island average.',
    },
    intro:
      'Kauaʻi’s wedding identity is the estate — and the estate wedding deserves better than the island’s $75-a-plate buffet average. From $175 a guest plus staffing, here is exactly what the difference buys.',
    sections: [
      {
        heading: 'The average, examined',
        body: [
          'wedding.marketing puts the Kauaʻi caterer average near $75 a plate. That buys volume catering: fixed menus, buffet lines, thin staffing, and a service charge that sometimes reaches 25% added across all food and drink.',
          'The estate format buys a different product: a menu written for your table, coursed service, day-boat fish and named farms, one crew across your week, and a written quote where every line — including our 20% service — is visible before the deposit.',
        ],
      },
      {
        heading: 'The estate as venue, respected',
        body: [
          'Estate weddings run on the property’s terms: kitchen access, load-in windows, sound curfews, the owner’s rules. We settle all of it with your planner and the estate manager in the quote phase — the approved number already contains the logistics.',
          'Bluff lawns add their own physics: wind, power, and the long carry from the kitchen. We’ve run them; the quote reflects the real site, not a generic one.',
        ],
        links: [
          { label: 'Hanalei estate weddings', href: 'locations/hanalei/estate-wedding' },
          { label: 'Estate venues, honestly assessed', href: 'weddings/venues' },
        ],
      },
      {
        heading: 'The week around the day',
        body: [
          'The estate wedding rarely stands alone: welcome dinner Thursday, rehearsal Friday, brunch Sunday. One contract across the week means the reception crew already knows the family — and the per-event lines usually beat hiring five vendors.',
        ],
        links: [{ label: 'The wedding-week formats', href: 'weddings/wedding-week' }],
      },
    ],
    faq: [
      {
        q: 'What does an estate wedding cost on Kauaʻi?',
        a: 'From $175/guest plus staffing: a 50-guest reception runs $8,750–$12,500 for food, plus crew at published hourlys, rentals coordination, 20% service, and GET — every line itemized. The full week is worked out on our cost page.',
        links: [{ label: 'Wedding costs, worked', href: '/kauai/weddings/wedding-cost' }],
      },
      {
        q: 'What’s the guest ceiling?',
        a: 'Seventy-five staffed is the standard envelope; over 75 is a written exception quoted explicitly. The estate itself often sets the real ceiling — site checks happen before the quote.',
      },
      {
        q: 'Do you carry insurance for estate venues?',
        a: 'Yes — certificate paperwork is part of the quote phase for venues that require it, coordinated with your planner and the estate manager.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['estate wedding Kauai', 'Kauai estate wedding catering', 'bluff wedding Kauai'],
  },
  {
    slug: 'weddings/wedding-cost',
    category: 'pricing',
    title: 'Kauaʻi Wedding Catering Cost — Worked Line by Line',
    h1: 'What a Kauaʻi wedding week costs.',
    parent: 'weddings',
    meta: {
      description:
        'Kauaʻi wedding catering costs worked line by line: a 50-guest wedding week at $20,000–$30,000 all-in, every figure traced to the published rate card. The written quote is the confirmed total.',
    },
    intro:
      'The island’s caterer average is ~$75 a plate and nobody shows the math. Here is the math: a full 50-guest wedding week, every line traced to the published card.',
    sections: [
      {
        heading: 'The worked week (illustrative)',
        body: [
          'Fifty guests, five events, published rates. Food lines use band midpoints; staffing uses the planning ratios; the fee stack follows on its own lines. Your quote itemizes your actual numbers — this table exists so it never surprises you.',
        ],
      },
      {
        heading: 'Reading it against the market',
        body: [
          'The same week at the island average (~$75/plate, buffet-adjacent, 25% service norms) quotes lower per plate and delivers a different product: no coursed menus, no week-long crew, no named sourcing. The estate week costs more per event and replaces five vendors with one contract.',
          'Either way, compare line by line. Our quotes are built to be compared.',
        ],
        links: [{ label: 'The fee stack, explained', href: 'pricing/fee-stack' }],
      },
    ],
    priceTable: {
      title: 'Illustrative 50-guest wedding week',
      rows: [
        { label: 'Welcome dinner (Thu)', value: '$6,250', note: '50 × $125 Table band, family-style' },
        { label: 'Rehearsal dinner (Fri)', value: '$5,000', note: '25 × $200 Signature mid-band, plated' },
        { label: 'Ceremony pūpū (Sat)', value: '$2,500', note: '50 × $50, tray pass' },
        { label: 'Reception (Sat)', value: '$10,000', note: '50 × $200, plated three courses' },
        { label: 'Recovery brunch (Sun)', value: '$5,000', note: '50 × $100, grazing format' },
        { label: 'Staffing across the week', value: '$3,300', note: '~15 crew-shifts at $55–$75/hr' },
        { label: 'Subtotal', value: '$32,050', note: 'Food + crew' },
        { label: 'Service charge', value: '$6,410', note: '20%, itemized — market runs 23–25%' },
        { label: 'Hawaiʻi GET', value: 'up to 4.7120%', note: 'On its own line, always' },
      ],
      footnote: `Illustrative math on published rates — not a quote. ${FEE_FOOTNOTE}`,
    },
    faq: [
      {
        q: 'Is $20–30K typical for a Kauaʻi wedding week?',
        a: 'For 50 guests across five events at our tiers, yes — and the range flexes with menu choices and crew. The per-event lines are published, so the math is auditable before you inquire.',
      },
      {
        q: 'Can the week cost less?',
        a: 'Choose fewer events, leaner tiers, or a smaller headcount — the rate card does the arithmetic honestly. A reception-only Saturday at the Table band is a very different number, and the quote will show it.',
      },
      {
        q: 'What’s NOT in this table?',
        a: 'Rentals, florals, the bar package ($850/4hr + $60/guest if you add it), alcohol itself (client-supplied or licensed referral), and the venue. The quote scopes exactly what we provide.',
      },
    ],
    cta: { ...CTA_QUOTE, secondaryLabel: 'The full rate card', secondaryHref: 'pricing' },
    keywords: ['Kauai wedding catering cost', 'wedding catering prices Kauai', 'Kauai wedding cost breakdown'],
  },
  {
    slug: 'weddings/venues',
    category: 'wedding',
    title: 'Kauaʻi Estate Wedding Venues — Honestly Assessed',
    h1: 'The venues, from the kitchen’s side.',
    parent: 'weddings',
    meta: {
      description:
        'An honest kitchen-side assessment of Kauaʻi wedding venues: botanical gardens, plantation estates, bluff properties — what each means for catering, logistics, and your quote.',
    },
    intro:
      'We’ve cooked the island’s wedding venues; this is the assessment planners give each other. Where the kitchens are good, where the load-in is a hike, and which venues hold exclusive caterer lists.',
    sections: [
      {
        heading: 'The botanical gardens',
        body: [
          'Nā ʻĀina Kai (Kīlauea) and McBryde Garden (South Shore) are the island’s definitive garden venues — and garden venues mean outdoor kitchens, load-in planning, and power we sometimes bring. We’ve run both formats; the quote reflects the site honestly.',
          'Vendor rules vary by venue and season. Some gardens work from preferred lists; where we’re outside a list, we say so in the inquiry reply rather than waste your planning cycle.',
        ],
      },
      {
        heading: 'The plantation estates',
        body: [
          'Kōloa-side 1930s plantation houses and the South Shore estate belt: real kitchens, covered lānai, rain tolerance built into the architecture. The easiest venues on the island to cater well, and winter-reliable.',
          'Hanalei-side bluff estates: the island’s best views and its most honest logistics — wind, the long carry, and past a certain point, the bridge clause.',
        ],
        links: [
          { label: 'Hanalei estate weddings', href: 'locations/hanalei/estate-wedding' },
          { label: 'Kōloa wedding catering', href: 'locations/koloa/wedding-catering' },
        ],
      },
      {
        heading: 'Your own estate',
        body: [
          'The most common Kauaʻi “venue” is the rental estate itself — which makes the venue assessment a kitchen check: range, counters, power, cover. We run the check before the quote and bring what the kitchen lacks.',
        ],
        links: [{ label: 'What a kitchen needs', href: 'guides/villa-kitchen' }],
      },
      {
        heading: 'The planner handshake',
        body: [
          'Venue relationships run through planners: we coordinate vendor lists, certificates, load-in windows, and rain plans with your planner in the quote phase. The number you approve already contains the venue’s realities.',
        ],
        links: [{ label: 'For wedding planners', href: 'partners/wedding-planners' }],
      },
    ],
    faq: [
      {
        q: 'Can you cater at Nā ʻĀina Kai?',
        a: 'We cater at botanical gardens and estates across the island within each venue’s vendor rules — some run preferred lists, and where we’re outside one we say so early. Ask in the inquiry; the answer is honest either way.',
      },
      {
        q: 'Which venues are easiest on the catering budget?',
        a: 'Estates with real kitchens and covered service space — the South Shore plantation belt especially. Remote bluff sites cost more to serve honestly; the quote shows you exactly why.',
      },
      {
        q: 'Do venues add their own fees to catering?',
        a: 'Some do — site fees and vendor fees are the venue’s lines, not ours, and we don’t mark them up. Our quote covers our scope; your planner reconciles the venue’s.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['Kauai wedding venues catering', 'estate wedding venues Kauai', 'Na Aina Kai catering'],
  },
];

/** Kauaʻi menus cluster (Table 4.2.3d rows 1–10): index + 9 menu pages. */
const menus: ContentRecord[] = [
  {
    slug: 'menus',
    category: 'menu',
    title: 'Sample Menus Kauaʻi — Priced from the Published Card',
    h1: 'Menus, priced.',
    parent: '',
    meta: {
      description:
        'Sample menus from a Kauaʻi private chef: farm-to-table, coursed tastings, family-style, pūpū and grazing, breakfast and brunch — every menu prices from the published rate card.',
      ogImage: '/img/kauai/menu-hanalei-table.jpg',
    },
    intro:
      'These menus are starting points — the real one is written for your table after the menu call. Every menu prices from the published card; nothing here is a package with hidden math.',
    sections: [
      {
        heading: 'The menus',
        body: ['Nine menu pages, each with courses and the band it prices from:'],
        links: [
          { label: 'The Hanalei Table — farm-to-table', href: 'menus/farm-to-table' },
          { label: 'The Signature three-course', href: 'menus/signature-three-course' },
          { label: 'Family-style', href: 'menus/family-style' },
          { label: 'The tasting menu', href: 'menus/tasting-menu' },
          { label: 'Pūpū & grazing', href: 'menus/pupu-and-grazing' },
          { label: 'Breakfast & brunch', href: 'menus/breakfast-and-brunch' },
          { label: 'Vegetarian & vegan', href: 'menus/vegetarian-vegan' },
          { label: 'Gluten-free', href: 'menus/gluten-free' },
          { label: 'The kids’ table', href: 'menus/kids' },
        ],
      },
      {
        heading: 'Sourcing, named',
        body: [PROVENANCE],
        media: { src: '/img/kauai/market-hanalei.jpg', alt: 'Saturday Hanalei farmers market greens and fruit in soft morning light', ratio: '4/5' },
      },
      {
        heading: 'The price bands behind the menus',
        body: ['Every menu maps to a published band:'],
        list: [
          'Table — $125–$150/guest · family-style, brunch, kids’ tables',
          'Signature — $150–$250/guest · coursed dinners, the Hanalei Table',
          'Premium — $250–$350/guest · tasting menus, the best of the boats',
          'Chef’s Table — from $350/guest · quoted per event, every course named',
        ],
        links: [{ label: 'The full rate card', href: 'pricing' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef menus Kauai', 'sample menus Kauai chef'],
  },
  {
    slug: 'menus/farm-to-table',
    category: 'menu',
    title: 'Farm to Table Kauaʻi — The Hanalei Table',
    h1: 'The Hanalei Table.',
    parent: 'menus',
    meta: {
      description:
        'The Hanalei Table: a five-course farm-to-table menu sourced from Kauaʻi farms — Kunana Dairy, the Saturday Hanalei market, day-boat fish — at $165–$195 per guest, groceries included.',
      ogImage: '/img/kauai/menu-hanalei-table.jpg',
    },
    intro:
      'Kauaʻi’s farm-to-table claims usually mean “we bought vegetables.” This menu names the farms — and prints the claim only when the box actually came from that farm. $165–$195 a guest, groceries inside the band.',
    sections: [
      {
        heading: 'A menu that follows the market',
        body: ['Five courses, written from the Saturday Hanalei market run — a representative week:'],
        list: [
          'Kunana Dairy goat cheese, market greens, liliko‘i vinaigrette',
          'Taro two ways — the island’s patience, crisped and puréed',
          'Day-boat fish (when the boats went out), hearts of palm, citrus',
          'Kauaʻi grass-fed beef, roasted market roots, bone-marrow jus',
          'Liliko‘i three forms — curd, fresh, and burnt — with shortbread',
        ],
      },
      {
        heading: 'The provenance rule',
        body: [
          'A farm name appears on the menu only when that farm’s box is in the kitchen. When the boats don’t go out, the fish course becomes what the market honestly had — and the menu says so. Provenance on Kauaʻi is a discipline, not a garnish.',
          PROVENANCE,
        ],
      },
      {
        heading: 'The number',
        body: [
          '$165–$195 a guest inside the Signature band, groceries included, with the week’s sourcing driving where in the band it lands. Staffing and the fee stack itemize as always; the written quote names the courses before the deposit.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is the menu fixed?',
        a: 'The architecture is — five courses, farm-anchored. The dishes follow the Saturday market; the written quote names the actual courses for your date.',
      },
      {
        q: 'Can the Hanalei Table be vegetarian?',
        a: 'Fully — the farms carry it. The vegetarian Hanalei Table is the same architecture with the produce at center rather than beside.',
      },
      {
        q: 'What’s the guest range?',
        a: 'Two to sixteen comfortably; larger tables add staffing at published hourlys and shift the format toward family-style platters of the same courses.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['farm to table Kauai', 'Hanalei farm dinner', 'Kauai farm dinner private chef'],
  },
  {
    slug: 'menus/signature-three-course',
    category: 'menu',
    title: 'Signature Three-Course Kauaʻi — The Default Evening',
    h1: 'The Signature three-course.',
    parent: 'menus',
    meta: {
      description:
        'The Signature three-course dinner on Kauaʻi: appetizer, main, dessert from $150–$250 per guest, groceries included — the most-booked format on the island.',
    },
    intro:
      'The most-booked evening we cook: three courses, written for your table, $150–$250 a guest with groceries inside the band. Where in the band depends on the fish, the farms, and how dressed-up the night is.',
    sections: [
      {
        heading: 'The architecture',
        body: ['Three courses, each with a decision to make together:'],
        list: [
          'First — raw or cooked: poke-style crudo, seared scallops, or the market salad done properly',
          'Main — from the boats or the land: day-boat fish, Kauaʻi grass-fed beef, or the vegetable centerpiece',
          'Dessert — the island’s sweet register: liliko‘i, coconut, chocolate, tropical fruit at actual ripeness',
        ],
      },
      {
        heading: 'Written for the table',
        body: [
          'The menu call settles the courses around your people: the anniversary dish, the kid who eats only pasta (accommodated beautifully, quietly), the celiac guest whose courses run on separate prep. The written quote names every course.',
        ],
      },
      {
        heading: 'Where the band flexes',
        body: [
          'A Tuesday-night family table with market fish lands at $150–$180. The celebration version — the best of the boats, the full register — runs $200–$250. Both include groceries; both leave the kitchen clean.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is $150–$250 the full cost per person?',
        a: 'For food and service, yes — groceries included. Shore surcharges ($50–$75 to Princeville/Poʻipū), 20% service, and GET up to 4.7120% appear on their own lines.',
      },
      {
        q: 'Can we see a menu before booking?',
        a: 'The menu draft is part of the quote — you approve actual named courses, not a promise of courses.',
      },
      {
        q: 'How many guests does it serve?',
        a: 'Two to sixteen as standard; beyond that the format adds crew or shifts family-style. The quote names the right shape for your headcount.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['three course private chef Kauai', 'signature dinner Kauai'],
  },
  {
    slug: 'menus/family-style',
    category: 'menu',
    title: 'Family-Style Catering Kauaʻi — Platters Down the Middle',
    h1: 'Family-style, the Kauaʻi register.',
    parent: 'menus',
    meta: {
      description:
        'Family-style catering on Kauaʻi: generous platters down the table at $125–$150 per guest, groceries included — the format for reunions, welcome dinners, and loud happy tables.',
    },
    intro:
      'The social format: big platters, long tables, seconds guaranteed. $125–$150 a guest, groceries inside — the band for reunions, welcome dinners, and every table that came to talk.',
    sections: [
      {
        heading: 'Why family-style wins the big table',
        body: [
          'Plated service choreographs; family-style liberates. Passing a platter is an introduction; going back for more is a compliment the kitchen can hear. For tables of ten to thirty — reunions, retreats, welcome dinners — it feeds the point of the gathering.',
          'The food itself doesn’t simplify: the same sourcing, the same care, portioned for abundance rather than architecture.',
        ],
      },
      {
        heading: 'A representative spread',
        body: ['Per table, generously:'],
        list: [
          'The market salad — Saturday’s greens, liliko‘i vinaigrette',
          'Day-boat fish, grilled whole or in portions, citrus and herbs',
          'Kauaʻi grass-fed beef, sliced, with its jus',
          'The vegetable platters — roasted roots, charred greens, rice done right',
          'Dessert boards — liliko‘i bars, tropical fruit, the chocolate thing',
        ],
      },
      {
        heading: 'The number',
        body: [
          '$125–$150 a guest with groceries inside; servers at $55/hr where you want full table service (one per 12–15 for family-style); the fee stack itemized. The retreat table runs this format daily — at scale it’s the most honest per-guest number we publish.',
        ],
        links: [{ label: 'Retreat meal plans', href: 'retreat-catering/meal-plans' }],
      },
    ],
    faq: [
      {
        q: 'Is family-style cheaper than plated?',
        a: 'Per guest, yes — the Table band ($125–$150) sits below Signature because plating labor drops, not because the food does. Staffing needs drop too: one server per 12–15 instead of 10–12.',
      },
      {
        q: 'Can dietary guests eat family-style safely?',
        a: 'Yes — flagged dishes are labeled on the table and separated in service; severe allergies get their own platters. The menu call settles it before the shopping.',
      },
      {
        q: 'What’s the minimum group?',
        a: 'Family-style shines from six up; below that, coursed service is usually the better evening for the same money.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['family style catering Kauai', 'group dinner Kauai', 'platters catering Kauai'],
  },
  {
    slug: 'menus/tasting-menu',
    category: 'menu',
    title: 'Tasting Menu Kauaʻi — Premium, Five to Seven Courses',
    h1: 'The tasting menu, island-sourced.',
    parent: 'menus',
    meta: {
      description:
        'Private tasting menus on Kauaʻi: five to seven courses at $250–$350 per guest, groceries included — the Premium band, with Chef’s Table formats from $350 quoted per event.',
    },
    intro:
      'The Premium band’s reason to exist: five to seven courses, the best of the boats and the farms, paced by the table rather than a reservation book. $250–$350 a guest, groceries included.',
    sections: [
      {
        heading: 'The arc',
        body: ['A representative arc, written from the week’s sourcing:'],
        list: [
          'Raw — the day-boat crudo, barely dressed',
          'From the market — one perfect vegetable, treated like the point',
          'From the sea — the fish course, sauced classically',
          'From the land — Kauaʻi grass-fed beef or the taro centerpiece',
          'The bridge — cheese or a savory-sweet pause',
          'Dessert — liliko‘i, chocolate, or both, arguing pleasantly',
        ],
      },
      {
        heading: 'Pacing as a feature',
        body: [
          'A tasting in your own dining room runs at the table’s speed: the pause for the sunset, the second bottle’s tempo, the conversation that shouldn’t be interrupted by a course. The kitchen reads the room because the room is yours.',
        ],
      },
      {
        heading: 'The number and the crew',
        body: [
          '$250–$350 a guest with groceries inside; a sous chef ($75/hr, 4-hour floor) joins the kitchen; servers ($55/hr) pace the room. Chef’s Table formats — counter seating, courses off the pass — quote from $350.',
        ],
        links: [{ label: 'Chef’s Table', href: 'services/chefs-table' }],
      },
    ],
    faq: [
      {
        q: 'What does a tasting menu for six cost?',
        a: 'Six at $250–$350 runs $1,500–$2,100 for food, plus the sous and a server at published hourlys, then the fee stack on its own lines. The written quote names every course and fixes the total.',
      },
      {
        q: 'Can the menu handle dietary flags?',
        a: 'Flags settle in the menu call — the tasting is written around them, so a pescatarian or gluten-free table gets a menu built that way, not a subtraction.',
      },
      {
        q: 'Wine pairings?',
        a: 'We write pairing notes for your bottles or your shop list; alcohol is client-supplied. The notes come free with the menu — the wine markup doesn’t.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['tasting menu Kauai private chef', 'premium dinner Kauai'],
  },
  {
    slug: 'menus/pupu-and-grazing',
    category: 'menu',
    title: 'Pūpū & Grazing Kauaʻi — The Standing Format',
    h1: 'Pūpū, grazing, the long golden hour.',
    parent: 'menus',
    meta: {
      description:
        'Pūpū and grazing catering on Kauaʻi: standing-format spreads and tray pass for welcome evenings, cocktail hours, and villa parties — quoted per event from published rates.',
    },
    intro:
      'The standing format: grazing boards, tray pass, the pūpū hour that becomes the evening. Quoted per event — the honest answer to “how much” depends on whether this is dinner or before-dinner.',
    sections: [
      {
        heading: 'Two registers',
        body: [
          'The pūpū hour — ninety minutes of tray pass and boards before a later dinner or as ceremony-adjacent cover. The grazing evening — the spread IS dinner, refreshed for hours, priced by headcount and depth.',
          'Both quote per event from the published structure; the quote states plainly whether the format feeds people or tides them over.',
        ],
      },
      {
        heading: 'The spread, representative',
        body: ['From the same sourcing as everything else:'],
        list: [
          'Poke done properly — the day’s fish, shoyu and sesame register',
          'Grilled and chilled skewers — beef, chicken, the vegetable versions',
          'The boards — Kunana Dairy cheeses, island fruit, crackers that matter',
          'Hot pass — taro fritters, the liliko‘i-glazed thing everyone remembers',
          'Sweet finish — liliko‘i bars, chocolate-dipped fruit',
        ],
      },
      {
        heading: 'Where it runs',
        body: [
          'Welcome evenings, wedding cocktail hours, retreat arrival nights, villa parties. Staffing runs one server per 15–20 standing guests at $55/hr; the bar cart pairs naturally ($850/4hr + $60/guest, alcohol client-supplied or licensed referral).',
        ],
        links: [
          { label: 'Villa parties', href: 'occasions/villa-party' },
          { label: 'The mobile bar', href: 'services/mobile-bar' },
        ],
      },
    ],
    faq: [
      {
        q: 'What does a pūpū hour for 30 cost?',
        a: 'A ninety-minute tray-pass hour for thirty typically quotes $1,500–$2,400 depending on depth, plus two servers at published hourlys. The grazing-evening version runs higher; the written quote fixes the number.',
      },
      {
        q: 'Can grazing replace dinner?',
        a: 'Yes — the grazing-evening format is dinner, stated plainly on the quote. The pūpū-hour format is not, and we’ll say so if your timeline needs a meal.',
      },
      {
        q: 'Dietary guests at a standing format?',
        a: 'Labeled boards and a dedicated flagged pass — dietary guests eat as well as everyone, without hovering hopefully at the wrong board.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['pupu catering Kauai', 'grazing table Kauai', 'cocktail hour catering Kauai'],
  },
  {
    slug: 'menus/breakfast-and-brunch',
    category: 'menu',
    title: 'Breakfast & Brunch Chef Kauaʻi — The Morning Table',
    h1: 'The morning table, done properly.',
    parent: 'menus',
    meta: {
      description:
        'Private breakfast and brunch service on Kauaʻi: estate-week mornings, recovery brunches, holiday tables — island fruit at actual ripeness, priced from the Table band.',
    },
    intro:
      'Mornings are the Stay Chef week’s quiet glory — and standalone brunch is its own event format: recovery brunches, holiday mornings, the last-day table before the airport. Priced from the Table band.',
    sections: [
      {
        heading: 'The estate-week morning',
        body: [
          'Inside a Stay Chef week, breakfast is daily infrastructure: coffee ready when the house wakes, island fruit that’s actually ripe, eggs and pancakes for the kids, the good yogurt and granola, and a kitchen reset by the time the day starts.',
          'It’s the line item that converts families to the weekly format — nobody misses the resort buffet.',
        ],
        links: [{ label: 'Stay Chef weeks', href: 'stay-chef' }],
      },
      {
        heading: 'The standalone brunch',
        body: [
          'Quoted per event from the Table band logic ($125–$150/guest register, lighter formats quote lighter): the wedding-week recovery brunch, the holiday-morning table, the birthday-that’s-really-about-mimosas. Coffee that never stops; service that reads the morning’s pace.',
        ],
        links: [{ label: 'Recovery brunches', href: 'weddings/recovery-brunch' }],
      },
      {
        heading: 'What “local” means at breakfast',
        body: [
          'Apple bananas, papaya with lime, whatever the fruit stand had, island eggs when the farm has them, Portuguese-sausage register where the table wants it. Breakfast sourcing is the week’s most honest — the menu follows the fruit, not the flyer.',
        ],
      },
    ],
    faq: [
      {
        q: 'What does brunch for 20 cost?',
        a: 'Brunch formats quote from the Table band register — typically $85–$125 per guest depending on spread and service — plus staffing at published hourlys and the fee stack itemized. The written quote fixes the line.',
      },
      {
        q: 'Is breakfast included in Stay Chef?',
        a: 'Breakfast service is part of the day-rate rhythm — the day rate covers the chef’s day; groceries run at cost with receipts. The quote itemizes what the week’s mornings look like.',
      },
      {
        q: 'Can you do an early breakfast before an excursion?',
        a: 'Yes — the 6 a.m. coffee-and-go spread before a boat day is a standard move, planned in the menu call.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['brunch chef Kauai', 'private breakfast Kauai', 'breakfast catering Kauai'],
  },
  {
    slug: 'menus/vegetarian-vegan',
    category: 'menu',
    title: 'Vegetarian & Vegan Private Chef Kauaʻi — The Farms Carry It',
    h1: 'Plant-forward menus the island makes easy.',
    parent: 'menus',
    meta: {
      description:
        'Vegetarian and vegan private chef menus on Kauaʻi: plant-forward coursed dinners at published rates, the farms doing the heavy lifting — a cuisine, never a subtraction.',
    },
    intro:
      'Kauaʻi is the easiest island in Hawaiʻi to cook plant-forward on: the farms are that good. Vegetarian and vegan menus run at the same published bands — a cuisine, never a subtraction.',
    sections: [
      {
        heading: 'The cuisine, not the compromise',
        body: [
          'A vegan Signature dinner here starts from the Saturday market’s best boxes and builds out: taro treated like the luxury it is, hearts of palm, mushrooms with actual char, liliko‘i doing dessert’s heavy lifting. The omnivore at the table doesn’t notice the register — that’s the test.',
          PROVENANCE,
        ],
      },
      {
        heading: 'Mixed tables, solved',
        body: [
          'Most tables are mixed: two vegans, six omnivores, one kid. Courses are built so the plant-based plates are dishes in their own right and the table shares most of the menu — no separate “veggie plate” exile.',
        ],
        links: [{ label: 'Dietary service, in depth', href: 'services/dietary' }],
      },
      {
        heading: 'The retreat-grade version',
        body: [
          'Multi-day plant-based programs — Ayurvedic-fluent weeks, detox formats — are a named product line for retreats, labeled dish by dish across the stay.',
        ],
        links: [{ label: 'Retreat dietary protocols', href: 'retreat-catering/dietary-protocols' }],
      },
    ],
    faq: [
      {
        q: 'Does a vegan menu cost the same?',
        a: 'Yes — the published bands hold. Plant-based cooking on Kauaʻi is sourcing-rich, not surcharge-worthy; the fee stack itemizes the same as every dinner.',
      },
      {
        q: 'Can you do a fully vegan tasting menu?',
        a: 'Yes — Premium band, five to seven courses, written from the week’s market. Some of our best-reviewed tables have been fully plant-based.',
      },
      {
        q: 'Vegetarian kids alongside?',
        a: 'Handled in the menu call — kids’ plates price honestly inside the quote, whatever the table’s register.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['vegetarian private chef Kauai', 'vegan chef Kauai', 'plant based chef Kauai'],
  },
  {
    slug: 'menus/gluten-free',
    category: 'menu',
    title: 'Gluten-Free Private Chef Kauaʻi — Disciplined, Not Apologetic',
    h1: 'Gluten-free, cooked with discipline.',
    parent: 'menus',
    meta: {
      description:
        'Gluten-free private chef menus on Kauaʻi: celiac-aware prep with dedicated equipment and sequenced service, at published rates — the honest paragraph about controls included, in writing.',
    },
    intro:
      'Gluten-free on Kauaʻi is a discipline question, not a menu question: the island’s food is naturally GF-leaning — fish, rice, taro, fruit — and the controls are what matter. Published bands; the honest controls paragraph, in writing.',
    sections: [
      {
        heading: 'The controls, stated plainly',
        body: [
          'Dedicated boards and pans, sequenced prep (GF first), separate oil, labeled storage, and service that knows which plate is which. We describe exactly these controls in writing before you commit — because for celiac guests, the description IS the product.',
          'The honest limit, also stated: we cook in rental kitchens, not certified facilities. Airborne flour in a kitchen that baked yesterday is a real thing; where risk tolerance is zero, we say what we can and cannot guarantee.',
        ],
      },
      {
        heading: 'The menu register',
        body: [
          'No sad substitutions: the day-boat fish was always GF, the taro was always GF, the dessert becomes liliko‘i panna cotta instead of a “flourless” apology. The table shares the menu; the celiac guest eats the same courses, controlled.',
        ],
        links: [{ label: 'The dietary guide', href: 'guides/dietary' }],
      },
      {
        heading: 'Every format holds',
        body: [
          'Dinners, Stay Chef weeks, retreat tables, wedding weeks — the controls travel with the crew. Retreats with celiac guests run the same protocol across every meal of the program.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is gluten-free service more expensive?',
        a: 'No — published bands hold. The cost is discipline, not ingredients, and discipline is included.',
      },
      {
        q: 'Safe for celiac guests?',
        a: 'With the stated controls, our celiac guests eat confidently — and the written controls paragraph lets you judge fit before committing. Severe-sensitivity edge cases get the honest answer, not the reassuring one.',
      },
      {
        q: 'Can the whole table eat GF without noticing?',
        a: 'Yes — often the cleanest solution. Kauaʻi’s cuisine makes it easy; nobody misses anything.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['gluten free private chef Kauai', 'celiac chef Kauai'],
  },
  {
    slug: 'menus/kids',
    category: 'menu',
    title: 'Kids’ Menu Private Chef Kauaʻi — Real Food, Smaller',
    h1: 'The kids’ table, taken seriously.',
    parent: 'menus',
    meta: {
      description:
        'Kids’ menus from a Kauaʻi private chef: real food sized and seasoned for small people, early seatings, allergy-safe prep — priced honestly inside the family quote.',
    },
    intro:
      'The kids’ table gets real food sized down, not a beige compromise: the same fish, less ceremony; the vegetables they’ll actually eat, cooked properly. Priced honestly inside the family quote.',
    sections: [
      {
        heading: 'The philosophy',
        body: [
          'Kids eat early, eat well, and eat food that respects them: grilled fish with rice, the pasta done properly, chicken that was never a nugget but might convert a nugget loyalist. And when the answer is buttered pasta three nights running — the pasta will be excellent.',
          'The menu call includes the kids’ actual preferences and the parents’ actual ambitions; the menu lands somewhere honest between.',
        ],
      },
      {
        heading: 'Logistics of the split table',
        body: [
          'Kids’ seating at five-thirty, adults at seven-thirty, one kitchen running both from the same market bag. On Stay Chef weeks the rhythm becomes infrastructure: breakfasts at their hour, beach coolers, the early dinner.',
        ],
        links: [{ label: 'Kid-friendly service, in depth', href: 'services/kids-menus' }],
      },
      {
        heading: 'Allergies, first',
        body: [
          'Kids’ allergies get the strictest controls in the kitchen: separate prep, labeled plates, and a house that stays nut-free for the whole booking when it needs to. Settled in the menu call, before any shopping.',
        ],
      },
    ],
    faq: [
      {
        q: 'What do kids’ plates cost?',
        a: 'Honest portions at honest prices, itemized inside the family quote — kids don’t carry the full adult per-guest band. The quote shows both lines.',
      },
      {
        q: 'Can the kids eat what we eat?',
        a: 'Often yes and happily — the same courses, simplified plating, earlier hour. Adventurous kids are the kitchen’s favorite critics.',
      },
      {
        q: 'Do you do a kids’ cooking session?',
        a: 'Yes — family cooking afternoons where the kids make lunch are some of the best hours we cook. Quoted from the published class structure.',
        links: [{ label: 'Cooking classes', href: '/kauai/services/cooking-classes' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['kids menu private chef Kauai', 'family friendly chef Kauai'],
  },
];

/** Kauaʻi pricing cluster (Table 4.2.3e rows 1–6). */
const pricingPages: ContentRecord[] = [
  {
    slug: 'private-chef-cost',
    category: 'pricing',
    title: 'How Much Does a Private Chef Cost on Kauaʻi? (2026 Rates)',
    h1: 'What a private chef costs on Kauaʻi.',
    parent: 'pricing',
    meta: {
      description:
        'Private chef cost on Kauaʻi in 2026: $125–$350 per guest by tier, Stay Chef from $1,100/day, Date Night $650–$950 — plus the honest cost drivers, island grocery reality, and the fee stack.',
    },
    intro:
      'The honest answer with the honest range: $125–$350 a guest depending on tier, or from $1,100 a day for multi-day service. Here’s what moves the number — and what a week actually totals.',
    sections: [
      {
        heading: 'The short answer',
        body: ['From the published Kauaʻi card:'],
        list: [
          'Table (family-style) — $125–$150 per guest',
          'Signature (coursed) — $150–$250 per guest',
          'Premium (tasting) — $250–$350 per guest',
          'Chef’s Table — from $350 per guest',
          'Date Night (two) — $650–$950 fixed',
          'Stay Chef (multi-day) — from $1,100 per day + groceries at cost',
        ],
      },
      {
        heading: 'The five cost drivers',
        body: ['In order of weight:'],
        list: [
          'Guest count — per-guest pricing means headcount is the multiplier',
          'Menu tier — Table to Chef’s Table spans $125–$350+ per guest',
          'Hawaiʻi grocery prices — 31–53% above mainland; why groceries sit inside dinner bands and at cost on stays',
          'Date — December and holiday weeks compress the calendar first',
          'Crew size — servers $55/hr, sous chefs $75/hr, 4-hour floor',
        ],
      },
      {
        heading: 'Worked examples (illustrative)',
        body: [
          'Four guests, Signature mid-band ($200): $800 for the evening, groceries included. Eight at Table top ($150) plus a server for four hours: $1,200 + $220. Twelve at Premium ($300) with a server and a sous: $3,600 + $520. Each then adds the shore surcharge where applicable, 20% service, and GET up to 4.7120% — on their own lines.',
          'A Stay Chef week (7 days) runs from $7,700 for the chef’s time plus groceries at cost — the full worked math lives on the Stay Chef cost page.',
        ],
        links: [{ label: 'Stay Chef cost, worked', href: 'pricing/stay-chef-cost' }],
      },
      {
        heading: 'What “all-inclusive” usually hides',
        body: [
          'One Kauaʻi competitor advertises all-inclusive at $200–$300 per person. Ask what the grocery allowance is, what the service charge covers, and what happens at twelve guests versus six. Our bands are published with groceries inside, the fee stack itemized, and the written quote fixed before the deposit — the comparison is invited.',
        ],
        links: [{ label: 'Us vs. the alternatives', href: 'compare/private-chef-vs-restaurant' }],
      },
    ],
    faq: [
      {
        q: 'Is a private chef cheaper than dining out on Kauaʻi?',
        a: 'For groups of 6–12 at dinner, often comparable or better — and nobody drives. A Signature dinner at $200/guest against a resort dining room’s entrees, wine markup, and transport is usually the better evening at a similar number.',
        links: [{ label: 'Chef vs. restaurant, compared', href: '/kauai/compare/private-chef-vs-restaurant' }],
      },
      {
        q: 'What’s the minimum spend?',
        a: 'Two-person evenings price as Date Night ($650–$950 fixed); per-guest bands apply from there up. There is no separate booking fee — the quote contains everything.',
      },
      {
        q: 'Do prices change by season?',
        a: 'The published card holds year-round. What changes in December is availability — dates compress — so early inquiry and the 50% deposit are the whole game.',
      },
    ],
    cta: { ...CTA_QUOTE, secondaryLabel: 'Estimate your table', secondaryHref: 'pricing/estimate' },
    keywords: ['how much does a private chef cost Kauai', 'private chef cost Kauai 2026'],
  },
  {
    slug: 'pricing/stay-chef-cost',
    category: 'pricing',
    title: 'Kauaʻi Chef Week Cost — Stay Chef Math, Worked by the Day',
    h1: 'What a chef week costs, worked.',
    parent: 'pricing',
    meta: {
      description:
        'Stay Chef cost on Kauaʻi worked day by day: from $1,100/day plus groceries at cost — a 7-day estate week itemized, with staffing, surcharges, and the fee stack on their own lines.',
    },
    intro:
      'Nobody else on the island publishes multi-day chef pricing. Here is a seven-day estate week worked line by line from the published card — the only weekly math on Kauaʻi.',
    sections: [
      {
        heading: 'The worked week (illustrative)',
        body: [
          'Seven days, ten guests, one staffed celebration night midweek. Every line traces to the published rate card; your quote itemizes your actual week the same way.',
        ],
      },
      {
        heading: 'Why day-rate beats per-meal',
        body: [
          'Pricing a week as fourteen separate “events” means fourteen minimums, fourteen setups, and a menu that never learns the table. The day rate prices the chef’s day once and lets the week breathe — breakfast appears, the beach cooler happens, dinner lands when the light does.',
          'Against the estate rental itself ($3,750–$8,250/night on the bluff corridor), the chef week is the line that makes the rest of the spend make sense.',
        ],
      },
      {
        heading: 'Groceries at cost, on an island',
        body: [
          'Kauaʻi food costs run 31–53% above the mainland. At-cost with receipts means you pay the true price of the week’s fish and greens — visible, auditable, never a padded allowance. The receipts envelope is part of the product.',
        ],
        links: [{ label: 'Groceries at cost, explained', href: 'guides/groceries-at-cost' }],
      },
    ],
    priceTable: {
      title: 'Illustrative 7-day estate week, 10 guests',
      rows: [
        { label: 'Stay Chef day rate × 7', value: 'from $7,700', note: 'From $1,100/day — planning, shopping, cooking, service, reset' },
        { label: 'Celebration-night staffing', value: '$520', note: 'Server ($55/hr) + sous ($75/hr) × 4-hr floor' },
        { label: 'Shore surcharge × 7', value: '$350–$525', note: '$50–$75/service day, Princeville or Poʻipū' },
        { label: 'Groceries', value: 'at cost', note: 'Receipts attached; island prices run 31–53% above mainland' },
        { label: 'Service charge', value: '20%', note: 'Itemized on its own line' },
        { label: 'Hawaiʻi GET', value: 'up to 4.7120%', note: 'On its own line, always' },
      ],
      footnote: `Illustrative math on published rates — not a quote. ${FEE_FOOTNOTE}`,
    },
    faq: [
      {
        q: 'Is there a weekly discount?',
        a: 'No invented discounts — the day rate is the published rate, and the written quote is the confirmed total. The honesty is the discount: you see every line.',
      },
      {
        q: 'Can the week include days off for the chef?',
        a: 'Yes — rest-day dinners you cook yourselves, restaurant nights you’ve booked: the quote charges only serviced days. The rhythm is yours; the math follows it.',
      },
      {
        q: 'What if our group is 16, not 10?',
        a: 'The day rate holds; staffing scales at published hourlys on bigger dinner nights, and groceries at cost scale honestly with appetites.',
      },
    ],
    cta: { ...CTA_QUOTE, secondaryLabel: 'The Stay Chef service', secondaryHref: 'stay-chef' },
    keywords: ['Kauai chef week cost', 'stay chef cost Kauai', 'weekly private chef Kauai'],
  },
  {
    slug: 'pricing/fee-stack',
    category: 'pricing',
    title: 'Service Charge & Tax Kauaʻi — The Fee Stack, Explained',
    h1: 'The fee stack, on its own lines.',
    parent: 'pricing',
    meta: {
      description:
        'myCHEF Kauaʻi fees explained: 20% service charge, Hawaiʻi GET up to 4.7120% (valid through 12/31/2030), 50% deposit — every fee on its own line, before you commit.',
    },
    intro:
      'Every myCHEF Kauaʻi quote shows the same fee stack on its own lines. This page is the long version of those lines — what they are, why they exist, and how they compare to the island’s norms.',
    sections: [
      {
        heading: 'The lines, verbatim',
        body: [
          FEE_FOOTNOTE,
          'That footnote appears on every quote and every rate card on this site. It is not marketing copy; it is the fee policy.',
        ],
      },
      {
        heading: 'The 20%, compared',
        body: [
          'Island venues and resorts commonly charge 23–25% service; at least one Kauaʻi caterer adds 25% gratuity across all food and drink. Our 20% is lower, and it is itemized — on a $10,000 event week, the five-point difference is $500 you can see.',
          'What it covers: coordination, menu writing, site and kitchen checks, the crew’s logistics, and the office that answers within a day. What it is not: a gratuity. Tips are voluntary, always, printed as such.',
        ],
      },
      {
        heading: 'GET, honestly',
        body: [
          'Hawaiʻi’s General Excise Tax applies to services including catering. We itemize it at the applicable rate — up to 4.7120%, valid through 12/31/2030 per current state guidance — rather than burying it in “prices.” If the law changes, the line changes; it will never be hidden.',
        ],
      },
      {
        heading: 'The 50% deposit',
        body: [
          'The deposit locks the date only after you have the written quote. Kauaʻi runs inquiry-first — we never hold a date we can’t crew — so the deposit conversation only happens when the quote and the crew both exist.',
        ],
        links: [{ label: 'Booking terms', href: 'legal' }],
      },
    ],
    faq: [
      {
        q: 'Is the 20% service charge a tip?',
        a: 'No — it covers coordination and operations, itemized on its own line. Gratuity is always voluntary and never assumed.',
      },
      {
        q: 'Why do some competitors’ quotes look cheaper?',
        a: 'Check the fee lines: 25% gratuity across all food and drink, bundled “service,” and grocery allowances are where the difference hides. Compare totals line by line — ours are built for it.',
      },
      {
        q: 'When is the balance due?',
        a: 'Booking terms render as proposed until counsel locks them: the 50% deposit locks dates; balance timing is stated in your quote. Terms page carries the cancellation and force-majeure details.',
        links: [{ label: 'Booking terms', href: '/kauai/legal' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['Kauai catering service charge', 'Hawaii GET catering', 'private chef fees Kauai'],
  },
  {
    slug: 'pricing/travel-zones',
    category: 'pricing',
    title: 'Travel Zones Kauaʻi — Shore Surcharges, Published',
    h1: 'Travel zones, published like everything else.',
    parent: 'pricing',
    meta: {
      description:
        'Kauaʻi private chef travel zones: Kāpaʻa–Līhuʻe base (no surcharge), Princeville and Poʻipū $50–$75 per service day, far-North past Hanalei quoted at inquiry with the 72-hour bridge clause.',
    },
    intro:
      'Nobody on Kauaʻi publishes travel pricing. Here it is: base zone free, shores at $50–$75 per service day, far-North quoted at inquiry — and the bridge clause in writing.',
    sections: [
      {
        heading: 'The zones',
        body: ['Three zones, no fine print:'],
        list: [
          'Base — Kāpaʻa, Līhuʻe, and near corridors: no surcharge',
          'Shore — Princeville, Hanalei, Kīlauea, Poʻipū, Kōloa: $50–$75 per service day',
          'Far North — Wainiha, Hāʻena, past the Hanalei bridge: quoted at inquiry, 72-hour notice',
        ],
      },
      {
        heading: 'What the surcharge actually buys',
        body: [
          'An hour each way with a cooler, a kit, and a crew — priced as a flat line rather than a mileage formula, because a dinner quote shouldn’t require odometer math. On multi-day stays it applies per service day, itemized.',
        ],
      },
      {
        heading: 'The bridge clause, in context',
        body: [
          'Everything past Hanalei crosses one one-lane bridge and one stretch of highway that HDOT closes for documented work and weather. Far-North service therefore carries 72-hour notice and a written term: documented closures reschedule rather than forfeit. Your deposit does not evaporate over a landslide.',
        ],
        links: [{ label: 'The Hanalei bridge clause, in full', href: 'guides/hanalei-bridge-clause' }],
      },
      {
        heading: 'The west side, honestly',
        body: [
          'Waimea, Hanapēpē, Kalāheo: quoted at inquiry. The west side’s luxury rental stock is thin, and we’d rather quote the drive honestly per event than imply standing coverage we don’t run.',
        ],
        links: [{ label: 'Coverage, mapped', href: 'coverage' }],
      },
    ],
    faq: [
      {
        q: 'Is Hanalei “far North” for pricing?',
        a: 'No — Hanalei sits inside the standard $50–$75 shore surcharge. The far-North inquiry zone begins past the bridge: Wainiha and Hāʻena.',
      },
      {
        q: 'Do surcharges apply to multi-day stays?',
        a: 'Yes, per service day — a seven-day Princeville week carries seven surcharge lines, itemized. No bundling, no hiding.',
      },
      {
        q: 'What if the bridge closes mid-stay?',
        a: 'The written clause governs: documented closures reschedule the service rather than forfeit it. We track HDOT notices and plan shopping before crossings.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['Kauai private chef travel fee', 'Princeville chef surcharge', 'Hanalei travel fee chef'],
  },
  {
    slug: 'pricing/estimate',
    category: 'pricing',
    title: 'Private Chef Estimate Kauaʻi — Two Minutes, Honest Ranges',
    h1: 'The Kauaʻi estimator.',
    parent: 'pricing',
    meta: {
      description:
        'Estimate a Kauaʻi private chef booking: pick service, tier, headcount, and shore — get an honest range built from published rates, then a written quote that is the confirmed total.',
    },
    intro:
      'An honest range, built from the published card — no email required. The estimator lives on the pricing page; the written quote it leads to is the confirmed total.',
    sections: [
      {
        heading: 'How the estimate works',
        body: [
          'Four inputs — service, menu tier, headcount, shore — multiplied against the published rate card, with the fee stack shown on its own lines. The output is a range, honestly labeled, and marked “estimate only” because the written quote is the confirmed total.',
          'Far-North service past Hanalei returns “quoted at inquiry” rather than a number — because the road, not the distance, is the variable, and we don’t fake precision.',
        ],
        links: [{ label: 'Open the estimator', href: 'pricing' }],
      },
      {
        heading: 'Why ranges, not point prices',
        body: [
          'Published bands exist because the fish and the farms set the week’s exact number inside them. A range that’s honest beats a point price that moves. The written quote converts the range into the fixed total before any deposit.',
        ],
      },
      {
        heading: 'What the estimate includes',
        body: ['Every line, like the quote it precedes:'],
        list: [
          'Per-guest or day-rate food pricing from the published bands',
          'Staffing at $55/hr servers, $75/hr sous where the format needs it',
          'Shore surcharges — $50–$75 to Princeville or Poʻipū',
          '20% service and GET up to 4.7120% on their own lines',
        ],
      },
    ],
    faq: [
      {
        q: 'Is the estimate binding?',
        a: 'No — it’s labeled “estimate only” for exactly that reason. The written quote is the confirmed total, and it arrives before any deposit.',
      },
      {
      q: 'Do I need to give my email to see a price?',
        a: 'No. The estimator is open; the inquiry form is where the written quote begins. Price opacity is a sales tactic, not a necessity.',
      },
      {
        q: 'Why does far-North return no number?',
        a: 'Because past the Hanalei bridge the road is the variable — closures, notice windows, provisioning plans. We quote it at inquiry rather than invent precision.',
      },
    ],
    cta: { ...CTA_QUOTE, secondaryLabel: 'The full rate card', secondaryHref: 'pricing' },
    keywords: ['private chef estimate Kauai', 'Kauai chef price calculator'],
  },
  {
    slug: 'pricing/two-shore-coverage',
    category: 'pricing',
    title: 'Two-Shore Coverage Kauaʻi — North and South, One Quote',
    h1: 'Both shores, one written quote.',
    parent: 'pricing',
    meta: {
      description:
        'How two-shore coverage prices on Kauaʻi: split stays and reunion groups across North and South shores — surcharges itemized per service day, one contract, one written quote.',
    },
    intro:
      'Kauaʻi groups split across shores — a Princeville house and a Poʻipū house, or a stay that moves midweek. Two-shore coverage is one contract with surcharges itemized per service day.',
    sections: [
      {
        heading: 'The split-stay pattern',
        body: [
          'The classic Kauaʻi fortnight: a North Shore week in the summer prime, then a South Shore week for the dry-side finish — or the reverse, chasing the seasons. Chef service follows: same crew, same menu file, one contract covering both addresses.',
          'Pricing stays honest per day: the $50–$75 shore surcharge itemizes per service day at each address; base-zone days carry none. The quote shows the whole trip on one page.',
        ],
      },
      {
        heading: 'The multi-house reunion',
        body: [
          'Two rental houses, one family, dinners alternating shores — a Kauaʻi specialty. Per-guest pricing makes the family math clean; alternating service days keep surcharges minimal; one quote covers the whole reunion.',
        ],
        links: [{ label: 'Family reunions', href: 'occasions/family-reunion' }],
      },
      {
        heading: 'Where coverage honestly ends',
        body: [
          'Far-North past the Hanalei bridge runs on the 72-hour clause; the west side quotes at inquiry. Two-shore coverage means the whole island’s inhabited arc — with the edges stated, not implied.',
        ],
        links: [
          { label: 'Travel zones', href: 'pricing/travel-zones' },
          { label: 'Coverage, mapped', href: 'coverage' },
        ],
      },
    ],
    faq: [
      {
        q: 'Does switching shores mid-stay cost extra?',
        a: 'Only the published per-service-day surcharge at each shore address — no “transfer” fees. The quote itemizes the trip day by day.',
      },
      {
        q: 'Can one chef serve two houses on the same day?',
        a: 'One dinner service per evening per crew — alternating evenings across houses is the pattern that works. Larger groups wanting simultaneous service get a second crew quoted honestly.',
      },
      {
        q: 'Is two-shore coverage available for weddings?',
        a: 'Yes — rehearsal south, reception north happens. One wedding-week contract covers both, with surcharges itemized per event day.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['Kauai two shore private chef', 'split stay chef Kauai', 'North South shore chef Kauai'],
  },
];

/** Kauaʻi compare pages (Table 4.2.3e rows 7–10) — category 'guide', CompareFrame voice. */
const comparePages: ContentRecord[] = [
  {
    slug: 'compare/private-chef-vs-restaurant',
    category: 'guide',
    title: 'Private Chef vs Restaurant on Kauaʻi — The Honest Comparison',
    h1: 'Chef at the house, or the dining room?',
    parent: 'pricing',
    meta: {
      description:
        'Private chef vs restaurant on Kauaʻi: when each wins — per-person math, the drive factor, group economics, and the evenings where the restaurant is simply right.',
    },
    intro:
      'The honest comparison — including the evenings where we lose. A private chef isn’t always the answer on Kauaʻi; here’s when each wins.',
    sections: [
      {
        heading: 'When the restaurant wins',
        body: [
          'Two people wanting the scene and the walk along the water after. The night you want a bar’s energy. Spontaneity — restaurants take the 6:15 walk-in; we run inquiry-first. If the evening is about being out, be out.',
        ],
      },
      {
        heading: 'When the chef wins',
        body: [
          'Groups of 6–12: the restaurant version is a set menu, a long table the room resents, and a drive home in the dark on a two-lane road. The chef version is a coursed dinner at your own table — $150–$250 a guest against resort entrees, wine markup, and transport — where the kids’ bedtime doesn’t end the evening.',
          'Multi-night stays: seven restaurant dinners is a logistics chain; one Stay Chef week is a rhythm. And dietary-heavy tables: eleven flags handled in the menu call versus seven separate kitchen negotiations.',
        ],
      },
      {
        heading: 'The money, side by side (illustrative)',
        body: [
          'Eight guests, Signature mid-band: $1,600 + a server ($220) + fee stack, at your table. Eight at a resort dining room: entrees $45–$65 each, wine at restaurant markup, dessert, tax, tip, and two cars’ worth of driving. The totals land closer than expected; the evenings aren’t comparable.',
        ],
        links: [{ label: 'The published card', href: 'pricing' }],
      },
      {
        heading: 'The Kauaʻi-specific factor: the drive',
        body: [
          'The island’s best tables concentrate in a few corridors; the good rentals are everywhere else. Forty minutes of two-lane road each way is the real cost of dining out — and the reason “the restaurant is wherever you’re staying” lands so hard here.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is a private chef more expensive than eating out on Kauaʻi?',
        a: 'For couples at dinner, usually yes. For groups of 6–12, usually comparable — and the evening is better. For week-long stays, the Stay Chef math often wins outright once transport and markup count.',
      },
      {
        q: 'Can we mix — some dinners out, some in?',
        a: 'That’s the smart pattern: two or three chef dinners across the week, the food-truck lunches, the one great restaurant night. We’ll even tell you which restaurant night to keep.',
      },
      {
        q: 'What about the view?',
        a: 'Fair point — some rooms have the view your rental doesn’t. But bluff estates and bay-side verandas are their own dining rooms; the best view is often the one you already rented.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef vs restaurant Kauai', 'is a private chef worth it Kauai'],
  },
  {
    slug: 'compare/private-vs-personal-chef',
    category: 'guide',
    title: 'Private Chef vs Personal Chef on Kauaʻi — Which One You Need',
    h1: 'Private or personal? The honest split.',
    parent: 'pricing',
    meta: {
      description:
        'Private chef vs personal chef on Kauaʻi: event service ($125–$350/guest) vs recurring household service ($550–$1,200/week) — definitions, pricing, and which one your trip or household actually needs.',
    },
    intro:
      'The words blur online; the services don’t. Private chef means event service — dinners, stays, celebrations. Personal chef means recurring household rhythm. Here’s which one your situation actually needs.',
    sections: [
      {
        heading: 'The definitions that matter',
        body: [
          'A private chef cooks an event: the anniversary dinner, the wedding week, the Stay Chef estate stay. Pricing is per guest ($125–$350 by tier) or per day (from $1,100), with groceries inside dinner bands and at cost on stays.',
          'A personal chef runs a household’s food week: the weekly cook day, the stocked fridge, menus that learn the family. Pricing is the published weekly band — $550–$1,200 a week on Kauaʻi, groceries at cost.',
        ],
      },
      {
        heading: 'Which one you need, by situation',
        body: ['The decision tree, honestly:'],
        list: [
          'Visiting for a week, want dinners handled → private chef (Stay Chef or per-dinner)',
          'Living here, want the week’s meals cooked → personal chef (weekly band)',
          'One special evening → private chef (per-guest bands or Date Night)',
          'A retreat or wedding → private chef (event contracts)',
          'Both, alternating → both — many households run weekly service plus event dinners',
        ],
        links: [
          { label: 'Private chef service', href: 'private-chef' },
          { label: 'Personal chef service', href: 'services/personal-chef' },
        ],
      },
      {
        heading: 'The pricing comparison',
        body: [
          'A weekly personal-chef cook day ($550–$1,200/week) feeds a household for days; a single private-chef dinner ($150–$250/guest) feeds an evening. They’re not competitors — they’re different products that happen to share a stove.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can the same chef do both?',
        a: 'Yes — same kitchen standard, same written-quote discipline. Many Kauaʻi households run a weekly cook day and book event dinners separately when the occasion lands.',
      },
      {
        q: 'Is a personal chef worth it for a small household?',
        a: 'At the $550 end for a couple’s week of dinners, the math compares to takeout done properly — with better food and no containers. Whether that’s “worth it” is honestly a lifestyle call, not a savings play.',
      },
      {
        q: 'Do personal chefs cook on-site?',
        a: 'Yes — the weekly cook day happens in your kitchen, with the fridge stocked and labeled by early afternoon and the kitchen left clean.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef vs personal chef Kauai', 'personal chef cost Kauai'],
  },
  {
    slug: 'compare/freelance-vs-mychef',
    category: 'guide',
    title: 'Freelance Chef vs myCHEF Kauaʻi — The Honest Trade-Offs',
    h1: 'The Facebook chef vs. the written quote.',
    parent: 'pricing',
    meta: {
      description:
        'Freelance private chef vs myCHEF on Kauaʻi: price opacity vs published rates, no backup vs confirmed crews, handshake vs written quote — the honest trade-offs, including when a freelancer is right.',
    },
    intro:
      'Half of Kauaʻi’s private-chef market is one person with an Instagram and a Venmo. Sometimes that’s fine. Here’s the honest comparison — including the parts where the freelancer wins.',
    sections: [
      {
        heading: 'Where the freelancer wins',
        body: [
          'Price, sometimes: no office, no coordination layer. Flexibility, sometimes: a handshake can do things a contract can’t. And occasionally a brilliant cook working solo is exactly the right answer for a small casual dinner — we’ll say so.',
        ],
      },
      {
        heading: 'Where the structure wins',
        body: [
          'Everything that goes wrong at scale. The freelancer’s flu is your canceled anniversary dinner; our inquiry-first rule means we never hold a date we can’t crew, and the roster backs every booking. The freelancer’s price is a text message; ours is a written quote that is the confirmed total — 20% service and GET itemized, not discovered.',
          'Kauaʻi’s market reality sharpens this: half the island’s “chefs” don’t quote in writing at all. Of the fourteen operators we track, two publish any price. The written quote isn’t a feature; on this island it’s a category difference.',
        ],
        links: [{ label: 'How we vet chefs', href: 'how-we-vet-chefs' }],
      },
      {
        heading: 'The questions to ask either of us',
        body: ['Print this for any inquiry, ours included:'],
        list: [
          'Do I get a written quote that is the confirmed total?',
          'What happens if you’re sick on my date?',
          'Show me the service charge and tax lines.',
          'Who exactly is cooking, and what’s their background?',
          'What does the deposit lock, and when?',
        ],
      },
    ],
    faq: [
      {
        q: 'Is a freelancer cheaper?',
        a: 'Sometimes at the quote stage; the comparison that matters is total-at-the-end. Bundled “service,” grocery allowances, and day-of surprises are where informal pricing grows. Our written quote is the confirmed total.',
      },
      {
        q: 'What if my freelancer cancels?',
        a: 'That’s the structural risk: one person is one point of failure. Our roster model exists so a sick chef is a scheduling problem, not your problem.',
      },
      {
        q: 'Does myCHEF mark up the chef?',
        a: 'The 20% service charge is the coordination layer, itemized and lower than the island’s 23–25% norms. What it buys — vetting, backup, the written quote — is on this page to be judged.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['freelance chef vs service Kauai', 'hire private chef safely Kauai'],
  },
  {
    slug: 'compare/marketplace-vs-mychef',
    category: 'guide',
    title: 'Take a Chef vs myCHEF Kauaʻi — Marketplace vs Written Quote',
    h1: 'The marketplace vs. the written quote.',
    parent: 'pricing',
    meta: {
      description:
        'Chef marketplaces (Take a Chef and peers) vs myCHEF on Kauaʻi: bid-inbox pricing vs a published rate card, platform fees vs an itemized 20%, and why island logistics break marketplace models.',
    },
    intro:
      'The marketplace model: post a request, get bids from whoever’s available, hope the platform’s fee is the only surprise. The myCHEF model: published rates, a written quote, a roster we actually manage. On Kauaʻi, the difference is structural.',
    sections: [
      {
        heading: 'How the marketplace works — and where it bends',
        body: [
          'Marketplaces are matching engines: your request goes to a pool, bids come back, the platform takes its cut somewhere in the spread. On O‘ahu’s deep chef pool, matching works. On Kauaʻi — fourteen operators total, half without written quotes — the marketplace is matching you to the same thin pool with an extra fee in the middle.',
          'Bid pricing also hides the card: every proposal is its own universe of inclusions, and comparing them is work. Our rate card is one page; the quote is arithmetic on it.',
        ],
      },
      {
        heading: 'The Kauaʻi logistics problem',
        body: [
          'Marketplaces don’t know about the bridge. A chef bidding on your Hāʻena dinner from a profile photo has not necessarily thought about HDOT closures, 72-hour provisioning, or what happens when it rains on the one road. Our far-North clause exists because we run the road; the bid model has no place to put that clause.',
        ],
        links: [{ label: 'The bridge clause', href: 'guides/hanalei-bridge-clause' }],
      },
      {
        heading: 'Where the marketplace wins',
        body: [
          'Honesty requires this: breadth of choice for a casual dinner, sometimes price discovery at the budget end, and instant gratification — bids arrive fast. If your evening is low-stakes and price-led, a marketplace can be the right tool.',
          'For the estate week, the wedding, the retreat, or any date that must happen — the written quote and the managed roster exist for exactly those stakes.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is myCHEF more expensive than a marketplace?',
        a: 'Compare totals, not headlines: platform fees, bid variance, and grocery allowances blur marketplace totals. Our 20% service is itemized, the quote is the confirmed total, and the rate card is published.',
      },
      {
        q: 'Do marketplaces vet Kauaʻi chefs?',
        a: 'Profile-vetting varies by platform; our roster is managed directly — menus reviewed, kitchens assessed, insurance verified. The vetting page states the standard.',
        links: [{ label: 'How we vet chefs', href: '/kauai/how-we-vet-chefs' }],
      },
      {
        q: 'Why not just list on marketplaces too?',
        a: 'Because the written quote is the product. A bid inbox can’t carry the bridge clause, the fee-stack discipline, or the inquiry-first honesty rule.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['take a chef Kauai alternative', 'chef marketplace Kauai', 'hire a chef Kauai direct'],
  },
];

/** Kauaʻi guides cluster (Table 4.2.3f rows 1–13): index + 12 guides. */
const guides: ContentRecord[] = [
  {
    slug: 'guides',
    category: 'guide',
    title: 'Kauaʻi Private Chef Guides — Planning, Honestly',
    h1: 'The planning library.',
    parent: '',
    meta: {
      description:
        'Planning guides for private chef service on Kauaʻi: how booking works, lead times, the Hanalei bridge clause, shore seasonality, groceries at cost, kitchens, weather, and the fee stack.',
    },
    intro: 'Everything we wish every inquiry already knew — written plainly, linked honestly, and updated when the island changes.',
    sections: [
      {
        heading: 'Booking and pricing',
        links: [
          { label: 'How it works', href: 'guides/how-it-works' },
          { label: 'How to hire a private chef on Kauaʻi', href: 'guides/how-to-hire' },
          { label: 'Booking lead times', href: 'guides/booking-lead-times' },
        ],
      },
      {
        heading: 'The island, honestly',
        links: [
          { label: 'The Hanalei bridge clause', href: 'guides/hanalei-bridge-clause' },
          { label: 'North Shore vs South Shore seasonality', href: 'guides/shore-seasonality' },
          { label: 'Weather backup planning', href: 'guides/weather-backup' },
        ],
      },
      {
        heading: 'The practical stuff',
        links: [
          { label: 'What a villa kitchen needs', href: 'guides/villa-kitchen' },
          { label: 'Groceries at cost, explained', href: 'guides/groceries-at-cost' },
          { label: 'Grocery stocking, explained', href: 'guides/grocery-stocking' },
          { label: 'Dietary restrictions, in depth', href: 'guides/dietary' },
          { label: 'The cleanup standard', href: 'guides/cleanup-standard' },
          { label: 'Alcohol and bar service', href: 'guides/alcohol-and-bar' },
        ],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['Kauai private chef guide', 'planning private chef Kauai'],
  },
  {
    slug: 'guides/how-it-works',
    category: 'guide',
    title: 'How It Works — Booking a Private Chef on Kauaʻi',
    h1: 'From inquiry to first course.',
    parent: 'guides',
    meta: {
      description:
        'How booking a Kauaʻi private chef works: inquiry, written quote, 50% deposit, menu call, service day, cleanup — every step, with the honesty rules printed.',
    },
    intro: 'Six steps, no mysteries. Kauaʻi runs inquiry-first — the written quote comes before any date is held — and this page is the whole sequence.',
    sections: [
      {
        heading: 'The sequence',
        body: ['Every booking, the same six steps:'],
        list: [
          'Inquiry — dates, shore, headcount, occasion; two minutes',
          'Written quote — itemized: menu, staffing, travel, 20% service, GET up to 4.7120%',
          'Deposit — 50% locks the date; only ever after the quote',
          'Menu call — courses, dietary flags, timing, the kitchen check',
          'Service day — shopping that day, arrival before service, courses at the table’s pace',
          'The kitchen left clean — and the receipts envelope where groceries ran at cost',
        ],
      },
      {
        heading: 'The honesty rules, printed',
        body: [
          'We never hold a date we can’t crew — if the roster can’t cover your date, you hear it in the inquiry reply, not the week of. The written quote is the confirmed total; nothing is added later. And the deposit only ever follows the quote — never precedes it.',
        ],
        links: [{ label: 'The honesty register', href: 'trust' }],
      },
      {
        heading: 'Timelines',
        body: [
          'Inquiry to quote: within a day, honestly. Quote to deposit: your pace. Menu call: once the date is locked. Far-North service past Hanalei adds the 72-hour notice rule on top.',
        ],
        links: [{ label: 'Lead times by season', href: 'guides/booking-lead-times' }],
      },
    ],
    faq: [
      {
        q: 'How fast do you reply?',
        a: 'Within a day, honestly — with a written quote or an honest no. Kauaʻi’s chef pool is thin; we’d rather decline early than hold a date we can’t crew.',
      },
      {
        q: 'When do I pay?',
        a: 'The 50% deposit follows your approval of the written quote; balance timing is stated in the quote itself. No payment ever precedes the quote.',
      },
      {
        q: 'What if I need to change the menu?',
        a: 'Menu changes are normal until the menu call locks the shopping plan; after that, changes quote honestly if they move cost. The written quote updates in writing.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['how booking private chef Kauai works', 'Kauai chef booking process'],
  },
  {
    slug: 'guides/how-to-hire',
    category: 'guide',
    title: 'How to Hire a Private Chef on Kauaʻi — The Questions That Matter',
    h1: 'How to hire well on an island.',
    parent: 'guides',
    meta: {
      description:
        'How to hire a private chef on Kauaʻi: the questions that separate written-quote operators from handshake chefs, what published pricing protects you from, and red flags.',
    },
    intro: 'Fourteen operators, two with published prices, half without written quotes. Hiring well on Kauaʻi is a verification exercise — here’s the checklist.',
    sections: [
      {
        heading: 'The five questions',
        body: ['Ask any chef or service, us included:'],
        list: [
          'Do I get a written quote that is the confirmed total?',
          'Show me the service charge and tax lines before I commit.',
          'Who exactly is cooking — and what happens if they’re sick?',
          'Are groceries inside the price or billed after — and can I see receipts?',
          'What does the deposit lock, and what are the cancellation terms?',
        ],
      },
      {
        heading: 'The red flags',
        body: [
          'No written quote. A price that arrives as a phone call. “Service included” without a number. Grocery allowances with no receipts. And on Kauaʻi specifically: a far-North booking accepted without mentioning the bridge — that’s a chef who hasn’t driven the road.',
        ],
        links: [{ label: 'The bridge clause', href: 'guides/hanalei-bridge-clause' }],
      },
      {
        heading: 'Where to look',
        body: [
          'Concierge desks at the estate agencies arrange chef service — with a layer between you and the price. Marketplaces match you to the same thin pool with a fee in the middle. Direct operators with published rates are the rarest and simplest path — two of fourteen, by our count.',
        ],
        links: [{ label: 'Marketplace vs myCHEF', href: 'compare/marketplace-vs-mychef' }],
      },
    ],
    faq: [
      {
        q: 'Is published pricing really that rare on Kauaʻi?',
        a: 'Two of fourteen operators we track publish any price at all. Opacity isn’t malice — it’s habit — but the written quote is the consumer protection, and you should demand it from anyone.',
      },
      {
        q: 'Should I book through my villa’s concierge?',
        a: 'Concierges are useful for access and coordination; the trade is opacity and a markup layer. Booking direct with a written quote gives you the same island crews with the number in your hands first.',
      },
      {
        q: 'How early should I start?',
        a: 'Two to four weeks for dinners, a month-plus for weeks and weddings, sixty-to-ninety days for December. The lead-time guide breaks it down by season.',
        links: [{ label: 'Booking lead times', href: '/kauai/guides/booking-lead-times' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['how to hire a private chef Kauai', 'find private chef Kauai'],
  },
  {
    slug: 'guides/villa-kitchen',
    category: 'guide',
    title: 'Villa Kitchen Requirements — What We Need to Cook for You',
    h1: 'What a kitchen needs.',
    parent: 'guides',
    meta: {
      description:
        'What a Kauaʻi rental kitchen needs for private chef service: the honest minimums, what we bring, and why hotel rooms get declined — the kitchen gate, published.',
    },
    intro: 'The kitchen gate, published: four burners, an oven, counter space, running water. Most Kauaʻi rental kitchens pass easily; hotel rooms get declined, politely and early.',
    sections: [
      {
        heading: 'The minimums',
        body: ['The honest checklist:'],
        list: [
          'Four burners and an oven — the two-burner condo special caps the menu honestly',
          'Counter space — two clear feet of it, minimum',
          'Running water and a working sink',
          'A refrigerator with actual room in it',
          'Power that stays on (rural estates: we ask, kindly)',
        ],
      },
      {
      heading: 'What we bring',
        body: [
          'The kit the kitchen lacks: knives, boards, sheet pans, the good pans, plating tools, and specialty equipment per menu. What we can’t bring is the room itself — a wet bar with a microwave is not a kitchen, and we’ll tell you before you’ve paid anything.',
        ],
      },
      {
        heading: 'The check before the quote',
        body: [
          'Every inquiry includes the kitchen questions; photos help. Kauaʻi’s stock ranges from magazine-grade estate kitchens to plantation-house originals with 1960s ovens — we’ve cooked both. The check isn’t gatekeeping; it’s how the menu gets written for the kitchen you actually have.',
        ],
      },
      {
        heading: 'Edge cases, answered',
        body: [
          'Outdoor and estate-lawn service: we build a field kitchen where power and water allow — quoted with the site. Beach and boat formats: not our format — we cook where there’s a kitchen, and say so.',
        ],
      },
    ],
    faq: [
      {
        q: 'Our rental kitchen is small — is that a problem?',
        a: 'Small is fine; absent is not. Compact condo kitchens host Signature dinners weekly — the check confirms fit before the quote, and the menu respects the space.',
      },
      {
        q: 'Hotel suite with a kitchenette?',
        a: 'A true kitchenette (range, sink, fridge) can work for small tables; a coffee maker and minibar cannot. Send photos with the inquiry and we’ll tell you straight.',
      },
      {
        q: 'Do you charge for equipment?',
        a: 'The standard kit travels free. Specialty builds (a field kitchen for a lawn reception) itemize in the quote like everything else.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['villa kitchen requirements private chef', 'Kauai rental kitchen chef'],
  },
  {
    slug: 'guides/groceries-at-cost',
    category: 'guide',
    title: 'Groceries at Cost on Kauaʻi — What That Actually Means',
    h1: 'Groceries at cost, receipts attached.',
    parent: 'guides',
    meta: {
      description:
        'What “groceries at cost” means for Kauaʻi chef service: receipts attached, island food prices 31–53% above mainland, and why multi-day service bills food separately from the day rate.',
    },
    intro: 'Multi-day service bills groceries at cost with receipts. On an island where food runs 31–53% above mainland prices, that phrase deserves a page.',
    sections: [
      {
        heading: 'The mechanics',
        body: [
          'Your chef shops for your week — the Saturday Hanalei market, the island’s grocers, the fish that came in — and the receipts come back with the invoice. You pay exactly what the food cost. The service lines (day rate, staffing) are separate and fixed in the written quote.',
          'Contrast with the “grocery allowance” model: an estimated food budget, padded against island prices, kept whether spent or not. At-cost with receipts is the honest version.',
        ],
      },
      {
        heading: 'The island price reality',
        body: [
          'Hawaiʻi groceries run 31–53% above the mainland depending on category — milk and eggs at the high end, local produce and fish at the kind end. The receipts show the real numbers; the menu plan is built to shop smart: market greens, island beef, day-boat fish, and mainland luxuries only where they earn it.',
        ],
      },
      {
        heading: 'Why dinners work differently',
        body: [
          'Single dinners include groceries inside the per-guest band — one evening’s shopping is predictable. Weeks aren’t: your table’s appetite for ahi is yours, and at-cost is how you pay for the fish you actually ate rather than an average you didn’t.',
        ],
        links: [{ label: 'Stay Chef cost, worked', href: 'pricing/stay-chef-cost' }],
      },
    ],
    faq: [
      {
        q: 'Can I see the receipts?',
        a: 'Always — the receipts envelope (or its photo) is part of every at-cost booking. Auditing the week’s food spend line by line is your right, not an imposition.',
      },
      {
        q: 'What does a week of groceries for ten cost?',
        a: 'Honest range: it depends on the table. Island-smart menus lean on local produce and fish; tables that want imported luxuries see them on the receipts. The menu call sets expectations before the shopping starts.',
      },
      {
        q: 'Do you mark up groceries?',
        a: 'Never. At cost means at cost — receipts attached, no handling margin on food. The service lines are where the service is priced.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['groceries at cost private chef Kauai', 'Hawaii grocery prices chef'],
  },
  {
    slug: 'guides/grocery-stocking',
    category: 'guide',
    title: 'Grocery Stocking on Kauaʻi — The Arrival-Day Guide',
    h1: 'Stocking, explained.',
    parent: 'guides',
    meta: {
      description:
        'How villa grocery stocking works on Kauaʻi: what lands in the fridge, what it costs (at cost, receipts attached), and why the island’s geography makes the first morning matter.',
    },
    intro: 'The arrival-day service, explained: what lands in the fridge, how it prices, and why on Kauaʻi this is logistics, not luxury.',
    sections: [
      {
        heading: 'The island logic',
        body: [
          'Kauaʻi’s good rentals sit far from full groceries: Hanalei’s market closes early, the North Shore’s options thin after dark, and the nearest real store can be forty minutes of two-lane road. Landing at six p.m. to an empty fridge means your first vacation hour is a grocery run.',
          'Stocking deletes that hour. The fridge is full and cold before you land; the first morning makes itself.',
        ],
      },
      {
        heading: 'What lands — and what doesn’t',
        body: [
          'Your list, refined by people who shop here weekly: breakfast things, good coffee, island fruit, snacks that survive the beach, the poke worth eating when the shop has it. We’ll tell you what’s worth buying locally and what isn’t — island pricing punishes some categories and rewards others.',
          'Alcohol isn’t stocked by us — client-supplied or via licensed referral is the posture, printed everywhere.',
        ],
        links: [{ label: 'Alcohol and bar', href: 'guides/alcohol-and-bar' }],
      },
      {
        heading: 'The pricing',
        body: [
          'Groceries at cost, receipts attached, plus a service line quoted in writing before you land. No markup on food; no mystery fee. The service line covers the shopping, the driving, and the put-away.',
        ],
        links: [{ label: 'The stocking service', href: 'services/grocery-stocking' }],
      },
    ],
    faq: [
      {
        q: 'How do you get in before we arrive?',
        a: 'House-manager coordination, lockbox, or your rental agency’s arrival protocol — settled in the inquiry exchange. Perishables are timed to your landing window.',
      },
      {
        q: 'Can you stock for dietary restrictions?',
        a: 'Yes — the same eleven flags apply to stocking as to cooking. Gluten-free households arrive to a gluten-free fridge.',
      },
      {
        q: 'Mid-stay refresh?',
        a: 'Yes — the Wednesday run is a standard add-on to week-long stays, same at-cost terms.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['grocery stocking Kauai', 'villa stocking Kauai arrival'],
  },
  {
    slug: 'guides/booking-lead-times',
    category: 'guide',
    title: 'Kauaʻi Booking Lead Times — When to Book What',
    h1: 'Lead times, by season and service.',
    parent: 'guides',
    meta: {
      description:
        'How far ahead to book a Kauaʻi private chef: dinners 2–4 weeks, estate weeks a month-plus, December 60–90 days, far-North 72 hours minimum — the honest calendar.',
    },
    intro: 'The honest calendar: what books first, what can wait, and why December on Kauaʻi is its own category.',
    sections: [
      {
        heading: 'The baseline',
        body: ['Standard seasons (roughly mid-January through November):'],
        list: [
          'Dinners and Date Nights — 2–4 weeks is comfortable',
          'Stay Chef and estate weeks — a month or more',
          'Weddings and full wedding weeks — 3–6 months',
          'Retreats — a season ahead; multi-week programs more',
          'Far-North service past Hanalei — 72 hours minimum, always',
        ],
      },
      {
        heading: 'December is its own country',
        body: [
          'Holiday weeks compress the whole island: rental rates peak, kitchens book out, and the thin chef pool thins to its honest limit. Christmas-week estate service is the first thing on the island to sell out — sixty days is the floor, ninety is comfortable.',
          'The published card holds — no holiday surcharge invented — but the calendar is the real price of December. Early inquiry and a locked deposit are the whole game.',
        ],
      },
      {
        heading: 'The inquiry-first reason',
        body: [
          'We never hold a date we can’t crew — so “how far ahead” is really “how early can the roster say yes.” Early inquiries get the yes; late ones get the honest no with time to plan around it. Both answers arrive within a day.',
        ],
        links: [{ label: 'The honesty register', href: 'trust' }],
      },
    ],
    faq: [
      {
        q: 'Can you do a last-minute dinner?',
        a: 'Sometimes — ask. Mid-week, off-peak, base-zone dinners occasionally fit with days of notice. We answer within a day, honestly, either way.',
      },
      {
        q: 'When should a June wedding book?',
        a: 'Three to six months ahead is comfortable; summer Saturdays on the North Shore book earliest. The 50% deposit locks dates after the written quote.',
      },
      {
        q: 'Does early booking change the price?',
        a: 'No — the published card holds regardless. Early booking buys availability, not discounts; the quote is the same arithmetic in March or in October.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['how far ahead book private chef Kauai', 'Kauai chef availability'],
  },
  {
    slug: 'guides/hanalei-bridge-clause',
    category: 'guide',
    title: 'The Hanalei Bridge Clause — In Writing, Because the Road Is Real',
    h1: 'One bridge. One road. One written clause.',
    parent: 'guides',
    meta: {
      description:
        'The Hanalei bridge clause: far-North Kauaʻi service requires 72-hour notice, and documented HDOT closures reschedule rather than forfeit. The road rule nobody else publishes.',
    },
    intro: 'Everything past Hanalei crosses one one-lane bridge. This page is the full text and reasoning of the clause that governs far-North service — the only one published on the island.',
    sections: [
      {
        heading: 'The clause, verbatim',
        body: [
          'Far-North service (Wainiha, Hāʻena, and points past the Hanalei bridge) requires 72-hour notice. In the event of a documented closure of Kūhiō Highway or the Hanalei bridge — HDOT-scheduled work, weather closure, or emergency — service reschedules to a mutually available date rather than forfeiting the deposit. Where rescheduling is impossible, the closure is treated as force majeure under the booking terms.',
          'That’s the whole clause. It exists because the road is not a metaphor: nightly full closures and slope-stabilization work are documented reality, and heavy rain can close the corridor with little warning.',
        ],
      },
      {
        heading: 'How we work the road',
        body: [
          'Shopping sequences before crossings — the pantry plan for far-North stays is built so the road can’t starve the week. We track HDOT notices. On service days with posted work windows, the crew crosses early. The 72-hour notice exists so all of this can be true before your date, not improvised during it.',
        ],
      },
      {
        heading: 'Why nobody else publishes this',
        body: [
          'Because it admits the road is a risk. We publish it because the risk is real and the term is fair: closures reschedule rather than forfeit. Your deposit should never evaporate over a landslide — and under this clause, it doesn’t.',
        ],
        links: [{ label: 'Booking terms', href: 'legal' }],
      },
      {
        heading: 'Where the clause applies',
        body: [
          'Hanalei town and Princeville sit before the bridge — standard $50–$75 shore surcharge, no clause. The clause begins past the bridge: Wainiha, Hāʻena, the end of the road. If your address is borderline, the inquiry reply says which side of it you’re on.',
        ],
        links: [{ label: 'Travel zones', href: 'pricing/travel-zones' }],
      },
    ],
    faq: [
      {
        q: 'Has the road actually closed on events?',
        a: 'The road closes regularly — HDOT’s schedule is public and weather closures are documented history. The clause exists because this is routine logistics on the far North Shore, not a hypothetical.',
      },
      {
        q: 'What if we can’t reschedule?',
        a: 'Where no mutually available date exists, documented closures are treated as force majeure under the booking terms — the deposit doesn’t forfeit over a closed road.',
        links: [{ label: 'Booking terms', href: '/kauai/legal' }],
      },
      {
        q: 'Does the clause apply to weddings?',
        a: 'Yes — far-North wedding venues carry the same written term, which is exactly why planners ask for it. Your deposit is protected by text, not crossed fingers.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['Hanalei bridge closure', 'Hanalei road closure private chef', 'Haena catering'],
  },
  {
    slug: 'guides/shore-seasonality',
    category: 'guide',
    title: 'North Shore vs South Shore Kauaʻi — The Season Guide',
    h1: 'Two shores, two seasons, one honest guide.',
    parent: 'guides',
    meta: {
      description:
        'North Shore vs South Shore Kauaʻi by season: North peaks June–September, South carries November–March — the month-by-month truth for booking stays, weddings, and chef service.',
    },
    intro: 'The seasonality truth every Kauaʻi booking depends on: the North Shore’s prime is summer; the South Shore carries winter. Book the shore for the season — here’s the calendar.',
    sections: [
      {
        heading: 'The calendar, month by month',
        body: [
          'June through September: the North Shore’s prime — calm water, long light, Hanalei at its postcard best, and the bluff estates earning their rates. The South Shore is lovely and slightly forgotten, which has its own value.',
          'November through March: the seasons invert. The North gets its rain — real rain, waterfall-multiplying rain — and the South Shore becomes the dry, calm, reliable answer. Winter visitors on the North Shore should know what they’re booking; we tell them.',
          'April–May and October: the shoulder months, both shores viable, the island at its emptiest.',
        ],
      },
      {
        heading: 'What this means for chef service',
        body: [
          'Both shores are served year-round at the published surcharges — but demand follows the calendar. North Shore summer weeks and South Shore winter weeks book first; December compresses everything island-wide regardless of shore.',
          'For weddings especially: a January North Shore lawn is a rain plan with a view; the same week on the South Shore is just a plan. We route honestly in the inquiry reply when your dates argue for a shore.',
        ],
        links: [
          { label: 'Weather backup planning', href: 'guides/weather-backup' },
          { label: 'The locations', href: 'locations' },
        ],
      },
      {
        heading: 'The honesty note',
        body: [
          'Rental sites won’t tell you this plainly because both shores are inventory. We serve both shores at published rates, so the advice is free: summer north, winter south, shoulders anywhere, December early.',
        ],
      },
    ],
    faq: [
      {
        q: 'We booked the North Shore in February — should we worry?',
        a: 'Know what you booked: February in Hanalei is dramatic, green, and wet — beautiful to many, surprising to some. Chef service runs normally with the pantry plan built around the weather; the covered veranda is the venue.',
      },
      {
        q: 'Which shore for a summer wedding?',
        a: 'North, decisively — June through September is the bluff lawns’ season. Winter weddings route south; the corridor’s venues carry November through March.',
      },
      {
        q: 'Is there a bad month on Kauaʻi?',
        a: 'No bad month, only mismatched shores. The island’s rainfall is why it looks like this — the skill is booking the side that’s smiling.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['Kauai north shore vs south shore', 'Kauai seasonality', 'best side of Kauai by month'],
  },
  {
    slug: 'guides/dietary',
    category: 'guide',
    title: 'Dietary Restrictions on Kauaʻi — The Working Guide',
    h1: 'Dietary, in depth.',
    parent: 'guides',
    meta: {
      description:
        'How dietary restrictions work with a Kauaʻi private chef: the eleven standard flags, allergen prep controls, celiac honesty, and retreat-grade protocols — settled before the shopping.',
    },
    intro: 'The working guide to dietary service: what the eleven flags cover, how allergen prep actually runs, and the honest paragraph about private kitchens.',
    sections: [
      {
        heading: 'The eleven flags',
        body: [
          'Vegetarian, vegan, gluten-free, halal, kosher-style, dairy-free, nut-free, keto, pescatarian, low-sodium, diabetic-friendly. Flags settle in the menu call — before any shopping — and the written menu labels every dish.',
          'Kosher-style means kosher-observant ingredients and preparation respect, honestly not certification; where certification is required, we say so and help you find the right resource.',
        ],
      },
      {
        heading: 'Allergen prep, the controls',
        body: [
          'Dedicated boards and pans, sequenced prep (allergen-free first), separate oil, labeled storage, service that knows which plate is which. A nut-free house stays nut-free for the whole booking — not just the flagged courses.',
          'The honest paragraph, printed everywhere it matters: we cook in rental kitchens, not certified facilities. Our controls are disciplined and described in writing; severe airborne allergies deserve that description before you commit, and they get it.',
        ],
      },
      {
        heading: 'Beyond the flags: protocols',
        body: [
          'Retreat-grade work goes deeper — Ayurvedic-fluent weeks, detox formats, raw-leaning programs, labeled dish by dish across a multi-day stay. If your group eats by a program, we cook by the program.',
        ],
        links: [{ label: 'Retreat dietary protocols', href: 'retreat-catering/dietary-protocols' }],
      },
    ],
    faq: [
      {
        q: 'Does dietary accommodation cost extra?',
        a: 'No — the eleven flags are standard inside the published bands. Deeply specialized sourcing shows honestly in the groceries line, with receipts.',
      },
      {
        q: 'How do we tell you about our group’s needs?',
        a: 'The inquiry asks; the menu call settles it. Groups get the dietary census template — flags become labeled menu lines, not table announcements.',
      },
      {
        q: 'Celiac-safe, really?',
        a: 'With the stated controls, yes — and the controls are described in writing before you commit, because for celiac guests the description is the product. Edge cases get honest answers, not reassuring ones.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['dietary restrictions Kauai chef', 'allergen friendly private chef Kauai'],
  },
  {
    slug: 'guides/weather-backup',
    category: 'guide',
    title: 'Rain Plans on Kauaʻi — Weather Backup, Planned',
    h1: 'The rain plan is the plan.',
    parent: 'guides',
    meta: {
      description:
        'Weather backup planning for Kauaʻi events: covered service as default, the 48-hour weather call, menus that survive a tent — because Waiʻaleʻale’s rainfall is not a rumor.',
    },
    intro: 'One of the wettest places on earth is visible from most of our venues. Kauaʻi events don’t need optimism; they need a rain plan. Ours is built in, not bolted on.',
    sections: [
      {
        heading: 'The default is cover',
        body: [
          'Estate lānai, plantation verandas, tented lawns: covered service is the default architecture on Kauaʻi, not the fallback. Menus are built to survive a tent — nothing on your menu requires a clear sky to be good.',
          'Where a venue’s cover is thin, rentals coordination (tents, sides, flooring) settles in the quote phase with your planner or the venue — before the deposit, not during the drizzle.',
        ],
      },
      {
        heading: 'The 48-hour call',
        body: [
          'Two days out, we make the weather call with you: service location final, timing flexes identified, the wet-version of the floor plan confirmed. The forecast on Kauaʻi is hyperlocal — rain in Hanalei is sun in Poʻipū — and the call is made with island sense, not an app’s island-wide icon.',
        ],
      },
      {
        heading: 'What weather never changes',
        body: [
          'The food, the service standard, and the fee lines. Weather doesn’t reprice a booking; it relocates a table. Far-North road closures are the one weather event with contractual weight — and that’s written down in the bridge clause.',
        ],
        links: [{ label: 'The Hanalei bridge clause', href: 'guides/hanalei-bridge-clause' }],
      },
    ],
    faq: [
      {
        q: 'What happens if it rains during our outdoor event?',
        a: 'The rain plan executes: covered service as designed, the 48-hour call having settled the details. Kauaʻi rain is usually warm and brief; the architecture assumes it.',
      },
      {
        q: 'Can we move our dinner indoors day-of?',
        a: 'The menu doesn’t care where it’s served — that’s deliberate. Day-of moves between the lawn and the lānai are a service detail, not a crisis.',
      },
      {
        q: 'Does weather ever cancel?',
        a: 'Service almost never cancels — kitchens and cover exist. The exceptions (road closures past Hanalei) are governed in writing by the bridge clause.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['Kauai rain plan event', 'weather backup Kauai wedding', 'outdoor event rain Kauai'],
  },
  {
    slug: 'guides/cleanup-standard',
    category: 'guide',
    title: 'The Cleanup Standard — Cleaner Than We Found It',
    h1: 'The kitchen, cleaner than we found it.',
    parent: 'guides',
    meta: {
      description:
        'The myCHEF Kauaʻi cleanup standard: every booking ends with the kitchen reset — dishes done, surfaces down, trash handled, the space cleaner than arrival.',
    },
    intro: 'Every booking ends the same way: the kitchen reset to cleaner-than-arrival. This page exists because “cleanup included” deserves specifics.',
    sections: [
      {
        heading: 'The standard, specified',
        body: ['At the end of every service:'],
        list: [
          'Dishes done — everything we used, plus the table’s service ware',
          'Surfaces down — counters, range, sink, the pass',
          'Trash and recycling handled per the house’s rules',
          'Leftovers packed and labeled — tomorrow’s lunch, handled',
          'The floor swept where the work happened',
        ],
      },
      {
        heading: 'Why it’s a standard, not a courtesy',
        body: [
          'In a rental, the kitchen is the house’s trust; in your home, it’s your morning. Either way, the measure is simple: when we leave, the only evidence of dinner is the leftovers. House managers re-book vendors who respect the asset — the standard is partly why they re-book us.',
        ],
      },
      {
        heading: 'Event-scale reset',
        body: [
          'Catered events scale the standard: the field kitchen breaks down, service ware is accounted for, rentals are staged per the vendor’s instructions, and the lawn or lānai is walked. Venue managers get the space back in the condition their rules require.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do we need to do any dishes at all?',
        a: 'No — the reset covers everything we touched and everything the table used. If you want to help, we won’t stop you, but the standard assumes you don’t lift a finger.',
      },
      {
        q: 'What about the rental’s checkout inspection?',
        a: 'The kitchen will not be the reason for a deposit conversation. On Stay Chef weeks the kitchen is reset daily and left inspection-ready at checkout.',
      },
      {
        q: 'Is cleanup billed separately?',
        a: 'Never — it’s inside the service, like the shopping and the cooking. The quote’s lines are food, staffing, travel, and the fee stack; cleanup is what service means.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef cleanup included Kauai', 'chef leaves kitchen clean'],
  },
  {
    slug: 'guides/alcohol-and-bar',
    category: 'guide',
    title: 'Alcohol & Bar Service on Kauaʻi — The Honest Posture',
    h1: 'The bar, inside the lines.',
    parent: 'guides',
    meta: {
      description:
        'How alcohol works with Kauaʻi private chef service: client-supplied or licensed bartending referral — we do not sell alcohol. The bar cart package, county rules, and pairing notes, explained.',
    },
    intro: 'Hawaiʻi’s liquor regulation runs through four county commissions, and Kauaʻi County’s rules are its own. Our posture is printed everywhere: we do not sell alcohol. Here’s how the bar actually works.',
    sections: [
      {
        heading: 'The posture, verbatim',
        body: [
          'Alcohol is client-supplied or arranged through a licensed bartending referral; we do not sell alcohol. That line appears on every quote, every bar package, and every page where drinks are mentioned. Conservative by design — and it keeps every event unambiguous on the night.',
        ],
      },
      {
        heading: 'The three working models',
        body: ['In practice, every event runs one of these:'],
        list: [
          'Client-supplied, we serve — your purchase, our cart and bartender service ($850/4hr + $60/guest)',
          'Licensed referral — a licensed bartending service handles the alcohol side; we coordinate',
          'Zero-proof — retreat-standard and genuinely good: the same garnish discipline, no license needed',
        ],
        links: [{ label: 'The mobile bar package', href: 'services/mobile-bar' }],
      },
      {
        heading: 'What we do provide',
        body: [
          'The cart, ice, glassware coordination, mixers and garnish from the same market run as the food, pairing notes for your wine list, and honest quantity advice so you buy once, correctly. What we don’t do is touch the alcohol transaction itself.',
        ],
      },
      {
        heading: 'Venue and county notes',
        body: [
          'Venues sometimes hold their own licenses and rules; estate events follow county norms for private property. Where a venue’s license changes the answer, the quote phase surfaces it — with your planner or the venue, before the deposit.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can your bartender serve the wine we bought?',
        a: 'Yes — client-supplied alcohol with our cart and service is the standard model. The posture prints on the quote so everyone’s role is unambiguous.',
      },
      {
        q: 'Do you mark up alcohol?',
        a: 'We never touch the alcohol transaction — no markup is possible. The bar cart package prices the service, cart, mixers, and garnish; the alcohol is your purchase.',
      },
      {
        q: 'What about a fully zero-proof event?',
        a: 'A format we run weekly for retreats — zero-proof builds with real garnish discipline, priced inside the same cart structure. Nobody’s glass is an apology.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['Kauai event alcohol rules', 'private chef bar service Kauai', 'licensed bartender Kauai'],
  },
];

/** Kauaʻi trust cluster (Table 4.2.3g rows 1–8). */
const trustPages: ContentRecord[] = [
  {
    slug: 'about',
    category: 'trust',
    title: 'About myCHEF Kauaʻi — The Island Desk',
    h1: 'The Kauaʻi desk.',
    parent: '',
    meta: {
      description:
        'About myCHEF Kauaʻi: the island desk of a four-island Hawaiʻi platform — a managed roster of vetted chefs, published rates, and the inquiry-first honesty the island’s thin chef pool demands.',
    },
    intro:
      'myCHEF runs island desks across Hawaiʻi; Kauaʻi is the garden-isle desk — the retreat table, the estate week, and the most honestly small chef pool in the state.',
    sections: [
      {
        heading: 'Why a desk, not a directory',
        body: [
          'Kauaʻi’s private-chef market is fourteen operators, half without written quotes, two with any published price. A directory would list them; a desk manages a roster — menus reviewed, kitchens assessed, insurance verified — and publishes the rate card the market avoids.',
          'The desk runs inquiry-first because the pool is thin: we never hold a date we can’t crew. That’s not a limitation; it’s the honesty rule the island’s scale makes necessary and valuable.',
        ],
        links: [{ label: 'How we vet chefs', href: 'how-we-vet-chefs' }],
      },
      {
        heading: 'The island shape',
        body: [
          'Kauaʻi visits average over a week; the estates sleep 8–16; the retreat houses run 3–7 day programs; and one one-lane bridge governs the far North Shore. The desk’s products — Stay Chef weeks, retreat tables, the wedding week, the bridge clause — are built to that shape, not adapted to it.',
        ],
      },
      {
        heading: 'What we believe about pricing',
        body: [
          'That published rates are respect. That a written quote should be the confirmed total. That 20% service, itemized, beats 25% hidden. That groceries at cost with receipts beats an allowance kept whether spent or not. The rate card is the about page, honestly.',
        ],
        links: [{ label: 'The Kauaʻi rate card', href: 'pricing' }],
      },
    ],
    faq: [
      {
        q: 'Is myCHEF Kauaʻi a local company?',
        a: 'A Hawaiʻi platform with island desks — the Kauaʻi desk runs a managed roster of island chefs and publishes this island’s rate card. The network’s standards are shared; the island’s products are its own.',
      },
      {
        q: 'How long has the desk operated?',
        a: 'Long enough to know the bridge schedule by heart. We don’t fabricate founding stories or review counts; the trust page lists what we publish and what we verify.',
        links: [{ label: 'Trust and honesty register', href: '/kauai/trust' }],
      },
      {
        q: 'Who actually cooks?',
        a: 'Vetted island chefs from the managed roster — named in your written quote, with the backup rule printed: we never hold a date we can’t crew.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['about myCHEF Kauai', 'Kauai private chef company'],
  },
  {
    slug: 'trust',
    category: 'trust',
    title: 'Trust & Verification — myCHEF Kauaʻi',
    h1: 'The honesty register.',
    parent: 'about',
    meta: {
      description:
        'How to trust a Kauaʻi chef service: published rates, written quotes that are confirmed totals, vetted rosters, itemized fees — and the verification paths for every claim.',
    },
    intro:
      'Trust on Kauaʻi is verification, not vibes. This page lists what we publish, what we verify, and how you check any of it — including the parts where the honest answer is “ask and see.”',
    sections: [
      {
        heading: 'What we publish',
        body: ['Verifiable before you inquire:'],
        list: [
          'The full rate card — per-guest bands, day rates, staffing hourlys, surcharges',
          'The fee stack — 20% service, GET up to 4.7120%, the 50% deposit rule',
          'The bridge clause — far-North terms, in writing',
          'What we don’t do — the refusal list, published',
        ],
        links: [
          { label: 'The rate card', href: 'pricing' },
          { label: 'What we don’t do', href: 'what-we-dont-do' },
        ],
      },
      {
        heading: 'What we verify',
        body: [
          'Every roster chef: background-checked, menu-reviewed, kitchen-assessed, insurance-verified. The vetting page states the standard; your written quote names your chef. We never hold a date we can’t crew — the roster’s depth is checked before the quote exists, not after your deposit.',
        ],
        links: [{ label: 'How we vet chefs', href: 'how-we-vet-chefs' }],
      },
      {
        heading: 'What we don’t fake',
        body: [
          'Reviews, ratings, and counts. Where this site references the market (“fourteen operators, two with published prices”), it’s from our own operator audit. Where it could show testimonials, it instead shows you the documents: the rate card, the written quote, the fee lines. Paper over praise.',
        ],
        links: [{ label: 'Booking terms', href: 'legal' }],
      },
    ],
    faq: [
      {
        q: 'Are your chefs background-checked?',
        a: 'Yes — background check, menu review, kitchen assessment, and insurance verification are the roster’s floor. The vetting page details each step.',
      },
      {
        q: 'Why no review carousel?',
        a: 'Because a carousel is unverifiable by design. We show documents instead: published rates, the written quote, itemized fees. The booking terms and this register are the reputation.',
      },
      {
        q: 'What if something goes wrong on the day?',
        a: 'The written quote names the escalation path; the roster’s depth is the backup; and the booking terms govern remedies. Problems get owned in the same writing the promise was made in.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['trust private chef Kauai', 'vetted chefs Kauai', 'verified chef service Kauai'],
  },
  {
    slug: 'legal',
    category: 'trust',
    title: 'Booking Terms & Policies — myCHEF Kauaʻi',
    h1: 'The terms, before the deposit.',
    parent: 'trust',
    meta: {
      description:
        'myCHEF Kauaʻi booking terms: 50% deposit, cancellation tiers, force majeure including documented road closures, dietary disclosure duty, and the written-quote rule.',
    },
    intro:
      'The terms every quote references — proposed until counsel locks them, published anyway, because you should read the shape of the deal before the deposit.',
    sections: [
      {
        heading: 'The core terms (proposed)',
        body: ['The booking relationship in plain language:'],
        list: [
          'Written quote rule — the quote is the confirmed total; nothing is added after approval',
          'Deposit — 50% locks the date; only ever after the written quote',
          'Cancellation — 28+ days: partial refund; 14–28 days: deposit retained; under 7 days: full balance due',
          'Force majeure — documented closures (incl. the Hanalei bridge) and emergencies reschedule rather than forfeit',
          'Dietary disclosure — allergies and flags must be disclosed before the menu call locks; we cook to what we know',
        ],
      },
      {
        heading: 'The honesty note about these terms',
        body: [
          'These terms render as proposed until counsel locks the final text. The shape won’t change — deposit, tiers, force majeure — but the legal wording will be counsel’s. We publish the proposed version because “terms available after booking” is the kind of opacity this site exists to end.',
        ],
      },
      {
        heading: 'Related documents',
        body: ['The terms sit alongside:'],
        links: [
          { label: 'The fee stack, explained', href: 'pricing/fee-stack' },
          { label: 'The Hanalei bridge clause', href: 'guides/hanalei-bridge-clause' },
          { label: 'Trust and verification', href: 'trust' },
        ],
      },
    ],
    faq: [
      {
        q: 'When is the final balance due?',
        a: 'Balance timing is stated in your written quote — typically ahead of the service date. The quote carries the payment schedule that applies to your booking.',
      },
      {
        q: 'What counts as force majeure?',
        a: 'Documented events beyond control — HDOT road closures (including the Hanalei bridge corridor), civil emergencies, severe weather events. Documented is the operative word; the bridge clause page carries the far-North specifics.',
      },
      {
        q: 'Can I cancel after the deposit?',
        a: 'Yes, under the tiers: 28+ days partial refund, 14–28 days deposit retained, under 7 days full balance. The tiers exist because late cancellations strand a crew we’ve reserved for you.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['Kauai chef booking terms', 'private chef cancellation policy Kauai'],
  },
  {
    slug: 'faq',
    category: 'trust',
    title: 'FAQ — Private Chef Kauaʻi',
    h1: 'The island’s questions, answered.',
    parent: 'trust',
    meta: {
      description:
        'Kauaʻi private chef FAQ: pricing, coverage, the bridge clause, dietary depth, lead times, alcohol, and the inquiry-first rule — the island’s questions in one place.',
    },
    intro: 'Every answer on this site, condensed. Pricing, coverage, the bridge, dietary, lead times — the questions Kauaʻi asks, in one place.',
    sections: [],
    faq: [
      {
        q: 'How much does a private chef cost on Kauaʻi?',
        a: 'Signature dinners $150–$250 per guest with groceries inside; Table tier $125–$150; Premium $250–$350; Chef’s Table from $350. Stay Chef from $1,100/day plus groceries at cost. Date Night $650–$950 fixed. 20% service and GET up to 4.7120% always on their own lines.',
        links: [{ label: 'The full rate card', href: '/kauai/pricing' }],
      },
      {
        q: 'Which areas do you serve?',
        a: 'Both shores and the East Side: Princeville, Hanalei, Kīlauea, Poʻipū, Kōloa, Kāpaʻa–Līhuʻe. Base zone free; shores $50–$75 per service day; far-North past the Hanalei bridge at inquiry with 72-hour notice.',
        links: [{ label: 'Coverage, mapped', href: '/kauai/coverage' }],
      },
      {
        q: 'What’s the Hanalei bridge clause?',
        a: 'Far-North service requires 72-hour notice, and documented road closures reschedule rather than forfeit. One bridge governs the far North Shore; the clause is the only published term of its kind on the island.',
        links: [{ label: 'The clause, in full', href: '/kauai/guides/hanalei-bridge-clause' }],
      },
      {
        q: 'Why inquiry-first? Why not instant booking?',
        a: 'Because the island’s chef pool is thin and we never hold a date we can’t crew. Inquiry → written quote → deposit is the sequence that makes every date we hold a real one.',
      },
      {
        q: 'Do you cater retreats?',
        a: 'It’s the Kauaʻi signature: 8–30 guests, 3–7 days, one contract, menus labeled by dietary protocol, priced from published rates — $250–$300+ per person per day plus the chef’s day rate.',
        links: [{ label: 'Retreat catering', href: '/kauai/retreat-catering' }],
      },
      {
        q: 'What about dietary restrictions?',
        a: 'Eleven standard flags (vegetarian through diabetic-friendly), separate allergen prep, and retreat-grade protocol menus — settled in the menu call, labeled per dish.',
        links: [{ label: 'Dietary, in depth', href: '/kauai/services/dietary' }],
      },
      {
        q: 'Do you provide alcohol?',
        a: 'Alcohol is client-supplied or via licensed bartending referral; we do not sell alcohol. The bar cart ($850/4hr + $60/guest) covers cart, service, mixers, and garnish.',
        links: [{ label: 'Alcohol and bar', href: '/kauai/guides/alcohol-and-bar' }],
      },
      {
        q: 'How far ahead should we book?',
        a: 'Dinners 2–4 weeks; estate weeks a month-plus; weddings 3–6 months; December 60–90 days. Far-North past Hanalei: 72 hours minimum, always.',
        links: [{ label: 'Lead times by season', href: '/kauai/guides/booking-lead-times' }],
      },
      {
        q: 'What’s the cancellation policy?',
        a: 'Proposed terms: 28+ days partial refund; 14–28 days deposit retained; under 7 days full balance; documented closures and emergencies reschedule rather than forfeit.',
        links: [{ label: 'Booking terms', href: '/kauai/legal' }],
      },
      {
        q: 'Is the written quote really final?',
        a: 'Yes — the written quote is the confirmed total. Every fee line appears before you commit; nothing is added after.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['Kauai private chef FAQ', 'private chef Kauai questions'],
  },
  {
    slug: 'contact',
    category: 'trust',
    title: 'Contact myCHEF Kauaʻi — The Inquiry Desk',
    h1: 'Talk to the island desk.',
    parent: 'trust',
    meta: {
      description:
        'Contact myCHEF Kauaʻi: the inquiry form is the front door — dates, shore, headcount — with a written answer within a day. Or browse the rate card first; it’s published.',
    },
    intro:
      'The inquiry form is the front door — six steps, two minutes, one written quote. This page is for everything that doesn’t fit the form.',
    sections: [
      {
        heading: 'The fastest path',
        body: [
          'The quote flow: dates, shore, headcount, occasion — and a written answer within a day, honestly. Every booking starts there, including the complicated ones.',
        ],
        links: [{ label: 'Begin an inquiry', href: 'quote' }],
      },
      {
        heading: 'Partners and pros',
        body: [
          'Villa managers, concierges, wedding planners, and retreat operators have their own doors — same desk, different conversation. The partner pages describe the relationship; the inquiry starts it.',
        ],
        links: [
          { label: 'For villa managers', href: 'partners/villa-managers' },
          { label: 'For concierges', href: 'partners/concierges' },
          { label: 'For wedding planners', href: 'partners/wedding-planners' },
          { label: 'For retreat hosts', href: 'retreat-catering/for-hosts' },
        ],
      },
      {
        heading: 'Chefs',
        body: [
          'Cooking on Kauaʻi and interested in the roster? The vetting page states the standard; an inquiry marked “chef” reaches the right person.',
        ],
        links: [{ label: 'How we vet chefs', href: 'how-we-vet-chefs' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['contact Kauai private chef', 'Kauai chef inquiry'],
  },
  {
    slug: 'what-we-dont-do',
    category: 'trust',
    title: 'What We Don’t Do — myCHEF Kauaʻi',
    h1: 'The refusal list, published.',
    parent: 'trust',
    meta: {
      description:
        'What myCHEF Kauaʻi doesn’t do: no hotel-room cooking, no alcohol sales, no dates we can’t crew, no invented discounts, no west-side fleets we don’t have. The refusal list, published.',
    },
    intro:
      'The most honest page on the site: the services we decline, the corners we won’t cut, and the claims we won’t make. A desk is defined by its refusals.',
    sections: [
      {
        heading: 'Service refusals',
        body: ['Declined politely, early, in writing:'],
        list: [
          'Hotel rooms without kitchens — a coffee maker is not a kitchen',
          'Dates we can’t crew — we never hold a date and hope',
          'Far-North service without 72-hour notice — the road is real',
          'Events over 75 guests without a written exception — capacity is honest',
          'Alcohol sales — client-supplied or licensed referral, always',
        ],
      },
      {
        heading: 'Pricing refusals',
        body: ['The claims we won’t make:'],
        list: [
          'No invented weekly discounts — the written quote is the total',
          'No “from $X” teasers that triple at checkout',
          'No bundled service charges — 20% on its own line, against the island’s 23–25%',
          'No grocery allowances kept whether spent or not — at cost, with receipts',
          'No holiday surcharges invented in December — the card holds; the calendar is the price',
        ],
        links: [{ label: 'The rate card', href: 'pricing' }],
      },
      {
        heading: 'Coverage refusals',
        body: [
          'No implied west-side fleet — Waimea, Hanapēpē, and Kalāheo quote at inquiry because the rental stock there is thin and we serve it per event, honestly. No “island-wide, anywhere, anytime” — one bridge makes a liar of that sentence, so we don’t say it.',
        ],
        links: [{ label: 'Coverage, mapped', href: 'coverage' }],
      },
    ],
    faq: [
      {
        q: 'Why publish a refusal list?',
        a: 'Because refusals are where service honesty lives. Every “no” on this page is a “yes” we can keep on the pages that matter.',
      },
      {
        q: 'Will you really decline a booking?',
        a: 'Yes — inquiry-first exists precisely so a booking we can’t serve beautifully is declined before your deposit, not discovered at your dinner.',
      },
      {
        q: 'Who do you recommend for what you decline?',
        a: 'Where a good alternative exists we say so in the inquiry reply — the island is small, and a served referral beats a stranded guest.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef Kauai limitations', 'honest chef service Kauai'],
  },
  {
    slug: 'coverage',
    category: 'trust',
    title: 'Service Coverage Kauaʻi — The Honest Map',
    h1: 'Coverage, mapped honestly.',
    parent: 'trust',
    meta: {
      description:
        'myCHEF Kauaʻi service coverage: base zone (Kāpaʻa–Līhuʻe), shore zones ($50–$75), far-North at inquiry with the bridge clause, and the west side’s honest status.',
      ogImage: '/img/kauai/shore-north.jpg',
    },
    intro: 'The coverage map without the marketing layer: where we cook, what it costs to get there, and the edges stated plainly.',
    sections: [
      {
        heading: 'The zones, mapped',
        body: ['Three zones plus the honest edge:'],
        list: [
          'Base — Kāpaʻa, Līhuʻe, near corridors: no surcharge',
          'North Shore — Princeville, Hanalei, Kīlauea: $50–$75 per service day',
          'South Shore — Poʻipū, Kōloa: $50–$75 per service day',
          'Far North — past the Hanalei bridge (Wainiha, Hāʻena): quoted at inquiry, 72-hour notice, the bridge clause',
          'West side — Waimea, Hanapēpē, Kalāheo: quoted at inquiry; thin rental stock, honest per-event coverage',
        ],
        links: [{ label: 'Travel zones and surcharges', href: 'pricing/travel-zones' }],
      },
      {
        heading: 'Seasons change demand, not coverage',
        body: [
          'Both shores are served year-round. What seasons change is the calendar: North Shore summer and South Shore winter book first; December compresses the island whole. Coverage never narrows — availability does.',
        ],
        links: [{ label: 'Shore seasonality', href: 'guides/shore-seasonality' }],
      },
      {
        heading: 'The locations, page by page',
        body: ['Every zone has its own page with its own logistics:'],
        links: [
          { label: 'Princeville', href: 'locations/princeville' },
          { label: 'Hanalei', href: 'locations/hanalei' },
          { label: 'Kīlauea', href: 'locations/kilauea' },
          { label: 'Poʻipū', href: 'locations/poipu' },
          { label: 'Kōloa', href: 'locations/koloa' },
          { label: 'Kāpaʻa–Līhuʻe', href: 'locations/kapaa-lihue' },
        ],
      },
    ],
    faq: [
      {
        q: 'Do you really serve the whole island?',
        a: 'The inhabited arc, yes — with the edges priced or quoted honestly: far-North under the bridge clause, the west side per event at inquiry. What we don’t do is say “anywhere, anytime” on an island with one bridge.',
      },
      {
        q: 'Is there anywhere you won’t go?',
        a: 'Nowhere on the inhabited arc is refused outright — but far-North and west-side service is quoted at inquiry rather than implied, because the honest answer depends on the date and the road.',
      },
      {
        q: 'Do surcharges apply per booking or per day?',
        a: 'Per service day, itemized — a week in Princeville carries seven surcharge lines you can see, not one bundled “travel fee.”',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['Kauai private chef coverage', 'Kauai chef service area'],
  },
  {
    slug: 'how-we-vet-chefs',
    category: 'trust',
    title: 'How We Vet Chefs — The myCHEF Kauaʻi Roster Standard',
    h1: 'The roster, and how a chef joins it.',
    parent: 'trust',
    meta: {
      description:
        'How myCHEF Kauaʻi vets chefs: background check, menu review, kitchen assessment, insurance verification — and the backup rule that no date is held without a crew.',
    },
    intro:
      'On an island where half the market is an Instagram and a Venmo, the roster standard is the product. Four steps before a chef takes a myCHEF booking on Kauaʻi.',
    sections: [
      {
        heading: 'The four steps',
        body: ['Every roster chef, before the first booking:'],
        list: [
          'Background check — identity and record, current',
          'Menu review — they cook; we taste; the menu register must match the claim',
          'Kitchen assessment — they’ve run rental and estate kitchens, or they learn under a senior before running one',
          'Insurance verification — coverage current, certificates available for venues',
        ],
      },
      {
        heading: 'The island filter',
        body: [
          'Kauaʻi adds its own test: the road, the market, the rain. A roster chef knows the Saturday market by name, plans shopping around the bridge schedule, and has cooked through a squall under a tent without it becoming the evening’s story. Island competence is vetted like knife skills.',
        ],
      },
      {
        heading: 'The backup rule',
        body: [
          'The roster exists so no booking hangs on one person. We never hold a date we can’t crew — if the roster can’t cover your date, the inquiry reply says so, honestly, within a day. Your written quote names your chef; the roster stands behind the name.',
        ],
        links: [{ label: 'The honesty register', href: 'trust' }],
      },
      {
        heading: 'For chefs reading this',
        body: [
          'Cooking on Kauaʻi and interested? The standard is above; the work is the island’s best tables. An inquiry marked “chef” reaches the right person.',
        ],
        links: [{ label: 'Contact the desk', href: 'contact' }],
      },
    ],
    faq: [
      {
        q: 'Are your chefs employees or contractors?',
        a: 'Roster chefs are independent professionals who meet the vetting standard and work under the desk’s service and pricing rules — the written quote, the fee stack, the cleanup standard.',
      },
      {
        q: 'Can we request the same chef again?',
        a: 'Yes — returning guests do it weekly, and the quote names your chef. If they’re booked, we say so and offer the roster alternative honestly.',
      },
      {
        q: 'What happens if our chef is sick on the day?',
        a: 'The roster’s depth is the answer: backup coverage is the structural reason the desk exists. A sick chef becomes a scheduling problem, not your canceled evening.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['vetted private chefs Kauai', 'background checked chef Kauai'],
  },
];

/** Kauaʻi partners cluster (Table 4.2.3g rows 9–12): index + 3 partner pages. */
const partners: ContentRecord[] = [
  {
    slug: 'partners',
    category: 'partner',
    title: 'Partners — myCHEF Kauaʻi',
    h1: 'The professional doors.',
    parent: '',
    meta: {
      description:
        'Partner with myCHEF Kauaʻi: villa managers, concierges, wedding planners — one desk, published rates, and a written quote your clients can hold.',
    },
    intro: 'Three professional doors, one desk. Published rates and written quotes make partner referrals safe — your clients hold the same card you do.',
    sections: [
      {
        heading: 'Choose your door',
        body: ['Each relationship has its own page:'],
        links: [
          { label: 'For villa managers', href: 'partners/villa-managers' },
          { label: 'For concierges', href: 'partners/concierges' },
          { label: 'For wedding planners', href: 'partners/wedding-planners' },
        ],
      },
      {
        heading: 'Why partnering is safe here',
        body: [
          'Referrals risk your reputation, not ours — so the desk is built to protect it: published rates your client can verify, a written quote that is the confirmed total, kitchens left cleaner than arrival, and a cleanup and conduct standard that survives your checkout inspection.',
        ],
      },
      {
        heading: 'The island argument',
        body: [
          'Kauaʻi’s chef pool is thin and its bookings are long-stay. A desk with a managed roster, published pricing, and the bridge clause in writing is the partner that makes your property or plan look good — predictably, not hopefully.',
        ],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['Kauai private chef partner', 'chef vendor Kauai'],
  },
  {
    slug: 'partners/villa-managers',
    category: 'partner',
    title: 'For Villa Managers — myCHEF Kauaʻi',
    h1: 'The vendor your checkout inspection loves.',
    parent: 'partners',
    meta: {
      description:
        'For Kauaʻi villa and estate managers: a chef vendor with published rates, a written quote, kitchen checks before contracts, and a cleanup standard that survives inspection.',
    },
    intro:
      'Your properties’ kitchens are the stage; our standard is leaving them cleaner than arrival. Published rates, written quotes, and a roster you can put in front of owners.',
    sections: [
      {
        heading: 'What we need from you',
        body: ['The short list:'],
        list: [
          'Access and gate protocol — settled before service day',
          'House rules — quiet hours, occupancy, the owner’s kitchen notes',
          'Kitchen truth — the photos that let our check be accurate',
          'A contact for service day — you or the house, answered',
        ],
      },
      {
        heading: 'What your owners get',
        body: [
          'A vendor whose cleanup standard survives the checkout inspection, whose insurance certificates show up when venues ask, and whose written quotes never surprise the guest you referred. Estate weeks run from $1,100/day plus groceries at cost — receipts attached, which owners and their accountants appreciate.',
        ],
        links: [{ label: 'The estate-week product', href: 'services/estate-week-chef' }],
      },
      {
        heading: 'The referral posture',
        body: [
          'Book us direct for your guests or hand them the door — either way the rate card is the same published one, so your referral never carries a markup smell. Where a standing arrangement makes sense, we build it in writing.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do you carry insurance for estate work?',
        a: 'Yes — certificates are part of the quote phase for properties that require them. Venue and estate paperwork is routine for the desk.',
      },
      {
        q: 'Can we set a standing arrangement for our portfolio?',
        a: 'Yes — portfolio arrangements are built in writing: access protocols, response times, and the same published rate card your guests could find themselves.',
      },
      {
        q: 'What happens if something breaks?',
        a: 'Reported immediately, owned in writing, resolved per the booking terms. The kitchen-as-asset mindset is why managers re-book us.',
      },
    ],
    cta: { ...CTA_QUOTE, label: 'Start a partner inquiry' },
    keywords: ['villa manager chef vendor Kauai', 'estate manager private chef Kauai'],
  },
  {
    slug: 'partners/concierges',
    category: 'partner',
    title: 'For Concierges — myCHEF Kauaʻi',
    h1: 'The chef answer, without the phone chain.',
    parent: 'partners',
    meta: {
      description:
        'For Kauaʻi concierges and guest-services desks: one inquiry, one written quote, published rates — the chef answer for estate, villa, and resort-adjacent guests, without the phone chain.',
    },
    intro:
      'You’ve arranged chef service by phone chain for years — one dinner at a time, prices by callback. The desk replaces the chain: one inquiry, one written quote, published rates your guest can verify.',
    sections: [
      {
        heading: 'The working relationship',
        body: [
          'Send the inquiry with your guest’s dates, shore, headcount, and kitchen; the written quote comes back within a day, honestly. You stay in the loop or step out — either way the guest holds the same published rate card you could have looked up.',
          'No exclusivity games, no off-book pricing: the desk’s rates are published precisely so a concierge referral never carries a markup smell.',
        ],
      },
      {
        heading: 'What we handle so you don’t',
        body: ['The whole food vertical:'],
        list: [
          'Dinners and Date Nights — per-guest bands, $650–$950 for two',
          'Stay Chef estate weeks — from $1,100/day, the multi-day rate nobody else publishes',
          'Stocking and provisioning — at cost, receipts attached',
          'Retreat tables — 8–30 guests, 3–7 days, one contract',
          'The honest no — when a date can’t be crewed, you hear it immediately, not at the deadline',
        ],
      },
      {
        heading: 'The desks we already think like',
        body: [
          'Estate-agency concierges, resort-adjacent guest services, and the villa belts’ front desks — the Poipu Kapili model of “Private Gourmet Chef available” is exactly the demand this desk serves, priced openly enough to print in your welcome book.',
        ],
        links: [{ label: 'The rate card', href: 'pricing' }],
      },
    ],
    faq: [
      {
        q: 'Do you pay referral fees?',
        a: 'Partner arrangements are built in writing where they make sense — but the guest-facing rates are the published card either way, so the referral is clean regardless.',
      },
      {
        q: 'How fast is the quote turnaround?',
        a: 'Within a day, honestly — a written quote or an honest no. Your guest never waits on us to learn their date is impossible.',
      },
      {
        q: 'Can our guests book direct after a referral?',
        a: 'Yes — and the rate they’ll find published is the one you quoted them. That’s the point of the desk: no version where the direct guest pays less than your referral.',
      },
    ],
    cta: { ...CTA_QUOTE, label: 'Start a partner inquiry' },
    keywords: ['concierge chef service Kauai', 'guest services chef Kauai'],
  },
  {
    slug: 'partners/wedding-planners',
    category: 'partner',
    title: 'For Wedding Planners — myCHEF Kauaʻi',
    h1: 'The caterer whose quote survives your spreadsheet.',
    parent: 'partners',
    meta: {
      description:
        'For Kauaʻi wedding planners: estate-week catering from $175/guest plus staffing, the Hanalei bridge clause in writing, venue coordination in the quote phase, and 20% service itemized against the 23–25% norm.',
    },
    intro:
      'You compare caterers line by line for a living — this desk is built to win that comparison honestly: published per-guest rates, the week under one contract, and the bridge clause your far-North venues need.',
    sections: [
      {
        heading: 'What lands in your spreadsheet',
        body: [
          'Wedding lines from $175/guest plus staffing (servers $55/hr, sous $75/hr, 4-hour floor), the $50–$75 shore surcharges, 20% service itemized against the island’s 23–25% norms, and GET up to 4.7120% on its own line. Every figure published — your client can audit our quote against the rate card without asking us.',
          'The wedding-week contract puts five events on one page: welcome dinner through recovery brunch, one crew, one deposit schedule.',
        ],
        links: [{ label: 'The wedding week', href: 'weddings/wedding-week' }],
      },
      {
        heading: 'The quote-phase discipline',
        body: [
          'Vendor lists, insurance certificates, load-in windows, kitchen access, the rain plan, rentals coordination — settled with you and the venue before the quote is written, so the number your client approves already contains the logistics. No post-deposit surprises is a policy, not a hope.',
        ],
        links: [{ label: 'Venues, honestly assessed', href: 'weddings/venues' }],
      },
      {
        heading: 'The far-North answer',
        body: [
          'For Hanalei-past-the-bridge venues: the written clause — 72-hour notice, documented closures reschedule rather than forfeit. Your client’s deposit doesn’t evaporate over a landslide; it’s the only such term published on the island.',
        ],
        links: [{ label: 'The bridge clause', href: 'guides/hanalei-bridge-clause' }],
      },
    ],
    faq: [
      {
        q: 'Can we get a sample quote for a venue proposal?',
        a: 'Yes — send the venue, date window, and headcount; an indicative written quote returns within a day, honestly, for your client’s planning.',
      },
      {
        q: 'Do you require planner involvement?',
        a: 'No — but we coordinate cleanly with you when you’re in. Estate weddings run better with a planner, and we say so to clients who ask.',
      },
      {
        q: 'What’s your capacity ceiling?',
        a: 'Seventy-five staffed is the standard envelope; over 75 is a written exception quoted explicitly — never implied, never discovered on the day.',
      },
    ],
    cta: { ...CTA_QUOTE, label: 'Start a planner inquiry' },
    keywords: ['wedding planner caterer Kauai', 'Kauai wedding vendor catering'],
  },
];

/**
 * Kauaʻi content registry — 113 records per info.md §4.2.3.
 * NOTE: all records live inline in this file (not split across modules)
 * because scripts/gen-sitemap.mjs extracts slug entries from this
 * file's source text to build public/sitemap.xml.
 */
export const content: ContentRecord[] = [
  ...core,
  ...services,
  ...locations,
  ...retreats,
  ...occasions,
  ...weddings,
  ...menus,
  ...pricingPages,
  ...comparePages,
  ...guides,
  ...trustPages,
  ...partners,
];
