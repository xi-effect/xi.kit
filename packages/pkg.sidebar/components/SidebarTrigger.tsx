import { Burger, Close } from '@xipkg/icons';
import { Button } from '@xipkg/button';
import { cn } from '@xipkg/utils';

import { useSidebar } from '../context/SidebarContext';

export const SidebarTrigger = ({
  className,
  ref,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) => {
  const { toggleSidebar, open } = useSidebar();

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="m"
      className={cn(
        'h-10 w-10 min-w-10 bg-transparent p-0 flex items-center justify-center focus:bg-transparent active:bg-transparent',
        className,
      )}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      {open ? <Close /> : <Burger />}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
};
