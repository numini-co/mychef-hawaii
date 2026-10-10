import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * Catalog /private-chef-cost — fee-stack explainer, not the rate-card page.
 * Must not steal island /pricing titles (corridor / stage rate-card lines) or money keywords.
 */

export const feeStackPages: Record<IslandId, UniqueCell> = {
  oahu: {
    slug: 'private-chef-cost',
    name: 'Fee stack',
    h1: 'Oahu fee stack — what prints after the dinner band.',
    title: 'Oahu fee stack — service, GET, travel | myCHEF',
    description:
      'How an Oahu quote is stacked: CORE $195–$290 a guest, Stay Chef from $1,250 a day, 20% service, GET up to 4.712%, travel outside published corridors.',
    lede:
      'Kahala and Ko Olina are base. North Shore is a published surcharge.',
    photo: 'svcCostOahu',
    body: [
      `CORE is $195–$290 a guest. Stay Chef from $1,250 a day, groceries at cost. Date night from $675 as a fixed event.`,
      'Every written quote adds 20% service and Hawaiʻi GET up to 4.712% as their own lines — once. Fifty percent locks the date. Gratuity is voluntary. North Shore travel is a published zone line; Kahala, Ko Olina, Kailua, and Waikīkī residences with kitchens are base.',
    ],
    faqs: [
      {
        q: 'Is travel folded into CORE?',
        a: 'No. Base corridors are included. North Shore is a published surcharge.',
      },
    ],
    related: [
      { path: '/pricing', label: 'Rate card' },
      { path: '/help/managing-booking', label: 'After the quote' },
      { path: '/coverage', label: 'Coverage' },
    ],
  },
  maui: {
    slug: 'private-chef-cost',
    name: 'Fee stack',
    h1: 'Maui fee stack — what prints after the Wailea dinner band.',
    title: 'Maui fee stack — service, GET, West Maui travel | myCHEF',
    description:
      'How a Maui quote is stacked: CORE $225–$375 a guest, Stay Chef from $1,550 a day, 20% service, GET up to 4.712%, Upcountry and West Maui travel separate.',
    lede:
      'Wailea, Kapalua, Kāʻanapali, and Makena are base. Upcountry is a published surcharge. Saturday West Maui traffic is planned, not hidden.',
    photo: 'svcCostMaui',
    body: [
      `CORE is $225–$375 a guest. Stay Chef from $1,550 a day, groceries at cost.`,
      'Every written quote adds 20% service and GET up to 4.712% as their own lines. Fifty percent locks the date. Gratuity is voluntary. Upcountry from $75 as a zone line. Lahaina is a town — not a mystery hospitality fee.',
    ],
    faqs: [
      {
        q: 'Is West Maui a surcharge?',
        a: 'Kāʻanapali, Lahaina, and Kapalua are base. The Saturday drive is planned into arrival. Upcountry is the published surcharge.',
      },
    ],
    related: [
      { path: '/pricing', label: 'Rate card' },
      { path: '/west-maui', label: 'West Maui' },
      { path: '/help/managing-booking', label: 'After the quote' },
    ],
  },
  kauai: {
    slug: 'private-chef-cost',
    name: 'Fee stack',
    h1: 'Kauai fee stack — what prints after the inquiry dinner band.',
    title: 'Kauai fee stack — service, GET, both-shore travel | myCHEF',
    description:
      'How a Kauai quote is stacked at inquiry: CORE $225–$375 a guest, Stay Chef from $1,650 a day, 20% service, GET up to 4.712%, both-shore travel.',
    lede:
      'Līhuʻe and Kapaʻa are base. Both shores are a published surcharge. Inquiry.',
    photo: 'svcCostKauai',
    body: [
      `CORE is $225–$375 a guest. Stay Chef from $1,650 a day, groceries at cost. Date night $975–$1,425 as a fixed event.`,
      'Every written quote adds 20% service and GET up to 4.712% as their own lines. Fifty percent locks a staffed date. Gratuity is voluntary. Princeville and Poʻipū travel prints. Hāʻena is quote-only with the bridge clause.',
      'Inquiry: we will not hold a fake roster.',
    ],
    faqs: [
      {
        q: 'Does a closed bridge forfeit the deposit?',
        a: 'No. We reschedule.',
      },
    ],
    related: [
      { path: '/pricing', label: 'Rate card' },
      { path: '/hanalei-bridge', label: 'Hanalei bridge' },
      { path: '/help/managing-booking', label: 'After the quote' },
    ],
  },
  bigisland: {
    slug: 'private-chef-cost',
    name: 'Fee stack',
    h1: 'Hawaiʻi Island fee stack — what prints after the west-side dinner band.',
    title: 'Big Island private chef cost — service, GET, travel | myCHEF',
    description:
      'How a Hawaiʻi Island quote is stacked: CORE $210–$325 a guest, Stay Chef from $1,450 a day, 20% service, GET up to 4.712%, west-side travel. East side is a dedicated day.',
    lede:
      'Kona–Kohala is base. Waimea and Hāmākua are a surcharge. East side is not a west-side round trip.',
    photo: 'svcCostBigisland',
    body: [
      `CORE is $210–$325 a guest. Stay Chef from $1,450 a day, groceries at cost.`,
      'Every written quote adds 20% service and GET up to 4.712% as their own lines. Fifty percent locks a staffed west-side date. Gratuity is voluntary. Ironman weeks change lodging, not a hidden fee.',
      'Inquiry.',
    ],
    faqs: [
      {
        q: 'Is Hilo in the CORE band?',
        a: 'No. East side is a dedicated day with its own travel line.',
      },
    ],
    related: [
      { path: '/pricing', label: 'Rate card' },
      { path: '/east-side', label: 'East side' },
      { path: '/help/managing-booking', label: 'After the quote' },
    ],
  },
};

export const feeStackList: Record<IslandId, UniqueCell[]> = {
  oahu: [feeStackPages.oahu],
  maui: [feeStackPages.maui],
  kauai: [feeStackPages.kauai],
  bigisland: [feeStackPages.bigisland],
};
