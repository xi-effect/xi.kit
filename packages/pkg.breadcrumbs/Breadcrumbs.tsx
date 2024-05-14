import * as React from "react";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { breadcrumbLink } from './types';
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@xipkg/utils';

export const breadcrumbsVariants = cva(
  '',
  {
    variants: {
      variant: {
        default:
          'text-brand-40',
        secondary:
          'text-gray-60',
      },
      size: {
        l: 'text-[16px] leading-[22px]',
        m: 'text-[14px]',
        s: 'text-[12px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'm',
    },
  }
);

export const separatorVariants = cva(
  '',
  {
    variants: {
      size: {
        l: '[&>svg]:size-[16px]',
        m: '[&>svg]:size-[14px]',
        s: '[&>svg]:size-[12px]',
      },
    },
    defaultVariants: {
      size: 'm',
    },
  }
);

export const pageVariants = cva(
  '',
  {
    variants: {
      variant: {
        default:
          'text-brand-80',
        secondary:
          'text-gray-100',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-[2px] break-words",
      className
    )}
    {...props}
  />
));
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-[2px]", className)}
    {...props}
  />
));
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:underline", className)}
      {...props}
    />
  )
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("page font-normal", className)}
    {...props}
  />
));
BreadcrumbPage.displayName = "BreadcrumbPage";


type BreadcrumbSeparatorProps = React.ComponentProps<"span"> & {separatorSize?: string};

const BreadcrumbSeparator = ({
  separatorSize,
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn(separatorSize, className)}
    {...props}
  >
    {children ?? <ChevronRightIcon />}
  </span>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export type BreadcrumbsProps = VariantProps<typeof breadcrumbsVariants> & 
{
  breadcrumbs: breadcrumbLink[],
  asChild?: boolean,
  children?: JSX.IntrinsicElements
}

export const Breadcrumbs = React.forwardRef<
  HTMLElement, 
  BreadcrumbsProps
>(({ variant, size, breadcrumbs, ...props }, ref) => (
  <nav ref={ref} aria-label="breadcrumb" {...props} className={cn(breadcrumbsVariants({ variant, size }))}>
    <BreadcrumbList>
      {breadcrumbs.map((item, index, breadcrumbsArray) => {
        const isLastItem = index === breadcrumbsArray.length - 1;

        return (
          <BreadcrumbItem key={index}>
            { 
              !isLastItem ? 
              (
              <>
                <BreadcrumbLink href="/">{item.name}</BreadcrumbLink>
                <BreadcrumbSeparator separatorSize={separatorVariants({ size })}/>
              </>
              )
              : <BreadcrumbPage className={cn(pageVariants({ variant }))}>{item.name}</BreadcrumbPage>
            }
          </BreadcrumbItem>
        )
      })}
    </BreadcrumbList>
  </nav>
));
Breadcrumbs.displayName = "Breadcrumbs";
