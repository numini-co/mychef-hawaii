import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';
import { hubNestedDirectories, HUB_NESTED_PATHS } from './hubNestedDirectories';
import { hubEditorialDirectories, HUB_EDITORIAL_PATHS } from './hubEditorialDirectories';
import { bigIslandSimplerDinner, signatureGuestBand, stayChefUsd, STAFFING } from './rateCard';
import { DESK_EMAIL, DESK_PHONE_DISPLAY, DESK_TEL, DESK_WHATSAPP } from '@/lib/contact';

const oahuSig = signatureGuestBand('oahu');
const mauiSig = signatureGuestBand('maui');
const kauaiSig = signatureGuestBand('kauai');
const biSig = signatureGuestBand('bigisland');
const biSimple = bigIslandSimplerDinner();
const oahuStay = stayChefUsd('oahu');
const mauiStay = stayChefUsd('maui');
const kauaiStay = stayChefUsd('kauai');
const biStay = stayChefUsd('bigisland');
const serverHr = STAFFING.serverHourly;
const sousHr = STAFFING.sousHourly;
const minHours = STAFFING.minimumHours;
const desk = `${DESK_EMAIL}, +1 ${DESK_PHONE_DISPLAY} (${DESK_TEL}), WhatsApp ${DESK_WHATSAPP}`;

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
    description:
      'Booking questions, with each island’s own answers for kitchens, prices, and what we will not claim. Open the island where the house is.',
    lede:
      'Booking questions, with each island’s own answers for kitchens, prices, and what we will not claim. Open the island where the house is.',
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
        q: 'What is the difference between this site and the island sites?',
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
      'Quotes and inquiry replies run in Hawaii Standard Time. Use the quote form, WhatsApp, quotes@mychef-hawaii.com, or (808) 468-7748. This page does not take the booking — open the island where the house is. WhatsApp is on this page and on each island contact page.',
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
      'Each town keeps its own page on that island’s site.',
      'Oahu: Honolulu to Ko Olina. Maui: Wailea to Kapalua. Kauaʻi: both shores. Hawaiʻi Island: Kona to Kohala, west side first.',
    ],
    faqs: [
      {
        q: 'Where is the Honolulu page?',
        a: 'On the Oʻahu site: oahu.mychef-hawaii.com/honolulu.',
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
        a: 'Through each island’s rate card. A Signature draft keeps the shop inside that island’s published band; a Stay Chef draft bills the shop at cost with receipts. The quote then adds 20% service and Hawaiʻi GET up to 4.712%, a 50% deposit once we can staff, and no required gratuity. Big Island example: the from-$165 dinner, Signature $210–$325, Stay Chef from $1,450. Line-by-line: [the pricing page](/pricing).',
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
      'Four formats live on each island’s fine-dining page: a romantic dinner, a tasting menu, a chef’s-table evening, and a celebration dinner. Open [Oʻahu in-villa formats](oahu:/fine-dining), [Maui in-villa formats](maui:/fine-dining), [Kauaʻi in-villa formats](kauai:/fine-dining), or [Hawaiʻi Island in-villa formats](bigisland:/fine-dining). None of these is a star claim. The island titles already say so.',
      'Oʻahu and Maui take a written quote for the format you pick. Kauaʻi takes a request for availability. The Big Island takes an inquiry, west side first. Bands and fee items are on [pricing](/pricing). This page only routes you. Send the island and the format on [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Do you claim a Michelin star for these formats?',
        a: 'We do not claim a star, and this is not a Michelin listing. Each island fine-dining page says that in its title. Open the island that has the house. The format under it is the booking, not a rating.',
      },
      {
        q: 'Where do romantic dinners, tastings, counter evenings, and celebrations actually live?',
        a: 'On that island’s fine-dining page, then the format under it. This hub page does not cook the menu and does not hold a date. Pick Oʻahu, Maui, Kauaʻi, or Hawaiʻi Island before you write anything down.',
      },
      {
        q: 'Can one evening be booked on two islands?',
        a: 'Not with one crew. A Friday on Oʻahu and a Saturday on Maui are two asks. The coordinator can keep the dates in order. The cooks do not cross the channel the same day. Send each house to its own island page.',
      },
      {
        q: 'Where are the published bands and the fee items?',
        a: 'On the pricing page. A signature dinner keeps groceries inside the per-guest band. Stay Chef is the day rate plus groceries at cost with receipts. 20% service and Hawaiʻi GET up to 4.712% each stand alone. A 50% deposit follows acceptance. Gratuity is never required.',
      },
      {
        q: 'What should I send if I am still on this statewide page?',
        a: 'The island, the house, the date, and which of the four formats you mean. Then open that island’s page and use the quote form. Oʻahu and Maui take a written quote. Kauaʻi takes a request for availability. The Big Island takes an inquiry, west side first.',
      },
    ],
  },
  staffing: {
    path: '/staffing',
    h1: 'Staffing add-ons, by island.',
    title: 'Staffing add-ons, by island | myCHEF Hawaii',
    description: `Choose an island for servers at $${serverHr}/hr and a separate sous-chef line. Bartenders and butlers are quoted in writing. Kauaʻi and the Big Island stay inquiry.`,
    lede:
      'Pick the island, then the line. The long guides for waiters, bartenders, and butlers are statewide. This page only routes you.',
    kicker: 'Statewide · Staffing',
    photo: 'hubStaff',
    cardLabel: 'Staffing add-ons',
    body: [
      `Read the detailed pages first: [waiters](/in-villa-services/waiters), [bartenders](/in-villa-services/bartenders), and [butlers](/in-villa-services/butlers). Then open the island that has the house: [Oʻahu staffing](oahu:/staffing), [Maui staffing](maui:/staffing), [Kauaʻi staffing](kauai:/staffing), or [Big Island staffing](bigisland:/staffing). Oʻahu and Maui take a written quote. Kauaʻi and the Big Island take a request for availability.`,
      `A server is $${serverHr}/hr and a sous chef is $${sousHr}/hr, each on its own line, ${minHours} hours minimum. 20% service and Hawaiʻi GET up to 4.712% follow, each alone. A 50% deposit holds dates after you accept the total. Gratuity is never required. Bartenders and butlers are quoted in writing. No hourly figure for either is on the card. One quote can carry the chef and the floor staff. It cannot move a crew between islands on the same day. Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'Which islands list a server hour, and which only take an inquiry?',
        a: `All four list servers at $${serverHr}/hr and a sous chef at $${sousHr}/hr, plus 20% service and GET up to 4.712%. Oʻahu and Maui quotes are open. Kauaʻi and the Big Island are request availability. The hour is not a held crew.`,
      },
      {
        q: 'How does staffing show on the written quote next to the chef?',
        a: `As its own lines. Food or the day fee first. Then server hours, sous-chef hours, and any bartender or butler quoted in writing. 20% service and Hawaiʻi GET up to 4.712% print after those lines. A 50% deposit follows acceptance. Gratuity is never required.`,
      },
      {
        q: 'Can one quote cover the chef and the floor staff together?',
        a: `Yes. Say chef plus server, or chef plus a bartender quoted in writing, in the same note. The lines stay separate. You do not need two forms. You do need one island.`,
      },
      {
        q: 'What does inquiry mean for a Kauaʻi staffing line?',
        a: `Join the inquiry list and request availability. A Princeville or Poʻipū server is not confirmed because the rate is printed. Hanalei-bridge weather can move the night. We reply when a crew exists.`,
      },
      {
        q: 'Why does a Big Island staffing request start on the west side?',
        a: `Kona, Waikoloa, and the Kohala Coast are the first geography. Hilo is not included in that request and is not a same-day add-on. Ask for availability on the west side, or send Hilo as its own day.`,
      },
      {
        q: 'Can the same crew work Oʻahu on Friday and Maui on Saturday?',
        a: `No. Each island staffs its own houses. A quote does not ferry a server across the channel. Book the Friday on [Oʻahu](oahu:/staffing) and the Saturday on [Maui](maui:/staffing) as two inquiries.`,
      },
      {
        q: 'Where is the full waiter guide, as opposed to an island server page?',
        a: `The statewide guide is [waiters](/in-villa-services/waiters). Island hours and booking posture are on [servers by island](/staffing/servers), then the island staffing page. This chooser does not repeat the guide.`,
      },
      {
        q: 'Where do bartender and butler details live if this page only routes?',
        a: `[Bartenders](/in-villa-services/bartenders) and [butlers](/in-villa-services/butlers) are the statewide guides. Both are quoted in writing. No hourly rate is published. Then open the island. Desk: ${desk}.`,
      },
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
      'Start with the night, then the island. A birthday, a welcome dinner, a villa party, an anniversary, brunch, a retreat, and a house offsite each live on the island site. This page only routes. A dinner for the people already in the house stays an occasion. When the room needs a staffed service, open [Hawaii catering](/catering). When the dates are a wedding week — welcome, rehearsal, reception, and brunch — open [wedding week](/weddings). Do not file a wedding under a birthday URL.',
      `One coordinator can hold several nights on the same island. Each night stays its own line. Oʻahu and Maui take a written quote. Kauaʻi is request availability. Hawaiʻi Island is join the inquiry list, west side first. A crew does not cross islands the same day. Open the host that has the house: [Oʻahu occasions](oahu:/events), [Maui occasions](maui:/events), [Kauaʻi occasions](kauai:/events), [Hawaiʻi Island occasions](bigisland:/events). Send one island, the occasion, and the dates on [the quote form](/quote). Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'Which page is a birthday, and which is a welcome dinner?',
        a: 'A birthday is the birthday page on the island that has the house. A welcome dinner is the first night of a stay. They are different lines. Open that island’s events list, then the night. This hub does not blend them.',
      },
      {
        q: 'How do I tell a villa party from an anniversary, and when does either need catering?',
        a: 'A villa party is the larger house gathering. An anniversary is the small table, often two seats. Both stay on the island occasion pages until the room needs a staffed service. Then open [Hawaii catering](/catering).',
      },
      {
        q: 'Where do brunch, a retreat, and a house offsite each go?',
        a: 'Brunch is a morning in the house, often the day after. A retreat is full-board days in that house. A house offsite is a company night, not a convention floor. The island events page routes all three. This page does not cook them.',
      },
      {
        q: 'When does an occasion become catering?',
        a: 'When the house needs a staffed service for the list, not one table. Open [Hawaii catering](/catering) for that format. The occasion page still names the night. Catering names the staffed room. Use both links, not one URL for two jobs.',
      },
      {
        q: 'When should the dates move to the wedding week?',
        a: 'When you are booking welcome, rehearsal, reception, and brunch as one week. That is [wedding week](/weddings), with separate lines. An occasion page is one night. Do not fold a wedding week into a birthday URL.',
      },
      {
        q: 'Can one coordinator quote several nights on one island?',
        a: 'Yes. Name every night in one note. Each night is its own line. One coordinator holds the thread. The note still names a single island. Two islands are two quotes.',
      },
      {
        q: 'Do Kauaʻi and Hawaiʻi Island occasions take a quote or an inquiry?',
        a: 'Kauaʻi is request availability. Hawaiʻi Island is join the inquiry list, west side first. Oʻahu and Maui take a written quote. A printed occasion page is not a held date on the inquiry islands.',
      },
      {
        q: 'Can the same crew cook an occasion on two islands in one day?',
        a: `No. There is no same-day inter-island crossing. Book each night on that island’s events page. Desk: ${desk}.`,
      },
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
      'Each island designs vegan, gluten-free and allergy plates ahead.',
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
      'Household chef by island: daily cooking and meal prep for one home. Oʻahu and Maui quote. Kauaʻi and Hawaiʻi Island: request availability.',
    lede:
      'Weekly household cooking is not a tourist one-off. Each island writes that line. Open the island where the home is.',
    kicker: 'Statewide · Household line',
    photo: 'hubPersonal',
    cardLabel: 'Household line',
    body: [
      'A household chef cooks for one home on a repeating calendar: the nights you name, in the kitchen that household already uses. Meal prep is portions for that home. Dietary limits are written before the shop. This page is not a one-night private-chef dinner, and it is not a visitor Stay Chef week.',
      'Open the island where the house is. [Oʻahu household cooking](oahu:/personal-chef) and [Maui household cooking](maui:/personal-chef) take a written quote. [Kauaʻi household cooking](kauai:/personal-chef) and [Hawaiʻi Island household cooking](bigisland:/personal-chef) are request availability: a published fee does not hold a crew. A one-night dinner is that island’s private-chef page. A rental week is [Stay Chef](/vacation-chef). The card is [pricing](/pricing). The form is [the quote](/quote).',
      `Signature dinners keep the shop inside the guest price: Oʻahu ${oahuSig}, Maui ${mauiSig}, Kauaʻi ${kauaiSig}, Hawaiʻi Island ${biSig}, and Big Island dinners from ${biSimple} a guest. A resident who wants a cook most days is quoted on the Stay Chef daily fee plus groceries at cost with receipts: from ${oahuStay} on Oʻahu, ${mauiStay} on Maui, ${kauaiStay} on Kauaʻi, and ${biStay} on Hawaiʻi Island. After that fee, 20% service and Hawaiʻi GET up to 4.712% print as their own lines. A 50% deposit locks dates you accept. Gratuity is never required.`,
    ],
    faqs: [
      {
        q: 'Which link is the household cook for the island where the home is?',
        a: 'Open the host that matches the house. [Oʻahu](oahu:/personal-chef) and [Maui](maui:/personal-chef) take a written quote. [Kauaʻi](kauai:/personal-chef) and [Hawaiʻi Island](bigisland:/personal-chef) are request availability. A one-night dinner is that island’s private-chef page, not this line. The card is [pricing](/pricing).',
      },
      {
        q: 'How is household cooking different from a one-night private-chef dinner?',
        a: 'The household line repeats for one home. A signature dinner is one table, and the groceries sit inside the guest price. They are not the same invoice. Send a celebration night to that island’s private-chef page.',
      },
      {
        q: 'How is a household cook different from Stay Chef for a rental week?',
        a: 'Stay Chef is a visitor week: a daily chef fee plus groceries at cost with receipts. Household cooking is for people who live in the house. Same crew shape, different calendar. The rental week is [Stay Chef](/vacation-chef).',
      },
      {
        q: 'What does a daily household cook cost, and what is added after?',
        a: `Published daily floors are ${oahuStay} on Oʻahu, ${mauiStay} on Maui, ${kauaiStay} on Kauaʻi, and ${biStay} on Hawaiʻi Island, plus groceries at cost with receipts. Then 20% service and Hawaiʻi GET up to 4.712% as their own lines. A 50% deposit locks dates you accept. Gratuity is never required.`,
      },
      {
        q: 'Can one home book several cook days without stacking signature dinners?',
        a: `Yes. Repeating days use the daily fee, from ${oahuStay} on Oʻahu and the matching floor on the other islands, plus groceries at cost. They are not a row of signature dinners. 20% service and Hawaiʻi GET up to 4.712% still print after the fee.`,
      },
      {
        q: 'How do dietary limits and meal-prep portions get onto the quote?',
        a: 'Send them with the address and the nights, before anyone shops. Gluten-free, dairy-free, nut-aware, vegan, and children’s plates can be designed in. Meal prep on this line feeds that one household. It is not a drop-off route across a city.',
      },
      {
        q: 'Which islands take a household quote, and which only take a request?',
        a: 'Oʻahu and Maui take a written quote. Kauaʻi and Hawaiʻi Island stay request-availability until a crew exists. A published daily fee does not hold a week. Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748, https://wa.me/18084687748.',
      },
      {
        q: 'Will you cook in a hotel room, or on two islands the same day?',
        a: 'No. A room without a cooktop is declined. One crew does not cook on two islands the same day. Name one island and one kitchen on [the quote form](/quote). If the house has no range, we say so before a deposit.',
      },
    ],
  },
  privateChefCost: {
    path: '/private-chef-cost',
    h1: 'Fee stack explainers, by island.',
    title: 'Fee stack explainers, by island | myCHEF Hawaii',
    description:
      'What a private chef costs in Hawaii: the per-guest band, 20% service, GET up to 4.712%, and a 50% deposit. Each island writes the total before you pay.',
    lede:
      'A private chef in Hawaii is priced as a published band plus separate fee lines. Open the island where the house is for that written total.',
    kicker: 'Statewide · Fee stack',
    photo: 'hubFeeStack',
    cardLabel: 'Fee stack',
    body: [
      'Open the island where the house is. That page shows the band, the travel rules, and how a quote is stacked before you pay a deposit.',
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
        q: 'What does a dinner for eight include on the bill?',
        a: 'The island per-guest band times the headcount, with Signature groceries inside that band: Oʻahu $195–$290, Maui and Kauaʻi $225–$375, Hawaiʻi Island $210–$325, dinners from $165. Then 20% service and Hawaiʻi GET up to 4.712% as their own lines. A 50% deposit locks the date. Gratuity is never required. The written quote is the total.',
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
        q: 'Do you show star ratings or guest reviews?',
        a: 'No. There are no star ratings or guest testimonials here yet. We will publish them only after verified events. Until then, the proof is published starting prices and a written total.',
      },
      {
        q: 'What does the 50% deposit actually lock?',
        a: 'A date the island can staff, and only after you accept the written total. The other half is the balance of that same quote. Service at 20% and GET up to 4.712% are already separate lines. Gratuity is never required and is not part of the deposit.',
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
      'Full-board retreat food in the house, by island. Oʻahu and Maui quote. Kauaʻi requests availability. The Big Island inquires, west side first.',
    lede:
      'Food as its own line for days in the house — not a ballroom.',
    kicker: 'Statewide · Retreat kitchens',
    photo: 'hubRetreat',
    cardLabel: 'Full-board',
    body: [
      'Full-board food is booked on the island that has the house. Open [Oʻahu retreat kitchens](oahu:/retreat-catering) for Kahala and Ko Olina, [Maui retreat kitchens](maui:/retreat-catering) for South and West Maui villas, [Kauaʻi retreat kitchens](kauai:/retreat-catering) for both shores, or [Hawaiʻi Island retreat kitchens](bigisland:/retreat-catering) for Kona–Kohala first.',
      'Oʻahu and Maui take a written quote. Kauaʻi takes a request for availability. The Big Island takes an inquiry, west side first. Hilo or Volcano is a separate dedicated east-side day, quoted in writing.',
      'One coordinator can sequence the dates. Nobody crosses the channel the same day. Bands and fee items are on [pricing](/pricing). Send the island, the house, and the dates on [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Which island page do I open for retreat food?',
        a: 'The island where the house is. Oʻahu, Maui, Kauaʻi, and Hawaiʻi Island each have a retreat kitchen page. This page does not take the brief. It sends you there. The occasion page on that island is a different door.',
      },
      {
        q: 'How does the ask differ from one island to the next?',
        a: 'Oʻahu and Maui take a written quote. Kauaʻi takes a request for availability. The Big Island takes an inquiry, west side first. Hilo or Volcano is a separate dedicated east-side day, quoted in writing. The hub does not hold any of those dates.',
      },
      {
        q: 'Can one crew cook two islands in the same week?',
        a: 'One crew cannot cover both. One coordinator can keep the dates in order. The cooks stay on their island. A same-day channel crossing is not a booking. Friday’s house and Saturday’s house need two asks, even if one person writes both.',
      },
      {
        q: 'Where do fee items sit, and what do I send?',
        a: 'Bands, the day rate, 20% service, Hawaiʻi GET up to 4.712%, and the 50% deposit are on the pricing page. Gratuity is never required. Send the island, the house, the dates, and the meals each day on the quote form.',
      },
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
      'This page routes a house offsite. It does not cook it. Oʻahu and Maui take a written quote. Kauaʻi takes a request for availability. Hawaiʻi Island takes an inquiry, west side first, and Hilo is not inside that request. A multi-island offsite is quoted per island: one coordinator, separate crews, no same-day crossing.',
      `Open the island that has the house: [Oʻahu offsites](oahu:/corporate), [Maui offsites](maui:/corporate), [Kauaʻi offsites](kauai:/corporate), [Hawaiʻi Island offsites](bigisland:/corporate). Each of those pages chooses the format — one executive dinner, a house offsite night, or a full-board retreat — and points at the planning brief. Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'Do you staff HCC citywides?',
        a: 'No. Citywides are closed through 2027 and are not the product. Other islands say it on the what-we-don’t-do list.',
      },
      {
        q: 'Which islands take an offsite quote, and which take an inquiry?',
        a: 'Oʻahu and Maui take a written quote. Kauaʻi is request availability. Hawaiʻi Island is join the inquiry list, west side first. The hub does not hold a date for any of them.',
      },
      {
        q: 'How is a multi-island offsite quoted?',
        a: 'Per island. Each house gets its own lines, its own crew, and its own total. One coordinator can hold the thread. The totals are not blended into a statewide package.',
      },
      {
        q: 'Can one coordinator cover two islands without moving one crew?',
        a: 'Yes. The coordinator sequences the asks. The cooks stay on their island. A Friday on Oʻahu and a Saturday on Maui are two quotes, even in one email thread.',
      },
      {
        q: 'Why should I open the island’s offsite page instead of staying on this one?',
        a: 'This page only routes. The island page chooses one executive dinner, a house offsite night, or a full-board retreat, then the planning brief. Format decisions live on that host.',
      },
      {
        q: 'How do I start an offsite on more than one island without treating them as one booking?',
        a: `Name one island per night on [the quote form](/quote), or open that island’s corporate page first. Desk: ${desk}.`,
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
