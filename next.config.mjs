import withBundleAnalyzer from '@next/bundle-analyzer';
const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
})

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
    minimumCacheTTL: 60*60*24*120,  

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
      {
        source: '/agence-google-ads',
        destination: '/services/agence-google-ads',
        permanent: true,
      },
      {
        source: '/agence-marketing-digital',
        destination: '/services/agence-marketing-digital',
        permanent: true,
      },
      {
        source: '/agence-seo',
        destination: '/services/agence-seo',
        permanent: true,
      },
      {
        source: '/faq-via-communication',
        destination: '/faq',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'host', value: 'www.viacommunication.com' }],
        destination: 'https://viacommunication.com/:path*',
        permanent: true,
      },
    ]
  },
};

 
 
export default bundleAnalyzer(nextConfig)
