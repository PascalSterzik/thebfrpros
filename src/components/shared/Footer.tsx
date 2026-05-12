import Image from "next/image";
import Link from "next/link";
import Stars from "@/components/shared/Stars";
import { ENROLL_URL, SITE } from "@/lib/constants";

const COLS = [
  {
    heading: "Program",
    links: [
      { label: "Get Certified", href: ENROLL_URL, external: true },
      { label: "Curriculum", href: "#curriculum" },
      { label: "CEU Credits", href: "#ceus" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Dr. Rolnick", href: "/about/nicholas-rolnick" },
      { label: "Dr. Licameli", href: "/about/nicholas-licameli" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Reviews", href: "/reviews" },
      { label: "Research", href: "/research" },
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
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

export default function Footer() {
  return (
    <footer className="navy-field">
      <div className="container-rail py-16 lg:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Image
              src="/images/logos/bfr-pros-secondary.png"
              alt={`${SITE.brandName} logo`}
              width={200}
              height={56}
              className="h-14 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/75">
              Equipment-agnostic BFR certification built on 72+ peer-reviewed publications by the lead instructor,{" "}
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
              <Stars variant="dark" size="sm" />
            </div>
          </div>

          <nav className="md:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-4" aria-label="Footer">
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

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/55">
            &copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
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
