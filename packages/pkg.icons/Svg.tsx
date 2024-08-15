import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@xipkg/utils';

export const svgVariants = cva('', {
  variants: {
    theme: {
      default: 'fill-gray-80',
    },
    size: {
      default: 'h-[24px] w-[24px]',
      l: 'h-[32px] w-[32px]',
      m: 'h-[20px] w-[20px]',
      s: 'h-[16px] w-[16px]',
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
