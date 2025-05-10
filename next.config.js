/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})

const baseConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPWA(baseConfig);