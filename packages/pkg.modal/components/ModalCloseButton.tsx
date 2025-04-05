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
        default: 'sm:bg-gray-5 sm:right-[-56px] sm:bg-gray-80 dark:sm:bg-gray-5',
        full: 'sm:right-6 sm:bg-gray-5',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const IconVariants = cva('', {
  variants: {
    variant: {
      default: 'fill-gray-80 sm:fill-gray-0 dark:fill-gray-80',
      full: 'sm:fill-gray-80 md:fill-gray-80',
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
    {children || <Close className={cn(IconVariants({ variant, className }))} />}
  </DialogClose>
);
ModalCloseButton.displayName = 'ModalCloseButton';
