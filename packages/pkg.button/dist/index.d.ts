import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import * as React from 'react';

declare const buttonVariants: (props?: ({
    variant?: "default" | "secondary" | "ghost" | "error" | "success" | "secondary-error" | "default-spinner" | "secondary-spinner" | "ghost-spinner" | null | undefined;
    size?: "l" | "m" | "s" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

export { Button, type ButtonProps, buttonVariants };
