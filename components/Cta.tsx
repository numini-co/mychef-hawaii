import Link from 'next/link';
import { cn } from '@/lib/utils';
import { quotePath } from '@/lib/paths';
import { primaryCtaLabel, type IslandId } from '@/data/islands';
import { whatsappHref } from '@/lib/whatsapp';

const sizes = {
  default: 'h-12 px-6 text-[14px]',
  compact: 'h-10 px-4 text-[13px]',
} as const;

const base =
  'inline-flex items-center justify-center font-medium leading-none tracking-[0.01em] rounded-[2px] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

const variants = {
  primary: `${base} bg-ink text-paper focus-visible:outline-ink`,
  secondary: `${base} bg-paper text-ink border border-ink focus-visible:outline-ink`,
  light: `${base} cta-solid-paper bg-paper text-ink focus-visible:outline-paper`,
  ghost: `${base} border border-paper/70 bg-transparent text-paper focus-visible:outline-paper`,
} as const;

export function CtaLink({
  href,
  children,
  variant = 'primary',
  size = 'default',
  className,
  'aria-label': ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  'aria-label'?: string;
}) {
  const cls = cn(variants[variant], sizes[size], className);
  const external = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
  if (external) {
    const remote = href.startsWith('http');
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(remote ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

export function QuoteCta({
  island,
  service,
  variant = 'primary',
  className,
  children,
}: {
  island?: IslandId | null;
  service?: string;
  variant?: keyof typeof variants;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <CtaLink href={quotePath(island ?? undefined, service)} variant={variant} className={className}>
      {children ?? primaryCtaLabel(island)}
    </CtaLink>
  );
}

export function EnquireCta({
  island,
  variant = 'primary',
  size = 'default',
  className,
}: {
  island?: IslandId | null;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <CtaLink href={quotePath(island ?? undefined)} variant={variant} size={size} className={className}>
      {primaryCtaLabel(island)}
    </CtaLink>
  );
}

export function WhatsAppCta({
  island,
  variant = 'secondary',
  className,
  children,
}: {
  island?: IslandId | null;
  variant?: keyof typeof variants;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <CtaLink href={whatsappHref(island)} variant={variant} className={className}>
      {children ?? 'WhatsApp'}
    </CtaLink>
  );
}
