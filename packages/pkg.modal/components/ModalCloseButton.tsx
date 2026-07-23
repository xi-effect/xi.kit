import React from 'react';
import { cn } from '@xipkg/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { DialogClose } from '@radix-ui/react-dialog';
import { Close } from '@xipkg/icons';

export const modalCloseButtonVariants = cva(
  'absolute z-50 top-6 right-6 flex flex-row w-10 h-10 items-start pt-2 px-2 rounded-[20px]',
  {
    variants: {
      variant: {
        // Outside the modal on sm+: inverse chip on the overlay (dark surface + light icon).
        // Primitives are theme-fixed — gray-80 stays dark in both themes.
        default: 'sm:right-[-56px] sm:bg-gray-80',
        full: 'sm:right-6 sm:bg-background-subtle',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const iconVariants = cva('', {
  variants: {
    variant: {
      default: 'fill-icon-primary sm:fill-gray-0',
      full: 'fill-icon-primary',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface ModalCloseButtonProps
  extends React.ComponentPropsWithoutRef<typeof DialogClose>,
    VariantProps<typeof modalCloseButtonVariants> {
  icon?: React.ReactNode;
}

export const ModalCloseButton = ({
  variant,
  className,
  children,
  ...props
}: ModalCloseButtonProps) => (
  <DialogClose className={cn(modalCloseButtonVariants({ variant, className }))} {...props}>
    {children || <Close className={cn(iconVariants({ variant, className }))} />}
  </DialogClose>
);
ModalCloseButton.displayName = 'ModalCloseButton';
