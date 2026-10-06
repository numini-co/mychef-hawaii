import type { IslandId } from './islands';
import type { UniqueCell } from './uniqueCells';
import { SEARCH_VOLUMES } from './offers';

/**
 * Supporting-area dinner doors. These are unique cells, not money corridors.
 * Null-volume place names stay out of money titles. Do not add to middleware CORRIDORS.
 * Dining-in blogs remain the kitchen notes beside these URLs.
 */

export const AREA_CELLS: Record<IslandId, UniqueCell[]> = {
  oahu: [
    {
      slug: 'lanikai',
      name: 'Lanikai',
      h1: 'Lanikai: a quieter 30-day house, not a second Kailua corridor.',
      title: 'Lanikai villa dinner — quieter 30-day houses | myCHEF',
      description:
        'Lanikai beach-house dinners under the same 30-day estate rule as Kailua. Quieter inventory.',
      lede:
        'Mokulua across the channel. Galley kitchens are common. The stay is still a month, not a weekend tourist drop-in.',
      photo: 'cellLanikai',
      body: [
        '/kailua is the windward money corridor. This page is Lanikai itself — quieter 30-day houses, not a cloned Kailua title. Weekend tourist drop-ins without a genuine stay are declined.',
        '/blog/dining-in-lanikai is the kitchen note: cooktops, galleys, what we bring. This URL is the dinner door. Kamaʻāina weeks sit on /kamaaina.',
      ],
      faqs: [
        {
          q: 'Same as /kailua?',
          a: 'That URL is the windward corridor. This page is the quieter house next door under the same 30-day rule.',
        },
        {
          q: 'Same as /blog/dining-in-lanikai?',
          a: 'That piece is the kitchen note. This page is the dinner door.',
        },
      ],
      related: [
        { path: '/kailua', label: 'Kailua corridor' },
        { path: '/blog/dining-in-lanikai', label: 'Lanikai kitchen notes' },
        { path: '/kamaaina', label: 'Kamaʻāina line' },
      ],
    },
    {
      slug: 'hawaii-kai',
      name: 'Hawaiʻi Kai',
      h1: 'Hawaiʻi Kai households — east Honolulu, resident tables.',
      title: 'Hawaiʻi Kai household dinners — east Honolulu | myCHEF',
      description:
        'East Honolulu household dinners in Hawaiʻi Kai. Resident entertaining more than tourist villas.',
      lede:
        'Marina light, a household range, traffic planned into the chef day. This is East Honolulu entertaining, not a villa SKU.',
      photo: 'cellHawaiiKai',
      body: [
        '/honolulu is the town dinner door. This page is Hawaiʻi Kai — resident tables, not a tourist-villa overlay. Traffic is a timing problem, not a surprise invoice.',
        '/blog/dining-in-hawaii-kai is the shorter kitchen note. Weekly resident service stays on /kamaaina. A cooktop is still required.',
        `This page is one East Honolulu household table.`,
      ],
      faqs: [
        {
          q: 'Same as /honolulu?',
          a: 'That URL is the town corridor. This page is East Honolulu households.',
        },
        {
          q: 'Same as /kamaaina?',
          a: 'That page is the resident weekly line. This page is the Hawaiʻi Kai dinner door beside it.',
        },
      ],
      related: [
        { path: '/honolulu', label: 'Honolulu corridor' },
        { path: '/kamaaina', label: 'Kamaʻāina line' },
        { path: '/blog/dining-in-hawaii-kai', label: 'Hawaiʻi Kai kitchen notes' },
      ],
    },
    {
      slug: 'diamond-head',
      name: 'Diamond Head',
      h1: 'Diamond Head residences — the cone, not the Kahala estate belt.',
      title: 'Diamond Head residence dinners — adjacent rooms | myCHEF',
      description:
        'Diamond Head-adjacent residences with real dining rooms.',
      lede:
        'One volcanic cone through the sliders. Load-in in writing. This is not a second Gold Coast essay.',
      photo: 'cellDiamondHead',
      body: [
        '/kahala is the corridor. /gold-coast is the estate belt from Kahala through this cone. This page is Diamond Head residences as a named dinner door — building rules confirmed before anyone rolls a kit.',
        '/blog/dining-in-diamond-head is the kitchen note. Hotel suites without a cooktop stay declined. Celebration tables of 4–15 are the usual fit.',
        'We will not sell a rooftop we do not control. Send the building type on /quote.',
      ],
      faqs: [
        {
          q: 'Same as /gold-coast?',
          a: 'That page is the estate belt. This page is the Diamond Head house as its own dinner door.',
        },
        {
          q: 'Same as /kahala?',
          a: 'That URL is the corridor. This page sits next to it, on the cone.',
        },
      ],
      related: [
        { path: '/kahala', label: 'Kahala corridor' },
        { path: '/gold-coast', label: 'Gold Coast estates' },
        { path: '/blog/dining-in-diamond-head', label: 'Diamond Head kitchen notes' },
      ],
    },
    {
      slug: 'kakaako',
      name: 'Kakaʻako',
      h1: 'Kakaʻako tower ranges — compact kitchens, owned rooms.',
      title: 'Kakaʻako tower dinners — compact ranges | myCHEF',
      description:
        'Kakaʻako tower-residence dinners. Compact kitchens, freight elevators, quiet hours.',
      lede:
        'A small range in a tower, not a rooftop we do not own. Menus adapt to the kitchen that actually exists.',
      photo: 'cellKakaako',
      body: [
        '/honolulu is the town corridor. This page is Kakaʻako towers — compact ranges, freight elevators, quiet hours written before the night. We do not sell a rooftop we do not control.',
        '/blog/dining-in-kakaako is the kitchen note. /blog/condo-load-in is the dock. A unit without a functioning cooktop is declined.',
        'Send the building packet on /quote. The menu follows the range, not a brochure kitchen.',
      ],
      faqs: [
        {
          q: 'Can you cook on the rooftop?',
          a: 'Not a rooftop we do not own. A tower residence with a range. Open /quote.',
        },
        {
          q: 'Same as /blog/condo-load-in?',
          a: 'That note is the dock. This page is the Kakaʻako dinner door.',
        },
      ],
      related: [
        { path: '/honolulu', label: 'Honolulu corridor' },
        { path: '/downtown', label: 'Downtown dinners' },
        { path: '/blog/dining-in-kakaako', label: 'Kakaʻako kitchen notes' },
      ],
    },
    {
      slug: 'downtown',
      name: 'Downtown Honolulu',
      h1: 'Downtown pied-à-terre dinners — loading, not HCC.',
      title: 'Downtown Honolulu pied-à-terre dinners | myCHEF',
      description:
        'Downtown Honolulu pied-à-terre dinners. Parking and loading, not restaurant takeovers.',
      lede:
        'A compact dining room above the loading dock. HCC citywides stay closed. We cook the house, not a ballroom.',
      photo: 'cellDowntown',
      body: [
        '/honolulu is the town corridor. /conventions says HCC citywides are closed through 2027. This page is the downtown pied-à-terre — parking and loading are the constraint, not distance.',
        '/blog/dining-in-downtown is the kitchen note. We do not take over restaurants. A unit without a cooktop is declined.',
        `This page is one downtown table in the house.`,
      ],
      faqs: [
        {
          q: 'Can you take over a restaurant downtown?',
          a: 'No. Open /conventions and /what-we-dont-do. We cook residences.',
        },
        {
          q: 'Same as /honolulu?',
          a: 'That URL is the town corridor. This page is the downtown pied-à-terre door.',
        },
      ],
      related: [
        { path: '/honolulu', label: 'Honolulu corridor' },
        { path: '/conventions', label: 'Conventions' },
        { path: '/blog/dining-in-downtown', label: 'Downtown kitchen notes' },
      ],
    },
    {
      slug: 'kaneohe',
      name: 'Kāneʻohe',
      h1: 'Kāneʻohe town tables — quieter windward, published drive.',
      title: 'Kāneʻohe household dinners — published surcharge | myCHEF',
      description:
        'Kāneʻohe household dinners. Quieter than Kailua, still a drive. Published surcharge.',
      lede:
        'Koʻolau cliffs, a household range, the drive printed as its own line. Not a second 30-day beach-house page.',
      photo: 'cellKaneohe',
      body: [
        '/kailua is the 30-day windward corridor. This page is Kāneʻohe town — quieter, still a drive from town, surcharge quoted with the menu. Household dinners and multi-day stays.',
        '/blog/dining-in-kaneohe is the kitchen note. A cooktop is still required. We will not hide the drive inside the food line.',
        'Lanikai is the quieter beach house. This is the quieter town. Send the address on /quote.',
      ],
      faqs: [
        {
          q: 'Is the drive included?',
          a: 'No. It prints as a surcharge line. Open /coverage.',
        },
        {
          q: 'Same as /kailua?',
          a: 'That URL is the 30-day corridor. This page is Kāneʻohe town.',
        },
      ],
      related: [
        { path: '/kailua', label: 'Kailua corridor' },
        { path: '/lanikai', label: 'Lanikai dinners' },
        { path: '/coverage', label: 'Coverage' },
      ],
    },
    {
      slug: 'ewa',
      name: 'ʻEwa / Kapolei',
      h1: 'ʻEwa and Kapolei tables — leeward houses, Ko Olina provisioning.',
      title: 'ʻEwa household dinners — leeward west-side base | myCHEF',
      description:
        'ʻEwa and Kapolei household dinners. Leeward residential, west-side base, no town surcharge.',
      lede:
        'Closer to Ko Olina provisioning than to Waikīkī. Resident houses and west-side overflow — not a resort-residence clone.',
      photo: 'cellEwa',
      body: [
        '/ko-olina is the legal short-stay villa door. This page is ʻEwa and Kapolei — leeward households, west-side base, no town surcharge. A cooktop is still required.',
        '/blog/dining-in-ewa is the kitchen note. /short-stay is the legal villa pool fact. We will not sell Kapolei as a Waikīkī dinner.',
        `This page is one leeward household table.`,
      ],
      faqs: [
        {
          q: 'Same as /ko-olina?',
          a: 'That URL is the villa corridor. This page is leeward households beside it.',
        },
        {
          q: 'Town surcharge?',
          a: 'No. West-side base. Open /coverage.',
        },
      ],
      related: [
        { path: '/ko-olina', label: 'Ko Olina corridor' },
        { path: '/short-stay', label: 'Short-stay villas' },
        { path: '/blog/dining-in-ewa', label: 'ʻEwa kitchen notes' },
      ],
    },
  ],
  maui: [
    {
      slug: 'upcountry',
      name: 'Upcountry',
      h1: 'Upcountry Maui tables — elevation is a line, not a farm claim.',
      title: 'Upcountry Maui villa dinner — elevation surcharge | myCHEF',
      description:
        'Upcountry Maui estate dinners. Published elevation surcharge. Named farms only after written verification.',
      lede:
        'Cooler air, a longer drive, Haleakalā on the slope. The surcharge is printed. Farm names wait for verification.',
      photo: 'cellUpcountry',
      body: [
        '/wailea is the South Maui corridor. This page is Upcountry — elevation and drive as their own line, not a Wailea add-on. Outdoor setups inherit a wet-weather backup.',
        '/blog/dining-in-upcountry is the kitchen note. /blog/sourcing-honesty is why we will not print a farm we have not verified. Makawao and Kula sit as their own doors beside this cell.',
        `This page is one elevation table that justifies the drive.`,
      ],
      faqs: [
        {
          q: 'Will you print a farm name?',
          a: 'Named farms wait for written verification. Sitting in Kula mist does not earn a grower credit. The rule lives on /blog/sourcing-honesty. This door stays the elevation dinner, not a farm brochure.',
        },
        {
          q: 'Same as /wailea?',
          a: 'No. /wailea is South Maui resort residences in the base zone. This page is the climb — Kula, Makawao, and Haʻikū — with the surcharge as its own quote line. They are not one night. Condos on the coast: /kihei.',
        },
        {
          q: 'Where does the Kula, Makawao, or Haʻikū drive print?',
          a: 'On its own line. Kula, Makawao, and Haʻikū estates sit above the coast, so the climb is a published surcharge on the written quote. It is not buried in the fish. South Maui resort doors stay /wailea. Tariff: /pricing.',
        },
        {
          q: 'What is inside an Upcountry Signature night at $225–$375?',
          a: 'On this slope the plated night is $225–$375 per guest, groceries included in the band. The elevation fee is a separate printed line, not a quieter coast number. Then 20% service and Hawaiʻi GET up to 4.712%. A 50% deposit holds the date. Gratuity is voluntary. Card: /pricing. Dates: /quote?island=maui.',
        },
        {
          q: 'Stay Chef from $1,550 on an estate week — groceries at cost?',
          a: 'Retreat and estate weeks start at Stay Chef from $1,550 a day. The shop bills at cost with receipts. That is not Signature, where food is already inside $225–$375. Extra meals that day are quoted. Send the week on /quote?island=maui.',
        },
        {
          q: 'What does a cooler Upcountry estate kitchen need?',
          a: 'A cooktop, a fridge, and a table. Cooler evenings need both a lanai plan and an indoor plan, written before anyone shops. An uncovered lawn is not the only setup. Haʻikū wind belongs in that note. Island home: /.',
        },
        {
          q: 'Can one night cover Upcountry and a South Maui villa?',
          a: 'No. An elevation dinner beside a South or West Maui villa week is two dated quote lines, not one same-night double. /wailea stays the coast day. This slope is its own date. We will not hide the second drive. Kīhei weeks: /kihei.',
        },
        {
          q: 'How do I enquire for an Upcountry estate?',
          a: 'File the estate street, the nights, and the seats on /quote?island=maui. WhatsApp https://wa.me/18084687748 and +1 808 468 7748 reach the same desk, quotes@mychef-hawaii.com. Maui is quote-open. The elevation line is on the written total. See /pricing.',
        },
      ],
      related: [
        { path: '/wailea', label: 'Wailea corridor' },
        { path: '/makawao', label: 'Makawao dinners' },
        { path: '/blog/sourcing-honesty', label: 'Sourcing honesty' },
      ],
    },
    {
      slug: 'napili',
      name: 'Nāpili',
      h1: 'Nāpili houses — West Maui, never a Lahaina clone page.',
      title: 'Nāpili villa dinner — West Maui houses | myCHEF',
      description:
        'Nāpili West Maui villa dinners. Same timing rules as Kāʻanapali and Kapalua. Never marketed as Lahaina.',
      lede:
        'West Maui houses between the named corridors. Saturday traffic is planned. This is not a Lahaina destination page.',
      photo: 'cellNapili',
      body: [
        '/kaanapali and /kapalua are the live West Maui corridors. /lahaina is its own dinner door and is not copied here. This page is Nāpili — villa weeks and small celebrations under the same West Maui timing.',
        '/west-maui is the corridor essay. /blog/dining-in-napili is the kitchen note. Saturday arrival is planned, not assumed.',
      ],
      faqs: [
        {
          q: 'Is this a Lahaina page?',
          a: 'No. Open /lahaina for that corridor. This page is Nāpili.',
        },
        {
          q: 'Same as /west-maui?',
          a: 'That page is the corridor essay. This page is the Nāpili dinner door.',
        },
      ],
      related: [
        { path: '/kapalua', label: 'Kapalua corridor' },
        { path: '/west-maui', label: 'West Maui corridor' },
        { path: '/lahaina', label: 'Lahaina corridor' },
      ],
    },
    {
      slug: 'paia',
      name: 'Pāʻia / Haiku',
      h1: 'Pāʻia and Haiku tables — quote-only North Shore, not a doorway.',
      title: 'Pāʻia estate dinner — quote-only North Shore | myCHEF',
      description:
        'Pāʻia and Haiku estate dinners. Quote-only North Shore module. Extended drive.',
      lede:
        'Trade wind, a North Shore estate, the drive quoted — not stacked with a Wailea lunch as one unpaid day.',
      photo: 'cellPaia',
      body: [
        'Quote-only. Extended drive. We will not publish a flat fee for this cell. Estate dinners when the drive is planned, not stacked with Wailea.',
        '/blog/dining-in-paia is the kitchen note. /upcountry is the elevation door. This page is the North Shore module as a dinner door, still quote-only.',
        'Send the address on /quote. A band is not a Book-now button for this shore.',
      ],
      faqs: [
        {
          q: 'Is there a published fee?',
          a: 'No. Quote-only. The drive prints with the menu.',
        },
        {
          q: 'Can you do Wailea lunch and Pāʻia dinner the same day?',
          a: 'Not as one unpaid day. Write both, or pick one.',
        },
      ],
      related: [
        { path: '/upcountry', label: 'Upcountry dinners' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'makawao',
      name: 'Makawao',
      h1: 'Makawao town tables — Upcountry weather on the quote.',
      title: 'Makawao town dinner — Upcountry estate tables | myCHEF',
      description:
        'Makawao town estate dinners. Upcountry surcharge. Weather can turn on outdoor setups.',
      lede:
        'Town, not the whole elevation cell. Retreat houses and estate tables. The weather backup is written.',
      photo: 'cellMakawao',
      body: [
        '/upcountry is the elevation cell. This page is Makawao town — surcharge, retreat houses, weather that can turn on a lawn. Named farms only after written verification.',
        '/blog/dining-in-makawao is the kitchen note. A cooktop is still required. Haleakalā / Kula is a different slope door.',
        'Send the address on /quote. We will not pretend Makawao is a Wailea clone.',
      ],
      faqs: [
        {
          q: 'Same as /upcountry?',
          a: 'That page is the elevation cell. This page is Makawao town.',
        },
        {
          q: 'Outdoor dinner if it rains?',
          a: 'The backup is written on the quote. We do not invent a dry lawn.',
        },
      ],
      related: [
        { path: '/upcountry', label: 'Upcountry dinners' },
        { path: '/haleakala', label: 'Kula dinners' },
        { path: '/blog/dining-in-makawao', label: 'Makawao kitchen notes' },
      ],
    },
    {
      slug: 'honokowai',
      name: 'Honokōwai',
      h1: 'Honokōwai condo ranges — West Maui strip, not Kapalua.',
      title: 'Honokōwai villa dinner — West Maui condos | myCHEF',
      description:
        'Honokōwai West Maui condo dinners. Compact kitchens between Kāʻanapali and Kapalua.',
      lede:
        'The residential strip. Multi-day chef days more than one-off halos. The menu fits the range that is actually in the unit.',
      photo: 'cellHonokowai',
      body: [
        '/kaanapali and /kapalua are the named corridors. This page is Honokōwai — West Maui condos on the strip between them. Base zone. Compact kitchens are common.',
        '/blog/dining-in-honokowai is the kitchen note. /blog/condo-load-in is the dock. We will not copy /lahaina onto this URL.',
        'Multi-day chef days fit this inventory better than a one-night halo. Send the unit type on /quote.',
      ],
      faqs: [
        {
          q: 'Same as /kapalua?',
          a: 'That URL is the northwest corridor. This page is the condo strip between Kāʻanapali and Kapalua.',
        },
        {
          q: 'Tiny kitchen?',
          a: 'The menu fits the range. Load-in honesty sits on /blog/condo-load-in.',
        },
      ],
      related: [
        { path: '/kaanapali', label: 'Kāʻanapali corridor' },
        { path: '/napili', label: 'Nāpili dinners' },
        { path: '/blog/condo-load-in', label: 'Condo load-in' },
      ],
    },
    {
      slug: 'waikapu',
      name: 'Waikapū',
      h1: 'Waikapū valley estates — central Maui, not a resort corridor.',
      title: 'Waikapū estate dinner — central valley houses | myCHEF',
      description:
        'Waikapū central-valley estate dinners. Surcharge from Wailea or West Maui.',
      lede:
        'Inland estates, not a resort lawn. The drive from Wailea or West Maui prints. Private houses, not visitor condos.',
      photo: 'cellWaikapu',
      body: [
        '/wailea is South Maui. This page is Waikapū — central valley estates, surcharge for drive time, not a resort corridor. We will not stack a Wailea lunch with a Waikapū dinner as one chef day without writing it.',
        '/blog/dining-in-waikapu is the kitchen note. /south-maui is the South Maui essay. A cooktop is still required.',
        'Send the address on /quote. Visitor-condo inventory is the wrong fit here.',
      ],
      faqs: [
        {
          q: 'Same as /wailea?',
          a: 'That URL is the South Maui corridor. This page is the central valley.',
        },
        {
          q: 'Can you stack Wailea and Waikapū in one day?',
          a: 'Only if both nights are written. We will not hide a second drive.',
        },
      ],
      related: [
        { path: '/wailea', label: 'Wailea corridor' },
        { path: '/south-maui', label: 'South Maui corridor' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'haleakala',
      name: 'Haleakalā / Kula',
      h1: 'Kula and Haleakalā tables — temperature changes the chef day.',
      title: 'Kula elevation dinner — Haleakalā slope | myCHEF',
      description:
        'Kula / Haleakalā slope dinners. High elevation, surcharge, temperature on the plan.',
      lede:
        'Above the cloud line some afternoons. The drive and the temperature both change the chef day. Farm names wait for verification.',
      photo: 'cellHaleakala',
      body: [
        '/upcountry is the broader elevation cell. This page is Kula on the Haleakalā slope — higher, cooler, surcharge. Outdoor fire is a weather plan, not a promise.',
        '/blog/dining-in-haleakala is the kitchen note. Named farms only after written verification — /blog/sourcing-honesty. Makawao is the town door.',
        'Send the elevation and the address on /quote. We will not print a farm we have not verified.',
      ],
      faqs: [
        {
          q: 'Same as /upcountry?',
          a: 'That page is the broader elevation cell. This page is Kula on the slope.',
        },
        {
          q: 'Will you name a Kula farm?',
          a: 'After written verification. Open /blog/sourcing-honesty.',
        },
      ],
      related: [
        { path: '/upcountry', label: 'Upcountry dinners' },
        { path: '/makawao', label: 'Makawao dinners' },
        { path: '/blog/sourcing-honesty', label: 'Sourcing honesty' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'haena',
      name: 'Hāʻena',
      h1: 'Hāʻena Far-North tables — 72-hour road, inquiry.',
      title: 'Hāʻena villa dinner — Far-North inquiry | myCHEF Kauai',
      description:
        'Hāʻena Far-North dinners at inquiry. Quote-only, 72-hour notice, Hanalei-bridge weather.',
      lede:
        'Past the bridge. Planned events only. A closed road moves the night; it does not eat the deposit. Inquiry until we can staff.',
      photo: 'cellHaena',
      body: [
        '/hanalei is the nearest corridor at inquiry. /hanalei-bridge is the weather clause. This page is Hāʻena — quote-only Far North, seventy-two-hour notice, never same-day.',
        '/blog/dining-in-haena is the kitchen note. /north-shore is the North Shore cell. Inquiry stage is not a Book-now button.',
        `This page is one Far-North inquiry table.`,
      ],
      faqs: [
        {
          q: 'Can you take same-day Hāʻena?',
          a: 'No. Planned events only. Send the date on /quote.',
        },
        {
          q: 'If the bridge closes?',
          a: 'We reschedule. The clause lives on /hanalei-bridge. The deposit is not eaten by weather.',
        },
      ],
      related: [
        { path: '/hanalei', label: 'Hanalei corridor' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'koloa',
      name: 'Kōloa',
      h1: 'Kōloa town tables — South Shore houses, not a Poʻipū clone.',
      title: 'Kōloa town dinner — South Shore inquiry | myCHEF Kauai',
      description:
        'Kōloa town dinners at inquiry. South Shore houses adjacent to Poʻipū, not a resort-residence copy.',
      lede:
        'Town, not the resort lawn. Retreat houses and small weddings to about 75. Inquiry until we can staff.',
      photo: 'cellKoloa',
      body: [
        '/poipu is the South Shore corridor at inquiry. /south-shore is the shore cell. This page is Kōloa town — same surcharge map, not a Poʻipū clone. A cooktop is still required.',
        '/blog/dining-in-koloa is the kitchen note. We will not pretend Kōloa is a resort-residence page. Inquiry is the honest status.',
        'Send the address on /quote. A band is not a Book-now button.',
      ],
      faqs: [
        {
          q: 'Is Kōloa town the same document as /poipu?',
          a: '/poipu is the South Shore corridor — resort lawns and arrival houses. This URL is Kōloa town: retreat houses and small celebrations to about 75, on the same surcharge map, not a clone of that corridor. Both are inquiry. Shore cell: /south-shore. Kitchen note: /blog/dining-in-koloa.',
        },
        {
          q: 'Is Kōloa live to book, or still an inquiry?',
          a: 'Still an inquiry. A Kōloa retreat house does not get an instant confirm. Put the street, the headcount, and the week on /quote?island=kauai and wait for a written reply from a crew that can actually staff it. /poipu is the same stage for resort lawns. It does not turn this town into a second live calendar.',
        },
        {
          q: 'Which grocery line applies in a Kōloa house — Signature or Stay Chef?',
          a: 'They stay apart. A Signature night is $225–$375 a guest and the shop rides inside that band, with no separate grocery invoice. A Stay Chef day from $1,650 is the chef fee; the shop prints at cost with merchant receipts. Those lines do not fold together. After the food, 20% service and Hawaiʻi GET up to 4.712% print as separate lines. The deposit is 50% once a crew can hold the week. Gratuity is never required. Tariff: /pricing.',
        },
        {
          q: 'Is an arrival-night dinner the usual first ask in Kōloa?',
          a: 'Yes, on this South Shore. You land nearer Līhuʻe, the fridge is not the plan, and someone else is at the range that night. It is still an inquiry, not a button. Write the landing time and the town address on /quote?island=kauai. The corridor version of that ask lives on /poipu. This page stays the town house.',
        },
        {
          q: 'Kōloa is closer to Līhuʻe than Princeville — does the food band drop?',
          a: 'No. Kōloa sits on the South Shore surcharge with Poʻipū, outside the Līhuʻe and Kapaʻa base, and closer to the airport than /princeville. The shorter drive is a zone line on the quote. It is not a discount on the fish. Signature stays $225–$375 a guest on both shores. North Shore estates: /princeville. Shore map: /south-shore.',
        },
        {
          q: 'What if the Kōloa room has no cooktop?',
          a: 'We decline it. Hotel rooms and lock-offs without a cooktop are not a town-house dinner. If the kitchen has heat, cold storage, and seats for the list, send the address. If it does not, we say so before a deposit. The resort-belt version of that rule is /poipu. This page is the town.',
        },
        {
          q: 'Date Night, a small retreat, or a wedding list in Kōloa?',
          a: 'Two seats in a town house use Date Night at $975–$1,425, a fixed evening. A small retreat that cooks more than one night uses Stay Chef from $1,650, shop at cost. When the headcount grows toward an estate wedding, stop stacking nights in chat and open /catering for a staffed written total. The three lines never blend. Rhythm goes on /quote?island=kauai.',
        },
        {
          q: 'How do I enquire for Kōloa with the shore and the dates?',
          a: 'Paid inquiry, written quote. Open /quote?island=kauai with the South Shore address, dates, and headcount. Or WhatsApp +1 808 468 7748 — https://wa.me/18084687748 — when the shore and the dates are ready to book. Desk: quotes@mychef-hawaii.com. Hawaii-hours reply when a crew can hold that week. Card: /pricing. Corridor door if the house is actually Poʻipū: /poipu.',
        },
      ],
      related: [
        { path: '/poipu', label: 'Poʻipū corridor' },
        { path: '/south-shore', label: 'South Shore' },
        { path: '/princeville', label: 'Princeville estates' },
        { path: '/pricing', label: 'Rate card' },
        { path: '/quote', label: 'Inquiry form' },
        { path: '/blog/dining-in-koloa', label: 'Kōloa kitchen notes' },
      ],
    },
    {
      slug: 'lihue',
      name: 'Līhuʻe',
      h1: 'Līhuʻe in-town tables — staging, not the villa hero.',
      title: 'Līhuʻe household dinner — staging town, inquiry | myCHEF',
      description:
        'Līhuʻe in-town household dinners at inquiry. Airport-adjacent staging, not villa inventory.',
      lede:
        'The planned base. In-town households and staging. Princeville and Poʻipū stay the estate doors.',
      photo: 'cellLihue',
      body: [
        'Planned base when we launch. Airport-adjacent, not the villa inventory. This page is Līhuʻe households — included drive, inquiry until we can staff. We will not sell Līhuʻe as a North Shore estate page.',
        '/blog/dining-in-lihue is the kitchen note. /princeville and /poipu stay the estate dinner doors. A cooktop is still required.',
      ],
      faqs: [
        {
          q: 'Is this the villa product?',
          a: 'No. Staging town. Open /princeville or /poipu for estate inventory.',
        },
        {
          q: 'Included drive?',
          a: 'Yes, at launch. Inquiry. Open /coverage.',
        },
      ],
      related: [
        { path: '/poipu', label: 'Poʻipū corridor' },
        { path: '/princeville', label: 'Princeville corridor' },
        { path: '/coverage', label: 'Coverage' },
      ],
    },
    {
      slug: 'kalaheo',
      name: 'Kalāheo',
      h1: 'Kalāheo residential tables — south-west, inquiry.',
      title: 'Kalāheo household dinner — south-west inquiry | myCHEF',
      description:
        'Kalāheo south-west household dinners at inquiry. Residential tables between Līhuʻe and the South Shore villas.',
      lede:
        'Quieter houses, not visitor-villa inventory. Surcharge. Inquiry until we can staff.',
      photo: 'cellKalaheo',
      body: [
        '/poipu is the South Shore corridor. This page is Kalāheo — south-west residential, surcharge, not a visitor-villa cluster. Inquiry until we can staff.',
        '/blog/dining-in-kalaheo is the kitchen note. ʻEleʻele sits further toward the west. A cooktop is still required.',
        'Send the address on /quote. We will not copy Poʻipū onto this town.',
      ],
      faqs: [
        {
          q: 'Same as /poipu?',
          a: 'That URL is the corridor. This page is Kalāheo residential — at inquiry.',
        },
        {
          q: 'Are you live on every house below?',
          a: 'Inquiry. We crew when we can staff.',
        },
      ],
      related: [
        { path: '/poipu', label: 'Poʻipū corridor' },
        { path: '/koloa', label: 'Kōloa dinners' },
        { path: '/eleele', label: 'ʻEleʻele dinners' },
      ],
    },
    {
      slug: 'waimea',
      name: 'Waimea',
      h1: 'Kauaʻi Waimea tables — west-side distance from Līhuʻe.',
      title: 'Kauai Waimea villa dinner — west-side inquiry | myCHEF',
      description:
        'Kauaʻi Waimea west-side dinners at inquiry. Distance from Līhuʻe is the story.',
      lede:
        'West Kauaʻi, not the Hawaiʻi Island ranch. Extended surcharge. Advance notice. Inquiry until we can staff.',
      photo: 'cellKauaiWaimea',
      body: [
        'This is Kauaʻi Waimea — west-side distance from Līhuʻe, extended surcharge, inquiry. It is not the Hawaiʻi Island ranch door on bigisland.mychef-hawaii.com/waimea.',
        '/blog/dining-in-waimea on this host is the kitchen note. Hanapēpē is the west-side town door. A cooktop is still required. Advance notice.',
      ],
      faqs: [
        {
          q: 'Is this the Big Island ranch?',
          a: 'No. That door is on the Hawaiʻi Island host. This page is west Kauaʻi.',
        },
        {
          q: 'Same-day from Līhuʻe?',
          a: 'Advance notice. Extended surcharge. Open /coverage, then /quote.',
        },
      ],
      related: [
        { path: '/hanapepe', label: 'Hanapēpē dinners' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'hanapepe',
      name: 'Hanapēpē',
      h1: 'Hanapēpē town houses — west Kauaʻi, not a visitor cluster.',
      title: 'Hanapēpē household dinner — west-side inquiry | myCHEF',
      description:
        'Hanapēpē west-side town dinners at inquiry. Private houses, not a visitor-villa cluster.',
      lede:
        'Town houses on the west. Surcharge. We will not sell this as a North Shore estate page.',
      photo: 'cellHanapepe',
      body: [
        '/waimea on this host is the west-side distance door. This page is Hanapēpē town — private houses, surcharge, inquiry. Not a visitor-villa cluster and not a North Shore copy.',
        '/blog/dining-in-hanapepe is the kitchen note. A cooktop is still required. We crew when we can staff.',
        'Send the address on /quote. Advance notice on the west side.',
      ],
      faqs: [
        {
          q: 'Same as Kauaʻi /waimea?',
          a: 'That page is west-side distance. This page is Hanapēpē town.',
        },
        {
          q: 'North Shore inventory?',
          a: 'No. Open /princeville. This is west Kauaʻi.',
        },
      ],
      related: [
        { path: '/waimea', label: 'Kauaʻi Waimea dinners' },
        { path: '/eleele', label: 'ʻEleʻele dinners' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'anahola',
      name: 'Anahola',
      h1: 'Anahola coast tables — quieter than Kapaʻa, inquiry.',
      title: 'Anahola household dinner — east-north inquiry | myCHEF',
      description:
        'Anahola east-north coast dinners at inquiry. Quieter than Kapaʻa, still a drive from Līhuʻe.',
      lede:
        'East-north coast houses. Surcharge at launch. Inquiry until we can staff. Not a second Kapaʻa corridor.',
      photo: 'cellAnahola',
      body: [
        '/kapaa is the east-side corridor at inquiry. This page is Anahola — quieter coast, surcharge, household dinners. Still a drive from Līhuʻe staging.',
        '/blog/dining-in-anahola is the kitchen note. /north-shore is the North Shore cell, not this coast. A cooktop is still required.',
        'Send the address on /quote. Inquiry is the honest status.',
      ],
      faqs: [
        {
          q: 'Same as /kapaa?',
          a: 'That URL is the east-side corridor. This page is the quieter coast next to it.',
        },
        {
          q: 'Are you live?',
          a: 'Inquiry. Open /quote.',
        },
      ],
      related: [
        { path: '/kapaa', label: 'Kapaʻa corridor' },
        { path: '/hanalei', label: 'Hanalei corridor' },
        { path: '/blog/dining-in-anahola', label: 'Anahola kitchen notes' },
      ],
    },
    {
      slug: 'eleele',
      name: 'ʻEleʻele',
      h1: 'ʻEleʻele houses — between Kalāheo and the west, inquiry.',
      title: 'ʻEleʻele household dinner — south-west inquiry | myCHEF',
      description:
        'ʻEleʻele south-west household dinners at inquiry. Between Kalāheo and the west side.',
      lede:
        'Further toward the west. Surcharge. Advance notice. Private houses, not a South Shore villa page.',
      photo: 'cellEleele',
      body: [
        '/kalaheo is the south-west town door. This page is ʻEleʻele — further toward the west, surcharge, advance notice, inquiry. We will not pretend this is a South Shore villa page.',
        '/blog/dining-in-eleele is the kitchen note. Hanapēpē continues west. A cooktop is still required.',
        'Send the address on /quote. We crew when we can staff.',
      ],
      faqs: [
        {
          q: 'Same as /kalaheo?',
          a: 'That page is the south-west town. This page is further toward the west.',
        },
        {
          q: 'Poʻipū inventory?',
          a: 'No. Open /poipu. This is south-west residential.',
        },
      ],
      related: [
        { path: '/kalaheo', label: 'Kalāheo dinners' },
        { path: '/hanapepe', label: 'Hanapēpē dinners' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'kailua-kona',
      name: 'Kailua-Kona',
      h1: 'Kailua-Kona town tables — south end of the west-side corridor.',
      title: 'Kailua-Kona town dinner — west-side inquiry | myCHEF',
      description:
        'Kailua-Kona town dinners at inquiry. South end of the west-side corridor.',
      lede:
        'Town, not the whole west-side radius. Ironman weeks compress the calendar — that honesty lives on /ironman-weeks. Inquiry until we can staff.',
      photo: 'cellKailuaKona',
      body: [
        '/kona is the west-side corridor. /kohala-corridor is the radius. This page is Kailua-Kona town — the south end of that corridor, villa dinners, inquiry. Event weeks flag dates; they do not invent a kitchen.',
        '/blog/dining-in-kailua-kona is the kitchen note. /ironman-weeks is the calendar cell. East side stays a dedicated day — /east-side.',
      ],
      faqs: [
        {
          q: 'Same as /kona?',
          a: 'That URL is the corridor. This page is Kailua-Kona town at the south end.',
        },
        {
          q: 'Hilo the same day?',
          a: 'No. Open /east-side. Dedicated staffing.',
        },
      ],
      related: [
        { path: '/kona', label: 'Kona corridor' },
        { path: '/ironman-weeks', label: 'Event weeks' },
        { path: '/keauhou', label: 'Keauhou dinners' },
      ],
    },
    {
      slug: 'keauhou',
      name: 'Keauhou',
      h1: 'Keauhou resort-residence tables — south of town, still west side.',
      title: 'Keauhou villa dinner — south of Kona town | myCHEF',
      description:
        'Keauhou resort-residence dinners at inquiry. South of Kailua-Kona, still the west-side corridor.',
      lede:
        'Bay light, still the west-side team. Not a Hilo add-on. Inquiry until we can staff.',
      photo: 'cellKeauhou',
      body: [
        '/kona is the corridor. This page is Keauhou — south of town, still base zone at launch, resort-residence dinners. Inquiry until we can staff.',
        '/blog/dining-in-keauhou is the kitchen note. East side stays a dedicated day — /east-side. A cooktop is still required.',
        'Send the property type on /quote. We will not stack this with Hilo.',
      ],
      faqs: [
        {
          q: 'Same as /kona?',
          a: 'That URL is the corridor. This page is south of town, still west side.',
        },
        {
          q: 'East side from here?',
          a: 'No. Open /east-side.',
        },
      ],
      related: [
        { path: '/kona', label: 'Kona corridor' },
        { path: '/kailua-kona', label: 'Kailua-Kona dinners' },
        { path: '/east-side', label: 'East-side rule' },
      ],
    },
    {
      slug: 'mauna-lani',
      name: 'Mauna Lani',
      h1: 'Mauna Lani resort tables — one Kohala community, not the island.',
      title: 'Mauna Lani villa dinner — Kohala community | myCHEF',
      description:
        'Mauna Lani Kohala resort-residence dinners at inquiry. One community inside the west-side radius.',
      lede:
        'Lava terrace, one resort community. Same corridor as Waikoloa. Not a claim on the whole island.',
      photo: 'cellMaunaLani',
      body: [
        '/waikoloa and /kohala are the named corridors. /kohala-corridor is the radius. This page is Mauna Lani — one community, base zone, estate and resort-residence dinners at inquiry.',
        '/blog/dining-in-mauna-lani is the kitchen note. East side stays /east-side. We will not sell Mauna Lani as a Hilo page.',
      ],
      faqs: [
        {
          q: 'Same as /waikoloa?',
          a: 'Same corridor, different community. This page is Mauna Lani.',
        },
        {
          q: 'Hilo from here?',
          a: 'No. Open /east-side.',
        },
      ],
      related: [
        { path: '/waikoloa', label: 'Waikoloa corridor' },
        { path: '/kohala', label: 'Kohala corridor' },
        { path: '/puako', label: 'Puakō dinners' },
      ],
    },
    {
      slug: 'mauna-kea',
      name: 'Mauna Kea resort',
      h1: 'Mauna Kea resort belt — the community, never the summit.',
      title: 'Mauna Kea resort dinner — Kohala belt, not the summit | myCHEF',
      description:
        'Mauna Kea resort-belt dinners at inquiry. Named for the Kohala community, not the mountain summit.',
      lede:
        'North Kohala resort houses. We will not sell a summit dinner. Same west-side radius as Waikoloa.',
      photo: 'cellMaunaKea',
      body: [
        '/kohala is the named corridor. This page is the Mauna Kea resort belt — the community, never the summit. Base zone. Villa dinners at inquiry.',
        '/blog/dining-in-mauna-kea is the kitchen note. We will not sell a summit dinner. East side stays /east-side.',
        'Send the property on /quote. The mountain is geography, not a kitchen we staff.',
      ],
      faqs: [
        {
          q: 'Do you cook at the summit?',
          a: 'No. This page is the resort community on the coast.',
        },
        {
          q: 'Same as /kohala?',
          a: 'That URL is the corridor. This page is one belt inside it.',
        },
      ],
      related: [
        { path: '/kohala', label: 'Kohala corridor' },
        { path: '/mauna-lani', label: 'Mauna Lani dinners' },
        { path: '/kohala-corridor', label: 'West-side radius' },
      ],
    },
    {
      slug: 'hilo',
      name: 'Hilo',
      h1: 'Hilo town tables — a dedicated east-side day, not a Kona add-on.',
      title: 'Hilo town dinner — dedicated east-side day | myCHEF',
      description:
        'Hilo town dinners at inquiry. Quote-only, 2.5–3 hours from Kona, dedicated staffing.',
      lede:
        'Rain, ʻōhiʻa, a different climate. If we staff Hilo, it is its own team day. We will not sell a west-side round trip.',
      photo: 'cellHilo',
      body: [
        '/east-side is the crossing rule. This page is Hilo town as a dinner door — still quote-only, still dedicated staffing, still inquiry. 2.5–3 hours from Kona.',
        '/blog/dining-in-hilo is the kitchen note. Volcano is a different east-side door. A cooktop is still required. We will not publish “now serving Hilo” ahead of a crew.',
      ],
      faqs: [
        {
          q: 'Hilo town versus the east-side crossing rule versus Volcano?',
          a: '/east-side is the crossing rule. This page is Hilo town as a dinner door. /volcano is the lodge door at cooler elevation. Same east-side day class, different kitchens. We will not sell Hilo as a Volcano page or the reverse.',
        },
        {
          q: 'Why can’t a Kona or Waikoloa night absorb Hilo town?',
          a: 'The saddle is the point. Hilo town is a separate crew day, about 2.5–3 hours from the resorts, with its own staffing quote. This page is that town door. /east-side is the rule that forbids the unpaid round trip. /kona stays the west-side town. We do not tuck a Hilo table onto a Kohala evening.',
        },
        {
          q: 'Can I treat “Hilo” as live service on this host?',
          a: 'No. Inquiry only. We will not print “now serving Hilo” until a crew exists for that side. East-side dates go on /quote?island=bigisland. The band on /pricing is not a Hilo calendar. A reply means someone can actually hold the week — not a placeholder roster.',
        },
        {
          q: 'Does an east-side Hilo day use the same grocery models as the west-side card?',
          a: 'The food lines are the Hawaiʻi Island card, and the staffing is not a west-side afternoon. Signature $210–$325 a guest already includes the shop. ENTRY from $165 is the shorter Hilo night when the town kitchen fits it. Stay Chef from $1,450 is the fee; Hilo groceries print at cost with receipts and never ride inside that fee. Crossing labor is its own day on the quote. Then 20% service, Hawaiʻi GET up to 4.712%, and a 50% deposit once a crew can hold the date. Gratuity is never required. Card: /pricing.',
        },
        {
          q: 'Does Hilo rain change the cooktop rule?',
          a: 'No. A wet town still needs a working range, cold storage, and seats. A hotel room or lock-off without heat is declined before a deposit, even when the lanai looks usable between showers. Outdoor fire is a separate weather plan. The kitchen test is not optional because the drive was long.',
        },
        {
          q: 'How do you plan around Hilo rain?',
          a: 'Honestly. Hilo is a wetter climate. Outdoor fire or a lawn table is a plan we can keep or we decline it. Covered backup is written when the table is outdoors. We would rather move the night than sell a dry lawn we cannot keep. Kitchen note: /blog/dining-in-hilo.',
        },
        {
          q: 'Ironman or event weeks — can you stack Hilo and Waikoloa?',
          a: 'Flag event weeks early. One crew, one heavy week. We will not sell a Hilo lunch and a Waikoloa dinner on the same Saturday as a free fantasy. Compressed calendars sit on /ironman-weeks when that week applies. Still inquiry.',
        },
        {
          q: 'How do I send Hilo dates without treating them as a Kona add-on?',
          a: 'Use /quote?island=bigisland and write the Hilo street, the east-side dates, and the headcount as their own day. WhatsApp https://wa.me/18084687748 (+1 808 468 7748) once that day is real. Email quotes@mychef-hawaii.com. A reply comes in Hawaii hours only if a crew can make the crossing. Tariff: /pricing. The rule stays on /east-side — do not file this as a Waikoloa afternoon.',
        },
      ],
      related: [
        { path: '/east-side', label: 'East-side rule' },
        { path: '/volcano', label: 'Volcano dinners' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'volcano',
      name: 'Volcano',
      h1: 'Volcano lodge kitchens — weather first, dedicated staffing.',
      title: 'Volcano lodge dinner — dedicated east-side staffing | myCHEF',
      description:
        'Volcano lodge and estate dinners at inquiry. Quote-only east side, dedicated staffing, weather on the plan.',
      lede:
        'Cooler elevation, ferns, mist. Outdoor fire is a plan we can keep or we decline it. Never squeezed into a west-side day.',
      photo: 'cellVolcano',
      body: [
        '/east-side is the rule. /hilo is the town door. This page is Volcano — lodge and estate kitchens, quote-only, 2.5–3 hours from Kona, dedicated staffing.',
        '/blog/dining-in-volcano is the kitchen note. Weather is its own plan. A cooktop is still required. Inquiry.',
        'Send the dates on /quote. We will not promise a lawn we cannot keep dry.',
      ],
      faqs: [
        {
          q: 'Same as /hilo?',
          a: 'No. /hilo is the town door — streets and a town range. This page is lodges and estates near the park: ferns, mist, a cooler kitchen. The crossing rule stays on /east-side. We do not paste the Hilo page up the slope.',
        },
        {
          q: 'Outdoor fire?',
          a: 'Only when a weather plan holds. Mist and rain at this elevation move the table indoors. That indoor backup is written, or we decline the lawn. We will not promise a dry fern clearing.',
        },
        {
          q: 'Why is a Volcano lodge a dedicated day from Kona?',
          a: 'The drive is 2.5–3 hours from Kona. We quote it as its own east-side day and never squeeze it onto a west-side afternoon. The crossing rule is /east-side. Town kitchens stay /hilo. Lodge address: /quote?island=bigisland.',
        },
        {
          q: 'What does inquiry stage mean for a park-side lodge?',
          a: 'We crew the lodge properly or we decline. It is not a Book-now. A published band is not a live roster. Send the dates and wait for a written reply when an east-side crew can hold that week. Island home: /.',
        },
        {
          q: 'Signature $210–$325 or ENTRY from $165 at a Volcano lodge?',
          a: 'A park-lodge plated night is Signature $210–$325 per guest, with the shop already in the band. ENTRY from $165 is only a shorter cabin list when the range can hold it. Service is 20%. Tax prints up to 4.712%. Half, the 50%, waits until someone can staff the slope. Gratuity is never required. Read /pricing before you enquire.',
        },
        {
          q: 'Stay Chef from $1,450 for a lodge week — who pays for the shop?',
          a: 'A lodge week is Stay Chef from $1,450 a day — chef and one meal — while the Volcano shop is a receipt stack at cost, zero markup. Do not hide that shop inside the day fee, or inside Signature $210–$325. A second sitting is written. File the week on /quote?island=bigisland.',
        },
        {
          q: 'What does a cold, wet Volcano cabin kitchen need?',
          a: 'A working cooktop. Cold, wet evenings at elevation need an indoor plan in writing — not a lanai hope. Hotel rooms and lock-offs without heat are declined before a deposit. The kitchen note is /blog/dining-in-volcano. Town kitchens: /hilo.',
        },
        {
          q: 'How do I enquire for a Volcano lodge — address and dates?',
          a: 'Name the lodge, the nights, and the seats on /quote?island=bigisland. If the week is real, WhatsApp https://wa.me/18084687748 or call +1 808 468 7748. Mail quotes@mychef-hawaii.com. Hawaii hours, and only when a crew can cross. Tariff: /pricing.',
        },
      ],
      related: [
        { path: '/east-side', label: 'East-side rule' },
        { path: '/hilo', label: 'Hilo dinners' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'kau',
      name: 'Kaʻū / South',
      h1: 'Kaʻū south tables — origin-labeled coffee, a different day.',
      title: 'Kaʻū south dinner — Act 198 coffee, dedicated day | myCHEF',
      description:
        'Kaʻū / South Point-direction dinners at inquiry. Extended surcharge. Named Kaʻū coffee follows Act 198.',
      lede:
        'South of the west-side radius. Advance notice. We do not invent a farm brand for the south.',
      photo: 'cellKau',
      body: [
        '/coffee-act-198 is the labeling rule. This page is Kaʻū as a dinner door — Zone C surcharge, advance notice, inquiry. Named Kaʻū coffee follows origin labeling from 2027; we do not invent a farm.',
        '/blog/dining-in-kau is the kitchen note. /east-side stays the Hilo/Volcano crossing. South is not a same-day Kona add-on.',
        'Send the address on /quote. We crew when we can staff a dedicated day.',
      ],
      faqs: [
        {
          q: 'Will you name a Kaʻū farm?',
          a: 'Only with origin labeling and verification. Open /coffee-act-198.',
        },
        {
          q: 'Same-day from Waikoloa?',
          a: 'No. Dedicated day. Open /quote.',
        },
      ],
      related: [
        { path: '/coffee-act-198', label: 'Act 198 coffee' },
        { path: '/east-side', label: 'East-side rule' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'honokaa',
      name: 'Honokaʻa / Hāmākua',
      h1: 'Honokaʻa and Hāmākua tables — surcharge coast, not a Kona add-on.',
      title: 'Honokaʻa coast dinner — Hāmākua surcharge | myCHEF',
      description:
        'Honokaʻa / Hāmākua coast dinners at inquiry. Surcharge. Named producers only after verification.',
      lede:
        'Greener windward light. Not a same-day Kona add-on and not a Hilo day unless the quote says so.',
      photo: 'cellHonokaa',
      body: [
        '/waimea is the ranch corridor. This page is Honokaʻa and Hāmākua — surcharge coast, estate dinners, inquiry. Mushrooms and farms are a sourcing story, not a claim without written verification.',
        '/blog/dining-in-honokaa is the kitchen note. /east-side is the Hilo rule. We will not stack this as a free add-on to a Kona night.',
        'Send the address on /quote. Named producers only after verification — /blog/sourcing-honesty.',
      ],
      faqs: [
        {
          q: 'Same as /waimea?',
          a: 'That URL is ranch country. This page is the Hāmākua coast.',
        },
        {
          q: 'Same-day from Kona?',
          a: 'Not as an unpaid add-on. Open /east-side if you mean Hilo, /quote if you mean this coast.',
        },
      ],
      related: [
        { path: '/waimea', label: 'Waimea corridor' },
        { path: '/east-side', label: 'East-side rule' },
        { path: '/blog/sourcing-honesty', label: 'Sourcing honesty' },
      ],
    },
    {
      slug: 'holualoa',
      name: 'Hōlualoa',
      h1: 'Hōlualoa mauka tables — coffee-country elevation, still west side.',
      title: 'Hōlualoa estate dinner — mauka of Kona | myCHEF',
      description:
        'Hōlualoa mauka estate dinners at inquiry. Coffee-country elevation, still the west-side corridor.',
      lede:
        'Cooler evenings above town. Named coffee only with origin labeling. Still west side — not a Hilo day.',
      photo: 'cellHolualoa',
      body: [
        '/kona is the corridor. /coffee-act-198 is the labeling rule. This page is Hōlualoa — mauka of Kailua-Kona, cooler elevation, still the west-side corridor at inquiry. We do not invent a farm brand for the hillside.',
        '/blog/dining-in-holualoa is the kitchen note. East side stays /east-side. A cooktop is still required.',
        'Send the address on /quote. Origin labeling applies when we name coffee.',
      ],
      faqs: [
        {
          q: 'Same as /kona?',
          a: 'That URL is the corridor. This page is mauka elevation above town.',
        },
        {
          q: 'Will you name the farm?',
          a: 'Only with origin labeling. Open /coffee-act-198.',
        },
      ],
      related: [
        { path: '/kona', label: 'Kona corridor' },
        { path: '/kailua-kona', label: 'Kailua-Kona dinners' },
        { path: '/coffee-act-198', label: 'Act 198 coffee' },
      ],
    },
    {
      slug: 'puako',
      name: 'Puakō',
      h1: 'Puakō residential tables — between Waikoloa and Mauna Lani.',
      title: 'Puakō villa dinner — Kohala residential strip | myCHEF',
      description:
        'Puakō Kohala residential dinners at inquiry. Between Waikoloa and Mauna Lani, inside the 30-minute corridor.',
      lede:
        'Residential lava-coast houses, not a separate island claim. Same west-side team. Inquiry until we can staff.',
      photo: 'cellPuako',
      body: [
        '/waikoloa is a dinner door. /mauna-lani is the next community. This page is Puakō — the residential strip between them, base zone, villa weeks at inquiry.',
        '/blog/dining-in-puako is the kitchen note. /kohala-corridor is the radius. East side stays a dedicated day — /east-side.',
        'Send the property on /quote. We will not pretend this covers Hilo.',
      ],
      faqs: [
        {
          q: 'Same as /waikoloa?',
          a: 'Same corridor. This page is the residential strip between Waikoloa and Mauna Lani.',
        },
        {
          q: 'Hilo from Puakō?',
          a: 'No. Open /east-side.',
        },
      ],
      related: [
        { path: '/waikoloa', label: 'Waikoloa corridor' },
        { path: '/mauna-lani', label: 'Mauna Lani dinners' },
        { path: '/kohala-corridor', label: 'West-side radius' },
      ],
    },
  ],
};

/** Dinner doors only. Honesty unique cells, blogs, journals, and SKUs stay off the published rate card. */
export function isAreaDinnerDoor(island: IslandId, slug: string): boolean {
  return AREA_CELLS[island].some((cell) => cell.slug === slug);
}
