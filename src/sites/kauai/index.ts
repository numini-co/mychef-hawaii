import { createElement } from 'react';
import { Navigate } from 'react-router';
import type { SiteModule } from '@/platform/types';
import { content } from './content';
import KauaiHome from './pages/Home';
import KauaiPrivateChef from './pages/PrivateChef';
import KauaiPricing from './pages/Pricing';
import KauaiCatering from './pages/Catering';
import KauaiWeddings from './pages/Weddings';
import KauaiRetreatCatering from './pages/RetreatCatering';

function LegacyPrivateChefCost() {
  return createElement(Navigate, { to: '/kauai/private-chef-cost', replace: true });
}

/**
 * kauai site module — "veranda in the garden" (design.md §3.4).
 * Bespoke overrides render the six commercial core pages; the remaining
 * 107 records render through the category templates.
 */
export const kauaiSite: SiteModule = {
  siteId: 'kauai',
  content,
  overrides: {
    '': KauaiHome,
    'private-chef': KauaiPrivateChef,
    pricing: KauaiPricing,
    catering: KauaiCatering,
    weddings: KauaiWeddings,
    'retreat-catering': KauaiRetreatCatering,
    'pricing/private-chef-cost': LegacyPrivateChefCost,
  },
};
