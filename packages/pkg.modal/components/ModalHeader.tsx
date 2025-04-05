import React from 'react';
import { cn } from '@xipkg/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const modalHeaderVariants = cva('', {
  variants: {
    headerVariant: {
      default: '',
      sticky: 'sticky -top-[40px]',
    },
  },
  defaultVariants: {
    headerVariant: 'default',
  },
});

export interface ModalHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalHeaderVariants> {}

export const ModalHeader = ({ headerVariant, className, ...props }: ModalHeaderProps) => (
  <div className={cn(modalHeaderVariants({ headerVariant, className }))}>
    <div
      {...props}
      className="border-gray-5 bg-gray-0 flex flex-col space-y-2 rounded-t-[16px] border-b p-6 text-left"
    />
  </div>
);
