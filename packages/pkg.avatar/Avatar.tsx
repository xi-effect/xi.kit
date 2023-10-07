'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@xipkg/utils';
import Image, { type ImageProps } from 'next/image';

export const avatarVariants = cva('flex items-center justify-center font-semibold', {
  variants: {
    color: {
      brand: 'bg-brand-0 text-brand-100 dark:bg-brand-80 dark:text-brand-100',
    },
    size: {
      xxl: 'h-[128px] w-[128px] min-h-[128px] min-w-[128px] rounded-[64px] text-[48px]',
      xl: 'h-[64px] w-[64px] min-h-[64px] min-w-[64px] rounded-[32px] text-[24px]',
      l: 'h-[48px] w-[48px] min-h-[48px] min-w-[48px] rounded-[24px] text-[16px]',
      m: 'h-[32px] w-[32px] min-h-[32px] min-w-[32px] rounded-[16px] text-[12px]',
      s: 'h-[24px] w-[24px] min-h-[24px] min-w-[24px] rounded-[12px] text-[10px]',
    },
  },
  defaultVariants: {
    color: 'brand',
    size: 'l',
  },
});

const sizeMap = {
  xxl: 128,
  xl: 64,
  l: 48,
  m: 32,
  s: 24,
};

const imageStyle = {
  borderRadius: '50%',
};

export interface AvatarProps extends VariantProps<typeof avatarVariants> {
  text?: string;
  className?: string;
  src?: string;
  alt?: string;
}

export const Avatar = ({
  text,
  src,
  className,
  color,
  size = 'xxl',
  alt,
  ...props
}: AvatarProps) => {
  const avatarSize = size ? sizeMap[size] : 32;

  if (text) return <div className={cn(avatarVariants({ color, size }), className)}>{text}</div>;

  if (src)
    return (
      <Image
        style={imageStyle}
        src={src}
        width={avatarSize}
        height={avatarSize}
        alt={alt || 'user avatar'}
        {...props}
      />
    );
};
