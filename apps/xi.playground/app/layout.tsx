import '@xipkg/tailwind/index.css';
import Link from 'next/link';
import { Providers } from './providers';

const menu = [
  {
    label: 'Button',
    link: '/components/button',
  },
  {
    label: 'Input',
    link: '/components/input',
  },
  {
    label: 'Modal',
    link: '/components/modal',
  },
];

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="flex w-screen min-h-min">
        <Providers>
          <div className="flex flex-row p-2 w-full">
            <ul className="flex flex-col p-2 w-56 h-full bg-gray-40">
              {menu.map((item, index) => (
                <li className="flex my-2 w-full h-4" key={index.toString()}>
                  <Link href={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex p-2 w-full">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
