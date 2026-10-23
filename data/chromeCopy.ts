import type { IslandId } from './islands';
import { DESK_EMAIL, DESK_PHONE_DISPLAY, DESK_TEL, DESK_WHATSAPP } from '@/lib/contact';

/** Homepage chrome copy — unique H1s stay locked in islandOffers / HomeView. */
export const hubChrome = {
  kicker: 'myCHEF Hawaii · Private dining in your villa',
  h1: 'Private chefs & catering across all four Hawaiian islands.',
  lede: 'Private chef Hawaii service on Oʻahu, Maui, Kauaʻi and Hawaiʻi Island: a private dinner, a Stay Chef or a staffed event in your villa. We shop, cook, serve and clean in a real kitchen.',
  price:
    'Signature dinner from $195 a guest on Oʻahu, $225 on Maui and Kauaʻi, and $210 on Hawaiʻi Island. Stay Chef from $1,250 Oʻahu / $1,550 Maui / $1,650 Kauaʻi / $1,450 Hawaiʻi Island (inquiry).',
  oneIslandCta: 'I need one island',
  multiIslandCta: 'I need multiple islands',
  ctaHelper: 'Only visiting one island? Start on that island’s site for local menus and rate cards.',
  priceLinkLabel: 'See published prices',
  multiH2: 'Cooking on more than one island?',
  multiLine:
    'One coordinator, one master quote. Resident chefs cook on each island — no fly-in surcharge. Tell us the itinerary and we sequence the crews.',
  multiCta: 'Plan a multi-island itinerary',
  coresH2: 'A chef for the house, or catering for the event.',
  chefLine: 'One dinner in the villa. Shop, cook, serve, clean. Stay Chef weeks are on the Stay Chef page.',
  chefPrice: 'From $195 a guest on Oʻahu · $225 on Maui and Kauaʻi · $210 on Hawaiʻi Island',
  cateringLine: 'Staffed villa events of about 10–75. Buffet or plated. One-table dinners are on the in-villa dinner page.',
  cateringPrice: 'From $195 a guest on Oʻahu · $225 on Maui and Kauaʻi · $210 on Hawaiʻi Island',
  howH2: 'Tell us the table. We write the menu and cook it in the house.',
  closer: 'Island, date, guest count and kitchen. That is enough to start.',
  closerLine: 'Oʻahu and Maui receive a written quote. Kauaʻi and Hawaiʻi Island begin with an inquiry.',
  chooserH2: 'Choose where we cook.',
  chooserIntro:
    'Oʻahu and Maui take quotes now; Kauaʻi and Hawaiʻi Island are by inquiry only. Stay on one island — change it only when you mean to.',
};

export const processSteps = [
  {
    n: '01',
    title: 'Tell us the table',
    line: 'Send the island, date, villa address, guest count and occasion.',
  },
  {
    n: '02',
    title: 'We write the menu and quote',
    line: 'Your menu and written quote show 20% service and Hawaiʻi GET up to 4.712% separately.',
  },
  {
    n: '03',
    title: 'We shop and cook',
    line: 'We shop for the menu, then cook it in your villa’s real kitchen.',
  },
  {
    n: '04',
    title: 'You host. We clear.',
    line: 'We serve the table, clear every course and leave the kitchen clean.',
  },
] as const;

export const islandChooserCopy: Record<
  IslandId,
  { tagline: string; line: string; price: string; alt: string }
> = {
  oahu: {
    tagline: 'Metropolitan luxury · Waikīkī to North Shore',
    line: 'Honolulu to Ko Olina, for villa dinners and staffed events. Quotes open now.',
    price: 'Signature dinner from $195 a guest · Stay Chef from $1,250 a day',
    alt: 'A chef plating sesame ahi on an Oʻahu villa counter with Diamond Head and Waikīkī lights at twilight — myCHEF Oʻahu private chef.',
  },
  maui: {
    tagline: 'Resort-coast dining · Wailea to Kapalua',
    line: 'Wailea, Kīhei and West Maui, for villa dinners and staffed events. Quotes open now.',
    price: 'Signature dinner from $225 a guest · Stay Chef from $1,550 a day',
    alt: 'A candlelit Maui villa terrace table at dusk with seared fish and heliconia against the west-side sunset — myCHEF Maui private chef.',
  },
  kauai: {
    tagline: 'Garden-isle estates · Princeville to Poʻipū',
    line: 'Princeville and Hanalei to Poʻipū, for villa dinners and staffed events. Inquiry stage.',
    price: 'Signature dinner from $225 a guest · Stay Chef from $1,650 a day · Inquiry',
    alt: 'An estate table on Kauaʻi looking into a misted valley of fluted mountains at golden hour — myCHEF Kauaʻi private chef, by inquiry.',
  },
  bigisland: {
    tagline: 'Volcanic minimalism · Kona–Kohala Coast',
    line: 'Kona and the Kohala Coast first, for villa dinners and staffed events. Inquiry stage.',
    price: 'Signature dinner from $210 a guest · Stay Chef from $1,450 a day · Inquiry',
    alt: 'A lava-coast terrace table on Hawaiʻi Island at sunset with fruit and wine glasses, Mauna Loa on the horizon — myCHEF Hawaiʻi Island private chef, by inquiry.',
  },
};

/** Hub /islands only — statewide routing. Island sites keep their own /islands copy. */
export const hubIslandsPage = {
  guideHeading: 'How the four hosts differ.',
  paras: [
    'Four hosts, four crews. Oʻahu and Maui take a written quote. Kauaʻi is request availability. Hawaiʻi Island is join the inquiry list, and only the west side is in that request. Hilo, on the east side, is a dedicated day on the Hawaiʻi Island site. It is not another island, and it is not a same-afternoon add-on.',
    `One booking cannot cover two islands. Each island is quoted alone because the kitchen, the drive, and the people are not shared. There is no same-day crossing. A hotel room without a real cooktop is declined on every host. The cards below open the site that has the house. Start on [the quote form](/quote) and name one island. Desk: ${DESK_EMAIL}, +1 ${DESK_PHONE_DISPLAY} (${DESK_TEL}), WhatsApp ${DESK_WHATSAPP}.`,
  ],
  feeNote:
    'Before 20% service and Hawaiʻi GET up to 4.712%, shown as separate lines; 50% deposit.',
  faqs: [
    {
      q: 'How do the four island sites differ?',
      a: 'Each host has its own chefs, zones, and booking posture. Oʻahu and Maui issue a written quote. Kauaʻi asks you to request availability. Hawaiʻi Island asks you to join the inquiry list. This page does not retell the towns.',
    },
    {
      q: 'Which islands take a written quote, and which take an inquiry?',
      a: 'Oʻahu and Maui take a written quote. Kauaʻi is request availability. Hawaiʻi Island is join the inquiry list. A card on this page is not a held date on the inquiry islands.',
    },
    {
      q: 'Can one booking span two islands?',
      a: 'No. A stay that moves islands is two bookings. One coordinator can keep the thread. The crews, the kitchens, and the totals stay separate. Name one island per night.',
    },
    {
      q: 'Why is each island quoted on its own?',
      a: 'The drive, the kitchen, and the crew do not transfer. A rate on one host is not a rate on the next. Open the card for the house you actually have, then that host’s quote.',
    },
    {
      q: 'Can a crew cross between islands the same day?',
      a: 'No. There is no same-day inter-island crossing. Guests may fly. The kitchen stays where it is. Book the next island as its own day.',
    },
    {
      q: 'Is Hilo included when I open the Hawaiʻi Island card?',
      a: 'No. That card is west side first: Kona, Waikoloa, and the Kohala Coast. Hilo is a dedicated day on the Hawaiʻi Island site. It is not implied, and it is not a same-day add-on.',
    },
    {
      q: 'What if the room is a hotel room without a kitchen?',
      a: 'We decline it, on every island, before a deposit. The product is a cooktop, a fridge, and a table. A coffee maker or a minibar is not a kitchen. Say what the room has when you write.',
    },
    {
      q: 'How do I start from this page?',
      a: `Open the card for one island, or send that island on [the quote form](/quote). Oʻahu and Maui get a written quote. Kauaʻi is request availability. Hawaiʻi Island is join the inquiry list. Desk: ${DESK_EMAIL}, +1 ${DESK_PHONE_DISPLAY} (${DESK_TEL}), WhatsApp ${DESK_WHATSAPP}.`,
    },
  ],
};

export const islandHeroLede: Record<IslandId, string> = {
  oahu:
    'Resident villa and home chefs — Honolulu residences to Ko Olina — only in a working kitchen. We shop, cook, serve and clean; Signature dinner starts at $195 a guest and Stay Chef at $1,250 a day.',
  maui:
    'A table in your own villa — Wailea, Kīhei, West Maui — when the kitchen is real. Signature dinner starts at $225 a guest, Stay Chef at $1,550 a day. Request a written quote.',
  kauai:
    'Garden Isle, both shores: Princeville and Hanalei to the north, Poʻipū to the south, always in a villa with a real kitchen. By inquiry — not instant booking. Signature dinner from $225 a guest.',
  bigisland:
    'Expedition starts on Kona and the Kohala Coast, with west-side villas setting the route. Inquiry-stage — Enquire dates. Every booking requires a real kitchen.',
};

export const heroFocal: Record<'hub' | IslandId, string> = {
  hub: '58% 42%',
  oahu: '62% 45%',
  maui: '55% 40%',
  kauai: '50% 38%',
  bigisland: '60% 45%',
};
