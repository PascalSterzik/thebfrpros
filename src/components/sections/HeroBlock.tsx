import Image from "next/image";
import type { Variant } from "@/content/variants";
import { ENROLL_URL } from "@/lib/constants";

// Hero is server-rendered. Entrance is CSS keyframe (animate-fade-up) with staggered
// delays so SSR HTML matches the client render exactly. Framer Motion is reserved for
// scroll-triggered sections below the fold (SSR-safe via whileInView).

const STAGGER_DELAYS = ["0ms", "80ms", "160ms", "240ms", "320ms"];

export default function HeroBlock({ variant }: { variant: Variant }) {
  return (
    <section className="relative overflow-hidden navy-field">
      <div className="container-rail relative pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p
              className="opacity-0 animate-fade-up small-caps-line text-white/60"
              style={{ animationDelay: STAGGER_DELAYS[0] }}
            >
              {variant.hero.eyebrow}
            </p>

            <h1
              className="opacity-0 animate-fade-up mt-6 font-display text-display-2xl text-white leading-[1.04] text-balance"
              style={{ animationDelay: STAGGER_DELAYS[1] }}
            >
              {variant.hero.headline}
            </h1>

            <p
              className="opacity-0 animate-fade-up mt-7 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
              style={{ animationDelay: STAGGER_DELAYS[2] }}
            >
              {variant.hero.subhead}
            </p>

            <div
              className="opacity-0 animate-fade-up mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: STAGGER_DELAYS[3] }}
            >
              <a
                href={ENROLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-8 !py-4 text-base"
              >
                {variant.hero.primaryCta}
              </a>
              <a href="#solution" className="btn-secondary btn-on-navy !px-7 !py-4 text-base">
                {variant.hero.secondaryCta}
              </a>
            </div>

            <dl
              className="opacity-0 animate-fade-up mt-14 grid max-w-xl grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-4"
              style={{ animationDelay: STAGGER_DELAYS[4] }}
            >
              {variant.hero.supportingStat.map((s) => (
                <div key={s.label} className="stat-block">
                  <dt className="stat-value stat-value-on-navy">{s.value}</dt>
                  <dd className="stat-label stat-label-on-navy">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            className="relative opacity-0 animate-fade-up lg:col-span-5"
            style={{ animationDelay: "200ms", animationDuration: "0.95s" }}
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[28px] ring-1 ring-white/10 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.55)]">
              <Image
                src={variant.hero.photoSrc}
                alt={variant.hero.photoAlt}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 480px"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy-deeper/40 via-transparent to-transparent"
                aria-hidden
              />
            </div>

            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[36px] bg-accent/8 blur-3xl"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
