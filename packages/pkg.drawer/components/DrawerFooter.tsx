import React from 'react';
import { cn } from '@xipkg/utils';

export const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('bg-background-surface', className)} {...props} />
);
