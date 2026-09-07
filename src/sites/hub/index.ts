import type { SiteModule } from '@/platform/types';
import { content } from './content';
import HubHome from './Home';

export const hubSite: SiteModule = {
  siteId: 'hub',
  content,
  overrides: {
    '': HubHome,
  },
};
