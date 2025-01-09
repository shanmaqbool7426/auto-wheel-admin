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
  images: {
    unoptimized: true,
  },
  output: 'standalone'
};

module.exports = nextConfig; 