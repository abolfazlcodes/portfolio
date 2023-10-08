module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/projects',
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/projects'],
};
