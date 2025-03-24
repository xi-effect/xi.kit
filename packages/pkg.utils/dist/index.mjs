var __pow = Math.pow;

// cn.ts
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(inputs);
}

// useDebounce.ts
import { useState, useEffect } from "react";
var useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
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
import { useRef } from "react";
var useDebouncedFunction = (func, delay) => {
  const ref = useRef(null);
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
import { useEffect as useEffect2, useState as useState2 } from "react";
var isBrowser = typeof window !== "undefined";
var useSessionStorage = (key, initialValue, raw) => {
  if (!isBrowser) {
    return [initialValue, () => {
    }];
  }
  const [state, setState] = useState2(() => {
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
  useEffect2(() => {
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

// useMediaQuery.ts
import { useCallback, useSyncExternalStore } from "react";
var getServerSnapshot = () => false;
var useMediaQuery = (query) => {
  const subscribe = useCallback(
    (callback) => {
      const matchMedia = window.matchMedia(query);
      matchMedia.addEventListener("change", callback);
      return () => {
        matchMedia.removeEventListener("change", callback);
      };
    },
    [query]
  );
  const getSnapshot = () => window.matchMedia(query).matches;
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
export {
  cn,
  convertSnakeToCamelCase,
  formatBytesSize,
  plural,
  useDebounce,
  useDebouncedFunction,
  useMediaQuery,
  useSessionStorage
};
