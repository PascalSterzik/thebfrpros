import Image from "next/image";
import { HOME_HERO } from "@/content/home";

// Section 2 — Homepage hero. Stage-2 awareness traffic (problem-aware,
// doesn't know BFR is the answer yet) lands here. The hero hooks on the
// clinical scenario the practitioner already recognizes ("heavy loading
// off the table" — direct avatar vocabulary), names BFR as the protocol
// that answers it, and earns credibility with the institutions adopting
// it. NO CTA: a "Get Certified" or "Explore the certification" ask at
// Stage 2 is Stage-4 framing aimed at Stage-2 traffic and signals "this
// site is selling me." See brand-guide.md Copy & Customer Journey
// Principles for the full reasoning. The first cert-pointing CTA appears
// in Course Overview (section 8), after Beliefs 1, 3, 4, 5 are installed.

const STAGGER_DELAYS = ["0ms", "80ms", "160ms"];

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

      <div className="container-rail relative pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="mx-auto w-full max-w-5xl text-center">
          <span
            className="opacity-0 animate-fade-up eyebrow-pill eyebrow-pill-on-navy"
            style={{ animationDelay: STAGGER_DELAYS[0] }}
          >
            {HOME_HERO.eyebrow}
          </span>

          <h1
            className="opacity-0 animate-fade-up mt-6 font-display text-display-2xl lg:text-display-3xl text-white text-balance"
            style={{ animationDelay: STAGGER_DELAYS[1] }}
          >
            <Highlighted text={HOME_HERO.headline} phrase={HOME_HERO.highlightPhrase} />
          </h1>

          <p
            className="opacity-0 animate-fade-up mt-7 mx-auto max-w-3xl subhead text-white/90"
            style={{ animationDelay: STAGGER_DELAYS[2] }}
          >
            {HOME_HERO.subhead}
          </p>
        </div>
      </div>
    </section>
  );
}
