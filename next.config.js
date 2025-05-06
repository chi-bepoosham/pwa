/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

const baseConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPWA(baseConfig);
