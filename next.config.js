/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },

      {
        protocol: "http",
        hostname: "192.168.81.31:3000",
      },
      {
        protocol: "https",
        hostname: "cardinaltrc.com",
      },
    ],
    minimumCacheTTL: 60,
  },
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
