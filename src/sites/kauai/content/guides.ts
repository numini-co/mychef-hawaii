import type { ContentRecord } from '@/platform/types';
import { CTA_QUOTE } from './shared';

/** Kauaʻi guides cluster (Table 4.2.3f rows 1–13): index + 12 guides. */
export const guides: ContentRecord[] = [
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
