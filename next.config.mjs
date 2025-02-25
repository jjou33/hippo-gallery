import removeImports from 'next-remove-imports';

const removeImportsFun = removeImports({});
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yenphrzelwcfgsakdphk.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  // Webpack 설정 추가
  webpack(config) {
    // SVG 파일을 React 컴포넌트로 사용
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // 다른 커스텀 설정이 필요하다면 여기에 추가
    return config;
  },
};

export default removeImportsFun({
  ...nextConfig,
});
