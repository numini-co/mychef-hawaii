import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';
import { hubNestedDirectories, HUB_NESTED_PATHS } from './hubNestedDirectories';
import { hubEditorialDirectories, HUB_EDITORIAL_PATHS } from './hubEditorialDirectories';

/**
 * Hub-only pickers for support paths that already live on every island host.
 * Titles must not use money keywords and must not steal island-host titles.
 */

export const HUB_DIRECTORY_PATHS = [
  '/faq',
  '/coverage',
  '/contact',
  '/locations',
  '/menus',
  '/help',
  '/fine-dining',
  '/staffing',
  '/events',
  '/what-we-dont-do',
  '/guest-counts',
  '/dietary',
  '/honeymoon-dinners',
  '/chefs-table',
  '/kids-menus',
  '/personal-chef',
  '/private-chef-cost',
  '/meal-prep',
  '/cooking-classes',
  '/omakase-at-home',
  '/rehearsal-dinners',
  '/retreat-catering',
  '/corporate-catering',
] as const;

export type HubDirectoryId =
  | 'faq'
  | 'coverage'
  | 'contact'
  | 'locations'
  | 'menus'
  | 'help'
  | 'fineDining'
  | 'staffing'
  | 'events'
  | 'whatWeDontDo'
  | 'guestCounts'
  | 'dietary'
  | 'honeymoonDinners'
  | 'chefsTable'
  | 'kidsMenus'
  | 'personalChef'
  | 'privateChefCost'
  | 'mealPrep'
  | 'cookingClasses'
  | 'omakaseAtHome'
  | 'rehearsalDinners'
  | 'retreatCatering'
  | 'corporateCatering';

export interface HubDirectory {
  path: string;
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  cardLabel: string;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const hubDirectories: Record<HubDirectoryId, HubDirectory> = {
  faq: {
    path: '/faq',
    h1: 'Questions, by island.',
    title: 'Questions, by island | myCHEF Hawaii',
    description: 'This page does not rank for private chef Maui or Oahu catering. Open the island that holds the house.',
    lede:
      'This page does not rank for private chef Maui or Oahu catering. Open the island that holds the house.',
    kicker: 'Statewide · FAQ',
    photo: 'hubFaq',
    cardLabel: 'Questions',
    body: [
      'Each island FAQ names kitchens, corridors, and what we will not claim. Kauaʻi and Hawaiʻi Island stay inquiry. The answers are not copied statewide.',
    ],
    faqs: [
      {
        q: 'Is this the Oahu FAQ?',
        a: 'No. Oahu questions live on oahu.mychef-hawaii.com/faq.',
      },
      {
        q: 'Are groceries included?',
        a: 'Two models, never blended. On a Signature or per-guest dinner, food and grocery procurement sit inside the published per-guest band — there is no separate “+ groceries” line. On a Stay Chef, multi-day or weekly-cook booking, it is the chef fee plus groceries at cost, with original merchant receipts and zero markup. The line-by-line card is on the pricing page; how each fee prints is on the private chef cost page.',
      },
      {
        q: 'Are your Hawaiʻi reviews real?',
        a: 'We do not have Hawaiʻi guest reviews yet, and we will not invent them. They publish only after verified events — never bought, never written in-house. What we can prove today is published starting prices, sample menus, cleanup, and a written quote. The full posture is on the trust page and our journal note on No fake reviews.',
      },
      {
        q: 'What is the difference between this hub and the island sites?',
        a: 'Each island is its own host — oahu., maui., kauai. and bigisland.mychef-hawaii.com — with its own chefs, zones and pricing. Oʻahu and Maui take quotes; Kauaʻi and Hawaiʻi Island are by inquiry only. Open the island host for the house that will actually be cooked in.',
      },
    ],
  },
  coverage: {
    path: '/coverage',
    h1: 'Coverage maps, by island.',
    title: 'Coverage maps, by island | myCHEF Hawaii',
    description: 'Where myCHEF Hawaii cooks on each island: base zones, published travel surcharges and the areas we quote case by case.',
    lede: 'Where myCHEF Hawaii cooks on each island: base zones, published travel surcharges and the areas we quote case by case.',
    kicker: 'Statewide · Coverage',
    photo: 'hubCoverage',
    cardLabel: 'Coverage map',
    body: [
      'Oahu names the North Shore surcharge. Maui names Upcountry. Kauaʻi names both shores and the bridge. Hawaiʻi Island is west side first — Hilo is a different day.',
    ],
    faqs: [
    ],
  },
  contact: {
    path: '/contact',
    h1: 'How to reach a desk, by island.',
    title: 'How to reach a desk, by island | myCHEF Hawaii',
    description:
      'Quote form, WhatsApp, (808) 468-7748, and quotes@mychef-hawaii.com — Hawaii Standard Time. Open the island desk that holds the house. Not a walk-in office.',
    lede:
      'Quotes and inquiry replies run in Hawaii Standard Time. Use the island the quote form form, WhatsApp, quotes@mychef-hawaii.com, or (808) 468-7748. This page does not take the booking — open the desk that holds the house. WhatsApp is on this hub desk, not only on an island the contact page page.',
    kicker: 'Statewide · Contact',
    photo: 'hubContact',
    cardLabel: 'The desk',
    body: [
      'Oʻahu and Maui take quotes. Kauaʻi and Hawaiʻi Island are inquiry. Reach us in that order: the quote form, WhatsApp (https://wa.me/18084687748), quotes@mychef-hawaii.com, or (808) 468-7748. All four channels are on this page and on each island the contact page — WhatsApp is not island-only. There is no street office and no walk-in.',
    ],
    faqs: [
      {
        q: 'Can I quote from this page?',
        a: 'Yes — use the quote form, call (808) 468-7748, write quotes@mychef-hawaii.com, or WhatsApp https://wa.me/18084687748. Kauaʻi and Hawaiʻi Island selections are inquiry, not instant book. Island desks also take the same five-field form. This page does not take a deposit.',
      },
      {
        q: 'Is this the honesty register?',
        a: 'No. Reviews and what we will not claim live on each island the trust page. This is reachability.',
      },
    ],
  },
  locations: {
    path: '/locations',
    h1: 'Private chef towns, by island.',
    title: 'Private chef towns, by island | myCHEF Hawaii',
    description: 'The towns and neighborhoods where myCHEF Hawaii private chefs cook on Oʻahu, Maui, Kauaʻi and the Big Island, with travel notes.',
    lede: 'The towns and neighborhoods where myCHEF Hawaii private chefs cook on Oʻahu, Maui, Kauaʻi and the Big Island, with travel notes.',
    kicker: 'Statewide · Locations',
    photo: 'hubLocations',
    cardLabel: 'Private chef by town',
    body: [
      ` This directory does not flatten them.`,
      'Oahu: Honolulu to Ko Olina. Maui: Wailea to Kapalua. Kauaʻi: both shores. Hawaiʻi Island: Kona to Kohala, west side first.',
    ],
    faqs: [
      {
        q: 'Why not one Honolulu page on the hub?',
        a: 'The live URL is oahu.mychef-hawaii.com/honolulu.',
      },
    ],
  },
  menus: {
    path: '/menus',
    h1: 'How menus are designed, by island.',
    title: 'How menus are designed, by island | myCHEF Hawaii',
    description:
      'Oʻahu, Maui, Kauaʻi and Hawaiʻi Island menus — designed per table, not a standing carte. Published USD prices in writing.',
    lede:
      'Plated sample courses live on each island’s menus page, with published starting prices.',
    kicker: 'Statewide · Menus',
    photo: 'hubMenus',
    cardLabel: 'Menu design',
    body: [
      'Open the island host for the kitchen you booked.',
      'Plated samples: oahu.mychef-hawaii.com/menus, maui.mychef-hawaii.com/menus, kauai.mychef-hawaii.com/menus, bigisland.mychef-hawaii.com/menus.',
    ],
    faqs: [
      {
        q: 'How is this page different from each island’s menus?',
        a: 'This page explains how a menu is designed. Sample courses are on each island’s menus page: [Oahu menus](oahu:/menus), [Maui menus](maui:/menus), [Kauai menus](kauai:/menus) and [Big Island menus](bigisland:/menus). Open the island where you are staying.',
      },
      {
        q: 'Is this the same as the menu guide or the family-style menu?',
        a: 'No. The menu guide is a help article on each island site, and the family-style menu is a page for that one format. This page covers the design process and points you to the island menus.',
      },
      {
        q: 'Is there a standing statewide carte here?',
        a: 'No. Menus are designed per table. Samples on each island’s menus page show how a night can look. The written quote locks the courses for that house. We do not run one fixed statewide menu for every island.',
      },
      {
        q: 'How do prices attach to a menu draft?',
        a: 'Through each island’s rate card. A Signature draft keeps the shop inside that island’s published band; a Stay Chef draft bills the shop at cost with receipts. The quote then adds 20% service and Hawaiʻi GET up to 4.712%, a 50% deposit once we can staff, and no required gratuity. Big Island example: ENTRY from $165, Signature $210–$325, Stay Chef from $1,450. Line-by-line: [the pricing page](/pricing).',
      },
      {
        q: 'Is catering designed on this page too?',
        a: 'No. Catering is a staffed format, not menu design. Staffed events have their own pages on each island — for example [Oahu catering](oahu:/catering) or [Maui catering](maui:/catering).',
      },
      {
        q: 'When can I ask for a menu draft?',
        a: 'Oʻahu and Maui take quotes now: send dates and headcount on that island’s quote form and a draft follows the written total. Kauaʻi and Hawaiʻi Island start as an inquiry — a published band is not instant booking, and a menu draft waits until a crew can hold the week.',
      },
      {
        q: 'Do menus come with guest stars or review snippets?',
        a: 'No. Sample courses are plates, not testimonials. We do not attach star ratings or made-up guest quotes to a menu draft. What we can show is the sample and the written quote that follows it — see [how we handle reviews](/trust).',
      },
      {
        q: 'Where do I see actual plates and send my dates?',
        a: 'Open the island menus page that matches the kitchen — Oʻahu, Maui, Kauaʻi or Hawaiʻi Island — then send dates, shore and headcount on [the quote form](/quote). The desk is quotes@mychef-hawaii.com and +1 808 468 7748 (https://wa.me/18084687748). Message WhatsApp when the table is ready to price.',
      },
    ],
  },
  help: {
    path: '/help',
    h1: 'Help desks, by island.',
    title: 'Help desks, by island | myCHEF Hawaii',
    description: 'Planning guides for booking a private chef or catering with myCHEF Hawaii: getting started, menus, weddings, offsites and managing a booking.',
    lede:
      'Planning guides for your first booking, on every island.',
    kicker: 'Statewide · Help',
    photo: 'hubHelp',
    cardLabel: 'Help desk',
    body: [
      'Getting started, the menu guide, the wedding guide, the corporate guide and managing a booking — written for each island. Kauaʻi and Hawaiʻi Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Can I start a booking here?',
        a: 'Open the island help desk, then that island’s quote form. This page does not take the form.',
      },
    ],
  },
  fineDining: {
    path: '/fine-dining',
    h1: 'In-villa formats, by island.',
    title: 'In-villa formats, by island | myCHEF Hawaii',
    description:
      'Each island lists in-villa formats — not a Michelin claim.',
    lede:
      'We do not claim a star.',
    kicker: 'Statewide · Fine dining',
    photo: 'hubFine',
    cardLabel: 'In-villa formats',
    body: [
      'Romantic dinner, tasting menu, chef’s-table evening, and celebration dinner live under each island the Fine page-dining/:course. Open the island list first.',
    ],
    faqs: [
      {
        q: 'Is this a Michelin page?',
        a: 'No. We do not claim a star. Island the fine dining page pages say that in the title.',
      },
    ],
  },
  staffing: {
    path: '/staffing',
    h1: 'Staffing add-ons, by island.',
    title: 'Staffing add-ons, by island | myCHEF Hawaii',
    description:
      'Each island lists hourly add-ons: servers, bartenders, quoted butlers.',
    lede:
      'Each island the staffing page is the list of hourly lines.',
    kicker: 'Statewide · Staffing',
    photo: 'hubStaff',
    cardLabel: 'Staffing add-ons',
    body: [
      'Servers, bartenders and quoted butlers, priced for each island. Kauaʻi and Hawaiʻi Island print those lines at inquiry.',
    ],
    faqs: [
    ],
  },
  events: {
    path: '/events',
    h1: 'Villa occasions, by island.',
    title: 'Villa occasions, by island | myCHEF Hawaii',
    description: 'Villa occasions across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'Wedding-week formats stay on the weddings page.',
    kicker: 'Statewide · Events',
    photo: 'hubEvents',
    cardLabel: 'Occasions',
    body: [
      'Birthdays, welcome dinners, retreats and brunch — each island writes its own. Choose your island first.',
    ],
    faqs: [
    ],
  },
  whatWeDontDo: {
    path: '/what-we-dont-do',
    h1: 'What we will not claim, by island.',
    title: 'What we will not claim, by island | myCHEF Hawaii',
    description:
      'Each island publishes its own claim list.',
    lede:
      'No invented reviews, no fake licenses, no “now serving” language ahead of a staffed kitchen. Each island writes that in its own words.',
    kicker: 'Statewide · Honesty',
    photo: 'hubHonesty',
    cardLabel: 'Claim list',
    body: [
      'Reviews publish after verified events.',
    ],
    faqs: [
      {
        q: 'Do you have statewide reviews here?',
        a: 'No. We do not invent them. Open the island page.',
      },
    ],
  },
  guestCounts: {
    path: '/guest-counts',
    h1: 'Guest counts we staff, by island.',
    title: 'Guest counts we staff, by island | myCHEF Hawaii',
    description:
      'Each island publishes dinners 2–15 and receptions about 10–75.',
    lede:
      'A dinner for two is a chef and the shopping. A seated twelve is a different crew.',
    kicker: 'Statewide · Guest counts',
    photo: 'hubCounts',
    cardLabel: 'Headcount',
    body: [
    ],
    faqs: [
      {
        q: 'Can the hub promise 200 guests?',
        a: 'No. Open the island page. Larger formats are quoted, not promised.',
      },
      {
        q: 'Is two too small?',
        a: 'No. Dinner for two lives on each island the honeymoon dinners page.',
      },
    ],
  },
  dietary: {
    path: '/dietary',
    h1: 'Dietary design, by island.',
    title: 'Dietary design, by island | myCHEF Hawaii',
    description:
      'Each island designs vegan, gluten-free, and allergy plates in advance.',
    lede:
      'Dietary is designed in, not theatre. Each island writes how that works in that kitchen.',
    kicker: 'Statewide · Dietary',
    photo: 'hubDietary',
    cardLabel: 'Dietary',
    body: [
      'Tell the island desk the restriction with the dates. The draft carries it. We do not invent a second menu brand statewide.',
    ],
    faqs: [
      {
        q: 'Is this a vegan restaurant page?',
        a: 'No. We cook in the house. Related pages.',
      },
    ],
  },
  honeymoonDinners: {
    path: '/honeymoon-dinners',
    h1: 'Dinner for two, by island.',
    title: 'Dinner for two, by island | myCHEF Hawaii',
    description: 'Two seats, one kitchen. Not a full wedding week. Each island writes the room.',
    lede:
      'Two seats, one kitchen. Not a full wedding week. Each island writes the room.',
    kicker: 'Statewide · Dinner for two',
    photo: 'hubHoneymoon',
    cardLabel: 'Two seats',
    body: [
    ],
    faqs: [
    ],
  },
  chefsTable: {
    path: '/chefs-table',
    h1: 'Chef’s table nights, by island.',
    title: 'Chef’s table nights, by island | myCHEF Hawaii',
    description: 'Not a resort communal table. The pass is in the house.',
    lede:
      'Not a resort communal table. The pass is in the house.',
    kicker: 'Statewide · Chef’s table',
    photo: 'hubChefsTable',
    cardLabel: 'Chef’s table',
    body: [
    ],
    faqs: [
      {
        q: 'Is this a restaurant chef’s table?',
        a: 'No. The table is in the villa. Open the island SKU.',
      },
      {
        q: 'Same as omakase at home?',
        a: 'Omakase is a tasting arc with launch gates.',
      },
    ],
  },
  kidsMenus: {
    path: '/kids-menus',
    h1: 'Kids at the table, by island.',
    title: 'Kids at the table, by island | myCHEF Hawaii',
    description:
      'Each island plans children’s plates with the adults’ menu.',
    lede:
      'Children’s plates are planned with the adults, not an afterthought. Each island writes how.',
    kicker: 'Statewide · Kids',
    photo: 'hubKids',
    cardLabel: 'Kids’ plates',
    body: [
    ],
    faqs: [
      {
        q: 'Do you have a statewide kids’ carte?',
        a: 'No.',
      },
      {
        q: 'Same as guest counts?',
        a: 'Guest counts is headcount.',
      },
    ],
  },
  personalChef: {
    path: '/personal-chef',
    h1: 'Household chef line, by island.',
    title: 'Household chef line, by island | myCHEF Hawaii',
    description:
      'Each island keeps a resident household line.',
    lede:
      'Weekly household cooking is not a tourist one-off. Each island writes that line.',
    kicker: 'Statewide · Household line',
    photo: 'hubPersonal',
    cardLabel: 'Household line',
    body: [
      `Private chef doors stay on island homes.`,
      'Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
    ],
  },
  privateChefCost: {
    path: '/private-chef-cost',
    h1: 'Fee stack explainers, by island.',
    title: 'Fee stack explainers, by island | myCHEF Hawaii',
    description:
      'Each island explains service, GET, and travel.',
    lede:
      'Titles never use “private chef {island}”.',
    kicker: 'Statewide · Fee stack',
    photo: 'hubFeeStack',
    cardLabel: 'Fee stack',
    body: [
      `It does not live on this hub title.`,
      'Service 20% and GET are their own lines. Travel prints when it applies. The written quote is the confirmed total.',
      'Two grocery models, never blended. A Signature dinner keeps the shop inside that island band. A Stay Chef day bills groceries at cost with merchant receipts. Oʻahu and Maui take written quotes. Kauaʻi and Hawaiʻi Island stay inquiry.',
      'Each island’s pricing page remains the card.',
    ],
    faqs: [
      {
        q: 'Can Signature groceries and Stay Chef groceries share one line?',
        a: 'No. A Signature or per-guest dinner keeps the shop inside that island published band, with no separate grocery invoice. A Stay Chef day is the chef fee plus groceries at cost, merchant receipts, zero markup. Oʻahu Stay Chef from $1,250. Maui from $1,550. Kauaʻi from $1,650. Hawaiʻi Island from $1,450. The two models never blend.',
      },
      {
        q: 'Where do 20% service, GET, the deposit, and tip print?',
        a: 'After the food, as separate lines: 20% service and Hawaiʻi GET up to 4.712%. A 50% deposit locks a date the island can staff. Gratuity is never required and never hidden inside the band. Travel is its own line when the address sits outside the base zone. It is not folded into the dinner price.',
      },
      {
        q: 'Why does this hub H1 avoid an island dinner title?',
        a: 'Island homes own those dinner titles. The measured Maui cost phrase stays on the Maui host, not in this title. Open the island stack instead: oahu.mychef-hawaii.com/private-chef-cost, maui.mychef-hawaii.com/private-chef-cost, kauai.mychef-hawaii.com/private-chef-cost, or bigisland.mychef-hawaii.com/private-chef-cost.',
      },
      {
        q: 'Which islands take a quote, and which stay inquiry?',
        a: 'Oʻahu and Maui are quote-open. Kauaʻi and Hawaiʻi Island are by inquiry only — a band is not instant booking. Fee stacks: oahu.mychef-hawaii.com/private-chef-cost and maui.mychef-hawaii.com/private-chef-cost for quotes; kauai.mychef-hawaii.com/private-chef-cost and bigisland.mychef-hawaii.com/private-chef-cost for inquiry. Each island’s pricing page is the card beside the stack.',
      },
      {
        q: 'When does a travel line print, instead of hiding inside the band?',
        a: 'Only outside the published base, and only as its own line. Oʻahu: North Shore is a surcharge; Kahala, Ko Olina, Kailua, and town residences with kitchens are base. Maui: Upcountry is a surcharge; West Maui timing is planned, not a mystery fee. Kauaʻi: Līhuʻe and Kapaʻa are included; both shores are a surcharge; far-North inherits the bridge clause. Hawaiʻi Island: Kona–Kohala is base; Waimea is a surcharge; Hilo is a dedicated day, never a west-side round trip.',
      },
      {
        q: 'Does this hub show Hawaiʻi star ratings or guest reviews?',
        a: 'No. We do not have those reviews yet, and we will not invent them. What we can show is published starting prices and a written total.',
      },
      {
        q: 'What is the next step if I want a written total?',
        a: 'Open the island pricing page for the card and the quote form for a paid inquiry with dates, shore, and headcount. Use that island’s private chef cost page if you need the stack beside the card. Desk: quotes@mychef-hawaii.com, +1 808 468 7748, https://wa.me/18084687748. WhatsApp is for dates and shore ready to book, not a free walkthrough of the menu.',
      },
    ],
  },
  mealPrep: {
    path: '/meal-prep',
    h1: 'Meal prep honesty, by island.',
    title: 'Meal prep honesty, by island | myCHEF Hawaii',
    description:
      'Each island gates volume meal prep until utilization is proven.',
    lede:
      'Meal prep is inquiry until proven. Each island says so.',
    kicker: 'Statewide · Meal prep',
    photo: 'hubMealPrep',
    cardLabel: 'Meal prep',
    body: [
      'A villa week of dinners is on the Stay Chef page.',
    ],
    faqs: [
      {
        q: 'Can I order statewide meal prep here?',
        a: 'No. Open the island page. It is gated until proven.',
      },
      {
        q: 'Same as Stay Chef?',
        a: 'Stay Chef is the villa day rate on the Stay Chef page. Meal prep is a different, gated line.',
      },
    ],
  },
  cookingClasses: {
    path: '/cooking-classes',
    h1: 'Cooking classes honesty, by island.',
    title: 'Cooking classes honesty, by island | myCHEF Hawaii',
    description:
      'Each island keeps classes unpublished until a real instructor bench exists.',
    lede:
      'Experience product publishes only with a named bench. Each island says when that is not true.',
    kicker: 'Statewide · Classes',
    photo: 'hubClasses',
    cardLabel: 'Classes',
    body: [
      'The island page says so in its own words.',
    ],
    faqs: [
      {
        q: 'Can I book a class from the hub?',
        a: 'No. Open the island page. Classes stay unpublished until a bench exists.',
      },
      {
        q: 'Same as chef’s table?',
        a: 'This is an experience product with a different gate.',
      },
    ],
  },
  omakaseAtHome: {
    path: '/omakase-at-home',
    h1: 'Omakase-at-home notes, by island.',
    title: 'Omakase-at-home notes, by island | myCHEF Hawaii',
    description: 'A tasting arc in the villa, not a restaurant omakase brand. Menu/IP and sourcing are launch gates.',
    lede:
      'A tasting arc in the villa, not a restaurant omakase brand. Menu/IP and sourcing are launch gates.',
    kicker: 'Statewide · Omakase',
    photo: 'hubOmakase',
    cardLabel: 'Tasting at home',
    body: [
    ],
    faqs: [
      {
        q: 'Is this a Michelin omakase?',
        a: 'No. We do not claim a star. Open the island page.',
      },
    ],
  },
  rehearsalDinners: {
    path: '/rehearsal-dinners',
    h1: 'Rehearsal dinners, by island.',
    title: 'Rehearsal dinners, by island | myCHEF Hawaii',
    description:
      'Each island quotes the night before as its own line.',
    lede:
      'The night before is not swallowed by a reception quote. Each island writes that line.',
    kicker: 'Statewide · Rehearsal',
    photo: 'hubRehearsal',
    cardLabel: 'Rehearsal',
    body: [
    ],
    faqs: [
    ],
  },
  retreatCatering: {
    path: '/retreat-catering',
    h1: 'Retreat full-board, by island.',
    title: 'Retreat full-board, by island | myCHEF Hawaii',
    description:
      'Each island quotes full-board retreat days in houses.',
    lede:
      'Food as its own line for days in the house — not a ballroom.',
    kicker: 'Statewide · Retreat kitchens',
    photo: 'hubRetreat',
    cardLabel: 'Full-board',
    body: [
    ],
    faqs: [
    ],
  },
  corporateCatering: {
    path: '/corporate-catering',
    h1: 'House offsite catering, by island.',
    title: 'House offsite catering, by island | myCHEF Hawaii',
    description:
      'Each island quotes executive dinners in houses.',
    lede:
      'Not HCC citywides — those are closed through 2027 and are not our product.',
    kicker: 'Statewide · Offsite catering',
    photo: 'hubCorpCater',
    cardLabel: 'House offsites',
    body: [
    ],
    faqs: [
      {
        q: 'Do you staff HCC citywides?',
        a: 'No. Citywides are closed through 2027 and are not the product. Other islands say it on the what-we-don’t-do list.',
      },
    ],
  },
};

export const HUB_ALL_PICKER_PATHS = [
  ...HUB_DIRECTORY_PATHS,
  ...HUB_NESTED_PATHS,
  ...HUB_EDITORIAL_PATHS,
] as const;

export function getHubDirectory(path: string): HubDirectory | undefined {
  const clean = path.replace(/\/$/, '') || '/';
  return (
    (Object.values(hubDirectories) as HubDirectory[]).find((row) => row.path === clean) ??
    (Object.values(hubNestedDirectories) as HubDirectory[]).find((row) => row.path === clean) ??
    (Object.values(hubEditorialDirectories) as HubDirectory[]).find((row) => row.path === clean)
  );
}

export function getHubDirectoryById(id: string): HubDirectory | undefined {
  return (
    (hubDirectories as Record<string, HubDirectory>)[id] ??
    (hubNestedDirectories as Record<string, HubDirectory>)[id] ??
    (hubEditorialDirectories as Record<string, HubDirectory>)[id]
  );
}
