"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SALE, isSaleActive } from "@/lib/sale";

// Site-wide sale bar above the header, mounted once in the root layout.
// Reads: NOVEMBER SALE | GET 45% OFF THE BFR CERTIFICATION | [countdown]
// The whole bar is one link to /certification.
// - `initialActive` is decided on the server at render time, so the HTML and the
//   first client render agree. After mount the browser takes over the clock:
//   the countdown ticks every second and the bar removes itself at SALE.endsAt,
//   so statically built pages drop it on their own once the sale ends.
// - The countdown is a real deadline (the sale end), not invented urgency.
// - Hidden on /bfr-certification: that paid landing page strips every exit link.
const HIDDEN_ON = ["/bfr-certification"];

const pad = (n: number) => String(n).padStart(2, "0");

function formatRemaining(ms: number): string {
  const s = Math.max(0, Math.floor(ms / 1000));
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  return `${d}D ${pad(h)}H ${pad(m)}M ${pad(s % 60)}S`;
}

export default function SaleBanner({ initialActive }: { initialActive: boolean }) {
  const pathname = usePathname();
  const [active, setActive] = useState(initialActive);
  // null until mounted, so server HTML and hydration match.
  const [remaining, setRemaining] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const on = isSaleActive(now);
      setActive(on);
      setRemaining(on ? formatRemaining(SALE.endsAt - now) : null);
      return on;
    };
    if (!tick()) return;
    const id = window.setInterval(() => {
      if (!tick()) window.clearInterval(id);
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!active || HIDDEN_ON.includes(pathname)) return null;

  return (
    <a
      href={SALE.bannerHref}
      aria-label={`${SALE.bannerLabel}: ${SALE.bannerOffer}. Ends ${SALE.endLabel}.`}
      className="block bg-navy px-2 py-2.5 text-center text-[11px] min-[340px]:text-[12px] min-[380px]:text-[13px] font-semibold uppercase text-white no-underline transition-colors hover:bg-navy-softer sm:px-4 sm:text-base sm:tracking-wide"
    >
      <span className="flex flex-col items-center gap-0.5 sm:flex-row sm:justify-center sm:gap-3">
        <span className="whitespace-nowrap">
          {SALE.bannerLabel} <span aria-hidden className="px-0.5 opacity-60 sm:px-1.5">|</span> {SALE.bannerOffer}
        </span>
        <span aria-hidden className="hidden opacity-60 sm:inline">|</span>
        <span aria-hidden className="tabular-nums">
          {remaining ?? " "}
        </span>
      </span>
    </a>
  );
}
