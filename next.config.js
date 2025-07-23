/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/management-dashboard' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/management-dashboard/' : '',
}

module.exports = nextConfig 