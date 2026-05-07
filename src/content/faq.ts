// 9-question FAQ used across all variants. AEO-optimized: every answer leads with a
// direct sentence-1 response, then expands. Pulled from 04-offer-brief.md objection list.
// FAQPage schema reads from this same source so the rendered Q+A and JSON-LD match exactly.

export type FAQItem = { q: string; a: string };

export const FAQ: FAQItem[] = [
  {
    q: "Is The Complete BFR Certification accepted for CEU credits in my state?",
    a: "Yes, in most US states. The certification is approved by the Board of Certification (BOC, AP# P10226), the New York State PT Board (through December 11, 2027), and the New Jersey PT Board (through January 31, 2026). The American Physical Therapy Association recognizes blood flow restriction within PT scope of practice, and the National Athletic Trainers Association approves BFR for ATs. If your state isn't listed, contact us at nick@thebfrpros.com and we'll confirm the specific path for your license.",
  },
  {
    q: "Do I need to buy a specific cuff to take the certification?",
    a: "No. The certification is equipment-agnostic by design. You can use Delfi PTS, SmartCuffs, B Strong, LiveBand, KAATSU, or any other quality cuff. Bonus #4 includes negotiated discount codes across the major manufacturers, so you can pick the cuff that fits your practice and budget after the curriculum has taught you what to look for.",
  },
  {
    q: "How is The BFR Pros different from Owens Recovery Science, PESI, or Mike Reinold's course?",
    a: "Three differences: research depth, equipment independence, and curriculum scope. The BFR Pros is led by Dr. Nicholas Rolnick, who has authored 72+ peer-reviewed BFR publications. Owens is excellent education tied to the Delfi PTS device. PESI is a generic CE platform with shorter coverage. Mike Reinold's course is a strong starting point. The Complete BFR Certification is the comprehensive 37-module specialty for clinicians who want to be the BFR specialist in their region.",
  },
  {
    q: "How long does the certification take to complete?",
    a: "11.75 hours of video content. You can do it in a weekend, take 4 weeks, or work through it slower than that. The format is on-demand video plus downloadable resources, so you can complete it on your commute or between patients. Modules are searchable, and you have lifetime access, so you can return to them as a reference once certified.",
  },
  {
    q: "What if a patient has an adverse event?",
    a: "Bonus #2 is a comprehensive patient screening form that risk-stratifies every candidate against precautions and contraindications before the first cuff goes on. Bonus #1 is a drop-in liability waiver. Bonus #7 is the full precautions and contraindications list, sourced from the Frontiers literature review. The safety module covers risk stratification with the same data the major literature reviews use.",
  },
  {
    q: "Is BFR safe?",
    a: "Yes, when applied by a screened practitioner with appropriate pressures. The largest published BFR safety survey (n=12,642 sessions) reported deep vein thrombosis at 0.06%, pulmonary embolism at 0.01%, and rhabdomyolysis at 0.01%, rates comparable to or lower than standard resistance training. Safety depends on screening, equipment quality, and pressure prescription, all of which the certification covers in detail.",
  },
  {
    q: "What's the refund policy?",
    a: "100% money-back guarantee within 30 days, no questions asked. If you complete the modules, apply BFR with a patient, and decide it's not for your practice, email us within 30 days of purchase and we refund the full $449.",
  },
  {
    q: "I'm an athletic trainer or strength coach, not a PT. Is this for me?",
    a: "Yes. The certification is built for licensed PTs, ATs, and S&C coaches. The National Athletic Trainers Association approves BFR for ATs. Bonus #9 (Athletic BFR Programming) is written specifically for performance settings, covering in-season maintenance, hypertrophy at low loads, and ischemic preconditioning. AT and S&C-specific case studies appear throughout the curriculum.",
  },
  {
    q: "Can my clinic owner reimburse the certification?",
    a: "Most clinic owners reimburse evidence-based continuing education. The certification produces a Certificate of Completion you can submit for reimbursement. If you'd like a brief ROI letter to send your owner showing the cash-pay BFR program revenue potential, email us at nick@thebfrpros.com and we'll send the template.",
  },
];
