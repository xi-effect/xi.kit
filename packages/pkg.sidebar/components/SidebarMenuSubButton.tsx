import { Slot } from '@radix-ui/react-slot';
import { cn } from '@xipkg/utils';

type SidebarMenuSubButtonPropsT = React.ComponentProps<'a'> & {
  asChild?: boolean;
  size?: 'sm' | 'md';
  isActive?: boolean;
};

export const SidebarMenuSubButton = ({
  asChild = false,
  size = 'md',
  isActive,
  className,
  ref,
  ...props
}: SidebarMenuSubButtonPropsT) => {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        'text-gray-80 [&>svg]:fill-gray-80 flex h-8 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md bg-transparent px-2 outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
        'hover:bg-gray-5 hover:text-gray-100 hover:[&>svg]:fill-gray-100',
        'data-[active=true]:bg-brand-0 data-[active=true]:text-brand-80 data-[active=true]:[&>svg]:fill-brand-80',
        'data-[active=true]:hover:text-brand-100 data-[active=true]:hover:[&>svg]:fill-brand-100',
        size === 'sm' && 'text-xs',
        size === 'md' && 'text-sm',
        'group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  );
};
