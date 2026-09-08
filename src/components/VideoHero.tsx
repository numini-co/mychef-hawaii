import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Full-bleed cinematic hero:
 * - Dark, moody base with an atmospheric video running subtly in the background.
 * - Poster matches the darkened tone so there is zero brightness jump or flash.
 * - Video autoplays immediately (muted, looped, playsInline) and ping-pongs seamlessly.
 * - Darkened gradient scrim ensures all headline text, eyebrows, and CTAs are effortlessly readable.
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
  /** Skip when the WebM is larger or missing (hub ping-pong hero uses MP4). */
  preferWebm?: boolean;
  alt: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (!video) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setReduceMotion(true);
      return;
    }
    const saveData = Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
    if (saveData) {
      setReduceMotion(true);
      return;
    }

    // Ensure muted autoplay starts immediately across WebKit / Safari and Chromium
    const v = videoRef.current;
    if (v) {
      v.defaultMuted = true;
      v.muted = true;
      const playPromise = v.play();
      if (playPromise) {
        playPromise
          .then(() => setReady(true))
          .catch(() => {
            // Autoplay policy fallback: stays muted
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

      {/* Poster image — darkened to match the subtle ambient tone */}
      <img
        src={poster}
        alt={alt}
        width={1920}
        height={1080}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
        style={{
          opacity: ready ? 0 : 0.30,
          filter: 'brightness(0.46) contrast(1.02)',
        }}
      />

      {/* Background ambient video — plays automatically and loops forward/back */}
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
          onPlaying={() => setReady(true)}
          onCanPlay={(e) => {
            setReady(true);
            e.currentTarget.play().catch(() => {});
          }}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
          style={{
            opacity: ready ? 0.30 : 0,
            filter: 'brightness(0.46) contrast(1.02)',
          }}
        >
          {preferWebm ? <source src={video.replace(/\.mp4$/, '.webm')} type="video/webm" /> : null}
          <source src={video.replace(/\.mp4$/, '-mobile.mp4')} media="(max-width: 767px)" type="video/mp4" />
          <source src={video} type="video/mp4" />
        </video>
      ) : null}

      {/* Dark gradient & atmospheric vignette scrim so hero text is effortlessly readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(16,14,11,0.96) 0%, rgba(16,14,11,0.86) 38%, rgba(16,14,11,0.55) 65%, rgba(16,14,11,0.28) 100%), linear-gradient(to top, rgba(16,14,11,0.98) 0%, rgba(16,14,11,0.85) 32%, rgba(16,14,11,0.48) 65%, rgba(16,14,11,0.72) 100%)',
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
          className="h1-site mt-4 max-w-4xl"
          style={{ color: '#F7F5F0', textShadow: '0 2px 16px rgba(0,0,0,0.85)' }}
        >
          {title}
        </h1>
        <div style={{ color: 'rgba(247,245,240,0.95)', textShadow: '0 1px 8px rgba(0,0,0,0.65)' }}>
          {children}
        </div>
      </div>
    </section>
  );
}
