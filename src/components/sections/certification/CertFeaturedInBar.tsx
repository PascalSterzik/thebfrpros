import Marquee from "@/components/shared/Marquee";
import { FEATURED_IN } from "@/lib/constants";

// MODALITY-level Featured-In bar for /certification. Discipline (brand-guide
// "Modality vs Brand", gotcha 71): the FEATURED_IN logos are evidence that
// blood-flow-restriction-the-modality has been covered across these outlets,
// NOT that any one person was personally quoted in each. The label below
// matches certification.ts featuredIn.label and stays modality-level.
export default function CertFeaturedInBar({ label }: { label: string }) {
  return (
    <section
      aria-label="Blood flow restriction modality featured in"
      className="border-y border-line bg-white"
    >
      <div className="container-rail py-10 sm:py-12">
        <p className="small-caps-line text-muted text-center">{label}</p>
        <div className="mt-6">
          <Marquee logos={FEATURED_IN} ariaLabel="Publication logos that have covered blood flow restriction" />
        </div>
      </div>
    </section>
  );
}
