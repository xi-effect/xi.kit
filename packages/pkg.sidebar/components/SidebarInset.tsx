import React from 'react';

import { cn } from '@xipkg/utils';

export const SidebarInset = ({ className, ref, ...props }: React.ComponentProps<'main'>) => {
  return (
    <main
      ref={ref}
      className={cn(
        'bg-gray-0 relative flex w-full flex-1 flex-col',
        'md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2',
        className,
      )}
      {...props}
    />
  );
};
