/** @type {import('next').NextConfig} */
// §Pascal-2026-05-08 v12: dropped `output: 'export'` and `images.unoptimized`
// so Vercel runs Next.js's automatic image optimization (WebP/AVIF + responsive
// sizing). Pages without dynamic data are still pre-rendered statically.
// §2026-10-09: image optimization stays ON. After the 2026-10-08 quota outage
// (HTTP 402) the transform count is cut with a year-long cache, WebP only and
// fewer widths. Billing = unique source x width x format, re-billed on expiry.
const nextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 31536000,
    formats: ["image/webp"],
    deviceSizes: [750, 1200, 1920, 2560],
    imageSizes: [128, 256, 384],
  },
};

export default nextConfig;
