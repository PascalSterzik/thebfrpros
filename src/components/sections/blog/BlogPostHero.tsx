import Image from "next/image";
import Link from "next/link";

// /blog/[slug] hero. Locked HomeHero pattern with a breadcrumb (Home /
// Blog / [post title]) above the eyebrow, category chip + author + date
// metadata below the headline.

const STAGGER_DELAYS = ["0ms", "80ms", "160ms", "240ms"];
const BACKDROP_SRC = "/images/hero/hero-banner.webp";

export default function BlogPostHero({
  title,
  category,
  author,
  date,
  heroImage,
}: {
  title: string;
  category: string;
  author: string;
  date: string;
  heroImage?: { src: string; alt: string };
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
              <Link href="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li aria-hidden className="text-white/40">/</li>
            <li className="text-white truncate max-w-xs sm:max-w-md" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>

        <div className="mx-auto w-full max-w-4xl text-center">
          <span
            className="opacity-0 animate-fade-up eyebrow-pill eyebrow-pill-on-navy"
            style={{ animationDelay: STAGGER_DELAYS[0] }}
          >
            {category}
          </span>
          <h1
            className="opacity-0 animate-fade-up mt-6 font-display text-display-xl lg:text-display-2xl text-white text-balance"
            style={{ animationDelay: STAGGER_DELAYS[1] }}
          >
            {title}
          </h1>
          <p
            className="opacity-0 animate-fade-up mt-7 text-sm uppercase tracking-[0.16em] text-white/70 font-semibold"
            style={{ animationDelay: STAGGER_DELAYS[2] }}
          >
            By {author} · {date}
          </p>

          {heroImage ? (
            <div
              className="opacity-0 animate-fade-up mt-10 mx-auto w-full max-w-3xl overflow-hidden rounded-lg ring-1 ring-white/15 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
              style={{ animationDelay: STAGGER_DELAYS[3] }}
            >
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={1600}
                height={900}
                sizes="(min-width: 1024px) 768px, 100vw"
                className="h-auto w-full"
                priority
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
