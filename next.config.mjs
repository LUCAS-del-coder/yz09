import path from 'path';
import { fileURLToPath } from 'url';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  
  // Performance optimizations for faster compilation
  swcMinify: true,
  
  // Faster development builds
  typescript: {
    // Skip type checking during build (faster, but less safe)
    // You can still run `tsc --noEmit` separately
    ignoreBuildErrors: false,
  },
  
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.mm7.tech',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  
  experimental: {
    optimizePackageImports: ['framer-motion', 'next-intl'],
    // Faster refresh
    optimizeCss: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Optimized webpack config for faster compilation
  webpack: (config, { dev, isServer }) => {
    // Alias configuration
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    
    // Faster builds in development
    if (dev) {
      // Reduce file watching overhead
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: [
          '**/node_modules',
          '**/.git',
          '**/.next',
          '**/public',
        ],
      };
      
      // Faster source maps in dev
      config.devtool = 'eval-cheap-module-source-map';
    }
    
    // Optimize JSON imports (large translation files)
    config.module.rules.push({
      test: /\.json$/,
      type: 'json',
    });
    
    // Cache optimization
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    return config;
  },
  
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);

