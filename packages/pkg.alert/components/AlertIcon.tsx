import React from 'react';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@xipkg/utils';
import { Clock } from '@xipkg/icons';

import { alertVariants } from './Alert';

export interface AlertIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  variant?: VariantProps<typeof alertVariants>['variant'] | 'none';
}

const defaultIcons = {
  default: Clock,
  error: Clock,
  success: Clock,
  warning: Clock,
  info: Clock,
  brand: Clock,
  none: null,
} as const;

type DefaultIconsKeys = keyof typeof defaultIcons;

const AlertIcon = React.forwardRef<HTMLDivElement, AlertIconProps>(
  ({ className, variant = 'default', icon, ...props }, ref) => {
    if (variant === 'none') {
      return null;
    }

    const IconComponent =
      icon ||
      (variant && variant in defaultIcons
        ? defaultIcons[variant as DefaultIconsKeys]
        : defaultIcons.default);

    if (!IconComponent) {
      return null;
    }

    return (
      <div ref={ref} className={cn('flex items-center justify-center', className)} {...props}>
        <IconComponent className="h-5 w-5" />
      </div>
    );
  },
);

AlertIcon.displayName = 'AlertIcon';

export { AlertIcon };
