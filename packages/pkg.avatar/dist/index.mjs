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

// Avatar.tsx
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@xipkg/utils";
import Image2 from "next/image";
import { jsx } from "react/jsx-runtime";
var sizeMap = {
  xxl: 128,
  xl: 64,
  l: 48,
  m: 32,
  s: 24
};
var Avatar = React.forwardRef((_a, ref) => {
  var _b = _a, { className, size = "l" } = _b, props = __objRest(_b, ["className", "size"]);
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Root,
    __spreadValues({
      ref,
      className: cn(
        `relative flex h-[${sizeMap[size]}px] w-[${sizeMap[size]}px] shrink-0 overflow-hidden rounded-full`,
        className
      )
    }, props)
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React.forwardRef((_a, ref) => {
  var _b = _a, { className, size = "l", imageProps } = _b, props = __objRest(_b, ["className", "size", "imageProps"]);
  var _a2, _b2;
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Image,
    __spreadProps(__spreadValues({
      ref,
      className: cn("aspect-square h-full w-full", className),
      asChild: true
    }, props), {
      children: /* @__PURE__ */ jsx(
        Image2,
        __spreadProps(__spreadValues({}, imageProps), {
          width: (_a2 = sizeMap[size]) != null ? _a2 : 48,
          height: (_b2 = sizeMap[size]) != null ? _b2 : 48,
          quality: 100,
          alt: "user avatar"
        })
      )
    })
  );
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React.forwardRef((_a, ref) => {
  var _b = _a, { className, size = "l", loading } = _b, props = __objRest(_b, ["className", "size", "loading"]);
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Fallback,
    __spreadValues({
      ref,
      className: cn(
        `${loading ? "bg-gray-10 animate-pulse" : "bg-brand-80 text-gray-0"} flex h-full w-full items-center justify-center rounded-full`,
        className
      )
    }, props)
  );
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
export {
  Avatar,
  AvatarFallback,
  AvatarImage
};
