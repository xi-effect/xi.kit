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

// Tooltip.tsx
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@xipkg/utils";
import { jsx, jsxs } from "react/jsx-runtime";
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipArrow = React.forwardRef((_a, ref) => {
  var _b = _a, { className, width = 15, height = 6 } = _b, props = __objRest(_b, ["className", "width", "height"]);
  return /* @__PURE__ */ jsx(
    TooltipPrimitive.Arrow,
    __spreadProps(__spreadValues({
      ref,
      width,
      height,
      asChild: true,
      className: cn("fill-gray-0", className)
    }, props), {
      children: /* @__PURE__ */ jsx("svg", { width: "14", height: "5", viewBox: "0 0 14 5", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M4.39683 3.76871C5.89479 5.05268 8.10521 5.05268 9.60316 3.76871L14 0H0L4.39683 3.76871Z",
          className: "fill-gray-0"
        }
      ) })
    })
  );
});
TooltipArrow.displayName = TooltipPrimitive.Arrow.displayName;
var TooltipContent = React.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 2 } = _b, props = __objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ jsxs(
    TooltipPrimitive.Content,
    __spreadProps(__spreadValues({
      ref,
      sideOffset,
      className: cn(
        "bg-gray-0 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-w-[200px] overflow-hidden rounded-md px-3 py-1.5 text-sm font-semibold text-gray-100 shadow-[rgba(100,100,111,0.3)_0px_7px_29px_0px]",
        className
      )
    }, props), {
      children: [
        props.children,
        /* @__PURE__ */ jsx(TooltipArrow, {})
      ]
    })
  );
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
};
