"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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
  Input: () => Input
});
module.exports = __toCommonJS(index_exports);

// Input.tsx
var React = __toESM(require("react"));

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

// Input.tsx
var import_utils = require("@xipkg/utils");
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
var Input = React.forwardRef(
  (_a, ref) => {
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
        className: (0, import_utils.cn)(
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
        className: (0, import_utils.cn)(
          inputVariants({
            variant,
            error,
            warning,
            beforeBool: !!before,
            afterBool: !!after,
            className
          })
        ),
        ref
      }, props)
    ), !!after && /* @__PURE__ */ React.createElement(
      "div",
      __spreadValues({
        className: (0, import_utils.cn)(
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
);
Input.displayName = "Input";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Input
});
