import React from 'react';
import { cn } from '@xipkg/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const modalFooterVariants = cva('border-gray-5 rounded-b-[16px] border-t p-6 bg-gray-0', {
  variants: {
    footerVariant: {
      default: '',
      sticky: 'sticky bottom-[-40px]',
    },
  },
  defaultVariants: {
    footerVariant: 'default',
  },
});

export interface ModalFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalFooterVariants> {}

export const ModalFooter = ({ footerVariant, className, ...props }: ModalFooterProps) => (
  <div className={cn(modalFooterVariants({ footerVariant, className }))} {...props} />
);
