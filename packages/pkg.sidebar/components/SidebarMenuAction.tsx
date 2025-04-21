import { Slot } from '@radix-ui/react-slot';
import { cn } from '@xipkg/utils';

export const SidebarMenuAction = ({
  className,
  ref,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean;
  showOnHover?: boolean;
}) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        'peer-hover/menu-button:text-gray-100 absolute top-1/2 right-1 flex aspect-square w-5 -translate-y-1/2 items-center justify-center rounded-md p-0 transition-transform outline-none focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 after:md:hidden',
        'peer-data-[size=sm]/menu-button:top-1',
        'peer-data-[size=default]/menu-button:top-1/2',
        'peer-data-[size=lg]/menu-button:top-2.5',
        'group-data-[collapsible=icon]:hidden',
        'group-data-[collapsible=offcanvas]:hidden',
        showOnHover &&
          'peer-data-[active=true]/menu-button:text-brand-80 peer-data-[active=true]:hover/menu-button:text-brand-100 group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0',
        className,
      )}
      {...props}
    />
  );
};
