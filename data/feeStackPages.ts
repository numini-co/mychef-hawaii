import type { IslandId } from './islands';
import type { UniqueCell } from './uniqueCells';
import { bigIslandSimplerDinner, signatureGuestBand, stayChefUsd } from './rateCard';

/**
 * Catalog /private-chef-cost — what prints after the dinner price.
 * Distinct from /pricing (the card). Plain language only; prices come from the rate card.
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

if (oahuSig !== '$195–$290' || mauiSig !== '$225–$375' || kauaiSig !== '$225–$375' || biSig !== '$210–$325') {
  throw new Error('signature guest bands drifted from the published card');
}
if (oahuStay !== '$1,250' || mauiStay !== '$1,550' || kauaiStay !== '$1,650' || biStay !== '$1,450') {
  throw new Error('Stay Chef floors drifted from the published card');
}
if (biSimple !== '$165') throw new Error('Big Island simpler dinner drifted from the published card');

const DESK =
  'Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748, WhatsApp https://wa.me/18084687748.';

export const feeStackPages: Record<IslandId, UniqueCell> = {
  oahu: {
    slug: 'private-chef-cost',
    name: 'Dinner fees',
    h1: 'Resident’s Island: what prints after $195–$290 a guest.',
    title: 'Oahu fees after a $195–$290 dinner | myCHEF',
    description:
      'Oʻahu signature dinners are $195–$290 a guest, groceries included. Stay Chef from $1,250 a day. 20% service and GET up to 4.712% print as their own lines.',
    lede:
      'Kahala, Ko Olina, Kailua, and town residences with kitchens are the base. A North Shore drive is a separate line. This page is the stack, not the menu.',
    photo: 'svcCostOahu',
    body: [
      `A signature dinner on Resident’s Island is ${oahuSig} a guest. That figure already pays for the menu, the Honolulu shop, the cooking, the service, and leaving the kitchen clean. Groceries are inside the band. Do not look for a second line that says the shopping is extra.`,
      `Stay Chef is the other shape: from ${oahuStay} a day for the crew and one meal, then groceries at cost with the store receipts and no markup. A Gold Coast celebration and a week in the house never share one grocery rule. The dinner itself is on [private chef Honolulu](/private-chef). The card is [Oʻahu pricing](/pricing).`,
      `After the food, every written quote adds a 20% service charge and Hawaiʻi GET up to 4.712%, each once. A 50% deposit locks the date only after you accept that total. Gratuity is never required and is not tucked into the guest price. North Shore and Turtle Bay travel prints on its own line. Kahala, Ko Olina, Kailua, and Waikīkī residences with a real cooktop do not get that drive line.`,
      `Oʻahu takes a written quote. Send the street on [the quote form](/quote). ${DESK}`,
    ],
    faqs: [
      {
        q: 'What is added after the $195–$290 guest price on Resident’s Island?',
        a: `The guest price is the dinner. Beside it, the quote prints a 20% service charge and Hawaiʻi GET up to 4.712%, each as its own line. Half of the accepted total, a 50% deposit, holds the date. A tip is not added for you. The full card is [Oʻahu pricing](/pricing).`,
      },
      {
        q: 'Which Oʻahu neighborhoods sit in the base, with no drive line?',
        a: `Kahala, Ko Olina, Kailua, and Waikīkī residences that actually have a kitchen are base. The ${oahuSig} dinner does not grow a travel surcharge there. A hotel room with only a coffee maker is declined before any deposit.`,
      },
      {
        q: 'When does a North Shore or Turtle Bay night print travel on its own?',
        a: `When the house is outside those base corridors. The drive is a published line on the quote, not a number discovered inside the fish. The dinner stays ${oahuSig} a guest, groceries included. You see the travel before you pay the 50% deposit.`,
      },
      {
        q: 'Why is an Oʻahu signature dinner never written as groceries at cost?',
        a: `Because the shop is already inside ${oahuSig} a guest. Market fish, produce, and the rest of that menu are part of the band. A separate grocery invoice belongs to Stay Chef, from ${oahuStay} a day, receipts attached, zero markup. The two bills are not blended.`,
      },
      {
        q: 'How does Stay Chef from $1,250 use a different stack on the same island?',
        a: `Stay Chef buys the crew: from ${oahuStay} a day, one meal, menu through cleanup. Ingredients are then billed at cost. A signature night does the opposite — food included, no receipt packet. Service at 20% and GET up to 4.712% still sit beside whichever line you chose. The week lives on [Stay Chef](/vacation-chef).`,
      },
      {
        q: 'What does the 50% deposit hold on Oʻahu, and is a tip required?',
        a: `It holds a date you have accepted in writing, not a verbal range. The other half is the balance of that same quote. Gratuity is voluntary. It is not a third fee hiding under service. Oʻahu quotes are open — this is not an inquiry island.`,
      },
      {
        q: 'Do the service charge and GET get folded back into the Honolulu guest price?',
        a: `No. You keep seeing ${oahuSig} as the dinner. The 20% is calculated on the food and printed once. GET, up to 4.712%, is calculated on food plus that service charge and printed once. Neither is renamed as hospitality and pushed back into the guest price.`,
      },
      {
        q: 'Where do I send a Honolulu or Ko Olina address for the written total?',
        a: `On [the quote form](/quote), with the street, the date, and the headcount. The dinner page is [private chef Honolulu](/private-chef). ${DESK} Nothing is charged to ask.`,
      },
    ],
    related: [
      { path: '/pricing', label: 'Rate card' },
      { path: '/private-chef', label: 'The dinner' },
      { path: '/coverage', label: 'Coverage' },
    ],
  },
  maui: {
    slug: 'private-chef-cost',
    name: 'Villa-week fees',
    h1: 'Villa Week: the lines after $225–$375 a guest.',
    title: 'Maui villa-week fees after $225–$375 | myCHEF',
    description:
      'Maui signature dinners $225–$375 a guest, groceries included. Stay Chef from $1,550 a day. 20% service and GET up to 4.712% are separate lines.',
    lede:
      'Wailea, Kapalua, Kāʻanapali, and Makena are the base. Upcountry is its own travel line. Saturday traffic along the west side is planned into arrival, not invented as a fee.',
    photo: 'svcCostMaui',
    body: [
      `A Villa Week signature dinner is ${mauiSig} a guest. Shopping for that menu is inside the price: the fish, the produce, the cooking in the rental kitchen, service, and a clean pass. There is no extra grocery line on that night.`,
      `A chef for the whole stay is Stay Chef, from ${mauiStay} a day, and that day bills groceries at cost with merchant receipts. Four Wailea dinners are not the same invoice as one daily fee. Read the night on [personal chef Maui](/private-chef) and the card on [Maui pricing](/pricing).`,
      `The quote then lists 20% service and Hawaiʻi GET up to 4.712% separately. Fifty percent is due when you accept the writing, and that deposit locks the date. A tip is never required. Upcountry — Kula, Makawao, the climb — takes a published travel line. Kāʻanapali, Lahaina, and Kapalua do not; the long Saturday drive is scheduled, not surcharged.`,
      `Maui quotes are open. Name the shore on [the quote form](/quote). ${DESK}`,
    ],
    faqs: [
      {
        q: 'What prints on a Villa Week quote after $225–$375 a guest?',
        a: `Service at 20%, then Hawaiʻi GET up to 4.712%, each on its own line. The ${mauiSig} figure stays the dinner. A 50% deposit is the hold, and only after you accept the total. Gratuity is not printed for you.`,
      },
      {
        q: 'Is Saturday traffic between Wailea and Kapalua billed as a fee?',
        a: `No. West Maui timing is built into when the crew arrives. Wailea, Kāʻanapali, Kapalua, Nāpili, and Makena stay on the base dinner, ${mauiSig} a guest. The drive is not renamed as a hospitality charge.`,
      },
      {
        q: 'When does an Upcountry house leave the base and take its own line?',
        a: `When the kitchen is up the hill — Kula, Makawao, Olinda, and the Pāʻia edge we quote with the menu. Travel prints beside the food. The guest price does not silently swell to absorb the climb. You see that line before the 50% deposit.`,
      },
      {
        q: 'Does a signature dinner in Wailea already include the shop?',
        a: `Yes. Groceries for that menu sit inside ${mauiSig} a guest. We do not attach a “groceries at cost” rider to a one-night Wailea or Kapalua dinner. Receipts-at-cost belong to Stay Chef days, from ${mauiStay}.`,
      },
      {
        q: 'How is a Stay Chef day from $1,550 stacked differently from the guest band?',
        a: `The ${mauiStay} day rate pays the chef and assistant for one meal, including the labor of shopping. The ingredients are then at cost, with receipts and no markup. A signature dinner folds that shop into ${mauiSig} instead. Pick one model on [the quote form](/quote). The week is [Stay Chef](/vacation-chef).`,
      },
      {
        q: 'When is half the Maui total due, and is a tip expected after dinner?',
        a: `The 50% deposit is due when you accept the written quote, and it locks that date. It is not due to hear a range. A tip is optional. Service at 20% is the service charge, not a disguised gratuity.`,
      },
      {
        q: 'Are the 20% service charge and GET combined into one Maui hospitality line?',
        a: `They stay apart. Twenty percent is service, shown once. GET up to 4.712% is tax, shown once, figured from the food plus the service charge. You can still read ${mauiSig} as the dinner you were shown.`,
      },
      {
        q: 'How do I ask for the written total for Wailea, Kapalua, or Kāʻanapali?',
        a: `Use [the quote form](/quote) and name the shore in the first line. The dinner page is [personal chef Maui](/private-chef). ${DESK} Asking is free.`,
      },
    ],
    related: [
      { path: '/pricing', label: 'Rate card' },
      { path: '/private-chef', label: 'The dinner' },
      { path: '/west-maui', label: 'West Maui' },
    ],
  },
  kauai: {
    slug: 'private-chef-cost',
    name: 'Retreat fees',
    h1: 'Garden Isle retreat: inquiry lines after $225–$375.',
    title: 'Kauai inquiry fees after $225–$375 | myCHEF',
    description:
      'Kauaʻi dinners $225–$375 a guest, by inquiry, groceries included. Stay Chef from $1,650 a day. 20% service and GET up to 4.712% print separately.',
    lede:
      'A Garden Isle retreat is an inquiry, not a booking button. Līhuʻe and Kapaʻa are the base. Princeville, Hanalei, and Poʻipū add a shore line. A closed bridge moves the night; it does not forfeit it.',
    photo: 'svcCostKauai',
    body: [
      `When a crew can take the shore, a signature dinner is ${kauaiSig} a guest. The shopping for that menu is inside the price. A Princeville estate and a Poʻipū house use the same dinner band. What changes is the drive, written on its own line, not stirred into the food.`,
      `Stay Chef for a retreat week starts at ${kauaiStay} a day. That fee is the crew. Groceries on those days are at cost, with receipts. Do not ask a one-night menu to be rewritten as a day rate plus a grocery bill. The night is [personal chef Kauai](/private-chef). The card is [Kauaʻi pricing](/pricing).`,
      `An inquiry quote still itemizes 20% service and Hawaiʻi GET up to 4.712%. A 50% deposit applies only after a crew exists and you accept the total. Gratuity is never required. Far-North houses past the Hanalei bridge need the weather clause: a closure reschedules the day. We will not hold a fake roster or an instant-book calendar.`,
      `Join the inquiry on [the quote form](/quote) with the shore named. ${DESK}`,
    ],
    faqs: [
      {
        q: 'What does a Garden Isle inquiry add after $225–$375 a guest?',
        a: `A 20% service charge and GET up to 4.712%, printed separately, plus shore travel when the house is off the Līhuʻe and Kapaʻa base. The dinner itself stays ${kauaiSig}, shopping included. Nothing is confirmed until a crew can hold that shore.`,
      },
      {
        q: 'Are both Kauaʻi shores an extra line the food price does not absorb?',
        a: `Yes. Princeville, Hanalei, and Poʻipū print travel beside the dinner. Līhuʻe and Kapaʻa do not. The guest band does not quietly rise to hide the drive. You read that line on the inquiry before any deposit.`,
      },
      {
        q: 'If the Hanalei bridge closes, what happens to money already paid?',
        a: `The night moves. A closure does not forfeit a deposit. Far-North timing needs notice because the road is real. The food band stays ${kauaiSig}. We reschedule rather than keep the fee for a night nobody could reach.`,
      },
      {
        q: 'Is a Poʻipū or Princeville signature dinner billed a second time for groceries?',
        a: `No. The shop sits inside ${kauaiSig} a guest. A grocery-at-cost packet is the Stay Chef model, from ${kauaiStay} a day, receipts shown, no markup. A Garden Isle dinner and a retreat week are different paperwork.`,
      },
      {
        q: 'How does Stay Chef from $1,650 behave while Kauaʻi is still an inquiry?',
        a: `It is a starting daily fee, not a held week. From ${kauaiStay} you are asking for a chef and assistant and one meal, with ingredients at cost afterward. We answer when a crew exists. There is no button that pretends the roster is live. The week page is [Stay Chef](/vacation-chef).`,
      },
      {
        q: 'Can the 20% service charge on Kauaʻi be read as a required tip?',
        a: `No. The 20% is a service charge on the food, shown once. A tip is never required and is never folded into that percent. GET up to 4.712% is tax, a different line, not a second gratuity.`,
      },
      {
        q: 'Does GET up to 4.712% replace the service line on a retreat quote?',
        a: `It does not. Service is 20% of the food. Tax, up to 4.712%, is then worked from the food plus that service charge. Both remain visible. The ${kauaiSig} dinner is not recalculated to swallow them.`,
      },
      {
        q: 'How do I ask for a written total on Princeville, Hanalei, or Poʻipū?',
        a: `Join the inquiry. [The quote form](/quote) needs the shore, the dates, and the headcount. Overview: [private chef Kauaʻi](/). ${DESK} We reply in Hawaii business hours when a crew can take it.`,
      },
    ],
    related: [
      { path: '/pricing', label: 'Rate card' },
      { path: '/private-chef', label: 'The dinner' },
      { path: '/hanalei-bridge', label: 'Hanalei bridge' },
    ],
  },
  bigisland: {
    slug: 'private-chef-cost',
    name: 'Expedition fees',
    h1: 'Expedition dinners from $165, then the lines beside them.',
    title: 'Big Island fees — dinners from $165 | myCHEF',
    description:
      'Big Island dinners $210–$325 a guest, from $165 on simpler tables. Stay Chef from $1,450 a day. 20% service and GET up to 4.712% are separate lines.',
    lede:
      'Big Island Expedition quotes start on the west side. A usual Kona or Kohala dinner is $210–$325 a guest. A simpler table starts from $165. Hilo is a different day, not a stop on the way back.',
    photo: 'svcCostBigisland',
    body: [
      `Most west-side villa dinners are ${biSig} a guest, and the groceries for that menu already sit inside it. A shorter, simpler table starts from ${biSimple} a guest, and that price includes its own shopping too. Neither dinner is labeled “plus groceries at cost.”`,
      `Stay Chef is the multi-day expedition: from ${biStay} a day for the crew and one meal, groceries at cost with receipts and no markup. A Kohala terrace night and a week in the house are not one invoice. The dinner page is [private chef Kona](/private-chef). The card is [Big Island pricing](/pricing). The island home is [private chef Big Island](/).`,
      `After the food, a west-side inquiry shows 20% service and Hawaiʻi GET up to 4.712% once each. A 50% deposit locks a date only after a crew can hold it and you accept the writing. Gratuity is never required. Kona through the Kohala Coast is the base. Waimea and Hāmākua take a travel line of their own. Hilo and Volcano are a dedicated day — two-and-a-half to three hours — never a west-side round trip hidden in the guest price.`,
      `This island is inquiry only. A published range is not a calendar. ${DESK}`,
    ],
    faqs: [
      {
        q: 'What is added after a Kona or Kohala dinner of $210–$325 a guest?',
        a: `A 20% service charge on the food, then Hawaiʻi GET up to 4.712% on the food plus that service charge. Both are their own lines. Half the written total is the deposit, and only once staffing is real. A tip is not required. The card is [Big Island pricing](/pricing).`,
      },
      {
        q: 'When does a Big Island table start from $165 instead of the usual dinner?',
        a: `When the kitchen and the list are simpler — a shorter west-side night, not a Kohala estate menu. From ${biSimple} a guest still includes the shopping for that menu. The usual villa dinner remains ${biSig}. They are not averaged into one number.`,
      },
      {
        q: 'Why is a Hilo lunch absent from a Kona dinner total?',
        a: `Because the east side is its own expedition day. The saddle is two-and-a-half to three hours. A Kona sunset and a Hilo stop do not share a vehicle or a guest price. Travel for that east-side day is quoted alone. West-side dinners stay ${biSig}, or from ${biSimple} when the table is the simpler one.`,
      },
      {
        q: 'Does Waimea or Hāmākua travel fold into the guest price?',
        a: `No. Those climbs print as their own line. The dinner stays ${biSig} a guest on a usual night, groceries included. You see the travel before anyone talks about a 50% deposit. Kona, Keauhou, Waikoloa, and the Kohala resort coast do not take that climb line.`,
      },
      {
        q: 'Do both the usual dinner and the from-$165 table already pay for groceries?',
        a: `Yes. Shopping is inside ${biSig} and inside a table from ${biSimple}. There is no second grocery bill on either dinner. Groceries at cost, with receipts, are only the Stay Chef day, from ${biStay}. An expedition week and a one-night terrace dinner never share that rule.`,
      },
      {
        q: 'How is Stay Chef from $1,450 written when the stay is several days?',
        a: `As a daily fee starting at ${biStay}, crew and one meal, plus ingredients at cost. It is not six copies of a ${biSig} dinner. Extra meals that day are quoted before anyone shops. Still by inquiry — the rate does not hold the dates by itself. See [Stay Chef](/vacation-chef).`,
      },
      {
        q: 'Can the 50% deposit land before a west-side crew exists?',
        a: `No. Half the total locks a date only after you accept a written quote and a crew can take those days. Until then ${biSig}, from ${biSimple}, and Stay Chef from ${biStay} are starting prices. Gratuity is never part of that deposit.`,
      },
      {
        q: 'Where do I send a Kona or Kohala address for the written inquiry?',
        a: `On [the quote form](/quote). Say west side or east side in the first line. The dinner is [private chef Kona](/private-chef); the overview is [the island home](/). ${DESK} Nothing is charged to ask.`,
      },
    ],
    related: [
      { path: '/pricing', label: 'Rate card' },
      { path: '/private-chef', label: 'The dinner' },
      { path: '/east-side', label: 'East side' },
    ],
  },
};

export const feeStackList: Record<IslandId, UniqueCell[]> = {
  oahu: [feeStackPages.oahu],
  maui: [feeStackPages.maui],
  kauai: [feeStackPages.kauai],
  bigisland: [feeStackPages.bigisland],
};
