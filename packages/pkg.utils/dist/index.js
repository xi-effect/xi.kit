"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __pow = Math.pow;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var index_exports = {};
__export(index_exports, {
  cn: () => cn,
  convertSnakeToCamelCase: () => convertSnakeToCamelCase,
  formatBytesSize: () => formatBytesSize,
  plural: () => plural,
  useDebounce: () => useDebounce,
  useDebouncedFunction: () => useDebouncedFunction,
  useSessionStorage: () => useSessionStorage
});
module.exports = __toCommonJS(index_exports);

// cn.ts
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)(inputs);
}

// useDebounce.ts
var import_react = require("react");
var useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = (0, import_react.useState)(value);
  (0, import_react.useEffect)(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);
  return debouncedValue;
};

// useDebouncedFunction.ts
var import_react2 = require("react");
var useDebouncedFunction = (func, delay) => {
  const ref = (0, import_react2.useRef)(null);
  return (...args) => {
    if (ref.current) {
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

// useSessionStorage.ts
var import_react3 = require("react");
var isBrowser = typeof window !== "undefined";
var useSessionStorage = (key, initialValue, raw) => {
  if (!isBrowser) {
    return [initialValue, () => {
    }];
  }
  const [state, setState] = (0, import_react3.useState)(() => {
    try {
      const sessionStorageValue = sessionStorage.getItem(key);
      if (typeof sessionStorageValue !== "string") {
        sessionStorage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
        return initialValue;
      } else {
        return raw ? sessionStorageValue : JSON.parse(sessionStorageValue || "null");
      }
    } catch (e) {
      return initialValue;
    }
  });
  (0, import_react3.useEffect)(() => {
    try {
      const serializedState = raw ? String(state) : JSON.stringify(state);
      sessionStorage.setItem(key, serializedState);
    } catch (e) {
    }
  });
  return [state, setState];
};

// plural.ts
function plural(forms, n) {
  let idx;
  if (n % 10 === 1 && n % 100 !== 11) {
    idx = 0;
  } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
    idx = 1;
  } else {
    idx = 2;
  }
  return forms[idx] || "";
}

// format.ts
var FILE_SIZES = ["\u0431\u0430\u0439\u0442", "\u041A\u0431", "\u041C\u0431", "\u0413\u0431", "\u0422\u0431"];
var pluralByteForms = ["\u0431\u0430\u0439\u0442", "\u0431\u0430\u0439\u0442\u0430", "\u0431\u0430\u0439\u0442\u043E\u0432"];
var k = 1024;
var formatBytesSize = (size) => {
  const n = Math.floor(Math.log10(size) / Math.log10(k));
  const formattedSizeNum = Math.ceil(size / __pow(k, n));
  const formattedSize = `${formattedSizeNum} ${!n ? plural(pluralByteForms, size) : FILE_SIZES[n]}`;
  return formattedSize;
};

// convertSnakeToCamelCase.ts
var convertSnakeToCamelCase = (dict, conversionRules) => {
  const toCamelCase = (str) => str.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
  const result = {};
  for (const key in dict) {
    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      const newKey = conversionRules && conversionRules[key] ? conversionRules[key] : toCamelCase(key);
      result[newKey] = dict[key];
    }
  }
  return result;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cn,
  convertSnakeToCamelCase,
  formatBytesSize,
  plural,
  useDebounce,
  useDebouncedFunction,
  useSessionStorage
});
