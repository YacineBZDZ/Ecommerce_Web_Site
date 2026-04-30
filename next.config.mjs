/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/Ecommerce_Web_Site',
  assetPrefix: '/Ecommerce_Web_Site/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  exportPathMap: async () => {
    return {
      '/': { page: '/' },
      '/success': { page: '/success' },
    }
  }
}

export default nextConfig