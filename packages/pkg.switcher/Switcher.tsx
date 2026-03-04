'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@xipkg/utils';

export interface SwitcherProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  ref?: React.Ref<React.ComponentRef<typeof TabsPrimitive.Root>>;
}

const Switcher = ({
  className,
  orientation = 'horizontal',
  ...props
}: SwitcherProps) => (
  <TabsPrimitive.Root
    data-slot="switcher"
    data-orientation={orientation}
    className={cn(
      'group/switcher flex gap-2 data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col',
      className,
    )}
    {...props}
  />
);

const switcherListVariants = cva(
  'group/switcher-list inline-flex w-fit items-center justify-center data-[orientation=horizontal]:h-10 data-[orientation=vertical]:h-fit data-[orientation=vertical]:flex-col data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:gap-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-1 data-[variant=line]:rounded-none data-[variant=line]:gap-1 data-[variant=line]:bg-transparent',
  {
    variants: {
      variant: {
        default:
          'rounded-xl bg-gray-0 p-[3px]',
        line: 'bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface SwitcherListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof switcherListVariants> {
  ref?: React.Ref<React.ComponentRef<typeof TabsPrimitive.List>>;
}

const SwitcherList = ({
  className,
  variant = 'default',
  ...props
}: SwitcherListProps) => (
  <TabsPrimitive.List
    data-slot="switcher-list"
    data-variant={variant}
    className={cn(switcherListVariants({ variant }), className)}
    {...props}
  />
);

export interface SwitcherTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  ref?: React.Ref<React.ComponentRef<typeof TabsPrimitive.Trigger>>;
}

const SwitcherTrigger = ({ className, ...props }: SwitcherTriggerProps) => (
  <TabsPrimitive.Trigger
    data-slot="switcher-trigger"
    className={cn(
      'relative inline-flex flex-1 items-center justify-center rounded-[10px] border-none border-transparent px-4 py-1 text-[16px] font-medium whitespace-nowrap transition-all',
      'bg-transparent text-gray-80',
      'hover:text-gray-90',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-80/50 focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'group-data-[variant=default]/switcher-list:data-[state=active]:bg-brand-80 group-data-[variant=default]/switcher-list:data-[state=active]:text-gray-0 group-data-[variant=default]/switcher-list:data-[state=active]:border-gray-0',
      'group-data-[variant=line]/switcher-list:bg-transparent group-data-[variant=line]/switcher-list:data-[state=active]:bg-transparent group-data-[variant=line]/switcher-list:data-[state=active]:shadow-none',
      'group-data-[variant=line]/switcher-list:data-[state=active]:text-gray-100',
      'after:absolute after:bg-gray-100 after:opacity-0 after:transition-opacity',
      'group-data-[orientation=horizontal]/switcher:after:inset-x-0 group-data-[orientation=horizontal]/switcher:after:bottom-[-5px] group-data-[orientation=horizontal]/switcher:after:h-0.5',
      'group-data-[orientation=vertical]/switcher:after:inset-y-0 group-data-[orientation=vertical]/switcher:after:-right-1 group-data-[orientation=vertical]/switcher:after:w-0.5',
      'group-data-[variant=line]/switcher-list:data-[state=active]:after:opacity-100',
      'group-data-[orientation=vertical]/switcher:w-full group-data-[orientation=vertical]/switcher:justify-start',
      '[&_svg]:pointer-events-none [&_svg]:shrink-0',
      className,
    )}
    {...props}
  />
);

export { Switcher, SwitcherList, SwitcherTrigger, switcherListVariants };
