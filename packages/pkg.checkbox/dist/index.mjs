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

// Checkbox.tsx
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva } from "class-variance-authority";
import { Check } from "lucide-react";
import * as React from "react";
import { cn } from "@xipkg/utils";
import { jsx, jsxs } from "react/jsx-runtime";
var checkboxVariants = cva(
  "shrink-0 p-0.5 peer data-[state=checked]:text-gray-0 data-[state=checked]:bg-brand-80 data-[state=checked]:border-brand-80 disabled:!cursor-not-allowed disabled:!bg-gray-10 disabled:!text-gray-30 disabled:!border-0 border bg-gray-0 border-gray-30",
  {
    variants: {
      size: {
        l: "w-6 h-6 rounded-md",
        m: "w-5 h-5 rounded-md",
        s: "w-4 h-4 rounded-[0.250rem]"
      },
      state: {
        default: "data-[state=checked]:group-hover:bg-brand-100 group-hover:bg-gray-5 group-hover:border-gray-30",
        varning: "border-orange-80 data-[state=checked]:!bg-orange-80 data-[state=checked]:!border-orange-80",
        error: "border-red-80 data-[state=checked]:!bg-red-80 data-[state=checked]:!border-red-80"
      }
    },
    defaultVariants: {
      state: "default"
    }
  }
);
var labelVariants = cva(
  "inline-flex group focus-visible:ring-2 ring-brand-80 ring-offset-4 text-gray-100 items-center gap-2",
  {
    variants: {
      size: {
        l: "gap-2 leading-[22px]",
        m: "gap-[0.375rem] text-sm",
        s: "gap-1 text-xs"
      }
    }
  }
);
var Checkbox = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children = null, size, state } = _b, props = __objRest(_b, ["className", "children", "size", "state"]);
  return /* @__PURE__ */ jsxs("label", { className: cn(labelVariants({ size }), !props.disabled && "hover:cursor-pointer"), children: [
    /* @__PURE__ */ jsx(
      CheckboxPrimitive.Root,
      __spreadProps(__spreadValues({
        ref,
        className: cn(checkboxVariants({ size, state }), className)
      }, props), {
        children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, { className: cn("flex items-center justify-center text-current"), children: /* @__PURE__ */ jsx(Check, { className: "h-full w-full" }) })
      })
    ),
    children && /* @__PURE__ */ jsx("span", { className: "pb-[0.125rem] peer-disabled:text-gray-50", children })
  ] });
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
export {
  Checkbox
};
