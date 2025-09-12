import React from 'react';
import { cn } from '@xipkg/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const alertVariants = cva(
  'relative w-full max-w-[520px] flex items-start justify-start gap-4 rounded-2xl p-4',
  {
    variants: {
      variant: {
        default: '',
        Moscow: 'text-red-100 bg-red-0 fill-red-100',
        Ekaterinburg: 'text-green-100 bg-green-0 fill-green-100',
        Kungur: 'text-orange-80 bg-orange-0 fill-orange-80',
        Petersburg: 'text-gray-80 bg-gray-5 fill-gray-80',
        Brand: 'text-brand-100 bg-brand-0 fill-brand-100',
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
