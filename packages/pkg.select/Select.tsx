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
  'border-gray-30 outline-gray-80 focus:border-gray-80 focus-visible:border-gray-80 bg-gray-0 placeholder:text-gray-30 disabled:bg-gray-10 disabled:border-gray-10 flex w-[250px] items-center justify-between text-base hover:border-gray-50 disabled:cursor-not-allowed',
  {
    variants: {
      size: {
        m: 'h-12 p-3 border-2 rounded-lg text-[16px]',
        s: 'h-8 p-2 border rounded-md text-[14px]',
      },
      error: {
        true: 'border-red-80 hover:border-red-80 active:border-red-80 focus:border-red-80 outline-red-80',
        false: '',
      },
      warning: {
        true: 'border-orange-80 hover:border-orange-80 active:border-orange-80 focus:border-orange-80 outline-orange-80',
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

interface SelectTriggerProps extends React.ComponentProps<typeof SelectPrimitive.Trigger>, VariantProps<typeof selectTriggerVariants>{
  before?: React.ReactNode;
}

const SelectTrigger = ({ className, children, size, error, warning, before, ...props }:       SelectTriggerProps) => {
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
      
      <div className='flex items-center gap-2 min-w-0 flex-1'>
        {!!before && (
          <SelectPrimitive.Icon asChild>
            {before}
          </SelectPrimitive.Icon>
        )}
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            {children}
          </div>
      </div>

      <SelectPrimitive.Icon asChild>
        <CaretUp className="shrink-0 fill-gray-80 size-5 rotate-180" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
};

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = (
  { className, children, position = 'popper', ...props }: React.ComponentProps<typeof SelectPrimitive.Content>
) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
          className={cn(
            'border-gray-10 bg-gray-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 w-[250px] overflow-hidden rounded-lg border shadow-md',
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
  )
};

SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = ({ className, ...props }: 
  React.ComponentProps<typeof SelectPrimitive.Label>) => {
  return (
    <SelectPrimitive.Label
      className={cn('py-1.5 pr-2 pl-4 text-sm text-gray-40', className)}
      {...props}
    />
  )
};

SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = ({ className, children, ...props }: 
  React.ComponentProps<typeof SelectPrimitive.Item>) => {
  return (
    <SelectPrimitive.Item
      className={cn(
        'hover:bg-gray-5 focus:text-accent-foreground data-[state=checked]:bg-brand-0 data-[disabled]:text-gray-40 relative flex h-9 w-full cursor-pointer items-center rounded px-3 py-2 text-sm outline-none select-none data-[disabled]:pointer-events-none',
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
};

SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = ({ className, ...props }: 
  React.ComponentProps<typeof SelectPrimitive.Separator>) => {
  return (
    <SelectPrimitive.Separator
      className={cn('bg-gray-10 -mx-3 my-1 h-px', className)}
      {...props}
    />
  )
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
