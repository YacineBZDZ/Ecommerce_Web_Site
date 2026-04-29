/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/ecommerce', // Replace with your repo name
  assetPrefix: '/ecommerce/',
  images: {
    unoptimized: true, // Important for static export
  },
  trailingSlash: true,
}

module.exports = nextConfig