"use client";

import Image from "next/image";
import { useState } from "react";

// §Pascal-2026-05-08 v12: click-to-play poster wrapper for VEED iframes.
// Initial render = static poster image + play-button overlay (LCP-friendly,
// ~50 KB versus a 2-4s VEED iframe boot). On click, swap to the iframe with
// autoplay=1 so the user gets the video immediately.
export default function VideoPoster({
  posterSrc,
  videoSrc,
  title,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 800px",
}: {
  posterSrc: string;
  videoSrc: string;
  title: string;
  priority?: boolean;
  sizes?: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    // §Pascal-2026-05-08 v14: no autoplay query param. The browser/VEED
    // combo was forcing muted-autoplay across the iframe boundary; dropping
    // autoplay restores the original flow — VEED's player loads with its
    // own play button on the first frame, user clicks it once, video plays
    // with sound. Two clicks total (poster → VEED play button) but the LCP
    // win still applies because the iframe only loads on the first click.
    return (
      <div className="relative w-full pb-[56.25%]">
        <iframe
          src={videoSrc}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
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
        <Image
          src={posterSrc}
          alt=""
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
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
