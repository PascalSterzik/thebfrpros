import Image from "next/image";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import { HOME_HERO } from "@/content/home";

// Section 2 — Homepage hero. Belief 1 (modality value at 30% load) leads, and
// EVERY element in the section comes from the same belief layer: eyebrow
// orients on BFR + audience, headline is the science claim, subhead extends
// the science argument, CTA frames the cert as exploration (visitor doesn't
// know what BFR is yet, so "Get Certified" jumps too far down the funnel —
// "Explore the certification" lets the interested user investigate without
// pressure). Trust line names the instructor via the specific publication
// count, never a comparative superlative (Forbidden Claims, brand-guide.md).
// No secondary anchor button — the destination would be the very next
// section on scroll, so the button adds no value over scrolling.

const STAGGER_DELAYS = ["0ms", "80ms", "160ms", "240ms"];

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

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={HOME_HERO.photoSrc}
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

      <div className="container-rail relative pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="mx-auto w-full max-w-5xl text-center">
          <span
            className="opacity-0 animate-fade-up eyebrow-pill eyebrow-pill-on-navy"
            style={{ animationDelay: STAGGER_DELAYS[0] }}
          >
            {HOME_HERO.eyebrow}
          </span>

          <h1
            className="opacity-0 animate-fade-up mt-6 font-display text-display-2xl lg:text-display-3xl text-white"
            style={{ animationDelay: STAGGER_DELAYS[1] }}
          >
            <Highlighted text={HOME_HERO.headline} phrase={HOME_HERO.highlightPhrase} />
          </h1>

          <p
            className="opacity-0 animate-fade-up mt-6 mx-auto max-w-2xl subhead text-white/90"
            style={{ animationDelay: STAGGER_DELAYS[2] }}
          >
            {HOME_HERO.subhead}
          </p>

          <div
            className="opacity-0 animate-fade-up mt-10 flex flex-col items-center gap-4"
            style={{ animationDelay: STAGGER_DELAYS[3] }}
          >
            <PrimaryCTA
              label={HOME_HERO.primaryCta}
              secondary=""
              href="/get-certified"
              showStars={false}
              starsVariant="dark"
            />
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
              {HOME_HERO.trustLine}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
