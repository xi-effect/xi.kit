import * as React from 'react';
import { ChevronRight } from '@xipkg/icons';
import { breadcrumbLink } from './types';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@xipkg/utils';

export const breadcrumbsVariants = cva('', {
  variants: {
    variant: {
      default:
        'text-brand-40 dark:text-brand-20 [&_svg]:fill-brand-40 dark:[&_svg]:fill-brand-20 [&_span]:text-brand-80 dark:[&_span]:text-brand-40',
      secondary:
        'text-gray-60 dark:text-gray-40 [&_svg]:fill-gray-60 dark:[&_svg]:fill-gray-40 [&_span]:text-gray-100 dark:[&_span]:text-gray-0',
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

interface BreadcrumbListProps extends React.ComponentPropsWithoutRef<'ul'> {}

const BreadcrumbList = ({ className, ...props }: BreadcrumbListProps) => (
  <ul className={cn('flex flex-wrap items-center gap-[2px] break-words', className)} {...props} />
);

interface BreadcrumbItemProps extends React.ComponentPropsWithoutRef<'li'> {}

const BreadcrumbItem = ({ className, ...props }: BreadcrumbItemProps) => (
  <li className={cn('inline-flex items-center gap-[2px]', className)} {...props} />
);

interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  asChild?: boolean;
}

const BreadcrumbLink = ({ asChild, className, ...props }: BreadcrumbLinkProps) => {
  const Comp = asChild ? Slot : 'a';

  return <Comp className={cn('transition-colors hover:underline', className)} {...props} />;
};

interface BreadcrumbPageProps extends React.ComponentPropsWithoutRef<'span'> {}

const BreadcrumbPage = ({ ...props }: BreadcrumbPageProps) => (
  <span role="link" aria-disabled="true" aria-current="page" {...props} />
);

interface BreadcrumbSeparatorProps extends React.ComponentProps<'span'> {}

const BreadcrumbSeparator = ({ children, ...props }: BreadcrumbSeparatorProps) => (
  <span role="presentation" aria-hidden="true" {...props}>
    {children ?? <ChevronRight />}
  </span>
);

interface BreadcrumbsProps extends VariantProps<typeof breadcrumbsVariants> {
  breadcrumbs: breadcrumbLink[];
  asChild?: boolean;
  children?: React.JSX.IntrinsicElements;
}

const Breadcrumbs = ({ variant, size, breadcrumbs, ...props }: BreadcrumbsProps) => (
  <nav aria-label="breadcrumb" {...props} className={cn(breadcrumbsVariants({ variant, size }))}>
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
);

interface BreadcrumbsRootProps
  extends React.ComponentPropsWithoutRef<'nav'>,
    VariantProps<typeof breadcrumbsVariants> {
  separator?: React.ReactNode;
}

const BreadcrumbsRoot = ({ variant, size, ...props }: BreadcrumbsRootProps) => (
  <nav aria-label="breadcrumb" {...props} className={cn(breadcrumbsVariants({ variant, size }))} />
);

export {
  Breadcrumbs,
  BreadcrumbsRoot,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
