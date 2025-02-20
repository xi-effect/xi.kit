import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';

declare const userProfileVariants: (props?: ({
    size?: "l" | "m" | "s" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface UserProfileProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'l' | 'm' | 's';
    src?: string;
    userId: number | null;
    color?: 'brand';
    withOutText?: boolean;
    text?: string;
    label?: string;
    classNameText?: string;
    classNameLabel?: string;
    loading?: boolean;
}
declare const UserProfile: ({ loading, className, classNameText, classNameLabel, withOutText, userId, src, size, color, text, label, ...props }: UserProfileProps) => react_jsx_runtime.JSX.Element;

export { UserProfile, type UserProfileProps, userProfileVariants };
