import Image from "next/image";
import Highlighted from "@/components/shared/Highlighted";
import { ABOUT_HERO } from "@/content/about";

// /about hero. Mirrors the locked HomeHero pattern (full-bleed background
// photo + navy gradient overlay + centered text). Stage 2-3 awareness:
// no CTA, no media — the page has its own narrative below. The brand
// hero pattern is locked across every page on this site; see
// WEBSITE-PROJECT.md "Hero pattern (locked)" subsection.

const STAGGER_DELAYS = ["0ms", "80ms", "160ms"];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={ABOUT_HERO.photoSrc}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
        aria-hidden
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deeper/85 via-navy-deeper/75 to-navy/85"
      />

      <div className="container-rail relative pt-16 pb-20 lg:pt-20 lg:pb-24">
        <div className="mx-auto w-full max-w-5xl text-center">
          <span
            className="opacity-0 animate-fade-up eyebrow-pill eyebrow-pill-on-navy"
            style={{ animationDelay: STAGGER_DELAYS[0] }}
          >
            {ABOUT_HERO.eyebrow}
          </span>

          <h1
            className="opacity-0 animate-fade-up mt-6 font-display text-display-2xl lg:text-display-3xl text-white text-balance"
            style={{ animationDelay: STAGGER_DELAYS[1] }}
          >
            <Highlighted text={ABOUT_HERO.headline} phrase={ABOUT_HERO.highlight} />
          </h1>

          <p
            className="opacity-0 animate-fade-up mt-6 mx-auto max-w-3xl subhead text-white/90"
            style={{ animationDelay: STAGGER_DELAYS[2] }}
          >
            {ABOUT_HERO.subhead}
          </p>
        </div>
      </div>
    </section>
  );
}
