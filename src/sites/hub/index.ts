import type { SiteModule } from '@/platform/types';
import { content } from './content';
import HubHome from './Home';
import MultiIslandPage from './MultiIslandPage';
import PricingHubPage from './PricingHubPage';
import CalculatorPage from './CalculatorPage';

export const hubSite: SiteModule = {
  siteId: 'hub',
  content,
  overrides: {
    '': HubHome,
    'multi-island-catering-hawaii': MultiIslandPage,
    'pricing': PricingHubPage,
    'calculator': CalculatorPage,
  },
};
