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
    h1: 'You’re on our Oʻahu site. Maui, Kauaʻi and the Big Island each have their own.',
    title: 'The other islands from Oahu — Maui, Kauai, west-side Hawaiʻi | myCHEF',
    description:
      'You’re on our Oahu site. Maui, Kauai and the Big Island each have their own site.',
    lede: 'You’re on our Oahu site. Maui, Kauai and the Big Island each have their own site.',
    kicker: 'Oʻahu · Other islands',
    photo: 'islandsIndexOahu',
    body: [
      'Each island is its own host: own chefs, own zones, own quote vs inquiry posture. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
      {
        q: 'Why do Maui, Kauaʻi, and the Big Island each have a site of their own instead of living on this one?',
        a: 'Each island has its own chefs, its own zones, and its own way of taking a booking. This site is Oʻahu. The other three are separate hosts. Start at [the islands page](root:/islands) and open the host that has the house.',
      },
      {
        q: 'Can the Oʻahu crew cook on another island the same day?',
        a: 'No. There is no same-day inter-island crossing. Guests may fly. This crew stays on Oʻahu. The next island is its own day and its own people.',
      },
      {
        q: 'How do I plan a trip that also eats on another island?',
        a: 'As separate quotes. One coordinator can hold the thread. The totals are not blended. Use [the islands page](root:/islands) to reach the other host, and send one island per note on [the quote form](/quote).',
      },
      {
        q: 'If tonight is a Honolulu house and the next dinner is somewhere else, what stays on this site?',
        a: `Only the Oʻahu night. Kahala and Ko Olina quotes are written here. The other dinner is requested on that island’s own site, from [the islands page](root:/islands). Quotes on this host stay open for the house in town. Desk: ${desk}.`,
      },
    ],
  },
  maui: {
    h1: 'You’re on our Maui site. Oʻahu, Kauaʻi and the Big Island each have their own.',
    title: 'The other islands from Maui — Oahu, Kauai, west-side Hawaiʻi | myCHEF',
    description:
      'You’re on our Maui site. Oahu, Kauai and the Big Island each have their own site.',
    lede: 'You’re on our Maui site. Oahu, Kauai and the Big Island each have their own site.',
    kicker: 'Maui · Other islands',
    photo: 'islandsIndexMaui',
    body: [
      'Each island has its own site. Kauaʻi and Hawaiʻi Island bookings start as an inquiry.',
    ],
    faqs: [
      {
        q: 'Why are Oʻahu, Kauaʻi, and the Big Island not booked from this Maui site?',
        a: 'Each island is its own host, with its own crew. This site cooks the Maui houses we name, Wailea and West Maui among them. The others live on their own sites. Open [the islands page](root:/islands).',
      },
      {
        q: 'Can a Maui crew fly to another island and cook that same night?',
        a: 'No. Same-day crossings are declined. A Saturday lanai in Kapalua does not become another island’s crew the next morning by default. Book that night with the island that has the house.',
      },
      {
        q: 'How should a week that also leaves Maui be requested?',
        a: 'Two notes, even in one email thread. The Maui house is a written quote. The other island follows its own posture, which [the islands page](root:/islands) states. Do not ask this site to blend the totals. Use [the quote form](/quote) for the villa here.',
      },
      {
        q: 'If the lawn is in Wailea and a later dinner is off Maui, which part stays here?',
        a: `The Wailea or West Maui night only, including the Saturday drive if you cross this island. The off-island dinner is a separate request through [the islands page](root:/islands). Quotes here stay open for the villa you named. Desk: ${desk}.`,
      },
    ],
  },
  kauai: {
    h1: 'You’re on our Kauaʻi site. Oʻahu, Maui and the Big Island each have their own.',
    title: 'The other islands from Kauai — Oahu, Maui, west-side Hawaiʻi | myCHEF',
    description:
      'You’re on our Kauai site. Oahu, Maui and the Big Island each have their own site.',
    lede: 'You’re on our Kauai site. Oahu, Maui and the Big Island each have their own site.',
    kicker: 'Kauaʻi · Other islands',
    photo: 'islandsIndexKauai',
    body: [
      `Inquiry stage.`,
      'A named shore is not an instant-booking button. Oahu and Maui take written quotes. Hawaiʻi Island is also inquiry, west side first.',
    ],
    faqs: [
      {
        q: 'Why can’t an availability request on this site cover Oʻahu, Maui, or the Big Island?',
        a: 'Each of those islands has its own crew and its own site. A Garden Isle request stays on this host. Reach the others from [the islands page](root:/islands). Do not swap in another island’s name and expect this shore’s answer.',
      },
      {
        q: 'Can this Kauaʻi crew cook on another island the same day?',
        a: 'No. There is no same-day inter-island crossing. A Hanalei bridge closure can already move a north-shore night on this island. It does not move the crew somewhere else.',
      },
      {
        q: 'How do I plan meals here and on another island?',
        a: 'Request availability here for one shore. Open the other island from [the islands page](root:/islands) and send a separate note. One coordinator can hold both. The totals stay apart. Use [the quote form](/quote) for the Kauaʻi house.',
      },
      {
        q: 'Are nights on Kauaʻi live, or do I request availability?',
        a: `Request availability. A named shore is not a confirmation. We write back when we can staff. This host does not pretend a live roster. Other islands are reached from [the islands page](root:/islands). Desk: ${desk}.`,
      },
    ],
  },
  bigisland: {
    h1: 'You’re on our Big Island site. Oʻahu, Maui and Kauaʻi each have their own.',
    title: 'The other islands from the west side — Oahu, Maui, Kauai | myCHEF',
    description:
      'You’re on our Big Island site. Oahu, Maui and Kauai each have their own site.',
    lede:
      'Hilo is not another island; it is on the east-side page.',
    kicker: 'Hawaiʻi Island · Other islands',
    photo: 'islandsIndexBigisland',
    body: [
      `West side first.`,
      'The east side is a dedicated day from the west-side base. Oahu and Maui take written quotes. Kauaʻi is also taking enquiries.',
    ],
    faqs: [
      {
        q: 'Why is this site not the place to book Oʻahu, Maui, or Kauaʻi?',
        a: 'Those islands have their own hosts and their own crews. This site starts on the west side of Hawaiʻi Island. Open [the islands page](root:/islands) for the others. Do not file them as extra resorts along this coast.',
      },
      {
        q: 'Can the west-side crew cook on another island the same day?',
        a: 'No. Same-day inter-island crossings are declined. The saddle toward Hilo is already its own day on this island. Another island is a further day, with that island’s people.',
      },
      {
        q: 'How do I plan a trip that eats here and then on another island?',
        a: 'Join the inquiry list for the west-side house. Open the other island from [the islands page](root:/islands) and send a separate note. One coordinator, separate totals. Use [the quote form](/quote) for this island only.',
      },
      {
        q: 'Is Hilo another island?',
        a: `No. Hilo is the east side of this island, a dedicated day, never implied by a Kona or Kohala request. It is not a same-day add-on. The other islands are listed on [the islands page](root:/islands). Desk: ${desk}.`,
      },
    ],
  },
};
