import type { IslandId } from './islands';
import type { PhotoKey } from './photos';
import { DESK_EMAIL, DESK_PHONE_DISPLAY, DESK_TEL, DESK_WHATSAPP } from '@/lib/contact';

/**
 * Villa-event documents — occasion pages, not catering clones.
 * Do not put "oahu catering" / "maui catering" in these titles.
 */
const desk = `${DESK_EMAIL}, +1 ${DESK_PHONE_DISPLAY} (${DESK_TEL}), WhatsApp ${DESK_WHATSAPP}`;

export interface EventOffer {
  h1: string;
  title: string;
  description: string;
  lede: string;
  photo: PhotoKey;
  /** Visible routing heading. Not an SEO title — keep the field name off `title`. */
  guideHeading: string;
  body: string[];
  occasions: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
}

export const eventOffers: Record<IslandId, EventOffer> = {
  oahu: {
    h1: 'Villa events on Oahu — birthdays, retreats, welcome nights.',
    title: 'Oahu villa events — birthdays & retreats | myCHEF',
    description:
      'Villa events on Oʻahu, from Honolulu and Kahala to Ko Olina and Kailua: birthdays, retreats, and welcome nights. Request a written quote for the house.',
    lede:
      'Birthdays, company offsites, welcome nights in residences with kitchens. Buffet or plated is on the catering page with published starting prices.',
    photo: 'eventsOahu',
    guideHeading: 'Which Resident’s Island occasion fits the house.',
    body: [
      'A Honolulu or Kahala night is chosen by the room. [Birthdays](/events/birthdays) are a staffed dining-room table. [Welcome dinners](/events/welcome-dinners) are the first evening of a Ko Olina week. [Villa parties](/events/villa-parties) are the larger house list. [Anniversaries](/events/anniversaries) stay a small table. [Brunch](/events/brunch) is the next morning. [Retreats](/events/retreats) are full-board days. A company night is [house offsites](/events/corporate-events).',
      `Town logistics decide the clock. A tower needs a freight window before the cook is on site. A Gold Coast dining room needs chairs for the list, not a lawn we have not measured. When the house needs a staffed service rather than one table, open [Oahu catering](/catering). When the dates are welcome, rehearsal, reception, and brunch together, open [wedding week](/weddings). Extra hands, if the night needs them, are named on [staffing](/staffing). The card is [pricing](/pricing). Quotes are open. Send the building and the occasion on [the quote form](/quote). Desk: ${desk}.`,
    ],
    occasions: [
      {
        title: 'Birthdays and anniversaries',
        text: 'A staffed table in the house, not a restaurant buyout. Guest lists we hold: about ten to seventy-five. Kahala dining rooms and Ko Olina villas are the usual rooms.',
      },
      {
        title: 'Retreats and offsites',
        text: 'Full-board days when the house actually cooks. Not a convention-centre play. Dietary is designed in, not promised as theatre.',
      },
      {
        title: 'Welcome nights',
        text: 'The first evening of a villa week — family-style or grazing, the room still arriving. Wedding-week formats are on the weddings page.',
      },
    ],
    faqs: [
      {
        q: 'How many guests fit a Kahala occasion, and when should we book catering instead?',
        a: 'If the dining room seats the list, stay on the occasion page that names the night. If the house needs stations and a floor, open [Oahu catering](/catering). We will not stretch a Gold Coast dining room past the chairs. Put the seat count on [the quote form](/quote).',
      },
      {
        q: 'Plated courses or platters — which belongs on a Resident’s Island occasion?',
        a: 'Plated courses suit a Kahala or Gold Coast dining table, one pass at a time. Platters suit a Ko Olina table that eats from the middle. The occasion page names why people gathered. The quote names the service. A larger staffed room is [Oahu catering](/catering), not a second title.',
      },
      {
        q: 'How does the night run in a Honolulu house?',
        a: 'The freight window is booked first. The cook sets the kitchen, serves in the dining room or on the lānai, and clears before the elevator slot ends. A Ko Olina villa can run later because the house is the venue. The quote states that window.',
      },
      {
        q: 'What do the kitchen and the table need before an Oʻahu occasion is accepted?',
        a: 'A cooktop, a fridge, and a table for the list. A hotel room with a coffee maker is declined. Say whether the seats are a Gold Coast dining room, a Ko Olina lānai, or a town residence. We confirm the room in writing before any deposit.',
      },
      {
        q: 'If rain hits an outdoor Gold Coast setup, where does the occasion go?',
        a: 'Indoors, or onto a covered lānai, and that backup is a sentence on the quote. We do not add a tent after the deposit. If the indoor chairs cannot hold the list, we say so before you accept. The lawn is not a promise.',
      },
      {
        q: 'How is the quote written when an Oʻahu week has two occasions?',
        a: 'One coordinator, one thread, a line for each night. A welcome dinner and a later birthday do not blend into one total. A wedding week belongs on [wedding week](/weddings). Service at 20% and Hawaiʻi GET up to 4.712% print as their own lines. A 50% deposit follows acceptance. Gratuity is never required.',
      },
      {
        q: 'Does a Ko Olina villa party share one total with a Honolulu anniversary?',
        a: 'No. [Villa parties](/events/villa-parties) are the larger house list. [Anniversaries](/events/anniversaries) are the small table. They can share a coordinator across a week. They do not share a line. Town freight and a villa arrival are different notes.',
      },
      {
        q: 'Does a town-tower occasion need more than the usual quote details?',
        a: `Yes. Name the freight window and whether the table is a dining room or a lānai. Those notes make a Honolulu night real. Quotes are open. Desk: ${desk}.`,
      },
    ],
  },
  maui: {
    h1: 'Villa events on Maui — Wailea lawns and West Maui houses.',
    title: 'Maui villa events — Wailea & West Maui | myCHEF',
    description:
      'Staffed villa events on Maui: birthdays, retreats and welcome nights in Wailea, Kīhei and West Maui.',
    lede:
      'The lawn, the guest list, the occasion. Wailea, Kapalua, Kāʻanapali, Makena. This page names the night.',
    photo: 'eventsMaui',
    guideHeading: 'Which Villa Week occasion belongs on the lanai.',
    body: [
      'Villa Week is a sequence, not one title. Landing night in Wailea is [welcome dinners](/events/welcome-dinners). A lawn gathering later in the stay is [villa parties](/events/villa-parties) or [birthdays](/events/birthdays), depending on why the list came. Two seats at Kapalua are [anniversaries](/events/anniversaries). The slow morning is [brunch](/events/brunch). Days of cooking, not one supper, are [retreats](/events/retreats). A company group in the same rental is [house offsites](/events/corporate-events).',
      `A West Maui lanai and a Wailea lawn do not take the same plan. Wind on the west side moves a table under cover. South Maui evenings usually stay outside, with the backup written anyway. The week is the product. The page you open is the night. When the list needs a staffed room, use [Maui catering](/catering). When vows structure the dates, use [wedding week](/weddings). People beyond the chef are [staffing](/staffing). Numbers live on [pricing](/pricing). Quotes are open on [the quote form](/quote). Desk: ${desk}.`,
    ],
    occasions: [
      {
        title: 'Lawn gatherings',
        text: 'Hotel-zoned residences with kitchens. A birthday on the grass is still a staffed room: plates, service, a written wet-weather backup.',
      },
      {
        title: 'Retreat weeks',
        text: 'South Maui and West Maui houses that cook three times a day. Groceries at cost on Stay Chef days.',
      },
      {
        title: 'Welcome dinners',
        text: 'The ice-breaker before a wedding week. The full wedding week itself is the weddings page — separate lines, not a blur.',
      },
    ],
    faqs: [
      {
        q: 'How do I split a Wailea week between a welcome dinner and a lawn party?',
        a: 'Landing night stays on [welcome dinners](/events/welcome-dinners). The later lawn list is [villa parties](/events/villa-parties) or [birthdays](/events/birthdays). Same villa, two lines, one coordinator. Do not merge them into a single mystery total on [the quote form](/quote).',
      },
      {
        q: 'When is a Kapalua anniversary still two seats, and when has it become a villa party?',
        a: 'Two seats, or a very small table, stay on [anniversaries](/events/anniversaries). Once the lanai is a gathering, open [villa parties](/events/villa-parties). The food plan does not rename itself. The page does. Quotes are open.',
      },
      {
        q: 'What changes on the table if a West Maui supper is plated instead of shared?',
        a: 'Plated means cleared place settings and courses from the kitchen. Shared means platters down the middle of the lanai table. Pick one on the quote. The occasion page still says why the group is there. A staffed room beyond that table is [Maui catering](/catering).',
      },
      {
        q: 'How does a Villa Week occasion move from the kitchen to the lanai?',
        a: 'The cook works the rental kitchen, then the courses or platters go to the lanai or the dining room you named. We do not stage in a hotel corridor. The quote states the call time, including Saturday traffic between Wailea and Kapalua.',
      },
      {
        q: 'What must a Wailea kitchen and the outdoor table have?',
        a: 'A real cooktop, cold storage, and a table that seats the list. A resort room with a minibar is declined. Tell us if dinner is the lawn or the dining room. We confirm that room in writing before a deposit.',
      },
      {
        q: 'Where does a windy West Maui lanai move the night?',
        a: 'Under cover, or into the dining room, and that backup is written before you accept. We do not invent a tent on the day. If the indoor seats are short, the quote says so. South Maui wind is a different note from a Kapalua gust.',
      },
      {
        q: 'Can one Maui quote hold brunch and a birthday without becoming a wedding week?',
        a: 'Yes, when there are no vows. [Brunch](/events/brunch) and [birthdays](/events/birthdays) are two lines with one coordinator. Welcome, rehearsal, reception, and brunch as a wedding belong on [wedding week](/weddings). 20% service and GET up to 4.712% stay separate lines. Gratuity is never required.',
      },
      {
        q: 'Why should a Saturday Kapalua occasion say whether we are in Wailea or Kapalua?',
        a: `The drive from Wailea changes the call time, and a west-side gust is not a south-shore lawn. Put the shore on [the quote form](/quote) with the occasion. Quotes are open. Desk: ${desk}.`,
      },
    ],
  },
  kauai: {
    h1: 'Estate events on Kauai — both shores, inquiry.',
    title: 'Kauai estate events — both shores, inquiry | myCHEF',
    description:
      'Staffed estate events on Kauai: Princeville, Hanalei and Poʻipū. Inquiry stage.',
    lede:
      'Both shores. Inquiry stage. The bridge and the weather are real.',
    photo: 'eventsKauai',
    guideHeading: 'Which Garden Isle occasion matches the shore.',
    body: [
      'Name the shore before the occasion. A Princeville or Hanalei gathering is not a Poʻipū plan with the place swapped. [Birthdays](/events/birthdays) and [villa parties](/events/villa-parties) on the north inherit the Hanalei bridge: a closure moves the night, it does not forfeit it. [Welcome dinners](/events/welcome-dinners) on the south are the shorter drive from Līhuʻe. [Anniversaries](/events/anniversaries) can be either shore, but the road is part of the note. [Brunch](/events/brunch) still carries the bridge if it is north. [Retreats](/events/retreats) are full-board days, one shore at a time. A company table is [house offsites](/events/corporate-events).',
      `This list is an inquiry. Request availability. A printed page is not a crew. If the room needs a staffed service, open [Kauai catering](/catering) and request availability there too. A wedding week is [wedding week](/weddings). Extra lines for people are [staffing](/staffing). The published card is [pricing](/pricing). Use [the quote form](/quote) and name the shore. Desk: ${desk}.`,
    ],
    occasions: [
      {
        title: 'North Shore estates',
        text: 'Princeville and Hanalei. Far-North inherits the Hanalei-bridge clause — reschedule rather than forfeit. 72-hour notice.',
      },
      {
        title: 'South Shore houses',
        text: 'Poʻipū and Kōloa. Shorter drive from Līhuʻe. Arrival-night dinners and retreat days.',
      },
      {
        title: 'Wedding-adjacent nights',
        text: 'Welcome dinner or rehearsal as its own line. From $260 a guest plus staffing.',
      },
    ],
    faqs: [
      {
        q: 'Does the same headcount pick a different occasion on the North Shore than in Poʻipū?',
        a: 'The count does not choose the page. The shore does. A north-shore list inherits the Hanalei bridge. A Poʻipū list is the shorter drive from Līhuʻe. Say which shore on the inquiry. We will not treat them as one drive.',
      },
      {
        q: 'How do I choose a Princeville estate party versus a south-shore welcome dinner?',
        a: 'An estate party in Princeville is [villa parties](/events/villa-parties) or [birthdays](/events/birthdays). The first night in Poʻipū is [welcome dinners](/events/welcome-dinners). Request availability for the shore you actually have. A named estate is not a confirmed crew.',
      },
      {
        q: 'What does rain do to a plated Hanalei plan compared with platters already on the table?',
        a: 'Plated courses need a dry pass from kitchen to seat, so the covered lānai is the backup. Platters can stay on a table that is already under the roof. The inquiry states which, before anyone travels. A bridge closure still moves the whole night.',
      },
      {
        q: 'How does a Garden Isle occasion night run when the bridge is in the plan?',
        a: 'We build the call around the road. If the Hanalei bridge closes, the north-shore night moves with 72-hour notice. It is not forfeited, and it is not quietly handed to Poʻipū. The south shore does not inherit that clause.',
      },
      {
        q: 'What kitchen and seating notes differ between Hanalei and Poʻipū?',
        a: 'Both need a cooktop, a fridge, and seats for the list. Hanalei also needs a covered backup and the bridge note. Poʻipū is the shorter drive and still needs the wet-weather line. A hotel room without a stove is declined on either shore.',
      },
      {
        q: 'When should a Kauaʻi occasion move to the catering page?',
        a: 'When the estate needs a staffed service, not one table in the house. Open [Kauai catering](/catering) and request availability. This page still names the occasion. Catering names the staffed room. They are not the same inquiry line.',
      },
      {
        q: 'Can one availability request cover a south-shore brunch and a north-shore dinner?',
        a: 'Yes, as two lines and one coordinator, if a crew can hold both shores. They are not one blended night. A wedding week belongs on [wedding week](/weddings). 20% service and GET up to 4.712% print alone. A 50% deposit waits for a written yes. Gratuity is never required.',
      },
      {
        q: 'How do I request availability for an occasion on Kauaʻi?',
        a: `Name the shore, the dates, the seats, and the occasion. Request availability on [the quote form](/quote). There is no instant-booking button. Desk: ${desk}.`,
      },
    ],
  },
  bigisland: {
    h1: 'Villa events on the Big Island — Kohala and Kona first.',
    title: 'Big Island villa events — Kohala and Kona | myCHEF',
    description:
      'Staffed villa events on Hawaiʻi Island: Kohala Coast and Kona first, by inquiry. East side is a dedicated day, never a same-day add-on.',
    lede:
      'West-side first. Seven resort communities in one radius. Hilo is a different day.',
    photo: 'eventsBigisland',
    guideHeading: 'Which west-side occasion fits, and what Hilo is not.',
    body: [
      'Expedition occasions start in Kona, Keauhou, Waikoloa, and along the Kohala Coast. [Welcome dinners](/events/welcome-dinners) are the arrival night on that side. [Villa parties](/events/villa-parties) and [birthdays](/events/birthdays) are terrace lists in the same radius. [Anniversaries](/events/anniversaries) are the small table. [Brunch](/events/brunch) is the next morning, still west. [Retreats](/events/retreats) are full-board days that do not hop the saddle. A company night in a west-side house is [house offsites](/events/corporate-events).',
      `Hilo is a dedicated day. It is not a line on a Kona occasion, and it is not implied by opening this page. A Waikoloa terrace and a Kona town kitchen share the west side. They do not share a clock. Ironman weeks compress roads and grocery windows; flag them, do not assume the kitchen grows. A staffed room is [Big Island catering](/catering). A wedding week is [wedding week](/weddings). People beyond the chef are [staffing](/staffing). The card is [pricing](/pricing). Join the inquiry list on [the quote form](/quote). Desk: ${desk}.`,
    ],
    occasions: [
      {
        title: 'Kohala retreats',
        text: 'Waikoloa, Mauna Lani, the Mauna Kea resort belt. Lava-heat evenings, kitchens that range from a true pass to a galley.',
      },
      {
        title: 'Kona town nights',
        text: 'Kailua-Kona and Keauhou. Ironman week compresses the calendar — flag those dates early.',
      },
      {
        title: 'East side',
        text: 'Hilo and Volcano are quote-only with dedicated staffing. We will not sell a same-day round trip.',
      },
    ],
    faqs: [
      {
        q: 'When is a west-side gathering still a house occasion, and when should we book catering?',
        a: 'A table the house can seat, on the Kona–Kohala side, stays on the occasion that names the night. When the villa needs a staffed room, open [Big Island catering](/catering). Join the inquiry list with the address. A published page is not a held crew.',
      },
      {
        q: 'How do I choose a Kona welcome dinner versus a Kohala terrace party?',
        a: 'Arrival night in Kona or Keauhou is [welcome dinners](/events/welcome-dinners). A later terrace list in Waikoloa or along the Kohala Coast is [villa parties](/events/villa-parties). They can share a coordinator. They are not one line, and neither includes Hilo.',
      },
      {
        q: 'If the terrace would be plated and the great room family-style, which room should we choose?',
        a: 'The service style of the room you will actually use. Plated needs a clear path from the pass to each seat. Family-style puts platters on one table. Write which room. Do not leave it for the crew to guess on the day.',
      },
      {
        q: 'How does a west-side occasion night run when the drive between Kona and Kohala sets the timing?',
        a: 'The cook is on site with time to set the kitchen before service. A Waikoloa night and a Kona town night are not stacked on one clock. The inquiry states the resort or the town. We do not start the drive after a same-day Hilo stop.',
      },
      {
        q: 'What kitchen and table does a Waikoloa house need, and what is declined?',
        a: 'A cooktop, a fridge, and a table or terrace that seats the list. A hotel room with a minibar is declined. Tell us if the night is indoors or on the lava terrace. We confirm that in writing before any deposit.',
      },
      {
        q: 'If wind shuts the lava terrace, where do we move dinner?',
        a: 'In the inquiry, as the great room or a covered edge of the same house. We do not add a tent after you have accepted. If those indoor seats cannot hold the list, the reply says so. The terrace is not assumed.',
      },
      {
        q: 'Why is Hilo absent from a Kona occasion quote?',
        a: 'Hilo is a dedicated east-side day, about a half-day drive across the saddle. It is never a line on a Kona or Kohala occasion. Join the inquiry list for the west side, or send Hilo as its own day. We will not imply both.',
      },
      {
        q: 'How do I join the inquiry list for a west-side occasion?',
        a: `West-side address, dates, seats, and which occasion. Flag Ironman if the week touches the race. Join the inquiry list on [the quote form](/quote). There is no instant-booking button. Desk: ${desk}.`,
      },
    ],
  },
};
