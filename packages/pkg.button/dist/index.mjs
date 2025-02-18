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

// Button.tsx
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "@xipkg/utils";
import { jsx } from "react/jsx-runtime";
var spinner = 'before:content-[""] before:animate-spin before:rounded-full before:border-gray-60 before:border-2 before:border-t-transparent disabled:opacity-100';
var buttonVariants = cva(
  "inline-flex border-box justify-center items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-gray-0 dark:text-gray-100 bg-brand-80 hover:bg-brand-100 active:bg-brand-100 focus:bg-brand-100",
        secondary: "bg-gray-0 text-gray-100 border-gray-30 border-2 hover:bg-gray-5 active:bg-gray-5 focus:bg-gray-5",
        ghost: "text-gray-100 bg-gray-0 border-0 hover:bg-gray-5 active:bg-gray-5 focus:bg-gray-5",
        error: "bg-red-80 text-gray-0 hover:bg-red-100 active:bg-red-100 focus:bg-red-100",
        success: "bg-green-80 text-gray-0 hover:bg-green-100 active:bg-green-100 focus:bg-green-100",
        "secondary-error": "bg-red-0 text-red-100 border-2 border-red-100 disabled:text-red-20 disabled:border-red-20 hover:bg-red-20 active:bg-red-20 focus:bg-red-20",
        "default-spinner": `bg-gray-10 ${spinner}`,
        "secondary-spinner": `bg-gray-0 border-gray-30 border-2 ${spinner}`,
        "ghost-spinner": `bg-gray-0 border-0 ${spinner}`
      },
      size: {
        l: "h-14 rounded-xl px-8 text-[20px] pb-[3px]",
        m: "h-12 rounded-lg px-4 text-[16px] pb-[2px]",
        s: "h-8 rounded-md px-3 text-[14px] pb-[2px]"
      }
    },
    compoundVariants: [
      {
        variant: ["default-spinner", "secondary-spinner", "ghost-spinner"],
        size: "l",
        class: "before:w-8 before:h-8 p-0"
      },
      {
        variant: ["default-spinner", "secondary-spinner", "ghost-spinner"],
        size: "m",
        class: "before:w-6 before:h-6 p-0"
      },
      {
        variant: ["default-spinner", "secondary-spinner", "ghost-spinner"],
        size: "s",
        class: "before:w-4 before:h-4 p-0"
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "m"
    }
  }
);
var Button = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size, asChild = false, children } = _b, props = __objRest(_b, ["className", "variant", "size", "asChild", "children"]);
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, __spreadProps(__spreadValues({ className: cn(buttonVariants({ variant, size, className })), ref }, props), { children }));
  }
);
Button.displayName = "Button";
export {
  Button,
  buttonVariants
};
