import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import NextLink from 'next/link';
import { cn } from '@xipkg/utils';
import { Url } from 'url';

export const linkVariants = cva(
  'underline decoration-1 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'decoration-gray-30 hover:decoration-gray-100 text-gray-90 hover:text-gray-100 disabled:pointer-events-none disabled:text-gray-30',
        sky: '',
        brand: '',
        error: '',
        success: '',
      },
      size: {
        l: 'text-[16px]',
        m: 'text-[14px]',
        s: 'text-[12px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'm',
    },
  },
);

export interface LinkProps
  extends React.ComponentProps<typeof NextLink>,
    VariantProps<typeof linkVariants> {
  href: string;
}

export const Link = React.forwardRef<HTMLLinkElement, LinkProps>(
  ({ className, variant, size, href, children, ...props }, ref) => {
    return (
      <NextLink
        href={href}
        className={cn(linkVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </NextLink>
    );
  },
);

Link.displayName = 'Link';
