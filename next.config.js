/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  reactStrictMode: true,
  eslint: {
    // dirs: ["pages", "ui"], // ? for production linting
  },
  // distDir: 'dist',
};

module.exports = nextConfig;
