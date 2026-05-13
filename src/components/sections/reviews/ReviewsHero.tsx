import Image from "next/image";
import Stars from "@/components/shared/Stars";
import Highlighted from "@/components/shared/Highlighted";
import { REVIEWS_HERO, REVIEWS_HERO_EXCERPTS } from "@/content/reviews";

// /reviews hero. Locked HomeHero pattern: full-bleed background + navy
// gradient + centered text. Stars under the headline; subhead; then a
// Phase 2c (2026-05-13) 3-excerpt row of punchy 8-15 word fragments from
// the top long-form testimonials. Mobile shows the first excerpt only;
// desktop spans 3 columns. King-Kong-style "what they said, before
// they scroll" pattern.

const STAGGER_DELAYS = ["0ms", "80ms", "160ms", "240ms", "320ms"];
const BACKDROP_SRC = "/images/hero/hero-banner.webp";

export default function ReviewsHero() {
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
            {REVIEWS_HERO.eyebrow}
          </span>
          <h1
            className="opacity-0 animate-fade-up mt-6 font-display text-display-2xl lg:text-display-3xl text-white text-balance"
            style={{ animationDelay: STAGGER_DELAYS[1] }}
          >
            <Highlighted text={REVIEWS_HERO.headline} phrase={REVIEWS_HERO.highlight} />
          </h1>
          <div
            className="opacity-0 animate-fade-up mt-7 flex justify-center"
            style={{ animationDelay: STAGGER_DELAYS[2] }}
          >
            <Stars variant="dark" size="md" />
          </div>
          <p
            className="opacity-0 animate-fade-up mt-6 mx-auto max-w-3xl subhead text-white/90"
            style={{ animationDelay: STAGGER_DELAYS[3] }}
          >
            {REVIEWS_HERO.subhead}
          </p>
        </div>

        <ul
          className="opacity-0 animate-fade-up mt-10 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-3 mx-auto max-w-5xl"
          style={{ animationDelay: STAGGER_DELAYS[4] }}
        >
          {REVIEWS_HERO_EXCERPTS.map((ex, i) => (
            <li
              key={ex.name}
              className={`rounded-lg border border-white/15 bg-white/5 p-5 text-left backdrop-blur-sm ${i > 0 ? "hidden sm:block" : ""}`}
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={ex.photo}
                  alt={ex.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-white/30"
                />
              </div>
              <p className="text-white/95 text-base leading-snug text-center">
                &ldquo;{ex.fragment}&rdquo;
              </p>
              <p className="mt-3 small-caps-line text-white/65 text-center">
                {ex.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
