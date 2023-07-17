/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  async redirects() {
    // 경로가 바뀜
    return [
      {
        source: '/products/deleted_forever', // 이 경로로 오면
        destination: '/products', // 여기로 redirect
        permanent: true, // 캐시해두고 다른 사용자가 해당 url로 온다면 products로 바로 redirect 가능!
      },
      {
        source: '/products/deleted_temp',
        destination: '/products',
        permanent: false, // 영원히 redirect 아님
      },
    ];
  },
  async rewrites() {
    // 노출되면 안되는 url을 다른 url로 덮어씌움 (프로젝트 구조 미노출, 긴 url인 경우)
    return [
      {
        source: '/been',
        destination: '/about/me/been',
      },
      {
        source: '/item/:slug',
        destination: '/products/:slug',
      },
    ];
  },
};

module.exports = nextConfig;
