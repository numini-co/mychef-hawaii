import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { Seo } from '@/platform/seo';

/** Branded 404 — rendered inside the current site's skin. */
export default function NotFound({ path }: { path: string }) {
  const { link } = useSite();
  return (
    <div className="section-pad mx-auto max-w-3xl px-6">
      <Seo title="Page not found" description="That page is not on the menu." path={path} />
      <p className="eyebrow-site">404</p>
      <h1 className="h1-site mt-3">That page is not on the menu.</h1>
      <p className="measure-site mt-5 text-ink-2">
        The link may have moved, or the page may live on one of the island sites. The tariff, the guides,
        and the quote desk are all one click away.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-5">
        <Link to={link('quote')} className="cta-site">Get a written quote</Link>
        <Link to={link('')} className="cta-secondary-site">Back to the front page →</Link>
      </div>
    </div>
  );
}
