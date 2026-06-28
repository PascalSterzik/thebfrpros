import Link from "next/link";
import type { PublicationListItem } from "@/lib/publications";
import { publicationTypeBadge } from "@/lib/publications";

// Related-by-keyword cross-links at the bottom of each publication detail page
// (internal-link depth). Cards link to the related detail pages. Server
// component, no client JS.

export default function RelatedPublications({ items }: { items: PublicationListItem[] }) {
  if (items.length === 0) return null;

  return (
    <section className="section-wrap cream-field">
      <div className="container-rail">
        <div className="max-w-3xl">
          <p className="eyebrow">Related research</p>
          <h2 className="mt-4 font-display text-display-md text-navy text-balance">
            More from this line of work
          </h2>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/research/publications/${p.slug}`}
                className="group flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)] transition hover:border-accent/40 hover:shadow-[0_18px_40px_-22px_rgba(25,55,99,0.32)]"
              >
                <p className="small-caps-line text-accent text-xs">
                  {publicationTypeBadge(p.type)} · {p.year}
                </p>
                <h3 className="mt-3 flex-1 font-display text-lg text-navy leading-snug group-hover:text-accent transition">
                  {p.title}
                </h3>
                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted">
                  Read the record
                  <span aria-hidden className="ml-1 text-accent">
                    &rarr;
                  </span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
