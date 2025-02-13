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
  Modal: () => Dialog,
  ModalCloseButton: () => DialogCloseButton,
  ModalContent: () => DialogContent,
  ModalDescription: () => DialogDescription,
  ModalFooter: () => DialogFooter,
  ModalHeader: () => DialogHeader,
  ModalTitle: () => DialogTitle,
  ModalTrigger: () => DialogTrigger
});
module.exports = __toCommonJS(index_exports);

// Modal.tsx
var React = __toESM(require("react"));
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_utils = require("@xipkg/utils");

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; ) (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// node_modules/class-variance-authority/dist/index.mjs
var falsyToString = (value) => typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => {
  return (props) => {
    var ref;
    if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    const { variants, defaultVariants } = config;
    const getVariantClassNames = Object.keys(variants).map((variant) => {
      const variantProp = props === null || props === void 0 ? void 0 : props[variant];
      const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
      if (variantProp === null) return null;
      const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
      return variants[variant][variantKey];
    });
    const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
      let [key, value] = param;
      if (value === void 0) {
        return acc;
      }
      acc[key] = value;
      return acc;
    }, {});
    const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (ref = config.compoundVariants) === null || ref === void 0 ? void 0 : ref.reduce((acc, param1) => {
      let _a = param1, { class: cvClass, className: cvClassName } = _a, compoundVariantOptions = __objRest(_a, ["class", "className"]);
      return Object.entries(compoundVariantOptions).every((param) => {
        let [key, value] = param;
        return Array.isArray(value) ? value.includes(__spreadValues(__spreadValues({}, defaultVariants), propsWithoutUndefined)[key]) : __spreadValues(__spreadValues({}, defaultVariants), propsWithoutUndefined)[key] === value;
      }) ? [
        ...acc,
        cvClass,
        cvClassName
      ] : acc;
    }, []);
    return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  };
};

// Modal.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPrimitive.Portal, __spreadValues({}, props));
};
DialogPortal.displayName = DialogPrimitive.Portal.displayName;
var DialogOverlay = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    DialogPrimitive.Overlay,
    __spreadValues({
      ref,
      className: (0, import_utils.cn)(
        "dark:bg-gray-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-gray-100 opacity-40",
        className
      )
    }, props)
  );
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var dialogContentVariants = cva(
  "fixed left-[50%] top-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] bg-gray-0 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
  {
    variants: {
      variant: {
        default: "max-h-[calc(100vh-16px)] w-[calc(100%-16px)] max-w-lg md:w-full rounded-[16px] shadow-xl",
        full: "w-[100vw] min-h-full"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var DialogContent = React.forwardRef((_a, ref) => {
  var _b = _a, { variant, className, closeClassName, children } = _b, props = __objRest(_b, ["variant", "className", "closeClassName", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      DialogPrimitive.Content,
      __spreadProps(__spreadValues({
        ref,
        className: (0, import_utils.cn)(dialogContentVariants({ variant, className }))
      }, props), {
        children
      })
    )
  ] });
});
DialogContent.displayName = DialogPrimitive.Content.displayName;
var dialogCloseButtonVariants = cva("", {
  variants: {
    variant: {
      default: "fixed top-8 right-6 flex flex-row w-10 h-10 items-start pt-2 px-2 rounded-[20px] bg-gray-5",
      full: "fixed z-50 bg-transparent",
      noStyle: ""
    },
    breakpoint: {
      sm: "sm:top-6 sm:right-[-56px] sm:bg-gray-80 dark:sm:bg-gray-10",
      lg: "lg:top-6 lg:right-[-56px] lg:bg-gray-80 dark:lg:bg-gray-10",
      md: "md:top-6 md:right-[-56px] md:bg-gray-80 dark:md:bg-gray-10"
    }
  },
  defaultVariants: {
    variant: "default",
    breakpoint: "sm"
  }
});
var DialogCloseButton = (_a) => {
  var _b = _a, {
    variant,
    breakpoint,
    className,
    children
  } = _b, props = __objRest(_b, [
    "variant",
    "breakpoint",
    "className",
    "children"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    DialogPrimitive.Close,
    __spreadProps(__spreadValues({
      className: (0, import_utils.cn)(dialogCloseButtonVariants({ variant, breakpoint, className }))
    }, props), {
      children
    })
  );
};
DialogCloseButton.displayName = "DialogCloseButton";
var DialogHeader = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    __spreadValues({
      className: (0, import_utils.cn)(
        "border-gray-20 flex flex-col space-y-2 rounded-t-[16px] border-b p-6 text-left",
        className
      )
    }, props)
  );
};
DialogHeader.displayName = "DialogHeader";
var DialogFooter = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", __spreadValues({ className: (0, import_utils.cn)("border-gray-20 rounded-b-[16px] border-t p-6", className) }, props));
};
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    DialogPrimitive.Title,
    __spreadValues({
      ref,
      className: (0, import_utils.cn)("leading-nonet text-[24px] font-semibold", className)
    }, props)
  );
});
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    DialogPrimitive.Description,
    __spreadValues({
      ref,
      className: (0, import_utils.cn)("text-gray-80 text-[16px]", className)
    }, props)
  );
});
DialogDescription.displayName = DialogPrimitive.Description.displayName;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger
});
