"use client";

import { useEffect, useState } from "react";

// Secondary in-page anchor sub-nav for /get-certified ONLY. Sits BELOW the
// global SITE_MENU_LINKS header. The header handles cross-page navigation
// (Certification / About / Research / Contact / Find a Provider / Enroll
// Now); this bar handles intra-page jumps along the long sales-page scroll.
// Two layers, distinct jobs (Pascal-locked 2026-05-13 Phase 1d).
//
// Sticky pinning matches the header's height (60px) so the two bars stack
// when the page is scrolled. On click, scroll-margin-top on the target
// sections accounts for the combined sticky offset.

const ANCHORS = [
  { href: "#curriculum", label: "Curriculum" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
] as const;

export default function CertAnchorNav() {
  // Mirrors the header's hide-on-scroll-down / show-on-scroll-up behavior so
  // both bars move in concert. Without this, the anchor bar floats below a
  // disappeared header and looks orphaned.
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let upAccum = 0;
    const REVEAL_THRESHOLD = 480;
    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastY;
      if (y < 80) {
        setHidden(false);
        upAccum = 0;
      } else if (dy > 0) {
        setHidden(true);
        upAccum = 0;
      } else if (dy < 0) {
        upAccum += -dy;
        if (upAccum >= REVEAL_THRESHOLD) setHidden(false);
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="sticky top-[60px] z-30 bg-white/95 backdrop-blur border-b border-line"
      style={{
        transform: hidden ? "translateY(calc(-100% - 60px))" : "translateY(0)",
        transition:
          "transform 600ms cubic-bezier(0.22, 1, 0.36, 1), background-color 300ms ease",
        willChange: "transform",
      }}
    >
      <div className="container-rail overflow-x-auto">
        <ul className="flex items-center justify-center gap-6 sm:gap-10 py-3 whitespace-nowrap">
          {ANCHORS.map((a) => (
            <li key={a.href}>
              <a
                href={a.href}
                className="font-body uppercase tracking-[0.16em] text-xs sm:text-sm font-semibold text-navy hover:text-accent transition"
              >
                {a.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
