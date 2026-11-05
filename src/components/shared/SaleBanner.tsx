"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SALE, isSaleActive } from "@/lib/sale";

// Site-wide sale bar above the header, mounted once in the root layout.
// The whole bar is one link to /certification.
// - `initialActive` is decided on the server at render time, so the HTML and the
//   first client render agree. After mount the browser re-checks the clock, so
//   statically built pages drop the banner on their own once the sale ends.
// - Hidden on /bfr-certification: that paid landing page strips every exit link.
const HIDDEN_ON = ["/bfr-certification"];

export default function SaleBanner({ initialActive }: { initialActive: boolean }) {
  const pathname = usePathname();
  const [active, setActive] = useState(initialActive);

  useEffect(() => {
    setActive(isSaleActive());
  }, []);

  if (!active || HIDDEN_ON.includes(pathname)) return null;

  return (
    <a
      href={SALE.bannerHref}
      aria-label={SALE.bannerText}
      className="block bg-navy px-4 py-2.5 text-center text-sm font-semibold text-white no-underline transition-colors hover:bg-navy-softer sm:text-base"
    >
      {SALE.bannerText}
    </a>
  );
}
