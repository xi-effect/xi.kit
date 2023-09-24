import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import NextLink from 'next/link';
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
  extends React.ComponentProps<typeof NextLink>,
    VariantProps<typeof linkVariants> {
  href: string;
}

export const Link = React.forwardRef<HTMLLinkElement, LinkProps>(
  ({ className, theme, variant, size, href, children, ...props }, ref) => {
    return (
      <NextLink
        href={href}
        className={cn(linkVariants({ theme, variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </NextLink>
    );
  },
);

Link.displayName = 'Link';
