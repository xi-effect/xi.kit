import { cn } from '@xipkg/utils';
import React from 'react';

export const SidebarGroup = ({ className, ref, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn('relative flex w-full min-w-0 flex-col', className)}
      {...props}
    />
  );
};
