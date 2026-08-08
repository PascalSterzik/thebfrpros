import Image from "next/image";
import OptInTrigger from "./OptInTrigger";

// Stripped header for /the-loading-wall. No nav, and the logo is deliberately
// NOT a link into the site (PLAN.md §3 row 1). A squeeze page has exactly one
// exit, the opt-in form, so the header still offers no way OUT.
//
// §Pascal-2026-08-08: it now carries a CTA. That does not break the one-exit
// rule, because the button IS the one exit. The bar was already sticky and
// already spending 60px of every screen on a logo alone, which is expensive on
// a page whose single job is one conversion, so the CTA costs no extra height.
// `cta` is optional on purpose: the thank-you page reuses this header, and
// someone who just converted must not be asked to opt in again.
export default function LoadingWallHeader({
  logoAlt,
  cta,
}: {
  logoAlt: string;
  cta?: string;
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur header-shadow">
      <div className="container-rail flex h-[60px] items-center justify-between gap-3">
        <span className="relative block h-9 w-[74px] shrink-0 sm:h-10 sm:w-[82px]">
          <Image
            src="/images/logos/bfr-pros-secondary.png"
            alt={logoAlt}
            fill
            sizes="82px"
            className="object-contain"
            priority
          />
        </span>

        {cta ? <OptInTrigger label={cta} source="header" size="sm" /> : null}
      </div>
    </header>
  );
}
