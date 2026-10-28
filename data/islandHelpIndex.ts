import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /help indexes. Distinct from nested /help/:slug articles, from
 * /faq, /how-it-works, and /quote. Titles must not use money keywords.
 */

export interface IslandNestedIndexPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const islandHelpIndex: Record<IslandId, IslandNestedIndexPage> = {
  oahu: {
    h1: 'Oahu help for what happens after you write.',
    title: 'Oahu help for changes after a quote | myCHEF',
    description:
      'After you write the Oahu desk, this page routes the booking steps, the written total, and a change to the date, headcount, or diet notes.',
    lede:
      'Open this after the Oʻahu desk has your note. It routes the booking steps, the written total, and a change.',
    kicker: 'Oʻahu · Help',
    photo: 'helpIndexOahu',
    body: [
      'How a Honolulu, Kahala, Ko Olina, or Kailua booking runs is on [how it works](/how-it-works). What the written quote lists, including the service and tax lines, is on [pricing](/pricing). A change to the date or the headcount after you accept is on [managing a booking](/help/managing-booking). Diet limits that show up after the first reply go to [dietary](/dietary) and back to the desk in writing.',
      'Send a change to quotes@mychef-hawaii.com, call +1 (808) 468-7748, or use WhatsApp at wa.me/18084687748. Name the address and the quote you already hold. A new headcount rewrites the total before the deposit is treated as holding the new plan. A chat line does not replace that written change. Wedding week and a house offsite still have their own guides on this desk. If you have not sent the first field list, it stays on [getting started](/help/getting-started).',
    ],
    faqs: [
      {
        q: 'After the Oahu reply arrives, which page shows how the night runs?',
        a: '[How it works](/how-it-works) is the sequence from the written total to a clean kitchen. This desk does not repeat it. Use it when you want the order of the deposit, the menu sign-off, and service. The quote form is only the first note.',
      },
      {
        q: 'Where do I send a Kahala date change once a quote exists?',
        a: 'Through [managing a booking](/help/managing-booking), and to the desk in writing. Email quotes@mychef-hawaii.com, call +1 (808) 468-7748, or WhatsApp wa.me/18084687748. A text does not hold a different night. The total is rewritten before the deposit is treated as the new date.',
      },
      {
        q: 'How does a Ko Olina headcount change get onto the total?',
        a: 'Write the new count against the quote you accepted. The total is recalculated before that deposit is treated as holding the larger table. The steps are on [managing a booking](/help/managing-booking). Do not assume the old plan still fits.',
      },
      {
        q: 'A shellfish note showed up after the first Oahu reply. What now?',
        a: 'Send it in writing before the shop, with the guest named. [Dietary](/dietary) is how limits are written. [Managing a booking](/help/managing-booking) is how the quote changes. A late note can miss the buy if the freight window is already set.',
      },
      {
        q: 'Which channels take an Oahu change after the first note?',
        a: 'Email quotes@mychef-hawaii.com, phone +1 (808) 468-7748, or WhatsApp wa.me/18084687748. Use the same thread as the quote. The form is for the first note. A change after that is a written revision. Name Honolulu, Kahala, Ko Olina, or Kailua.',
      },
      {
        q: 'A tower freight window changed after we accepted. Is that a menu edit?',
        a: 'It is a booking change, not a dish swap. Send the new window through [managing a booking](/help/managing-booking) before the crew is timed to the curb. The menu sign-off still finishes before the shop. The night’s order stays on [how it works](/how-it-works).',
      },
    ],
  },
  maui: {
    h1: 'Maui help for changes during a villa week.',
    title: 'Maui help for a change after the quote | myCHEF',
    description:
      'Maui help after the first villa note: where the week’s sequence lives, what the written quote lists, and how to change a shore, a date, or a guest count.',
    lede:
      'This desk is for a Maui week that already has a note on file. It points at the sequence, the total, and a change of shore or count.',
    kicker: 'Maui · Help',
    photo: 'helpIndexMaui',
    body: [
      'The order of an arrival night and the later meals is on [how it works](/how-it-works). What the written quote shows, food first and then the service and tax lines, is on [pricing](/pricing). Moving a date, a headcount, or a shore after you accept is on [managing a booking](/help/managing-booking). A diet note that lands after the draft goes to [dietary](/dietary) before that day’s shop.',
      'Reach the desk on quotes@mychef-hawaii.com, +1 (808) 468-7748, or WhatsApp wa.me/18084687748, and name the villa on the quote you hold. Saturday traffic between Wailea and Kapalua is planned into the call time when you tell us the drive changed. A new guest count rewrites the total before the deposit is treated as the new week. Quotes stay open while that rewrite is in writing. The first field list, if it is still missing, is [getting started](/help/getting-started).',
    ],
    faqs: [
      {
        q: 'After a Wailea quote, where do I read the rest of the week?',
        a: 'On [how it works](/how-it-works). Arrival night and later meals are one written total, each signed before that day’s shop. This page only points you there. It does not restate the menu.',
      },
      {
        q: 'How do I move a Kapalua date after I have the total?',
        a: 'Write the new date through [managing a booking](/help/managing-booking). Email quotes@mychef-hawaii.com, call +1 (808) 468-7748, or WhatsApp wa.me/18084687748. The total is rewritten before the deposit is treated as holding the new Saturday. A text alone does not move the crew.',
      },
      {
        q: 'What if the guest count grows before the Saturday shop?',
        a: 'Send the new count in writing before that shop. The quote is recalculated first. Do not treat the old deposit as covering the larger table. The path is [managing a booking](/help/managing-booking). Name whether the extra seats are in Wailea or on the West Maui side.',
      },
      {
        q: 'Where do late diet notes go for a Kāʻanapali week?',
        a: 'To the desk in writing, and onto [dietary](/dietary) so the limit is clear, before the buy for that meal. [Managing a booking](/help/managing-booking) is the change record. A note that arrives after the shop misses that day’s list.',
      },
      {
        q: 'How do I reach the Maui desk about a change?',
        a: 'quotes@mychef-hawaii.com, +1 (808) 468-7748, or wa.me/18084687748. Put the villa and the quote in the same message. The form is how the week started. A change uses those channels against the total you already have.',
      },
      {
        q: 'We added a second shore after the quote. Which guide is that?',
        a: '[Managing a booking](/help/managing-booking). A shift from Wailea to Kapalua can change the call time, and the total is rewritten before the deposit is treated as the new plan. Say which dinner moves. Do not leave it as a voice note.',
      },
    ],
  },
  kauai: {
    h1: 'Kauai help after you request availability.',
    title: 'Kauai help after you request availability | myCHEF',
    description:
      'Kauai help after you request availability: the next page for the night, how a written yes changes, and how to reach the desk if the headcount moves.',
    lede:
      'Request availability first. This page is what you open after that note. It is not a held date.',
    kicker: 'Kauaʻi · Help',
    photo: 'helpIndexKauai',
    body: [
      'What happens after you request availability is on [how it works](/how-it-works): the written total, the menu you sign, then service if that shore can be staffed. What the reply lists is on [pricing](/pricing). A date, headcount, or shore change after a written yes is on [managing a booking](/help/managing-booking). Diet notes that arrive late go to [dietary](/dietary) with the shore still named.',
      'Write the change to quotes@mychef-hawaii.com, call +1 (808) 468-7748, or use WhatsApp at wa.me/18084687748. A request for availability does not become a confirmation because you called. Name Princeville, Hanalei, Poʻipū, or Kapaʻa, and say if the house is past the bridge. Rain that moves dinner indoors is a written change, not a new request from scratch. Ask again only when the shore itself changed. The first field list is still [getting started](/help/getting-started) if you have not sent it.',
    ],
    faqs: [
      {
        q: 'I requested availability for Princeville. Which page is next?',
        a: '[How it works](/how-it-works) shows the sequence. The request is not a held date. A written yes comes before any deposit. This desk does not staff the estate by itself.',
      },
      {
        q: 'How do I change a Poʻipū date after a written yes?',
        a: 'Send the new date through [managing a booking](/help/managing-booking). Email quotes@mychef-hawaii.com, call +1 (808) 468-7748, or WhatsApp wa.me/18084687748. The reply is rewritten before the deposit is treated as the new night. The change does not silently become Princeville.',
      },
      {
        q: 'The headcount changed after the Kauai reply. Where is that written?',
        a: 'On [managing a booking](/help/managing-booking), against the shore you already named. The total is rewritten before anyone treats the deposit as covering the new count. Say Poʻipū or Princeville in the same note so the shop stays on the right shore.',
      },
      {
        q: 'Rain moved us inside. Is that a menu change or a booking change?',
        a: 'It is a booking change when the room changes, and a menu change only if the plates change too. Write both through [managing a booking](/help/managing-booking). The backup belongs on the quote before the shop. [How it works](/how-it-works) is the order, not the weather clause.',
      },
      {
        q: 'How do I reach the desk about a Kauai change without a new request?',
        a: 'Use the thread you already opened: quotes@mychef-hawaii.com, +1 (808) 468-7748, or wa.me/18084687748. Ask them to revise the written reply. A fresh form is for a first request for availability, not for a headcount you already sent.',
      },
      {
        q: 'A bridge closure moved the night. Which page records that change?',
        a: '[Managing a booking](/help/managing-booking) records it. The clause itself is on [Hanalei bridge](/hanalei-bridge). A closure moves the night. It does not forfeit a deposit, and it does not become Poʻipū unless you request availability for that shore instead.',
      },
    ],
  },
  bigisland: {
    h1: 'West-side help after you join the inquiry list.',
    title: 'Kona help after you join the inquiry list | myCHEF',
    description:
      'West-side help after you join the inquiry list: the booking steps, what the reply lists, and how to change a Kona date or headcount.',
    lede:
      'Join the inquiry list with a Kona, Waikoloa, or Kohala address. This desk is for what you change after that note.',
    kicker: 'Hawaiʻi Island · Help',
    photo: 'helpIndexBigisland',
    body: [
      'The steps after you join the inquiry list are on [how it works](/how-it-works). What the written reply lists, including service and tax on their own lines, is on [pricing](/pricing). A date or headcount change after a written yes is on [managing a booking](/help/managing-booking). A diet note that arrives after the first reply goes to [dietary](/dietary) before the west-side shop.',
      'Send the change to quotes@mychef-hawaii.com, call +1 (808) 468-7748, or WhatsApp wa.me/18084687748. Name the west-side house on the inquiry you already sent. Ironman week in Kailua-Kona should be flagged in that same note if the dates moved into the race. Hilo is not added as a same-day fix. It stays a separate dedicated day and needs its own inquiry. The first field list is [getting started](/help/getting-started) if you have not joined yet.',
    ],
    faqs: [
      {
        q: 'I joined the inquiry list for Kona. Where are the steps after that?',
        a: 'On [how it works](/how-it-works). The inquiry is not a held date. A written yes comes before the deposit. This page routes you. It does not restate the west-side menu.',
      },
      {
        q: 'How do I move a Waikoloa date after a written yes?',
        a: 'Write the new date through [managing a booking](/help/managing-booking). Email quotes@mychef-hawaii.com, call +1 (808) 468-7748, or WhatsApp wa.me/18084687748. The total is rewritten before the deposit is treated as the new day. Do not attach Hilo to that note.',
      },
      {
        q: 'What if the Kohala headcount changes before the shop?',
        a: 'Send the new count in writing before the west-side buy. The reply is recalculated first. The old deposit is not assumed to cover the larger table. Use [managing a booking](/help/managing-booking) and keep the address on the Kohala Coast.',
      },
      {
        q: 'Where do I add a diet note after the first west-side reply?',
        a: 'In writing, before the shop, with the person named. [Dietary](/dietary) explains the limit. [Managing a booking](/help/managing-booking) is the change on the reply. A Keauhou kitchen and a Waimea kitchen are not the same buy, so name which one.',
      },
      {
        q: 'How do I reach the west-side desk about a change?',
        a: 'quotes@mychef-hawaii.com, +1 (808) 468-7748, or wa.me/18084687748. Use the inquiry you already opened. The form is how you joined the list. A revision is a written change on that thread, not a second island.',
      },
      {
        q: 'Ironman week changed our Kona arrival. Which guide covers the rewrite?',
        a: '[Managing a booking](/help/managing-booking). Flag the race in the same note. The total is rewritten before the deposit is treated as the new day. Town is tighter that week. Hilo is still not a same-day replacement.',
      },
    ],
  },
};
