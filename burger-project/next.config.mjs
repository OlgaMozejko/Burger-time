import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['']
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    };
    return config;
  },
};

export default nextConfig;