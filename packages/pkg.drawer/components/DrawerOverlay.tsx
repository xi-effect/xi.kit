import React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '@xipkg/utils';

export const DrawerOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) => (
  <DrawerPrimitive.Overlay
    className={cn('fixed inset-0 z-50 bg-gray-100/40', className)}
    {...props}
  />
);
