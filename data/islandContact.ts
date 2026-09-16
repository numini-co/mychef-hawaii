import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';
import { DESK_EMAIL, DESK_PHONE_DISPLAY, DESK_WHATSAPP } from '@/lib/contact';

/**
 * Island /contact documents. Distinct from /quote (the form) and from
 * /help/getting-started. No second form. Titles must not use money keywords.
 * Phone, email, and WhatsApp are published and match JSON-LD.
 */

export interface IslandContactPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const islandContact: Record<IslandId, IslandContactPage> = {
  oahu: {
    h1: 'Reach the Oahu desk — quote form, WhatsApp, Hawaii hours.',
    title: 'Oahu desk — quote form, WhatsApp, (808) 468-7748 | myCHEF',
    description:
      'Reach the Oahu desk: /quote form, WhatsApp, quotes@mychef-hawaii.com, (808) 468-7748. Quotes open. Hawaii Standard Time. No street office in Honolulu.',
    lede:
      '/quote is the form. WhatsApp, email, and (808) 468-7748 reach the same Hawaii desk — Hawaii Standard Time, no walk-in office in Honolulu.',
    kicker: 'Oʻahu · Contact',
    photo: 'contactOahu',
    body: [
      `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on this host’s home. This page does not steal that title. It is how a Kahala or Ko Olina enquiry reaches a person.`,
      `Use /quote — five fields, typical reply in Hawaii business hours. Or message us on WhatsApp, write ${DESK_EMAIL}, or call ${DESK_PHONE_DISPLAY}. There is no street office and no walk-in. Quotes are open on Oʻahu.`,
      'Live corridors: /honolulu, /waikiki, /kailua, /north-shore, /kahala, /ko-olina. If the kitchen cannot host a chef, we decline in writing — not after a deposit.',
    ],
    faqs: [
      {
        q: 'Same as /quote?',
        a: 'That URL is the form. This page is how to reach the Oahu desk: quote form, WhatsApp, email, (808) 468-7748, Hawaii Standard Time — no street office.',
      },
      {
        q: 'Do you have an Honolulu office?',
        a: `No walk-in and no street office. The published line is ${DESK_PHONE_DISPLAY} (tel:+18084687748), ${DESK_EMAIL}, WhatsApp ${DESK_WHATSAPP}, and /quote.`,
      },
    ],
  },
  maui: {
    h1: 'Reach the Maui desk — Wailea to West Maui, quotes open.',
    title: 'Maui desk — Wailea & West Maui, WhatsApp, (808) 468-7748 | myCHEF',
    description:
      'Reach the Maui desk: /quote form, WhatsApp, quotes@mychef-hawaii.com, (808) 468-7748. Wailea and West Maui. Quotes open. Hawaii Standard Time. No street office.',
    lede:
      '/quote is the form. WhatsApp, email, and (808) 468-7748 reach the Wailea / West Maui desk — Hawaii Standard Time, quotes open, no walk-in office.',
    kicker: 'Maui · Contact',
    photo: 'contactMaui',
    body: [
      `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. This page does not steal that title. It is how a Wailea or Kapalua enquiry reaches a person.`,
      `Use /quote — five fields, typical reply in Hawaii business hours. Or message us on WhatsApp, write ${DESK_EMAIL}, or call ${DESK_PHONE_DISPLAY}. Saturday West Maui traffic is planned on the quote. There is no street office and no walk-in. Quotes are open on Maui.`,
      'Live corridors: /wailea, /kaanapali, /lahaina, /kihei, /kapalua, /makena. Lahaina is a town — /lahaina — not a second island.',
    ],
    faqs: [
      {
        q: 'Same as /quote?',
        a: 'That URL is the form. This page is how to reach the Maui desk: quote form, WhatsApp, email, (808) 468-7748, Hawaii Standard Time — Wailea and West Maui, no street office.',
      },
      {
        q: 'Do you have a Wailea office?',
        a: `No walk-in and no street office in Wailea. The published line is ${DESK_PHONE_DISPLAY}, ${DESK_EMAIL}, WhatsApp ${DESK_WHATSAPP}, and /quote. Quotes are open.`,
      },
    ],
  },
  kauai: {
    h1: 'Reach the Kauai inquiry desk — both shores, written reply.',
    title: 'Kauai inquiry desk — form, WhatsApp, (808) 468-7748 | myCHEF',
    description:
      'Reach the Kauai inquiry desk: /quote form, WhatsApp, quotes@mychef-hawaii.com, (808) 468-7748. Hawaii Standard Time. Inquiry, not a Book-now button. No street office.',
    lede:
      '/quote is the inquiry form. WhatsApp, email, and (808) 468-7748 reach the same desk — Hawaii Standard Time, inquiry stage, no walk-in office in Līhuʻe.',
    kicker: 'Kauaʻi · Contact',
    photo: 'contactKauai',
    body: [
      `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on this host’s home. This page does not steal that title. Inquiry stage.`,
      `Use /quote — five fields. Typical reply in Hawaii business hours when we can staff. Or message us on WhatsApp, write ${DESK_EMAIL}, or call ${DESK_PHONE_DISPLAY}. Hanalei-bridge weather is a clause — /hanalei-bridge. There is no street office. Inquiry is not a live roster.`,
      'Live corridors at inquiry: /princeville, /poipu, /hanalei, /kapaa. A named shore is not a Book-now button.',
    ],
    faqs: [
      {
        q: 'Same as /quote?',
        a: 'That URL is the inquiry form. This page is how to reach the Kauai desk: form, WhatsApp, email, (808) 468-7748, Hawaii Standard Time — inquiry, no street office.',
      },
      {
        q: 'Can I visit a Princeville office?',
        a: `There is none. Call ${DESK_PHONE_DISPLAY}, WhatsApp ${DESK_WHATSAPP}, or send /quote. We write back when we can staff.`,
      },
    ],
  },
  bigisland: {
    h1: 'Reach the west-side inquiry desk — Kona–Kohala, written reply.',
    title: 'Hawaiʻi Island inquiry desk — west side, (808) 468-7748 | myCHEF',
    description:
      'Reach the Hawaiʻi Island west-side inquiry desk: /quote form, WhatsApp, quotes@mychef-hawaii.com, (808) 468-7748. Hawaii Standard Time. Hilo is a different day. No street office.',
    lede:
      '/quote is the inquiry form. WhatsApp, email, and (808) 468-7748 reach the west-side desk — Hawaii Standard Time, inquiry stage, no walk-in office in Kona. East side is never implied.',
    kicker: 'Hawaiʻi Island · Contact',
    photo: 'contactBigisland',
    body: [
      `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) stays a dinner door. This page does not steal that title. Inquiry, west side first.`,
      `Use /quote — five fields. Typical reply in Hawaii business hours when we can staff. Or message us on WhatsApp, write ${DESK_EMAIL}, or call ${DESK_PHONE_DISPLAY}. Hilo is a dedicated day — /east-side — not a same-day Kona call. There is no street office.`,
      'Live corridors at inquiry: /kona, /waimea, /waikoloa, /kohala. Ironman weeks compress the calendar — /ironman-weeks.',
    ],
    faqs: [
      {
        q: 'Same as /quote?',
        a: 'That URL is the inquiry form. This page is how to reach the west-side desk: form, WhatsApp, email, (808) 468-7748, Hawaii Standard Time — inquiry, no street office.',
      },
      {
        q: 'Can I call about Hilo from a Kona office?',
        a: `There is no office. East side is a dedicated day — /east-side. Call ${DESK_PHONE_DISPLAY}, WhatsApp ${DESK_WHATSAPP}, or send /quote with the town.`,
      },
    ],
  },
};
