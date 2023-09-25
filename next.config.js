/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // dirs: ["pages", "ui"], // ? for production linting
  },
  distDir: 'dist',
};

module.exports = nextConfig;
