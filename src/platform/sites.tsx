import { lazy, type ComponentType, type LazyExoticComponent } from 'react';
import type { SiteId } from './tokens';
import type { SiteModule } from './types';
import SitePages from './SitePages';

/**
 * Route-level code splitting: each site module (content registry + bespoke
 * pages) ships as its own chunk, loaded only when a visitor enters that
 * site's route tree. The shared platform shell stays in the main bundle.
 */
function lazySite(siteId: SiteId, loader: () => Promise<Record<string, SiteModule>>, exportName: string) {
  return lazy(async () => {
    const mod = await loader();
    const site = mod[exportName];
    const C: ComponentType<{ slug: string }> = ({ slug }) => <SitePages site={site} slug={slug} siteId={siteId} />;
    return { default: C };
  });
}

export const LAZY_SITES: Record<SiteId, LazyExoticComponent<ComponentType<{ slug: string }>>> = {
  hub: lazySite('hub', () => import('@/sites/hub') as Promise<Record<string, SiteModule>>, 'hubSite'),
  oahu: lazySite('oahu', () => import('@/sites/oahu') as Promise<Record<string, SiteModule>>, 'oahuSite'),
  maui: lazySite('maui', () => import('@/sites/maui') as Promise<Record<string, SiteModule>>, 'mauiSite'),
  kauai: lazySite('kauai', () => import('@/sites/kauai') as Promise<Record<string, SiteModule>>, 'kauaiSite'),
  bigisland: lazySite('bigisland', () => import('@/sites/bigisland') as Promise<Record<string, SiteModule>>, 'bigislandSite'),
};
