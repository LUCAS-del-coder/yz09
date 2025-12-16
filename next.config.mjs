/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  // Ensure PostCSS is properly configured
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;

