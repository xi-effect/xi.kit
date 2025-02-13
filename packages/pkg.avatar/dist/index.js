"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var index_exports = {};
__export(index_exports, {
  Avatar: () => Avatar,
  AvatarFallback: () => AvatarFallback,
  AvatarImage: () => AvatarImage
});
module.exports = __toCommonJS(index_exports);

// Avatar.tsx
var React = __toESM(require("react"));
var AvatarPrimitive = __toESM(require("@radix-ui/react-avatar"));
var import_utils = require("@xipkg/utils");
var import_image = __toESM(require("next/image"));
var import_jsx_runtime = require("react/jsx-runtime");
var sizeMap = {
  xxl: 128,
  xl: 64,
  l: 48,
  m: 32,
  s: 24
};
var Avatar = React.forwardRef((_a, ref) => {
  var _b = _a, { className, size = "l" } = _b, props = __objRest(_b, ["className", "size"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    AvatarPrimitive.Root,
    __spreadValues({
      ref,
      className: (0, import_utils.cn)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    AvatarPrimitive.Image,
    __spreadProps(__spreadValues({
      ref,
      className: (0, import_utils.cn)("aspect-square h-full w-full", className),
      asChild: true
    }, props), {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_image.default,
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    AvatarPrimitive.Fallback,
    __spreadValues({
      ref,
      className: (0, import_utils.cn)(
        `${loading ? "bg-gray-10 animate-pulse" : "bg-brand-80 text-gray-0"} flex h-full w-full items-center justify-center rounded-full`,
        className
      )
    }, props)
  );
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  AvatarFallback,
  AvatarImage
});
