/** @type {import('next').NextConfig} */
const repoName = 'wtfsidwmkt';
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/' + repoName,
  assetPrefix: '/' + repoName + '/',
};

module.exports = nextConfig;