import React from 'react';

import { cn } from '@xipkg/utils';

export const SidebarGroupContent = ({ className, ref, ...props }: React.ComponentProps<'div'>) => (
  <div ref={ref} data-sidebar="group-content" className={cn('w-full', className)} {...props} />
);
