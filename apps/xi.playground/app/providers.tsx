'use client';

import { ThemeRegistry } from '@xipkg/mui';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light" forcedTheme="light" enableSystem={false} themes={['light']}>
      <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
    </ThemeProvider>
  );
}
