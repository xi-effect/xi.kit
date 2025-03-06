var __defProp = Object.defineProperty;
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

// Input.tsx
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@xipkg/utils";
var inputVariants = cva(
  "flex w-full rounded-md border-2 border-gray-30 bg-gray-0 text-gray-80 hover:border-gray-50 active:border-gray-30 focus:border-gray-80 focus-visible:outline-none px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-30 disabled:cursor-not-allowed disabled:bg-gray-10",
  {
    variants: {
      variant: {
        m: "h-12 px-3 rounded-lg text-[16px]",
        s: "h-8 px-2 rounded-md text-[14px]"
      },
      error: {
        true: "border-red-80 hover:border-red-80 active:border-red-80 focus:border-red-80",
        false: ""
      },
      warning: {
        true: "border-orange-80 hover:border-orange-80 active:border-orange-80 focus:border-orange-80",
        false: ""
      },
      beforeBool: {
        true: "",
        false: ""
      },
      afterBool: {
        true: "",
        false: ""
      }
    },
    compoundVariants: [
      {
        variant: "m",
        beforeBool: true,
        className: "pl-11"
      },
      {
        variant: "s",
        beforeBool: true,
        className: "pl-7"
      },
      {
        variant: "m",
        afterBool: true,
        className: "pr-11"
      },
      {
        variant: "s",
        afterBool: true,
        className: "pr-7"
      }
    ],
    defaultVariants: {
      variant: "m",
      error: false,
      warning: false,
      beforeBool: false,
      afterBool: false
    }
  }
);
var addsVariants = cva("absolute flex items-center z-50", {
  variants: {
    variant: {
      m: "h-6 top-3",
      s: "h-4 top-2"
    },
    beforeBool: {
      true: "",
      false: ""
    },
    afterBool: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      variant: "m",
      beforeBool: true,
      className: "left-3"
    },
    {
      variant: "s",
      beforeBool: true,
      className: "left-2"
    },
    {
      variant: "m",
      afterBool: true,
      className: "right-3"
    },
    {
      variant: "s",
      afterBool: true,
      className: "right-2"
    }
  ],
  defaultVariants: {
    variant: "m",
    beforeBool: false,
    afterBool: false
  }
});
function Input(_a) {
  var _b = _a, {
    className,
    variant,
    error,
    warning,
    type,
    before,
    after,
    beforeClassName,
    afterClassName,
    beforeProps,
    afterProps
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "error",
    "warning",
    "type",
    "before",
    "after",
    "beforeClassName",
    "afterClassName",
    "beforeProps",
    "afterProps"
  ]);
  return /* @__PURE__ */ React.createElement("div", { className: "relative" }, !!before && /* @__PURE__ */ React.createElement(
    "div",
    __spreadValues({
      className: cn(
        addsVariants({
          variant,
          beforeBool: !!before,
          afterBool: !!after,
          className: beforeClassName
        })
      )
    }, beforeProps),
    before
  ), /* @__PURE__ */ React.createElement(
    "input",
    __spreadValues({
      type,
      className: cn(
        inputVariants({
          variant,
          error,
          warning,
          beforeBool: !!before,
          afterBool: !!after,
          className
        })
      )
    }, props)
  ), !!after && /* @__PURE__ */ React.createElement(
    "div",
    __spreadValues({
      className: cn(
        addsVariants({
          variant,
          beforeBool: !!before,
          afterBool: !!after,
          className: afterClassName
        })
      )
    }, afterProps),
    after
  ));
}
Input.displayName = "Input";
export {
  Input
};
