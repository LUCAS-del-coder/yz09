/** @type {import('next').NextConfig} */
const nextConfig = {
  // 輸出配置
  output: 'standalone',
  
  // 圖片配置
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: false,
  },
  
  // 實驗性功能
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  
  // 生產環境優化
  compress: true,
  
  // 重定向配置（如果需要）
  async redirects() {
    return [];
  },
  
  // 標題配置
  poweredByHeader: false,
  
  // React 嚴格模式
  reactStrictMode: true,
  
  // TypeScript 配置
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint 配置
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;

