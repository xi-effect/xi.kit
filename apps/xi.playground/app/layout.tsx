'use client';

import { Providers } from './providers';
import { LayoutPages } from 'kit/LayoutPages';

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', width: '100vw', minHeight: '100%' }}>
        <Providers>
          <LayoutPages>{children}</LayoutPages>
        </Providers>
      </body>
    </html>
  );
}
