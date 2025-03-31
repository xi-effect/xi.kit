'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@xipkg/utils';

const labelVariants = cva(
  'text-[16px] text-gray-100 leading-[22px] font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
);

interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>, VariantProps<typeof labelVariants> {
  ref?: React.Ref<React.ElementRef<typeof LabelPrimitive.Root>>;
}

const Label = ({ className, ...props }: LabelProps) => (
  <LabelPrimitive.Root className={cn(labelVariants(), className)} {...props} />
);

export { Label };
