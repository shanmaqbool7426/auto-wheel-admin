/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['apexcharts', 'react-apexcharts'],
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      stream: false,
      path: false,
      process: false
    };
    return config;
  },
  // Add this for Netlify
  target: 'serverless',
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig; 