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
      'Quotes open. Hawaii Standard Time. No street office in Honolulu.',
    lede:
      'WhatsApp, email, and (808) 468-7748 reach the same Hawaii desk — Hawaii Standard Time, no walk-in office in Honolulu.',
    kicker: 'Oʻahu · Contact',
    photo: 'contactOahu',
    body: [
      `It is how a Kahala or Ko Olina enquiry reaches a person.`,
      `Use the quote form — five fields, typical reply in Hawaii business hours. Or message us on WhatsApp, write ${DESK_EMAIL}, or call ${DESK_PHONE_DISPLAY}. There is no street office and no walk-in. Quotes are open on Oʻahu.`,
      'We cook in Honolulu, Waikīkī, Kailua and Lanikai, North Shore, Kahala and Gold Coast and Ko Olina. If the kitchen cannot host a chef, we decline in writing — not after a deposit.',
    ],
    faqs: [
      {
        q: 'Do you have an Honolulu office?',
        a: `No walk-in and no street office. The published line is ${DESK_PHONE_DISPLAY} (tel:+18084687748), ${DESK_EMAIL}, WhatsApp ${DESK_WHATSAPP}, and the quote form.`,
      },
    ],
  },
  maui: {
    h1: 'Reach the Maui desk — Wailea to West Maui, quotes open.',
    title: 'Contact myCHEF Maui — (808) 468-7748 | myCHEF',
    description:
      'Wailea and West Maui. Quotes open. Hawaii Standard Time. No street office.',
    lede:
      'WhatsApp, email, and (808) 468-7748 reach the Wailea / West Maui desk — Hawaii Standard Time, quotes open, no walk-in office.',
    kicker: 'Maui · Contact',
    photo: 'contactMaui',
    body: [
      `It is how a Wailea or Kapalua enquiry reaches a person.`,
      `Use the quote form — five fields, typical reply in Hawaii business hours. Or message us on WhatsApp, write ${DESK_EMAIL}, or call ${DESK_PHONE_DISPLAY}. Saturday West Maui traffic is planned on the quote. There is no street office and no walk-in. Quotes are open on Maui.`,
      'We cook in Wailea, Kāʻanapali, Lahaina and West Maui, Kīhei, Kapalua and Makena. Lahaina is a town — not a second island.',
    ],
    faqs: [
      {
        q: 'Do you have a Wailea office?',
        a: `No walk-in and no street office in Wailea. The published line is ${DESK_PHONE_DISPLAY}, ${DESK_EMAIL}, WhatsApp ${DESK_WHATSAPP}, and the quote form. Quotes are open.`,
      },
    ],
  },
  kauai: {
    h1: 'Reach the Kauai inquiry desk — both shores, written reply.',
    title: 'Kauai inquiry desk — form, WhatsApp, (808) 468-7748 | myCHEF',
    description:
      'Hawaii Standard Time. Inquiry, not an instant-booking button. No street office.',
    lede:
      'WhatsApp, email, and (808) 468-7748 reach the same desk — Hawaii Standard Time, by inquiry, no walk-in office in Līhuʻe.',
    kicker: 'Kauaʻi · Contact',
    photo: 'contactKauai',
    body: [
      `Inquiry stage.`,
      `Use the quote form — five fields. Typical reply in Hawaii business hours when we can staff. Or message us on WhatsApp (https://wa.me/18084687748), write ${DESK_EMAIL}, or call ${DESK_PHONE_DISPLAY}. Hanalei-bridge weather is a clause. There is no street office. Inquiry is not a live roster.`,
      'Live corridors at inquiry: Princeville, Poʻipū, Hanalei, Kapaʻa. A named shore is not an instant-booking button. Kapaʻa and the east side are on this desk — not a second company.',
    ],
    faqs: [
      {
        q: 'Can I visit a Princeville office?',
        a: `There is none. Call ${DESK_PHONE_DISPLAY}, WhatsApp ${DESK_WHATSAPP}, or send the quote form. We write back when we can staff.`,
      },
    ],
  },
  bigisland: {
    h1: 'Reach the west-side inquiry desk — Kona–Kohala, written reply.',
    title: 'Contact myCHEF Big Island — (808) 468-7748 | myCHEF',
    description:
      'Hawaii Standard Time. Hilo is a different day. No street office.',
    lede:
      'WhatsApp, email, and (808) 468-7748 reach the west-side desk — Hawaii Standard Time, by inquiry, no walk-in office in Kona. East side is never implied.',
    kicker: 'Hawaiʻi Island · Contact',
    photo: 'contactBigisland',
    body: [
      `Inquiry, west side first.`,
      `Use the quote form — five fields. Typical reply in Hawaii business hours when we can staff. Or message us on WhatsApp (https://wa.me/18084687748), write ${DESK_EMAIL}, or call ${DESK_PHONE_DISPLAY}. Hilo is a dedicated day — not a same-day Kona call and not same-day CORE. There is no street office.`,
      'Live corridors at inquiry: Kailua-Kona / Keauhou, Waimea, Waikoloa, Kohala Coast. Waimea and Waikoloa are named on this desk. Ironman weeks compress the calendar.',
    ],
    faqs: [
      {
        q: 'Can I call about Hilo from a Kona office?',
        a: `There is no office. East side is a dedicated day — quoted, not same-day CORE. Call ${DESK_PHONE_DISPLAY}, WhatsApp ${DESK_WHATSAPP}, or send the quote form with the town.`,
      },
    ],
  },
};
