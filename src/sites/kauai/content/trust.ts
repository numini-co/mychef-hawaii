import type { ContentRecord } from '@/platform/types';
import { CTA_QUOTE } from './shared';

/** Kauaʻi trust cluster (Table 4.2.3g rows 1–8). */
export const trustPages: ContentRecord[] = [
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
export const partners: ContentRecord[] = [
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
