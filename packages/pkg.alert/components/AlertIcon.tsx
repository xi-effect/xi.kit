import React from 'react';
import { cn } from '@xipkg/utils';
import { Notification, Close, Check, Plus } from '@xipkg/icons';
import { type VariantProps } from 'class-variance-authority';
import { alertVariants } from './Alert';

export interface AlertIconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const defaultIcons = {
  default: Notification,
  destructive: Close,
  warning: Plus,
  success: Check,
} as const;

const AlertIcon = React.forwardRef<HTMLDivElement, AlertIconProps>(
  ({ className, variant = 'default', icon, ...props }, ref) => {
    const IconComponent = icon || defaultIcons[variant || 'default'];

    return (
      <div ref={ref} className={cn('', className)} {...props}>
        <IconComponent className="h-4 w-4" />
      </div>
    );
  },
);
AlertIcon.displayName = 'AlertIcon';

export { AlertIcon };
