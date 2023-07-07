import { ReactNode } from 'react';
// eslint-disable-next-line import/no-relative-packages
// import '@xipkg/tailwind/tailwind.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
