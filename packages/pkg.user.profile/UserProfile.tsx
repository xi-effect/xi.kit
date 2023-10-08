import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@xipkg/utils';
import { Avatar } from '@xipkg/avatar';

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

export interface UserProfileProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof userProfileVariants> {
  src?: string;
  preview?: string;
  text: string;
  label?: string;
  classNameText?: string;
  classNameLabel?: string;
}

export const UserProfile = ({
  className,
  classNameText,
  classNameLabel,
  src,
  preview,
  size = "m",
  text,
  label,
  ...props
}: UserProfileProps) => {
  return (
    <div className={cn(userProfileVariants({ size }), className)} {...props}>
      <Avatar size={size} src={src} text={preview} />
      <div className="flex flex-col">
        <span className={cn(userProfileTextVariants({ size }), classNameText)}>{text}</span>
        {size !== 's' && (
          <span className={cn(userProfileLabelVariants({ size }), classNameLabel)}>{label}</span>
        )}
      </div>
    </div>
  );
};
