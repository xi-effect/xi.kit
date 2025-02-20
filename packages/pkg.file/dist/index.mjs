// File.tsx
import { Close, File as FileIcon } from "@xipkg/icons";
import { cn, formatBytesSize } from "@xipkg/utils";
import { jsx, jsxs } from "react/jsx-runtime";
var File = ({ name, url, size, icon, onDelete, className }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "border-gray-10 bg-gray-0 hover:bg-gray-10 relative flex h-[4.5rem] max-w-[377px] items-center rounded-lg border transition",
        className
      ),
      children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: url,
          download: name,
          className: "text-decoration-none flex w-full items-center gap-2 py-2 pl-3 pr-[14px]",
          children: [
            /* @__PURE__ */ jsx("div", { className: "relative flex h-12 w-12 shrink-0 items-center justify-center", children: !icon ? /* @__PURE__ */ jsx(FileIcon, {}) : /* @__PURE__ */ jsx("img", { src: icon, alt: name, className: "rounded" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex grow flex-col overflow-hidden text-left", children: [
              /* @__PURE__ */ jsx("p", { className: "truncate font-medium leading-[22px] text-gray-100", children: name }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-80 mt-0.5 text-sm leading-[20px]", children: formatBytesSize(size) })
            ] }),
            onDelete && /* @__PURE__ */ jsx(
              "button",
              {
                onClick: (e) => {
                  e.preventDefault();
                  onDelete(name);
                },
                className: "hover:bg-gray-0 rounded-full bg-transparent p-1 transition",
                children: /* @__PURE__ */ jsx(Close, {})
              }
            )
          ]
        }
      )
    }
  );
};
export {
  File
};
