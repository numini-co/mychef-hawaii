import { createContext, useContext } from 'react';
import type { ContentRecord } from './types';

/** The currently-loaded site's content registry, provided by SitePages. */
export const SiteContentContext = createContext<ContentRecord[]>([]);

export function useSiteContent(): ContentRecord[] {
  return useContext(SiteContentContext);
}
