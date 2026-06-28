// Typed accessors over the generated publications dataset (src/content/
// publications.ts, baked from src/content/publications/*.md). All page/
// component code goes through this module rather than touching the raw array,
// so derived logic (citations, related-by-keyword, the citation-only factual
// description, grouping) lives in one place.
//
// Bundle note: this module pulls in the full PUBLICATIONS array (incl.
// abstracts). Server components import it freely; client components must
// receive the light PublicationListItem projection as props instead of
// importing this, the same discipline /blog uses with BLOG_POST_BODIES.

import { PUBLICATIONS, type Publication } from "@/content/publications";

export type { Publication };
export { PUBLICATIONS, PUBLICATION_SLUGS } from "@/content/publications";

// Light projection safe to ship into a client bundle (no abstracts).
export type PublicationListItem = {
  slug: string;
  title: string;
  year: number;
  type: string;
  journal: string;
  rolnickRole: string;
  hasAbstract: boolean;
};

// Source-data type order, peer-reviewed journal articles first.
export const PUBLICATION_TYPE_ORDER = [
  "Journal article",
  "Letter/commentary",
  "Book chapter",
] as const;

export function getPublicationBySlug(slug: string): Publication | undefined {
  return PUBLICATIONS.find((p) => p.slug === slug);
}

export function isRolnick(name: string): boolean {
  return name.toLowerCase().includes("rolnick");
}

// Trim the NLM "… : official journal of …" annotation Europe PMC appends to
// some journal names. Casing is left as-is (verbatim from the source record).
export function formatJournal(journal: string): string {
  if (!journal) return "";
  return journal.replace(/\s*:\s*(official journal|the journal|a journal|journal)\b.*$/i, "").trim();
}

// "Journal · Year · Vol 13(2) · 808622" — present fields only.
export function citationLine(p: Publication): string {
  const bits: string[] = [];
  const journal = formatJournal(p.journal);
  if (journal) bits.push(journal);
  bits.push(String(p.year));
  if (p.volume) bits.push(`Vol ${p.volume}${p.issue ? `(${p.issue})` : ""}`);
  else if (p.issue) bits.push(`Issue ${p.issue}`);
  if (p.pages) bits.push(p.pages);
  return bits.join(" · ");
}

// Full APA-ish citation string. Author segment omitted when the source has no
// author list (9 entries) rather than inventing names.
export function formatFullCitation(p: Publication): string {
  const parts: string[] = [];
  if (p.authors.length) parts.push(p.authors.join(", ") + ".");
  parts.push(`(${p.year}).`);
  parts.push(/[.?!]$/.test(p.title) ? p.title : p.title + ".");
  const journal = formatJournal(p.journal);
  if (journal) {
    let v = journal;
    if (p.volume) v += `, ${p.volume}`;
    if (p.issue) v += `(${p.issue})`;
    if (p.pages) v += `, ${p.pages}`;
    parts.push(v + ".");
  }
  if (p.doi) parts.push(`https://doi.org/${p.doi}`);
  return parts.join(" ");
}

// "Read the full paper" destinations, present only, reader-useful order:
// free full text, then publisher (DOI), then ResearchGate.
export function readLinks(p: Publication): Array<{ label: string; hint: string; href: string }> {
  const out: Array<{ label: string; hint: string; href: string }> = [];
  if (p.links.openAccess) out.push({ label: "Read the free full text", hint: "Open access", href: p.links.openAccess });
  const doiHref = p.links.doi || (p.doi ? `https://doi.org/${p.doi}` : "");
  if (doiHref) out.push({ label: "Read on the publisher site", hint: p.doi ? `DOI ${p.doi}` : "Publisher", href: doiHref });
  if (p.links.researchgate) out.push({ label: "View on ResearchGate", hint: "Author copy", href: p.links.researchgate });
  return out;
}

// Plain-language name for the kind of output, derived ONLY from the title,
// type, and subtype. Used in the citation-only factual description.
function describeKind(p: Publication): string {
  const t = p.title.toLowerCase();
  if (/letter to (the )?editor/.test(t)) return "letter to the editor";
  if (/^response to commentary/.test(t)) return "response to a published commentary";
  if (/^commentary[:\s]/.test(t)) return "commentary";
  if (/^editorial[:\s]/.test(t)) return "editorial";
  if (/manuscript clarification/.test(t)) return "manuscript clarification";
  if (/conference abstract/.test(t)) return "conference abstract";
  if (p.type === "Book chapter") return "book chapter";
  if (p.type === "Letter/commentary") return "letter or commentary";
  if (p.subtype) return p.subtype.toLowerCase();
  if (/systematic review|meta-analysis|scoping review|narrative review|overview of systematic/.test(t))
    return "review";
  return "research article";
}

// Factual 1–2 sentence description for the 34 citation-only entries. Grounded
// ONLY in title + type + journal + year. Invents NO findings, numbers, or
// conclusions (brand-guide.md accuracy rule + task content rules).
export function buildCitationDescription(p: Publication): string {
  const kind = describeKind(p);
  const article = /^[aeiou]/.test(kind) ? "an" : "a";
  const venue = formatJournal(p.journal);
  const where = venue ? ` published in ${venue} (${p.year})` : ` (${p.year})`;
  return (
    `"${p.title}" is ${article} ${kind}${where}. ` +
    `A full abstract is not available for this entry in open databases; the complete record is available through the links below.`
  );
}

// Meta description: ~155 chars from the abstract (markdown stripped) for full
// entries, else the factual description. Cut on a word boundary.
export function publicationMetaDescription(p: Publication): string {
  const source =
    p.abstractStatus === "full"
      ? p.abstract.replace(/\*\*/g, "").replace(/\s+/g, " ").trim()
      : buildCitationDescription(p).replace(/"/g, "");
  if (source.length <= 155) return source;
  const cut = source.slice(0, 155);
  return cut.slice(0, cut.lastIndexOf(" ")).trim() + "…";
}

// Up to n related publications by shared keyword, falling back to nearest year
// so entries with empty keywords still cross-link.
export function getRelatedPublications(p: Publication, n = 3): Publication[] {
  const kw = new Set(p.keywords.map((k) => k.toLowerCase()));
  const scored = PUBLICATIONS.filter((o) => o.slug !== p.slug)
    .map((o) => ({ o, overlap: o.keywords.filter((k) => kw.has(k.toLowerCase())).length }))
    .filter((x) => x.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap || b.o.year - a.o.year);
  const rel = scored.slice(0, n).map((x) => x.o);
  if (rel.length < n) {
    const have = new Set([p.slug, ...rel.map((r) => r.slug)]);
    const fill = PUBLICATIONS.filter((o) => !have.has(o.slug))
      .sort((a, b) => Math.abs(a.year - p.year) - Math.abs(b.year - p.year) || b.year - a.year)
      .slice(0, n - rel.length);
    rel.push(...fill);
  }
  return rel;
}

export function toListItem(p: Publication): PublicationListItem {
  return {
    slug: p.slug,
    title: p.title,
    year: p.year,
    type: p.type,
    journal: formatJournal(p.journal),
    rolnickRole: p.rolnickRole,
    hasAbstract: p.abstractStatus === "full",
  };
}

export function allListItems(): PublicationListItem[] {
  return PUBLICATIONS.map(toListItem);
}

// Plural label for filter chips / counts.
export function publicationTypeLabel(type: string): string {
  switch (type) {
    case "Journal article":
      return "Journal articles";
    case "Letter/commentary":
      return "Letters & commentaries";
    case "Book chapter":
      return "Book chapters";
    default:
      return type;
  }
}

// Singular label for a per-item badge.
export function publicationTypeBadge(type: string): string {
  switch (type) {
    case "Journal article":
      return "Journal article";
    case "Letter/commentary":
      return "Letter / commentary";
    case "Book chapter":
      return "Book chapter";
    default:
      return type;
  }
}

export function typeCounts(): Array<{ type: string; label: string; count: number }> {
  return PUBLICATION_TYPE_ORDER.filter((t) => PUBLICATIONS.some((p) => p.type === t)).map((t) => ({
    type: t,
    label: publicationTypeLabel(t),
    count: PUBLICATIONS.filter((p) => p.type === t).length,
  }));
}

// Distinct years, newest first.
export function publicationYears(): number[] {
  return Array.from(new Set(PUBLICATIONS.map((p) => p.year))).sort((a, b) => b - a);
}

// Group an already-filtered light list by year, newest first.
export function groupByYear(items: PublicationListItem[]): Array<{ year: number; items: PublicationListItem[] }> {
  const map = new Map<number, PublicationListItem[]>();
  for (const it of items) {
    const g = map.get(it.year) ?? [];
    g.push(it);
    map.set(it.year, g);
  }
  return Array.from(map.entries())
    .sort((a, b) => b[0] - a[0])
    .map(([year, list]) => ({ year, items: list }));
}
