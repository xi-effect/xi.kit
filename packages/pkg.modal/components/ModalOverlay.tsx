import { DialogOverlay } from '@radix-ui/react-dialog';
import { cn } from '@xipkg/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

export const modalOverlayVariants = cva(
  'border-gray-5 flex flex-col space-y-2 border-b p-6 w-sm:p-4 text-left bg-gray-0',
  {
    variants: {
      overlayVariant: {
        default:
          'dark:bg-gray-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-gray-100/40 flex overflow-y-auto py-10 border-b-0',
        full: 'p-0 max-w-dvw bg-violet-100',
      },
    },
    defaultVariants: {
      overlayVariant: 'default',
    },
  },
);

export interface ModalHeaderProps
  extends React.ComponentProps<typeof DialogOverlay>, VariantProps<typeof modalOverlayVariants> {}

export const ModalOverlay = ({ overlayVariant, className, ...props }: ModalHeaderProps) => (
  <DialogOverlay className={cn(modalOverlayVariants(), className)} {...props} />
);

ModalOverlay.displayName = DialogOverlay.displayName;
