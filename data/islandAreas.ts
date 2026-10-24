import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /areas indexes. Distinct from /locations (live dinner doors only)
 * and from /coverage (zone map). Titles must not use money keywords.
 */

export interface IslandAreasPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const islandAreas: Record<IslandId, IslandAreasPage> = {
  oahu: {
    h1: 'Oahu area guide — the places we cook and the rest of the island.',
    title: 'Oahu area guide — Honolulu and the rest | myCHEF',
    description:
      'How Oʻahu areas differ: towers, Kahala rooms, Ko Olina villas, windward stays. The town list is on the locations page. Request a written quote.',
    lede:
      'A chef night changes with the building. Town is a freight slot. Kahala is a dining room. Ko Olina is the house as the venue. Windward stays are measured in weeks.',
    kicker: 'Oʻahu · Areas',
    photo: 'areasIndexOahu',
    body: [
      'Honolulu and Waikīkī towers need the freight window, the stall, and the building rules. Kahala and Diamond Head are quieter residential rooms, and load-in is confirmed in writing. Ko Olina villas provision from the west side, not from a town round trip. Kailua and Lanikai are 30-day houses, often with galley kitchens. Hawaiʻi Kai is an east Honolulu household, and traffic is planned into the chef day. The North Shore is 60–90+ minutes from town, a surcharge day. The town index, with a page for each place, is [locations](/locations). Kitchen notes stay on the dining-in posts linked below. Request a written quote on [the quote form](/quote). Travel beyond those published drives is quoted in writing. A 20% service charge and Hawaiʻi GET up to 4.712% stay on their own lines.',
    ],
    faqs: [
      {
        q: 'How is a Honolulu tower night different from a Kahala house?',
        a: 'The tower waits on a freight window, a parking stall, and the building rules. A Kahala house is a dining room with a cooktop, and the crew is not riding a service elevator. Both are base zone. The town pages are on [locations](/locations).',
      },
      {
        q: 'What changes for a chef night in a Ko Olina villa?',
        a: 'The villa is the venue, provisioned from the west side rather than a town round trip. There is no freight slot unless the building has one. A cooktop is still required. Open [Ko Olina](/ko-olina) for that corridor, then request a written quote.',
      },
      {
        q: 'How do Kailua and Lanikai differ from east Honolulu?',
        a: 'Kailua and Lanikai are 30-day beach houses, and galley kitchens are common in Lanikai. Hawaiʻi Kai is a resident household in east Honolulu, with traffic planned into the day. All three are base. The month-stay rule is the windward difference.',
      },
      {
        q: 'Why is the North Shore a different kind of Oʻahu day?',
        a: 'It is 60–90+ minutes from town, already published as a surcharge day. That time is the difference, not a new fee invented here. Surf-season dates should be sent early. The town page is on [locations](/locations).',
      },
      {
        q: 'Does this area guide replace the town list?',
        a: 'It does not. [Locations](/locations) is the index, and each town keeps its page. This guide only says how a tower, an estate room, a villa, and a windward month-stay change the night. Open the town before you write.',
      },
      {
        q: 'Where do fees sit if the Oʻahu area changes?',
        a: 'A 20% service charge and Hawaiʻi GET up to 4.712% follow the food on their own lines in every area. The area can change the travel line. It does not fold those two into the dinner. Gratuity is never required. Bands are on [pricing](/pricing).',
      },
    ],
  },
  maui: {
    h1: 'Maui area guide — the places we cook, plus Upcountry.',
    title: 'Maui area guide — Wailea, West, Upcountry | myCHEF',
    description:
      'How Maui areas differ: South Maui villa weeks, West Maui Saturday traffic, and Upcountry. Towns live on the locations page. Travel is quoted in writing.',
    lede:
      'South Maui is a villa week on a resort lawn. West Maui is the same week with Saturday traffic in the plan. Upcountry is a longer drive and cooler air, quoted in writing.',
    kicker: 'Maui · Areas',
    photo: 'areasIndexMaui',
    body: [
      'Wailea, Makena, and Kīhei are the south-shore villa week: resort ranges, condo galleys, and a lawn that needs a wet-weather backup. Kāʻanapali, Lahaina, Nāpili, and Kapalua are West Maui, and a Saturday crossing is planned into arrival rather than discovered on the road. Upcountry, including Makawao and Kula, is the elevation ask. Travel for that drive is quoted in writing. We do not print a new surcharge on this page. The town index is [locations](/locations). Open [Wailea](/wailea), [Kāʻanapali](/kaanapali), [Kapalua](/kapalua), or [Upcountry](/upcountry) for the house. Quotes are open. A 20% service charge and Hawaiʻi GET up to 4.712% stay on their own lines after the food.',
    ],
    faqs: [
      {
        q: 'How does a South Maui villa week differ from West Maui?',
        a: 'South Maui is Wailea, Makena, and Kīhei: the lawn and the resort kitchen. West Maui is Kāʻanapali, Lahaina, and Kapalua, and Saturday traffic is planned into arrival. Both are base. The town pages are on [locations](/locations).',
      },
      {
        q: 'What is different about an Upcountry chef night?',
        a: 'The drive is longer and the air is cooler, and outdoor setups still need a wet-weather backup. Travel is quoted in writing. We do not invent a new fee here. The town page is [Upcountry](/upcountry). South-shore towns do not take that drive.',
      },
      {
        q: 'Does a Kīhei condo night feel like a Wailea lawn?',
        a: 'It does not. Kīhei is often a galley and an HOA quiet-hours note. Wailea is more often a resort range and a lawn. Both can be a villa week. The kitchen you have decides the pans. Open the town, then request a written quote.',
      },
      {
        q: 'Why is Lahaina named separately from Kāʻanapali?',
        a: 'It is its own town, with its own page, not a stand-in for the resort coast. Access and parking can be tighter than a resort lot. Saturday timing still applies to the west side. The index is [locations](/locations).',
      },
      {
        q: 'Is this Maui page a second town directory?',
        a: 'The directory is [locations](/locations). This page is the contrast: south-shore villa week, West Maui Saturday, Upcountry elevation. Use the town link for the house you rented, then the quote form.',
      },
      {
        q: 'Do fee lines change between Wailea and Kapalua?',
        a: 'They do not. A 20% service charge and Hawaiʻi GET up to 4.712% follow the food on their own lines. The area can change the arrival time. It does not rewrite those lines. Gratuity is never required. Bands are on [pricing](/pricing).',
      },
    ],
  },
  kauai: {
    h1: 'Kauai area guide — both shores plus west-side towns, inquiry.',
    title: 'Kauai area guide — both shores, inquiry | myCHEF',
    description:
      'How Kauaʻi areas differ: north-shore rain and the bridge, a drier south shore, west-side distance. Request availability. Towns are on the locations page.',
    lede:
      'The north shore is rain and the bridge. The south shore is drier and a shorter drive from Līhuʻe. The west side is distance. Request availability for the area the house is in.',
    kicker: 'Kauaʻi · Areas',
    photo: 'areasIndexKauai',
    body: [
      'Princeville and Hanalei need a covered lānai or a dining room written as the rain plan. A house past the Hanalei bridge also carries 72-hour notice, and a closure reschedules rather than forfeits. Poʻipū and Kōloa are the south shore: more sun, and a shorter drive from Līhuʻe than the far north. Kapaʻa and Līhuʻe sit on the east side as base. Waimea and Hanapēpē are west-side distance, and that travel is quoted in writing. We do not print a new fee here. The town index is [locations](/locations). A named area is not a confirmation. Request availability on [the quote form](/quote). A 20% service charge and Hawaiʻi GET up to 4.712% are their own lines after a written yes.',
    ],
    faqs: [
      {
        q: 'How does a north-shore chef night differ from Poʻipū?',
        a: 'Princeville and Hanalei plan for rain and, past the bridge, the written 72-hour clause. Poʻipū is drier and a shorter drive from Līhuʻe. Both shores are a request for availability, not a held date. Town pages are on [locations](/locations).',
      },
      {
        q: 'What does west-side distance change on Kauaʻi?',
        a: 'Waimea and Hanapēpē are farther from Līhuʻe than the south shore, and that travel is quoted in writing. We do not publish a new price on this page. Request availability with the town named. The index of towns is [locations](/locations).',
      },
      {
        q: 'Where do Kapaʻa and Līhuʻe sit between the two shores?',
        a: 'They are the east-side base, not a third resort coast. A Kapaʻa house is a household dinner. Līhuʻe is the staging town, not the villa inventory. Open those pages from [locations](/locations), then request availability.',
      },
      {
        q: 'Does every Kauaʻi area inherit the Hanalei bridge?',
        a: 'Only houses past the bridge. Poʻipū, Kōloa, Kapaʻa, and Līhuʻe do not. The clause is 72-hour notice, and a closure reschedules rather than forfeits. Name the area in the request so the right clause is on the quote.',
      },
      {
        q: 'Is this the Kauaʻi town directory?',
        a: 'The directory is [locations](/locations). This page is how the areas differ for the night: rain, bridge, south-shore sun, west-side distance. A named place is not a confirmation. Request availability on [the quote form](/quote).',
      },
      {
        q: 'Where do fees sit once a Kauaʻi area is accepted?',
        a: 'After a written yes: a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. The request for availability does not hold the date. Gratuity is never required. Bands are on [pricing](/pricing). Travel stays quoted in writing.',
      },
    ],
  },
  bigisland: {
    h1: 'Hawaiʻi Island area guide — west side first, then the rest.',
    title: 'Hawaiʻi Island area guide — west side first | myCHEF',
    description:
      'Hawaiʻi Island areas: Kona–Kohala first, Waimea upcountry, Hilo a separate dedicated east-side day. Join the inquiry list. Towns are on locations.',
    lede:
      'The west side is one day, from Kona to Kohala. Waimea is upcountry on that side. Hilo is a separate dedicated east-side day and is never stacked onto the west.',
    kicker: 'Hawaiʻi Island · Areas',
    photo: 'areasIndexBigisland',
    body: [
      'Kailua-Kona, Keauhou, Waikoloa, and the Kohala Coast share the west-side day. Seven resort communities sit inside a 30-minute radius. Hard sun is the terrace problem, and an indoor room should be named if you need one. Waimea is ranch country and cooler, with travel quoted in writing. Hilo and Volcano are not a third stop. They are a separate dedicated east-side day, 2.5–3 hours from Kona, with their own shop. The town index is [locations](/locations). Join the inquiry list on [the quote form](/quote) for the side the house is on. A 20% service charge and Hawaiʻi GET up to 4.712% are their own lines. Bands, including this island’s simpler table, are on [pricing](/pricing).',
    ],
    faqs: [
      {
        q: 'How does the Kona–Kohala coast differ from Waimea for a chef night?',
        a: 'The coast is the resort radius, about 30 minutes across, and the terrace is in hard sun. Waimea is cooler ranch country, and travel is quoted in writing. Both are west side. Hilo is not in either plan. Town pages are on [locations](/locations).',
      },
      {
        q: 'Why is Hilo not another stop on a west-side day?',
        a: 'It is a separate dedicated east-side day, 2.5–3 hours from Kona, with its own shop. Volcano sits with that day. It is never stacked onto Waikoloa or Kohala. Join the inquiry list for the side you need, on its own date.',
      },
      {
        q: 'What is different about a Kohala terrace versus a Kona town kitchen?',
        a: 'The terrace needs a plan for hard sun, and an indoor room if you want one named. A Kailua-Kona kitchen is the town end of the same west-side day. Ironman week compresses that town. Neither kitchen pulls Hilo into the afternoon.',
      },
      {
        q: 'Does Kaʻū or the Hāmākua coast join a Kona day?',
        a: 'They do not. South and Hāmākua are longer drives, and travel is quoted in writing. We do not invent a fee here. The west-side day stays Kona to Kohala. Name the area when you join the inquiry list.',
      },
      {
        q: 'Is this guide the same as the town list?',
        a: 'The list is [locations](/locations), with a page per town. This guide is the contrast: west-side radius, Waimea upcountry, Hilo as its own day. Open the town, then join the inquiry list on [the quote form](/quote).',
      },
      {
        q: 'Where do fee lines sit on a west-side area quote?',
        a: 'After the food: a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. A 50% deposit follows a written yes. Joining the inquiry list does not hold the date. Gratuity is never required. Bands are on [pricing](/pricing).',
      },
    ],
  },
};
