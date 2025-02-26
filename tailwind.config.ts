import type { Config } from 'tailwindcss';

export const shadows = {
  xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
  sm: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
  base: '0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)',
  md: '2px 2px 4px -1px rgba(0, 0, 0, 0.06), 5px 5px 6px -1px rgba(0, 0, 0, 0.10)',
  lg: '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
  xl: '0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)',
  '2xl': '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: '0px 2px 4px 0px rgba(0, 0, 0, 0.06) inset',
  darkLg:
    '0px 15px 40px 0px rgba(0, 0, 0, 0.40), 0px 5px 10px 0px rgba(0, 0, 0, 0.20), 0px 0px 0px 1px rgba(0, 0, 0, 0.10)',
  outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
  custom: '3px 5px 5px rgba(0, 0, 0, 0.1), -5px -1px 15px rgba(0, 0, 0, 0.1)', // 균형 잡힌 상하좌우
  'custom-dark':
    '3px 5px 5px rgba(255, 255, 255, 0.1), -5px -1px 15px rgba(255, 255, 255, 0.1)', // 다크 모드
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xl-custom': '1300px',
      },
      fontFamily: {
        gmarket: 'var(--font-gmarket-sans)',
      },
      colors: {
        subBg: 'rgba(248, 251, 252, 0.65)',
      },
      backgroundImage: {
        'bottom-shadow':
          'linear-gradient(to_bottom,rgba(20,20,20,0)_70%,rgba(20,20,20,0.1)_80%,rgba(20,20,20,0.3)_95%)',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
};

export default config;
