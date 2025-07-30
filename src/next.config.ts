import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tendersoft.kz',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'goszakupki.by',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'icetrade.by',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.butb.by',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
