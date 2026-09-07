import type { ContentRecord } from '@/platform/types';
import { CTA_QUOTE, FEE_FOOTNOTE, BRIDGE_SECTION } from './shared';

const PROVENANCE_LINE =
  'Sourcing stays named on wedding menus too: Kunana Dairy, the Saturday Hanalei market, Kauaʻi grass-fed beef, day-boat fish when the boats go out.';

/** Kauaʻi weddings cluster (Table 4.2.3c rows 1–9): the estate-week identity + elopements. */
export const weddings: ContentRecord[] = [
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
