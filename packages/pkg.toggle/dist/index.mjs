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

// Toggle.tsx
import * as React from "react";
import { cva } from "class-variance-authority";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { jsx } from "react/jsx-runtime";
var toggleVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-brand-80 data-[state=checked]:hover:bg-brand-100 data-[state=unchecked]:bg-gray-20 data-[state=unchecked]:hover:bg-gray-30",
  {
    variants: {
      size: {
        l: "h-8 w-14 border-4",
        m: "h-6 w-10 border-4",
        s: "h-4 w-7 border-2"
      }
    },
    defaultVariants: {
      size: "m"
    }
  }
);
var toggleThumbVariants = cva(
  "pointer-events-none block rounded-full bg-gray-0 shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        l: "h-5 w-5 data-[state=checked]:translate-x-7",
        m: "h-4 w-4 data-[state=checked]:translate-x-4",
        s: "h-3 w-3 data-[state=checked]:translate-x-3"
      }
    },
    defaultVariants: {
      size: "m"
    }
  }
);
var Switch = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { size, className } = _b, props = __objRest(_b, ["size", "className"]);
    return /* @__PURE__ */ jsx(SwitchPrimitives.Root, __spreadProps(__spreadValues({ className: toggleVariants({ size, className }) }, props), { ref, children: /* @__PURE__ */ jsx(SwitchPrimitives.Thumb, { className: toggleThumbVariants({ size }) }) }));
  }
);
Switch.displayName = SwitchPrimitives.Root.displayName;
export {
  Switch as Toggle
};
