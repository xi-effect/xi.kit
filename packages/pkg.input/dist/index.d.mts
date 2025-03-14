import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

declare const inputVariants: (props?: ({
    variant?: "m" | "s" | null | undefined;
    error?: boolean | null | undefined;
    warning?: boolean | null | undefined;
    beforeBool?: boolean | null | undefined;
    afterBool?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
    before?: React.ReactNode;
    after?: React.ReactNode;
    beforeClassName?: string;
    afterClassName?: string;
    beforeProps?: React.HTMLAttributes<HTMLDivElement>;
    afterProps?: React.HTMLAttributes<HTMLDivElement>;
}
declare function Input({ className, variant, error, warning, type, before, after, beforeClassName, afterClassName, beforeProps, afterProps, ...props }: InputProps): React.JSX.Element;
declare namespace Input {
    var displayName: string;
}

export { Input, type InputProps };
