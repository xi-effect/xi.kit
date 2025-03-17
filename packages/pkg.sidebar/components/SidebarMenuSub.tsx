import { cn } from '@xipkg/utils';
import React from 'react';

export const SidebarMenuSub = ({ className, ref, ...props }: React.ComponentProps<'ul'>) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      'border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5',
      'group-data-[collapsible=icon]:hidden',
      className,
    )}
    {...props}
  />
);
