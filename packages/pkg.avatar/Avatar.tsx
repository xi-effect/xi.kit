'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@xipkg/utils';
import Image, { ImageProps } from 'next/image';

type SizeMapT = {
  [key in 'xxl' | 'xl' | 'l' | 'm' | 's']: number;
};

const sizeMap: SizeMapT = {
  xxl: 128,
  xl: 64,
  l: 48,
  m: 32,
  s: 24,
};

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    size?: 'xxl' | 'xl' | 'l' | 'm' | 's';
  }
>(({ className, size = 'l', ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      `relative flex h-[${sizeMap[size]}px] w-[${sizeMap[size]}px] shrink-0 overflow-hidden rounded-full`,
      className,
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & {
    imageProps: ImageProps;
    size?: 'xxl' | 'xl' | 'l' | 'm' | 's';
  }
>(({ className, size = 'l', imageProps, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    asChild
    {...props}
  >
    <Image
      {...imageProps}
      width={sizeMap[size] ?? 48}
      height={sizeMap[size] ?? 48}
      quality={100}
      alt="user avatar"
    />
  </AvatarPrimitive.Image>
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & {
    size?: 'xxl' | 'xl' | 'l' | 'm' | 's';
    loading?: boolean;
  }
>(({ className, size = 'l', loading, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      `${loading ? 'bg-gray-10 animate-pulse' : 'bg-brand-80 text-gray-0'} flex h-full w-full items-center justify-center rounded-full`,
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
