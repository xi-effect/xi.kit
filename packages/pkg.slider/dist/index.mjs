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

// Slider.tsx
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@xipkg/utils";
import { jsx, jsxs } from "react/jsx-runtime";
var Slider = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxs(
    SliderPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn("relative flex w-full touch-none select-none items-center", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "bg-gray-30 relative h-1 w-full grow overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "bg-brand-80 absolute h-full" }) }),
        /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "bg-brand-80 ring-offset-background block h-4 w-4 cursor-pointer rounded-full transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" })
      ]
    })
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;
export {
  Slider
};
