import Image from "next/image";
import Link from "next/link";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import { HOME_HERO } from "@/content/home";
import { STATS } from "@/lib/constants";

// Section 2 — Homepage hero. Belief 1 (modality value at 30% load) leads.
// Belief 5 (research source) echoes in the eyebrow + subhead. The certification
// is positioned as the "how," not the headline. Server-rendered with CSS
// keyframe animation so SSR HTML matches client and the fold paints fast.

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
  const microStats = [
    { value: STATS.publications, label: "publications" },
    { value: STATS.ceus, label: "CEUs" },
    { value: `${STATS.ratingValue}★`, label: `from ${STATS.reviewCount}+ reviews` },
  ];

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
            className="opacity-0 animate-fade-up mt-10 flex flex-col items-center gap-5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4"
            style={{ animationDelay: STAGGER_DELAYS[3] }}
          >
            <PrimaryCTA
              label={HOME_HERO.primaryCta}
              secondary="11.75 CEUs · 30-day guarantee"
              href="/get-certified"
              showStars={false}
              starsVariant="dark"
            />
            <Link
              href={HOME_HERO.secondaryCtaHref}
              className="btn-secondary btn-on-navy"
            >
              {HOME_HERO.secondaryCta}
            </Link>
          </div>

          <ul
            className="opacity-0 animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/80"
            style={{ animationDelay: STAGGER_DELAYS[4] }}
          >
            {microStats.map((s) => (
              <li key={s.label} className="flex items-baseline gap-2">
                <span className="font-display text-2xl text-white">{s.value}</span>
                <span className="text-white/70">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
