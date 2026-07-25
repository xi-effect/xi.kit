import { DialogOverlay } from '@radix-ui/react-dialog';
import { cn } from '@xipkg/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

export const modalOverlayVariants = cva(
  'flex overflow-y-auto border-b-0',
  {
    variants: {
      overlayVariant: {
        default:
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-background-overlay py-10',
        full: 'p-0 max-w-dvw bg-background-page',
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
  <DialogOverlay
    className={cn(modalOverlayVariants({ overlayVariant }), className)}
    {...props}
  />
);

ModalOverlay.displayName = DialogOverlay.displayName;
