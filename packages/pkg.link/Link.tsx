import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@xipkg/utils';

export const linkVariants = cva(
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      theme: {
        default:
          'decoration-gray-40 hover:decoration-gray-100 text-gray-90 hover:text-gray-100 disabled:text-gray-30',
        sky: '',
        brand:
          'decoration-brand-20 hover:decoration-brand-100 text-brand-80 hover:text-brand-100 disabled:text-gray-30',
        error: '',
        success: '',
        white:
          'decoration-gray-5 hover:decoration-gray-5 focus:decoration-gray-5 active:decoration-gray-5 text-gray-10 hover:text-gray-5 focus:text-gray-5 active:text-gray-5',
      },
      variant: {
        always: 'underline decoration-1 underline-offset-4',
        none: 'no-underline',
        hover: 'transition hover:ease-in hover:underline decoration-1 underline-offset-4',
      },
      size: {
        l: 'text-[16px]',
        m: 'text-[14px]',
        s: 'text-[12px]',
      },
    },
    defaultVariants: {
      theme: 'default',
      variant: 'always',
      size: 'm',
    },
  },
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, theme, variant, size, children, ...props }, ref) => {
    return (
      <a
        className={cn(linkVariants({ theme, variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </a>
    );
  },
);

Link.displayName = 'Link';
