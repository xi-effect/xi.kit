'use client';

import { LayoutPages } from 'components/LayoutPages';
import { ThemeProvider } from 'next-themes';
import React from 'react';

export function Providers(props) {
  const { children } = props;

  return (
    <>
      <ThemeProvider attribute="data-theme">
        <LayoutPages>{children}</LayoutPages>
      </ThemeProvider>
    </>
  );
}
