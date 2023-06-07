/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apicdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
