import React from 'react';
import { cn } from '@xipkg/utils';

export interface AlertTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

const AlertTitle = React.forwardRef<HTMLDivElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-m-base font-semibold', className)} {...props} />
  ),
);
AlertTitle.displayName = 'AlertTitle';

export { AlertTitle };
