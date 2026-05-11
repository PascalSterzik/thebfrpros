import Image from "next/image";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import VideoPoster from "@/components/shared/VideoPoster";
import { HOME_HERO } from "@/content/home";
import { VIDEOS } from "@/lib/constants";

// Section 2 — Homepage hero. Stage-2 awareness traffic (problem-aware,
// doesn't yet know BFR is the answer). Order:
//   1. Eyebrow orienting on BFR + audience
//   2. Headline naming the practitioner's pain (verbatim avatar vocabulary)
//   3. Subhead answering "what is BFR" briefly with mainstream proof
//   4. Video: Nick covering common questions about BFR (Stage-2 friendly,
//      no cert pitch in the video itself)
//   5. Primary CTA + 4.8-stars-from-767+-reviews below — the visitor has
//      now been oriented + watched Nick's intro, so a soft exploratory
//      CTA to /get-certified is appropriate readiness (no hard "Get
//      Certified" verb). Same destination + same label as the final
//      CTA at the bottom of the page for journey consistency.

const STAGGER_DELAYS = ["0ms", "80ms", "160ms", "240ms", "320ms"];

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

      <div className="container-rail relative pt-16 pb-20 lg:pt-20 lg:pb-24">
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
            className="opacity-0 animate-fade-up mt-6 mx-auto max-w-3xl subhead text-white/90"
            style={{ animationDelay: STAGGER_DELAYS[2] }}
          >
            {HOME_HERO.subhead}
          </p>

          <div
            className="opacity-0 animate-fade-up mt-10 mx-auto w-full max-w-3xl"
            style={{ animationDelay: STAGGER_DELAYS[3], animationDuration: "0.95s" }}
          >
            <div className="relative w-full overflow-hidden rounded-lg bg-black/40 ring-1 ring-white/15 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.6)]">
              <VideoPoster
                posterSrc="/images/posters/hero.jpg"
                videoSrc={VIDEOS.homepageHero}
                title="Dr. Nicholas Rolnick covers common questions about blood flow restriction training"
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          </div>

          <div
            className="opacity-0 animate-fade-up mt-9 flex justify-center"
            style={{ animationDelay: STAGGER_DELAYS[4] }}
          >
            <PrimaryCTA
              label="See the certification"
              secondary=""
              href="/get-certified"
              starsVariant="dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
