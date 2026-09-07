import { Link } from 'react-router';

/**
 * Breadcrumbs — visible trail; the matching BreadcrumbList JSON-LD is emitted
 * by the page's SEO layer (PageFactory builds both from the same items).
 */
export interface Crumb {
  name: string;
  path: string;
}

export default function Breadcrumbs({ items, className = '' }: { items: Crumb[]; className?: string }) {
  if (items.length < 2) return null;
  return (
    <nav aria-label="Breadcrumb" className={`text-sm text-ink-2 ${className}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((c, i) => (
          <li key={c.path} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true">/</span> : null}
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-ink">{c.name}</span>
            ) : (
              <Link to={c.path} className="link-site">
                {c.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
