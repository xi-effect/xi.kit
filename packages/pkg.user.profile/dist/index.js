"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
  UserProfile: () => UserProfile,
  userProfileVariants: () => userProfileVariants
});
module.exports = __toCommonJS(index_exports);

// UserProfile.tsx
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("@xipkg/utils");
var import_avatar = require("@xipkg/avatar");
var import_jsx_runtime = require("react/jsx-runtime");
var userProfileVariants = (0, import_class_variance_authority.cva)("flex flex-row items-center", {
  variants: {
    size: {
      l: "h-[48px] gap-2",
      m: "h-[32px] gap-2",
      s: "h-[24px] gap-1.5"
    }
  },
  defaultVariants: {
    size: "m"
  }
});
var userProfileTextVariants = (0, import_class_variance_authority.cva)("text-gray-100", {
  variants: {
    size: {
      l: "text-[16px]",
      m: "text-[14px]",
      s: "text-[12px]"
    },
    loading: {
      true: ""
    }
  },
  compoundVariants: [
    {
      loading: true,
      size: "l",
      class: "bg-gray-10 h-[16px] w-[96px] animate-pulse rounded-[2px]"
    },
    {
      loading: true,
      size: "m",
      class: "bg-gray-10 h-[14px] w-[96px] animate-pulse rounded-[2px]"
    },
    {
      loading: true,
      size: "s",
      class: "bg-gray-10 h-[12px] w-[64px] animate-pulse rounded-[2px]"
    }
  ],
  defaultVariants: {
    size: "m",
    loading: false
  }
});
var userProfileLabelVariants = (0, import_class_variance_authority.cva)("font-normal text-gray-60 mt-[-2px]", {
  variants: {
    size: {
      l: "text-[12px]",
      m: "text-[10px]",
      s: ""
    },
    loading: {
      true: ""
    }
  },
  compoundVariants: [
    {
      loading: true,
      size: "l",
      class: "bg-gray-10 h-[12px] w-[64px] animate-pulse rounded-[2px]"
    },
    {
      loading: true,
      size: "m",
      class: "bg-gray-10 h-[10px] w-[64px] animate-pulse rounded-[2px]"
    }
  ],
  defaultVariants: {
    size: "m",
    loading: false
  }
});
var avatarVariants = (0, import_class_variance_authority.cva)("flex items-center justify-center font-semibold", {
  variants: {
    color: {
      brand: "bg-brand-0 text-brand-100 dark:bg-brand-80 dark:text-brand-100"
    },
    size: {
      xxl: "h-[128px] w-[128px] min-h-[128px] min-w-[128px] rounded-[64px] text-[48px]",
      xl: "h-[64px] w-[64px] min-h-[64px] min-w-[64px] rounded-[32px] text-[24px]",
      l: "h-[48px] w-[48px] min-h-[48px] min-w-[48px] rounded-[24px] text-[16px]",
      m: "h-[32px] w-[32px] min-h-[32px] min-w-[32px] rounded-[16px] text-[12px]",
      s: "h-[24px] w-[24px] min-h-[24px] min-w-[24px] rounded-[12px] text-[10px]"
    }
  },
  defaultVariants: {
    color: "brand",
    size: "l"
  }
});
var UserProfile = (_a) => {
  var _b = _a, {
    loading = false,
    className,
    classNameText,
    classNameLabel,
    withOutText = false,
    userId,
    src,
    size = "m",
    color = "brand",
    text = "x",
    label
  } = _b, props = __objRest(_b, [
    "loading",
    "className",
    "classNameText",
    "classNameLabel",
    "withOutText",
    "userId",
    "src",
    "size",
    "color",
    "text",
    "label"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", __spreadProps(__spreadValues({ className: (0, import_utils.cn)(userProfileVariants({ size }), className) }, props), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_avatar.Avatar, { size, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_avatar.AvatarImage,
        {
          src: `https://auth.xieffect.ru/api/users/${userId}/avatar.webp`,
          imageProps: {
            src: `https://auth.xieffect.ru/api/users/${userId}/avatar.webp`,
            alt: "user avatar"
          },
          alt: "user avatar"
        }
      ),
      loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_avatar.AvatarFallback, { size, loading: true }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_avatar.AvatarFallback, { size, children: text[0].toUpperCase() })
    ] }),
    !withOutText && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `flex flex-col ${loading && "gap-1"}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: (0, import_utils.cn)(userProfileTextVariants({ size, loading }), classNameText), children: !loading && text }),
      size !== "s" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: (0, import_utils.cn)(userProfileLabelVariants({ size, loading }), classNameLabel), children: !loading && label })
    ] })
  ] }));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserProfile,
  userProfileVariants
});
