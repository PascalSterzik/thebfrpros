import type { Variant } from "@/content/variants";
import { ENROLL_URL, VIDEOS } from "@/lib/constants";

// Hero is server-rendered. Entrance animation is CSS keyframe (animate-fade-up) so
// SSR HTML matches client render and the fold paints fast. Framer Motion is reserved
// for scroll-triggered sections below the fold.
//
// Layout per §D.3: above-the-fold density on mobile + desktop. Stats moved out into
// the dedicated Stats section (DedicatedStats) so the hero can stay focused on
// eyebrow + headline + subhead + video + CTA.

const STAGGER_DELAYS = ["0ms", "80ms", "160ms", "240ms", "320ms"];

export default function HeroBlock({ variant }: { variant: Variant }) {
  return (
    <section className="relative overflow-hidden navy-field">
      <div className="container-rail relative pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left column: copy + CTAs */}
          <div className="lg:col-span-6 xl:col-span-6">
            <span
              className="opacity-0 animate-fade-up eyebrow-pill eyebrow-pill-on-navy"
              style={{ animationDelay: STAGGER_DELAYS[0] }}
            >
              {variant.hero.eyebrow}
            </span>

            <h1
              className="opacity-0 animate-fade-up mt-5 font-display text-display-2xl text-white leading-[1.04] text-balance"
              style={{ animationDelay: STAGGER_DELAYS[1] }}
            >
              {variant.hero.headline}
            </h1>

            <p
              className="opacity-0 animate-fade-up mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
              style={{ animationDelay: STAGGER_DELAYS[2] }}
            >
              {variant.hero.subhead}
            </p>

            <div
              className="opacity-0 animate-fade-up mt-7 flex flex-wrap items-center gap-3 sm:gap-4"
              style={{ animationDelay: STAGGER_DELAYS[3] }}
            >
              <a
                href={ENROLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-7 !py-3.5 text-base w-full sm:w-auto justify-center"
              >
                {variant.hero.primaryCta}
              </a>
              <a
                href="#solution"
                className="btn-secondary btn-on-navy !px-6 !py-3.5 text-base w-full sm:w-auto justify-center"
              >
                {variant.hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* Right column: course package promo video, 16:9, navy frame */}
          <div
            className="relative opacity-0 animate-fade-up lg:col-span-6 xl:col-span-6"
            style={{ animationDelay: "200ms", animationDuration: "0.95s" }}
          >
            <div className="relative w-full overflow-hidden rounded-2xl bg-black/40 ring-1 ring-white/15 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.55)]">
              <div className="relative pb-[56.25%]">
                <iframe
                  src={VIDEOS.coursePackagePromo}
                  title="The Complete BFR Certification: course package promo"
                  loading="lazy"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>

            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[36px] bg-accent/10 blur-3xl"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
