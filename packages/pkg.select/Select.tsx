'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@xipkg/utils';
import { Check, ChevronUp } from '@xipkg/icons';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

export const selectTriggerVariants = cva(
  [
    'group flex w-full items-center justify-between gap-2',
    'bg-background-surface text-text-primary text-base',
    'rounded-lg outline outline-1 outline-offset-[-1px] outline-border-control',
    'transition-[outline-color,outline-width,background-color,opacity]',
    'hover:outline-border-strong',
    'focus:outline-2 focus:outline-offset-[-2px] focus:outline-border-focus',
    'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-border-focus',
    'data-[state=open]:outline-2 data-[state=open]:outline-offset-[-2px] data-[state=open]:outline-border-focus',
    'data-[placeholder]:text-text-muted',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-background-subtle',
    'disabled:outline-border-default disabled:hover:outline-border-default',
    'disabled:focus:outline-1 disabled:focus:outline-offset-[-1px]',
    'disabled:data-[state=open]:outline-1 disabled:data-[state=open]:outline-offset-[-1px]',
  ].join(' '),
  {
    variants: {
      size: {
        m: 'h-12 px-4',
        s: 'h-8 px-2 rounded-md text-sm',
      },
      error: {
        true: [
          'outline-border-error hover:outline-border-error',
          'focus:outline-border-error focus-visible:outline-border-error data-[state=open]:outline-border-error',
        ].join(' '),
        false: '',
      },
      warning: {
        true: [
          'outline-status-warning-accent hover:outline-status-warning-accent',
          'focus:outline-status-warning-accent focus-visible:outline-status-warning-accent',
          'data-[state=open]:outline-status-warning-accent',
        ].join(' '),
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
        <div className="line-clamp-1 min-w-0 flex-1 text-left">{children}</div>
      </div>

      <SelectPrimitive.Icon asChild>
        <ChevronUp className="fill-icon-primary size-4 shrink-0 rotate-180 transition-transform group-data-[state=open]:rotate-0" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = ({
  className,
  children,
  position = 'popper',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          'bg-background-elevated text-text-primary border-border-default relative z-50 max-h-[450px] overflow-hidden rounded-xl border shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)]',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        position={position}
        sideOffset={sideOffset}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' && 'w-full min-w-[var(--radix-select-trigger-width)]',
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
      className={cn('text-text-muted px-3 py-1.5 text-sm', className)}
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
        'text-text-primary relative flex min-h-[42px] w-full cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-base outline-none select-none',
        'hover:bg-selection-background focus:bg-selection-background data-[state=checked]:bg-selection-background',
        'data-[disabled]:text-text-disabled data-[disabled]:pointer-events-none',
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className="flex-1">{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <Check className="fill-selection-icon size-6 shrink-0" />
      </SelectPrimitive.ItemIndicator>
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
      className={cn('bg-border-default -mx-1 my-1 h-px', className)}
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
