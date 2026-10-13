import { bigIslandSimplerDinner, signatureGuestBand, stayChefUsd } from './rateCard';

/**
 * Hub /private-chef — statewide chooser. No island stories.
 * Prices come from the rate card. Visible copy stays in plain language.
 */

const oahuSig = signatureGuestBand('oahu');
const mauiSig = signatureGuestBand('maui');
const kauaiSig = signatureGuestBand('kauai');
const biSig = signatureGuestBand('bigisland');
const biSimple = bigIslandSimplerDinner();

export const hubPrivateChef = {
  h1: 'Choose the island for the villa dinner.',
  lede: `Four hosts, four cards. Oʻahu signature dinners ${oahuSig} a guest. Maui and Kauaʻi ${mauiSig}. Big Island ${biSig}, and simpler Big Island tables from ${biSimple} a guest. Open the island where the house is.`,
  heading: 'Open the island, then the dinner.',
  faqTitle: 'Choosing an island.',
  body: [
    `This page does not cook a menu. It sends you to the island host that does. A villa dinner is booked where the house is. Signature dinners include the groceries in the guest price. [Private chef Oʻahu](oahu:/private-chef) is ${oahuSig} a guest. [Private chef Maui](maui:/private-chef) and [private chef Kauaʻi](kauai:/private-chef) are ${mauiSig} a guest. [Private chef Big Island](bigisland:/private-chef) is ${biSig} a guest, and simpler Big Island tables start from ${biSimple} a guest. None of those dinners adds a second grocery bill.`,
    `Stay Chef is a different product: a daily chef fee plus groceries at cost, with receipts and no markup. The daily floors are ${stayChefUsd('oahu')} on Oʻahu, ${stayChefUsd('maui')} on Maui, ${stayChefUsd('kauai')} on Kauaʻi, and ${stayChefUsd('bigisland')} on Hawaiʻi Island. Oʻahu and Maui accept a written quote. Kauaʻi and Hawaiʻi Island are inquiry only — a published band does not hold a date.`,
    `If you are still picking a shore, start at the island home: [Oʻahu](oahu:/), [Maui](maui:/), [Kauaʻi](kauai:/), or [Hawaiʻi Island](bigisland:/). After the food, every island prints 20% service and Hawaiʻi GET up to 4.712% as separate lines. A 50% deposit locks a date only after you accept the written total. Gratuity is never required. Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748, WhatsApp https://wa.me/18084687748.`,
  ],
  faqs: [
    {
      q: 'Which link is the villa dinner for the island I am actually visiting?',
      a: `Use the host that matches the house. [Private chef Oʻahu](oahu:/private-chef) is ${oahuSig} a guest. [Private chef Maui](maui:/private-chef) and [private chef Kauaʻi](kauai:/private-chef) are ${mauiSig}. [Private chef Big Island](bigisland:/private-chef) is ${biSig}, with simpler tables from ${biSimple}. Groceries for those dinners are already inside the band.`,
    },
    {
      q: 'Does this Hawaii page replace the island private-chef page?',
      a: `No. This page only helps you choose. The menu, the shore rules, and the written total live on that island’s private-chef page or its home. Staying here does not hold a date.`,
    },
    {
      q: 'Where do I read Oʻahu signature dinners?',
      a: `On [private chef Oʻahu](oahu:/private-chef), or start at the [Oʻahu home](oahu:/) if you are still choosing a town. The guest band is ${oahuSig}, shopping included. Oʻahu takes a written quote.`,
    },
    {
      q: 'Where do Maui and Kauaʻi dinners at the same guest band live?',
      a: `They are separate hosts that happen to publish ${mauiSig} a guest. Open [private chef Maui](maui:/private-chef) or [private chef Kauaʻi](kauai:/private-chef). Maui quotes. Kauaʻi is inquiry. Do not send one form and expect it to cover both islands.`,
    },
    {
      q: 'Where is a Big Island dinner, including tables from $165, actually written?',
      a: `On [private chef Big Island](bigisland:/private-chef). Usual dinners are ${biSig} a guest. Simpler tables start from ${biSimple}. Both include groceries. The island is inquiry only. The overview is the [Hawaiʻi Island home](bigisland:/).`,
    },
    {
      q: 'Is a Stay Chef week requested on this chooser?',
      a: `No. Ask on the island. Daily floors are ${stayChefUsd('oahu')} Oʻahu, ${stayChefUsd('maui')} Maui, ${stayChefUsd('kauai')} Kauaʻi, and ${stayChefUsd('bigisland')} Hawaiʻi Island, plus groceries at cost with receipts. That is not a signature dinner with a grocery bill added. The statewide week page is [Stay Chef](/vacation-chef).`,
    },
    {
      q: 'Can I finish a booking on this chooser, or do I move to the island host?',
      a: `Move. Oʻahu and Maui can take a written quote on their own hosts. Kauaʻi and Hawaiʻi Island stay inquiry until a crew exists. A band on this page is not a confirmation. Use that island’s quote form after you open it.`,
    },
    {
      q: 'How do I reach the Hawaii desk once I know the island?',
      a: `quotes@mychef-hawaii.com, +1 (808) 468-7748, or WhatsApp https://wa.me/18084687748. Say the island in the first line. Nothing is charged to ask. After you accept a written total, a 50% deposit locks the date. Gratuity is never required. Service at 20% and GET up to 4.712% are already separate lines on that quote.`,
    },
  ],
};
