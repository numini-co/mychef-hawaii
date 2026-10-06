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
        a: `Starting prices are on the pricing page — CORE $225–$375 a guest on Maui.`,
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
      'Kauai booking questions: by inquiry, Princeville vs Poʻipū, Hanalei-bridge weather clause, published prices.',
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
    title: 'How an Oahu night runs — quote to empty dishwasher | myCHEF',
    description:
      'Oahu booking process: two-minute enquiry, menu in 48 hours, written quote with corridor fees, we cook and leave it clean. Honolulu to Ko Olina.',
    lede:
      'Same network process. Oahu changes the drive times — town rush, Ko Olina west, North Shore surcharge. We publish those on the quote.',
    kicker: 'How it works on Oʻahu',
    photo: 'howOahu',
    body: [
      'WhatsApp or the quote form. Island is already Oʻahu. Dates, headcount, the address so we know whether it is Kahala, a Waikīkī residence, Ko Olina, or a North Shore day.',
      'We arrive about three hours before service, shopped that day at the Honolulu fish market when the catch is the main. The dishwasher is empty when we leave.',
    ],
    steps: [
      {
        n: '01',
        title: 'Tell us the corridor.',
        body: 'Honolulu, Waikīkī, Kahala, Kailua, Ko Olina, or North Shore. Headcount and dates. Two minutes.',
      },
      {
        n: '02',
        title: 'Menu in 48 hours.',
        body: 'One or two directions around the kitchen you actually have — including compact condos. Kids and allergies designed in.',
      },
      {
        n: '03',
        title: 'Written quote.',
        body: 'Starting price, 20% service, GET up to 4.712%, North Shore surcharge if it applies — each on its own line.',
      },
      {
        n: '04',
        title: 'We cook, we leave it clean.',
        body: 'On-site before the town rush. Shop that day. Serve. Pack out. The kitchen is cleaner than we found it.',
      },
    ],
    faqs: [
      {
        q: 'How early do you arrive in town?',
        a: 'About three hours before service, scheduled around the corridor so we are not sitting in the Pali or H-1 at the wrong hour.',
      },
    ],
  },
  maui: {
    h1: 'How a Maui night runs — Wailea to West Maui logistics.',
    title: 'How a Maui chef night runs | myCHEF',
    description:
      'Maui booking process: enquiry, 48-hour menu, written quote with corridor traffic planned in, we cook and leave it clean.',
    lede:
      'South Maui and West Maui are not the same Saturday. We plan arrival into the corridor instead of discovering traffic on your invoice.',
    kicker: 'How it works on Maui',
    photo: 'howMaui',
    body: [
      'A Wailea lawn reception is a different crew than Date Night for two in Kapalua. The quote writes that difference before the deposit.',
      'Groceries at cost on Stay Chef days. CORE dinners $225–$375 a guest. Upcountry surcharge when the house sits in the mist.',
    ],
    steps: [
      {
        n: '01',
        title: 'Tell us the shore.',
        body: 'Wailea, Kīhei, Makena, Kāʻanapali, Kapalua, or an Upcountry address. Dates and headcount.',
      },
      {
        n: '02',
        title: 'Menu in 48 hours.',
        body: 'Catch-led, or a tasting direction. Sushi-forward is a menu, not a separate brand.',
      },
      {
        n: '03',
        title: 'Written quote.',
        body: 'Food, staffing, travel, 20% service, GET. West Maui traffic is planned into arrival, not added later.',
      },
      {
        n: '04',
        title: 'The night.',
        body: 'Shop that day. Arrive ~3 hours pre-service. Cook, serve, pack out. Wet-weather backup is written for lawns.',
      },
    ],
    faqs: [
      {
        q: 'Do you charge extra to go from Wailea to Kapalua?',
        a: 'Both are base zones. The cost is time — we leave earlier. Upcountry is the published surcharge.',
      },
      {
        q: 'Can the same team do welcome dinner and reception?',
        a: 'Yes as separate lines on a wedding week.',
      },
    ],
  },
  kauai: {
    h1: 'How a Kauai night runs — both shores and the bridge.',
    title: 'How a Kauai night runs — both shores and the bridge | myCHEF',
    description:
      'Kauai booking process: inquiry list, shore and dates, 48-hour menu, written quote with driving fees and a Hanalei-bridge clause when it applies.',
    lede:
      'Inquiry stage. The process is the same. The island changes the weather and the road. Far-North inherits a written clause.',
    kicker: 'How it works on Kauaʻi',
    photo: 'howKauai',
    body: [
      'Join the inquiry list with the shore — Princeville, Hanalei, Poʻipū, Kapaʻa — and the dates. We do not take a deposit on a crew that does not exist.',
      'Far-North events: 72-hour notice. Road closures reschedule rather than forfeit. South Shore kitchens get the fire; North Shore gets the covered lānai plan.',
    ],
    steps: [
      {
        n: '01',
        title: 'Name the shore.',
        body: 'North, South, or Kapaʻa. Dates and headcount. Inquiry list — not a fake instant confirm.',
      },
      {
        n: '02',
        title: 'Menu in 48 hours.',
        body: 'Ahi poke as a handshake. Wood-grilled catch when the South Shore kitchen can take fire.',
      },
      {
        n: '03',
        title: 'Written quote.',
        body: 'Starting prices $225–$375 a guest. Shore surcharge. Bridge clause in writing when the address is far-North.',
      },
      {
        n: '04',
        title: 'The night, if the road is open.',
        body: 'We cook and leave it clean. If the bridge closes, we reschedule.',
      },
    ],
    faqs: [
      {
        q: 'Is inquiry the same as booked?',
        a: 'No. Inquiry means we confirm a crew before we take the night. You still get a written quote.',
      },
      {
        q: 'Who pays if the road closes?',
        a: 'Far-North inherits reschedule-rather-than-forfeit. The clause is on the quote, not in the FAQ as a surprise.',
      },
    ],
  },
  bigisland: {
    h1: 'How a Hawaiʻi Island night runs — Kona–Kohala first.',
    title: 'How a Hawaiʻi Island night runs — Kona–Kohala first | myCHEF',
    description:
      'Big Island booking process: west-side address first, 48-hour menu, written quote, Hilo as its own day. Inquiry stage.',
    lede:
      'Tell us the west-side community. Hilo is not a same-day add-on. Ironman weeks need earlier dates.',
    kicker: 'How it works on Hawaiʻi Island',
    photo: 'howBigisland',
    body: [
      'Inquiry stage. Kailua-Kona, Keauhou, Waikoloa, Mauna Lani, the Mauna Kea resort belt — one radius. Waimea is a surcharge. East side is a different day.',
      'Coffee on the crust is coffee. Named Kona and Kaʻū lots follow Act 198 from 2027. We do not invent farm names on the menu card.',
    ],
    steps: [
      {
        n: '01',
        title: 'West-side address.',
        body: 'Kona, Waikoloa, Kohala Coast, or Waimea. Flag Ironman-week dates. Hilo and Volcano as their own request.',
      },
      {
        n: '02',
        title: 'Menu in 48 hours.',
        body: 'Kanpachi when the boat is in. Coffee-rubbed catch labeled as coffee, origin when the law requires it.',
      },
      {
        n: '03',
        title: 'Written quote.',
        body: 'Starting prices from $210 a guest on this island (ENTRY from $165). Zone fee. Dedicated east-side staffing if that is the night.',
      },
      {
        n: '04',
        title: 'Hard sun, empty dishwasher.',
        body: 'Lava-heat evenings. We shop, cook, pack out. A Kona–Hilo round trip is not on this list.',
      },
    ],
    faqs: [
      {
        q: 'Can you shop in Hilo for a Waikoloa dinner?',
        a: 'No. West-side provisioning for west-side nights. East side is its own team day.',
      },
      {
        q: 'Do you name the farm on the plate?',
        a: 'Only when we have it in writing. Act 198 from 2027 governs named Kona and Kaʻū coffee.',
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
        a: 'Both are designed; neither is a fake standing carte.',
      },
      {
        q: 'Dietary?',
        a: 'Vegan, gluten-free, allergy-aware — designed in advance. Claimed only when the kitchen can do it that night.',
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
        q: 'Kauai catering menu?',
        a: `Related search, not a PDF mill.`,
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
        a: 'Hilo and Volcano are quote-only with dedicated staffing. The sample below is the west-side dinner.',
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
