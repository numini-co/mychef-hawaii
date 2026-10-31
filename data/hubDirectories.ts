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
  /** When set, the hub FAQ page renders one accordion per group. `faqs` is the same list, flat. */
  faqGroups?: { h2: string; faqs: { q: string; a: string }[] }[];
}

function withFaqGroups(
  page: Omit<HubDirectory, 'faqs'> & {
    faqGroups: NonNullable<HubDirectory['faqGroups']>;
  },
): HubDirectory {
  return { ...page, faqs: page.faqGroups.flatMap((group) => group.faqs) };
}

export const hubDirectories: Record<HubDirectoryId, HubDirectory> = {
  faq: withFaqGroups({
    path: '/faq',
    h1: 'Questions about a private chef in Hawaii.',
    title: 'Private chef in Hawaii: questions, all four islands | myCHEF',
    description:
      'Statewide answers on signature dinners, Stay Chef days, fee lines, and a two-island trip. Then open the FAQ for the house.',
    lede:
      'Statewide questions before you pick an island. Each island FAQ then covers that house: the kitchen, the dates, and the written total.',
    kicker: 'Statewide · FAQ',
    photo: 'hubFaq',
    cardLabel: 'Questions',
    body: [
      'This page answers what is true on every island, then sends you to the FAQ for the house. A signature dinner keeps grocery shopping inside that island’s per-guest band. A Stay Chef day is the chef fee plus groceries at cost with receipts. Those bills are not blended. A 20% service charge and Hawaiʻi GET up to 4.712% print on their own lines. A 50% deposit follows once you accept. Gratuity is never required. Travel fees are published only on the island pricing pages. This page links there and does not restate a travel figure.',
      'Resident’s Island questions start with a Honolulu, Kahala, Ko Olina, or Kailua kitchen, including the building rules. Request a written quote. A Villa Week question names Wailea, Kapalua, or Kāʻanapali, including the arrival night. Quotes are open there too. A Garden Isle Retreat question names Princeville or Poʻipū, plus rain and the Hanalei bridge. Request availability. An Expedition question starts on the Kona–Kohala side. Join the inquiry list. Hilo is a separate dedicated east-side day.',
      'Open the island list: [Oʻahu questions](oahu:/faq), [Maui questions](maui:/faq), [Kauaʻi questions](kauai:/faq), or [Hawaiʻi Island questions](bigisland:/faq). Bands and fee lines are on [pricing](/pricing). Send one island on [the quote form](/quote).',
    ],
    faqGroups: [
      {
        h2: 'Choosing an island',
        faqs: [
          {
            q: 'Which island’s question list should I open first?',
            a: 'Open the FAQ for the island that has the house. [Oʻahu](oahu:/faq) and [Maui](maui:/faq) take a written quote. [Kauaʻi](kauai:/faq) is a request for availability. [Hawaiʻi Island](bigisland:/faq) is join the inquiry list, west side first. Hilo is a separate dedicated day on that list. This page does not hold a date.',
          },
          {
            q: 'How do I match a resort or a town to the right island FAQ?',
            a: 'Wailea, Kapalua, and Kāʻanapali are Maui. Honolulu, Kahala, Ko Olina, and Kailua are Oʻahu. Princeville and Poʻipū are Kauaʻi. Kona and the Kohala Coast are Hawaiʻi Island, and Hilo is that island’s separate east-side day. Open that island’s FAQ, then name the island on [the quote form](/quote).',
          },
          {
            q: 'Can this statewide page choose the island if I only have flight dates?',
            a: 'The house decides the island, not the flight. Send the address, or the town you already hold, on [the quote form](/quote). Two islands in one trip are two notes. A same-day crossing is not a booking. Start with the island FAQ that matches the first kitchen.',
          },
        ],
      },
      {
        h2: 'Prices and what prints on the quote',
        faqs: [
          {
            q: 'Are groceries inside the dinner price or on a separate receipt?',
            a: 'A signature dinner keeps grocery shopping inside that island’s per-guest band. There is no separate grocery line on that night. A Stay Chef day is the chef fee plus groceries at cost with receipts. The two models are not blended. Read both on [pricing](/pricing), then that island’s FAQ for the shore’s card.',
          },
          {
            q: 'What prints on its own line after the food or the day fee?',
            a: 'A 20% service charge and Hawaiʻi GET up to 4.712% each print alone. A 50% deposit follows once you accept the written total. Gratuity is never required. Travel outside that island’s base is its own line on the island pricing page. This FAQ does not restate a travel figure. The card is [pricing](/pricing).',
          },
          {
            q: 'Where do I read each island’s band without treating them as one price?',
            a: 'On [pricing](/pricing), and again on that island’s FAQ. Oʻahu and Maui take a written quote. Kauaʻi answers a request for availability. Hawaiʻi Island answers from the inquiry list. A band on one host is not the band on the next. This page does not blend the four cards.',
          },
        ],
      },
      {
        h2: 'Booking and changes',
        faqs: [
          {
            q: 'How do I book two islands on one trip from this page?',
            a: 'Send two notes on [the quote form](/quote), one island each. A coordinator can keep the dates in order. The crews and the totals stay separate. Oʻahu and Maui notes request a written quote. A Kauaʻi note requests availability. A Hawaiʻi Island note joins the inquiry list, west side first. There is no same-day crossing.',
          },
          {
            q: 'What happens after I send the statewide form?',
            a: 'The island that has the house answers. Oʻahu and Maui reply with a written quote. Kauaʻi replies to a request for availability, and that reply is not a held date. Hawaiʻi Island replies from the inquiry list. You sign the menu before that island shops. Later changes belong on that island’s managing-booking guide.',
          },
        ],
      },
      {
        h2: 'In the kitchen',
        faqs: [
          {
            q: 'What does the rental kitchen need before any island will cook?',
            a: 'A working cooktop in the house you named. A hotel room with only a minibar is declined on the island FAQ before any deposit. A tower may also need the building’s freight or parking rule in the note. Send that with the address on [the quote form](/quote). This page does not inspect the stove.',
          },
          {
            q: 'Where do allergy notes go before I have opened an island FAQ?',
            a: `Put them in the same note as the island, the address, and who is eating. Gluten-free, dairy-free, nut-free, shellfish, vegan, pescatarian, and religious limits are written before that shop. There is no separate allergy price. The island FAQ says what that kitchen can keep. Desk: ${desk}.`,
          },
        ],
      },
    ],
  }),
  coverage: {
    path: '/coverage',
    h1: 'Coverage maps, by island.',
    title: 'Where we cook, island by island | myCHEF',
    description:
      'Open the island that has the house. Each coverage page names where we cook and how dates are confirmed in writing. This hub page only routes you there.',
    lede: 'Open the island that has the house. This page routes you. It does not copy that island’s zone notes.',
    kicker: 'Statewide · Coverage',
    photo: 'hubCoverage',
    cardLabel: 'Coverage map',
    body: [
      'This page does not list driveways. It sends you to the island that holds the house. [Oʻahu coverage](oahu:/coverage) is Honolulu, Kahala, Ko Olina, and Kailua, and quotes are open: request a written quote. [Maui coverage](maui:/coverage) is Wailea, Kapalua, and Kāʻanapali villa weeks, and quotes are open there too.',
      '[Kauaʻi coverage](kauai:/coverage) is both shores, including the Hanalei-bridge weather clause. Request availability and name the shore. [Hawaiʻi Island coverage](bigisland:/coverage) is Kona–Kohala first. Join the inquiry list. Hilo and Volcano are a separate dedicated day on that island, never stacked on a west-side day. Prices stay on each island’s pricing page. This hub page does not invent a travel fee.',
    ],
    faqs: [
      {
        q: 'Which coverage page do I open for a Honolulu or Ko Olina house?',
        a: '[Oʻahu coverage](oahu:/coverage). Quotes are open. Request a written quote and name the house. This hub page does not list the driveways. Kahala and Kailua sit on that same island map.',
      },
      {
        q: 'Where does a Wailea or Kapalua week go?',
        a: '[Maui coverage](maui:/coverage). Quotes are open for those villa weeks. Kāʻanapali is on that map too. Do not file a Maui week on the Oʻahu page. Request a written quote from the Maui host.',
      },
      {
        q: 'How do I read Kauaʻi shores before I request availability?',
        a: 'Open [Kauaʻi coverage](kauai:/coverage) and name the shore. Both shores are on that page, and far-north dates carry the Hanalei-bridge weather clause. Request availability. A reply is not a held date.',
      },
      {
        q: 'Does the Big Island map treat Hilo as part of a Kona day?',
        a: 'The map keeps them apart. [Hawaiʻi Island coverage](bigisland:/coverage) starts on the Kona–Kohala side. Hilo and Volcano are written as their own day. Join the inquiry list and name one side.',
      },
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
    h1: 'Where a private chef cooks in Hawaii.',
    title: 'Private chef service areas in Hawaii by island | myCHEF',
    description:
      'Private chef towns already published on each island: open that town list, then pricing. This page names those places and does not add a travel fee.',
    lede:
      'Open the island that has the house, then a town that island already lists. This page does not print a price or a travel fee.',
    kicker: 'Statewide · Locations',
    photo: 'hubLocations',
    cardLabel: 'Private chef by town',
    body: [
      'Pick the island, then a town that island’s locations page already links. A signature dinner in that town uses the island’s per-guest band, groceries inside it. A Stay Chef day is the chef fee plus groceries at cost with receipts. A 20% service charge and Hawaiʻi GET up to 4.712% print on their own lines, and a 50% deposit follows acceptance. Gratuity is never required. Travel fees stay on the island pricing page. This page does not restate them.',
      'Resident’s Island towns already linked are Honolulu, Waikīkī, Kahala, Kailua, Lanikai, Hawaiʻi Kai, Diamond Head, Ko Olina, and the North Shore. Request a written quote and include the building rules when the house is a tower. Villa Week towns already linked are Wailea, Makena, Kīhei, Kāʻanapali, Lahaina, Kapalua, Nāpili, and Upcountry. Quotes are open, including an arrival night in one of those towns. Garden Isle Retreat towns already linked are Princeville, Hanalei, Poʻipū, Kōloa, Kapaʻa, and Līhuʻe. Request availability and name the town. Expedition towns already linked on the west side are Kailua-Kona, Keauhou, Kona, Waikoloa, the Kohala Coast, and Waimea. Join the inquiry list for one of those. Hilo is linked as its own east-side page and is a separate dedicated day.',
      'Open the list that holds the house: [Oʻahu towns](oahu:/locations), [Maui towns](maui:/locations), [Kauaʻi towns](kauai:/locations), or [Hawaiʻi Island towns](bigisland:/locations). Bands are on [pricing](/pricing). Name one town on [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Which island’s town page should I open?',
        a: 'Open the island that has the house. [Oʻahu towns](oahu:/locations), [Maui towns](maui:/locations), [Kauaʻi towns](kauai:/locations), and [Hawaiʻi Island towns](bigisland:/locations) each link the places we cook. This page does not add a town those lists do not already link.',
      },
      {
        q: 'Where do the prices live if they are not on this page?',
        a: 'On [pricing](/pricing), and on each island’s pricing page: [Oʻahu](oahu:/pricing), [Maui](maui:/pricing), [Kauaʻi](kauai:/pricing), and [Hawaiʻi Island](bigisland:/pricing). A band on one host is not a band on the next. Travel fees stay on those cards. This page does not invent one.',
      },
      {
        q: 'Where do the service charge and the tax lines live?',
        a: 'On the written quote, after the food: a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. A 50% deposit holds a date after you accept. Gratuity is never required. The line order is on [pricing](/pricing).',
      },
      {
        q: 'Can one note name a town on two islands?',
        a: 'It should name one town on one island. A second island is a second note on [the quote form](/quote). The towns do not share a crew or a total. There is no same-day crossing.',
      },
      {
        q: 'Is Hilo part of a Kona town request?',
        a: 'Hilo is linked on the Hawaiʻi Island town list as its own page. It is a separate dedicated east-side day, not a stop you add to Kailua-Kona, Waikoloa, or the Kohala Coast. Join the inquiry list for the side the house is on.',
      },
      {
        q: 'How do I start on the right island from here?',
        a: 'Oʻahu and Maui take a written quote. Kauaʻi is a request for availability. Hawaiʻi Island is join the inquiry list, west side first. Use [the quote form](/quote) and name one town. Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748 (tel:+18084687748), https://wa.me/18084687748.',
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
    description:
      'Island help for a first note, a menu draft, and a change after you accept. Open the island where the house is, then pricing for the fee lines.',
    lede:
      'Five guides live on each island. This page routes you. It does not take the form.',
    kicker: 'Statewide · Help',
    photo: 'hubHelp',
    cardLabel: 'Help desk',
    body: [
      'Getting started, the menu guide, the wedding guide, the corporate guide, and managing a booking are written on each island. Open the host that has the house. Kauaʻi answers a request for availability. Hawaiʻi Island uses the inquiry list, west side first.',
      'Prices and the service charge and tax lines stay on [pricing](/pricing). The form is [the quote form](/quote). How a night runs is on the island you open, not a second copy of those steps here.',
    ],
    faqs: [
      {
        q: 'Which guide do I open for a first note, a menu draft, or a change?',
        a: 'First note: that island’s getting-started guide. Draft: the menu guide. A change after you accept: managing a booking. Start at [Oʻahu help](oahu:/help), [Maui help](maui:/help), [Kauaʻi help](kauai:/help), or [Hawaiʻi Island help](bigisland:/help).',
      },
      {
        q: 'How do the booking postures differ before I leave this page?',
        a: 'Oʻahu and Maui take a written quote. Kauaʻi takes a request for availability. Hawaiʻi Island takes an inquiry, and you join the inquiry list for the west side. Hilo is a separate dedicated east-side day, quoted in writing.',
      },
      {
        q: 'Where are the prices and the service charge and tax lines?',
        a: 'On [pricing](/pricing). A signature dinner keeps groceries inside that island’s per-guest band. Then 20% service and Hawaiʻi GET up to 4.712% each stand alone. A 50% deposit follows acceptance. Gratuity is never required.',
      },
      {
        q: 'Can I change a date or a headcount from this statewide desk?',
        a: `Not from here. Open the island’s managing-booking guide and write the change there. A verbal note does not move a deposit. The desk is ${desk}.`,
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
      'What we will not claim, by island: no invented reviews, no ballroom catering, no same-day island hop. Fee lines stay visible. Open the island page.',
    lede:
      'This directory only routes you. Each island writes what it will not claim. This page does not cook, and it does not invent a review.',
    kicker: 'Statewide · Honesty',
    photo: 'hubHonesty',
    cardLabel: 'Claim list',
    body: [
      'Open the island that has the house: [Oʻahu limits](oahu:/what-we-dont-do), [Maui limits](maui:/what-we-dont-do), [Kauaʻi limits](kauai:/what-we-dont-do), or [Hawaiʻi Island limits](bigisland:/what-we-dont-do). Reviews, hotel rooms, ballrooms, and same-day travel are written there.',
      'Oʻahu and Maui take a written quote. Kauaʻi takes a request for availability. Hawaiʻi Island takes an inquiry: join the inquiry list for the west side. Hilo is a separate dedicated east-side day, quoted in writing. Fee lines live on [pricing](/pricing). This directory does not hold a date.',
    ],
    faqs: [
      {
        q: 'Do you have statewide reviews here?',
        a: 'No. We do not invent them. Open the island page for the house. Reviews publish only after verified events, and never from this directory.',
      },
      {
        q: 'Where do the fee lines live, and is a tip required?',
        a: 'On [pricing](/pricing), and again on the island page. 20% service and Hawaiʻi GET up to 4.712% each stand alone. A 50% deposit follows acceptance. Gratuity is never required. This directory does not hide a figure.',
      },
      {
        q: 'Can one crew cook two islands the same day, or Kona and Hilo the same day?',
        a: 'No. There is no same-day inter-island crossing, and no same-day Kona–Hilo round trip. Open the island that has the house. Hilo is a separate dedicated east-side day, quoted in writing.',
      },
      {
        q: 'Which page do I open for the limits on that house?',
        a: `The host that has the kitchen: [Oʻahu](oahu:/what-we-dont-do), [Maui](maui:/what-we-dont-do), [Kauaʻi](kauai:/what-we-dont-do), or [Hawaiʻi Island](bigisland:/what-we-dont-do). Then use that island’s form. Desk: ${desk}.`,
      },
    ],
  },
  guestCounts: {
    path: '/guest-counts',
    h1: 'How many guests a Hawaii private chef seats.',
    title: 'Guest counts for a Hawaii villa dinner | myCHEF',
    description:
      'Dinners are two to fifteen. Receptions are about ten to seventy-five. Larger formats are quoted, not promised. Open the island page, then pricing.',
    lede:
      'The headcount is decided on the island that has the house. Dinners are two to fifteen. Receptions are about ten to seventy-five. This page routes that number.',
    kicker: 'Statewide · Guest counts',
    photo: 'hubCounts',
    cardLabel: 'Headcount',
    body: [
      'A private chef dinner in the rental is seated for the people you name, from two to fifteen. A reception is the larger house format, about ten to seventy-five. Anything past that is quoted, not promised. Children sit inside the same number. There is no separate kids’ price and no age cut-off on this page. One night uses that island’s signature band, groceries inside it. A longer stay is the Stay Chef day: the chef fee plus groceries at cost with receipts.',
      'On the Resident’s Island the count is the people in a Honolulu tower, a Kahala room, a Ko Olina villa, or a Kailua house. Request a written quote. A Villa Week count is the lawn and the house in Wailea, Kapalua, or Kāʻanapali. Quotes are open. A Garden Isle Retreat count names Princeville or Poʻipū. Rain that moves the table indoors does not invent a second number. Request availability, and name the Hanalei bridge if the house is north. An Expedition count starts on the Kona–Kohala side. Join the inquiry list. Hilo is a separate dedicated day.',
      'Open the island headcount page: [Oʻahu guest counts](oahu:/guest-counts), [Maui guest counts](maui:/guest-counts), [Kauaʻi guest counts](kauai:/guest-counts), or [Hawaiʻi Island guest counts](bigisland:/guest-counts). A dinner for two stays a normal booking on that island’s honeymoon page. Bands are on [pricing](/pricing). Send the number on [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Can the hub promise 200 guests?',
        a: 'This page cannot. Dinners are two to fifteen and receptions are about ten to seventy-five. Larger formats are quoted, not promised, on the island that has the house. Open that guest-counts page before you plan a lawn. The hub does not hold a crew for a number it has not published.',
      },
      {
        q: 'Is a dinner for two too small to book?',
        a: 'A dinner for two is a normal booking. It lives on the island honeymoon page, not as a special case and not under a smaller minimum. Send two seats with the address. Oʻahu and Maui take a written quote. Kauaʻi requests availability. Hawaiʻi Island: join the inquiry list.',
      },
      {
        q: 'Is there a statewide kids’ price on this page?',
        a: 'There is no separate published kids’ price and no age cut-off here. Children are part of the headcount on the island quote. What that does to the total is set out in the written quote. Guest ceilings stay on that island’s guest-counts page.',
      },
      {
        q: 'When does a seated dinner use the reception range already published?',
        a: 'When the house needs the larger format, about ten to seventy-five, rather than a dinner of two to fifteen. Larger than that is quoted, not promised. The island page says which range the room can hold. This page does not add a new ceiling.',
      },
      {
        q: 'How is a headcount quoted when the trip covers two islands?',
        a: 'Each island gets its own number and its own total. A Friday count on Oʻahu does not transfer to a Sunday count on Maui. Send both on [the quote form](/quote). There is no same-day crossing, and the hub does not average the two heads into one band.',
      },
      {
        q: 'What do I send with the headcount, and where is the band?',
        a: `The island, the address, and the count, before any deposit. The night uses that island’s signature band, groceries inside it, on [pricing](/pricing). Then 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows acceptance. Gratuity is never required. Desk: ${desk}.`,
      },
    ],
  },
  dietary: {
    path: '/dietary',
    h1: 'Allergy notes for a private chef in a Hawaii rental.',
    title: 'Allergy-aware private chef in Hawaii | myCHEF',
    description:
      'Gluten-free, dairy-free, nut-free, shellfish, vegan, and religious limits are written before the shop. No separate allergy price. Open the island page.',
    lede:
      'Allergies, diets, and religious limits are written on the island page before that shop. This page routes the note. It does not design the plate.',
    kicker: 'Statewide · Dietary',
    photo: 'hubDietary',
    cardLabel: 'Dietary',
    body: [
      'An allergy-aware dinner is the same seated night, with every limit written into the draft before anyone shops. Name gluten-free, dairy-free, nut-free, shellfish, vegan, pescatarian, and any religious diet with the address. A rental kitchen keeps a limit only when that kitchen can cook it. There is no separate dietary price. One night uses that island’s signature band, groceries inside the band. A multi-day cook is the Stay Chef day: the chef fee plus groceries at cost with receipts.',
      'On the Resident’s Island the list is finished before a Honolulu, Kahala, Ko Olina, or Kailua shop, and a tower freight window means the note is done before the crew comes up. Request a written quote. A Villa Week list is written before the Wailea, Kapalua, or Kāʻanapali arrival shop, not swapped on the lānai after you land. Quotes are open. A Garden Isle Retreat list names Princeville or Poʻipū with the rain plan. Request availability. A house past the Hanalei bridge still names the closure. An Expedition list starts on the Kona–Kohala side. Join the inquiry list. Hilo is a separate dedicated east-side day, with its own shop and its own note.',
      'Open the island page that writes the limits: [Oʻahu dietary notes](oahu:/dietary), [Maui dietary notes](maui:/dietary), [Kauaʻi dietary notes](kauai:/dietary), or [Hawaiʻi Island dietary notes](bigisland:/dietary). Bands are on [pricing](/pricing). Send the limits on [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Which island page writes allergies and diets into the menu?',
        a: 'The page for the house: [Oʻahu dietary notes](oahu:/dietary), [Maui dietary notes](maui:/dietary), [Kauaʻi dietary notes](kauai:/dietary), or [Hawaiʻi Island dietary notes](bigisland:/dietary). This statewide page does not design a plate. The island page says what that kitchen can keep.',
      },
      {
        q: 'Does a dietary limit change the signature band or print as its own fee?',
        a: 'It does not add a separate dietary price. One night stays on that island’s per-guest signature band, groceries inside the band, on [pricing](/pricing). Then 20% service and Hawaiʻi GET up to 4.712% each stand alone. A 50% deposit follows acceptance. Gratuity is never required.',
      },
      {
        q: 'Who takes a written quote for dietary notes, and who takes a request?',
        a: 'Oʻahu and Maui take a written quote. Kauaʻi takes a request for availability, and you name Princeville or Poʻipū with the list. Hawaiʻi Island takes an inquiry: join the inquiry list for the west side. Hilo is a separate dedicated east-side day, with its own note.',
      },
      {
        q: 'How are limits kept when the same trip eats on two islands?',
        a: 'Each island shop gets its own list. A Kahala nut note does not automatically cover a Wailea kitchen. Send both houses on [the quote form](/quote), with the limits repeated. There is no same-day crossing, and the hub does not merge the two drafts.',
      },
      {
        q: 'What should the dietary note include before the island shops?',
        a: 'The island, the address, the dates, who is eating, and every limit: gluten-free, dairy-free, nut-free, shellfish, vegan, pescatarian, or a religious diet. A rental kitchen keeps only what it can cook. The draft steps, if you need them, are that island’s menu guide.',
      },
      {
        q: 'Where do I send the list if I am still on this statewide page?',
        a: `On [the quote form](/quote), one island per note, then that island’s dietary page. Bands stay on [pricing](/pricing). Desk: ${desk}.`,
      },
    ],
  },
  honeymoonDinners: {
    path: '/honeymoon-dinners',
    h1: 'A private dinner for two in your Hawaii rental.',
    title: 'Private dinner for two in a Hawaii rental | myCHEF',
    description:
      'A private dinner for two in the rental, for a honeymoon or an anniversary. No separate honeymoon price. Oʻahu and Maui quote. Kauaʻi requests availability.',
    lede:
      'Two seats in the rental, for a honeymoon or an anniversary. Open the island where the house is. This page does not hold the date.',
    kicker: 'Statewide · Dinner for two',
    photo: 'hubHoneymoon',
    cardLabel: 'Two seats',
    body: [
      'A dinner for two is a normal booking: the chef shops, cooks, and plates in the rental for the couple, then clears that pass. It is not a reception. The course format, if you want the arc named, is that island’s romantic dinner. Do not plan the plates from here. There is no separate honeymoon price. One night uses that island’s signature band, groceries inside the band. A chef who stays the week is the Stay Chef day, the fee plus groceries at cost with receipts, not this dinner repeated.',
      'On the Resident’s Island the two seats are a Honolulu, Kahala, Ko Olina, or Kailua kitchen, and a quiet proposal is named in the note with the building rules. Request a written quote. A Villa Week dinner for two is often the Wailea, Kapalua, or Kāʻanapali arrival night. Quotes are open. A Garden Isle Retreat dinner for two names Princeville or Poʻipū, with rain cover and the Hanalei-bridge clause if the house is north. Request availability. An Expedition dinner for two starts on the Kona–Kohala side. Join the inquiry list. Hilo is a separate dedicated east-side day, not a second table after Kona.',
      'Open the island booking: [Oʻahu dinner for two](oahu:/honeymoon-dinners), [Maui dinner for two](maui:/honeymoon-dinners), [Kauaʻi dinner for two](kauai:/honeymoon-dinners), or [Hawaiʻi Island dinner for two](bigisland:/honeymoon-dinners). Bands are on [pricing](/pricing). Send the couple’s note on [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Which island page books a private dinner for two?',
        a: 'The rental’s island: [Oʻahu](oahu:/honeymoon-dinners), [Maui](maui:/honeymoon-dinners), [Kauaʻi](kauai:/honeymoon-dinners), or [Hawaiʻi Island](bigisland:/honeymoon-dinners). This page does not hold a date. The course arc, if you want it named, is that island’s romantic dinner.',
      },
      {
        q: 'Is there a separate honeymoon price for two seats?',
        a: 'There is no separate honeymoon price. One night uses that island’s per-guest signature band, groceries inside the band, on [pricing](/pricing). Then 20% service and Hawaiʻi GET up to 4.712% each stand alone. A 50% deposit follows acceptance. Gratuity is never required.',
      },
      {
        q: 'Who takes a written quote for two, and who only takes a request?',
        a: 'Oʻahu and Maui take a written quote. Kauaʻi takes a request for availability and you name the shore. Hawaiʻi Island takes an inquiry: join the inquiry list for the west side. Hilo is a separate dedicated east-side day, quoted on its own.',
      },
      {
        q: 'If friends are in the same rental, is this still the dinner-for-two page?',
        a: 'This page is the couple’s table. Extra seats belong on that island’s guest-counts page, still inside dinners of two to fifteen. They do not turn the night into a reception. Say who is actually eating when you send the note so the shop matches the chairs.',
      },
      {
        q: 'How does a honeymoon that spans two islands get quoted?',
        a: 'As two dinners. A Wailea night and a later Kailua night are two notes on [the quote form](/quote), two crews, and two totals. The hub can keep the dates in order. It cannot send one cook across the channel the same day.',
      },
      {
        q: 'What should a dinner-for-two note include before I leave this page?',
        a: `The island, the rental address, the dates, who is eating, dietary notes, and whether a proposal should stay quiet. Then use that island’s form. Desk: ${desk}.`,
      },
    ],
  },
  chefsTable: {
    path: '/chefs-table',
    h1: 'A chef’s table dinner in your Hawaii rental.',
    title: 'Chef’s table dinner at your Hawaii rental | myCHEF',
    description:
      'The chef cooks and plates at the counter in your Hawaii rental, then clears that pass. Not a restaurant seat. Open the island kitchen, then pricing.',
    lede:
      'The counter is in the rental. The chef plates there while you sit the stools. Open the island that has the kitchen.',
    kicker: 'Statewide · Chef’s table',
    photo: 'hubChefsTable',
    cardLabel: 'Chef’s table',
    body: [
      'A chef’s table in a rental is the cook at your counter, plating while you sit the stools, then a clean-down of that pass. It is not a restaurant seat and not a class. The course order, if you want it written out, is that island’s chef’s table evening. One night uses that island’s signature band, groceries inside the band. There is no separate counter price. A cook for the whole rental is the Stay Chef day: the chef fee plus groceries at cost with receipts.',
      'On the Resident’s Island the counter is a Honolulu, Kahala, Ko Olina, or Kailua kitchen, and the building rules ride with the photo. Request a written quote. A Villa Week counter is the arrival-night seat in Wailea, Kapalua, or Kāʻanapali, with the range facing the stools. Quotes are open. A Garden Isle Retreat counter names Princeville or Poʻipū, with a rain plan and the Hanalei-bridge clause when the house is north. Request availability. An Expedition counter starts on the Kona–Kohala side. Join the inquiry list. A galley with no seat is declined in the reply. Hilo is a separate dedicated east-side day.',
      'Open the island counter: [Oʻahu chef’s table](oahu:/chefs-table), [Maui chef’s table](maui:/chefs-table), [Kauaʻi chef’s table](kauai:/chefs-table), or [Hawaiʻi Island chef’s table](bigisland:/chefs-table). Bands are on [pricing](/pricing). Send the photo on [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Is the chef’s table a restaurant counter I can reserve from here?',
        a: 'The counter is in the rental, not a restaurant dining room. Open the island page for the house: [Oʻahu chef’s table](oahu:/chefs-table), [Maui chef’s table](maui:/chefs-table), [Kauaʻi chef’s table](kauai:/chefs-table), or [Hawaiʻi Island chef’s table](bigisland:/chefs-table). This page only routes the seat.',
      },
      {
        q: 'Is the chef’s table the same night as omakase at home?',
        a: 'They are different bookings. The chef’s table is the cook plating at your counter. Omakase is a chef-chosen sequence from that day’s market. The planned course arc is that island’s tasting menu. Book one of them. Do not brief both as a single note from this page.',
      },
      {
        q: 'Which islands quote a counter night, and which only take a request?',
        a: 'Oʻahu and Maui take a written quote for the counter. Kauaʻi takes a request for availability, and you name Princeville or Poʻipū. Hawaiʻi Island takes an inquiry: join the inquiry list for the Kona–Kohala side. A published page is not a held crew. Hilo is its own day.',
      },
      {
        q: 'What does the counter photo need to show before the island replies?',
        a: 'The range, the stools, and enough depth for guests to sit while the chef plates. A galley with no seat is declined on the island page. A tower should add the freight or parking rule the building already uses. The course arc, if you want it, is that island’s chef’s table evening.',
      },
      {
        q: 'Can a Friday counter on one island and a Sunday counter on another share one total?',
        a: 'They cannot. Each counter is its own note on [the quote form](/quote), with its own crew and its own total. The hub can keep the dates in order. It cannot send one cook across the channel the same day.',
      },
      {
        q: 'Where is the price for a counter night, and what do I send?',
        a: `There is no separate counter price. The night uses that island’s per-guest signature band, groceries inside it, on [pricing](/pricing). Then 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows acceptance. Gratuity is never required. Desk: ${desk}.`,
      },
    ],
  },
  kidsMenus: {
    path: '/kids-menus',
    h1: 'Children’s plates at a Hawaii private chef table.',
    title: 'Children’s plates with a Hawaii private chef | myCHEF',
    description:
      'Children’s plates are simpler food from the same menu, or an earlier hour you name. They count in the headcount. There is no separate kids’ price.',
    lede:
      'Children’s plates are planned on the island that has the house. This page does not set a kids’ price or an age cut-off.',
    kicker: 'Statewide · Kids',
    photo: 'hubKids',
    cardLabel: 'Kids’ plates',
    body: [
      'Children eat from plates written before the shop, beside the adults or earlier if you name the hour. The plates are simpler food from the same menu. High chairs stay with the household. Children count in the headcount. There is no separate published kids’ price and no age cut-off here. One family dinner uses that island’s signature band, groceries inside it. A multi-day cook is the Stay Chef day: the chef fee plus groceries at cost with receipts. Guest ceilings live on that island’s guest-counts page.',
      'On the Resident’s Island the plates are planned for a Honolulu, Kahala, Ko Olina, or Kailua table, and a tower note includes the building rules with the count. Request a written quote. A Villa Week can put children’s plates on the Wailea, Kapalua, or Kāʻanapali arrival night, before the adults sit if you name that hour. Quotes are open. A Garden Isle Retreat names Princeville or Poʻipū, and a rain plan still includes the children’s plates. Request availability. The Hanalei bridge can move a north-shore night. An Expedition plans the plates on the Kona–Kohala side. Join the inquiry list. Hilo is a separate dedicated east-side day, not a note added under a Waikoloa dinner.',
      'Open the island page: [Oʻahu children’s plates](oahu:/kids-menus), [Maui children’s plates](maui:/kids-menus), [Kauaʻi children’s plates](kauai:/kids-menus), or [Hawaiʻi Island children’s plates](bigisland:/kids-menus). Bands are on [pricing](/pricing). Send the count on [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Which island page plans children’s plates?',
        a: 'The house’s island: [Oʻahu children’s plates](oahu:/kids-menus), [Maui children’s plates](maui:/kids-menus), [Kauaʻi children’s plates](kauai:/kids-menus), or [Hawaiʻi Island children’s plates](bigisland:/kids-menus). This page does not set the hour. The island page says whether the plates are simpler food or an earlier seating you named.',
      },
      {
        q: 'Is there a statewide price for children’s plates?',
        a: 'There is no separate published kids’ price and no age cut-off here. Children are part of the headcount on the island quote. What that does to the total is set out in the written quote. Guest ceilings live on that island’s guest-counts page.',
      },
      {
        q: 'Can an earlier hour for children sit on the same quote as the adult table?',
        a: 'It can, when you name the hour in the note. The plates are written before the shop and served when you asked, not after the adult table is cleared. They stay one booking. The island page is where that hour is confirmed.',
      },
      {
        q: 'Do children’s plates transfer when the family eats on two islands?',
        a: 'They do not transfer. A Kailua plate list does not cover a later Wailea shop. Send each house on [the quote form](/quote) with adults and children in that night’s count. Two islands are two drafts. There is no same-day crossing.',
      },
      {
        q: 'Where do fee lines sit for a family dinner, and who quotes it?',
        a: 'On [pricing](/pricing): that island’s per-guest signature band, groceries inside it, then 20% service and Hawaiʻi GET up to 4.712% each alone. A 50% deposit follows acceptance. Gratuity is never required. Oʻahu and Maui take a written quote. Kauaʻi requests availability. Hawaiʻi Island uses the inquiry list.',
      },
      {
        q: 'What should a family note include before the island shops?',
        a: `The island, the address, the dates, adults and children in one count, any earlier hour, and allergies. Dietary limits are that island’s dietary page. High chairs stay with the household. Desk: ${desk}.`,
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
    h1: 'Meal prep is not sold, on any island.',
    title: 'Meal prep by island, not sold yet | myCHEF Hawaii',
    description:
      'Meal prep is not sold on any island yet. A cook in the house is Stay Chef. One dinner is on pricing. A prep price would publish on the island page.',
    lede:
      'We don’t sell weekly meal prep on any island yet. If that changes, prices will be published on the island page. This directory only routes you.',
    kicker: 'Statewide · Meal prep',
    photo: 'hubMealPrep',
    cardLabel: 'Meal prep',
    body: [
      'Open the island that has the kitchen. Each page says the same posture in its own words: weekly containers are not for sale. A cook in the house during a stay is [Stay Chef](/vacation-chef): a daily chef fee plus groceries at cost with receipts. A one-night table is that island’s signature dinner.',
      'Oʻahu and Maui take a written quote for the cook or the dinner. Kauaʻi takes a request for availability. Hawaiʻi Island takes an inquiry, west side first. Hilo is a separate dedicated east-side day, quoted in writing. There is no prep price. Bands and fee lines are on [pricing](/pricing).',
    ],
    faqs: [
      {
        q: 'Can I order weekly meal prep for every island from here?',
        a: 'No. We don’t sell weekly meal prep on any island yet. Open the page for the house: [Oʻahu meal prep](oahu:/meal-prep), [Maui meal prep](maui:/meal-prep), [Kauaʻi meal prep](kauai:/meal-prep), or [Hawaiʻi Island meal prep](bigisland:/meal-prep). If that changes, the price is published there.',
      },
      {
        q: 'What can I book instead of meal prep?',
        a: 'A cook in the house during the stay is [Stay Chef](/vacation-chef): a daily chef fee plus groceries at cost with receipts. A one-night dinner is that island’s signature band on [pricing](/pricing), groceries inside the band. Neither one is a container drop.',
      },
      {
        q: 'Which islands quote a cook in the house, and which only take a request?',
        a: 'Oʻahu and Maui take a written quote. Kauaʻi takes a request for availability. Hawaiʻi Island takes an inquiry: join the inquiry list for the west side. Hilo is a separate dedicated east-side day, quoted in writing. A published page is not a held crew.',
      },
      {
        q: 'How do I hear if weekly prep opens, and where are the fee lines?',
        a: `The island page is where a prep price would be published. We do not keep a waitlist. For a dinner now, 20% service and Hawaiʻi GET up to 4.712% print alone after the band, a 50% deposit follows acceptance, and gratuity is never required. See [pricing](/pricing). Desk: ${desk}.`,
      },
    ],
  },
  cookingClasses: {
    path: '/cooking-classes',
    h1: 'Cooking classes are not offered, on any island.',
    title: 'Cooking classes by island, not offered | myCHEF Hawaii',
    description:
      'Cooking classes are not offered on any island right now. No instructor and no schedule. Guests can watch the chef cook on that island’s chef’s table page.',
    lede:
      'We don’t run cooking classes on any island right now. There is no instructor to book from this directory. Watching the chef cook is a different page.',
    kicker: 'Statewide · Classes',
    photo: 'hubClasses',
    cardLabel: 'Classes',
    body: [
      'Open the island page. It will say there is no class, no teacher name, and no date. Guests who want to sit where the pans are use that island’s chef’s table: you watch the chef cook and plate. It is not a class and not a lesson. A cook in the house for the stay is [Stay Chef](/vacation-chef).',
      'Oʻahu and Maui take a written quote for a dinner. Kauaʻi takes a request for availability. Hawaiʻi Island takes an inquiry, west side first. Hilo is a separate dedicated east-side day, quoted in writing. There is no class price. Dinner bands and fee lines are on [pricing](/pricing).',
    ],
    faqs: [
      {
        q: 'Can I book a cooking class from this statewide page?',
        a: 'No. We don’t run cooking classes on any island right now. Open [Oʻahu classes](oahu:/cooking-classes), [Maui classes](maui:/cooking-classes), [Kauaʻi classes](kauai:/cooking-classes), or [Hawaiʻi Island classes](bigisland:/cooking-classes). None of them has a schedule or an instructor.',
      },
      {
        q: 'Where do guests watch the chef cook, if a class is not for sale?',
        a: 'On that island’s chef’s table. Guests sit the house counter and watch the chef cook and plate. It is not a class and not a lesson. Open [Oʻahu](oahu:/chefs-table), [Maui](maui:/chefs-table), [Kauaʻi](kauai:/chefs-table), or [Hawaiʻi Island](bigisland:/chefs-table).',
      },
      {
        q: 'Who quotes a dinner, and who only takes a request?',
        a: 'Oʻahu and Maui take a written quote. Kauaʻi takes a request for availability. Hawaiʻi Island takes an inquiry: join the inquiry list for the west side. Hilo is a separate dedicated east-side day, quoted in writing. A class is not one of those bookings.',
      },
      {
        q: 'How would I hear if a class opens, and where is the dinner price?',
        a: `The island page would publish a class and a price. We do not keep a class list. A dinner uses that island’s band on [pricing](/pricing), groceries inside it, then 20% service and Hawaiʻi GET up to 4.712% alone. A 50% deposit follows acceptance. Gratuity is never required. Desk: ${desk}.`,
      },
    ],
  },
  omakaseAtHome: {
    path: '/omakase-at-home',
    h1: 'Omakase at home in a Hawaii rental kitchen.',
    title: 'Omakase at home with a Hawaii private chef | myCHEF',
    description:
      'A chef-chosen sequence in the rental, often raw fish from that day’s market. We do not claim a star. No separate omakase price. Open the island page.',
    lede:
      'The chef chooses the sequence from that day’s market, often raw fish. We do not claim a star. Open the island where the kitchen is.',
    kicker: 'Statewide · Omakase',
    photo: 'hubOmakase',
    cardLabel: 'Tasting at home',
    body: [
      'Omakase at home is a chef-chosen sequence in the rental, decided from what was bought that day, often raw fish. A sequence planned ahead is that island’s tasting menu. Do not brief both as one night. A fish is named only when the receipt supports it. We do not claim a star. There is no separate omakase price. The night uses that island’s signature band, groceries inside it. A multi-day cook is the Stay Chef day: the chef fee plus groceries at cost with receipts.',
      'On the Resident’s Island the sequence is a Honolulu, Kahala, Ko Olina, or Kailua kitchen, and raw-fish limits go in with the building rules. Request a written quote. A Villa Week sequence is often the Wailea, Kapalua, or Kāʻanapali arrival night, chosen from that day’s buy. Quotes are open. A Garden Isle Retreat sequence names Princeville or Poʻipū. Request availability, and put rain cover and the Hanalei bridge in the same note if the house is north. An Expedition sequence starts on the Kona–Kohala side. Join the inquiry list. Hilo is a separate dedicated east-side day, with its own market and its own note.',
      'Open the island kitchen: [Oʻahu omakase](oahu:/omakase-at-home), [Maui omakase](maui:/omakase-at-home), [Kauaʻi omakase](kauai:/omakase-at-home), or [Hawaiʻi Island omakase](bigisland:/omakase-at-home). Bands are on [pricing](/pricing). Send raw-fish limits on [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Do you claim a star for omakase at home?',
        a: 'We do not claim a star. This is not a restaurant rating. Open the island that has the kitchen: [Oʻahu omakase](oahu:/omakase-at-home), [Maui omakase](maui:/omakase-at-home), [Kauaʻi omakase](kauai:/omakase-at-home), or [Hawaiʻi Island omakase](bigisland:/omakase-at-home).',
      },
      {
        q: 'Which page is the chef’s choice, and which is the planned arc?',
        a: 'The island omakase page is the chef’s choice from that day’s market. The planned arc is that island’s tasting menu, under fine dining. Do not brief both as one night from this page. A fish is named only when that day’s receipt supports it.',
      },
      {
        q: 'Can one guest skip raw fish without rewriting the whole sequence?',
        a: 'Put the limit in the note before the shop. That guest’s courses change. The rest of the table can keep the chef’s choice. The island page confirms what that kitchen can separate. A limit sent after the buy misses the market.',
      },
      {
        q: 'Which islands quote an omakase night, and which take a request?',
        a: 'Oʻahu and Maui take a written quote. Kauaʻi takes a request for availability and you name Princeville or Poʻipū. Hawaiʻi Island takes an inquiry. Join the inquiry list for the Kona–Kohala side. Hilo is a separate dedicated east-side day.',
      },
      {
        q: 'How are two omakase nights on two islands quoted from the hub?',
        a: 'As two notes on [the quote form](/quote). Each night uses that island’s market and that island’s band. A coordinator can order the dates. The crews do not cross the channel the same day, and the totals are not blended.',
      },
      {
        q: 'Where is the price, and what do I send for a chef-chosen night?',
        a: `There is no separate omakase price. The night uses that island’s per-guest signature band, groceries inside it, on [pricing](/pricing). Then 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows acceptance. Gratuity is never required. Desk: ${desk}.`,
      },
    ],
  },
  rehearsalDinners: {
    path: '/rehearsal-dinners',
    h1: 'A rehearsal dinner with a private chef in Hawaii.',
    title: 'Rehearsal dinner with a private chef in Hawaii | myCHEF',
    description:
      'The night before the wedding is one seated dinner in the rental, written as its own line. No separate rehearsal price. Open the island that has the house.',
    lede:
      'The night before the wedding is one seated dinner in the rental, written as its own line. Open the island that has the house.',
    kicker: 'Statewide · Rehearsal',
    photo: 'hubRehearsal',
    cardLabel: 'Rehearsal',
    body: [
      'A rehearsal dinner is the seated meal the night before, cooked in the rental, then cleared. It is not the welcome dinner, and it is not the whole wedding week. The island weddings page is that week. This page is one night, on its own line. There is no separate published rehearsal price. The night uses that island’s signature band, groceries inside the band. Other days in the house are the Stay Chef fee plus groceries at cost with receipts. The quote names the dinner date and the wedding date it sits before.',
      'On the Resident’s Island the rehearsal is a Honolulu, Kahala, Ko Olina, or Kailua house, and a tower’s building rules go in with the headcount. Request a written quote. A Villa Week rehearsal is the night before in Wailea, Kapalua, or Kāʻanapali. Quotes are open. A Garden Isle Retreat rehearsal names Princeville or Poʻipū. Request availability. Rain and the Hanalei bridge belong in the note when the house is north. An Expedition rehearsal starts on the Kona–Kohala side. Join the inquiry list. Hilo is a separate dedicated east-side day if the dinner is there.',
      'Open the island night: [Oʻahu rehearsal dinners](oahu:/rehearsal-dinners), [Maui rehearsal dinners](maui:/rehearsal-dinners), [Kauaʻi rehearsal dinners](kauai:/rehearsal-dinners), or [Hawaiʻi Island rehearsal dinners](bigisland:/rehearsal-dinners). Bands are on [pricing](/pricing). Send both dates on [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Which island page is the rehearsal dinner?',
        a: 'The rental’s island: [Oʻahu](oahu:/rehearsal-dinners), [Maui](maui:/rehearsal-dinners), [Kauaʻi](kauai:/rehearsal-dinners), or [Hawaiʻi Island](bigisland:/rehearsal-dinners). This page does not hold the date. The island weddings page is the rest of the week.',
      },
      {
        q: 'Is the rehearsal the same line as the welcome dinner?',
        a: 'It is not. The welcome is the first night of the stay. The rehearsal is the seated dinner the night before the wedding, written as its own line. Name both if you want both. Do not brief the whole week from this page.',
      },
      {
        q: 'Where do prices and fee lines live for a rehearsal dinner?',
        a: 'On [pricing](/pricing). There is no separate published rehearsal price. The night uses that island’s signature band, groceries inside it. Then 20% service and Hawaiʻi GET up to 4.712% each stand alone. A 50% deposit follows acceptance. Gratuity is never required.',
      },
      {
        q: 'Can the rehearsal be on a different island from the ceremony week?',
        a: 'It can, as its own note. A Maui ceremony week and an Oʻahu rehearsal are two totals and two crews. Send both on [the quote form](/quote). One coordinator can keep the dates in order. Nobody crosses the channel the same day.',
      },
      {
        q: 'Who takes a rehearsal quote, and who takes a request?',
        a: 'Oʻahu and Maui take a written quote. Kauaʻi takes a request for availability, and you name Princeville or Poʻipū plus rain or the Hanalei bridge when they apply. Hawaiʻi Island: join the inquiry list, Kona–Kohala first. Hilo is a separate dedicated day.',
      },
      {
        q: 'What should the rehearsal note include?',
        a: `The island, the address, the dinner date, the headcount, and the wedding date this night sits before. Dietary limits go in the same note. Desk: ${desk}.`,
      },
    ],
  },
  retreatCatering: {
    path: '/retreat-catering',
    h1: 'Full-board meals for a retreat in a Hawaii house.',
    title: 'Full-board retreat catering in a Hawaii house | myCHEF',
    description:
      'Full-board retreat food cooked in the house, as its own line for the days you name. Not a ballroom. Oʻahu and Maui quote. Kauaʻi requests availability.',
    lede:
      'Full-board food for the days the group is in the house. Not a ballroom. Open the island that has the kitchen.',
    kicker: 'Statewide · Retreat kitchens',
    photo: 'hubRetreat',
    cardLabel: 'Full-board',
    body: [
      'Retreat catering is the chef in the rental for the days you list, cooking the meals you name, then clearing that kitchen. It is food as its own line, not a ballroom. A single signature dinner is one night on the per-guest band, groceries inside the band. A full-board day is the Stay Chef day: the daily chef fee plus groceries at cost with receipts. The quote keeps those lines apart. You sign each day’s menu before that shop.',
      'On the Resident’s Island a retreat kitchen is a Kahala house or a Ko Olina villa, and the building rules go in with the meal list. Honolulu and Kailua houses use the same ask. Request a written quote. A Villa Week retreat is the days in Wailea, Kapalua, or Kāʻanapali, including the arrival night if that meal is on the list. Quotes are open. A Garden Isle Retreat names Princeville or Poʻipū for every day, with rain cover and the Hanalei-bridge clause when the house is north. Request availability. An Expedition retreat starts on the Kona–Kohala side. Join the inquiry list. Hilo is a separate dedicated east-side day, quoted on its own, not a meal added to a west-side afternoon.',
      'Open the island kitchen: [Oʻahu retreat kitchens](oahu:/retreat-catering), [Maui retreat kitchens](maui:/retreat-catering), [Kauaʻi retreat kitchens](kauai:/retreat-catering), or [Hawaiʻi Island retreat kitchens](bigisland:/retreat-catering). One coordinator can sequence two islands. Nobody crosses the channel the same day. Bands and the day rate are on [pricing](/pricing). Send the meal list on [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Which island page do I open for retreat food?',
        a: 'The island where the house is: [Oʻahu](oahu:/retreat-catering), [Maui](maui:/retreat-catering), [Kauaʻi](kauai:/retreat-catering), or [Hawaiʻi Island](bigisland:/retreat-catering). This page routes the brief. The occasion page on that island is a different door.',
      },
      {
        q: 'How does a full-board day differ from one signature dinner on the quote?',
        a: 'A signature dinner is one night on the per-guest band, groceries inside it. A full-board day is the Stay Chef fee plus groceries at cost with receipts. Both can appear, as separate lines, on [pricing](/pricing). They are not blended. Gratuity is never required.',
      },
      {
        q: 'How does the ask differ from one island to the next?',
        a: 'Oʻahu and Maui take a written quote. Kauaʻi takes a request for availability, and you name Princeville or Poʻipū plus rain or the Hanalei bridge. Hawaiʻi Island takes an inquiry: join the inquiry list, west side first. Hilo is a separate dedicated east-side day. The hub holds none of those dates.',
      },
      {
        q: 'What meals should the note list before the island shops?',
        a: 'The meals you want each day, with the house and the dates. Breakfast, lunch, and dinner are named, not assumed. Dietary limits go on that same list. The island writes the draft before the shop. A meal you add later is a new line, not a verbal extra.',
      },
      {
        q: 'Can one crew cook a retreat on two islands in the same week?',
        a: 'One crew cannot cover both. One coordinator can keep the dates in order. The cooks stay on their island. Friday’s house and Saturday’s house need two asks on [the quote form](/quote), even if one person writes both. A same-day crossing is not a booking.',
      },
      {
        q: 'Where do the day rate and the fee lines sit?',
        a: `The day rate, 20% service, Hawaiʻi GET up to 4.712%, and the 50% deposit are on [pricing](/pricing). Gratuity is never required. A signature night, if you add one, stays its own band. Desk: ${desk}.`,
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
