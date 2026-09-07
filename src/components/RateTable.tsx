/**
 * PriceLine / RateTable (design.md §4).
 * PriceLine: "from $X" + unit + qualifier. RateTable: ruled rows, tabular figures.
 * All token-driven — per-island rendering differs automatically.
 */

export function PriceLine({
  from = false,
  amount,
  unit,
  qualifier,
  className = '',
}: {
  from?: boolean;
  /** Display string, e.g. '$125–$190' — always from config RATES, never invented. */
  amount: string;
  unit?: string;
  qualifier?: string;
  className?: string;
}) {
  return (
    <p className={`tabular-site ${className}`}>
      {from ? <span className="text-ink-2">from </span> : null}
      <span className="font-display text-xl">{amount}</span>
      {unit ? <span className="text-ink-2"> {unit}</span> : null}
      {qualifier ? <span className="text-ink-2"> · {qualifier}</span> : null}
    </p>
  );
}

export interface RateRow {
  label: string;
  value: string;
  note?: string;
}

export function RateTable({
  rows,
  title,
  footnote,
  className = '',
}: {
  rows: RateRow[];
  title?: string;
  footnote?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      {title ? <figcaption className="eyebrow-site mb-3">{title}</figcaption> : null}
      <table className="w-full border-collapse text-left">
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="rule-t align-top">
              <th scope="row" className="py-3 pr-4 font-normal">
                {r.label}
                {r.note ? <span className="block text-sm text-ink-2">{r.note}</span> : null}
              </th>
              <td className="tabular-site whitespace-nowrap py-3 text-right font-medium">{r.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {footnote ? <p className="rule-t pt-3 text-sm text-ink-2">{footnote}</p> : null}
    </figure>
  );
}
