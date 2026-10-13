import type { IslandId } from './islands';
import type { UniqueCell } from './uniqueCells';
import { bigIslandSimplerDinner, signatureGuestBand, stayChefUsd } from './rateCard';

/**
 * Catalog /personal-chef — recurring cooking for one household.
 * Not the visitor dinner door. Oʻahu and Maui are bookable. Kauaʻi and Hawaiʻi Island stay inquiry.
 */

const oahuSig = signatureGuestBand('oahu');
const mauiSig = signatureGuestBand('maui');
const kauaiSig = signatureGuestBand('kauai');
const biSig = signatureGuestBand('bigisland');
const oahuStay = stayChefUsd('oahu');
const mauiStay = stayChefUsd('maui');
const kauaiStay = stayChefUsd('kauai');
const biStay = stayChefUsd('bigisland');
const biSimple = bigIslandSimplerDinner();

const DESK =
  'Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748, WhatsApp https://wa.me/18084687748.';

export const residentLine: Record<IslandId, UniqueCell> = {
  oahu: {
    slug: 'personal-chef',
    name: 'Honolulu household',
    h1: 'Honolulu school nights for one household, not a villa one-off.',
    title: 'Personal chef Honolulu — household weeks | myCHEF',
    description:
      'Personal chef for a Honolulu household: recurring dinners, dietary menus, and meal prep in one home. A one-night villa dinner is a different booking.',
    lede:
      'Resident’s Island cooking for a home that already lives here — Honolulu or Kailua, a school-night rhythm, a fridge with labels.',
    photo: 'svcPersonalOahu',
    body: [
      `A personal chef on Oʻahu is recurring or daily cooking for one household. The same kitchen, the same people, dinners through the week or a cook on the days you name. Meal prep means portions for that home, cooked on that stove, packed so the next day still has lunch. It is not a drop-off route across town and not a staffed party. Gluten-free, dairy-free, nut-aware, vegan, and children’s plates are written into the standing menu before the shop, not swapped when the pans are hot.`,
      `A one-night private chef dinner is different paperwork. Signature dinners are ${oahuSig} a guest, and the groceries for that menu sit inside the band. When the ask is a visitor table in Kahala, Waikīkī, or Ko Olina, open [private chef Oʻahu](/private-chef) or the island home, [private chef Oahu](/). Stay Chef is the villa week: from ${oahuStay} a day for a chef and an assistant and one meal, groceries at cost with receipts. A resident who wants the cook in the house on a daily basis is quoted on that daily-fee shape, for the household, not as a pile of signature dinners.`,
      `Oʻahu household dates are bookable. Send the street, the nights, and the restrictions on [the quote form](/quote). A hotel room without a cooktop is declined. After the fee, 20% service and Hawaiʻi GET up to 4.712% print as their own lines. A 50% deposit locks dates you accept. Gratuity is never required. ${DESK}`,
    ],
    faqs: [
      {
        q: 'Who is a Honolulu personal chef actually cooking for?',
        a: `A household that lives on Resident’s Island — school nights, a used fridge, one address in Honolulu, Kailua, or a town kitchen with a real stove. Visitors who want a single celebration should use [private chef Oʻahu](/private-chef) instead.`,
      },
      {
        q: 'How is a school-night cook unlike a one-night Kahala dinner?',
        a: `The school night repeats. The Kahala dinner is one table: signature ${oahuSig} a guest, shopping inside that band. Household cooking is a rhythm for the people who live there, with leftovers labeled. They are not the same invoice.`,
      },
      {
        q: 'Can one Oʻahu home book cooking on several days a week?',
        a: `Yes. Say which nights, how many people sit down, and whether you want dinner served or portions for later. Daily cooking for that one household is quoted from the Stay Chef shape, from ${oahuStay} a day, groceries at cost with receipts — not as stacked signature dinners.`,
      },
      {
        q: 'How are dietary needs handled in a resident Honolulu kitchen?',
        a: `They are designed into the standing menu before anyone shops. Gluten-free, dairy-free, nut-aware, vegan, and kids’ plates are normal. A severe allergy is a conversation before we confirm, not a surprise at the stove. The shop follows that list.`,
      },
      {
        q: 'Is meal prep for a Honolulu household the same product as a villa dinner?',
        a: `No. Meal prep here is food for one home, cooked in that kitchen, packed for the days you named. A villa dinner is a seated night at ${oahuSig} a guest. We do not run a citywide drop-off route under this page.`,
      },
      {
        q: 'Where does Stay Chef from $1,250 sit next to this household line?',
        a: `Stay Chef from ${oahuStay} a day is the published daily fee: chef, assistant, one meal, then groceries at cost. Visitors in a rental use it for the week. Residents who want a cook in their own house on repeating days are quoted on that same daily-fee shape. The visitor week is [Stay Chef](/vacation-chef).`,
      },
      {
        q: 'Are Honolulu household dates bookable, or inquiry only?',
        a: `Bookable. Oʻahu takes a written quote. Send the address and the nights on [the quote form](/quote). This is not the Kauaʻi or Big Island inquiry posture. A 50% deposit locks dates after you accept the total. A tip is never required.`,
      },
      {
        q: 'Where should I go if I actually want one private-chef dinner?',
        a: `Leave this page. The primary dinner is [private chef Oʻahu](/private-chef), and the island overview is [private chef Oahu](/). Signature dinners are ${oahuSig} a guest, groceries included. ${DESK}`,
      },
    ],
    related: [
      { path: '/private-chef', label: 'One-night dinner' },
      { path: '/', label: 'Private chef Oahu' },
      { path: '/kamaaina', label: 'Kamaʻāina line' },
    ],
  },
  maui: {
    slug: 'personal-chef',
    name: 'Maui household',
    h1: 'The Maui house you live in — weekly cooking, not a Wailea night.',
    title: 'Personal chef Maui — the house you live in | myCHEF',
    description:
      'Personal chef Maui for one resident household: daily cooking, dietary menus, and meal prep. A Wailea one-night dinner is booked on the private chef page.',
    lede:
      'Villa Week is the visitor stay. This page is the opposite: a Kīhei fridge, an Upcountry kitchen, a household that is still here on Thursday.',
    photo: 'svcPersonalMaui',
    body: [
      `A Maui personal chef cooks for one household on a repeating calendar. Daily dinners, or a few named days, in the kitchen you actually live in. Meal prep is trays and containers for that home, not a resort breakfast buffet and not a staffed lawn. Dietary work — gluten-free, dairy-free, nut-aware, vegan, children’s plates — is written before the shop so the week does not depend on improvising at six.`,
      `Do not use this page for a single arrival dinner. That night is a signature dinner at ${mauiSig} a guest, groceries inside the band, on [private chef Maui](/private-chef). The island overview is [private chef Maui](/). Stay Chef, from ${mauiStay} a day, is how a villa week is priced: crew and one meal, groceries at cost with receipts. A resident who wants the same cook back through the week is quoted on that daily fee for their own house. Upcountry still carries its travel line. A Wailea one-off is not “local” because the calendar says Tuesday.`,
      `Maui household service is bookable. Put the town — Kīhei, Kahului, Upcountry, Pāʻia — on [the quote form](/quote) with the nights and the restrictions. Hotel rooms without a range are declined. 20% service and Hawaiʻi GET up to 4.712% stay separate. A 50% deposit holds dates you accept. Gratuity is never required. ${DESK}`,
    ],
    faqs: [
      {
        q: 'Who should use the Maui personal chef line?',
        a: `People who live on Maui and want a cook in one house on a repeating schedule. A guest landing in Wailea for a single dinner is on the visitor page, not here. Say Kīhei, Kahului, or Upcountry so the shop matches the town.`,
      },
      {
        q: 'How is a Kīhei household week unlike a Wailea arrival dinner?',
        a: `The household week comes back. The Wailea night is once: ${mauiSig} a guest, shopping included in that band. Weekly cooking stocks the fridge you already own. We will not dress a resort one-off as a resident booking.`,
      },
      {
        q: 'Can a Maui resident book a cook on consecutive days?',
        a: `Yes. Name the days and whether each day is a served dinner or food left for later. Consecutive days use the daily fee, from ${mauiStay}, plus groceries at cost with receipts. They are not four copies of a signature dinner.`,
      },
      {
        q: 'How do allergies land on a standing Maui menu?',
        a: `In writing, before the first shop. The standing list can be gluten-free, dairy-free, nut-aware, vegan, or built around children. A severe allergy is discussed before we confirm the week. Upcountry shops and south-shore shops are not assumed to be the same run.`,
      },
      {
        q: 'Is household meal prep on Maui a visitor villa week in disguise?',
        a: `No. Meal prep on this page feeds one resident kitchen. A visitor villa week is Stay Chef, from ${mauiStay} a day, on the vacation-chef page. A seated celebration remains ${mauiSig} a guest. Three products, three quotes.`,
      },
      {
        q: 'How does Stay Chef from $1,550 relate to cooking for a home you live in?',
        a: `The ${mauiStay} figure is the published day: chef and assistant, one meal. Visitors pay it for the rental week, groceries at cost. Residents who want that rhythm in their own house are quoted from the same daily fee. The guest band is a different night. See [Stay Chef](/vacation-chef).`,
      },
      {
        q: 'Can I request Maui household dates now?',
        a: `Yes. Maui is quote-open, including for residents. Send the town and the nights on [the quote form](/quote). This is not an inquiry-only island. Half the accepted total holds the dates. A tip is never required.`,
      },
      {
        q: 'Where is the one-night private chef if that is the real Maui ask?',
        a: `On [private chef Maui](/private-chef), with the island home at [private chef Maui](/). Signature dinners are ${mauiSig} a guest, groceries included. ${DESK}`,
      },
    ],
    related: [
      { path: '/private-chef', label: 'One-night dinner' },
      { path: '/', label: 'Private chef Maui' },
      { path: '/vacation-chef', label: 'Villa week' },
    ],
  },
  kauai: {
    slug: 'personal-chef',
    name: 'Kauaʻi household',
    h1: 'Kapaʻa and South Shore households — inquiry, not a visitor roster.',
    title: 'Personal chef Kauai — ask before a roster | myCHEF',
    description:
      'Personal chef for a Kauaʻi household, by inquiry: recurring cooking on both shores, dietary menus, and meal prep for one home. Not a visitor dinner.',
    lede:
      'Garden Isle retreat visitors have their own page. This one is a resident kitchen — east-side Kapaʻa weeknights or a South Shore household — and it stays an inquiry.',
    photo: 'svcPersonalKauai',
    body: [
      `Household cooking on Kauaʻi means one home, repeating days, food for the people who live there. An east-side weeknight in Kapaʻa is a different drive from a South Shore house, and both can be asked. Daily cooking and meal prep stay inside that household: served dinners or packed portions, dietary plates written ahead. We do not pretend a live resident roster exists, and we do not turn a Princeville vacation into a “local weekly” because the guest asked.`,
      `A one-night private chef dinner is the visitor product. Signature dinners are ${kauaiSig} a guest, groceries inside the band, by inquiry, on [private chef Kauaʻi](/private-chef). The island home is [private chef Kauai](/). Stay Chef, from ${kauaiStay} a day, is the retreat week: crew and one meal, groceries at cost with receipts, still only when a crew can take the shore. A resident who wants a cook back through the week is quoted on that daily fee for their own house, not as a stack of signature dinners. Far-North households still inherit the Hanalei bridge: weather moves the day, it does not forfeit it.`,
      `Kauaʻi household service is inquiry only. There is no booking button. Name the shore and the nights on [the quote form](/quote). 20% service and Hawaiʻi GET up to 4.712% print as separate lines when a quote exists. A 50% deposit waits until a crew is real and you accept the writing. Gratuity is never required. ${DESK}`,
    ],
    faqs: [
      {
        q: 'Who can ask for household cooking on Kauaʻi?',
        a: `A resident household, east side or South Shore, that wants a cook back on named days. A visitor in Princeville for a holiday week is a Garden Isle retreat, not this line. We will not invent a standing roster to look available.`,
      },
      {
        q: 'How is a Kapaʻa weeknight different from a Princeville dinner?',
        a: `Kapaʻa weeknights are the resident ask on this page. A Princeville dinner is usually one visitor night at ${kauaiSig} a guest, shopping included, and it lives on [private chef Kauaʻi](/private-chef). The drives are not the same, and neither is instant.`,
      },
      {
        q: 'Can a Kauaʻi resident request daily cooking, or only guests?',
        a: `Residents can ask. Daily cooking for one household is quoted from the Stay Chef daily fee, from ${kauaiStay}, groceries at cost with receipts, and only if a crew can hold those days. Guests who want a single supper should not use this form.`,
      },
      {
        q: 'How are dietary notes taken when the Kauaʻi week is still an inquiry?',
        a: `You send them with the shore and the nights. Gluten-free, dairy-free, nut-aware, vegan, and children’s plates can be designed in before any shop. Nothing is purchased until a crew is confirmed. A severe allergy is part of that first note, not a surprise on the day.`,
      },
      {
        q: 'Is meal prep for one Garden Isle household a signature dinner?',
        a: `No. Meal prep here is food left for the people who live in the house. A signature dinner is a seated night at ${kauaiSig} a guest, groceries inside that band. We do not run island-wide packed-meal delivery under a household inquiry.`,
      },
      {
        q: 'How does Stay Chef from $1,650 relate to a resident cook on Kauaʻi?',
        a: `From ${kauaiStay} a day is the crew fee for one meal, with groceries at cost afterward. Retreat guests use it for the rental week. A resident asking for repeating days is quoted from that daily fee, still by inquiry. See [Stay Chef](/vacation-chef). The guest band is a different bill.`,
      },
      {
        q: 'Is there a booking button for Kauaʻi household service?',
        a: `No. Garden Isle household cooking is inquiry only. A published daily fee does not hold a week. Send the shore on [the quote form](/quote). A 50% deposit applies only after a crew exists and you accept the total. A tip is never required.`,
      },
      {
        q: 'Where should a visitor go for one Kauaʻi private-chef dinner?',
        a: `To [private chef Kauaʻi](/private-chef), or the island home at [private chef Kauai](/). Signature dinners are ${kauaiSig} a guest. This household page will not take that booking. ${DESK}`,
      },
    ],
    related: [
      { path: '/private-chef', label: 'One-night dinner' },
      { path: '/', label: 'Private chef Kauai' },
      { path: '/kapaa', label: 'Kapaʻa' },
    ],
  },
  bigisland: {
    slug: 'personal-chef',
    name: 'Kona household',
    h1: 'A Kona fridge on weeknights — west-side household cooking, by inquiry.',
    title: 'Personal chef Big Island — Kona households | myCHEF',
    description:
      'Personal chef for a Big Island household, by inquiry: west-side daily cooking, dietary menus, and meal prep. A Hilo kitchen is a different day.',
    lede:
      'Big Island Expedition visitors book a dinner or a week. This page is a west-side household — a Kona town fridge, weeknights — and the east side is not implied.',
    photo: 'svcPersonalBigisland',
    body: [
      `Personal-chef cooking on Hawaiʻi Island is for one west-side household. Kona town, Keauhou, Waikoloa, or a Kohala house someone actually lives in. The work is recurring: daily dinners or named weeknights, plus meal prep that stays in that fridge. Dietary plates — gluten-free, dairy-free, nut-aware, vegan, children — are written before a Kona-side shop. Hilo, Volcano, and Kaʻū are not a Tuesday add-on to a Kona household day.`,
      `A one-night private chef dinner is the visitor ask. Usual west-side dinners are ${biSig} a guest, groceries inside the band. A simpler table starts from ${biSimple} a guest. Both sit on [private chef Big Island](/private-chef). The island overview is [private chef Big Island](/). Stay Chef, from ${biStay} a day, prices a multi-day cook: crew and one meal, groceries at cost with receipts. A resident who wants that cook on repeating days is quoted on the daily fee for their own kitchen, not as a row of signature dinners. Both stay inquiry. A published rate is not a crew.`,
      `Join the west-side household inquiry on [the quote form](/quote). Say the town, the nights, and the restrictions. 20% service and Hawaiʻi GET up to 4.712% print separately when we can write a total. A 50% deposit waits until a crew exists and you accept it. Gratuity is never required. ${DESK}`,
    ],
    faqs: [
      {
        q: 'Who is west-side household cooking for?',
        a: `A household that lives in Kona, Keauhou, Waikoloa, or along the Kohala Coast and wants a cook on repeating nights. A guest hiring one terrace dinner is on the private-chef page. Hilo addresses do not belong on a Kona household ask.`,
      },
      {
        q: 'How is a Kona weeknight unlike a one-night Kohala dinner?',
        a: `The weeknight comes back to the same fridge. The Kohala dinner is a single visitor night, usually ${biSig} a guest with the shopping included, on [private chef Big Island](/private-chef). Expedition guests and Kona residents are not booked on the same form.`,
      },
      {
        q: 'Can one household ask for daily cooking during a west-side week?',
        a: `Yes, as an inquiry. Daily cooking uses the Stay Chef daily fee, from ${biStay}, plus groceries at cost with receipts. It is not seven signature dinners stapled together. We answer only when a crew can hold those days.`,
      },
      {
        q: 'How are dietary limits written for a Kona resident kitchen?',
        a: `On the inquiry, before any shop. The standing menu can be gluten-free, dairy-free, nut-aware, vegan, or planned around children. A severe allergy is named up front. The shop is west-side. An east-side allergy table is a different day and a different quote.`,
      },
      {
        q: 'Is meal prep for a Kona household the same invoice as a one-night dinner?',
        a: `No. Meal prep on this page is food for the people who live there, packed in their kitchen. A one-night dinner is ${biSig} a guest, or a simpler table from ${biSimple}, groceries inside either price. We do not deliver prepared meals around the island from this inquiry.`,
      },
      {
        q: 'How does Stay Chef from $1,450 sit next to a resident cook?',
        a: `From ${biStay} a day is the crew fee for one meal. Expedition guests use it for a rental week, groceries at cost. A west-side resident asking for repeating days is quoted from that daily fee, still by inquiry. The visitor week is [Stay Chef](/vacation-chef).`,
      },
      {
        q: 'Is Big Island household service bookable today?',
        a: `No. It is inquiry only, same posture as the rest of this island. Send the west-side town on [the quote form](/quote). A 50% deposit applies only after a crew exists and you accept the written total. Gratuity is never required.`,
      },
      {
        q: 'Where do I go for a one-night private chef instead of household cooking?',
        a: `Open [private chef Big Island](/private-chef) or the island home, [private chef Big Island](/). Usual dinners are ${biSig} a guest, groceries included. This page will not take that one-night booking. ${DESK}`,
      },
    ],
    related: [
      { path: '/private-chef', label: 'One-night dinner' },
      { path: '/', label: 'Private chef Big Island' },
      { path: '/east-side', label: 'East side' },
    ],
  },
};

export const residentLineList: Record<IslandId, UniqueCell[]> = {
  oahu: [residentLine.oahu],
  maui: [residentLine.maui],
  kauai: [residentLine.kauai],
  bigisland: [residentLine.bigisland],
};
