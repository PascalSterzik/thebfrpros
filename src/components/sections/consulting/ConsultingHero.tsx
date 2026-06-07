import Image from "next/image";
import { CONSULTING_HERO } from "@/content/consulting";

// /consulting hero. Brand-locked hero pattern (server component, CSS fade-up
// stagger, full-bleed bg photo + navy gradient, centered single column). This
// is a Stage 4-5 offer page. SINGLE CTA: "Start" scrolls to the qualification
// form, which is the ONLY path to Nick's calendar, so every booking is
// qualified first. Deliberately NO direct Cal.com link here, that would let
// visitors bypass the form. Credibility-matched visual = a portrait of Nick.

const STAGGER_DELAYS = ["0ms", "80ms", "160ms", "240ms", "320ms", "400ms"];

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

export default function ConsultingHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={CONSULTING_HERO.bgSrc}
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

      <div className="container-rail relative pt-16 pb-20 lg:pt-20 lg:pb-24">
        <div className="mx-auto w-full max-w-5xl text-center">
          <span
            className="opacity-0 animate-fade-up eyebrow-pill eyebrow-pill-on-navy"
            style={{ animationDelay: STAGGER_DELAYS[0] }}
          >
            {CONSULTING_HERO.eyebrow}
          </span>

          <h1
            className="opacity-0 animate-fade-up mt-6 font-display text-display-2xl lg:text-display-3xl text-white text-balance"
            style={{ animationDelay: STAGGER_DELAYS[1] }}
          >
            <Highlighted text={CONSULTING_HERO.headline} phrase={CONSULTING_HERO.highlightPhrase} />
          </h1>

          <p
            className="opacity-0 animate-fade-up mt-5 text-base font-semibold text-white/85 lg:text-lg"
            style={{ animationDelay: STAGGER_DELAYS[2] }}
          >
            {CONSULTING_HERO.credentialsLine}
          </p>

          <p
            className="opacity-0 animate-fade-up mt-6 mx-auto max-w-3xl subhead text-white/90"
            style={{ animationDelay: STAGGER_DELAYS[3] }}
          >
            {CONSULTING_HERO.subhead}
          </p>

          <div
            className="opacity-0 animate-fade-up mt-10 flex justify-center"
            style={{ animationDelay: STAGGER_DELAYS[4] }}
          >
            <div className="relative aspect-square w-full max-w-[16rem] overflow-hidden rounded-lg ring-1 ring-white/15 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.6)]">
              <Image
                src={CONSULTING_HERO.photoSrc}
                alt={CONSULTING_HERO.photoAlt}
                fill
                sizes="256px"
                className="object-cover"
              />
            </div>
          </div>

          <div
            className="opacity-0 animate-fade-up mt-9 flex justify-center"
            style={{ animationDelay: STAGGER_DELAYS[5] }}
          >
            <a href="#consulting-form" className="btn-primary">
              <span>{CONSULTING_HERO.primaryCta}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
