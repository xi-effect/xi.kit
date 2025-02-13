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
  Textarea: () => Textarea
});
module.exports = __toCommonJS(index_exports);

// Textarea.tsx
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

// Textarea.tsx
var import_utils = require("@xipkg/utils");
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
        className: (0, import_utils.cn)(
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
        className: (0, import_utils.cn)(
          "absolute bottom-2 right-2 text-sm",
          charCount > maxLength ? "text-red-80" : "text-gray-50"
        )
      },
      maxLength - charCount
    ));
  }
);
Textarea.displayName = "Textarea";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Textarea
});
