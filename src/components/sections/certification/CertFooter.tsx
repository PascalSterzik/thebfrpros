import Link from "next/link";
import { CERTIFICATION } from "@/content/certification";
import { SITE } from "@/lib/constants";

// Minimal campaign footer (PLAN.md §5 row 18). Legal + clinical disclaimer +
// contact + signature triad (compliance Part 8). No full sitemap nav, no
// social grid, no resource columns. The cold-paid LP has exactly one funnel,
// it does not double as a site-nav entry surface.

// Legal targets reused from the live site so links resolve. Order locked to
// match certification.footer.legalLinks (the strings are display-only; this
// map turns them into the canonical routes).
const LEGAL_HREFS: Record<string, string> = {
  Terms: "/terms",
  Privacy: "/privacy",
  "Refund Policy": "/refund-policy",
  Disclaimer: "/disclaimer",
  Contact: "/contact",
};

export default function CertFooter() {
  const { footer } = CERTIFICATION;
  return (
    <footer className="navy-field">
      <div className="container-rail py-14 lg:py-16">
        <p className="font-display text-2xl text-white text-balance">
          {footer.signature}
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <p className="text-sm leading-relaxed text-white/80">
            {footer.clinicalDisclaimer}
          </p>
          <p className="text-sm leading-relaxed text-white/80">
            {footer.testimonialDisclaimer}
          </p>
        </div>

        <p className="mt-8 text-sm text-white/85">
          {footer.contactLine}
        </p>

        <nav className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3" aria-label="Legal">
          {footer.legalLinks.map((label) => {
            const href = LEGAL_HREFS[label];
            if (!href) return null;
            return (
              <Link
                key={label}
                href={href}
                className="text-sm text-white/75 hover:text-white"
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-white/55">
          {footer.copyright.replace("(c)", "©")} {new Date().getFullYear()} {SITE.legalName}.
        </p>
      </div>
    </footer>
  );
}
