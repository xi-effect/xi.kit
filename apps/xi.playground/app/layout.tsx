// eslint-disable-next-line import/no-relative-packages
// import '@xipkg/tailwind/tailwind.css';

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
