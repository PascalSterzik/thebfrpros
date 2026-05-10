import Image from "next/image";
import type { Variant } from "@/content/variants";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import VideoPoster from "@/components/shared/VideoPoster";
import { VIDEOS } from "@/lib/constants";

// §Pascal-2026-05-08 v7: marker-stroke highlight on the most kinetic phrase in
// the headline. Falls back to no-highlight if the phrase isn't present so v1/v2
// don't break.
function Highlighted({ text, phrase }: { text: string; phrase: string }) {
  const i = text.indexOf(phrase);
  if (i === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className="underline-accent">{phrase}</span>
      {text.slice(i + phrase.length)}
    </>
  );
}

// Hero is server-rendered. Entrance animation is CSS keyframe (animate-fade-up)
// so SSR HTML matches client render and the fold paints fast.
//
// §Pascal-2026-05-08: hero uses the brand banner photo as the background, with
// a navy overlay for legibility. Wider container on desktop. Stacked centered
// content (eyebrow → H1 → subhead → video → CTA → stars). Subhead simplified.

const STAGGER_DELAYS = ["0ms", "80ms", "160ms", "240ms", "320ms", "400ms"];

export default function HeroBlock({ variant }: { variant: Variant }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background photo + brand-tinted overlay so headlines stay legible */}
      <Image
        src="/images/hero/hero-banner.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
        aria-hidden
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deeper/85 via-navy-deeper/75 to-navy/85"
      />

      <div className="container-rail relative pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="mx-auto w-full max-w-5xl text-center">
          <span
            className="opacity-0 animate-fade-up eyebrow-pill eyebrow-pill-on-navy"
            style={{ animationDelay: STAGGER_DELAYS[0] }}
          >
            {variant.hero.eyebrow}
          </span>

          <h1
            className="opacity-0 animate-fade-up mt-5 font-display text-display-2xl lg:text-display-3xl text-white"
            style={{ animationDelay: STAGGER_DELAYS[1] }}
          >
            <Highlighted text={variant.hero.headline} phrase="already asking" />
          </h1>

          <p
            className="opacity-0 animate-fade-up mt-6 mx-auto max-w-2xl subhead text-white/85"
            style={{ animationDelay: STAGGER_DELAYS[2] }}
          >
            {variant.hero.subhead}
          </p>

          <div
            className="opacity-0 animate-fade-up mt-10 mx-auto w-full max-w-3xl"
            style={{ animationDelay: STAGGER_DELAYS[3], animationDuration: "0.95s" }}
          >
            <div className="relative w-full overflow-hidden rounded-lg bg-black/40 ring-1 ring-white/15 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.6)]">
              <VideoPoster
                posterSrc="/images/posters/hero.jpg"
                videoSrc={VIDEOS.coursePackagePromo}
                title="The Complete BFR Certification course package promo"
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          </div>

          <div
            className="opacity-0 animate-fade-up mt-9 flex justify-center"
            style={{ animationDelay: STAGGER_DELAYS[4] }}
          >
            <PrimaryCTA starsVariant="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
