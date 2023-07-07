import { ReactNode } from 'react';
// eslint-disable-next-line import/no-relative-packages
import '@xipkg/tailwind/tailwind.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
