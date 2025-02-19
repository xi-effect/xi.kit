import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { VariantProps } from 'class-variance-authority';
import * as React from 'react';

declare const checkboxVariants: (props?: ({
    size?: "l" | "m" | "s" | null | undefined;
    state?: "default" | "varning" | "error" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
declare const labelVariants: (props?: ({
    size?: "l" | "m" | "s" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, VariantProps<typeof labelVariants & typeof checkboxVariants> {
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLButtonElement>>;

export { Checkbox };
