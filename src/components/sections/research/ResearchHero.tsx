import Image from "next/image";
import Highlighted from "@/components/shared/Highlighted";

// Generic research-page hero, reused by /research and /research/publications.
// Locked HomeHero pattern: full-bleed background + navy gradient + centered text.

const STAGGER_DELAYS = ["0ms", "80ms", "160ms"];
const BACKDROP_SRC = "/images/hero/hero-banner.webp";

export default function ResearchHero({
  eyebrow,
  headline,
  highlight,
  subhead,
}: {
  eyebrow: string;
  headline: string;
  highlight?: string;
  subhead: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={BACKDROP_SRC}
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
            {eyebrow}
          </span>
          <h1
            className="opacity-0 animate-fade-up mt-6 font-display text-display-2xl lg:text-display-3xl text-white text-balance"
            style={{ animationDelay: STAGGER_DELAYS[1] }}
          >
            <Highlighted text={headline} phrase={highlight} />
          </h1>
          <p
            className="opacity-0 animate-fade-up mt-6 mx-auto max-w-3xl subhead text-white/90"
            style={{ animationDelay: STAGGER_DELAYS[2] }}
          >
            {subhead}
          </p>
        </div>
      </div>
    </section>
  );
}
