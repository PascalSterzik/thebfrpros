import Image from "next/image";

// Stripped header for /the-loading-wall. Logo ONLY: no nav, no CTA, and the
// logo is deliberately NOT a link into the site (PLAN.md §3 row 1). A squeeze
// page has exactly one exit, the opt-in form, so the header offers no way out.
export default function LoadingWallHeader({ logoAlt }: { logoAlt: string }) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur header-shadow">
      <div className="container-rail flex h-[60px] items-center justify-center sm:justify-start">
        <span className="relative block h-9 w-[74px] sm:h-10 sm:w-[82px]">
          <Image
            src="/images/logos/bfr-pros-secondary.png"
            alt={logoAlt}
            fill
            sizes="82px"
            className="object-contain"
            priority
          />
        </span>
      </div>
    </header>
  );
}
