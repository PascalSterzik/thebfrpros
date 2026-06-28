import Image from "next/image";
import Link from "next/link";

// /research/publications/[slug] hero. Locked research/blog hero pattern: full-
// bleed banner + navy gradient + centered text, with a Home / Research /
// Publications / [title] breadcrumb, a publication-type chip, the title, and a
// citation + Rolnick-role metadata line. Server component (CSS fade-up, no JS).

const STAGGER_DELAYS = ["0ms", "80ms", "160ms", "240ms"];
const BACKDROP_SRC = "/images/hero/hero-banner.webp";

export default function PublicationDetailHero({
  title,
  typeBadge,
  citation,
  roleLabel,
}: {
  title: string;
  typeBadge: string;
  citation: string;
  roleLabel: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={BACKDROP_SRC}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
        aria-hidden
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deeper/90 via-navy-deeper/80 to-navy/90"
      />

      <div className="container-rail relative pt-12 pb-16 lg:pt-16 lg:pb-20">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-white/40">/</li>
            <li>
              <Link href="/research" className="hover:text-white transition">
                Research
              </Link>
            </li>
            <li aria-hidden className="text-white/40">/</li>
            <li>
              <Link href="/research/publications" className="hover:text-white transition">
                Publications
              </Link>
            </li>
            <li aria-hidden className="text-white/40">/</li>
            <li className="text-white truncate max-w-[12rem] sm:max-w-sm" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>

        <div className="mx-auto w-full max-w-4xl text-center">
          <span
            className="opacity-0 animate-fade-up eyebrow-pill eyebrow-pill-on-navy"
            style={{ animationDelay: STAGGER_DELAYS[0] }}
          >
            {typeBadge}
          </span>
          <h1
            className="opacity-0 animate-fade-up mt-6 font-display text-display-lg lg:text-display-xl text-white text-balance"
            style={{ animationDelay: STAGGER_DELAYS[1] }}
          >
            {title}
          </h1>
          <p
            className="opacity-0 animate-fade-up mt-7 text-sm uppercase tracking-[0.16em] text-white/75 font-semibold"
            style={{ animationDelay: STAGGER_DELAYS[2] }}
          >
            {citation}
          </p>
          <p
            className="opacity-0 animate-fade-up mt-3 text-sm text-white/70"
            style={{ animationDelay: STAGGER_DELAYS[3] }}
          >
            {roleLabel}
          </p>
        </div>
      </div>
    </section>
  );
}
