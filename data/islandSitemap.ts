import type { IslandId } from './islands';
import type { PhotoKey } from './photos';

/**
 * Island HTML /sitemap documents. The list of URLs is generated; the
 * title, H1, and still are unique so the page is not a cloned index.
 * Titles must not use money keywords.
 */

export interface IslandSitemapPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
}

export const islandSitemap: Record<IslandId, IslandSitemapPage> = {
  oahu: {
    h1: 'Every page on our Oahu site.',
    title: 'Oahu sitemap — every page | myCHEF',
    description:
      'Oahu sitemap: neighborhoods, services, occasions and guides.',
    lede:
      'Every page on our Oahu site, grouped by type.',
    kicker: 'Oʻahu · Sitemap',
    photo: 'sitemapOahu',
  },
  maui: {
    h1: 'Every page on our Maui site.',
    title: 'Maui sitemap — every page | myCHEF',
    description:
      'Maui sitemap: neighborhoods, services, occasions and guides.',
    lede:
      'Every page on our Maui site — Wailea, West Maui, wedding weeks and more.',
    kicker: 'Maui · Sitemap',
    photo: 'sitemapMaui',
  },
  kauai: {
    h1: 'Every page on our Kauai site.',
    title: 'Kauai sitemap — every page | myCHEF',
    description:
      'Kauai sitemap: both shores, services, occasions and guides.',
    lede:
      'Every page on our Kauai site, grouped by type.',
    kicker: 'Kauaʻi · Sitemap',
    photo: 'sitemapKauai',
  },
  bigisland: {
    h1: 'Every page on our Big Island site.',
    title: 'Hawaiʻi Island sitemap — every page | myCHEF',
    description: 'Hawaiʻi Island HTML sitemap: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
    lede:
      'West side first.',
    kicker: 'Hawaiʻi Island · Sitemap',
    photo: 'sitemapBigisland',
  },
};
