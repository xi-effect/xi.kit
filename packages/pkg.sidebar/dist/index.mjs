var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// context/SidebarContext.ts
import { createContext, useContext } from "react";
var SidebarContext = createContext(null);
function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}

// components/Sidebar.tsx
import { cn } from "@xipkg/utils";
import { jsx, jsxs } from "react/jsx-runtime";
var Sidebar = (_a) => {
  var _b = _a, {
    side = "left",
    variant = "sidebar",
    collapsible = "offcanvas",
    className,
    children,
    style,
    ref
  } = _b, props = __objRest(_b, [
    "side",
    "variant",
    "collapsible",
    "className",
    "children",
    "style",
    "ref"
  ]);
  const { state } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ jsx(
      "div",
      __spreadProps(__spreadValues({
        className: cn("bg-gray-0 flex h-full w-[--sidebar-width] flex-col", className),
        ref
      }, props), {
        children
      })
    );
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: "group peer",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "relative w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          __spreadProps(__spreadValues({
            className: cn(
              "fixed inset-y-0 z-10 flex h-full w-[--sidebar-width] px-4 pb-4 transition-[left,right,width] duration-200 ease-linear",
              side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]x",
              className
            )
          }, props), {
            children: /* @__PURE__ */ jsx(
              "div",
              {
                "data-sidebar": "sidebar",
                className: "bg-gray-0 flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow",
                children
              }
            )
          })
        )
      ]
    }
  );
};

// components/SidebarContent.tsx
import { cn as cn2 } from "@xipkg/utils";
import { jsx as jsx2 } from "react/jsx-runtime";
var SidebarContent = (_a) => {
  var _b = _a, { className, ref } = _b, props = __objRest(_b, ["className", "ref"]);
  return /* @__PURE__ */ jsx2(
    "div",
    __spreadValues({
      ref,
      "data-sidebar": "content",
      className: cn2(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )
    }, props)
  );
};

// components/SidebarHeader.tsx
import { cn as cn3 } from "@xipkg/utils";
import { jsx as jsx3 } from "react/jsx-runtime";
var SidebarHeader = (_a) => {
  var _b = _a, { className, ref } = _b, props = __objRest(_b, ["className", "ref"]);
  return /* @__PURE__ */ jsx3(
    "div",
    __spreadValues({
      ref,
      "data-sidebar": "header",
      className: cn3("flex flex-col gap-2 p-2", className)
    }, props)
  );
};

// components/SidebarFooter.tsx
import { cn as cn4 } from "@xipkg/utils";
import { jsx as jsx4 } from "react/jsx-runtime";
var SidebarFooter = (_a) => {
  var _b = _a, { className, ref } = _b, props = __objRest(_b, ["className", "ref"]);
  return /* @__PURE__ */ jsx4(
    "div",
    __spreadValues({
      ref,
      "data-sidebar": "footer",
      className: cn4("flex flex-col gap-2", className)
    }, props)
  );
};

// components/SidebarGroup.tsx
import { cn as cn5 } from "@xipkg/utils";
import { jsx as jsx5 } from "react/jsx-runtime";
var SidebarGroup = (_a) => {
  var _b = _a, { className, ref } = _b, props = __objRest(_b, ["className", "ref"]);
  return /* @__PURE__ */ jsx5(
    "div",
    __spreadValues({
      ref,
      "data-sidebar": "group",
      className: cn5("relative flex w-full min-w-0 flex-col", className)
    }, props)
  );
};

// components/SidebarGroupAction.tsx
import { cn as cn6 } from "@xipkg/utils";

// ../../node_modules/@radix-ui/react-slot/dist/index.mjs
import * as React2 from "react";

// ../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs
import * as React from "react";
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}

// ../../node_modules/@radix-ui/react-slot/dist/index.mjs
import { Fragment as Fragment2, jsx as jsx6 } from "react/jsx-runtime";
var Slot = React2.forwardRef((props, forwardedRef) => {
  const _a = props, { children } = _a, slotProps = __objRest(_a, ["children"]);
  const childrenArray = React2.Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (React2.Children.count(newElement) > 1) return React2.Children.only(null);
        return React2.isValidElement(newElement) ? newElement.props.children : null;
      } else {
        return child;
      }
    });
    return /* @__PURE__ */ jsx6(SlotClone, __spreadProps(__spreadValues({}, slotProps), { ref: forwardedRef, children: React2.isValidElement(newElement) ? React2.cloneElement(newElement, void 0, newChildren) : null }));
  }
  return /* @__PURE__ */ jsx6(SlotClone, __spreadProps(__spreadValues({}, slotProps), { ref: forwardedRef, children }));
});
Slot.displayName = "Slot";
var SlotClone = React2.forwardRef((props, forwardedRef) => {
  const _a = props, { children } = _a, slotProps = __objRest(_a, ["children"]);
  if (React2.isValidElement(children)) {
    const childrenRef = getElementRef(children);
    const props2 = mergeProps(slotProps, children.props);
    if (children.type !== React2.Fragment) {
      props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
    }
    return React2.cloneElement(children, props2);
  }
  return React2.Children.count(children) > 1 ? React2.Children.only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children }) => {
  return /* @__PURE__ */ jsx6(Fragment2, { children });
};
function isSlottable(child) {
  return React2.isValidElement(child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = __spreadValues({}, childProps);
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = __spreadValues(__spreadValues({}, slotPropValue), childPropValue);
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return __spreadValues(__spreadValues({}, slotProps), overrideProps);
}
function getElementRef(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// components/SidebarGroupAction.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var SidebarGroupAction = (_a) => {
  var _b = _a, {
    className,
    ref,
    asChild = false
  } = _b, props = __objRest(_b, [
    "className",
    "ref",
    "asChild"
  ]);
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx7(
    Comp,
    __spreadValues({
      ref,
      "data-sidebar": "group-action",
      className: cn6(
        "ring-sidebar-ring hover:bg-sidebar-accent hover:text-gray-80 absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 transition-transform outline-none focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
};

// components/SidebarGroupContent.tsx
import { cn as cn7 } from "@xipkg/utils";
import { jsx as jsx8 } from "react/jsx-runtime";
var SidebarGroupContent = (_a) => {
  var _b = _a, { className, ref } = _b, props = __objRest(_b, ["className", "ref"]);
  return /* @__PURE__ */ jsx8("div", __spreadValues({ ref, "data-sidebar": "group-content", className: cn7("w-full", className) }, props));
};

// components/SidebarGroupLabel.tsx
import { cn as cn8 } from "@xipkg/utils";
import { jsx as jsx9 } from "react/jsx-runtime";
var SidebarGroupLabel = (_a) => {
  var _b = _a, {
    className,
    ref,
    asChild = false
  } = _b, props = __objRest(_b, [
    "className",
    "ref",
    "asChild"
  ]);
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsx9(
    Comp,
    __spreadValues({
      ref,
      "data-sidebar": "group-label",
      className: cn8(
        "ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium transition-[margin,opacity] duration-200 ease-linear outline-none focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )
    }, props)
  );
};

// components/SidebarInset.tsx
import { cn as cn9 } from "@xipkg/utils";
import { jsx as jsx10 } from "react/jsx-runtime";
var SidebarInset = (_a) => {
  var _b = _a, { className, ref } = _b, props = __objRest(_b, ["className", "ref"]);
  return /* @__PURE__ */ jsx10(
    "main",
    __spreadValues({
      ref,
      className: cn9(
        "bg-gray-0 relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2",
        className
      )
    }, props)
  );
};

// components/SidebarMenu.tsx
import { cn as cn10 } from "@xipkg/utils";
import { jsx as jsx11 } from "react/jsx-runtime";
var SidebarMenu = (_a) => {
  var _b = _a, { className, ref } = _b, props = __objRest(_b, ["className", "ref"]);
  return /* @__PURE__ */ jsx11(
    "ul",
    __spreadValues({
      ref,
      "data-sidebar": "menu",
      className: cn10("flex w-full min-w-0 flex-col gap-1", className)
    }, props)
  );
};

// components/SidebarMenuAction.tsx
import { cn as cn11 } from "@xipkg/utils";
import { jsx as jsx12 } from "react/jsx-runtime";
var SidebarMenuAction = (_a) => {
  var _b = _a, {
    className,
    ref,
    asChild = false,
    showOnHover = false
  } = _b, props = __objRest(_b, [
    "className",
    "ref",
    "asChild",
    "showOnHover"
  ]);
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx12(
    Comp,
    __spreadValues({
      ref,
      "data-sidebar": "menu-action",
      className: cn11(
        "hover:bg-grand-80 hover:text-gray-80 peer-hover/menu-button:text-gray-80 absolute top-1/2 right-1 flex aspect-square w-5 -translate-y-1/2 items-center justify-center rounded-md p-0 transition-transform outline-none focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1/2",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        "group-data-[collapsible=offcanvas]:hidden",
        showOnHover && "peer-data-[active=true]/menu-button:text-gray-80 group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className
      )
    }, props)
  );
};

// components/SidebarMenuBadge.tsx
import { cn as cn12 } from "@xipkg/utils";
import { jsx as jsx13 } from "react/jsx-runtime";
var SidebarMenuBadge = (_a) => {
  var _b = _a, { className, ref } = _b, props = __objRest(_b, ["className", "ref"]);
  return /* @__PURE__ */ jsx13(
    "div",
    __spreadValues({
      ref,
      "data-sidebar": "menu-badge",
      className: cn12(
        "text-gray-80 pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-gray-80",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
};

// components/SidebarMenuButton.tsx
import { Tooltip, TooltipContent, TooltipTrigger } from "@xipkg/tooltip";
import { cn as cn13 } from "@xipkg/utils";
import { cva } from "class-variance-authority";
import { jsx as jsx14, jsxs as jsxs2 } from "react/jsx-runtime";
var sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none transition-[width,height,padding] focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50  data-[active=true]:font-medium group-data-[collapsible=icon]:!size-10 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-brand-0 bg-transparent hover:text-brand-80 text-gray-80 hover:[&>svg]:fill-brand-80 data-[active=true]:text-brand-80 data-[active=true]:[&>svg]:fill-brand-80",
        ghost: "hover:bg-transparent active:bg-transparent focus:bg-transparent text-gray-50 [&>svg]:fill-gray-50"
      },
      size: {
        default: "h-10 text-base",
        sm: "h-8 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var SidebarMenuButton = (_a) => {
  var _b = _a, {
    asChild = false,
    isActive = false,
    variant = "default",
    size = "default",
    tooltip,
    className,
    ref
  } = _b, props = __objRest(_b, [
    "asChild",
    "isActive",
    "variant",
    "size",
    "tooltip",
    "className",
    "ref"
  ]);
  const Comp = asChild ? Slot : "button";
  const { state } = useSidebar();
  const button = /* @__PURE__ */ jsx14(
    Comp,
    __spreadValues({
      ref,
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-active": isActive,
      className: cn13(sidebarMenuButtonVariants({ variant, size }), className)
    }, props)
  );
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /* @__PURE__ */ jsxs2(Tooltip, { children: [
    /* @__PURE__ */ jsx14(TooltipTrigger, { asChild: true, children: button }),
    /* @__PURE__ */ jsx14(TooltipContent, __spreadValues({ side: "right", align: "center", hidden: state !== "collapsed" }, tooltip))
  ] });
};

// components/SidebarMenuItem.tsx
import { cn as cn14 } from "@xipkg/utils";
import { jsx as jsx15 } from "react/jsx-runtime";
var SidebarMenuItem = (_a) => {
  var _b = _a, { className, ref } = _b, props = __objRest(_b, ["className", "ref"]);
  return /* @__PURE__ */ jsx15(
    "li",
    __spreadValues({
      ref,
      "data-sidebar": "menu-item",
      className: cn14("group/menu-item relative", className)
    }, props)
  );
};

// components/SidebarMenuSub.tsx
import { cn as cn15 } from "@xipkg/utils";
import { jsx as jsx16 } from "react/jsx-runtime";
var SidebarMenuSub = (_a) => {
  var _b = _a, { className, ref } = _b, props = __objRest(_b, ["className", "ref"]);
  return /* @__PURE__ */ jsx16(
    "ul",
    __spreadValues({
      ref,
      "data-sidebar": "menu-sub",
      className: cn15(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
};

// components/SidebarMenuSubButton.tsx
import { cn as cn16 } from "@xipkg/utils";
import { jsx as jsx17 } from "react/jsx-runtime";
var SidebarMenuSubButton = (_a) => {
  var _b = _a, {
    asChild = false,
    size = "md",
    isActive,
    className,
    ref
  } = _b, props = __objRest(_b, [
    "asChild",
    "size",
    "isActive",
    "className",
    "ref"
  ]);
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx17(
    Comp,
    __spreadValues({
      ref,
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn16(
        "hover:bg-gray-0 hover:gray-80 active:bg-gray-0 active:text-brand-80 [&>svg]:text-gray-80 flex h-8 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-gray-0 data-[active=true]:text-gray-80",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
};

// components/SidebarMenuSubItem.tsx
import { jsx as jsx18 } from "react/jsx-runtime";
var SidebarMenuSubItem = (_a) => {
  var _b = _a, { ref } = _b, props = __objRest(_b, ["ref"]);
  return /* @__PURE__ */ jsx18("li", __spreadValues({ ref }, props));
};

// components/SidebarTrigger.tsx
import { Burger, Close } from "@xipkg/icons";
import { Button } from "@xipkg/button";
import { cn as cn17 } from "@xipkg/utils";
import { jsx as jsx19, jsxs as jsxs3 } from "react/jsx-runtime";
var SidebarTrigger = (_a) => {
  var _b = _a, {
    className,
    ref,
    onClick
  } = _b, props = __objRest(_b, [
    "className",
    "ref",
    "onClick"
  ]);
  const { toggleSidebar, open } = useSidebar();
  return /* @__PURE__ */ jsxs3(
    Button,
    __spreadProps(__spreadValues({
      ref,
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "m",
      className: cn17(
        "h-10 w-10 bg-transparent px-0 focus:bg-transparent active:bg-transparent",
        className
      ),
      onClick: (event) => {
        onClick == null ? void 0 : onClick(event);
        toggleSidebar();
      }
    }, props), {
      children: [
        open ? /* @__PURE__ */ jsx19(Close, {}) : /* @__PURE__ */ jsx19(Burger, {}),
        /* @__PURE__ */ jsx19("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    })
  );
};

// const.ts
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "20rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";

// context/SidebarProvider.tsx
import { TooltipProvider } from "@xipkg/tooltip";
import { cn as cn18 } from "@xipkg/utils";
import { useCallback as useCallback2, useEffect, useMemo, useState } from "react";
import { jsx as jsx20 } from "react/jsx-runtime";
var SidebarProvider = (_a) => {
  var _b = _a, {
    defaultOpen = true,
    open: openProp,
    onOpenChange: setOpenProp,
    className,
    style,
    children,
    ref
  } = _b, props = __objRest(_b, [
    "defaultOpen",
    "open",
    "onOpenChange",
    "className",
    "style",
    "children",
    "ref"
  ]);
  const [_open, _setOpen] = useState(defaultOpen);
  const open = openProp != null ? openProp : _open;
  const setOpen = useCallback2(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );
  const toggleSidebar = useCallback2(() => {
    return setOpen((open2) => !open2);
  }, [setOpen]);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = useMemo(
    () => ({
      state,
      open,
      setOpen,
      toggleSidebar
    }),
    [state, open, setOpen, toggleSidebar]
  );
  return /* @__PURE__ */ jsx20(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx20(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsx20(
    "div",
    __spreadProps(__spreadValues({
      style: __spreadValues({
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON
      }, style),
      className: cn18(
        "group/sidebar-wrapper has-[[data-variant=inset]]:bg-sidebar flex min-h-svh w-full",
        className
      ),
      ref
    }, props), {
      children
    })
  ) }) });
};
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar
};
