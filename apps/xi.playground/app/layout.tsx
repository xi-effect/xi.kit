'use client';

import '@xipkg/tailwind/index.css'
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { LayoutPages } from 'kit/LayoutPages';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body style={{ display: 'flex', width: '100vw', minHeight: '100%' }}>
        <Providers>
          <LayoutPages>{children}</LayoutPages>
        </Providers>
      </body>
    </html>
  );
}
