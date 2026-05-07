import SectionLabel from "@/components/shared/SectionLabel";
import Marquee from "@/components/shared/Marquee";
import { PARTNERS, STATS } from "@/lib/constants";

// Partners section as a marquee per §D.18. Same shared Marquee component used
// for the featured-in row, scroll direction matches.
export default function PartnersSection() {
  return (
    <section className="section-wrap cream-field" aria-label="Clinical partnerships">
      <div className="container-rail">
        <div className="max-w-3xl">
          <SectionLabel label="Clinical partnerships" />
          <h2 className="mt-5 font-display text-display-md text-navy text-balance">
            Trusted by {STATS.clinicsTrusted} clinics, including the largest PT network in the Northeast.
          </h2>
        </div>
      </div>
      <div className="mt-10">
        <Marquee logos={PARTNERS} ariaLabel="Clinic partner logos" />
      </div>
    </section>
  );
}
