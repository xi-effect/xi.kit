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

// Link.tsx
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@xipkg/utils";
import { jsx } from "react/jsx-runtime";
var linkVariants = cva(
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      theme: {
        default: "decoration-gray-40 hover:decoration-gray-100 text-gray-90 hover:text-gray-100 disabled:text-gray-30",
        sky: "",
        brand: "decoration-brand-20 hover:decoration-brand-100 text-brand-80 hover:text-brand-100 disabled:text-gray-30",
        error: "",
        success: "",
        white: "decoration-gray-5 hover:decoration-gray-5 focus:decoration-gray-5 active:decoration-gray-5 text-gray-10 hover:text-gray-5 focus:text-gray-5 active:text-gray-5"
      },
      variant: {
        always: "underline decoration-1 underline-offset-4",
        none: "no-underline",
        hover: "transition hover:ease-in hover:underline decoration-1 underline-offset-4"
      },
      size: {
        l: "text-[16px]",
        m: "text-[14px]",
        s: "text-[12px]"
      }
    },
    defaultVariants: {
      theme: "default",
      variant: "always",
      size: "m"
    }
  }
);
var Link = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, theme, variant, size, children } = _b, props = __objRest(_b, ["className", "theme", "variant", "size", "children"]);
    return /* @__PURE__ */ jsx(
      "a",
      __spreadProps(__spreadValues({
        className: cn(linkVariants({ theme, variant, size, className })),
        ref
      }, props), {
        children
      })
    );
  }
);
Link.displayName = "Link";
export {
  Link
};
