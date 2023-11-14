/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  reactStrictMode: true,
  eslint: {
    // dirs: ["pages", "ui"], // ? for production linting
  },
};

module.exports = nextConfig;
