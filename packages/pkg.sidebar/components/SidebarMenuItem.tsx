import { cn } from '@xipkg/utils';

export const SidebarMenuItem = ({ className, ref, ...props }: React.ComponentProps<'li'>) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn('group/menu-item relative', className)}
    {...props}
  />
);
