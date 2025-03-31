import React from 'react';
import { cn } from '@xipkg/utils';

export const ModalBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
      className={cn(
        'flex flex-col p-6',
        className,
      )}
      {...props}
    />
);