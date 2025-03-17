import { cn } from '@xipkg/utils';
import React from 'react';

export const SidebarMenuBadge = ({ className, ref, ...props }: React.ComponentProps<'div'>) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      'text-gray-80 pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none',
      'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-gray-80',
      'peer-data-[size=sm]/menu-button:top-1',
      'peer-data-[size=default]/menu-button:top-1.5',
      'peer-data-[size=lg]/menu-button:top-2.5',
      'group-data-[collapsible=icon]:hidden',
      className,
    )}
    {...props}
  />
);
