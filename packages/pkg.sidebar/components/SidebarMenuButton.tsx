import React from 'react';

import { Tooltip, TooltipContent, TooltipTrigger } from '@xipkg/tooltip';

import { cn } from '@xipkg/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { useSidebar } from '../context/SidebarContext';

type SidebarMenuButtonPropsT = React.ComponentProps<'button'> & {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>;

const sidebarMenuButtonVariants = cva(
  'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none transition-[width,height,padding] focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50  data-[active=true]:font-medium group-data-[collapsible=icon]:!size-10 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'hover:bg-brand-0 bg-transparent hover:text-brand-80 text-gray-80 hover:[&>svg]:fill-brand-80 data-[active=true]:text-brand-80 data-[active=true]:[&>svg]:fill-brand-80',
        ghost:
          'hover:bg-transparent active:bg-transparent focus:bg-transparent text-gray-50 [&>svg]:fill-gray-50',
      },
      size: {
        default: 'h-10 text-base',
        sm: 'h-8 text-xs',
        lg: 'h-12 text-sm group-data-[collapsible=icon]:!p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export const SidebarMenuButton = ({
  asChild = false,
  isActive = false,
  variant = 'default',
  size = 'default',
  tooltip,
  className,
  ref,
  ...props
}: SidebarMenuButtonPropsT) => {
  const Comp = asChild ? Slot : 'button';

  const { state } = useSidebar();

  const button = (
    <Comp
      ref={ref}
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === 'string') {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent side="right" align="center" hidden={state !== 'collapsed'} {...tooltip} />
    </Tooltip>
  );
};
