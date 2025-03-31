'use client';

import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';

import { cn } from '@xipkg/utils';

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

interface ContextMenuSubTriggerProps
  extends React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> {
  inset?: boolean;
}

const ContextMenuSubTrigger = ({ className, inset, children, ...props }: ContextMenuSubTriggerProps) => (
  <ContextMenuPrimitive.SubTrigger
    className={cn(
      'focus:bg-brand-0 hover:bg-brand-0 hover:text-brand-80 hover:fill-brand-80 flex cursor-default items-center rounded px-2 py-1.5 text-sm outline-none select-none',
      inset && 'pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
);

ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = ({ className, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) => (
  <ContextMenuPrimitive.SubContent
    className={cn(
      'bg-gray-0 border-gray-10 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md',
      className,
    )}
    {...props}
  />
);

ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = ({ className, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Content>) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      className={cn(
        'bg-gray-0 border-gray-10 animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-lg border p-1 shadow-md',
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
);

ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

interface ContextMenuItemProps extends React.ComponentProps<typeof ContextMenuPrimitive.Item> {
  inset?: boolean;
}

const ContextMenuItem = ({ className, inset, ...props }: ContextMenuItemProps) => (
  <ContextMenuPrimitive.Item
    className={cn(
      'focus:bg-brand-0 hover:bg-brand-0 hover:text-brand-80 hover:fill-brand-80 relative flex h-8 cursor-pointer items-center rounded px-2 py-1.5 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
);

ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = ({ className, children, checked, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) => (
  <ContextMenuPrimitive.CheckboxItem
    className={cn(
      'focus:bg-brand-0 hover:bg-brand-0 hover:text-brand-80 hover:fill-brand-80 relative flex cursor-default items-center rounded py-1.5 pr-2 pl-8 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
);

ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = ({ className, children, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) => (
  <ContextMenuPrimitive.RadioItem
    className={cn(
      'focus:bg-brand-0 hover:bg-brand-0 hover:text-brand-80 hover:fill-brand-80 relative flex cursor-default items-center rounded py-1.5 pr-2 pl-8 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
);

ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

interface ContextMenuLabelProps extends React.ComponentProps<typeof ContextMenuPrimitive.Label> {
  inset?: boolean;
}

const ContextMenuLabel = ({ className, inset, ...props }: ContextMenuLabelProps) => (
  <ContextMenuPrimitive.Label
    className={cn('text-gray-100 px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
    {...props}
  />
);

ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = ({ className, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) => (
  <ContextMenuPrimitive.Separator
    className={cn('bg-gray-10 mx-2 my-1 h-px', className)}
    {...props}
  />
);

ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('text-gray-60 ml-auto text-xs tracking-widest', className)}
      {...props}
    />
  );
};

ContextMenuShortcut.displayName = 'ContextMenuShortcut';

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
