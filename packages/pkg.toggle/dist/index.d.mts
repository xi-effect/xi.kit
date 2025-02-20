import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import * as SwitchPrimitives from '@radix-ui/react-switch';

declare const toggleVariants: (props?: ({
    size?: "l" | "m" | "s" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>, VariantProps<typeof toggleVariants> {
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>;

export { Switch as Toggle };
