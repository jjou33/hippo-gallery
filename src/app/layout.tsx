import Providers from '#/Providers';
import Footer from '#/shared/Footer';
import Header from '#/shared/Header';
import Toast from '#/shared/ToastComponent';
import { gmarketSans } from '@/styles/fonts';
import '@/styles/globals.css';
import { cn } from '@/utils/styles';
import Head from 'next/head';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hippo Gallery',
  description: 'Enjoy the Hippo Gallery',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'relative flex size-full flex-col font-gmarket',
          gmarketSans.variable
        )}
      >
        <Providers>
          <Head>
            <link
              rel="icon"
              href="../../public/favicon.svg"
              type="image/svg+xml"
            />
          </Head>
          <div
            className={cn(
              'flex h-screen w-screen flex-col items-center text-sm lg:text-base'
            )}
          >
            <Header />
            <main className="relative flex size-full flex-1 items-center justify-center overflow-auto">
              {children}
              {modal}
            </main>
            <Toast />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
