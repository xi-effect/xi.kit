import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { VariantProps } from 'class-variance-authority';

declare const Dialog: React.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const dialogContentVariants: (props?: ({
    variant?: "default" | "full" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof dialogContentVariants> {
    closeClassName?: string;
}
declare const DialogContent: React.ForwardRefExoticComponent<DialogContentProps & React.RefAttributes<HTMLDivElement>>;
declare const dialogCloseButtonVariants: (props?: ({
    variant?: "default" | "full" | "noStyle" | null | undefined;
    breakpoint?: "sm" | "lg" | "md" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface DialogCloseButtonProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>, VariantProps<typeof dialogCloseButtonVariants> {
    icon?: React.ReactNode;
}
declare const DialogCloseButton: {
    ({ variant, breakpoint, className, children, ...props }: DialogCloseButtonProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogTitle: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;

export { Dialog as Modal, DialogCloseButton as ModalCloseButton, DialogContent as ModalContent, DialogDescription as ModalDescription, DialogFooter as ModalFooter, DialogHeader as ModalHeader, DialogTitle as ModalTitle, DialogTrigger as ModalTrigger };
