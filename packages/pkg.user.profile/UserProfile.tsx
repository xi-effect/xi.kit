import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@xipkg/utils';

export const userProfileVariants = cva(
  'inline-flex items-center border w-fit px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-gray-10 text-gray-90',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
      size: {
        xxl: 'h-7 rounded-md text-[14px]',
        xl: 'h-5 rounded text-[12px]',
        l: 'h-5 rounded text-[12px]',
        m: 'h-7 rounded-md text-[14px]',
        s: 'h-5 rounded text-[12px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'm',
    },
  },
);

export interface UserProfileProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof userProfileVariants> {}

export const UserProfile = ({ className, variant, size, children, ...props }: UserProfileProps) => {
  return (
    <div className={cn(userProfileVariants({ variant, size }), className)} {...props}>
      Компонент не готов
    </div>
  );
};
