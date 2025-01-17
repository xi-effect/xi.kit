'use client';

import { ColorButton } from 'components/ColorButton';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { config } from './config';

export type NavigationT = {
  children: ReactNode;
};

export const Navigation = ({ children }: NavigationT) => {
  const router = useRouter();

  return (
    <div className="flex h-screen w-screen overflow-auto relative p-2">
      <div className="sticky top-0 w-[300px] border-r border-gray-400 p-1 flex flex-col items-center space-y-2">
        <ColorButton />
        <ul className="w-full bg-transparent">
          {config.map((item, index) => (
            <li
              key={index}
              className="w-full rounded-lg bg-transparent hover:bg-gray-10 p-2 cursor-pointer"
              onClick={() => router.push(item.link)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 min-h-screen p-4">{children}</div>
    </div>
  );
};
