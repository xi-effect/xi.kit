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
  Checkbox: () => Checkbox
});
module.exports = __toCommonJS(index_exports);

// Checkbox.tsx
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"));

// ../../node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// ../../node_modules/class-variance-authority/dist/index.mjs
var falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => (props) => {
  var _config_compoundVariants;
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
  const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let _a = param, { class: cvClass, className: cvClassName } = _a, compoundVariantOptions = __objRest(_a, ["class", "className"]);
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes(__spreadValues(__spreadValues({}, defaultVariants), propsWithoutUndefined)[key]) : __spreadValues(__spreadValues({}, defaultVariants), propsWithoutUndefined)[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};

// Checkbox.tsx
var import_lucide_react = require("lucide-react");
var React = __toESM(require("react"));
var import_utils = require("@xipkg/utils");
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: (0, import_utils.cn)(labelVariants({ size }), !props.disabled && "hover:cursor-pointer"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      CheckboxPrimitive.Root,
      __spreadProps(__spreadValues({
        ref,
        className: (0, import_utils.cn)(checkboxVariants({ size, state }), className)
      }, props), {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxPrimitive.Indicator, { className: (0, import_utils.cn)("flex items-center justify-center text-current"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { className: "h-full w-full" }) })
      })
    ),
    children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pb-[0.125rem] peer-disabled:text-gray-50", children })
  ] });
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Checkbox
});
