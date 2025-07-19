/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;

// next.config.js
module.exports = {
  // Désactivez l'export statique si vous utilisez des pages dynamiques
  output: 'standalone', // ou ne pas spécifier de sortie statique

  // Assurez-vous que le rendu dynamique est bien pris en charge
  experimental: {
    appDir: true, // Cette option est nécessaire pour activer la fonctionnalité du répertoire `app`
  },
};
