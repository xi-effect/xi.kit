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

// Sidebar.tsx
import * as React3 from "react";

// ../../node_modules/@radix-ui/react-slot/dist/index.mjs
import * as React2 from "react";

// ../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs
import * as React from "react";
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}

// ../../node_modules/@radix-ui/react-slot/dist/index.mjs
import { Fragment as Fragment2, jsx } from "react/jsx-runtime";
var Slot = React2.forwardRef((props, forwardedRef) => {
  const _a = props, { children } = _a, slotProps = __objRest(_a, ["children"]);
  const childrenArray = React2.Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (React2.Children.count(newElement) > 1) return React2.Children.only(null);
        return React2.isValidElement(newElement) ? newElement.props.children : null;
      } else {
        return child;
      }
    });
    return /* @__PURE__ */ jsx(SlotClone, __spreadProps(__spreadValues({}, slotProps), { ref: forwardedRef, children: React2.isValidElement(newElement) ? React2.cloneElement(newElement, void 0, newChildren) : null }));
  }
  return /* @__PURE__ */ jsx(SlotClone, __spreadProps(__spreadValues({}, slotProps), { ref: forwardedRef, children }));
});
Slot.displayName = "Slot";
var SlotClone = React2.forwardRef((props, forwardedRef) => {
  const _a = props, { children } = _a, slotProps = __objRest(_a, ["children"]);
  if (React2.isValidElement(children)) {
    const childrenRef = getElementRef(children);
    const props2 = mergeProps(slotProps, children.props);
    if (children.type !== React2.Fragment) {
      props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
    }
    return React2.cloneElement(children, props2);
  }
  return React2.Children.count(children) > 1 ? React2.Children.only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children }) => {
  return /* @__PURE__ */ jsx(Fragment2, { children });
};
function isSlottable(child) {
  return React2.isValidElement(child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = __spreadValues({}, childProps);
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = __spreadValues(__spreadValues({}, slotPropValue), childPropValue);
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return __spreadValues(__spreadValues({}, slotProps), overrideProps);
}
function getElementRef(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

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

// Sidebar.tsx
import { cn as cn2 } from "@xipkg/utils";
import { Button } from "@xipkg/button";
import { Input } from "@xipkg/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@xipkg/tooltip";

// ../pkg.icons/dist/index.mjs
import { cn } from "@xipkg/utils";
import { jsx as jsx2 } from "react/jsx-runtime";
import { jsx as jsx22 } from "react/jsx-runtime";
import { jsx as jsx3 } from "react/jsx-runtime";
import { jsx as jsx4 } from "react/jsx-runtime";
import { jsx as jsx5 } from "react/jsx-runtime";
import { jsx as jsx6 } from "react/jsx-runtime";
import { jsx as jsx7 } from "react/jsx-runtime";
import { jsx as jsx8 } from "react/jsx-runtime";
import { jsx as jsx9 } from "react/jsx-runtime";
import { jsx as jsx10 } from "react/jsx-runtime";
import { jsx as jsx11 } from "react/jsx-runtime";
import { jsx as jsx12 } from "react/jsx-runtime";
import { jsx as jsx13 } from "react/jsx-runtime";
import { jsx as jsx14 } from "react/jsx-runtime";
import { jsx as jsx15, jsxs } from "react/jsx-runtime";
import { jsx as jsx16 } from "react/jsx-runtime";
import { jsx as jsx17 } from "react/jsx-runtime";
import { jsx as jsx18 } from "react/jsx-runtime";
import { jsx as jsx19 } from "react/jsx-runtime";
import { jsx as jsx20 } from "react/jsx-runtime";
import { jsx as jsx21 } from "react/jsx-runtime";
import { jsx as jsx222 } from "react/jsx-runtime";
import { jsx as jsx23 } from "react/jsx-runtime";
import { jsx as jsx24 } from "react/jsx-runtime";
import { jsx as jsx25 } from "react/jsx-runtime";
import { jsx as jsx26 } from "react/jsx-runtime";
import { jsx as jsx27 } from "react/jsx-runtime";
import { jsx as jsx28 } from "react/jsx-runtime";
import { jsx as jsx29 } from "react/jsx-runtime";
import { jsx as jsx30 } from "react/jsx-runtime";
import { jsx as jsx31 } from "react/jsx-runtime";
import { jsx as jsx32 } from "react/jsx-runtime";
import { jsx as jsx33 } from "react/jsx-runtime";
import { jsx as jsx34 } from "react/jsx-runtime";
import { jsx as jsx35 } from "react/jsx-runtime";
import { jsx as jsx36 } from "react/jsx-runtime";
import { jsx as jsx37 } from "react/jsx-runtime";
import { jsx as jsx38 } from "react/jsx-runtime";
import { jsx as jsx39 } from "react/jsx-runtime";
import { jsx as jsx40 } from "react/jsx-runtime";
import { jsx as jsx41 } from "react/jsx-runtime";
import { jsx as jsx42 } from "react/jsx-runtime";
import { jsx as jsx43 } from "react/jsx-runtime";
import { jsx as jsx44 } from "react/jsx-runtime";
import { jsx as jsx45 } from "react/jsx-runtime";
import { jsx as jsx46 } from "react/jsx-runtime";
import { jsx as jsx47 } from "react/jsx-runtime";
import { jsx as jsx48 } from "react/jsx-runtime";
import { jsx as jsx49 } from "react/jsx-runtime";
import { jsx as jsx50 } from "react/jsx-runtime";
import { jsx as jsx51 } from "react/jsx-runtime";
import { jsx as jsx52 } from "react/jsx-runtime";
import { jsx as jsx53 } from "react/jsx-runtime";
import { jsx as jsx54 } from "react/jsx-runtime";
import { jsx as jsx55 } from "react/jsx-runtime";
import { jsx as jsx56 } from "react/jsx-runtime";
import { jsx as jsx57 } from "react/jsx-runtime";
import { jsx as jsx58 } from "react/jsx-runtime";
import { jsx as jsx59 } from "react/jsx-runtime";
import { jsx as jsx60, jsxs as jsxs2 } from "react/jsx-runtime";
import { jsx as jsx61 } from "react/jsx-runtime";
import { jsx as jsx62, jsxs as jsxs3 } from "react/jsx-runtime";
import { jsx as jsx63 } from "react/jsx-runtime";
import { jsx as jsx64 } from "react/jsx-runtime";
import { jsx as jsx65 } from "react/jsx-runtime";
import { jsx as jsx66 } from "react/jsx-runtime";
import { jsx as jsx67 } from "react/jsx-runtime";
import { jsx as jsx68, jsxs as jsxs4 } from "react/jsx-runtime";
import { jsx as jsx69 } from "react/jsx-runtime";
import { jsx as jsx70 } from "react/jsx-runtime";
import { jsx as jsx71 } from "react/jsx-runtime";
import { jsx as jsx72 } from "react/jsx-runtime";
import { jsx as jsx73 } from "react/jsx-runtime";
import { jsx as jsx74 } from "react/jsx-runtime";
import { jsx as jsx75 } from "react/jsx-runtime";
import { jsx as jsx76 } from "react/jsx-runtime";
import { jsx as jsx77 } from "react/jsx-runtime";
import { jsx as jsx78 } from "react/jsx-runtime";
import { jsx as jsx79 } from "react/jsx-runtime";
import { jsx as jsx80 } from "react/jsx-runtime";
import { jsx as jsx81 } from "react/jsx-runtime";
import { jsx as jsx82 } from "react/jsx-runtime";
import { jsx as jsx83 } from "react/jsx-runtime";
import { jsx as jsx84 } from "react/jsx-runtime";
import { jsx as jsx85 } from "react/jsx-runtime";
import { jsx as jsx86 } from "react/jsx-runtime";
import { jsx as jsx87 } from "react/jsx-runtime";
import { jsx as jsx88 } from "react/jsx-runtime";
import { jsx as jsx89 } from "react/jsx-runtime";
import { jsx as jsx90 } from "react/jsx-runtime";
import { jsx as jsx91 } from "react/jsx-runtime";
import { jsx as jsx92 } from "react/jsx-runtime";
import { jsx as jsx93 } from "react/jsx-runtime";
import { jsx as jsx94 } from "react/jsx-runtime";
import { jsx as jsx95 } from "react/jsx-runtime";
import { jsx as jsx96 } from "react/jsx-runtime";
import { jsx as jsx97 } from "react/jsx-runtime";
import { jsx as jsx98 } from "react/jsx-runtime";
import { jsx as jsx99 } from "react/jsx-runtime";
import { jsx as jsx100 } from "react/jsx-runtime";
import { jsx as jsx101 } from "react/jsx-runtime";
import { jsx as jsx102 } from "react/jsx-runtime";
import { jsx as jsx103 } from "react/jsx-runtime";
import { jsx as jsx104 } from "react/jsx-runtime";
import { jsx as jsx105 } from "react/jsx-runtime";
import { jsx as jsx106 } from "react/jsx-runtime";
import { jsx as jsx107 } from "react/jsx-runtime";
import { jsx as jsx108 } from "react/jsx-runtime";
import { jsx as jsx109 } from "react/jsx-runtime";
import { jsx as jsx110 } from "react/jsx-runtime";
import { jsx as jsx111 } from "react/jsx-runtime";
import { jsx as jsx112 } from "react/jsx-runtime";
import { jsx as jsx113 } from "react/jsx-runtime";
import { jsx as jsx114 } from "react/jsx-runtime";
import { jsx as jsx115 } from "react/jsx-runtime";
import { jsx as jsx116 } from "react/jsx-runtime";
import { jsx as jsx117 } from "react/jsx-runtime";
import { jsx as jsx118 } from "react/jsx-runtime";
import { jsx as jsx119, jsxs as jsxs5 } from "react/jsx-runtime";
import { jsx as jsx120, jsxs as jsxs6 } from "react/jsx-runtime";
import { jsx as jsx121 } from "react/jsx-runtime";
import { jsx as jsx122, jsxs as jsxs7 } from "react/jsx-runtime";
import { jsx as jsx123, jsxs as jsxs8 } from "react/jsx-runtime";
import { jsx as jsx124 } from "react/jsx-runtime";
import { jsx as jsx125, jsxs as jsxs9 } from "react/jsx-runtime";
import { jsx as jsx126 } from "react/jsx-runtime";
import { jsx as jsx127 } from "react/jsx-runtime";
import { jsx as jsx128 } from "react/jsx-runtime";
import { jsx as jsx129, jsxs as jsxs10 } from "react/jsx-runtime";
import { jsx as jsx130 } from "react/jsx-runtime";
import { jsx as jsx131 } from "react/jsx-runtime";
import { jsx as jsx132 } from "react/jsx-runtime";
import { jsx as jsx133 } from "react/jsx-runtime";
import { jsx as jsx134 } from "react/jsx-runtime";
import { jsx as jsx135 } from "react/jsx-runtime";
import { jsx as jsx136 } from "react/jsx-runtime";
import { jsx as jsx137 } from "react/jsx-runtime";
import { jsx as jsx138 } from "react/jsx-runtime";
import { jsx as jsx139 } from "react/jsx-runtime";
import { jsx as jsx140 } from "react/jsx-runtime";
import { jsx as jsx141, jsxs as jsxs11 } from "react/jsx-runtime";
import { jsx as jsx142 } from "react/jsx-runtime";
import { jsx as jsx143 } from "react/jsx-runtime";
import { jsx as jsx144 } from "react/jsx-runtime";
import { jsx as jsx145 } from "react/jsx-runtime";
import { jsx as jsx146 } from "react/jsx-runtime";
import { jsx as jsx147 } from "react/jsx-runtime";
import { jsx as jsx148, jsxs as jsxs12 } from "react/jsx-runtime";
import { jsx as jsx149 } from "react/jsx-runtime";
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
var __objRest2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var svgVariants = cva("", {
  variants: {
    theme: {
      default: "fill-gray-80"
    },
    size: {
      default: "h-[24px] w-[24px]",
      l: "h-[32px] w-[32px]",
      m: "h-[20px] w-[20px]",
      s: "h-[16px] w-[16px]"
    }
  },
  defaultVariants: {
    theme: "default",
    size: "default"
  }
});
var Svg = (_a) => {
  var _b = _a, { theme, size, className, children } = _b, rest = __objRest2(_b, ["theme", "size", "className", "children"]);
  return /* @__PURE__ */ jsx2("svg", __spreadProps2(__spreadValues2({ viewBox: "0 0 24 24", className: cn(svgVariants({ theme, size, className })) }, rest), { children }));
};
var Burger = (_a) => {
  var props = __objRest2(_a, []);
  return /* @__PURE__ */ jsx13(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ jsx13(
    "path",
    {
      d: "M3.117 4.054c-.412.112-.798.446-.99.859-.09.192-.106.282-.106.588-.001.327.011.386.129.624.156.317.442.598.761.748l.229.107h17.72l.229-.107a1.67 1.67 0 0 0 .761-.748c.118-.238.13-.298.13-.625s-.012-.387-.13-.625a1.67 1.67 0 0 0-.761-.748l-.229-.107-8.78-.008c-6.873-.005-8.82.004-8.963.042m-.168 6.563c-.45.185-.768.544-.887 1.002a1.27 1.27 0 0 0 0 .762c.121.465.467.847.92 1.016l.222.084 8.848-.011 8.848-.01.229-.108a1.505 1.505 0 0 0 .704-2.026c-.123-.255-.428-.549-.704-.678l-.229-.108-8.86-.009-8.86-.009-.231.095m.168 6.437c-.412.112-.798.446-.99.859-.09.192-.106.282-.106.588-.001.327.011.386.129.624.156.317.442.598.761.748l.229.107h17.72l.229-.107a1.67 1.67 0 0 0 .761-.748c.118-.238.13-.298.13-.625s-.012-.387-.13-.625a1.67 1.67 0 0 0-.761-.748l-.229-.107-8.78-.008c-6.873-.005-8.82.004-8.963.042",
      fillRule: "evenodd"
    }
  ) }));
};
var Close = (_a) => {
  var props = __objRest2(_a, []);
  return /* @__PURE__ */ jsx31(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ jsx31(
    "path",
    {
      d: "M6.213 5.442a.97.97 0 0 0-.756.701.891.891 0 0 0 .068.711c.055.11.926 1.011 2.568 2.656L10.579 12l-2.503 2.51c-1.547 1.551-2.528 2.564-2.568 2.653a.999.999 0 0 0 .627 1.377.883.883 0 0 0 .719-.065c.11-.055 1.011-.926 2.656-2.568L12 13.421l2.49 2.486c1.645 1.642 2.546 2.513 2.656 2.568.4.199.822.129 1.14-.189a.948.948 0 0 0 .189-1.14c-.055-.11-.926-1.011-2.568-2.656L13.421 12l2.486-2.49c1.642-1.645 2.513-2.546 2.568-2.656a.891.891 0 0 0 .068-.711 1.02 1.02 0 0 0-.529-.626 1.059 1.059 0 0 0-.856.002c-.125.062-.919.829-2.668 2.574L12 10.579 9.51 8.093C7.898 6.484 6.964 5.58 6.86 5.53c-.2-.098-.431-.13-.647-.088",
      fillRule: "evenodd"
    }
  ) }));
};

// Sidebar.tsx
import { jsx as jsx150, jsxs as jsxs13 } from "react/jsx-runtime";
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React3.createContext(null);
function useSidebar() {
  const context = React3.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
var SidebarProvider = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children
    } = _b, props = __objRest(_b, [
      "defaultOpen",
      "open",
      "onOpenChange",
      "className",
      "style",
      "children"
    ]);
    const [openMobile, setOpenMobile] = React3.useState(false);
    const [_open, _setOpen] = React3.useState(defaultOpen);
    const open = openProp != null ? openProp : _open;
    const setOpen = React3.useCallback(
      (value) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(openState);
        } else {
          _setOpen(openState);
        }
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open]
    );
    const toggleSidebar = React3.useCallback(() => {
      return setOpen((open2) => !open2);
    }, [setOpen]);
    React3.useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          toggleSidebar();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);
    const state = open ? "expanded" : "collapsed";
    const contextValue = React3.useMemo(
      () => ({
        state,
        open,
        setOpen,
        toggleSidebar
      }),
      [state, open, setOpen, toggleSidebar]
    );
    return /* @__PURE__ */ jsx150(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx150(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsx150(
      "div",
      __spreadProps(__spreadValues({
        style: __spreadValues({
          "--sidebar-width": SIDEBAR_WIDTH,
          "--sidebar-width-icon": SIDEBAR_WIDTH_ICON
        }, style),
        className: cn2(
          "group/sidebar-wrapper has-[[data-variant=inset]]:bg-sidebar flex min-h-svh w-full",
          className
        ),
        ref
      }, props), {
        children
      })
    ) }) });
  }
);
SidebarProvider.displayName = "SidebarProvider";
var Sidebar = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      style
    } = _b, props = __objRest(_b, [
      "side",
      "variant",
      "collapsible",
      "className",
      "children",
      "style"
    ]);
    const { state } = useSidebar();
    if (collapsible === "none") {
      return /* @__PURE__ */ jsx150(
        "div",
        __spreadProps(__spreadValues({
          className: cn2(
            "bg-gray-0 text-sidebar-foreground flex h-full w-[--sidebar-width] flex-col",
            className
          ),
          ref
        }, props), {
          children
        })
      );
    }
    return /* @__PURE__ */ jsxs13(
      "div",
      {
        ref,
        className: "group peer text-sidebar-foreground",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        children: [
          /* @__PURE__ */ jsx150(
            "div",
            {
              className: cn2(
                "relative w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
                "group-data-[collapsible=offcanvas]:w-0",
                "group-data-[side=right]:rotate-180",
                variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
              )
            }
          ),
          /* @__PURE__ */ jsx150(
            "div",
            __spreadProps(__spreadValues({
              className: cn2(
                "fixed inset-y-0 z-10 flex h-full w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear",
                side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]x group-data-[side=right]:border-l",
                className
              )
            }, props), {
              children: /* @__PURE__ */ jsx150(
                "div",
                {
                  "data-sidebar": "sidebar",
                  className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow",
                  children
                }
              )
            })
          )
        ]
      }
    );
  }
);
Sidebar.displayName = "Sidebar";
var SidebarTrigger = React3.forwardRef((_a, ref) => {
  var _b = _a, { className, onClick } = _b, props = __objRest(_b, ["className", "onClick"]);
  const { toggleSidebar, open } = useSidebar();
  return /* @__PURE__ */ jsxs13(
    Button,
    __spreadProps(__spreadValues({
      ref,
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "m",
      className: cn2("h-8 w-8", className),
      onClick: (event) => {
        onClick == null ? void 0 : onClick(event);
        toggleSidebar();
      }
    }, props), {
      children: [
        open ? /* @__PURE__ */ jsx150(Close, {}) : /* @__PURE__ */ jsx150(Burger, {}),
        /* @__PURE__ */ jsx150("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    })
  );
});
SidebarTrigger.displayName = "SidebarTrigger";
var SidebarRail = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    const { toggleSidebar } = useSidebar();
    return /* @__PURE__ */ jsx150(
      "button",
      __spreadValues({
        ref,
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: toggleSidebar,
        title: "Toggle Sidebar",
        className: cn2(
          "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:hover:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          className
        )
      }, props)
    );
  }
);
SidebarRail.displayName = "SidebarRail";
var SidebarInset = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx150(
      "main",
      __spreadValues({
        ref,
        className: cn2(
          "bg-background relative flex w-full flex-1 flex-col",
          "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2",
          className
        )
      }, props)
    );
  }
);
SidebarInset.displayName = "SidebarInset";
var SidebarInput = React3.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx150(
    Input,
    __spreadValues({
      ref,
      "data-sidebar": "input",
      className: cn2(
        "bg-background focus-visible:ring-sidebar-ring h-8 w-full shadow-none focus-visible:ring-2",
        className
      )
    }, props)
  );
});
SidebarInput.displayName = "SidebarInput";
var SidebarHeader = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx150(
      "div",
      __spreadValues({
        ref,
        "data-sidebar": "header",
        className: cn2("flex flex-col gap-2 p-2", className)
      }, props)
    );
  }
);
SidebarHeader.displayName = "SidebarHeader";
var SidebarFooter = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx150(
      "div",
      __spreadValues({
        ref,
        "data-sidebar": "footer",
        className: cn2("flex flex-col gap-2", className)
      }, props)
    );
  }
);
SidebarFooter.displayName = "SidebarFooter";
var SidebarContent = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx150(
      "div",
      __spreadValues({
        ref,
        "data-sidebar": "content",
        className: cn2(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          className
        )
      }, props)
    );
  }
);
SidebarContent.displayName = "SidebarContent";
var SidebarGroup = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx150(
      "div",
      __spreadValues({
        ref,
        "data-sidebar": "group",
        className: cn2("relative flex w-full min-w-0 flex-col", className)
      }, props)
    );
  }
);
SidebarGroup.displayName = "SidebarGroup";
var SidebarGroupLabel = React3.forwardRef((_a, ref) => {
  var _b = _a, { className, asChild = false } = _b, props = __objRest(_b, ["className", "asChild"]);
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsx150(
    Comp,
    __spreadValues({
      ref,
      "data-sidebar": "group-label",
      className: cn2(
        "ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium transition-[margin,opacity] duration-200 ease-linear outline-none focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )
    }, props)
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
var SidebarGroupAction = React3.forwardRef((_a, ref) => {
  var _b = _a, { className, asChild = false } = _b, props = __objRest(_b, ["className", "asChild"]);
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx150(
    Comp,
    __spreadValues({
      ref,
      "data-sidebar": "group-action",
      className: cn2(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 transition-transform outline-none focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";
var SidebarGroupContent = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx150(
      "div",
      __spreadValues({
        ref,
        "data-sidebar": "group-content",
        className: cn2("w-full text-sm", className)
      }, props)
    );
  }
);
SidebarGroupContent.displayName = "SidebarGroupContent";
var SidebarMenu = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx150(
      "ul",
      __spreadValues({
        ref,
        "data-sidebar": "menu",
        className: cn2("flex w-full min-w-0 flex-col gap-1", className)
      }, props)
    );
  }
);
SidebarMenu.displayName = "SidebarMenu";
var SidebarMenuItem = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx150(
      "li",
      __spreadValues({
        ref,
        "data-sidebar": "menu-item",
        className: cn2("group/menu-item relative", className)
      }, props)
    );
  }
);
SidebarMenuItem.displayName = "SidebarMenuItem";
var sidebarMenuButtonVariants = cva(
  "flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:text-sidebar-accent-foreground focus-visible:ring-2 active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50  data-[active=true]:font-medium data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-10 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-brand-0 bg-transparent hover:text-brand-80 text-gray-80 hover:[&>svg]:fill-brand-80 data-[active=true]:text-brand-80 data-[active=true]:[&>svg]:fill-brand-80",
        ghost: "hover:bg-transparent active:bg-transparent focus:bg-transparent text-gray-50 [&>svg]:fill-gray-50"
      },
      size: {
        default: "h-10 text-base",
        sm: "h-8 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var SidebarMenuButton = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className
    } = _b, props = __objRest(_b, [
      "asChild",
      "isActive",
      "variant",
      "size",
      "tooltip",
      "className"
    ]);
    const Comp = asChild ? Slot : "button";
    const { state } = useSidebar();
    const button = /* @__PURE__ */ jsx150(
      Comp,
      __spreadValues({
        ref,
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: cn2(sidebarMenuButtonVariants({ variant, size }), className)
      }, props)
    );
    if (!tooltip) {
      return button;
    }
    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip
      };
    }
    return /* @__PURE__ */ jsxs13(Tooltip, { children: [
      /* @__PURE__ */ jsx150(TooltipTrigger, { asChild: true, children: button }),
      /* @__PURE__ */ jsx150(TooltipContent, __spreadValues({ side: "right", align: "center", hidden: state !== "collapsed" }, tooltip))
    ] });
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";
var SidebarMenuAction = React3.forwardRef((_a, ref) => {
  var _b = _a, { className, asChild = false, showOnHover = false } = _b, props = __objRest(_b, ["className", "asChild", "showOnHover"]);
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx150(
    Comp,
    __spreadValues({
      ref,
      "data-sidebar": "menu-action",
      className: cn2(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 transition-transform outline-none focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className
      )
    }, props)
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";
var SidebarMenuBadge = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx150(
      "div",
      __spreadValues({
        ref,
        "data-sidebar": "menu-badge",
        className: cn2(
          "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
          "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          className
        )
      }, props)
    );
  }
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";
var SidebarMenuSub = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx150(
      "ul",
      __spreadValues({
        ref,
        "data-sidebar": "menu-sub",
        className: cn2(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          className
        )
      }, props)
    );
  }
);
SidebarMenuSub.displayName = "SidebarMenuSub";
var SidebarMenuSubItem = React3.forwardRef(
  (_a, ref) => {
    var props = __objRest(_a, []);
    return /* @__PURE__ */ jsx150("li", __spreadValues({ ref }, props));
  }
);
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
var SidebarMenuSubButton = React3.forwardRef((_a, ref) => {
  var _b = _a, { asChild = false, size = "md", isActive, className } = _b, props = __objRest(_b, ["asChild", "size", "isActive", "className"]);
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx150(
    Comp,
    __spreadValues({
      ref,
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn2(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar
};
