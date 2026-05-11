"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ENROLL_URL, SITE } from "@/lib/constants";

export type HeaderMenuLink = {
  href: string;
  label: string;
  external?: boolean;
  comingSoon?: boolean;
};

// Default menu used on /get-certified variants. In-page anchors target sections
// that exist there. Homepage and any future page passes its own menu via the
// menuLinks prop.
const DEFAULT_MENU_LINKS: HeaderMenuLink[] = [
  { href: ENROLL_URL, label: "Get BFR Certified", external: true },
  { href: "#curriculum", label: "The Curriculum" },
  { href: "#instructor", label: "About Dr. Rolnick" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#solution", label: "How We Compare" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Header({
  variantHome = "/",
  menuLinks = DEFAULT_MENU_LINKS,
}: {
  variantHome?: string;
  menuLinks?: HeaderMenuLink[];
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // §King-Kong-style sticky behavior: hide on scroll-down, show on scroll-up only
  // after the user has reversed direction by enough pixels to be intentional.
  // Always show within 80px of top.
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let upAccum = 0;
    // Pascal-2026-05-08: 220px was still too eager. 480px feels intentional —
    // the user has to commit to scrolling up before the header reappears.
    const REVEAL_THRESHOLD = 480;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const dy = y - lastY;
      if (open) {
        setHidden(false);
      } else if (y < 80) {
        setHidden(false);
        upAccum = 0;
      } else if (dy > 0) {
        setHidden(true);
        upAccum = 0;
      } else if (dy < 0) {
        upAccum += -dy;
        if (upAccum >= REVEAL_THRESHOLD) {
          setHidden(false);
        }
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    if (open) document.body.classList.add("menu-open");
    else document.body.classList.remove("menu-open");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 ${scrolled ? "bg-white/95 backdrop-blur header-shadow" : "bg-white/85 backdrop-blur-sm"}`}
      style={{
        // §Pascal-2026-05-08: explicit inline transition so the slide actually
        // animates (Tailwind arbitrary `transition-[transform,...]` was getting
        // out-staged by other CSS). 600ms cubic-bezier reads as deliberate.
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        transition:
          "transform 600ms cubic-bezier(0.22, 1, 0.36, 1), background-color 300ms ease, box-shadow 300ms ease",
        willChange: "transform",
      }}
    >
      <div className="container-rail grid h-[60px] grid-cols-3 items-center">
        {/* Left: phone (icon-only on mobile, icon + number on desktop). No circle. */}
        <a
          href={`tel:${SITE.phone}`}
          className="justify-self-start inline-flex items-center gap-2 text-base sm:text-lg font-semibold text-navy hover:text-accent transition"
          aria-label={`Call ${SITE.brandName} at ${SITE.phoneDisplay}`}
        >
          <svg width="28" height="28" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path
              d="M4.5 2.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A14 14 0 0 1 2.5 4.5a2 2 0 0 1 2-2z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
          <span className="hidden sm:inline tabular-nums">{SITE.phoneDisplay}</span>
        </a>

        {/* Center: logo. Container holds aspect-ratio so the image sizes
           consistently across browsers regardless of width/height auto quirks. */}
        <Link
          href={variantHome}
          className="justify-self-center flex items-center"
          aria-label={`${SITE.brandName} home`}
        >
          <span className="relative block h-10 w-[82px] sm:h-11 sm:w-[90px]">
            <Image
              src="/images/logos/bfr-pros-secondary.png"
              alt={`${SITE.brandName} logo`}
              fill
              priority
              sizes="(max-width: 640px) 82px, 90px"
              className="object-contain"
            />
          </span>
        </Link>

        {/* Right: burger (mobile + desktop, intentional anti-distraction). No circle. */}
        <button
          type="button"
          className="justify-self-end inline-flex h-11 w-11 items-center justify-center text-navy transition hover:text-accent"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg width="32" height="32" viewBox="0 0 20 20" aria-hidden>
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 20 20" aria-hidden>
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Slideout: full-height opaque overlay, sits above every navy-field section */}
      <div
        id="primary-nav"
        className={`fixed inset-x-0 top-[60px] z-50 bg-white transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ minHeight: "calc(100dvh - 60px)", height: "calc(100dvh - 60px)" }}
        aria-hidden={!open}
      >
        <div className="container-rail flex h-full flex-col bg-white py-10">
          <ul className="flex flex-col">
            {menuLinks.map((l) => {
              if (l.comingSoon) {
                return (
                  <li key={l.href} className="border-b border-line/60 last:border-b-0">
                    <span
                      aria-disabled="true"
                      className="flex items-center justify-between gap-4 py-5 font-display text-2xl sm:text-3xl text-navy/40 cursor-not-allowed"
                    >
                      <span className="flex items-baseline gap-3">
                        {l.label}
                        <span className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted/70 normal-case rounded-full border border-line px-2 py-0.5">
                          Coming soon
                        </span>
                      </span>
                      <span aria-hidden className="text-base text-muted/40">→</span>
                    </span>
                  </li>
                );
              }
              if (l.external) {
                return (
                  <li key={l.href} className="border-b border-line/60 last:border-b-0">
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between gap-4 py-5 font-display text-2xl sm:text-3xl text-accent"
                    >
                      {l.label}
                      <span aria-hidden className="text-base">→</span>
                    </a>
                  </li>
                );
              }
              return (
                <li key={l.href} className="border-b border-line/60 last:border-b-0">
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between gap-4 py-5 font-display text-2xl sm:text-3xl text-navy hover:text-accent transition"
                  >
                    {l.label}
                    <span aria-hidden className="text-base text-muted">→</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto pt-10 border-t border-line/60">
            <p className="small-caps-line text-muted">Talk to us</p>
            <a
              href={`tel:${SITE.phone}`}
              className="mt-2 inline-flex font-display text-2xl text-navy hover:text-accent transition"
            >
              {SITE.phoneDisplay}
            </a>
            <p className="mt-3 text-sm text-muted">
              <a href={`mailto:${SITE.contactEmail}`} className="hover:text-navy underline-offset-4 hover:underline">
                {SITE.contactEmail}
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
