import React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cn } from '@xipkg/utils';

type SidebarMenuSubButtonPropsT = React.ComponentProps<'a'> & {
  asChild?: boolean;
  size?: 'sm' | 'md';
  isActive?: boolean;
};

export const SidebarMenuSubButton = ({
  asChild = false,
  size = 'md',
  isActive,
  className,
  ref,
  ...props
}: SidebarMenuSubButtonPropsT) => {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        'hover:bg-gray-0 hover:gray-80 active:bg-gray-0 active:text-brand-80 [&>svg]:text-gray-80 flex h-8 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
        'data-[active=true]:bg-gray-0 data-[active=true]:text-gray-80',
        size === 'sm' && 'text-xs',
        size === 'md' && 'text-sm',
        'group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  );
};
