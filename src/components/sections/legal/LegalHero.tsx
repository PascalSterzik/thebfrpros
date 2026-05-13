import Image from "next/image";

// Legal-page hero. Locked HomeHero pattern: full-bleed background photo +
// navy gradient overlay + centered text. Slightly compact compared to a
// sales hero because these are utility pages, no media or CTA, and the
// "last updated" line replaces the subhead.

const STAGGER_DELAYS = ["0ms", "80ms", "160ms"];
const BACKDROP_SRC = "/images/hero/hero-banner.webp";

export default function LegalHero({
  eyebrow,
  title,
  lastUpdated,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
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

      <div className="container-rail relative pt-14 pb-16 lg:pt-16 lg:pb-20">
        <div className="mx-auto w-full max-w-3xl text-center">
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
            {title}
          </h1>

          <p
            className="opacity-0 animate-fade-up mt-6 text-sm uppercase tracking-[0.18em] text-white/70 font-semibold"
            style={{ animationDelay: STAGGER_DELAYS[2] }}
          >
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>
    </section>
  );
}
