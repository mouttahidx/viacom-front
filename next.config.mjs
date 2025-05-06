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
      headers.push({
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
        source: '/:path*',
      });
    
    return headers;
  },
};
module.exports = {
  async redirects() {
    return [
      {
        source: '/CRM',
        destination: '/services/via-crm',
        permanent: true,
      },
    ]
  },
}
export default nextConfig;
