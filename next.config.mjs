/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'viacommunication.test',
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

export default nextConfig;
