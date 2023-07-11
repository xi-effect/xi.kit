'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light" forcedTheme="light" enableSystem={false} themes={['light']}>
      {children}
    </ThemeProvider>
  );
}
