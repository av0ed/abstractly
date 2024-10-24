/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    deviceSizes: [375, 768, 1440],
    unoptimized: true,
  },
};

export default nextConfig;
