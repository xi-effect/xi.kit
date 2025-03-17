import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { TooltipContent } from '@xipkg/tooltip';
import { VariantProps } from 'class-variance-authority';
import { Button } from '@xipkg/button';

type SidebarPropsT = React.ComponentProps<'div'> & {
    side?: 'left' | 'right';
    variant?: 'sidebar' | 'floating' | 'inset';
    collapsible?: 'offcanvas' | 'icon' | 'none';
    style?: React.CSSProperties;
};
declare const Sidebar: ({ side, variant, collapsible, className, children, style, ref, ...props }: SidebarPropsT) => react_jsx_runtime.JSX.Element;

declare const SidebarContent: ({ className, ref, ...props }: React.ComponentProps<"div">) => react_jsx_runtime.JSX.Element;

declare const SidebarHeader: ({ className, ref, ...props }: React.ComponentProps<"div">) => react_jsx_runtime.JSX.Element;

declare const SidebarFooter: ({ className, ref, ...props }: React.ComponentProps<"div">) => react_jsx_runtime.JSX.Element;

declare const SidebarGroup: ({ className, ref, ...props }: React.ComponentProps<"div">) => react_jsx_runtime.JSX.Element;

declare const SidebarGroupAction: ({ className, ref, asChild, ...props }: React.ComponentProps<"button"> & {
    asChild?: boolean;
}) => react_jsx_runtime.JSX.Element;

declare const SidebarGroupContent: ({ className, ref, ...props }: React.ComponentProps<"div">) => react_jsx_runtime.JSX.Element;

declare const SidebarGroupLabel: ({ className, ref, asChild, ...props }: React.ComponentProps<"div"> & {
    asChild?: boolean;
}) => react_jsx_runtime.JSX.Element;

declare const SidebarInset: ({ className, ref, ...props }: React.ComponentProps<"main">) => react_jsx_runtime.JSX.Element;

declare const SidebarMenu: ({ className, ref, ...props }: React.ComponentProps<"ul">) => react_jsx_runtime.JSX.Element;

declare const SidebarMenuAction: ({ className, ref, asChild, showOnHover, ...props }: React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
}) => react_jsx_runtime.JSX.Element;

declare const SidebarMenuBadge: ({ className, ref, ...props }: React.ComponentProps<"div">) => react_jsx_runtime.JSX.Element;

type SidebarMenuButtonPropsT = React.ComponentProps<'button'> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>;
declare const sidebarMenuButtonVariants: (props?: ({
    variant?: "default" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
declare const SidebarMenuButton: ({ asChild, isActive, variant, size, tooltip, className, ref, ...props }: SidebarMenuButtonPropsT) => react_jsx_runtime.JSX.Element;

declare const SidebarMenuItem: ({ className, ref, ...props }: React.ComponentProps<"li">) => react_jsx_runtime.JSX.Element;

declare const SidebarMenuSub: ({ className, ref, ...props }: React.ComponentProps<"ul">) => react_jsx_runtime.JSX.Element;

type SidebarMenuSubButtonPropsT = React.ComponentProps<'a'> & {
    asChild?: boolean;
    size?: 'sm' | 'md';
    isActive?: boolean;
};
declare const SidebarMenuSubButton: ({ asChild, size, isActive, className, ref, ...props }: SidebarMenuSubButtonPropsT) => react_jsx_runtime.JSX.Element;

declare const SidebarMenuSubItem: ({ ref, ...props }: React.ComponentProps<"li">) => react_jsx_runtime.JSX.Element;

declare const SidebarTrigger: ({ className, ref, onClick, ...props }: React.ComponentProps<typeof Button>) => react_jsx_runtime.JSX.Element;

declare const SidebarProvider: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}, "ref"> & React.RefAttributes<HTMLDivElement>>;

type SidebarContextT = {
    state: 'expanded' | 'collapsed';
    open: boolean;
    setOpen: (open: boolean) => void;
    toggleSidebar: () => void;
};
declare function useSidebar(): SidebarContextT;

export { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarTrigger, useSidebar };
