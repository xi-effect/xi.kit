'use client';

import '@xipkg/tailwind/index.css';
import { Providers } from './providers';
import ColorButton from './colorbutton';
import { usePathname, useRouter } from 'next/navigation';

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
  const current = usePathname();
  const router = useRouter();

  const onChangePage = (path: string) => {
    router.push(path);
  };

  return (
    <html lang="en">
      <body className="flex w-screen min-h-min">
        <Providers>
          <div className="flex flex-col w-full max-h-screen relative">
            <div className="flex flex-row max-h-full">
              <ul className="flex flex-col p-2 w-56 border-r-2 space-y-2">
                {menu.map((item, index) => (
                  <li
                    className={`flex w-full pl-2 hover:bg-gray-10 duration-300 cursor-pointer ${
                      current === item.link && 'bg-gray-20 hover:bg-gray-20'
                    } text-l`}
                    key={index.toString()}
                    onClick={() => onChangePage(item.link)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <ColorButton />
                <div className="p-10 w-full h-full items-center justify-center overflow-auto">
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
