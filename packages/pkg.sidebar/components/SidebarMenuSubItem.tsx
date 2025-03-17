import React from 'react';

export const SidebarMenuSubItem = ({ ref, ...props }: React.ComponentProps<'li'>) => (
  <li ref={ref} {...props} />
);
