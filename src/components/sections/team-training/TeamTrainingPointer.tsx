import Link from "next/link";
import { TEAM_TRAINING_POINTERS } from "@/content/team-training";

// Light sibling-page cross-pointer to /train-your-team (spec §7.3). One per
// sibling page (cert, consultation, /for/PT, /for/AT, /for/SC), idea + link,
// exploratory verb. Deliberately a COMPACT bordered strip, NOT a full
// section-wrap: it must never become a full section or duplicate the lane's job.
// /about gets NO pointer (mission-only). Copy is centralized in
// TEAM_TRAINING_POINTERS so the wayfinding has one source of truth.

type PointerVariant = Exclude<keyof typeof TEAM_TRAINING_POINTERS, "href">;

export default function TeamTrainingPointer({ variant }: { variant: PointerVariant }) {
  const p = TEAM_TRAINING_POINTERS[variant];
  return (
    <section className="cream-field border-y border-line">
      <div className="container-rail py-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:gap-8 sm:text-left">
          <p className="text-base leading-relaxed text-ink/80">{p.line}</p>
          <Link
            href={TEAM_TRAINING_POINTERS.href}
            className="inline-flex shrink-0 items-center gap-2 text-base font-semibold text-accent transition hover:text-accent-deeper"
          >
            {p.cta}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
