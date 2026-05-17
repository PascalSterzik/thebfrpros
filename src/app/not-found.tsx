import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { SITE_MENU_LINKS } from "@/lib/menus";

// Branded 404. Next.js' default not-found just renders "This page could not
// be found." With bfrtraining.com + bloodflowrestriction.com 301-preserving
// paths into this site, most legacy URLs don't exist here, so a real volume
// of inbound traffic lands on this page. It uses the brand-locked Hero
// pattern verbatim (full-bleed background photo + navy gradient + centered
// white text + CSS fade-up stagger, server component — see
// HomeHero.tsx / WEBSITE-PROJECT.md "Hero pattern (locked)"). Only the copy
// and the CTA stack differ. No layout was invented. It does not pretend to
// be a search; it points at the two highest-value destinations.

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "That page does not exist on The BFR Pros. Head to the certification or back to the homepage.",
  robots: { index: false, follow: true },
};

const STAGGER_DELAYS = ["0ms", "80ms", "160ms", "240ms"];

export default function NotFound() {
  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <section className="relative overflow-hidden">
          <Image
            src="/images/hero/hero-banner.webp"
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
                404: Page not found
              </span>

              <h1
                className="opacity-0 animate-fade-up mt-6 font-display text-display-2xl lg:text-display-3xl text-white text-balance"
                style={{ animationDelay: STAGGER_DELAYS[1] }}
              >
                That page doesn&apos;t exist here
              </h1>

              <p
                className="opacity-0 animate-fade-up mt-6 mx-auto max-w-3xl subhead text-white/90"
                style={{ animationDelay: STAGGER_DELAYS[2] }}
              >
                You may have followed an old link from a previous version of our
                site, and most of those pages have moved. Everything that
                matters is one click away below.
              </p>

              <div
                className="opacity-0 animate-fade-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                style={{ animationDelay: STAGGER_DELAYS[3] }}
              >
                <Link href="/get-certified" className="btn-primary">
                  <span>See the certification</span>
                </Link>
                <Link href="/" className="btn-secondary btn-on-navy">
                  <span>Back to home</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
