import { createContext, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { SiteId, SiteTokens } from './tokens';
import { TOKENS, SITE_META, tokensToCssVars } from './tokens';

export interface SiteContextValue {
  siteId: SiteId;
  /** Display name with diacritics, e.g. 'Oʻahu'. */
  name: string;
  /** Route base path: '' for hub, '/oahu' etc. */
  basePath: string;
  /** World name from design.md §1. */
  world: string;
  tokens: SiteTokens;
  /** Join a site-relative slug to a full path. link('pricing') → '/oahu/pricing'. */
  link: (slug: string) => string;
  isHub: boolean;
}

const SiteContext = createContext<SiteContextValue | null>(null);

/**
 * Reads the route tree's site id (passed from App), injects that site's token
 * set as CSS custom properties on a scoped wrapper div, and provides site
 * context to everything below. Island agents: wrap nothing yourselves — the
 * shell does this; consume with useSite().
 */
export function IslandProvider({ siteId, children }: { siteId: SiteId; children: ReactNode }) {
  const value = useMemo<SiteContextValue>(() => {
    const meta = SITE_META[siteId];
    return {
      siteId,
      name: meta.name,
      basePath: meta.basePath,
      world: meta.world,
      tokens: TOKENS[siteId],
      link: (slug: string) => {
        const clean = slug.replace(/^\//, '');
        const isSubdomain =
          typeof window !== 'undefined' &&
          window.location.hostname.toLowerCase().startsWith(`${siteId}.`);
        if (isSubdomain) {
          return `/${clean}`.replace(/\/$/, '') || '/';
        }
        return `${meta.basePath}/${clean}`.replace(/\/$/, '') || '/';
      },
      isHub: siteId === 'hub',
    };
  }, [siteId]);

  const vars = useMemo(() => tokensToCssVars(TOKENS[siteId]), [siteId]);

  return (
    <SiteContext.Provider value={value}>
      <div
        data-site={siteId}
        className="site-shell min-h-[100dvh]"
        style={vars as React.CSSProperties}
      >
        {children}
      </div>
    </SiteContext.Provider>
  );
}

export function useSite(): SiteContextValue {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error('useSite must be used inside <IslandProvider>');
  return ctx;
}
