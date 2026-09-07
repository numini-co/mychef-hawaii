import type { SiteModule } from '@/platform/types';
import { content } from './content';
import MauiHome from './pages/Home';
import MauiPrivateChef from './pages/PrivateChef';
import MauiPricing from './pages/Pricing';
import MauiCatering from './pages/Catering';
import MauiWeddings from './pages/Weddings';
import MauiWeddingWeek from './pages/WeddingWeek';

/**
 * Maui site module — Cinematic Resort-Villa Hospitality (design.md §3.3).
 * Bespoke flagships below; all other ~120 routes render through the
 * category templates from the content registry.
 */
export const mauiSite: SiteModule = {
  siteId: 'maui',
  content,
  overrides: {
    '': MauiHome,
    'private-chef': MauiPrivateChef,
    pricing: MauiPricing,
    catering: MauiCatering,
    weddings: MauiWeddings,
    'weddings/wedding-week': MauiWeddingWeek,
  },
};
