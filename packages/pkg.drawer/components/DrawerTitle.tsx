import React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '@xipkg/utils';

export const DrawerTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) => (
  <DrawerPrimitive.Title
    className={cn('text-xl leading-none font-semibold tracking-tight', className)}
    {...props}
  />
);
