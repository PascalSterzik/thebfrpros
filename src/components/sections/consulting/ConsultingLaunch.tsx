import SectionLabel from "@/components/shared/SectionLabel";
import Highlighted from "@/components/shared/Highlighted";
import { CONSULTING_FORM, CONSULTING_HERO } from "@/content/consulting";

// Mid-page launch band where the inline form used to sit. The form itself now
// lives in the full-screen ConsultingFormOverlay; this is the in-page
// conversion point that opens it (a plain <a href="#start">, so this stays a
// server component). Keeps the #consulting-form anchor id for any legacy links.

export default function ConsultingLaunch() {
  return (
    <section id="consulting-form" className="section-wrap bg-white scroll-mt-24">
      <div className="container-rail">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel label={CONSULTING_FORM.eyebrow} />
          <h2 className="mt-5 font-display text-display-xl text-navy text-balance">
            <Highlighted text={CONSULTING_FORM.headline} phrase={CONSULTING_FORM.highlight} />
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">{CONSULTING_FORM.intro}</p>
          <div className="mt-9 flex justify-center">
            <a href="#start" className="btn-primary !py-4 !text-xl">
              <span>{CONSULTING_HERO.primaryCta}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
