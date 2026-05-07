import Marquee from "@/components/shared/Marquee";
import { FEATURED_IN } from "@/lib/constants";

// Featured-in marquee (replaces the prior static logo row). Reuses the shared
// Marquee component. Edge fade hides the seam at both ends.
export default function CredibilityBar() {
  return (
    <section
      aria-label="BFR research and Dr. Rolnick featured in"
      className="border-y border-line bg-white"
    >
      <div className="container-rail py-10 sm:py-12">
        <p className="small-caps-line text-muted text-center">
          BFR research featured in
        </p>
        <div className="mt-6">
          <Marquee logos={FEATURED_IN} ariaLabel="Featured-in publication logos" />
        </div>
      </div>
    </section>
  );
}
