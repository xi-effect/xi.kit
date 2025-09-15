import React from 'react';
import { cn } from '@xipkg/utils';

export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}

const AlertDescription = React.forwardRef<HTMLDivElement, AlertDescriptionProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-s-base font-normal', className)} {...props} />
  ),
);
AlertDescription.displayName = 'AlertDescription';

export { AlertDescription };
