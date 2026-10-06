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
        'Weekend tourist drop-ins without a genuine stay are declined.',
      ],
      faqs: [
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
        'Marina light, a household range, traffic planned into the chef day.',
      photo: 'cellHawaiiKai',
      body: [
        'Traffic is a timing problem, not a surprise invoice.',
        'Weekly resident service stays on the kamaʻāina page. A cooktop is still required.',
      ],
      faqs: [
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
        'Hotel suites without a cooktop stay declined. Celebration tables of 4–15 are the usual fit.',
        'We will not sell a rooftop we do not control. Send the building type on the quote form.',
      ],
      faqs: [
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
        'We do not sell a rooftop we do not control.',
        'A unit without a functioning cooktop is declined.',
        'Send the building packet on the quote form. The menu follows the range, not a brochure kitchen.',
      ],
      faqs: [
        {
          q: 'Can you cook on the rooftop?',
          a: 'Not a rooftop we do not own. A tower residence with a range. Open the quote form.',
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
        'The conventions note says HCC citywides are closed through 2027.',
        'We do not take over restaurants. A unit without a cooktop is declined.',
      ],
      faqs: [
        {
          q: 'Can you take over a restaurant downtown?',
          a: 'No. We cook residences.',
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
        'Household dinners and multi-day stays.',
        'A cooktop is still required. We will not hide the drive inside the food line.',
        'Lanikai is the quieter beach house. This is the quieter town. Send the address on the quote form.',
      ],
      faqs: [
        {
          q: 'Is the drive included?',
          a: 'No. It prints as a surcharge line.',
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
        'A cooktop is still required.',
        'We will not sell Kapolei as a Waikīkī dinner.',
      ],
      faqs: [
        {
          q: 'Town surcharge?',
          a: 'No. West-side base.',
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
        'Outdoor setups inherit a wet-weather backup.',
      ],
      faqs: [
        {
          q: 'Same as Wailea?',
          a: 'No. [Wailea](/wailea) is South Maui resort residences in the base zone. Upcountry is the climb — Kula, Makawao and Haʻikū — with the surcharge as its own quote line. They are not one night.',
        },
        {
          q: 'Will you print a farm name?',
          a: 'Named farms wait for written verification. Sitting in Kula mist does not earn a grower credit. This page is about the elevation dinner, not a farm brochure.',
        },
        {
          q: 'Where does the Kula, Makawao, or Haʻikū drive print?',
          a: 'On its own line. Kula, Makawao, and Haʻikū estates sit above the coast, so the climb is a published surcharge on the written quote. It is not buried in the fish. Full rates: [the pricing page](/pricing).',
        },
        {
          q: 'What is inside an Upcountry Signature night at $225–$375?',
          a: 'On this slope the plated night is $225–$375 per guest, groceries included in the band. The elevation fee is a separate printed line, not a quieter coast number. Then 20% service and Hawaiʻi GET up to 4.712%. A 50% deposit holds the date. Gratuity is voluntary.',
        },
        {
          q: 'Stay Chef from $1,550 on an estate week — groceries at cost?',
          a: 'Retreat and estate weeks start at Stay Chef from $1,550 a day. The shop bills at cost with receipts. That is not Signature, where food is already inside $225–$375. Extra meals that day are quoted. Send the week on [the quote form](/quote).',
        },
        {
          q: 'What does a cooler Upcountry estate kitchen need?',
          a: 'A cooktop, a fridge, and a table. Cooler evenings need both a lanai plan and an indoor plan, written before anyone shops. An uncovered lawn is not the only setup. Haʻikū wind belongs in that note. Island overview: [private chef Maui](/).',
        },
        {
          q: 'Can one night cover Upcountry and a South Maui villa?',
          a: 'No. An elevation dinner beside a South or West Maui villa week is two dated quote lines, not one same-night double. This slope is its own date. We will not hide the second drive.',
        },
        {
          q: 'How do I enquire for an Upcountry estate?',
          a: 'File the estate street, the nights, and the seats on the quote form. WhatsApp https://wa.me/18084687748 and +1 808 468 7748 reach the same desk, quotes@mychef-hawaii.com. Maui is quote-open. The elevation line is on the written total.',
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
        'The Kāʻanapali page and the Kapalua page are the live West Maui corridors.',
        'Saturday arrival is planned, not assumed.',
      ],
      faqs: [
        {
          q: 'Is this a Lahaina page?',
          a: 'No. Open the Lahaina / West Maui page for that corridor.',
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
        'Quote-only. Extended drive. We will not publish a flat fee for this area. Estate dinners when the drive is planned, not stacked with Wailea.',
        'Send the address on the quote form. A band is not an instant-booking button for this shore.',
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
        'Town, not the whole upcountry slope. Retreat houses and estate tables. The weather backup is written.',
      photo: 'cellMakawao',
      body: [
        'Named farms only after written verification.',
        'A cooktop is still required. Haleakalā and Kula are quoted separately.',
        'Send the address on the quote form. We will not pretend Makawao is a Wailea clone.',
      ],
      faqs: [
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
        'The Kāʻanapali page and the Kapalua page are the named corridors. Base zone. Compact kitchens are common.',
        'Multi-day chef days fit this inventory better than a one-night halo. Send the unit type on the quote form.',
      ],
      faqs: [
        {
          q: 'Tiny kitchen?',
          a: 'The menu fits the range. Load-in honesty sits on our journal note on Condo load-in.',
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
        'We will not stack a Wailea lunch with a Waikapū dinner as one chef day without writing it.',
        'A cooktop is still required.',
        'Send the address on the quote form. Visitor-condo inventory is the wrong fit here.',
      ],
      faqs: [
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
        'Outdoor fire is a weather plan, not a promise.',
        'Named farms only after written verification.',
        'Send the elevation and the address on the quote form. We will not print a farm we have not verified.',
      ],
      faqs: [
        {
          q: 'Will you name a Kula farm?',
          a: 'After written verification.',
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
        'Booking by inquiry is not an instant-booking button.',
      ],
      faqs: [
        {
          q: 'Can you take same-day Hāʻena?',
          a: 'No. Planned events only. Send the date on the quote form.',
        },
        {
          q: 'If the bridge closes?',
          a: 'We reschedule. The deposit is not eaten by weather.',
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
        'A cooktop is still required.',
        'We will not pretend Kōloa is a resort-residence page. Inquiry is the honest status.',
        'Send the address on the quote form. A band is not an instant-booking button.',
      ],
      faqs: [
        {
          q: 'Is Kōloa covered the same way as Poʻipū?',
          a: 'Both are inquiry.',
        },
        {
          q: 'Is Kōloa live to book, or still an inquiry?',
          a: 'Still an inquiry. A Kōloa retreat house does not get an instant confirm. Put the street, the headcount, and the week on the quote form and wait for a written reply from a crew that can actually staff it. It does not turn this town into a second live calendar.',
        },
        {
          q: 'Which grocery line applies in a Kōloa house — Signature or Stay Chef?',
          a: 'They stay apart. A Signature night is $225–$375 a guest and the shop rides inside that band, with no separate grocery invoice. A Stay Chef day from $1,650 is the chef fee; the shop prints at cost with merchant receipts. Those lines do not fold together. After the food, 20% service and Hawaiʻi GET up to 4.712% print as separate lines. The deposit is 50% once a crew can hold the week. Gratuity is never required.',
        },
        {
          q: 'Is an arrival-night dinner the usual first ask in Kōloa?',
          a: 'Yes, on this South Shore. You land nearer Līhuʻe, the fridge is not the plan, and someone else is at the range that night. It is still an inquiry, not a button. Write the landing time and the town address on the quote form. The corridor version of that ask is on the Poʻipū page.',
        },
        {
          q: 'Kōloa is closer to Līhuʻe than Princeville — does the food band drop?',
          a: 'No. Kōloa sits on the South Shore surcharge with Poʻipū, outside the Līhuʻe and Kapaʻa base, and closer to the airport than the Princeville page. The shorter drive is a zone line on the quote. It is not a discount on the fish. Signature stays $225–$375 a guest on both shores.',
        },
        {
          q: 'What if the Kōloa room has no cooktop?',
          a: 'We decline it. Hotel rooms and lock-offs without a cooktop are not a town-house dinner. If the kitchen has heat, cold storage, and seats for the list, send the address. If it does not, we say so before a deposit. The resort-belt version of that rule is on the Poʻipū page.',
        },
        {
          q: 'Date Night, a small retreat, or a wedding list in Kōloa?',
          a: 'Two seats in a town house use Date Night at $975–$1,425, a fixed evening. A small retreat that cooks more than one night uses Stay Chef from $1,650, shop at cost. When the headcount grows toward an estate wedding, stop stacking nights in chat and open the catering page for a staffed written total. The three lines never blend. Rhythm goes on the quote form.',
        },
        {
          q: 'How do I enquire for Kōloa with the shore and the dates?',
          a: 'Paid inquiry, written quote. Open the quote form with the South Shore address, dates, and headcount. Or WhatsApp +1 808 468 7748 — https://wa.me/18084687748 — when the shore and the dates are ready to book. Desk: quotes@mychef-hawaii.com. Hawaii-hours reply when a crew can hold that week.',
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
        'The planned base. In-town households and staging. Estate dinners are mostly in Princeville and Poʻipū.',
      photo: 'cellLihue',
      body: [
        'Planned base when we launch. Airport-adjacent, not the villa inventory. We will not sell Līhuʻe as a North Shore estate page.',
        'A cooktop is still required.',
      ],
      faqs: [
        {
          q: 'Is this the villa product?',
          a: 'No. Staging town. Open the Princeville page or the Poʻipū page for estate inventory.',
        },
        {
          q: 'Included drive?',
          a: 'Yes, at launch. Inquiry.',
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
        'Inquiry until we can staff.',
        'ʻEleʻele sits further toward the west. A cooktop is still required.',
        'Send the address on the quote form. We will not copy Poʻipū onto this town.',
      ],
      faqs: [
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
        'This is Kauaʻi Waimea — west-side distance from Līhuʻe, extended surcharge, inquiry. It is not Waimea on the Big Island.',
        'Hanapēpē is a west-side town. A cooktop is still required. Advance notice.',
      ],
      faqs: [
        {
          q: 'Is this the Big Island ranch?',
          a: 'No.',
        },
        {
          q: 'Same-day from Līhuʻe?',
          a: 'Advance notice. Extended surcharge.',
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
        'Not a visitor-villa cluster and not a North Shore copy.',
        'A cooktop is still required. We crew when we can staff.',
        'Send the address on the quote form. Advance notice on the west side.',
      ],
      faqs: [
        {
          q: 'North Shore inventory?',
          a: 'No. This is west Kauaʻi.',
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
        'Still a drive from Līhuʻe staging.',
        'A cooktop is still required.',
        'Send the address on the quote form. Inquiry is the honest status.',
      ],
      faqs: [
        {
          q: 'Are you live?',
          a: 'Inquiry. Open the quote form.',
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
        'We will not pretend this is a South Shore villa page.',
        'Hanapēpē continues west. A cooktop is still required.',
        'Send the address on the quote form. We crew when we can staff.',
      ],
      faqs: [
        {
          q: 'Poʻipū inventory?',
          a: 'No. This is south-west residential.',
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
        'Town, not the whole west-side radius. Ironman weeks compress the calendar — that honesty is on the Ironman week notes. Inquiry until we can staff.',
      photo: 'cellKailuaKona',
      body: [
        'Event weeks flag dates; they do not invent a kitchen.',
        'East side stays a dedicated day.',
      ],
      faqs: [
        {
          q: 'Hilo the same day?',
          a: 'No. Dedicated staffing.',
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
        'Inquiry until we can staff.',
        'East side stays a dedicated day. A cooktop is still required.',
        'Send the property type on the quote form. We will not stack this with Hilo.',
      ],
      faqs: [
        {
          q: 'East side from here?',
          a: 'No.',
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
        'The Waikoloa page and the Kohala Coast page are the named corridors.',
        'We will not sell Mauna Lani as a Hilo page.',
      ],
      faqs: [
        {
          q: 'Hilo from here?',
          a: 'No.',
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
      title: 'Mauna Kea resort private chef — Kohala Coast | myCHEF',
      description:
        'Mauna Kea resort-belt dinners at inquiry. Named for the Kohala community, not the mountain summit.',
      lede:
        'North Kohala resort houses. We will not sell a summit dinner. Same west-side radius as Waikoloa.',
      photo: 'cellMaunaKea',
      body: [
        'Base zone. Villa dinners at inquiry.',
        'We will not sell a summit dinner.',
        'Send the property on the quote form. The mountain is geography, not a kitchen we staff.',
      ],
      faqs: [
        {
          q: 'Do you cook at the summit?',
          a: 'No.',
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
        '2.5–3 hours from Kona.',
        'Volcano is a separate east-side day. A cooktop is still required. We will not publish “now serving Hilo” ahead of a crew.',
      ],
      faqs: [
        {
          q: 'Hilo town versus the east-side crossing rule versus Volcano?',
          a: 'Same east-side day class, different kitchens. We will not sell Hilo as a Volcano page or the reverse.',
        },
        {
          q: 'Why can’t a Kona or Waikoloa night absorb Hilo town?',
          a: 'The saddle is the point. Hilo town is a separate crew day, about 2.5–3 hours from the resorts, with its own staffing quote. We do not tuck a Hilo table onto a Kohala evening.',
        },
        {
          q: 'Can I treat “Hilo” as live service on this site?',
          a: 'No. Inquiry only. We will not print “now serving Hilo” until a crew exists for that side. East-side dates go on the quote form. The band on the pricing page is not a Hilo calendar. A reply means someone can actually hold the week — not a placeholder roster.',
        },
        {
          q: 'Does an east-side Hilo day use the same grocery models as the west-side card?',
          a: 'The food lines are the Hawaiʻi Island card, and the staffing is not a west-side afternoon. Signature $210–$325 a guest already includes the shop. ENTRY from $165 is the shorter Hilo night when the town kitchen fits it. Stay Chef from $1,450 is the fee; Hilo groceries print at cost with receipts and never ride inside that fee. Crossing labor is its own day on the quote. Then 20% service, Hawaiʻi GET up to 4.712%, and a 50% deposit once a crew can hold the date. Gratuity is never required.',
        },
        {
          q: 'Does Hilo rain change the cooktop rule?',
          a: 'No. A wet town still needs a working range, cold storage, and seats. A hotel room or lock-off without heat is declined before a deposit, even when the lanai looks usable between showers. Outdoor fire is a separate weather plan. The kitchen test is not optional because the drive was long.',
        },
        {
          q: 'How do you plan around Hilo rain?',
          a: 'Honestly. Hilo is a wetter climate. Outdoor fire or a lawn table is a plan we can keep or we decline it. Covered backup is written when the table is outdoors. We would rather move the night than sell a dry lawn we cannot keep.',
        },
        {
          q: 'Ironman or event weeks — can you stack Hilo and Waikoloa?',
          a: 'Flag event weeks early. One crew, one heavy week. We will not sell a Hilo lunch and a Waikoloa dinner on the same Saturday as a free fantasy. Compressed calendars sit on the Ironman week notes when that week applies. Still inquiry.',
        },
        {
          q: 'How do I send Hilo dates without treating them as a Kona add-on?',
          a: 'Use the quote form and write the Hilo street, the east-side dates, and the headcount as their own day. WhatsApp https://wa.me/18084687748 (+1 808 468 7748) once that day is real. Email quotes@mychef-hawaii.com. A reply comes in Hawaii hours only if a crew can make the crossing. The rule stays on the east-side page — do not file this as a Waikoloa afternoon.',
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
        'Weather is its own plan. A cooktop is still required. Inquiry.',
        'Send the dates on the quote form. We will not promise a lawn we cannot keep dry.',
      ],
      faqs: [
        {
          q: 'Same as Hilo?',
          a: 'No. [Hilo](/hilo) is the town — streets and a town range. Volcano is lodges and estates near the park: ferns, mist, a cooler kitchen. We do not paste the Hilo menu up the slope.',
        },
        {
          q: 'Outdoor fire?',
          a: 'Only when a weather plan holds. Mist and rain at this elevation move the table indoors. That indoor backup is written, or we decline the lawn. We will not promise a dry fern clearing.',
        },
        {
          q: 'Why is a Volcano lodge a dedicated day from Kona?',
          a: 'The drive is 2.5–3 hours from Kona. We quote it as its own east-side day and never squeeze it onto a west-side afternoon.',
        },
        {
          q: 'What does booking by inquiry mean for a park-side lodge?',
          a: 'We crew the lodge properly or we decline. It is not instant booking. A published band is not a live roster. Send the dates and wait for a written reply when an east-side crew can hold that week. Island overview: [private chef Big Island](/).',
        },
        {
          q: 'Signature $210–$325 or ENTRY from $165 at a Volcano lodge?',
          a: 'A park-lodge plated night is Signature $210–$325 per guest, with the shop already in the band. ENTRY from $165 is only a shorter cabin list when the range can hold it. Service is 20%. Tax prints up to 4.712%. Half, the 50%, waits until someone can staff the slope. Gratuity is never required. Read the pricing page before you enquire.',
        },
        {
          q: 'Stay Chef from $1,450 for a lodge week — who pays for the shop?',
          a: 'A lodge week is Stay Chef from $1,450 a day — chef and one meal — while the Volcano shop is a receipt stack at cost, zero markup. Do not hide that shop inside the day fee, or inside Signature $210–$325. A second sitting is written. File the week on [the quote form](/quote).',
        },
        {
          q: 'What does a cold, wet Volcano cabin kitchen need?',
          a: 'A working cooktop. Cold, wet evenings at elevation need an indoor plan in writing — not a lanai hope. Hotel rooms and lock-offs without heat are declined before a deposit. Town kitchens are on the [Hilo](/hilo) page.',
        },
        {
          q: 'How do I enquire for a Volcano lodge — address and dates?',
          a: 'Name the lodge, the nights, and the seats on the quote form. If the week is real, WhatsApp https://wa.me/18084687748 or call +1 808 468 7748. Mail quotes@mychef-hawaii.com. Hawaii hours, and only when a crew can cross. Full rates: [the pricing page](/pricing).',
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
        'Named Kaʻū coffee follows origin labeling from 2027; we do not invent a farm.',
        'South is not a same-day Kona add-on.',
        'Send the address on the quote form. We crew when we can staff a dedicated day.',
      ],
      faqs: [
        {
          q: 'Will you name a Kaʻū farm?',
          a: 'Only with origin labeling and verification.',
        },
        {
          q: 'Same-day from Waikoloa?',
          a: 'No. Dedicated day. Open the quote form.',
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
        'Mushrooms and farms are a sourcing story, not a claim without written verification.',
        'We will not stack this as a free add-on to a Kona night.',
        'Send the address on the quote form. Named producers only after verification.',
      ],
      faqs: [
        {
          q: 'Same-day from Kona?',
          a: 'Not as an unpaid add-on. Open the east-side page if you mean Hilo, the quote form if you mean this coast.',
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
        'We do not invent a farm brand for the hillside.',
        'A cooktop is still required.',
        'Send the address on the quote form. Origin labeling applies when we name coffee.',
      ],
      faqs: [
        {
          q: 'Will you name the farm?',
          a: 'Only with origin labeling.',
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
        'East side stays a dedicated day.',
        'Send the property on the quote form. We will not pretend this covers Hilo.',
      ],
      faqs: [
        {
          q: 'Hilo from Puakō?',
          a: 'No.',
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
