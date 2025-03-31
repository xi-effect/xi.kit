'use client';

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';

import { cn } from '@xipkg/utils';

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

interface DropdownMenuSubTriggerProps extends React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> {
  inset?: boolean;
}

const DropdownMenuSubTrigger = ({ className, inset, children, ...props }: DropdownMenuSubTriggerProps) => (
  <DropdownMenuPrimitive.SubTrigger
    className={cn(
      'focus:bg-brand-0 hover:bg-brand-0 hover:text-brand-80 hover:fill-brand-80 flex cursor-default items-center rounded px-2 py-1.5 text-sm outline-none select-none',
      inset && 'pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
);

DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

interface DropdownMenuSubContentProps extends React.ComponentProps<typeof DropdownMenuPrimitive.SubContent> {}

const DropdownMenuSubContent = ({ className, ...props }: DropdownMenuSubContentProps) => (
  <DropdownMenuPrimitive.SubContent
    className={cn(
      'bg-gray-0 border-gray-10 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md',
      className,
    )}
    {...props}
  />
);

DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

interface DropdownMenuContentProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Content> {
  portalProps?: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>;
}

const DropdownMenuContent = ({ className, sideOffset = 4, portalProps = {}, ...props }: DropdownMenuContentProps) => (
  <DropdownMenuPrimitive.Portal {...portalProps}>
    <DropdownMenuPrimitive.Content
      sideOffset={sideOffset}
      className={cn(
        'bg-gray-0 border-gray-10 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-lg border p-1 shadow-md',
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
);

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

interface DropdownMenuItemProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Item> {
  inset?: boolean;
  error?: boolean;
}

const DropdownMenuItem = ({ className, inset, error = false, ...props }: DropdownMenuItemProps) => (
  <DropdownMenuPrimitive.Item
    className={cn(
      'focus:bg-brand-0 hover:bg-brand-0 hover:text-brand-80 hover:fill-brand-80 relative flex h-8 cursor-pointer items-center rounded px-2 py-1.5 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      error
        ? 'text-red-40 fill-red-40 hover:text-red-80 hover:fill-red-80'
        : 'text-gray-80 fill-gray-80 hover:fill-gray-100 hover:text-gray-100',
      className,
    )}
    {...props}
  />
);

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

interface DropdownMenuCheckboxItemProps extends React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> {}

const DropdownMenuCheckboxItem = ({ className, children, checked, ...props }: DropdownMenuCheckboxItemProps) => (
  <DropdownMenuPrimitive.CheckboxItem
    className={cn(
      'focus:bg-brand-0 hover:bg-brand-0 hover:text-brand-80 hover:fill-brand-80 relative flex cursor-default items-center rounded py-1.5 pr-2 pl-8 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
);

DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

interface DropdownMenuRadioItemProps extends React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem> {}

const DropdownMenuRadioItem = ({ className, children, ...props }: DropdownMenuRadioItemProps) => (
  <DropdownMenuPrimitive.RadioItem
    className={cn(
      'focus:bg-brand-0 hover:bg-brand-0 hover:text-brand-80 hover:fill-brand-80 relative flex cursor-default items-center rounded py-1.5 pr-2 pl-8 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
);

DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

interface DropdownMenuLabelProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Label> {
  inset?: boolean;
}

const DropdownMenuLabel = ({ className, inset, ...props }: DropdownMenuLabelProps) => (
  <DropdownMenuPrimitive.Label
    className={cn('text-gray-100 px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
    {...props}
  />
);

DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

interface DropdownMenuSeparatorProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Separator> {}

const DropdownMenuSeparator = ({ className, ...props }: DropdownMenuSeparatorProps) => (
  <DropdownMenuPrimitive.Separator
    className={cn('bg-gray-10 mx-2 my-1 h-px', className)}
    {...props}
  />
);

DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

interface DropdownMenuShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {}

const DropdownMenuShortcut = ({ className, ...props }: DropdownMenuShortcutProps) => {
  return (
    <span
      className={cn('text-gray-60 ml-auto text-xs tracking-widest', className)}
      {...props}
    />
  );
};

DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
