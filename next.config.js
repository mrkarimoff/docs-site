const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts',
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  redirects: async () => {
    return [
      {
        source: '/(en|ru)/:path*',
        destination: '/:path*',
        permanent: true,
        locale: false,
      },
      {
        source: '/:path*',
        destination: '/en/:path*',
        permanent: true,
        locale: false,
      },
    ];
  },
};

// Merge NextIntl config with Next.js config
module.exports = withNextIntl(nextConfig);
