import type { IslandId } from './islands';
import type { PhotoKey } from './photos';
import { SEARCH_VOLUMES } from './offers';

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
}

export const islandFaq: Record<IslandId, IslandSupportPage> = {
  oahu: {
    h1: 'Oahu questions — kitchens, corridors, what we will not claim.',
    title: 'Oahu FAQ — kitchens, corridors, what we publish | myCHEF',
    description:
      'Oahu booking questions: hotel kitchens vs residences, North Shore surcharge, published prices, reviews.',
    lede:
      'This page answers the booking. We do not invent guest reviews.',
    kicker: 'Oʻahu FAQ',
    photo: 'faqOahu',
    body: [
      'Waikīkī hotel suites often lack a kitchen. Residences with a real stove are the product. Kahala dining rooms, Ko Olina villas, Kailua weeks, and a North Shore surcharge day are not the same drive; the quote says which.',
    ],
    faqs: [
      {
        q: 'Is this the Oahu catering page?',
        a: `No.`,
      },
      {
        q: 'Do you cook in a Waikīkī hotel room?',
        a: 'If there is a kitchen we can work. Most hotel suites do not have one. Residences, Kahala houses, and Ko Olina villas are the usual rooms. Tell us the address.',
      },
      {
        q: 'Is the North Shore extra?',
        a: 'Yes. Turtle Bay and the North Shore are a published surcharge — 60–90+ minutes from town. Surf-season dates book early.',
      },
      {
        q: 'Are groceries included?',
        a: 'Two models, and we never blend them. On a Signature or per-guest dinner, food and grocery procurement sit inside the published per-guest band — there is no separate “+ groceries” line. On a Stay Chef, multi-day or weekly-cook booking, it is the chef fee plus groceries at cost, with original merchant receipts and zero markup. The rate card is the pricing page; the fee stack is on the private chef cost page.',
      },
      {
        q: 'Do you have Oʻahu guest reviews?',
        a: 'Not yet. We will not invent them. Reviews publish after verified events. Proof today is published starting prices and a written quote.',
      },
      {
        q: 'Wedding catering or a dinner?',
        a: `A Tuesday dinner in Kahala is the private chef page or the in-villa dinner page. Pick the door that matches the night.`,
      },
    ],
  },
  maui: {
    h1: 'Maui questions — villa kitchens, West Maui naming, prices.',
    title: 'Maui FAQ — villa kitchens, West Maui naming, prices | myCHEF',
    description:
      'Maui booking questions: catering vs dinner, how we name Lahaina, Upcountry surcharge, published prices.',
    lede:
      'Answers about Maui catering, private chef dinners, how we name West Maui, the Upcountry surcharge and published prices.',
    kicker: 'Maui FAQ',
    photo: 'faqMaui',
    body: [
      'We cook West Maui residences with kitchens — Kāʻanapali, Nāpili, Kapalua. We do not market a Lahaina luxury-dining brand.',
      'Upcountry is a published surcharge. Pāʻia and Haiku are quote-only with the menu. Wailea, Makena, and Kīhei are base-zone South Maui — three logistics stories, one team.',
    ],
    faqs: [
      {
        q: 'Do you do Lahaina luxury dining?',
        a: 'No. We cook West Maui houses: Kāʻanapali, Nāpili, Kapalua. Tell us the address.',
      },
      {
        q: 'What does a night cost?',
        a: `Starting prices are on the pricing page — signature dinners $225–$375 a guest on Maui.`,
      },
      {
        q: 'Are groceries included?',
        a: 'Two models, never conflated. A Signature or per-guest dinner keeps food and grocery procurement inside the published band — no separate “+ groceries” line. A Stay Chef, multi-day or weekly-cook villa week is the chef fee plus groceries at cost, with original merchant receipts and zero markup.',
      },
      {
        q: 'Do you have Maui guest reviews?',
        a: 'Not yet — and we will not invent them. Reviews publish only after verified events, never bought or written in-house. What we can prove now is published starting prices from $225 a guest, sample menus, and a written quote.',
      },
      {
        q: 'Wedding week vs a Tuesday dinner?',
        a: `Welcome, rehearsal, reception, and recovery brunch are separate lines on the wedding week page.`,
      },
    ],
  },
  kauai: {
    h1: 'Kauai questions — both shores, inquiry, the bridge.',
    title: 'Kauai FAQ — both shores, inquiry, the bridge | myCHEF',
    description:
      'Kauai booking questions: by inquiry, Princeville vs Poʻipū, Hanalei-bridge clause, published prices.',
    lede:
      'Both shores. Inquiry stage. The bridge and the weather are real. We staff the estate when a crew exists — we do not dress a waitlist as live.',
    kicker: 'Kauaʻi FAQ',
    photo: 'faqKauai',
    body: [
      `This FAQ holds the logistics.`,
      'Princeville and Hanalei inherit weather and the Hanalei-bridge clause — 72-hour notice, reschedule rather than forfeit. Poʻipū is a shorter drive from Līhuʻe.',
      'Estate formats to about 75 guests.',
    ],
    faqs: [
      {
        q: 'Can I book a date now?',
        a: 'Yes — join the inquiry list with the shore and the dates. This is not a waitlist island dressed up as live.',
      },
      {
        q: 'North Shore or South Shore?',
        a: 'Princeville and Hanalei are the North. Poʻipū and Kōloa are the South. Far-North events inherit the bridge clause.',
      },
      {
        q: 'Is this Kauai catering?',
        a: `No.`,
      },
      {
        q: 'Are groceries included?',
        a: 'Two models, kept separate even at inquiry. A Signature or per-guest dinner has food and grocery procurement inside the published band — no separate “+ groceries” line. A Stay Chef, multi-day or weekly-cook booking is the chef fee plus groceries at cost, with original merchant receipts and zero markup. The card is the pricing page; the stack is on the private chef cost page.',
      },
      {
        q: 'Do you have Kauaʻi guest reviews?',
        a: 'Not yet. We will not invent them. Proof is published starting prices from $225 a guest and a written quote.',
      },
    ],
  },
  bigisland: {
    h1: 'Hawaiʻi Island questions — west side first, Hilo honesty.',
    title: 'Hawaiʻi Island FAQ — west side first, Hilo honesty | myCHEF',
    description:
      'Big Island booking questions: Kona–Kohala first, Hilo quote-only, Ironman-week calendar, coffee origin labeling.',
    lede:
      'The island is 4,000 square miles. We cook the Kona–Kohala corridor first. Hilo is a different day. We publish that instead of overselling.',
    kicker: 'Hawaiʻi Island FAQ',
    photo: 'faqBigisland',
    body: [
      ` This FAQ is the map.`,
      'Seven resort communities sit inside a 30-minute west-side radius. East side — Hilo and Volcano — is 2.5–3 hours and quote-only with dedicated staffing.',
      'Event weeks in Kailua-Kona compress availability. Named Kona and Kaʻū coffee follow Act 198 from 2027; we do not invent farm names.',
    ],
    faqs: [
      {
        q: 'Do you cover the whole island?',
        a: 'No. West side first: Kona, Waikoloa, the Kohala Coast, Waimea as a surcharge. Hilo and Volcano are quote-only.',
      },
      {
        q: 'Same as Big Island catering?',
        a: `No.`,
      },
      {
        q: 'Can you do Hilo from Kona in one day?',
        a: 'No. East side is 2.5–3 hours. Dedicated staffing, quoted honestly — never squeezed into a west-side day.',
      },
      {
        q: 'Are groceries included?',
        a: 'Two models, never blended. A Signature or per-guest dinner keeps food and grocery procurement inside the published band — no separate “+ groceries” line. A Stay Chef, multi-day or weekly-cook west-side booking is the chef fee plus groceries at cost, with original merchant receipts and zero markup.',
      },
      {
        q: 'Do you have Hawaiʻi Island guest reviews?',
        a: 'Not yet — and we will not invent them. On the west side, booking by inquiry means proof is published starting prices from $225 a guest, sample menus, and a written quote — not a five-star page.',
      },
      {
        q: 'Ironman week — are you available?',
        a: 'Flag those dates early. Town compresses. We publish the calendar pressure instead of overselling.',
      },
    ],
  },
};

export const islandCoverage: Record<IslandId, IslandSupportPage> = {
  oahu: {
    h1: 'Where we cook on Oahu — published corridors, not statewide fiction.',
    title: 'Where we cook on Oahu — published corridors | myCHEF',
    description:
      'Oahu service map: Waikīkī, Kahala, Ko Olina, Kailua base zones; North Shore surcharge. Drive times on the quote. Not a statewide claim.',
    lede:
      'Five corridors. Town and the short-stay villa belt are base. The North Shore is a surcharge. We schedule around the corridor — on-site before the rush.',
    kicker: 'Oʻahu coverage',
    photo: 'coverageOahu',
    body: [
      'Neighborhoods we cook in: Honolulu, Waikīkī, Kahala / Gold Coast, Kailua / Lanikai, Ko Olina, North Shore. Gold Coast estates and legal short-stay villas have their own pages: Gold Coast, Short-stay villas.',
      'Waikīkī residences with kitchens are base; most hotel suites are not a kitchen. Kahala dining rooms are estate entertaining. Ko Olina holds the deepest legal short-stay villa pool on this island. Kailua is built for multi-day packages. North Shore / Turtle Bay is 60–90+ minutes — published surcharge.',
      'We do not claim every zip code. HCC citywides are closed through 2027; this department is not a MICE play.',
    ],
    faqs: [
      {
        q: 'Is Honolulu a different department?',
        a: 'No. Honolulu residences are the Honolulu page on this site. Private chef Honolulu is a search phrase, not a second company.',
      },
      {
        q: 'Do you drive to the North Shore for one dinner?',
        a: 'Yes, as a surcharge day. Surf-season dates book early. The fee is on the quote, not discovered on the invoice.',
      },
      {
        q: 'Private chef near me?',
        a: 'On Oahu, near you means the neighborhoods we cover: Honolulu, Kahala, Waikīkī residences, Kailua, Ko Olina, and a North Shore surcharge. We do not claim every zip.',
      },
    ],
  },
  maui: {
    h1: 'Where we cook on Maui — five areas, honestly zoned.',
    title: 'Where we cook on Maui — published zones | myCHEF',
    description:
      'Maui service map: Wailea, Kāʻanapali, Kapalua, Makena base; Upcountry surcharge; Pāʻia quote-only. South and West corridors named.',
    lede:
      'Hotel-zoned residences with kitchens. Travel fees are published with your quote — never discovered on the invoice.',
    kicker: 'Maui coverage',
    photo: 'coverageMaui',
    body: [
      'Live neighborhood URLs: Wailea, Kāʻanapali, Lahaina / West Maui, Kīhei, Kapalua, Makena. Areas: South Maui, West Maui. We do not market Lahaina luxury dining; the Lahaina / West Maui page says how we name West Maui.',
      'Wailea, Makena, Kāʻanapali, Kapalua are base. Upcountry is elevation and drive time — published surcharge. Pāʻia / Haiku is quote-only with the menu.',
      'A South Maui Tuesday and a West Maui Saturday are not the same traffic. We plan arrival into the corridor.',
    ],
    faqs: [
      {
        q: 'Is Kīhei the same as Wailea?',
        a: 'Same South Maui team, different logistics. Kīhei is residential vacation homes. Wailea is resort residences.',
      },
      {
        q: 'Do you cover Hana?',
        a: 'Not as a same-day add-on. Far East Maui is quoted only if we can staff it honestly. This map is the west and south we actually cook.',
      },
    ],
  },
  kauai: {
    h1: 'Where we cook on Kauai — we publish the driving fees.',
    title: 'Where we cook on Kauai — published driving fees | myCHEF',
    description:
      'Kauai service map: Līhuʻe and Kapaʻa base; Princeville, Hanalei and Poʻipū surcharge; Hāʻena quote-only with a Hanalei-bridge clause.',
    lede:
      'The driving fee is the ad. Base is Līhuʻe and Kapaʻa. Both shores are a published surcharge. Far-North inherits weather.',
    kicker: 'Kauaʻi coverage',
    photo: 'coverageKauai',
    body: [
      'Live neighborhood URLs: Princeville, Poʻipū, Hanalei, Kapaʻa. Shores: North Shore, South Shore.',
      'Līhuʻe and Kapaʻa are included. Princeville, Hanalei, and Poʻipū carry a published surcharge. Hāʻena and the far North are quote-only with 72-hour notice — road closures reschedule rather than forfeit.',
      'Inquiry stage. We staff the estate when a crew exists. We will not pretend a flat $50 driving fee covers the island.',
    ],
    faqs: [
      {
        q: 'Why is Poʻipū a surcharge if it is closer than Hanalei?',
        a: 'Both shores sit outside the Līhuʻe–Kapaʻa base. Poʻipū is still a shorter drive than the North. The quote names the shore.',
      },
      {
        q: 'What if the bridge closes?',
        a: 'Far-North events inherit a written clause: 72-hour notice, reschedule rather than forfeit.',
      },
    ],
  },
  bigisland: {
    h1: 'Where we cook on Hawaiʻi Island — west-side first.',
    title: 'Where we cook on Hawaiʻi Island — west-side first | myCHEF',
    description:
      'Big Island service map: Kona–Kohala base, Waimea surcharge, Kaʻū extended surcharge, Hilo quote-only. We will not pretend to cover 4,000 square miles.',
    lede:
      'Seven west-side communities in one radius. A same-day Kona–Hilo round trip is a logistics fantasy. We publish that.',
    kicker: 'Hawaiʻi Island coverage',
    photo: 'coverageBigisland',
    body: [
      'Live neighborhood URLs: Kailua-Kona / Keauhou, Waimea, Waikoloa, Kohala Coast.',
      'Base is the Kona–Kohala corridor — Kailua-Kona, Keauhou, Kohala resorts, Waikoloa. Waimea / Hāmākua is a surcharge. Kaʻū / South is an extended surcharge with advance notice. Hilo / Volcano is 2.5–3 hours — dedicated staffing, never a west-side round trip.',
      'Inquiry stage. Named coffee follows Act 198 from 2027.',
    ],
    faqs: [
      {
        q: 'Is Waimea oceanfront?',
        a: 'No. Waimea is ranch country in the mist. The ocean dinner is Kona and Kohala.',
      },
      {
        q: 'Can you add Volcano onto a Waikoloa wedding?',
        a: 'Not as a same-day errand. East side is its own team day.',
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
      'Maui villa menus designed per table: ahi poke, macadamia-crusted catch, tasting plates. Not a laminated standing list.',
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
