var __defProp = Object.defineProperty;
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

// File.tsx
import { Check, Close } from "@xipkg/icons";
import { cn as cn2 } from "@xipkg/utils";

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

// Spinner.tsx
import { cn } from "@xipkg/utils";
import { jsx } from "react/jsx-runtime";
var Spinner = ({ className, size = 16 }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
        className
      ),
      style: { width: `${size}px`, height: `${size}px` },
      role: "status",
      children: /* @__PURE__ */ jsx("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]", children: "Loading..." })
    }
  );
};
var Spinner_default = Spinner;

// Tooltip.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Tooltip = (props) => {
  return /* @__PURE__ */ jsx2("div", { className: "absolute right-[-10px] top-[50%] translate-x-[100%] translate-y-[-50%]", children: /* @__PURE__ */ jsx2(
    "div",
    {
      className: cx(
        "bg-gray-0 shadow-gray-40 relative rounded-[4px] px-2 py-1 text-xs font-medium leading-4 text-gray-100 shadow-sm",
        props.className
      ),
      children: props.text
    }
  ) });
};
var Tooltip_default = Tooltip;

// utils.ts
var validateSize = (files, limitBytes) => {
  const totalSize = files.reduce((acc, file) => acc + file.size, 0);
  return totalSize <= limitBytes;
};
var stopDefaultEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
};

// File.tsx
import { Fragment, jsx as jsx3, jsxs } from "react/jsx-runtime";
var containerStyles = cva(
  "flex relative group hover:text-gray-80 hover:bg-gray-5 items-center transition justify-between bg-gray-0 focus-within:bg-gray-5",
  {
    variants: {
      size: {
        medium: "min-h-[40px] p-3 rounded-lg",
        small: "h-8 p-2 rounded-md"
      }
    }
  }
);
var File = ({
  size = "medium",
  isPending,
  isSucceeded,
  error,
  name,
  onDeleteClick,
  onAbortRequestClick
}) => {
  const handleClose = (e) => {
    isPending || isSucceeded ? onAbortRequestClick == null ? void 0 : onAbortRequestClick() : onDeleteClick == null ? void 0 : onDeleteClick();
    stopDefaultEvents(e);
  };
  return /* @__PURE__ */ jsxs("div", { className: containerStyles({ size }), children: [
    /* @__PURE__ */ jsxs(
      "p",
      {
        className: cn2(
          "truncate break-all pr-2.5 transition",
          !!error ? "text-red-80" : "text-gray-90"
        ),
        children: [
          error && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx3("span", { className: "text-gray-100", children: "\u0412\u044B\u0431\u0440\u0430\u043D \u0444\u0430\u0439\u043B" }),
            /* @__PURE__ */ jsx3(Tooltip_default, { className: "hidden group-hover:block", text: error })
          ] }),
          " ",
          name
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "f-4 flex w-4 shrink-0 items-center justify-center [&_svg]:h-full [&_svg]:w-full", children: [
      /* @__PURE__ */ jsx3("div", { className: "group-hover:hidden", children: isSucceeded && /* @__PURE__ */ jsx3(Check, {}) || isPending && /* @__PURE__ */ jsx3(Spinner_default, {}) }),
      onDeleteClick && /* @__PURE__ */ jsx3(
        "button",
        {
          className: cn2(
            "inline-flex bg-transparent",
            isPending || isSucceeded && "hidden group-hover:inline-flex"
          ),
          onClick: handleClose,
          children: /* @__PURE__ */ jsx3(Close, {})
        }
      )
    ] })
  ] });
};

// FileUploader.tsx
import { Upload } from "@xipkg/icons";
import { formatBytesSize, plural } from "@xipkg/utils";
import { useId, useRef, useState } from "react";
import { Fragment as Fragment2, jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var containerStyles2 = cva(
  "flex group items-center rounded-lg border border-dashed border-gray-40 bg-gray-0 transition-[outline_shadow] px-2 max-w-[500px] gap-3 focus-within:border-solid focus-within:border-gray-80",
  {
    variants: {
      size: {
        large: "h-[92px] p-6 justify-center flex-col gap-2 border-brand-60 bg-brand-0 hover:border-brand-80",
        medium: "min-h-[48px] pt-3 pb-[14px] [&_svg]:w-6 [&_svg]:h-6 px-3 hover:bg-gray-5 hover:border-transparent",
        small: "min-h-[32px] pt-[5px] pb-[7px] [&_svg]:w-4 [&_svg]:h-4 px-2 rounded-md hover:bg-gray-5 hover:border-transparent"
      },
      isDragOver: {
        true: "shadow-[0px_0px_0px_4px_var(--xi-brand-80)] outline-offset-4 outline-4 outline-brand-20 outline border-transparent"
      },
      isError: {
        true: "ring-2 ring-red-60 !border-transparent"
      },
      isWarning: {
        true: "ring-2 ring-orange-80 !border-transparent"
      },
      isDisabled: {
        true: "bg-gray-10 pointer-events-none border-gray-30"
      }
    }
  }
);
var titleStyles = cva("text-sm text-center", {
  variants: {
    isDragOver: {
      true: "pointer-events-none"
    },
    isDisabled: {
      true: "!text-gray-30 [&_span]:text-gray-30"
    },
    size: {
      large: "text-brand-60 group-hover:text-brand-80 font-medium",
      medium: "text-base text-gray-80 group-hover:text-gray-100",
      small: "text-gray-80 group-hover:text-gray-100"
    }
  }
});
var DEFAULT_SIZE_LIMIT = 6 * 1024 * 1024;
var pluralFiles = ["\u0444\u0430\u0439\u043B\u0430", "\u0444\u0430\u0439\u043B\u043E\u0432", "\u0444\u0430\u0439\u043B\u043E\u0432"];
var FileUploader = (_a) => {
  var _b = _a, {
    withError = true,
    withLargeError = true,
    size = "medium",
    descriptionText,
    disabled,
    isWarning,
    onChange,
    limit = 3,
    bytesSizeLimit = DEFAULT_SIZE_LIMIT,
    children,
    multiple,
    validateBeforeUpload,
    fileTypesHint
  } = _b, inputProps = __objRest(_b, [
    "withError",
    "withLargeError",
    "size",
    "descriptionText",
    "disabled",
    "isWarning",
    "onChange",
    "limit",
    "bytesSizeLimit",
    "children",
    "multiple",
    "validateBeforeUpload",
    "fileTypesHint"
  ]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const dragDeph = useRef(0);
  const id = useId();
  const isLarge = size === "large";
  const formatedSizeLimit = formatBytesSize(bytesSizeLimit);
  const handleDrop = (e) => {
    stopDefaultEvents(e);
    setIsDragOver(false);
    handleFilesChange(e.dataTransfer.files);
  };
  const handleFilesChange = (files) => {
    setError("");
    if (!files || files.length == 0) return;
    const fileList = [...files];
    if (fileList.length > limit || !validateSize(fileList, bytesSizeLimit)) {
      return setError(
        `\u041C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043D\u0435\xA0\u0431\u043E\u043B\u0435\u0435 ${limit} ${plural(
          pluralFiles,
          limit
        )} \u043E\u0431\u0449\u0438\u043C \u043E\u0431\u044A\u0451\u043C\u043E\u043C \u0434\u043E\xA0${formatedSizeLimit}`
      );
    }
    if (validateBeforeUpload && validateBeforeUpload(fileList)) {
      return setError(validateBeforeUpload(fileList));
    }
    onChange(fileList);
    if (inputRef.current) inputRef.current.value = "";
  };
  const handleChange = (e) => {
    handleFilesChange(e.target.files);
  };
  const handleDragEnter = (e) => {
    dragDeph.current++;
    setIsDragOver(true);
  };
  const handleDragLeave = (e) => {
    dragDeph.current--;
    if (dragDeph.current === 0) {
      setIsDragOver(false);
    }
  };
  const fileInput = /* @__PURE__ */ jsx4(
    "input",
    __spreadValues({
      id,
      onChange: handleChange,
      ref: inputRef,
      type: "file",
      className: "sr-only",
      disabled
    }, inputProps)
  );
  return /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsx4("label", { htmlFor: id, className: disabled ? "" : "cursor-pointer", children: children ? /* @__PURE__ */ jsxs2(Fragment2, { children: [
      children,
      fileInput
    ] }) : /* @__PURE__ */ jsxs2(
      "div",
      {
        className: containerStyles2({
          isDisabled: disabled,
          isDragOver,
          isError: !!error,
          isWarning,
          size
        }),
        onDrop: handleDrop,
        onDragEnter: handleDragEnter,
        onDragOver: stopDefaultEvents,
        onDragLeave: handleDragLeave,
        children: [
          fileInput,
          /* @__PURE__ */ jsx4("p", { className: titleStyles({ isDragOver, size, isDisabled: disabled }), children: isLarge ? "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0441\u044E\u0434\u0430 \u0438\u043B\u0438\xA0\u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B" : /* @__PURE__ */ jsxs2(Fragment2, { children: [
            /* @__PURE__ */ jsx4("span", { className: "text-gray-90 group-hover:text-gray-100", children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B" }),
            " \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0441\u044E\u0434\u0430"
          ] }) }),
          isLarge && fileTypesHint && withLargeError && /* @__PURE__ */ jsx4("p", { className: "group-hover:text-brand-60 text-brand-40 text-center text-xs", children: descriptionText || `${fileTypesHint.map((el) => el.toUpperCase()).join(", ")} \u0434\u043E ${formatedSizeLimit}` }),
          !isLarge && /* @__PURE__ */ jsx4(Upload, { className: "ml-auto" })
        ]
      }
    ) }),
    error && withError && /* @__PURE__ */ jsx4("p", { className: "mt-4 text-sm leading-5 text-gray-100", children: error })
  ] });
};
export {
  File,
  FileUploader
};
