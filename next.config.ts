import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Adicione esta linha para permitir a qualidade 90
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apiceblog0.wordpress.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'public-api.wordpress.com',
        pathname: '**',
      },
    ],
  },
  // Mantendo sua configuração do Swiper
  transpilePackages: ['swiper'],
};

export default nextConfig;