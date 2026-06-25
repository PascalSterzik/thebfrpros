import SectionLabel from "@/components/shared/SectionLabel";
import Highlighted from "@/components/shared/Highlighted";
import { TEAM_TRAINING_LAUNCH } from "@/content/team-training";

// Section 7b — Launch band (mid-page), mirrors /consultation ConsultingLaunch.
// In-page conversion point that opens the full-screen qualify overlay (a plain
// <a href="#start">, so this stays a server component). Navy field for mid-page
// emphasis. Keeps the #team-training-form anchor id for any legacy/deep links.

export default function TeamTrainingLaunch() {
  const l = TEAM_TRAINING_LAUNCH;
  return (
    <section id="team-training-form" className="section-wrap navy-field scroll-mt-24">
      <div className="container-rail">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel label={l.eyebrow} variant="light" />
          <h2 className="mt-5 font-display text-display-xl text-white text-balance">
            <Highlighted text={l.headline} phrase={l.highlight} />
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/85">{l.line}</p>
          <div className="mt-9 flex justify-center">
            <a href="#start" className="btn-primary !py-4 !text-xl">
              <span>{l.ctaLabel}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
