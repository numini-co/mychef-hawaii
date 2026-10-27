import type { IslandId } from './islands';

export interface IslandAboutCopy {
  h1: string;
  title: string;
  description: string;
  lede: string;
  hero: { file: string; alt: string };
  body: string[];
  faqs: { q: string; a: string }[];
}

export const islandAbout: Record<IslandId, IslandAboutCopy> = {
  oahu: {
    h1: 'The Oahu crew — Honolulu kitchens to Ko Olina.',
    title: 'About the Oʻahu crew, Honolulu to Ko Olina | myCHEF',
    description:
      'The Oʻahu crew cooks Honolulu residences, Kahala houses, Kailua weeks, and Ko Olina villas. Prices are on the pricing page. Request a written quote.',
    lede:
      'Town and the short-stay villa belt. We staff the night to the guest list — not a marketplace freelancer with a tote bag.',
    hero: {
      file: '/about/oahu-crew.png',
      alt: 'A villa-deck crew on Oʻahu at dusk — chefs and service around a long set table, ocean beyond.',
    },
    body: [
      'Oʻahu is Honolulu residences, Waikīkī apartments that actually have a kitchen, Kahala dining rooms, Kailua weeks, Ko Olina villa stays. The towns we cook in most: Honolulu, Waikīkī, Kahala and the Gold Coast, Kailua and Lanikai, Ko Olina and the North Shore.',
      'A Gold Coast dinner and a North Shore day are not the same drive. The written quote says which. Personal-chef weeks for households sit next to visitor dinners. The crew in the photograph is the point: this is not one person with a tote bag and a hope.',
      'You book myCHEF Hawaii. We assign the brigade. We do not sell chef names, bios, or a swipeable roster. Proof today is the [pricing page](/pricing), a sample menu, cleanup, and a written quote. Reviews publish after verified events.',
      'A booking starts with the date, the address, the headcount, and dietary notes. A Honolulu or Waikīkī tower also needs the building rules when the house requires them. Kahala houses and Ko Olina villas skip the freight slot and still need a cooktop. The written quote lists the food, then a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. A 50% deposit holds the date only after you accept. Gratuity is never required. Signature groceries stay inside the band. Stay Chef bills groceries at cost with receipts. Bands live on [pricing](/pricing). The desk is quotes@mychef-hawaii.com, +1 (808) 468-7748, or WhatsApp https://wa.me/18084687748. [Request a written quote](/quote).',
    ],
    faqs: [
      {
        q: 'Who cooks an Oʻahu dinner?',
        a: 'myCHEF Hawaii assigns the crew to the house. There is no roster of named chefs to swipe. A small dinner is a chef and the shopping. A seated reception adds sous, service, and often a bartender. The written quote names that crew before anyone shops.',
      },
      {
        q: 'How does a Honolulu or Ko Olina booking run?',
        a: 'Send the date, the address, the headcount, and dietary notes. A tower adds the building rules when they apply. The written quote returns food, a 20% service charge, and Hawaiʻi GET up to 4.712% on separate lines. A 50% deposit holds the date after you accept. You sign the menu before the shop.',
      },
      {
        q: 'Where do Oʻahu prices live?',
        a: 'On the pricing page. Signature dinners keep grocery procurement inside the band. Stay Chef is the daily chef fee plus groceries at cost with receipts. Travel outside the base neighborhoods is its own line on the written quote. Gratuity is never required.',
      },
      {
        q: 'How do I reach the Oʻahu desk without the form?',
        a: 'Email quotes@mychef-hawaii.com, call +1 (808) 468-7748, or WhatsApp https://wa.me/18084687748. Put the date, the address, the headcount, dietary limits, and the building type in that note. Quotes are open. Request a written quote.',
      },
      {
        q: 'What changes between a Kahala house and a Ko Olina villa?',
        a: 'Kahala is a town dining room, and a tower there still has building rules. Ko Olina is the west-side villa belt, usually a driveway rather than a freight elevator. Both are base-area houses when the kitchen has a cooktop. The quote names the one you booked.',
      },
    ],
  },
  maui: {
    h1: 'The Maui crew — villa weeks from Wailea to Kapalua.',
    title: 'About the Maui crew for Wailea villa weeks | myCHEF',
    description:
      'The Maui crew cooks villa weeks in Wailea, Kapalua, and Kāʻanapali, including arrival night. Prices are on the pricing page. Request a written quote.',
    lede:
      'The villa dinner people picture when they say private chef. The same team shops, cooks, and staffs the room. A reception on the lawn is a different crew than Date Night for two.',
    hero: {
      file: '/about/maui-crew.png',
      alt: 'A staffed Maui villa service — a brigade assembled on an open-air deck at sunset.',
    },
    body: [
      'Maui is Wailea, West Maui, Kīhei, Kapalua, Makena — the places we cook most.',
      'A reception on the lawn is a different crew than Date Night for two. We write that difference before the deposit. Upcountry travel is its own line on the written quote. Pāʻia and Haʻikū travel is confirmed on the written quote with the menu.',
      'Hawaii is launching. We do not invent Maui guest reviews or chef names. The published line is (808) 468-7748. Proof is the card on the [pricing page](/pricing) and the written total on the quote form.',
      'A villa week is several meals, and arrival night is the first line. Later dinners in Wailea, Kāʻanapali, or Kapalua stay on that same written total. Saturday traffic between the south shore and Kapalua is planned into the call time. You book myCHEF Hawaii, and we assign the crew to the villa. Service at 20% and Hawaiʻi GET up to 4.712% print after the food, each alone. A 50% deposit holds the dates after you accept. Gratuity is never required. Read [pricing](/pricing). Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748, WhatsApp https://wa.me/18084687748. [Request a written quote](/quote).',
    ],
    faqs: [
      {
        q: 'Who is in the villa for a Wailea week?',
        a: 'myCHEF Hawaii assigns the crew to that villa. One arrival dinner is a smaller crew than a lawn reception later in the week. We do not sell chef names. The written quote names the crew for each meal you asked for, before any deposit.',
      },
      {
        q: 'How is arrival night written on a Maui week?',
        a: 'It is the evening you land, its own line on the same total as later meals in Wailea, Kāʻanapali, or Kapalua. It is not a second invoice after you land. Saturday crossing time belongs in the first note. Quotes are open. Request a written quote.',
      },
      {
        q: 'Where are Maui prices, and what sits inside them?',
        a: 'On the pricing page. A signature dinner includes grocery procurement inside the band. A Stay Chef day is the chef fee plus groceries at cost with receipts. Those grocery models stay separate. Service at 20% and Hawaiʻi GET up to 4.712% follow as their own lines. A 50% deposit holds the dates after you accept.',
      },
      {
        q: 'How do I reach the Maui desk?',
        a: 'Email quotes@mychef-hawaii.com, call +1 (808) 468-7748, or WhatsApp https://wa.me/18084687748. Name the shore, the villa, the dates, the headcount, and dietary notes. Quotes are open. Request a written quote.',
      },
      {
        q: 'How is Pāʻia or Haʻikū travel confirmed?',
        a: 'It is confirmed on the written quote with the menu, before any deposit. We do not fold that drive into a South Maui dinner. Wailea, Makena, Kāʻanapali, and Kapalua stay the base area for a villa week. Upcountry travel is its own line on that same quote.',
      },
    ],
  },
  kauai: {
    h1: 'The Kauai crew — Princeville, Hanalei, and Poipu.',
    title: 'About the Kauaʻi crew on both shores | myCHEF',
    description:
      'The Kauaʻi crew cooks Princeville, Hanalei, and Poʻipū when a shore crew exists. Request availability with the dates. Prices are on the pricing page.',
    lede:
      'Princeville and Hanalei on the north, Poʻipū and Kōloa on the south. The bridge and the weather are real. We staff the estate to the guest list when a crew exists.',
    hero: {
      file: '/about/about-kauai-crew.png',
      alt: 'A Kauaʻi villa brigade on a North Shore stone terrace at dusk — chef, sous, service, bartender, misted mountains.',
    },
    body: [
      'Kauaʻi is both shores. Live corridors on this site: Princeville, Poʻipū, Hanalei, Kapaʻa. A house past the Hanalei bridge inherits the written road clause, including 72-hour notice.',
      'We do not pretend Līhuʻe and Hāʻena are the same afternoon. Menu bands are on the [pricing page](/pricing). Travel outside the Līhuʻe and Kapaʻa base is its own line on the written reply.',
      'Request availability with the shore and the dates. We do not invent Kauaʻi reviews, and a request is not a held crew.',
      'Princeville and Hanalei sit in mist. Poʻipū and Kōloa sit closer to Līhuʻe, and rain moves the table under a covered lānai rather than swapping shores. A closure on the far north reschedules the night. It does not forfeit a deposit. You book myCHEF Hawaii. We assign a crew when that shore can be staffed, and we do not publish chef names. The written reply lists the food, then 20% service and Hawaiʻi GET up to 4.712%, each alone. A 50% deposit follows a written yes. Gratuity is never required. Signature groceries stay inside the band. Stay Chef bills groceries at cost with receipts. Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748, WhatsApp https://wa.me/18084687748. [Request availability](/quote).',
    ],
    faqs: [
      {
        q: 'Who cooks a Princeville or Poʻipū dinner?',
        a: 'myCHEF Hawaii assigns the crew when that shore can be staffed. A request is not a held cook, and we do not publish chef names. A Princeville table is not a south-shore lawn. The written reply names the crew for the house you sent.',
      },
      {
        q: 'How do I request availability on Kauaʻi?',
        a: 'Send the shore, the estate, the dates, the headcount, and dietary notes on the quote form or to the desk. Say Princeville, Hanalei, Poʻipū, or Kapaʻa. Request availability. We write back when a crew exists. A request does not hold the calendar.',
      },
      {
        q: 'Where do Kauaʻi prices live?',
        a: 'The pricing page holds the Kauaʻi card. A dinner night keeps the shop inside the guest band. A multi-day cook bills groceries at cost, receipts attached, on top of the daily fee. Service and GET sit underneath. The deposit follows a written yes.',
      },
      {
        q: 'What does the Hanalei bridge change for the crew?',
        a: 'Houses past the bridge inherit the written weather clause, including 72-hour notice. A closure reschedules the night. It does not forfeit the deposit. Poʻipū dinners do not use that clause. Put the bridge side in the availability request.',
      },
      {
        q: 'How do I reach the Kauaʻi desk?',
        a: 'Start with the shore, then the estate. The contact page and the quote form both reach the same desk. If the house is past Hanalei, say so before you ask for a date. We answer when that shore has a crew.',
      },
    ],
  },
  bigisland: {
    h1: 'The Hawaiʻi Island crew — Kona and Kohala first.',
    title: 'About the Hawaiʻi Island crew, Kona first | myCHEF',
    description:
      'The Hawaiʻi Island crew cooks Kona, Waikoloa, and the Kohala Coast first. Hilo is its own day. Join the inquiry list. Prices are on the pricing page.',
    lede:
      'Seven resort communities in one west-side radius. The island is 4,000 square miles; we will not pretend to cover it in an afternoon.',
    hero: {
      file: '/about/about-bigisland-crew.png',
      alt: 'A west-side Hawaiʻi Island villa brigade on a Kohala lava terrace at twilight — chefs plating, service moving, Mauna Kea faint.',
    },
    body: [
      'Hawaiʻi Island is west-side first. We cook in Kailua-Kona and Keauhou, Waikoloa, Waimea and Kohala Coast.',
      'Hilo and Volcano are quoted in writing as their own dedicated day, never stacked on a west-side dinner. Ironman week compresses the Kona calendar. Tell us those dates in the note. The crew still follows the house.',
      'Inquiry stage. Proof is the [pricing page](/pricing) and a written reply. We do not invent Big Island reviews or farm names. Call (808) 468-7748 or send the quote form.',
      'Join the inquiry list with the west-side address and the dates. Waimea sits above the resort belt and is still not Hilo. An inquiry is not a held crew. You book myCHEF Hawaii, and we assign the cook when that day can be staffed. The simpler open table exists only on this island’s pricing page. The written reply lists the food, then the 20% service charge and Hawaiʻi GET, up to 4.712%, under the food as separate lines. A 50% deposit follows a written yes. Gratuity is never required. Signature groceries stay inside the band. Stay Chef bills groceries at cost with receipts. Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748, WhatsApp https://wa.me/18084687748.',
    ],
    faqs: [
      {
        q: 'Who cooks a Kona or Kohala night?',
        a: 'myCHEF Hawaii assigns the crew when that west-side day can be staffed. An inquiry is not a held cook. We do not publish chef names. A Kohala terrace and a Kona town kitchen are different houses on the same side of the island. The reply names the one you sent.',
      },
      {
        q: 'How do I join the inquiry list for a west-side house?',
        a: 'Send the Kona, Waikoloa, or Kohala address, the dates, the headcount, and dietary notes on the quote form. Join the inquiry list. Leave Hilo off that note. We write back if a crew can take the day.',
      },
      {
        q: 'Where do Hawaiʻi Island prices live?',
        a: 'Open pricing on this host. The simpler open table is printed only for Hawaiʻi Island, under the signature band. A signature night folds the shop into the guest band. A Stay Chef day separates the chef fee from grocery receipts. Service, GET, and the deposit follow on later lines.',
      },
      {
        q: 'Why is a Hilo dinner not added to Waikoloa?',
        a: 'Hilo and Volcano are quoted in writing as their own dedicated day. They are never stacked on a west-side dinner. Send the east-side house as its own inquiry. A Waikoloa note does not absorb it.',
      },
      {
        q: 'How do I reach the west-side desk?',
        a: 'A west-side note can start on the phone or on WhatsApp if the form is awkward. Lead with Kona, Waikoloa, or Kohala, then the date. Keep Hilo out of that message. Waimea can share the west-side note.',
      },
    ],
  },
};
