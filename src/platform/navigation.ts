import { SITE_META } from './tokens';
import type { SiteId } from './tokens';

/**
 * Returns true if running in a browser on the live mychef-hawaii.com domain.
 */
export function isLiveDomain(): boolean {
  if (typeof window === 'undefined') return false;
  return window.location.hostname.includes('mychef-hawaii.com');
}

/**
 * Returns the destination canonical URL or local route path for an island.
 * - On live domains: returns 'https://[subdomain].mychef-hawaii.com/' (or 'https://mychef-hawaii.com/' for hub).
 * - On local/preview environments: returns '/oahu', '/maui', etc. (or '/' for hub).
 */
export function getIslandHref(id: SiteId): string {
  if (isLiveDomain()) {
    if (id === 'hub') return 'https://mychef-hawaii.com/';
    return `https://${id}.mychef-hawaii.com/`;
  }
  return id === 'hub' ? '/' : (SITE_META[id]?.basePath || '/');
}

/**
 * Performs seamless navigation to an island site.
 * - On live domains: switches subdomains via window.location.href.
 * - On local/preview: uses SPA navigate() or fallbacks to path navigation.
 */
export function navigateToIsland(id: SiteId, navigate?: (path: string) => void) {
  if (isLiveDomain()) {
    window.location.href = getIslandHref(id);
    return;
  }
  const path = id === 'hub' ? '/' : (SITE_META[id]?.basePath || '/');
  if (navigate) {
    navigate(path);
  } else if (typeof window !== 'undefined') {
    window.location.href = path;
  }
}
