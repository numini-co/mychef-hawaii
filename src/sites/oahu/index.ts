import type { SiteModule } from '@/platform/types';
import { content } from './content';
import OahuHome from './Home';
import OahuPrivateChef from './PrivateChef';
import OahuPricing from './Pricing';
import OahuCatering from './Catering';
import OahuWeddings from './Weddings';
import OahuStayChef from './StayChef';
import OahuCorporate from './Corporate';

/**
 * Oʻahu site module. Bespoke flagship pages render through overrides;
 * all other slugs resolve through the content registry's category templates.
 */
export const oahuSite: SiteModule = {
  siteId: 'oahu',
  content,
  overrides: {
    '': OahuHome,
    'private-chef': OahuPrivateChef,
    pricing: OahuPricing,
    catering: OahuCatering,
    weddings: OahuWeddings,
    'stay-chef': OahuStayChef,
    corporate: OahuCorporate,
  },
};
