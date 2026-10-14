import { signatureGuestBand, stayChefUsd } from './rateCard';

/**
 * Hub /vacation-chef — statewide chooser for a villa week.
 * Prices come from the rate card. No island stories.
 */

const oahuSig = signatureGuestBand('oahu');
const mauiSig = signatureGuestBand('maui');
const kauaiSig = signatureGuestBand('kauai');
const biSig = signatureGuestBand('bigisland');
const oahuStay = stayChefUsd('oahu');
const mauiStay = stayChefUsd('maui');
const kauaiStay = stayChefUsd('kauai');
const biStay = stayChefUsd('bigisland');

export const hubVacationChef = {
  heading: 'A villa week, chosen by island.',
  faqTitle: 'Choosing a Stay Chef week.',
  body: [
    'A Stay Chef week is a chef in the villa for the days you name. The daily fee covers a chef and an assistant and one meal: the menu, the shopping labor, cooking, service, and a clean kitchen. Groceries are not inside the fee. They bill at cost, with receipts and no markup.',
    `Open the island where the house is. [Oʻahu](oahu:/vacation-chef) from ${oahuStay} a day and [Maui](maui:/vacation-chef) from ${mauiStay} take a written quote. [Kauaʻi](kauai:/vacation-chef) from ${kauaiStay} and [Hawaiʻi Island](bigisland:/vacation-chef) from ${biStay} are request availability. A published floor does not hold a crew. A one-night signature dinner stays on that island’s private-chef page, groceries inside the guest price. A home someone lives in uses [personal chef](/personal-chef). The card is [pricing](/pricing). Dates go on [the quote form](/quote).`,
    'A usual week is three, five, or seven days. Arrival day sets the kitchen, the headcount, and which meal the fee covers. One crew holds one island. We do not cross to a second island the same day. Hotel rooms without a cooktop are declined. After the fee, 20% service and Hawaiʻi GET up to 4.712% print as their own lines. A 50% deposit locks dates you accept. Gratuity is never required.',
  ],
  faqs: [
    {
      q: 'Which island page is the villa week I should open?',
      a: `Match the house. [Oʻahu](oahu:/vacation-chef) is from ${oahuStay} a day and [Maui](maui:/vacation-chef) from ${mauiStay}; both take a written quote. [Kauaʻi](kauai:/vacation-chef) from ${kauaiStay} and [Hawaiʻi Island](bigisland:/vacation-chef) from ${biStay} are request availability. 20% service and GET up to 4.712% print after the fee.`,
    },
    {
      q: 'What does the Stay Chef day fee buy, on any island?',
      a: 'A chef and an assistant, and one meal: the menu, shopping labor, cooking, service, and cleanup. A second meal is quoted that day. The fee is not the food. Groceries are at cost with receipts and no markup.',
    },
    {
      q: 'Are groceries inside a signature dinner the same way as on a Stay Chef week?',
      a: `No. A signature dinner keeps the shop inside the guest price — ${oahuSig} on Oʻahu, ${mauiSig} on Maui, ${kauaiSig} on Kauaʻi, ${biSig} on Hawaiʻi Island. A Stay Chef week is the daily fee plus groceries at cost with receipts. Do not label a signature dinner “plus groceries at cost.” 20% service and GET up to 4.712% print after either bill.`,
    },
    {
      q: 'What does a villa week usually look like from arrival day?',
      a: 'Three, five, or seven days. Arrival day sets the kitchen, the headcount, and which meal the day rate covers. One night belongs on that island’s private-chef page. One crew holds one week on one island.',
    },
    {
      q: 'Can one crew cook on two islands in the same week?',
      a: 'No. Each island is its own host and its own drive. Name one island. A change of island is a second inquiry, not an afternoon added to the first crew’s day.',
    },
    {
      q: 'Which islands confirm a week, and which only take a request?',
      a: 'Oʻahu and Maui can take a written quote. Kauaʻi and Hawaiʻi Island are request availability until a crew exists. A published day rate is not a calendar and not instant booking. Send dates on [the quote form](/quote).',
    },
    {
      q: 'What kitchen does a rental need for a chef all week?',
      a: 'A working cooktop, cold storage, and a table. Hotel rooms without a kitchen are declined before a deposit. Name the property type on [the quote form](/quote) so the menu matches the stove, not the listing.',
    },
    {
      q: 'How do I start once I know which island the villa is on?',
      a: 'Open that island’s Stay Chef page, then [pricing](/pricing) and [the quote form](/quote). Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748, https://wa.me/18084687748. Nothing is charged to ask. A 50% deposit locks dates only after you accept the written total. Gratuity is never required.',
    },
  ],
};
