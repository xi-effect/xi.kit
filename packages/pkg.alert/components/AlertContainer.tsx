import React from 'react';
import { cn } from '@xipkg/utils';

export interface AlertContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const AlertContainer = React.forwardRef<HTMLDivElement, AlertContainerProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-wrap items-baseline gap-x-4 gap-y-2', className)}
      {...props}
    />
  ),
);
AlertContainer.displayName = 'AlertContainer';

export { AlertContainer };
