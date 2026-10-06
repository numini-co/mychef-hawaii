import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';
import { EXTRA_JOURNAL_ANGLES, applyEditorialAngles } from './editorialTitleAngles';

/**
 * Remaining journal kitchen notes beside live SKUs and unique cells.
 * Distinct from /weddings, Maui/Kauaʻi /wedding-week, /vacation-chef, and /coverage.
 * Titles must not use money keywords.
 * Title / H1 / meta come from EXTRA_JOURNAL_ANGLES so each island×slug is a different structure.
 */

const RAW_EXTRA_JOURNAL_NOTES: Record<IslandId, UniqueCell[]> = {
  oahu: [
    {
      slug: 'wedding-week',
      name: 'Wedding week',
      h1: 'Oahu wedding-week kitchen notes — each night is a line beside the weddings page.',
      title: 'Oahu wedding-week kitchen notes — lines beside the weddings page | myCHEF',
      description:
        'Short Oahu wedding-week kitchen notes.',
      lede: 'Oahu wedding-week kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'jnlWeddingOahu',
      body: [
        'The week still exists as kitchen timing: arrival night, rehearsal, reception, recovery brunch. Each night prints, or you skip it.',
        'This piece is why we will not bury those nights under one reception total.',
      ],
      faqs: [
      ],
      related: [
        { path: '/weddings', label: 'Wedding catering' },
        { path: '/help/wedding-guide', label: 'Wedding-week help' },
        { path: '/rehearsal-dinners', label: 'Rehearsal dinners' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'vacation-chef-week',
      name: 'Vacation chef weeks',
      h1: 'Oahu Stay Chef week notes — the menu is the Stay Chef page.',
      title: 'Oahu Stay Chef week notes — beside the Stay Chef page | myCHEF',
      description:
        'Short Oahu Stay Chef week kitchen notes.',
      lede: 'Oahu Stay Chef week notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'jnlVacweekOahu',
      body: [
        'A week is not seven copies of one dinner. Breakfast, lunch, and dinner print as lines, or a written day rate.',
        'The personal chef page and the kamaʻāina page are the resident line. This piece is the visitor week beside the Stay Chef page.',
      ],
      faqs: [
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/personal-chef', label: 'Household line' },
        { path: '/blog/grocery-at-cost', label: 'Groceries at cost' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'travel-zones',
      name: 'Travel zones',
      h1: 'Oahu travel-zone kitchen notes — Kahala is not the North Shore.',
      title: 'Oahu travel-zone kitchen notes — beside the coverage map | myCHEF',
      description:
        'Short Oahu travel-zone kitchen notes.',
      lede: 'Oahu travel-zone kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'jnlZonesOahu',
      body: [
        'This piece is the cooler in the courtyard: how far, how long, whether the night is still the same call.',
      ],
      faqs: [
      ],
      related: [
        { path: '/coverage', label: 'Coverage map' },
        { path: '/north-shore', label: 'North Shore' },
        { path: '/locations', label: 'Private chef by town' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
  ],
  maui: [
    {
      slug: 'wedding-week',
      name: 'Wedding week',
      h1: 'Maui wedding-week kitchen notes — the cell is the wedding week page.',
      title: 'Maui wedding-week kitchen notes — beside the week cell | myCHEF',
      description:
        'Short Maui wedding-week kitchen notes.',
      lede: 'Maui wedding-week kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'jnlWeddingMaui',
      body: [
        'Welcome, rehearsal, reception, recovery brunch. This note is about timing: a lawn that needs a wet-weather line, a kitchen that cannot run four nights as one unpaid blur.',
        'The South Maui page and the West Maui page change arrival, not the menu adjective. Guest counts we staff stay dinners 2–15, receptions about 10–75.',
      ],
      faqs: [
      ],
      related: [
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/weddings', label: 'Wedding catering' },
        { path: '/help/wedding-guide', label: 'Wedding-week help' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'vacation-chef-week',
      name: 'Vacation chef weeks',
      h1: 'Maui Stay Chef week notes — the menu is the Stay Chef page.',
      title: 'Maui Stay Chef week notes — beside the Stay Chef page | myCHEF',
      description:
        'Short Maui Stay Chef week kitchen notes.',
      lede: 'Maui Stay Chef week notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'jnlVacweekMaui',
      body: [
        'A Wailea week is not seven plated copies. West Maui Saturday arrival is planned — not discovered on the invoice. Groceries stay at cost.',
        'This piece is the visitor week beside the Stay Chef page.',
      ],
      faqs: [
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/west-maui', label: 'West Maui drive' },
        { path: '/blog/grocery-at-cost', label: 'Groceries at cost' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'travel-zones',
      name: 'Travel zones',
      h1: 'Maui travel-zone kitchen notes — Wailea is not Kāʻanapali.',
      title: 'Maui travel-zone kitchen notes — beside the coverage map | myCHEF',
      description:
        'Short Maui travel-zone kitchen notes.',
      lede: 'Maui travel-zone kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'jnlZonesMaui',
      body: [
        'South Maui and West Maui are different arrival stories. Upcountry is elevation and a different kit. We write the drive; we do not hide it in the plate price.',
        'This piece is the cooler at the gate: which shore, how long, whether the night is still one call.',
      ],
      faqs: [
      ],
      related: [
        { path: '/coverage', label: 'Coverage map' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/west-maui', label: 'West Maui' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'wedding-week',
      name: 'Wedding week',
      h1: 'Kauai wedding-week kitchen notes — the cell is the wedding week page, at inquiry.',
      title: 'Kauai wedding-week kitchen notes — beside the week cell | myCHEF',
      description:
        'Short Kauai wedding-week kitchen notes at inquiry.',
      lede: 'Kauai wedding-week kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'jnlWeddingKauai',
      body: [
        'Estate formats to about 75 guests. Welcome, rehearsal, reception as separate lines. We do not hold a fake instant-booking button.',
        'Kitchen timing for the week — bookings start as an inquiry.',
      ],
      faqs: [
      ],
      related: [
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/weddings', label: 'Wedding catering' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'vacation-chef-week',
      name: 'Vacation chef weeks',
      h1: 'Kauai Stay Chef week notes — the menu is the Stay Chef page, at inquiry.',
      title: 'Kauai Stay Chef week notes — beside the Stay Chef page | myCHEF',
      description:
        'Short Kauai Stay Chef week kitchen notes at inquiry.',
      lede: 'Short Kauai Stay Chef week kitchen notes at inquiry.',
      photo: 'jnlVacweekKauai',
      body: [
        'North Shore winters and the Hanalei road change whether a week is even quotable. South Shore is a shorter drive from Līhuʻe, still inquiry.',
        'This piece is the visitor week beside the Stay Chef page. We do not hold a fake instant-booking button.',
      ],
      faqs: [
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/blog/grocery-at-cost', label: 'Groceries at cost' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'travel-zones',
      name: 'Travel zones',
      h1: 'Kauai travel-zone kitchen notes — both shores, and the bridge.',
      title: 'Kauai travel-zone kitchen notes — beside the coverage map | myCHEF',
      description:
        'Short Kauai travel-zone kitchen notes at inquiry.',
      lede: 'Kauai travel-zone kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'jnlZonesKauai',
      body: [
        'South Shore is the shorter drive from Līhuʻe. Far-North events inherit 72-hour notice. We reschedule rather than forfeit when the road closes.',
        'This piece is the cooler on wet stone: which shore, whether the night is still one call. Inquiry stage.',
      ],
      faqs: [
      ],
      related: [
        { path: '/coverage', label: 'Coverage map' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/north-shore', label: 'North Shore' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'wedding-week',
      name: 'Wedding week',
      h1: 'Hawaiʻi Island wedding-week kitchen notes — lines beside the weddings page, at inquiry.',
      title: 'Hawaiʻi Island wedding-week kitchen notes — lines beside the weddings page | myCHEF',
      description:
        'Short Hawaiʻi Island wedding-week kitchen notes at inquiry.',
      lede: 'Short Hawaiʻi Island wedding-week kitchen notes at inquiry.',
      photo: 'jnlWeddingBigisland',
      body: [
        'The week still exists as kitchen timing on the west side. East side is a dedicated day — never a same-day Kona round trip.',
        'Welcome, rehearsal, reception, brunch print as lines, or you skip them. We do not hold a fake instant-booking button.',
      ],
      faqs: [
        {
          q: 'Can the reception sit in Hilo after a Kona welcome?',
          a: 'Not the same day. Send both dates on the quote form.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Wedding catering' },
        { path: '/east-side', label: 'East side' },
        { path: '/help/wedding-guide', label: 'Wedding-week help' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'vacation-chef-week',
      name: 'Vacation chef weeks',
      h1: 'Hawaiʻi Island Stay Chef week notes — the menu is the Stay Chef page, at inquiry.',
      title: 'Hawaiʻi Island Stay Chef week notes — beside the Stay Chef page | myCHEF',
      description:
        'Short Hawaiʻi Island Stay Chef week kitchen notes at inquiry.',
      lede:
        'East side is another day.',
      photo: 'jnlVacweekBigisland',
      body: [
        'West side first. A Hilo week is a dedicated staffing day, not a Kona add-on.',
        'This piece is the visitor week beside the Stay Chef page. We do not hold a fake instant-booking button.',
      ],
      faqs: [
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/ironman-weeks', label: 'Ironman weeks' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'travel-zones',
      name: 'Travel zones',
      h1: 'Hawaiʻi Island travel-zone kitchen notes — west side first, Hilo another day.',
      title: 'Hawaiʻi Island travel-zone kitchen notes — beside the coverage map | myCHEF',
      description:
        'Short Hawaiʻi Island travel-zone kitchen notes at inquiry.',
      lede: 'Short Hawaiʻi Island travel-zone kitchen notes at inquiry.',
      photo: 'jnlZonesBigisland',
      body: [
        'The island is 4,000 square miles. Kona–Kohala is the staffed radius when we can staff. Hilo, Volcano, and Kaʻū are quote-only dedicated days — never a same-day west-side round trip.',
        'This piece is the cooler on lava stone: west side first, east side another day. Inquiry stage.',
      ],
      faqs: [
      ],
      related: [
        { path: '/coverage', label: 'Coverage map' },
        { path: '/kohala-corridor', label: 'Kona–Kohala' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
  ],
};

export const EXTRA_JOURNAL_NOTES: Record<IslandId, UniqueCell[]> = {
  oahu: applyEditorialAngles('oahu', RAW_EXTRA_JOURNAL_NOTES.oahu, EXTRA_JOURNAL_ANGLES),
  maui: applyEditorialAngles('maui', RAW_EXTRA_JOURNAL_NOTES.maui, EXTRA_JOURNAL_ANGLES),
  kauai: applyEditorialAngles('kauai', RAW_EXTRA_JOURNAL_NOTES.kauai, EXTRA_JOURNAL_ANGLES),
  bigisland: applyEditorialAngles('bigisland', RAW_EXTRA_JOURNAL_NOTES.bigisland, EXTRA_JOURNAL_ANGLES),
};
