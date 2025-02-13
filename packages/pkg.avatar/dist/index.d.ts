import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { ImageProps } from 'next/image';

declare const Avatar: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
    size?: "xxl" | "xl" | "l" | "m" | "s";
} & React.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React.RefAttributes<HTMLImageElement>, "ref"> & {
    imageProps: ImageProps;
    size?: "xxl" | "xl" | "l" | "m" | "s";
} & React.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
    size?: "xxl" | "xl" | "l" | "m" | "s";
    loading?: boolean;
} & React.RefAttributes<HTMLSpanElement>>;

export { Avatar, AvatarFallback, AvatarImage };
