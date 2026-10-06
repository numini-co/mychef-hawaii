import { SEARCH_VOLUMES } from './offers';
import type { HubDirectory } from './hubDirectories';

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
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  occWelcome: {
    path: '/events/welcome-dinners',
    h1: 'Arrival-night dinners, by island.',
    title: 'Arrival-night dinners, by island | myCHEF Hawaii',
    description: 'First night in the house. Not a full wedding week. Each island writes the arrival dinner.',
    lede:
      'First night in the house. Not a full wedding week. Each island writes the arrival dinner.',
    kicker: 'Statewide · Welcome nights',
    photo: 'hubOccWelcome',
    cardLabel: 'Welcome nights',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
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
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
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
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
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
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
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
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
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
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
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
      'Titles never use “{island} catering plated”.',
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
    description:
      'Each island quotes servers hourly.',
    lede:
      'An hourly line, not a hidden fee. Each island writes the rate band.',
    kicker: 'Statewide · Servers',
    photo: 'hubStaffServers',
    cardLabel: 'Servers',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  staffBartenders: {
    path: '/staffing/bartenders',
    h1: 'Bartender hourly lines, by island.',
    title: 'Bartender hourly lines, by island | myCHEF Hawaii',
    description:
      'Each island quotes bartenders hourly.',
    lede: 'Bartender hourly lines across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    kicker: 'Statewide · Bartenders',
    photo: 'hubStaffBartenders',
    cardLabel: 'Bartenders',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
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

