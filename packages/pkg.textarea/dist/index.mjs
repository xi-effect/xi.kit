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

// Textarea.tsx
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@xipkg/utils";
var textareaVariants = cva(
  "flex w-full min-w-[250px] max-w-[600px] rounded-md border-2 border-gray-30 bg-gray-0 text-gray-80 hover:border-gray-50 active:border-gray-30 focus:border-gray-80 focus-visible:outline-none px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-30 disabled:cursor-not-allowed disabled:bg-gray-10 resize-none",
  {
    variants: {
      variant: {
        m: "rounded-lg text-[16px]",
        s: "rounded-md text-[14px]"
      },
      error: {
        true: "border-red-80 hover:border-red-80 active:border-red-80 focus:border-red-80",
        false: ""
      },
      warning: {
        true: "border-orange-80 hover:border-orange-80 active:border-orange-80 focus:border-orange-80",
        false: ""
      }
    },
    defaultVariants: {
      variant: "m",
      error: false,
      warning: false
    }
  }
);
var maxRows = 16;
var Textarea = React.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant = "m",
      error,
      warning,
      rows = 2,
      maxLength = 0,
      onChange,
      threshold = 0
    } = _b, props = __objRest(_b, [
      "className",
      "variant",
      "error",
      "warning",
      "rows",
      "maxLength",
      "onChange",
      "threshold"
    ]);
    const lineHeight = variant === "m" ? 24 : 21;
    const textareaRef = React.useRef(null);
    const [isFocused, setIsFocused] = React.useState(false);
    const [charCount, setCharCount] = React.useState(0);
    React.useEffect(() => {
      if (textareaRef.current) {
        autoResize();
      }
    }, []);
    const autoResize = () => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      textarea.style.height = "auto";
      const scrollHeight = textarea.scrollHeight;
      const currentRows = Math.ceil(scrollHeight / lineHeight);
      const newRows = Math.min(currentRows + 1, maxRows);
      const newHeight = newRows * lineHeight;
      textarea.style.height = `${newHeight}px`;
      textarea.style.overflowY = newRows >= maxRows ? "scroll" : "hidden";
    };
    const handleChange = (e) => {
      const newCharCount = e.target.value.length;
      setCharCount(newCharCount);
      autoResize();
      if (onChange) {
        const isMaxLengthExceeded = maxLength > 0 && newCharCount > maxLength;
        const customEvent = __spreadProps(__spreadValues({}, e), {
          isMaxLengthExceeded
        });
        onChange(customEvent);
      }
    };
    return /* @__PURE__ */ React.createElement("div", { className: "relative w-full max-w-[600px]" }, /* @__PURE__ */ React.createElement(
      "textarea",
      __spreadValues({
        className: cn(
          textareaVariants({
            variant,
            error,
            warning,
            className
          })
        ),
        ref: (el) => {
          textareaRef.current = el;
          if (typeof ref === "function") {
            ref(el);
          } else if (ref) {
            ref.current = el;
          }
        },
        rows,
        onFocus: () => setIsFocused(true),
        onBlur: () => setIsFocused(false),
        onChange: handleChange
      }, props)
    ), maxLength > 0 && isFocused && charCount >= threshold && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: cn(
          "absolute bottom-2 right-2 text-sm",
          charCount > maxLength ? "text-red-80" : "text-gray-50"
        )
      },
      maxLength - charCount
    ));
  }
);
Textarea.displayName = "Textarea";
export {
  Textarea
};
