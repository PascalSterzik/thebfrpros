"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ENROLL_URL, SITE } from "@/lib/constants";

// Burger menu contents per §D.2. In-page anchors for sections that exist on
// /get-certified; ENROLL_URL for the conversion path; tel:/mailto: for contact.
const MENU_LINKS: { href: string; label: string; external?: boolean }[] = [
  { href: ENROLL_URL, label: "Get Certified for $449", external: true },
  { href: "#curriculum", label: "The Curriculum" },
  { href: "#instructor", label: "About Dr. Rolnick" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#solution", label: "How We Compare" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Header({ variantHome = "/" }: { variantHome?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur header-shadow" : "bg-white/85 backdrop-blur-sm"
      }`}
    >
      <div className="container-rail grid h-[68px] grid-cols-3 items-center">
        {/* Left: phone (icon-only on mobile, icon + number on desktop) */}
        <a
          href={`tel:${SITE.phone}`}
          className="justify-self-start inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-accent transition"
          aria-label={`Call ${SITE.brandName} at ${SITE.phoneDisplay}`}
        >
          <span
            aria-hidden
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy transition group-hover:border-navy"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path
                d="M4.5 2.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A14 14 0 0 1 2.5 4.5a2 2 0 0 1 2-2z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="hidden sm:inline tabular-nums">{SITE.phoneDisplay}</span>
        </a>

        {/* Center: logo */}
        <Link
          href={variantHome}
          className="justify-self-center flex items-center"
          aria-label={`${SITE.brandName} home`}
        >
          <Image
            src="/images/logos/bfr-pros-secondary.png"
            alt={`${SITE.brandName} logo`}
            width={160}
            height={42}
            priority
            className="h-9 sm:h-10"
            style={{ width: "auto", height: "auto", maxHeight: "2.5rem" }}
          />
        </Link>

        {/* Right: burger (mobile + desktop, intentional anti-distraction) */}
        <button
          type="button"
          className="justify-self-end inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-navy transition hover:border-navy"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
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
        className={`fixed inset-x-0 top-[68px] z-50 bg-white transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ minHeight: "calc(100dvh - 68px)", height: "calc(100dvh - 68px)" }}
        aria-hidden={!open}
      >
        <div className="container-rail flex h-full flex-col bg-white py-10">
          <ul className="flex flex-col">
            {MENU_LINKS.map((l) =>
              l.external ? (
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
              ) : (
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
              ),
            )}
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
