import React from 'react';
import { Drawer as DrawerPrimitive } from "vaul";
import { DrawerOverlay } from './DrawerOverlay';
import { cn } from "@xipkg/utils";

export const Drawer = ({
    shouldScaleBackground = true,
    ...props
  }: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
    <DrawerPrimitive.Root
      shouldScaleBackground={shouldScaleBackground}
      {...props}
    />
);
   
export const DrawerTrigger = DrawerPrimitive.Trigger;

export const DrawerPortal = DrawerPrimitive.Portal;

export const DrawerClose = DrawerPrimitive.Close;

export const DrawerContent = (({ className, children, ...props }: React.ComponentProps<typeof DrawerPrimitive.Content>) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 flex h-auto flex-col gap-4 bg-gray-0 p-4 pt-0",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[80px] rounded-full bg-gray-20" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))