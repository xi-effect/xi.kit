'use client';

import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@xipkg/utils';
import { Close } from '@xipkg/icons';

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

interface SheetOverlayProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> {
  ref?: React.Ref<React.ElementRef<typeof SheetPrimitive.Overlay>>;
}

const SheetOverlay = ({ className, ...props }: SheetOverlayProps) => (
  <SheetPrimitive.Overlay
    className={cn(
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80',
      className,
    )}
    {...props}
  />
);

const sheetVariants = cva(
  'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  ref?: React.Ref<React.ElementRef<typeof SheetPrimitive.Content>>;
}

const SheetContent = ({ side = 'right', className, children, ...props }: SheetContentProps) => (
  <SheetPortal>
    <SheetPrimitive.Content className={cn(sheetVariants({ side }), className)} {...props}>
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
);

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
);

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props}
  />
);

interface SheetTitleProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> {
  ref?: React.Ref<React.ElementRef<typeof SheetPrimitive.Title>>;
}

const SheetTitle = ({ className, ...props }: SheetTitleProps) => (
  <SheetPrimitive.Title
    className={cn('text-foreground text-lg font-semibold', className)}
    {...props}
  />
);

interface SheetDescriptionProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> {
  ref?: React.Ref<React.ElementRef<typeof SheetPrimitive.Description>>;
}

const SheetDescription = ({ className, ...props }: SheetDescriptionProps) => (
  <SheetPrimitive.Description
    className={cn('text-muted-foreground text-sm', className)}
    {...props}
  />
);

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
