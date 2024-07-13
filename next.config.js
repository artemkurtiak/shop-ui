/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
  },
  env: {
    NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
