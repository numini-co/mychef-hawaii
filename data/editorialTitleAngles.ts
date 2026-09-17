import type { IslandId } from './islands';
import type { UniqueCell } from './uniqueCells';

/**
 * Shared title / H1 / meta angles for island-swapped editorial notes.
 * Same slug, four structures — corridor, stage, or offer — not `{Island}` prefix only.
 */

export interface EditorialAngle {
  h1: string;
  title: string;
  description: string;
}

const EXTRA_BLOG_SLUGS = [
  'anniversary-dinners',
  'kids-at-the-table',
  'breakfast-in-the-villa',
  'lunch-service',
  'staffing-servers',
  'bartender-add-on',
  'welcome-dinner',
  'day-after-brunch',
  'rehearsal-dinner',
  'corporate-offsites',
  'retreat-full-board',
] as const;

const EXTRA_JOURNAL_SLUGS = ['wedding-week', 'vacation-chef-week', 'travel-zones'] as const;

export type ExtraBlogSlug = (typeof EXTRA_BLOG_SLUGS)[number];
export type ExtraJournalSlug = (typeof EXTRA_JOURNAL_SLUGS)[number];

export const EXTRA_BLOG_ANGLES: Record<IslandId, Record<ExtraBlogSlug, EditorialAngle>> = {
  oahu: {
    'anniversary-dinners': {
      h1: 'A Kahala anniversary table — two tops, years after the wedding.',
      title: 'Kahala two-top years later — Gold Coast anniversary note | myCHEF',
      description:
        'Gold Coast anniversary kitchen note: two tops in a Kahala dining room. Distinct from /events/anniversaries and from /blog/proposal-dinners.',
    },
    'kids-at-the-table': {
      h1: 'Kids plates in Kahala land with the adults, not after.',
      title: 'Kahala kids plates — designed with the adult menu | myCHEF',
      description:
        'How a Kahala kids plate is designed with the adults. Distinct from /kids-menus. One kitchen, two sizes.',
    },
    'breakfast-in-the-villa': {
      h1: 'Town-and-west mornings — breakfast is not last night’s leftover.',
      title: 'Town-and-west villa breakfast — morning is its own line | myCHEF',
      description:
        'Oʻahu villa breakfast as a morning line, Kahala to Ko Olina. Distinct from /menus/breakfast.',
    },
    'lunch-service': {
      h1: 'Midday in town — lunch is not a stacked dinner reprint.',
      title: 'Honolulu midday lunch — not a dinner reprint | myCHEF',
      description:
        'In-villa lunch on Oʻahu as a midday line. Distinct from /menus/lunch and from the dinner band.',
    },
    'staffing-servers': {
      h1: 'When a Kahala guest list needs a pour, the server is quoted.',
      title: 'Kahala server add — quoted when the list needs a pass | myCHEF',
      description:
        'Oʻahu server add as a quoted line when the Kahala list needs a pour. Distinct from /staffing/servers.',
    },
    'bartender-add-on': {
      h1: 'Town terrace pours — bottles stay a different line.',
      title: 'Town terrace bartender — bottles stay a separate line | myCHEF',
      description:
        'Oʻahu bartender add for town terraces. Bottles are not bundled. Distinct from /bar and /staffing/bartenders.',
    },
    'welcome-dinner': {
      h1: 'First Kahala evening — arrival night, not the reception.',
      title: 'First Kahala evening — arrival, not the reception | myCHEF',
      description:
        'Oʻahu arrival-night kitchen note. Distinct from /events/welcome-dinners and from the wedding reception.',
    },
    'day-after-brunch': {
      h1: 'Recovery morning in town — brunch after the vows, a printed line.',
      title: 'Town recovery brunch — morning after, its own line | myCHEF',
      description:
        'Oʻahu day-after brunch as a recovery morning. Distinct from /events/brunch and from the reception.',
    },
    'rehearsal-dinner': {
      h1: 'The night before in Kahala — rehearsal as its own line.',
      title: 'Kahala rehearsal night — the night before, a line | myCHEF',
      description:
        'Oʻahu rehearsal-night kitchen note. Distinct from /rehearsal-dinners. Not buried in the reception total.',
    },
    'corporate-offsites': {
      h1: 'A Honolulu house table — offsite, not a citywide.',
      title: 'Honolulu house offsite — one table, not citywide | myCHEF',
      description:
        'Oʻahu house-offsite kitchen note. Distinct from /events/corporate-events and /corporate-catering.',
    },
    'retreat-full-board': {
      h1: 'Town retreat day — breakfast through dinner as printed lines.',
      title: 'Town retreat day — meals as printed lines | myCHEF',
      description:
        'Oʻahu retreat-day kitchen note. Distinct from /retreat-catering and /events/retreats.',
    },
  },
  maui: {
    'anniversary-dinners': {
      h1: 'Wailea anniversary — a villa two-top on the week, not the SKU.',
      title: 'Wailea anniversary night — villa week, not the SKU | myCHEF',
      description:
        'Maui villa-week anniversary note on a Wailea lanai. Distinct from /events/anniversaries.',
    },
    'kids-at-the-table': {
      h1: 'Wailea kids plates — one villa kitchen, two sizes.',
      title: 'Villa-week kids plates — one Wailea kitchen | myCHEF',
      description:
        'How kids plates land on a Maui villa week. Distinct from /kids-menus. One kitchen, two sizes.',
    },
    'breakfast-in-the-villa': {
      h1: 'Wailea morning service — breakfast is its own villa-week line.',
      title: 'Wailea morning service — breakfast as a villa-week line | myCHEF',
      description:
        'Maui villa breakfast on the week. Distinct from /menus/breakfast. Not a leftover dinner.',
    },
    'lunch-service': {
      h1: 'Villa-week lunch — Wailea midday, not a dinner reprint.',
      title: 'Wailea midday lunch — villa week, not dinner reprinted | myCHEF',
      description:
        'Maui in-villa lunch as a midday villa-week line. Distinct from /menus/lunch.',
    },
    'staffing-servers': {
      h1: 'Villa-week servers — quoted when Wailea needs a pass.',
      title: 'Wailea server add — quoted on the villa week | myCHEF',
      description:
        'Maui server add quoted when the Wailea list needs a pass. Distinct from /staffing/servers.',
    },
    'bartender-add-on': {
      h1: 'Wailea terrace add — bartender quoted, bottles separate.',
      title: 'Wailea terrace bartender — bottles stay unbundled | myCHEF',
      description:
        'Maui bartender add on a Wailea terrace. Bottles stay a different line. Distinct from /bar.',
    },
    'welcome-dinner': {
      h1: 'Villa-week arrival — first Wailea night, not the vows.',
      title: 'First Wailea night — villa-week arrival, not vows | myCHEF',
      description:
        'Maui arrival-night note on the villa week. Distinct from /events/welcome-dinners.',
    },
    'day-after-brunch': {
      h1: 'Villa-week recovery brunch — morning after Wailea vows.',
      title: 'Wailea recovery brunch — morning after the vows | myCHEF',
      description:
        'Maui day-after brunch as a villa-week recovery morning. Distinct from /events/brunch.',
    },
    'rehearsal-dinner': {
      h1: 'Villa-week rehearsal — Wailea night before, not the reception.',
      title: 'Wailea rehearsal — night before, not the reception | myCHEF',
      description:
        'Maui rehearsal-night note on the villa week. Distinct from /rehearsal-dinners.',
    },
    'corporate-offsites': {
      h1: 'One Wailea table — villa-week offsite, not a citywide.',
      title: 'Wailea house offsite — one table on the villa week | myCHEF',
      description:
        'Maui house-offsite note. One villa table, not a citywide. Distinct from /events/corporate-events.',
    },
    'retreat-full-board': {
      h1: 'Villa-week retreat — Wailea full-board as stacked lines.',
      title: 'Wailea retreat full-board — stacked villa-week lines | myCHEF',
      description:
        'Maui retreat-day note. Breakfast through dinner as villa-week lines. Distinct from /retreat-catering.',
    },
  },
  kauai: {
    'anniversary-dinners': {
      h1: 'Both-shore anniversary inquiry — Princeville or Poʻipū, not a Book-now.',
      title: 'Inquiry anniversary — both shores, when we can staff | myCHEF',
      description:
        'Kauaʻi anniversary kitchen note at inquiry. Both shores. Distinct from /events/anniversaries. Not a live Book-now.',
    },
    'kids-at-the-table': {
      h1: 'Both-shore kids plates at inquiry — written with the adults.',
      title: 'Inquiry kids plates — both shores, one kitchen | myCHEF',
      description:
        'Kauaʻi kids-plate note at inquiry. Distinct from /kids-menus. A named shore is not a confirmation.',
    },
    'breakfast-in-the-villa': {
      h1: 'Inquiry breakfast — both-shore mornings, not a leftover dinner.',
      title: 'Both-shore morning inquiry — breakfast as its own line | myCHEF',
      description:
        'Kauaʻi villa breakfast at inquiry. Distinct from /menus/breakfast. We will not fake a live roster.',
    },
    'lunch-service': {
      h1: 'Inquiry lunch — both shores, midday is its own line.',
      title: 'Both-shore midday inquiry — lunch, not a dinner reprint | myCHEF',
      description:
        'Kauaʻi in-villa lunch at inquiry. Distinct from /menus/lunch. Midday is not a stacked dinner.',
    },
    'staffing-servers': {
      h1: 'Inquiry server add — both shores, only if we can staff.',
      title: 'Both-shore server inquiry — quoted if we can staff | myCHEF',
      description:
        'Kauaʻi server add at inquiry. Distinct from /staffing/servers. Empty bench means we say so.',
    },
    'bartender-add-on': {
      h1: 'Inquiry bartender — both-shore pours, bottles not bundled.',
      title: 'Both-shore bartender inquiry — bottles stay a line | myCHEF',
      description:
        'Kauaʻi bartender add at inquiry. Distinct from /bar. A named shore is not a cart confirmation.',
    },
    'welcome-dinner': {
      h1: 'Inquiry arrival night — first shore dinner, not the reception.',
      title: 'Both-shore arrival inquiry — first night, not reception | myCHEF',
      description:
        'Kauaʻi arrival-night note at inquiry. Distinct from /events/welcome-dinners. Hanalei-bridge weather still applies.',
    },
    'day-after-brunch': {
      h1: 'Inquiry recovery brunch — both shores, the morning after.',
      title: 'Both-shore recovery inquiry — brunch the morning after | myCHEF',
      description:
        'Kauaʻi day-after brunch at inquiry. Distinct from /events/brunch. Not a live wedding calendar.',
    },
    'rehearsal-dinner': {
      h1: 'Inquiry rehearsal — both shores, the night before as a line.',
      title: 'Both-shore rehearsal inquiry — night before as a line | myCHEF',
      description:
        'Kauaʻi rehearsal-night note at inquiry. Distinct from /rehearsal-dinners. We will not bury it in a reception total.',
    },
    'corporate-offsites': {
      h1: 'Inquiry house offsite — one estate table on either shore.',
      title: 'Both-shore house offsite — one estate table, inquiry | myCHEF',
      description:
        'Kauaʻi house-offsite note at inquiry. Distinct from /events/corporate-events. Not a citywide.',
    },
    'retreat-full-board': {
      h1: 'Inquiry retreat day — both shores, meals as lines.',
      title: 'Both-shore retreat inquiry — meals as inquiry lines | myCHEF',
      description:
        'Kauaʻi retreat-day note at inquiry. Distinct from /retreat-catering. A named shore is not a Book-now.',
    },
  },
  bigisland: {
    'anniversary-dinners': {
      h1: 'Kohala anniversary inquiry — west-side two-top, Hilo another day.',
      title: 'West-side anniversary inquiry — Kohala two-top | myCHEF',
      description:
        'Hawaiʻi Island anniversary note at inquiry. West side first. Distinct from /events/anniversaries. Hilo never implied.',
    },
    'kids-at-the-table': {
      h1: 'Kona kids plates at inquiry — one kitchen, Hilo not implied.',
      title: 'West-side kids plates — one Kona kitchen, inquiry | myCHEF',
      description:
        'West-side kids-plate note at inquiry. Distinct from /kids-menus. East side is a dedicated day.',
    },
    'breakfast-in-the-villa': {
      h1: 'West-side morning inquiry — breakfast is a Kohala line.',
      title: 'Kohala morning inquiry — breakfast as a west-side line | myCHEF',
      description:
        'West-side villa breakfast at inquiry. Distinct from /menus/breakfast. Hilo is not a same-day add-on.',
    },
    'lunch-service': {
      h1: 'West-side midday inquiry — lunch is not a Kona dinner reprint.',
      title: 'Kona midday inquiry — lunch, not a dinner reprint | myCHEF',
      description:
        'West-side in-villa lunch at inquiry. Distinct from /menus/lunch. East side stays /east-side.',
    },
    'staffing-servers': {
      h1: 'West-side server inquiry — quoted when Kohala needs a pass.',
      title: 'Kohala server inquiry — quoted if the west-side list needs a pass | myCHEF',
      description:
        'West-side server add at inquiry. Distinct from /staffing/servers. Hilo staffing is a different day.',
    },
    'bartender-add-on': {
      h1: 'Kohala terrace inquiry — bartender add, bottles stay a line.',
      title: 'Kohala terrace bartender — west-side inquiry, bottles separate | myCHEF',
      description:
        'West-side bartender add at inquiry. Distinct from /bar. East side is not implied.',
    },
    'welcome-dinner': {
      h1: 'West-side arrival inquiry — first Kohala night, not the week.',
      title: 'First Kohala night — west-side arrival inquiry | myCHEF',
      description:
        'West-side arrival-night note at inquiry. Distinct from /events/welcome-dinners. Hilo never implied.',
    },
    'day-after-brunch': {
      h1: 'West-side recovery inquiry — brunch after Kohala vows.',
      title: 'Kohala recovery brunch — west-side morning after | myCHEF',
      description:
        'West-side day-after brunch at inquiry. Distinct from /events/brunch. East side is another day.',
    },
    'rehearsal-dinner': {
      h1: 'West-side rehearsal inquiry — Kohala night before, a line.',
      title: 'Kohala rehearsal inquiry — night before as a west-side line | myCHEF',
      description:
        'West-side rehearsal-night note at inquiry. Distinct from /rehearsal-dinners. Hilo not implied.',
    },
    'corporate-offsites': {
      h1: 'West-side house offsite inquiry — one Kohala table, not island-wide.',
      title: 'Kohala house offsite — one west-side table, inquiry | myCHEF',
      description:
        'West-side house-offsite note at inquiry. Distinct from /events/corporate-events. Not island-wide. Not Hilo.',
    },
    'retreat-full-board': {
      h1: 'West-side retreat inquiry — Kohala meals as lines, Hilo another day.',
      title: 'Kohala retreat inquiry — west-side meals as lines | myCHEF',
      description:
        'West-side retreat-day note at inquiry. Distinct from /retreat-catering. East side is /east-side.',
    },
  },
};

export const EXTRA_JOURNAL_ANGLES: Record<IslandId, Record<ExtraJournalSlug, EditorialAngle>> = {
  oahu: {
    'wedding-week': {
      h1: 'Kahala week stack — welcome through brunch as printed lines.',
      title: 'Kahala week stack — welcome through brunch as lines | myCHEF',
      description:
        'Oʻahu wedding-week kitchen note. Distinct from /weddings and /help/wedding-guide. Oahu has no /wedding-week cell.',
    },
    'vacation-chef-week': {
      h1: 'Town-and-west Stay Chef week — groceries at cost, receipts on the table.',
      title: 'Town-and-west Stay Chef week — groceries at cost | myCHEF',
      description:
        'Oʻahu Stay Chef week note. Distinct from /vacation-chef and from /personal-chef. Dual grocery model holds.',
    },
    'travel-zones': {
      h1: 'Kahala is not the North Shore — town travel prints as its own line.',
      title: 'Kahala is not the North Shore — town travel notes | myCHEF',
      description:
        'Oʻahu travel-zone kitchen note. Distinct from /coverage and /locations. North Shore is a published surcharge.',
    },
  },
  maui: {
    'wedding-week': {
      h1: 'Villa-week notes beside the /wedding-week cell — Wailea nights as lines.',
      title: 'Wailea villa-week notes beside the week cell | myCHEF',
      description:
        'Maui wedding-week kitchen note beside /wedding-week. Distinct from /weddings and /help/wedding-guide.',
    },
    'vacation-chef-week': {
      h1: 'Wailea Stay Chef week — villa days, groceries at cost with receipts.',
      title: 'Wailea Stay Chef week — villa days, groceries at cost | myCHEF',
      description:
        'Maui Stay Chef week note. Distinct from /vacation-chef and from /personal-chef. Saturday West Maui is timing.',
    },
    'travel-zones': {
      h1: 'Wailea is not Kāʻanapali — villa-week travel prints separately.',
      title: 'Wailea is not Kāʻanapali — villa-week travel notes | myCHEF',
      description:
        'Maui travel-zone kitchen note. Distinct from /coverage, /south-maui, and /west-maui.',
    },
  },
  kauai: {
    'wedding-week': {
      h1: 'Inquiry wedding week — both shores, nights as lines, not a Book-now.',
      title: 'Both-shore wedding-week inquiry — nights as lines | myCHEF',
      description:
        'Kauaʻi wedding-week kitchen note at inquiry. Distinct from /wedding-week, /weddings, and /help/wedding-guide.',
    },
    'vacation-chef-week': {
      h1: 'Both-shore Stay Chef inquiry — a week when we can staff, groceries at cost.',
      title: 'Both-shore Stay Chef inquiry — week when we can staff | myCHEF',
      description:
        'Kauaʻi Stay Chef week note at inquiry. Distinct from /vacation-chef and from /personal-chef. Not a live roster.',
    },
    'travel-zones': {
      h1: 'Both shores plus the bridge — inquiry travel, weather as a clause.',
      title: 'Both shores plus the bridge — inquiry travel notes | myCHEF',
      description:
        'Kauaʻi travel-zone kitchen note at inquiry. Distinct from /coverage, /north-shore, and /hanalei-bridge.',
    },
  },
  bigisland: {
    'wedding-week': {
      h1: 'West-side wedding-week inquiry — Kohala nights, Hilo another day.',
      title: 'Kohala wedding-week inquiry — west-side nights as lines | myCHEF',
      description:
        'Hawaiʻi Island wedding-week kitchen note at inquiry. Distinct from /weddings. No /wedding-week cell on this host.',
    },
    'vacation-chef-week': {
      h1: 'West-side Stay Chef inquiry — Kohala days, groceries at cost, Hilo another day.',
      title: 'Kohala Stay Chef inquiry — west-side days, groceries at cost | myCHEF',
      description:
        'West-side Stay Chef week note at inquiry. Distinct from /vacation-chef and from /personal-chef. East side is /east-side.',
    },
    'travel-zones': {
      h1: 'West side first — Hilo is another chef day, never a Kona round trip.',
      title: 'West side first — Hilo is another chef day | myCHEF',
      description:
        'West-side travel-zone kitchen note at inquiry. Distinct from /coverage, /kohala-corridor, and /east-side.',
    },
  },
};

export function applyEditorialAngles<T extends UniqueCell>(
  island: IslandId,
  rows: T[],
  book: Record<IslandId, Record<string, EditorialAngle>>,
): T[] {
  return rows.map((row) => {
    const angle = book[island][row.slug];
    return angle ? { ...row, ...angle } : row;
  });
}
