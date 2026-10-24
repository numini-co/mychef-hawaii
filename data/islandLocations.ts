import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /locations indexes. Distinct from /coverage (zone map) and from
 * Middleware must not 301 this index to home.
 * Titles must not use money keywords.
 */

export interface IslandLocationsPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const islandLocations: Record<IslandId, IslandLocationsPage> = {
  oahu: {
    h1: 'Where we cook on Oahu — Honolulu to Ko Olina.',
    title: 'Oahu towns we cook in — Honolulu to Ko Olina | myCHEF',
    description:
      'Oʻahu towns from Honolulu and Waikīkī to Kahala, Kailua, Lanikai, and Ko Olina. Each has a page. North Shore travel is its own line on the written quote.',
    lede:
      'Each town below has its own page. This list is where we cook, and how a longer drive shows up on the written quote. It is not a second copy of the area guide.',
    kicker: 'Oʻahu · Locations',
    photo: 'locIndexOahu',
    body: [
      'Base-zone towns are [Honolulu](/honolulu), [Waikīkī](/waikiki), [Kahala](/kahala), [Kailua](/kailua), [Lanikai](/lanikai), [Hawaiʻi Kai](/hawaii-kai), [Diamond Head](/diamond-head), and [Ko Olina](/ko-olina). Hotel suites without a cooktop are declined on the Waikīkī page. The [North Shore](/north-shore) is a surcharge day, 60–90+ minutes from town, and that drive is its own line on the quote, not folded into the food. Kāneʻohe is the same idea: travel quoted in writing. A 20% service charge and Hawaiʻi GET up to 4.712% stay on their own lines after the food. A 50% deposit holds the date after you accept. How the areas feel different is on [areas](/areas). Quotes are open. Request a written quote on [the quote form](/quote). Bands are on [pricing](/pricing).',
    ],
    faqs: [
      {
        q: 'Which Oʻahu towns have their own page?',
        a: 'Honolulu, Waikīkī, Kahala, Kailua, Lanikai, Hawaiʻi Kai, Diamond Head, Ko Olina, and the North Shore. Open the town from the list on this page. The area guide explains how those places differ. This page is the town index and the travel line.',
      },
      {
        q: 'How does a North Shore drive show up on an Oʻahu quote?',
        a: 'As its own line. The North Shore is 60–90+ minutes from town, already published as a surcharge day. It is not folded into the Honolulu food. Town, Kahala, and Ko Olina do not take that line. The quote names which drive you asked for.',
      },
      {
        q: 'Is a Waikīkī hotel suite on this town list?',
        a: 'The neighborhood is. A suite without a cooktop is declined on the Waikīkī page before any deposit. Residences with a range are the rooms we quote. Send the building type with the address on [the quote form](/quote).',
      },
      {
        q: 'Do Kailua and Lanikai add a travel line?',
        a: 'They are base zone, same as town. The page for each house is [Kailua](/kailua) and [Lanikai](/lanikai). A longer windward drive, such as Kāneʻohe, is quoted in writing instead. We do not hide that drive inside the food.',
      },
      {
        q: 'Where do service and tax sit when the town changes?',
        a: 'After the food, on every town: a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. The town changes the travel line, not those two. Gratuity is never required. Bands are on [pricing](/pricing).',
      },
      {
        q: 'Is this the same page as the Oʻahu area guide?',
        a: 'This page lists the towns and how travel hits the quote. [Areas](/areas) is how a tower, a Kahala room, a Ko Olina villa, and a windward month-stay differ. Open the town page for the house, then request a written quote.',
      },
    ],
  },
  maui: {
    h1: 'Where we cook on Maui — South Shore, West Maui and the towns between.',
    title: 'Maui towns we cook in — Wailea to Kapalua | myCHEF',
    description:
      'Maui towns: Wailea, Makena, Kīhei, Kāʻanapali, Lahaina, and Kapalua. Each has a page. Saturday West Maui traffic is planned in. Travel prints on the quote.',
    lede:
      'South Shore and West Maui are both on this list. Lahaina is a town here, not a mystery fee. Saturday traffic changes the arrival, and that arrival is written before the shop.',
    kicker: 'Maui · Locations',
    photo: 'locIndexMaui',
    body: [
      'Open the town: [Wailea](/wailea), [Makena](/makena), [Kīhei](/kihei), [Kāʻanapali](/kaanapali), [Lahaina](/lahaina), [Kapalua](/kapalua), and [Nāpili](/napili). Those are base. [Upcountry](/upcountry) is a published surcharge, quoted with the menu, not a dollar invented on this page. A Saturday crossing from Wailea toward Kapalua is planned into arrival. Travel, when it applies, prints on the written quote and is not folded into the food. A 20% service charge and Hawaiʻi GET up to 4.712% are their own lines. A 50% deposit holds the dates after you accept. How the areas differ for a villa week is on [areas](/areas). Quotes are open. Request a written quote on [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Which Maui towns can I open from this page?',
        a: 'Wailea, Makena, Kīhei, Kāʻanapali, Lahaina, Kapalua, and Nāpili, plus Upcountry. Each link is that town’s page. This index says where we cook and how travel is written. The area guide is the contrast between those places.',
      },
      {
        q: 'Is Lahaina a separate travel fee from Kāʻanapali?',
        a: 'Lahaina is a town on this list, with its own page. It is not a mystery line. Saturday West Maui traffic is planned into arrival for the whole west side. Any travel that applies prints on the quote, not inside the food.',
      },
      {
        q: 'How does a Saturday drive from Wailea to Kapalua affect the quote?',
        a: 'It changes the call time, and that time is on the written quote before the shop. Both towns are base. The crossing is time, planned in, not a fee discovered after you land. Name the direction when you request a written quote.',
      },
      {
        q: 'Where does Upcountry sit on this Maui list?',
        a: 'It has its own page, and it is a published surcharge, quoted with the menu. We do not print a new travel price here. South Shore towns and West Maui towns stay the base list. Say the elevation when the house is in the mist.',
      },
      {
        q: 'Do service and tax change because the Maui town changed?',
        a: 'They do not. A 20% service charge and Hawaiʻi GET up to 4.712% follow the food on their own lines in every town. Gratuity is never required. A 50% deposit holds the dates after you accept. Bands are on [pricing](/pricing).',
      },
      {
        q: 'How is this different from the Maui area guide?',
        a: 'This page is the town index and the travel line. [Areas](/areas) is how a South Maui villa week, a West Maui Saturday, and Upcountry differ for the night. Open the town, then request a written quote on [the quote form](/quote).',
      },
    ],
  },
  kauai: {
    h1: 'Where we cook on Kauai — North Shore and South Shore.',
    title: 'Kauai towns we cook in — both shores | myCHEF',
    description:
      'Kauaʻi towns: Princeville, Hanalei, Kapaʻa, and Poʻipū. Request availability. The Hanalei bridge is a written clause. Travel is quoted in writing.',
    lede:
      'Both shores are on this list. Request availability with the town and the dates. Princeville and Poʻipū are not the same drive, and a named town is not a confirmation.',
    kicker: 'Kauaʻi · Locations',
    photo: 'locIndexKauai',
    body: [
      'North shore: [Princeville](/princeville) and [Hanalei](/hanalei). South shore: [Poʻipū](/poipu) and [Kōloa](/koloa). East side: [Kapaʻa](/kapaa) and [Līhuʻe](/lihue). A house past the Hanalei bridge inherits the written clause, including 72-hour notice, and a closure reschedules rather than forfeits. Poʻipū is a shorter drive from Līhuʻe than the far north. West-side towns such as Waimea are quoted in writing. We do not print a separate travel price on this page. A 20% service charge and Hawaiʻi GET up to 4.712% are their own lines after a written yes. Request availability on [the quote form](/quote). How the shores differ is on [areas](/areas).',
    ],
    faqs: [
      {
        q: 'Which Kauaʻi towns are on this list?',
        a: 'Princeville, Hanalei, Poʻipū, Kōloa, Kapaʻa, and Līhuʻe, each with a page. Both shores can be requested. West-side distance is quoted in writing. This page is the town index. The area guide is how those shores differ.',
      },
      {
        q: 'How do I request availability for a town on either shore?',
        a: 'Name the town, the dates, and the address on [the quote form](/quote), and request availability. A request is not a confirmation. We crew when we can staff that shore. Princeville and Poʻipū are both eligible asks.',
      },
      {
        q: 'How does the Hanalei bridge show up when the town is Hanalei?',
        a: 'As a written clause on the quote, with the 72-hour notice already used for far-north houses. A closure reschedules rather than forfeits. Poʻipū and Kapaʻa do not inherit that clause. The drive difference is named before you accept.',
      },
      {
        q: 'Is the drive from Līhuʻe to Poʻipū the same as the drive to Princeville?',
        a: 'It is not. Poʻipū is the shorter south-shore drive from Līhuʻe. Princeville is the north-shore ask, and far-north houses add the bridge. Travel is quoted in writing. We do not publish a new fee on this page.',
      },
      {
        q: 'Where do service and tax sit on a Kauaʻi town quote?',
        a: 'After the food, once there is a written yes: a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. The town does not fold them into the food. Gratuity is never required. Bands are on [pricing](/pricing).',
      },
      {
        q: 'Is the Kauaʻi area guide the same list?',
        a: 'The area guide is a different page. This one names the towns and the travel clause. [Areas](/areas) is the contrast: north-shore rain, a drier south shore, and west-side distance. Open the town, then request availability.',
      },
    ],
  },
  bigisland: {
    h1: 'Where we cook on the Big Island — Kona to Kohala.',
    title: 'Hawaiʻi Island towns we cook in — Kona to Kohala | myCHEF',
    description:
      'Towns we cook first: Kailua-Kona, Keauhou, Waikoloa, Kohala, and Waimea. Join the inquiry list. Hilo is a separate dedicated east-side day, its own page.',
    lede:
      'Join the inquiry list for a west-side town. Kona to Kohala comes first. Hilo has its own page because it is a separate dedicated east-side day.',
    kicker: 'Hawaiʻi Island · Locations',
    photo: 'locIndexBigisland',
    body: [
      'West side first: [Kailua-Kona](/kailua-kona), [Keauhou](/keauhou), [Kona](/kona), [Waikoloa](/waikoloa), and the [Kohala Coast](/kohala). Seven resort communities sit inside a 30-minute west-side radius. [Waimea](/waimea) is upcountry on that same side, with travel quoted in writing. [Hilo](/hilo) is not on the west-side day. It is a separate dedicated east-side day, 2.5–3 hours from Kona, with its own quote. Volcano sits with that east-side request. A 20% service charge and Hawaiʻi GET up to 4.712% are their own lines. Join the inquiry list on [the quote form](/quote). How the sides differ is on [areas](/areas). Bands are on [pricing](/pricing).',
    ],
    faqs: [
      {
        q: 'Which towns are in the west-side list?',
        a: 'Kailua-Kona, Keauhou, Kona, Waikoloa, the Kohala Coast, and Waimea. Each has a page. The resort communities along that coast share a 30-minute radius already published for this side. This page is that index, not the area essay.',
      },
      {
        q: 'Where is Hilo on the Hawaiʻi Island town list?',
        a: 'On its own page, as a separate dedicated east-side day. It is 2.5–3 hours from Kona and is never stacked onto a Waikoloa or Kohala day. Join the inquiry list for the side the house is on. Volcano travels with that east-side request.',
      },
      {
        q: 'How does Waimea travel show up on a west-side quote?',
        a: 'It is quoted in writing, on its own line, because Waimea is upcountry rather than a Kohala resort driveway. We do not invent a new fee on this page. The food line does not hide the drive. Name Waimea in the inquiry.',
      },
      {
        q: 'Can one inquiry cover Kona in the afternoon and Hilo at night?',
        a: 'It cannot. Kona to Kohala is the west-side day. Hilo is a separate dedicated east-side day with its own shop and its own total. Join the inquiry list twice if the week needs both, on two dates.',
      },
      {
        q: 'Do service and tax change between Kona and Kohala?',
        a: 'They do not. A 20% service charge and Hawaiʻi GET up to 4.712% follow the food on their own lines. A 50% deposit follows a written yes, not the act of joining the inquiry list. Gratuity is never required. Bands are on [pricing](/pricing).',
      },
      {
        q: 'How is this different from the Hawaiʻi Island area guide?',
        a: 'This page links the towns and says which side the day is. [Areas](/areas) is how the west side, Waimea, and Hilo differ for the night. Open the town page, then join the inquiry list on [the quote form](/quote).',
      },
    ],
  },
};
