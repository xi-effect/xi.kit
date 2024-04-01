import * as React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@xipkg/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@xipkg/avatar';

export const userProfileVariants = cva('flex flex-row items-center', {
  variants: {
    size: {
      l: 'h-[48px] gap-2',
      m: 'h-[32px] gap-2',
      s: 'h-[24px] gap-1.5',
    },
  },
  defaultVariants: {
    size: 'm',
  },
});

export const userProfileTextVariants = cva('text-gray-100', {
  variants: {
    size: {
      l: 'text-[16px]',
      m: 'text-[14px]',
      s: 'text-[12px]',
    },
  },
  defaultVariants: {
    size: 'm',
  },
});

export const userProfileLabelVariants = cva('font-normal text-gray-60 mt-[-2px]', {
  variants: {
    size: {
      l: 'text-[12px]',
      m: 'text-[10px]',
      s: '',
    },
  },
  defaultVariants: {
    size: 'm',
  },
});

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

export interface UserProfileProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'l' | 'm' | 's';
  src?: string;
  userId: number | null;
  color?: 'brand';
  withOutText?: boolean;
  text: string;
  label?: string;
  classNameText?: string;
  classNameLabel?: string;
}

export const UserProfile = ({
  className,
  classNameText,
  classNameLabel,
  withOutText = false,
  userId,
  src,
  size = 'm',
  color = 'brand',
  text = "X",
  label,
  ...props
}: UserProfileProps) => {
  return (
    <div className={cn(userProfileVariants({ size }), className)} {...props}>
      <Avatar size={size}>
        <AvatarImage
          src={`https://auth.xieffect.ru/api/users/${userId}/avatar.webp`}
          imageProps={{
            src: `https://auth.xieffect.ru/api/users/${userId}/avatar.webp`,
            alt: 'user avatar',
          }}
          alt="user avatar"
        />
        <AvatarFallback size={size}>{text[0].toUpperCase()}</AvatarFallback>
      </Avatar>
      {!withOutText && text && label && (
        <div className="flex flex-col">
          <span className={cn(userProfileTextVariants({ size }), classNameText)}>{text}</span>
          {size !== 's' && (
            <span className={cn(userProfileLabelVariants({ size }), classNameLabel)}>{label}</span>
          )}
        </div>
      )}
    </div>
  );
};
