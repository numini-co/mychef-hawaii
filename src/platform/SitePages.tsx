import type { SiteId } from './tokens';
import type { ContentRecord, PageCategory } from './types';
import type { SiteModule } from './types';
import { SiteContentContext } from './contentContext';
import NotFound from '@/components/NotFound';
import ServicePage from './templates/ServicePage';
import LocationPage from './templates/LocationPage';
import PricingPage from './templates/PricingPage';
import WeddingPage from './templates/WeddingPage';
import MenuPage from './templates/MenuPage';
import OccasionPage from './templates/OccasionPage';
import GuidePage from './templates/GuidePage';
import TrustPage from './templates/TrustPage';
import LongformArticle from './longform/LongformArticle';
import type { ComponentType } from 'react';

const TEMPLATES: Record<PageCategory, ComponentType<{ record: ContentRecord }>> = {
  core: ServicePage,
  service: ServicePage,
  partner: ServicePage,
  pricing: PricingPage,
  wedding: WeddingPage,
  location: LocationPage,
  menu: MenuPage,
  occasion: OccasionPage,
  guide: GuidePage,
  trust: TrustPage,
};

/**
 * Route resolution contract (design.md §1):
 *   1. If the site registered a bespoke override for the slug → render it.
 *   2. Else find the slug in the site's content registry → category template.
 *   3. Else → branded 404.
 */
export default function SitePages({ site, slug, siteId }: { site: SiteModule; slug: string; siteId: SiteId }) {
  const clean = slug.replace(/^\/+|\/+$/g, '');

  const record = site.content.find((r) => r.slug === clean);
  const Override = site.overrides?.[clean];
  if (Override) {
    return (
      <SiteContentContext.Provider value={site.content} key={siteId}>
        <Override />
        {record ? <LongformArticle record={record} /> : null}
      </SiteContentContext.Provider>
    );
  }

  if (!record) return <NotFound path={`/${clean}`} />;

  const Template = TEMPLATES[record.category] ?? ServicePage;
  return (
    <SiteContentContext.Provider value={site.content} key={siteId}>
      <Template record={record} />
    </SiteContentContext.Provider>
  );
}
