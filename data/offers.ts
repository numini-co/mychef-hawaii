import type { IslandId } from './islands';
import { getTiers } from './rateCard';
import type { PhotoKey } from './photos';

/** DataForSEO Google Ads US — 4 Sep 2026 (`npm run seo:snapshot`). Do not invent volumes. */
export const SEARCH_VOLUMES = {
  'oahu catering': 720,
  'maui catering': 480,
  'private chef maui': 260,
  'private chef kauai': 210,
  'kauai catering': 210,
  'hawaii catering': 210,
  'wedding catering oahu': 140,
  'private chef oahu': 90,
  'private chef honolulu': 70,
  'private chef big island': 70,
  'private chef kona': 70,
  'private chef hawaii': 50,
  'big island catering': 50,
  'personal chef honolulu': 40,
  'wedding catering maui': 30,
  'wedding catering hawaii': 30,
  'personal chef maui': 20,
  'personal chef oahu': 20,
  'mobile bar hawaii': 20,
  'private chef lahaina maui': 10,
  'private chef north shore oahu': 10,
  'private chef poipu kauai': 10,
  'private chef maui cost': 10,
  'kauai wedding catering': 10,
} as const;

/** Related searches (DataForSEO Labs, 4 Sep 2026). Fold into titles/H1s/FAQs — do not invent volumes. */
export const RELATED_SEARCHES = {
  hawaii: [
    'oahu catering',
    'private chef oahu',
    'private chef honolulu',
    'maui private chefs',
    'private chef big island hawaii',
  ],
  oahu: [
    'oahu catering',
    'wedding catering oahu',
    'best catering oahu',
    'private chef honolulu',
    'hire a chef for a party',
    'private chef at home',
  ],
  maui: [
    'private chef lahaina maui',
    'private chef maui cost',
    'elite maui chef',
    'lotus chefs maui',
  ],
  kauai: [
    'kauai catering',
    'private chef poipu kauai',
    'kauai wedding catering',
    'kauai catering menu',
    'private chef princeville kauai',
    'south shore chef kauai',
  ],
} as const;

export interface MoneyNeighborhood {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  lede: string;
  body: string[];
  zone: string;
  photo: PhotoKey;
  faqs: { q: string; a: string }[];
}

export interface IslandOffer {
  keyword: string;
  volume: number;
  h1: string;
  title: string;
  description: string;
  lede: string;
  fromPp: number;
  dayFrom: number;
  heroPhoto: PhotoKey;
  neighborhoods: { slug: string; name: string }[];
  faqs: { q: string; a: string }[];
}

function coreLow(id: IslandId): number {
  return getTiers(id).find((t) => t.tier === 'CORE')?.band[0] ?? 195;
}

export const islandOffers: Record<IslandId, IslandOffer> = {
  maui: {
    keyword: 'private chef maui',
    volume: 260,
    h1: 'Private Chef Maui — a table in your own villa.',
    title: 'Private Chef Maui | In-Villa Week Dinners | myCHEF',
    description:
      'Private chef Maui from $225 a guest. Villa dinners and weeks in Wailea, Kīhei and West Maui. Larger staffed rooms on /catering. Request a written quote.',
    lede:
      'A chef at the table in your Wailea, Kapalua or Kāʻanapali villa for the week. Published prices and a written menu. Staffed receptions live on /catering.',
    fromPp: 225,
    dayFrom: 1550,
    heroPhoto: 'mauiHero',
    neighborhoods: [
      { slug: 'wailea', name: 'Wailea' },
      { slug: 'kaanapali', name: 'Kāʻanapali' },
      { slug: 'lahaina', name: 'Lahaina / West Maui' },
      { slug: 'kihei', name: 'Kīhei' },
      { slug: 'kapalua', name: 'Kapalua' },
      { slug: 'makena', name: 'Makena' },
    ],
    faqs: [
      {
        q: 'How much does a private chef cost on Maui?',
        a: 'Signature dinners start at $225–$375 per person (CORE). Date Night for two starts from $750+. Stay Chef day rate from $1,550. 20% service and Hawaiʻi GET up to 4.712% are added as their own lines — once, on the written quote.',
      },
      {
        q: 'What is included?',
        a: 'Menu design, same-day shopping, cooking in your villa, table service and a clean kitchen. Signature groceries sit inside the $225–$375 band. Stay Chef groceries are billed at cost with receipts. Drinks are BYO or quoted separately. 20% service and GET up to 4.712% print after the food.',
      },
      {
        q: 'Do you cook in an Airbnb or vacation rental?',
        a: 'Yes, when there is a real kitchen — heat, cold storage, and seats for the list. Hotel rooms without a cooktop are declined or redesigned. Tell us the property type on WhatsApp or /quote?island=maui before a deposit.',
      },
      {
        q: 'Can you do kids’ plates and allergies?',
        a: 'Yes. Kids eat with the adults, not off a hidden menu. Vegan, gluten-free and nut-aware are designed in advance — not swapped at the pass.',
      },
      {
        q: 'Private chef Maui cost — what do I actually pay?',
        a: 'Per person: CORE $225–$375. Groceries for Stay Chef are billed at cost with receipts. Service 20% and Hawaiʻi GET up to 4.712% sit on their own lines — once. See /pricing.',
      },
      {
        q: 'Do you do a private sushi chef on Maui?',
        a: 'We can arrange a sushi-forward menu — nigiri, sashimi, hand rolls — cooked in your villa. It is a menu direction, not a separate brand. Ask on WhatsApp.',
      },
      {
        q: 'Can I request a female private chef on Maui?',
        a: 'Chefs are assigned to the booking, not sold as a gender marketplace. If you have a preference, say so — we will match when the calendar allows. We do not invent chef names or bios.',
      },
    ],
  },
  oahu: {
    keyword: 'private chef oahu',
    volume: 90,
    h1: 'Private Chef Oahu — in your villa, in your home.',
    title: 'Private Chef Oahu | Resident Villa and Home Chefs | myCHEF',
    description:
      'Private chef Oahu from $195 a guest — Honolulu, Waikīkī, Kahala, Kailua, Ko Olina corridors. Villa dinners and household weeks. Request a written quote.',
    lede:
      'Private chef Oahu and Honolulu — resident villa dinners from $195 a guest. Household weeks sit beside. Staffed events for a larger list live on /catering.',
    fromPp: 195,
    dayFrom: 1250,
    heroPhoto: 'oahuHero',
    neighborhoods: [
      { slug: 'honolulu', name: 'Honolulu' },
      { slug: 'waikiki', name: 'Waikīkī' },
      { slug: 'kailua', name: 'Kailua' },
      { slug: 'north-shore', name: 'North Shore' },
      { slug: 'kahala', name: 'Kahala' },
      { slug: 'ko-olina', name: 'Ko Olina' },
    ],
    faqs: [
      {
        q: 'How much is a private chef in Honolulu or on Oʻahu?',
        a: 'Signature dinners start at $195–$290 a guest with groceries inside that band. Stay Chef is $1,250 a day with groceries at cost and receipts. Personal-chef / weekly meal prep from $450 a week plus groceries at cost. 20% service and Hawaiʻi GET up to 4.712% print as their own lines. A tip is never required. Request a written quote on /quote?island=oahu or WhatsApp.',
      },
      {
        q: 'Our condo kitchen is small — does that work?',
        a: 'Yes when the cooktop is real. We design bring-equipment menus for Waikīkī and Kakaʻako galleys, and we book the freight elevator and building COI before anyone shops. A hotel room without a cooktop is declined before a deposit.',
      },
      {
        q: 'Do you cook for residents, not just visitors?',
        a: 'Yes. The kamaʻāina line is a standing weekly chef — frequency, not a tourist one-off. Visitor first nights stay on this home; weekly household cooking lives on /personal-chef.',
      },
      {
        q: 'North Shore — is travel extra?',
        a: 'Turtle Bay and the North Shore are a published surcharge for the 60–90+ minute drive. It appears on the written quote as its own line, never as a surprise on the bill. We do not stack a town dinner on the same calendar.',
      },
      {
        q: 'Oahu catering or a private chef?',
        a: 'A villa dinner for the house is private chef Oahu. Ten to seventy-five guests is the catering page — same team, buffet or plated. See /catering. Start on /quote?island=oahu.',
      },
    ],
  },
  kauai: {
    keyword: 'private chef kauai',
    volume: 210,
    h1: 'Private chef Kauai — both shores, inquiry stage.',
    title: 'Private Chef Kauai | Garden Isle — Inquiry | myCHEF',
    description:
      'Private chef Kauai from $225 a guest. Princeville, Poʻipū and Hanalei named. Garden Isle, both shores, inquiry stage — not Book-now. Enquire for dates.',
    lede:
      'Private chef Kauai on the Garden Isle — Princeville, Poʻipū and Hanalei. Both shores, inquiry stage. From $225 a guest. Enquire, do not Book-now.',
    fromPp: 225,
    dayFrom: 1650,
    heroPhoto: 'kauaiHero',
    neighborhoods: [
      { slug: 'princeville', name: 'Princeville' },
      { slug: 'poipu', name: 'Poʻipū' },
      { slug: 'hanalei', name: 'Hanalei' },
      { slug: 'kapaa', name: 'Kapaʻa' },
    ],
    faqs: [
      {
        q: 'How much does a private chef cost on Kauaʻi?',
        a: 'Signature $225–$375 a guest — the same band as Maui, earned by a thinner supplier bench. Date Night is a fixed evening at $975–$1,425. Stay Chef from $1,650 a day with groceries at cost. 20% service and GET up to 4.712% print separately. A tip is never silent and never required. Enquire on /quote?island=kauai — not Book-now.',
      },
      {
        q: 'Do you actually book Kauaʻi, or is this a waitlist?',
        a: 'Kauaʻi is inquiry-stage. Join the inquiry list with the shore and the dates on /quote?island=kauai. Far-North (Hāʻena) needs 72-hour notice and a weather/road clause — we publish that instead of pretending the Hanalei bridge never closes. We will not sell a Book-now button.',
      },
      {
        q: 'Princeville or Poʻipū — does the price change?',
        a: 'Menu bands are the Kauaʻi card. Drive time is a published zone line in a $50–$75 range, not a hidden markup on the fish. Far-North is quote-only.',
      },
      {
        q: 'Can you staff a small wedding?',
        a: 'Yes — Kauai wedding catering for estate formats to about 75 guests. Welcome dinner, rehearsal, reception as separate lines. From $260/pp plus staffing. WhatsApp the week.',
      },
      {
        q: 'Kauai catering prices — buffet or plated?',
        a: 'Same Kauaʻi CORE band as a private-chef dinner: $225–$375 per person. Buffet is the volume format; plated (coursed seated) is the restaurant arc. Staffing is itemised. Full menu and fee stack on /catering and /pricing.',
      },
      {
        q: 'Do you publish a Kauai catering menu?',
        a: 'Yes — a sample estate menu on the Kauai catering page. Your written menu is designed for that house and that guest list. We do not laminate a fake carte.',
      },
    ],
  },
  bigisland: {
    keyword: 'private chef big island',
    volume: 70,
    h1: 'Private chef Big Island — the Kohala Coast first.',
    title: 'Private Chef Big Island | Expedition Inquiry | myCHEF',
    description:
      'Private chef Big Island from $210 a guest. Kona, Waikoloa, Waimea, Kohala Coast. Inquiry stage. West-side villas first. ENTRY from $165. Enquire dates.',
    lede:
      'Expedition on Kona and the Kohala Coast first — seven resort communities in one west-side radius. Hilo and Volcano are quote-only; we will not fake a same-day round trip.',
    fromPp: 210,
    dayFrom: 1450,
    heroPhoto: 'bigislandHero',
    neighborhoods: [
      { slug: 'kona', name: 'Kona' },
      { slug: 'waimea', name: 'Waimea' },
      { slug: 'waikoloa', name: 'Waikoloa' },
      { slug: 'kohala', name: 'Kohala Coast' },
    ],
    faqs: [
      {
        q: 'How much is a private chef in Kona or on the Big Island?',
        a: 'CORE dinners start at $210–$325 a guest. ENTRY opens from $165. Stay Chef from $1,450 a day with groceries at cost. 20% service and Hawaiʻi GET up to 4.712% print after the food. Join the inquiry list on /quote?island=bigisland — not Book-now.',
      },
      {
        q: 'Can you cover Hilo from Kona?',
        a: 'Not in one day. East side is 2.5–3 hours — dedicated staffing, quoted honestly. A same-day Kona–Hilo round trip is a logistics fantasy. West-side villas are the default.',
      },
      {
        q: 'Do you take Ironman week?',
        a: 'Yes, with compressed availability. Flag those dates early on /quote?island=bigisland or WhatsApp — not the week of the swim. One crew holds one heavy week. We will not promise a Hilo lunch and a Waikoloa dinner on the same race Saturday.',
      },
      {
        q: 'Is this Hawaiʻi Island or the Big Island?',
        a: 'Both. Searchers say Big Island and Kona; the geography is Hawaiʻi Island. There is no separate Kona hostname. The chef is the same. This home still owns private chef Big Island.',
      },
    ],
  },
};

export const moneyNeighborhoods: Record<IslandId, MoneyNeighborhood[]> = {
  maui: [
    {
      slug: 'wailea',
      name: 'Wailea',
      h1: 'Private chef Wailea Maui',
      title: 'Private chef Wailea Maui — from $225/pp | myCHEF',
      description:
        'Private chef Wailea Maui from $225/pp. Published prices and menus — villa dinners and wedding-week catering in resort residences. WhatsApp for a quote.',
      lede:
        'Private chef Wailea Maui is the search. Hotel-zoned residences with real kitchens, published $225–$375/pp CORE, a written menu — not a named-chef marketplace.',
      body: [
        'This is not a resort communal chef’s table. It is your villa, your guest list, a menu designed that week. Sunset on the lānai is the usual ask; we write a covered backup before a deposit because South Maui wind is a Tuesday, not a surprise.',
        'Signature sits at $225–$375 a guest — groceries inside that band. Date Night from $750+, Family Feast, and wedding-week lines live on the same Maui card. Stay Chef is the villa-week cook from $1,550 a day with groceries at cost and receipts. They never blend.',
        'We stage out of South Maui and shop Kīhei / Wailea the day of service. You pick the catch; the plate follows the boat when the boat is real. Hotel rooms without a cooktop in the resort belt are declined.',
        'West Maui and the northwest estates are their own dinner doors: /kaanapali, /kapalua. The island home still owns private chef Maui. Line-by-line numbers live on /pricing. Dates, headcount, and the kitchen type go on /quote.',
      ],
      zone: 'Base zone — travel included',
      photo: 'wailea',
      faqs: [
        {
          q: 'Which Wailea kitchens actually host a chef?',
          a: 'Hotel-zoned villas and resort residences with a working range, cold storage, and seats for the list. A Wailea condo galley can work if the cooktop is real — we design a bring-equipment menu and state the constraint on the quote. A standard hotel room with a coffee maker is declined before a deposit. Put the property type on /quote.',
        },
        {
          q: 'Is this the same as a Wailea resort chef’s table?',
          a: 'No. Those seat you with strangers in a hotel dining room. Ours is private, in your kitchen, paced to your night. The guest list is yours. Cleanup is ours. Sibling West Maui doors: /kaanapali and /kapalua.',
        },
        {
          q: 'What does Signature $225–$375 include on a Wailea night?',
          a: 'Menu design, a same-day South Maui shop, cooking on your range, paced service, and a kitchen we leave empty. Groceries ride inside that band on a Signature night. After the food: 20% service and Hawaiʻi GET up to 4.712% as their own lines. A 50% deposit holds the date. Gratuity is never required. Card: /pricing.',
        },
        {
          q: 'Stay Chef from $1,550 — is food inside that Wailea day rate?',
          a: 'No. Stay Chef is the villa-week cook: $1,550 a day from, chef plus assistant, one meal. Groceries bill at cost with merchant receipts. Extra meals that day are quoted, not assumed. Signature never folds into the day rate. Write the dates on /quote.',
        },
        {
          q: 'Where do you stage and shop for a Wailea service?',
          a: 'South Maui. We shop Kīhei and Wailea the morning of the night, then cook on your range. Upcountry and Pāʻia are not stacked onto this chef day. Drive time inside Wailea and Makena is included in the base zone.',
        },
        {
          q: 'Can the plate follow the same-day South Maui boat?',
          a: 'When the boat is real, yes — you pick the catch and we plate what landed. Unverified fish is named as fish. We will not invent a Māʻalaea boat on a Tuesday that did not run. Say so on /quote if that is the night you want.',
        },
        {
          q: 'Can you crew a wedding week from a Wailea residence?',
          a: 'Welcome dinner through recovery brunch as separate lines, starting from $225 a guest plus staffing. The week stack lives on /weddings. This URL stays the villa dinner door. A lawn reception is a different crew than Date Night for two. West Maui satellite nights sit on /kaanapali.',
        },
        {
          q: 'How do I get a written Wailea total?',
          a: 'Five fields on /quote — Maui, dates, headcount, service, how to reach you — or WhatsApp +1 808 468 7748. quotes@mychef-hawaii.com. A Hawaii-hours desk writes back on a working day. The confirmed number is the written quote, not a chat range. See /pricing.',
        },
      ],
    },
    {
      slug: 'kaanapali',
      name: 'Kāʻanapali',
      h1: 'Private chef in Kāʻanapali, Maui',
      title: 'Private chef Kaanapali Maui — from $225/pp | myCHEF',
      description:
        'Private chef in Kāʻanapali and West Maui from $225/pp. Villa dinners and wedding-week satellite events. WhatsApp to book.',
      lede:
        'West Maui, named honestly: Kāʻanapali, Nāpili, Kapalua. Same CORE band as Wailea. Traffic is planned into arrival, not discovered on the invoice.',
      body: [
        'Resort residences and hotel-zoned condos with kitchens — not a hotel-room impersonation and not a luxury-dining story about the town next door. People search Lahaina; we answer with the ranges we actually enter on this strip.',
        'Signature stays $225–$375 a guest. Family Feast for six to eight is the usual West Maui order: shared plates, kids’ plates on request, one team. Stay Chef from $1,550 a day, groceries at cost with receipts, fits Honokōwai and Nāpili weeks better than stacking halo nights.',
        'Honoapiʻilani traffic is planned into the chef day. We do not discover Black Rock congestion on your invoice. Condo galleys between Kāʻanapali and Kapalua are common; constraints print on the quote before anyone shops.',
        'South Maui is /wailea. The northwest estates are /kapalua. The honest Lahaina naming page is /lahaina. Island home still owns private chef Maui. Tariff: /pricing. Dates and the kitchen type: /quote.',
      ],
      zone: 'Base zone — West Maui',
      photo: 'kaanapali',
      faqs: [
        {
          q: 'Which West Maui kitchens in Kāʻanapali actually work?',
          a: 'Hotel-zoned residences and condos with a cooktop, fridge, and a table that fits the list. Honokōwai galleys are normal; we say the limit in writing. A hotel room without a range is declined. Tell us the building on /quote before we shop.',
        },
        {
          q: 'Do you serve a Lahaina address from this corridor?',
          a: 'Lahaina searches land here. We cook in Kāʻanapali, Nāpili, and Kapalua residences — West Maui villas with kitchens. We do not market a luxury-dining destination the town is not. The naming page is /lahaina. Northwest estates: /kapalua.',
        },
        {
          q: 'Same $225–$375 as Wailea — why isn’t West Maui cheaper?',
          a: 'The Maui Signature band does not discount because you are on the west side. Groceries sit inside that band on a dinner night. After the food: 20% service and Hawaiʻi GET up to 4.712%, each as its own line. A 50% deposit holds the date. Tips are never required. South Maui door: /wailea. Card: /pricing.',
        },
        {
          q: 'Stay Chef from $1,550 on the Kāʻanapali strip — how do groceries print?',
          a: 'Day rate from $1,550. Groceries at cost with receipts. Extra meals that day are their own line. Signature $225–$375 never folds into the day fee. Honokōwai multi-day cooks often beat one halo night. Send the week on /quote.',
        },
        {
          q: 'How do you time Honoapiʻilani traffic into a chef day?',
          a: 'West Maui drive time is inside the base zone. We leave staging early enough that Black Rock congestion is a schedule, not a surcharge. We will not stack a Wailea dinner and a Kāʻanapali dinner on the same calendar. Upcountry is the surcharge zone, not this strip.',
        },
        {
          q: 'Wedding-week satellite on this shore — or a full Wailea week?',
          a: 'Welcome and rehearsal nights in a Kāʻanapali residence are common when the vows sit elsewhere. Those lines live on /weddings. This URL stays the West Maui dinner door. A lawn reception is a different crew than Family Feast for eight.',
        },
        {
          q: 'What Kāʻanapali properties do you decline?',
          a: 'Hotel rooms without a cooktop. Listings that cannot take a freight run or a quiet-hours plan. We will not pretend a minibar suite is a pass. If the kitchen works, we book it. If it does not, we say so before money moves. Form: /quote.',
        },
        {
          q: 'How do I get a written Kāʻanapali total?',
          a: 'Open /quote with Maui and the West Maui address, or WhatsApp +1 808 468 7748. quotes@mychef-hawaii.com. Five fields. Hawaii Standard Time on working days. The written quote is the total — not a chat midpoint. See /pricing.',
        },
      ],
    },
    {
      slug: 'lahaina',
      name: 'Lahaina / West Maui',
      h1: 'Private chef Lahaina Maui',
      title: 'Private chef Lahaina Maui — West Maui from $225/pp | myCHEF',
      description:
        'Private chef Lahaina Maui from $225/pp. Villa and condo kitchens on a rebuilding West Maui strip — not a restaurant table. Written quote.',
      lede:
        'People search private chef Lahaina. We cook in villa and condo kitchens that still have a range. We do not sell a Front Street restaurant table or a luxury-dining story the town is not.',
      body: [
        'Lahaina is recovering. This page does not dress that as a dining destination. It names the houses that can still host on-site cooking: villas and condos with a working range, cold storage, and seats for the list. A rebuilt unit with a kitchen is a booking. A room with a coffee maker is not.',
        'Signature stays $225–$375 a guest — groceries inside that band. Stay Chef from $1,550 a day bills groceries at cost with receipts. After either line: 20% service and Hawaiʻi GET up to 4.712% as their own rows. A 50% deposit holds the date. Tips are never required. The Maui card does not move because the search said Lahaina.',
        'We want the exact street and building before anyone shops. Access and parking can be tighter than a resort lot. Honoapiʻilani timing is planned into the chef day, not discovered on the invoice. Same-day asks usually wait. Hotel rooms without a cooktop are declined in writing.',
        'The resort-strip dinner door is /kaanapali. Northwest estates sit on /kapalua. South Maui residences: /wailea. Island home still owns private chef Maui. Line-by-line numbers: /pricing. Address and dates: /quote.',
      ],
      zone: 'West Maui — villa and condo kitchens',
      photo: 'locLahaina',
      faqs: [
        {
          q: 'Will you cook at a Lahaina house while the town is rebuilding?',
          a: 'When the unit has a working range, a fridge, and a table that fits the list — yes. We take the exact street, not a neighborhood nickname. Houses still standing with a kitchen are booked as houses. We will not market a luxury strip the town is not. Send the property on /quote.',
        },
        {
          q: 'Is private chef Lahaina a restaurant reservation?',
          a: 'No. We do not take a Front Street table and call it a chef night. The product is on-site cooking in a villa or condo kitchen. If the listing is a hotel room without a range, we decline it before money moves. Resort-strip condos with kitchens sit on /kaanapali.',
        },
        {
          q: 'Does a Lahaina search change the $225–$375 Maui band?',
          a: 'No. Signature stays $225–$375 a guest, groceries inside that band. After the food: 20% service and Hawaiʻi GET up to 4.712%, each as its own line. A 50% deposit holds the date. Tips stay voluntary. South Maui numbers live on /wailea. Card: /pricing.',
        },
        {
          q: 'Stay Chef from $1,550 on a West Maui rebuild-week — how do groceries print?',
          a: 'Day fee from $1,550. Merchant receipts for food. Extra plates that day are a second line. Signature $225–$375 never folds into the day fee. A week that cooks more than once should not be four dinner stacks in a chat. Write the stay on /quote.',
        },
        {
          q: 'Why keep /lahaina if /kaanapali already answers West Maui?',
          a: 'Searchers type Lahaina. This URL answers that name with rebuild honesty and the houses that can still host a crew. /kaanapali is the resort-strip dinner door. /kapalua is the northwest estate door. They do not swap copy. Use the street, not the brand.',
        },
        {
          q: 'Tighter access and Honoapiʻilani — what do you need before shopping?',
          a: 'The building, the stall or driveway, and whether the range still works. Recovery traffic is a schedule, not a surcharge. We leave staging early enough that the drive is inside the West Maui base. Upcountry is the exception, not this strip.',
        },
        {
          q: 'Same-day Lahaina ask, or a room with no range?',
          a: 'Same-day usually waits — we will not shop blind on a rebuild street. A room with no cooktop is a no. Outdoor-only setups with no indoor table are a no. If the kitchen works and the dates hold, we write the total. Form: /quote.',
        },
        {
          q: 'What turns a Lahaina note into a line-item sheet?',
          a: 'Send the street, the nights, and the headcount on /quote. Voice or WhatsApp +1 808 468 7748. quotes@mychef-hawaii.com. Desk hours are Hawaii Standard Time. We write eligibility back; we do not price a rebuild block in chat. Band: /pricing.',
        },
      ],
    },
    {
      slug: 'kihei',
      name: 'Kīhei',
      h1: 'Private chef Kihei Maui',
      title: 'Private chef Kihei Maui — from $225/pp | myCHEF',
      description:
        'Private chef Kihei in South Maui condos and townhomes from $225/pp. Family villa weeks, Stay Chef from $1,550/day. Written quote.',
      lede:
        'Private chef Kihei is the South Maui condo-and-townhome search — family villa weeks, ocean-side without Wailea resort gloss. Same $225–$375 Signature. Kids’ plates are normal.',
      body: [
        'South Kīhei Road condos and two-story townhomes, not a hotel-zoned sunset stage. The usual ask is a family week: shared platters, kids eating with the adults, a kitchen that works even when the counters are short. We write the galley limit before anyone shops.',
        'Signature stays $225–$375 a guest — groceries inside that band. Stay Chef from $1,550 a day bills groceries at cost with receipts. After either line: 20% service and Hawaiʻi GET up to 4.712%. A 50% deposit holds the date. Gratuity is never required. The Maui card does not shrink because the house is a condo.',
        'Load-in is a condo stall and an HOA quiet-hours note, not a porte-cochère. We shop Foodland, Azeka, and Piʻilani the morning of service. Compact townhome galleys get a bring-equipment menu when the cooktop is real. Hotel rooms without a range are declined.',
        'Resort residences south of here: /wailea. Quieter lava-edge houses: /makena. West Maui naming: /lahaina. Island home still owns private chef Maui. Numbers: /pricing. Address and dates: /quote.',
      ],
      zone: 'South Maui — condo and townhome kitchens',
      photo: 'locKihei',
      faqs: [
        {
          q: 'South Kīhei Road condo — when is the cooktop enough?',
          a: 'When it is a real range, the fridge holds the shop, and the table seats the list. Short counters are normal; we bring the tools and print the limit. A microwave suite is declined. Resort residences south of here live on /wailea. Put the building on /quote.',
        },
        {
          q: 'Condo geography — does Kīhei undercut the $225–$375 band?',
          a: 'No. South Maui condos pay the Maui Signature band. Groceries sit inside $225–$375 on a dinner night. After the food: 20% service and Hawaiʻi GET up to 4.712%. 50% deposit. Tips stay voluntary. There is no discount cove. Card: /pricing.',
        },
        {
          q: 'What does a Kīhei Signature dinner actually buy?',
          a: 'Menu, a same-morning South Maui shop, cooking on your range, paced plates, a kitchen we leave empty. Food is inside the $225–$375 band — not a second grocery invoice. Wine is yours or quoted. Nigiri or hand rolls can be a direction, not a second brand.',
        },
        {
          q: 'Family villa week — how does Stay Chef from $1,550 print groceries?',
          a: 'Day fee from $1,550. Food at cost with merchant receipts. Extra meals that day are quoted. Stacking four Signature nights in a chat is the wrong model for a townhome week. Kids’ plates ride on the same cook. Send the rhythm on /quote.',
        },
        {
          q: 'Six kids and two adults — is Family Feast the Kīhei default?',
          a: 'Usually. Shared platters, kids eating with the adults, six to eight seats. Two-tops are rarer here than in Wailea. A longer list that needs servers is catering — /catering — not this dinner door. Headcount goes on /quote before we shop.',
        },
        {
          q: 'Condo stall, elevator, HOA quiet hours — who books those?',
          a: 'We confirm the stall, the elevator if there is one, and the building’s quiet hours before the shop. South Kīhei Road is a parking problem, not a distance problem. We will not discover a tow-away zone at 4 p.m. Lava-edge houses without HOA rules: /makena.',
        },
        {
          q: 'Tonight in a Kīhei hotel room with a microwave?',
          a: 'No. Same-day hotel rooms without a cooktop are declined. We will not run a hallway cart. If the townhome range works and the dates hold, we write the total. Form: /quote.',
        },
        {
          q: 'How does a Kīhei week get a line-item total?',
          a: 'Open /quote, name the South Maui building, the nights, and the guest list. WhatsApp +1 808 468 7748 if that is faster. quotes@mychef-hawaii.com. Coordinators answer in Hawaii Standard Time. Eligibility is the written sheet, not a chat range. Band: /pricing.',
        },
      ],
    },
    {
      slug: 'kapalua',
      name: 'Kapalua',
      h1: 'Private chef in Kapalua, Maui',
      title: 'Private chef Kapalua Maui — Date Night from $750+ | myCHEF',
      description: 'Private chef in Kapalua — dinners for two, family tables and wedding-week satellite dinners. From $225/pp.',
      lede:
        'Northwest Maui estates. Date Night is the product this bay was built for — a fixed evening from $750+, not a per-guest stack that punishes two seats. CORE dinners from $225/pp.',
      body: [
        'Ironwood, a quieter inventory, and a northwest drive that is already inside the Maui base zone. Dinners for two, family celebrations, and wedding-week satellite nights use the same kitchen standard as Wailea — different wind, same cleanup.',
        'Date Night from $750+ is a fixed evening. Larger tables use Signature $225–$375 a guest, groceries inside that band. Stay Chef from $1,550 a day bills groceries at cost with receipts. Wine is yours or quoted separately. Florals and photography are add-on lines, never buried.',
        'Outdoor tables on this bay always carry a covered backup in writing before a deposit. Hotel rooms without a cooktop at the resort are declined. We will not sell an uncovered lawn as the plan.',
        'West Maui residences: /kaanapali. South Maui resort belt: /wailea. Island home still owns private chef Maui. Numbers: /pricing. Dates and the house: /quote.',
      ],
      zone: 'Base zone',
      photo: 'kapaluaTwo',
      faqs: [
        {
          q: 'Estate kitchen or a Kapalua condo galley — what works?',
          a: 'Northwest estates with a real range are the default. A Kapalua condo galley works when the cooktop and cold storage are real; we write the limit on the quote. A hotel room without a kitchen is declined. Send the property type on /quote.',
        },
        {
          q: 'Date Night from $750+ — or the $225–$375 Signature band?',
          a: 'Two seats use Date Night as a fixed Maui evening from $750+, cooked in the villa. A longer list uses Signature $225–$375 a guest with groceries inside that band. They never blend. After either line: 20% service and Hawaiʻi GET up to 4.712%. Card: /pricing.',
        },
        {
          q: 'Stay Chef from $1,550 at the northwest end — groceries?',
          a: 'Day rate from $1,550. Groceries at cost with receipts. Extra meals that day are quoted. A Kapalua week that cooks more than once should not be four Signature nights stacked in a chat. Write the stay on /quote.',
        },
        {
          q: 'Is the Kapalua drive inside the Maui base zone?',
          a: 'Yes. The northwest drive is included. We do not add a surprise line for ironwood and the bay. Upcountry and Pāʻia are the exceptions, not Kapalua. We will not stack this night with a Wailea dinner on the same calendar. South Maui door: /wailea.',
        },
        {
          q: 'Outdoor table on the ironwood — what if the wind comes up?',
          a: 'We write a covered backup before a deposit. Outdoor is fine when the house has a real indoor table as plan B. We will not sell an uncovered lawn as the only plan. West Maui condos with tighter lanais: /kaanapali.',
        },
        {
          q: 'Wedding-week satellite here versus a Wailea welcome?',
          a: 'Kapalua often holds the quiet dinner for two or the family table while vows sit elsewhere. Those week lines live on /weddings. This URL stays the northwest dinner door. A reception crew is not a Date Night crew.',
        },
        {
          q: 'What Kapalua rooms do you turn down?',
          a: 'Hotel rooms without a cooktop. Houses that cannot seat the list. Outdoor-only setups with no covered backup. We say no before a deposit. If the kitchen works, we cook. Form: /quote.',
        },
        {
          q: 'How do I lock a written Kapalua total?',
          a: '/quote with Maui, the Kapalua address, dates, and headcount — or WhatsApp +1 808 468 7748. quotes@mychef-hawaii.com. Hawaii-hours desk. 50% deposit holds the date once you accept the written total. See /pricing.',
        },
      ],
    },
    {
      slug: 'makena',
      name: 'Makena',
      h1: 'Private chef in Makena, Maui',
      title: 'Private chef Makena Maui — from $225/pp | myCHEF',
      description: 'Private chef south of Wailea in Makena. Same Maui starting prices, quieter inventory, wet-weather backup.',
      lede:
        'South of Wailea, still the Maui base zone. Quieter inventory — lava-edge houses and family weeks — with a covered backup written before anyone deposits.',
      body: [
        'This is not a discount cove. Signature stays $225–$375 a guest, groceries inside that band. Family weeks and celebration dinners use the same South Maui shop as Wailea. Outdoor tables always carry a covered backup in writing; South Maui wind is a Tuesday, not a surprise.',
        'Stay Chef from $1,550 a day bills groceries at cost with receipts. After either line: 20% service and Hawaiʻi GET up to 4.712%. A 50% deposit holds the date. Gratuity is never required. Hotel rooms without a cooktop are declined.',
        'We stage out of South Maui. Drive time inside Makena is included. We will not stack a West Maui night onto this chef day. Resort residences sit one cove north: /wailea. Residential condos: /kihei.',
        'Island home still owns private chef Maui. Line-by-line numbers live on /pricing. Dates, headcount, and the kitchen type go on /quote.',
      ],
      zone: 'Base zone',
      photo: 'makena',
      faqs: [
        {
          q: 'South of Wailea — is Makena still the Maui base zone?',
          a: 'Yes. Drive time inside Makena is included. The quieter inventory is the product, not a surcharge story. Upcountry and Pāʻia are the exceptions, not this cove. Resort residences one cove north: /wailea.',
        },
        {
          q: 'Does a quieter Makena house pay less than Signature $225–$375?',
          a: 'No. The Maui Signature band does not shrink because you are south of the resort belt. Groceries sit inside that band on a dinner night. After the food: 20% service and Hawaiʻi GET up to 4.712%. 50% deposit. Tips never required. Card: /pricing.',
        },
        {
          q: 'Outdoor Makena table — what is the wet-weather rule?',
          a: 'We write a covered backup before a deposit. Lava-edge lawns are fine when the house has a real indoor table as plan B. We will not sell an uncovered deck as the only plan. Residential Kīhei lanais: /kihei.',
        },
        {
          q: 'Family Feast week in Makena — day rate or stacked dinners?',
          a: 'Kids’ plates and shared platters are the usual Makena order. Stay Chef from $1,550 a day, groceries at cost with receipts, fits a three-to-seven-day house better than four Signature nights in a chat. Extra meals that day are quoted. Send the rhythm on /quote.',
        },
        {
          q: 'Makena dinner door or a Wailea resort residence?',
          a: 'This URL is the quieter South Maui house. /wailea is the hotel-zoned resort belt. Same food band. Different inventory. We shop the same South Maui markets the morning of service. West Maui is a different door: /kaanapali.',
        },
        {
          q: 'Lava-edge lawn only — will you still cook in Makena?',
          a: 'Not as the only plan. A lava terrace needs a real indoor table written as backup before a deposit. A hotel room without a cooktop is declined. If the kitchen works, we cook. Form: /quote.',
        },
        {
          q: 'Is a Makena house the wedding-week base or just dinner?',
          a: 'This URL stays dinner. Family weeks live here. Welcome-through-brunch stacks sit on /weddings as their own lines from $225 a guest plus staffing. A reception crew is not Family Feast for eight.',
        },
        {
          q: 'How do I get a written Makena total?',
          a: 'Five fields on /quote — Maui, the Makena address, dates, headcount, how to reach you — or WhatsApp +1 808 468 7748. quotes@mychef-hawaii.com. Hawaii-hours desk. The written quote is the total. See /pricing.',
        },
      ],
    },
  ],
  oahu: [
    {
      slug: 'honolulu',
      name: 'Honolulu',
      h1: 'Private chef in Honolulu, Oʻahu',
      title: 'Private chef Honolulu — from $195/pp | myCHEF',
      description:
        'Private chef Honolulu and personal chef Honolulu from $195/pp. In-residence dinners from Waikīkī to Kahala. Weekly household service for kamaʻāina.',
      lede:
        'Honolulu is the residence search: private chef and personal chef in the same city. We cook in residences with kitchens — Gold Coast, Waikīkī towers, town apartments.',
      body: [
        'This is Resident’s Island, not a villa-week clone of Maui. Visitors book a celebration dinner in a town kitchen. Kamaʻāina book a standing weekly cook from $450 plus groceries at cost with receipts. Same team, different rhythm.',
        'Signature sits at $195–$290 a guest — groceries inside that band. Stay Chef from $1,250 a day bills groceries at cost. After either line: 20% service and Hawaiʻi GET up to 4.712% as their own rows. A 50% deposit holds the date. A tip is never required.',
        'Freight elevators, loading docks, quiet hours, and building COIs are arranged before anyone shops — not discovered on Kalākaua the night of service. Compact Kakaʻako and downtown galleys get bring-equipment menus. Standard hotel rooms without a cooktop are declined.',
        'High-rise residences: /waikiki. West-side villa weeks: /ko-olina. Island home still owns private chef Oahu. Tariff: /pricing. Town address and dates: /quote.',
      ],
      zone: 'Base zone — town',
      photo: 'locHonolulu',
      faqs: [
        {
          q: 'Which Honolulu residences can actually host a chef?',
          a: 'Gold Coast apartments, townhouses with a dining room, Kakaʻako and downtown units with a real cooktop, Kahala households. A hotel room near Ala Moana with a minibar is declined. Compact galleys get a bring-equipment menu. Put the building type on /quote.',
        },
        {
          q: 'Private chef Honolulu or personal chef — which line is this URL?',
          a: 'This corridor is the residence dinner. Private chef is the one-night town table. Personal chef is the weekly Honolulu household line on /personal-chef, from $450 a week plus groceries at cost. Same crew, different calendar. Say which on /quote.',
        },
        {
          q: 'What does $195–$290 a guest include in town?',
          a: 'Menu design, a Honolulu-market shop the morning of service, cooking on your range, paced plates, and an empty dishwasher. Groceries ride inside Signature. After the food: 20% service and Hawaiʻi GET up to 4.712%. 50% deposit. Gratuity never required. Card: /pricing.',
        },
        {
          q: 'How do town towers handle load-in on a weeknight?',
          a: 'We book the freight window, the dock, and the building COI before anyone shops. Quiet hours go on the same written plan. We will not discover a Kalākaua loading rule at 4 p.m. High-rise specifics live on /waikiki. This page stays town residences.',
        },
        {
          q: 'Do kamaʻāina weekly cooks use the Signature grocery model?',
          a: 'No. Weekly household work bills groceries at cost with receipts. Signature $195–$290 is the visitor or celebration night with food inside the band. Stay Chef from $1,250 a day is the multi-day cook, also groceries at cost. They never blend. Weekly door: /personal-chef.',
        },
        {
          q: 'Honolulu catering — is that this page?',
          a: 'No. Staffed rooms of about ten to seventy-five live on /catering — that URL owns Oahu catering. This page is the Honolulu residence dinner. Same team, different door. Wedding-week formats: /weddings.',
        },
        {
          q: 'What Honolulu rooms do you decline?',
          a: 'Standard hotel rooms without a cooktop. Units that cannot take a freight run or a COI. We will not pretend a coffee maker is a pass. If the kitchen works, we cook. If it does not, we say so before a deposit. Form: /quote.',
        },
        {
          q: 'How do I get a written Honolulu total?',
          a: 'Five fields on /quote — Oʻahu, dates, headcount, service, how to reach you — or WhatsApp +1 808 468 7748. quotes@mychef-hawaii.com. Coordinators answer in Hawaii Standard Time on working days. See /pricing.',
        },
      ],
    },
    {
      slug: 'waikiki',
      name: 'Waikīkī',
      h1: 'Private chef in Waikīkī, Oʻahu',
      title: 'Private chef Waikiki — residences with kitchens | myCHEF',
      description: 'Private chef in Waikīkī from $195/pp — resort residences and apartments with real kitchens, not hotel rooms.',
      lede:
        'Most Waikīkī hotel rooms cannot host a chef. We cook in residences with a cooktop and a table — and we say no when they do not. That honesty is the product, not a hallway cart.',
      body: [
        'High-rise load-in is the constraint, not distance. Freight elevators, loading docks, quiet hours, and building COIs are booked with the tower before anyone shops. A suite with only a coffee maker is declined before a deposit.',
        'Signature still starts at $195–$290 a guest, groceries inside that band, even when the galley is compact. Stay Chef from $1,250 a day — groceries at cost with receipts — often makes more sense than stacking single dinners across a long stay. After either line: 20% service and Hawaiʻi GET up to 4.712%.',
        'Town residences and weekly households sit on /honolulu. West-side villa weeks sit on /ko-olina. This URL stays Waikīkī residences with kitchens. Island home still owns private chef Oahu. Card: /pricing. Address and dates: /quote.',
      ],
      zone: 'Base zone',
      photo: 'waikiki',
      faqs: [
        {
          q: 'Can you cook in a Waikīkī hotel room?',
          a: 'Only when it is a residence with a functioning cooktop, fridge, and a table that fits the list. A standard suite with a minibar is declined. Tell us the property type first on /quote. Town apartments that are not towers: /honolulu.',
        },
        {
          q: 'Who books the freight elevator, dock, and tower COI?',
          a: 'We do — before anyone shops. Waikīkī load-in is a freight window and a certificate of insurance with the building, not a driveway on Kalākaua. Quiet hours go on the same written plan. We will not discover the dock the night of service.',
        },
        {
          q: 'Does a Waikīkī galley still use Signature $195–$290?',
          a: 'Yes. The Oʻahu Signature band does not shrink because the kitchen is a galley. Groceries stay inside that band on a dinner night. After the food: 20% service and Hawaiʻi GET up to 4.712%. 50% deposit. Gratuity never required. Card: /pricing.',
        },
        {
          q: 'Stay Chef from $1,250 — does a tower week make sense?',
          a: 'When you are in a residence for several nights and the range works, yes. Day rate from $1,250. Groceries at cost with receipts. Extra meals that day are quoted. Stacking four Signature nights in a chat is the wrong model. Send the stay on /quote.',
        },
        {
          q: 'Celebration dinner in a suite without a range?',
          a: 'No. We will not run a hallway cart or trip a fire alarm to impersonate a chef’s table. Residences with kitchens only. If the listing cannot host a cook, we say so before money moves.',
        },
        {
          q: 'Is a Waikīkī residence the same product as a Honolulu household cook?',
          a: 'No. This page is a high-rise with a cooktop — freight, dock, quiet hours. /honolulu is Gold Coast apartments and the weekly kamaʻāina line from $450 plus groceries at cost. West-side villa weeks stay on /ko-olina.',
        },
        {
          q: 'What Waikīkī rooms fail the kitchen test?',
          a: 'Hotel rooms without a cooktop. Towers that will not issue a COI or a freight window. Outdoor-only setups with no indoor table. Declined before a deposit. Form: /quote.',
        },
        {
          q: 'How do I get a written Waikīkī residence total?',
          a: '/quote with Oʻahu, the tower address, dates, and headcount — or WhatsApp +1 808 468 7748. quotes@mychef-hawaii.com. Hawaii-hours desk on working days. See /pricing.',
        },
      ],
    },
    {
      slug: 'kailua',
      name: 'Kailua',
      h1: 'Private chef in Kailua, Oʻahu',
      title: 'Private chef Kailua Oahu — from $195/pp | myCHEF',
      description:
        'Private chef Kailua and personal chef Kailua Oahu from $195/pp. Windward town kitchens, resident and visitor weeks. Written quote.',
      lede:
        'Windward town kitchens — private chef Kailua for visitor weeks, personal chef Kailua Oahu for resident cooks. Parking, galley size, and the shop are planned, not guessed.',
      body: [
        'Kailua and Lanikai mix resident weekly cooks with visitor stays that last longer than a weekend. The 30-day rental rule is the filter: we cook in a genuine house with a working range, not an illegal two-night listing. Beach-house galleys are common; we write a bring-equipment menu when the cooktop is real and the counter is not.',
        'Signature sits at $195–$290 a guest — groceries inside that band. Stay Chef from $1,250 a day bills groceries at cost with receipts. The standing kamaʻāina week from $450 plus groceries at cost lives on /personal-chef. After a dinner line: 20% service and Hawaiʻi GET up to 4.712% as their own rows. A 50% deposit holds the date. A tip is never required.',
        'Load-in is a Kailua street stall or a Lanikai driveway, not a Kalākaua freight window. We shop Kailua markets first; Town is a planned second stop when the list needs it, not a surprise line. The Pali or Likelike run is inside the windward base. Hotel rooms without a range are declined.',
        'Town residences: /honolulu. Gold Coast dining rooms: /kahala. West-side villa weeks: /ko-olina. Island home still owns private chef Oahu. Tariff: /pricing. Windward address and dates: /quote.',
      ],
      zone: 'Base zone — windward town kitchens',
      photo: 'kailua',
      faqs: [
        {
          q: 'Beach-house galley or a real Kailua range — what hosts a cook?',
          a: 'A working cooktop, cold storage, and seats for the list. Lanikai counters run short; we bring the tools and print the limit. A coffee-maker rental is declined. Town apartments that are not windward sit on /honolulu. Put the house type on /quote.',
        },
        {
          q: 'Weekend drop-in on the windward side — will you take it?',
          a: 'Only inside a genuine stay with a kitchen. We will not force a chef into an illegal two-night listing. A celebration night inside a longer week is normal. Visitor weeks and resident cooks share this corridor; the calendar is different. Say which on /quote.',
        },
        {
          q: 'Signature $195–$290 on a Kailua night — what is inside the band?',
          a: 'Menu, a windward shop, cooking on your range, paced plates, an empty sink. Groceries ride inside $195–$290. After the food: 20% service and Hawaiʻi GET up to 4.712%. 50% deposit. Tips stay voluntary. Card: /pricing.',
        },
        {
          q: 'Does a Kailua week use Stay Chef from $1,250 or the personal-chef line?',
          a: 'Visitor multi-day cooks use Stay Chef from $1,250, food at cost with receipts. Resident standing weeks use /personal-chef from $450 plus groceries at cost. Signature $195–$290 is the one-night celebration with food inside the band. They never blend.',
        },
        {
          q: 'Kailua market run or a Town grocery loop — who decides?',
          a: 'Kailua markets first. Town is a planned second stop when the list needs a cut we cannot get windward — written on the quote, not added at 4 p.m. We will not bill a surprise Honolulu loop. West-side provisioning is a different shop: /ko-olina.',
        },
        {
          q: 'Street parking and the Pali — how does a windward chef day start?',
          a: 'A stall or a driveway, then the Pali or Likelike inside the base zone. We confirm parking before anyone shops. Beach-house streets fill early; that is a schedule, not a surcharge. Gold Coast driveways are a different load-in: /kahala.',
        },
        {
          q: 'Same-day Kailua dinner in a hotel room without a kitchen?',
          a: 'No. Same-day rooms without a cooktop are declined. We will not impersonate a pass with a hallway cart. If the house has a range and the dates hold, we write the total. Form: /quote.',
        },
        {
          q: 'What starts a written Kailua eligibility sheet?',
          a: 'Name the windward street, the nights, and the count on /quote. WhatsApp +1 808 468 7748 if you already have the house. quotes@mychef-hawaii.com. Coordinators reply in Hawaii Standard Time. A chat midpoint is not a booking. Band: /pricing.',
        },
      ],
    },
    {
      slug: 'north-shore',
      name: 'North Shore',
      h1: 'Private chef in North Shore, Oʻahu',
      title: 'Private chef North Shore Oahu — Turtle Bay villas | myCHEF',
      description: 'Private chef North Shore Oahu. Turtle Bay and North Shore villas — published drive surcharge, CORE from $195/pp.',
      lede: 'The drive is 60–90+ minutes. The surcharge is on the quote. Surf season books early.',
      body: ['Dedicated chef days — we do not stack a town dinner and a North Shore dinner on the same calendar.'],
      zone: 'Surcharge zone',
      photo: 'northShore',
      faqs: [
        { q: 'How much is the travel fee?', a: 'Published on your written quote as its own line. Ask on WhatsApp and we send the zone with the menu.' },
      ],
    },
    {
      slug: 'kahala',
      name: 'Kahala',
      h1: 'Private chef in Kahala, Oʻahu',
      title: 'Private chef Kahala & Gold Coast — from $195/pp | myCHEF',
      description: 'Private chef in Kahala and the Gold Coast. Estate dinners and weekly household service from $195/pp.',
      lede:
        'Honolulu’s household-entertaining belt. Celebration dinners and the kamaʻāina weekly line overlap here — real dining rooms, not a Waikīkī galley impersonation.',
      body: [
        'Kahala and the Gold Coast hold the dining rooms that can host a paced dinner. Visitors book a celebration night. Residents book a standing weekly cook from $450 plus groceries at cost with receipts. Same crew, different calendar.',
        'Signature sits at $195–$290 a guest — groceries inside that band. Stay Chef from $1,250 a day also bills groceries at cost. After either dinner line: 20% service and Hawaiʻi GET up to 4.712%. A 50% deposit holds the date. A tip is never required.',
        'Estate driveways are the usual load-in, not a Kalākaua freight window. Compact galleys still get a bring-equipment menu when the cooktop is real. Hotel rooms without a range are declined.',
        'Town residences: /honolulu. High-rise kitchens: /waikiki. West-side villa weeks: /ko-olina. Island home still owns private chef Oahu. Card: /pricing. Address and dates: /quote.',
      ],
      zone: 'Base zone',
      photo: 'locKahala',
      faqs: [
        {
          q: 'Is Kahala the Gold Coast dinner door or a Waikīkī tower?',
          a: 'This URL is the estate belt — dining rooms from Kahala through Diamond Head-adjacent houses. /waikiki is a high-rise that needs a freight window. /honolulu is town residences and the weekly line as a city search. They do not swap.',
        },
        {
          q: 'Standing Kahala cook day — does the weekly line share Signature groceries?',
          a: 'No. The kamaʻāina standing day bills food at cost with receipts, from $450 a week on /personal-chef. Signature $195–$290 keeps groceries inside the band for a one-night celebration. Kids’ plates designed in on the weekly rhythm. They never blend.',
        },
        {
          q: 'How is a Kahala Signature night paced in the dining room?',
          a: 'Courses at the table, not a hallway cart. Menu design, a Honolulu-market shop, cooking on your range, and the kitchen empty. Groceries ride inside $195–$290. After the food: 20% service and Hawaiʻi GET up to 4.712%. Card: /pricing.',
        },
        {
          q: 'Gold Coast houseguests for three nights — which Kahala line?',
          a: 'Stay Chef from $1,250 when the dining room will cook more than once. Groceries at cost with receipts. Extra meals that day are quoted. A single celebration still uses Signature $195–$290. Write the guest list on /quote.',
        },
        {
          q: 'Do Kahala estates still need a freight window?',
          a: 'Usually a driveway and a written quiet-hours note, not a Kalākaua dock. We still confirm access before anyone shops. Tower freight is a Waikīkī problem: /waikiki. Town apartments that are not estates: /honolulu.',
        },
        {
          q: 'Kahala catering or a household celebration dinner?',
          a: 'Dinner for the house is this corridor. Ten to seventy-five guests is Oahu catering — same team, staffed — on /catering. Wedding-week formats: /weddings. Say which on /quote.',
        },
        {
          q: 'What Kahala rooms do you decline?',
          a: 'Hotel rooms without a cooktop. Houses that cannot seat the list. Outdoor-only setups with no indoor table. We say so before a deposit. If the dining room works, we cook.',
        },
        {
          q: 'How does a Kahala household reach the desk?',
          a: 'Five fields on /quote: Oʻahu, the Kahala street, dates, headcount, how to reach you. WhatsApp +1 808 468 7748 or quotes@mychef-hawaii.com. Coordinators answer in Hawaii Standard Time. See /pricing.',
        },
      ],
    },
    {
      slug: 'ko-olina',
      name: 'Ko Olina',
      h1: 'Private chef in Ko Olina, Oʻahu',
      title: 'Private chef Ko Olina — villa weeks from $1,250/day | myCHEF',
      description: 'Private chef in Ko Olina. Legal short-stay villas, Stay Chef from $1,250/day, dinners from $195/pp.',
      lede:
        'The west-side villa week. Legal short-stay inventory, provisioning for the stay, arrival-night dinner, a stocked fridge — not a town-tower impersonation of Waikīkī.',
      body: [
        'Ko Olina holds Oʻahu’s deepest legal short-stay villa pool. West-side provisioning is its own run: we shop for the week rather than making Honolulu round-trips. Villa kitchens here are usually designed for cooking, which is why a multi-day package leads.',
        'Stay Chef from $1,250 a day is the honest product for a three-to-seven-day week — groceries at cost with receipts. Signature $195–$290 a guest is the arrival-night or celebration dinner, groceries inside that band. After either line: 20% service and Hawaiʻi GET up to 4.712%. A 50% deposit holds the date. Tips are never required.',
        'One-night dinners still book when the kitchen works. Landing-night service plus groceries already in the fridge is how most weeks open. ʻEwa and Kapolei households sit closer to this west-side shop than to Kalākaua; there is no town surcharge for that corridor.',
        'Town residences: /honolulu. High-rise kitchens: /waikiki. Island home still owns private chef Oahu. Day-rate line: /pricing. Dates and the villa: /quote.',
      ],
      zone: 'Base zone',
      photo: 'koolina',
      faqs: [
        {
          q: 'Why does a Ko Olina villa week lead instead of one dinner?',
          a: 'The legal short-stay pool here is built for three-to-seven days, not a weekend drop-in. Kitchens are usually designed for cooking. Stay Chef from $1,250 a day is the lead. A one-off dinner still books when the range works. Town one-nights sit on /honolulu.',
        },
        {
          q: 'Stay Chef from $1,250 — groceries at cost or inside the day?',
          a: 'At cost with merchant receipts. The day rate is chef plus assistant, one meal. Extra meals that day are quoted. Signature $195–$290 never folds into the day fee. They never blend. Card: /pricing.',
        },
        {
          q: 'Signature $195–$290 for a Ko Olina arrival night?',
          a: 'Yes. Arrival-night dinner uses the Oʻahu Signature band, groceries inside it. After the food: 20% service and Hawaiʻi GET up to 4.712%. 50% deposit. Gratuity never required. A stocked fridge is a provisioning line, not a hidden markup on the fish.',
        },
        {
          q: 'West-side shop or a town round-trip from Honolulu?',
          a: 'West-side shop. We provision Ko Olina from this corridor, not from a Kalākaua loop. ʻEwa and Kapolei sit on the same west-side run. We will not bill a town surcharge for a house that is already west. High-rise load-in is a different problem: /waikiki.',
        },
        {
          q: 'Can you stock the fridge before we land?',
          a: 'Yes, when the stay includes provisioning and the villa access is real. Groceries for Stay Chef days bill at cost with receipts. Arrival-night Signature still includes its own shop inside $195–$290. Write landing time on /quote.',
        },
        {
          q: 'What Ko Olina rooms fail the kitchen test?',
          a: 'Hotel rooms without a cooktop. Lock-offs that cannot take a chef day. We will not impersonate a villa week in a suite. If the kitchen works, we book it. If it does not, we say so before a deposit.',
        },
        {
          q: 'Does Ko Olina share the town-tower load-in rules?',
          a: 'No. Ko Olina is a legal short-stay villa week with a west-side shop. /waikiki is a tower that needs a freight window. /honolulu is town residences and weekly households. This URL stays the lagoon-side villa.',
        },
        {
          q: 'How do I get a written Ko Olina week total?',
          a: '/quote with Oʻahu, the villa address, dates, and headcount — or WhatsApp +1 808 468 7748. quotes@mychef-hawaii.com. Hawaii-hours desk. See /pricing for the day-rate line.',
        },
      ],
    },
  ],
  kauai: [
    {
      slug: 'princeville',
      name: 'Princeville',
      h1: 'Private chef Princeville Kauai',
      title: 'Private chef Princeville Kauai — from $225/pp | myCHEF',
      description:
        'Private chef Princeville Kauai from $225/pp. North Shore estate dinners, villa weeks and Kauai catering. Inquiry stage.',
      lede:
        'Private chef Princeville is the North Shore search. Inquiry stage — send the shore and the dates, not an instant Book-now. CORE $225–$375/pp. Kauai catering for the same estates.',
      body: [
        'Garden Isle retreat, North Shore estate inventory. We crew the house properly or we do not take the night. A published band is not a live calendar. Winter surf season: send dates early. Far-North Hāʻena inherits the Hanalei-bridge weather clause — reschedule rather than forfeit.',
        'Signature sits at $225–$375 a guest — a Maui-class band earned by a thinner supplier bench, not by a waitlist story. Date Night is a fixed evening at $975–$1,425. Stay Chef from $1,650 a day, groceries at cost with receipts. After either line: 20% service and Hawaiʻi GET up to 4.712%. A 50% deposit holds a date only after we can staff that week.',
        'Mist on the lānai is a Tuesday. Every outdoor Princeville table gets a covered backup in writing before anyone deposits. Romance tables and quieter retreat weeks sit in the same kitchen. Hotel rooms without a cooktop are declined.',
        'South Shore arrival nights: /poipu. Valley weather clause: /hanalei. Island home still owns private chef Kauai. Tariff: /pricing. Shore and dates: /quote.',
      ],
      zone: 'North Shore — published zone',
      photo: 'kauaiNorth',
      faqs: [
        {
          q: 'What does inquiry-stage mean for a Princeville estate?',
          a: 'We crew the house properly or we do not take the night. Send the shore and the dates on /quote. We write back when a Kauaʻi team can staff that week. A band is not a live Book-now. We will not hold a fake roster. Proof is the published $225–$375 band and a written total. This URL stays the North Shore estate door; home holds private chef Kauai.',
        },
        {
          q: 'North Shore kitchen versus a Poʻipū arrival house — what changes?',
          a: 'Princeville cooks estate tables: winter surf calendars, mist, and the bridge clause when the list sits past the river. Poʻipū cooks sunnier arrival nights closer to Līhuʻe. Food stays $225–$375 a guest on both shores. Drive time is a published zone line. South Shore door: /poipu.',
        },
        {
          q: 'Why is Signature $225–$375 a Maui-class band on this shore?',
          a: 'Thinner supplier bench, longer shop, early menu locks. Groceries ride inside Signature. After the food: 20% service and Hawaiʻi GET up to 4.712%. 50% deposit only after we can staff the week. Gratuity never required. Card: /pricing.',
        },
        {
          q: 'Stay Chef from $1,650 — how do groceries print on the North Shore?',
          a: 'Day rate from $1,650. Groceries at cost with receipts. Extra meals that day are their own line. Hanalei weeks inherit the bridge clause on every extra meal, not only the welcome night. Signature never folds into the day fee. Inquiry: /quote.',
        },
        {
          q: 'What if it rains on a Princeville lānai?',
          a: 'We write a covered backup on every outdoor North Shore table before a deposit. Mist is weather, not a mood. If the Hanalei road closes, we reschedule rather than keep the night. That clause sits on the quote. Valley page: /hanalei.',
        },
        {
          q: 'Date Night $975–$1,425 or a family list in Princeville?',
          a: 'Two seats use Date Night as a fixed evening. A family list uses Signature $225–$375 a guest, kids’ plates designed in. Stay Chef from $1,650 if the week cooks more than once. They never blend. Send headcount on /quote.',
        },
        {
          q: 'Princeville catering or a private chef dinner?',
          a: 'Dinner for the house is this corridor. Ten to seventy-five guests is Kauai catering — same team, staffed — on /catering. Estate wedding formats: /weddings. Inquiry list, not an instant book.',
        },
        {
          q: 'How do I send a Princeville inquiry — not a Book-now?',
          a: 'Five fields on /quote: Kauaʻi, shore, dates, headcount, how to reach you. Or WhatsApp +1 808 468 7748. quotes@mychef-hawaii.com. Hawaii-hours desk. We reply when a crew can hold that week. See /pricing.',
        },
      ],
    },
    {
      slug: 'poipu',
      name: 'Poʻipū',
      h1: 'Private chef Poipu Kauai',
      title: 'Private chef Poipu Kauai — from $225/pp | myCHEF',
      description:
        'Private chef Poipu Kauai from $225/pp. South Shore arrival-night dinners, retreat weeks and Kauai catering in Poʻipū and Kōloa.',
      lede:
        'Private chef Poipu Kauai is a related search we take at inquiry. Sunnier, steadier, closer to Līhuʻe. Arrival-night dinner plus Stay Chef — or Kauai catering for the house. Not an instant Book-now.',
      body: [
        'Garden Isle retreat, South Shore. Poʻipū and Kōloa sit closer to Līhuʻe staging than Princeville. Arrival-night dinner is the usual first ask: you land, the fridge is not empty, someone else is at the range. A published band is still not a live calendar — send the shore and the dates.',
        'Signature stays $225–$375 a guest. Stay Chef from $1,650 a day, groceries at cost with receipts. Date Night $975–$1,425 for two seats. After the food: 20% service and Hawaiʻi GET up to 4.712%. A 50% deposit holds a date only after we can staff that week. Gratuity is never required.',
        'Sunnier does not mean we skip a covered plan. Wood-grilled catch when the house has fire; a written indoor backup when it does not. Hotel rooms without a cooktop in the resort belt are declined. Retreat weeks and small estate celebrations sit in the same kitchen.',
        'North Shore estates: /princeville. East-side town nights: /kapaa. Island home still owns private chef Kauai. Numbers: /pricing. Inquiry form: /quote.',
      ],
      zone: 'South Shore',
      photo: 'kauaiSouth',
      faqs: [
        {
          q: 'South Shore kitchen — how is Poʻipū different from Princeville?',
          a: 'Shorter drive from Līhuʻe. Sunnier, steadier inventory in Poʻipū and Kōloa. Arrival-night dinners lead here; North Shore estate weeks and winter surf calendars live on /princeville. Food stays $225–$375 a guest on both shores. Drive time is a published zone line, not a discount on the fish.',
        },
        {
          q: 'Is an arrival-night dinner a live Book-now?',
          a: 'No. Kauaʻi is inquiry-stage. Send the South Shore address and the dates on /quote. We write back when a crew can staff that landing night. A band is not a calendar. We crew properly or not at all.',
        },
        {
          q: 'Do $225–$375 and Stay Chef from $1,650 still apply in Poʻipū?',
          a: 'Yes. Signature $225–$375 a guest, groceries inside that band. Stay Chef from $1,650 a day, groceries at cost with receipts. After either line: 20% service and Hawaiʻi GET up to 4.712%. 50% deposit only after we can staff the week. Card: /pricing.',
        },
        {
          q: 'Closer to Līhuʻe — does the South Shore food band drop?',
          a: 'No. Closer drive. Same Kauaʻi card. The zone line is shorter than Princeville; the per-guest band does not shrink. East-side Kapaʻa is closer still and still the same Signature numbers — /kapaa.',
        },
        {
          q: 'Sunnier Poʻipū — do you still write a rain plan?',
          a: 'Yes. We write a covered backup on every outdoor South Shore table before a deposit. Wood fire when the house can take it. We will not sell an uncovered lawn as the only plan. North Shore mist is a different clause: /princeville.',
        },
        {
          q: 'Retreat week or Date Night for two on this shore?',
          a: 'Date Night is $975–$1,425 as a fixed evening for two seats. A retreat house that cooks more than once uses Stay Chef from $1,650. Full-board exists for houses that actually cook three times — dietary designed in, not promised as theatre. Staffed rooms and the sample estate menu live on /catering. They never blend. Send the rhythm on /quote.',
        },
        {
          q: 'What South Shore rooms do you decline?',
          a: 'Hotel rooms without a cooktop. Houses that cannot seat the list. Outdoor-only setups with no indoor backup. We say so before anyone deposits. If the kitchen works, we take the inquiry.',
        },
        {
          q: 'How do I join the Kauaʻi inquiry list from Poʻipū?',
          a: '/quote with Kauaʻi, the South Shore address, dates, and headcount — or WhatsApp +1 808 468 7748. quotes@mychef-hawaii.com. Hawaii-hours desk. We reply when a team can hold that week. See /pricing.',
        },
      ],
    },
    {
      slug: 'hanalei',
      name: 'Hanalei',
      h1: 'Private chef Hanalei Kauai',
      title: 'Private chef Hanalei Kauai — from $225/pp | myCHEF',
      description:
        'Private chef Hanalei Kauai from $225/pp. North Shore dinners and Kauai catering. Weather and road honesty published up front.',
      lede:
        'Private chef Hanalei is the valley search. The bridge is real. We plan around it instead of arguing with it. CORE from $225/pp.',
      body: [
        'Estate dinners and Kauai wedding catering when the guest list grows. 72-hour notice for far-North. CORE from $225/pp.',
        'The one-lane bridge is the logistics. A closed road moves the night; it does not eat the deposit. Clause: /hanalei-bridge. Bluff estates stay on /princeville. Hāʻena is quote-only. South Shore arrival nights: /poipu.',
        'Signature groceries stay inside $225–$375 a guest. Stay Chef from $1,650 a day bills the shop at cost with receipts. They never blend. Hotel rooms without a cooktop are declined. Written inquiry: /quote?island=kauai. Tariff: /pricing.',
      ],
      zone: 'North Shore',
      photo: 'locHanalei',
      faqs: [
        {
          q: 'What does inquiry-stage mean for a Hanalei valley dinner?',
          a: 'Garden Isle Retreat is an inquiry, not a live Book-now. Send the valley address, the dates, and the headcount on /quote?island=kauai. We write back when a Kauaʻi crew can staff that week. A published band is not a calendar. This URL stays the Hanalei town door. The island home at / still holds the Kauaʻi dinner title.',
        },
        {
          q: 'If the Hanalei bridge closes, does the night forfeit?',
          a: 'No. Valley and far-North nights inherit a written clause: 72-hour notice, reschedule rather than forfeit. The deposit is not eaten by a road closure. The clause lives on /hanalei-bridge and sits on the quote before anyone pays. Hāʻena, past the river, is quote-only. This page is the valley town.',
        },
        {
          q: 'Are Hanalei Signature groceries inside $225–$375?',
          a: 'Yes. A Signature night in the valley is $225–$375 a guest, and the shop is already inside that band. There is no second grocery invoice on that dinner. After the food, 20% service and Hawaiʻi GET up to 4.712% print as separate lines. A 50% deposit waits until a crew can staff the week. Gratuity is never required. The day-rate shop is a different model. Card: /pricing.',
        },
        {
          q: 'Stay Chef from $1,650 in Hanalei — groceries at cost?',
          a: 'A valley week that cooks more than once uses Stay Chef from $1,650 a day: chef and assistant, one meal in the day rate. Groceries bill at cost with merchant receipts and zero markup. A second meal that day is quoted, not absorbed. Signature $225–$375 does not fold into the day fee. If the address sits past the bridge, every meal inherits /hanalei-bridge, not only the welcome night. Form: /quote?island=kauai.',
        },
        {
          q: 'Hanalei town, a Princeville estate, or Hāʻena — which quote?',
          a: 'This page is Hanalei town and the valley houses. /princeville is the bluff estate inventory. Hāʻena is quote-only, with 72-hour notice, past the bridge. The Signature band is the same Kauaʻi card. The drive and the weather clause are not. South Shore arrival nights sit on /poipu. Island home: /.',
        },
        {
          q: 'Can a Hanalei wedding or estate list be staffed?',
          a: 'A house dinner is this corridor. When the list grows, the night is staffed and the total is written — not a chat estimate. Far-North weeks inherit /hanalei-bridge on every meal. Staffed rooms: /catering. The estate week: /weddings. Still inquiry. We will not hold a roster that does not exist.',
        },
        {
          q: 'Will you cook a Hanalei hotel room with no cooktop?',
          a: 'No. Rooms without a cooktop are declined. A lock-off that cannot take a chef day is declined. If the valley kitchen has heat, cold storage, and seats, we take the inquiry. If it does not, we say so before a deposit. Resort suites are not a hidden villa week.',
        },
        {
          q: 'How do I enquire for Hanalei — dates, shore, and headcount?',
          a: 'This is a paid inquiry for a written quote, not a free menu tutorial. Open /quote?island=kauai with dates, the North Shore address, and headcount. Or WhatsApp +1 808 468 7748 — https://wa.me/18084687748 — when the shore and the dates are ready to book. Desk: quotes@mychef-hawaii.com. Hawaii-hours reply when a crew can hold that week. Card: /pricing.',
        },
      ],
    },
    {
      slug: 'kapaa',
      name: 'Kapaʻa',
      h1: 'Private chef in Kapaʻa, Kauaʻi',
      title: 'Private chef Kapaa Kauai — from $225/pp | myCHEF',
      description: 'Private chef in Kapaʻa and the east side. Household dinners from $225/pp.',
      lede: 'East-side town, closer to the Līhuʻe base than either shore villa belt. Honest, not the hero product — still a real booking.',
      body: ['Family Feast and weekly-style nights. Same Kauaʻi starting prices.'],
      zone: 'East side — included',
      photo: 'locKapaa',
      faqs: [{ q: 'Is this cheaper?', a: 'Closer drive. Menu band is still the Kauaʻi card.' }],
    },
  ],
  bigisland: [
    {
      slug: 'kona',
      name: 'Kona',
      h1: 'Private chef in Kona, Hawaiʻi Island',
      title: 'Private chef Kona Hawaii — from $210/pp | myCHEF',
      description:
        'Private chef Kona and Kailua-Kona from $210/pp. West-side villa dinners, Stay Chef weeks, Ironman-week honesty. ENTRY from $165.',
      lede:
        'Private chef Kona is the west-side corridor — Kailua-Kona, Keauhou, and the south end of the Kohala run. Inquiry-stage: send the shore and the dates, not an instant Book-now.',
      body: [
        'We crew the house properly or we do not take the night. A published band is not a live calendar. Signature sits at $210–$325 a guest — groceries inside that band. ENTRY from $165 when the kitchen and the list fit a shorter night. Stay Chef from $1,450 a day, groceries at cost with receipts.',
        'After either line: 20% service and Hawaiʻi GET up to 4.712%. A 50% deposit holds a date only after we can staff that week. Gratuity is never required. Ironman and other event weeks compress the calendar — flag those dates on the inquiry.',
        'East side is a different day, never a same-afternoon add-on from town. Named Kona coffee follows origin-labeling rules; we do not invent farm names. Hotel rooms without a cooktop are declined.',
        'Resort residences: /waikoloa. Ranch elevation: /waimea. Island home still owns private chef Big Island. Tariff: /pricing. Inquiry form: /quote.',
      ],
      zone: 'West-side base',
      photo: 'konaKitchen',
      faqs: [
        {
          q: 'What does inquiry-stage mean for a Kona villa?',
          a: 'We crew the house properly or we do not take the night. Send the west-side address and the dates on /quote. We write back when a Hawaiʻi Island team can staff that week. A band is not a live Book-now. We will not hold a fake roster.',
        },
        {
          q: 'Hilo from a Kona chef day — same afternoon?',
          a: 'No. East side is 2.5–3 hours — dedicated staffing, quoted as its own day. West-side villas are the default. We will not sell a same-day crossing. Crossing document: /east-side.',
        },
        {
          q: 'Signature $210–$325 or ENTRY from $165 on this shore?',
          a: 'Signature $210–$325 a guest, groceries inside that band, is the usual west-side dinner. ENTRY from $165 is the shorter night when the kitchen and the list fit it. After either line: 20% service and Hawaiʻi GET up to 4.712%. 50% deposit only after we can staff. Card: /pricing.',
        },
        {
          q: 'Stay Chef from $1,450 — how do Kona groceries print?',
          a: 'Day rate from $1,450. Groceries at cost with receipts. Extra meals that day are their own line. Signature never folds into the day fee. A week that cooks more than once should not be four Signature nights stacked in a chat. Inquiry: /quote.',
        },
        {
          q: 'Ironman week — can you still take a west-side inquiry?',
          a: 'Yes, with compressed availability. Flag those dates early on /quote or WhatsApp +1 808 468 7748. We will not invent a spare crew. Event weeks sit on /ironman-weeks. This URL stays the Kona dinner door.',
        },
        {
          q: 'Named Kona coffee on the plate — farm names?',
          a: 'Named coffee follows origin-labeling rules. We do not invent farm names. Ranch or farm credits appear only after we hold written verification. The coffee-labeling note is /coffee-act-198. This page stays the dinner door.',
        },
        {
          q: 'Kona town versus a Waikoloa resort residence?',
          a: 'This corridor is town, Keauhou, and the south end of the run. /waikoloa is the resort-residence belt inside the 30-minute radius. Same inquiry desk. Same $210–$325 food band. Different inventory. Ranch elevation: /waimea.',
        },
        {
          q: 'How do I send a Kona inquiry — not a Book-now?',
          a: 'Five fields on /quote: Hawaiʻi Island, shore, dates, headcount, how to reach you. Or WhatsApp +1 808 468 7748. quotes@mychef-hawaii.com. Hawaii-hours desk. We reply when a crew can hold that week. See /pricing.',
        },
      ],
    },
    {
      slug: 'waimea',
      name: 'Waimea',
      h1: 'Private chef in Waimea, Hawaiʻi Island',
      title: 'Private chef Waimea / Kamuela — ranch country | myCHEF',
      description: 'Private chef in Waimea (Kamuela). Upcountry ranch houses, cooler elevation, published surcharge.',
      lede:
        'Ranch country above the Kohala resorts. Cooler elevation. The surcharge is the drive and the rise — published on the quote, not hidden. Inquiry-stage.',
      body: [
        'Estate and ranch tables in Kamuela. Signature still sits at $210–$325 a guest — groceries inside that band. Stay Chef from $1,450 a day, groceries at cost with receipts. The Waimea / Hāmākua zone line prints as its own row. After the food: 20% service and Hawaiʻi GET up to 4.712%.',
        'A 50% deposit holds a date only after we can staff that week. Gratuity is never required. This is not the Kauaʻi west-side Waimea. Hotel rooms without a cooktop are declined. Cooler evenings still get a covered backup when the table is outdoors.',
        'West-side town: /kona. Resort residences: /waikoloa. Island home still owns private chef Big Island. Tariff: /pricing. Inquiry form: /quote.',
      ],
      zone: 'Surcharge — Waimea / Hāmākua',
      photo: 'locWaimea',
      faqs: [
        {
          q: 'Why is Waimea a surcharge when Kona is base?',
          a: 'The drive and the elevation. Ranch country sits above the Kohala resorts. The zone line prints on the quote — it is not folded into the fish. West-side town stays base: /kona. Resort belt: /waikoloa.',
        },
        {
          q: 'Kamuela ranch house — same $210–$325 food band?',
          a: 'Yes. Signature $210–$325 a guest, groceries inside that band. The surcharge is the zone line, not a new menu card. After the food: 20% service and Hawaiʻi GET up to 4.712%. 50% deposit only after we can staff. Card: /pricing.',
        },
        {
          q: 'Stay Chef from $1,450 upcountry — groceries and the zone line?',
          a: 'Day rate from $1,450. Groceries at cost with receipts. Extra meals that day are quoted. The Waimea zone line still prints once for the chef day. Signature never folds into the day fee. Send the week on /quote.',
        },
        {
          q: 'Is this the same Waimea as Kauaʻi’s west side?',
          a: 'No. This host is Kamuela / ranch country on Hawaiʻi Island. Kauaʻi Waimea is a different island, a different inquiry desk, and a different surcharge story. Do not treat the two URLs as one place.',
        },
        {
          q: 'Ranch wedding on this elevation — dinner door or estate format?',
          a: 'A ranch dinner for the house is this corridor. Estate formats with staffing live on /weddings and /catering — quoted, inquiry-stage. A reception crew is not a Signature crew. Headcount on /quote.',
        },
        {
          q: 'Cooler Waimea nights — outdoor table rules?',
          a: 'We write a covered backup before a deposit. Elevation weather is a Tuesday. We will not sell an uncovered lawn as the only plan. Resort lanais sit below this grade: /waikoloa.',
        },
        {
          q: 'Gate codes and ranch access — when do you ask?',
          a: 'On the inquiry, before anyone drives upcountry. We will not discover a locked gate at elevation the afternoon of service. Send access notes with the Kamuela address on /quote. A band is not a live Book-now.',
        },
        {
          q: 'How do I put a Kamuela surcharge on the inquiry?',
          a: 'Name the ranch address and the elevation on /quote so the Waimea zone line can print. WhatsApp +1 808 468 7748. quotes@mychef-hawaii.com. We reply when a crew can hold that week. See /pricing.',
        },
      ],
    },
    {
      slug: 'waikoloa',
      name: 'Waikoloa',
      h1: 'Private chef in Waikoloa, Hawaiʻi Island',
      title: 'Private chef Waikoloa — Kohala Coast from $210/pp | myCHEF',
      description: 'Private chef in Waikoloa and the Kohala resort corridor. Villa weeks and dinners from $210/pp.',
      lede:
        'Inside the 30-minute west-side radius. Seven resort communities share this corridor. Inquiry-stage — we crew the house or we do not take the night.',
      body: [
        'Same Kona–Kohala team. Signature $210–$325 a guest, groceries inside that band. Stay Chef from $1,450 a day is the honest villa-week cook, groceries at cost with receipts. After either line: 20% service and Hawaiʻi GET up to 4.712%. A 50% deposit holds a date only after we can staff that week.',
        'Mauna Lani and Mauna Kea resort residences sit on this same corridor — not a second island. We will not pretend to cover Hilo from here in an afternoon. Hotel rooms without a cooktop in the resort belt are declined.',
        'Kona town and Keauhou: /kona. Ranch elevation: /waimea. The radius cell is /kohala-corridor. Island home still owns private chef Big Island. Numbers: /pricing. Inquiry: /quote.',
      ],
      zone: 'Base — Kohala corridor',
      photo: 'locWaikoloa',
      faqs: [
        {
          q: 'Which Waikoloa kitchens sit inside the 30-minute corridor?',
          a: 'Resort residences with a working range, cold storage, and seats for the list. Seven communities share this radius. A hotel room with a minibar is declined. Put the property type on /quote. Town kitchens sit south: /kona.',
        },
        {
          q: 'Mauna Lani or Mauna Kea — a second island or this door?',
          a: 'This door. Same west-side corridor, same inquiry desk, same $210–$325 food band. We will not market a second company for a neighboring resort. The radius map is /kohala. Ranch houses sit inland: /waimea.',
        },
        {
          q: 'Do $210–$325 and Stay Chef from $1,450 still apply in Waikoloa?',
          a: 'Yes. Signature $210–$325 a guest, groceries inside that band. Stay Chef from $1,450 a day, groceries at cost with receipts. After either line: 20% service and Hawaiʻi GET up to 4.712%. 50% deposit only after we can staff. Card: /pricing.',
        },
        {
          q: 'Can you cover Hilo from a Waikoloa chef day?',
          a: 'No. East side is a dedicated crossing — 2.5–3 hours — never an afternoon add-on from the Kohala resorts. We will not sell that shortcut. Crossing document: /east-side.',
        },
        {
          q: 'Inquiry-stage on the Kohala resorts — what does that mean?',
          a: 'We crew the house properly or we do not take the night. Send the resort address and the dates. A band is not a live Book-now. We will not hold a fake roster. Form: /quote.',
        },
        {
          q: 'Villa week versus one Signature night in Waikoloa?',
          a: 'Stay Chef from $1,450 is the villa-week cook. One celebration night uses Signature $210–$325. They never blend. Extra meals on a Stay Chef day are quoted. Write the rhythm on /quote.',
        },
        {
          q: 'What Waikoloa rooms fail the kitchen test?',
          a: 'Hotel rooms without a cooktop. Lock-offs that cannot take a chef day. Outdoor-only setups with no indoor table. We say so before anyone deposits. If the kitchen works, we take the inquiry.',
        },
        {
          q: 'How do I join the Hawaiʻi Island inquiry list from Waikoloa?',
          a: '/quote with Hawaiʻi Island, the Waikoloa address, dates, and headcount — or WhatsApp +1 808 468 7748. quotes@mychef-hawaii.com. Hawaii-hours desk. We reply when a team can hold that week. See /pricing.',
        },
      ],
    },
    {
      slug: 'kohala',
      name: 'Kohala Coast',
      h1: 'Private chef on the Kohala Coast',
      title: 'Private chef Kohala Coast — from $210/pp | myCHEF',
      description: 'Private chef Kohala Coast. Waikoloa, Mauna Lani, Mauna Kea resort belt. Published starting prices.',
      lede: 'The opening move on Hawaiʻi Island: one 30-minute service radius, the island’s highest villa ADRs.',
      body: ['Sourcing-led dinners. Producer names only with written verification.'],
      zone: 'Base zone',
      photo: 'kohalaTable',
      faqs: [{ q: 'Big Island or Hawaiʻi Island?', a: 'Both names. Hostname is bigisland.mychef-hawaii.com.' }],
    },
  ],
};

export function getMoneyNeighborhood(island: IslandId, slug: string): MoneyNeighborhood | undefined {
  return moneyNeighborhoods[island].find((n) => n.slug === slug);
}

/** Sideways dinner doors — 2–3 siblings, not a full island dump. */
const CORRIDOR_SIBLINGS: Record<string, string[]> = {
  wailea: ['kaanapali', 'kapalua', 'makena'],
  kaanapali: ['kapalua', 'wailea', 'lahaina'],
  kapalua: ['kaanapali', 'wailea', 'lahaina'],
  honolulu: ['waikiki', 'kahala', 'ko-olina'],
  waikiki: ['honolulu', 'kahala', 'ko-olina'],
  'ko-olina': ['honolulu', 'waikiki', 'kailua'],
  princeville: ['poipu', 'hanalei'],
  poipu: ['princeville', 'hanalei', 'kapaa'],
  makena: ['wailea', 'kihei', 'kaanapali'],
  kahala: ['honolulu', 'waikiki', 'ko-olina'],
  kailua: ['honolulu', 'kahala', 'ko-olina'],
  kihei: ['wailea', 'makena', 'lahaina'],
  lahaina: ['kaanapali', 'kapalua', 'wailea'],
  kona: ['waikoloa', 'waimea', 'kohala'],
  waikoloa: ['kona', 'kohala', 'waimea'],
  waimea: ['kona', 'waikoloa', 'kohala'],
};

export function siblingCorridors(island: IslandId, slug: string): MoneyNeighborhood[] {
  const all = moneyNeighborhoods[island];
  const preferred = CORRIDOR_SIBLINGS[slug];
  const slugs = preferred ?? all.filter((n) => n.slug !== slug).slice(0, 3).map((n) => n.slug);
  return slugs.map((s) => all.find((n) => n.slug === s)).filter((n): n is MoneyNeighborhood => Boolean(n));
}

export function coreFromPrice(island: IslandId): string {
  const t = getTiers(island).find((x) => x.tier === 'CORE');
  return t ? `from $${t.band[0]}/pp` : '';
}

export { coreLow };
