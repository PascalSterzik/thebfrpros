import type { Metadata } from "next";

import LoadingWallHeader from "@/components/sections/loading-wall/LoadingWallHeader";
import LoadingWallFooter from "@/components/sections/loading-wall/LoadingWallFooter";
import { LOADING_WALL, LOADING_WALL_THANK_YOU } from "@/content/loading-wall";

// /the-loading-wall/thank-you - confirmation + instant delivery. Same stripped
// layout (logo only). Top-of-funnel still: no tripwire, no cert CTA. The
// download button AND MailerLite email 1 both point at the self-hosted PDF.
// robots noindex, follow; excluded from sitemap; not in SITE_MENU_LINKS.

export const metadata: Metadata = {
  title: LOADING_WALL_THANK_YOU.meta.title,
  description: LOADING_WALL_THANK_YOU.meta.description,
  robots: { index: false, follow: true },
  alternates: { canonical: LOADING_WALL_THANK_YOU.meta.canonical },
};

export default function LoadingWallThankYouPage() {
  const ty = LOADING_WALL_THANK_YOU;

  return (
    <>
      <LoadingWallHeader logoAlt={LOADING_WALL.header.logoAlt} />

      <main id="main" className="navy-field">
        <section className="section-wrap">
          <div className="container-narrow">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow-light">{ty.eyebrow}</p>

              <h1 className="mt-5 font-display text-display-2xl lg:text-display-3xl text-white text-balance">
                {ty.headline}
              </h1>

              <p className="mt-6 mx-auto max-w-xl text-lg leading-relaxed text-white/90">
                {ty.body}
              </p>

              <div className="mt-9 flex justify-center">
                <a
                  href={ty.downloadHref}
                  download
                  className="inline-flex w-full max-w-md items-center justify-center rounded-lg bg-accent px-8 py-4 font-body text-base font-semibold uppercase tracking-wide text-white shadow-[0_18px_36px_-14px_rgba(173,26,39,0.6)] transition hover:bg-accent-deeper"
                >
                  {ty.button}
                </a>
              </div>

              <p className="mt-7 mx-auto max-w-xl text-sm leading-relaxed text-white/70">
                {ty.belowButton}
              </p>
            </div>
          </div>
        </section>
      </main>

      <LoadingWallFooter
        copyright={LOADING_WALL.footer.copyright}
        privacyLabel={LOADING_WALL.footer.privacyLabel}
        privacyHref={LOADING_WALL.footer.privacyHref}
      />
    </>
  );
}
