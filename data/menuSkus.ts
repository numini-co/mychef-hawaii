import type { IslandId } from './islands';
import type { UniqueCell } from './uniqueCells';

/**
 * Catalog MENU_SLUGS — designed per table, not a fake standing carte.
 * Distinct from /menus (the process), /catering/family-style (the service format),
 * and /events/brunch (the occasion).
 */

export const MENU_SKU_SLUGS = ['three-course', 'family-style-menu', 'breakfast', 'lunch'] as const;
export type MenuSkuSlug = (typeof MENU_SKU_SLUGS)[number];

export interface MenuSkuPage extends UniqueCell {
  slug: MenuSkuSlug;
}

export const menuSkuPages: Record<IslandId, MenuSkuPage[]> = {
  oahu: [
    {
      slug: 'three-course',
      name: 'Three-course',
      h1: 'A three-course in an Oahu dining room — designed per table.',
      title: 'A three-course in an Oahu dining room | myCHEF',
      description:
        'Three-course menus in Kahala dining rooms and Ko Olina villas. Designed per table, not a standing carte.',
      lede:
        'Crudo, a sear, a close. The sample on the menus page is an example.',
      photo: 'menuThreeOahu',
      body: [
        'We will not print a fake kids’ carte; see the kids’ menus page.',
      ],
      faqs: [
        {
          q: 'Is this the sample on the menus page?',
          a: 'That is an example. Every table is still designed.',
        },
        {
          q: 'Can it be four courses?',
          a: 'Yes. We write it.',
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/catering/plated', label: 'Plated service' },
        { path: '/dietary', label: 'Dietary' },
      ],
    },
    {
      slug: 'family-style-menu',
      name: 'Family-style menu',
      h1: 'A family-style menu in Oahu houses — platters, not the service format.',
      title: 'A family-style menu in Oahu houses | myCHEF',
      description:
        'Family-style menus in Kahala and Ko Olina houses. Designed per table.',
      lede:
        'Platters down the table.',
      photo: 'menuFamilyOahu',
      body: [
        'Welcome dinners often run this menu.',
        'Kids’ plates sit beside, not after.',
      ],
      faqs: [
        {
          q: 'Same as grazing?',
          a: 'This is seated platters in a Kahala dining room.',
        },
      ],
      related: [
        { path: '/catering/family-style', label: 'Family-style service' },
        { path: '/menus', label: 'How menus are designed' },
        { path: '/kids-menus', label: 'Kids at the table' },
      ],
    },
    {
      slug: 'breakfast',
      name: 'Breakfast',
      h1: 'Breakfast in an Oahu house — morning food, not the brunch occasion.',
      title: 'Breakfast in an Oahu house | myCHEF',
      description:
        'Breakfast menus in Kahala houses and Ko Olina villas.',
      lede:
        'Eggs, fruit, last night’s fish recast.',
      photo: 'menuBreakfastOahu',
      body: [
        'We do not print a fake breakfast carte.',
      ],
      faqs: [
      ],
      related: [
        { path: '/events/brunch', label: 'Brunch occasion' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
    {
      slug: 'lunch',
      name: 'Lunch',
      h1: 'Lunch in an Oahu house — a midday menu, cooked in your kitchen.',
      title: 'Lunch in an Oahu house | myCHEF',
      description:
        'Lunch menus in Kailua houses, Kahala dining rooms and Ko Olina villas. Midday food. Designed per table.',
      lede:
        'Mokulua in the window if you are in Kailua. A shorter arc than dinner.',
      photo: 'menuLunchOahu',
      body: [
        'Dinner is this site’s home and the catering page. Stay Chef weeks include lunch when the day rate says so.',
        'Kailua: Kailua / Lanikai.',
      ],
      faqs: [
        {
          q: 'Is lunch cheaper than dinner?',
          a: 'Often a shorter arc. Still a written quote.',
        },
        {
          q: 'Hotel-room lunch?',
          a: 'If there is a stove. Most suites do not.',
        },
      ],
      related: [
        { path: '/kailua', label: 'Kailua' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
  ],
  maui: [
    {
      slug: 'three-course',
      name: 'Three-course',
      h1: 'A three-course in a Maui dining room — designed per table.',
      title: 'A three-course in a Maui dining room | myCHEF',
      description:
        'Three-course menus in Wailea and Kapalua. Designed per table, not a standing carte.',
      lede:
        'Crudo, a grill, a close. The sample on the menus page is an example.',
      photo: 'menuThreeMaui',
      body: [
        'We do not impersonate another Maui kitchen.',
      ],
      faqs: [
        {
          q: 'Is this the sample on the menus page?',
          a: 'That is an example. Every table is still designed.',
        },
        {
          q: 'Upcountry three-course?',
          a: 'Surcharge zone. Quoted with the menu.',
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/wailea', label: 'Wailea' },
        { path: '/dietary', label: 'Dietary' },
      ],
    },
    {
      slug: 'family-style-menu',
      name: 'Family-style menu',
      h1: 'A family-style menu in Maui villas — platters, not the service format.',
      title: 'A family-style menu in Maui villas | myCHEF',
      description:
        'Family-style menus in Wailea, Kīhei and West Maui. Designed per table.',
      lede:
        'Platters on the lanai.',
      photo: 'menuFamilyMaui',
      body: [
      ],
      faqs: [
        {
          q: 'Kids on the platters?',
          a: 'Beside, not after.',
        },
      ],
      related: [
        { path: '/catering/family-style', label: 'Family-style service' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
    {
      slug: 'breakfast',
      name: 'Breakfast',
      h1: 'Breakfast in a Maui villa — morning food, not the brunch occasion.',
      title: 'Breakfast in a Maui villa | myCHEF',
      description:
        'Breakfast menus in Wailea and West Maui villas.',
      lede:
        'Eggs, fruit, the pool still.',
      photo: 'menuBreakfastMaui',
      body: [
      ],
      faqs: [
        {
          q: 'Stay Chef every morning?',
          a: 'When the day rate says so.',
        },
      ],
      related: [
        { path: '/events/brunch', label: 'Brunch occasion' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/west-maui', label: 'West Maui' },
      ],
    },
    {
      slug: 'lunch',
      name: 'Lunch',
      h1: 'Lunch in a Maui house — midday in Kīhei and Wailea.',
      title: 'Lunch in a Maui house | myCHEF',
      description:
        'Lunch menus in Kīhei family houses and Wailea villas. Midday food. Designed per table.',
      lede:
        'A shorter arc than dinner. South Maui light.',
      photo: 'menuLunchMaui',
      body: [
        'Dinner is this site’s home and the catering page.',
      ],
      faqs: [
        {
          q: 'Cheaper than dinner?',
          a: 'Often a shorter arc. Still a written quote.',
        },
        {
          q: 'Beach-park lunch?',
          a: 'We cook houses. Parks are not a kitchen.',
        },
      ],
      related: [
        { path: '/kihei', label: 'Kīhei' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'three-course',
      name: 'Three-course',
      h1: 'A three-course on a Kauai estate — designed per table, inquiry.',
      title: 'A three-course on a Kauai estate | myCHEF',
      description:
        'Three-course menus in Princeville and Poʻipū. Inquiry stage. Designed per table.',
      lede:
        'Crudo, a sear, a close. Inquiry. The sample on the menus page is an example.',
      photo: 'menuThreeKauai',
      body: [
        'Inquiry list with the shore.',
        'We will not print a fake standing carte.',
      ],
      faqs: [
        {
          q: 'Can I book a three-course this month?',
          a: 'Inquiry list with the shore.',
        },
        {
          q: 'Is this the sample on the menus page?',
          a: 'That is an example. Every table is still designed — Princeville kitchen at inquiry.',
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/poipu', label: 'Poʻipū' },
        { path: '/dietary', label: 'Dietary' },
      ],
    },
    {
      slug: 'family-style-menu',
      name: 'Family-style menu',
      h1: 'A family-style menu on Kauai estates — platters, both shores.',
      title: 'A family-style menu on Kauai estates | myCHEF',
      description:
        'Family-style menus in Princeville and Poʻipū. Inquiry stage. Designed per table.',
      lede:
        'Platters down the estate table. Inquiry.',
      photo: 'menuFamilyKauai',
      body: [
      ],
      faqs: [
        {
          q: 'North Shore platters in surf season?',
          a: 'Bridge clause still applies.',
        },
      ],
      related: [
        { path: '/catering/family-style', label: 'Family-style service' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
    {
      slug: 'breakfast',
      name: 'Breakfast',
      h1: 'Breakfast on a Kauai estate — morning food, inquiry, both shores.',
      title: 'Breakfast on a Kauai estate | myCHEF',
      description:
        'Breakfast menus in Poʻipū and Princeville. Inquiry stage.',
      lede:
        'Eggs, fruit, South sun or North mist.',
      photo: 'menuBreakfastKauai',
      body: [
        'Inquiry stage.',
        'Far-North breakfast still inherits the Hanalei bridge notes.',
      ],
      faqs: [
        {
          q: 'Can I book breakfast this month?',
          a: 'Inquiry list with the shore.',
        },
      ],
      related: [
        { path: '/events/brunch', label: 'Brunch occasion' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/south-shore', label: 'South Shore' },
      ],
    },
    {
      slug: 'lunch',
      name: 'Lunch',
      h1: 'Lunch on Kauai — midday in Kapaʻa and estate kitchens, inquiry.',
      title: 'Lunch on Kauai — midday, inquiry | myCHEF',
      description:
        'Lunch menus in Kapaʻa houses and Princeville or Poʻipū estates. Inquiry stage. Midday food.',
      lede:
        'A shorter arc. East-side Kapaʻa or an estate kitchen. Inquiry.',
      photo: 'menuLunchKauai',
      body: [
        'Dinner is this site’s home and the catering page. East-side is closer to base and still a real booking.',
        'Inquiry stage.',
      ],
      faqs: [
        {
          q: 'Cheaper than dinner?',
          a: 'Often a shorter arc. Still a written quote.',
        },
      ],
      related: [
        { path: '/kapaa', label: 'Kapaʻa' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'three-course',
      name: 'Three-course',
      h1: 'A three-course on the Kohala Coast — designed per table, west side.',
      title: 'A three-course on the Kohala Coast | myCHEF',
      description:
        'Three-course menus in Kona and Kohala houses. Inquiry stage. Designed per table. East side is a different day.',
      lede:
        'Kanpachi crudo, a sear, a close. Inquiry. The sample on the menus page is an example.',
      photo: 'menuThreeBigisland',
      body: [
        'West-side: Kona–Kohala corridor.',
      ],
      faqs: [
        {
          q: 'Is this the sample on the menus page?',
          a: 'That is an example. Every table is still designed — Waikoloa kitchen. Hilo is never implied.',
        },
        {
          q: 'Hilo three-course?',
          a: 'Quote-only dedicated day.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Rate card' },
        { path: '/quote?island=bigisland', label: 'Join the inquiry list' },
        { path: '/kona', label: 'Kona' },
      ],
    },
    {
      slug: 'family-style-menu',
      name: 'Family-style menu',
      h1: 'A family-style menu on west-side Hawaiʻi Island — platters on lava.',
      title: 'A family-style menu on west-side Hawaiʻi Island | myCHEF',
      description:
        'Family-style menus in Kona and Kohala. Inquiry stage. East side is a different day.',
      lede:
        'Platters on lava. Not a Hilo add-on.',
      photo: 'menuFamilyBigisland',
      body: [
        'West-side: Kona–Kohala corridor.',
      ],
      faqs: [
        {
          q: 'Kids on lava at noon?',
          a: 'Shade is the house.',
        },
      ],
      related: [
        { path: '/catering/family-style', label: 'Family-style service' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
    {
      slug: 'breakfast',
      name: 'Breakfast',
      h1: 'Breakfast on west-side Hawaiʻi Island — morning food, not brunch.',
      title: 'Breakfast on west-side Hawaiʻi Island | myCHEF',
      description:
        'Breakfast menus in Kona and Kohala villas. Inquiry stage. East side is a different day.',
      lede:
        'Eggs, fruit, breakfast fish, hard sun. Coffee cherries on a side board if the house has them — origin labeled when the law requires it.',
      photo: 'menuBreakfastBigisland',
      body: [
      ],
      faqs: [
        {
          q: 'Same as west-side brunch?',
          a: 'Hilo is never implied.',
        },
        {
          q: 'Kona coffee tasting with breakfast?',
          a: 'Coffee may be on the crust.',
        },
      ],
      related: [
        { path: '/events/brunch', label: 'Brunch occasion' },
        { path: '/coffee-act-198', label: 'Coffee origin' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    {
      slug: 'lunch',
      name: 'Lunch',
      h1: 'Lunch in a Waikoloa house — midday, west side, inquiry.',
      title: 'Lunch in a Waikoloa house | myCHEF',
      description:
        'Lunch menus in Waikoloa and Kona houses. Inquiry stage. Midday food. East side is a different day.',
      lede:
        'A shorter arc than dinner. Hard sun. Not a Hilo add-on.',
      photo: 'menuLunchBigisland',
      body: [
        'Dinner is this site’s home and the catering page.',
      ],
      faqs: [
        {
          q: 'Cheaper than dinner?',
          a: 'Often a shorter arc. Still a written quote. Hilo is never implied.',
        },
        {
          q: 'Volcano picnic lunch from Waikoloa?',
          a: 'Not a west-side errand. East side is dedicated staffing.',
        },
      ],
      related: [
        { path: '/waikoloa', label: 'Waikoloa' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
  ],
};

export function getMenuSkuPage(island: IslandId, slug: string): MenuSkuPage | undefined {
  return menuSkuPages[island].find((row) => row.slug === slug);
}
