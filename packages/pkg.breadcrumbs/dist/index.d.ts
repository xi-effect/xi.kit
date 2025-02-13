import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

type breadcrumbLink = {
    name: string;
    link: string;
};

declare const BreadcrumbList: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React.RefAttributes<HTMLOListElement>>;
declare const BreadcrumbItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
declare const BreadcrumbLink: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
    asChild?: boolean;
} & React.RefAttributes<HTMLAnchorElement>>;
declare const BreadcrumbPage: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
declare const BreadcrumbSeparator: {
    ({ children, className, ...props }: React.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const Breadcrumbs: React.ForwardRefExoticComponent<VariantProps<(props?: ({
    variant?: "default" | "secondary" | null | undefined;
    size?: "l" | "m" | "s" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & {
    breadcrumbs: breadcrumbLink[];
    asChild?: boolean;
    children?: React.JSX.IntrinsicElements;
} & React.RefAttributes<HTMLElement>>;
declare const BreadcrumbsRoot: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "secondary" | null | undefined;
    size?: "l" | "m" | "s" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & {
    separator?: React.ReactNode;
} & React.RefAttributes<HTMLElement>>;

export { BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Breadcrumbs, BreadcrumbsRoot };
