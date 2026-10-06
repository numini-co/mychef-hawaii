import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';
import { EXTRA_BLOG_ANGLES, applyEditorialAngles } from './editorialTitleAngles';

/**
 * Remaining extra-blog kitchen notes beside live SKUs.
 * Distinct from occasion, menu, staffing, and bar URLs. Titles must not use money keywords.
 * Title / H1 / meta come from EXTRA_BLOG_ANGLES so each island×slug is a different structure.
 */

const RAW_EXTRA_BLOG_NOTES: Record<IslandId, UniqueCell[]> = {
  oahu: [
    {
      slug: 'anniversary-dinners',
      name: 'Anniversary dinners',
      h1: 'Oahu anniversary kitchen notes — the menu is the Anniversaries page.',
      title: 'Oahu anniversary kitchen notes | myCHEF',
      description:
        'Short Oahu anniversary kitchen notes.',
      lede: 'Oahu anniversary kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogAnnivOahu',
      body: [
        'Two people, a real dining room, a night that is not a reception. Kahala and Ko Olina houses.',
        'This piece is the later anniversary table. A cooktop is still required.',
      ],
      faqs: [
      ],
      related: [
        { path: '/events/anniversaries', label: 'Anniversary' },
        { path: '/blog/proposal-dinners', label: 'Proposal dinners' },
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'kids-at-the-table',
      name: 'Kids at the table',
      h1: 'Oahu kids-plate notes — written with the adults, not after.',
      title: 'Oahu kids-plate kitchen notes — written with the adults | myCHEF',
      description:
        'Short Oahu kids-plate kitchen notes.',
      lede: 'Oahu kids-plate kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogKidsOahu',
      body: [
        'Children’s plates are planned with the adults’ menu. We do not invent a separate kids station. Kahala tables of mixed ages.',
        'This piece is the kitchen timing. Allergies belong in the first thread.',
      ],
      faqs: [
        {
          q: 'Do you run a kids station?',
          a: 'No. One kitchen, two plate sizes. Open the quote form — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/kids-menus', label: 'Kids menus' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'breakfast-in-the-villa',
      name: 'Villa breakfast',
      h1: 'Oahu villa-breakfast notes — morning timing, not a dinner leftover.',
      title: 'Oahu villa-breakfast kitchen notes — morning, not a leftover | myCHEF',
      description:
        'Short Oahu villa-breakfast kitchen notes.',
      lede: 'Oahu villa-breakfast kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogBreakfastOahu',
      body: [
        'Breakfast is its own chef call. We do not leave dinner service running into morning without writing it. Diamond head light, a real range.',
        'Groceries still print at cost.',
      ],
      faqs: [
        {
          q: 'Can dinner leftovers be breakfast?',
          a: 'Only if you ask and we write it. Open the quote form — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/menus/breakfast', label: 'Breakfast' },
        { path: '/blog/grocery-at-cost', label: 'Groceries at cost' },
        { path: '/vacation-chef', label: 'Vacation chef weeks' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'lunch-service',
      name: 'In-villa lunch',
      h1: 'Oahu in-villa lunch notes — midday, not a stacked dinner day.',
      title: 'Oahu in-villa lunch notes — midday, not a stacked dinner | myCHEF',
      description:
        'Short Oahu in-villa lunch kitchen notes.',
      lede: 'Oahu in-villa lunch notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogLunchOahu',
      body: [
        'Midday service is a chef day. We will not hide a Kahala lunch under a Ko Olina dinner. Write both, or pick one.',
        'This piece is the stacking honesty.',
      ],
      faqs: [
        {
          q: 'Lunch and dinner as one unpaid day?',
          a: 'No. Both nights print. Open the quote form — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/menus/lunch', label: 'Lunch' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'staffing-servers',
      name: 'When we add servers',
      h1: 'Oahu server-add notes — quoted when the list needs a pour.',
      title: 'Oahu server-add kitchen notes — quoted when the list needs a pour | myCHEF',
      description:
        'Short Oahu server-add kitchen notes.',
      lede: 'Oahu server-add kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogServersOahu',
      body: [
        'Two people, the chef pours. A seated twelve usually wants a server. The line prints hourly. Kahala dining rooms, not a banquet crew.',
        'This piece is the pour decision.',
      ],
      faqs: [
      ],
      related: [
        { path: '/staffing/servers', label: 'Servers' },
        { path: '/bar', label: 'Bartender add-on' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'bartender-add-on',
      name: 'Bartender add-on',
      h1: 'Oahu bartender-add notes — bottles stay a different line.',
      title: 'Oahu bartender-add kitchen notes — bottles stay a different line | myCHEF',
      description:
        'Short Oahu bartender-add kitchen notes.',
      lede: 'Oahu bartender-add kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogBartenderOahu',
      body: [
        'The person is a line. The bottles are a line. This piece is when we add the bartender on a Kahala lanai.',
      ],
      faqs: [
      ],
      related: [
        { path: '/bar', label: 'Bar add-on' },
        { path: '/staffing/bartenders', label: 'Bartenders' },
        { path: '/blog/wine-and-alcohol', label: 'Wine line' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'welcome-dinner',
      name: 'Welcome dinners',
      h1: 'Oahu arrival-night notes — first evening, not the reception.',
      title: 'Oahu arrival-night kitchen notes — first evening, not the reception | myCHEF',
      description:
        'Short Oahu arrival-night kitchen notes.',
      lede: 'Oahu arrival-night kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogWelcomeOahu',
      body: [
        'Arrival night is its own line so the reception does not swallow it. Kahala and Ko Olina. We shop that day.',
        'Wedding-week planning is on the rehearsal dinners page and the weddings page.',
      ],
      faqs: [
        {
          q: 'Same as the reception?',
          a: 'No. Separate line. Open the weddings page if that is the night you mean — Kahala house.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome' },
        { path: '/weddings', label: 'Wedding week' },
        { path: '/rehearsal-dinners', label: 'Rehearsal' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'day-after-brunch',
      name: 'Day-after brunch',
      h1: 'Oahu day-after brunch notes — recovery morning, not the wedding.',
      title: 'Oahu day-after brunch notes — recovery morning, not the wedding | myCHEF',
      description:
        'Short Oahu day-after brunch kitchen notes.',
      lede: 'Oahu day-after brunch notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogBrunchOahu',
      body: [
        'Brunch is a morning call, not leftover reception food. Diamond head in daylight. The guest list is usually smaller.',
        'A wedding week is four lines, not one package.',
      ],
      faqs: [
      ],
      related: [
        { path: '/events/brunch', label: 'Brunch' },
        { path: '/menus/breakfast', label: 'Breakfast' },
        { path: '/weddings', label: 'Wedding week' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'rehearsal-dinner',
      name: 'Rehearsal dinners',
      h1: 'Oahu rehearsal-night kitchen — the night before, a separate line.',
      title: 'Oahu rehearsal-night kitchen notes — the night before, a separate line | myCHEF',
      description:
        'Short Oahu rehearsal-night kitchen notes.',
      lede: 'Oahu rehearsal-night kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogRehearsalOahu',
      body: [
        'The night before is a seated line. Guest counts we staff sit around 10–75. Kahala dining rooms, not a hotel ballroom.',
        'This piece is the kitchen.',
      ],
      faqs: [
      ],
      related: [
        { path: '/rehearsal-dinners', label: 'Rehearsal' },
        { path: '/weddings', label: 'Wedding week' },
        { path: '/events/welcome-dinners', label: 'Welcome' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'corporate-offsites',
      name: 'Corporate offsites',
      h1: 'Oahu house-offsite notes — a table, not a citywide.',
      title: 'Oahu house-offsite kitchen notes — a table, not a citywide | myCHEF',
      description:
        'Short Oahu house-offsite kitchen notes.',
      lede: 'Oahu house-offsite kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogOffsitesOahu',
      body: [
        'Board dinners in houses. Identical plates. A cooktop. We do not staff citywides. Kahala residences, unused notebooks on the sideboard.',
        'Oahu the conventions note says HCC citywides are closed. This piece is the house kitchen.',
      ],
      faqs: [
      ],
      related: [
        { path: '/events/corporate-events', label: 'Offsite' },
        { path: '/corporate-catering', label: 'Corporate catering' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'retreat-full-board',
      name: 'Retreat full-board',
      h1: 'Oahu retreat-day notes — breakfast through dinner as lines.',
      title: 'Oahu retreat-day kitchen notes — breakfast through dinner as lines | myCHEF',
      description:
        'Short Oahu retreat-day kitchen notes.',
      lede: 'Oahu retreat-day kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogRetreatOahu',
      body: [
        'Breakfast, lunch, dinner as separate calls, or a written day rate. Dietary capability is table stakes, claimed only when true. Kahala houses.',
        'This piece is the meal-stack kitchen.',
      ],
      faqs: [
      ],
      related: [
        { path: '/retreat-catering', label: 'Retreat' },
        { path: '/events/retreats', label: 'Retreat occasion' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
  ],
  maui: [
    {
      slug: 'anniversary-dinners',
      name: 'Anniversary dinners',
      h1: 'Maui anniversary kitchen notes — the menu is the Anniversaries page.',
      title: 'Maui anniversary kitchen notes | myCHEF',
      description:
        'Short Maui anniversary kitchen notes.',
      lede: 'Maui anniversary kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogAnnivMaui',
      body: [
        'Two people, a real dining room, a night that is not a reception. Wailea and Kapalua houses.',
        'This piece is the later anniversary table. A cooktop is still required.',
      ],
      faqs: [
      ],
      related: [
        { path: '/events/anniversaries', label: 'Anniversary' },
        { path: '/blog/proposal-dinners', label: 'Proposal dinners' },
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'kids-at-the-table',
      name: 'Kids at the table',
      h1: 'Maui kids-plate notes — written with the adults, not after.',
      title: 'Maui kids-plate kitchen notes — written with the adults | myCHEF',
      description:
        'Short Maui kids-plate kitchen notes.',
      lede: 'Maui kids-plate kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogKidsMaui',
      body: [
        'Children’s plates are planned with the adults’ menu. We do not invent a separate kids station. Wailea tables of mixed ages.',
        'This piece is the kitchen timing. Allergies belong in the first thread.',
      ],
      faqs: [
        {
          q: 'Do you run a kids station?',
          a: 'No. One kitchen, two plate sizes. Open the quote form — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/kids-menus', label: 'Kids menus' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'breakfast-in-the-villa',
      name: 'Villa breakfast',
      h1: 'Maui villa-breakfast notes — morning timing, not a dinner leftover.',
      title: 'Maui villa-breakfast kitchen notes — morning, not a leftover | myCHEF',
      description:
        'Short Maui villa-breakfast kitchen notes.',
      lede: 'Maui villa-breakfast kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogBreakfastMaui',
      body: [
        'Breakfast is its own chef call. We do not leave dinner service running into morning without writing it. The west sunset light, a real range.',
        'Groceries still print at cost.',
      ],
      faqs: [
        {
          q: 'Can dinner leftovers be breakfast?',
          a: 'Only if you ask and we write it. Open the quote form — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/menus/breakfast', label: 'Breakfast' },
        { path: '/blog/grocery-at-cost', label: 'Groceries at cost' },
        { path: '/vacation-chef', label: 'Vacation chef weeks' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'lunch-service',
      name: 'In-villa lunch',
      h1: 'Maui in-villa lunch notes — midday, not a stacked dinner day.',
      title: 'Maui in-villa lunch notes — midday, not a stacked dinner | myCHEF',
      description:
        'Short Maui in-villa lunch kitchen notes.',
      lede: 'Maui in-villa lunch notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogLunchMaui',
      body: [
        'Midday service is a chef day. We will not hide a Wailea lunch under a Kapalua dinner. Write both, or pick one.',
        'This piece is the stacking honesty.',
      ],
      faqs: [
        {
          q: 'Lunch and dinner as one unpaid day?',
          a: 'No. Both nights print. Open the quote form — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/menus/lunch', label: 'Lunch' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'staffing-servers',
      name: 'When we add servers',
      h1: 'Maui server-add notes — quoted when the list needs a pour.',
      title: 'Maui server-add kitchen notes — quoted when the list needs a pour | myCHEF',
      description:
        'Short Maui server-add kitchen notes.',
      lede: 'Maui server-add kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogServersMaui',
      body: [
        'Two people, the chef pours. A seated twelve usually wants a server. The line prints hourly. Wailea dining rooms, not a banquet crew.',
        'This piece is the pour decision.',
      ],
      faqs: [
      ],
      related: [
        { path: '/staffing/servers', label: 'Servers' },
        { path: '/bar', label: 'Bartender add-on' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'bartender-add-on',
      name: 'Bartender add-on',
      h1: 'Maui bartender-add notes — bottles stay a different line.',
      title: 'Maui bartender-add kitchen notes — bottles stay a different line | myCHEF',
      description:
        'Short Maui bartender-add kitchen notes.',
      lede: 'Maui bartender-add kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogBartenderMaui',
      body: [
        'The person is a line. The bottles are a line. This piece is when we add the bartender on a Wailea lanai.',
      ],
      faqs: [
      ],
      related: [
        { path: '/bar', label: 'Bar add-on' },
        { path: '/staffing/bartenders', label: 'Bartenders' },
        { path: '/blog/wine-and-alcohol', label: 'Wine line' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'welcome-dinner',
      name: 'Welcome dinners',
      h1: 'Maui arrival-night notes — first evening, not the reception.',
      title: 'Maui arrival-night kitchen notes — first evening, not the reception | myCHEF',
      description:
        'Short Maui arrival-night kitchen notes.',
      lede: 'Maui arrival-night kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogWelcomeMaui',
      body: [
        'Arrival night is its own line so the reception does not swallow it. Wailea and Kapalua. We shop that day.',
        'Wedding-week planning is on the rehearsal dinners page and the weddings page.',
      ],
      faqs: [
        {
          q: 'Same as the reception?',
          a: 'No. Separate line. Open the weddings page if that is the night you mean — Wailea villa.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome' },
        { path: '/weddings', label: 'Wedding week' },
        { path: '/rehearsal-dinners', label: 'Rehearsal' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'day-after-brunch',
      name: 'Day-after brunch',
      h1: 'Maui day-after brunch notes — recovery morning, not the wedding.',
      title: 'Maui day-after brunch notes — recovery morning, not the wedding | myCHEF',
      description:
        'Short Maui day-after brunch kitchen notes.',
      lede: 'Maui day-after brunch notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogBrunchMaui',
      body: [
        'Brunch is a morning call, not leftover reception food. The west sunset in daylight. The guest list is usually smaller.',
        'A wedding week is four lines, not one package.',
      ],
      faqs: [
      ],
      related: [
        { path: '/events/brunch', label: 'Brunch' },
        { path: '/menus/breakfast', label: 'Breakfast' },
        { path: '/weddings', label: 'Wedding week' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'rehearsal-dinner',
      name: 'Rehearsal dinners',
      h1: 'Maui rehearsal-night kitchen — the night before, a separate line.',
      title: 'Maui rehearsal-night kitchen notes — the night before, a separate line | myCHEF',
      description:
        'Short Maui rehearsal-night kitchen notes.',
      lede: 'Maui rehearsal-night kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogRehearsalMaui',
      body: [
        'The night before is a seated line. Guest counts we staff sit around 10–75. Wailea dining rooms, not a hotel ballroom.',
        'This piece is the kitchen.',
      ],
      faqs: [
      ],
      related: [
        { path: '/rehearsal-dinners', label: 'Rehearsal' },
        { path: '/weddings', label: 'Wedding week' },
        { path: '/events/welcome-dinners', label: 'Welcome' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'corporate-offsites',
      name: 'Corporate offsites',
      h1: 'Maui house-offsite notes — a table, not a citywide.',
      title: 'Maui house-offsite kitchen notes — a table, not a citywide | myCHEF',
      description:
        'Short Maui house-offsite kitchen notes.',
      lede: 'Maui house-offsite kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogOffsitesMaui',
      body: [
        'Board dinners in houses. Identical plates. A cooktop. We do not staff citywides. Wailea residences, unused notebooks on the sideboard.',
        'Citywides are not the product. This piece is the house kitchen.',
      ],
      faqs: [
      ],
      related: [
        { path: '/events/corporate-events', label: 'Offsite' },
        { path: '/corporate-catering', label: 'Corporate catering' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'retreat-full-board',
      name: 'Retreat full-board',
      h1: 'Maui retreat-day notes — breakfast through dinner as lines.',
      title: 'Maui retreat-day kitchen notes — breakfast through dinner as lines | myCHEF',
      description:
        'Short Maui retreat-day kitchen notes.',
      lede: 'Maui retreat-day kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogRetreatMaui',
      body: [
        'Breakfast, lunch, dinner as separate calls, or a written day rate. Dietary capability is table stakes, claimed only when true. Wailea houses.',
        'This piece is the meal-stack kitchen.',
      ],
      faqs: [
      ],
      related: [
        { path: '/retreat-catering', label: 'Retreat' },
        { path: '/events/retreats', label: 'Retreat occasion' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'anniversary-dinners',
      name: 'Anniversary dinners',
      h1: 'Kauai anniversary kitchen notes — the menu is the Anniversaries page.',
      title: 'Kauai anniversary kitchen notes | myCHEF',
      description:
        'Short Kauai anniversary kitchen notes.',
      lede: 'Kauai anniversary kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogAnnivKauai',
      body: [
        'Two people, a real dining room, a night that is not a reception. Princeville and Poʻipū houses.',
        'This piece is the later anniversary table. A cooktop is still required, inquiry until we can staff.',
      ],
      faqs: [
      ],
      related: [
        { path: '/events/anniversaries', label: 'Anniversary' },
        { path: '/blog/proposal-dinners', label: 'Proposal dinners' },
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'kids-at-the-table',
      name: 'Kids at the table',
      h1: 'Kauai kids-plate notes — written with the adults, not after.',
      title: 'Kauai kids-plate kitchen notes — written with the adults | myCHEF',
      description:
        'Short Kauai kids-plate kitchen notes.',
      lede: 'Kauai kids-plate kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogKidsKauai',
      body: [
        'Children’s plates are planned with the adults’ menu. We do not invent a separate kids station. Princeville tables of mixed ages.',
        'This piece is the kitchen timing at inquiry. Allergies belong in the first thread.',
      ],
      faqs: [
        {
          q: 'Do you run a kids station?',
          a: 'No. One kitchen, two plate sizes. Open the quote form — Princeville kitchen, when we can staff.',
        },
      ],
      related: [
        { path: '/kids-menus', label: 'Kids menus' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'breakfast-in-the-villa',
      name: 'Villa breakfast',
      h1: 'Kauai villa-breakfast notes — morning timing, not a dinner leftover.',
      title: 'Kauai villa-breakfast kitchen notes — morning, not a leftover | myCHEF',
      description:
        'Short Kauai villa-breakfast kitchen notes.',
      lede: 'Kauai villa-breakfast kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogBreakfastKauai',
      body: [
        'Breakfast is its own chef call. We do not leave dinner service running into morning without writing it. Misted mountains light, a real range.',
        'Groceries still print at cost. Inquiry.',
      ],
      faqs: [
        {
          q: 'Can dinner leftovers be breakfast?',
          a: 'Only if you ask and we write it. Open the quote form — Princeville kitchen, when we can staff.',
        },
      ],
      related: [
        { path: '/menus/breakfast', label: 'Breakfast' },
        { path: '/blog/grocery-at-cost', label: 'Groceries at cost' },
        { path: '/vacation-chef', label: 'Vacation chef weeks' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'lunch-service',
      name: 'In-villa lunch',
      h1: 'Kauai in-villa lunch notes — midday, not a stacked dinner day.',
      title: 'Kauai in-villa lunch notes — midday, not a stacked dinner | myCHEF',
      description:
        'Short Kauai in-villa lunch kitchen notes.',
      lede: 'Kauai in-villa lunch notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogLunchKauai',
      body: [
        'Midday service is a chef day. We will not hide a Princeville lunch under a Poʻipū dinner. Write both, or pick one.',
        'This piece is the stacking honesty at inquiry.',
      ],
      faqs: [
        {
          q: 'Lunch and dinner as one unpaid day?',
          a: 'No. Both nights print. Open the quote form — Princeville kitchen, when we can staff.',
        },
      ],
      related: [
        { path: '/menus/lunch', label: 'Lunch' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'staffing-servers',
      name: 'When we add servers',
      h1: 'Kauai server-add notes — quoted when the list needs a pour.',
      title: 'Kauai server-add kitchen notes — quoted when the list needs a pour | myCHEF',
      description:
        'Short Kauai server-add kitchen notes.',
      lede: 'Kauai server-add kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogServersKauai',
      body: [
        'Two people, the chef pours. A seated twelve usually wants a server. The line prints hourly. Princeville dining rooms, not a banquet crew.',
        'This piece is the pour decision at inquiry.',
      ],
      faqs: [
      ],
      related: [
        { path: '/staffing/servers', label: 'Servers' },
        { path: '/bar', label: 'Bartender add-on' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'bartender-add-on',
      name: 'Bartender add-on',
      h1: 'Kauai bartender-add notes — bottles stay a different line.',
      title: 'Kauai bartender-add kitchen notes — bottles stay a different line | myCHEF',
      description:
        'Short Kauai bartender-add kitchen notes.',
      lede: 'Kauai bartender-add kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogBartenderKauai',
      body: [
        'The person is a line. The bottles are a line. This piece is when we add the bartender on a Princeville lanai.',
      ],
      faqs: [
      ],
      related: [
        { path: '/bar', label: 'Bar add-on' },
        { path: '/staffing/bartenders', label: 'Bartenders' },
        { path: '/blog/wine-and-alcohol', label: 'Wine line' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'welcome-dinner',
      name: 'Welcome dinners',
      h1: 'Kauai arrival-night notes — first evening, not the reception.',
      title: 'Kauai arrival-night kitchen notes — first evening, not the reception | myCHEF',
      description:
        'Short Kauai arrival-night kitchen notes.',
      lede: 'Kauai arrival-night kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogWelcomeKauai',
      body: [
        'Arrival night is its own line so the reception does not swallow it. Princeville and Poʻipū. We shop that day.',
        'Wedding-week planning is on the rehearsal dinners page and the weddings page. Inquiry.',
      ],
      faqs: [
        {
          q: 'Same as the reception?',
          a: 'No. Separate line. Open the weddings page if that is the night you mean — Princeville house at inquiry.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome' },
        { path: '/weddings', label: 'Wedding week' },
        { path: '/rehearsal-dinners', label: 'Rehearsal' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'day-after-brunch',
      name: 'Day-after brunch',
      h1: 'Kauai day-after brunch notes — recovery morning, not the wedding.',
      title: 'Kauai day-after brunch notes — recovery morning, not the wedding | myCHEF',
      description:
        'Short Kauai day-after brunch kitchen notes.',
      lede: 'Kauai day-after brunch notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogBrunchKauai',
      body: [
        'Brunch is a morning call, not leftover reception food. Misted mountains in daylight. The guest list is usually smaller.',
        'A wedding week is four lines, not one package. Inquiry.',
      ],
      faqs: [
      ],
      related: [
        { path: '/events/brunch', label: 'Brunch' },
        { path: '/menus/breakfast', label: 'Breakfast' },
        { path: '/weddings', label: 'Wedding week' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'rehearsal-dinner',
      name: 'Rehearsal dinners',
      h1: 'Kauai rehearsal-night kitchen — the night before, a separate line.',
      title: 'Kauai rehearsal-night kitchen notes — the night before, a separate line | myCHEF',
      description:
        'Short Kauai rehearsal-night kitchen notes.',
      lede: 'Kauai rehearsal-night kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogRehearsalKauai',
      body: [
        'The night before is a seated line. Guest counts we staff sit around 10–75. Princeville dining rooms, not a hotel ballroom.',
        'This piece is the kitchen at inquiry.',
      ],
      faqs: [
      ],
      related: [
        { path: '/rehearsal-dinners', label: 'Rehearsal' },
        { path: '/weddings', label: 'Wedding week' },
        { path: '/events/welcome-dinners', label: 'Welcome' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'corporate-offsites',
      name: 'Corporate offsites',
      h1: 'Kauai house-offsite notes — a table, not a citywide.',
      title: 'Kauai house-offsite kitchen notes — a table, not a citywide | myCHEF',
      description:
        'Short Kauai house-offsite kitchen notes.',
      lede: 'Kauai house-offsite kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogOffsitesKauai',
      body: [
        'Board dinners in houses. Identical plates. A cooktop. We do not staff citywides. Princeville residences, unused notebooks on the sideboard.',
        'Citywides are not the product. This piece is the house kitchen at inquiry.',
      ],
      faqs: [
      ],
      related: [
        { path: '/events/corporate-events', label: 'Offsite' },
        { path: '/corporate-catering', label: 'Corporate catering' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'retreat-full-board',
      name: 'Retreat full-board',
      h1: 'Kauai retreat-day notes — breakfast through dinner as lines.',
      title: 'Kauai retreat-day kitchen notes — breakfast through dinner as lines | myCHEF',
      description:
        'Short Kauai retreat-day kitchen notes.',
      lede: 'Kauai retreat-day kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogRetreatKauai',
      body: [
        'Breakfast, lunch, dinner as separate calls, or a written day rate. Dietary capability is table stakes, claimed only when true. Princeville houses.',
        'This piece is the meal-stack kitchen at inquiry.',
      ],
      faqs: [
      ],
      related: [
        { path: '/retreat-catering', label: 'Retreat' },
        { path: '/events/retreats', label: 'Retreat occasion' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'anniversary-dinners',
      name: 'Anniversary dinners',
      h1: 'Hawaiʻi Island anniversary kitchen notes — the menu is the Anniversaries page.',
      title: 'Hawaiʻi Island anniversary kitchen notes | myCHEF',
      description:
        'Short Hawaiʻi Island anniversary kitchen notes.',
      lede: 'Hawaiʻi Island anniversary kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogAnnivBigisland',
      body: [
        'Two people, a real dining room, a night that is not a reception. Waikoloa and Kona houses.',
        'This piece is the later anniversary table. A cooktop is still required, inquiry until we can staff.',
      ],
      faqs: [
      ],
      related: [
        { path: '/events/anniversaries', label: 'Anniversary' },
        { path: '/blog/proposal-dinners', label: 'Proposal dinners' },
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'kids-at-the-table',
      name: 'Kids at the table',
      h1: 'Hawaiʻi Island kids-plate notes — written with the adults, not after.',
      title: 'Hawaiʻi Island kids-plate kitchen notes — written with the adults | myCHEF',
      description:
        'Short Hawaiʻi Island kids-plate kitchen notes.',
      lede: 'Hawaiʻi Island kids-plate kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogKidsBigisland',
      body: [
        'Children’s plates are planned with the adults’ menu. We do not invent a separate kids station. Waikoloa tables of mixed ages.',
        'This piece is the kitchen timing at inquiry. Allergies belong in the first thread.',
      ],
      faqs: [
        {
          q: 'Do you run a kids station?',
          a: 'No. One kitchen, two plate sizes. Open the quote form — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/kids-menus', label: 'Kids menus' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'breakfast-in-the-villa',
      name: 'Villa breakfast',
      h1: 'Hawaiʻi Island villa-breakfast notes — morning timing, not a dinner leftover.',
      title: 'Hawaiʻi Island villa-breakfast kitchen notes — morning, not a leftover | myCHEF',
      description:
        'Short Hawaiʻi Island villa-breakfast kitchen notes.',
      lede: 'Short Hawaiʻi Island villa-breakfast kitchen notes.',
      photo: 'blogBreakfastBigisland',
      body: [
        'Breakfast is its own chef call. We do not leave dinner service running into morning without writing it. The lava coast light, a real range.',
        'Groceries still print at cost. Inquiry.',
      ],
      faqs: [
        {
          q: 'Can dinner leftovers be breakfast?',
          a: 'Only if you ask and we write it. Open the quote form — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/menus/breakfast', label: 'Breakfast' },
        { path: '/blog/grocery-at-cost', label: 'Groceries at cost' },
        { path: '/vacation-chef', label: 'Vacation chef weeks' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'lunch-service',
      name: 'In-villa lunch',
      h1: 'Hawaiʻi Island in-villa lunch notes — midday, not a stacked dinner day.',
      title: 'Hawaiʻi Island in-villa lunch notes — midday, not a stacked dinner | myCHEF',
      description:
        'Short Hawaiʻi Island in-villa lunch kitchen notes.',
      lede: 'Hawaiʻi Island in-villa lunch notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogLunchBigisland',
      body: [
        'Midday service is a chef day. We will not hide a Waikoloa lunch under a Kona dinner. Write both, or pick one.',
        'This piece is the stacking honesty at inquiry.',
      ],
      faqs: [
        {
          q: 'Lunch and dinner as one unpaid day?',
          a: 'No. Both nights print. Open the quote form — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/menus/lunch', label: 'Lunch' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'staffing-servers',
      name: 'When we add servers',
      h1: 'Hawaiʻi Island server-add notes — quoted when the list needs a pour.',
      title: 'Hawaiʻi Island server-add kitchen notes — quoted when the list needs a pour | myCHEF',
      description:
        'Short Hawaiʻi Island server-add kitchen notes.',
      lede: 'Hawaiʻi Island server-add kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogServersBigisland',
      body: [
        'Two people, the chef pours. A seated twelve usually wants a server. The line prints hourly. Waikoloa dining rooms, not a banquet crew.',
        'This piece is the pour decision at inquiry.',
      ],
      faqs: [
      ],
      related: [
        { path: '/staffing/servers', label: 'Servers' },
        { path: '/bar', label: 'Bartender add-on' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'bartender-add-on',
      name: 'Bartender add-on',
      h1: 'Hawaiʻi Island bartender-add notes — bottles stay a different line.',
      title: 'Hawaiʻi Island bartender-add kitchen notes — bottles stay a different line | myCHEF',
      description:
        'Short Hawaiʻi Island bartender-add kitchen notes.',
      lede: 'Hawaiʻi Island bartender-add kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogBartenderBigisland',
      body: [
        'The person is a line. The bottles are a line. This piece is when we add the bartender on a Waikoloa lanai.',
      ],
      faqs: [
      ],
      related: [
        { path: '/bar', label: 'Bar add-on' },
        { path: '/staffing/bartenders', label: 'Bartenders' },
        { path: '/blog/wine-and-alcohol', label: 'Wine line' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'welcome-dinner',
      name: 'Welcome dinners',
      h1: 'Hawaiʻi Island arrival-night notes — first evening, not the reception.',
      title: 'Hawaiʻi Island arrival-night kitchen notes — first evening, not the reception | myCHEF',
      description:
        'Short Hawaiʻi Island arrival-night kitchen notes.',
      lede: 'Hawaiʻi Island arrival-night kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogWelcomeBigisland',
      body: [
        'Arrival night is its own line so the reception does not swallow it. Waikoloa and Kona. We shop that day.',
        'Wedding-week planning is on the rehearsal dinners page and the weddings page. Inquiry.',
      ],
      faqs: [
        {
          q: 'Same as the reception?',
          a: 'No. Separate line. Open the weddings page if that is the night you mean — Waikoloa house. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome' },
        { path: '/weddings', label: 'Wedding week' },
        { path: '/rehearsal-dinners', label: 'Rehearsal' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'day-after-brunch',
      name: 'Day-after brunch',
      h1: 'Hawaiʻi Island day-after brunch notes — recovery morning, not the wedding.',
      title: 'Hawaiʻi Island day-after brunch notes — recovery morning, not the wedding | myCHEF',
      description:
        'Short Hawaiʻi Island day-after brunch kitchen notes.',
      lede: 'Short Hawaiʻi Island day-after brunch kitchen notes.',
      photo: 'blogBrunchBigisland',
      body: [
        'Brunch is a morning call, not leftover reception food. The lava coast in daylight. The guest list is usually smaller.',
        'A wedding week is four lines, not one package. Inquiry.',
      ],
      faqs: [
      ],
      related: [
        { path: '/events/brunch', label: 'Brunch' },
        { path: '/menus/breakfast', label: 'Breakfast' },
        { path: '/weddings', label: 'Wedding week' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'rehearsal-dinner',
      name: 'Rehearsal dinners',
      h1: 'Hawaiʻi Island rehearsal-night kitchen — the night before, a separate line.',
      title: 'Hawaiʻi Island rehearsal-night kitchen notes — the night before, a separate line | myCHEF',
      description:
        'Short Hawaiʻi Island rehearsal-night kitchen notes.',
      lede: 'Short Hawaiʻi Island rehearsal-night kitchen notes.',
      photo: 'blogRehearsalBigisland',
      body: [
        'The night before is a seated line. Guest counts we staff sit around 10–75. Waikoloa dining rooms, not a hotel ballroom.',
        'This piece is the kitchen at inquiry.',
      ],
      faqs: [
      ],
      related: [
        { path: '/rehearsal-dinners', label: 'Rehearsal' },
        { path: '/weddings', label: 'Wedding week' },
        { path: '/events/welcome-dinners', label: 'Welcome' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'corporate-offsites',
      name: 'Corporate offsites',
      h1: 'Hawaiʻi Island house-offsite notes — a table, not a citywide.',
      title: 'Hawaiʻi Island house-offsite kitchen notes — a table, not a citywide | myCHEF',
      description:
        'Short Hawaiʻi Island house-offsite kitchen notes.',
      lede: 'Hawaiʻi Island house-offsite kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogOffsitesBigisland',
      body: [
        'Board dinners in houses. Identical plates. A cooktop. We do not staff citywides. Waikoloa residences, unused notebooks on the sideboard.',
        'Citywides are not the product. This piece is the house kitchen at inquiry.',
      ],
      faqs: [
      ],
      related: [
        { path: '/events/corporate-events', label: 'Offsite' },
        { path: '/corporate-catering', label: 'Corporate catering' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'retreat-full-board',
      name: 'Retreat full-board',
      h1: 'Hawaiʻi Island retreat-day notes — breakfast through dinner as lines.',
      title: 'Hawaiʻi Island retreat-day kitchen notes — breakfast through dinner as lines | myCHEF',
      description:
        'Short Hawaiʻi Island retreat-day kitchen notes.',
      lede: 'Hawaiʻi Island retreat-day kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogRetreatBigisland',
      body: [
        'Breakfast, lunch, dinner as separate calls, or a written day rate. Dietary capability is table stakes, claimed only when true. Waikoloa houses.',
        'This piece is the meal-stack kitchen at inquiry.',
      ],
      faqs: [
      ],
      related: [
        { path: '/retreat-catering', label: 'Retreat' },
        { path: '/events/retreats', label: 'Retreat occasion' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
  ],
};

export const EXTRA_BLOG_NOTES: Record<IslandId, UniqueCell[]> = {
  oahu: applyEditorialAngles('oahu', RAW_EXTRA_BLOG_NOTES.oahu, EXTRA_BLOG_ANGLES),
  maui: applyEditorialAngles('maui', RAW_EXTRA_BLOG_NOTES.maui, EXTRA_BLOG_ANGLES),
  kauai: applyEditorialAngles('kauai', RAW_EXTRA_BLOG_NOTES.kauai, EXTRA_BLOG_ANGLES),
  bigisland: applyEditorialAngles('bigisland', RAW_EXTRA_BLOG_NOTES.bigisland, EXTRA_BLOG_ANGLES),
};
