import React from 'react';

import { cn } from '@xipkg/utils';

export const SidebarHeader = ({ className, ref, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  );
};
