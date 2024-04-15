/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'laravel.devvia.ca',
        port: '',
        pathname: '/storage/**',
      },
    ],
  },
  reactStrictMode: true,
  i18n: {
    locales: ['fr','en'],
    defaultLocale: 'fr',
    localeDetection: false,

  },
  async headers() {
    const headers = [];
     
    
    return headers;
  },
  async redirects() {
    return [
      {
        source: '/rencontre-avec-dennis-yu-une-immersion-dans-le-monde-du-seo',
        destination: '/blogue/rencontre-inspirante-entre-francois-beaudry-et-dennis-yu-a-affiliate-world-dubai-une-immersion-dans-le-monde-du-seo',
        permanent: true,
      },
      {
        source: '/via-communication-la-plus-grande-agence-web-a-quebec-pour-des-solutions-de-marketing-numerique-completes',
        destination: '/blogue/via-communication-la-plus-grande-agence-web-a-quebec-pour-des-solutions-de-marketing-numerique-completes',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
