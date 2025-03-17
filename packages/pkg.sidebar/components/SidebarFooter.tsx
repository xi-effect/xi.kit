import { cn } from '@xipkg/utils';
import React from 'react';

export const SidebarFooter = ({ className, ref, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
};
