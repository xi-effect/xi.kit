import React from 'react';
import { cn } from '@xipkg/utils';
import { DialogTitle } from '@radix-ui/react-dialog';

export const ModalTitle = ({ className, ...props }: React.ComponentProps<typeof DialogTitle>) => (
  <DialogTitle
    className={cn('leading-nonet text-[24px] font-semibold', className)}
    {...props}
  />
);
ModalTitle.displayName = DialogTitle.displayName;