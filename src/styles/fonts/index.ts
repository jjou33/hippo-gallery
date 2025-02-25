import localFont from 'next/font/local';

export const gmarketSans = localFont({
  src: [
    {
      path: '../../../public/fonts/GmarketSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/GmarketSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/GmarketSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-gmarket-sans', // Tailwind CSS에서 사용할 변수
  display: 'swap',
});
