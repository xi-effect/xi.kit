import React from 'react';
import { cn } from '@xipkg/utils';

export interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-m-base font-semibold', className)} {...props} />
  ),
);
AlertTitle.displayName = 'AlertTitle';

export { AlertTitle };
