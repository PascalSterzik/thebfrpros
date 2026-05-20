"use client";

import { useEffect, useState } from "react";
import { CERTIFICATION_ENROLL_URL } from "@/lib/constants";

// Slim sticky CTA bar that appears once the visitor scrolls past the hero.
// Campaign-LP convention (PLAN.md §5 row 0): the page has ONE exit.
//
// Rev 1 (2026-05-20, REVISION-01.md §2): this bar is NO LONGER mounted on the
// page (page.tsx dropped the render). Pascal's call was that the top sticky
// header + the in-section CTAs already keep the enroll button visible, and
// the bottom bar was the second persistent CTA that made it feel like two
// floating CTAs at once. File is kept in place so the bar can be re-enabled
// with a one-line page.tsx restore if A/B testing later shows otherwise.
export default function StickyCTABar({
  label,
  cta,
}: {
  label: string;
  cta: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Reveal after the first ~600px of scroll (past the hero fold on most
      // viewports). Hide near the very top so it doesn't double with the
      // header's own CTA.
      setVisible(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-navy-deeper/95 backdrop-blur"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 400ms cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "transform",
      }}
    >
      <div className="container-rail flex items-center justify-between gap-4 py-3">
        <p className="hidden sm:block text-sm sm:text-base font-semibold text-white">
          {label}
        </p>
        <p className="sm:hidden text-xs font-semibold text-white/85">
          {label}
        </p>
        <a
          href={CERTIFICATION_ENROLL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent px-4 py-2 sm:px-5 sm:py-2.5 font-body text-sm sm:text-base font-semibold text-white transition hover:bg-accent-deeper"
        >
          {cta}
        </a>
      </div>
    </div>
  );
}
