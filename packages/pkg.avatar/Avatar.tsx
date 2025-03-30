'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@xipkg/utils';

type SizeMapT = {
  [key in 'xxl' | 'xl' | 'l' | 'm' | 's']: string | number;
};

const sizeMap: SizeMapT = {
  xxl: 'h-[128px] w-[128px]',
  xl: 'h-[64px] w-[64px]',
  l: 'h-[48px] w-[48px]',
  m: 'h-[32px] w-[32px]',
  s: 'h-[24px] w-[24px]',
};

interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  size?: 'xxl' | 'xl' | 'l' | 'm' | 's';
}

const Avatar = ({ className, size = 'l', ...props }: AvatarProps) => (
  <AvatarPrimitive.Root
    className={cn(
      `relative flex shrink-0 overflow-hidden rounded-full ${sizeMap[size]}`,
      className,
    )}
    {...props}
  />
);

interface AvatarImageProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {
  src: string;
  alt?: string;
  size?: 'xxl' | 'xl' | 'l' | 'm' | 's';
}

const AvatarImage = ({ className, size = 'l', src, alt = 'user avatar', ...props }: AvatarImageProps) => (
  <AvatarPrimitive.Image
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  >
    <img
      src={src}
      alt={alt}
      width={sizeMap[size] as number}
      height={sizeMap[size] as number}
      className="h-full w-full object-cover"
    />
  </AvatarPrimitive.Image>
);

interface AvatarFallbackProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
  size?: 'xxl' | 'xl' | 'l' | 'm' | 's';
  loading?: boolean;
}

const AvatarFallback = ({ className, size = 'l', loading, ...props }: AvatarFallbackProps) => (
  <AvatarPrimitive.Fallback
    className={cn(
      `${loading ? 'bg-gray-10 dark:bg-gray-80 animate-pulse' : 'bg-brand-80 text-gray-0 dark:bg-brand-20 dark:text-gray-100'} flex h-full w-full items-center justify-center rounded-full`,
      className,
    )}
    {...props}
  />
);

export { Avatar, AvatarImage, AvatarFallback };
