import React from 'react';

import { cn } from '@xipkg/utils';

export const SidebarMenu = ({ className, ref, ...props }: React.ComponentProps<'ul'>) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn('flex w-full min-w-0 flex-col gap-1', className)}
    {...props}
  />
);
