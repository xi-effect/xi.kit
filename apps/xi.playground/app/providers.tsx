'use client';

import { getInitColorSchemeScript } from '@mui/material/styles';
import { ThemeRegistry } from '@xipkg/mui';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      {getInitColorSchemeScript()}
      <ThemeProvider attribute="data-mui-color-scheme">
        <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </ThemeProvider>
    </>
  );
}
