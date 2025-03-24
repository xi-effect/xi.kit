import { cn } from '@xipkg/utils';

export const SidebarContent = ({ className, ref, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
        className,
      )}
      {...props}
    />
  );
};
