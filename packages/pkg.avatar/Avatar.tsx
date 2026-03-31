'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@xipkg/utils';

export type AvatarSize = 'xxl' | 'xl' | 'l' | 'm' | 's' | '40';

type SizeMapT = {
  [key in AvatarSize]: string | number;
};

const sizeMap: SizeMapT = {
  xxl: 'h-[128px] w-[128px]',
  xl: 'h-[64px] w-[64px]',
  l: 'h-[48px] w-[48px]',
  '40': 'h-[40px] w-[40px]',
  m: 'h-[32px] w-[32px]',
  s: 'h-[24px] w-[24px]',
};

/** Размеры «плашки» +N в группе — совпадают с размерами Avatar при соответствующем data-size у дочерних аватаров */
const avatarGroupCountSizeClasses: Record<AvatarSize, string> = {
  xxl: 'group-has-data-[size=xxl]/avatar-group:h-[128px] group-has-data-[size=xxl]/avatar-group:w-[128px] group-has-data-[size=xxl]/avatar-group:text-4xl group-has-data-[size=xxl]/avatar-group:[&>svg]:h-12 group-has-data-[size=xxl]/avatar-group:[&>svg]:w-12',
  xl: 'group-has-data-[size=xl]/avatar-group:h-[64px] group-has-data-[size=xl]/avatar-group:w-[64px] group-has-data-[size=xl]/avatar-group:text-2xl group-has-data-[size=xl]/avatar-group:[&>svg]:h-8 group-has-data-[size=xl]/avatar-group:[&>svg]:w-8',
  l: 'group-has-data-[size=l]/avatar-group:h-[48px] group-has-data-[size=l]/avatar-group:w-[48px] group-has-data-[size=l]/avatar-group:text-base group-has-data-[size=l]/avatar-group:[&>svg]:h-6 group-has-data-[size=l]/avatar-group:[&>svg]:w-6',
  '40':
    "group-has-data-[size='40']/avatar-group:h-[40px] group-has-data-[size='40']/avatar-group:w-[40px] group-has-data-[size='40']/avatar-group:text-sm group-has-data-[size='40']/avatar-group:[&>svg]:h-5 group-has-data-[size='40']/avatar-group:[&>svg]:w-5",
  m: 'group-has-data-[size=m]/avatar-group:h-[32px] group-has-data-[size=m]/avatar-group:w-[32px] group-has-data-[size=m]/avatar-group:text-sm group-has-data-[size=m]/avatar-group:[&>svg]:h-4 group-has-data-[size=m]/avatar-group:[&>svg]:w-4',
  s: 'group-has-data-[size=s]/avatar-group:h-[24px] group-has-data-[size=s]/avatar-group:w-[24px] group-has-data-[size=s]/avatar-group:text-xs group-has-data-[size=s]/avatar-group:[&>svg]:h-3 group-has-data-[size=s]/avatar-group:[&>svg]:w-3',
};

interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  size?: AvatarSize;
}

const Avatar = ({ className, size = 'l', ...props }: AvatarProps) => (
  <AvatarPrimitive.Root
    data-slot="avatar"
    data-size={size}
    className={cn(
      'group/avatar relative flex shrink-0 select-none overflow-hidden rounded-full',
      sizeMap[size],
      className,
    )}
    {...props}
  />
);

interface AvatarImageProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {
  src: string;
  alt?: string;
  size?: AvatarSize;
}

const AvatarImage = ({
  className,
  size = 'l',
  src,
  alt = 'user avatar',
  ...props
}: AvatarImageProps) => (
  <AvatarPrimitive.Image
    data-slot="avatar-image"
    className={cn('aspect-square h-full w-full', className)}
    {...props}
    src={src}
    alt={alt}
  />
);

interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
  size?: AvatarSize;
  loading?: boolean;
}

const fallbackTextBySize: Record<AvatarSize, string> = {
  xxl: 'text-5xl',
  xl: 'text-2xl',
  l: '',
  '40': 'text-base',
  m: 'text-sm',
  s: 'text-xs',
};

const AvatarFallback = ({ className, size = 'l', loading, ...props }: AvatarFallbackProps) => (
  <AvatarPrimitive.Fallback
    data-slot="avatar-fallback"
    className={cn(
      loading
        ? 'animate-pulse bg-gray-10 dark:bg-gray-80'
        : 'bg-brand-80 text-gray-0 dark:bg-brand-20 dark:text-gray-100',
      'flex h-full w-full items-center justify-center rounded-full',
      fallbackTextBySize[size],
      className,
    )}
    {...props}
  />
);

interface AvatarGroupProps extends React.ComponentPropsWithoutRef<'div'> {}

const AvatarGroup = ({ className, ...props }: AvatarGroupProps) => (
  <div
    data-slot="avatar-group"
    className={cn(
      'group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-gray-0 dark:*:data-[slot=avatar]:ring-gray-100',
      className,
    )}
    {...props}
  />
);

interface AvatarGroupCountProps extends React.ComponentPropsWithoutRef<'div'> {}

const AvatarGroupCount = ({ className, ...props }: AvatarGroupCountProps) => (
  <div
    data-slot="avatar-group-count"
    className={cn(
      'relative flex shrink-0 items-center justify-center rounded-full bg-gray-10 text-gray-80 ring-2 ring-gray-0 select-none dark:bg-gray-80 dark:text-gray-100 dark:ring-gray-100',
      'h-[48px] w-[48px] text-base [&>svg]:h-6 [&>svg]:w-6',
      ...Object.values(avatarGroupCountSizeClasses),
      className,
    )}
    {...props}
  />
);

export { Avatar, AvatarImage, AvatarFallback, AvatarGroup, AvatarGroupCount };
export type {
  AvatarProps,
  AvatarImageProps,
  AvatarFallbackProps,
  AvatarGroupProps,
  AvatarGroupCountProps,
};
