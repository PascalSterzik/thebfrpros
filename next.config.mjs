/** @type {import('next').NextConfig} */
// §Pascal-2026-05-08 v12: dropped `output: 'export'` and `images.unoptimized`
// so Vercel runs Next.js's automatic image optimization (WebP/AVIF + responsive
// sizing). Pages without dynamic data are still pre-rendered statically.
const nextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
};

export default nextConfig;
