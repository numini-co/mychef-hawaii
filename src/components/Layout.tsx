import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import IslandRateBar from './IslandRateBar';
import ConciergeWidget from './ConciergeWidget';
import { useSite } from '@/platform/IslandProvider';

/**
 * Layout (children pattern — App wraps <Routes> in this).
 * Owns the nav offset contract: when the site nav is fixed
 * (transparent-over-hero skins — Maui, Big Island), the content slot gets
 * top padding equal to --nav-h; full-bleed heroes opt out inside the page
 * with -mt-[var(--nav-h)], never by editing Layout or Navbar.
 */
export default function Layout({ children }: { children: ReactNode }) {
  const { tokens } = useSite();
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-1" style={tokens.navTransparentOverHero ? { paddingTop: 'var(--nav-h)' } : undefined}>
        <IslandRateBar />
        {children}
      </main>
      <ConciergeWidget />
      <Footer />
    </div>
  );
}
