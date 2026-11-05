// Time-boxed price promotion for /certification (Nick, November 2026).
//
// While the sale is active, /certification shows the sale price beside the
// struck-through regular price, a sale banner, and routes every checkout CTA
// to the Teachable purchase link with the coupon pre-applied. Outside the
// window everything falls back to PRICING.bundlePrice automatically: the page
// is ISR (`revalidate` in src/app/certification/page.tsx), so it re-renders
// to the regular price within minutes after `endsAt`. To end early or extend,
// change `endsAt`. To run a new sale, change the fields below.
//
// The coupon itself lives in Teachable (percent off, same expiry). The page
// does not lower the checkout price on its own.

import { ENROLL_URL, PRICING } from "./constants";

export const SALE = {
  percentOff: 45,
  // 449 * 0.55 = 246.95, what Teachable charges with a 45% coupon.
  price: 246.95,
  couponCode: "NOVEMBER45",
  // Starts Nov 1 00:00 US Eastern (EDT), ends Nov 30 23:59:59 US Eastern (EST).
  startsAt: Date.parse("2026-11-01T00:00:00-04:00"),
  endsAt: Date.parse("2026-12-01T00:00:00-05:00"),
  label: "November sale",
  endLabel: "November 30",
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
  /** Checkout link, with the coupon applied while on sale. */
  enrollUrl: string;
};

export function getPriceState(onSale: boolean): PriceState {
  const regularLabel = formatPrice(PRICING.bundlePrice);
  if (!onSale) {
    return { onSale, priceLabel: regularLabel, regularLabel, enrollUrl: ENROLL_URL };
  }
  return {
    onSale,
    priceLabel: formatPrice(SALE.price),
    regularLabel,
    enrollUrl: `${ENROLL_URL}&coupon_code=${SALE.couponCode}`,
  };
}

/** Swaps the regular price inside a copy string for the price paid today. */
export function withCurrentPrice(text: string, state: PriceState): string {
  return state.onSale ? text.split(state.regularLabel).join(state.priceLabel) : text;
}
