import * as React from 'react';
import { ChevronRight } from '@xipkg/icons';
import { breadcrumbLink } from './types';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@xipkg/utils';

export const breadcrumbsVariants = cva('', {
  variants: {
    variant: {
      default: 'text-brand-40 [&_svg]:fill-brand-40 [&_span]:text-brand-80',
      secondary: 'text-gray-60 [&_svg]:fill-gray-60 [&_span]:text-gray-100',
    },
    size: {
      l: 'text-[16px] [&_svg]:size-[16px]',
      m: 'text-[14px] [&_svg]:size-[14px]',
      s: 'text-[12px] [&_svg]:size-[12px]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'm',
  },
});

export const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-wrap items-center gap-[2px] break-words', className)}
    {...props}
  />
));
BreadcrumbList.displayName = 'BreadcrumbList';

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn('inline-flex items-center gap-[2px]', className)} {...props} />
  ),
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

export const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp ref={ref} className={cn('transition-colors hover:underline', className)} {...props} />
  );
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

export const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => (
  <span ref={ref} role="link" aria-disabled="true" aria-current="page" {...props} />
));
BreadcrumbPage.displayName = 'BreadcrumbPage';

export const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span role="presentation" aria-hidden="true" {...props}>
    {children ?? <ChevronRight />}
  </span>
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

export const Breadcrumbs = React.forwardRef<
  HTMLElement,
  VariantProps<typeof breadcrumbsVariants> & {
    breadcrumbs: breadcrumbLink[];
    asChild?: boolean;
    children?: React.JSX.IntrinsicElements;
  }
>(({ variant, size, breadcrumbs, ...props }, ref) => (
  <nav
    ref={ref}
    aria-label="breadcrumb"
    {...props}
    className={cn(breadcrumbsVariants({ variant, size }))}
  >
    <BreadcrumbList>
      {breadcrumbs.map((item, index, breadcrumbsArray) => {
        const isLastItem = index === breadcrumbsArray.length - 1;

        return (
          <BreadcrumbItem key={index}>
            {!isLastItem ? (
              <>
                <BreadcrumbLink href="/">{item.name} </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbPage>{item.name}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
        );
      })}
    </BreadcrumbList>
  </nav>
));
Breadcrumbs.displayName = 'Breadcrumbs';

export const BreadcrumbsRoot = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> &
    VariantProps<typeof breadcrumbsVariants> & {
      separator?: React.ReactNode;
    }
>(({ variant, size, ...props }, ref) => (
  <nav
    ref={ref}
    aria-label="breadcrumb"
    {...props}
    className={cn(breadcrumbsVariants({ variant, size }))}
  />
));
BreadcrumbsRoot.displayName = 'BreadcrumbsRoot';
