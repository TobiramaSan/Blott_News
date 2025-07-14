import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "image.cnbcfm.com",
      },
      {
        protocol: "https",
        hostname: "data.bloomberglp.com",
      },
      {
        protocol: "https",
        hostname: "static2.finnhub.io",
      },
      // {
      //   protocol: "https",
      //   hostname: "www.reuters.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "www.ft.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "www.wsj.com",
      // }
    ],
  },
};

export default nextConfig;
