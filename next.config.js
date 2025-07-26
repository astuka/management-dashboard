/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove basePath and assetPrefix for Netlify deployment
  // These should only be used if your site is hosted in a subdirectory
}

module.exports = nextConfig 