"use client";

import Image from "next/image";
import Link from "next/link";
import { ENROLL_URL, SITE } from "@/lib/constants";

// Campaign-only header for /certification. Logo + single text CTA. NO
// SITE_MENU_LINKS nav (exit-reduction discipline for cold paid traffic).
// Per PLAN.md §5 row 0 + §11: this page is excluded from sitewide nav, runs
// as a stripped campaign LP so traffic has exactly one exit, the enroll CTA.
export default function StrippedHeader({
  navCta,
  logoAlt,
}: {
  navCta: string;
  logoAlt: string;
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur header-shadow">
      <div className="container-rail flex h-[60px] items-center justify-between">
        <Link href="/certification" className="flex items-center" aria-label={`${SITE.brandName} home`}>
          <span className="relative block h-10 w-[82px] sm:h-11 sm:w-[90px]">
            <Image
              src="/images/logos/bfr-pros-secondary.png"
              alt={logoAlt}
              fill
              sizes="(max-width: 640px) 82px, 90px"
              className="object-contain"
            />
          </span>
        </Link>

        <a
          href={ENROLL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 sm:px-5 sm:py-2.5 font-body text-sm sm:text-base font-semibold text-white transition hover:bg-accent-deeper"
        >
          {navCta}
        </a>
      </div>
    </header>
  );
}
