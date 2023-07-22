import '@xipkg/tailwind/index.css';
import Link from 'next/link';
import { Providers } from './providers';
import ColorButton from './colorbutton';

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
          <div className="flex flex-col w-full max-h-screen relative">
            <div className="flex flex-row max-h-full">
              <ul className="flex flex-col p-2 w-56 bg-gray-40">
                {menu.map((item, index) => (
                  <li className="flex my-2 w-full h-4" key={index.toString()}>
                    <Link href={item.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <ColorButton />
                <div className="flex p-10 w-full items-center justify-center overflow-auto">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
