import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [new URL('https://github.com/fabriciocunhauk/**')],
  },
};

export default nextConfig;
