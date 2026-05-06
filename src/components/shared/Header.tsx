"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ENROLL_URL, SITE } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#solution", label: "The Difference" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#instructor", label: "Instructor" },
  { href: "#pricing", label: "Enroll" },
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
        scrolled ? "bg-white/95 backdrop-blur header-shadow" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-rail flex h-[68px] items-center justify-between">
        <Link href={variantHome} className="flex items-center gap-3" aria-label={`${SITE.brandName} home`}>
          <Image
            src="/images/logos/bfr-pros-primary.png"
            alt={`${SITE.brandName} logo`}
            width={160}
            height={42}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink transition-colors hover:text-navy"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={ENROLL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2.5 !px-5 text-sm"
          >
            Enroll Now
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-navy transition hover:border-navy"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
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

      {/* Mobile slideout */}
      <div
        id="mobile-nav"
        className={`md:hidden fixed inset-x-0 top-[68px] bottom-0 z-30 bg-white transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="container-rail flex flex-col gap-1 py-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-4 font-display text-2xl text-navy"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={ENROLL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 w-full text-base"
            onClick={() => setOpen(false)}
          >
            Enroll Now for $449
          </a>
          <p className="mt-6 text-sm text-muted">
            Questions?{" "}
            <a href={`tel:${SITE.phone}`} className="underline">
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}
