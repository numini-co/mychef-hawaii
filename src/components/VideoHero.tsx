import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Full-bleed cinematic video hero:
 * - High-impact video running as the first thing when the main page starts.
 * - Autoplays immediately (muted, playsInline, loop) with instant playback enforcement.
 * - Poster provides instant visual continuity while the video stream buffers.
 * - Balanced directional gradient scrim guarantees AAA text contrast on headline/actions
 *   while keeping the Hawaiian private chef & estate dining video vivid and alive.
 */
export default function VideoHero({
  poster,
  video,
  preferWebm = false,
  alt,
  eyebrow,
  title,
  children,
}: {
  poster: string;
  video?: string;
  /** Skip when the WebM is larger or missing (hub hero uses MP4). */
  preferWebm?: boolean;
  alt: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (!video) return;
    const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setReduceMotion(true);
      return;
    }
    const saveData = Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
    if (saveData) {
      setReduceMotion(true);
      return;
    }

    const v = videoRef.current;
    if (v) {
      v.defaultMuted = true;
      v.muted = true;
      const playPromise = v.play();
      if (playPromise) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Fallback for strict browser autoplay settings: attempt muted play on interaction
            const onInteract = () => {
              v.play().then(() => setIsPlaying(true)).catch(() => {});
              window.removeEventListener('touchstart', onInteract);
              window.removeEventListener('scroll', onInteract);
            };
            window.addEventListener('touchstart', onInteract, { once: true, passive: true });
            window.addEventListener('scroll', onInteract, { once: true, passive: true });
          });
      }
    }
  }, [video]);

  return (
    <section
      className="relative isolate flex min-h-[calc(100svh-var(--nav-h))] items-end overflow-hidden bg-[#12100D]"
      aria-label={eyebrow}
    >
      {/* Dark ground backing */}
      <div className="absolute inset-0 bg-[#12100D]" aria-hidden="true" />

      {/* Instant fallback poster frame */}
      <img
        src={poster}
        alt={alt}
        width={1920}
        height={1080}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
        style={{
          opacity: isPlaying ? 0 : 0.85,
          filter: 'brightness(0.75) contrast(1.05)',
        }}
      />

      {/* Cinematic intro video — running as the first thing on main page load */}
      {video && !reduceMotion ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
          aria-hidden="true"
          onPlaying={() => setIsPlaying(true)}
          onCanPlay={(e) => {
            setIsPlaying(true);
            e.currentTarget.play().catch(() => {});
          }}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{
            opacity: 0.90,
            filter: 'brightness(0.82) contrast(1.05)',
          }}
        >
          {preferWebm ? <source src={video.replace(/\.mp4$/, '.webm')} type="video/webm" /> : null}
          <source src={video.replace(/\.mp4$/, '-mobile.mp4')} media="(max-width: 767px)" type="video/mp4" />
          <source src={video} type="video/mp4" />
        </video>
      ) : null}

      {/* Directional scrim: protects text on left and bottom while leaving video vivid on right & center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(14,12,10,0.92) 0%, rgba(14,12,10,0.72) 35%, rgba(14,12,10,0.30) 68%, transparent 100%), linear-gradient(to top, rgba(14,12,10,0.96) 0%, rgba(14,12,10,0.68) 25%, transparent 60%)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-[max(4.5rem,calc(2.5rem+env(safe-area-inset-bottom,0px)))] pt-20 sm:pt-24 md:pb-20 md:pt-32">
        <p
          className="eyebrow-site text-sm font-semibold uppercase tracking-wider"
          style={{ color: '#EDE8DB', textShadow: '0 1px 6px rgba(0,0,0,0.75)' }}
        >
          {eyebrow}
        </p>
        <h1
          className="h1-site measure-site mt-4 font-display font-medium"
          style={{ color: '#FFFFFF', textShadow: '0 2px 14px rgba(0,0,0,0.9)' }}
        >
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}
