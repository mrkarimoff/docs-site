/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://docs-site-beryl.vercel.app',
  generateRobotsTxt: true, // (optional)
  // ...other options
};
