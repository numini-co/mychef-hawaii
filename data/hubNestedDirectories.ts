import { SEARCH_VOLUMES } from './offers';
import type { HubDirectory } from './hubDirectories';
import { STAFFING } from './rateCard';
import { DESK_EMAIL, DESK_PHONE_DISPLAY, DESK_TEL, DESK_WHATSAPP } from '@/lib/contact';

const serverHr = STAFFING.serverHourly;
const sousHr = STAFFING.sousHourly;
const minHours = STAFFING.minimumHours;
const desk = `${DESK_EMAIL}, +1 ${DESK_PHONE_DISPLAY} (${DESK_TEL}), WhatsApp ${DESK_WHATSAPP}`;

/** Nested hub pickers for island-only occasion, format, fine-dining, staffing, menu, and help URLs. */
export const HUB_NESTED_PATHS = [
  '/events/birthdays',
  '/events/welcome-dinners',
  '/events/retreats',
  '/events/anniversaries',
  '/events/corporate-events',
  '/events/villa-parties',
  '/events/brunch',
  '/catering/bbq',
  '/catering/plated',
  '/catering/family-style',
  '/catering/buffet',
  '/catering/grazing',
  '/catering/drop-off',
  '/fine-dining/romantic-dinner',
  '/fine-dining/tasting-menu',
  '/fine-dining/chefs-table-evening',
  '/fine-dining/celebration-dinner',
  '/staffing/servers',
  '/staffing/bartenders',
  '/staffing/butlers',
  '/menus/three-course',
  '/menus/family-style-menu',
  '/menus/breakfast',
  '/menus/lunch',
  '/help/getting-started',
  '/help/menu-guide',
  '/help/wedding-guide',
  '/help/corporate-guide',
  '/help/managing-booking',
] as const;

export type HubNestedId =
  | 'occBirthdays'
  | 'occWelcome'
  | 'occRetreats'
  | 'occAnniversaries'
  | 'occCorporate'
  | 'occParties'
  | 'occBrunch'
  | 'fmtBbq'
  | 'fmtPlated'
  | 'fmtFamily'
  | 'fmtBuffet'
  | 'fmtGrazing'
  | 'fmtDropoff'
  | 'fineRomantic'
  | 'fineTasting'
  | 'fineChefsev'
  | 'fineCeleb'
  | 'staffServers'
  | 'staffBartenders'
  | 'staffButlers'
  | 'menuThree'
  | 'menuFamily'
  | 'menuBreakfast'
  | 'menuLunch'
  | 'helpStart'
  | 'helpMenu'
  | 'helpWedding'
  | 'helpCorp'
  | 'helpManage';

export const hubNestedDirectories: Record<HubNestedId, HubDirectory> = {
  occBirthdays: {
    path: '/events/birthdays',
    h1: 'Birthday dinners, by island.',
    title: 'Birthday dinners, by island | myCHEF Hawaii',
    description: 'Birthday dinners across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'Each island writes the room.',
    kicker: 'Statewide · Birthdays',
    photo: 'hubOccBirthdays',
    cardLabel: 'Birthdays',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking inquiries.',
    ],
    faqs: [
      {
        q: 'Which island birthday page should I open?',
        a: 'Open the birthday page on the island that has the house: [Oʻahu](oahu:/events/birthdays), [Maui](maui:/events/birthdays), [Kauaʻi](kauai:/events/birthdays), or [Hawaiʻi Island](bigisland:/events/birthdays). This page only routes.',
      },
      {
        q: 'If the birthday is on Kauaʻi, do I still get a written quote from this page?',
        a: 'No. This page does not answer. Kauaʻi sends an availability reply from its birthday page. Hawaiʻi Island uses the inquiry list and starts on the west side. Only Oʻahu and Maui birthdays come back as a written quote.',
      },
      {
        q: 'What does a birthday request need before any island prices it?',
        a: 'The dinner date, which island and area, how many people including children, the house kitchen, and dietary limits. One island only. Use [the quote form](/quote).',
      },
      {
        q: 'Why are birthdays on two islands two separate requests?',
        a: `A crew does not cross islands the same day. Each house is its own quote or request, even if one person keeps both emails. Name one island per night. Desk: ${desk}.`,
      },
    ],
  },
  occWelcome: {
    path: '/events/welcome-dinners',
    h1: 'Arrival-night dinners, by island.',
    title: 'Arrival-night dinners, by island | myCHEF Hawaii',
    description: 'First night in the house. Not a full wedding week. Each island writes arrival dinner.',
    lede:
      'First night in the house. Not a full wedding week. Each island writes the arrival dinner.',
    kicker: 'Statewide · Welcome nights',
    photo: 'hubOccWelcome',
    cardLabel: 'Welcome nights',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking inquiries.',
    ],
    faqs: [
      {
        q: 'Which island page is the first night in the house?',
        a: 'The welcome page where you land: [Oʻahu](oahu:/events/welcome-dinners), [Maui](maui:/events/welcome-dinners), [Kauaʻi](kauai:/events/welcome-dinners), or [Hawaiʻi Island](bigisland:/events/welcome-dinners). This hub page does not cook that night.',
      },
      {
        q: 'How does an arrival-night reply differ on Kauaʻi and Hawaiʻi Island?',
        a: 'Kauaʻi replies when you request availability. Hawaiʻi Island replies from the inquiry list, west side first. Oʻahu and Maui send a written quote. None of those replies is a held crew until that island says so.',
      },
      {
        q: 'What belongs in an arrival-night note?',
        a: 'The landing date, the island and area, how many seats, the house and its kitchen, and dietary limits. Send one island on [the quote form](/quote).',
      },
      {
        q: 'If the welcome dinner is only the first night, where does the rest of a wedding week go?',
        a: `Not on this page. This route is the arrival night alone. Open that island’s welcome page, then send one island on [the quote form](/quote). Two islands are still two requests. Desk: ${desk}.`,
      },
    ],
  },
  occRetreats: {
    path: '/events/retreats',
    h1: 'Retreat cooking notes, by island.',
    title: 'Retreat cooking notes, by island | myCHEF Hawaii',
    description: 'Retreat cooking notes across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'Days in the house, food as a constraint.',
    kicker: 'Statewide · Retreat notes',
    photo: 'hubOccRetreats',
    cardLabel: 'Retreat notes',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking inquiries.',
    ],
    faqs: [
      {
        q: 'Which island page covers full-board days in the house?',
        a: 'The retreat page where the group stays: [Oʻahu](oahu:/events/retreats), [Maui](maui:/events/retreats), [Kauaʻi](kauai:/events/retreats), or [Hawaiʻi Island](bigisland:/events/retreats). Days of cooking are not set from this hub.',
      },
      {
        q: 'If the retreat runs several days, which islands still will not send a quote?',
        a: 'Kauaʻi will not. Request availability there, even for a full week. Hawaiʻi Island will not either. Join the inquiry list, west side first. Oʻahu and Maui are the hosts that write the quote. This directory does not.',
      },
      {
        q: 'Which facts does a retreat request need that a single dinner does not?',
        a: 'The span of days, which meals repeat, the island and area, headcount, the house kitchen, and dietary limits. One island on [the quote form](/quote). A single supper is a different page.',
      },
      {
        q: 'Is a retreat the same ask as one executive dinner?',
        a: `No. Full-board days stay on the island retreat page. One leadership dinner is [house offsite catering](/corporate-catering). Each island is still its own request, with no same-day crossing. Desk: ${desk}.`,
      },
    ],
  },
  occAnniversaries: {
    path: '/events/anniversaries',
    h1: 'Anniversary nights, by island.',
    title: 'Anniversary nights, by island | myCHEF Hawaii',
    description: 'A marked night in the dining room. Not a wedding week. Each island writes the table.',
    lede:
      'A marked night in the dining room. Not a wedding week. Each island writes the table.',
    kicker: 'Statewide · Anniversaries',
    photo: 'hubOccAnniversaries',
    cardLabel: 'Anniversaries',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking inquiries.',
    ],
    faqs: [
      {
        q: 'Where do I open a small anniversary table?',
        a: 'On the anniversary page for that island: [Oʻahu](oahu:/events/anniversaries), [Maui](maui:/events/anniversaries), [Kauaʻi](kauai:/events/anniversaries), or [Hawaiʻi Island](bigisland:/events/anniversaries). Two seats stay on that host.',
      },
      {
        q: 'Will an anniversary on Kauaʻi come back as a written quote?',
        a: 'No. Kauaʻi comes back as an availability reply. Hawaiʻi Island comes back from the inquiry list, west side first. Oʻahu and Maui come back as a written quote. This page does not blend those replies.',
      },
      {
        q: 'What should an anniversary note contain?',
        a: 'The date, the island and area, two seats or a small table, the house and kitchen, and any dietary limits. Send one island on [the quote form](/quote).',
      },
      {
        q: 'Why can’t an anniversary on one island share a total with dinner on another island?',
        a: `Each island is a separate request. Crews do not cross the same day. One person can watch both emails. The totals stay apart. Desk: ${desk}.`,
      },
    ],
  },
  occCorporate: {
    path: '/events/corporate-events',
    h1: 'House offsite nights, by island.',
    title: 'House offsite nights, by island | myCHEF Hawaii',
    description: 'House offsite nights across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'A night in a house, not HCC citywides.',
    kicker: 'Statewide · Offsite nights',
    photo: 'hubOccCorporate',
    cardLabel: 'Offsite nights',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking inquiries.',
    ],
    faqs: [
      {
        q: 'Which island page is a company night for the whole team in the house?',
        a: 'The house-offsite page on that island: [Oʻahu](oahu:/events/corporate-events), [Maui](maui:/events/corporate-events), [Kauaʻi](kauai:/events/corporate-events), or [Hawaiʻi Island](bigisland:/events/corporate-events). This hub page does not plan the night.',
      },
      {
        q: 'Does a company night on Maui get the same kind of answer as one on Kauaʻi?',
        a: 'No. Maui, like Oʻahu, gets a written quote. Kauaʻi gets an availability reply. Hawaiʻi Island gets an inquiry-list reply, west side first. Open the matching host before you write the menu.',
      },
      {
        q: 'What do I put in a company-night request?',
        a: 'Dates, island and area, headcount, the house and kitchen, and dietary limits. One island per note. Use [the quote form](/quote).',
      },
      {
        q: 'Where is the planning brief if this page only routes the night?',
        a: `The brief is [how to brief an offsite](/help/corporate-guide), one island at a time. Two islands remain two requests, with no same-day crossing. Desk: ${desk}.`,
      },
    ],
  },
  occParties: {
    path: '/events/villa-parties',
    h1: 'Villa parties, by island.',
    title: 'Villa parties, by island | myCHEF Hawaii',
    description: 'Extra glasses in the house. Each island writes the party.',
    lede:
      'Extra glasses in the house. Each island writes the party.',
    kicker: 'Statewide · Villa parties',
    photo: 'hubOccParties',
    cardLabel: 'Villa parties',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking inquiries.',
    ],
    faqs: [
      {
        q: 'Which island writes the villa party?',
        a: 'The party page for the house: [Oʻahu](oahu:/events/villa-parties), [Maui](maui:/events/villa-parties), [Kauaʻi](kauai:/events/villa-parties), or [Hawaiʻi Island](bigisland:/events/villa-parties). Pick the host before the menu.',
      },
      {
        q: 'Who sends a written quote for a house party, and who sends an availability reply?',
        a: 'Oʻahu and Maui send a written quote. Kauaʻi sends an availability reply. Hawaiʻi Island uses the inquiry list, west side first. This page does not choose among them.',
      },
      {
        q: 'What do I include when I ask about a villa party?',
        a: 'Dates, island and area, headcount, the house and kitchen, and dietary limits. One island only. Use [the quote form](/quote).',
      },
      {
        q: 'Can one party request cover a Friday on Maui and a Saturday on Oʻahu?',
        a: `No. Two islands are two requests. There is no same-day crossing, and the next day is still a second crew. Desk: ${desk}.`,
      },
    ],
  },
  occBrunch: {
    path: '/events/brunch',
    h1: 'Day-after brunch, by island.',
    title: 'Day-after brunch, by island | myCHEF Hawaii',
    description: 'Day-after brunch across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'Mid-morning in the villa, not a standing carte.',
    kicker: 'Statewide · Brunch',
    photo: 'hubOccBrunch',
    cardLabel: 'Brunch',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking inquiries.',
    ],
    faqs: [
      {
        q: 'Which island page is the morning in the villa?',
        a: 'The brunch page on that host: [Oʻahu](oahu:/events/brunch), [Maui](maui:/events/brunch), [Kauaʻi](kauai:/events/brunch), or [Hawaiʻi Island](bigisland:/events/brunch). This directory only points.',
      },
      {
        q: 'Is a brunch on Hawaiʻi Island booked the same way as a brunch on Maui?',
        a: 'No. Maui sends a written quote, and so does Oʻahu. Hawaiʻi Island asks you to join the inquiry list, west side first. Kauaʻi asks you to request availability. Open the brunch page on the host that has the kitchen.',
      },
      {
        q: 'What do I send for a house brunch?',
        a: 'The morning’s date, the island and area, headcount, the kitchen, and dietary limits. One island. Start on [the quote form](/quote).',
      },
      {
        q: 'If brunch is the morning after a wedding, where does that week live?',
        a: `The wedding week is planned on [wedding week](/weddings). This page routes a villa morning that is not that week. Open the island brunch page for the house. Desk: ${desk}.`,
      },
    ],
  },
  fmtBbq: {
    path: '/catering/bbq',
    h1: 'Lawn BBQ service, by island.',
    title: 'Lawn BBQ service, by island | myCHEF Hawaii',
    description: 'Lawn BBQ service across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'Each island writes the grill.',
    kicker: 'Statewide · BBQ',
    photo: 'hubFmtBbq',
    cardLabel: 'BBQ',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Is this a restaurant BBQ page?',
        a: 'No. We cook in the house. Open the island format.',
      },
    ],
  },
  fmtPlated: {
    path: '/catering/plated',
    h1: 'Plated villa service, by island.',
    title: 'Plated villa service, by island | myCHEF Hawaii',
    description:
      'Plated villa service across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'Identical courses in the house.',
    kicker: 'Statewide · Plated',
    photo: 'hubFmtPlated',
    cardLabel: 'Plated',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  fmtFamily: {
    path: '/catering/family-style',
    h1: 'Family-style service, by island.',
    title: 'Family-style service, by island | myCHEF Hawaii',
    description: 'Family-style service across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'Shared platters, not a standing carte.',
    kicker: 'Statewide · Family-style',
    photo: 'hubFmtFamily',
    cardLabel: 'Family-style',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Same as plated?',
        a: 'Plated is identical courses. Family-style is shared platters.',
      },
    ],
  },
  fmtBuffet: {
    path: '/catering/buffet',
    h1: 'Buffet service, by island.',
    title: 'Buffet service, by island | myCHEF Hawaii',
    description: 'A staffed buffet in the house, not a hotel ballroom. Each island writes the line.',
    lede:
      'A staffed buffet in the house, not a hotel ballroom. Each island writes the line.',
    kicker: 'Statewide · Buffet',
    photo: 'hubFmtBuffet',
    cardLabel: 'Buffet',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Same as drop-off?',
        a: 'Drop-off is not staffed. Buffet is staffed in the house.',
      },
    ],
  },
  fmtGrazing: {
    path: '/catering/grazing',
    h1: 'Grazing boards, by island.',
    title: 'Grazing boards, by island | myCHEF Hawaii',
    description: 'Boards, not a fake standing carte. Each island writes how.',
    lede:
      'Boards, not a fake standing carte. Each island writes how.',
    kicker: 'Statewide · Grazing',
    photo: 'hubFmtGrazing',
    cardLabel: 'Grazing',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Same as a villa party?',
        a: 'Villa parties is the occasion.',
      },
    ],
  },
  fmtDropoff: {
    path: '/catering/drop-off',
    h1: 'Drop-off is not staffed, by island.',
    title: 'Drop-off is not staffed, by island | myCHEF Hawaii',
    description:
      'Each island says drop-off is not staffed service.',
    lede:
      'Food left, crew gone. Not a staffed room. Each island writes that honesty.',
    kicker: 'Statewide · Drop-off',
    photo: 'hubFmtDropoff',
    cardLabel: 'Drop-off',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Is this staffed catering?',
        a: 'No. Drop-off is not staffed. Open the island page.',
      },
    ],
  },
  fineRomantic: {
    path: '/fine-dining/romantic-dinner',
    h1: 'Romantic villa dinners, by island.',
    title: 'Romantic villa dinners, by island | myCHEF Hawaii',
    description: 'Romantic villa dinners across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'Two seats as a format, not a Michelin claim.',
    kicker: 'Statewide · Romantic dinner',
    photo: 'hubFineRomantic',
    cardLabel: 'Romantic dinner',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Is this a star claim?',
        a: 'No.',
      },
    ],
  },
  fineTasting: {
    path: '/fine-dining/tasting-menu',
    h1: 'Tasting menus, by island.',
    title: 'Tasting menus, by island | myCHEF Hawaii',
    description: 'A tasting arc in the villa, not a restaurant omakase brand. Omakase-at-home has sourcing gates.',
    lede:
      'A tasting arc in the villa, not a restaurant omakase brand. Omakase-at-home has sourcing gates.',
    kicker: 'Statewide · Tasting menu',
    photo: 'hubFineTasting',
    cardLabel: 'Tasting menu',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  fineChefsev: {
    path: '/fine-dining/chefs-table-evening',
    h1: 'Evening chef’s-table formats, by island.',
    title: 'Evening chef’s-table formats, by island | myCHEF Hawaii',
    description: 'Evening chef’s-table formats across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede: 'Evening chef’s-table formats across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    kicker: 'Statewide · Chef’s-table evening',
    photo: 'hubFineChefsev',
    cardLabel: 'Evening format',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Is this a Michelin table?',
        a: 'No. We do not claim a star. Open the island format.',
      },
    ],
  },
  fineCeleb: {
    path: '/fine-dining/celebration-dinner',
    h1: 'Celebration dinners, by island.',
    title: 'Celebration dinners, by island | myCHEF Hawaii',
    description: 'A marked night as a format, not an occasion URL. Birthdays and anniversaries stay under the occasions page.',
    lede:
      'A marked night as a format, not an occasion URL. Birthdays and anniversaries stay under the occasions page.',
    kicker: 'Statewide · Celebration dinner',
    photo: 'hubFineCeleb',
    cardLabel: 'Celebration dinner',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  staffServers: {
    path: '/staffing/servers',
    h1: 'Server add-ons, by island.',
    title: 'Server add-ons, by island | myCHEF Hawaii',
    description: `Server add-ons by island at $${serverHr}/hr on the written quote, plus 20% service and GET. The full guide is the statewide waiters page, then your island.`,
    lede: `Servers are an hourly line on the written quote: $${serverHr}/hr, minimum ${minHours} hours, with 20% service and Hawaiʻi GET up to 4.712% on their own lines. A sous chef is a separate $${sousHr}/hr line. The full guide for a villa dinner, a week, or a party is [waiters](/in-villa-services/waiters). Use this page only to pick the island. Oʻahu and Maui quotes are open. Kauaʻi and the Big Island are request availability.`,
    kicker: 'Statewide · Servers',
    photo: 'hubStaffServers',
    cardLabel: 'Servers',
    body: [
      `Open [Oʻahu servers](oahu:/staffing/servers), [Maui servers](maui:/staffing/servers), [Kauaʻi servers](kauai:/staffing/servers), or [Big Island servers](bigisland:/staffing/servers) after the statewide guide. The hour is the same figure. The booking posture is not. A 50% deposit follows a written yes. Gratuity is never required. Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'Which page do I open for a Honolulu or Kahala server?',
        a: `[Oʻahu servers](oahu:/staffing/servers). The line is $${serverHr}/hr with a ${minHours}-hour minimum, plus 20% service and GET up to 4.712%. Quotes are open. The how-to is [waiters](/in-villa-services/waiters), not this chooser.`,
      },
      {
        q: 'Where do Maui lanai server hours get written?',
        a: `On [Maui servers](maui:/staffing/servers), as $${serverHr}/hr, separate from the food and from the $${sousHr}/hr sous chef. 20% service and GET up to 4.712% follow. Wailea and West Maui quotes are open.`,
      },
      {
        q: 'How do I request a Kauaʻi server while the shore is still an inquiry?',
        a: `Join the inquiry list on [Kauaʻi servers](kauai:/staffing/servers). Request availability and name the shore. $${serverHr}/hr plus 20% service and GET up to 4.712% is the line when a crew exists. It is not a confirmation.`,
      },
      {
        q: 'Does the Big Island server line cover Hilo?',
        a: `No. [Big Island servers](bigisland:/staffing/servers) are Kona to Kohala, by request for availability, at $${serverHr}/hr plus 20% service and GET up to 4.712%. Hilo is a different day. Do not add it to a west-side server ask.`,
      },
    ],
  },
  staffBartenders: {
    path: '/staffing/bartenders',
    h1: 'Bartender hourly lines, by island.',
    title: 'Bartender hourly lines, by island | myCHEF Hawaii',
    description:
      'Bartender add-ons by island are quoted in writing. No hourly rate is published. The full guide is the statewide bartenders page, then your island.',
    lede: `Bartenders are quoted in writing. No hourly bartender rate is published on the card or on this page. The full guide — a villa bar, glassware, and how a night is scoped — is [bartenders](/in-villa-services/bartenders). This page only routes you to an island. Oʻahu and Maui take a written quote. Kauaʻi and the Big Island are request availability, not a confirmed pour.`,
    kicker: 'Statewide · Bartenders',
    photo: 'hubStaffBartenders',
    cardLabel: 'Bartenders',
    body: [
      `Open [Oʻahu bartenders](oahu:/staffing/bartenders), [Maui bartenders](maui:/staffing/bartenders), [Kauaʻi bartenders](kauai:/staffing/bartenders), or [Big Island bartenders](bigisland:/staffing/bartenders). A 50% deposit applies only after you accept the written total. 20% service and Hawaiʻi GET up to 4.712% are their own lines on that total. Gratuity is never required. Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'Which island do I open if the bar is in Wailea or West Maui?',
        a: `[Maui bartenders](maui:/staffing/bartenders). The line is quoted in writing. No hourly rate is published. Quotes are open. Scope and setup live on [bartenders](/in-villa-services/bartenders), not on this chooser.`,
      },
      {
        q: 'Why is there no bartender hour on the Oʻahu card?',
        a: `Because none is published. [Oʻahu bartenders](oahu:/staffing/bartenders) are a written quote. The only published staffing hours are the server at $${serverHr}/hr and the sous chef at $${sousHr}/hr, plus 20% service and GET up to 4.712%.`,
      },
      {
        q: 'How do I request a Kauaʻi bartender without treating inquiry as a confirmation?',
        a: `Request availability on [Kauaʻi bartenders](kauai:/staffing/bartenders) and name the shore. A reply is not a held pour. Hanalei-bridge weather can move a North Shore night. The amount is quoted in writing.`,
      },
      {
        q: 'Does a Big Island bartender request include Hilo?',
        a: `No. [Big Island bartenders](bigisland:/staffing/bartenders) are Kona to Kohala, quoted in writing, and only by request for availability. Hilo is not implied. Send it as its own east-side day if that is the house.`,
      },
    ],
  },
  staffButlers: {
    path: '/staffing/butlers',
    h1: 'Quoted butler lines, by island.',
    title: 'Quoted butler lines, by island | myCHEF Hawaii',
    description:
      'Each island quotes butlers only when a bench exists.',
    lede:
      'Quoted, not promised. Each island says when the bench is not there.',
    kicker: 'Statewide · Butlers',
    photo: 'hubStaffButlers',
    cardLabel: 'Butlers',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Do you send a butler from the hub?',
        a: 'No. Open the island page. Butler is quoted only when a bench exists.',
      },
    ],
  },
  menuThree: {
    path: '/menus/three-course',
    h1: 'Three-course tables, by island.',
    title: 'Three-course tables, by island | myCHEF Hawaii',
    description: 'Three-course tables across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'Designed per table, not a fake standing carte.',
    kicker: 'Statewide · Three-course',
    photo: 'hubMenuThree',
    cardLabel: 'Three-course',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Same as plated service?',
        a: 'Plated is the catering format.',
      },
    ],
  },
  menuFamily: {
    path: '/menus/family-style-menu',
    h1: 'Family-style menus, by island.',
    title: 'Family-style menus, by island | myCHEF Hawaii',
    description: 'Family-style menus across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'The designed menu, not the service format.',
    kicker: 'Statewide · Family-style menu',
    photo: 'hubMenuFamily',
    cardLabel: 'Family-style menu',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  menuBreakfast: {
    path: '/menus/breakfast',
    h1: 'Breakfast in the house, by island.',
    title: 'Breakfast in the house, by island | myCHEF Hawaii',
    description:
      'Each island designs breakfast per table.',
    lede:
      'Morning in the villa, designed per table. Brunch as an occasion is on the Brunch page.',
    kicker: 'Statewide · Breakfast',
    photo: 'hubMenuBreakfast',
    cardLabel: 'Breakfast',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Same as Stay Chef?',
        a: 'Vacation chef is the day rate.',
      },
    ],
  },
  menuLunch: {
    path: '/menus/lunch',
    h1: 'Lunch in the house, by island.',
    title: 'Lunch in the house, by island | myCHEF Hawaii',
    description:
      'Each island designs lunch per table.',
    lede:
      'Midday in the house, designed per table. Meal prep is a gated fridge line.',
    kicker: 'Statewide · Lunch',
    photo: 'hubMenuLunch',
    cardLabel: 'Lunch',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  helpStart: {
    path: '/help/getting-started',
    h1: 'First booking notes, by island.',
    title: 'First booking notes, by island | myCHEF Hawaii',
    description: 'First booking notes across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede: 'First booking notes across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    kicker: 'Statewide · Getting started',
    photo: 'hubHelpStart',
    cardLabel: 'Getting started',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  helpMenu: {
    path: '/help/menu-guide',
    h1: 'How to read a menu draft, by island.',
    title: 'How to read a menu draft, by island | myCHEF Hawaii',
    description: 'How to read a menu draft across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'How to read the draft, not a standing carte.',
    kicker: 'Statewide · Menu guide',
    photo: 'hubHelpMenu',
    cardLabel: 'Menu guide',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  helpWedding: {
    path: '/help/wedding-guide',
    h1: 'Wedding-week planning notes, by island.',
    title: 'Wedding-week planning notes, by island | myCHEF Hawaii',
    description: 'Wedding-week planning notes across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'How the week is planned.',
    kicker: 'Statewide · Wedding guide',
    photo: 'hubHelpWedding',
    cardLabel: 'Wedding guide',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  helpCorp: {
    path: '/help/corporate-guide',
    h1: 'Offsite planning notes, by island.',
    title: 'Offsite planning notes, by island | myCHEF Hawaii',
    description: 'Offsite planning notes across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'How to plan a house offsite. Not HCC citywides.',
    kicker: 'Statewide · Offsite guide',
    photo: 'hubHelpCorp',
    cardLabel: 'Offsite guide',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Do I send one offsite brief for the whole state, or one brief per island?',
        a: 'One brief per island. Each house is planned on its own host. Open the guide where the house sits: [Oʻahu](oahu:/help/corporate-guide), [Maui](maui:/help/corporate-guide), [Kauaʻi](kauai:/help/corporate-guide), or [Hawaiʻi Island](bigisland:/help/corporate-guide).',
      },
      {
        q: 'Which islands answer a brief with a written quote, and which answer with availability?',
        a: 'Oʻahu and Maui answer with a written quote. Kauaʻi answers a request for availability. Hawaiʻi Island answers from the inquiry list, west side first. This page does not hold a date.',
      },
      {
        q: 'What must every offsite brief contain, whichever island the house is on?',
        a: 'Dates, headcount, the house address, kitchen photos, the dietary list, and the person who can approve. Leave resort slogans out. The island guide adds whatever that host still needs. Start on [the quote form](/quote).',
      },
      {
        q: 'How far ahead should the brief be sent?',
        a: 'Once the house and the dates are held. We reply in Hawaii business hours. A menu draft follows about 48 hours after a complete brief. A 50% deposit holds the date only after that island accepts in writing.',
      },
      {
        q: 'Why is each island planned and quoted separately?',
        a: 'The kitchen, the drive, and the crew do not transfer. One coordinator can keep the thread. The totals stay separate. There is no same-day crossing and no blended statewide package.',
      },
      {
        q: 'Where do I send the brief?',
        a: `On [the quote form](/quote), one island per note, or through the island guide linked above. Desk: ${desk}.`,
      },
    ],
  },
  helpManage: {
    path: '/help/managing-booking',
    h1: 'After the quote, by island.',
    title: 'After the quote, by island | myCHEF Hawaii',
    description: 'What happens after your written quote: deposit, menu edits, changes and the night itself, for myCHEF Hawaii bookings on every island.',
    lede: 'What happens after your written quote: deposit, menu edits, changes and the night itself, for myCHEF Hawaii bookings on every island.',
    kicker: 'Statewide · After the quote',
    photo: 'hubHelpManage',
    cardLabel: 'After the quote',
    body: [
      `This directory does not use that title.`,
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
};

/** Parent hub indexes that already have nested pickers — list those stills, do not invent URLs. */
const HUB_PARENT_NESTED: Record<string, HubNestedId[]> = {
  '/events': [
    'occBirthdays',
    'occWelcome',
    'occRetreats',
    'occAnniversaries',
    'occCorporate',
    'occParties',
    'occBrunch',
  ],
  '/catering': ['fmtBbq', 'fmtPlated', 'fmtFamily', 'fmtBuffet', 'fmtGrazing', 'fmtDropoff'],
  '/fine-dining': ['fineRomantic', 'fineTasting', 'fineChefsev', 'fineCeleb'],
  '/staffing': ['staffServers', 'staffBartenders', 'staffButlers'],
  '/menus': ['menuThree', 'menuFamily', 'menuBreakfast', 'menuLunch'],
  '/help': ['helpStart', 'helpMenu', 'helpWedding', 'helpCorp', 'helpManage'],
};

export function nestedHubDirectories(parentPath: string): HubDirectory[] {
  const ids = HUB_PARENT_NESTED[parentPath];
  if (!ids) return [];
  return ids.map((id) => hubNestedDirectories[id]);
}

