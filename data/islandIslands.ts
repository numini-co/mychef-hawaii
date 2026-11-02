import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { IslandNestedIndexPage } from './islandHelpIndex';
import { DESK_EMAIL, DESK_PHONE_DISPLAY, DESK_TEL, DESK_WHATSAPP } from '@/lib/contact';

/**
 * Island /islands indexes. Distinct from hub /islands (the statewide picker)
 * and from /areas (map notes on this site). Titles must not use money keywords.
 */

const desk = `${DESK_EMAIL}, +1 ${DESK_PHONE_DISPLAY} (${DESK_TEL}), WhatsApp ${DESK_WHATSAPP}`;

export const islandIslands: Record<IslandId, IslandNestedIndexPage> = {
  oahu: {
    h1: 'Planning the next island after an Oʻahu dinner.',
    title: 'Planning a multi-island Hawaii trip from Oʻahu | myCHEF',
    description:
      'Planning past Oʻahu? This site cooks Honolulu, Kahala, Ko Olina, and Kailua only. Send each later island its own request from the Hawaii home.',
    lede: 'This site cooks Oʻahu only. Maui, Kauaʻi, and the Big Island each have their own crew.',
    kicker: 'Oʻahu · Other islands',
    photo: 'islandsIndexOahu',
    body: [
      'Oʻahu has its own site because the crew, the zones, and the booking path stay with this island. A Kahala house or a Ko Olina villa is requested here. A later dinner on Maui, Kauaʻi, or the Big Island is not a second stop for this team. There is no same-day inter-island crossing. Guests may fly. This crew stays on Oʻahu. The next island is its own day and its own people.',
      'Start the rest of the trip at [the Hawaii home](root:/), open [locations](root:/locations), and send each later island its own request through that island’s quote form. One coordinator can hold the thread. The totals are not blended. This host stays open for the Honolulu house.',
    ],
    faqs: [
      {
        q: 'Why do Maui, Kauaʻi, and the Big Island each have a site of their own instead of living on this one?',
        a: 'Each island has its own chefs, its own zones, and its own way of taking a booking. This site is Oʻahu. The other three are separate hosts. Start at [the islands page](root:/islands) and open the host that has the house.',
      },
      {
        q: 'Can the Oʻahu crew cook on another island the same day?',
        a: 'This crew stays on Oʻahu. There is no same-day inter-island crossing. Guests may fly. The next island is its own day and its own people.',
      },
      {
        q: 'How do I plan a trip that also eats on another island?',
        a: 'As separate quotes. One coordinator can hold the thread. The totals are not blended. Use [the islands page](root:/islands) to reach the other host, and send one island per note on [the quote form](/quote).',
      },
      {
        q: 'If tonight is a Honolulu house and the next dinner is somewhere else, what stays on this site?',
        a: `Only the Oʻahu night. Kahala and Ko Olina quotes are written here. The other dinner is requested on that island’s own site, from [the islands page](root:/islands). Quotes on this host stay open for the house in town. Desk: ${desk}.`,
      },
      {
        q: 'If the group flies to Maui after a Honolulu dinner, who cooks the second night?',
        a: 'The Maui crew cooks the Maui night. This site only writes the Honolulu, Kahala, or Ko Olina dinner. Start the other request from [the Hawaii home](root:/). There is no same-day inter-island crossing. Guests may fly. The totals are not blended.',
      },
      {
        q: 'I am already on the Oʻahu site. Where do I start the rest of a multi-island trip?',
        a: 'Start at [the Hawaii home](root:/), then [locations](root:/locations), and open the host that has the next house. Send that island its own request through its quote form. One coordinator can hold the thread. This page does not blend a Ko Olina total with another island.',
      },
    ],
  },
  maui: {
    h1: 'A Maui villa week that continues on another island.',
    title: 'A Maui villa week that also leaves the island | myCHEF',
    description:
      'A Wailea or Kapalua week stays on this Maui site. A dinner on another island is a separate request from the Hawaii home, with its own crew.',
    lede: 'This site quotes the Maui villa. A later island is a different crew and a different request.',
    kicker: 'Maui · Other islands',
    photo: 'islandsIndexMaui',
    body: [
      'This site exists so a Wailea, Kapalua, or Kāʻanapali week is quoted by the crew that cooks those houses. Oʻahu, Kauaʻi, and the Big Island are not extra lawns on the same booking. A chef team cooks on its own island only. Same-day crossings are declined. A Saturday lānai in Kapalua does not become another island’s kitchen the next morning.',
      'Plan the nights that leave Maui from [the Hawaii home](root:/). Open [coverage](root:/coverage), then send that island its own request through its quote form. The villa here is a written quote on [this form](/quote). The Saturday drive between Wailea and Kapalua stays on Maui. It is not a flight.',
    ],
    faqs: [
      {
        q: 'Why are Oʻahu, Kauaʻi, and the Big Island not booked from this Maui site?',
        a: 'Each island is its own host, with its own crew. This site cooks the Maui houses we name, Wailea and West Maui among them. The others live on their own sites. Open [the islands page](root:/islands).',
      },
      {
        q: 'Can a Maui crew fly to another island and cook that same night?',
        a: 'Same-day crossings are declined. A Saturday lānai in Kapalua does not become another island’s crew the next morning by default. Book that night with the island that has the house.',
      },
      {
        q: 'How should a week that also leaves Maui be requested?',
        a: 'Two notes, even in one email thread. The Maui house is a written quote. The other island follows its own posture, which [the islands page](root:/islands) states. Do not ask this site to blend the totals. Use [the quote form](/quote) for the villa here.',
      },
      {
        q: 'If the lawn is in Wailea and a later dinner is off Maui, which part stays here?',
        a: `The Wailea or West Maui night only, including the Saturday drive if you cross this island. The off-island dinner is a separate request through [the islands page](root:/islands). Quotes here stay open for the villa you named. Desk: ${desk}.`,
      },
      {
        q: 'Can a Wailea week and a later Oʻahu night share one Maui total?',
        a: 'A Wailea week and a later Oʻahu night do not share one Maui total. The villa nights stay a written quote on this site. The Oʻahu dinner is a separate request from [the Hawaii home](root:/). Two notes, even in one email thread.',
      },
      {
        q: 'Does the Saturday drive from Wailea to Kapalua count as leaving Maui?',
        a: 'The Saturday drive from Wailea to Kapalua stays on Maui and is planned into arrival when you name it. Leaving Maui means another island, which is a different crew and a different request. The lawn in Wailea is still quoted here.',
      },
    ],
  },
  kauai: {
    h1: 'Requesting another island during a Kauaʻi stay.',
    title: 'Requesting other islands from a Kauaʻi stay | myCHEF',
    description:
      'Request availability on Kauaʻi for one shore. Another island’s dinner is a separate note from the Hawaii home. This crew does not cook that night.',
    lede: 'Request availability for one shore here. Another island is a separate note from the Hawaii home.',
    kicker: 'Kauaʻi · Other islands',
    photo: 'islandsIndexKauai',
    body: [
      'Kauaʻi has its own site so a Princeville or Poʻipū stay is a request for availability on this shore, not a booking that covers Oʻahu or Maui. A chef team cooks on its own island only. There is no same-day inter-island crossing. Rain or a Hanalei bridge closure can move a north-shore night. It does not send this crew off the Garden Isle.',
      'When the trip also eats elsewhere, start at [the Hawaii home](root:/) and open [locations](root:/locations) for the host that has the next house. Request availability here for one shore on [the quote form](/quote). Send the other island its own note. One coordinator can hold both notes. The totals stay apart.',
    ],
    faqs: [
      {
        q: 'Why can’t an availability request on this site cover Oʻahu, Maui, or the Big Island?',
        a: 'Each of those islands has its own crew and its own site. A Garden Isle request stays on this host. Reach the others from [the islands page](root:/islands). Do not swap in another island’s name and expect this shore’s answer.',
      },
      {
        q: 'Can this Kauaʻi crew cook on another island the same day?',
        a: 'This crew stays on Kauaʻi. There is no same-day inter-island crossing. A Hanalei bridge closure can already move a north-shore night on this island. It does not move the crew somewhere else.',
      },
      {
        q: 'How do I plan meals here and on another island?',
        a: 'Request availability here for one shore. Open the other island from [the islands page](root:/islands) and send a separate note. One coordinator can hold both. The totals stay apart. Use [the quote form](/quote) for the Kauaʻi house.',
      },
      {
        q: 'Are nights on Kauaʻi live, or do I request availability?',
        a: `Request availability. A named shore is not a confirmation. We write back when we can staff. This host does not pretend a live roster. Other islands are reached from [the islands page](root:/islands). Desk: ${desk}.`,
      },
      {
        q: 'If the Hanalei bridge closes, can this crew cook the night on Oʻahu instead?',
        a: 'A bridge closure moves the north-shore night on Kauaʻi. It does not move the crew to Oʻahu. Request availability for one shore here. An Oʻahu dinner is a separate written quote, started from [the Hawaii home](root:/).',
      },
      {
        q: 'How do I request availability here and a quote on Maui for the same trip?',
        a: 'Request availability on [the quote form](/quote) for Princeville or Poʻipū. Open [the Hawaii home](root:/), then send Maui its own written quote for the villa. One coordinator can hold both notes. The totals stay apart. A named shore is not a confirmation.',
      },
    ],
  },
  bigisland: {
    h1: 'Other islands after a west-side Hawaiʻi stay.',
    title: 'Other islands after a Kona or Kohala stay | myCHEF',
    description:
      'Join the inquiry list for Kona or Kohala. Plan any other island from the Hawaii home. Hilo is a separate day, not another island. West side first.',
    lede: 'Join the inquiry list for the west side. Hilo is the east side of this island, not another island.',
    kicker: 'Hawaiʻi Island · Other islands',
    photo: 'islandsIndexBigisland',
    body: [
      'This site starts on the Kona–Kohala coast, so Oʻahu, Maui, and Kauaʻi are not resorts you add to a west-side inquiry. Each of those islands has its own site and its own crew. A chef team cooks on its own island only. Same-day inter-island crossings are declined. The saddle toward Hilo is already its own day here. Another island is a further day, with that island’s people.',
      'Join the inquiry list for the west-side house on [the quote form](/quote). For any other island, start at [the Hawaii home](root:/), open [coverage](root:/coverage), and send that host its own request. One coordinator, separate totals. Hilo is not another island. It is the east side of Hawaiʻi Island, a dedicated day. Kauaʻi takes an availability request on its own site.',
    ],
    faqs: [
      {
        q: 'Why is this site not the place to book Oʻahu, Maui, or Kauaʻi?',
        a: 'Those islands have their own hosts and their own crews. This site starts on the west side of Hawaiʻi Island. Open [the islands page](root:/islands) for the others. Do not file them as extra resorts along this coast.',
      },
      {
        q: 'Can the west-side crew cook on another island the same day?',
        a: 'Same-day inter-island crossings are declined. The saddle toward Hilo is already its own day on this island. Another island is a further day, with that island’s people.',
      },
      {
        q: 'How do I plan a trip that eats here and then on another island?',
        a: 'Join the inquiry list for the west-side house. Open the other island from [the islands page](root:/islands) and send a separate note. One coordinator, separate totals. Use [the quote form](/quote) for this island only.',
      },
      {
        q: 'Is Hilo another island?',
        a: `Hilo is the east side of this island, a dedicated day, never implied by a Kona or Kohala request. It is not another island and not a same-day add-on. The other islands are listed on [the islands page](root:/islands). Desk: ${desk}.`,
      },
      {
        q: 'Is a flight to Maui the same kind of separate request as Hilo?',
        a: 'They are both separate requests, and they are not the same place. Hilo is still this island, a dedicated east-side day. Maui is another island with its own crew. Join the inquiry list for Kona or Kohala, and start Maui from [the Hawaii home](root:/).',
      },
      {
        q: 'How do I join the inquiry list here and still ask Oʻahu for a written quote?',
        a: 'Join the inquiry list on [the quote form](/quote) for the west-side address. Start at [the Hawaii home](root:/) and send Oʻahu its own written quote. One coordinator, separate totals. This site does not book Oʻahu.',
      },
    ],
  },
};
