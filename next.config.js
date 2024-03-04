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
  i18n: {
    locales: ['en', 'ru'], // replace with your locales
    defaultLocale: 'en-US', // replace with your default locale
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/:locale',
        permanent: true,
        locale: false,
      },
      // {
      //   source: '/contributing-code/:path*',
      //   destination: '/:locale/contributing-code/:path*',
      //   permanent: true,
      //   locale: false,
      // },
    ];
  },
};

// Merge NextIntl config with Next.js config
module.exports = withNextIntl(nextConfig);
