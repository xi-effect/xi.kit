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

// Breadcrumbs.tsx
import * as React from "react";
import { ChevronRight } from "@xipkg/icons";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@xipkg/utils";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var breadcrumbsVariants = cva("", {
  variants: {
    variant: {
      default: "text-brand-40 [&_svg]:fill-brand-40 [&_span]:text-brand-80",
      secondary: "text-gray-60 [&_svg]:fill-gray-60 [&_span]:text-gray-100"
    },
    size: {
      l: "text-[16px] [&_svg]:size-[16px]",
      m: "text-[14px] [&_svg]:size-[14px]",
      s: "text-[12px] [&_svg]:size-[12px]"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "m"
  }
});
var BreadcrumbList = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "ul",
    __spreadValues({
      ref,
      className: cn("flex flex-wrap items-center gap-[2px] break-words", className)
    }, props)
  );
});
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx("li", __spreadValues({ ref, className: cn("inline-flex items-center gap-[2px]", className) }, props));
  }
);
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React.forwardRef((_a, ref) => {
  var _b = _a, { asChild, className } = _b, props = __objRest(_b, ["asChild", "className"]);
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx(Comp, __spreadValues({ ref, className: cn("transition-colors hover:underline", className) }, props));
});
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx("span", __spreadValues({ ref, role: "link", "aria-disabled": "true", "aria-current": "page" }, props));
});
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = (_a) => {
  var _b = _a, {
    children,
    className
  } = _b, props = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ jsx("span", __spreadProps(__spreadValues({ role: "presentation", "aria-hidden": "true" }, props), { children: children != null ? children : /* @__PURE__ */ jsx(ChevronRight, {}) }));
};
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var Breadcrumbs = React.forwardRef((_a, ref) => {
  var _b = _a, { variant, size, breadcrumbs } = _b, props = __objRest(_b, ["variant", "size", "breadcrumbs"]);
  return /* @__PURE__ */ jsx(
    "nav",
    __spreadProps(__spreadValues({
      ref,
      "aria-label": "breadcrumb"
    }, props), {
      className: cn(breadcrumbsVariants({ variant, size })),
      children: /* @__PURE__ */ jsx(BreadcrumbList, { children: breadcrumbs.map((item, index, breadcrumbsArray) => {
        const isLastItem = index === breadcrumbsArray.length - 1;
        return /* @__PURE__ */ jsx(BreadcrumbItem, { children: !isLastItem ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(BreadcrumbLink, { href: "/", children: [
            item.name,
            " "
          ] }),
          /* @__PURE__ */ jsx(BreadcrumbSeparator, {})
        ] }) : /* @__PURE__ */ jsx(BreadcrumbPage, { children: item.name }) }, index);
      }) })
    })
  );
});
Breadcrumbs.displayName = "Breadcrumbs";
var BreadcrumbsRoot = React.forwardRef((_a, ref) => {
  var _b = _a, { variant, size } = _b, props = __objRest(_b, ["variant", "size"]);
  return /* @__PURE__ */ jsx(
    "nav",
    __spreadProps(__spreadValues({
      ref,
      "aria-label": "breadcrumb"
    }, props), {
      className: cn(breadcrumbsVariants({ variant, size }))
    })
  );
});
BreadcrumbsRoot.displayName = "BreadcrumbsRoot";
export {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Breadcrumbs,
  BreadcrumbsRoot
};
