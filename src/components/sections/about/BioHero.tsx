import Image from "next/image";
import Link from "next/link";

// Shared bio-page hero. Mirrors the locked HomeHero pattern: full-bleed
// background photo + navy gradient overlay + centered text. The portrait
// is the centered media element below the subhead (where HomeHero has a
// video). Breadcrumb above the eyebrow gives search and user back-context.
// The brand hero pattern is locked across every page on this site; see
// WEBSITE-PROJECT.md "Hero pattern (locked)" subsection.

const STAGGER_DELAYS = ["0ms", "80ms", "160ms", "240ms", "320ms"];

const BACKDROP_SRC = "/images/hero/hero-banner.jpg";

export default function BioHero({
  eyebrow,
  name,
  credentialsLine,
  tagline,
  subhead,
  photoSrc,
}: {
  eyebrow: string;
  name: string;
  credentialsLine: string;
  tagline: string;
  subhead: string;
  photoSrc: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={BACKDROP_SRC}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
        aria-hidden
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deeper/90 via-navy-deeper/80 to-navy/90"
      />

      <div className="container-rail relative pt-12 pb-20 lg:pt-16 lg:pb-24">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-white/40">/</li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li aria-hidden className="text-white/40">/</li>
            <li className="text-white" aria-current="page">
              {name}
            </li>
          </ol>
        </nav>

        <div className="mx-auto w-full max-w-5xl text-center">
          <span
            className="opacity-0 animate-fade-up eyebrow-pill eyebrow-pill-on-navy"
            style={{ animationDelay: STAGGER_DELAYS[0] }}
          >
            {eyebrow}
          </span>

          <h1
            className="opacity-0 animate-fade-up mt-6 font-display text-display-2xl lg:text-display-3xl text-white text-balance"
            style={{ animationDelay: STAGGER_DELAYS[1] }}
          >
            {name}
          </h1>

          <p
            className="opacity-0 animate-fade-up mt-4 font-semibold text-lg text-white/85"
            style={{ animationDelay: STAGGER_DELAYS[2] }}
          >
            {credentialsLine}{" "}
            <span className="text-white/65 font-normal">&middot; {tagline}</span>
          </p>

          <p
            className="opacity-0 animate-fade-up mt-6 mx-auto max-w-3xl subhead text-white/90"
            style={{ animationDelay: STAGGER_DELAYS[3] }}
          >
            {subhead}
          </p>

          <div
            className="opacity-0 animate-fade-up mt-10 mx-auto"
            style={{ animationDelay: STAGGER_DELAYS[4], animationDuration: "0.95s" }}
          >
            <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-lg ring-1 ring-white/15 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.6)]">
              <Image
                src={photoSrc}
                alt={`${name}, ${tagline}`}
                fill
                priority
                sizes="(max-width: 640px) 280px, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
