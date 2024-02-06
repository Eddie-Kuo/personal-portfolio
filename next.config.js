/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'ozkuzfbdevqwhsqwknht.supabase.co',
      'trkoocuknhonyttaxwsy.supabase.co',
      'cdn.sanity.io',
      'img.icons8.com',
      'user-images.githubusercontent.com',
    ],
  },
};

module.exports = nextConfig;
