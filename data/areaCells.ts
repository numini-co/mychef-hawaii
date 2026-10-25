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
        'Lanikai dinners in quieter 30-day beach houses, the same rule as Kailua. Galley kitchens are common. Parking on these residential streets is limited.',
      lede:
        'Mokulua across the channel. Galley kitchens are common. The stay is still a month, not a weekend tourist drop-in.',
      photo: 'cellLanikai',
      body: [
        'The same 30-day estate rule as Kailua applies, in a quieter beach-house inventory. Galley kitchens are common, so the menu is written for the burners that are there. Parking on these residential streets is limited. A weekend tourist drop-in without a genuine stay is declined. There is no restaurant strip to walk to. Request a written quote on [the quote form](/quote) with the address and the length of the stay.',
      ],
      faqs: [
        {
          q: 'Do you cook in Lanikai beach houses with galley kitchens?',
          a: 'We do, when the cooktop is real. Galley kitchens are common here, and the menu is written for those burners rather than for a resort range. A house without a cooktop is declined before a deposit. Send the kitchen with the address.',
        },
        {
          q: 'Why is a Lanikai stay a month rather than a weekend drop-in?',
          a: 'The same 30-day estate rule as Kailua applies. A one-night tourist dinner without a genuine stay is declined. The house is a long stay, not a second weekend corridor. Put the length of the stay on [the quote form](/quote).',
        },
        {
          q: 'How does limited parking on a Lanikai street affect arrival?',
          a: 'These are quiet residential streets, and parking is limited. Tell us where the car goes before the shop, the way a tower would name a stall. We will not discover a blocked lane at service time. The plan is on the written quote.',
        },
        {
          q: 'Is Lanikai booked as a second Kailua corridor?',
          a: 'It is the quieter beach-house inventory next to Kailua, not a copy of that town page. Both are base zone. Open [Kailua](/kailua) for the town, and this page for the quieter streets. Request a written quote for the house you have.',
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
        'Hawaiʻi Kai household dinners in east Honolulu. Resident tables more than tourist villas. Traffic is planned into the chef day. A cooktop is required.',
      lede:
        'Marina light, a household range, traffic planned into the chef day.',
      photo: 'cellHawaiiKai',
      body: [
        'This is east Honolulu, and the usual table is a resident household rather than a tourist villa. Traffic is planned into the chef day. It is a timing problem, not a surprise invoice. A working cooktop is required. Weekly service for residents is on our [kamaʻāina](/kamaaina) page. Request a written quote on [the quote form](/quote) with the house and the headcount.',
      ],
      faqs: [
        {
          q: 'Do you cook in Hawaiʻi Kai homes?',
          a: 'We cook household kitchens here when there is a working cooktop, a fridge, and a table. Resident entertaining is the usual night, more than a tourist villa. A room without a range is declined before a deposit. Send the house on [the quote form](/quote).',
        },
        {
          q: 'How does east Honolulu traffic change a Hawaiʻi Kai chef day?',
          a: 'It changes the arrival, and that arrival is planned into the chef day. The drive is not a fee discovered on the invoice. Town timing and this marina neighborhood are not the same hour. Name the address so the clock is written first.',
        },
        {
          q: 'Is Hawaiʻi Kai a tourist-villa area or a resident household?',
          a: 'Resident households are the fit. A weekly cook for people who live here is the [kamaʻāina](/kamaaina) line. A one-off celebration can still be quoted when the kitchen works. We do not treat this marina as a resort strip.',
        },
        {
          q: 'What has to be true of a Hawaiʻi Kai kitchen before you quote?',
          a: 'A cooktop, cold storage, and room for the headcount. We do not publish a minimum counter length. If the household range cannot hold the menu, we say so before you accept. Request a written quote on [the quote form](/quote). Bands are on [pricing](/pricing).',
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
        'Diamond Head dinners in adjacent rooms with real dining rooms. Load-in and building rules are confirmed in writing. Quieter streets than a resort strip.',
      lede:
        'One volcanic cone through the sliders. Load-in in writing. This is not a second Gold Coast essay.',
      photo: 'cellDiamondHead',
      body: [
        'These are Gold Coast-adjacent residences with real dining rooms, on quieter residential streets than a resort strip. Building rules vary, so load-in is confirmed in writing. Celebration tables of 4–15 are the usual fit. Hotel suites without a cooktop stay declined. We will not sell a rooftop we do not control. Request a written quote on [the quote form](/quote) and name the building type.',
      ],
      faqs: [
        {
          q: 'Do you cook in Diamond Head residences with real dining rooms?',
          a: 'That is the fit: a residence with a dining room and a cooktop, beside the cone. Celebration tables of 4–15 are the usual ask. A suite without a range is declined. Send the building type on [the quote form](/quote).',
        },
        {
          q: 'How do building rules and load-in work on a Diamond Head street?',
          a: 'Rules vary by building, so load-in is confirmed in writing before the shop. These are quieter residential streets than a resort strip. Tell us where the car goes and which entrance the crew uses. We do not discover that at service.',
        },
        {
          q: 'Is a Diamond Head night the same booking as a Kahala estate?',
          a: 'It is the adjacent rooms, not the Kahala page. Kahala is the estate belt. This page is the residences beside the cone. Both can be a seated dinner. Open [Kahala](/kahala) if that is the house, and request a written quote for this one if it is not.',
        },
        {
          q: 'Will you use a hotel suite or a rooftop at Diamond Head?',
          a: 'A hotel suite without a cooktop is declined. A rooftop we do not control is not for sale. The night is the dining room in the residence. Name the building on [the quote form](/quote). Fee lines are on [pricing](/pricing).',
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
      title: 'Private chef in Kakaʻako towers | myCHEF',
      description:
        'Private chef dinners in Kakaʻako towers with compact kitchens. Freight elevators and quiet hours are confirmed in writing. Not a rooftop we do not control.',
      lede:
        'A small range in a tower, not a rooftop we do not own. Menus adapt to the kitchen that actually exists.',
      photo: 'cellKakaako',
      body: [
        'Kakaʻako nights are tower residences with compact kitchens, not a rooftop we do not control. Freight elevators and quiet hours change the clock, so both are named before the shop. Quiet hours can move plating earlier than a house dinner would. The menu follows the range that is actually in the unit. A unit without a functioning cooktop is declined. Send the building packet on the quote form rather than a brochure kitchen.',
        'Downtown pied-à-terre dinners are the next neighborhood, on [Downtown](/downtown). The wider town page is [Honolulu](/honolulu). Tower notes are [Kakaʻako kitchen notes](/blog/dining-in-kakaako). Oʻahu bands and fee lines are on [pricing](/pricing). Request a written quote on [the quote form](/quote) with the building, the floor, and where the crew loads in.',
      ],
      faqs: [
        {
          q: 'Do you cook in Kakaʻako condo towers with compact kitchens?',
          a: 'We do when the unit has a functioning cooktop. The menu follows that range, not a brochure kitchen. A unit without heat is declined before a deposit. Send the floor and the appliance list when you request a written quote.',
        },
        {
          q: 'Can the night move to a rooftop the building does not assign to us?',
          a: 'We do not sell a rooftop we do not control. The dinner is the residence with the range. If the building has not assigned that deck, it is not part of the booking. Name the room on the quote form.',
        },
        {
          q: 'How do freight elevators and quiet hours change a Kakaʻako evening?',
          a: 'They change the load-in clock. Both are confirmed in writing before the shop, the way a house would name a driveway. We will not discover a closed freight bay at service. Put the building rules in the packet.',
        },
        {
          q: 'What has to be in the Kakaʻako building packet before you shop?',
          a: 'Floor, load-in, quiet hours, and proof of a working cooktop. Parking or a stall if the building requires one. We do not guess those from the street. Request a written quote with that packet attached in the notes.',
        },
        {
          q: 'Is Kakaʻako the same booking as a downtown pied-à-terre?',
          a: 'Kakaʻako is not the downtown pied-à-terre booking. Downtown is the loading-dock page. This page is the tower with the compact range. Honolulu is the wider town. Open the matching building, then request a written quote. Prices are on the pricing page.',
        },
      ],
      related: [
        { path: '/downtown', label: 'Downtown dinners' },
        { path: '/honolulu', label: 'Honolulu corridor' },
        { path: '/blog/dining-in-kakaako', label: 'Kakaʻako kitchen notes' },
        { path: '/pricing', label: 'Rate card' },
      ],
    },
    {
      slug: 'downtown',
      name: 'Downtown Honolulu',
      h1: 'Downtown pied-à-terre dinners — loading, not HCC.',
      title: 'Private chef in Downtown Honolulu | myCHEF',
      description:
        'Private chef dinners in Downtown Honolulu pied-à-terre kitchens. Parking and loading confirmed in writing. We cook the residence, not a restaurant.',
      lede:
        'A compact dining room above the loading dock. HCC citywides stay closed. We cook the house, not a ballroom.',
      photo: 'cellDowntown',
      body: [
        'Downtown dinners are pied-à-terre kitchens: a compact dining room, a real cooktop, and a loading plan. Parking and the dock are the constraint, not a long drive. The conventions note says HCC citywides are closed through 2027. We do not take over restaurants, and we do not staff a ballroom. A unit without a cooktop is declined.',
        'Kakaʻako towers are the next set of compact ranges, on [Kakaʻako](/kakaako). The wider town page is [Honolulu](/honolulu). The closed citywide note is [conventions](/conventions). Kitchen notes are [Downtown kitchen notes](/blog/dining-in-downtown). Oʻahu bands and fee lines are on [pricing](/pricing). Request a written quote on [the quote form](/quote) with the building and where the car stops.',
      ],
      faqs: [
        {
          q: 'Can you take over a restaurant downtown?',
          a: 'We cook residences, not restaurants. A takeover of a dining room we do not staff as a house is declined. If the address is a pied-à-terre with a cooktop, request a written quote for that unit. A ballroom is a different product.',
        },
        {
          q: 'What pied-à-terre kitchens work above a loading dock?',
          a: 'A compact dining room with a functioning cooktop, cold storage, and seats. The dock and the parking spot are named before the shop. A unit without heat is declined. Send the floor and the load-in with the dates.',
        },
        {
          q: 'Does a closed convention calendar change a downtown house dinner?',
          a: 'HCC citywides stay closed through 2027, and that note is on the conventions page. A residence dinner is still a residence dinner. We do not turn a house booking into a ballroom because a conference is in town. Request a written quote for the apartment.',
        },
        {
          q: 'How do parking and loading get onto the downtown quote?',
          a: 'They are written before the shop: where the car stops, which door, which hours. Downtown distance is not the issue. The dock is. We will not discover a blocked curb at service. Put those notes on the quote form.',
        },
        {
          q: 'Where do downtown prices sit next to Kakaʻako?',
          a: 'Both use the Oʻahu card on the pricing page. Service, Hawaiʻi GET, the deposit, and gratuity stay on their own lines. Downtown is the pied-à-terre. Kakaʻako is the tower. Request a written quote for the building you have, not both.',
        },
      ],
      related: [
        { path: '/kakaako', label: 'Kakaʻako dinners' },
        { path: '/honolulu', label: 'Honolulu corridor' },
        { path: '/conventions', label: 'Conventions' },
        { path: '/blog/dining-in-downtown', label: 'Downtown kitchen notes' },
      ],
    },
    {
      slug: 'kaneohe',
      name: 'Kāneʻohe',
      h1: 'Kāneʻohe town tables — quieter windward, published drive.',
      title: 'Private chef in Kāneʻohe homes | myCHEF',
      description:
        'Private chef dinners in Kāneʻohe homes on the windward side. Quieter than Kailua, with the drive printed on the written quote, not folded into the food.',
      lede:
        'Koʻolau cliffs, a household range, the drive printed as its own line. Not a second 30-day beach-house page.',
      photo: 'cellKaneohe',
      body: [
        'Kāneʻohe is the quieter windward town, with household dinners and multi-day stays in houses that have a real range. It is not a second 30-day beach-house page. Lanikai is that quieter beach house. A cooktop is still required. We will not hide the drive inside the food line. The drive prints as its own line on the written quote. A multi-day stay still names that drive once, not once per meal.',
        'We do not publish a separate travel dollar on this page. Kailua weeks are on [Kailua](/kailua). The beach-house rule is on [Lanikai](/lanikai). Coverage for the island is on [coverage](/coverage). Kitchen notes are [Kāneʻohe kitchen notes](/blog/dining-in-kaneohe). Oʻahu bands and fee lines are on [pricing](/pricing). Request a written quote on [the quote form](/quote) with the windward address.',
      ],
      faqs: [
        {
          q: 'Is the drive from town included in a Kāneʻohe dinner?',
          a: 'It prints as its own line on the written quote. It is not folded into the food, and this page does not call it included. We do not publish a separate travel dollar here. Send the address so that line can be written first.',
        },
        {
          q: 'What household kitchens do you cook in on this windward side?',
          a: 'Town houses with a cooktop, a fridge, and a table. Resident dinners and multi-day stays are the fit. A room without heat is declined before a deposit. This is a town range, not a beach-house galley. Request a written quote with the street.',
        },
        {
          q: 'How is Kāneʻohe different from a Lanikai beach-house stay?',
          a: 'Lanikai is the quieter beach-house page, with the same long-stay rule as Kailua. Kāneʻohe is the quieter town behind the cliffs. Both can be a seated dinner. Open the page that matches the house, and do not mix the rules.',
        },
        {
          q: 'Can a multi-day Kāneʻohe stay hide the drive inside the food?',
          a: 'A longer stay does not hide the drive inside the food. The line still prints on the written quote, separate from the menu. Oʻahu bands and fee lines are on the pricing page. Request a written quote with how many days you want cooked.',
        },
        {
          q: 'Where do I request a written quote for a Kāneʻohe table?',
          a: 'On the quote form, with the windward street and the headcount. Read pricing for the Oʻahu bands, service, Hawaiʻi GET, the deposit, and gratuity. Kailua is the other windward page if that is actually the house.',
        },
      ],
      related: [
        { path: '/kailua', label: 'Kailua corridor' },
        { path: '/lanikai', label: 'Lanikai dinners' },
        { path: '/blog/dining-in-kaneohe', label: 'Kāneʻohe kitchen notes' },
        { path: '/pricing', label: 'Rate card' },
      ],
    },
    {
      slug: 'ewa',
      name: 'ʻEwa / Kapolei',
      h1: 'ʻEwa and Kapolei tables — leeward houses, Ko Olina provisioning.',
      title: 'Private chef in ʻEwa and Kapolei | myCHEF',
      description:
        'Private chef dinners in ʻEwa and Kapolei houses. West-side base, no separate town surcharge, closer to Ko Olina provisioning than to Waikīkī.',
      lede:
        'Closer to Ko Olina provisioning than to Waikīkī. Resident houses and west-side overflow — not a resort-residence clone.',
      photo: 'cellEwa',
      body: [
        'ʻEwa and Kapolei are leeward houses, closer to Ko Olina provisioning than to a Waikīkī kitchen. Resident tables and west-side overflow are the fit. This is not a resort-residence copy. A cooktop is still required, and a house without heat is declined before a deposit. We will not sell Kapolei as a Waikīkī dinner.',
        'The area is west-side base, so the quote does not add a separate town surcharge. Travel is still confirmed in writing rather than invented as a new fee on this page. Villa weeks on the coast are [Ko Olina](/ko-olina). Legal short stays are [short-stay villas](/short-stay). Kitchen notes are [ʻEwa kitchen notes](/blog/dining-in-ewa). Oʻahu bands and fee lines are on [pricing](/pricing). Request a written quote on [the quote form](/quote) with the leeward address.',
      ],
      faqs: [
        {
          q: 'Does ʻEwa or Kapolei add a town surcharge?',
          a: 'These towns sit in the west-side base, so the quote does not add a separate town surcharge. Travel is still confirmed in writing. We do not invent a new fee on this page. Oʻahu bands and fee lines are on the pricing page.',
        },
        {
          q: 'What leeward houses do you cook in around ʻEwa and Kapolei?',
          a: 'Resident houses with a cooktop, a fridge, and a table. West-side overflow from a villa week can be quoted when the kitchen is real. A room without heat is declined. Send the address when you request a written quote.',
        },
        {
          q: 'Why is this closer to Ko Olina provisioning than to Waikīkī?',
          a: 'The shop for these houses follows the west side, not a town round trip through Waikīkī. Ko Olina is the villa coast beside that provisioning. This page is the residential towns. Open Ko Olina if the booking is the villa.',
        },
        {
          q: 'Will you sell a Kapolei night as a Waikīkī dinner?',
          a: 'A Kapolei night is not sold as a Waikīkī dinner. It is a leeward house dinner. Waikīkī residences are a different page and a different building type. We will not rename this town to catch a resort search. Request a written quote for the house you have.',
        },
        {
          q: 'Where are west-side prices before I send an ʻEwa address?',
          a: 'On the pricing page: Oʻahu bands, service, Hawaiʻi GET, the deposit, and gratuity. Then request a written quote with the leeward street. Short-stay villas explain the legal west-side pool if that is the product you mean.',
        },
      ],
      related: [
        { path: '/ko-olina', label: 'Ko Olina corridor' },
        { path: '/short-stay', label: 'Short-stay villas' },
        { path: '/blog/dining-in-ewa', label: 'ʻEwa kitchen notes' },
        { path: '/pricing', label: 'Rate card' },
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
        'Upcountry Maui dinners. Published elevation surcharge. Named farms only after written verification.',
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
      title: 'Private chef in Nāpili, West Maui | myCHEF',
      description:
        'Private chef dinners in Nāpili houses on West Maui. Same timing as Kāʻanapali and Kapalua, with Saturday arrival planned and a written quote.',
      lede:
        'West Maui houses between the named corridors. Saturday traffic is planned. This is not a Lahaina destination page.',
      photo: 'cellNapili',
      body: [
        'Nāpili houses sit on West Maui, with the same timing rules as Kāʻanapali and Kapalua. The usual booking is a villa week: one kitchen, a real dining table, and a cooktop the menu can use. A lock-off without heat is declined before a shop. This is a house dinner, not a walk-up restaurant night.',
        'Saturday arrival is planned into the chef day, not discovered after you land. A South Maui Saturday is a different drive, so it is not assumed here. Open [West Maui](/west-maui) for the corridor, [Kapalua](/kapalua) for the headland, and [Kāʻanapali](/kaanapali) for deck dinners. Bands and fee lines are on [pricing](/pricing). Request a written quote on [the quote form](/quote) with the address and the week.',
      ],
      faqs: [
        {
          q: 'Is a Nāpili dinner booked as a Lahaina night?',
          a: 'Nāpili is its own West Maui house page, not a Lahaina destination. Tell us the street. The Lahaina naming note lives on that page, and this one stays with the houses beside Kapalua. Request a written quote for the address you actually have.',
        },
        {
          q: 'What kitchens do Nāpili villa weeks actually use?',
          a: 'A villa kitchen with a working cooktop, a fridge, and a table. The menu is written for that range. A lock-off or hotel room without heat is declined before a deposit. Send the kitchen notes with the week on the quote form.',
        },
        {
          q: 'How does Saturday arrival change a Nāpili chef night?',
          a: 'Saturday West Maui traffic is planned into arrival, not added after you land. The shop and the service clock are set before that day. A South Maui Saturday is a different drive. Name the landing time when you request a written quote.',
        },
        {
          q: 'Is Nāpili a better fit for a family week or a two-seat table?',
          a: 'A villa week that cooks more than one night is the usual Nāpili stay. A single tasting table can still be quoted when the kitchen works. Put the headcount on the quote form. Maui bands and fee lines are on the pricing page.',
        },
        {
          q: 'Where do Nāpili prices and the West Maui timing note sit?',
          a: 'Open the pricing page for the Maui bands. Service, Hawaiʻi GET, the deposit, and gratuity each stay on their own line. This base area does not invent a new travel fee on this page. The corridor overview is West Maui.',
        },
      ],
      related: [
        { path: '/west-maui', label: 'West Maui corridor' },
        { path: '/kapalua', label: 'Kapalua corridor' },
        { path: '/lahaina', label: 'Lahaina corridor' },
        { path: '/blog/dining-in-napili', label: 'Nāpili kitchen notes' },
      ],
    },
    {
      slug: 'paia',
      name: 'Pāʻia / Haiku',
      h1: 'Pāʻia and Haiku tables — North Shore booking, not a doorway.',
      title: 'Private chef in Pāʻia and Haiku | myCHEF',
      description:
        'Private chef dinners in Pāʻia and Haʻikū, quoted in writing as their own North Shore booking. Extended drive, not stacked onto a Wailea lunch.',
      lede:
        'Trade wind, a North Shore estate, the drive quoted — not stacked with a Wailea lunch as one unpaid day.',
      photo: 'cellPaia',
      body: [
        'Pāʻia and Haʻikū are quoted in writing as their own booking. There is no published flat fee for this North Shore, and the extended drive is planned with the menu. Estate dinners fit when that drive is its own date. They are not stacked onto a Wailea lunch as one unpaid day.',
        'Haʻikū houses and Pāʻia estates share this page because both sit off the resort corridors. Tell us which one, and which night. A cooktop is still required. A band on the rate card is not an instant-booking button for this shore. Compare the climb on [Upcountry](/upcountry) and the south-shore houses on [South Maui](/south-maui) before you choose. Request a written quote on [the quote form](/quote) with the address. Fee lines are on [pricing](/pricing).',
      ],
      faqs: [
        {
          q: 'Is Pāʻia a flat fee, or its own written booking?',
          a: 'Pāʻia and Haʻikū are quoted in writing as their own booking. There is no published flat fee for this shore. The extended drive prints with the menu. Request a written quote with the address. Maui fee lines are on the pricing page.',
        },
        {
          q: 'Can a Wailea lunch and a Pāʻia dinner share one chef day?',
          a: 'Not as one unpaid day. Write both services, or pick one. The North Shore drive is planned, not tucked behind a Wailea lunch. Say which night you want when you request a written quote.',
        },
        {
          q: 'What kind of houses do you cook in around Pāʻia and Haʻikū?',
          a: 'North Shore estates and Haʻikū houses with a working cooktop, cold storage, and a table. A room without heat is declined before a deposit. This is not a resort-corridor doorway. Send the house type on the quote form.',
        },
        {
          q: 'How does the extended North Shore drive show on the quote?',
          a: 'It is planned with the menu and confirmed on the written quote. We do not publish a separate travel price on this page. The night is its own date. Compare Upcountry if the house is on the climb instead.',
        },
        {
          q: 'Should I open Upcountry or South Maui before I ask for Pāʻia?',
          a: 'Open both if you are choosing. Upcountry is the climb. South Maui is Wailea, Makena, and Kīhei. Pāʻia stays its own written booking. Request a written quote only for the shore you actually mean.',
        },
      ],
      related: [
        { path: '/upcountry', label: 'Upcountry dinners' },
        { path: '/south-maui', label: 'South Maui corridor' },
        { path: '/quote', label: 'Quote form' },
        { path: '/pricing', label: 'Rate card' },
      ],
    },
    {
      slug: 'makawao',
      name: 'Makawao',
      h1: 'Makawao town tables — Upcountry weather on the quote.',
      title: 'Private chef in Makawao, Upcountry | myCHEF',
      description:
        'Private chef dinners in Makawao town. The Upcountry drive is on the written quote, with a weather backup for outdoor tables and retreat houses.',
      lede:
        'Town, not the whole upcountry slope. Retreat houses and estate tables. The weather backup is written.',
      photo: 'cellMakawao',
      body: [
        'Makawao is the Upcountry town, not the whole slope and not a Wailea resort lawn. Retreat houses and estate tables are the fit. A reunion table in a retreat house is a stronger match than a visitor condo. A working cooktop is still required, and an outdoor table needs a written indoor backup because the weather can turn. We do not invent a dry lawn.',
        'Cooler evenings belong in the plan before anyone shops, and a Wailea villa week is a different date. Named farms wait for written verification. Haleakalā and Kula are separate quotes on [Kula dinners](/haleakala), and the climb itself is the [Upcountry](/upcountry) page. The town note is [Makawao kitchen notes](/blog/dining-in-makawao). Fee lines live on [pricing](/pricing). Request a written quote on [the quote form](/quote) with the address and whether the table is indoors.',
      ],
      faqs: [
        {
          q: 'What happens to an outdoor Makawao table if the weather turns?',
          a: 'The indoor backup is written on the quote before anyone shops. We do not invent a dry lawn. If the only plan is an uncovered yard, we say so and move the table inside or decline that setup. Name the room on the quote form.',
        },
        {
          q: 'What kind of Makawao houses are a fit for a chef night?',
          a: 'Retreat houses and estate tables in town, with a working cooktop and a real dining room. A visitor condo is the weaker match. This is not a Wailea lawn. Send the house, not a resort name, when you request a written quote.',
        },
        {
          q: 'How does the Upcountry drive show on a Makawao quote?',
          a: 'The climb prints on the written quote. It is not folded into the food. We do not publish a separate travel price on this page. Read the pricing page for Maui bands and fee lines, then send the Makawao address.',
        },
        {
          q: 'Will a Makawao menu name a farm?',
          a: 'Named farms wait for written verification. Sitting in town does not earn a grower credit. Produce is still produce until that paper exists. The sourcing note explains the rule. The dinner itself is the retreat table.',
        },
        {
          q: 'Is Makawao the right page for a Kula elevation night?',
          a: 'Makawao is the town. Kula and the Haleakalā slope are a separate quote, and the wider climb is the Upcountry page. Open the page that matches the house. Request a written quote for one address, not both slopes at once.',
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
      title: 'Private chef in Honokōwai condos | myCHEF',
      description:
        'Private chef dinners in Honokōwai condos between Kāʻanapali and Kapalua. Compact ranges, named load-in, and multi-day chef days on a written quote.',
      lede:
        'The residential strip. Multi-day chef days more than one-off halos. The menu fits the range that is actually in the unit.',
      photo: 'cellHonokowai',
      body: [
        'Honokōwai is the residential strip between Kāʻanapali and Kapalua, and condo kitchens are the common room. The menu follows the burners in that unit, not a brochure range. Load-in is named before the shop: which elevator, which stall, which door. A hotel room without a cooktop is declined.',
        'Multi-day chef days fit these condos better than a single halo night. A one-night tasting can still be quoted when the range is real, and the week is the better fit when you are staying through. Base zone means this strip is not a separate travel product invented on the invoice. Condo load-in notes sit on the journal page linked below. The named corridors are [Kāʻanapali](/kaanapali) and [Kapalua](/kapalua). Nāpili houses are on [Nāpili](/napili), and the corridor overview is [West Maui](/west-maui). Read [pricing](/pricing), then send the unit type on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Do you cook in Honokōwai condos with compact ranges?',
          a: 'We do when the unit has a real cooktop. The menu follows those burners, not a brochure kitchen. A hotel room without heat is declined before a deposit. Send the unit type on the quote form so the shop matches the range.',
        },
        {
          q: 'How does load-in work in a Honokōwai building?',
          a: 'Elevator, stall, and door are named before the shop. We will not discover a blocked garage at service. The condo load-in note is the longer version of that honesty. Put the building instructions on the quote form with the dates.',
        },
        {
          q: 'Why do multi-day chef days fit Honokōwai better than one halo night?',
          a: 'These are stay-through condos more than one-off tasting rooms. A single dinner can still be quoted when the range is real. A week that cooks more than once should be written as chef days. Request a written quote with how many nights you want.',
        },
        {
          q: 'Is Honokōwai the same booking as Kapalua?',
          a: 'Kapalua is the headland corridor, and Honokōwai is a different booking. Honokōwai is the condo strip between there and Kāʻanapali. Nāpili is the house page beside them. Open West Maui for the overview, and request a written quote for the unit you have.',
        },
        {
          q: 'Does a Honokōwai condo add a travel line on top of the menu?',
          a: 'This strip is base zone, so the quote does not invent a separate town fee. Maui bands and fee lines are on the pricing page. The menu still follows the range in the unit. Send that unit before anyone shops.',
        },
      ],
      related: [
        { path: '/west-maui', label: 'West Maui corridor' },
        { path: '/kaanapali', label: 'Kāʻanapali corridor' },
        { path: '/napili', label: 'Nāpili dinners' },
        { path: '/blog/condo-load-in', label: 'Condo load-in' },
      ],
    },
    {
      slug: 'waikapu',
      name: 'Waikapū',
      h1: 'Waikapū valley estates — central Maui, not a resort corridor.',
      title: 'Private chef in Waikapū valley | myCHEF',
      description:
        'Private chef dinners in Waikapū valley estates. The drive from Wailea or West Maui prints on the written quote. Private houses, not visitor condos.',
      lede:
        'Inland estates, not a resort lawn. The drive from Wailea or West Maui prints. Private houses, not visitor condos.',
      photo: 'cellWaikapu',
      body: [
        'Waikapū is central-valley estates, not a resort corridor and not a visitor-condo strip. Private houses with a dining room are the match. A short-stay condo kitchen is the wrong fit for this valley. The drive from Wailea or from West Maui prints on the written quote. It is not folded into the food. A cooktop is required, and a house without one is declined before a deposit.',
        'A Wailea lunch and a Waikapū dinner are two written services, or you pick one. We will not hide the second drive. South Maui resort houses stay on [South Maui](/south-maui) and [Wailea](/wailea). This valley is the estate ask. Bands are on [pricing](/pricing). Request a written quote on [the quote form](/quote) with the street and the headcount.',
      ],
      faqs: [
        {
          q: 'Can one chef day cover a Wailea lunch and a Waikapū dinner?',
          a: 'Only when both services are written. We will not hide the second drive inside one unpaid sprint. Pick the valley or the resort, or pay for both as separate lines. Say which meals you mean on the quote form.',
        },
        {
          q: 'What kind of Waikapū houses do you cook in?',
          a: 'Private valley estates with a cooktop, cold storage, and a dining room. Visitor condos are the wrong fit. This is not a resort lawn. Send the street when you request a written quote so the drive can be planned.',
        },
        {
          q: 'How does the central-valley drive print on the quote?',
          a: 'Coming from Wailea or from the west side, that valley leg is written on its own. It does not vanish into the menu. Open pricing for Maui bands and fee lines, and name the inland street on the quote form.',
        },
        {
          q: 'Is a visitor condo in Waikapū a reason to book this page?',
          a: 'Visitor condos are the wrong reason to open this page. Waikapū is private houses with dining rooms. If the kitchen is a short-stay condo, say so and we will tell you whether it can hold a dinner. Resort houses belong on the South Maui page.',
        },
        {
          q: 'Where should I read prices before I ask for Waikapū?',
          a: 'Open the pricing page for Maui bands, service, Hawaiʻi GET, the deposit, and gratuity. Then request a written quote with the valley street. South Maui is the resort shore. This page is the inland estate.',
        },
      ],
      related: [
        { path: '/south-maui', label: 'South Maui corridor' },
        { path: '/wailea', label: 'Wailea corridor' },
        { path: '/quote', label: 'Quote form' },
        { path: '/pricing', label: 'Rate card' },
      ],
    },
    {
      slug: 'haleakala',
      name: 'Haleakalā / Kula',
      h1: 'Kula and Haleakalā tables — temperature changes the chef day.',
      title: 'Private chef in Kula, Haleakalā | myCHEF',
      description:
        'Private chef dinners on the Kula and Haleakalā slope. Elevation and temperature go on the written plan, and farm names wait for verification.',
      lede:
        'Above the cloud line some afternoons. The drive and the temperature both change the chef day. Farm names wait for verification.',
      photo: 'cellHaleakala',
      body: [
        'Kula and the Haleakalā slope sit above the coast, and both the drive and the temperature change the chef day. A retreat dinner here is its own date. It is not a stop after a South Maui lunch. Outdoor fire is a weather plan, not a promise. Cooler afternoons need an indoor table written before the shop. A cooktop is still required at elevation.',
        'Send how the house is reached so the day is planned. Named farms print only after written verification. Makawao town is a different page, [Makawao](/makawao), and the wider climb is [Upcountry](/upcountry). Sourcing rules are on [sourcing honesty](/blog/sourcing-honesty). The elevation line and the fee lines are on [pricing](/pricing). Request a written quote on [the quote form](/quote) with the address and the elevation.',
      ],
      faqs: [
        {
          q: 'How does cooler Kula air change the chef day?',
          a: 'Temperature is part of the plan, not a surprise at plating. Cooler afternoons need an indoor table written before the shop. Outdoor fire stays a weather plan, not a promise. Send the elevation with the address on the quote form.',
        },
        {
          q: 'Will you print a Kula farm name on the menu?',
          a: 'Only after written verification. We will not print a grower we have not checked. Food can still be served without a farm credit. The sourcing note is the rule. The dinner is the slope table, not a farm brochure.',
        },
        {
          q: 'What kitchens on the Haleakalā slope can take a dinner?',
          a: 'A retreat or estate kitchen with a working cooktop, cold storage, and seats. Elevation does not waive that test. A house without heat is declined before a deposit. Tell us how the house is reached when you request a written quote.',
        },
        {
          q: 'Is a Kula night the same quote as Makawao town?',
          a: 'Makawao is the town page, and a Kula night is a different quote. Kula is the higher slope, and Upcountry is the wider climb. Each address gets its own written quote. A South Maui lunch is not folded into this date.',
        },
        {
          q: 'Where are Maui prices for an elevation dinner?',
          a: 'On the pricing page: bands, service, Hawaiʻi GET, the deposit, and gratuity. The elevation line is confirmed on the written quote. We do not invent a travel dollar on this page. Request a written quote with the slope address.',
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
      h1: 'Līhuʻe in-town tables — households, not the villa hero.',
      title: 'Private chef in Līhuʻe households | myCHEF',
      description:
        'Private chef dinners in Līhuʻe households near the airport, not a shore estate. Travel is confirmed on the written quote. Request availability.',
      lede:
        'The planned base. In-town households, not shore estates. Estate dinners are mostly in Princeville and Poʻipū.',
      photo: 'cellLihue',
      body: [
        'Līhuʻe is the in-town base beside the airport, and the usual table is a household kitchen rather than a shore estate. Weeknight households are the usual ask. We will not sell this town as a North Shore villa page. Princeville and Poʻipū remain the estate dinners. A working cooktop is required, and a room without heat is declined before anyone shops.',
        'Travel is confirmed on the written quote. This page does not treat the drive as included. East-side households continue on [Kapaʻa](/kapaa). Shore estates are [Poʻipū](/poipu) and [Princeville](/princeville). The South Shore overview is [South Shore](/south-shore). Bands are on [pricing](/pricing). Request availability on [the quote form](/quote) with the street and the dates.',
      ],
      faqs: [
        {
          q: 'Is a Līhuʻe night the Princeville or Poʻipū villa product?',
          a: 'It is an in-town household dinner, not a shore estate. Open Princeville or Poʻipū if that is the house. Līhuʻe stays the airport-adjacent town. Request availability for the kitchen you actually have.',
        },
        {
          q: 'What kind of in-town kitchens do you cook in around Līhuʻe?',
          a: 'Household kitchens with a cooktop, a fridge, and a table. A hotel room without heat is declined. This is not a villa lawn. Send the street and how the crew should arrive when you request availability.',
        },
        {
          q: 'Does a Līhuʻe booking include the drive?',
          a: 'Travel is confirmed on the written quote. This page does not call the drive included. We do not publish a separate travel price here. Kauaʻi bands and fee lines are on the pricing page.',
        },
        {
          q: 'Who should book Līhuʻe instead of a shore estate?',
          a: 'People cooking in an in-town house, not a Princeville or Poʻipū estate week. A family table at home is the fit. If the week is on a shore, open that page. Request availability with the town address.',
        },
        {
          q: 'How do I request availability and see Kauaʻi prices for Līhuʻe?',
          a: 'Use the quote form with the street, the dates, and the headcount. Read the pricing page for bands, service, Hawaiʻi GET, the deposit, and gratuity. A reply confirms whether a crew can hold that week.',
        },
      ],
      related: [
        { path: '/kapaa', label: 'Kapaʻa dinners' },
        { path: '/poipu', label: 'Poʻipū corridor' },
        { path: '/princeville', label: 'Princeville corridor' },
        { path: '/pricing', label: 'Rate card' },
      ],
    },
    {
      slug: 'kalaheo',
      name: 'Kalāheo',
      h1: 'Kalāheo residential tables — south-west, inquiry.',
      title: 'Private chef in Kalāheo houses | myCHEF',
      description:
        'Private chef dinners in Kalāheo houses between Līhuʻe and the South Shore villas. Residential tables, travel on the written quote. Request availability.',
      lede:
        'Quieter houses, not a visitor villa. The drive is on the written quote. Request availability.',
      photo: 'cellKalaheo',
      body: [
        'Kalāheo is quieter residential houses between Līhuʻe and the South Shore villas, not a Poʻipū lawn copied inland. We confirm a crew in writing. We do not promise every house on a given week. Bring a residential street, not a resort name. ʻEleʻele sits further toward the west. A cooktop is still required, and a room without heat is declined before a deposit.',
        'The south-west drive is confirmed on the written quote. We do not publish a separate travel price on this page. Kōloa and Poʻipū stay the shore pages, [Kōloa](/koloa) and [Poʻipū](/poipu). The shore overview is [South Shore](/south-shore). Further west is [ʻEleʻele](/eleele). Bands are on [pricing](/pricing). Request availability on [the quote form](/quote) with the street.',
      ],
      faqs: [
        {
          q: 'Are you staffed for every Kalāheo house on a given week?',
          a: 'Request availability. We confirm a crew in writing when that week can be held. A published band is not a live calendar for every street. Send the address and the dates, and wait for that written reply.',
        },
        {
          q: 'What kind of residential tables fit Kalāheo?',
          a: 'Quieter houses with a cooktop, a fridge, and room for the people eating. This is not a visitor-villa lawn. A kitchen without heat is declined. Describe the house when you request availability.',
        },
        {
          q: 'How is Kalāheo different from Kōloa or Poʻipū?',
          a: 'Kōloa and Poʻipū are the South Shore villa and town pages. Kalāheo is the residential stretch between Līhuʻe and those villas. The menu band is still the Kauaʻi card. The house type is what changes. Open South Shore for the overview.',
        },
        {
          q: 'Where does Kalāheo travel sit on the written quote?',
          a: 'On its own confirmation, not inside the food line. We do not publish a separate travel price on this page. Read pricing for bands, service, Hawaiʻi GET, the deposit, and gratuity. Then request availability with the street.',
        },
        {
          q: 'How do I request availability without treating Kalāheo as a resort lawn?',
          a: 'Use the quote form and name a residential street, not a resort. Poʻipū is the shore page if that is actually the house. Kalāheo stays the quieter tables. A crew is confirmed in writing before the date is held.',
        },
      ],
      related: [
        { path: '/south-shore', label: 'South Shore' },
        { path: '/koloa', label: 'Kōloa dinners' },
        { path: '/poipu', label: 'Poʻipū corridor' },
        { path: '/eleele', label: 'ʻEleʻele dinners' },
      ],
    },
    {
      slug: 'waimea',
      name: 'Waimea',
      h1: 'Kauaʻi Waimea tables — west-side distance from Līhuʻe.',
      title: 'Private chef in Waimea, Kauaʻi | myCHEF',
      description:
        'Private chef dinners in Waimea on Kauaʻi, west of Līhuʻe. Advance notice, travel confirmed in writing. Not the Hawaiʻi Island ranch. Request availability.',
      lede:
        'West Kauaʻi, not the Hawaiʻi Island ranch. Extended surcharge. Advance notice. Request availability.',
      photo: 'cellKauaiWaimea',
      body: [
        'This is Waimea on Kauaʻi: west-side distance from Līhuʻe, not the ranch town on Hawaiʻi Island. The longer drive is why the date needs advance notice. A west-side Saturday still needs its own shop list, written before anyone leaves Līhuʻe. Travel is confirmed on the written quote. We do not publish a separate travel price on this page. A cooktop is still required.',
        'Hanapēpē is the nearer west-side town, on [Hanapēpē](/hanapepe). ʻEleʻele sits back toward Kalāheo. The South Shore villas are a different drive, on [South Shore](/south-shore). Do not stack this west-side night onto a Līhuʻe afternoon without writing it. Bands are on [pricing](/pricing). Request availability on [the quote form](/quote) with the west-side street and enough notice for the day.',
      ],
      faqs: [
        {
          q: 'Is this Waimea the Big Island ranch?',
          a: 'This is Waimea on Kauaʻi, west of Līhuʻe. The ranch town on Hawaiʻi Island is a different island and a different quote. Say Kauaʻi on the form. Request availability for this west side only.',
        },
        {
          q: 'Can a Līhuʻe crew add Kauaʻi Waimea the same day?',
          a: 'Not as an unspoken add-on. West-side dates need advance notice, and the drive is confirmed on the written quote. We will not hide that distance inside a town afternoon. Request availability with the date you can actually hold.',
        },
        {
          q: 'What west-side houses justify a Waimea quote?',
          a: 'Houses with a working cooktop, cold storage, and a table, far enough west that the day is its own plan. A hotel room without heat is declined. Send the street so the notice and the drive can be written first.',
        },
        {
          q: 'How do Hanapēpē and Waimea differ on that west side?',
          a: 'Hanapēpē is the town-house page. Waimea is the farther west-side ask from Līhuʻe. Both need advance notice. Neither is the South Shore villa belt. Open the page that matches the street, then request availability.',
        },
        {
          q: 'Where do I request availability and read the Kauaʻi card for Waimea?',
          a: 'Pricing holds the bands, service, Hawaiʻi GET, the deposit, and gratuity. The quote form is where the west-side street and the notice go. We confirm a crew in writing. We do not print a travel dollar on this page.',
        },
      ],
      related: [
        { path: '/hanapepe', label: 'Hanapēpē dinners' },
        { path: '/south-shore', label: 'South Shore' },
        { path: '/eleele', label: 'ʻEleʻele dinners' },
        { path: '/quote', label: 'Availability form' },
      ],
    },
    {
      slug: 'hanapepe',
      name: 'Hanapēpē',
      h1: 'Hanapēpē town houses — west Kauaʻi, not a visitor cluster.',
      title: 'Private chef in Hanapēpē houses | myCHEF',
      description:
        'Private chef dinners in Hanapēpē town houses on west Kauaʻi. Not a North Shore estate and not a visitor-villa cluster. Request availability with notice.',
      lede:
        'Town houses on the west. Surcharge. We will not sell this as a North Shore estate page.',
      photo: 'cellHanapepe',
      body: [
        'Hanapēpē is town houses on the west side, not a visitor-villa cluster and not a North Shore copy. The night is a private kitchen and a table, with advance notice because the drive from Līhuʻe is the long one. Write one street, not a whole west-side loop. A cooktop is still required. We confirm a crew in writing when the week can be staffed.',
        'ʻEleʻele sits back toward Kalāheo, on [ʻEleʻele](/eleele). Farther west is [Kauaʻi Waimea](/waimea). The villa shore is a different page, [South Shore](/south-shore). Travel is confirmed on the written quote. We do not publish a separate travel price here. Bands are on [pricing](/pricing). Request availability on [the quote form](/quote) with the town address and the notice you can give.',
      ],
      faqs: [
        {
          q: 'Is Hanapēpē a North Shore estate booking?',
          a: 'It is west Kauaʻi town houses, not a North Shore estate. Princeville and Hanalei are the other shore. Request availability for this town if the kitchen is here. Do not file a valley address on this page.',
        },
        {
          q: 'What town houses on the west side can take a chef?',
          a: 'Private houses with a cooktop, cold storage, and seats. A visitor-villa cluster is the wrong picture. A room without heat is declined before a deposit. Describe the kitchen when you request availability.',
        },
        {
          q: 'Why does a Hanapēpē date need advance notice?',
          a: 'The west side is not a same-afternoon add-on from Līhuʻe. Notice lets the drive and the crew be written first. Travel is confirmed on the quote. We do not publish a separate travel price on this page.',
        },
        {
          q: 'How do Hanapēpē and Kauaʻi Waimea share a west-side quote?',
          a: 'They do not share one line unless you write both. Hanapēpē is the town. Waimea is farther from Līhuʻe. Pick the street you mean, or ask for two dated lines. Request availability for the one you can hold.',
        },
        {
          q: 'Where do I request availability for a Hanapēpē town house?',
          a: 'On the quote form, with the street, the dates, and the headcount. Pricing has the Kauaʻi bands and fee lines. South Shore is the villa overview if you are actually in Poʻipū. A crew is confirmed in writing.',
        },
      ],
      related: [
        { path: '/waimea', label: 'Kauaʻi Waimea dinners' },
        { path: '/eleele', label: 'ʻEleʻele dinners' },
        { path: '/south-shore', label: 'South Shore' },
        { path: '/quote', label: 'Availability form' },
      ],
    },
    {
      slug: 'anahola',
      name: 'Anahola',
      h1: 'Anahola coast tables — quieter than Kapaʻa, inquiry.',
      title: 'Private chef in Anahola, Kauaʻi | myCHEF',
      description:
        'Private chef dinners in Anahola coast houses, quieter than Kapaʻa and still a drive from Līhuʻe. Travel is on the written quote. Request availability.',
      lede:
        'East-north coast houses. The drive is on the written quote. Request availability. Not a second Kapaʻa page.',
      photo: 'cellAnahola',
      body: [
        'Anahola is the quieter east-north coast, not a second Kapaʻa page and not the Hanalei valley. Houses here still sit a drive from Līhuʻe, and that drive is confirmed on the written quote. We do not publish a separate travel price on this page. A cooktop is required. A room without heat is declined before a deposit.',
        'Kapaʻa is the nearer east-side town, on [Kapaʻa](/kapaa). The North Shore estates are [Hanalei](/hanalei), with their own weather notes. Kitchen notes for this coast are [Anahola kitchen notes](/blog/dining-in-anahola). Bands and fee lines are on [pricing](/pricing). Request availability on [the quote form](/quote). We confirm a crew in writing. This coast is not an instant confirm.',
      ],
      faqs: [
        {
          q: 'How is Anahola different from a Kapaʻa household?',
          a: 'Kapaʻa is the east-side town closer to Līhuʻe. Anahola is the quieter coast beyond it, and the drive is its own line on the quote. Do not file one as the other. Request availability for the coast address if that is the house.',
        },
        {
          q: 'What coast houses do you cook in at Anahola?',
          a: 'Houses with a working cooktop, cold storage, and a table, on this quieter stretch. A hotel room without heat is declined. Send the street, not a resort name. The kitchen notes page is the short companion to this one.',
        },
        {
          q: 'How does the drive from Līhuʻe show on an Anahola quote?',
          a: 'It is confirmed in writing with the menu. We do not publish a separate travel price on this page, and we do not hide the drive inside the food. Kauaʻi bands and fee lines are on the pricing page.',
        },
        {
          q: 'Is Anahola ready as an instant confirm?',
          a: 'Request availability. We confirm a crew in writing when the week can be held. A published band is not a button for this coast. Send the dates and wait for that reply before you treat the night as set.',
        },
        {
          q: 'Where should a Hanalei guest look instead of Anahola?',
          a: 'Open the Hanalei page. That valley is the North Shore ask, with its own weather notes. Anahola is the east-north coast. Request availability only for the coast you mean, and name it on the quote form.',
        },
      ],
      related: [
        { path: '/kapaa', label: 'Kapaʻa corridor' },
        { path: '/hanalei', label: 'Hanalei corridor' },
        { path: '/blog/dining-in-anahola', label: 'Anahola kitchen notes' },
        { path: '/pricing', label: 'Rate card' },
      ],
    },
    {
      slug: 'eleele',
      name: 'ʻEleʻele',
      h1: 'ʻEleʻele houses — between Kalāheo and the west, inquiry.',
      title: 'Private chef in ʻEleʻele houses | myCHEF',
      description:
        'Private chef dinners in ʻEleʻele houses between Kalāheo and Hanapēpē. South-west residential, not a Poʻipū villa. Request availability with notice.',
      lede:
        'Further toward the west. Surcharge. Advance notice. Private houses, not a South Shore villa page.',
      photo: 'cellEleele',
      body: [
        'ʻEleʻele is south-west residential, further toward the west than Kalāheo and not a Poʻipū villa page. Private houses are the fit. The night is a residential supper between two towns, not a villa lunch. Advance notice is part of the ask because the day is longer than a South Shore morning. A cooktop is still required. We confirm a crew in writing when that week can be staffed.',
        'Hanapēpē continues west, on [Hanapēpē](/hanapepe). Kalāheo sits back toward Līhuʻe, on [Kalāheo](/kalaheo). The villa overview stays [South Shore](/south-shore). Travel is confirmed on the written quote. We do not publish a separate travel price here. Bands are on [pricing](/pricing). Request availability on [the quote form](/quote) with the street and the notice you can give.',
      ],
      faqs: [
        {
          q: 'Is ʻEleʻele booked like a Poʻipū villa?',
          a: 'It is south-west residential, not the Poʻipū villa page. Open South Shore if the house is actually on that shore. Request availability here only for a private house between Kalāheo and the west.',
        },
        {
          q: 'What residential kitchens sit between Kalāheo and Hanapēpē?',
          a: 'ʻEleʻele houses with a cooktop, cold storage, and a table. Kalāheo is the nearer residential town. Hanapēpē continues west. A room without heat is declined. Name the street when you request availability.',
        },
        {
          q: 'How does advance notice work for an ʻEleʻele night?',
          a: 'The date is written with enough notice to plan the south-west day. We will not treat it as a same-afternoon add-on. A crew is confirmed in writing. Send the dates you can hold, not a same-day hope.',
        },
        {
          q: 'Where does ʻEleʻele travel print?',
          a: 'ʻEleʻele travel is confirmed when the south-west day is accepted, not as a surprise after dinner. This page prints no travel dollar of its own. Read pricing for the Kauaʻi bands and fee lines, then request availability with the notice you can give.',
        },
        {
          q: 'Which page is the South Shore, and which is further west?',
          a: 'South Shore is Poʻipū and Kōloa. ʻEleʻele is the residential step toward Hanapēpē and Waimea. Use the page that matches the street. Request availability for one address so the drive is the right one.',
        },
      ],
      related: [
        { path: '/kalaheo', label: 'Kalāheo dinners' },
        { path: '/hanapepe', label: 'Hanapēpē dinners' },
        { path: '/south-shore', label: 'South Shore' },
        { path: '/quote', label: 'Availability form' },
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
          a: 'The food lines are the Hawaiʻi Island card, and the staffing is not a west-side afternoon. Signature $210–$325 a guest already includes the shop. The from-$165 dinner is the shorter Hilo night when the town kitchen fits it. Stay Chef from $1,450 is the fee; Hilo groceries print at cost with receipts and never ride inside that fee. Crossing labor is its own day on the quote. Then 20% service, Hawaiʻi GET up to 4.712%, and a 50% deposit once a crew can hold the date. Gratuity is never required.',
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
          q: 'Signature $210–$325 or a from-$165 dinner at a Volcano lodge?',
          a: 'A park-lodge plated night is Signature $210–$325 per guest, with the shop already in the band. The from-$165 dinner is only a shorter cabin list when the range can hold it. Service is 20%. Tax prints up to 4.712%. Half, the 50%, waits until someone can staff the slope. Gratuity is never required. Read the pricing page before you enquire.',
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
        'Kaʻū / South Point dinners at inquiry. Extended surcharge. Named Kaʻū coffee follows Act 198.',
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
