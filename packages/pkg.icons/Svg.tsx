import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@xipkg/utils';

const svgVariants = cva('', {
  variants: {
    theme: {
      default: 'text-gray-80 dark:text-gray-0',
      brand: 'text-brand-60 dark:text-brand-40',
      destructive: 'text-red-80 dark:text-red-40',
    },
    size: {
      default: 'w-6 h-6',
      sm: 'w-4 h-4',
      lg: 'w-8 h-8',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'default',
  },
});

export interface IconProps
  extends React.SVGProps<SVGSVGElement>,
    VariantProps<typeof svgVariants> {}

export const Svg = ({ theme, size, className, children, ...rest }: IconProps) => {
  return (
    <svg viewBox="0 0 24 24" className={cn(svgVariants({ theme, size, className }))} {...rest}>
      {children}
    </svg>
  );
};
