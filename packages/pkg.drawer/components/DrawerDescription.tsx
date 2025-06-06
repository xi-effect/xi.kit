import React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '@xipkg/utils';

export const DrawerDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) => (
  <DrawerPrimitive.Description
    className={cn('text-muted-foreground text-sm', className)}
    {...props}
  />
);
