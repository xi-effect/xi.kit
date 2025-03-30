import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@xipkg/utils';

export const badgeVariants = cva(
  'inline-flex items-center border w-fit px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-gray-10 text-gray-90 dark:bg-gray-80 dark:text-gray-10',
        secondary: 'border-transparent bg-brand-20 text-brand-100 dark:bg-brand-80 dark:text-gray-0',
        destructive: 'border-transparent bg-red-20 text-red-100 dark:bg-red-80 dark:text-gray-0',
        success: 'border-transparent bg-green-20 text-green-100 dark:bg-green-80 dark:text-gray-0',
        warning: 'border-transparent bg-yellow-20 text-yellow-100 dark:bg-yellow-80 dark:text-gray-0',
        outline: 'text-gray-100 border-gray-30 dark:text-gray-0 dark:border-gray-70',
      },
      size: {
        l: 'h-8 rounded-lg text-[16px] px-3',
        m: 'h-7 rounded-md text-[14px] px-2.5',
        s: 'h-5 rounded text-[12px] px-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'm',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

export const Badge = ({ className, variant, size, children, ...props }: BadgeProps) => {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {children}
    </div>
  );
};

Badge.displayName = 'Badge';
