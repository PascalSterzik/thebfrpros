"use client";

import Link from "next/link";

export default function AnnouncementBar({
  eyebrow,
  line,
  cta,
  href = "#pricing",
}: {
  eyebrow: string;
  line: string;
  cta: string;
  href?: string;
}) {
  return (
    <div className="navy-field text-center text-sm">
      <div className="container-rail flex flex-col items-center gap-2 py-3 sm:flex-row sm:justify-center sm:gap-6">
        <span className="eyebrow-light">{eyebrow}</span>
        <p className="hidden sm:block text-white/80" aria-hidden="true">
          ·
        </p>
        <p className="text-white/95 max-w-2xl">{line}</p>
        <Link
          href={href}
          className="text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
        >
          {cta} →
        </Link>
      </div>
    </div>
  );
}
