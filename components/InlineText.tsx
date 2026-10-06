'use client';

import type { ReactNode } from 'react';
import HostLink from '@/components/HostLink';
import { useIsland } from '@/components/IslandProvider';
import { INLINE_LINK } from '@/lib/inlineLinks';
import type { IslandId } from '@/data/islands';

type Host = IslandId | 'root';

/** Renders copy with `[anchor](/path)` markup as descriptive in-text links. */
export default function InlineText({ text }: { text: string }) {
  const { islandId } = useIsland();
  const here: Host = islandId ?? 'root';
  const parts: ReactNode[] = [];
  let last = 0;
  const re = new RegExp(INLINE_LINK.source, 'g');
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const host = (m[2] ? m[2].slice(0, -1) : here) as Host;
    parts.push(
      <HostLink key={m.index} island={host} path={m[3]} className="text-ink underline underline-offset-4">
        {m[1]}
      </HostLink>,
    );
    last = m.index + m[0].length;
  }
  if (parts.length === 0) return <>{text}</>;
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
