/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/Ecommerce_Web_Site',
  //assetPrefix: '/Ecommerce_Web_Site', 
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig