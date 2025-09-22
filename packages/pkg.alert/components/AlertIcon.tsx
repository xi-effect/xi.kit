import React from 'react';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@xipkg/utils';
import { Clock } from '@xipkg/icons';

import { alertVariants } from './Alert';

export interface AlertIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  variant?: VariantProps<typeof alertVariants>['variant'] | 'none';
}

const AlertIcon = React.forwardRef<HTMLDivElement, AlertIconProps>(
  ({ className, children, ...props }, ref) => {

    return (
      <div ref={ref} className={cn('flex items-center justify-center', className)} {...props}>
        {children}
      </div>
    );
  },
);

AlertIcon.displayName = 'AlertIcon';

export { AlertIcon };
