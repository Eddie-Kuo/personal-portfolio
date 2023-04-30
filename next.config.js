/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'ozkuzfbdevqwhsqwknht.supabase.co',
      'cdn.sanity.io',
      'img.icons8.com',
    ],
  },
};

module.exports = nextConfig;
