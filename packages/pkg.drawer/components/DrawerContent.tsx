import React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { DrawerOverlay } from './DrawerOverlay';
import { cn } from '@xipkg/utils';

export const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);

export const DrawerTrigger = DrawerPrimitive.Trigger;

export const DrawerPortal = DrawerPrimitive.Portal;

export const DrawerClose = DrawerPrimitive.Close;

export const DrawerContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      className={cn(
        'bg-gray-0 fixed inset-x-0 bottom-0 z-50 flex h-auto flex-col gap-4 rounded-t-4xl p-4 pt-0',
        className,
      )}
      {...props}
    >
      <div className="bg-gray-20 mx-auto mt-2 h-1 w-[80px] rounded-full" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
);
