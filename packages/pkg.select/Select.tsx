'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@xipkg/utils';
import { CaretUp } from '@xipkg/icons';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

export const selectTriggerVariants = cva(
  'border-border-control outline-border-strong focus:border-border-strong focus-visible:border-border-strong bg-background-surface placeholder:text-text-disabled disabled:bg-background-subtle disabled:border-background-subtle flex w-[250px] items-center justify-between text-base hover:border-border-strong disabled:cursor-not-allowed',
  {
    variants: {
      size: {
        m: 'h-12 p-3 border-2 rounded-lg text-[16px]',
        s: 'h-8 p-2 border rounded-md text-[14px]',
      },
      error: {
        true: 'border-border-error hover:border-border-error active:border-border-error focus:border-border-error outline-border-error',
        false: '',
      },
      warning: {
        true: 'border-status-warning-accent hover:border-status-warning-accent active:border-status-warning-accent focus:border-status-warning-accent outline-status-warning-accent',
        false: '',
      },
    },
    defaultVariants: {
      size: 'm',
      error: false,
      warning: false,
    },
  },
);

interface SelectTriggerProps
  extends React.ComponentProps<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof selectTriggerVariants> {
  before?: React.ReactNode;
}

const SelectTrigger = ({
  className,
  children,
  size,
  error,
  warning,
  before,
  ...props
}: SelectTriggerProps) => {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        selectTriggerVariants({
          size,
          error,
          warning,
          className,
        }),
      )}
      {...props}
    >
      <div className="flex min-w-0 flex-1 items-center gap-2">
        {!!before && <SelectPrimitive.Icon asChild>{before}</SelectPrimitive.Icon>}
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">{children}</div>
      </div>

      <SelectPrimitive.Icon asChild>
        <CaretUp className="fill-icon-primary size-5 shrink-0 rotate-180" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = ({
  className,
  children,
  position = 'popper',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          'border-border-default bg-background-elevated data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 w-[250px] overflow-hidden rounded-lg border shadow-md',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className,
        )}
        position={position}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};

SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) => {
  return (
    <SelectPrimitive.Label
      className={cn('text-text-disabled py-1.5 pr-2 pl-4 text-sm', className)}
      {...props}
    />
  );
};

SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) => {
  return (
    <SelectPrimitive.Item
      className={cn(
        'hover:bg-background-subtle focus:text-accent-foreground data-[state=checked]:bg-selection-background data-[disabled]:text-text-disabled relative flex h-9 w-full cursor-pointer items-center rounded px-3 py-2 text-sm outline-none select-none data-[disabled]:pointer-events-none',
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
};

SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) => {
  return (
    <SelectPrimitive.Separator
      className={cn('bg-border-default -mx-3 my-1 h-px', className)}
      {...props}
    />
  );
};

SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  type SelectTriggerProps,
};
