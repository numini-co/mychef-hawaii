import type { IslandId } from './islands';
import type { PhotoKey } from './photos';
import { SEARCH_VOLUMES } from './offers';
import { bigIslandSimplerDinner, signatureGuestBand, stayChefUsd } from './rateCard';

/**
 * Unique supporting documents on every island host.
 * Titles must not reuse money keywords that already live on /catering, /, /weddings.
 */

export interface IslandSupportPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
  steps?: { n: string; title: string; body: string }[];
  faqGroups?: { h2: string; faqs: { q: string; a: string }[] }[];
}

function faqPage(
  page: Omit<IslandSupportPage, 'faqs'> & {
    faqGroups: NonNullable<IslandSupportPage['faqGroups']>;
  },
): IslandSupportPage {
  return { ...page, faqs: page.faqGroups.flatMap((group) => group.faqs) };
}

export const islandFaq: Record<IslandId, IslandSupportPage> = {
  oahu: faqPage({
    h1: 'Questions before you book a private chef on Oahu.',
    title: 'Private chef questions on Oahu, answered | myCHEF',
    description:
      'Oahu answers on dates, signature dinners, Stay Chef days, condo kitchens, and where we cook from Honolulu to Ko Olina. Request a written quote.',
    lede:
      'Dates, kitchens, fee lines, and the corridor. This is the Oʻahu question list before you request a written quote.',
    kicker: 'Oʻahu FAQ',
    photo: 'faqOahu',
    body: [
      'A resident night starts with the house. Honolulu condos, Kahala dining rooms, Ko Olina villas, and Kailua weeks are different buildings, and the written quote names which one. A tower may need a freight window and a parking stall. A villa still needs a working cooktop. We do not treat a hotel suite with a minibar as a kitchen.',
      'A signature dinner and a Stay Chef day are separate bills on [pricing](/pricing). A 20% service charge and Hawaiʻi GET up to 4.712% sit on their own lines. Travel past the usual corridors is also its own line, and the amount is on that card. The neighborhood map is on [coverage](/coverage). Send the date on [the quote form](/quote) and request a written quote. How the night runs is on [how it works](/how-it-works). Allergy notes are on [dietary](/dietary).',
    ],
    faqGroups: [
      {
        h2: 'Booking and dates',
        faqs: [
          {
            q: 'How do I request a written quote for a Honolulu or Kahala date?',
            a: 'Send the date, the building, and who is eating on [the quote form](/quote), and request a written quote. A message to the front desk does not hold the night. What happens after the reply is on [how it works](/how-it-works).',
          },
          {
            q: 'Can a Ko Olina dinner and a North Shore day share one week?',
            a: 'They can, when both addresses are on the quote you accept. They are not the same drive. North Shore travel is its own line, and the amount is on [pricing](/pricing). The split between town and that shore is on [coverage](/coverage).',
          },
          {
            q: 'When should a Kailua week go on the Oahu calendar?',
            a: 'Put it on the quote when the house is held, especially December through March. A quieter weeknight can sometimes move sooner. The date is not held until you accept the written total. Request a written quote on [the quote form](/quote).',
          },
        ],
      },
      {
        h2: 'Prices and fee lines',
        faqs: [
          {
            q: 'What does an Oahu signature dinner price cover?',
            a: `A signature dinner is ${signatureGuestBand('oahu')} a guest. Grocery shopping sits inside that band. There is no separate grocery bill. Then a 20% service charge and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows once you accept. Gratuity is never required. The card is [pricing](/pricing).`,
          },
          {
            q: 'How is Stay Chef billed on Oahu?',
            a: `Stay Chef is ${stayChefUsd('oahu')} a day for the cook, plus groceries at cost with receipts. It is not a signature dinner repeated across the week. Service and tax stay on the same card, [pricing](/pricing). Request a written quote if the house wants several cook days.`,
          },
          {
            q: 'Are service and tax folded into the Honolulu guest price?',
            a: 'They are not. A 20% service charge and Hawaiʻi GET up to 4.712% follow the food as their own lines. A 50% deposit comes after you accept. Gratuity is never required. Read the lines on [pricing](/pricing) before you compare a quote with the band.',
          },
        ],
      },
      {
        h2: 'Kitchens and the house',
        faqs: [
          {
            q: 'What kitchen does a Waikīkī booking need?',
            a: 'A cooktop, a fridge, and space to plate. Most hotel suites fail that test, and a minibar is not a kitchen. Residences, Kahala houses, and Ko Olina villas are the rooms we write. Name the building on [the quote form](/quote). Tower rules are part of that written total.',
          },
          {
            q: 'Where do I list gluten-free or shellfish notes for Oahu?',
            a: 'With the address, before the shop. [Dietary](/dietary) is how those limits are written. There is no separate allergy price. The guest band on [pricing](/pricing) still applies, with service and tax on their own lines.',
          },
        ],
      },
      {
        h2: 'Where we cook',
        faqs: [
          {
            q: 'Which page shows where on Oahu you cook?',
            a: '[Coverage](/coverage) is the map. Honolulu, Kahala, Kailua, and Ko Olina are the houses we write most. A North Shore day adds a travel line. The amount is on [pricing](/pricing), not in a chat. Request a written quote and name the neighborhood.',
          },
          {
            q: 'Is a staffed party the same booking as a Kahala dinner?',
            a: 'A dinner in the house is [Private chef Honolulu](/private-chef). A staffed party is [Oahu catering](/catering). This page only answers the questions. Open the door that matches the night, then request a written quote.',
          },
        ],
      },
    ],
  }),
  maui: faqPage({
    h1: 'Questions for a Maui villa week.',
    title: 'Private chef questions on Maui, answered | myCHEF',
    description:
      'Maui answers for a villa week: arrival night, signature dinners, Stay Chef days, kitchens, and how Pāʻia travel is confirmed. Request a written quote.',
    lede:
      'Arrival night, the fee lines, the kitchen, and the shore. This is the Maui question list before you request a written quote.',
    kicker: 'Maui FAQ',
    photo: 'faqMaui',
    body: [
      'A villa week is several meals, and the evening you land is the first of them. Wailea, Kapalua, and Kāʻanapali are the houses we write most often. Saturday traffic between the south shore and West Maui changes the call time. It does not create a second invoice when both dinners are on the quote you accept.',
      'Pāʻia and Haʻikū are confirmed on the written quote with the menu. They are not stacked onto a Wailea dinner. Upcountry travel is its own line, and the figure is on [pricing](/pricing). The neighborhood map is on [coverage](/coverage). Signature dinners and Stay Chef days stay separate on that card. Request a written quote on [the quote form](/quote). The sequence of a week is on [how it works](/how-it-works). Shop limits are on [dietary](/dietary).',
    ],
    faqGroups: [
      {
        h2: 'Booking and dates',
        faqs: [
          {
            q: 'How do I request a written quote for a Wailea arrival night?',
            a: 'Name the villa, the landing evening, and who is eating on [the quote form](/quote). That arrival dinner is its own line. Quotes are open. The rest of the week’s order is on [how it works](/how-it-works).',
          },
          {
            q: 'Does mentioning Kapalua in a text hold Saturday?',
            a: 'A text that names Kapalua does not hold Saturday. The dates are held after you accept the written total for that villa. Saturday traffic between Wailea and Kapalua is planned into the call time. It is not a fee invented on the invoice. Request a written quote with the shore named.',
          },
          {
            q: 'Can one villa week list both Wailea and Kāʻanapali?',
            a: 'Both dinners can sit on one written week. Each shore keeps its own call time, and a Saturday crossing is planned before the shop. Send both addresses on [the quote form](/quote). The area notes are on [coverage](/coverage).',
          },
        ],
      },
      {
        h2: 'Prices and fee lines',
        faqs: [
          {
            q: 'What is inside a Maui signature dinner price?',
            a: `The guest price is ${signatureGuestBand('maui')}. The shop for that dinner sits inside the band. It is not billed again as groceries at cost. A 20% service charge and Hawaiʻi GET up to 4.712% follow as their own lines. Gratuity is never required. See [pricing](/pricing).`,
          },
          {
            q: 'How does a Stay Chef week bill on Maui?',
            a: `The daily chef fee starts at ${stayChefUsd('maui')}, and groceries are at cost with receipts. That is the villa-week cook, not the per-guest dinner copied across the calendar. A 50% deposit follows once you accept the written total. The card is [pricing](/pricing).`,
          },
          {
            q: 'Where do service and tax show on a two-meal Maui week?',
            a: 'After the food, on [pricing](/pricing) and on the quote. A 20% service charge and Hawaiʻi GET up to 4.712% each stand alone. They are not folded into a Wailea band or a Kapalua band. A 50% deposit holds the dates you accepted. Gratuity is never required.',
          },
        ],
      },
      {
        h2: 'Kitchens and the house',
        faqs: [
          {
            q: 'What does a Kapalua kitchen need before you shop?',
            a: 'A working cooktop, a fridge, and a table that fits the group. A resort gallery with no range is not that kitchen. Tell us which villa it is when you request a written quote. The shop follows the menu you sign. Steps are on [how it works](/how-it-works).',
          },
          {
            q: 'Where do diet notes go for a Kāʻanapali shop?',
            a: 'On the quote before that day’s buy. [Dietary](/dietary) explains how gluten-free, shellfish, and other limits are written. There is no second price for those plates. The dinner figure stays the band on [pricing](/pricing).',
          },
        ],
      },
      {
        h2: 'Where we cook',
        faqs: [
          {
            q: 'How are Pāʻia and Haʻikū confirmed?',
            a: 'On the written quote, with the menu, before any deposit. We do not stack that drive onto a Wailea dinner. The amount is on [pricing](/pricing). The rest of the shores, including Upcountry, are mapped on [coverage](/coverage).',
          },
          {
            q: 'Is a lawn party the same as a Tuesday villa dinner?',
            a: 'A villa dinner is [Personal chef Maui](/private-chef). A staffed lawn is [Maui catering](/catering). Arrival night in a house is still the dinner door. Request a written quote and say which night you mean.',
          },
        ],
      },
    ],
  }),
  kauai: faqPage({
    h1: 'Questions before you request availability on Kauai.',
    title: 'Kauai chef questions before you request a date | myCHEF',
    description:
      'Kauai answers before you request availability: both shores, the bridge, signature dinners, and Stay Chef weeks. A request is not a held crew.',
    lede:
      'Name the shore, then read the fee lines and the bridge. Request availability. This list is not a held date.',
    kicker: 'Kauaʻi FAQ',
    photo: 'faqKauai',
    body: [
      'Request availability and name the shore before anyone talks about a menu. Princeville and Hanalei sit in the north, with rain and the Hanalei bridge in the plan. Poʻipū is the south-shore kitchen, a different drive from Līhuʻe. A request is not a held crew. We write back when that shore can be staffed.',
      'A signature dinner and a Stay Chef stretch are different bills on [pricing](/pricing). A published band is not a confirmation. Travel for either shore is its own line on the written reply, and the amount is on that card. Towns are on [coverage](/coverage). Far-north houses should read [Hanalei bridge](/hanalei-bridge) before they request a date. Diet limits go on [dietary](/dietary), with the shore named. The shape of the night is on [how it works](/how-it-works).',
    ],
    faqGroups: [
      {
        h2: 'Booking and dates',
        faqs: [
          {
            q: 'How do I request availability for Princeville or Poʻipū?',
            a: 'Name the shore, the estate, the date, and who is eating on [the quote form](/quote), and request availability. That note is not a held crew. We write back if that shore can be staffed. The night’s shape is on [how it works](/how-it-works).',
          },
          {
            q: 'Does a request for a Poʻipū Saturday hold a crew?',
            a: 'A request does not hold a crew. Someone is confirmed in writing before any deposit. A 50% deposit follows that yes, not the request itself. Gratuity is never required. If the date moves later, the written change is on [managing a booking](/help/managing-booking).',
          },
          {
            q: 'Can one request name both Hanalei and Poʻipū?',
            a: 'Only when you want two nights. They are different drives from Līhuʻe, and the bridge applies past Hanalei, not on the south shore. Request availability with each address. Travel, when it applies, is a line on the reply. The amount is on [pricing](/pricing).',
          },
        ],
      },
      {
        h2: 'Prices and fee lines',
        faqs: [
          {
            q: 'What does a Kauai signature dinner include if a shore can be staffed?',
            a: `If that shore can be staffed, the guest price is ${signatureGuestBand('kauai')}, with the shop inside the band. A published band is not a held crew. A 20% service charge and Hawaiʻi GET up to 4.712% are separate lines on the reply. Read [pricing](/pricing).`,
          },
          {
            q: 'How are groceries billed on a Kauai Stay Chef stretch?',
            a: `The chef fee starts at ${stayChefUsd('kauai')} a day. Groceries are at cost with receipts on that stretch only. A signature dinner does not add a grocery bill on top of the band. Request availability, and read both models on [pricing](/pricing).`,
          },
          {
            q: 'Where do service and tax show on the Kauai reply?',
            a: 'On their own lines after the food: 20% service, then Hawaiʻi GET up to 4.712%. A 50% deposit follows a written yes. Gratuity is never required. The card is [pricing](/pricing). A request for availability does not print those lines by itself.',
          },
        ],
      },
      {
        h2: 'Kitchens and the house',
        faqs: [
          {
            q: 'What should a Princeville kitchen note include?',
            a: 'The estate address, whether dinner is on a covered lānai or indoors, and the headcount. Rain is planned before the shop, not at dusk. Request availability with that backup named. The sequence is on [how it works](/how-it-works).',
          },
          {
            q: 'Where do dietary limits go for a north-shore night?',
            a: 'In the availability request, with the shore, before any shop. [Dietary](/dietary) is the page for those limits. A south-shore kitchen is a different buy. There is no separate diet price. Bands stay on [pricing](/pricing).',
          },
        ],
      },
      {
        h2: 'Where we cook',
        faqs: [
          {
            q: 'Where do I read the shore map and the bridge clause?',
            a: 'Shores and towns are on [coverage](/coverage). Houses past the bridge should read [Hanalei bridge](/hanalei-bridge) before they request availability. A closure moves the night. It does not forfeit a deposit. Poʻipū does not inherit that clause.',
          },
          {
            q: 'Is an estate party the same request as a house dinner on Kauai?',
            a: 'A dinner in the house is [Personal chef Kauai](/private-chef). A staffed estate party is [Kauai catering](/catering). Request availability and say which one. This page does not hold the date.',
          },
        ],
      },
    ],
  }),
  bigisland: faqPage({
    h1: 'Questions for a Kona or Kohala booking.',
    title: 'Hawaii Island chef questions, west side first | myCHEF',
    description:
      'Hawaiʻi Island answers for Kona and Kohala: join the inquiry list, signature and simpler tables, Stay Chef, and a Hilo day kept separate.',
    lede:
      'West side first. Hilo is a separate dedicated day. Join the inquiry list with the address you actually need.',
    kicker: 'Hawaiʻi Island FAQ',
    photo: 'faqBigisland',
    body: [
      'Join the inquiry list with a west-side address. Kailua-Kona, Waikoloa, and the Kohala Coast are the usual day. Waimea is the cooler town above that coast and is still not the east side. Hilo and Volcano are a separate dedicated day, confirmed in writing, and never attached to a Kona dinner as a second stop.',
      'This island publishes a signature band and a simpler table. Both keep the grocery shop inside the guest price. Stay Chef is the multi-day fee plus groceries at cost with receipts. Those figures, the 20% service charge, and Hawaiʻi GET are on [pricing](/pricing). The town list is on [coverage](/coverage). An inquiry is not a held date. Send it on [the quote form](/quote). How a west-side night runs is on [how it works](/how-it-works). Food limits are on [dietary](/dietary).',
    ],
    faqGroups: [
      {
        h2: 'Booking and dates',
        faqs: [
          {
            q: 'How do I join the inquiry list for a Kona date?',
            a: 'Send the west-side address, the date, and who is eating on [the quote form](/quote), and join the inquiry list. That note is not a held crew. Hilo does not belong on the same line. The night’s order is on [how it works](/how-it-works).',
          },
          {
            q: 'Does joining the inquiry list hold a Waikoloa night?',
            a: 'Joining the inquiry list does not hold the date. The night is held after you accept the written total. A 50% deposit follows that yes. Gratuity is never required. Ironman week in Kailua-Kona is tighter, so flag those dates in the inquiry. There is no instant-booking button.',
          },
          {
            q: 'How do we flag a race week when the Kona house is already held?',
            a: 'Name the race dates and the Kona or Waikoloa address in the inquiry. Town fills that week, so send it when the villa is held. Hilo is still a separate dedicated day, not a backup driveway. Use [the quote form](/quote).',
          },
        ],
      },
      {
        h2: 'Prices and fee lines',
        faqs: [
          {
            q: 'What is in a west-side signature dinner price?',
            a: `The signature band is ${signatureGuestBand('bigisland')} a guest, and the shop sits inside it. A simpler table on this island starts from ${bigIslandSimplerDinner()} a guest, shop inside that price too. Then 20% service and Hawaiʻi GET up to 4.712% print alone. See [pricing](/pricing).`,
          },
          {
            q: 'How does Stay Chef differ from those guest prices?',
            a: `Stay Chef starts at ${stayChefUsd('bigisland')} a day. Groceries on that booking are at cost with receipts. They are not inside the day fee. A signature dinner never uses that grocery line. Join the inquiry list, and compare both on [pricing](/pricing).`,
          },
          {
            q: 'Where do service, tax, and the deposit sit on a west-side total?',
            a: 'After the food, each alone: a 20% service charge, Hawaiʻi GET up to 4.712%, then a 50% deposit once you accept. Gratuity is never required. The west-side card, including the simpler table, is on [pricing](/pricing). Joining the inquiry list does not print the total.',
          },
        ],
      },
      {
        h2: 'Kitchens and the house',
        faqs: [
          {
            q: 'What does a Kohala kitchen need before the west-side shop?',
            a: 'A cooktop, a fridge, and a place to plate out of the hard sun. Photos of that kitchen decide it. A minibar room is declined. Join the inquiry list with the villa name. The shop follows the menu you sign. Steps are on [how it works](/how-it-works).',
          },
          {
            q: 'Where do west-side diet notes go?',
            a: 'In the inquiry, before the Kona or Kohala shop. [Dietary](/dietary) is where those limits are explained. There is no extra price for them. The guest band on [pricing](/pricing) still applies. A Waimea ranch kitchen is a different buy from the coast.',
          },
        ],
      },
      {
        h2: 'Where we cook',
        faqs: [
          {
            q: 'Which towns count as the usual west-side day?',
            a: 'Kailua-Kona, Waikoloa, and the Kohala Coast. Waimea is above that belt and still not Hilo. The town pages are linked from [coverage](/coverage). Join the inquiry list with the town, not with the whole island. Travel outside the base is a line. The amount is on [pricing](/pricing).',
          },
          {
            q: 'How do I ask for a Hilo dinner?',
            a: 'Send Hilo on its own form, not as a line under a Kona note. East-side houses are confirmed in writing as their own day. Open [coverage](/coverage) for the map, and keep Waikoloa off that message. Join the inquiry list for the side the house is actually on.',
          },
        ],
      },
    ],
  }),
};

export const islandCoverage: Record<IslandId, IslandSupportPage> = {
  oahu: {
    h1: 'Where we cook on Oahu — town, villas, and the North Shore.',
    title: 'Where our private chefs cook on Oʻahu | myCHEF',
    description:
      'Honolulu, Waikīkī residences, Kahala, Kailua, and Ko Olina are the Oʻahu base. North Shore travel is its own line on the written quote.',
    lede:
      'Town and the short-stay villa belt are the base area. North Shore travel is its own line on the written quote. We schedule around the neighborhood.',
    kicker: 'Oʻahu coverage',
    photo: 'coverageOahu',
    body: [
      'Neighborhoods we cook in: Honolulu, Waikīkī, Kahala / Gold Coast, Kailua / Lanikai, Ko Olina, North Shore. Gold Coast estates and legal short-stay villas have their own pages: [Gold Coast](/gold-coast), [short-stay villas](/short-stay).',
      'Waikīkī residences with kitchens are base; most hotel suites are not a kitchen. Kahala dining rooms are estate entertaining. Ko Olina holds the deepest legal short-stay villa pool on this island. Kailua is built for multi-day packages. North Shore / Turtle Bay is 60–90+ minutes. That travel is its own line on the written quote before any deposit. The amount is on [pricing](/pricing).',
      'We do not claim every zip code. HCC citywides are closed through 2027; this department is not a MICE play.',
      'Open the town page that matches the house. [Honolulu](/honolulu) is residences in town. [Waikīkī](/waikiki) is a residence with a kitchen, not a hotel suite. [Kahala](/kahala) is an estate dining room. [Kailua](/kailua) is the windward multi-day stay. [Ko Olina](/ko-olina) is the west-side base. [North Shore](/north-shore) travel prints on the quote, never after the deposit. Building rules stay on that quote. Surf-season dates book early. Quotes are open. [Request a written quote](/quote).',
    ],
    faqs: [
      {
        q: 'Which Oʻahu neighborhoods are the base area?',
        a: 'Honolulu, Waikīkī residences with kitchens, Kahala, Kailua, and Ko Olina. A hotel suite without a cooktop is not a base kitchen. Each of those towns has its own page. The quote names the one you booked.',
      },
      {
        q: 'How does North Shore travel show before I deposit?',
        a: 'It is its own line on the written quote, before any deposit. The amount is on the pricing page. Surf-season dates book early. We do not stack a town lunch on a Turtle Bay dinner in the same chef day.',
      },
      {
        q: 'Is a Waikīkī hotel suite the same area as a residence?',
        a: 'The neighborhood can be the same and the kitchen is not. A residence with a cooktop is base. Most hotel suites are not a kitchen, and those are declined. Say which room you have when you request a written quote.',
      },
      {
        q: 'Where are the Gold Coast and Ko Olina pages?',
        a: 'Gold Coast estates are on the Gold Coast page, beside Kahala. Legal short-stay villas are on the short-stay page, and Ko Olina is the deepest pool of those villas. Both sit in the base area when the kitchen works.',
      },
      {
        q: 'What should the Oʻahu quote name besides the date?',
        a: 'The neighborhood: Honolulu, Kahala, Kailua, Ko Olina, or a North Shore day. Add the building type when the house is a tower. We do not claim every zip code. Quotes are open. Request a written quote.',
      },
    ],
  },
  maui: {
    h1: 'Where we cook on Maui — villa shores, grouped honestly.',
    title: 'Where our private chefs cook on Maui | myCHEF',
    description:
      'Maui base areas are Wailea, Makena, Kāʻanapali, and Kapalua. Upcountry and Pāʻia travel are confirmed on the written quote. Request a written quote.',
    lede:
      'Villa residences with kitchens. Travel outside the base shores is its own line on the written quote, before any deposit.',
    kicker: 'Maui coverage',
    photo: 'coverageMaui',
    body: [
      'Live neighborhood pages: [Wailea](/wailea), [Kāʻanapali](/kaanapali), [Lahaina](/lahaina), [Kīhei](/kihei), [Kapalua](/kapalua), [Makena](/makena). Corridors: [South Maui](/south-maui), [West Maui](/west-maui). We do not market Lahaina luxury dining. The Lahaina page says how we name West Maui.',
      'Wailea, Makena, Kāʻanapali, and Kapalua are the base area. Upcountry travel is its own line on the written quote. Pāʻia and Haʻikū travel is confirmed on the written quote with the menu.',
      'A South Maui Tuesday and a West Maui Saturday are not the same traffic. We plan arrival into the shore you named.',
      'Use the page that matches the driveway. [Kīhei](/kihei) is residential vacation homes. Wailea is resort residences. [Upcountry](/upcountry) is elevation, written as travel with the menu. [Pāʻia](/paia) and Haʻikū are confirmed the same way, not stacked onto a Wailea dinner. A lawn in Wailea and a Kapalua welcome are two addresses on one week, each with its own call time. We do not treat the island as a single neighborhood. The travel amount is on [pricing](/pricing). Quotes are open. [Request a written quote](/quote).',
    ],
    faqs: [
      {
        q: 'Which Maui areas are base for a villa week?',
        a: 'Wailea, Makena, Kāʻanapali, and Kapalua. Kīhei is South Maui with its own kitchen story, still in the area we cook. A villa week can use more than one of those shores when each day is written. Quotes are open.',
      },
      {
        q: 'How is Upcountry travel written?',
        a: 'It is its own line on the written quote, with the menu, before any deposit. The amount is on the pricing page. Elevation is the reason it is not treated as a Wailea driveway. Open the Upcountry page when that is the house.',
      },
      {
        q: 'How is Pāʻia or Haʻikū travel confirmed?',
        a: 'On the written quote, with the menu, before any deposit. We do not stack that drive onto a South Maui dinner. The amount is on the pricing page. Say Pāʻia or Haʻikū in the note so the line is the right one.',
      },
      {
        q: 'Are Wailea and Kīhei the same kitchen story?',
        a: 'They share South Maui and not the building. Kīhei is vacation homes and condos. Wailea is resort residences. The South Maui page separates the two. Name the one you rented.',
      },
      {
        q: 'Can one Maui week cross from Wailea to Kapalua?',
        a: 'Both days can sit on one written week. Saturday traffic on that crossing is planned into arrival, not discovered at the car. Each shore stays on the total you accept. Request a written quote with both addresses.',
      },
    ],
  },
  kauai: {
    h1: 'Where we cook on Kauai — base towns and both shores.',
    title: 'Where our private chefs cook on Kauaʻi | myCHEF',
    description:
      'Kauaʻi base areas are Līhuʻe and Kapaʻa. Both shores add a travel line on the written quote. Hāʻena keeps the 72-hour notice and bridge clause.',
    lede:
      'Base is Līhuʻe and Kapaʻa. Princeville, Hanalei, and Poʻipū add travel, shown as its own line on the written quote. The far North keeps the bridge clause.',
    kicker: 'Kauaʻi coverage',
    photo: 'coverageKauai',
    body: [
      'Live neighborhood pages: [Princeville](/princeville), [Poʻipū](/poipu), [Hanalei](/hanalei), [Kapaʻa](/kapaa). Shores: [North Shore](/north-shore), [South Shore](/south-shore).',
      'Līhuʻe and Kapaʻa are the base area. Princeville, Hanalei, and Poʻipū travel is its own line on the written quote before any deposit. Hāʻena and the far North are confirmed on the written quote with 72-hour notice and a Hanalei-bridge weather clause. Road closures reschedule rather than forfeit.',
      'Request availability with the shore and the dates. We staff the estate when a crew exists.',
      '[Līhuʻe](/lihue) is the in-town base, and [Kapaʻa](/kapaa) sits with it, so those dinners do not add a travel line. [Kōloa](/koloa) follows Poʻipū on the south. [Hāʻena](/haena) is past the bridge. Read the [Hanalei bridge](/hanalei-bridge) clause before you request a far-north date. Poʻipū is a shorter drive from Līhuʻe than the far North, and both shores still show travel on the quote. The amount is on [pricing](/pricing). [Request availability](/quote).',
    ],
    faqs: [
      {
        q: 'Which Kauaʻi towns are the base area?',
        a: 'Līhuʻe and Kapaʻa. A dinner there does not add a travel line. Princeville, Hanalei, Poʻipū, and Kōloa sit outside that base. Request availability and name the town so the quote uses the right group.',
      },
      {
        q: 'How do Princeville, Hanalei, and Poʻipū travel show?',
        a: 'As their own line on the written quote, before any deposit. The amount is on the pricing page. Poʻipū is a shorter drive than Hanalei and still outside the Līhuʻe base. The quote names the shore.',
      },
      {
        q: 'How are Hāʻena and the far North confirmed?',
        a: 'On the written quote, with the existing 72-hour notice and the Hanalei-bridge weather clause. A closure reschedules the night. It does not forfeit the deposit. Request availability. A request is not a held crew.',
      },
      {
        q: 'Why name the shore on a Kauaʻi request?',
        a: 'North and south are different drives from Līhuʻe, and the bridge applies only past Hanalei. The written reply cannot price travel, or skip it, until the shore is named. Request availability with Princeville, Poʻipū, Hanalei, or Kapaʻa.',
      },
      {
        q: 'Where is the Hanalei bridge clause written?',
        a: 'On the Hanalei bridge page, and on the written quote before any deposit when the house is past the bridge. It is 72-hour notice, and a closure reschedules rather than forfeits. South-shore houses do not inherit it.',
      },
    ],
  },
  bigisland: {
    h1: 'Where we cook on Hawaiʻi Island — west side first.',
    title: 'Where our private chefs cook on Hawaiʻi Island | myCHEF',
    description:
      'Hawaiʻi Island base is the Kona–Kohala belt. Waimea travel is a quote line. Hilo and Volcano are a dedicated day, never stacked on the west side.',
    lede:
      'Seven west-side communities in one radius. Hilo and Volcano are their own dedicated day. A same-day Kona–Hilo round trip is not a plan we sell.',
    kicker: 'Hawaiʻi Island coverage',
    photo: 'coverageBigisland',
    body: [
      'Live neighborhood pages: [Kona](/kona), [Kailua-Kona](/kailua-kona), [Waimea](/waimea), [Waikoloa](/waikoloa), [Kohala Coast](/kohala). The belt overview is [Kona–Kohala communities](/kohala-corridor).',
      'Base is the Kona–Kohala belt — Kailua-Kona, Keauhou, Kohala resorts, Waikoloa. Waimea travel is its own line on the written quote. Kaʻū and the south are extended travel with advance notice, also their own line. Hilo and Volcano are quoted in writing as their own dedicated day, never stacked on a west-side day. The drive is 2.5–3 hours.',
      'Inquiry stage. Named coffee follows Act 198 from 2027.',
      'Join the inquiry list for the west-side address. Open [Hilo](/hilo) or [Volcano](/volcano) only when that is the house, and send it as its own day. Do not attach an east-side driveway to a Waikoloa note. Waimea is cooler ranch country above the coast, still west of the saddle, and still not an east-side day. Name it on the inquiry if the house is there. Travel amounts are on [pricing](/pricing). [Join the inquiry list](/quote).',
    ],
    faqs: [
      {
        q: 'Which west-side towns are the base area?',
        a: 'Kailua-Kona, Keauhou, Waikoloa, and the Kohala Coast resort communities. They share one west-side radius. Waimea is above that belt. Join the inquiry list with the town, not with “the whole island.”',
      },
      {
        q: 'How is Waimea travel written?',
        a: 'As its own line on the written quote, before any deposit. The amount is on the pricing page. Waimea is ranch country, cooler than the coast, and it is still not Hilo. A Kona dinner does not include that drive for free.',
      },
      {
        q: 'How is a Hilo or Volcano day quoted?',
        a: 'In writing, as its own dedicated day. It is never stacked on a Kona or Waikoloa day. The drive is 2.5–3 hours. Send the east-side address on its own inquiry. Join the inquiry list for the west-side house separately.',
      },
      {
        q: 'Is Kaʻū the same day as Kona?',
        a: 'Kaʻū is extended travel with advance notice, written as its own line. It is not the Kona–Kohala base, and it is not a Hilo day. Name Kaʻū in the inquiry if that is the house. The amount is on the pricing page.',
      },
      {
        q: 'Where do I join the inquiry list for a west-side address?',
        a: 'On the quote form. Name Kona, Waikoloa, Kohala, or Waimea, plus the dates. Leave Hilo off that note. An inquiry is not a held crew. Travel, when it applies, is a line on the written reply before any deposit.',
      },
    ],
  },
};

export const islandHow: Record<IslandId, IslandSupportPage> = {
  oahu: {
    h1: 'How an Oahu night runs — from quote to empty dishwasher.',
    title: 'How an Oahu night runs, quote to cleanup | myCHEF',
    description:
      'Oʻahu nights: date, address, headcount, and dietary notes, then a written quote. Honolulu condos add freight and parking. Fee lines stay separate.',
    lede:
      'The order is the note, the written total, the deposit, the menu you sign, then the shop and a clean kitchen. A tower freight slot changes the clock. It does not change that order.',
    kicker: 'How it works on Oʻahu',
    photo: 'howOahu',
    body: [
      'Send the date, the address, the headcount, and dietary notes on [the quote form](/quote). A Honolulu or Waikīkī condo also needs the freight window, the parking stall, and the building rules when the tower requires them. Kahala houses and Ko Olina villas skip that slot and still need a cooktop.',
      'The written quote lists the food, then a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. A 50% deposit holds the date only after you accept. You sign the menu before anyone shops. The field list for a first note is on [getting started](/help/getting-started). A change after you accept is on [managing a booking](/help/managing-booking). Quotes are open. Request a written quote.',
    ],
    steps: [
      {
        n: '01',
        title: 'The building, then the note.',
        body: 'Date, address, headcount, dietary notes. Name Honolulu, Kahala, Kailua, Ko Olina, or a North Shore day. A tower adds freight and where the car parks.',
      },
      {
        n: '02',
        title: 'The written total.',
        body: 'Food first. Then a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. A North Shore day prints travel on its own line. Bands are on [pricing](/pricing).',
      },
      {
        n: '03',
        title: 'Deposit, then the menu.',
        body: 'A 50% deposit holds the date after you accept. You sign the menu in writing before the shop. Gratuity is never required.',
      },
      {
        n: '04',
        title: 'Shop, serve, clear.',
        body: 'We shop that day and arrive about three hours before service, timed around the corridor. We cook, serve, and leave the dishwasher empty.',
      },
    ],
    faqs: [
      {
        q: 'What should I send before you quote an Oʻahu night?',
        a: 'The date, the address, the headcount, and dietary notes. A Honolulu condo adds the freight window and the parking stall when the building requires them. Kahala and Ko Olina still need a cooktop. The full field list is on [getting started](/help/getting-started). Request a written quote on [the quote form](/quote).',
      },
      {
        q: 'How do freight and parking change a Honolulu condo night?',
        a: 'They are written on the quote before the shop, not discovered at the curb. The crew uses the freight window the building gives and the stall you name. A Kahala house does not use that slot. Send the building type with the address.',
      },
      {
        q: 'Where do the service charge and Hawaiʻi GET sit on an Oʻahu total?',
        a: 'They follow the food as their own lines: a 20% service charge, then Hawaiʻi GET up to 4.712%. Neither is folded into the dinner. A North Shore drive, when it applies, is also its own line. The card is on [pricing](/pricing).',
      },
      {
        q: 'When does the 50% deposit hold a Kahala or Ko Olina date?',
        a: 'It holds the date after you accept the written total, for that house and that headcount. A verbal yes does not hold the calendar. Later changes are on [managing a booking](/help/managing-booking). Gratuity is never required and is not inside the deposit.',
      },
      {
        q: 'Who signs the menu before a Honolulu shop?',
        a: 'You do, in writing, after the draft and before we buy. The draft follows a complete note. A tower freight window means that sign-off is finished before the crew comes up. We do not shop a menu you have not accepted.',
      },
      {
        q: 'What does clean-down mean after an Oʻahu dinner?',
        a: 'We clear the service, run the dishwasher, and leave the kitchen cleaner than we found it. A condo clean-down finishes inside the freight window. A Ko Olina villa finishes in the house kitchen. We do not leave a stack for the morning.',
      },
    ],
  },
  maui: {
    h1: 'How a Maui night runs — Wailea to West Maui logistics.',
    title: 'How booking a Maui private chef works | myCHEF',
    description:
      'Maui villa weeks: shore, dates, address, headcount, and dietary notes. Arrival night is its own line. Saturday West Maui traffic is planned in.',
    lede:
      'A villa week is several meals, and arrival night is the first of them. Saturday traffic between Wailea and Kapalua changes the call time. It does not change the order of the booking.',
    kicker: 'How it works on Maui',
    photo: 'howMaui',
    body: [
      'Name the shore, the dates, the villa address, the headcount, and dietary notes. An arrival-night dinner is the evening you land. Later meals in a Wailea, Kāʻanapali, or Kapalua week are separate lines on the same written total, not a second surprise invoice. The Saturday drive is planned before anyone shops.',
      'The quote lists the food, then a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. A 50% deposit holds the dates after you accept. You sign each menu before that day’s shop. First-note fields are on [getting started](/help/getting-started). A date move after that is on [managing a booking](/help/managing-booking). Quotes are open. Request a written quote on [the quote form](/quote).',
    ],
    steps: [
      {
        n: '01',
        title: 'Shore, landing, kitchen.',
        body: 'Wailea, Kīhei, Makena, Kāʻanapali, or Kapalua. Dates, address, headcount, dietary notes. Say if Saturday crosses from the south shore.',
      },
      {
        n: '02',
        title: 'One total for the week you asked.',
        body: 'Arrival night and any later villa-week meals are named. Then a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. Bands are on [pricing](/pricing).',
      },
      {
        n: '03',
        title: 'Deposit and menu sign-off.',
        body: 'A 50% deposit holds the dates after you accept. You sign the menu before that day’s shop. Gratuity is never required.',
      },
      {
        n: '04',
        title: 'Arrival, service, clean kitchen.',
        body: 'We shop that day and arrive about three hours before service, with West Maui traffic already in the plan. We cook, serve, and leave the kitchen clean. A lawn has a wet-weather backup on the quote.',
      },
    ],
    faqs: [
      {
        q: 'What is different about an arrival-night dinner in a Wailea villa?',
        a: 'It is the meal the evening you land, written as its own line, not a welcome speech. We still need the villa address, the headcount, and dietary notes before we shop. Saturday landing time belongs in that note. Request a written quote on [the quote form](/quote).',
      },
      {
        q: 'How does a villa week change the Maui booking sequence?',
        a: 'The sequence stays one written total. Arrival night and the later meals are listed on it, each with its menu sign-off before that day’s shop. A 50% deposit holds the dates after you accept. The week is not one dinner copied across the calendar.',
      },
      {
        q: 'Does Saturday traffic between Wailea and Kapalua change the quote?',
        a: 'It changes the call time, and that time is planned before the shop. Both shores are base. The cost of the crossing is time, written into arrival, not a fee discovered on the invoice. Say which way the crew is driving.',
      },
      {
        q: 'Where do service and tax sit when a Maui week has more than one meal?',
        a: 'After the food, on their own lines: a 20% service charge, then Hawaiʻi GET up to 4.712%. They are not folded into a Wailea band or a Kapalua band. Gratuity is never required. The card is on [pricing](/pricing).',
      },
      {
        q: 'When does the deposit hold a Kapalua date?',
        a: 'After you accept the written total for that villa and those dates. A verbal yes does not hold the week. Moving a night or a headcount is on [managing a booking](/help/managing-booking). The first note is on [getting started](/help/getting-started).',
      },
      {
        q: 'What has to be signed before a Kāʻanapali shop?',
        a: 'The menu for that meal, in writing. The shop follows the signed draft, not a resort brochure. A condo galley and an estate range are not given the same number of pans. We do not buy for a menu you have not accepted.',
      },
    ],
  },
  kauai: {
    h1: 'How a Kauai night runs — both shores and the bridge.',
    title: 'How a Kauai night runs on both shores | myCHEF',
    description:
      'Request availability on Kauaʻi: shore, date, address, headcount, and dietary notes. Princeville rain and the Hanalei bridge are written before the shop.',
    lede:
      'Request availability with the shore and the dates. Princeville rain and a Hanalei bridge closure change the night. They do not turn a request into a held date.',
    kicker: 'How it works on Kauaʻi',
    photo: 'howKauai',
    body: [
      'Send the shore, the date, the address, the headcount, and dietary notes, and request availability. Princeville and Hanalei need a rain plan: a covered lānai or the dining room, named before the shop. A house past the Hanalei bridge carries the 72-hour notice already on our quotes, and a closure reschedules rather than forfeits. Poʻipū is the south-shore kitchen and a different drive from Līhuʻe.',
      'The written total lists the food, then a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. A 50% deposit follows a written yes, not the request itself. You sign the menu before the shop. The first note is on [getting started](/help/getting-started). A change after you accept is on [managing a booking](/help/managing-booking).',
    ],
    steps: [
      {
        n: '01',
        title: 'Name the shore.',
        body: 'Princeville, Hanalei, Poʻipū, or Kapaʻa. Date, address, headcount, dietary notes. Request availability. A request is not a confirmation.',
      },
      {
        n: '02',
        title: 'Rain plan and the bridge.',
        body: 'North-shore houses name the indoor backup. Far-north addresses inherit the written bridge clause. Poʻipū names the south-shore arrival.',
      },
      {
        n: '03',
        title: 'The written total.',
        body: 'Food, then a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. Travel, when it applies, is quoted in writing. Bands are on [pricing](/pricing). We do not take a deposit on a crew that does not exist.',
      },
      {
        n: '04',
        title: 'Sign-off, service, clean-down.',
        body: 'You sign the menu before the shop. If the road is open we cook, serve, and leave the kitchen clean. If the bridge closes, we reschedule.',
      },
    ],
    faqs: [
      {
        q: 'How do I request availability for a Princeville night?',
        a: 'Send the shore, the date, the estate address, the headcount, and dietary notes on [the quote form](/quote), and request availability. That request is not a held date. We confirm a crew before any deposit. The field list is on [getting started](/help/getting-started).',
      },
      {
        q: 'What is the rain plan for a north-shore lānai?',
        a: 'A covered lānai or the dining room, named on the quote before the shop. Princeville mist is the usual case. Poʻipū can keep the outdoor fire when that kitchen allows it. The backup is written, not improvised at dusk.',
      },
      {
        q: 'How does Hanalei bridge timing affect the night?',
        a: 'A house past the bridge carries 72-hour notice, already on our quotes. A closure reschedules the night rather than forfeits it. The clause is on the written total. It is not a surprise after you have accepted.',
      },
      {
        q: 'Is a Poʻipū night the same sequence as Princeville?',
        a: 'The sequence is the same: request availability, written total, menu sign-off, then service if we can staff it. The drive from Līhuʻe is shorter on the south shore, and the rain plan is different. A south-shore address does not inherit the bridge clause.',
      },
      {
        q: 'When does a deposit hold a Kauaʻi date?',
        a: 'After a written yes, for the shore and the headcount on that total. The request for availability does not hold the calendar. A 50% deposit follows acceptance. Gratuity is never required. Changes after that are on [managing a booking](/help/managing-booking).',
      },
      {
        q: 'Who signs the menu before a south-shore shop?',
        a: 'You do, in writing, before we buy for that Poʻipū or Kōloa kitchen. The draft follows a complete request for availability. We do not shop a menu that is still a maybe. Service and tax lines are on [pricing](/pricing).',
      },
    ],
  },
  bigisland: {
    h1: 'How a Hawaiʻi Island night runs — Kona–Kohala first.',
    title: 'How a Hawaiʻi Island night runs, west first | myCHEF',
    description:
      'Join the inquiry list for Kona, Waikoloa, or Kohala. Date, headcount, dietary notes. Hilo is a separate dedicated east-side day, not a west-side add-on.',
    lede:
      'Join the inquiry list with a west-side address. Kona to Kohala is one day. Hilo is a separate dedicated east-side day and is never stacked onto that west-side day.',
    kicker: 'How it works on Hawaiʻi Island',
    photo: 'howBigisland',
    body: [
      'Send a Kona, Waikoloa, or Kohala address, the date, the headcount, and dietary notes, and join the inquiry list. Waimea is the upcountry ask on that same west side. Hilo and Volcano are not a stop after Waikoloa. They are a separate dedicated east-side day, quoted in writing, with their own shop.',
      'The written total lists the food, then a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. A 50% deposit follows a written yes. You sign the menu before the west-side shop. Ironman week in Kailua-Kona compresses the calendar, so flag those dates in the inquiry. The first note is on [getting started](/help/getting-started). A change after you accept is on [managing a booking](/help/managing-booking).',
    ],
    steps: [
      {
        n: '01',
        title: 'West-side address only.',
        body: 'Kailua-Kona, Keauhou, Waikoloa, the Kohala Coast, or Waimea. Date, headcount, dietary notes. Join the inquiry list. Hilo is a different request.',
      },
      {
        n: '02',
        title: 'A total for that side.',
        body: 'Food, then a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. An east-side day is its own total. Bands, including the simpler table on this island, are on [pricing](/pricing).',
      },
      {
        n: '03',
        title: 'Deposit after a written yes.',
        body: 'A 50% deposit holds the date you accepted. The inquiry itself does not. You sign the menu before the shop. Gratuity is never required.',
      },
      {
        n: '04',
        title: 'West-side shop and clean-down.',
        body: 'We provision the west side the day of service, cook, serve, and leave the dishwasher empty. A Kona-to-Hilo round trip is not on this list.',
      },
    ],
    faqs: [
      {
        q: 'What do I send to join the inquiry list for a Kona night?',
        a: 'A Kona, Waikoloa, or Kohala address, the date, the headcount, and dietary notes, on [the quote form](/quote). Join the inquiry list. That note is not a held date. The field list is on [getting started](/help/getting-started). Waimea can be named on the same west-side request.',
      },
      {
        q: 'Can Hilo be added onto a Waikoloa day?',
        a: 'Hilo is a separate dedicated east-side day, with its own shop and its own written total. It is never stacked onto a west-side day. Volcano sits with that east-side request. Join the inquiry list for the side you actually need.',
      },
      {
        q: 'Where do service and tax sit on a west-side total?',
        a: 'After the food, as their own lines: a 20% service charge, then Hawaiʻi GET up to 4.712%. They are not folded into the Kona or Kohala band. Gratuity is never required. The card, including this island’s simpler table, is on [pricing](/pricing).',
      },
      {
        q: 'When does the deposit hold a Kohala date?',
        a: 'After you accept the written total for that west-side house. Joining the inquiry list does not hold the date. A 50% deposit follows that yes. Moving the date is on [managing a booking](/help/managing-booking).',
      },
      {
        q: 'Who signs the menu before the Kona shop?',
        a: 'You do, in writing, before we provision the west side. The draft follows a complete inquiry. A Keauhou kitchen and a Waimea ranch kitchen are not the same shop. We do not buy for a menu you have not signed.',
      },
      {
        q: 'What should an Ironman-week inquiry say?',
        a: 'Flag the dates in the inquiry. Kailua-Kona compresses in that week, and the shop is narrower. We publish that pressure instead of promising the same calendar as a quiet week. Hilo is still a separate dedicated east-side day.',
      },
    ],
  },
};

export const islandMenus: Record<IslandId, IslandSupportPage> = {
  oahu: {
    h1: 'Oahu menus — designed per table, Honolulu fish market.',
    title: 'Oahu chef menus — Honolulu fish market | myCHEF',
    description:
      'Oahu villa menus are designed per table, not a standing carte. Miso-glazed catch, poke tostada, compact-condo kitchens. Sample three-course on this page.',
    lede:
      'Kahala, Ko Olina, Kailua, a Waikīkī residence with a stove — we cook in the kitchen you have. You pick the catch; we shop that day.',
    kicker: 'Oʻahu menus',
    photo: 'menusOahu',
    body: [
      'There is no laminated carte. A Gold Coast dinner for eight and a Kailua family week are different plates. Kids’ plates are planned with the adults, not an afterthought.',
      'Honolulu fish-market shopping the same day as service when the main is catch. Compact condos get a menu that fits the burners.',
    ],
    faqs: [
      {
        q: 'Can I see a PDF menu?',
        a: 'You see a sample three-course below and a designed menu in 48 hours after enquiry. We do not publish a fake standing list.',
      },
      {
        q: 'Sushi-forward on Oʻahu?',
        a: 'A menu direction we can arrange — nigiri, sashimi, hand rolls — not a separate brand or a second URL.',
      },
      {
        q: 'Honolulu catering menus with prices?',
        a: 'Related search, not a PDF mill. Both show a sample and a starting band. Your designed menu arrives after enquiry.',
      },
      {
        q: 'Is an Oahu menu written for the house?',
        a: 'A Kahala dining room, a Ko Olina villa, and a Kailua family kitchen do not share a carte. We look at the burners, the fridge, and who is sitting down, then write that night. The Honolulu fish market sets the main the morning we cook.',
      },
      {
        q: 'What is on the Oahu sample three-course?',
        a: 'The sample on this page opens with a poke tostada, moves to miso-glazed catch with bok choy and rice, and closes with a light dessert. It shows the length of a resident dinner. Your own draft can change the fish or lean sushi-forward if that is the direction you asked for.',
      },
      {
        q: 'Can a Honolulu kitchen handle dietary needs?',
        a: 'Vegan, gluten-free, and allergy notes are written in before the fish-market run. We only stand behind a restriction that kitchen can keep. A two-burner condo gets a shorter menu, not a promise that a missing oven will turn up.',
      },
      {
        q: 'Which Oahu towns do these menus cover?',
        a: 'Honolulu houses, Kahala and the Gold Coast, Ko Olina villas, Kailua, and a Waikīkī residence with a working stove. North Shore and Turtle Bay add a longer drive and a published travel line. A hotel room without a cooktop is not a menu we will draft.',
      },
      {
        q: 'How is the food bought, and how much notice does an Oahu menu need?',
        a: 'On a private dinner the shopping sits inside $195–$290 a guest, bought the day we cook. A staffed party of about ten to seventy-five is a different menu — matching plates, same $195–$290 food range — with staffing, a 20% service charge, and GET up to 4.712% written apart from the food. Send the date when the house is held; December through March needs weeks. The designed menu comes back within 48 hours of the enquiry. A multi-day Stay Chef, from $1,250 a day, is the only booking that bills groceries at cost with receipts.',
      },
    ],
  },
  maui: {
    h1: 'Maui menus — Wailea and Kapalua kitchens, not a carte.',
    title: 'Maui chef menus — Wailea to Kapalua | myCHEF',
    description:
      'Maui menus designed per table for Wailea, Kapalua, and Kāʻanapali. Not a standing carte. Quotes are open, and groceries sit inside the dinner band.',
    lede:
      'Built for a Wailea or Kapalua kitchen. You pick the catch; we shop that day. Sushi-forward is a direction, not a separate brand.',
    kicker: 'Maui menus',
    photo: 'menusMaui',
    body: [
      'Ahi poke, inamona, ogo, lime — the table goes quiet. Macadamia-crusted fresh catch with whatever ran that morning — mahi, ono, or opakapaka.',
      'Lawn receptions get identical event plates, not a dinner tasting stretched to seventy-five.',
    ],
    faqs: [
      {
        q: 'Is there a Maui catering menu PDF?',
        a: 'No standing PDF. You see a sample three-course on this page, and a menu written for your house and guest count after you send the dates. Private dinners and catered events are both designed per table, never copied from a fixed list.',
      },
      {
        q: 'Do you cook a Hawaiian catering menu on Maui?',
        a: 'Yes. Island flavours lead: ahi poke with inamona and ogo, macadamia-crusted fresh catch (mahi, ono or opakapaka, whatever ran that morning), and local fruit at dessert. For a staffed event of about 10–75 guests, the Maui catering page sets out buffet, plated and family-style formats from $225 a guest.',
      },
      {
        q: 'Private chef dinner or catering menu — which one fits?',
        a: 'A villa dinner for a small group is a private chef menu: courses plated in your kitchen. A reception, reunion or wedding-week party of roughly ten to seventy-five is a catering menu, with identical event plates and a staffed service line.',
      },
      {
        q: 'Where on Maui do these menus run?',
        a: 'Wailea, Kīhei, Kāʻanapali, Kapalua and West Maui villas. Tell us the kitchen you have, and the menu is written to fit its burners, oven and lānai.',
      },
      {
        q: 'Dietary?',
        a: 'Vegan, gluten-free, allergy-aware — designed in advance. Claimed only when the kitchen can do it that night.',
      },
      {
        q: 'What does the Maui sample three-course show?',
        a: 'Three beats for a villa week: a cold first plate, a catch main that waits on that morning boat, and a fruit-led dessert. It is on this page so you can see how long the night runs. The menu we actually cook is drafted after you name the kitchen — a Wailea resort range and a Kīhei condo galley are not given the same number of pans.',
      },
      {
        q: 'How is food shopped for a Maui villa menu?',
        a: 'A private dinner includes the groceries inside $225–$375 a guest. We shop the day of service, and that shop does not return as a second invoice. A reception menu uses the same guest range for the food, then lists staff, a 20% service charge, and GET up to 4.712% on their own. Groceries at cost, with the store receipts, happen only on Stay Chef, from $1,550 a day, when the chef stays for the villa week.',
      },
      {
        q: 'How far ahead should a Wailea, Kāʻanapali, Kapalua, or Kīhei menu be requested?',
        a: 'Request it when the villa is on hold. December through March, and wedding weeks in September, October, and May, need weeks because those houses go first. A quieter weeknight can sometimes move sooner. Once dates, headcount, and the kitchen are in, the designed menu is back within 48 hours for you to edit.',
      },
    ],
  },
  kauai: {
    h1: 'Kauai menus — North Shore handshake, South Shore fire.',
    title: 'Kauai chef menus — North & South Shore | myCHEF',
    description:
      'Kauai estate menus designed per table: ahi poke, wood-grilled catch. North Shore covered lānai plan; South Shore fire. Inquiry stage.',
    lede:
      'Princeville mist or Poʻipū sun — same kitchen standard, published starting prices. The plate changes with the shore.',
    kicker: 'Kauaʻi menus',
    photo: 'menusKauai',
    body: [
      'Ahi poke, kukui, sweet onion — the North Shore handshake. Wood-grilled catch, mango salsa, coconut rice when the South Shore kitchen can take fire.',
      'Inquiry stage. Menu/IP is designed per table. We do not publish a fake standing carte to look launched.',
    ],
    faqs: [
      {
        q: 'Do North and South eat the same menu?',
        a: 'Same standard, different fire and weather plan. The designed menu says which shore.',
      },
      {
        q: 'Is there a Kauai catering menu?',
        a: 'There is no standing PDF. Catered estate events of about 10–75 guests get a menu written for that house, buffet or plated, with food from $225–$375 a guest. Staffing, the 20% service charge and GET are separate lines on the quote.',
      },
      {
        q: 'What does a Kauai private chef menu look like?',
        a: 'Ahi poke with kukui and sweet onion on the North Shore; wood-grilled catch with mango salsa and coconut rice when a South Shore kitchen can take fire. The sample three-course on this page shows the shape; your own menu follows your dates and guests.',
      },
      {
        q: 'Can the menu handle dietary needs?',
        a: 'Yes — vegan, gluten-free and allergy-aware menus are designed in advance, and we only promise what the kitchen can deliver that night.',
      },
      {
        q: 'Which towns do you cook in on Kauai?',
        a: 'Princeville, Hanalei, Poʻipū and Kapaʻa. Līhuʻe and Kapaʻa are base zone; Princeville, Hanalei and Poʻipū carry a published travel line.',
      },
      {
        q: 'Is a Kauai menu written for that house?',
        a: 'Yes, at inquiry, for one shore and one kitchen. A Princeville estate under a covered lānai and a Poʻipū house that can hold a grill are planned as different fires, and Hanalei adds the bridge. We do not pass over a standing list and pretend the island is a printed carte.',
      },
      {
        q: 'How does food shopping work for a Princeville or Poipu menu?',
        a: 'Shopping for a private dinner is inside $225–$375 a guest. We buy the day of service, on the shore where the house sits, and there is no second grocery bill. A retreat week is the exception: Stay Chef from $1,650 a day, groceries at cost, original receipts attached. That week is not priced as one dinner repeated.',
      },
      {
        q: 'How much notice does a Kauai menu need?',
        a: 'Send it when the rental is held. Kauaʻi is by inquiry, so December through March and the September, October, and May peaks should arrive early enough for us to staff North Shore or South Shore. Houses past Hanalei also carry a 72-hour weather window. The menu draft itself returns within 48 hours of a complete note — dates, guest count, and Princeville, Hanalei, or Poʻipū.',
      },
    ],
  },
  bigisland: {
    h1: 'Hawaiʻi Island menus — kanpachi and coffee crust, origin-honest.',
    title: 'Big Island chef menus — kanpachi, Kona coffee | myCHEF',
    description:
      'Kona–Kohala menus designed per table: kanpachi crudo, coffee-rubbed catch labeled honestly. Named farms only in writing. Inquiry stage.',
    lede:
      'West-side villas first. Named farms only when we have them in writing — the plate still sings.',
    kicker: 'Hawaiʻi Island menus',
    photo: 'menusBigisland',
    body: [
      'Kanpachi crudo, citrus, chili oil — or ahi poke when the boat is in. Coffee-rubbed catch or ranch steak with Hāmākua mushrooms. Coffee on the crust is coffee; origin labeled when Act 198 requires it.',
      'We do not invent farm names to decorate a tasting.',
    ],
    faqs: [
      {
        q: 'Is this a Kona coffee dinner?',
        a: 'Coffee may be on the crust. Named Kona or Kaʻū lots follow the origin law. We will not print a farm we cannot document.',
      },
      {
        q: 'East-side menu?',
        a: 'Hilo and Volcano are a separate dedicated east-side day, quoted in writing; the sample below is the west-side dinner.',
      },
      {
        q: 'Is a Big Island menu written for the house?',
        a: 'Yes, and only after we know which side the house is on. A Keauhou villa and a Kohala Coast residence can share a west-side shop. A Waimea ranch kitchen changes the produce. Hilo is not a third stop on that draft — it is its own day. This is inquiry, not a live calendar.',
      },
      {
        q: 'What does the Big Island sample three-course show?',
        a: 'A west-side dinner in three moves: kanpachi crudo with citrus and chili to start, coffee-rubbed catch or ranch steak beside Hāmākua mushrooms, then a short dessert. It shows length and ingredients. The draft waits on the boat that morning and on whether the kitchen is in Kona, Waikoloa, or up in Waimea.',
      },
      {
        q: 'Can dietary needs be designed into a west-side menu?',
        a: 'They can, when they arrive with the inquiry. Gluten-free, vegan, and allergy plates are set before the west-side shop, not swapped at the pass. If the morning fish or the Waimea produce cannot meet the note, the draft changes before the drive. We will not promise a restriction a Kohala kitchen cannot keep.',
      },
      {
        q: 'Which towns do Big Island menus cover?',
        a: 'Kailua-Kona, Keauhou, Waikoloa, Mauna Lani, and the Kohala Coast are the usual west-side dinners. Waimea is in range with its own travel line, and produce from that side of the saddle often lands on the plate. Hilo and Volcano get a dedicated day and their own menu plan.',
      },
      {
        q: 'Is a private dinner menu the same as a catering menu on the Big Island?',
        a: 'No. A private dinner is courses for the people in the house, usually $210–$325 a guest, or a simpler table from $165. A catering menu is matching plates for a staffed gathering of about ten to seventy-five, with the service line written separately. Say which night it is and the draft follows, at inquiry.',
      },
      {
        q: 'How does Big Island food shopping work, and how much notice is required?',
        a: 'On a one-night dinner the shopping is inside the guest price, from $165 on a simpler table or inside $210–$325 for most villa dinners. We provision the west side the day of service. Stay Chef, from $1,450 a day, is the stretch that bills groceries at cost and keeps the receipts. Send dates when the villa is held, especially December through March and Ironman week. The written menu returns within 48 hours. Hilo still needs its own day on the calendar.',
      },
    ],
  },
};

const SUPPORT_BY_PATH = {
  '/faq': islandFaq,
  '/coverage': islandCoverage,
  '/how-it-works': islandHow,
  '/menus': islandMenus,
} as const;

export type SupportPath = keyof typeof SUPPORT_BY_PATH;

export function getIslandSupport(island: IslandId, path: string): IslandSupportPage | undefined {
  const clean = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
  const table = SUPPORT_BY_PATH[clean as SupportPath];
  return table?.[island];
}

export const SUPPORT_PATHS = ['/faq', '/coverage', '/how-it-works', '/menus'] as const;
