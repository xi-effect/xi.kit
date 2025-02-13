import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

declare const textareaVariants: (props?: ({
    variant?: "m" | "s" | null | undefined;
    error?: boolean | null | undefined;
    warning?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement> & {
        isMaxLengthExceeded?: boolean;
    }) => void;
    threshold?: number;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

export { Textarea, type TextareaProps };
