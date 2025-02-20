// ErrorPage.tsx
import { Link } from "@xipkg/link";
import { TelegramFilled, MailRounded } from "@xipkg/icons";
import { jsx, jsxs } from "react/jsx-runtime";
var ErrorPage = ({
  children,
  title,
  errorCode,
  text,
  tgLink,
  emailLink,
  additionalText
}) => /* @__PURE__ */ jsxs("main", { className: "3xl:mx-[360px] mx-8 flex h-[100vh] md:mx-[60px] lg:mx-[120px]", children: [
  children && /* @__PURE__ */ jsx("div", { className: "absolute top-[64px] xl:top-[100px]", children }),
  /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center", children: [
    /* @__PURE__ */ jsxs("span", { className: "flex flex-col-reverse sm:flex-row sm:gap-1", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-gray-90 mb-4 text-[40px] font-bold sm:text-[48px] xl:text-[64px]", children: title }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-30 text-[28px] font-bold xl:text-[40px]", children: errorCode })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-90 mb-16 text-[20px] font-normal sm:text-[24px] xl:text-[30px]", children: text }),
    /* @__PURE__ */ jsxs("p", { className: "text-gray-80 text-[16px]", children: [
      "\u0415\u0441\u043B\u0438 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0435\u0442\u0441\u044F \u2014 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 ",
      /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "\u043D\u0430\u043C \u043E\u0431 \u044D\u0442\u043E\u043C" }),
      /* @__PURE__ */ jsxs("span", { className: "flex flex-col sm:flex-row", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
          "\u0432\xA0",
          /* @__PURE__ */ jsx(TelegramFilled, { size: "s", className: "fill-brand-80 mr-1" }),
          /* @__PURE__ */ jsx(Link, { theme: "brand", size: "l", href: tgLink, target: "_blank", children: "\u0447\u0430\u0442 Telegram" })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
          "\xA0\u0438\u043B\u0438\xA0",
          /* @__PURE__ */ jsx(MailRounded, { size: "s", className: "fill-brand-80 mr-1" }),
          /* @__PURE__ */ jsx(Link, { theme: "brand", size: "l", href: `mailto:${emailLink}`, children: "\u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443" })
        ] })
      ] })
    ] }),
    additionalText && /* @__PURE__ */ jsx("div", { className: "text-gray-80 mt-[64px] text-[16px]", children: additionalText })
  ] })
] });
export {
  ErrorPage
};
