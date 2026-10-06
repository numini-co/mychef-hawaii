import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import { OCCASION_EXTRA_SLUGS, occasionExtras } from './occasionExtras';
import type { UniqueCell } from './uniqueCells';

/**
 * Occasion cells under /events/:slug — not catering clones.
 * Do not put money catering keywords in titles.
 */

export const OCCASION_SLUGS = ['birthdays', 'welcome-dinners', 'retreats', ...OCCASION_EXTRA_SLUGS] as const;
export type OccasionSlug = (typeof OCCASION_SLUGS)[number];

export interface OccasionPage extends UniqueCell {
  slug: OccasionSlug;
}

export const occasionPages: Record<IslandId, OccasionPage[]> = {
  oahu: [
    {
      slug: 'birthdays',
      name: 'Birthdays',
      h1: 'Birthday dinners in an Oahu house — not a restaurant buyout.',
      title: 'Birthday dinners in an Oahu house | myCHEF',
      description:
        'Staffed birthday tables in Kahala dining rooms and Ko Olina villas. About 10–75 guests.',
      lede:
        'The house, a simple dessert, the guest list you actually have. Not a buyout downtown.',
      photo: 'occBirthdayOahu',
      body: [
        'Kahala dining rooms and Ko Olina villas are the usual rooms. Anniversaries run the same kitchen.',
      ],
      faqs: [
        {
          q: 'Cake?',
          a: 'A dessert course we plate. A bakery cake you bring is fine. We do not print a fake bakery brand.',
        },
      ],
      related: [
        { path: '/events', label: 'All occasions' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/kahala', label: 'Kahala' },
      ],
    },
    {
      slug: 'welcome-dinners',
      name: 'Welcome dinners',
      h1: 'Oahu welcome dinners — first night of the villa week.',
      title: 'Oahu welcome dinners — first villa night | myCHEF',
      description:
        'Arrival-night grazing or family-style in Ko Olina, Kahala and Kailua.',
      lede:
        'Bags in the hall. The room still landing. Family-style fish, not a seated reception. The week itself is a different booking.',
      photo: 'occWelcomeOahu',
      body: [
        'Ko Olina short-stay weeks often start here. Kahala houses too.',
        'Legal short-stay fact: Short-stay villas.',
      ],
      faqs: [
        {
          q: 'Same day as landing?',
          a: 'Yes if we have the corridor and the headcount. We still arrive about three hours before service.',
        },
        {
          q: 'Grazing or plated?',
          a: 'Usually family-style or grazing. Plated is a dinner.',
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/short-stay', label: 'Short-stay villas' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'retreats',
      name: 'Retreats',
      h1: 'Oahu retreat cooking — full-board days in houses.',
      title: 'Oahu retreat cooking — full-board days in houses | myCHEF',
      description:
        'Full-board chef days for Oahu villa offsites. Not HCC citywides. Dietary designed in. Ko Olina and Gold Coast houses.',
      lede:
        'Breakfast through dinner in the house. Laptops away from the pass. Not a convention-centre play while citywides are closed.',
      photo: 'occRetreatOahu',
      body: [
        'HCC citywides are closed through 2027 and are not our product. A house offsite of 10–75 is. Dietary is table stakes, claimed only when true.',
      ],
      faqs: [
        {
          q: 'Can you feed a production crew?',
          a: 'Call-time breakfasts in a house, yes. A stage downtown, no.',
        },
        {
          q: 'Sony Open week?',
          a: 'Calendar awareness, not an affiliation. Ask early.',
        },
      ],
      related: [
        { path: '/conventions', label: 'Not MICE' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    ...occasionExtras.oahu,
  ],
  maui: [
    {
      slug: 'birthdays',
      name: 'Birthdays',
      h1: 'Birthday gatherings on a Maui lawn — Wailea and West Maui houses.',
      title: 'Birthday gatherings on a Maui lawn | myCHEF',
      description:
        'Staffed birthday tables in Wailea, Kīhei and West Maui. About 10–75.',
      lede:
        'Grass, identical plates, a simple dessert. Not a restaurant buyout.',
      photo: 'occBirthdayMaui',
      body: [
        'Wet-weather backup is written for lawns. Kīhei family houses and Wailea residences.',
      ],
      faqs: [
        {
          q: 'Lahaina birthday?',
          a: 'West Maui houses with kitchens.',
        },
      ],
      related: [
        { path: '/events', label: 'All occasions' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/kids-menus', label: 'Kids at the table' },
      ],
    },
    {
      slug: 'welcome-dinners',
      name: 'Welcome dinners',
      h1: 'Maui welcome dinners — first night in Wailea or West Maui.',
      title: 'Maui welcome dinners — first villa night | myCHEF',
      description:
        'Arrival-night grazing in Wailea, Kapalua and Kāʻanapali.',
      lede:
        'Travel clothes, family-style fish, the ice-breaker before the week. The reception is a different line.',
      photo: 'occWelcomeMaui',
      body: [
        'Wedding welcome nights stack on the wedding week page as their own line.',
      ],
      faqs: [
        {
          q: 'Same as the wedding welcome?',
          a: 'Same kitchen. Wedding welcome is a line on the wedding week page.',
        },
        {
          q: 'Landing at OGG and eating in Kapalua that night?',
          a: 'If we have the crew and the corridor. West Maui Saturday traffic is planned into arrival.',
        },
      ],
      related: [
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'retreats',
      name: 'Retreats',
      h1: 'Maui retreat cooking — full-board days in South and West Maui houses.',
      title: 'Maui retreat cooking — full-board days in houses | myCHEF',
      description:
        'Full-board chef days for Maui villa offsites. Not ballrooms. Dietary designed in. Wailea, Kapalua, Kīhei.',
      lede:
        'Three meals in the house. The lawn is optional. This is not a hotel conference.',
      photo: 'occRetreatMaui',
      body: [
        'South Maui and West Maui houses that actually cook.',
        'Production crews in residences are this product. Convention citywides are not.',
      ],
      faqs: [
        {
          q: 'Full-board vegan week?',
          a: 'Designed in advance. Claimed only when the kitchen can hold it.',
        },
        {
          q: 'Upcountry retreat?',
          a: 'Surcharge zone. Quoted with the menu.',
        },
      ],
      related: [
        { path: '/dietary', label: 'Dietary' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/south-maui', label: 'South Maui' },
      ],
    },
    ...occasionExtras.maui,
  ],
  kauai: [
    {
      slug: 'birthdays',
      name: 'Birthdays',
      h1: 'Birthday dinners on a Kauai estate — both shores, inquiry.',
      title: 'Birthday dinners on a Kauai estate | myCHEF',
      description:
        'Staffed birthday tables in Princeville, Hanalei and Poʻipū. About 10–75. Inquiry stage.',
      lede:
        'An estate dessert course looking into a valley, or a South Shore table. Inquiry. The road may decide the North.',
      photo: 'occBirthdayKauai',
      body: [
        'Inquiry stage.',
      ],
      faqs: [
        {
          q: 'Can I book a date now?',
          a: 'Join the inquiry list with the shore and the dates.',
        },
        {
          q: 'Kids on the terrace?',
          a: 'Weather still applies on the North.',
        },
      ],
      related: [
        { path: '/events', label: 'All occasions' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/guest-counts', label: 'Guest counts' },
      ],
    },
    {
      slug: 'welcome-dinners',
      name: 'Welcome dinners',
      h1: 'Kauai welcome dinners — first night, both shores.',
      title: 'Kauai welcome dinners — first estate night | myCHEF',
      description:
        'Arrival-night family-style in Poʻipū or Princeville. Inquiry stage.',
      lede:
        'The first evening after Līhuʻe. Family-style fish. The full wedding week is optional.',
      photo: 'occWelcomeKauai',
      body: [
        'Poʻipū pool kitchens are the usual South arrival. Princeville for the North. Far-North still inherits the bridge clause if you keep driving.',
        'Inquiry list with the shore.',
      ],
      faqs: [
        {
          q: 'Same day as the flight?',
          a: 'If the crew exists and the shore is named. Inquiry, not a fake instant confirm.',
        },
      ],
      related: [
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/poipu', label: 'Poʻipū' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    {
      slug: 'retreats',
      name: 'Retreats',
      h1: 'Kauai retreat cooking — full-board days, inquiry.',
      title: 'Kauai retreat cooking — full-board days in houses | myCHEF',
      description:
        'Full-board chef days for Kauai estate offsites. Inquiry stage. Dietary designed in. Both shores. Not a ballroom.',
      lede:
        'Breakfast through dinner in the house. The mist and the fire plan follow the shore.',
      photo: 'occRetreatKauai',
      body: [
        'Inquiry stage. Dietary is table stakes, claimed only when true.',
      ],
      faqs: [
        {
          q: 'Can you hold a silent retreat kitchen?',
          a: 'We cook. House rules are yours. Tell us the hours.',
        },
        {
          q: 'Vegan full-board?',
          a: 'Designed in advance. We will not claim it as theatre.',
        },
      ],
      related: [
        { path: '/dietary', label: 'Dietary' },
        { path: '/north-shore', label: 'North Shore' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    ...occasionExtras.kauai,
  ],
  bigisland: [
    {
      slug: 'birthdays',
      name: 'Birthdays',
      h1: 'Birthday dinners on the Kohala Coast — west side first.',
      title: 'Birthday dinners on the Kohala Coast | myCHEF',
      description:
        'Staffed birthday tables on Kona–Kohala terraces. About 10–75. Inquiry stage. East side is a different day.',
      lede:
        'Eight to forty on lava, a simple dessert, Mauna Kea faint. Not a Hilo add-on.',
      photo: 'occBirthdayBigisland',
      body: [
        'West-side radius: Kona–Kohala corridor. Inquiry stage.',
      ],
      faqs: [
        {
          q: 'Hilo birthday?',
          a: 'Quote-only with dedicated staffing.',
        },
        {
          q: 'Ironman week birthday?',
          a: 'Flag the dates. Town compresses.',
        },
      ],
      related: [
        { path: '/events', label: 'All occasions' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/guest-counts', label: 'Guest counts' },
      ],
    },
    {
      slug: 'welcome-dinners',
      name: 'Welcome dinners',
      h1: 'Hawaiʻi Island welcome dinners — first night, west side.',
      title: 'Big Island welcome dinners — first villa night | myCHEF',
      description:
        'Arrival-night family-style in Kona and Kohala villas. Inquiry stage. Not a Hilo add-on.',
      lede:
        'KOA to the villa. Family-style fish. Hard sun still in the window. East side is a different day.',
      photo: 'occWelcomeBigisland',
      body: [
        'Kona town and Kohala resort residences.',
        'Inquiry stage. Published starting prices from $210 a guest. ENTRY from $165.',
      ],
      faqs: [
        {
          q: 'Landing and eating in Waikoloa that night?',
          a: 'If we have the crew. West-side radius, not a round trip from Hilo.',
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/kona', label: 'Kona' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'retreats',
      name: 'Retreats',
      h1: 'Hawaiʻi Island retreat cooking — full-board west-side days.',
      title: 'Big Island retreat cooking — full-board villa days | myCHEF',
      description:
        'Full-board chef days for Kona–Kohala villa offsites. Inquiry stage. Dietary designed in. East side is a different day.',
      lede:
        'Breakfast fish, a small offsite table, lava heat. Not the whole island. Not a ballroom.',
      photo: 'occRetreatBigisland',
      body: [
        'West-side first.',
        'Hilo retreats are quote-only dedicated days.',
      ],
      faqs: [
        {
          q: 'Can you add a Volcano day onto a Waikoloa week?',
          a: 'As its own team day, quoted. Not as an unpaid errand.',
        },
        {
          q: 'Ironman week retreat?',
          a: 'Flag dates early.',
        },
      ],
      related: [
        { path: '/dietary', label: 'Dietary' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    ...occasionExtras.bigisland,
  ],
};

export function getOccasionPage(island: IslandId, slug: string): OccasionPage | undefined {
  return occasionPages[island].find((row) => row.slug === slug);
}
