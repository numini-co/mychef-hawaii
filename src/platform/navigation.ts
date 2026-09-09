/**
 * Cross-host island URLs — always absolute https so prerendered HTML carries
 * crawlable equity between hub and flagships (re-audit §3.1).
 */
import { SITE_META } from './tokens';
import type { SiteId } from './tokens';

export function isLiveDomain(): boolean {
  if (typeof window === 'undefined') return false;
  return window.location.hostname.includes('mychef-hawaii.com');
}

/** Absolute public URL for an island (or hub). Prefer this in footer / switcher hrefs. */
export function getIslandHref(id: SiteId): string {
  if (id === 'hub') return 'https://mychef-hawaii.com/';
  return `https://${id}.mychef-hawaii.com/`;
}

/** Same-origin path for local SPA navigation on localhost / preview. */
export function getIslandPath(id: SiteId): string {
  return id === 'hub' ? '/' : SITE_META[id]?.basePath || '/';
}

export function navigateToIsland(id: SiteId, navigate?: (path: string) => void) {
  if (isLiveDomain()) {
    window.location.href = getIslandHref(id);
    return;
  }
  const path = getIslandPath(id);
  if (navigate) navigate(path);
  else if (typeof window !== 'undefined') window.location.href = path;
}
