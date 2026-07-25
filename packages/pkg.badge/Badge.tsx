import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@xipkg/utils';

export const badgeVariants = cva(
  'inline-flex items-center border w-fit px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-background-subtle text-text-primary',
        secondary: 'border-transparent bg-status-info-background text-status-info-text',
        destructive: 'border-transparent bg-status-error-background text-status-error-text',
        success: 'border-transparent bg-status-success-background text-status-success-text',
        warning: 'border-transparent bg-status-warning-background text-status-warning-text',
        outline: 'text-text-primary border-border-strong',
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
