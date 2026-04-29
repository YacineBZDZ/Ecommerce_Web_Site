/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/ecommerce',
  assetPrefix: '/ecommerce/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig