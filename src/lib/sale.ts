// Time-boxed price promotion (Nick, November 2026).
//
// While the sale is active:
//   - every page except the paid LP /bfr-certification shows the sale banner
//     (src/components/shared/SaleBanner.tsx, mounted in the root layout);
//   - /certification shows the sale price beside the struck-through regular price.
// Outside the window everything falls back to PRICING.bundlePrice by itself:
// /certification is ISR (`revalidate` in src/app/certification/page.tsx) and the
// banner re-checks the clock in the browser. To end early or extend, change
// `endsAt`. To run a new sale, change the fields below.
//
// The checkout price is set in Teachable by the client. This file only changes
// what the website shows.

import { PRICING } from "./constants";

export const SALE = {
  percentOff: 45,
  // 449 * 0.55 = 246.95
  price: 246.95,
  // Starts Nov 1 00:00 US Eastern (EDT), ends Nov 30 23:59:59 US Eastern (EST).
  startsAt: Date.parse("2026-11-01T00:00:00-04:00"),
  endsAt: Date.parse("2026-12-01T00:00:00-05:00"),
  label: "November sale",
  endLabel: "November 30",
  // Banner reads: NOVEMBER SALE | GET 45% OFF THE BFR CERTIFICATION | [countdown]
  bannerLabel: "NOVEMBER SALE",
  bannerOffer: "GET 45% OFF THE BFR CERTIFICATION",
  bannerHref: "/certification",
} as const;

export function isSaleActive(now: number = Date.now()): boolean {
  return now >= SALE.startsAt && now < SALE.endsAt;
}

export function formatPrice(n: number): string {
  return Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`;
}

export type PriceState = {
  onSale: boolean;
  /** What the buyer pays today. */
  priceLabel: string;
  /** The regular price, shown struck through while on sale. */
  regularLabel: string;
};

export function getPriceState(onSale: boolean): PriceState {
  const regularLabel = formatPrice(PRICING.bundlePrice);
  return {
    onSale,
    priceLabel: onSale ? formatPrice(SALE.price) : regularLabel,
    regularLabel,
  };
}

/** Swaps the regular price inside a copy string for the price paid today. */
export function withCurrentPrice(text: string, state: PriceState): string {
  return state.onSale ? text.split(state.regularLabel).join(state.priceLabel) : text;
}
