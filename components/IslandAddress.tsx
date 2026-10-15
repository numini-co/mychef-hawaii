import { ISLAND_ADDRESSES, ISLAND_ADDRESS_ORDER, formatIslandAddress } from '@/lib/contact';
import type { IslandId } from '@/data/islands';

/** Visible island address(es). Island host: one line. Hub: all four. */
export default function IslandAddress({
  island,
  tone = 'ink',
}: {
  island?: IslandId | null;
  tone?: 'ink' | 'paper';
}) {
  const muted = tone === 'ink' ? 'text-on-ink' : 'text-mute';
  const strong = tone === 'ink' ? 'text-paper' : 'text-ink';
  const ids = island ? [island] : [...ISLAND_ADDRESS_ORDER];
  return (
    <ul className={`mt-3 flex flex-wrap gap-x-8 gap-y-2 text-sm leading-relaxed ${muted}`}>
      {ids.map((id) => {
        const a = ISLAND_ADDRESSES[id];
        return (
          <li key={id}>
            <address className="not-italic">
              <span className={strong}>myCHEF {a.label}</span> · {formatIslandAddress(a)}
            </address>
          </li>
        );
      })}
    </ul>
  );
}
