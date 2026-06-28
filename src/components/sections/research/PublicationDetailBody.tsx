import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import type { Publication } from "@/content/publications";
import {
  buildCitationDescription,
  formatFullCitation,
  isRolnick,
  publicationTypeBadge,
  readLinks,
} from "@/lib/publications";

// /research/publications/[slug] body. Single reading column: the verbatim
// abstract (42 entries) or a factual citation-only summary (34), the author
// list with Dr. Rolnick marked, keywords, the "Read the full paper" links, a
// formatted citation, and a back link. Server component, no client JS.

// Minimal inline renderer: **bold** runs only (the source abstracts use it for
// section labels like **Background.**). Everything else is plain text.
function renderInline(text: string): ReactNode {
  return text.split(/\*\*/).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-navy">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

function renderAbstract(abstract: string): ReactNode {
  return abstract
    .split(/\n\n+/)
    .map((para, i) => (
      <p key={i} className="text-base leading-relaxed text-ink/85">
        {renderInline(para.trim())}
      </p>
    ));
}

export default function PublicationDetailBody({ pub }: { pub: Publication }) {
  const links = readLinks(pub);
  const isFull = pub.abstractStatus === "full";

  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <div className="mx-auto max-w-prose-wide">
          {/* Abstract or citation-only summary */}
          <p className="small-caps-line text-accent">
            {isFull ? "Abstract" : "About this publication"}
          </p>
          <div className="mt-5 space-y-5">
            {isFull ? (
              renderAbstract(pub.abstract)
            ) : (
              <>
                <p className="text-base leading-relaxed text-ink/85">
                  {buildCitationDescription(pub)}
                </p>
                <p className="text-sm text-muted">
                  Citation-only entry. {publicationTypeBadge(pub.type)} abstracts of this kind are
                  often not posted to open databases; the full record is linked below.
                </p>
              </>
            )}
          </div>

          {/* Authors, omitted when the source has no author list (9 entries) */}
          {pub.authors.length > 0 ? (
            <div className="mt-12 rounded-lg border border-line bg-cream p-7">
              <p className="small-caps-line text-accent">Authors</p>
              <p className="mt-3 text-base leading-relaxed">
                {pub.authors.map((name, i) => (
                  <Fragment key={i}>
                    <span className={isRolnick(name) ? "font-semibold text-navy" : "text-ink/80"}>
                      {name}
                    </span>
                    {i < pub.authors.length - 1 ? <span className="text-ink/40">, </span> : null}
                  </Fragment>
                ))}
              </p>
              <p className="mt-4 text-sm text-muted">
                Dr. Nicholas Rolnick&rsquo;s contribution: {pub.rolnickRole}
              </p>
            </div>
          ) : null}

          {/* Keywords */}
          {pub.keywords.length > 0 ? (
            <div className="mt-8">
              <p className="small-caps-line text-accent">Keywords</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {pub.keywords.map((kw) => (
                  <li
                    key={kw}
                    className="rounded-full bg-navy/5 px-3 py-1 text-xs uppercase tracking-[0.14em] text-navy/70"
                  >
                    {kw}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* Read the full paper */}
          <div className="mt-12">
            <h2 className="font-display text-2xl text-navy">Read the full paper</h2>
            {links.length > 0 ? (
              <ul className="mt-5 space-y-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 rounded-lg border border-line bg-white px-5 py-4 hover:border-accent/40 transition"
                    >
                      <span className="min-w-0">
                        <span className="block font-semibold text-navy group-hover:text-accent transition">
                          {l.label}
                        </span>
                        <span className="mt-1 block truncate text-xs uppercase tracking-[0.14em] text-muted">
                          {l.hint}
                        </span>
                      </span>
                      <span aria-hidden className="shrink-0 text-accent">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-muted">
                A public link for this entry isn&rsquo;t available yet. Search the title on PubMed or
                Google Scholar for the published record.
              </p>
            )}
          </div>

          {/* Citation */}
          <div className="mt-10 rounded-lg border border-line bg-cream p-6">
            <p className="small-caps-line text-accent">Cite this paper</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/80">{formatFullCitation(pub)}</p>
          </div>

          <p className="mt-12">
            <Link
              href="/research/publications"
              className="inline-flex items-center gap-2 font-semibold text-navy hover:text-accent transition"
            >
              <span aria-hidden>&larr;</span>
              Back to all publications
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
