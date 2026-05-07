import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { VARIANTS } from "@/content/variants";

export const metadata: Metadata = {
  title: "Phase 1A Concept Variants | The BFR Pros (private review)",
  description: "Internal review index for the three /get-certified concept variants. Not for public traffic.",
  robots: { index: false, follow: false },
};

const VARIANT_NOTES: Record<"v1" | "v2" | "v3", { tagline: string; angle: string; oneLiner: string }> = {
  v1: {
    angle: "Research-authority lead",
    tagline: "Belief 5: 72+ peer-reviewed publications as the source of truth",
    oneLiner:
      "Earned-authority opening. The hero stat is publication count, the dream is the clinician who cites the research, the warning is staying generic in a field that's specializing.",
  },
  v2: {
    angle: "Equipment-agnostic lead",
    tagline: "Belief 3: the only BFR certification that doesn't sell you a cuff",
    oneLiner:
      "Differentiation opening. Names the competitors, calls out what they're selling, positions us as the neutral curriculum. Strongest for clinicians already cuff-skeptical.",
  },
  v3: {
    angle: "Patient-demand lead",
    tagline: "Belief 6: your patients are already asking. Be the clinic that delivers.",
    oneLiner:
      "Loss-aversion opening. The competitor down the street, the firefighter who Googled, the surgeon's referrals shifting. Strongest for clinic-owner readers.",
  },
};

export default function ReviewIndex() {
  return (
    <main className="min-h-screen bg-cream">
      <div className="container-rail py-20 lg:py-28">
        <header className="max-w-2xl">
          <p className="small-caps-line text-accent">The BFR Pros · Phase 1A · private review</p>
          <h1 className="mt-5 font-display text-display-2xl text-navy text-balance">
            Three concept variants of /get-certified.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            Same offer, same brand, same component library. Each variant leads with a different belief from the dossier. Click any card to open the full variant.
          </p>
          <p className="mt-3 text-sm text-muted">
            <strong>For Pascal + Dr. Rolnick.</strong> Not for public traffic. Each variant is identical from section 9 (the BFR Pros difference) onward; the positioning differs in the announcement bar, hero, problem, dream, bridge, final CTA, and P.S.
          </p>
        </header>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {(Object.keys(VARIANT_NOTES) as Array<"v1" | "v2" | "v3">).map((slug) => {
            const v = VARIANTS[slug];
            const meta = VARIANT_NOTES[slug];
            return (
              <li key={slug}>
                <Link
                  href={v.routePath}
                  className="group block rounded-3xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-navy/40 hover:shadow-navy-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-cream ring-1 ring-line">
                    <Image
                      src={v.hero.photoSrc}
                      alt={v.hero.photoAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 360px"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/60 via-transparent to-transparent" aria-hidden />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                      {slug}
                    </span>
                  </div>
                  <p className="mt-5 small-caps-line text-accent">{meta.angle}</p>
                  <h2 className="mt-3 font-display text-2xl text-navy text-balance leading-snug">
                    {v.hero.headline}
                  </h2>
                  <p className="mt-3 text-sm text-muted">{meta.tagline}</p>
                  <p className="mt-5 text-sm leading-relaxed text-ink/80">{meta.oneLiner}</p>
                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    Open the variant →
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>

        <section className="mt-20 rounded-3xl border border-line bg-white p-7 lg:p-10">
          <p className="small-caps-line text-muted">Build notes</p>
          <h2 className="mt-3 font-display text-display-md text-navy text-balance">
            What's shared, what's variant-specific, and what's still pending.
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            <div>
              <p className="small-caps-line text-accent">Variant-specific (8)</p>
              <p className="mt-2 text-sm text-ink/85">
                Announcement bar, hero, problem, dream vision, dream deep dive, solution bridge, final CTA frame, P.S.
              </p>
            </div>
            <div>
              <p className="small-caps-line text-accent">Shared (14)</p>
              <p className="mt-2 text-sm text-ink/85">
                Header, credibility bar, BFR Pros difference + comparison table, curriculum, instructor authority, bonuses, CEU approvals, visual proof, testimonials, partners, pricing, guarantee, FAQ, footer.
              </p>
            </div>
            <div>
              <p className="small-caps-line text-accent">Still pending</p>
              <p className="mt-2 text-sm text-ink/85">
                OG share images per variant, Lighthouse run, schema validator pass, and the full website-qa quality gate. Documented in this project README.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-16 text-xs text-muted">
          <p>
            Build started 2026-05-06 (Phase 1A rerun). Aesthetic direction: editorial clinical authority. Tech stack: Next.js 14 + Tailwind 3 + Framer Motion 12. Static export, Vercel hosting.
          </p>
        </footer>
      </div>
    </main>
  );
}
