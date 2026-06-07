"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Logo = { name: string; src: string; w: number; h: number; href?: string };

// Pure-CSS infinite RTL marquee with ONE global pace for the whole site. The
// track holds two copies of the logos so translateX(-50%) loops seamlessly.
//
// Speed (§2026-06-06): we want a constant PIXELS-PER-SECOND so every marquee
// feels identical. The old formula (duration = logoCount * 4.5s) normalized for
// logo COUNT only, so wide-logo and narrow-logo strips drifted to different
// speeds (measured: journals ~16-22px/s vs featured-in ~38px/s). We can't derive
// width from the logo data either, because the stored w/h are not the images'
// true aspect ratios (object-contain renders them narrower). So we MEASURE the
// real rendered width of one logo-set on the client (after images load / on
// resize) and set animation duration = setWidth / MARQUEE_PX_PER_SECOND. Every
// marquee then scrolls at exactly the same pace. Change the ONE constant to tune.
//
// A count-based provisional duration is server-rendered so the strip animates
// immediately; the measured value overrides it on mount. Marquees are below the
// fold, so that one-time correction happens off-screen and is not visible.
const MARQUEE_PX_PER_SECOND = 27;
const PROVISIONAL_SECONDS_PER_LOGO = 4.5;

export default function Marquee({
  logos,
  ariaLabel,
  variant = "light",
  itemHeight = "h-14 sm:h-16",
  pxPerSecond = MARQUEE_PX_PER_SECOND,
}: {
  logos: ReadonlyArray<Logo>;
  ariaLabel: string;
  variant?: "light" | "dark";
  itemHeight?: string;
  /** Per-marquee pace override. Defaults to the global MARQUEE_PX_PER_SECOND. */
  pxPerSecond?: number;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const setCount = logos.length;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const apply = () => {
      const items = Array.from(track.children) as HTMLElement[];
      if (items.length < setCount) return;
      // One set = the first `setCount` items. Sum their real rendered widths
      // plus one gap each (the translateX(-50%) loop advances by exactly one set
      // width, including the gap that bridges set 1 into set 2).
      let setWidth = 0;
      for (let i = 0; i < setCount; i++) setWidth += items[i].getBoundingClientRect().width;
      const cs = getComputedStyle(track);
      const gap = parseFloat(cs.columnGap || cs.gap || "0") || 0;
      setWidth += gap * setCount;
      if (setWidth > 0) {
        track.style.setProperty("--marquee-duration", `${setWidth / pxPerSecond}s`);
      }
    };

    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(track);
    // Re-measure once each not-yet-loaded image finishes (widths change on load).
    const imgs = Array.from(track.querySelectorAll("img"));
    imgs.forEach((im) => {
      if (!im.complete) im.addEventListener("load", apply, { once: true });
    });
    return () => ro.disconnect();
  }, [setCount, pxPerSecond]);

  const imgClass =
    variant === "dark"
      ? `${itemHeight} brightness-0 invert opacity-90`
      : `${itemHeight}`;

  // Provisional pace until the client measurement runs (server-rendered so the
  // strip animates from first paint). Replaced on mount by the measured value.
  const provisionalDuration = `${setCount * PROVISIONAL_SECONDS_PER_LOGO}s`;

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className="marquee-mask overflow-hidden"
    >
      <ul
        ref={trackRef}
        className="marquee-track flex w-max items-center gap-7 sm:gap-9 py-2"
        style={{ ["--marquee-duration" as string]: provisionalDuration } as React.CSSProperties}
      >
        {[...logos, ...logos].map((logo, i) => {
          const isAriaVisible = i < logos.length;
          const img = (
            <Image
              src={logo.src}
              alt={isAriaVisible ? `${logo.name} logo` : ""}
              width={logo.w}
              height={logo.h}
              className={`${imgClass} w-auto object-contain`}
              // §Pascal-2026-05-08 v8: bumped maxHeight 3rem → 4rem so logos
              // (featured-in, partners, published-in marquees) read bigger and
              // pull more weight as social proof.
              style={{ width: "auto", height: "100%", maxHeight: "4rem" }}
            />
          );
          return (
            <li key={`${logo.name}-${i}`} aria-hidden={!isAriaVisible}>
              {logo.href ? (
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={isAriaVisible ? `${logo.name} (opens in new tab)` : undefined}
                  tabIndex={isAriaVisible ? 0 : -1}
                  className="block"
                >
                  {img}
                </a>
              ) : (
                img
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
