import type { Metadata } from "next";
import Image from "next/image";

import LoadingWallHeader from "@/components/sections/loading-wall/LoadingWallHeader";
import LoadingWallFooter from "@/components/sections/loading-wall/LoadingWallFooter";
import OptInForm from "@/components/sections/loading-wall/OptInForm";
import OptInTrigger from "@/components/sections/loading-wall/OptInTrigger";
import { OPT_IN_ANCHOR, OPT_IN_SOURCES } from "@/components/sections/loading-wall/optInHash";
import Highlighted from "@/components/shared/Highlighted";
import { LOADING_WALL } from "@/content/loading-wall";

// /the-loading-wall - single-purpose opt-in (squeeze) page for the free lead
// magnet. Built to the proven Sabri Suby "Super High Converting Opt-In Page"
// template, NOT the website's brand-hero pattern (Pascal 2026-06-29: this is a
// standalone squeeze page, the website's center/hero conventions do not apply,
// follow the proven template). Clean white surface, centered, form-led; one
// conversion = the email -> MailerLite group -> guide. Copy is VERBATIM from
// content/loading-wall.ts (the locked copy doc, headline Option A); this file
// only lays it out.
//
// §Pascal-2026-08-08: the 2026-06-29 decision above still governs STRUCTURE
// (no nav, white surface, centered, form above the fold). It does NOT govern
// the visual system. Pascal: the page "looks like a template ... doesn't look
// on brand". So the site's type scale, eyebrow pill and <Highlighted> red-wash
// marker are now applied on top of the Suby structure: hero H1 at the site
// hero scale (display-2xl/3xl), section H2s at the site section scale
// (display-xl), and four highlighted phrases Pascal picked by hand.
//
// §Pascal-2026-08-08 (later, same day): ONE form on the page, in the hero.
// Every other CTA (sticky header, after the hook, after the report, final CTA)
// is a plain anchor that scrolls to it. A modal version was built first and
// then dropped, Pascal: "if we keep the form on the page, we don't need the
// pop-up". OptInModal.tsx is left in the tree unmounted, same convention as
// StickyCTABar.tsx, so it can come back with a one-line restore.
//
// SEO: robots noindex, follow (paid/owned-traffic LP, not an SEO asset).
// Excluded from src/app/sitemap.ts and never added to SITE_MENU_LINKS.

export const metadata: Metadata = {
  title: LOADING_WALL.meta.title,
  description: LOADING_WALL.meta.description,
  robots: { index: false, follow: true },
  alternates: { canonical: LOADING_WALL.meta.canonical },
  openGraph: {
    title: LOADING_WALL.meta.title,
    description: LOADING_WALL.meta.description,
    url: LOADING_WALL.meta.canonical,
    type: "website",
  },
};

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="mt-0.5 h-5 w-5 flex-none text-navy"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" aria-hidden className="h-4 w-4 text-amber-400" fill="currentColor">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79L1.58 7.62l5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function LoadingWallPage() {
  const { hero, hook, report, testimonials, trustBar, finalCta, header, footer } = LOADING_WALL;

  return (
    <>
      <LoadingWallHeader logoAlt={header.logoAlt} cta={header.cta} />

      <main id="main" className="bg-white">
        {/* ABOVE THE FOLD - eyebrow / headline / subhead / form, centered on white */}
        <section className="border-b border-line">
          <div className="container-narrow pt-10 pb-12 lg:pt-12 lg:pb-16">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow-pill">{hero.eyebrow}</span>

              <h1 className="mt-6 font-display text-display-2xl lg:text-display-3xl text-balance">
                <Highlighted text={hero.headline} phrase={hero.highlight} />
              </h1>

              <p className="subhead mt-5 mx-auto max-w-2xl text-muted">{hero.subhead}</p>

              {/* Zero-height jump targets, one per CTA below. They all land on
                  the form, but each leaves its own hash so OptInForm can tell
                  which button sent the visitor. scroll-mt clears the 60px
                  sticky header, which would otherwise cover the form on
                  arrival. */}
              {OPT_IN_SOURCES.map((s) => (
                <span key={s} id={`${OPT_IN_ANCHOR}-${s}`} className="block scroll-mt-20" />
              ))}

              <div className="mt-8 mx-auto w-full max-w-xl rounded-lg border border-line bg-white p-6 shadow-navy-lg sm:p-8">
                <OptInForm
                  idPrefix="hero"
                  cta={hero.cta}
                  microcopy={hero.microcopy}
                  location="loading-wall-hero"
                />
              </div>
            </div>
          </div>
        </section>

        {/* EMOTIONAL HOOK */}
        <section className="py-12 lg:py-16">
          <div className="container-narrow">
            <div className="mx-auto max-w-2xl space-y-5 text-left">
              {hook.paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-ink/90">
                  {p}
                </p>
              ))}

              {/* First CTA after the hero. The hook closes on "the method that
                  is", so the ask lands while the reader is still in the pain. */}
              <div className="pt-3">
                <OptInTrigger label={hook.cta} source="hook" />
              </div>
            </div>
          </div>
        </section>

        {/* REPORT - intro line + report-title callout, then cover (left) + 7 bullets (right) */}
        <section className="cream-field py-14 lg:py-20">
          <div className="container-rail">
            <p className="mx-auto max-w-3xl text-center text-lg font-semibold leading-relaxed text-navy">
              {hook.introLine}
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-center text-xl font-semibold leading-snug text-ink lg:text-2xl">
              &ldquo;{report.calloutTitle}&rdquo;
            </p>

            <div className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
              <div className="mx-auto w-full max-w-[300px] lg:max-w-[340px]">
                <Image
                  src={report.coverSrc}
                  alt={report.coverAlt}
                  width={888}
                  height={1197}
                  sizes="(max-width: 1024px) 300px, 340px"
                  className="h-auto w-full drop-shadow-2xl"
                  priority
                />
              </div>

              <div>
                {/* Sized display-md/lg rather than the display-xl section
                    scale: this heading sits in the right column of a two-column
                    grid beside the 340px cover, so the full section scale would
                    crowd it. */}
                <p className="font-display uppercase text-display-md lg:text-display-lg text-navy">
                  <Highlighted text={report.bulletsIntro} phrase={report.bulletsIntroHighlight} />
                </p>
                <ul className="mt-6 space-y-4">
                  {report.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckIcon />
                      <p className="text-base leading-relaxed text-ink/90">
                        <span className="font-semibold text-navy">{b.strong}</span> {b.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mx-auto mt-12 max-w-3xl border-t border-line pt-8">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
                <Image
                  src={report.authorImageSrc}
                  alt={report.authorImageAlt}
                  width={400}
                  height={400}
                  sizes="(max-width: 640px) 160px, 176px"
                  className="h-40 w-40 flex-none rounded-lg object-cover shadow-navy-md ring-1 ring-line sm:h-44 sm:w-44"
                />
                <p className="text-left text-base leading-relaxed text-muted">
                  {report.credibility}
                </p>
              </div>

              {/* Second CTA. The reader has now seen what is inside the guide
                  and who wrote it, which is the peak of this section. */}
              <div className="mt-8 text-center">
                <OptInTrigger label={report.cta} source="report" />
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL PANEL */}
        <section className="py-14 lg:py-20">
          <div className="container-rail">
            <h2 className="text-center font-display text-display-xl text-balance">
              <Highlighted text={testimonials.heading} phrase={testimonials.highlight} />
            </h2>
            <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-3">
              {testimonials.items.map((t) => (
                <figure
                  key={t.name}
                  className="flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-navy-sm"
                >
                  <StarRow />
                  <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink/90">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-5">
                    <span className="block font-semibold text-navy">{t.name}</span>
                    <span className="block text-sm text-muted">{t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST BAR - Dr. Rolnick personal media features (author credibility).
            White background so the white-bg logo files blend in (no weird boxes). */}
        <section className="border-t border-line bg-white py-12 lg:py-16">
          <div className="container-rail">
            <p className="small-caps-line text-center text-muted">{trustBar.heading}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-7">
              {trustBar.logos.map((logo) => (
                <span key={logo.alt} className="relative block h-9 w-28 opacity-80 grayscale sm:h-10 sm:w-32">
                  <Image src={logo.src} alt={logo.alt} fill sizes="128px" className="object-contain" />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA - button into the modal (was a second inline form) */}
        <section className="border-t border-line py-14 lg:py-20">
          <div className="container-narrow">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-center font-display text-display-xl text-balance">
                <Highlighted text={finalCta.heading} phrase={finalCta.highlight} />
              </h2>
              <div className="mt-6 space-y-4 text-left">
                {finalCta.body.map((p, i) => (
                  <p key={i} className="text-lg leading-relaxed text-ink/90">
                    {p}
                  </p>
                ))}
              </div>

              {/* §Pascal-2026-08-08: was a second copy of the 224px form
                  block. Now a button into the modal, so the page carries one
                  form, not two. */}
              <div className="mt-9 text-center">
                <OptInTrigger label={finalCta.cta} source="final-cta" />
                <p className="mt-4 text-xs leading-relaxed text-muted">{finalCta.microcopy}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LoadingWallFooter
        copyright={footer.copyright}
        privacyLabel={footer.privacyLabel}
        privacyHref={footer.privacyHref}
      />

    </>
  );
}
