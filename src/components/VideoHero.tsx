import { useEffect, useState, type ReactNode } from 'react';

/**
 * Full-bleed cinematic hero: poster is the instant LCP, video mounts after
 * idle and fades in. Muted, looped, playsInline. Reduced-motion users keep
 * the still. Pattern matches the Dubai desk so the network feels like one house.
 */
export default function VideoHero({
  poster,
  video,
  alt,
  eyebrow,
  title,
  children,
}: {
  poster: string;
  video?: string;
  alt: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  const [loadVideo, setLoadVideo] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!video) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const saveData = Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
    if (saveData) return;
    let done = false;
    const mount = () => {
      if (done) return;
      done = true;
      const w = window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number };
      if (w.requestIdleCallback) w.requestIdleCallback(() => setLoadVideo(true), { timeout: 1800 });
      else window.setTimeout(() => setLoadVideo(true), 500);
    };
    if (document.readyState === 'complete') mount();
    else window.addEventListener('load', mount, { once: true });
    return () => window.removeEventListener('load', mount);
  }, [video]);

  return (
    <section
      className="relative isolate flex min-h-[calc(100svh-var(--nav-h))] items-end overflow-hidden"
      aria-label={eyebrow}
    >
      <img
        src={poster}
        alt={alt}
        width={1920}
        height={1080}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {video && loadVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden="true"
          onCanPlay={(e) => {
            setReady(true);
            e.currentTarget.play().catch(() => {});
          }}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
          style={{ opacity: ready ? 1 : 0 }}
        >
          <source src={video.replace(/\.mp4$/, '.webm')} type="video/webm" />
          <source src={video} type="video/mp4" />
        </video>
      ) : null}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(35,32,26,0.92) 0%, rgba(35,32,26,0.72) 28%, rgba(35,32,26,0.38) 52%, rgba(35,32,26,0.16) 74%, rgba(35,32,26,0.08) 100%)',
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-[max(4.5rem,calc(2.5rem+env(safe-area-inset-bottom,0px)))] pt-20 sm:pt-24 md:pb-20 md:pt-32">
        <p className="eyebrow-site" style={{ color: '#EDE8DB' }}>
          {eyebrow}
        </p>
        <h1 className="h1-site mt-4 max-w-4xl" style={{ color: '#F7F5F0' }}>
          {title}
        </h1>
        <div style={{ color: 'rgba(247,245,240,0.92)' }}>{children}</div>
      </div>
    </section>
  );
}
