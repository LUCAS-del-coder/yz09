/** @type {import('next').NextConfig} */
const nextConfig = {
  // 圖片配置
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // 生產環境優化
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  
  // 忽略構建時的 ESLint 錯誤
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // 忽略構建時的 TypeScript 錯誤
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

