import { Inter } from 'next/font/google';
import { Providers } from './providers';

import './index.css';

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
