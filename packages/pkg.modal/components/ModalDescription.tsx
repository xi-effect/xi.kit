import React from 'react';
import { cn } from '@xipkg/utils';
import { DialogDescription } from '@radix-ui/react-dialog';

export const ModalDescription = ({ className, ...props }: React.ComponentProps<typeof DialogDescription>) => (
  <DialogDescription
    className={cn('text-gray-80 text-[16px]', className)}
    {...props}
  />
);
ModalDescription.displayName = DialogDescription.displayName;
