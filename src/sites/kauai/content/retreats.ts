import type { ContentRecord } from '@/platform/types';
import { CTA_RETREAT, PROVENANCE } from './shared';

/** Kauaʻi retreat cluster (Table 4.2.3b rows 1–7) — the island's signature whitespace. */
export const retreats: ContentRecord[] = [
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
