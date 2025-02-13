import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import NextLink from 'next/link';

declare const linkVariants: (props?: ({
    theme?: "default" | "sky" | "brand" | "error" | "success" | "white" | null | undefined;
    variant?: "always" | "none" | "hover" | null | undefined;
    size?: "l" | "m" | "s" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface LinkProps extends React.ComponentProps<typeof NextLink>, VariantProps<typeof linkVariants> {
}
declare const Link: React.ForwardRefExoticComponent<Omit<LinkProps, "ref"> & React.RefAttributes<HTMLAnchorElement>>;

export { Link, type LinkProps };
