import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useParams, useLocation } from 'react-router';
import { IslandProvider } from '@/platform/IslandProvider';
import { ISLAND_IDS } from '@/platform/tokens';
import type { IslandId } from '@/platform/tokens';
import { LAZY_SITES } from '@/platform/sites';
import Layout from '@/components/Layout';

const QuoteFlow = lazy(() => import('@/quote/QuoteFlow'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function RouteFallback() {
  return (
    <div className="bg-site min-h-[60vh] flex items-center justify-center" aria-busy="true">
      <span className="text-ink-2 text-sm tracking-wide">Loading…</span>
    </div>
  );
}

/** Hub site shell — '/' tree. Home renders via the hub override registry. */
function HubShell() {
  const { '*': splat } = useParams();
  const slug = splat ?? '';
  const HubPages = LAZY_SITES.hub;
  return (
    <IslandProvider siteId="hub">
      <Layout>
        <Suspense fallback={<RouteFallback />}>
          {slug === 'quote' ? <QuoteFlow /> : <HubPages slug={slug} />}
        </Suspense>
      </Layout>
    </IslandProvider>
  );
}

/** Island site shell — only mounted on /oahu /maui /kauai /bigisland. */
function IslandShell({ siteId }: { siteId: IslandId }) {
  const rest = useParams()['*'] ?? '';
  const IslandPages = LAZY_SITES[siteId];
  return (
    <IslandProvider siteId={siteId}>
      <Layout>
        <Suspense fallback={<RouteFallback />}>
          {rest === 'quote' ? <QuoteFlow /> : <IslandPages slug={rest} />}
        </Suspense>
      </Layout>
    </IslandProvider>
  );
}

function getSubdomainIsland(): IslandId | null {
  if (typeof window === 'undefined') return null;
  const host = window.location.hostname.toLowerCase();
  const sub = host.split('.')[0];
  if ((ISLAND_IDS as readonly string[]).includes(sub)) {
    return sub as IslandId;
  }
  return null;
}

export default function App() {
  const subdomain = getSubdomainIsland();

  return (
    <>
      <ScrollToTop />
      <Routes>
        {subdomain ? (
          <>
            <Route path={`/${subdomain}/*`} element={<IslandShell siteId={subdomain} />} />
            <Route path="/*" element={<IslandShell siteId={subdomain} />} />
          </>
        ) : (
          <>
            {ISLAND_IDS.map((id) => (
              <Route key={id} path={`/${id}/*`} element={<IslandShell siteId={id} />} />
            ))}
            <Route path="/*" element={<HubShell />} />
          </>
        )}
      </Routes>
    </>
  );
}
