"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// §Pascal-2026-05-08 v12: click-to-play poster wrapper for Gumlet iframes.
// Initial render = static poster image + play-button overlay (LCP-friendly,
// ~50 KB versus a 2-4s Gumlet iframe boot). On click, swap to the iframe with
// autoplay=true so the user gets the video immediately (the click is the
// required user gesture).
//
// 2026-05-22: optional `animated` prop. When supplied, the poster frame
// renders a muted autoplay loop (WebM VP9 primary, MP4 H.264 fallback)
// instead of the static image, to lift click-through on the embedded
// videos. The loop is gated by an IntersectionObserver (plays only while
// >=50% on-screen, pauses otherwise) and is skipped entirely when the OS
// requests reduced motion. The static posterSrc stays as the <video>
// poster attribute, so it shows during load, on slow connections, and for
// reduced-motion users. Click-to-play iframe behaviour is unchanged:
// the loop is a visual hook, the real (audio) video is still the Gumlet embed.
type AnimatedSources = {
  /** WebM VP9 loop, preferred (smaller). Optional. */
  webm?: string;
  /** MP4 H.264 loop, required fallback. */
  mp4: string;
};

export default function VideoPoster({
  posterSrc,
  videoSrc,
  title,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 800px",
  animated,
}: {
  posterSrc: string;
  videoSrc: string;
  title: string;
  priority?: boolean;
  sizes?: string;
  animated?: AnimatedSources;
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Play the loop only while it is on-screen; pause it otherwise so off-screen
  // thumbnails do not burn CPU/battery. Skipped for prefers-reduced-motion —
  // the <video poster> then shows the static frame and the loop never plays.
  useEffect(() => {
    const el = videoRef.current;
    if (!animated || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [animated]);

  if (playing) {
    // The poster click is the user gesture, so the mounted Gumlet iframe gets
    // autoplay=true (swapped from the autoplay=false base) and plays
    // immediately. The iframe only loads on click, so the LCP win still holds.
    const src = videoSrc.replace("autoplay=false", "autoplay=true");
    return (
      <div className="relative w-full pb-[56.25%]">
        <iframe
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="origin"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;clipboard-write;"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group relative block w-full overflow-hidden bg-black/5"
    >
      <div className="relative w-full pb-[56.25%]">
        {animated ? (
          <video
            ref={videoRef}
            poster={posterSrc}
            muted
            loop
            playsInline
            autoPlay={priority}
            preload={priority ? "metadata" : "none"}
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          >
            {animated.webm && <source src={animated.webm} type="video/webm" />}
            <source src={animated.mp4} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={posterSrc}
            alt=""
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        )}
        {/* Play button overlay: white circle + navy triangle, scales on hover. */}
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/95 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-110">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="#193763"
              aria-hidden
              className="ml-1"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      </div>
    </button>
  );
}
