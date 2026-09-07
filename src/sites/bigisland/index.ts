import type { SiteModule } from '@/platform/types';
import { content } from './content';
import Home from './pages/Home';
import PrivateChef from './pages/PrivateChef';
import Pricing from './pages/Pricing';
import Catering from './pages/Catering';
import Weddings from './pages/Weddings';

/**
 * bigisland site module — Volcanic Minimalism (design.md §3.5).
 *
 * The Big Island token set is two-state: on the light band (#E8E2D4) the
 * text-safe lehua accent is #A24A2E (4.57:1) and the CTA inverts to dark
 * (#181412 on #ECE6DA) — design.md §3.5 accent-text / band rows. The shared
 * .band-site rule only remaps ink/line vars, so this scoped rule applies the
 * second state for this site tree only. No other site is affected.
 */
if (typeof document !== 'undefined' && !document.getElementById('bigisland-band-state')) {
  const el = document.createElement('style');
  el.id = 'bigisland-band-state';
  el.textContent = [
    '[data-site="bigisland"] .band-site{',
    '--site-accent-text:#A24A2E;',
    '--site-cta-bg:#181412;',
    '--site-cta-ink:#ECE6DA;',
    '}',
  ].join('');
  document.head.appendChild(el);
}

export const bigislandSite: SiteModule = {
  siteId: 'bigisland',
  content,
  overrides: {
    '': Home,
    'private-chef': PrivateChef,
    pricing: Pricing,
    catering: Catering,
    weddings: Weddings,
  },
};
