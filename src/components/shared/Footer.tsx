import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/shared/NewsletterForm";
import Stars from "@/components/shared/Stars";
import { SITE } from "@/lib/constants";

// Phase 1h (2026-05-13): footer reorganized to 4 columns — Brand + 3 nav
// columns (For Practitioners, Resources, Company). Audience pages, Blog,
// Podcast, Reviews, FAQ moved off the trimmed primary header (Phase 1d)
// into here. Legal links collapsed into Company. Social icons moved up
// into the Brand column; the bottom row keeps only copyright. Logo swapped
// to the primary-with-tagline transparent mark (Phase 1g).

const COLS = [
  {
    heading: "For Practitioners & Clinics",
    links: [
      { label: "For Physical Therapists", href: "/for/physical-therapists" },
      { label: "For Athletic Trainers", href: "/for/athletic-trainers" },
      { label: "For Strength Coaches", href: "/for/strength-coaches" },
      { label: "Train Your Team", href: "/train-your-team" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Podcast", href: "/podcast" },
      { label: "Reviews", href: "/reviews" },
      { label: "Press", href: "/press" },
      { label: "FAQ", href: "/faq" },
      { label: "Research", href: "/research" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Consulting", href: "/consultation" },
      { label: "Contact", href: "/contact" },
      { label: "Find BFR Providers", href: "https://bfrproviders.com", external: true as const },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
] as const;

const SOCIAL = [
  { label: "Instagram", href: SITE.social.instagram, icon: "instagram" },
  { label: "Facebook", href: SITE.social.facebook, icon: "facebook" },
  { label: "YouTube", href: SITE.social.youtube, icon: "youtube" },
  { label: "TikTok", href: SITE.social.tiktok, icon: "tiktok" },
  { label: "X / Twitter", href: SITE.social.twitter, icon: "x" },
] as const;

// `showNewsletter` defaults to true: every page carrying the shared footer gets
// the signup. /certification passes false (see the band comment below).
export default function Footer({ showNewsletter = true }: { showNewsletter?: boolean } = {}) {
  return (
    <footer className="navy-field">
      <div className="container-rail py-16 lg:py-20">
        {/* Newsletter band (2026-07-30). Sits above the nav columns because four
            fields do not fit a footer column, and burying the signup in one
            would make it invisible. Placed in the SHARED footer only, so the
            pages with their own footers exclude themselves: /bfr-certification
            (CertFooter) and /the-loading-wall + thank-you (LoadingWallFooter).
            Pascal 2026-07-30 also ruled it OFF /certification, the main sales
            page, whose only job while scrolling is selling the certification;
            that page passes showNewsletter={false} via VariantPage. */}
        {showNewsletter && (
        <div className="mb-14 grid gap-8 border-b border-white/10 pb-14 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            {/* Copy is Pascal's, locked 2026-07-30. Problem/CTA/result per the
                brand-guide StoryBrand structure; the ask ("Join...") lives in the
                copy, the button just executes it. Two earlier drafts were rejected
                for inventing reader problems that were stated as fact. */}
            <p className="eyebrow-light">Newsletter</p>
            <h2 className="mt-4 font-display text-display-md text-white text-balance">
              STAY UP-TO-DATE IN BFR
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
              Join The BFR Pros email newsletter to get all the latest happenings in the
              space of BFR, plus important information related to The BFR Pros. Written by
              Dr. Nicholas Rolnick, author of 74 peer-reviewed BFR publications. Roughly
              once every other week.
            </p>
          </div>
          <div className="md:col-span-7">
            <NewsletterForm />
          </div>
        </div>
        )}

        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Image
              src="/images/logos/the-bfr-pros-logo-primary-transparent-background.png"
              alt={`${SITE.brandName} logo`}
              width={220}
              height={88}
              className="h-20 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/75">
              Equipment-agnostic BFR certification built on 74 peer-reviewed publications by the lead instructor,{" "}
              <span className="text-white">Dr. Nicholas Rolnick</span>.
            </p>
            <div className="mt-7 flex flex-col gap-2 text-sm text-white/80">
              <a href={`tel:${SITE.phone}`} className="hover:text-white">
                {SITE.phoneDisplay}
              </a>
              <a href={`mailto:${SITE.contactEmail}`} className="hover:text-white">
                {SITE.contactEmail}
              </a>
              <p>{SITE.city}, {SITE.region}</p>
            </div>
            <div className="mt-6">
              <Stars variant="dark" size="sm" linkTo="/reviews" />
            </div>
            <div className="mt-7 flex items-center gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/50 hover:text-white"
                >
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <nav className="md:col-span-8 grid grid-cols-1 gap-8 sm:grid-cols-3" aria-label="Footer">
            {COLS.map((col) => (
              <div key={col.heading}>
                <h3 className="small-caps-line text-white/55">{col.heading}</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/85">
                  {col.links.map((l) =>
                    "external" in l && l.external ? (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white"
                        >
                          {l.label}
                        </a>
                      </li>
                    ) : (
                      <li key={l.label}>
                        <Link href={l.href} className="hover:text-white">
                          {l.label}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-xs text-white/55">
            &copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "instagram":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
        </svg>
      );
    case "facebook":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M14 8h2.5V5H14c-2 0-3.5 1.4-3.5 3.5V11H8v3h2.5v6H14v-6h2.5l.5-3H14V8.6c0-.4.3-.6.6-.6H14z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      );
    case "youtube":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M10 9.5v5l5-2.5z" fill="currentColor" />
        </svg>
      );
    case "tiktok":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M14 4v9.5a3.5 3.5 0 1 1-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M14 4c.6 2.4 2.6 4 5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "x":
      // Real X (Twitter) brand mark, not a generic cross.
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return null;
  }
}
