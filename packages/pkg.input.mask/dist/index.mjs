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

// useMaskInput.tsx
import { useMaskito } from "@maskito/react";

// maskConfig.ts
import {
  maskitoDateOptionsGenerator,
  maskitoWithPlaceholder,
  maskitoTimeOptionsGenerator,
  maskitoDateRangeOptionsGenerator
} from "@maskito/kit";

// utils.ts
var dictionary = {
  9: /\d/,
  S: /[A-Za-z]/,
  U: /[A-Z]/,
  A: /[A-Z0-9]/,
  a: /[a-z0-9]/,
  \u042F: /[А-я]/
};
var stringToMaskExpression = (mask = "") => {
  return mask.split("").map((char) => {
    return dictionary[char] ? dictionary[char] : char;
  });
};

// maskPresets.ts
var maskPresets = {
  phone: {
    placeholder: "+7 (___)-___-____",
    mask: stringToMaskExpression("+7 (999)-999-9999")
  },
  inviteCodeUrl: {
    placeholder: "https://xieffect.ru/invite/______",
    mask: stringToMaskExpression("https://xieffect.ru/invite/AAAAAAAAAAAA")
  },
  inviteCode: {
    placeholder: "____________",
    mask: stringToMaskExpression("AAAAAAAAAAAA")
  },
  date: {
    placeholder: "__.__.____",
    mask: stringToMaskExpression("99.99.9999")
  },
  dateRange: {
    placeholder: "__.__.____ \u2013 __.__.____",
    mask: stringToMaskExpression("99.99.9999 \u2013 99.99.9999")
  },
  card: {
    placeholder: "____ ____ ____ ____",
    mask: stringToMaskExpression("9999 9999 9999 9999")
  },
  time: {
    placeholder: "__:__",
    mask: stringToMaskExpression("99:99")
  },
  passport: {
    placeholder: "__ __ ______",
    mask: stringToMaskExpression("99 99 999999")
  },
  any: {
    placeholder: "",
    mask: /^.+$/
  }
};

// maskConfig.ts
var additionalOptions = {
  date: maskitoDateOptionsGenerator({ mode: "dd/mm/yyyy" }),
  time: maskitoTimeOptionsGenerator({ mode: "HH:MM" }),
  dateRange: maskitoDateRangeOptionsGenerator({ mode: "dd/mm/yyyy", rangeSeparator: "." })
};
var options = (maskType) => {
  return __spreadProps(__spreadValues(__spreadValues({}, additionalOptions[maskType] || {}), maskitoWithPlaceholder(maskPresets[maskType].placeholder, true)), {
    mask: maskPresets[maskType].mask
  });
};

// useMaskInput.tsx
var useMaskInput = (mask = "any") => {
  return useMaskito({ options: options(mask) });
};
export {
  useMaskInput
};
