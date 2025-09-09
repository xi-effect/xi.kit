'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';

import { cn } from '@xipkg/utils';

interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  ref?: React.Ref<React.ElementRef<typeof RadioGroupPrimitive.Root>>;
}

const RadioGroup = ({ className, ...props }: RadioGroupProps) => {
  return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} />;
};

interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  ref?: React.Ref<React.ElementRef<typeof RadioGroupPrimitive.Item>>;
}

const RadioGroupItem = ({ className, children, ...props }: RadioGroupItemProps) => {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        'border-brand-80 text-brand-80 ring-offset-background focus-visible:ring-ring aspect-square h-4 w-4 rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
};

export { RadioGroup, RadioGroupItem };
