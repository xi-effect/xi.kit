import React from 'react';
import { cn } from '@xipkg/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground border-border',
        destructive: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
        warning: 'border-yellow-500/50 text-yellow-700 bg-yellow-50 dark:text-yellow-400 dark:bg-yellow-950/50 [&>svg]:text-yellow-600 dark:[&>svg]:text-yellow-400',
        success: 'border-green-500/50 text-green-700 bg-green-50 dark:text-green-400 dark:bg-green-950/50 [&>svg]:text-green-600 dark:[&>svg]:text-green-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
);
Alert.displayName = 'Alert';

export { Alert, alertVariants };
