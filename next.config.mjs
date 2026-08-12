/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    // Type-checked separately via `npm run typecheck`; keep production
    // builds fast and deterministic in constrained CI/build environments.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
