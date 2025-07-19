/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true
  },
  // Configuration pour le développement et la production
  experimental: {
    // Plus besoin de appDir dans Next.js 15, c'est activé par défaut
  },
};

module.exports = nextConfig;
