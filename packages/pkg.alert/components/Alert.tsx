import React from 'react';
import { cn } from '@xipkg/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const alertVariants = cva(
  'relative w-full max-w-[520px] flex items-start justify-start gap-4 rounded-2xl p-4',
  {
    variants: {
      variant: {
        default: '',
        error: 'text-status-error-text bg-status-error-background fill-status-error-accent',
        success: 'text-status-success-text bg-status-success-background fill-status-success-accent',
        warning: 'text-status-warning-text bg-status-warning-background fill-status-warning-accent',
        info: 'text-text-secondary bg-background-subtle fill-icon-secondary',
        brand: 'text-status-info-text bg-status-info-background fill-status-info-accent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
  ),
);
Alert.displayName = 'Alert';

export { Alert, alertVariants };
