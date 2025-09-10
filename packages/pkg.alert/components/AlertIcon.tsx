import React from 'react';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@xipkg/utils';
import { Clock } from '@xipkg/icons';

import { alertVariants } from './Alert';

export interface AlertIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  variant?: 'default' | 'Moscow' | 'Ekaterinburg' | 'Kungur' | 'Petersburg' | 'Brand' | 'none';
}

const defaultIcons = {
  default: Clock,
  Moscow: Clock,
  Ekaterinburg: Clock,
  Kungur: Clock,
  Petersburg: Clock,
  Brand: Clock,
  none: null,
} as const;

const AlertIcon = React.forwardRef<HTMLDivElement, AlertIconProps>(
  ({ className, variant = 'default', icon, ...props }, ref) => {
    if (variant === 'none') {
      return null;
    }

    const IconComponent = icon || defaultIcons[variant] || defaultIcons.default;

    return (
      <div ref={ref} className={cn('flex items-center justify-center', className)} {...props}>
        <IconComponent className="h-5 w-5" />
      </div>
    );
  },
);

AlertIcon.displayName = 'AlertIcon';

export { AlertIcon };
