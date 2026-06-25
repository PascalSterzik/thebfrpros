import Image from "next/image";
import Highlighted from "@/components/shared/Highlighted";
import { TEAM_TRAINING_HERO } from "@/content/team-training";

// /train-your-team hero. Brand-locked hero pattern (server component, CSS
// fade-up stagger, full-bleed bg photo + navy gradient, centered single column).
// Self-IDed clinic-decision-maker traffic, so the hero is direct about the
// category. SINGLE CTA opens the qualify form via the #start hash (the form is
// the only path to the calendar). No portrait/credentials line: the page leads
// with the team idea, not the instructor. Background is the brand-default hero
// banner until a cleared past-workshop photo is supplied (open item §11.1/§G.2).

const STAGGER_DELAYS = ["0ms", "80ms", "160ms", "240ms"];

export default function TeamTrainingHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={TEAM_TRAINING_HERO.bgSrc}
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
            {TEAM_TRAINING_HERO.eyebrow}
          </span>

          <h1
            className="opacity-0 animate-fade-up mt-6 font-display text-display-2xl lg:text-display-3xl text-white text-balance"
            style={{ animationDelay: STAGGER_DELAYS[1] }}
          >
            <Highlighted text={TEAM_TRAINING_HERO.headline} phrase={TEAM_TRAINING_HERO.highlight} />
          </h1>

          <p
            className="opacity-0 animate-fade-up mt-6 mx-auto max-w-3xl subhead text-white/90"
            style={{ animationDelay: STAGGER_DELAYS[2] }}
          >
            {TEAM_TRAINING_HERO.subhead}
          </p>

          <div
            className="opacity-0 animate-fade-up mt-10 flex justify-center"
            style={{ animationDelay: STAGGER_DELAYS[3] }}
          >
            <a href="#start" className="btn-primary">
              <span>{TEAM_TRAINING_HERO.primaryCta}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
