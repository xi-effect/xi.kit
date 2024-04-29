'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from '@xipkg/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({ className, ...props }: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal className={cn(className)} {...props} />
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'bg-gray-100 dark:bg-gray-0 opacity-40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50',
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

export const dialogContentVariants = cva(
  'fixed left-[50%] top-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] gap-4 bg-gray-0 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
  {
    variants: {
      variant: {
        default: 'w-[calc(100%-16px)] max-w-lg md:w-full rounded-[16px] shadow-xl',
        full: 'w-[100vw] h-[100vh]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof dialogContentVariants> {
  closeClassName?: string;
}

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ variant, className, closeClassName, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(dialogContentVariants({ variant, className }))}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

export const dialogCloseButtonVariants = cva('', {
  variants: {
    variant: {
      default:
        'fixed top-8 right-6 flex flex-row w-10 h-10 items-start pt-2 px-2 rounded-[20px] bg-gray-5',
      full: 'fixed z-50 bg-transparent',
      noStyle: '',
    },
    breakpoint: {
      sm: 'sm:top-6 sm:right-[-56px] sm:bg-gray-80 dark:sm:bg-gray-10',
      lg: 'lg:top-6 lg:right-[-56px] lg:bg-gray-80 dark:lg:bg-gray-10',
      md: 'md:top-6 md:right-[-56px] md:bg-gray-80 dark:md:bg-gray-10',
    },
  },
  defaultVariants: {
    variant: 'default',
    breakpoint: 'sm',
  },
});

export interface DialogCloseButtonProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>,
    VariantProps<typeof dialogCloseButtonVariants> {
  icon?: React.ReactNode;
}

const DialogCloseButton = ({
  variant,
  breakpoint,
  className,
  children,
  ...props
}: DialogCloseButtonProps) => (
  <DialogPrimitive.Close
    className={cn(dialogCloseButtonVariants({ variant, breakpoint, className }))}
    {...props}
  >
    {children}
  </DialogPrimitive.Close>
);
DialogCloseButton.displayName = 'DialogCloseButton';

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('border-gray-20 flex flex-col space-y-2 border-b p-6 text-left rounded-t-[16px]', className)}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('border-gray-20 border-t p-6 rounded-b-[16px]', className)} {...props} />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('leading-nonet text-[24px] font-semibold', className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-gray-80 text-[16px]', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogCloseButton,
};
