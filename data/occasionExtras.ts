import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * Remaining catalog EVENT_SLUGS except weddings (already a money door).
 * Titles must not use catering or private-chef money keywords.
 */

export const OCCASION_EXTRA_SLUGS = ['anniversaries', 'corporate-events', 'villa-parties', 'brunch'] as const;
export type OccasionExtraSlug = (typeof OCCASION_EXTRA_SLUGS)[number];

export interface OccasionExtra extends UniqueCell {
  slug: OccasionExtraSlug;
}

export const occasionExtras: Record<IslandId, OccasionExtra[]> = {
  oahu: [
    {
      slug: 'anniversaries',
      name: 'Anniversaries',
      h1: 'Anniversary dinners in a Kahala dining room — two seats or a small table.',
      title: 'Anniversary dinners in a Kahala dining room | myCHEF',
      description:
        'Anniversary tables in Kahala dining rooms and Ko Olina villas. Two seats or a small list. Not a restaurant buyout.',
      lede:
        'Two plates, brass, Diamond Head faint. Or a small family table. This one is the year-mark.',
      photo: 'occAnniversaryOahu',
      body: [
      ],
      faqs: [
        {
          q: 'Just two of us?',
          a: 'Yes. Date night is a published band.',
        },
        {
          q: 'Cake?',
          a: 'A dessert course we plate, or a bakery cake you bring. We do not print a fake bakery brand.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/events/birthdays', label: 'Birthdays' },
        { path: '/kahala', label: 'Kahala' },
      ],
    },
    {
      slug: 'corporate-events',
      name: 'Corporate events',
      h1: 'Oahu house offsites — not HCC citywides.',
      title: 'Oahu house offsites — not HCC citywides | myCHEF',
      description:
        'House offsites in Kahala and Ko Olina. HCC citywides are closed through 2027.',
      lede:
        'Laptops away from the pass. Breakfast in the house. Not the convention centre. The food line is on the corporate catering page.',
      photo: 'occCorporateOahu',
      body: [
        'The kitchen line for executive dinners is on the corporate catering page.',
        'Production crews in residences are this product. A stage downtown is not.',
      ],
      faqs: [
        {
          q: 'Sony Open week?',
          a: 'Calendar awareness, not an affiliation. Ask early.',
        },
      ],
      related: [
        { path: '/conventions', label: 'Not MICE' },
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/events/retreats', label: 'Retreats' },
      ],
    },
    {
      slug: 'villa-parties',
      name: 'Villa parties',
      h1: 'Villa parties in Ko Olina and Kahala — the house is the venue.',
      title: 'Villa parties in Ko Olina and Kahala | myCHEF',
      description:
        'Staffed villa parties in Ko Olina short-stay houses and Kahala dining rooms. About 10–75. Not a restaurant buyout.',
      lede:
        'The house, family-style fish, the guest list you actually have. Legal short-stay fact is on the Short-stay villas page.',
      photo: 'occVillaOahu',
      body: [
        'Ko Olina legal short-stay: Short-stay villas. Gold Coast dining rooms: Gold Coast.',
      ],
      faqs: [
        {
          q: 'Can you do a hundred on a Gold Coast lawn?',
          a: 'Not as a promise. Larger than about seventy-five is quoted.',
        },
        {
          q: 'Hotel suite party?',
          a: 'If there is a stove. Most suites do not. Residences and villas are the product.',
        },
      ],
      related: [
        { path: '/short-stay', label: 'Short-stay villas' },
        { path: '/gold-coast', label: 'Gold Coast' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'brunch',
      name: 'Brunch',
      h1: 'Brunch in an Oahu house — recovery morning, not a restaurant.',
      title: 'Brunch in an Oahu house | myCHEF',
      description:
        'Recovery brunch in Kahala houses and Ko Olina villas. Morning after the villa week or the wedding night. Not a restaurant brunch.',
      lede:
        'Fruit, eggs, last night’s fish recast. The house still waking.',
      photo: 'occBrunchOahu',
      body: [
        'Wedding recovery brunch stacks on the weddings page as its own line.',
      ],
      faqs: [
        {
          q: 'Same as the wedding brunch?',
          a: 'Same kitchen. Wedding brunch is a line on the weddings page.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Weddings' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/events', label: 'All occasions' },
      ],
    },
  ],
  maui: [
    {
      slug: 'anniversaries',
      name: 'Anniversaries',
      h1: 'Anniversary nights on a Wailea lanai — two plates, not a buyout.',
      title: 'Anniversary nights on a Wailea lanai | myCHEF',
      description:
        'Anniversary tables in Wailea, Kapalua and Kīhei. Two seats or a small list. Not a restaurant buyout.',
      lede:
        'Blue hour, two plated fish, Molokini faint. Or a small family table on the lawn.',
      photo: 'occAnniversaryMaui',
      body: [
        `Wet-weather backup is written for lawns.`,
      ],
      faqs: [
        {
          q: 'Kapalua instead of Wailea?',
          a: 'Yes. Northwest bay houses.',
        },
        {
          q: 'Just two of us?',
          a: 'Yes.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/wailea', label: 'Wailea' },
        { path: '/events/birthdays', label: 'Birthdays' },
      ],
    },
    {
      slug: 'corporate-events',
      name: 'Corporate events',
      h1: 'Maui villa offsites — South and West houses, not a ballroom.',
      title: 'Maui villa offsites in South and West houses | myCHEF',
      description:
        'Villa offsites in Wailea, Kapalua and Kīhei. Not hotel ballrooms.',
      lede:
        'A small offsite table, the lawn optional. We cook houses. We do not staff banquet rooms.',
      photo: 'occCorporateMaui',
      body: [
        'Production crews in residences are this product. Convention citywides are not.',
      ],
      faqs: [
        {
          q: 'Hotel conference?',
          a: 'No. Residences and villas.',
        },
      ],
      related: [
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/events/retreats', label: 'Retreats' },
      ],
    },
    {
      slug: 'villa-parties',
      name: 'Villa parties',
      h1: 'Villa parties in Wailea and West Maui — lawn or dining room.',
      title: 'Villa parties in Wailea and West Maui | myCHEF',
      description:
        'Staffed villa parties in Wailea, Kīhei, Kāʻanapali and Kapalua. About 10–75. Wet-weather backup written for lawns.',
      lede:
        'Grass, identical plates, the guest list you actually have. Saturday West Maui traffic is planned into arrival, not discovered on the invoice.',
      photo: 'occVillaMaui',
      body: [
      ],
      faqs: [
        {
          q: 'Rain on a Wailea lawn?',
          a: 'Backup is written. We do not pretend the weather is a surprise.',
        },
      ],
      related: [
        { path: '/south-maui', label: 'South Maui' },
        { path: '/west-maui', label: 'West Maui' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'brunch',
      name: 'Brunch',
      h1: 'Maui recovery brunch — the morning after the villa week.',
      title: 'Maui recovery brunch in the villa | myCHEF',
      description:
        'Recovery brunch in Wailea and West Maui villas. Morning after the week or the wedding night.',
      lede:
        'Coffee, fruit, grilled fish, the pool still.',
      photo: 'occBrunchMaui',
      body: [
        'Wedding-week brunch is a separate line on the wedding week page.',
      ],
      faqs: [
        {
          q: 'Same as wedding brunch?',
          a: 'Same kitchen.',
        },
      ],
      related: [
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/events', label: 'All occasions' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'anniversaries',
      name: 'Anniversaries',
      h1: 'Anniversary dinners on a Kauai estate — inquiry, both shores.',
      title: 'Anniversary dinners on a Kauai estate | myCHEF',
      description:
        'Anniversary tables in Princeville, Hanalei and Poʻipū. Inquiry stage. Two seats or a small list.',
      lede:
        'Two seats on wet North Shore stone, or a South Shore table. Inquiry. The road may decide the North.',
      photo: 'occAnniversaryKauai',
      body: [
        'Inquiry list with the shore.',
      ],
      faqs: [
        {
          q: 'Can I book a date now?',
          a: 'Join the inquiry with the shore and the dates.',
        },
        {
          q: 'Just two of us in Hanalei?',
          a: 'Yes if the crew exists. Bridge clause still applies.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/events/birthdays', label: 'Birthdays' },
      ],
    },
    {
      slug: 'corporate-events',
      name: 'Corporate events',
      h1: 'Kauai estate offsites — inquiry, not a convention play.',
      title: 'Kauai estate offsites — inquiry, not a convention | myCHEF',
      description:
        'Estate offsites in Princeville and Poʻipū. Inquiry stage. Not a MICE island.',
      lede:
        'A small estate table. Both shores. Inquiry. We do not pretend Kauaʻi is a convention product.',
      photo: 'occCorporateKauai',
      body: [
        'Inquiry stage. Published starting prices for dinners still apply when we cook.',
      ],
      faqs: [
        {
          q: 'Līhuʻe conference?',
          a: 'No. Estates and villas. Not a convention product.',
        },
      ],
      related: [
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/north-shore', label: 'North Shore' },
        { path: '/events/retreats', label: 'Retreats' },
      ],
    },
    {
      slug: 'villa-parties',
      name: 'Villa parties',
      h1: 'Estate parties on Kauai — Princeville and Poipu houses, inquiry.',
      title: 'Estate parties on Kauai — both shores, inquiry | myCHEF',
      description:
        'Staffed estate parties in Princeville, Hanalei and Poʻipū. About 10–75. Inquiry stage. Far-North inherits the bridge clause.',
      lede:
        'An estate dessert course looking into a valley, or a South Shore table. Inquiry. The road may decide the North.',
      photo: 'occVillaKauai',
      body: [
        'Inquiry stage.',
      ],
      faqs: [
        {
          q: 'Can I book a date now?',
          a: 'Join the inquiry with the shore and the dates.',
        },
        {
          q: 'Kids on the terrace?',
          a: 'Weather still applies on the North.',
        },
      ],
      related: [
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/south-shore', label: 'South Shore' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'brunch',
      name: 'Brunch',
      h1: 'Kauai estate brunch — both shores, inquiry.',
      title: 'Kauai estate brunch — both shores, inquiry | myCHEF',
      description:
        'Estate brunch in Poʻipū and Princeville. Inquiry stage. Not a restaurant brunch.',
      lede:
        'Pool morning on the South, or misted North coffee. Inquiry.',
      photo: 'occBrunchKauai',
      body: [
        'Wedding-week brunch is on the wedding week page.',
        'Far-North brunch still inherits the Hanalei bridge notes. Inquiry list with the shore.',
      ],
      faqs: [
        {
          q: 'Same as wedding brunch?',
          a: 'Same kitchen. Wedding brunch is a line on the wedding week page.',
        },
      ],
      related: [
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/poipu', label: 'Poʻipū' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'anniversaries',
      name: 'Anniversaries',
      h1: 'Anniversary dinners on a Kohala lava terrace — west side first.',
      title: 'Anniversary dinners on a Kohala lava terrace | myCHEF',
      description:
        'Anniversary tables on Kona–Kohala terraces. Inquiry stage. Two seats or a small list. East side is a different day.',
      lede:
        'Two plates on lava, Mauna Kea faint. Not a Hilo add-on.',
      photo: 'occAnniversaryBigisland',
      body: [
        'West-side: Kona–Kohala corridor.',
      ],
      faqs: [
        {
          q: 'Hilo anniversary?',
          a: 'Quote-only dedicated staffing.',
        },
        {
          q: 'Just two of us in Waikoloa?',
          a: 'Yes. Inquiry stage.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/events/birthdays', label: 'Birthdays' },
      ],
    },
    {
      slug: 'corporate-events',
      name: 'Corporate events',
      h1: 'West-side villa offsites on Hawaiʻi Island — not a Hilo add-on.',
      title: 'West-side villa offsites on Hawaiʻi Island | myCHEF',
      description:
        'Villa offsites in Kona and Kohala. Inquiry stage. East side is a different day.',
      lede:
        'A small west-side table, hard sun. Not the whole island. Ironman weeks compress town.',
      photo: 'occCorporateBigisland',
      body: [
        'Inquiry stage. We will not pretend a Waikoloa offsite covers Hilo.',
      ],
      faqs: [
        {
          q: 'Can you add Volcano onto a Waikoloa week?',
          a: 'As its own dedicated team day, quoted. Not as an unpaid errand.',
        },
      ],
      related: [
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/ironman-weeks', label: 'Ironman weeks' },
        { path: '/kohala-corridor', label: 'West-side radius' },
      ],
    },
    {
      slug: 'villa-parties',
      name: 'Villa parties',
      h1: 'Villa parties on the Kohala Coast — lava terrace, west side.',
      title: 'Villa parties on the Kohala Coast | myCHEF',
      description:
        'Staffed villa parties on Kona–Kohala terraces. About 10–75. Inquiry stage. East side is a different day.',
      lede:
        'Eight to forty on lava, plated kanpachi, Mauna Kea faint. Not a Hilo add-on. Hard sun is real.',
      photo: 'occVillaBigisland',
      body: [
        'West-side radius: Kona–Kohala corridor.',
      ],
      faqs: [
        {
          q: 'Hilo party?',
          a: 'Quote-only with dedicated staffing.',
        },
        {
          q: 'Kids on a lava terrace at noon?',
          a: 'Shade and timing are the house. We cook the kitchen you have.',
        },
      ],
      related: [
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/waikoloa', label: 'Waikoloa' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'brunch',
      name: 'Brunch',
      h1: 'West-side brunch on Hawaiʻi Island — Kona and Kohala mornings.',
      title: 'West-side brunch on Hawaiʻi Island | myCHEF',
      description:
        'West-side brunch in Kona and Kohala villas. Inquiry stage. East side is a different day.',
      lede:
        'Breakfast fish, fruit, hard sun. Coffee cherries on a side board if the house has them — origin labeled when the law requires it.',
      photo: 'occBrunchBigisland',
      body: [
        'East-side brunch is quote-only dedicated staffing.',
      ],
      faqs: [
        {
          q: 'Same as wedding brunch?',
          a: 'Same kitchen. Wedding brunch is a line on the weddings page.',
        },
        {
          q: 'Kona coffee tasting with brunch?',
          a: 'Coffee may be on the crust.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Weddings' },
        { path: '/coffee-act-198', label: 'Coffee origin' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
  ],
};
