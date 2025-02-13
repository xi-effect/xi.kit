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
  Tabs: () => Tabs_exports
});
module.exports = __toCommonJS(index_exports);

// Tabs.tsx
var Tabs_exports = {};
__export(Tabs_exports, {
  Content: () => Content2,
  List: () => List2,
  Root: () => Root2,
  Trigger: () => Trigger2
});
var TabsPrimitive = __toESM(require("@radix-ui/react-tabs"));
var import_utils = require("@xipkg/utils");
var React = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
var Root2 = TabsPrimitive.Root;
var List2 = React.forwardRef((_a, ref) => {
  var _b = _a, { className, classNameShadow = "", children, onClick } = _b, props = __objRest(_b, ["className", "classNameShadow", "children", "onClick"]);
  const shadowRef = React.useRef(null);
  const shadowKey = React.useId();
  React.useEffect(() => {
    var _a2, _b2;
    if (!shadowRef.current) return;
    const activeButton = Array.from((_b2 = (_a2 = shadowRef.current.parentNode) == null ? void 0 : _a2.children) != null ? _b2 : []).find(
      (element) => element.getAttribute("data-state") === "active"
    );
    const { offsetLeft, clientWidth } = activeButton;
    shadowRef.current.setAttribute("style", `left: ${offsetLeft}px; width: ${clientWidth}px`);
  }, []);
  const handleOnClick = (event) => {
    if (event.target.type !== "button") return;
    if (!shadowRef.current) return;
    shadowRef.current.setAttribute(
      "style",
      `left: ${event.target.offsetLeft}px; width: ${event.target.clientWidth}px`
    );
    onClick == null ? void 0 : onClick(event);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    TabsPrimitive.List,
    __spreadProps(__spreadValues({
      ref,
      onClick: handleOnClick,
      className: (0, import_utils.cn)("border-gray-10 relative flex items-center border-b-2", className)
    }, props), {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            ref: shadowRef,
            id: "shadow",
            className: `bg-brand-80 absolute -bottom-0.5 h-0.5 rounded-md transition-[left,width] duration-300 ${classNameShadow}`
          },
          shadowKey
        ),
        children
      ]
    })
  );
});
List2.displayName = TabsPrimitive.List.displayName;
var Trigger2 = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    TabsPrimitive.Trigger,
    __spreadValues({
      ref,
      className: (0, import_utils.cn)(
        "text-gray-80 flex grow cursor-pointer items-center justify-center whitespace-nowrap bg-transparent pb-1 text-center disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gray-100 data-[state=active]:hover:cursor-default",
        className
      )
    }, props)
  );
});
Trigger2.displayName = TabsPrimitive.Trigger.displayName;
var Content2 = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    TabsPrimitive.Content,
    __spreadValues({
      ref,
      className: (0, import_utils.cn)(
        "ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        className
      )
    }, props)
  );
});
Content2.displayName = TabsPrimitive.Content.displayName;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tabs
});
