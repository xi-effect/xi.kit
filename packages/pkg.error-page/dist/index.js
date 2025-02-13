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
var __pow = Math.pow;
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
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../../node_modules/@swc/helpers/cjs/_interop_require_default.cjs
var require_interop_require_default = __commonJS({
  "../../node_modules/@swc/helpers/cjs/_interop_require_default.cjs"(exports2) {
    "use strict";
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports2._ = _interop_require_default;
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/querystring.js
var require_querystring = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/querystring.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      assign: function() {
        return assign;
      },
      searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
      },
      urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
      }
    });
    function searchParamsToUrlQuery(searchParams) {
      const query = {};
      searchParams.forEach((value, key) => {
        if (typeof query[key] === "undefined") {
          query[key] = value;
        } else if (Array.isArray(query[key])) {
          ;
          query[key].push(value);
        } else {
          query[key] = [
            query[key],
            value
          ];
        }
      });
      return query;
    }
    function stringifyUrlQueryParam(param) {
      if (typeof param === "string" || typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
      } else {
        return "";
      }
    }
    function urlQueryToSearchParams(urlQuery) {
      const result = new URLSearchParams();
      Object.entries(urlQuery).forEach((param) => {
        let [key, value] = param;
        if (Array.isArray(value)) {
          value.forEach((item) => result.append(key, stringifyUrlQueryParam(item)));
        } else {
          result.set(key, stringifyUrlQueryParam(value));
        }
      });
      return result;
    }
    function assign(target) {
      for (var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        searchParamsList[_key - 1] = arguments[_key];
      }
      searchParamsList.forEach((searchParams) => {
        Array.from(searchParams.keys()).forEach((key) => target.delete(key));
        searchParams.forEach((value, key) => target.append(key, value));
      });
      return target;
    }
  }
});

// ../../node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs
var require_interop_require_wildcard = __commonJS({
  "../../node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs"(exports2) {
    "use strict";
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interop_require_wildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) return obj;
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = { __proto__: null };
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
          else newObj[key] = obj[key];
        }
      }
      newObj.default = obj;
      if (cache) cache.set(obj, newObj);
      return newObj;
    }
    exports2._ = _interop_require_wildcard;
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/format-url.js
var require_format_url = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/format-url.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      formatUrl: function() {
        return formatUrl;
      },
      formatWithValidation: function() {
        return formatWithValidation;
      },
      urlObjectKeys: function() {
        return urlObjectKeys;
      }
    });
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _querystring = /* @__PURE__ */ _interop_require_wildcard._(require_querystring());
    var slashedProtocols = /https?|ftp|gopher|file/;
    function formatUrl(urlObj) {
      let { auth, hostname } = urlObj;
      let protocol = urlObj.protocol || "";
      let pathname = urlObj.pathname || "";
      let hash = urlObj.hash || "";
      let query = urlObj.query || "";
      let host = false;
      auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@" : "";
      if (urlObj.host) {
        host = auth + urlObj.host;
      } else if (hostname) {
        host = auth + (~hostname.indexOf(":") ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
          host += ":" + urlObj.port;
        }
      }
      if (query && typeof query === "object") {
        query = String(_querystring.urlQueryToSearchParams(query));
      }
      let search = urlObj.search || query && "?" + query || "";
      if (protocol && !protocol.endsWith(":")) protocol += ":";
      if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = "//" + (host || "");
        if (pathname && pathname[0] !== "/") pathname = "/" + pathname;
      } else if (!host) {
        host = "";
      }
      if (hash && hash[0] !== "#") hash = "#" + hash;
      if (search && search[0] !== "?") search = "?" + search;
      pathname = pathname.replace(/[?#]/g, encodeURIComponent);
      search = search.replace("#", "%23");
      return "" + protocol + host + pathname + search + hash;
    }
    var urlObjectKeys = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes"
    ];
    function formatWithValidation(url) {
      if (process.env.NODE_ENV === "development") {
        if (url !== null && typeof url === "object") {
          Object.keys(url).forEach((key) => {
            if (!urlObjectKeys.includes(key)) {
              console.warn("Unknown key passed via urlObject into url.format: " + key);
            }
          });
        }
      }
      return formatUrl(url);
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/omit.js
var require_omit = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/omit.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "omit", {
      enumerable: true,
      get: function() {
        return omit;
      }
    });
    function omit(object, keys) {
      const omitted = {};
      Object.keys(object).forEach((key) => {
        if (!keys.includes(key)) {
          omitted[key] = object[key];
        }
      });
      return omitted;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/utils.js
var require_utils = __commonJS({
  "../../node_modules/next/dist/shared/lib/utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      DecodeError: function() {
        return DecodeError;
      },
      MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
      },
      MissingStaticPage: function() {
        return MissingStaticPage;
      },
      NormalizeError: function() {
        return NormalizeError;
      },
      PageNotFoundError: function() {
        return PageNotFoundError;
      },
      SP: function() {
        return SP;
      },
      ST: function() {
        return ST;
      },
      WEB_VITALS: function() {
        return WEB_VITALS;
      },
      execOnce: function() {
        return execOnce;
      },
      getDisplayName: function() {
        return getDisplayName;
      },
      getLocationOrigin: function() {
        return getLocationOrigin;
      },
      getURL: function() {
        return getURL;
      },
      isAbsoluteUrl: function() {
        return isAbsoluteUrl;
      },
      isResSent: function() {
        return isResSent;
      },
      loadGetInitialProps: function() {
        return loadGetInitialProps;
      },
      normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
      },
      stringifyError: function() {
        return stringifyError;
      }
    });
    var WEB_VITALS = [
      "CLS",
      "FCP",
      "FID",
      "INP",
      "LCP",
      "TTFB"
    ];
    function execOnce(fn) {
      let used = false;
      let result;
      return function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (!used) {
          used = true;
          result = fn(...args);
        }
        return result;
      };
    }
    var ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
    var isAbsoluteUrl = (url) => ABSOLUTE_URL_REGEX.test(url);
    function getLocationOrigin() {
      const { protocol, hostname, port } = window.location;
      return protocol + "//" + hostname + (port ? ":" + port : "");
    }
    function getURL() {
      const { href } = window.location;
      const origin = getLocationOrigin();
      return href.substring(origin.length);
    }
    function getDisplayName(Component) {
      return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
    }
    function isResSent(res) {
      return res.finished || res.headersSent;
    }
    function normalizeRepeatedSlashes(url) {
      const urlParts = url.split("?");
      const urlNoQuery = urlParts[0];
      return urlNoQuery.replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? "?" + urlParts.slice(1).join("?") : "");
    }
    function loadGetInitialProps(App, ctx) {
      return __async(this, null, function* () {
        if (process.env.NODE_ENV !== "production") {
          var _App_prototype;
          if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
            throw new Error(message);
          }
        }
        const res = ctx.res || ctx.ctx && ctx.ctx.res;
        if (!App.getInitialProps) {
          if (ctx.ctx && ctx.Component) {
            return {
              pageProps: yield loadGetInitialProps(ctx.Component, ctx.ctx)
            };
          }
          return {};
        }
        const props = yield App.getInitialProps(ctx);
        if (res && isResSent(res)) {
          return props;
        }
        if (!props) {
          const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
          throw new Error(message);
        }
        if (process.env.NODE_ENV !== "production") {
          if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
          }
        }
        return props;
      });
    }
    var SP = typeof performance !== "undefined";
    var ST = SP && [
      "mark",
      "measure",
      "getEntriesByName"
    ].every((method) => typeof performance[method] === "function");
    var DecodeError = class extends Error {
    };
    var NormalizeError = class extends Error {
    };
    var PageNotFoundError = class extends Error {
      constructor(page) {
        super();
        this.code = "ENOENT";
        this.name = "PageNotFoundError";
        this.message = "Cannot find module for page: " + page;
      }
    };
    var MissingStaticPage = class extends Error {
      constructor(page, message) {
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
      }
    };
    var MiddlewareNotFoundError = class extends Error {
      constructor() {
        super();
        this.code = "ENOENT";
        this.message = "Cannot find the middleware module";
      }
    };
    function stringifyError(error) {
      return JSON.stringify({
        message: error.message,
        stack: error.stack
      });
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js
var require_remove_trailing_slash = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "removeTrailingSlash", {
      enumerable: true,
      get: function() {
        return removeTrailingSlash;
      }
    });
    function removeTrailingSlash(route) {
      return route.replace(/\/$/, "") || "/";
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/parse-path.js
var require_parse_path = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/parse-path.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "parsePath", {
      enumerable: true,
      get: function() {
        return parsePath;
      }
    });
    function parsePath(path) {
      const hashIndex = path.indexOf("#");
      const queryIndex = path.indexOf("?");
      const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
      if (hasQuery || hashIndex > -1) {
        return {
          pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
          query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : void 0) : "",
          hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
      }
      return {
        pathname: path,
        query: "",
        hash: ""
      };
    }
  }
});

// ../../node_modules/next/dist/client/normalize-trailing-slash.js
var require_normalize_trailing_slash = __commonJS({
  "../../node_modules/next/dist/client/normalize-trailing-slash.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "normalizePathTrailingSlash", {
      enumerable: true,
      get: function() {
        return normalizePathTrailingSlash;
      }
    });
    var _removetrailingslash = require_remove_trailing_slash();
    var _parsepath = require_parse_path();
    var normalizePathTrailingSlash = (path) => {
      if (!path.startsWith("/") || process.env.__NEXT_MANUAL_TRAILING_SLASH) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
      if (process.env.__NEXT_TRAILING_SLASH) {
        if (/\.[^/]+\/?$/.test(pathname)) {
          return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
        } else if (pathname.endsWith("/")) {
          return "" + pathname + query + hash;
        } else {
          return pathname + "/" + query + hash;
        }
      }
      return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
    };
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js
var require_path_has_prefix = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "pathHasPrefix", {
      enumerable: true,
      get: function() {
        return pathHasPrefix;
      }
    });
    var _parsepath = require_parse_path();
    function pathHasPrefix(path, prefix) {
      if (typeof path !== "string") {
        return false;
      }
      const { pathname } = (0, _parsepath.parsePath)(path);
      return pathname === prefix || pathname.startsWith(prefix + "/");
    }
  }
});

// ../../node_modules/next/dist/client/has-base-path.js
var require_has_base_path = __commonJS({
  "../../node_modules/next/dist/client/has-base-path.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "hasBasePath", {
      enumerable: true,
      get: function() {
        return hasBasePath;
      }
    });
    var _pathhasprefix = require_path_has_prefix();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function hasBasePath(path) {
      return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/is-local-url.js
var require_is_local_url = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/is-local-url.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "isLocalURL", {
      enumerable: true,
      get: function() {
        return isLocalURL;
      }
    });
    var _utils = require_utils();
    var _hasbasepath = require_has_base_path();
    function isLocalURL(url) {
      if (!(0, _utils.isAbsoluteUrl)(url)) return true;
      try {
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
      } catch (_) {
        return false;
      }
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/sorted-routes.js
var require_sorted_routes = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/sorted-routes.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      getSortedRouteObjects: function() {
        return getSortedRouteObjects;
      },
      getSortedRoutes: function() {
        return getSortedRoutes;
      }
    });
    var UrlNode = class _UrlNode {
      insert(urlPath) {
        this._insert(urlPath.split("/").filter(Boolean), [], false);
      }
      smoosh() {
        return this._smoosh();
      }
      _smoosh(prefix) {
        if (prefix === void 0) prefix = "/";
        const childrenPaths = [
          ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
        }
        if (this.restSlugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
        }
        if (this.optionalRestSlugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
        }
        const routes = childrenPaths.map((c) => this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr) => [
          ...prev,
          ...curr
        ], []);
        if (this.slugName !== null) {
          routes.push(...this.children.get("[]")._smoosh(prefix + "[" + this.slugName + "]/"));
        }
        if (!this.placeholder) {
          const r = prefix === "/" ? "/" : prefix.slice(0, -1);
          if (this.optionalRestSlugName != null) {
            throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").');
          }
          routes.unshift(r);
        }
        if (this.restSlugName !== null) {
          routes.push(...this.children.get("[...]")._smoosh(prefix + "[..." + this.restSlugName + "]/"));
        }
        if (this.optionalRestSlugName !== null) {
          routes.push(...this.children.get("[[...]]")._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
        }
        return routes;
      }
      _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
          this.placeholder = false;
          return;
        }
        if (isCatchAll) {
          throw new Error("Catch-all must be the last part of the URL.");
        }
        let nextSegment = urlPaths[0];
        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
          let handleSlug = function(previousSlug, nextSlug) {
            if (previousSlug !== null) {
              if (previousSlug !== nextSlug) {
                throw new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "').");
              }
            }
            slugNames.forEach((slug) => {
              if (slug === nextSlug) {
                throw new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path');
              }
              if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                throw new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path');
              }
            });
            slugNames.push(nextSlug);
          };
          let segmentName = nextSegment.slice(1, -1);
          let isOptional = false;
          if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
            segmentName = segmentName.slice(1, -1);
            isOptional = true;
          }
          if (segmentName.startsWith("\u2026")) {
            throw new Error("Detected a three-dot character ('\u2026') at ('" + segmentName + "'). Did you mean ('...')?");
          }
          if (segmentName.startsWith("...")) {
            segmentName = segmentName.substring(3);
            isCatchAll = true;
          }
          if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
            throw new Error("Segment names may not start or end with extra brackets ('" + segmentName + "').");
          }
          if (segmentName.startsWith(".")) {
            throw new Error("Segment names may not start with erroneous periods ('" + segmentName + "').");
          }
          if (isCatchAll) {
            if (isOptional) {
              if (this.restSlugName != null) {
                throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).');
              }
              handleSlug(this.optionalRestSlugName, segmentName);
              this.optionalRestSlugName = segmentName;
              nextSegment = "[[...]]";
            } else {
              if (this.optionalRestSlugName != null) {
                throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").');
              }
              handleSlug(this.restSlugName, segmentName);
              this.restSlugName = segmentName;
              nextSegment = "[...]";
            }
          } else {
            if (isOptional) {
              throw new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").');
            }
            handleSlug(this.slugName, segmentName);
            this.slugName = segmentName;
            nextSegment = "[]";
          }
        }
        if (!this.children.has(nextSegment)) {
          this.children.set(nextSegment, new _UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
      }
      constructor() {
        this.placeholder = true;
        this.children = /* @__PURE__ */ new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
      }
    };
    function getSortedRoutes(normalizedPages) {
      const root = new UrlNode();
      normalizedPages.forEach((pagePath) => root.insert(pagePath));
      return root.smoosh();
    }
    function getSortedRouteObjects(objects, getter) {
      const indexes = {};
      const pathnames = [];
      for (let i = 0; i < objects.length; i++) {
        const pathname = getter(objects[i]);
        indexes[pathname] = i;
        pathnames[i] = pathname;
      }
      const sorted = getSortedRoutes(pathnames);
      return sorted.map((pathname) => objects[indexes[pathname]]);
    }
  }
});

// ../../node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js
var require_ensure_leading_slash = __commonJS({
  "../../node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "ensureLeadingSlash", {
      enumerable: true,
      get: function() {
        return ensureLeadingSlash;
      }
    });
    function ensureLeadingSlash(path) {
      return path.startsWith("/") ? path : "/" + path;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/segment.js
var require_segment = __commonJS({
  "../../node_modules/next/dist/shared/lib/segment.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
      },
      PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
      },
      addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
      },
      isGroupSegment: function() {
        return isGroupSegment;
      },
      isParallelRouteSegment: function() {
        return isParallelRouteSegment;
      }
    });
    function isGroupSegment(segment) {
      return segment[0] === "(" && segment.endsWith(")");
    }
    function isParallelRouteSegment(segment) {
      return segment.startsWith("@") && segment !== "@children";
    }
    function addSearchParamsIfPageSegment(segment, searchParams) {
      const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
      if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== "{}" ? PAGE_SEGMENT_KEY + "?" + stringifiedQuery : PAGE_SEGMENT_KEY;
      }
      return segment;
    }
    var PAGE_SEGMENT_KEY = "__PAGE__";
    var DEFAULT_SEGMENT_KEY = "__DEFAULT__";
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/app-paths.js
var require_app_paths = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/app-paths.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      normalizeAppPath: function() {
        return normalizeAppPath;
      },
      normalizeRscURL: function() {
        return normalizeRscURL;
      }
    });
    var _ensureleadingslash = require_ensure_leading_slash();
    var _segment = require_segment();
    function normalizeAppPath(route) {
      return (0, _ensureleadingslash.ensureLeadingSlash)(route.split("/").reduce((pathname, segment, index, segments) => {
        if (!segment) {
          return pathname;
        }
        if ((0, _segment.isGroupSegment)(segment)) {
          return pathname;
        }
        if (segment[0] === "@") {
          return pathname;
        }
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
          return pathname;
        }
        return pathname + "/" + segment;
      }, ""));
    }
    function normalizeRscURL(url) {
      return url.replace(
        /\.rsc($|\?)/,
        // $1 ensures `?` is preserved
        "$1"
      );
    }
  }
});

// ../../node_modules/next/dist/server/lib/interception-routes.js
var require_interception_routes = __commonJS({
  "../../node_modules/next/dist/server/lib/interception-routes.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
      },
      extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
      },
      isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
      }
    });
    var _apppaths = require_app_paths();
    var INTERCEPTION_ROUTE_MARKERS = [
      "(..)(..)",
      "(.)",
      "(..)",
      "(...)"
    ];
    function isInterceptionRouteAppPath(path) {
      return path.split("/").find((segment) => INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m))) !== void 0;
    }
    function extractInterceptionRouteInformation(path) {
      let interceptingRoute, marker, interceptedRoute;
      for (const segment of path.split("/")) {
        marker = INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m));
        if (marker) {
          ;
          [interceptingRoute, interceptedRoute] = path.split(marker, 2);
          break;
        }
      }
      if (!interceptingRoute || !marker || !interceptedRoute) {
        throw new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
      }
      interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute);
      switch (marker) {
        case "(.)":
          if (interceptingRoute === "/") {
            interceptedRoute = `/${interceptedRoute}`;
          } else {
            interceptedRoute = interceptingRoute + "/" + interceptedRoute;
          }
          break;
        case "(..)":
          if (interceptingRoute === "/") {
            throw new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`);
          }
          interceptedRoute = interceptingRoute.split("/").slice(0, -1).concat(interceptedRoute).join("/");
          break;
        case "(...)":
          interceptedRoute = "/" + interceptedRoute;
          break;
        case "(..)(..)":
          const splitInterceptingRoute = interceptingRoute.split("/");
          if (splitInterceptingRoute.length <= 2) {
            throw new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`);
          }
          interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join("/");
          break;
        default:
          throw new Error("Invariant: unexpected marker");
      }
      return {
        interceptingRoute,
        interceptedRoute
      };
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/is-dynamic.js
var require_is_dynamic = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/is-dynamic.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "isDynamicRoute", {
      enumerable: true,
      get: function() {
        return isDynamicRoute;
      }
    });
    var _interceptionroutes = require_interception_routes();
    var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
    function isDynamicRoute(route) {
      if ((0, _interceptionroutes.isInterceptionRouteAppPath)(route)) {
        route = (0, _interceptionroutes.extractInterceptionRouteInformation)(route).interceptedRoute;
      }
      return TEST_ROUTE.test(route);
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/index.js
var require_utils2 = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      getSortedRouteObjects: function() {
        return _sortedroutes.getSortedRouteObjects;
      },
      getSortedRoutes: function() {
        return _sortedroutes.getSortedRoutes;
      },
      isDynamicRoute: function() {
        return _isdynamic.isDynamicRoute;
      }
    });
    var _sortedroutes = require_sorted_routes();
    var _isdynamic = require_is_dynamic();
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/route-matcher.js
var require_route_matcher = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/route-matcher.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "getRouteMatcher", {
      enumerable: true,
      get: function() {
        return getRouteMatcher;
      }
    });
    var _utils = require_utils();
    function getRouteMatcher(param) {
      let { re, groups } = param;
      return (pathname) => {
        const routeMatch = re.exec(pathname);
        if (!routeMatch) {
          return false;
        }
        const decode = (param2) => {
          try {
            return decodeURIComponent(param2);
          } catch (_) {
            throw new _utils.DecodeError("failed to decode param");
          }
        };
        const params = {};
        Object.keys(groups).forEach((slugName) => {
          const g = groups[slugName];
          const m = routeMatch[g.pos];
          if (m !== void 0) {
            params[slugName] = ~m.indexOf("/") ? m.split("/").map((entry) => decode(entry)) : g.repeat ? [
              decode(m)
            ] : decode(m);
          }
        });
        return params;
      };
    }
  }
});

// ../../node_modules/next/dist/lib/constants.js
var require_constants = __commonJS({
  "../../node_modules/next/dist/lib/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      ACTION_SUFFIX: function() {
        return ACTION_SUFFIX;
      },
      APP_DIR_ALIAS: function() {
        return APP_DIR_ALIAS;
      },
      CACHE_ONE_YEAR: function() {
        return CACHE_ONE_YEAR;
      },
      DOT_NEXT_ALIAS: function() {
        return DOT_NEXT_ALIAS;
      },
      ESLINT_DEFAULT_DIRS: function() {
        return ESLINT_DEFAULT_DIRS;
      },
      GSP_NO_RETURNED_VALUE: function() {
        return GSP_NO_RETURNED_VALUE;
      },
      GSSP_COMPONENT_MEMBER_ERROR: function() {
        return GSSP_COMPONENT_MEMBER_ERROR;
      },
      GSSP_NO_RETURNED_VALUE: function() {
        return GSSP_NO_RETURNED_VALUE;
      },
      INFINITE_CACHE: function() {
        return INFINITE_CACHE;
      },
      INSTRUMENTATION_HOOK_FILENAME: function() {
        return INSTRUMENTATION_HOOK_FILENAME;
      },
      MATCHED_PATH_HEADER: function() {
        return MATCHED_PATH_HEADER;
      },
      MIDDLEWARE_FILENAME: function() {
        return MIDDLEWARE_FILENAME;
      },
      MIDDLEWARE_LOCATION_REGEXP: function() {
        return MIDDLEWARE_LOCATION_REGEXP;
      },
      NEXT_BODY_SUFFIX: function() {
        return NEXT_BODY_SUFFIX;
      },
      NEXT_CACHE_IMPLICIT_TAG_ID: function() {
        return NEXT_CACHE_IMPLICIT_TAG_ID;
      },
      NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
        return NEXT_CACHE_REVALIDATED_TAGS_HEADER;
      },
      NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
        return NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER;
      },
      NEXT_CACHE_SOFT_TAGS_HEADER: function() {
        return NEXT_CACHE_SOFT_TAGS_HEADER;
      },
      NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_SOFT_TAG_MAX_LENGTH;
      },
      NEXT_CACHE_TAGS_HEADER: function() {
        return NEXT_CACHE_TAGS_HEADER;
      },
      NEXT_CACHE_TAG_MAX_ITEMS: function() {
        return NEXT_CACHE_TAG_MAX_ITEMS;
      },
      NEXT_CACHE_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_TAG_MAX_LENGTH;
      },
      NEXT_DATA_SUFFIX: function() {
        return NEXT_DATA_SUFFIX;
      },
      NEXT_INTERCEPTION_MARKER_PREFIX: function() {
        return NEXT_INTERCEPTION_MARKER_PREFIX;
      },
      NEXT_META_SUFFIX: function() {
        return NEXT_META_SUFFIX;
      },
      NEXT_QUERY_PARAM_PREFIX: function() {
        return NEXT_QUERY_PARAM_PREFIX;
      },
      NEXT_RESUME_HEADER: function() {
        return NEXT_RESUME_HEADER;
      },
      NON_STANDARD_NODE_ENV: function() {
        return NON_STANDARD_NODE_ENV;
      },
      PAGES_DIR_ALIAS: function() {
        return PAGES_DIR_ALIAS;
      },
      PRERENDER_REVALIDATE_HEADER: function() {
        return PRERENDER_REVALIDATE_HEADER;
      },
      PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
        return PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
      },
      PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
        return PUBLIC_DIR_MIDDLEWARE_CONFLICT;
      },
      ROOT_DIR_ALIAS: function() {
        return ROOT_DIR_ALIAS;
      },
      RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
        return RSC_ACTION_CLIENT_WRAPPER_ALIAS;
      },
      RSC_ACTION_ENCRYPTION_ALIAS: function() {
        return RSC_ACTION_ENCRYPTION_ALIAS;
      },
      RSC_ACTION_PROXY_ALIAS: function() {
        return RSC_ACTION_PROXY_ALIAS;
      },
      RSC_ACTION_VALIDATE_ALIAS: function() {
        return RSC_ACTION_VALIDATE_ALIAS;
      },
      RSC_CACHE_WRAPPER_ALIAS: function() {
        return RSC_CACHE_WRAPPER_ALIAS;
      },
      RSC_MOD_REF_PROXY_ALIAS: function() {
        return RSC_MOD_REF_PROXY_ALIAS;
      },
      RSC_PREFETCH_SUFFIX: function() {
        return RSC_PREFETCH_SUFFIX;
      },
      RSC_SEGMENTS_DIR_SUFFIX: function() {
        return RSC_SEGMENTS_DIR_SUFFIX;
      },
      RSC_SEGMENT_SUFFIX: function() {
        return RSC_SEGMENT_SUFFIX;
      },
      RSC_SUFFIX: function() {
        return RSC_SUFFIX;
      },
      SERVER_PROPS_EXPORT_ERROR: function() {
        return SERVER_PROPS_EXPORT_ERROR;
      },
      SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
        return SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
      },
      SERVER_PROPS_SSG_CONFLICT: function() {
        return SERVER_PROPS_SSG_CONFLICT;
      },
      SERVER_RUNTIME: function() {
        return SERVER_RUNTIME;
      },
      SSG_FALLBACK_EXPORT_ERROR: function() {
        return SSG_FALLBACK_EXPORT_ERROR;
      },
      SSG_GET_INITIAL_PROPS_CONFLICT: function() {
        return SSG_GET_INITIAL_PROPS_CONFLICT;
      },
      STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
        return STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
      },
      UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
        return UNSTABLE_REVALIDATE_RENAME_ERROR;
      },
      WEBPACK_LAYERS: function() {
        return WEBPACK_LAYERS;
      },
      WEBPACK_RESOURCE_QUERIES: function() {
        return WEBPACK_RESOURCE_QUERIES;
      }
    });
    var NEXT_QUERY_PARAM_PREFIX = "nxtP";
    var NEXT_INTERCEPTION_MARKER_PREFIX = "nxtI";
    var MATCHED_PATH_HEADER = "x-matched-path";
    var PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
    var PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
    var RSC_PREFETCH_SUFFIX = ".prefetch.rsc";
    var RSC_SEGMENTS_DIR_SUFFIX = ".segments";
    var RSC_SEGMENT_SUFFIX = ".segment.rsc";
    var RSC_SUFFIX = ".rsc";
    var ACTION_SUFFIX = ".action";
    var NEXT_DATA_SUFFIX = ".json";
    var NEXT_META_SUFFIX = ".meta";
    var NEXT_BODY_SUFFIX = ".body";
    var NEXT_CACHE_TAGS_HEADER = "x-next-cache-tags";
    var NEXT_CACHE_SOFT_TAGS_HEADER = "x-next-cache-soft-tags";
    var NEXT_CACHE_REVALIDATED_TAGS_HEADER = "x-next-revalidated-tags";
    var NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = "x-next-revalidate-tag-token";
    var NEXT_RESUME_HEADER = "next-resume";
    var NEXT_CACHE_TAG_MAX_ITEMS = 128;
    var NEXT_CACHE_TAG_MAX_LENGTH = 256;
    var NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
    var NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_";
    var CACHE_ONE_YEAR = 31536e3;
    var INFINITE_CACHE = 4294967294;
    var MIDDLEWARE_FILENAME = "middleware";
    var MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
    var INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
    var PAGES_DIR_ALIAS = "private-next-pages";
    var DOT_NEXT_ALIAS = "private-dot-next";
    var ROOT_DIR_ALIAS = "private-next-root-dir";
    var APP_DIR_ALIAS = "private-next-app-dir";
    var RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
    var RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
    var RSC_ACTION_PROXY_ALIAS = "private-next-rsc-server-reference";
    var RSC_CACHE_WRAPPER_ALIAS = "private-next-rsc-cache-wrapper";
    var RSC_ACTION_ENCRYPTION_ALIAS = "private-next-rsc-action-encryption";
    var RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
    var PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
    var SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
    var SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
    var SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
    var STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
    var SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
    var GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
    var GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
    var UNSTABLE_REVALIDATE_RENAME_ERROR = "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.";
    var GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
    var NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
    var SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
    var ESLINT_DEFAULT_DIRS = [
      "app",
      "pages",
      "components",
      "lib",
      "src"
    ];
    var SERVER_RUNTIME = {
      edge: "edge",
      experimentalEdge: "experimental-edge",
      nodejs: "nodejs"
    };
    var WEBPACK_LAYERS_NAMES = {
      /**
      * The layer for the shared code between the client and server bundles.
      */
      shared: "shared",
      /**
      * The layer for server-only runtime and picking up `react-server` export conditions.
      * Including app router RSC pages and app router custom routes and metadata routes.
      */
      reactServerComponents: "rsc",
      /**
      * Server Side Rendering layer for app (ssr).
      */
      serverSideRendering: "ssr",
      /**
      * The browser client bundle layer for actions.
      */
      actionBrowser: "action-browser",
      /**
      * The layer for the API routes.
      */
      api: "api",
      /**
      * The layer for the middleware code.
      */
      middleware: "middleware",
      /**
      * The layer for the instrumentation hooks.
      */
      instrument: "instrument",
      /**
      * The layer for assets on the edge.
      */
      edgeAsset: "edge-asset",
      /**
      * The browser client bundle layer for App directory.
      */
      appPagesBrowser: "app-pages-browser"
    };
    var WEBPACK_LAYERS = __spreadProps(__spreadValues({}, WEBPACK_LAYERS_NAMES), {
      GROUP: {
        builtinReact: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser,
          WEBPACK_LAYERS_NAMES.instrument,
          WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
          // pages api
          WEBPACK_LAYERS_NAMES.api
        ],
        clientOnly: [
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser,
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser,
          WEBPACK_LAYERS_NAMES.shared,
          WEBPACK_LAYERS_NAMES.instrument
        ],
        appPages: [
          // app router pages and layouts
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser,
          WEBPACK_LAYERS_NAMES.actionBrowser
        ]
      }
    });
    var WEBPACK_RESOURCE_QUERIES = {
      edgeSSREntry: "__next_edge_ssr_entry__",
      metadata: "__next_metadata__",
      metadataRoute: "__next_metadata_route__",
      metadataImageMeta: "__next_metadata_image_meta__"
    };
  }
});

// ../../node_modules/next/dist/shared/lib/escape-regexp.js
var require_escape_regexp = __commonJS({
  "../../node_modules/next/dist/shared/lib/escape-regexp.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "escapeStringRegexp", {
      enumerable: true,
      get: function() {
        return escapeStringRegexp;
      }
    });
    var reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
    var reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
    function escapeStringRegexp(str) {
      if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, "\\$&");
      }
      return str;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/route-regex.js
var require_route_regex = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/route-regex.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      getNamedMiddlewareRegex: function() {
        return getNamedMiddlewareRegex;
      },
      getNamedRouteRegex: function() {
        return getNamedRouteRegex;
      },
      getRouteRegex: function() {
        return getRouteRegex;
      },
      parseParameter: function() {
        return parseParameter;
      }
    });
    var _constants = require_constants();
    var _interceptionroutes = require_interception_routes();
    var _escaperegexp = require_escape_regexp();
    var _removetrailingslash = require_remove_trailing_slash();
    var PARAMETER_PATTERN = /\[((?:\[.*\])|.+)\]/;
    function parseParameter(param) {
      const match = param.match(PARAMETER_PATTERN);
      if (!match) {
        return parseMatchedParameter(param);
      }
      return parseMatchedParameter(match[1]);
    }
    function parseMatchedParameter(param) {
      const optional = param.startsWith("[") && param.endsWith("]");
      if (optional) {
        param = param.slice(1, -1);
      }
      const repeat = param.startsWith("...");
      if (repeat) {
        param = param.slice(3);
      }
      return {
        key: param,
        repeat,
        optional
      };
    }
    function getParametrizedRoute(route) {
      const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
      const groups = {};
      let groupIndex = 1;
      return {
        parameterizedRoute: segments.map((segment) => {
          const markerMatch = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m));
          const paramMatches = segment.match(PARAMETER_PATTERN);
          if (markerMatch && paramMatches) {
            const { key, optional, repeat } = parseMatchedParameter(paramMatches[1]);
            groups[key] = {
              pos: groupIndex++,
              repeat,
              optional
            };
            return "/" + (0, _escaperegexp.escapeStringRegexp)(markerMatch) + "([^/]+?)";
          } else if (paramMatches) {
            const { key, repeat, optional } = parseMatchedParameter(paramMatches[1]);
            groups[key] = {
              pos: groupIndex++,
              repeat,
              optional
            };
            return repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
          } else {
            return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
          }
        }).join(""),
        groups
      };
    }
    function getRouteRegex(normalizedRoute) {
      const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute);
      return {
        re: new RegExp("^" + parameterizedRoute + "(?:/)?$"),
        groups
      };
    }
    function buildGetSafeRouteKey() {
      let i = 0;
      return () => {
        let routeKey = "";
        let j = ++i;
        while (j > 0) {
          routeKey += String.fromCharCode(97 + (j - 1) % 26);
          j = Math.floor((j - 1) / 26);
        }
        return routeKey;
      };
    }
    function getSafeKeyFromSegment(param) {
      let { interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix } = param;
      const { key, optional, repeat } = parseMatchedParameter(segment);
      let cleanedKey = key.replace(/\W/g, "");
      if (keyPrefix) {
        cleanedKey = "" + keyPrefix + cleanedKey;
      }
      let invalidKey = false;
      if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
      }
      if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
      }
      if (invalidKey) {
        cleanedKey = getSafeRouteKey();
      }
      if (keyPrefix) {
        routeKeys[cleanedKey] = "" + keyPrefix + key;
      } else {
        routeKeys[cleanedKey] = key;
      }
      const interceptionPrefix = interceptionMarker ? (0, _escaperegexp.escapeStringRegexp)(interceptionMarker) : "";
      return repeat ? optional ? "(?:/" + interceptionPrefix + "(?<" + cleanedKey + ">.+?))?" : "/" + interceptionPrefix + "(?<" + cleanedKey + ">.+?)" : "/" + interceptionPrefix + "(?<" + cleanedKey + ">[^/]+?)";
    }
    function getNamedParametrizedRoute(route, prefixRouteKeys) {
      const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
      const getSafeRouteKey = buildGetSafeRouteKey();
      const routeKeys = {};
      return {
        namedParameterizedRoute: segments.map((segment) => {
          const hasInterceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m) => segment.startsWith(m));
          const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/);
          if (hasInterceptionMarker && paramMatches) {
            const [usedMarker] = segment.split(paramMatches[0]);
            return getSafeKeyFromSegment({
              getSafeRouteKey,
              interceptionMarker: usedMarker,
              segment: paramMatches[1],
              routeKeys,
              keyPrefix: prefixRouteKeys ? _constants.NEXT_INTERCEPTION_MARKER_PREFIX : void 0
            });
          } else if (paramMatches) {
            return getSafeKeyFromSegment({
              getSafeRouteKey,
              segment: paramMatches[1],
              routeKeys,
              keyPrefix: prefixRouteKeys ? _constants.NEXT_QUERY_PARAM_PREFIX : void 0
            });
          } else {
            return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
          }
        }).join(""),
        routeKeys
      };
    }
    function getNamedRouteRegex(normalizedRoute, prefixRouteKey) {
      const result = getNamedParametrizedRoute(normalizedRoute, prefixRouteKey);
      return __spreadProps(__spreadValues({}, getRouteRegex(normalizedRoute)), {
        namedRegex: "^" + result.namedParameterizedRoute + "(?:/)?$",
        routeKeys: result.routeKeys
      });
    }
    function getNamedMiddlewareRegex(normalizedRoute, options) {
      const { parameterizedRoute } = getParametrizedRoute(normalizedRoute);
      const { catchAll = true } = options;
      if (parameterizedRoute === "/") {
        let catchAllRegex = catchAll ? ".*" : "";
        return {
          namedRegex: "^/" + catchAllRegex + "$"
        };
      }
      const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false);
      let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
      return {
        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
      };
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/interpolate-as.js
var require_interpolate_as = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/interpolate-as.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "interpolateAs", {
      enumerable: true,
      get: function() {
        return interpolateAs;
      }
    });
    var _routematcher = require_route_matcher();
    var _routeregex = require_route_regex();
    function interpolateAs(route, asPathname, query) {
      let interpolatedRoute = "";
      const dynamicRegex = (0, _routeregex.getRouteRegex)(route);
      const dynamicGroups = dynamicRegex.groups;
      const dynamicMatches = (
        // Try to match the dynamic route against the asPath
        (asPathname !== route ? (0, _routematcher.getRouteMatcher)(dynamicRegex)(asPathname) : "") || // Fall back to reading the values from the href
        // TODO: should this take priority; also need to change in the router.
        query
      );
      interpolatedRoute = route;
      const params = Object.keys(dynamicGroups);
      if (!params.every((param) => {
        let value = dynamicMatches[param] || "";
        const { repeat, optional } = dynamicGroups[param];
        let replaced = "[" + (repeat ? "..." : "") + param + "]";
        if (optional) {
          replaced = (!value ? "/" : "") + "[" + replaced + "]";
        }
        if (repeat && !Array.isArray(value)) value = [
          value
        ];
        return (optional || param in dynamicMatches) && // Interpolate group into data URL if present
        (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(
          // these values should be fully encoded instead of just
          // path delimiter escaped since they are being inserted
          // into the URL and we expect URL encoded segments
          // when parsing dynamic route params
          (segment) => encodeURIComponent(segment)
        ).join("/") : encodeURIComponent(value)) || "/");
      })) {
        interpolatedRoute = "";
      }
      return {
        params,
        result: interpolatedRoute
      };
    }
  }
});

// ../../node_modules/next/dist/client/resolve-href.js
var require_resolve_href = __commonJS({
  "../../node_modules/next/dist/client/resolve-href.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "resolveHref", {
      enumerable: true,
      get: function() {
        return resolveHref;
      }
    });
    var _querystring = require_querystring();
    var _formaturl = require_format_url();
    var _omit = require_omit();
    var _utils = require_utils();
    var _normalizetrailingslash = require_normalize_trailing_slash();
    var _islocalurl = require_is_local_url();
    var _utils1 = require_utils2();
    var _interpolateas = require_interpolate_as();
    function resolveHref(router, href, resolveAs) {
      let base;
      let urlAsString = typeof href === "string" ? href : (0, _formaturl.formatWithValidation)(href);
      const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
      const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
      const urlParts = urlAsStringNoProto.split("?", 1);
      if ((urlParts[0] || "").match(/(\/\/|\\)/)) {
        console.error("Invalid href '" + urlAsString + "' passed to next/router in page: '" + router.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
        const normalizedUrl = (0, _utils.normalizeRepeatedSlashes)(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : "") + normalizedUrl;
      }
      if (!(0, _islocalurl.isLocalURL)(urlAsString)) {
        return resolveAs ? [
          urlAsString
        ] : urlAsString;
      }
      try {
        base = new URL(urlAsString.startsWith("#") ? router.asPath : router.pathname, "http://n");
      } catch (_) {
        base = new URL("/", "http://n");
      }
      try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizetrailingslash.normalizePathTrailingSlash)(finalUrl.pathname);
        let interpolatedAs = "";
        if ((0, _utils1.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
          const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
          const { result, params } = (0, _interpolateas.interpolateAs)(finalUrl.pathname, finalUrl.pathname, query);
          if (result) {
            interpolatedAs = (0, _formaturl.formatWithValidation)({
              pathname: result,
              hash: finalUrl.hash,
              query: (0, _omit.omit)(query, params)
            });
          }
        }
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
          resolvedHref,
          interpolatedAs || resolvedHref
        ] : resolvedHref;
      } catch (_) {
        return resolveAs ? [
          urlAsString
        ] : urlAsString;
      }
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js
var require_add_path_prefix = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "addPathPrefix", {
      enumerable: true,
      get: function() {
        return addPathPrefix;
      }
    });
    var _parsepath = require_parse_path();
    function addPathPrefix(path, prefix) {
      if (!path.startsWith("/") || !prefix) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
      return "" + prefix + pathname + query + hash;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/add-locale.js
var require_add_locale = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/add-locale.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "addLocale", {
      enumerable: true,
      get: function() {
        return addLocale;
      }
    });
    var _addpathprefix = require_add_path_prefix();
    var _pathhasprefix = require_path_has_prefix();
    function addLocale(path, locale, defaultLocale, ignorePrefix) {
      if (!locale || locale === defaultLocale) return path;
      const lower = path.toLowerCase();
      if (!ignorePrefix) {
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/api")) return path;
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/" + locale.toLowerCase())) return path;
      }
      return (0, _addpathprefix.addPathPrefix)(path, "/" + locale);
    }
  }
});

// ../../node_modules/next/dist/client/add-locale.js
var require_add_locale2 = __commonJS({
  "../../node_modules/next/dist/client/add-locale.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "addLocale", {
      enumerable: true,
      get: function() {
        return addLocale;
      }
    });
    var _normalizetrailingslash = require_normalize_trailing_slash();
    var addLocale = function(path) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (process.env.__NEXT_I18N_SUPPORT) {
        return (0, _normalizetrailingslash.normalizePathTrailingSlash)(require_add_locale().addLocale(path, ...args));
      }
      return path;
    };
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router-context.shared-runtime.js
var require_router_context_shared_runtime = __commonJS({
  "../../node_modules/next/dist/shared/lib/router-context.shared-runtime.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "RouterContext", {
      enumerable: true,
      get: function() {
        return RouterContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(require("react"));
    var RouterContext = _react.default.createContext(null);
    if (process.env.NODE_ENV !== "production") {
      RouterContext.displayName = "RouterContext";
    }
  }
});

// ../../node_modules/next/dist/client/request-idle-callback.js
var require_request_idle_callback = __commonJS({
  "../../node_modules/next/dist/client/request-idle-callback.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      cancelIdleCallback: function() {
        return cancelIdleCallback;
      },
      requestIdleCallback: function() {
        return requestIdleCallback;
      }
    });
    var requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
      let start = Date.now();
      return self.setTimeout(function() {
        cb({
          didTimeout: false,
          timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - start));
          }
        });
      }, 1);
    };
    var cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
      return clearTimeout(id);
    };
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/next/dist/client/use-intersection.js
var require_use_intersection = __commonJS({
  "../../node_modules/next/dist/client/use-intersection.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "useIntersection", {
      enumerable: true,
      get: function() {
        return useIntersection;
      }
    });
    var _react = require("react");
    var _requestidlecallback = require_request_idle_callback();
    var hasIntersectionObserver = typeof IntersectionObserver === "function";
    var observers = /* @__PURE__ */ new Map();
    var idList = [];
    function createObserver(options) {
      const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
      };
      const existing = idList.find((obj) => obj.root === id.root && obj.margin === id.margin);
      let instance;
      if (existing) {
        instance = observers.get(existing);
        if (instance) {
          return instance;
        }
      }
      const elements = /* @__PURE__ */ new Map();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const callback = elements.get(entry.target);
          const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
          if (callback && isVisible) {
            callback(isVisible);
          }
        });
      }, options);
      instance = {
        id,
        observer,
        elements
      };
      idList.push(id);
      observers.set(id, instance);
      return instance;
    }
    function observe(element, callback, options) {
      const { id, observer, elements } = createObserver(options);
      elements.set(element, callback);
      observer.observe(element);
      return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        if (elements.size === 0) {
          observer.disconnect();
          observers.delete(id);
          const index = idList.findIndex((obj) => obj.root === id.root && obj.margin === id.margin);
          if (index > -1) {
            idList.splice(index, 1);
          }
        }
      };
    }
    function useIntersection(param) {
      let { rootRef, rootMargin, disabled } = param;
      const isDisabled = disabled || !hasIntersectionObserver;
      const [visible, setVisible] = (0, _react.useState)(false);
      const elementRef = (0, _react.useRef)(null);
      const setElement = (0, _react.useCallback)((element) => {
        elementRef.current = element;
      }, []);
      (0, _react.useEffect)(() => {
        if (hasIntersectionObserver) {
          if (isDisabled || visible) return;
          const element = elementRef.current;
          if (element && element.tagName) {
            const unobserve = observe(element, (isVisible) => isVisible && setVisible(isVisible), {
              root: rootRef == null ? void 0 : rootRef.current,
              rootMargin
            });
            return unobserve;
          }
        } else {
          if (!visible) {
            const idleCallback = (0, _requestidlecallback.requestIdleCallback)(() => setVisible(true));
            return () => (0, _requestidlecallback.cancelIdleCallback)(idleCallback);
          }
        }
      }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
      ]);
      const resetVisible = (0, _react.useCallback)(() => {
        setVisible(false);
      }, []);
      return [
        setElement,
        visible,
        resetVisible
      ];
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js
var require_normalize_locale_path = __commonJS({
  "../../node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "normalizeLocalePath", {
      enumerable: true,
      get: function() {
        return normalizeLocalePath;
      }
    });
    function normalizeLocalePath(pathname, locales) {
      let detectedLocale;
      const pathnameParts = pathname.split("/");
      (locales || []).some((locale) => {
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
          detectedLocale = locale;
          pathnameParts.splice(1, 1);
          pathname = pathnameParts.join("/") || "/";
          return true;
        }
        return false;
      });
      return {
        pathname,
        detectedLocale
      };
    }
  }
});

// ../../node_modules/next/dist/client/normalize-locale-path.js
var require_normalize_locale_path2 = __commonJS({
  "../../node_modules/next/dist/client/normalize-locale-path.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "normalizeLocalePath", {
      enumerable: true,
      get: function() {
        return normalizeLocalePath;
      }
    });
    var normalizeLocalePath = (pathname, locales) => {
      if (process.env.__NEXT_I18N_SUPPORT) {
        return require_normalize_locale_path().normalizeLocalePath(pathname, locales);
      }
      return {
        pathname,
        detectedLocale: void 0
      };
    };
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js
var require_detect_domain_locale = __commonJS({
  "../../node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "detectDomainLocale", {
      enumerable: true,
      get: function() {
        return detectDomainLocale;
      }
    });
    function detectDomainLocale(domainItems, hostname, detectedLocale) {
      if (!domainItems) return;
      if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
      }
      for (const item of domainItems) {
        var _item_domain, _item_locales;
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":", 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale) => locale.toLowerCase() === detectedLocale))) {
          return item;
        }
      }
    }
  }
});

// ../../node_modules/next/dist/client/detect-domain-locale.js
var require_detect_domain_locale2 = __commonJS({
  "../../node_modules/next/dist/client/detect-domain-locale.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "detectDomainLocale", {
      enumerable: true,
      get: function() {
        return detectDomainLocale;
      }
    });
    var detectDomainLocale = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (process.env.__NEXT_I18N_SUPPORT) {
        return require_detect_domain_locale().detectDomainLocale(...args);
      }
    };
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/next/dist/client/get-domain-locale.js
var require_get_domain_locale = __commonJS({
  "../../node_modules/next/dist/client/get-domain-locale.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "getDomainLocale", {
      enumerable: true,
      get: function() {
        return getDomainLocale;
      }
    });
    var _normalizetrailingslash = require_normalize_trailing_slash();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function getDomainLocale(path, locale, locales, domainLocales) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        const normalizeLocalePath = require_normalize_locale_path2().normalizeLocalePath;
        const detectDomainLocale = require_detect_domain_locale2().detectDomainLocale;
        const target = locale || normalizeLocalePath(path, locales).detectedLocale;
        const domain = detectDomainLocale(domainLocales, void 0, target);
        if (domain) {
          const proto = "http" + (domain.http ? "" : "s") + "://";
          const finalLocale = target === domain.defaultLocale ? "" : "/" + target;
          return "" + proto + domain.domain + (0, _normalizetrailingslash.normalizePathTrailingSlash)("" + basePath + finalLocale + path);
        }
        return false;
      } else {
        return false;
      }
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/next/dist/client/add-base-path.js
var require_add_base_path = __commonJS({
  "../../node_modules/next/dist/client/add-base-path.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "addBasePath", {
      enumerable: true,
      get: function() {
        return addBasePath;
      }
    });
    var _addpathprefix = require_add_path_prefix();
    var _normalizetrailingslash = require_normalize_trailing_slash();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function addBasePath(path, required) {
      return (0, _normalizetrailingslash.normalizePathTrailingSlash)(process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !required ? path : (0, _addpathprefix.addPathPrefix)(path, basePath));
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/next/dist/client/use-merged-ref.js
var require_use_merged_ref = __commonJS({
  "../../node_modules/next/dist/client/use-merged-ref.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "useMergedRef", {
      enumerable: true,
      get: function() {
        return useMergedRef;
      }
    });
    var _react = require("react");
    function useMergedRef(refA, refB) {
      const cleanupA = (0, _react.useRef)(() => {
      });
      const cleanupB = (0, _react.useRef)(() => {
      });
      return (0, _react.useMemo)(() => {
        if (!refA || !refB) {
          return refA || refB;
        }
        return (current) => {
          if (current === null) {
            cleanupA.current();
            cleanupB.current();
          } else {
            cleanupA.current = applyRef(refA, current);
            cleanupB.current = applyRef(refB, current);
          }
        };
      }, [
        refA,
        refB
      ]);
    }
    function applyRef(refA, current) {
      if (typeof refA === "function") {
        const cleanup = refA(current);
        if (typeof cleanup === "function") {
          return cleanup;
        } else {
          return () => refA(null);
        }
      } else {
        refA.current = current;
        return () => {
          refA.current = null;
        };
      }
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/next/dist/client/link.js
var require_link = __commonJS({
  "../../node_modules/next/dist/client/link.js"(exports2, module2) {
    "use strict";
    "use client";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _jsxruntime = require("react/jsx-runtime");
    var _react = /* @__PURE__ */ _interop_require_default._(require("react"));
    var _resolvehref = require_resolve_href();
    var _islocalurl = require_is_local_url();
    var _formaturl = require_format_url();
    var _utils = require_utils();
    var _addlocale = require_add_locale2();
    var _routercontextsharedruntime = require_router_context_shared_runtime();
    var _useintersection = require_use_intersection();
    var _getdomainlocale = require_get_domain_locale();
    var _addbasepath = require_add_base_path();
    var _usemergedref = require_use_merged_ref();
    var prefetched = /* @__PURE__ */ new Set();
    function prefetch(router, href, as, options) {
      if (typeof window === "undefined") {
        return;
      }
      if (!(0, _islocalurl.isLocalURL)(href)) {
        return;
      }
      if (!options.bypassPrefetchedCheck) {
        const locale = (
          // Let the link's locale prop override the default router locale.
          typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : void 0
        );
        const prefetchedKey = href + "%" + as + "%" + locale;
        if (prefetched.has(prefetchedKey)) {
          return;
        }
        prefetched.add(prefetchedKey);
      }
      router.prefetch(href, as, options).catch((err) => {
        if (process.env.NODE_ENV !== "production") {
          throw err;
        }
      });
    }
    function isModifiedEvent(event) {
      const eventTarget = event.currentTarget;
      const target = eventTarget.getAttribute("target");
      return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
      event.nativeEvent && event.nativeEvent.which === 2;
    }
    function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
      const { nodeName } = e.currentTarget;
      const isAnchorNodeName = nodeName.toUpperCase() === "A";
      if (isAnchorNodeName && (isModifiedEvent(e) || !(0, _islocalurl.isLocalURL)(href))) {
        return;
      }
      e.preventDefault();
      const navigate = () => {
        const routerScroll = scroll != null ? scroll : true;
        if ("beforePopState" in router) {
          router[replace ? "replace" : "push"](href, as, {
            shallow,
            locale,
            scroll: routerScroll
          });
        } else {
          router[replace ? "replace" : "push"](as || href, {
            scroll: routerScroll
          });
        }
      };
      navigate();
    }
    function formatStringOrUrl(urlObjOrString) {
      if (typeof urlObjOrString === "string") {
        return urlObjOrString;
      }
      return (0, _formaturl.formatUrl)(urlObjOrString);
    }
    var Link2 = /* @__PURE__ */ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
      let children;
      const _a = props, { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, locale, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false } = _a, restProps = __objRest(_a, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
      children = childrenProp;
      if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /* @__PURE__ */ (0, _jsxruntime.jsx)("a", {
          children
        });
      }
      const router = _react.default.useContext(_routercontextsharedruntime.RouterContext);
      const prefetchEnabled = prefetchProp !== false;
      if (process.env.NODE_ENV !== "production") {
        let createPropError = function(args) {
          return new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== "undefined" ? "\nOpen your browser's console to view the Component stack trace." : ""));
        };
        const requiredPropsGuard = {
          href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key) => {
          if (key === "href") {
            if (props[key] == null || typeof props[key] !== "string" && typeof props[key] !== "object") {
              throw createPropError({
                key,
                expected: "`string` or `object`",
                actual: props[key] === null ? "null" : typeof props[key]
              });
            }
          } else {
            const _ = key;
          }
        });
        const optionalPropsGuard = {
          as: true,
          replace: true,
          scroll: true,
          shallow: true,
          passHref: true,
          prefetch: true,
          locale: true,
          onClick: true,
          onMouseEnter: true,
          onTouchStart: true,
          legacyBehavior: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key) => {
          const valType = typeof props[key];
          if (key === "as") {
            if (props[key] && valType !== "string" && valType !== "object") {
              throw createPropError({
                key,
                expected: "`string` or `object`",
                actual: valType
              });
            }
          } else if (key === "locale") {
            if (props[key] && valType !== "string") {
              throw createPropError({
                key,
                expected: "`string`",
                actual: valType
              });
            }
          } else if (key === "onClick" || key === "onMouseEnter" || key === "onTouchStart") {
            if (props[key] && valType !== "function") {
              throw createPropError({
                key,
                expected: "`function`",
                actual: valType
              });
            }
          } else if (key === "replace" || key === "scroll" || key === "shallow" || key === "passHref" || key === "prefetch" || key === "legacyBehavior") {
            if (props[key] != null && valType !== "boolean") {
              throw createPropError({
                key,
                expected: "`boolean`",
                actual: valType
              });
            }
          } else {
            const _ = key;
          }
        });
      }
      const { href, as } = _react.default.useMemo(() => {
        if (!router) {
          const resolvedHref2 = formatStringOrUrl(hrefProp);
          return {
            href: resolvedHref2,
            as: asProp ? formatStringOrUrl(asProp) : resolvedHref2
          };
        }
        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(router, hrefProp, true);
        return {
          href: resolvedHref,
          as: asProp ? (0, _resolvehref.resolveHref)(router, asProp) : resolvedAs || resolvedHref
        };
      }, [
        router,
        hrefProp,
        asProp
      ]);
      const previousHref = _react.default.useRef(href);
      const previousAs = _react.default.useRef(as);
      let child;
      if (legacyBehavior) {
        if (process.env.NODE_ENV === "development") {
          if (onClick) {
            console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
          }
          if (onMouseEnterProp) {
            console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
          }
          try {
            child = _react.default.Children.only(children);
          } catch (err) {
            if (!children) {
              throw new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children");
            }
            throw new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== "undefined" ? " \nOpen your browser's console to view the Component stack trace." : ""));
          }
        } else {
          child = _react.default.Children.only(children);
        }
      } else {
        if (process.env.NODE_ENV === "development") {
          if ((children == null ? void 0 : children.type) === "a") {
            throw new Error("Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor");
          }
        }
      }
      const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
      const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: "200px"
      });
      const setIntersectionWithResetRef = _react.default.useCallback((el) => {
        if (previousAs.current !== as || previousHref.current !== href) {
          resetVisible();
          previousAs.current = as;
          previousHref.current = href;
        }
        setIntersectionRef(el);
      }, [
        as,
        href,
        resetVisible,
        setIntersectionRef
      ]);
      const setRef = (0, _usemergedref.useMergedRef)(setIntersectionWithResetRef, childRef);
      _react.default.useEffect(() => {
        if (process.env.NODE_ENV !== "production") {
          return;
        }
        if (!router) {
          return;
        }
        if (!isVisible || !prefetchEnabled) {
          return;
        }
        prefetch(router, href, as, {
          locale
        });
      }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        router == null ? void 0 : router.locale,
        router
      ]);
      const childProps = {
        ref: setRef,
        onClick(e) {
          if (process.env.NODE_ENV !== "production") {
            if (!e) {
              throw new Error('Component rendered inside next/link has to pass click event to "onClick" prop.');
            }
          }
          if (!legacyBehavior && typeof onClick === "function") {
            onClick(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
            child.props.onClick(e);
          }
          if (!router) {
            return;
          }
          if (e.defaultPrevented) {
            return;
          }
          linkClicked(e, router, href, as, replace, shallow, scroll, locale);
        },
        onMouseEnter(e) {
          if (!legacyBehavior && typeof onMouseEnterProp === "function") {
            onMouseEnterProp(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
            child.props.onMouseEnter(e);
          }
          if (!router) {
            return;
          }
          prefetch(router, href, as, {
            locale,
            priority: true,
            // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
            bypassPrefetchedCheck: true
          });
        },
        onTouchStart: process.env.__NEXT_LINK_NO_TOUCH_START ? void 0 : function onTouchStart(e) {
          if (!legacyBehavior && typeof onTouchStartProp === "function") {
            onTouchStartProp(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
            child.props.onTouchStart(e);
          }
          if (!router) {
            return;
          }
          prefetch(router, href, as, {
            locale,
            priority: true,
            // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
            bypassPrefetchedCheck: true
          });
        }
      };
      if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
      } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : router == null ? void 0 : router.locale;
        const localeDomain = (router == null ? void 0 : router.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, router == null ? void 0 : router.locales, router == null ? void 0 : router.domainLocales);
        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, router == null ? void 0 : router.defaultLocale));
      }
      return legacyBehavior ? /* @__PURE__ */ _react.default.cloneElement(child, childProps) : /* @__PURE__ */ (0, _jsxruntime.jsx)("a", __spreadProps(__spreadValues(__spreadValues({}, restProps), childProps), {
        children
      }));
    });
    var _default = Link2;
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/next/link.js
var require_link2 = __commonJS({
  "../../node_modules/next/link.js"(exports2, module2) {
    "use strict";
    module2.exports = require_link();
  }
});

// ../pkg.link/dist/index.js
var require_dist = __commonJS({
  "../pkg.link/dist/index.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __defProps2 = Object.defineProperties;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
    var __getProtoOf2 = Object.getPrototypeOf;
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
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var index_exports2 = {};
    __export2(index_exports2, {
      Link: () => Link2
    });
    module2.exports = __toCommonJS2(index_exports2);
    var React = __toESM2(require("react"));
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
        let _a = param, { class: cvClass, className: cvClassName } = _a, compoundVariantOptions = __objRest2(_a, ["class", "className"]);
        return Object.entries(compoundVariantOptions).every((param2) => {
          let [key, value] = param2;
          return Array.isArray(value) ? value.includes(__spreadValues2(__spreadValues2({}, defaultVariants), propsWithoutUndefined)[key]) : __spreadValues2(__spreadValues2({}, defaultVariants), propsWithoutUndefined)[key] === value;
        }) ? [
          ...acc,
          cvClass,
          cvClassName
        ] : acc;
      }, []);
      return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
    var import_link2 = __toESM2(require_link2());
    function twJoin2() {
      var index = 0;
      var argument;
      var resolvedValue;
      var string = "";
      while (index < arguments.length) {
        if (argument = arguments[index++]) {
          if (resolvedValue = toValue2(argument)) {
            string && (string += " ");
            string += resolvedValue;
          }
        }
      }
      return string;
    }
    function toValue2(mix) {
      if (typeof mix === "string") {
        return mix;
      }
      var resolvedValue;
      var string = "";
      for (var k2 = 0; k2 < mix.length; k2++) {
        if (mix[k2]) {
          if (resolvedValue = toValue2(mix[k2])) {
            string && (string += " ");
            string += resolvedValue;
          }
        }
      }
      return string;
    }
    var CLASS_PART_SEPARATOR2 = "-";
    function createClassUtils2(config) {
      var classMap = createClassMap2(config);
      var conflictingClassGroups = config.conflictingClassGroups, _config$conflictingCl = config.conflictingClassGroupModifiers, conflictingClassGroupModifiers = _config$conflictingCl === void 0 ? {} : _config$conflictingCl;
      function getClassGroupId(className) {
        var classParts = className.split(CLASS_PART_SEPARATOR2);
        if (classParts[0] === "" && classParts.length !== 1) {
          classParts.shift();
        }
        return getGroupRecursive2(classParts, classMap) || getGroupIdForArbitraryProperty2(className);
      }
      function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
        var conflicts = conflictingClassGroups[classGroupId] || [];
        if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
          return [].concat(conflicts, conflictingClassGroupModifiers[classGroupId]);
        }
        return conflicts;
      }
      return {
        getClassGroupId,
        getConflictingClassGroupIds
      };
    }
    function getGroupRecursive2(classParts, classPartObject) {
      var _a;
      if (classParts.length === 0) {
        return classPartObject.classGroupId;
      }
      var currentClassPart = classParts[0];
      var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
      var classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive2(classParts.slice(1), nextClassPartObject) : void 0;
      if (classGroupFromNextClassPart) {
        return classGroupFromNextClassPart;
      }
      if (classPartObject.validators.length === 0) {
        return void 0;
      }
      var classRest = classParts.join(CLASS_PART_SEPARATOR2);
      return (_a = classPartObject.validators.find(function(_ref) {
        var validator = _ref.validator;
        return validator(classRest);
      })) == null ? void 0 : _a.classGroupId;
    }
    var arbitraryPropertyRegex2 = /^\[(.+)\]$/;
    function getGroupIdForArbitraryProperty2(className) {
      if (arbitraryPropertyRegex2.test(className)) {
        var arbitraryPropertyClassName = arbitraryPropertyRegex2.exec(className)[1];
        var property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
        if (property) {
          return "arbitrary.." + property;
        }
      }
    }
    function createClassMap2(config) {
      var theme = config.theme, prefix = config.prefix;
      var classMap = {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      };
      var prefixedClassGroupEntries = getPrefixedClassGroupEntries2(Object.entries(config.classGroups), prefix);
      prefixedClassGroupEntries.forEach(function(_ref2) {
        var classGroupId = _ref2[0], classGroup = _ref2[1];
        processClassesRecursively2(classGroup, classMap, classGroupId, theme);
      });
      return classMap;
    }
    function processClassesRecursively2(classGroup, classPartObject, classGroupId, theme) {
      classGroup.forEach(function(classDefinition) {
        if (typeof classDefinition === "string") {
          var classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart2(classPartObject, classDefinition);
          classPartObjectToEdit.classGroupId = classGroupId;
          return;
        }
        if (typeof classDefinition === "function") {
          if (isThemeGetter2(classDefinition)) {
            processClassesRecursively2(classDefinition(theme), classPartObject, classGroupId, theme);
            return;
          }
          classPartObject.validators.push({
            validator: classDefinition,
            classGroupId
          });
          return;
        }
        Object.entries(classDefinition).forEach(function(_ref3) {
          var key = _ref3[0], classGroup2 = _ref3[1];
          processClassesRecursively2(classGroup2, getPart2(classPartObject, key), classGroupId, theme);
        });
      });
    }
    function getPart2(classPartObject, path) {
      var currentClassPartObject = classPartObject;
      path.split(CLASS_PART_SEPARATOR2).forEach(function(pathPart) {
        if (!currentClassPartObject.nextPart.has(pathPart)) {
          currentClassPartObject.nextPart.set(pathPart, {
            nextPart: /* @__PURE__ */ new Map(),
            validators: []
          });
        }
        currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
      });
      return currentClassPartObject;
    }
    function isThemeGetter2(func) {
      return func.isThemeGetter;
    }
    function getPrefixedClassGroupEntries2(classGroupEntries, prefix) {
      if (!prefix) {
        return classGroupEntries;
      }
      return classGroupEntries.map(function(_ref4) {
        var classGroupId = _ref4[0], classGroup = _ref4[1];
        var prefixedClassGroup = classGroup.map(function(classDefinition) {
          if (typeof classDefinition === "string") {
            return prefix + classDefinition;
          }
          if (typeof classDefinition === "object") {
            return Object.fromEntries(Object.entries(classDefinition).map(function(_ref5) {
              var key = _ref5[0], value = _ref5[1];
              return [prefix + key, value];
            }));
          }
          return classDefinition;
        });
        return [classGroupId, prefixedClassGroup];
      });
    }
    function createLruCache2(maxCacheSize) {
      if (maxCacheSize < 1) {
        return {
          get: function get() {
            return void 0;
          },
          set: function set() {
          }
        };
      }
      var cacheSize = 0;
      var cache = /* @__PURE__ */ new Map();
      var previousCache = /* @__PURE__ */ new Map();
      function update(key, value) {
        cache.set(key, value);
        cacheSize++;
        if (cacheSize > maxCacheSize) {
          cacheSize = 0;
          previousCache = cache;
          cache = /* @__PURE__ */ new Map();
        }
      }
      return {
        get: function get(key) {
          var value = cache.get(key);
          if (value !== void 0) {
            return value;
          }
          if ((value = previousCache.get(key)) !== void 0) {
            update(key, value);
            return value;
          }
        },
        set: function set(key, value) {
          if (cache.has(key)) {
            cache.set(key, value);
          } else {
            update(key, value);
          }
        }
      };
    }
    var IMPORTANT_MODIFIER2 = "!";
    function createSplitModifiers2(config) {
      var separator = config.separator || ":";
      var isSeparatorSingleCharacter = separator.length === 1;
      var firstSeparatorCharacter = separator[0];
      var separatorLength = separator.length;
      return function splitModifiers(className) {
        var modifiers = [];
        var bracketDepth = 0;
        var modifierStart = 0;
        var postfixModifierPosition;
        for (var index = 0; index < className.length; index++) {
          var currentCharacter = className[index];
          if (bracketDepth === 0) {
            if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
              modifiers.push(className.slice(modifierStart, index));
              modifierStart = index + separatorLength;
              continue;
            }
            if (currentCharacter === "/") {
              postfixModifierPosition = index;
              continue;
            }
          }
          if (currentCharacter === "[") {
            bracketDepth++;
          } else if (currentCharacter === "]") {
            bracketDepth--;
          }
        }
        var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
        var hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER2);
        var baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
        var maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
        return {
          modifiers,
          hasImportantModifier,
          baseClassName,
          maybePostfixModifierPosition
        };
      };
    }
    function sortModifiers2(modifiers) {
      if (modifiers.length <= 1) {
        return modifiers;
      }
      var sortedModifiers = [];
      var unsortedModifiers = [];
      modifiers.forEach(function(modifier) {
        var isArbitraryVariant = modifier[0] === "[";
        if (isArbitraryVariant) {
          sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort().concat([modifier]));
          unsortedModifiers = [];
        } else {
          unsortedModifiers.push(modifier);
        }
      });
      sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort());
      return sortedModifiers;
    }
    function createConfigUtils2(config) {
      return __spreadValues2({
        cache: createLruCache2(config.cacheSize),
        splitModifiers: createSplitModifiers2(config)
      }, createClassUtils2(config));
    }
    var SPLIT_CLASSES_REGEX2 = /\s+/;
    function mergeClassList2(classList, configUtils) {
      var splitModifiers = configUtils.splitModifiers, getClassGroupId = configUtils.getClassGroupId, getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds;
      var classGroupsInConflict = /* @__PURE__ */ new Set();
      return classList.trim().split(SPLIT_CLASSES_REGEX2).map(function(originalClassName) {
        var _splitModifiers = splitModifiers(originalClassName), modifiers = _splitModifiers.modifiers, hasImportantModifier = _splitModifiers.hasImportantModifier, baseClassName = _splitModifiers.baseClassName, maybePostfixModifierPosition = _splitModifiers.maybePostfixModifierPosition;
        var classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
        var hasPostfixModifier = Boolean(maybePostfixModifierPosition);
        if (!classGroupId) {
          if (!maybePostfixModifierPosition) {
            return {
              isTailwindClass: false,
              originalClassName
            };
          }
          classGroupId = getClassGroupId(baseClassName);
          if (!classGroupId) {
            return {
              isTailwindClass: false,
              originalClassName
            };
          }
          hasPostfixModifier = false;
        }
        var variantModifier = sortModifiers2(modifiers).join(":");
        var modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER2 : variantModifier;
        return {
          isTailwindClass: true,
          modifierId,
          classGroupId,
          originalClassName,
          hasPostfixModifier
        };
      }).reverse().filter(function(parsed) {
        if (!parsed.isTailwindClass) {
          return true;
        }
        var modifierId = parsed.modifierId, classGroupId = parsed.classGroupId, hasPostfixModifier = parsed.hasPostfixModifier;
        var classId = modifierId + classGroupId;
        if (classGroupsInConflict.has(classId)) {
          return false;
        }
        classGroupsInConflict.add(classId);
        getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach(function(group) {
          return classGroupsInConflict.add(modifierId + group);
        });
        return true;
      }).reverse().map(function(parsed) {
        return parsed.originalClassName;
      }).join(" ");
    }
    function createTailwindMerge2() {
      for (var _len = arguments.length, createConfig = new Array(_len), _key = 0; _key < _len; _key++) {
        createConfig[_key] = arguments[_key];
      }
      var configUtils;
      var cacheGet;
      var cacheSet;
      var functionToCall = initTailwindMerge;
      function initTailwindMerge(classList) {
        var firstCreateConfig = createConfig[0], restCreateConfig = createConfig.slice(1);
        var config = restCreateConfig.reduce(function(previousConfig, createConfigCurrent) {
          return createConfigCurrent(previousConfig);
        }, firstCreateConfig());
        configUtils = createConfigUtils2(config);
        cacheGet = configUtils.cache.get;
        cacheSet = configUtils.cache.set;
        functionToCall = tailwindMerge;
        return tailwindMerge(classList);
      }
      function tailwindMerge(classList) {
        var cachedResult = cacheGet(classList);
        if (cachedResult) {
          return cachedResult;
        }
        var result = mergeClassList2(classList, configUtils);
        cacheSet(classList, result);
        return result;
      }
      return function callTailwindMerge() {
        return functionToCall(twJoin2.apply(null, arguments));
      };
    }
    function fromTheme2(key) {
      var themeGetter = function themeGetter2(theme) {
        return theme[key] || [];
      };
      themeGetter.isThemeGetter = true;
      return themeGetter;
    }
    var arbitraryValueRegex2 = /^\[(?:([a-z-]+):)?(.+)\]$/i;
    var fractionRegex2 = /^\d+\/\d+$/;
    var stringLengths2 = /* @__PURE__ */ new Set(["px", "full", "screen"]);
    var tshirtUnitRegex2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
    var lengthUnitRegex2 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
    var shadowRegex2 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
    function isLength2(value) {
      return isNumber2(value) || stringLengths2.has(value) || fractionRegex2.test(value) || isArbitraryLength2(value);
    }
    function isArbitraryLength2(value) {
      return getIsArbitraryValue2(value, "length", isLengthOnly2);
    }
    function isArbitrarySize2(value) {
      return getIsArbitraryValue2(value, "size", isNever2);
    }
    function isArbitraryPosition2(value) {
      return getIsArbitraryValue2(value, "position", isNever2);
    }
    function isArbitraryUrl2(value) {
      return getIsArbitraryValue2(value, "url", isUrl2);
    }
    function isArbitraryNumber2(value) {
      return getIsArbitraryValue2(value, "number", isNumber2);
    }
    function isNumber2(value) {
      return !Number.isNaN(Number(value));
    }
    function isPercent2(value) {
      return value.endsWith("%") && isNumber2(value.slice(0, -1));
    }
    function isInteger2(value) {
      return isIntegerOnly2(value) || getIsArbitraryValue2(value, "number", isIntegerOnly2);
    }
    function isArbitraryValue2(value) {
      return arbitraryValueRegex2.test(value);
    }
    function isAny2() {
      return true;
    }
    function isTshirtSize2(value) {
      return tshirtUnitRegex2.test(value);
    }
    function isArbitraryShadow2(value) {
      return getIsArbitraryValue2(value, "", isShadow2);
    }
    function getIsArbitraryValue2(value, label, testValue) {
      var result = arbitraryValueRegex2.exec(value);
      if (result) {
        if (result[1]) {
          return result[1] === label;
        }
        return testValue(result[2]);
      }
      return false;
    }
    function isLengthOnly2(value) {
      return lengthUnitRegex2.test(value);
    }
    function isNever2() {
      return false;
    }
    function isUrl2(value) {
      return value.startsWith("url(");
    }
    function isIntegerOnly2(value) {
      return Number.isInteger(Number(value));
    }
    function isShadow2(value) {
      return shadowRegex2.test(value);
    }
    function getDefaultConfig2() {
      var colors = fromTheme2("colors");
      var spacing = fromTheme2("spacing");
      var blur = fromTheme2("blur");
      var brightness = fromTheme2("brightness");
      var borderColor = fromTheme2("borderColor");
      var borderRadius = fromTheme2("borderRadius");
      var borderSpacing = fromTheme2("borderSpacing");
      var borderWidth = fromTheme2("borderWidth");
      var contrast = fromTheme2("contrast");
      var grayscale = fromTheme2("grayscale");
      var hueRotate = fromTheme2("hueRotate");
      var invert = fromTheme2("invert");
      var gap = fromTheme2("gap");
      var gradientColorStops = fromTheme2("gradientColorStops");
      var gradientColorStopPositions = fromTheme2("gradientColorStopPositions");
      var inset = fromTheme2("inset");
      var margin = fromTheme2("margin");
      var opacity = fromTheme2("opacity");
      var padding = fromTheme2("padding");
      var saturate = fromTheme2("saturate");
      var scale = fromTheme2("scale");
      var sepia = fromTheme2("sepia");
      var skew = fromTheme2("skew");
      var space = fromTheme2("space");
      var translate = fromTheme2("translate");
      var getOverscroll = function getOverscroll2() {
        return ["auto", "contain", "none"];
      };
      var getOverflow = function getOverflow2() {
        return ["auto", "hidden", "clip", "visible", "scroll"];
      };
      var getSpacingWithAutoAndArbitrary = function getSpacingWithAutoAndArbitrary2() {
        return ["auto", isArbitraryValue2, spacing];
      };
      var getSpacingWithArbitrary = function getSpacingWithArbitrary2() {
        return [isArbitraryValue2, spacing];
      };
      var getLengthWithEmpty = function getLengthWithEmpty2() {
        return ["", isLength2];
      };
      var getNumberWithAutoAndArbitrary = function getNumberWithAutoAndArbitrary2() {
        return ["auto", isNumber2, isArbitraryValue2];
      };
      var getPositions = function getPositions2() {
        return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
      };
      var getLineStyles = function getLineStyles2() {
        return ["solid", "dashed", "dotted", "double", "none"];
      };
      var getBlendModes = function getBlendModes2() {
        return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
      };
      var getAlign = function getAlign2() {
        return ["start", "end", "center", "between", "around", "evenly", "stretch"];
      };
      var getZeroAndEmpty = function getZeroAndEmpty2() {
        return ["", "0", isArbitraryValue2];
      };
      var getBreaks = function getBreaks2() {
        return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
      };
      var getNumber = function getNumber2() {
        return [isNumber2, isArbitraryNumber2];
      };
      var getNumberAndArbitrary = function getNumberAndArbitrary2() {
        return [isNumber2, isArbitraryValue2];
      };
      return {
        cacheSize: 500,
        theme: {
          colors: [isAny2],
          spacing: [isLength2],
          blur: ["none", "", isTshirtSize2, isArbitraryValue2],
          brightness: getNumber(),
          borderColor: [colors],
          borderRadius: ["none", "", "full", isTshirtSize2, isArbitraryValue2],
          borderSpacing: getSpacingWithArbitrary(),
          borderWidth: getLengthWithEmpty(),
          contrast: getNumber(),
          grayscale: getZeroAndEmpty(),
          hueRotate: getNumberAndArbitrary(),
          invert: getZeroAndEmpty(),
          gap: getSpacingWithArbitrary(),
          gradientColorStops: [colors],
          gradientColorStopPositions: [isPercent2, isArbitraryLength2],
          inset: getSpacingWithAutoAndArbitrary(),
          margin: getSpacingWithAutoAndArbitrary(),
          opacity: getNumber(),
          padding: getSpacingWithArbitrary(),
          saturate: getNumber(),
          scale: getNumber(),
          sepia: getZeroAndEmpty(),
          skew: getNumberAndArbitrary(),
          space: getSpacingWithArbitrary(),
          translate: getSpacingWithArbitrary()
        },
        classGroups: {
          // Layout
          /**
           * Aspect Ratio
           * @see https://tailwindcss.com/docs/aspect-ratio
           */
          aspect: [{
            aspect: ["auto", "square", "video", isArbitraryValue2]
          }],
          /**
           * Container
           * @see https://tailwindcss.com/docs/container
           */
          container: ["container"],
          /**
           * Columns
           * @see https://tailwindcss.com/docs/columns
           */
          columns: [{
            columns: [isTshirtSize2]
          }],
          /**
           * Break After
           * @see https://tailwindcss.com/docs/break-after
           */
          "break-after": [{
            "break-after": getBreaks()
          }],
          /**
           * Break Before
           * @see https://tailwindcss.com/docs/break-before
           */
          "break-before": [{
            "break-before": getBreaks()
          }],
          /**
           * Break Inside
           * @see https://tailwindcss.com/docs/break-inside
           */
          "break-inside": [{
            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
          }],
          /**
           * Box Decoration Break
           * @see https://tailwindcss.com/docs/box-decoration-break
           */
          "box-decoration": [{
            "box-decoration": ["slice", "clone"]
          }],
          /**
           * Box Sizing
           * @see https://tailwindcss.com/docs/box-sizing
           */
          box: [{
            box: ["border", "content"]
          }],
          /**
           * Display
           * @see https://tailwindcss.com/docs/display
           */
          display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
          /**
           * Floats
           * @see https://tailwindcss.com/docs/float
           */
          "float": [{
            "float": ["right", "left", "none"]
          }],
          /**
           * Clear
           * @see https://tailwindcss.com/docs/clear
           */
          clear: [{
            clear: ["left", "right", "both", "none"]
          }],
          /**
           * Isolation
           * @see https://tailwindcss.com/docs/isolation
           */
          isolation: ["isolate", "isolation-auto"],
          /**
           * Object Fit
           * @see https://tailwindcss.com/docs/object-fit
           */
          "object-fit": [{
            object: ["contain", "cover", "fill", "none", "scale-down"]
          }],
          /**
           * Object Position
           * @see https://tailwindcss.com/docs/object-position
           */
          "object-position": [{
            object: [].concat(getPositions(), [isArbitraryValue2])
          }],
          /**
           * Overflow
           * @see https://tailwindcss.com/docs/overflow
           */
          overflow: [{
            overflow: getOverflow()
          }],
          /**
           * Overflow X
           * @see https://tailwindcss.com/docs/overflow
           */
          "overflow-x": [{
            "overflow-x": getOverflow()
          }],
          /**
           * Overflow Y
           * @see https://tailwindcss.com/docs/overflow
           */
          "overflow-y": [{
            "overflow-y": getOverflow()
          }],
          /**
           * Overscroll Behavior
           * @see https://tailwindcss.com/docs/overscroll-behavior
           */
          overscroll: [{
            overscroll: getOverscroll()
          }],
          /**
           * Overscroll Behavior X
           * @see https://tailwindcss.com/docs/overscroll-behavior
           */
          "overscroll-x": [{
            "overscroll-x": getOverscroll()
          }],
          /**
           * Overscroll Behavior Y
           * @see https://tailwindcss.com/docs/overscroll-behavior
           */
          "overscroll-y": [{
            "overscroll-y": getOverscroll()
          }],
          /**
           * Position
           * @see https://tailwindcss.com/docs/position
           */
          position: ["static", "fixed", "absolute", "relative", "sticky"],
          /**
           * Top / Right / Bottom / Left
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          inset: [{
            inset: [inset]
          }],
          /**
           * Right / Left
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          "inset-x": [{
            "inset-x": [inset]
          }],
          /**
           * Top / Bottom
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          "inset-y": [{
            "inset-y": [inset]
          }],
          /**
           * Start
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          start: [{
            start: [inset]
          }],
          /**
           * End
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          end: [{
            end: [inset]
          }],
          /**
           * Top
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          top: [{
            top: [inset]
          }],
          /**
           * Right
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          right: [{
            right: [inset]
          }],
          /**
           * Bottom
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          bottom: [{
            bottom: [inset]
          }],
          /**
           * Left
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          left: [{
            left: [inset]
          }],
          /**
           * Visibility
           * @see https://tailwindcss.com/docs/visibility
           */
          visibility: ["visible", "invisible", "collapse"],
          /**
           * Z-Index
           * @see https://tailwindcss.com/docs/z-index
           */
          z: [{
            z: ["auto", isInteger2]
          }],
          // Flexbox and Grid
          /**
           * Flex Basis
           * @see https://tailwindcss.com/docs/flex-basis
           */
          basis: [{
            basis: getSpacingWithAutoAndArbitrary()
          }],
          /**
           * Flex Direction
           * @see https://tailwindcss.com/docs/flex-direction
           */
          "flex-direction": [{
            flex: ["row", "row-reverse", "col", "col-reverse"]
          }],
          /**
           * Flex Wrap
           * @see https://tailwindcss.com/docs/flex-wrap
           */
          "flex-wrap": [{
            flex: ["wrap", "wrap-reverse", "nowrap"]
          }],
          /**
           * Flex
           * @see https://tailwindcss.com/docs/flex
           */
          flex: [{
            flex: ["1", "auto", "initial", "none", isArbitraryValue2]
          }],
          /**
           * Flex Grow
           * @see https://tailwindcss.com/docs/flex-grow
           */
          grow: [{
            grow: getZeroAndEmpty()
          }],
          /**
           * Flex Shrink
           * @see https://tailwindcss.com/docs/flex-shrink
           */
          shrink: [{
            shrink: getZeroAndEmpty()
          }],
          /**
           * Order
           * @see https://tailwindcss.com/docs/order
           */
          order: [{
            order: ["first", "last", "none", isInteger2]
          }],
          /**
           * Grid Template Columns
           * @see https://tailwindcss.com/docs/grid-template-columns
           */
          "grid-cols": [{
            "grid-cols": [isAny2]
          }],
          /**
           * Grid Column Start / End
           * @see https://tailwindcss.com/docs/grid-column
           */
          "col-start-end": [{
            col: ["auto", {
              span: ["full", isInteger2]
            }, isArbitraryValue2]
          }],
          /**
           * Grid Column Start
           * @see https://tailwindcss.com/docs/grid-column
           */
          "col-start": [{
            "col-start": getNumberWithAutoAndArbitrary()
          }],
          /**
           * Grid Column End
           * @see https://tailwindcss.com/docs/grid-column
           */
          "col-end": [{
            "col-end": getNumberWithAutoAndArbitrary()
          }],
          /**
           * Grid Template Rows
           * @see https://tailwindcss.com/docs/grid-template-rows
           */
          "grid-rows": [{
            "grid-rows": [isAny2]
          }],
          /**
           * Grid Row Start / End
           * @see https://tailwindcss.com/docs/grid-row
           */
          "row-start-end": [{
            row: ["auto", {
              span: [isInteger2]
            }, isArbitraryValue2]
          }],
          /**
           * Grid Row Start
           * @see https://tailwindcss.com/docs/grid-row
           */
          "row-start": [{
            "row-start": getNumberWithAutoAndArbitrary()
          }],
          /**
           * Grid Row End
           * @see https://tailwindcss.com/docs/grid-row
           */
          "row-end": [{
            "row-end": getNumberWithAutoAndArbitrary()
          }],
          /**
           * Grid Auto Flow
           * @see https://tailwindcss.com/docs/grid-auto-flow
           */
          "grid-flow": [{
            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
          }],
          /**
           * Grid Auto Columns
           * @see https://tailwindcss.com/docs/grid-auto-columns
           */
          "auto-cols": [{
            "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue2]
          }],
          /**
           * Grid Auto Rows
           * @see https://tailwindcss.com/docs/grid-auto-rows
           */
          "auto-rows": [{
            "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue2]
          }],
          /**
           * Gap
           * @see https://tailwindcss.com/docs/gap
           */
          gap: [{
            gap: [gap]
          }],
          /**
           * Gap X
           * @see https://tailwindcss.com/docs/gap
           */
          "gap-x": [{
            "gap-x": [gap]
          }],
          /**
           * Gap Y
           * @see https://tailwindcss.com/docs/gap
           */
          "gap-y": [{
            "gap-y": [gap]
          }],
          /**
           * Justify Content
           * @see https://tailwindcss.com/docs/justify-content
           */
          "justify-content": [{
            justify: ["normal"].concat(getAlign())
          }],
          /**
           * Justify Items
           * @see https://tailwindcss.com/docs/justify-items
           */
          "justify-items": [{
            "justify-items": ["start", "end", "center", "stretch"]
          }],
          /**
           * Justify Self
           * @see https://tailwindcss.com/docs/justify-self
           */
          "justify-self": [{
            "justify-self": ["auto", "start", "end", "center", "stretch"]
          }],
          /**
           * Align Content
           * @see https://tailwindcss.com/docs/align-content
           */
          "align-content": [{
            content: ["normal"].concat(getAlign(), ["baseline"])
          }],
          /**
           * Align Items
           * @see https://tailwindcss.com/docs/align-items
           */
          "align-items": [{
            items: ["start", "end", "center", "baseline", "stretch"]
          }],
          /**
           * Align Self
           * @see https://tailwindcss.com/docs/align-self
           */
          "align-self": [{
            self: ["auto", "start", "end", "center", "stretch", "baseline"]
          }],
          /**
           * Place Content
           * @see https://tailwindcss.com/docs/place-content
           */
          "place-content": [{
            "place-content": [].concat(getAlign(), ["baseline"])
          }],
          /**
           * Place Items
           * @see https://tailwindcss.com/docs/place-items
           */
          "place-items": [{
            "place-items": ["start", "end", "center", "baseline", "stretch"]
          }],
          /**
           * Place Self
           * @see https://tailwindcss.com/docs/place-self
           */
          "place-self": [{
            "place-self": ["auto", "start", "end", "center", "stretch"]
          }],
          // Spacing
          /**
           * Padding
           * @see https://tailwindcss.com/docs/padding
           */
          p: [{
            p: [padding]
          }],
          /**
           * Padding X
           * @see https://tailwindcss.com/docs/padding
           */
          px: [{
            px: [padding]
          }],
          /**
           * Padding Y
           * @see https://tailwindcss.com/docs/padding
           */
          py: [{
            py: [padding]
          }],
          /**
           * Padding Start
           * @see https://tailwindcss.com/docs/padding
           */
          ps: [{
            ps: [padding]
          }],
          /**
           * Padding End
           * @see https://tailwindcss.com/docs/padding
           */
          pe: [{
            pe: [padding]
          }],
          /**
           * Padding Top
           * @see https://tailwindcss.com/docs/padding
           */
          pt: [{
            pt: [padding]
          }],
          /**
           * Padding Right
           * @see https://tailwindcss.com/docs/padding
           */
          pr: [{
            pr: [padding]
          }],
          /**
           * Padding Bottom
           * @see https://tailwindcss.com/docs/padding
           */
          pb: [{
            pb: [padding]
          }],
          /**
           * Padding Left
           * @see https://tailwindcss.com/docs/padding
           */
          pl: [{
            pl: [padding]
          }],
          /**
           * Margin
           * @see https://tailwindcss.com/docs/margin
           */
          m: [{
            m: [margin]
          }],
          /**
           * Margin X
           * @see https://tailwindcss.com/docs/margin
           */
          mx: [{
            mx: [margin]
          }],
          /**
           * Margin Y
           * @see https://tailwindcss.com/docs/margin
           */
          my: [{
            my: [margin]
          }],
          /**
           * Margin Start
           * @see https://tailwindcss.com/docs/margin
           */
          ms: [{
            ms: [margin]
          }],
          /**
           * Margin End
           * @see https://tailwindcss.com/docs/margin
           */
          me: [{
            me: [margin]
          }],
          /**
           * Margin Top
           * @see https://tailwindcss.com/docs/margin
           */
          mt: [{
            mt: [margin]
          }],
          /**
           * Margin Right
           * @see https://tailwindcss.com/docs/margin
           */
          mr: [{
            mr: [margin]
          }],
          /**
           * Margin Bottom
           * @see https://tailwindcss.com/docs/margin
           */
          mb: [{
            mb: [margin]
          }],
          /**
           * Margin Left
           * @see https://tailwindcss.com/docs/margin
           */
          ml: [{
            ml: [margin]
          }],
          /**
           * Space Between X
           * @see https://tailwindcss.com/docs/space
           */
          "space-x": [{
            "space-x": [space]
          }],
          /**
           * Space Between X Reverse
           * @see https://tailwindcss.com/docs/space
           */
          "space-x-reverse": ["space-x-reverse"],
          /**
           * Space Between Y
           * @see https://tailwindcss.com/docs/space
           */
          "space-y": [{
            "space-y": [space]
          }],
          /**
           * Space Between Y Reverse
           * @see https://tailwindcss.com/docs/space
           */
          "space-y-reverse": ["space-y-reverse"],
          // Sizing
          /**
           * Width
           * @see https://tailwindcss.com/docs/width
           */
          w: [{
            w: ["auto", "min", "max", "fit", isArbitraryValue2, spacing]
          }],
          /**
           * Min-Width
           * @see https://tailwindcss.com/docs/min-width
           */
          "min-w": [{
            "min-w": ["min", "max", "fit", isArbitraryValue2, isLength2]
          }],
          /**
           * Max-Width
           * @see https://tailwindcss.com/docs/max-width
           */
          "max-w": [{
            "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
              screen: [isTshirtSize2]
            }, isTshirtSize2, isArbitraryValue2]
          }],
          /**
           * Height
           * @see https://tailwindcss.com/docs/height
           */
          h: [{
            h: [isArbitraryValue2, spacing, "auto", "min", "max", "fit"]
          }],
          /**
           * Min-Height
           * @see https://tailwindcss.com/docs/min-height
           */
          "min-h": [{
            "min-h": ["min", "max", "fit", isArbitraryValue2, isLength2]
          }],
          /**
           * Max-Height
           * @see https://tailwindcss.com/docs/max-height
           */
          "max-h": [{
            "max-h": [isArbitraryValue2, spacing, "min", "max", "fit"]
          }],
          // Typography
          /**
           * Font Size
           * @see https://tailwindcss.com/docs/font-size
           */
          "font-size": [{
            text: ["base", isTshirtSize2, isArbitraryLength2]
          }],
          /**
           * Font Smoothing
           * @see https://tailwindcss.com/docs/font-smoothing
           */
          "font-smoothing": ["antialiased", "subpixel-antialiased"],
          /**
           * Font Style
           * @see https://tailwindcss.com/docs/font-style
           */
          "font-style": ["italic", "not-italic"],
          /**
           * Font Weight
           * @see https://tailwindcss.com/docs/font-weight
           */
          "font-weight": [{
            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber2]
          }],
          /**
           * Font Family
           * @see https://tailwindcss.com/docs/font-family
           */
          "font-family": [{
            font: [isAny2]
          }],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-normal": ["normal-nums"],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-ordinal": ["ordinal"],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-slashed-zero": ["slashed-zero"],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-figure": ["lining-nums", "oldstyle-nums"],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-spacing": ["proportional-nums", "tabular-nums"],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
          /**
           * Letter Spacing
           * @see https://tailwindcss.com/docs/letter-spacing
           */
          tracking: [{
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue2]
          }],
          /**
           * Line Clamp
           * @see https://tailwindcss.com/docs/line-clamp
           */
          "line-clamp": [{
            "line-clamp": ["none", isNumber2, isArbitraryNumber2]
          }],
          /**
           * Line Height
           * @see https://tailwindcss.com/docs/line-height
           */
          leading: [{
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isArbitraryValue2, isLength2]
          }],
          /**
           * List Style Image
           * @see https://tailwindcss.com/docs/list-style-image
           */
          "list-image": [{
            "list-image": ["none", isArbitraryValue2]
          }],
          /**
           * List Style Type
           * @see https://tailwindcss.com/docs/list-style-type
           */
          "list-style-type": [{
            list: ["none", "disc", "decimal", isArbitraryValue2]
          }],
          /**
           * List Style Position
           * @see https://tailwindcss.com/docs/list-style-position
           */
          "list-style-position": [{
            list: ["inside", "outside"]
          }],
          /**
           * Placeholder Color
           * @deprecated since Tailwind CSS v3.0.0
           * @see https://tailwindcss.com/docs/placeholder-color
           */
          "placeholder-color": [{
            placeholder: [colors]
          }],
          /**
           * Placeholder Opacity
           * @see https://tailwindcss.com/docs/placeholder-opacity
           */
          "placeholder-opacity": [{
            "placeholder-opacity": [opacity]
          }],
          /**
           * Text Alignment
           * @see https://tailwindcss.com/docs/text-align
           */
          "text-alignment": [{
            text: ["left", "center", "right", "justify", "start", "end"]
          }],
          /**
           * Text Color
           * @see https://tailwindcss.com/docs/text-color
           */
          "text-color": [{
            text: [colors]
          }],
          /**
           * Text Opacity
           * @see https://tailwindcss.com/docs/text-opacity
           */
          "text-opacity": [{
            "text-opacity": [opacity]
          }],
          /**
           * Text Decoration
           * @see https://tailwindcss.com/docs/text-decoration
           */
          "text-decoration": ["underline", "overline", "line-through", "no-underline"],
          /**
           * Text Decoration Style
           * @see https://tailwindcss.com/docs/text-decoration-style
           */
          "text-decoration-style": [{
            decoration: [].concat(getLineStyles(), ["wavy"])
          }],
          /**
           * Text Decoration Thickness
           * @see https://tailwindcss.com/docs/text-decoration-thickness
           */
          "text-decoration-thickness": [{
            decoration: ["auto", "from-font", isLength2]
          }],
          /**
           * Text Underline Offset
           * @see https://tailwindcss.com/docs/text-underline-offset
           */
          "underline-offset": [{
            "underline-offset": ["auto", isArbitraryValue2, isLength2]
          }],
          /**
           * Text Decoration Color
           * @see https://tailwindcss.com/docs/text-decoration-color
           */
          "text-decoration-color": [{
            decoration: [colors]
          }],
          /**
           * Text Transform
           * @see https://tailwindcss.com/docs/text-transform
           */
          "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
          /**
           * Text Overflow
           * @see https://tailwindcss.com/docs/text-overflow
           */
          "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
          /**
           * Text Indent
           * @see https://tailwindcss.com/docs/text-indent
           */
          indent: [{
            indent: getSpacingWithArbitrary()
          }],
          /**
           * Vertical Alignment
           * @see https://tailwindcss.com/docs/vertical-align
           */
          "vertical-align": [{
            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue2]
          }],
          /**
           * Whitespace
           * @see https://tailwindcss.com/docs/whitespace
           */
          whitespace: [{
            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
          }],
          /**
           * Word Break
           * @see https://tailwindcss.com/docs/word-break
           */
          "break": [{
            "break": ["normal", "words", "all", "keep"]
          }],
          /**
           * Hyphens
           * @see https://tailwindcss.com/docs/hyphens
           */
          hyphens: [{
            hyphens: ["none", "manual", "auto"]
          }],
          /**
           * Content
           * @see https://tailwindcss.com/docs/content
           */
          content: [{
            content: ["none", isArbitraryValue2]
          }],
          // Backgrounds
          /**
           * Background Attachment
           * @see https://tailwindcss.com/docs/background-attachment
           */
          "bg-attachment": [{
            bg: ["fixed", "local", "scroll"]
          }],
          /**
           * Background Clip
           * @see https://tailwindcss.com/docs/background-clip
           */
          "bg-clip": [{
            "bg-clip": ["border", "padding", "content", "text"]
          }],
          /**
           * Background Opacity
           * @deprecated since Tailwind CSS v3.0.0
           * @see https://tailwindcss.com/docs/background-opacity
           */
          "bg-opacity": [{
            "bg-opacity": [opacity]
          }],
          /**
           * Background Origin
           * @see https://tailwindcss.com/docs/background-origin
           */
          "bg-origin": [{
            "bg-origin": ["border", "padding", "content"]
          }],
          /**
           * Background Position
           * @see https://tailwindcss.com/docs/background-position
           */
          "bg-position": [{
            bg: [].concat(getPositions(), [isArbitraryPosition2])
          }],
          /**
           * Background Repeat
           * @see https://tailwindcss.com/docs/background-repeat
           */
          "bg-repeat": [{
            bg: ["no-repeat", {
              repeat: ["", "x", "y", "round", "space"]
            }]
          }],
          /**
           * Background Size
           * @see https://tailwindcss.com/docs/background-size
           */
          "bg-size": [{
            bg: ["auto", "cover", "contain", isArbitrarySize2]
          }],
          /**
           * Background Image
           * @see https://tailwindcss.com/docs/background-image
           */
          "bg-image": [{
            bg: ["none", {
              "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
            }, isArbitraryUrl2]
          }],
          /**
           * Background Color
           * @see https://tailwindcss.com/docs/background-color
           */
          "bg-color": [{
            bg: [colors]
          }],
          /**
           * Gradient Color Stops From Position
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-from-pos": [{
            from: [gradientColorStopPositions]
          }],
          /**
           * Gradient Color Stops Via Position
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-via-pos": [{
            via: [gradientColorStopPositions]
          }],
          /**
           * Gradient Color Stops To Position
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-to-pos": [{
            to: [gradientColorStopPositions]
          }],
          /**
           * Gradient Color Stops From
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-from": [{
            from: [gradientColorStops]
          }],
          /**
           * Gradient Color Stops Via
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-via": [{
            via: [gradientColorStops]
          }],
          /**
           * Gradient Color Stops To
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-to": [{
            to: [gradientColorStops]
          }],
          // Borders
          /**
           * Border Radius
           * @see https://tailwindcss.com/docs/border-radius
           */
          rounded: [{
            rounded: [borderRadius]
          }],
          /**
           * Border Radius Start
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-s": [{
            "rounded-s": [borderRadius]
          }],
          /**
           * Border Radius End
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-e": [{
            "rounded-e": [borderRadius]
          }],
          /**
           * Border Radius Top
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-t": [{
            "rounded-t": [borderRadius]
          }],
          /**
           * Border Radius Right
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-r": [{
            "rounded-r": [borderRadius]
          }],
          /**
           * Border Radius Bottom
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-b": [{
            "rounded-b": [borderRadius]
          }],
          /**
           * Border Radius Left
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-l": [{
            "rounded-l": [borderRadius]
          }],
          /**
           * Border Radius Start Start
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-ss": [{
            "rounded-ss": [borderRadius]
          }],
          /**
           * Border Radius Start End
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-se": [{
            "rounded-se": [borderRadius]
          }],
          /**
           * Border Radius End End
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-ee": [{
            "rounded-ee": [borderRadius]
          }],
          /**
           * Border Radius End Start
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-es": [{
            "rounded-es": [borderRadius]
          }],
          /**
           * Border Radius Top Left
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-tl": [{
            "rounded-tl": [borderRadius]
          }],
          /**
           * Border Radius Top Right
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-tr": [{
            "rounded-tr": [borderRadius]
          }],
          /**
           * Border Radius Bottom Right
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-br": [{
            "rounded-br": [borderRadius]
          }],
          /**
           * Border Radius Bottom Left
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-bl": [{
            "rounded-bl": [borderRadius]
          }],
          /**
           * Border Width
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w": [{
            border: [borderWidth]
          }],
          /**
           * Border Width X
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-x": [{
            "border-x": [borderWidth]
          }],
          /**
           * Border Width Y
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-y": [{
            "border-y": [borderWidth]
          }],
          /**
           * Border Width Start
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-s": [{
            "border-s": [borderWidth]
          }],
          /**
           * Border Width End
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-e": [{
            "border-e": [borderWidth]
          }],
          /**
           * Border Width Top
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-t": [{
            "border-t": [borderWidth]
          }],
          /**
           * Border Width Right
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-r": [{
            "border-r": [borderWidth]
          }],
          /**
           * Border Width Bottom
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-b": [{
            "border-b": [borderWidth]
          }],
          /**
           * Border Width Left
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-l": [{
            "border-l": [borderWidth]
          }],
          /**
           * Border Opacity
           * @see https://tailwindcss.com/docs/border-opacity
           */
          "border-opacity": [{
            "border-opacity": [opacity]
          }],
          /**
           * Border Style
           * @see https://tailwindcss.com/docs/border-style
           */
          "border-style": [{
            border: [].concat(getLineStyles(), ["hidden"])
          }],
          /**
           * Divide Width X
           * @see https://tailwindcss.com/docs/divide-width
           */
          "divide-x": [{
            "divide-x": [borderWidth]
          }],
          /**
           * Divide Width X Reverse
           * @see https://tailwindcss.com/docs/divide-width
           */
          "divide-x-reverse": ["divide-x-reverse"],
          /**
           * Divide Width Y
           * @see https://tailwindcss.com/docs/divide-width
           */
          "divide-y": [{
            "divide-y": [borderWidth]
          }],
          /**
           * Divide Width Y Reverse
           * @see https://tailwindcss.com/docs/divide-width
           */
          "divide-y-reverse": ["divide-y-reverse"],
          /**
           * Divide Opacity
           * @see https://tailwindcss.com/docs/divide-opacity
           */
          "divide-opacity": [{
            "divide-opacity": [opacity]
          }],
          /**
           * Divide Style
           * @see https://tailwindcss.com/docs/divide-style
           */
          "divide-style": [{
            divide: getLineStyles()
          }],
          /**
           * Border Color
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color": [{
            border: [borderColor]
          }],
          /**
           * Border Color X
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-x": [{
            "border-x": [borderColor]
          }],
          /**
           * Border Color Y
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-y": [{
            "border-y": [borderColor]
          }],
          /**
           * Border Color Top
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-t": [{
            "border-t": [borderColor]
          }],
          /**
           * Border Color Right
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-r": [{
            "border-r": [borderColor]
          }],
          /**
           * Border Color Bottom
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-b": [{
            "border-b": [borderColor]
          }],
          /**
           * Border Color Left
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-l": [{
            "border-l": [borderColor]
          }],
          /**
           * Divide Color
           * @see https://tailwindcss.com/docs/divide-color
           */
          "divide-color": [{
            divide: [borderColor]
          }],
          /**
           * Outline Style
           * @see https://tailwindcss.com/docs/outline-style
           */
          "outline-style": [{
            outline: [""].concat(getLineStyles())
          }],
          /**
           * Outline Offset
           * @see https://tailwindcss.com/docs/outline-offset
           */
          "outline-offset": [{
            "outline-offset": [isArbitraryValue2, isLength2]
          }],
          /**
           * Outline Width
           * @see https://tailwindcss.com/docs/outline-width
           */
          "outline-w": [{
            outline: [isLength2]
          }],
          /**
           * Outline Color
           * @see https://tailwindcss.com/docs/outline-color
           */
          "outline-color": [{
            outline: [colors]
          }],
          /**
           * Ring Width
           * @see https://tailwindcss.com/docs/ring-width
           */
          "ring-w": [{
            ring: getLengthWithEmpty()
          }],
          /**
           * Ring Width Inset
           * @see https://tailwindcss.com/docs/ring-width
           */
          "ring-w-inset": ["ring-inset"],
          /**
           * Ring Color
           * @see https://tailwindcss.com/docs/ring-color
           */
          "ring-color": [{
            ring: [colors]
          }],
          /**
           * Ring Opacity
           * @see https://tailwindcss.com/docs/ring-opacity
           */
          "ring-opacity": [{
            "ring-opacity": [opacity]
          }],
          /**
           * Ring Offset Width
           * @see https://tailwindcss.com/docs/ring-offset-width
           */
          "ring-offset-w": [{
            "ring-offset": [isLength2]
          }],
          /**
           * Ring Offset Color
           * @see https://tailwindcss.com/docs/ring-offset-color
           */
          "ring-offset-color": [{
            "ring-offset": [colors]
          }],
          // Effects
          /**
           * Box Shadow
           * @see https://tailwindcss.com/docs/box-shadow
           */
          shadow: [{
            shadow: ["", "inner", "none", isTshirtSize2, isArbitraryShadow2]
          }],
          /**
           * Box Shadow Color
           * @see https://tailwindcss.com/docs/box-shadow-color
           */
          "shadow-color": [{
            shadow: [isAny2]
          }],
          /**
           * Opacity
           * @see https://tailwindcss.com/docs/opacity
           */
          opacity: [{
            opacity: [opacity]
          }],
          /**
           * Mix Blend Mode
           * @see https://tailwindcss.com/docs/mix-blend-mode
           */
          "mix-blend": [{
            "mix-blend": getBlendModes()
          }],
          /**
           * Background Blend Mode
           * @see https://tailwindcss.com/docs/background-blend-mode
           */
          "bg-blend": [{
            "bg-blend": getBlendModes()
          }],
          // Filters
          /**
           * Filter
           * @deprecated since Tailwind CSS v3.0.0
           * @see https://tailwindcss.com/docs/filter
           */
          filter: [{
            filter: ["", "none"]
          }],
          /**
           * Blur
           * @see https://tailwindcss.com/docs/blur
           */
          blur: [{
            blur: [blur]
          }],
          /**
           * Brightness
           * @see https://tailwindcss.com/docs/brightness
           */
          brightness: [{
            brightness: [brightness]
          }],
          /**
           * Contrast
           * @see https://tailwindcss.com/docs/contrast
           */
          contrast: [{
            contrast: [contrast]
          }],
          /**
           * Drop Shadow
           * @see https://tailwindcss.com/docs/drop-shadow
           */
          "drop-shadow": [{
            "drop-shadow": ["", "none", isTshirtSize2, isArbitraryValue2]
          }],
          /**
           * Grayscale
           * @see https://tailwindcss.com/docs/grayscale
           */
          grayscale: [{
            grayscale: [grayscale]
          }],
          /**
           * Hue Rotate
           * @see https://tailwindcss.com/docs/hue-rotate
           */
          "hue-rotate": [{
            "hue-rotate": [hueRotate]
          }],
          /**
           * Invert
           * @see https://tailwindcss.com/docs/invert
           */
          invert: [{
            invert: [invert]
          }],
          /**
           * Saturate
           * @see https://tailwindcss.com/docs/saturate
           */
          saturate: [{
            saturate: [saturate]
          }],
          /**
           * Sepia
           * @see https://tailwindcss.com/docs/sepia
           */
          sepia: [{
            sepia: [sepia]
          }],
          /**
           * Backdrop Filter
           * @deprecated since Tailwind CSS v3.0.0
           * @see https://tailwindcss.com/docs/backdrop-filter
           */
          "backdrop-filter": [{
            "backdrop-filter": ["", "none"]
          }],
          /**
           * Backdrop Blur
           * @see https://tailwindcss.com/docs/backdrop-blur
           */
          "backdrop-blur": [{
            "backdrop-blur": [blur]
          }],
          /**
           * Backdrop Brightness
           * @see https://tailwindcss.com/docs/backdrop-brightness
           */
          "backdrop-brightness": [{
            "backdrop-brightness": [brightness]
          }],
          /**
           * Backdrop Contrast
           * @see https://tailwindcss.com/docs/backdrop-contrast
           */
          "backdrop-contrast": [{
            "backdrop-contrast": [contrast]
          }],
          /**
           * Backdrop Grayscale
           * @see https://tailwindcss.com/docs/backdrop-grayscale
           */
          "backdrop-grayscale": [{
            "backdrop-grayscale": [grayscale]
          }],
          /**
           * Backdrop Hue Rotate
           * @see https://tailwindcss.com/docs/backdrop-hue-rotate
           */
          "backdrop-hue-rotate": [{
            "backdrop-hue-rotate": [hueRotate]
          }],
          /**
           * Backdrop Invert
           * @see https://tailwindcss.com/docs/backdrop-invert
           */
          "backdrop-invert": [{
            "backdrop-invert": [invert]
          }],
          /**
           * Backdrop Opacity
           * @see https://tailwindcss.com/docs/backdrop-opacity
           */
          "backdrop-opacity": [{
            "backdrop-opacity": [opacity]
          }],
          /**
           * Backdrop Saturate
           * @see https://tailwindcss.com/docs/backdrop-saturate
           */
          "backdrop-saturate": [{
            "backdrop-saturate": [saturate]
          }],
          /**
           * Backdrop Sepia
           * @see https://tailwindcss.com/docs/backdrop-sepia
           */
          "backdrop-sepia": [{
            "backdrop-sepia": [sepia]
          }],
          // Tables
          /**
           * Border Collapse
           * @see https://tailwindcss.com/docs/border-collapse
           */
          "border-collapse": [{
            border: ["collapse", "separate"]
          }],
          /**
           * Border Spacing
           * @see https://tailwindcss.com/docs/border-spacing
           */
          "border-spacing": [{
            "border-spacing": [borderSpacing]
          }],
          /**
           * Border Spacing X
           * @see https://tailwindcss.com/docs/border-spacing
           */
          "border-spacing-x": [{
            "border-spacing-x": [borderSpacing]
          }],
          /**
           * Border Spacing Y
           * @see https://tailwindcss.com/docs/border-spacing
           */
          "border-spacing-y": [{
            "border-spacing-y": [borderSpacing]
          }],
          /**
           * Table Layout
           * @see https://tailwindcss.com/docs/table-layout
           */
          "table-layout": [{
            table: ["auto", "fixed"]
          }],
          /**
           * Caption Side
           * @see https://tailwindcss.com/docs/caption-side
           */
          caption: [{
            caption: ["top", "bottom"]
          }],
          // Transitions and Animation
          /**
           * Tranisition Property
           * @see https://tailwindcss.com/docs/transition-property
           */
          transition: [{
            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue2]
          }],
          /**
           * Transition Duration
           * @see https://tailwindcss.com/docs/transition-duration
           */
          duration: [{
            duration: getNumberAndArbitrary()
          }],
          /**
           * Transition Timing Function
           * @see https://tailwindcss.com/docs/transition-timing-function
           */
          ease: [{
            ease: ["linear", "in", "out", "in-out", isArbitraryValue2]
          }],
          /**
           * Transition Delay
           * @see https://tailwindcss.com/docs/transition-delay
           */
          delay: [{
            delay: getNumberAndArbitrary()
          }],
          /**
           * Animation
           * @see https://tailwindcss.com/docs/animation
           */
          animate: [{
            animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue2]
          }],
          // Transforms
          /**
           * Transform
           * @see https://tailwindcss.com/docs/transform
           */
          transform: [{
            transform: ["", "gpu", "none"]
          }],
          /**
           * Scale
           * @see https://tailwindcss.com/docs/scale
           */
          scale: [{
            scale: [scale]
          }],
          /**
           * Scale X
           * @see https://tailwindcss.com/docs/scale
           */
          "scale-x": [{
            "scale-x": [scale]
          }],
          /**
           * Scale Y
           * @see https://tailwindcss.com/docs/scale
           */
          "scale-y": [{
            "scale-y": [scale]
          }],
          /**
           * Rotate
           * @see https://tailwindcss.com/docs/rotate
           */
          rotate: [{
            rotate: [isInteger2, isArbitraryValue2]
          }],
          /**
           * Translate X
           * @see https://tailwindcss.com/docs/translate
           */
          "translate-x": [{
            "translate-x": [translate]
          }],
          /**
           * Translate Y
           * @see https://tailwindcss.com/docs/translate
           */
          "translate-y": [{
            "translate-y": [translate]
          }],
          /**
           * Skew X
           * @see https://tailwindcss.com/docs/skew
           */
          "skew-x": [{
            "skew-x": [skew]
          }],
          /**
           * Skew Y
           * @see https://tailwindcss.com/docs/skew
           */
          "skew-y": [{
            "skew-y": [skew]
          }],
          /**
           * Transform Origin
           * @see https://tailwindcss.com/docs/transform-origin
           */
          "transform-origin": [{
            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue2]
          }],
          // Interactivity
          /**
           * Accent Color
           * @see https://tailwindcss.com/docs/accent-color
           */
          accent: [{
            accent: ["auto", colors]
          }],
          /**
           * Appearance
           * @see https://tailwindcss.com/docs/appearance
           */
          appearance: ["appearance-none"],
          /**
           * Cursor
           * @see https://tailwindcss.com/docs/cursor
           */
          cursor: [{
            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue2]
          }],
          /**
           * Caret Color
           * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
           */
          "caret-color": [{
            caret: [colors]
          }],
          /**
           * Pointer Events
           * @see https://tailwindcss.com/docs/pointer-events
           */
          "pointer-events": [{
            "pointer-events": ["none", "auto"]
          }],
          /**
           * Resize
           * @see https://tailwindcss.com/docs/resize
           */
          resize: [{
            resize: ["none", "y", "x", ""]
          }],
          /**
           * Scroll Behavior
           * @see https://tailwindcss.com/docs/scroll-behavior
           */
          "scroll-behavior": [{
            scroll: ["auto", "smooth"]
          }],
          /**
           * Scroll Margin
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-m": [{
            "scroll-m": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin X
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-mx": [{
            "scroll-mx": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin Y
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-my": [{
            "scroll-my": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin Start
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-ms": [{
            "scroll-ms": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin End
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-me": [{
            "scroll-me": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin Top
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-mt": [{
            "scroll-mt": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin Right
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-mr": [{
            "scroll-mr": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin Bottom
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-mb": [{
            "scroll-mb": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin Left
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-ml": [{
            "scroll-ml": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-p": [{
            "scroll-p": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding X
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-px": [{
            "scroll-px": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding Y
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-py": [{
            "scroll-py": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding Start
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-ps": [{
            "scroll-ps": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding End
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-pe": [{
            "scroll-pe": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding Top
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-pt": [{
            "scroll-pt": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding Right
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-pr": [{
            "scroll-pr": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding Bottom
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-pb": [{
            "scroll-pb": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding Left
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-pl": [{
            "scroll-pl": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Snap Align
           * @see https://tailwindcss.com/docs/scroll-snap-align
           */
          "snap-align": [{
            snap: ["start", "end", "center", "align-none"]
          }],
          /**
           * Scroll Snap Stop
           * @see https://tailwindcss.com/docs/scroll-snap-stop
           */
          "snap-stop": [{
            snap: ["normal", "always"]
          }],
          /**
           * Scroll Snap Type
           * @see https://tailwindcss.com/docs/scroll-snap-type
           */
          "snap-type": [{
            snap: ["none", "x", "y", "both"]
          }],
          /**
           * Scroll Snap Type Strictness
           * @see https://tailwindcss.com/docs/scroll-snap-type
           */
          "snap-strictness": [{
            snap: ["mandatory", "proximity"]
          }],
          /**
           * Touch Action
           * @see https://tailwindcss.com/docs/touch-action
           */
          touch: [{
            touch: ["auto", "none", "pinch-zoom", "manipulation", {
              pan: ["x", "left", "right", "y", "up", "down"]
            }]
          }],
          /**
           * User Select
           * @see https://tailwindcss.com/docs/user-select
           */
          select: [{
            select: ["none", "text", "all", "auto"]
          }],
          /**
           * Will Change
           * @see https://tailwindcss.com/docs/will-change
           */
          "will-change": [{
            "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue2]
          }],
          // SVG
          /**
           * Fill
           * @see https://tailwindcss.com/docs/fill
           */
          fill: [{
            fill: [colors, "none"]
          }],
          /**
           * Stroke Width
           * @see https://tailwindcss.com/docs/stroke-width
           */
          "stroke-w": [{
            stroke: [isLength2, isArbitraryNumber2]
          }],
          /**
           * Stroke
           * @see https://tailwindcss.com/docs/stroke
           */
          stroke: [{
            stroke: [colors, "none"]
          }],
          // Accessibility
          /**
           * Screen Readers
           * @see https://tailwindcss.com/docs/screen-readers
           */
          sr: ["sr-only", "not-sr-only"]
        },
        conflictingClassGroups: {
          overflow: ["overflow-x", "overflow-y"],
          overscroll: ["overscroll-x", "overscroll-y"],
          inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
          "inset-x": ["right", "left"],
          "inset-y": ["top", "bottom"],
          flex: ["basis", "grow", "shrink"],
          gap: ["gap-x", "gap-y"],
          p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
          px: ["pr", "pl"],
          py: ["pt", "pb"],
          m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
          mx: ["mr", "ml"],
          my: ["mt", "mb"],
          "font-size": ["leading"],
          "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
          "fvn-ordinal": ["fvn-normal"],
          "fvn-slashed-zero": ["fvn-normal"],
          "fvn-figure": ["fvn-normal"],
          "fvn-spacing": ["fvn-normal"],
          "fvn-fraction": ["fvn-normal"],
          rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
          "rounded-s": ["rounded-ss", "rounded-es"],
          "rounded-e": ["rounded-se", "rounded-ee"],
          "rounded-t": ["rounded-tl", "rounded-tr"],
          "rounded-r": ["rounded-tr", "rounded-br"],
          "rounded-b": ["rounded-br", "rounded-bl"],
          "rounded-l": ["rounded-tl", "rounded-bl"],
          "border-spacing": ["border-spacing-x", "border-spacing-y"],
          "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
          "border-w-x": ["border-w-r", "border-w-l"],
          "border-w-y": ["border-w-t", "border-w-b"],
          "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
          "border-color-x": ["border-color-r", "border-color-l"],
          "border-color-y": ["border-color-t", "border-color-b"],
          "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
          "scroll-mx": ["scroll-mr", "scroll-ml"],
          "scroll-my": ["scroll-mt", "scroll-mb"],
          "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
          "scroll-px": ["scroll-pr", "scroll-pl"],
          "scroll-py": ["scroll-pt", "scroll-pb"]
        },
        conflictingClassGroupModifiers: {
          "font-size": ["leading"]
        }
      };
    }
    var twMerge2 = /* @__PURE__ */ createTailwindMerge2(getDefaultConfig2);
    function cn2(...inputs) {
      return twMerge2(inputs);
    }
    var import_react = require("react");
    var import_react2 = require("react");
    var import_react3 = require("react");
    var import_jsx_runtime2 = require("react/jsx-runtime");
    var linkVariants = cva(
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      {
        variants: {
          theme: {
            default: "decoration-gray-40 hover:decoration-gray-100 text-gray-90 hover:text-gray-100 disabled:text-gray-30",
            sky: "",
            brand: "decoration-brand-20 hover:decoration-brand-100 text-brand-80 hover:text-brand-100 disabled:text-gray-30",
            error: "",
            success: "",
            white: "decoration-gray-5 hover:decoration-gray-5 focus:decoration-gray-5 active:decoration-gray-5 text-gray-10 hover:text-gray-5 focus:text-gray-5 active:text-gray-5"
          },
          variant: {
            always: "underline decoration-1 underline-offset-4",
            none: "no-underline",
            hover: "transition hover:ease-in hover:underline decoration-1 underline-offset-4"
          },
          size: {
            l: "text-[16px]",
            m: "text-[14px]",
            s: "text-[12px]"
          }
        },
        defaultVariants: {
          theme: "default",
          variant: "always",
          size: "m"
        }
      }
    );
    var Link2 = React.forwardRef(
      (_a, ref) => {
        var _b = _a, { className, theme, variant, size, href, children } = _b, props = __objRest2(_b, ["className", "theme", "variant", "size", "href", "children"]);
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_link2.default,
          __spreadProps2(__spreadValues2({
            href,
            className: cn2(linkVariants({ theme, variant, size, className })),
            ref
          }, props), {
            children
          })
        );
      }
    );
    Link2.displayName = "Link";
  }
});

// ../pkg.icons/node_modules/clsx/dist/clsx.js
var require_clsx = __commonJS({
  "../pkg.icons/node_modules/clsx/dist/clsx.js"(exports2, module2) {
    "use strict";
    function e(r2) {
      var o, t, f = "";
      if ("string" == typeof r2 || "number" == typeof r2) f += r2;
      else if ("object" == typeof r2) if (Array.isArray(r2)) for (o = 0; o < r2.length; o++) r2[o] && (t = e(r2[o])) && (f && (f += " "), f += t);
      else for (o in r2) r2[o] && (f && (f += " "), f += o);
      return f;
    }
    function r() {
      for (var r2, o, t = 0, f = ""; t < arguments.length; ) (r2 = arguments[t++]) && (o = e(r2)) && (f && (f += " "), f += o);
      return f;
    }
    module2.exports = r, module2.exports.clsx = r;
  }
});

// ../pkg.icons/node_modules/class-variance-authority/dist/index.js
var require_dist2 = __commonJS({
  "../pkg.icons/node_modules/class-variance-authority/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.cva = exports2.cx = void 0;
    var _clsx = require_clsx();
    var falsyToString = (value) => typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
    var cx = _clsx.clsx;
    exports2.cx = cx;
    var cva = (base, config) => {
      return (props) => {
        var ref;
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
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (ref = config.compoundVariants) === null || ref === void 0 ? void 0 : ref.reduce((acc, param1) => {
          let _a = param1, { class: cvClass, className: cvClassName } = _a, compoundVariantOptions = __objRest(_a, ["class", "className"]);
          return Object.entries(compoundVariantOptions).every((param) => {
            let [key, value] = param;
            return Array.isArray(value) ? value.includes(__spreadValues(__spreadValues({}, defaultVariants), propsWithoutUndefined)[key]) : __spreadValues(__spreadValues({}, defaultVariants), propsWithoutUndefined)[key] === value;
          }) ? [
            ...acc,
            cvClass,
            cvClassName
          ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
      };
    };
    exports2.cva = cva;
  }
});

// ../../node_modules/tailwind-merge/dist/lib/tw-join.mjs
function twJoin() {
  var index = 0;
  var argument;
  var resolvedValue;
  var string = "";
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
function toValue(mix) {
  if (typeof mix === "string") {
    return mix;
  }
  var resolvedValue;
  var string = "";
  for (var k2 = 0; k2 < mix.length; k2++) {
    if (mix[k2]) {
      if (resolvedValue = toValue(mix[k2])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
var init_tw_join = __esm({
  "../../node_modules/tailwind-merge/dist/lib/tw-join.mjs"() {
    "use strict";
  }
});

// ../../node_modules/tailwind-merge/dist/lib/class-utils.mjs
function createClassUtils(config) {
  var classMap = createClassMap(config);
  var conflictingClassGroups = config.conflictingClassGroups, _config$conflictingCl = config.conflictingClassGroupModifiers, conflictingClassGroupModifiers = _config$conflictingCl === void 0 ? {} : _config$conflictingCl;
  function getClassGroupId(className) {
    var classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }
  function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
    var conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [].concat(conflicts, conflictingClassGroupModifiers[classGroupId]);
    }
    return conflicts;
  }
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
}
function getGroupRecursive(classParts, classPartObject) {
  var _a;
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  var currentClassPart = classParts[0];
  var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  var classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  var classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_a = classPartObject.validators.find(function(_ref) {
    var validator = _ref.validator;
    return validator(classRest);
  })) == null ? void 0 : _a.classGroupId;
}
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    var arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    var property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
}
function createClassMap(config) {
  var theme = config.theme, prefix = config.prefix;
  var classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  var prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(function(_ref2) {
    var classGroupId = _ref2[0], classGroup = _ref2[1];
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
  classGroup.forEach(function(classDefinition) {
    if (typeof classDefinition === "string") {
      var classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(function(_ref3) {
      var key = _ref3[0], classGroup2 = _ref3[1];
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}
function getPart(classPartObject, path) {
  var currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(function(pathPart) {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}
function isThemeGetter(func) {
  return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(function(_ref4) {
    var classGroupId = _ref4[0], classGroup = _ref4[1];
    var prefixedClassGroup = classGroup.map(function(classDefinition) {
      if (typeof classDefinition === "string") {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === "object") {
        return Object.fromEntries(Object.entries(classDefinition).map(function(_ref5) {
          var key = _ref5[0], value = _ref5[1];
          return [prefix + key, value];
        }));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}
var CLASS_PART_SEPARATOR, arbitraryPropertyRegex;
var init_class_utils = __esm({
  "../../node_modules/tailwind-merge/dist/lib/class-utils.mjs"() {
    "use strict";
    CLASS_PART_SEPARATOR = "-";
    arbitraryPropertyRegex = /^\[(.+)\]$/;
  }
});

// ../../node_modules/tailwind-merge/dist/lib/lru-cache.mjs
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: function get() {
        return void 0;
      },
      set: function set() {
      }
    };
  }
  var cacheSize = 0;
  var cache = /* @__PURE__ */ new Map();
  var previousCache = /* @__PURE__ */ new Map();
  function update(key, value) {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ new Map();
    }
  }
  return {
    get: function get(key) {
      var value = cache.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set: function set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}
var init_lru_cache = __esm({
  "../../node_modules/tailwind-merge/dist/lib/lru-cache.mjs"() {
    "use strict";
  }
});

// ../../node_modules/tailwind-merge/dist/lib/modifier-utils.mjs
function createSplitModifiers(config) {
  var separator = config.separator || ":";
  var isSeparatorSingleCharacter = separator.length === 1;
  var firstSeparatorCharacter = separator[0];
  var separatorLength = separator.length;
  return function splitModifiers(className) {
    var modifiers = [];
    var bracketDepth = 0;
    var modifierStart = 0;
    var postfixModifierPosition;
    for (var index = 0; index < className.length; index++) {
      var currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      }
    }
    var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    var hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    var baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    var maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
}
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  var sortedModifiers = [];
  var unsortedModifiers = [];
  modifiers.forEach(function(modifier) {
    var isArbitraryVariant = modifier[0] === "[";
    if (isArbitraryVariant) {
      sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort().concat([modifier]));
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort());
  return sortedModifiers;
}
var IMPORTANT_MODIFIER;
var init_modifier_utils = __esm({
  "../../node_modules/tailwind-merge/dist/lib/modifier-utils.mjs"() {
    "use strict";
    IMPORTANT_MODIFIER = "!";
  }
});

// ../../node_modules/tailwind-merge/dist/lib/config-utils.mjs
function createConfigUtils(config) {
  return __spreadValues({
    cache: createLruCache(config.cacheSize),
    splitModifiers: createSplitModifiers(config)
  }, createClassUtils(config));
}
var init_config_utils = __esm({
  "../../node_modules/tailwind-merge/dist/lib/config-utils.mjs"() {
    "use strict";
    init_class_utils();
    init_lru_cache();
    init_modifier_utils();
  }
});

// ../../node_modules/tailwind-merge/dist/lib/merge-classlist.mjs
function mergeClassList(classList, configUtils) {
  var splitModifiers = configUtils.splitModifiers, getClassGroupId = configUtils.getClassGroupId, getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds;
  var classGroupsInConflict = /* @__PURE__ */ new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map(function(originalClassName) {
    var _splitModifiers = splitModifiers(originalClassName), modifiers = _splitModifiers.modifiers, hasImportantModifier = _splitModifiers.hasImportantModifier, baseClassName = _splitModifiers.baseClassName, maybePostfixModifierPosition = _splitModifiers.maybePostfixModifierPosition;
    var classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    var hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    if (!classGroupId) {
      if (!maybePostfixModifierPosition) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      hasPostfixModifier = false;
    }
    var variantModifier = sortModifiers(modifiers).join(":");
    var modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId,
      classGroupId,
      originalClassName,
      hasPostfixModifier
    };
  }).reverse().filter(function(parsed) {
    if (!parsed.isTailwindClass) {
      return true;
    }
    var modifierId = parsed.modifierId, classGroupId = parsed.classGroupId, hasPostfixModifier = parsed.hasPostfixModifier;
    var classId = modifierId + classGroupId;
    if (classGroupsInConflict.has(classId)) {
      return false;
    }
    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach(function(group) {
      return classGroupsInConflict.add(modifierId + group);
    });
    return true;
  }).reverse().map(function(parsed) {
    return parsed.originalClassName;
  }).join(" ");
}
var SPLIT_CLASSES_REGEX;
var init_merge_classlist = __esm({
  "../../node_modules/tailwind-merge/dist/lib/merge-classlist.mjs"() {
    "use strict";
    init_modifier_utils();
    SPLIT_CLASSES_REGEX = /\s+/;
  }
});

// ../../node_modules/tailwind-merge/dist/lib/create-tailwind-merge.mjs
function createTailwindMerge() {
  for (var _len = arguments.length, createConfig = new Array(_len), _key = 0; _key < _len; _key++) {
    createConfig[_key] = arguments[_key];
  }
  var configUtils;
  var cacheGet;
  var cacheSet;
  var functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    var firstCreateConfig = createConfig[0], restCreateConfig = createConfig.slice(1);
    var config = restCreateConfig.reduce(function(previousConfig, createConfigCurrent) {
      return createConfigCurrent(previousConfig);
    }, firstCreateConfig());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    var cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    var result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
var init_create_tailwind_merge = __esm({
  "../../node_modules/tailwind-merge/dist/lib/create-tailwind-merge.mjs"() {
    "use strict";
    init_config_utils();
    init_merge_classlist();
    init_tw_join();
  }
});

// ../../node_modules/tailwind-merge/dist/lib/from-theme.mjs
function fromTheme(key) {
  var themeGetter = function themeGetter2(theme) {
    return theme[key] || [];
  };
  themeGetter.isThemeGetter = true;
  return themeGetter;
}
var init_from_theme = __esm({
  "../../node_modules/tailwind-merge/dist/lib/from-theme.mjs"() {
    "use strict";
  }
});

// ../../node_modules/tailwind-merge/dist/lib/validators.mjs
function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value) || isArbitraryLength(value);
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, "length", isLengthOnly);
}
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, "size", isNever);
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, "position", isNever);
}
function isArbitraryUrl(value) {
  return getIsArbitraryValue(value, "url", isUrl);
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, "number", isNumber);
}
function isNumber(value) {
  return !Number.isNaN(Number(value));
}
function isPercent(value) {
  return value.endsWith("%") && isNumber(value.slice(0, -1));
}
function isInteger(value) {
  return isIntegerOnly(value) || getIsArbitraryValue(value, "number", isIntegerOnly);
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
function isAny() {
  return true;
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, "", isShadow);
}
function getIsArbitraryValue(value, label, testValue) {
  var result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return result[1] === label;
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  return lengthUnitRegex.test(value);
}
function isNever() {
  return false;
}
function isUrl(value) {
  return value.startsWith("url(");
}
function isIntegerOnly(value) {
  return Number.isInteger(Number(value));
}
function isShadow(value) {
  return shadowRegex.test(value);
}
var arbitraryValueRegex, fractionRegex, stringLengths, tshirtUnitRegex, lengthUnitRegex, shadowRegex;
var init_validators = __esm({
  "../../node_modules/tailwind-merge/dist/lib/validators.mjs"() {
    "use strict";
    arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
    fractionRegex = /^\d+\/\d+$/;
    stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
    tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
    lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
    shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  }
});

// ../../node_modules/tailwind-merge/dist/lib/default-config.mjs
function getDefaultConfig() {
  var colors = fromTheme("colors");
  var spacing = fromTheme("spacing");
  var blur = fromTheme("blur");
  var brightness = fromTheme("brightness");
  var borderColor = fromTheme("borderColor");
  var borderRadius = fromTheme("borderRadius");
  var borderSpacing = fromTheme("borderSpacing");
  var borderWidth = fromTheme("borderWidth");
  var contrast = fromTheme("contrast");
  var grayscale = fromTheme("grayscale");
  var hueRotate = fromTheme("hueRotate");
  var invert = fromTheme("invert");
  var gap = fromTheme("gap");
  var gradientColorStops = fromTheme("gradientColorStops");
  var gradientColorStopPositions = fromTheme("gradientColorStopPositions");
  var inset = fromTheme("inset");
  var margin = fromTheme("margin");
  var opacity = fromTheme("opacity");
  var padding = fromTheme("padding");
  var saturate = fromTheme("saturate");
  var scale = fromTheme("scale");
  var sepia = fromTheme("sepia");
  var skew = fromTheme("skew");
  var space = fromTheme("space");
  var translate = fromTheme("translate");
  var getOverscroll = function getOverscroll2() {
    return ["auto", "contain", "none"];
  };
  var getOverflow = function getOverflow2() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  };
  var getSpacingWithAutoAndArbitrary = function getSpacingWithAutoAndArbitrary2() {
    return ["auto", isArbitraryValue, spacing];
  };
  var getSpacingWithArbitrary = function getSpacingWithArbitrary2() {
    return [isArbitraryValue, spacing];
  };
  var getLengthWithEmpty = function getLengthWithEmpty2() {
    return ["", isLength];
  };
  var getNumberWithAutoAndArbitrary = function getNumberWithAutoAndArbitrary2() {
    return ["auto", isNumber, isArbitraryValue];
  };
  var getPositions = function getPositions2() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  };
  var getLineStyles = function getLineStyles2() {
    return ["solid", "dashed", "dotted", "double", "none"];
  };
  var getBlendModes = function getBlendModes2() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  };
  var getAlign = function getAlign2() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  };
  var getZeroAndEmpty = function getZeroAndEmpty2() {
    return ["", "0", isArbitraryValue];
  };
  var getBreaks = function getBreaks2() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  };
  var getNumber = function getNumber2() {
    return [isNumber, isArbitraryNumber];
  };
  var getNumberAndArbitrary = function getNumberAndArbitrary2() {
    return [isNumber, isArbitraryValue];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [isAny],
      spacing: [isLength],
      blur: ["none", "", isTshirtSize, isArbitraryValue],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmpty(),
      contrast: getNumber(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumber(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumber(),
      scale: getNumber(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      "float": [{
        "float": ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(getPositions(), [isArbitraryValue])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", isInteger]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", isInteger]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", isInteger]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [isInteger]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(getAlign())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(getAlign(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(getAlign(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", isArbitraryValue, isLength]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [isTshirtSize]
        }, isTshirtSize, isArbitraryValue]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", isArbitraryValue, isLength]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [isArbitraryValue, spacing, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isArbitraryValue, isLength]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(getLineStyles(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", isLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", isArbitraryValue, isLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      "break": [{
        "break": ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(getPositions(), [isArbitraryPosition])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, isArbitraryUrl]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(getLineStyles(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(getLineStyles())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isArbitraryValue, isLength]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [isLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: getLengthWithEmpty()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [isLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": getBlendModes()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var init_default_config = __esm({
  "../../node_modules/tailwind-merge/dist/lib/default-config.mjs"() {
    "use strict";
    init_from_theme();
    init_validators();
  }
});

// ../../node_modules/tailwind-merge/dist/lib/tw-merge.mjs
var twMerge;
var init_tw_merge = __esm({
  "../../node_modules/tailwind-merge/dist/lib/tw-merge.mjs"() {
    "use strict";
    init_create_tailwind_merge();
    init_default_config();
    twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
  }
});

// ../../node_modules/tailwind-merge/dist/tailwind-merge.mjs
var init_tailwind_merge = __esm({
  "../../node_modules/tailwind-merge/dist/tailwind-merge.mjs"() {
    "use strict";
    init_tw_merge();
  }
});

// ../pkg.icons/node_modules/@xipkg/utils/cn.ts
function cn(...inputs) {
  return twMerge(inputs);
}
var init_cn = __esm({
  "../pkg.icons/node_modules/@xipkg/utils/cn.ts"() {
    "use strict";
    init_tailwind_merge();
  }
});

// ../pkg.icons/node_modules/@xipkg/utils/plural.ts
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
var init_plural = __esm({
  "../pkg.icons/node_modules/@xipkg/utils/plural.ts"() {
    "use strict";
  }
});

// ../pkg.icons/node_modules/@xipkg/utils/format.ts
var FILE_SIZES, pluralByteForms, k, formatBytesSize;
var init_format = __esm({
  "../pkg.icons/node_modules/@xipkg/utils/format.ts"() {
    "use strict";
    init_utils();
    FILE_SIZES = ["\u0431\u0430\u0439\u0442", "\u041A\u0431", "\u041C\u0431", "\u0413\u0431", "\u0422\u0431"];
    pluralByteForms = ["\u0431\u0430\u0439\u0442", "\u0431\u0430\u0439\u0442\u0430", "\u0431\u0430\u0439\u0442\u043E\u0432"];
    k = 1024;
    formatBytesSize = (size) => {
      const n = Math.floor(Math.log10(size) / Math.log10(k));
      const formattedSizeNum = Math.ceil(size / __pow(k, n));
      const formattedSize = `${formattedSizeNum} ${!n ? plural(pluralByteForms, size) : FILE_SIZES[n]}`;
      return formattedSize;
    };
  }
});

// ../pkg.icons/node_modules/@xipkg/utils/index.ts
var utils_exports = {};
__export(utils_exports, {
  cn: () => cn,
  formatBytesSize: () => formatBytesSize,
  plural: () => plural
});
var init_utils = __esm({
  "../pkg.icons/node_modules/@xipkg/utils/index.ts"() {
    "use strict";
    init_cn();
    init_plural();
    init_format();
  }
});

// ../pkg.icons/dist/index.js
var require_dist3 = __commonJS({
  "../pkg.icons/dist/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __defProps2 = Object.defineProperties;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
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
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var index_exports2 = {};
    __export2(index_exports2, {
      Account: () => Account,
      Activity: () => Activity,
      Add: () => Add,
      Announce: () => Announce,
      Arrow: () => Arrow,
      ArrowBottom: () => ArrowBottom,
      ArrowLeft: () => ArrowLeft,
      ArrowRight: () => ArrowRight,
      ArrowUp: () => ArrowUp,
      Bold: () => Bold,
      Brush: () => Brush,
      Burger: () => Burger,
      Calendar: () => Calendar,
      Camera: () => Camera,
      CameraOff: () => CameraOff,
      CaretUp: () => CaretUp,
      CategoryAdd: () => CategoryAdd,
      ChannelAdd: () => ChannelAdd,
      Chat: () => Chat,
      Check: () => Check,
      ChevronBottom: () => ChevronBottom,
      ChevronLeft: () => ChevronLeft,
      ChevronRight: () => ChevronRight,
      ChevronSmallBottom: () => ChevronSmallBottom,
      ChevronSmallLeft: () => ChevronSmallLeft,
      ChevronSmallRight: () => ChevronSmallRight,
      ChevronSmallTop: () => ChevronSmallTop,
      ChevronUp: () => ChevronUp,
      Cite: () => Cite,
      Clip: () => Clip,
      Clock: () => Clock,
      Close: () => Close,
      Code: () => Code,
      Collapse: () => Collapse,
      ColorPicker: () => ColorPicker,
      Conference: () => Conference,
      Copy: () => Copy,
      CrossCircle: () => CrossCircle,
      Crown: () => Crown,
      Cursor: () => Cursor,
      DetailedAnswerTest: () => DetailedAnswerTest,
      Divider: () => Divider,
      DoubleBottomArrows: () => DoubleBottomArrows,
      DoubleUpArrows: () => DoubleUpArrows,
      Download: () => Download,
      Edit: () => Edit,
      Emotions: () => Emotions,
      Endcall: () => Endcall,
      Eraser: () => Eraser,
      Exit: () => Exit,
      External: () => External,
      Eyeoff: () => Eyeoff,
      Eyeon: () => Eyeon,
      Figures: () => Figures,
      File: () => File,
      FileSmall: () => FileSmall,
      Filter: () => Filter,
      Flag: () => Flag,
      Folder: () => Folder,
      Food: () => Food,
      Grid: () => Grid,
      Group: () => Group,
      H1: () => H1,
      H2: () => H2,
      H3: () => H3,
      Hand: () => Hand,
      Heart: () => Heart,
      Hint: () => Hint,
      Home: () => Home,
      Image: () => Image,
      Italic: () => Italic,
      Key: () => Key,
      Laptop: () => Laptop,
      Link: () => Link2,
      Locked: () => Locked,
      LongAnswer: () => LongAnswer,
      Mail: () => Mail,
      MailRounded: () => MailRounded2,
      Maximize: () => Maximize,
      MenuDots: () => MenuDots,
      Microphone: () => Microphone,
      MicrophoneOff: () => MicrophoneOff,
      Minimize: () => Minimize,
      Minus: () => Minus,
      Moon: () => Moon,
      MoreVert: () => MoreVert,
      Move: () => Move,
      Movie: () => Movie,
      Music: () => Music,
      Nature: () => Nature,
      Notification: () => Notification,
      Objects: () => Objects,
      Ol: () => Ol,
      OptionSelectionTest: () => OptionSelectionTest,
      Palette: () => Palette,
      Pen: () => Pen,
      PeopleInvite: () => PeopleInvite,
      Photo: () => Photo,
      Picture: () => Picture,
      Pin: () => Pin,
      Places: () => Places,
      Play: () => Play,
      Plus: () => Plus,
      Presentation: () => Presentation,
      PushPin: () => PushPin,
      RedLine: () => RedLine,
      Redo: () => Redo,
      Reply: () => Reply,
      Screenshare: () => Screenshare,
      Search: () => Search,
      Section: () => Section,
      Send: () => Send,
      Settings: () => Settings,
      Shape: () => Shape,
      Share: () => Share,
      SimpleAnswer: () => SimpleAnswer,
      SimpleAnswertTest: () => SimpleAnswertTest,
      Sort: () => Sort,
      SoundOn: () => SoundOn,
      SoundTwo: () => SoundTwo,
      Soundoff: () => Soundoff,
      Speaker: () => Speaker,
      SpeakerHorizontal: () => SpeakerHorizontal,
      Sticker: () => Sticker,
      Stroke: () => Stroke,
      Sun: () => Sun,
      TText: () => TText,
      Task: () => Task,
      TaskFile: () => TaskFile,
      Telegram: () => Telegram,
      TelegramFilled: () => TelegramFilled2,
      Text: () => Text,
      ThinArrowRight: () => ThinArrowRight,
      Trash: () => Trash,
      Ul: () => Ul,
      Underline: () => Underline,
      Undo: () => Undo,
      Unlocked: () => Unlocked,
      Updates: () => Updates,
      Upload: () => Upload,
      Users: () => Users,
      VariantSelect: () => VariantSelect,
      Video: () => Video,
      WhiteBoard: () => WhiteBoard,
      Window: () => Window,
      icons: () => icons
    });
    module2.exports = __toCommonJS2(index_exports2);
    var import_class_variance_authority = require_dist2();
    var import_utils2 = (init_utils(), __toCommonJS(utils_exports));
    var import_jsx_runtime2 = require("react/jsx-runtime");
    var svgVariants = (0, import_class_variance_authority.cva)("", {
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
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", __spreadProps2(__spreadValues2({ viewBox: "0 0 24 24", className: (0, import_utils2.cn)(svgVariants({ theme, size, className })) }, rest), { children }));
    };
    var import_jsx_runtime22 = require("react/jsx-runtime");
    var Account = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        "path",
        {
          d: "M11.58 3.023c-.566.079-.77.121-1.1.226a5.014 5.014 0 0 0-3.387 3.829c-.083.421-.091 1.34-.017 1.762a5.182 5.182 0 0 0 1.298 2.589c.153.161.271.298.262.305a14.61 14.61 0 0 1-.411.221c-1.823.965-3.188 2.586-3.858 4.585-.365 1.089-.447 1.435-.447 1.879 0 .751.219 1.277.76 1.825.363.367.802.604 1.294.697.47.089 11.582.089 12.052 0 .492-.093.931-.33 1.294-.697.541-.548.76-1.074.76-1.825 0-.443-.08-.781-.447-1.879a8.043 8.043 0 0 0-3.858-4.585 14.61 14.61 0 0 1-.411-.221c-.009-.007.109-.144.262-.305a5.015 5.015 0 0 0 1.128-1.93c.181-.59.22-.857.22-1.499 0-.642-.039-.909-.22-1.499-.528-1.725-2.027-3.063-3.809-3.402-.325-.061-1.143-.107-1.365-.076m1.28 2.097a3.09 3.09 0 0 1 2.026 2.04c.135.434.135 1.246 0 1.68a3.086 3.086 0 0 1-2.046 2.046c-.436.135-1.248.135-1.68 0A3.086 3.086 0 0 1 9.114 8.84c-.136-.434-.136-1.246 0-1.68a3.088 3.088 0 0 1 2.329-2.119c.308-.065 1.101-.021 1.417.079m.345 7.997c1.868.401 3.469 1.654 4.252 3.33.168.36.586 1.607.641 1.913.036.196-.111.477-.298.57-.131.066-.491.07-5.8.07-6.399 0-5.854.029-6.032-.32-.113-.222-.109-.243.178-1.156.373-1.187.775-1.907 1.467-2.632.954-.997 2.119-1.607 3.504-1.833.493-.081 1.581-.051 2.088.058",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime3 = require("react/jsx-runtime");
    var Activity = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "path",
        {
          d: "M11.12 2.039c-1.804.181-3.413.768-4.84 1.767-3.542 2.48-5.102 6.953-3.858 11.059a9.762 9.762 0 0 0 2.517 4.196 9.792 9.792 0 0 0 3.333 2.217c3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645C21.255 16.379 22 14.234 22 12c0-4.568-3.158-8.613-7.57-9.697-.984-.241-2.402-.355-3.31-.264m1.614 2.002a7.985 7.985 0 0 1 3.408 1.12c.186.112.338.213.338.223 0 .01-.126.174-.281.365a10.075 10.075 0 0 0-1.936 3.971c-.195.834-.241 1.275-.241 2.28s.046 1.446.241 2.28a10.122 10.122 0 0 0 1.936 3.971c.155.191.281.355.281.365 0 .042-.611.394-1.04.6a7.962 7.962 0 0 1-6.88 0c-.45-.216-1.04-.559-1.04-.605 0-.012.078-.114.173-.227 1.172-1.38 1.956-3.178 2.234-5.124.068-.471.068-2.049 0-2.52-.278-1.946-1.062-3.744-2.234-5.124a1.565 1.565 0 0 1-.173-.228c0-.012.152-.115.338-.227a7.992 7.992 0 0 1 4.876-1.12M6.209 6.958a8.132 8.132 0 0 1 1.699 3.859c.094.602.094 1.764 0 2.366a7.96 7.96 0 0 1-1.252 3.241c-.252.378-.617.851-.656.852-.011 0-.13-.138-.265-.308-.852-1.071-1.399-2.319-1.641-3.748-.094-.554-.094-1.886 0-2.44.242-1.429.789-2.677 1.641-3.748.135-.17.254-.308.265-.308.011 0 .105.106.209.234m12 0a8.132 8.132 0 0 1 1.699 3.859c.094.602.094 1.764 0 2.366a7.96 7.96 0 0 1-1.252 3.241c-.252.378-.617.851-.656.852-.011 0-.13-.138-.265-.308-.852-1.071-1.399-2.319-1.641-3.748-.094-.554-.094-1.886 0-2.44.242-1.429.789-2.677 1.641-3.748.135-.17.254-.308.265-.308.011 0 .105.106.209.234",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime4 = require("react/jsx-runtime");
    var Add = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          d: "M11.634 4.063c-.251.077-.559.361-.679.626l-.095.211-.011 2.99-.011 2.99H7.849l-2.989.001-.202.094A1.18 1.18 0 0 0 4 12c0 .427.288.863.689 1.045l.211.095 2.969.011 2.969.011.011 2.969.011 2.969.095.211c.182.401.618.689 1.045.689.427 0 .863-.288 1.045-.689l.095-.211.011-2.969.011-2.969 2.969-.011 2.969-.011.211-.095c.401-.182.689-.618.689-1.045a1.18 1.18 0 0 0-.658-1.025l-.202-.094-2.989-.001h-2.989l-.011-2.99-.011-2.99-.095-.211a1.16 1.16 0 0 0-1.411-.626",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime5 = require("react/jsx-runtime");
    var Announce = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "path",
        {
          d: "m12.86 5.179-4.88.819L6.4 6c-1.729.002-1.947.023-2.331.228-.268.143-.698.573-.841.841-.224.419-.227.466-.227 3.931s.003 3.512.227 3.931c.061.115.228.327.371.472.321.324.657.497 1.091.564l.31.047v.603c.001 1.235.199 1.783.9 2.483.72.72 1.238.899 2.6.899 1.016 0 1.461-.087 1.98-.388.337-.195.936-.794 1.131-1.131.247-.426.388-.981.389-1.53 0-.148.009-.27.019-.27.011 0 1.321.217 2.91.483 2.65.443 2.92.481 3.235.459.771-.054 1.383-.329 1.92-.861.5-.496.77-1.012.871-1.669.063-.401.063-7.783 0-8.184a2.91 2.91 0 0 0-.9-1.706 2.913 2.913 0 0 0-1.935-.822c-.356-.019-.687.031-5.26.799m5.52 1.256c.241.109.402.264.517.494l.103.207-.001 3.862c-.001 3.651-.005 3.871-.074 4.022-.164.36-.53.62-.874.62-.133 0-8.437-1.359-8.941-1.464L9 14.154v-6.31l.13-.024c1.194-.22 8.71-1.453 8.87-1.455a.95.95 0 0 1 .38.07M7 11v3H5V8h2v3m1.974 5.169 1.034.17-.014.481c-.013.439-.023.496-.125.669a1.038 1.038 0 0 1-.539.454c-.208.074-1.452.074-1.66 0a1.038 1.038 0 0 1-.539-.454c-.107-.182-.111-.212-.124-.839L6.993 16l.474-.001c.37 0 .697.037 1.507.17",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime6 = require("react/jsx-runtime");
    var ArrowBottom = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "path",
        {
          d: "M11.619 4.056c-.241.075-.371.176-.491.38l-.108.184-.011 5.979-.01 5.978-2.73-2.724c-1.827-1.825-2.785-2.753-2.897-2.809-.352-.176-.733-.085-1.073.255-.34.34-.431.721-.255 1.073.057.113 1.215 1.303 3.574 3.668 1.92 1.925 3.53 3.558 3.578 3.629.124.182.533.371.804.371s.68-.189.804-.371c.048-.071 1.658-1.704 3.578-3.629 2.359-2.365 3.517-3.555 3.574-3.668.176-.352.085-.733-.255-1.073-.34-.34-.721-.431-1.073-.255-.112.056-1.07.985-2.898 2.809L13 16.579v-5.882c0-6.529.015-6.159-.261-6.436-.234-.234-.735-.326-1.12-.205",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime7 = require("react/jsx-runtime");
    var ArrowLeft = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "path",
        {
          d: "M11.62 4.046c-.099.051-1.491 1.41-3.66 3.572-1.925 1.92-3.558 3.53-3.629 3.578-.182.124-.371.533-.371.804s.189.68.371.804c.071.048 1.704 1.658 3.629 3.578 2.365 2.359 3.555 3.517 3.668 3.574.352.176.733.085 1.073-.255.34-.34.431-.721.255-1.073-.056-.112-.984-1.07-2.809-2.897l-2.724-2.73 5.981-.01 5.982-.011.195-.12c.247-.153.38-.397.408-.751.028-.344-.066-.664-.25-.847-.277-.277.095-.262-6.436-.262H7.421l2.726-2.73c1.824-1.828 2.753-2.786 2.809-2.898.176-.352.085-.733-.255-1.073-.34-.34-.734-.432-1.081-.253",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime8 = require("react/jsx-runtime");
    var ArrowRight = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "path",
        {
          d: "M11.626 4.045a1.68 1.68 0 0 0-.583.59.864.864 0 0 0 .001.737c.056.112.984 1.07 2.809 2.897l2.725 2.73-5.96.01-5.96.011-.199.102a.76.76 0 0 0-.319.297c-.112.181-.12.222-.12.578 0 .347.011.401.111.572a.862.862 0 0 0 .3.3l.189.111 5.979.011 5.978.01-2.724 2.73c-1.825 1.827-2.753 2.785-2.809 2.897-.176.352-.085.733.255 1.073.34.34.721.431 1.073.255.113-.057 1.303-1.215 3.668-3.574 1.925-1.92 3.557-3.529 3.628-3.577.177-.121.372-.542.372-.805s-.195-.684-.372-.805c-.071-.048-1.703-1.657-3.628-3.577-2.365-2.359-3.555-3.517-3.668-3.574a.884.884 0 0 0-.746.001",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime9 = require("react/jsx-runtime");
    var ArrowUp = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "path",
        {
          d: "M11.531 4.085c-.15.072-.283.17-.336.247-.048.071-1.657 1.703-3.577 3.628-2.359 2.365-3.517 3.555-3.574 3.668-.176.352-.085.733.255 1.073.34.34.721.431 1.073.255.112-.056 1.07-.984 2.897-2.809l2.73-2.724.01 5.978.011 5.979.111.189a.862.862 0 0 0 .3.3c.171.1.225.111.572.111.356 0 .397-.008.578-.12a.76.76 0 0 0 .297-.319l.102-.199.011-5.96.01-5.96 2.73 2.725c1.827 1.825 2.785 2.753 2.897 2.809.352.176.733.085 1.073-.255.34-.34.431-.721.255-1.073-.057-.113-1.215-1.303-3.574-3.668-1.92-1.925-3.529-3.557-3.577-3.628-.054-.079-.184-.173-.346-.25-.345-.163-.587-.162-.928.003",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime10 = require("react/jsx-runtime");
    var Bold = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "path",
        {
          d: "M7 12v7.003l3.81-.013c3.8-.013 3.811-.013 4.148-.103a4.301 4.301 0 0 0 1.865-1.064 4.211 4.211 0 0 0 1.064-1.885c.126-.509.126-1.367 0-1.876a4.097 4.097 0 0 0-1.723-2.423l-.093-.062.186-.266c.259-.37.525-.95.63-1.373.126-.509.126-1.367 0-1.876a4.211 4.211 0 0 0-1.064-1.885 4.297 4.297 0 0 0-1.865-1.064c-.335-.088-.37-.089-3.648-.103L7 4.997V12m6.408-4.956C14.31 7.232 15 8.08 15 9c0 .92-.69 1.768-1.592 1.956-.139.029-.933.044-2.31.044H9V7h2.098c1.377 0 2.171.015 2.31.044m1 6C15.31 13.232 16 14.08 16 15c0 .92-.69 1.768-1.592 1.956-.142.029-1.068.044-2.81.044H9v-4h2.598c1.742 0 2.668.015 2.81.044",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime11 = require("react/jsx-runtime");
    var Brush = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "path",
        {
          d: "M14.893 2.933 12.64 6.995l-2.02 3.645-.22-.03c-.381-.052-1.158-.028-1.511.046-.636.134-1.59.509-2.062.811-.795.509-1.283 1.263-1.585 2.446-.044.172-.153.734-.243 1.25a31.514 31.514 0 0 1-.266 1.377c-.26 1.101-.66 1.896-1.326 2.629-.297.328-.367.457-.395.73-.046.445.235.894.648 1.035.231.079.957.088 1.98.025 3.511-.215 6.025-1.035 7.453-2.432.544-.532.797-.95 1.068-1.762.275-.822.347-1.558.216-2.192-.034-.167-.048-.317-.03-.333.018-.016 1.658-1.247 3.643-2.735l3.611-2.706L21 8l-.601-.8-1.68 1.261-1.679 1.26-1.222-1.048c-.891-.764-1.215-1.064-1.197-1.11a347.73 347.73 0 0 1 2.184-3.948l.076-.125-.671-.371a349.31 349.31 0 0 1-.877-.487l-.207-.116-.233.417m-.425 7.217c.481.413.879.768.883.79.005.022-.499.422-1.121.888l-1.13.849-.428-.426-.428-.426.168-.305.668-1.211c.275-.499.503-.907.507-.908.004-.001.401.337.881.749m-4.337 2.466c.071.03.609.539 1.196 1.13 1.042 1.05 1.067 1.078 1.095 1.269.076.523-.192 1.456-.548 1.903-.313.394-1.065.88-1.814 1.175-.998.393-2.41.699-3.73.81L6 18.93l.136-.295c.345-.748.573-1.589.823-3.035.201-1.163.285-1.501.463-1.867.209-.429.422-.601 1.057-.851.777-.306 1.348-.398 1.652-.266",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var Burger = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        "path",
        {
          d: "M3.117 4.054c-.412.112-.798.446-.99.859-.09.192-.106.282-.106.588-.001.327.011.386.129.624.156.317.442.598.761.748l.229.107h17.72l.229-.107a1.67 1.67 0 0 0 .761-.748c.118-.238.13-.298.13-.625s-.012-.387-.13-.625a1.67 1.67 0 0 0-.761-.748l-.229-.107-8.78-.008c-6.873-.005-8.82.004-8.963.042m-.168 6.563c-.45.185-.768.544-.887 1.002a1.27 1.27 0 0 0 0 .762c.121.465.467.847.92 1.016l.222.084 8.848-.011 8.848-.01.229-.108a1.505 1.505 0 0 0 .704-2.026c-.123-.255-.428-.549-.704-.678l-.229-.108-8.86-.009-8.86-.009-.231.095m.168 6.437c-.412.112-.798.446-.99.859-.09.192-.106.282-.106.588-.001.327.011.386.129.624.156.317.442.598.761.748l.229.107h17.72l.229-.107a1.67 1.67 0 0 0 .761-.748c.118-.238.13-.298.13-.625s-.012-.387-.13-.625a1.67 1.67 0 0 0-.761-.748l-.229-.107-8.78-.008c-6.873-.005-8.82.004-8.963.042",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime13 = require("react/jsx-runtime");
    var Calendar = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "path",
        {
          d: "M8.59 2.062a.812.812 0 0 0-.528.545A1.485 1.485 0 0 0 8 2.903c0 .08-.025.09-.31.114-1.023.088-1.853.392-2.66.973-.801.577-1.471 1.514-1.781 2.49-.236.744-.229.582-.229 5.54 0 4.179.006 4.589.07 4.902a5.058 5.058 0 0 0 2.731 3.57c.32.16.945.36 1.359.436.407.075 9.233.075 9.64 0 1.882-.346 3.392-1.662 3.935-3.429.232-.758.225-.582.225-5.499 0-3.531-.011-4.602-.052-4.82-.289-1.575-1.221-2.857-2.616-3.599-.59-.314-1.244-.499-1.994-.563l-.301-.026-.046-.24c-.098-.514-.386-.732-.971-.732-.586 0-.873.218-.972.736L13.982 3h-3.964l-.046-.244c-.093-.489-.372-.717-.908-.742a1.435 1.435 0 0 0-.474.048M8 5.593c0 .702.054.938.261 1.146.344.343 1.134.343 1.478 0 .207-.208.261-.444.261-1.146V5h4v.593c0 .702.054.938.261 1.146.344.343 1.134.343 1.478 0 .208-.208.261-.444.261-1.152v-.599l.292.025c1.172.099 2.215.955 2.59 2.127.076.239.092.396.108 1.07l.019.79H4.992l.017-.79c.02-.877.066-1.096.335-1.61.472-.9 1.513-1.574 2.466-1.596L8 5v.593m10.991 8.197-.012 2.79-.094.28c-.329.989-1.069 1.722-2.045 2.026l-.3.094H7.46l-.3-.094c-.976-.304-1.715-1.036-2.046-2.026l-.093-.28-.012-2.79L4.997 11h14.007l-.013 2.79",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime14 = require("react/jsx-runtime");
    var Camera = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Svg, __spreadProps2(__spreadValues2({}, props), { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.55132 6.18377C7.98603 4.87964 9.20647 4 10.5811 4H13.4189C14.7935 4 16.014 4.87964 16.4487 6.18377C16.6112 6.67122 17.0673 7 17.5811 7H17.6754C19.5115 7 21 8.48845 21 10.3246V16C21 18.2091 19.2091 20 17 20H7C4.79086 20 3 18.2091 3 16V10.3246C3 8.48845 4.48845 7 6.32456 7H6.41886C6.93267 7 7.38884 6.67122 7.55132 6.18377ZM10.5811 6C10.0673 6 9.61116 6.32878 9.44868 6.81623C9.01397 8.12036 7.79353 9 6.41886 9H6.32456C5.59302 9 5 9.59302 5 10.3246V16C5 17.1046 5.89543 18 7 18H17C18.1046 18 19 17.1046 19 16V10.3246C19 9.59302 18.407 9 17.6754 9H17.5811C16.2065 9 14.986 8.12036 14.5513 6.81623C14.3888 6.32878 13.9327 6 13.4189 6H10.5811Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15ZM12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"
          }
        )
      ] }));
    };
    var import_jsx_runtime15 = require("react/jsx-runtime");
    var CategoryAdd = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("path", { d: "M4.5 4.059c-.683.151-1.316.557-1.805 1.161a3.084 3.084 0 0 0-.615 1.201C2.002 6.725 2 6.871 2 12s.002 5.275.08 5.579c.282 1.102 1.238 2.059 2.339 2.341.309.079.435.08 7.581.08 7.146 0 7.272-.001 7.581-.08 1.098-.281 2.058-1.241 2.339-2.339.078-.305.08-.439.08-4.581s-.002-4.276-.08-4.581c-.263-1.026-1.098-1.917-2.143-2.287l-.317-.112-3.721-.011-3.722-.011-.998-.999L10.021 4l-2.641.003c-2.03.003-2.695.016-2.88.056M10.18 7l.999 1h3.961c2.604 0 4.011.015 4.109.042.211.059.469.268.61.496l.121.196v8.532l-.121.196c-.141.228-.399.437-.61.496-.1.028-2.491.041-7.289.041-6.824-.001-7.147-.004-7.3-.074a1.168 1.168 0 0 1-.531-.479l-.109-.186V6.734l.12-.193c.066-.106.185-.246.265-.31.284-.229.267-.227 2.615-.229L9.181 6l.999 1m1.072 2.078c-.247.151-.252.181-.252 1.62V12H9.69c-1.229 0-1.318.005-1.438.078-.222.136-.252.246-.252.93 0 .536.01.628.078.74.151.247.181.252 1.62.252H11v1.302c0 1.439.005 1.469.252 1.62.112.068.203.078.748.078.545 0 .636-.01.748-.078.247-.151.252-.181.252-1.62V14h1.31c1.229 0 1.318-.005 1.438-.078.222-.135.252-.247.252-.922s-.03-.787-.252-.922c-.12-.073-.209-.078-1.438-.078H13v-1.31c0-1.229-.005-1.318-.078-1.438-.136-.222-.246-.252-.93-.252-.536 0-.628.01-.74.078" }) }));
    };
    var import_jsx_runtime16 = require("react/jsx-runtime");
    var ChannelAdd = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: "M11.12 2.039c-1.804.181-3.413.768-4.84 1.767-3.542 2.48-5.102 6.953-3.858 11.059a9.762 9.762 0 0 0 2.517 4.196 9.792 9.792 0 0 0 3.333 2.217c3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645C21.255 16.379 22 14.234 22 12c0-4.568-3.158-8.613-7.57-9.697-.984-.241-2.402-.355-3.31-.264m1.62 2.002A7.98 7.98 0 0 1 19.182 8.5a7.965 7.965 0 0 1-1.417 9.03A7.977 7.977 0 0 1 12 19.999c-3.765 0-7.052-2.668-7.823-6.351a7.995 7.995 0 0 1 4.324-8.831 7.919 7.919 0 0 1 4.239-.776m-1.488 3.037c-.255.156-.252.131-.252 2.12V11H9.19c-1.725 0-1.816.004-1.938.078-.222.136-.252.246-.252.93 0 .536.01.628.078.74.156.255.131.252 2.12.252H11v1.802c0 1.989-.003 1.964.252 2.12.112.068.203.078.748.078.545 0 .636-.01.748-.078.255-.156.252-.131.252-2.12V13h1.81c1.725 0 1.816-.004 1.938-.078.222-.135.252-.247.252-.922s-.03-.787-.252-.922c-.122-.074-.213-.078-1.938-.078H13V9.19c0-1.725-.004-1.816-.078-1.938-.136-.222-.246-.252-.93-.252-.536 0-.628.01-.74.078" }) }));
    };
    var import_jsx_runtime17 = require("react/jsx-runtime");
    var Chat = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M7.34 3.046a4.934 4.934 0 0 0-1.52.471c-1.23.603-2.132 1.623-2.557 2.89-.257.765-.237.205-.252 7.41-.015 7.391-.039 6.802.294 7.126a.945.945 0 0 0 .979.243c.097-.03.973-.534 1.947-1.119l1.77-1.064 4.37-.014c3.933-.013 4.396-.021 4.642-.082.984-.243 1.732-.636 2.395-1.259.739-.695 1.202-1.491 1.463-2.517l.109-.431V7.3l-.109-.431c-.261-1.026-.724-1.822-1.462-2.516a5.095 5.095 0 0 0-2.808-1.311c-.42-.052-8.854-.048-9.261.004m9.416 2.043c.889.274 1.569.851 1.948 1.651.298.63.296.597.296 4.26 0 3.636 0 3.629-.284 4.238-.424.906-1.164 1.495-2.138 1.702-.235.05-.96.059-4.705.059L7.445 17l-1.172.705c-.645.387-1.196.713-1.224.724-.041.016-.049-1.036-.039-5.474.014-6.133-.012-5.599.302-6.251a3.046 3.046 0 0 1 2.191-1.662c.108-.019 2.186-.03 4.617-.027 3.999.007 4.441.014 4.636.074m-8.903 4.982a1.245 1.245 0 0 0-.104 2.318c.465.213.999.11 1.374-.266a1.229 1.229 0 0 0-.793-2.107c-.2-.014-.324.001-.477.055m3.847-.036c-.377.1-.764.456-.882.811-.1.302-.065.716.083.989a1.248 1.248 0 0 0 2.198 0c.148-.273.183-.687.083-.989-.086-.258-.37-.579-.632-.711-.214-.108-.633-.158-.85-.1m3.758 0c-.545.141-.946.64-.95 1.182-.003.376.106.643.369.906a1.233 1.233 0 0 0 2.113-.797 1.234 1.234 0 0 0-1.16-1.309 1.663 1.663 0 0 0-.372.018" }) }));
    };
    var import_jsx_runtime18 = require("react/jsx-runtime");
    var Check = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        "path",
        {
          d: "M17.516 6.726c-.231.113-.612.481-3.885 3.748l-3.63 3.622-1.63-1.621c-1.418-1.409-1.665-1.638-1.887-1.748-.494-.244-.945-.133-1.43.351-.336.337-.434.545-.434.922 0 .237.02.342.098.5.076.155.603.704 2.34 2.442 2.418 2.418 2.418 2.418 2.868 2.451.264.019.465-.038.714-.204.241-.16 8.232-8.139 8.479-8.466.225-.297.298-.516.273-.813-.023-.289-.163-.548-.446-.832-.484-.483-.935-.595-1.43-.352",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime19 = require("react/jsx-runtime");
    var ChevronBottom = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "path",
        {
          d: "M5.122 7.583c-.544.236-.775.85-.512 1.357.144.276 7.203 7.328 7.47 7.463a.995.995 0 0 0 .84 0c.128-.065 1.212-1.121 3.771-3.677 3.933-3.926 3.811-3.791 3.805-4.249a.996.996 0 0 0-.627-.896c-.207-.086-.57-.077-.789.022-.139.062-.908.808-3.38 3.279l-3.2 3.198-3.18-3.181c-2.443-2.444-3.226-3.204-3.378-3.28-.232-.116-.598-.132-.82-.036",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime20 = require("react/jsx-runtime");
    var ChevronLeft = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        "path",
        {
          d: "M15.64 4.068c-.156.053-.66.541-3.811 3.687-2.629 2.624-3.655 3.674-3.716 3.801a1.013 1.013 0 0 0-.053.77c.066.203.247.392 3.695 3.845 2.624 2.629 3.674 3.655 3.801 3.716a.986.986 0 0 0 1.144-.185c.279-.279.364-.655.235-1.045-.059-.18-.347-.479-3.289-3.427L10.421 12l3.225-3.23c2.942-2.948 3.23-3.247 3.289-3.427.128-.39.044-.766-.234-1.044a1.006 1.006 0 0 0-1.061-.231",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime21 = require("react/jsx-runtime");
    var ChevronRight = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z"
        }
      ) }));
    };
    var import_jsx_runtime222 = require("react/jsx-runtime");
    var ChevronUp = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime222.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime222.jsx)(
        "path",
        {
          d: "M12.08 7.603c-.257.115-7.317 7.163-7.47 7.457-.33.637.147 1.426.87 1.436.451.006.359.087 3.84-3.395L12.5 9.92l3.2 3.196c2.284 2.282 3.251 3.222 3.38 3.286.391.196.948.06 1.204-.294.243-.335.28-.696.107-1.048-.052-.105-1.31-1.393-3.665-3.751-2.77-2.774-3.631-3.613-3.784-3.69a1.06 1.06 0 0 0-.862-.016",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime23 = require("react/jsx-runtime");
    var ChevronSmallBottom = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        "path",
        {
          d: "M6.643 9.069C6.291 9.193 6 9.614 6 10c0 .08.029.234.065.343.059.179.304.437 2.67 2.808 1.724 1.728 2.659 2.637 2.765 2.688a.925.925 0 0 0 .725.062c.234-.066.244-.076 2.869-2.694 2.011-2.005 2.654-2.67 2.717-2.807.215-.472.01-1.036-.471-1.292-.211-.113-.656-.119-.86-.013-.077.04-1.125 1.056-2.33 2.258l-2.189 2.186-2.211-2.204c-1.998-1.993-2.229-2.211-2.407-2.27a1.032 1.032 0 0 0-.7.004",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime24 = require("react/jsx-runtime");
    var ChevronSmallLeft = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        "path",
        {
          d: "M14.64 6.068c-.155.053-.543.424-2.791 2.667-1.885 1.881-2.636 2.655-2.7 2.785-.12.245-.12.636 0 .86.05.094 1.178 1.25 2.718 2.786 2.823 2.814 2.724 2.728 3.133 2.728.701 0 1.199-.746.917-1.374-.061-.137-.598-.698-2.268-2.37l-2.188-2.189 2.204-2.211c1.993-1.998 2.211-2.229 2.27-2.407a1.004 1.004 0 0 0-1.295-1.275",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime25 = require("react/jsx-runtime");
    var ChevronSmallRight = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        "path",
        {
          d: "M9.617 6.177c-.346.15-.617.556-.616.923.001.398.007.404 2.35 2.75l2.188 2.189-2.204 2.211c-1.993 1.998-2.211 2.229-2.27 2.407-.129.39-.044.766.234 1.044s.654.363 1.044.234c.179-.059.437-.304 2.808-2.67 1.728-1.724 2.637-2.659 2.688-2.765a.925.925 0 0 0 .062-.725c-.067-.234-.075-.243-2.694-2.866-1.753-1.755-2.681-2.657-2.79-2.71-.192-.093-.61-.105-.8-.022",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime26 = require("react/jsx-runtime");
    var ChevronSmallTop = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        "path",
        {
          d: "M11.62 9.059c-.088.033-.168.06-.179.06-.01.001-1.195 1.176-2.633 2.611-1.537 1.535-2.647 2.674-2.694 2.765a1.056 1.056 0 0 0-.062.76.96.96 0 0 0 .478.568.998.998 0 0 0 .91.021c.123-.063.872-.783 2.35-2.257l2.17-2.165 2.21 2.206c2.207 2.203 2.21 2.206 2.45 2.275.856.246 1.56-.63 1.155-1.437-.105-.208-5.115-5.202-5.344-5.327-.244-.133-.582-.166-.811-.08",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime27 = require("react/jsx-runtime");
    var Cite = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        "path",
        {
          d: "M4.564 9.424c-.651.665-1.126 1.439-1.379 2.245-.158.504-.184.756-.185 1.761v.93h2.48v-.931c0-1.002.037-1.441.162-1.903.09-.33.398-1.008.646-1.418.094-.157.149-.287.128-.306-.02-.018-.27-.164-.556-.323a61.573 61.573 0 0 1-.694-.39l-.174-.101-.428.436m3.919 0c-.779.792-1.298 1.727-1.499 2.704-.048.232-.064.547-.064 1.27v.962H9.4v-.97c0-1.071.052-1.553.219-2.051.107-.32.382-.893.605-1.264.075-.124.136-.235.136-.247 0-.011-.265-.169-.59-.35-.325-.181-.65-.365-.724-.409l-.133-.08-.43.435m6.157.95c0 .994-.059 1.663-.183 2.094-.1.344-.453 1.116-.693 1.514l-.122.202.724.407.723.407.215-.183c.636-.544 1.302-1.556 1.592-2.419.154-.46.183-.743.184-1.786v-.97h-2.44v.734m3.87.436c-.016 1.101-.024 1.193-.121 1.558-.107.4-.471 1.203-.722 1.592-.098.152-.127.228-.094.246l.725.407.678.381.106-.075c.058-.042.261-.239.451-.438.745-.784 1.296-1.857 1.424-2.776.024-.171.043-.705.043-1.188V9.64h-2.472l-.018 1.17",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime28 = require("react/jsx-runtime");
    var Clip = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
        "path",
        {
          d: "M13.62 2.985c-.766.116-1.312.28-1.88.565-.824.413-.855.44-4.151 3.727-2.073 2.067-3.097 3.116-3.15 3.226-.147.303-.071.747.166.965a.85.85 0 0 0 .866.15c.104-.043 1.063-.973 3.169-3.074 1.83-1.825 3.125-3.086 3.286-3.199a4.75 4.75 0 0 1 1.376-.632c.511-.129 1.403-.129 1.918-.001.481.12 1.16.458 1.563.779 1.616 1.289 1.964 3.692.781 5.398-.141.204-1.369 1.457-4.113 4.194-4.282 4.273-4.055 4.069-4.715 4.238a2.394 2.394 0 0 1-2.828-1.444c-.272-.682-.231-1.366.123-2.057.131-.256.414-.551 3.366-3.513 1.792-1.797 3.301-3.279 3.398-3.337a.82.82 0 0 1 1.104.285.981.981 0 0 1 .059.732c-.023.062-1.119 1.193-2.434 2.513-1.316 1.32-2.433 2.459-2.482 2.532a.79.79 0 0 0-.11.36.81.81 0 0 0 1.136.81c.221-.1 4.984-4.869 5.216-5.222a2.33 2.33 0 0 0 .37-1.26c.005-.447-.052-.714-.24-1.109a2.367 2.367 0 0 0-.83-.963 2.237 2.237 0 0 0-1.092-.411 2.414 2.414 0 0 0-1.412.246l-.34.167-3.293 3.285c-1.811 1.807-3.378 3.393-3.483 3.525a3.975 3.975 0 0 0-.807 1.748 4.248 4.248 0 0 0 .061 1.832 4.067 4.067 0 0 0 3.908 2.999c.877.002 1.781-.29 2.424-.78.331-.253 7.982-7.908 8.214-8.219a5.79 5.79 0 0 0 1.12-2.748c.056-.425.024-1.343-.063-1.772a5.71 5.71 0 0 0-4.392-4.444c-.36-.079-1.507-.137-1.809-.091",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime29 = require("react/jsx-runtime");
    var Clock = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        "path",
        {
          d: "M11.12 2.039c-1.804.181-3.413.768-4.84 1.767-3.542 2.48-5.102 6.953-3.858 11.059a9.762 9.762 0 0 0 2.517 4.196 9.792 9.792 0 0 0 3.333 2.217c3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645C21.255 16.379 22 14.234 22 12c0-4.568-3.158-8.613-7.57-9.697-.984-.241-2.402-.355-3.31-.264m1.62 2.002A7.98 7.98 0 0 1 19.182 8.5a7.965 7.965 0 0 1-1.417 9.03A7.977 7.977 0 0 1 12 19.999c-3.765 0-7.052-2.668-7.823-6.351a7.995 7.995 0 0 1 4.324-8.831 7.919 7.919 0 0 1 4.239-.776m-1.123 1.536c-.182.079-.41.293-.509.479-.088.164-.088.165-.099 3.121-.01 2.655-.004 2.977.055 3.16.06.186.222.36 1.931 2.075 2.099 2.106 2.078 2.089 2.559 2.062.527-.03.886-.382.919-.9.031-.489.067-.443-1.797-2.314l-1.674-1.68-.011-2.68c-.011-2.671-.011-2.681-.099-2.844a1.21 1.21 0 0 0-.518-.481c-.166-.07-.596-.069-.757.002",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime30 = require("react/jsx-runtime");
    var Close = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        "path",
        {
          d: "M6.213 5.442a.97.97 0 0 0-.756.701.891.891 0 0 0 .068.711c.055.11.926 1.011 2.568 2.656L10.579 12l-2.503 2.51c-1.547 1.551-2.528 2.564-2.568 2.653a.999.999 0 0 0 .627 1.377.883.883 0 0 0 .719-.065c.11-.055 1.011-.926 2.656-2.568L12 13.421l2.49 2.486c1.645 1.642 2.546 2.513 2.656 2.568.4.199.822.129 1.14-.189a.948.948 0 0 0 .189-1.14c-.055-.11-.926-1.011-2.568-2.656L13.421 12l2.486-2.49c1.642-1.645 2.513-2.546 2.568-2.656a.891.891 0 0 0 .068-.711 1.02 1.02 0 0 0-.529-.626 1.059 1.059 0 0 0-.856.002c-.125.062-.919.829-2.668 2.574L12 10.579 9.51 8.093C7.898 6.484 6.964 5.58 6.86 5.53c-.2-.098-.431-.13-.647-.088",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime31 = require("react/jsx-runtime");
    var Code = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        "path",
        {
          d: "m13.958 5.09-2.996 6.99-2.956 6.9.984.011c.542.006.997-.003 1.013-.02.02-.022 5.463-12.698 5.943-13.841l.055-.13H15c-1 0-1.002 0-1.042.09M4.99 9.003 2 11v2l3 2 3 2v-2l-2.239-1.49C4.53 12.691 3.522 12.011 3.522 12c0-.011 1.008-.691 2.239-1.51L8 9V8c0-.55-.005-.999-.01-.997-.005.001-1.355.901-3 2M16 8v1l2.239 1.49c1.231.819 2.239 1.499 2.239 1.51 0 .011-1.008.691-2.239 1.51L16 15v2l3-2 3-2v-2l-3-2-3-2v1",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime32 = require("react/jsx-runtime");
    var Collapse = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        "path",
        {
          d: "M11.338 3.816c-.68.13-1.237.37-1.737.749-.165.126-1.005.937-1.866 1.802C6.04 8.071 6.062 8.043 6.066 8.48a.977.977 0 0 0 .548.877c.237.115.647.114.878-.001.107-.054.745-.657 1.768-1.672 1.7-1.687 1.773-1.747 2.263-1.862.477-.113 1-.051 1.414.167.146.077.654.555 1.803 1.695 1.023 1.015 1.661 1.618 1.768 1.672.231.115.641.116.878.001a1.1 1.1 0 0 0 .485-.514c.092-.214.081-.591-.022-.805-.12-.247-3.242-3.355-3.609-3.593a3.901 3.901 0 0 0-2.12-.667 3.895 3.895 0 0 0-.782.038M6.654 14.618c-.207.09-.444.333-.521.535-.097.252-.089.588.02.812.118.244 3.242 3.353 3.607 3.59.389.252.811.442 1.238.556.332.089.463.103 1.002.103.539 0 .67-.014 1.002-.103a4.366 4.366 0 0 0 1.238-.556c.367-.238 3.489-3.346 3.609-3.593.236-.489-.011-1.136-.515-1.347-.205-.086-.626-.071-.826.029-.108.054-.733.646-1.748 1.655-.982.976-1.654 1.613-1.775 1.683a2.056 2.056 0 0 1-1.97 0c-.121-.07-.793-.707-1.775-1.683-1.015-1.009-1.64-1.601-1.748-1.655-.199-.099-.638-.113-.838-.026",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime33 = require("react/jsx-runtime");
    var ColorPicker = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
        "path",
        {
          d: "M17.046 3.883a2.73 2.73 0 0 0-.46.164c-.266.12-.37.213-1.477 1.31l-1.191 1.181-.879-.879-.879-.879-.71.71-.709.71.699.7.699.7-3.825 3.83c-2.104 2.106-3.852 3.884-3.884 3.95a1.413 1.413 0 0 0-.086.233c-.046.191-.504 3.434-.504 3.567 0 .398.305.801.7.925l.229.072 1.777-.252c.977-.14 1.844-.272 1.925-.296.122-.035.853-.745 4.009-3.896 2.124-2.119 3.879-3.853 3.9-3.853.022 0 .35.31.73.69l.69.689.71-.709.71-.71-.879-.879-.879-.879 1.161-1.171c1.252-1.263 1.353-1.394 1.475-1.915.112-.474.066-.864-.159-1.336-.114-.241-.218-.364-.746-.881-.38-.373-.692-.643-.822-.712-.364-.194-.899-.268-1.325-.184m.054 3.716L16.04 8.66l-.35-.35-.349-.35L16.4 6.9l1.059-1.059.351.349.351.349-1.061 1.06m-3.53 2.831c.368.368.67.687.67.71 0 .022-1.48 1.519-3.29 3.326l-3.29 3.287-.79.11c-.435.06-.801.099-.814.086-.014-.013.025-.381.085-.817l.11-.792 3.284-3.29c1.807-1.81 3.303-3.29 3.324-3.29.022 0 .342.301.711.67",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime34 = require("react/jsx-runtime");
    var Copy = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
        "path",
        {
          d: "M3.987 1.112c-.223.036-.636.204-.856.349-.454.3-.806.817-.916 1.347-.065.312-.068 14.605-.003 14.838.066.239.296.513.53.634.434.223.93.15 1.266-.186.352-.351.325.275.325-7.723V3.25h6.038c6.782 0 6.291.024 6.638-.324a1.066 1.066 0 0 0 0-1.519c-.348-.348.161-.324-6.758-.318-3.386.003-6.205.014-6.264.023M8.32 5.445a2.822 2.822 0 0 0-.855.349 2.215 2.215 0 0 0-.917 1.347c-.068.325-.068 15.726 0 16.051.169.812.865 1.507 1.677 1.677.323.067 12.477.067 12.8 0 .812-.17 1.508-.865 1.677-1.677.068-.325.068-15.726 0-16.051-.149-.716-.666-1.305-1.404-1.599l-.26-.104-6.305-.005c-3.467-.003-6.353.003-6.413.012m12.263 9.722v7.583H8.667V7.583h11.916v7.584",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime35 = require("react/jsx-runtime");
    var CrossCircle = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M6.34315 17.6569C9.46734 20.781 14.5327 20.781 17.6569 17.6569C20.781 14.5327 20.781 9.46734 17.6569 6.34315C14.5327 3.21895 9.46734 3.21895 6.34315 6.34315C3.21895 9.46734 3.21895 14.5327 6.34315 17.6569ZM4.92893 4.92893C1.02369 8.83417 1.02369 15.1658 4.92893 19.0711C8.83417 22.9763 15.1658 22.9763 19.0711 19.0711C22.9763 15.1658 22.9763 8.83417 19.0711 4.92893C15.1658 1.02369 8.83417 1.02369 4.92893 4.92893ZM8.11091 9.52513C7.91565 9.32986 7.91565 9.01328 8.11091 8.81802L8.81802 8.11091C9.01328 7.91565 9.32986 7.91565 9.52513 8.11091L12 10.5858L14.4749 8.11091C14.6701 7.91565 14.9867 7.91565 15.182 8.11091L15.8891 8.81802C16.0843 9.01328 16.0843 9.32986 15.8891 9.52513L13.4142 12L15.8891 14.4749C16.0843 14.6701 16.0843 14.9867 15.8891 15.182L15.182 15.8891C14.9867 16.0843 14.6701 16.0843 14.4749 15.8891L12 13.4142L9.52513 15.8891C9.32986 16.0843 9.01328 16.0843 8.81802 15.8891L8.11091 15.182C7.91565 14.9867 7.91565 14.6701 8.11091 14.4749L10.5858 12L8.11091 9.52513Z"
        }
      ) }));
    };
    var import_jsx_runtime36 = require("react/jsx-runtime");
    var Divider = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
        "path",
        {
          d: "M4.252 11.078C4.03 11.213 4 11.325 4 12s.03.787.252.922c.126.076.261.078 7.748.078s7.622-.002 7.748-.078c.222-.135.252-.247.252-.922s-.03-.787-.252-.922C19.622 11.002 19.487 11 12 11s-7.622.002-7.748.078",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime37 = require("react/jsx-runtime");
    var Download = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
        "path",
        {
          d: "M6.378 5.058A4.002 4.002 0 0 0 3.058 8.4c-.085.558-.085 6.642 0 7.2A3.982 3.982 0 0 0 6.4 18.942c.558.085 6.642.085 7.2 0a3.968 3.968 0 0 0 2.978-2.191l.212-.428.635.406c.349.223.752.449.895.502.728.27 1.514.093 2.084-.47.286-.284.474-.622.552-.993.062-.296.062-7.24 0-7.536-.21-1.004-1.232-1.718-2.236-1.563-.36.056-.646.192-1.359.648-.393.252-.584.354-.596.318a9.287 9.287 0 0 0-.209-.434A3.97 3.97 0 0 0 13.6 5.058c-.513-.078-6.718-.078-7.222 0m7.114 2.002c.36.093.626.25.912.536.286.286.443.552.536.912.089.342.089 6.642 0 6.984-.093.36-.25.626-.536.912-.286.286-.552.443-.912.536-.342.089-6.642.089-6.984 0-.36-.093-.626-.25-.912-.536-.286-.286-.443-.552-.536-.912-.089-.342-.089-6.642 0-6.984.093-.36.25-.626.536-.912.28-.28.55-.442.895-.534.32-.087 6.67-.089 7.001-.002m5.498 6.613-.01 1.673-.98-.624-.98-.625V9.906l.98-.624.98-.625.01 1.672c.006.919.006 2.424 0 3.344M7.667 9.065C7.303 9.177 7 9.602 7 10c0 .402.312.827.69.939.297.088 2.323.088 2.62 0 .378-.112.69-.537.69-.939 0-.402-.312-.827-.69-.939-.292-.087-2.358-.084-2.643.004",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime38 = require("react/jsx-runtime");
    var Edit = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        "path",
        {
          d: "M17.2 2.931c-.402.138-.615.284-1.096.752l-.444.433 2.12 2.122 2.119 2.122.472-.47c.677-.673.864-1.083.818-1.79a1.852 1.852 0 0 0-.304-.931c-.187-.292-1.906-1.971-2.148-2.099-.461-.244-1.07-.299-1.537-.139M10 9.78l-4.94 4.94 2.12 2.12 2.12 2.12 4.95-4.95 4.95-4.95-2.11-2.11c-1.16-1.16-2.119-2.11-2.13-2.11A874.6 874.6 0 0 0 10 9.78m5.68-1.4.7.7-3.53 3.53-3.53 3.53-.71-.71-.71-.71 3.52-3.52a445.447 445.447 0 0 1 3.54-3.52c.012 0 .336.315.72.7M4.342 15.563c-.091.517-.502 3.527-.501 3.674.001.212.117.493.271.658.146.156.472.304.67.305.154 0 3.778-.506 3.803-.532.006-.006-.94-.963-2.104-2.127l-2.115-2.115-.024.137",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime39 = require("react/jsx-runtime");
    var Emotions = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
        "path",
        {
          d: "M11.28 2.024c-2.109.185-3.979.926-5.561 2.201-1.675 1.351-2.908 3.28-3.416 5.346-.216.881-.277 1.41-.277 2.429s.061 1.548.277 2.429c.886 3.607 3.839 6.502 7.457 7.311.844.189 1.287.236 2.24.236.953 0 1.396-.047 2.24-.236 3.618-.809 6.571-3.704 7.457-7.311.213-.869.276-1.413.278-2.409.001-.976-.043-1.404-.235-2.26-.458-2.049-1.658-4.025-3.26-5.369-1.824-1.531-3.915-2.321-6.26-2.368a15.89 15.89 0 0 0-.94.001m1.54 2.017c2.788.311 5.174 1.99 6.38 4.488a7.95 7.95 0 0 1-.001 6.945A8.02 8.02 0 0 1 12 19.999a8.014 8.014 0 0 1-7.2-4.528 7.948 7.948 0 0 1 0-6.942A7.973 7.973 0 0 1 8.529 4.8c1.323-.64 2.886-.916 4.291-.759m-4.67 5a1.567 1.567 0 0 0-1.006.839c-.11.231-.124.3-.124.62 0 .311.015.394.113.604.143.309.452.617.767.764.207.097.29.112.6.112.311 0 .394-.015.604-.113.309-.143.617-.452.764-.767.097-.207.112-.29.112-.6 0-.311-.015-.394-.113-.604a1.68 1.68 0 0 0-.757-.757c-.258-.117-.703-.163-.96-.098m7 0a1.618 1.618 0 0 0-1.017.859c-.096.207-.112.29-.111.6 0 .309.016.395.112.604.141.309.45.617.766.763.207.096.29.112.6.111.309 0 .395-.016.604-.112.309-.141.617-.45.763-.766.096-.207.112-.29.111-.6 0-.309-.016-.395-.112-.604a1.67 1.67 0 0 0-.756-.757c-.258-.117-.703-.163-.96-.098m-6.859 6.325-.727.659c-.009.008.108.133.26.278 1.26 1.209 2.989 1.823 4.688 1.664a5.925 5.925 0 0 0 2.828-.991c.334-.223.878-.684 1.011-.856l.077-.1-.657-.6c-.361-.33-.692-.625-.734-.655-.07-.05-.096-.038-.27.124a4.17 4.17 0 0 1-1.753.98c-.351.097-.461.109-1.014.109-.551 0-.663-.012-1.011-.108a5.467 5.467 0 0 1-.727-.269c-.34-.162-.863-.529-1.079-.757a.514.514 0 0 0-.15-.124c-.017 0-.352.291-.742.646",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime40 = require("react/jsx-runtime");
    var Endcall = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
        "path",
        {
          d: "M10.94 5.943a81.74 81.74 0 0 1-.66.059 16.841 16.841 0 0 0-5.249 1.362c-.659.289-1.749.855-2.113 1.097a3.718 3.718 0 0 0-1.487 2.103c-.083.312-.09.421-.09 1.556-.001 1.049.009 1.256.07 1.479.22.796.724 1.408 1.455 1.765.511.25.79.286 2.048.266.933-.015 1.096-.028 1.31-.098a2.78 2.78 0 0 0 1.835-1.912c.036-.132.078-.455.093-.719l.028-.478.413-.13a12.69 12.69 0 0 1 1.767-.401c.661-.103 2.619-.103 3.28 0a12.69 12.69 0 0 1 1.767.401l.413.13.028.478c.015.264.057.587.093.719a2.78 2.78 0 0 0 1.835 1.912c.214.07.377.083 1.31.098 1.258.02 1.537-.016 2.048-.266.56-.274.989-.696 1.247-1.225.262-.54.279-.663.279-1.999 0-.872-.015-1.26-.054-1.42-.192-.783-.613-1.505-1.143-1.962-.316-.272-.601-.451-1.316-.823-2.081-1.083-3.957-1.66-6.247-1.92-.486-.056-2.596-.107-2.96-.072m2.48 2.039c2.199.211 4.083.784 5.988 1.823.639.349.808.477.974.736.231.361.26.489.286 1.259.042 1.263-.018 1.55-.369 1.749-.151.085-.202.09-1.016.09-.793.001-.871-.005-1.033-.084a.776.776 0 0 1-.282-.245c-.1-.152-.108-.198-.131-.786-.034-.831-.138-1.103-.589-1.533-.284-.271-.412-.337-1.048-.543a13.751 13.751 0 0 0-2.42-.556c-.69-.101-2.87-.101-3.56 0-.926.136-1.601.291-2.42.556-.636.206-.764.272-1.048.543-.447.426-.555.704-.589 1.509-.029.693-.079.843-.336 1.014-.161.106-.161.106-1.064.116-.876.011-.908.008-1.062-.08-.351-.201-.411-.485-.37-1.75.025-.77.054-.895.287-1.259.166-.259.335-.387.974-.736 1.878-1.024 3.781-1.608 5.936-1.822.75-.075 2.123-.075 2.892-.001",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime41 = require("react/jsx-runtime");
    var Exit = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        "path",
        {
          d: "M6.433 3.043a4.302 4.302 0 0 0-1.702.669c-.776.527-1.335 1.323-1.601 2.277-.105.375-.109.43-.11 1.331v.94l.124.22c.139.248.429.455.699.501.389.065.813-.144 1.013-.501l.124-.22.024-.84c.02-.716.036-.874.108-1.074.242-.669.833-1.18 1.505-1.303.332-.06 10.434-.06 10.766 0 .768.141 1.433.806 1.574 1.574.06.332.06 10.434 0 10.766-.138.755-.787 1.414-1.549 1.573-.298.062-10.518.062-10.816 0a2.056 2.056 0 0 1-1.48-1.302c-.072-.199-.088-.361-.11-1.074-.022-.748-.035-.858-.11-1.001-.191-.364-.496-.553-.892-.553s-.698.187-.894.553c-.081.152-.086.215-.086 1.101.001.904.005.955.111 1.337.42 1.508 1.576 2.591 3.095 2.9.399.081.505.083 5.774.083s5.375-.002 5.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V6.38l-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.079 5.079 0 0 0-1.311-.599l-.338-.091-5.48-.007c-3.014-.003-5.582.009-5.707.028m3.933 4.641a1.004 1.004 0 0 0-.621 1.386c.041.087.437.521.949 1.039l.881.889-4.918.011-4.917.011-.161.086c-.366.196-.556.5-.557.894a.977.977 0 0 0 .737.96c.089.025 1.936.04 4.979.04h4.838l-.863.87c-.523.528-.897.938-.95 1.043-.429.848.437 1.737 1.307 1.343.214-.097 3.691-3.575 3.815-3.816.128-.25.128-.63 0-.88-.126-.244-3.556-3.678-3.792-3.795-.2-.1-.541-.138-.727-.081",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime42 = require("react/jsx-runtime");
    var External = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M6.433 3.043a4.302 4.302 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v11.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.399.081.505.083 5.774.083s5.375-.002 5.774-.083a4.003 4.003 0 0 0 3.097-2.905l.108-.392.012-2.875c.014-3.254.024-3.132-.29-3.446a.987.987 0 0 0-1.17-.173 1.065 1.065 0 0 0-.489.585c-.027.096-.042 1.095-.042 2.792 0 1.724-.015 2.725-.043 2.88-.138.755-.787 1.414-1.549 1.573-.298.062-10.518.062-10.816 0-.762-.159-1.411-.818-1.549-1.573-.06-.332-.06-10.434 0-10.766a1.93 1.93 0 0 1 .553-1.021 1.93 1.93 0 0 1 1.021-.553C6.772 5.015 7.773 5 9.5 5c2.986 0 2.894.009 3.201-.299.18-.18.299-.459.299-.701 0-.242-.119-.521-.299-.701-.309-.309-.203-.3-3.298-.294-1.509.003-2.845.02-2.97.038m8.231.02a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489c.061.103.17.234.243.289.277.211.365.222 1.84.222h1.364l-2.224 2.23c-2.011 2.017-2.23 2.249-2.289 2.427-.129.39-.044.766.234 1.044s.654.363 1.044.234c.178-.059.41-.278 2.427-2.289L19 6.422v1.359c0 .813.017 1.419.042 1.508.061.22.273.473.489.585a.987.987 0 0 0 1.169-.172c.309-.309.3-.215.3-3.202 0-2.986.009-2.894-.299-3.201-.308-.308-.213-.299-3.218-.296-2.207.002-2.69.012-2.819.06" }) }));
    };
    var import_jsx_runtime43 = require("react/jsx-runtime");
    var Eyeoff = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("path", { d: "M3.019 2.955c-.483.219-.722.82-.519 1.305.047.111.389.483 1.126 1.224l1.059 1.063-.337.286c-.512.435-1.372 1.339-1.74 1.829-.675.899-.979 1.78-.979 2.838 0 1.035.307 1.942.946 2.795a11.8 11.8 0 0 0 7.065 4.464c2.048.419 4.136.288 6.132-.386l.553-.186 1.447 1.443c1.377 1.372 1.459 1.446 1.665 1.506.268.079.337.079.587.005.57-.169.861-.814.618-1.368-.071-.161-1.47-1.578-8.334-8.444-6.469-6.471-8.291-8.272-8.446-8.35a1.066 1.066 0 0 0-.843-.024m7.983 1.09c-.762.063-1.567.214-2.355.443l-.293.085.825.826.825.826.394-.07c1.999-.357 4.161-.039 5.999.883a10.016 10.016 0 0 1 3.208 2.574c.496.615.691 1.073.741 1.739.071.937-.367 1.767-1.521 2.881-.212.204-.385.384-.385.4 0 .016.311.339.691.719l.691.69.504-.51c.864-.877 1.278-1.401 1.564-1.982a4.384 4.384 0 0 0 .479-2.049c0-.749-.145-1.371-.478-2.047-.473-.961-1.774-2.359-3.011-3.236-2.328-1.65-5.059-2.403-7.878-2.172m.598 2.976c-.033.007-.19.033-.35.059-.159.026-.29.059-.29.074s.455.481 1.01 1.036c.996.995 1.013 1.009 1.223 1.049.584.11.933.457 1.051 1.048.045.221.05.228 1.076 1.253l1.031 1.031.049-.216c.075-.331.098-1.19.041-1.546a4.508 4.508 0 0 0-3.881-3.768c-.278-.036-.821-.047-.96-.02m-3.857 3.018c-.216.684-.285 1.254-.223 1.86.199 1.96 1.524 3.485 3.46 3.986.307.079.458.093 1.02.092.693 0 1.046-.058 1.563-.255l.217-.082.478.479c.263.263.468.488.456.5-.036.036-.85.212-1.332.289-.546.086-2.146.098-2.642.019-1.924-.306-3.477-.96-4.836-2.038-.806-.64-1.731-1.678-1.986-2.229-.199-.429-.255-.684-.254-1.16.001-.445.074-.781.251-1.16.233-.498.936-1.308 1.705-1.967l.48-.411.874.873.873.873-.104.331m3.097 2.666 1.3 1.304-.322-.023a2.673 2.673 0 0 1-1.185-.399c-.661-.439-1.113-1.24-1.113-1.969 0-.12.005-.218.01-.218.006 0 .595.587 1.31 1.305" }) }));
    };
    var import_jsx_runtime44 = require("react/jsx-runtime");
    var Eyeon = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("path", { d: "M10.96 4.544c-2.31.266-4.109.934-5.825 2.165-1.149.823-2.38 2.096-2.89 2.987a4.609 4.609 0 0 0 0 4.608c.225.394.749 1.052 1.253 1.572a11.808 11.808 0 0 0 7.144 3.548c.713.087 2.003.087 2.716 0a11.808 11.808 0 0 0 7.144-3.548c.761-.787 1.277-1.507 1.538-2.149a4.645 4.645 0 0 0-.285-4.031c-.373-.653-1.365-1.764-2.169-2.43-1.714-1.42-3.59-2.27-5.806-2.629-.416-.068-.736-.087-1.6-.097a25.21 25.21 0 0 0-1.22.004m2.65 2.091c1.02.181 1.766.419 2.65.842a9.482 9.482 0 0 1 2.622 1.842c1.115 1.112 1.453 1.736 1.453 2.681 0 .934-.339 1.568-1.413 2.642a9.707 9.707 0 0 1-5.022 2.674 10.373 10.373 0 0 1-3.8 0 9.707 9.707 0 0 1-5.022-2.674C4.004 13.568 3.665 12.934 3.665 12c0-.945.338-1.569 1.453-2.681A9.482 9.482 0 0 1 7.74 7.477a9.506 9.506 0 0 1 2.747-.853c.624-.095.662-.096 1.693-.084.758.009 1.059.029 1.43.095m-2.454.947c-.872.158-1.724.627-2.383 1.311-.532.552-.831 1.044-1.049 1.727a4.497 4.497 0 0 0 .535 3.88c.202.309.932 1.039 1.241 1.241.766.5 1.604.752 2.5.752.896 0 1.734-.252 2.5-.752.309-.202 1.039-.932 1.241-1.241a4.516 4.516 0 0 0 .753-2.5 4.2 4.2 0 0 0-.218-1.38c-.218-.683-.517-1.175-1.049-1.727-.677-.704-1.508-1.154-2.422-1.314-.413-.073-1.24-.071-1.649.003m1.436 1.999c.89.209 1.618.938 1.828 1.829a2.67 2.67 0 0 1-.183 1.685c-.427.874-1.256 1.39-2.237 1.39-.981 0-1.81-.516-2.237-1.39-.326-.671-.327-1.529 0-2.187a2.49 2.49 0 0 1 1.629-1.326 3.27 3.27 0 0 1 1.2-.001" }) }));
    };
    var import_jsx_runtime45 = require("react/jsx-runtime");
    var File = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
        "path",
        {
          d: "M6.503 3.042c-1.018.173-1.947.934-2.301 1.883-.208.556-.201.308-.201 7.067-.001 6.886-.012 6.558.233 7.159a3.046 3.046 0 0 0 1.615 1.615c.595.242.372.234 6.151.234 5.777 0 5.556.008 6.15-.233a3.08 3.08 0 0 0 1.617-1.617c.24-.591.233-.414.233-5.73 0-5.284.005-5.154-.221-5.71-.214-.528-.347-.684-1.916-2.265-.837-.844-1.654-1.64-1.815-1.769a3.371 3.371 0 0 0-1.108-.581c-.223-.067-.53-.072-4.24-.079-2.2-.004-4.089.007-4.197.026M13 6.142c0 1.249.03 1.509.234 2.009a3.046 3.046 0 0 0 1.615 1.615c.5.204.76.234 2.009.234H18v4.073c0 4.581.017 4.312-.299 4.628-.32.32.082.299-5.701.299-5.783 0-5.381.021-5.701-.299C5.977 18.379 6 18.903 6 12c0-6.904-.024-6.379.3-6.702.304-.304.145-.291 3.61-.295L13 5v1.142m3.713 1.849c-.993.012-1.142-.018-1.413-.289-.269-.269-.3-.415-.3-1.419V5.42l1.28 1.28 1.281 1.28-.848.011",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime46 = require("react/jsx-runtime");
    var FileSmall = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
        "path",
        {
          d: "M7.579 3.042C5.837 3.211 4.403 4.544 4.073 6.3c-.078.41-.078 10.99 0 11.4a4.015 4.015 0 0 0 2.647 3.072c.617.211.534.208 5.28.208 3.485 0 4.479-.011 4.7-.053a4.025 4.025 0 0 0 3.038-2.545c.246-.653.235-.44.251-5.16.015-4.287.014-4.322-.07-4.72a4.452 4.452 0 0 0-.619-1.488c-.337-.511-2.8-2.975-3.31-3.311a4.2 4.2 0 0 0-1.43-.606l-.42-.096-3.12.005c-1.716.003-3.265.019-3.441.036m5.432 3.208c.022 1.416.047 1.562.36 2.169.232.449.761.978 1.21 1.21.607.313.753.338 2.169.36l1.25.021-.001 3.645c-.001 2.312-.016 3.709-.041 3.821-.154.664-.818 1.328-1.482 1.482-.241.055-8.711.055-8.952 0-.664-.154-1.328-.818-1.482-1.482-.055-.242-.055-10.71 0-10.952.151-.654.818-1.328 1.466-1.48.084-.02 1.351-.038 2.817-.04L12.99 5l.021 1.25m3.679 1.741c-.731.01-.898.001-1.044-.055a1.007 1.007 0 0 1-.552-.516c-.089-.191-.093-.242-.094-1.1v-.9l1.28 1.28 1.281 1.28-.871.011m-7.93 3.048c-.264.049-.367.097-.507.24-.313.32-.305 1.136.014 1.454.236.236.328.247 2.133.247 1.469 0 1.638-.007 1.808-.073.355-.136.512-.415.512-.907 0-.481-.138-.738-.479-.896-.173-.08-.249-.084-1.741-.091-.858-.003-1.641.008-1.74.026m0 4.001c-.264.047-.367.096-.507.239-.313.32-.305 1.136.014 1.454.247.248.237.247 3.133.247 2.435 0 2.633-.005 2.808-.073.355-.136.512-.415.512-.907 0-.481-.138-.738-.479-.896-.177-.082-.232-.084-2.741-.09-1.408-.004-2.641.008-2.74.026",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime47 = require("react/jsx-runtime");
    var Filter = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
        "path",
        {
          d: "M5.503 3.042c-1.016.172-1.947.934-2.301 1.883-.182.488-.201.692-.201 2.235 0 1.666.019 1.817.284 2.36.164.337.189.363 2.396 2.58 1.226 1.232 2.25 2.279 2.274 2.327.032.062.045.851.045 2.684 0 2.453.004 2.613.079 2.905a2.5 2.5 0 0 0 2.557 1.895c.31-.018.519-.077 2.065-.59.945-.314 1.844-.635 1.997-.715.58-.301 1.049-.911 1.223-1.59.074-.288.079-.45.079-2.405 0-1.465.013-2.123.045-2.184.024-.048 1.048-1.095 2.274-2.327 2.895-2.908 2.679-2.51 2.68-4.932.001-1.585-.02-1.797-.233-2.319a2.99 2.99 0 0 0-1.47-1.537c-.657-.316-.005-.289-7.176-.297-3.531-.003-6.509.009-6.617.027M18.34 5.066c.253.087.507.341.594.594.056.165.066.39.066 1.51 0 .89-.014 1.344-.045 1.403-.024.048-1.048 1.095-2.274 2.327-2.207 2.217-2.232 2.243-2.396 2.58-.277.567-.284.632-.284 2.98-.001 1.988-.005 2.086-.079 2.207a.56.56 0 0 1-.168.176c-.157.084-3.168 1.077-3.265 1.077-.144 0-.325-.111-.411-.252-.075-.123-.078-.22-.079-2.708 0-2.9 0-2.9-.284-3.48-.164-.337-.189-.363-2.396-2.58-1.226-1.232-2.25-2.279-2.274-2.327C5.014 8.514 5 8.06 5 7.17c0-1.505.013-1.585.3-1.872.314-.314-.209-.291 6.683-.295 5.637-.003 6.179.003 6.357.063",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime48 = require("react/jsx-runtime");
    var Flag = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
        "path",
        {
          d: "M5.643 3.067a1.082 1.082 0 0 0-.577.593C5.005 3.838 5 4.557 5 12.497c0 5.831.014 8.691.042 8.792.061.22.273.473.489.585a.987.987 0 0 0 1.169-.172c.313-.313.3-.151.3-3.749V14.76h.798c1.432 0 3.517-.341 5.03-.823.638-.204.998-.255 1.792-.256.895-.001 1.839.119 2.34.298.099.035.306.14.459.233.262.158.297.168.58.168.257 0 .329-.016.49-.111a.986.986 0 0 0 .45-.547c.09-.255.091-8.77.001-9.152-.165-.698-.64-1.218-1.329-1.457-.257-.088-.325-.093-1.311-.093-1.099 0-1.347.022-2.56.225-1.01.17-1.909.373-2.54.575-.664.213-.99.26-1.787.26-1.023 0-1.892-.238-2.559-.701a4.825 4.825 0 0 0-.454-.285c-.195-.093-.542-.106-.757-.027M17 8.464c0 3.283-.004 3.463-.07 3.437a7.553 7.553 0 0 0-.61-.112c-.458-.072-.714-.085-1.68-.084-1.297 0-1.471.025-2.508.353-.601.189-1.531.392-2.592.566-.512.083-.83.108-1.59.125L7 12.77V5.689l.31.095c.793.246 1.031.276 2.15.275 1.187-.001 1.397-.03 2.298-.317.628-.201 1.183-.329 2.163-.5 1.048-.183 1.543-.233 2.349-.238L17 5v3.464",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime49 = require("react/jsx-runtime");
    var Folder = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
        "path",
        {
          d: "M4.5 4.059c-.683.151-1.316.557-1.805 1.161a3.084 3.084 0 0 0-.615 1.201C2.002 6.725 2 6.871 2 12s.002 5.275.08 5.579c.282 1.102 1.238 2.059 2.339 2.341.309.079.435.08 7.581.08 7.146 0 7.272-.001 7.581-.08 1.098-.281 2.058-1.241 2.339-2.339.078-.305.08-.439.08-4.581s-.002-4.276-.08-4.581c-.263-1.026-1.098-1.917-2.143-2.287l-.317-.112-3.721-.011-3.722-.011-.998-.999L10.021 4l-2.641.003c-2.03.003-2.695.016-2.88.056M10.18 7l.999 1h3.961c2.604 0 4.011.015 4.109.042.211.059.469.268.61.496l.121.196v8.532l-.121.196c-.141.228-.399.437-.61.496-.1.028-2.491.041-7.289.041-6.824-.001-7.147-.004-7.3-.074a1.168 1.168 0 0 1-.531-.479l-.109-.186V6.734l.12-.193c.066-.106.185-.246.265-.31.284-.229.267-.227 2.615-.229L9.181 6l.999 1",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime50 = require("react/jsx-runtime");
    var Food = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
        "path",
        {
          d: "M11.32 2.044A6.03 6.03 0 0 0 7.022 4.66 6.228 6.228 0 0 0 6.017 7.5c-.026.257-.042.293-.188.44-.555.556-.867 1.403-.816 2.219.055.879.405 1.57 1.096 2.163.241.206.778.498.999.542l.128.025 1.427 4.279c1.556 4.666 1.495 4.514 1.876 4.71l.199.102h2.524l.199-.102c.381-.196.32-.045 1.875-4.705l1.425-4.273.229-.074c.879-.283 1.663-1.124 1.909-2.046.264-.988-.032-2.142-.728-2.84-.146-.147-.162-.183-.188-.44-.346-3.411-3.302-5.831-6.663-5.456m1.638 2.076a4.186 4.186 0 0 1 1.865 1.057c.342.342.569.671.801 1.16.232.491.337.952.372 1.642.038.743.085.84.602 1.228.473.355.524 1.073.107 1.49a.984.984 0 0 1-1.41 0A1.081 1.081 0 0 1 15 9.98c0-.651-.701-1.138-1.322-.919-.405.143-.621.435-.675.913-.058.517-.276.828-.678.965a.946.946 0 0 1-.665-.005c-.369-.126-.66-.538-.66-.934 0-.671-.691-1.162-1.322-.939-.406.143-.616.428-.678.92-.048.376-.157.618-.351.778a.998.998 0 0 1-1.354-.062 1.001 1.001 0 0 1 .107-1.49c.517-.388.564-.485.602-1.228.035-.69.14-1.151.372-1.642.232-.489.459-.818.801-1.16.598-.598 1.396-1 2.256-1.137.35-.056 1.139-.014 1.525.08M10.08 12.3c.11.133.641.422 1 .546.356.123.414.131.92.131s.564-.008.918-.13c.373-.129.735-.322.961-.512l.116-.098.189.144c.103.079.257.183.342.231.084.049.154.106.154.128 0 .022-.109.366-.241.763l-.241.724-1.946.707c-1.071.389-1.959.694-1.974.677-.034-.037-.959-2.814-.957-2.871.001-.022.119-.112.263-.2.143-.088.289-.192.324-.23.079-.086.108-.087.172-.01m3.28 4.41c0 .016-.244.763-.543 1.66L12.273 20h-.546l-.404-1.21c-.318-.952-.393-1.217-.352-1.245.066-.043 2.271-.855 2.339-.861.028-.002.05.009.05.026",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime51 = require("react/jsx-runtime");
    var Grid = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
        "path",
        {
          d: "M3.58 2.047c-.721.138-1.381.801-1.536 1.545-.071.343-.057 2.044.019 2.342a2.058 2.058 0 0 0 1.25 1.4c.214.081.297.086 1.427.086 1.368 0 1.42-.01 1.899-.362.281-.207.557-.564.689-.889.089-.222.092-.268.092-1.429 0-1.13-.005-1.213-.086-1.427a2.042 2.042 0 0 0-1.418-1.251c-.295-.07-1.991-.081-2.336-.015m7.28 0c-.502.096-1.091.531-1.333.985-.221.415-.247.597-.247 1.712 0 .912.008 1.034.084 1.282.198.643.633 1.093 1.276 1.32.247.088.314.092 1.36.092s1.113-.004 1.36-.092c.634-.224 1.045-.642 1.26-1.282.096-.287.1-.337.1-1.313 0-.782-.014-1.068-.061-1.249-.19-.728-.828-1.326-1.556-1.459-.287-.052-1.963-.049-2.243.004m7.205.016c-.65.158-1.208.679-1.425 1.332-.08.241-.084.322-.072 1.4.012 1.086.017 1.157.105 1.374.201.499.658.956 1.158 1.159.222.089.268.092 1.429.092 1.13 0 1.213-.005 1.427-.086a2.054 2.054 0 0 0 1.251-1.418c.074-.313.087-1.993.018-2.324-.159-.762-.818-1.411-1.573-1.549-.354-.064-2.027-.05-2.318.02M3.56 9.324c-.482.094-1.106.574-1.335 1.025-.19.376-.224.625-.224 1.651 0 1.019.034 1.276.219 1.639.143.284.536.686.812.834.416.221.596.247 1.719.247.976 0 1.026-.004 1.313-.1.64-.215 1.058-.626 1.282-1.26.088-.247.092-.314.092-1.36s-.004-1.113-.092-1.36a1.967 1.967 0 0 0-.933-1.11c-.422-.225-.6-.25-1.691-.246-.54.003-1.063.021-1.162.04m7.204.019a2.04 2.04 0 0 0-1.404 1.371c-.071.226-.08.368-.08 1.286s.009 1.06.08 1.286a2.024 2.024 0 0 0 1.422 1.373c.337.087 2.099.087 2.436 0a2.037 2.037 0 0 0 1.441-1.441c.087-.337.087-2.099 0-2.436a2.037 2.037 0 0 0-1.441-1.441c-.326-.085-2.136-.083-2.454.002m7.287-.001a2.03 2.03 0 0 0-1.412 1.332c-.07.227-.079.371-.079 1.323 0 1.176.02 1.314.249 1.718.147.258.471.591.714.733.097.057.3.141.451.188.248.076.37.084 1.282.084 1.115 0 1.297-.026 1.712-.247.458-.244.877-.816.988-1.345.025-.119.044-.614.044-1.128 0-.514-.019-1.009-.044-1.128-.156-.747-.825-1.416-1.551-1.552-.337-.063-2.101-.047-2.354.022M3.476 16.618a2.073 2.073 0 0 0-1.413 1.448c-.076.298-.09 1.999-.019 2.342.157.75.798 1.391 1.548 1.548.331.069 2.011.056 2.324-.018a2.052 2.052 0 0 0 1.418-1.251c.079-.209.087-.318.098-1.342.012-1.03.006-1.136-.069-1.385a2.02 2.02 0 0 0-1.384-1.338c-.307-.08-2.216-.083-2.503-.004m7.284-.001a2.12 2.12 0 0 0-.877.503 1.83 1.83 0 0 0-.519.854c-.076.248-.084.37-.084 1.282 0 .775.014 1.061.061 1.242a2.044 2.044 0 0 0 1.531 1.457c.276.059 1.977.059 2.256.001.529-.111 1.101-.53 1.345-.988.221-.416.247-.596.247-1.719 0-.976-.004-1.026-.1-1.313-.125-.371-.255-.58-.524-.838a2.09 2.09 0 0 0-.876-.484c-.269-.072-2.199-.069-2.46.003m7.243.007c-.62.166-1.17.701-1.363 1.324-.072.234-.08.37-.079 1.346.001 1.034.005 1.099.094 1.35a2.018 2.018 0 0 0 1.429 1.294c.313.074 1.993.087 2.324.018a2.062 2.062 0 0 0 1.548-1.548c.069-.331.056-2.011-.018-2.324a2.042 2.042 0 0 0-1.433-1.468c-.297-.08-2.2-.074-2.502.008",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime52 = require("react/jsx-runtime");
    var H1 = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
        "path",
        {
          d: "M3 12.18V18h2.48v-4.8h5V18h2.44V6.36h-2.44v4.8h-5v-4.8H3v5.82m13.19-4.908-1.429.908-.001 1.09v1.091l.33-.207 1.34-.84a33.972 33.972 0 0 1 1.03-.634c.011 0 .02 2.097.02 4.66V18h2.44V6.36l-1.15.002-1.15.003-1.43.907",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime53 = require("react/jsx-runtime");
    var H2 = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
        "path",
        {
          d: "M17.42 6.226c-.798.095-1.207.205-1.7.456-.412.211-.61.35-.913.645-.612.597-.94 1.338-1.029 2.324l-.028.31 1.175-.01L16.1 9.94l.01-.14c.074-1.071.797-1.695 1.89-1.63 1.046.062 1.684.745 1.631 1.743-.024.441-.129.735-.409 1.147-.345.507-.907 1.065-3.196 3.18l-2.144 1.98-.001.89-.001.89h8.28v-2h-2.443c-1.935 0-2.44-.01-2.43-.05.008-.027.42-.446.916-.93 2.133-2.08 2.399-2.349 2.733-2.763.567-.705.874-1.29 1.001-1.905.078-.382.081-1.082.005-1.439-.261-1.23-1.289-2.198-2.705-2.547-.53-.131-1.356-.195-1.817-.14M2 12.18V18h2.48v-4.8h5V18h2.44V6.36H9.48v4.8h-5v-4.8H2v5.82",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime54 = require("react/jsx-runtime");
    var H3 = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
        "path",
        {
          d: "M17.058 6.242c-1.751.2-3.123 1.25-3.458 2.648-.044.182-.08.416-.08.521v.19l1.167-.01 1.167-.011.045-.22c.061-.294.152-.457.385-.684.373-.363.897-.538 1.516-.506.678.036 1.14.298 1.392.792.306.601.176 1.309-.319 1.736-.413.356-.821.462-1.779.462H16.4v1.79l.81.021c.88.024 1.104.064 1.516.272.597.301.909.82.865 1.438-.048.67-.527 1.182-1.289 1.378-.307.078-.936.079-1.244 0-.712-.182-1.215-.643-1.287-1.18l-.022-.159h-2.48l.027.302c.117 1.288 1.073 2.362 2.547 2.859.934.315 2.293.356 3.346.099 1.576-.384 2.692-1.417 2.914-2.7.283-1.629-.645-2.913-2.315-3.202-.154-.027-.266-.065-.258-.089.008-.023.139-.076.292-.118a2.522 2.522 0 0 0 1.202-.69c.368-.364.54-.669.636-1.121a2.964 2.964 0 0 0-.596-2.446c-.516-.655-1.357-1.132-2.318-1.314-.404-.077-1.265-.107-1.688-.058M1.52 12.18V18h2.44v-4.8h5V18h2.48V6.36H8.96v4.8h-5v-4.8H1.52v5.82",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime55 = require("react/jsx-runtime");
    var Hand = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("path", { d: "M11.66 1.022c-.044.01-.179.039-.3.063a2.77 2.77 0 0 0-.5.173c-.472.219-.791.494-1.15.991-.047.066-.064.065-.31-.013-.362-.116-.972-.143-1.359-.06a2.707 2.707 0 0 0-1.859 1.437c-.28.573-.276.523-.292 3.012L5.875 8.87l-.148-.034c-.272-.063-.894-.041-1.225.043-.957.245-1.722 1.04-1.948 2.024-.041.181-.053.627-.05 1.877.003 1.467.012 1.699.089 2.202.104.678.302 1.417.546 2.042 1.091 2.791 3.539 4.935 6.479 5.675.883.222 1.369.279 2.382.279 1.013 0 1.499-.057 2.382-.279 3.591-.904 6.349-3.848 6.979-7.45.138-.793.165-1.623.149-4.669-.014-2.608-.022-2.903-.086-3.119-.287-.969-1.009-1.683-1.949-1.926-.278-.072-.816-.093-1.139-.044l-.204.03-.024-.57c-.028-.646-.088-.926-.29-1.338a2.707 2.707 0 0 0-1.859-1.437c-.387-.083-.997-.056-1.359.06-.246.078-.263.079-.31.013-.445-.617-.943-.98-1.579-1.153-.216-.059-.907-.107-1.051-.074m.659 2.068a.869.869 0 0 1 .259.203c.081.112.082.156.102 3.96.02 3.795.021 3.849.104 4.027.094.204.283.409.47.511.175.094.717.094.892 0 .187-.102.376-.307.47-.511.082-.177.084-.24.104-3.46.015-2.539.031-3.3.071-3.368a.88.88 0 0 1 .196-.2c.127-.097.183-.112.413-.112.23 0 .286.015.413.112a.88.88 0 0 1 .196.2c.04.068.056.829.071 3.368.02 3.22.022 3.283.104 3.46.094.204.283.409.47.511.175.094.717.094.892 0 .187-.102.376-.307.47-.511.08-.171.085-.265.104-1.8.018-1.492.026-1.629.094-1.729.273-.402.929-.386 1.186.028.083.136.083.144.07 3.508l-.014 3.373-.105.466c-.341 1.506-1.02 2.718-2.117 3.777-2.892 2.793-7.576 2.793-10.468 0-1.098-1.06-1.782-2.281-2.115-3.777-.101-.453-.105-.513-.12-2.166l-.017-1.7.094-.139c.152-.225.328-.321.592-.321.251 0 .424.088.576.293.081.109.085.168.104 1.74.02 1.609.021 1.629.114 1.817.18.361.503.562.906.563.407 0 .751-.223.93-.604.065-.139.071-.496.09-5.109.016-3.893.031-4.979.071-5.048a.88.88 0 0 1 .196-.2c.127-.097.183-.112.413-.112.23 0 .286.015.413.112a.88.88 0 0 1 .196.2c.04.068.056.829.071 3.368.02 3.22.022 3.283.104 3.46.094.204.283.409.47.511.175.094.717.094.892 0 .187-.102.376-.307.47-.511.083-.178.084-.232.104-4.027.02-3.804.021-3.848.102-3.96.107-.146.396-.293.578-.293a.87.87 0 0 1 .319.09" }) }));
    };
    var import_jsx_runtime56 = require("react/jsx-runtime");
    var Heart = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
        "path",
        {
          d: "M6.3 2.58a6.31 6.31 0 0 0-2.146.832C2.164 4.691 1.144 7.11 1.621 9.42c.241 1.172.94 2.525 1.95 3.78 1.357 1.686 4.766 5.278 6.809 7.175.903.839 1.054.925 1.62.925.561 0 .717-.088 1.6-.907 2.258-2.093 5.934-5.999 7.129-7.576.597-.786 1.206-1.904 1.449-2.656.424-1.316.426-2.523.005-3.755a5.765 5.765 0 0 0-4.543-3.831c-.517-.085-1.635-.054-2.12.059-1.189.278-2.069.794-3.21 1.881l-.31.296-.31-.296c-1.138-1.084-2.021-1.602-3.21-1.881-.453-.107-1.708-.138-2.18-.054m1.94 2.058c.437.128.895.356 1.262.63a8.662 8.662 0 0 1 1.363 1.316c.459.588.692.745 1.118.752.371.006.645-.15.975-.557.377-.465 1.131-1.207 1.52-1.495.514-.381.995-.6 1.556-.708a4.787 4.787 0 0 1 1.478.007c1.293.265 2.389 1.258 2.8 2.537.256.794.223 1.749-.086 2.57-.25.662-.755 1.503-1.339 2.23-.617.768-1.793 2.082-3.197 3.57-.87.922-3.191 3.23-3.514 3.495L12 19.13l-.19-.154c-.353-.286-3.468-3.429-4.338-4.376-2.27-2.474-2.931-3.311-3.455-4.38-.352-.718-.46-1.109-.487-1.751-.031-.762.075-1.283.389-1.909A3.832 3.832 0 0 1 6.46 4.584c.416-.092 1.378-.063 1.78.054",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime57 = require("react/jsx-runtime");
    var Home = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
        "path",
        {
          d: "M11.451 2.4a3.8 3.8 0 0 0-1.624.614c-.402.263-5.414 4.7-5.794 5.128a4.056 4.056 0 0 0-.94 1.859c-.068.314-.073.601-.073 3.899 0 3.251.006 3.588.071 3.887.35 1.623 1.59 2.836 3.209 3.14.41.078 10.99.078 11.4 0a4.015 4.015 0 0 0 3.072-2.647c.208-.609.208-.603.208-4.4 0-3.273-.005-3.566-.073-3.878a4.094 4.094 0 0 0-.943-1.863c-.383-.433-5.392-4.863-5.798-5.13a3.986 3.986 0 0 0-1.288-.55c-.364-.077-1.09-.107-1.427-.059m1.15 2.041c.143.042.344.131.447.199.196.13 4.791 4.194 5.313 4.699.166.161.35.381.409.489.234.431.23.36.229 4.07-.001 2.148-.016 3.467-.041 3.578-.154.664-.818 1.328-1.482 1.482-.097.022-.467.04-.823.041l-.647.001-.016-2.25c-.016-2.19-.019-2.258-.106-2.549-.159-.533-.38-.9-.782-1.303a2.832 2.832 0 0 0-1.324-.786c-.306-.089-.373-.092-1.778-.092s-1.472.003-1.778.092a2.832 2.832 0 0 0-1.324.786c-.402.403-.623.77-.782 1.303-.087.291-.09.359-.106 2.549L7.994 19l-.647-.001c-.356-.001-.726-.019-.823-.041-.664-.154-1.328-.818-1.482-1.482-.025-.111-.04-1.43-.041-3.578-.001-3.701-.004-3.64.225-4.062.057-.104.176-.265.264-.357.213-.221 5.113-4.578 5.364-4.769.465-.353 1.111-.453 1.747-.269m.819 9.654c.24.114.387.263.497.505.078.174.081.254.082 2.29L14 19h-4l.001-2.11c.001-2.036.004-2.116.082-2.29a.951.951 0 0 1 .497-.505c.197-.093.22-.094 1.42-.094s1.223.001 1.42.094",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime58 = require("react/jsx-runtime");
    var Italic = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
        "path",
        {
          d: "M10 6v1h2.002l-.022.09c-.022.093-1.98 9.881-1.98 9.9 0 .005-.45.01-1 .01H8v2h6v-2h-2.002l.022-.09c.022-.093 1.98-9.881 1.98-9.9 0-.005.45-.01 1-.01h1V5h-6v1",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime59 = require("react/jsx-runtime");
    var Key = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(Svg, __spreadProps2(__spreadValues2({}, props), { children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M17.9 7.9C17.9 8.45228 17.4523 8.9 16.9 8.9C16.3477 8.9 15.9 8.45228 15.9 7.9C15.9 7.34772 16.3477 6.9 16.9 6.9C17.4523 6.9 17.9 7.34772 17.9 7.9Z" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3 17.6C3 17.3597 3.09607 17.1294 3.26681 16.9604L10.1352 10.1607C10.0466 9.75391 10 9.33198 10 8.9C10 5.64152 12.6415 3 15.9 3C19.1585 3 21.8 5.64152 21.8 8.9C21.8 12.1585 19.1585 14.8 15.9 14.8C15.4645 14.8 14.9296 14.7311 14.4372 14.633C14.2259 14.5909 14.0093 14.5409 13.8 14.4838L13.8 15.9C13.8 16.3971 13.3971 16.8 12.9 16.8L11.3 16.8L11.3 17.9C11.3 18.3971 10.8971 18.8 10.4 18.8L9 18.8L9 19.9C9 20.3971 8.59706 21 8.1 21L4 21C3.50294 21 3 20.3971 3 19.9L3 17.6ZM11.7726 11.0726L5 17.9754L5 19L7.2 19L7.2 17.9C7.2 17.4029 7.60294 17 8.1 17L9.5 17L9.5 15.9C9.5 15.4029 9.90294 15 10.4 15L12 15L12 13.9C12 13.6613 12.0948 13.4324 12.2636 13.2636L12.7636 12.7636C13.0255 12.5017 13.421 12.427 13.7603 12.5753C13.9825 12.6724 14.3591 12.7821 14.7888 12.8677C15.2155 12.9527 15.6244 13 15.9 13C18.1644 13 20 11.1644 20 8.9C20 6.63563 18.1644 4.8 15.9 4.8C13.6356 4.8 11.8 6.63563 11.8 8.9C11.8 9.34006 11.869 9.76226 11.9961 10.1573C12.1 10.4802 12.0136 10.834 11.7726 11.0726Z"
          }
        )
      ] }));
    };
    var import_jsx_runtime60 = require("react/jsx-runtime");
    var Laptop = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
        "path",
        {
          d: "M6.362 4.061c-.835.151-1.583.65-1.961 1.309a3.663 3.663 0 0 0-.359 1.07c-.056.354-.056 7.766 0 8.12.054.343.21.81.357 1.066.396.691 1.181 1.198 2.066 1.334.186.029 2.024.039 5.695.031l5.42-.012.296-.091c.584-.18.987-.426 1.349-.822.286-.314.493-.689.642-1.166l.113-.36.012-3.88c.013-4.102.008-4.251-.172-4.78a2.39 2.39 0 0 0-.585-.977c-.425-.453-.949-.726-1.622-.843-.485-.085-10.783-.083-11.251.001m10.993 2.001a.862.862 0 0 1 .584.589c.055.189.061.658.052 3.892-.011 3.647-.012 3.678-.096 3.86-.046.1-.151.248-.233.327-.295.287.06.27-5.682.27-5.774 0-5.401.019-5.703-.283C5.99 14.43 6 14.584 6 10.5c0-4.091-.011-3.929.28-4.22.291-.291-.048-.274 5.703-.277 4.559-.003 5.187.004 5.372.059M2.664 18.063a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489c.129.22.306.365.547.45.152.054 1.238.061 9.32.061 10.267 0 9.377.027 9.703-.299a.984.984 0 0 0 0-1.402c-.326-.327.566-.299-9.718-.296-7.848.002-9.185.011-9.319.06",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime61 = require("react/jsx-runtime");
    var Link2 = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(Svg, __spreadProps2(__spreadValues2({}, props), { children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.92894 19.0711C2.97632 17.1185 2.97632 13.9526 4.92894 12L7.05026 9.87869C7.44079 9.48817 8.07395 9.48817 8.46448 9.87869C8.855 10.2692 8.855 10.9024 8.46448 11.2929L6.34316 13.4142C5.17158 14.5858 5.17158 16.4853 6.34316 17.6569C7.51473 18.8284 9.41423 18.8284 10.5858 17.6569L12.7071 15.5355C13.0976 15.145 13.7308 15.145 14.1213 15.5355C14.5119 15.9261 14.5119 16.5592 14.1213 16.9498L12 19.0711C10.0474 21.0237 6.88156 21.0237 4.92894 19.0711Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.0711 4.92894C17.1185 2.97632 13.9526 2.97632 12 4.92894L9.87869 7.05026C9.48817 7.44079 9.48817 8.07395 9.87869 8.46448C10.2692 8.855 10.9024 8.855 11.2929 8.46448L13.4142 6.34316C14.5858 5.17158 16.4853 5.17158 17.6569 6.34316C18.8284 7.51473 18.8284 9.41423 17.6569 10.5858L15.5355 12.7071C15.145 13.0976 15.145 13.7308 15.5355 14.1213C15.9261 14.5119 16.5592 14.5119 16.9498 14.1213L19.0711 12C21.0237 10.0474 21.0237 6.88156 19.0711 4.92894Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.75737 16.2427C7.36685 15.8521 7.36685 15.219 7.75737 14.8284L14.8284 7.75737C15.219 7.36685 15.8521 7.36685 16.2427 7.75737C16.6332 8.1479 16.6332 8.78106 16.2427 9.17158L9.17158 16.2427C8.78106 16.6332 8.14789 16.6332 7.75737 16.2427Z"
          }
        )
      ] }));
    };
    var import_jsx_runtime62 = require("react/jsx-runtime");
    var Locked = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
        "path",
        {
          d: "M11.34 2.046c-.711.09-1.522.404-2.16.834-1.154.779-1.966 2.115-2.138 3.519C7.018 6.595 7 7.639 7 8.869V11H5.927c-1.235 0-1.35.021-1.628.299C3.98 11.617 4 11.277 4 16.5s-.02 4.883.299 5.201c.324.324-.322.299 7.701.299s7.377.025 7.701-.299c.319-.318.299.022.299-5.201s.02-4.883-.299-5.201c-.278-.278-.393-.299-1.628-.299H17V8.869c0-1.23-.018-2.274-.042-2.47a5.2 5.2 0 0 0-.839-2.223c-.271-.405-.89-1.024-1.295-1.295a5.07 5.07 0 0 0-3.484-.835m1.239 2.015c.606.125 1.1.391 1.535.825.304.305.494.586.648.958.229.556.238.67.238 3.014V11H9V8.858c0-2.344.009-2.458.238-3.014a3.009 3.009 0 0 1 2.734-1.841c.171-.002.444.024.607.058M18 16.5V20H6v-7h12v3.5m-7 0V18h2v-3h-2v1.5",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime63 = require("react/jsx-runtime");
    var LongAnswer = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
        "path",
        {
          d: "M5.503 3.042c-1.016.172-1.947.934-2.301 1.883-.208.556-.201.308-.201 7.067-.001 5.509.007 6.328.061 6.589a2.993 2.993 0 0 0 2.357 2.357c.444.092 9.828.092 10.217 0 .529-.124.549-.141 2.872-2.469 2.316-2.321 2.307-2.311 2.432-2.838.09-.385.089-9.773-.002-10.212a2.96 2.96 0 0 0-1.642-2.107c-.657-.316-.005-.289-7.176-.297-3.531-.003-6.509.009-6.617.027M18.34 5.066c.115.039.263.135.361.233.314.314.299.106.299 4.126v3.57l-1.77.015c-1.987.018-1.937.012-2.57.326a2.925 2.925 0 0 0-1.458 1.589c-.185.497-.201.679-.201 2.425L13 19H9.427c-4.022 0-3.814.015-4.128-.299C4.977 18.379 5 18.903 5 12c0-6.904-.024-6.379.3-6.702.314-.314-.209-.291 6.683-.295 5.637-.003 6.179.003 6.357.063M7.252 7.078C7.03 7.213 7 7.325 7 8s.03.787.252.922c.125.076.236.078 4.74.078 5.092 0 4.766.017 4.93-.252C16.99 8.636 17 8.545 17 8c0-.545-.01-.636-.078-.748-.164-.269.162-.252-4.93-.252-4.504 0-4.615.002-4.74.078m0 4C7.03 11.213 7 11.325 7 12s.03.787.252.922c.124.075.22.078 2.748.078s2.624-.003 2.748-.078c.222-.135.252-.247.252-.922s-.03-.787-.252-.922C12.624 11.003 12.528 11 10 11s-2.624.003-2.748.078m0 4C7.03 15.213 7 15.325 7 16s.03.787.252.922c.121.074.212.078 1.748.078s1.627-.004 1.748-.078c.222-.135.252-.247.252-.922s-.03-.787-.252-.922C10.627 15.004 10.536 15 9 15s-1.627.004-1.748.078M19 15.09c0 .128-3.782 3.91-3.91 3.91H15v-1.573c0-1.79.006-1.835.3-2.129.288-.288.314-.291 2.11-.295L19 15v.09",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime64 = require("react/jsx-runtime");
    var Mail = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
        "path",
        {
          d: "M2.664 4.063a1.005 1.005 0 0 0-.533.448L2.02 4.7v14.6l.111.189c.129.22.306.365.547.45.152.054 1.238.061 9.32.061 10.267 0 9.377.027 9.703-.299.324-.324.299.322.299-7.701s.025-7.377-.299-7.701c-.326-.327.566-.299-9.718-.296-7.848.002-9.185.011-9.319.06M15.187 8.36c-1.731 1.298-3.165 2.36-3.187 2.36-.022 0-1.456-1.062-3.187-2.36L5.667 6h12.666l-3.146 2.36M7.79 10.091c2.583 1.937 3.801 2.827 3.915 2.86a.959.959 0 0 0 .59 0c.114-.033 1.332-.923 3.915-2.86a478.782 478.782 0 0 1 3.77-2.811c.011 0 .02 2.412.02 5.36V18H4v-5.36c0-2.948.009-5.36.02-5.36.011 0 1.707 1.265 3.77 2.811",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime65 = require("react/jsx-runtime");
    var MailRounded2 = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
        "path",
        {
          d: "M17 4H7C4.23858 4 2 6.23858 2 9V15C2 17.7614 4.23858 20 7 20H17C19.7614 20 22 17.7614 22 15V9C22 6.23858 19.7614 4 17 4ZM4.86519 6.89226C5.40911 6.34139 6.16469 6 7 6H17C17.8353 6 18.5909 6.34139 19.1348 6.89226L12 10.856L4.86519 6.89226ZM4.01409 8.70734C4.00477 8.80364 4 8.90126 4 9V15C4 16.6569 5.34315 18 7 18H17C18.6569 18 20 16.6569 20 15V9C20 8.90126 19.9952 8.80364 19.9859 8.70734L12.7285 12.7393C12.2754 12.9909 11.7246 12.9909 11.2715 12.7393L4.01409 8.70734Z",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime66 = require("react/jsx-runtime");
    var Maximize = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("path", { d: "M11.664 4.062a1.013 1.013 0 0 0-.533.449c-.095.161-.111.233-.111.489s.016.328.111.489c.061.103.17.234.243.289.29.222.296.222 2.624.222 1.369 0 2.233.016 2.385.043.768.141 1.433.806 1.574 1.574.027.152.043 1.015.043 2.38 0 1.353.016 2.198.042 2.292.099.358.48.664.875.702.435.041.883-.248 1.019-.66.061-.182.066-.439.055-2.577l-.013-2.374-.105-.385a4.034 4.034 0 0 0-1.604-2.283 5.037 5.037 0 0 0-1.311-.598c-.329-.087-.404-.089-2.738-.1-2.027-.009-2.424-.002-2.556.048m-7 7.001a1.005 1.005 0 0 0-.533.448l-.111.189v4.92l.111.397c.421 1.509 1.576 2.591 3.095 2.9.383.078.539.083 2.663.083 2.551 0 2.509.005 2.812-.299a.984.984 0 0 0 0-1.402c-.302-.302-.271-.299-2.726-.299-1.431 0-2.243-.015-2.383-.044-.762-.159-1.411-.818-1.549-1.573C6.016 16.231 6 15.368 6 14c0-2.427.003-2.399-.299-2.701a.996.996 0 0 0-1.037-.236" }) }));
    };
    var import_jsx_runtime67 = require("react/jsx-runtime");
    var MenuDots = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(Svg, __spreadProps2(__spreadValues2({}, props), { children: [
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("path", { d: "M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z" }),
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("path", { d: "M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" }),
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("path", { d: "M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z" })
      ] }));
    };
    var import_jsx_runtime68 = require("react/jsx-runtime");
    var Microphone = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("path", { d: "M11.433 3.04c-.59.094-1.212.34-1.702.672-.775.527-1.335 1.322-1.602 2.277l-.109.391v5.24l.111.397c.347 1.242 1.226 2.235 2.389 2.698a4.028 4.028 0 0 0 3.968-.591 3.932 3.932 0 0 0 1.431-2.359c.081-.4.084-.502.072-2.9l-.013-2.485-.106-.388a4.051 4.051 0 0 0-1.603-2.28 4.76 4.76 0 0 0-1.311-.592c-.386-.094-1.175-.136-1.525-.08m.95 2.003c.379.07.723.256 1.021.553.297.298.483.642.553 1.021.059.324.059 4.442 0 4.766C13.791 12.29 12.932 13 12 13c-.932 0-1.791-.71-1.957-1.617-.059-.324-.059-4.442 0-4.766a1.93 1.93 0 0 1 .553-1.021c.489-.488 1.102-.678 1.787-.553m-6.719 6.02a.986.986 0 0 0-.651.825c-.04.395.26 1.42.634 2.172.982 1.97 2.85 3.396 4.983 3.805l.37.071v1.102c0 .636.018 1.165.042 1.251.061.22.273.473.489.585a.987.987 0 0 0 1.169-.172c.28-.28.3-.39.3-1.661v-1.105l.37-.071c2.411-.462 4.488-2.248 5.308-4.565.157-.443.322-1.111.322-1.303 0-.239-.12-.519-.299-.698a.984.984 0 0 0-1.405.003c-.176.176-.184.197-.397.978a5.753 5.753 0 0 1-.7 1.504 6.094 6.094 0 0 1-.615.721 5.054 5.054 0 0 1-2.584 1.4c-.476.103-1.524.103-2 0a5.196 5.196 0 0 1-3.088-1.965c-.308-.412-.682-1.176-.812-1.66-.209-.775-.22-.802-.396-.978a.995.995 0 0 0-1.04-.239" }) }));
    };
    var import_jsx_runtime69 = require("react/jsx-runtime");
    var Minimize = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
        "path",
        {
          d: "M12.643 3.069c-.242.085-.496.349-.58.602-.061.184-.066.43-.053 2.576.015 2.299.018 2.384.104 2.711a4.282 4.282 0 0 0 1.063 1.865 4.282 4.282 0 0 0 1.865 1.063c.327.086.412.089 2.711.104 2.693.017 2.637.022 2.947-.288a.984.984 0 0 0 .001-1.403c-.302-.302-.271-.299-2.726-.299-1.431 0-2.243-.015-2.383-.044a2.062 2.062 0 0 1-1.548-1.548c-.029-.14-.044-.952-.044-2.383 0-2.455.003-2.424-.299-2.726a.998.998 0 0 0-1.058-.23m-9 8.999C3.289 12.195 3 12.614 3 13c0 .242.119.521.299.701.302.302.274.299 2.701.299 1.368 0 2.231.016 2.383.043.768.141 1.433.806 1.574 1.574.027.152.043 1.015.043 2.383 0 2.427-.003 2.399.299 2.701a.984.984 0 0 0 1.403-.001c.309-.309.303-.252.289-2.946l-.013-2.374-.105-.385a4.034 4.034 0 0 0-1.604-2.283 5.037 5.037 0 0 0-1.311-.598c-.329-.087-.404-.089-2.738-.1-2.11-.009-2.421-.002-2.577.054",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime70 = require("react/jsx-runtime");
    var Moon = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
        "path",
        {
          d: "M13.12 2.039c-1.804.181-3.413.768-4.84 1.767-3.542 2.48-5.102 6.953-3.858 11.059a9.762 9.762 0 0 0 2.517 4.196 9.446 9.446 0 0 0 2.438 1.802c2.709 1.409 5.845 1.508 8.683.275.713-.309.997-.678.926-1.202-.052-.375-.269-.636-.718-.861-.863-.433-1.835-1.239-2.509-2.081a7.999 7.999 0 0 1 0-9.988c.69-.862 1.652-1.65 2.59-2.122.505-.254.747-.739.611-1.225-.09-.321-.329-.537-.849-.769a9.822 9.822 0 0 0-2.642-.773c-.602-.09-1.824-.13-2.349-.078m2.12 2.062c.231.036.434.079.451.095.017.016-.046.091-.14.167-.611.49-1.354 1.326-1.871 2.104-.864 1.302-1.332 2.547-1.607 4.273-.068.425-.068 2.095 0 2.52.275 1.726.743 2.971 1.607 4.273.517.778 1.26 1.614 1.871 2.104.094.076.157.151.14.166-.068.064-.826.163-1.411.184-3.19.118-6.124-1.67-7.507-4.575a8.05 8.05 0 0 1-.596-5.06c.709-3.387 3.559-5.948 7.023-6.311.477-.05 1.542-.019 2.04.06",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime71 = require("react/jsx-runtime");
    var MoreVert = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
        "path",
        {
          d: "M11.58 2.047c-.721.138-1.381.801-1.536 1.545C9.789 4.816 10.751 6 12 6c1.08 0 2-.92 2-2 0-.523-.21-1.017-.596-1.404-.491-.49-1.127-.682-1.824-.549m0 8C10.707 10.214 10 11.087 10 12c0 .92.69 1.768 1.592 1.956C12.816 14.211 14 13.249 14 12c0-.523-.21-1.017-.596-1.404-.491-.49-1.127-.682-1.824-.549m0 8c-.721.138-1.381.801-1.536 1.545C9.789 20.816 10.751 22 12 22c1.08 0 2-.92 2-2 0-.523-.21-1.017-.596-1.404-.491-.49-1.127-.682-1.824-.549",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime72 = require("react/jsx-runtime");
    var Move = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
        "path",
        {
          d: "M8.664 5.063a1.005 1.005 0 0 0-.533.448L8.02 5.7v1.6l.111.189c.246.419.492.511 1.367.511.768 0 .949-.045 1.203-.299.254-.254.299-.435.299-1.201s-.045-.947-.299-1.201c-.256-.256-.434-.3-1.218-.296-.47.002-.709.019-.819.06m4.979.006a1.066 1.066 0 0 0-.577.591c-.094.278-.094 1.402 0 1.68.087.253.341.507.594.594.278.094 1.402.094 1.68 0 .253-.087.507-.341.594-.594.094-.278.094-1.402 0-1.68a1.046 1.046 0 0 0-.594-.594c-.268-.091-1.436-.089-1.697.003m-5 5a1.066 1.066 0 0 0-.577.591c-.094.278-.094 1.402 0 1.68.087.253.341.507.594.594.278.094 1.402.094 1.68 0 .253-.087.507-.341.594-.594.094-.278.094-1.402 0-1.68a1.046 1.046 0 0 0-.594-.594c-.268-.091-1.436-.089-1.697.003m5 0a1.066 1.066 0 0 0-.577.591c-.094.278-.094 1.402 0 1.68.087.253.341.507.594.594.278.094 1.402.094 1.68 0 .253-.087.507-.341.594-.594.094-.278.094-1.402 0-1.68a1.046 1.046 0 0 0-.594-.594c-.268-.091-1.436-.089-1.697.003m-5 5a1.066 1.066 0 0 0-.577.591c-.094.278-.094 1.402 0 1.68.087.253.341.507.594.594.278.094 1.402.094 1.68 0 .253-.087.507-.341.594-.594.094-.278.094-1.402 0-1.68a1.046 1.046 0 0 0-.594-.594c-.268-.091-1.436-.089-1.697.003m5 0a1.066 1.066 0 0 0-.577.591c-.094.278-.094 1.402 0 1.68.087.253.341.507.594.594.278.094 1.402.094 1.68 0 .253-.087.507-.341.594-.594.094-.278.094-1.402 0-1.68a1.046 1.046 0 0 0-.594-.594c-.268-.091-1.436-.089-1.697.003",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime73 = require("react/jsx-runtime");
    var Movie = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
        "path",
        {
          d: "M12.36 2.044a5.364 5.364 0 0 0-2.168.824c-.583.39-1.176 1.035-1.549 1.683-.108.187-.185.281-.215.263a4.878 4.878 0 0 1-.221-.145c-.288-.195-.886-.456-1.267-.554-.507-.129-1.36-.13-1.878-.002a4.86 4.86 0 0 0-1.331.599c-.776.527-1.336 1.324-1.601 2.277-.098.351-.108.454-.106 1.011.003.535.017.673.107 1.008.057.214.18.545.273.735.161.33.165.349.093.388-.158.085-.371.35-.434.539-.058.176-.063.654-.054 4.912L2.02 20.3l.111.189c.061.103.17.234.243.289.309.236-.173.222 7.624.222 7.859 0 7.338.016 7.651-.241.256-.211.328-.423.351-1.031l.02-.532 1.25.844c.687.464 1.324.87 1.415.902a.978.978 0 0 0 1.016-.241c.319-.318.299.022.299-5.201 0-5.229.02-4.882-.303-5.205a.986.986 0 0 0-1.008-.238c-.089.031-.726.437-1.415.902l-1.254.846-.02-.533c-.023-.608-.095-.82-.351-1.031-.146-.12-.438-.241-.581-.241-.073 0-.072-.008.02-.13.317-.425.586-1.015.762-1.669.116-.433.124-.505.126-1.181.002-.654-.008-.759-.106-1.151-.194-.768-.497-1.397-.944-1.957-1.099-1.378-2.843-2.091-4.566-1.868m1.396 2.053c.337.092.839.35 1.117.574C15.554 5.219 16 6.14 16 7c0 .802-.413 1.711-1.02 2.246-1.114.98-2.787 1.003-3.9.051-.456-.39-.866-1.05-1.005-1.617-.069-.282-.07-1.075-.001-1.36.08-.331.415-.991.628-1.24a3.2 3.2 0 0 1 1.801-1.04c.267-.049.988-.016 1.253.057M6.383 6.043c.802.147 1.456.829 1.584 1.652C8.153 8.894 7.209 10 6 10a2.016 2.016 0 0 1-1.967-1.695c-.1-.642.099-1.244.563-1.709.489-.488 1.102-.678 1.787-.553M16 15.5V19H4v-7h12v3.5m4 .001v2.621l-.998-.671-.998-.671v-2.56l.988-.667c.543-.366.993-.668.998-.67.005-.001.01 1.176.01 2.618",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime74 = require("react/jsx-runtime");
    var Music = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
        "path",
        {
          d: "M19.76 2.027c-.033.011-2.363.94-5.178 2.064C9.767 6.013 9.454 6.144 9.298 6.3 8.98 6.617 9 6.275 9 11.531c0 4.149-.007 4.675-.06 4.654-.448-.171-1.664-.219-2.32-.091-2.11.413-3.623 1.793-3.619 3.302.004 1.918 2.246 3.054 4.774 2.421 1.524-.381 2.69-1.317 3.112-2.497l.093-.26.02-3.694.02-3.694 3.84-1.536 3.99-1.596.15-.059v1.864c0 1.643-.007 1.861-.06 1.84-.448-.171-1.664-.219-2.32-.091-2.11.413-3.623 1.793-3.619 3.302.004 1.918 2.246 3.054 4.774 2.421 1.349-.338 2.448-1.129 2.944-2.12.296-.589.28-.194.28-6.86.001-6.72.024-6.216-.298-6.538-.236-.237-.674-.363-.941-.272m-.789 4.294c-.023.02-5.902 2.38-7.782 3.123l-.19.075.01-.923.011-.924L15 6.08l3.98-1.592.011.903c.006.497-.003.916-.02.93m-.561 7.798c.314.098.59.326.59.487 0 .278-.477.753-1.017 1.015-.56.27-.941.358-1.563.358-.655.001-1.029-.099-1.268-.338-.184-.183-.191-.284-.039-.523.315-.497 1.022-.895 1.877-1.057.419-.08 1.063-.053 1.42.058m-10 4c.314.098.59.326.59.487 0 .278-.477.753-1.017 1.015-.56.27-.941.358-1.563.358-.655.001-1.029-.099-1.268-.338-.184-.183-.191-.284-.039-.523.315-.497 1.022-.895 1.877-1.057.419-.08 1.063-.053 1.42.058",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime75 = require("react/jsx-runtime");
    var Nature = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
        "path",
        {
          d: "m17.66 2.024-.88.058c-3.645.234-6.778.964-8.86 2.064-.905.478-1.505.927-2.093 1.567-1.465 1.594-2.301 3.285-2.505 5.067-.214 1.867.417 3.906 1.752 5.669.168.222.34.448.382.501l.076.097-1.616 1.617L2.3 20.28l.71.71.71.71 1.616-1.616 1.617-1.616.097.076c.053.042.279.214.501.382 1.761 1.334 3.764 1.956 5.641 1.752 1.792-.195 3.486-1.028 5.095-2.506.49-.449.733-.738 1.122-1.332 1.313-2.008 2.163-5.161 2.491-9.24.111-1.388.156-3.255.106-4.445-.025-.598-.055-1.098-.068-1.111-.025-.024-3.945-.043-4.278-.02m2.329 3.306c-.077 4.571-.926 8.424-2.315 10.51-.658.987-2.082 2.063-3.354 2.533a4.756 4.756 0 0 1-1.84.325c-.441 0-.718-.021-.96-.072-1.018-.213-2.074-.731-3.005-1.473l-.135-.108 3.92-3.922L16.22 9.2l-.71-.71-.71-.71-3.922 3.92c-3.305 3.303-3.929 3.911-3.97 3.86-.823-1.032-1.327-2.053-1.533-3.105-.105-.531-.095-1.431.021-1.973.229-1.075.794-2.136 1.698-3.187.423-.492.606-.656 1.104-.99 2.083-1.396 6.191-2.274 10.758-2.299L20.011 4l-.022 1.33",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime76 = require("react/jsx-runtime");
    var Notification = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
        "path",
        {
          d: "M11.506 2.042c-.336.056-.717.19-.986.346-.337.196-.936.795-1.131 1.132-.256.441-.388.98-.389 1.583v.323l-.53.268c-1.818.918-3.042 2.474-3.476 4.42-.081.361-.088.537-.116 2.746-.017 1.398-.046 2.433-.071 2.54a2.246 2.246 0 0 1-.345.801c-.255.394-.334.561-.402.848-.075.322-.075.555.001.853.196.761.786 1.31 1.522 1.416.152.022.809.041 1.459.041l1.182.001.208.412a3.996 3.996 0 0 0 3.108 2.191c1.295.169 2.729-.417 3.558-1.453a5.11 5.11 0 0 0 .47-.738l.208-.412 1.182-.001c.65 0 1.305-.018 1.455-.04 1.018-.147 1.731-1.143 1.548-2.159-.059-.324-.148-.53-.405-.929-.205-.32-.288-.512-.363-.831-.024-.106-.055-1.156-.073-2.54-.033-2.446-.032-2.438-.217-3.135-.137-.515-.436-1.175-.77-1.697-.657-1.025-1.762-1.969-2.876-2.454L15 5.462v-.341c-.001-.622-.13-1.155-.389-1.601-.195-.337-.794-.936-1.131-1.131-.556-.323-1.32-.457-1.974-.347m.824 2.015c.34.121.607.443.654.786l.024.177h-2.016l.024-.177c.065-.47.497-.839.984-.839.099 0 .248.024.33.053m1.23 3.04c1.622.372 2.977 1.622 3.417 3.152.155.541.183 1.012.183 3.09 0 2.005.017 2.27.187 2.861.08.28.262.685.414.922.066.102.119.197.119.212 0 .014-2.646.026-5.88.026s-5.88-.012-5.88-.026c0-.015.053-.11.119-.212.152-.237.334-.642.414-.922.17-.591.187-.856.188-2.875.001-1.07.018-2.124.04-2.343.188-1.941 1.718-3.547 3.737-3.925.432-.081 2.54-.052 2.942.04m-.28 12.429a2.1 2.1 0 0 1-.369.259c-.717.363-1.621.256-2.191-.259l-.18-.163h2.92l-.18.163",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime77 = require("react/jsx-runtime");
    var Objects = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
        "path",
        {
          d: "M11.36 2.025c-3.747.342-6.686 3.09-7.269 6.795-.093.594-.091 1.84.004 2.398.152.893.341 1.488.725 2.282.437.904.95 1.598 1.719 2.329l.461.438v.439c0 .242.02.546.043.677.141.768.806 1.433 1.574 1.574.328.06 6.438.06 6.766 0 .768-.141 1.433-.806 1.574-1.574.023-.131.043-.435.043-.677v-.439l.461-.438c.757-.719 1.279-1.422 1.7-2.289.383-.786.6-1.464.744-2.32.095-.561.097-1.808.004-2.4-.263-1.672-.989-3.149-2.129-4.335A7.974 7.974 0 0 0 13.24 2.1c-.375-.061-1.529-.108-1.88-.075m1.807 2.09c2.386.488 4.198 2.302 4.719 4.725.12.558.132 1.72.022 2.229-.186.87-.477 1.582-.93 2.275-.296.454-1.144 1.306-1.628 1.637l-.349.239-.001.89V17H9v-1.78l-.285-.196c-1.406-.965-2.256-2.247-2.624-3.955-.054-.252-.07-.507-.069-1.089.002-.687.013-.806.114-1.238.147-.628.262-.945.55-1.504.837-1.63 2.464-2.834 4.234-3.133l.48-.082c.246-.043 1.396.016 1.767.092m-1.647 1.91c-.564.073-1.298.356-1.805.697C8.681 7.417 8 8.719 8 10c0 .251.095.989.133 1.026.005.005.44-.106.967-.248l.962-.258a3.4 3.4 0 0 0-.036-.249c-.095-.593.12-1.224.57-1.675.451-.451 1.082-.665 1.676-.57l.249.04.042-.163c.078-.295.44-1.642.459-1.707.016-.051-.03-.075-.211-.113-.246-.051-1.058-.088-1.291-.058M9 22v1h6v-2H9v1",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime78 = require("react/jsx-runtime");
    var Ol = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
        "path",
        {
          d: "m6.26 7.272-1.44.912-.011 1.088c-.005.598-.002 1.088.007 1.088.01 0 .605-.369 1.323-.82.717-.451 1.331-.82 1.363-.82.05 0 .058.609.058 4.64V18H10V6.36H8.85l-1.15.001-1.44.911m6.913 8.223c-.368.12-.669.393-.835.757-.094.206-.104.272-.092.58.017.412.116.653.378.914.213.213.424.321.721.368 1.106.177 1.943-.951 1.442-1.941a1.54 1.54 0 0 0-.66-.623c-.234-.105-.717-.132-.954-.055m4.76 0a1.455 1.455 0 0 0-.821.713c-.078.146-.092.232-.092.572 0 .36.011.421.111.611.282.536.83.814 1.433.728.434-.061.805-.345 1.017-.778.098-.2.115-.282.114-.558-.001-.395-.087-.612-.357-.901a1.26 1.26 0 0 0-.932-.429 1.574 1.574 0 0 0-.473.042",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime79 = require("react/jsx-runtime");
    var Palette = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
        "path",
        {
          d: "M4.04 1.026c-.948.165-1.445.391-1.986.905-.481.457-.781.984-.964 1.694-.066.258-.07.738-.07 7.655v7.38l.096.42c.199.877.55 1.57 1.123 2.219.816.924 1.852 1.479 3.101 1.659.18.026 2.807.041 7.365.041 7.547.001 7.406.004 7.995-.186a3.281 3.281 0 0 0 1.9-1.613c.378-.748.409-1.021.389-3.38-.018-2.079-.025-2.157-.255-2.731-.177-.443-.371-.733-.73-1.093-.36-.359-.65-.553-1.093-.73-.499-.2-.739-.233-1.825-.254l-1.015-.02.659-.666c.689-.697.914-.987 1.13-1.461.213-.465.278-.78.278-1.345 0-.729-.165-1.265-.578-1.885-.237-.355-2.772-2.897-3.151-3.159-1.185-.821-2.589-.84-3.797-.052-.127.084-.541.456-.918.828l-.686.675-.018-1.033c-.019-1.119-.05-1.323-.291-1.897-.319-.763-.99-1.412-1.788-1.731-.58-.232-.642-.238-2.791-.248-1.089-.005-2.025-.002-2.08.008m4.07 2.063c.397.157.679.451.815.851.079.231.082 14.376.003 14.68-.302 1.166-1.086 1.977-2.21 2.284-.404.111-1.134.102-1.518-.018a2.887 2.887 0 0 1-1.302-.784c-.39-.39-.6-.734-.784-1.282l-.094-.28-.011-7.097c-.007-4.695.003-7.171.03-7.317.106-.574.489-.971 1.046-1.084.096-.019 1.003-.032 2.015-.028 1.619.007 1.861.016 2.01.075m6.95 2.893c.204.097.435.31 1.542 1.416 1.515 1.515 1.537 1.546 1.537 2.122 0 .624.224.366-3.676 4.245L11.02 17.19l-.011-4.225-.01-4.225 1.29-1.285c.71-.706 1.364-1.33 1.454-1.386.424-.264.883-.295 1.317-.087m5.112 9.131c.305.124.591.41.715.715l.093.232v3.88l-.093.232a1.38 1.38 0 0 1-.715.715l-.232.093-4.94.009-4.94.009 3.011-3.001 3.011-3.001 1.929.012c1.916.012 1.931.013 2.161.105m-14.592.934c-.543.104-1.128.563-1.373 1.078-.578 1.214.167 2.637 1.488 2.842a1.99 1.99 0 0 0 2.272-1.662 1.937 1.937 0 0 0-.563-1.709c-.491-.49-1.127-.682-1.824-.549",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime80 = require("react/jsx-runtime");
    var PeopleInvite = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
        "path",
        {
          d: "M20.295.277c-.229.038-.369.141-.457.336-.068.149-.076.272-.077 1.157l-.001.99h-.992c-.948 0-.999.004-1.169.09-.25.127-.332.288-.332.65 0 .362.082.523.332.65.17.086.221.09 1.169.09h.992v.992c0 .948.004.999.09 1.169.126.248.282.328.647.33.365.002.525-.078.653-.33.086-.17.09-.221.09-1.169V4.24h.992c.948 0 .999-.004 1.169-.09.25-.127.328-.281.328-.65s-.078-.523-.328-.65c-.17-.086-.221-.09-1.169-.09h-.992v-.992c0-.948-.004-.999-.09-1.169a.67.67 0 0 0-.21-.244c-.147-.081-.424-.115-.645-.078M11.58 3.023c-.566.079-.77.121-1.1.226a5.014 5.014 0 0 0-3.387 3.829c-.083.421-.091 1.34-.017 1.762a5.182 5.182 0 0 0 1.298 2.589c.153.161.271.298.262.305a14.61 14.61 0 0 1-.411.221c-1.823.965-3.188 2.586-3.858 4.585-.365 1.089-.447 1.435-.447 1.879 0 .751.219 1.277.76 1.825.363.367.802.604 1.294.697.47.089 11.582.089 12.052 0 .492-.093.931-.33 1.294-.697.541-.548.76-1.074.76-1.825 0-.443-.08-.781-.447-1.879a8.043 8.043 0 0 0-3.858-4.585 14.61 14.61 0 0 1-.411-.221c-.009-.007.109-.144.262-.305a5.015 5.015 0 0 0 1.128-1.93c.181-.59.22-.857.22-1.499 0-.642-.039-.909-.22-1.499-.528-1.725-2.027-3.063-3.809-3.402-.325-.061-1.143-.107-1.365-.076m1.28 2.097a3.09 3.09 0 0 1 2.026 2.04c.135.434.135 1.246 0 1.68a3.086 3.086 0 0 1-2.046 2.046c-.436.135-1.248.135-1.68 0A3.086 3.086 0 0 1 9.114 8.84c-.136-.434-.136-1.246 0-1.68a3.088 3.088 0 0 1 2.329-2.119c.308-.065 1.101-.021 1.417.079m.345 7.997c1.868.401 3.469 1.654 4.252 3.33.168.36.586 1.607.641 1.913.036.196-.111.477-.298.57-.131.066-.491.07-5.8.07-6.399 0-5.854.029-6.032-.32-.113-.222-.109-.243.178-1.156.373-1.187.775-1.907 1.467-2.632.954-.997 2.119-1.607 3.504-1.833.493-.081 1.581-.051 2.088.058",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime81 = require("react/jsx-runtime");
    var Photo = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("path", { d: "m8.095 2.99-.908.99-1.804.021c-1.781.02-1.806.021-2.043.115-.679.27-1.158.814-1.296 1.476-.062.299-.062 12.517 0 12.816.157.75.798 1.391 1.548 1.548.3.062 16.516.062 16.816 0a2.062 2.062 0 0 0 1.548-1.548c.062-.299.062-12.517 0-12.816-.138-.662-.617-1.206-1.296-1.476-.237-.094-.262-.095-2.043-.115l-1.804-.021-.908-.99-.907-.99H9.002l-.907.99m6.934 2.008.911.999 2.03.001L20 6v12H4V6l2.03-.002 2.03-.001.911-.999L9.882 4h4.236l.911.998M11.34 7.046a5.136 5.136 0 0 0-1.444.43A5.042 5.042 0 0 0 7.075 11.1c-.073.368-.073 1.432 0 1.8.393 1.979 1.821 3.474 3.794 3.969.633.159 1.629.159 2.262 0 .989-.248 1.782-.7 2.453-1.396.657-.683 1.047-1.394 1.285-2.342.097-.387.108-.503.108-1.131s-.011-.744-.108-1.131a5.335 5.335 0 0 0-.577-1.429 5.038 5.038 0 0 0-4.952-2.394m1.226 2.016c.228.043.466.126.752.265.367.178.464.248.786.569.321.322.391.419.569.786.432.89.434 1.74.008 2.621-.594 1.226-1.949 1.907-3.257 1.637a3.002 3.002 0 0 1-2.105-1.637c-.426-.881-.424-1.731.008-2.621.178-.367.248-.464.569-.786.322-.321.419-.392.786-.569.642-.312 1.204-.391 1.884-.265" }) }));
    };
    var import_jsx_runtime82 = require("react/jsx-runtime");
    var Picture = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
        "path",
        {
          d: "M2.643 4.069a1.118 1.118 0 0 0-.343.229C1.975 4.623 2 3.975 2 12c0 8.023-.025 7.377.299 7.701.326.326-.563.299 9.701.299 10.264 0 9.375.027 9.701-.299.324-.324.299.322.299-7.701s.025-7.377-.299-7.701c-.326-.327.567-.299-9.718-.296-8.192.003-9.182.01-9.34.066M20 7.29v1.29l-2.499 2.499-2.499 2.499-.731-.723c-.619-.612-.761-.733-.928-.789a.976.976 0 0 0-.686-.001c-.179.059-.459.327-3.138 3L6.579 18H4V6h16v1.29m-12.42.757c-.721.138-1.381.801-1.536 1.545-.139.665.061 1.32.552 1.812.797.796 2.011.796 2.808 0 .796-.797.796-2.011 0-2.808-.491-.49-1.127-.682-1.824-.549M20 14.72V18H9.42l1.789-1.789 1.789-1.789.731.723c.647.641.756.732.945.794.26.085.525.068.77-.052.125-.06.813-.722 2.356-2.266a313.91 313.91 0 0 1 2.19-2.181c.005 0 .01 1.476.01 3.28",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime83 = require("react/jsx-runtime");
    var Places = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
        "path",
        {
          d: "M10.643 4.069a1.066 1.066 0 0 0-.577.591c-.057.168-.066.408-.066 1.767V8H6.427c-4.022 0-3.814-.015-4.128.299C1.979 8.619 2 8.217 2 14c0 5.783-.021 5.381.299 5.701.326.326-.563.299 9.701.299 10.264 0 9.375.027 9.701-.299.324-.324.299.322.299-7.701s.025-7.377-.299-7.701c-.32-.32.085-.299-5.718-.296-4.569.003-5.183.01-5.34.066M20 7v1h-2v2h2v2h-2v2h2v4h-4v-2h-2v2h-2V6h8v1m-6 2v1h2V8h-2v1m-4 5v4H8v-2H6v2H4v-8h6v4m-4-1v1h2v-2H6v1m8 0v1h2v-2h-2v1",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime84 = require("react/jsx-runtime");
    var Play = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(
        "path",
        {
          d: "M7.251 3.518C6.219 3.796 5.44 4.555 5.114 5.6l-.094.3v12.2l.094.3c.304.973 1.011 1.71 1.937 2.019a2.855 2.855 0 0 0 1.988-.035c.42-.16 10.431-5.788 10.769-6.053.465-.366.827-.913.999-1.513.074-.255.092-.417.092-.818 0-.401-.018-.563-.092-.818-.177-.619-.568-1.196-1.043-1.543-.135-.098-2.545-1.473-5.355-3.055C10.803 4.553 9.2 3.672 8.96 3.586c-.303-.108-.399-.122-.88-.134-.438-.01-.595.003-.829.066m6.169 4.801c3.512 1.975 5.125 2.903 5.226 3.006.382.391.339 1.101-.086 1.437-.264.208-10.133 5.732-10.34 5.787a1.004 1.004 0 0 1-.692-.086c-.14-.073-.339-.286-.434-.463-.071-.135-.074-.362-.074-6V6.14l.088-.164c.098-.184.324-.398.509-.481.08-.036.229-.052.423-.044l.3.011 5.08 2.857",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime85 = require("react/jsx-runtime");
    var Presentation = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
        "path",
        {
          d: "M4.503 4.042A3.025 3.025 0 0 0 2.298 5.74c-.297.633-.278.205-.278 6.26s-.019 5.627.278 6.26a2.905 2.905 0 0 0 1.442 1.444c.666.315.137.296 8.26.296 8.124 0 7.595.019 8.26-.296a2.847 2.847 0 0 0 1.42-1.404c.337-.689.32-.348.32-6.3 0-5.891.013-5.606-.296-6.26a2.94 2.94 0 0 0-1.408-1.428c-.66-.318.116-.289-8.176-.297-4.081-.003-7.509.009-7.617.027M20 12.073c0 5.701.021 5.308-.299 5.628-.324.324.322.299-7.703.299-7.797 0-7.315.014-7.624-.222a1.19 1.19 0 0 1-.243-.289L4.02 17.3l-.011-5.15L3.999 7H20v5.073M5.66 8.652c-.165.165-.193.328-.174.997.015.536.051.642.263.78.101.067.449.071 6.251.071 5.802 0 6.15-.004 6.251-.071.212-.138.248-.244.263-.78.019-.669-.009-.832-.174-.997l-.132-.132H5.792l-.132.132m-.004 3.004-.136.136v1.416l.136.136.136.136h11.416l.136-.136.136-.136v-1.416l-.136-.136-.136-.136H5.792l-.136.136m0 3-.136.136v1.416l.136.136.136.136h9.416l.136-.136.136-.136v-1.416l-.136-.136-.136-.136H5.792l-.136.136",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime86 = require("react/jsx-runtime");
    var PushPin = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
        "path",
        {
          d: "M14.01 3.058c-.541.123-.555.135-3.17 2.727-.781.773-1.481 1.437-1.555 1.474-.39.196-.346.192-2.685.239l-2.22.043-.264.125c-.441.208-.711.561-.777 1.019-.032.226.061.617.208.874.062.107 1.009 1.089 2.328 2.411l2.223 2.231-2.346 2.349c-2.266 2.27-2.348 2.357-2.409 2.567-.078.269-.078.298-.001.558.073.244.28.493.515.617.214.113.658.12.863.013.077-.04 1.188-1.119 2.47-2.398l2.329-2.326 2.291 2.283c2.54 2.533 2.44 2.45 3.01 2.486.507.032.93-.205 1.169-.657.067-.128.142-.332.165-.453.024-.124.053-1.091.067-2.22.026-2.113.036-2.216.227-2.599.05-.1.801-.885 1.991-2.081 2.116-2.127 2.092-2.098 2.227-2.759.084-.413.034-.776-.168-1.213-.139-.302-.189-.356-2.43-2.6-1.258-1.26-2.378-2.351-2.488-2.424a2.096 2.096 0 0 0-1.57-.286m2.845 8.032c-1.014 1.017-1.898 1.931-1.964 2.03-.187.28-.362.649-.494 1.044-.149.442-.194.984-.196 2.356l-.001.94-3.96-3.96c-2.178-2.178-3.96-3.973-3.96-3.99 0-.016.568-.03 1.262-.03 1.382 0 1.584-.022 2.196-.244.729-.263.788-.313 2.842-2.36l1.88-1.875 2.119 2.119 2.12 2.119-1.844 1.851",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime87 = require("react/jsx-runtime");
    var Reply = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(
        "path",
        {
          d: "M13.984 5.063C12.795 5.329 12 6.332 12 7.564v.35l-.23.026c-1.956.221-3.56.701-4.889 1.461a8.987 8.987 0 0 0-3.111 3.045c-.825 1.372-1.376 3.095-1.646 5.139-.177 1.343-.161 1.556.141 1.893.274.304.624.412.991.305.28-.081.424-.208.819-.718 1.231-1.589 2.632-2.652 4.4-3.339.994-.387 1.83-.583 3.351-.787l.166-.023.017.712c.015.596.032.756.106.983a2.527 2.527 0 0 0 2.243 1.737 2.455 2.455 0 0 0 1.646-.503c.241-.193 4.732-4.41 5.048-4.742.258-.27.51-.735.608-1.121.033-.132.06-.393.06-.582 0-.746-.307-1.406-.888-1.912-.761-.662-4.878-4.015-5.082-4.139a2.513 2.513 0 0 0-1.766-.286m.704 1.989c.178.08 4.936 4.021 4.986 4.13a.563.563 0 0 1 .001.434c-.048.105-4.811 4.606-4.965 4.691-.198.11-.501.016-.629-.195-.076-.124-.081-.199-.081-1.235 0-1.29-.025-1.432-.295-1.702-.302-.302-.747-.356-1.945-.235-2.797.284-5.081 1.131-7.01 2.603-.104.079-.19.126-.19.103 0-.022.074-.253.164-.513.559-1.605 1.489-2.89 2.656-3.669 1.166-.778 2.595-1.207 4.749-1.426.448-.045.901-.114 1.046-.159.349-.108.619-.298.733-.515.088-.169.092-.214.092-1.08 0-.836.006-.914.081-1.036a.48.48 0 0 1 .607-.196",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime88 = require("react/jsx-runtime");
    var Screenshare = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("path", { d: "M5.433 3.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v11.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V6.38l-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028m12.95 2c.768.141 1.433.806 1.574 1.574.06.332.06 10.434 0 10.766-.138.755-.787 1.414-1.549 1.573-.299.062-12.517.062-12.816 0-.762-.159-1.411-.818-1.549-1.573-.06-.332-.06-10.434 0-10.766.137-.749.804-1.43 1.537-1.57.295-.056 12.497-.06 12.803-.004m-6.723 3.02c-.098.035-.798.568-1.8 1.37-1.775 1.421-1.806 1.452-1.848 1.864-.041.394.151.767.499.972.161.095.233.111.489.111.375 0 .388-.008 1.299-.739l.701-.563v2.031c0 1.276.016 2.086.042 2.18.061.22.273.473.489.585a.987.987 0 0 0 1.169-.172c.302-.302.3-.286.3-2.59v-2.034l.701.563c.911.731.924.739 1.299.739.257 0 .327-.016.492-.113.467-.274.629-.829.388-1.328-.08-.164-.294-.349-1.735-1.503-1.149-.919-1.697-1.333-1.821-1.375a1.014 1.014 0 0 0-.664.002" }) }));
    };
    var import_jsx_runtime89 = require("react/jsx-runtime");
    var Search = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
        "path",
        {
          d: "M10.54 3.023c-1.062.102-1.848.312-2.63.703-2.072 1.036-3.462 2.94-3.836 5.254-.066.413-.066 1.627 0 2.04.5 3.092 2.814 5.406 5.906 5.906.413.066 1.627.066 2.04 0 1.179-.191 2.154-.6 3.203-1.345.043-.031.433.335 1.686 1.583 1.744 1.735 1.722 1.717 2.116 1.715.441-.002.853-.427.853-.879 0-.365-.062-.44-1.749-2.13-1.23-1.231-1.58-1.603-1.549-1.646.611-.861.974-1.62 1.198-2.504.157-.623.199-.983.199-1.72 0-.944-.101-1.538-.404-2.38-.858-2.383-2.992-4.147-5.471-4.522-.376-.057-1.289-.101-1.562-.075m1.012 2.02a5.008 5.008 0 0 1 4.128 3.205c.412 1.072.405 2.472-.017 3.545a5.076 5.076 0 0 1-3.063 2.939c-.556.19-.93.248-1.6.248s-1.044-.058-1.6-.248a5.041 5.041 0 0 1-3.239-3.492c-.241-.933-.178-2.115.159-2.992a4.997 4.997 0 0 1 5.232-3.205",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime90 = require("react/jsx-runtime");
    var Section = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(
        "path",
        {
          d: "M5.664 5.063a1.005 1.005 0 0 0-.533.448L5.02 5.7v1.6l.111.189c.246.419.492.511 1.367.511.768 0 .949-.045 1.203-.299C7.955 7.447 8 7.266 8 6.5s-.045-.947-.299-1.201c-.256-.256-.434-.3-1.218-.296-.47.002-.709.019-.819.06m4.979.006a1.066 1.066 0 0 0-.577.591c-.051.149-.066.344-.066.84 0 .766.045.947.299 1.201.314.314.097.299 4.201.299 4.104 0 3.887.015 4.201-.299.254-.254.299-.435.299-1.201s-.045-.947-.299-1.201c-.315-.315-.094-.299-4.218-.296-3.21.003-3.685.011-3.84.066m-5 5a1.066 1.066 0 0 0-.577.591c-.094.278-.094 1.402 0 1.68.087.253.341.507.594.594.278.094 1.402.094 1.68 0 .253-.087.507-.341.594-.594.094-.278.094-1.402 0-1.68a1.046 1.046 0 0 0-.594-.594c-.268-.091-1.436-.089-1.697.003m5 0a1.066 1.066 0 0 0-.577.591c-.051.149-.066.344-.066.84 0 .766.045.947.299 1.201.314.314.097.299 4.201.299 4.104 0 3.887.015 4.201-.299.254-.254.299-.435.299-1.201s-.045-.947-.299-1.201c-.315-.315-.094-.299-4.218-.296-3.21.003-3.685.011-3.84.066m-5 5a1.066 1.066 0 0 0-.577.591c-.051.149-.066.344-.066.84 0 .766.045.947.299 1.201.254.254.435.299 1.201.299s.947-.045 1.201-.299c.254-.254.299-.435.299-1.201s-.045-.947-.299-1.201c-.256-.257-.434-.3-1.218-.296-.492.002-.709.019-.84.066m5 0a1.066 1.066 0 0 0-.577.591c-.051.149-.066.344-.066.84 0 .766.045.947.299 1.201.314.314.097.299 4.201.299 4.104 0 3.887.015 4.201-.299.254-.254.299-.435.299-1.201s-.045-.947-.299-1.201c-.315-.315-.094-.299-4.218-.296-3.21.003-3.685.011-3.84.066",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime91 = require("react/jsx-runtime");
    var Send = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(
        "path",
        {
          d: "M5.22 2.617c-1.08.306-1.817 1.189-1.888 2.264-.013.198-.003.432.024.56.025.12.462 1.646.97 3.389L5.25 12l-.924 3.17a206.214 206.214 0 0 0-.97 3.389 2.426 2.426 0 0 0-.024.56 2.462 2.462 0 0 0 1.138 1.924 2.403 2.403 0 0 0 2.175.267c.361-.131 12.706-7.192 12.995-7.433a2.63 2.63 0 0 0 .722-1.079c.083-.251.098-.376.098-.798 0-.422-.015-.547-.098-.798a2.63 2.63 0 0 0-.722-1.079c-.285-.237-12.625-7.297-13-7.438-.327-.122-1.098-.159-1.42-.068m6.936 5.472c4.875 2.786 6.192 3.555 6.25 3.65a.59.59 0 0 1 .074.261.59.59 0 0 1-.074.261c-.058.095-1.375.864-6.25 3.65C6.72 19.017 5.96 19.44 5.815 19.44c-.292 0-.527-.275-.475-.555.021-.112 1.123-3.924 1.623-5.615l.08-.27h2.052c2.322 0 2.305.002 2.606-.299a.984.984 0 0 0 0-1.402C11.4 10.998 11.417 11 9.095 11H7.043l-.08-.27c-.5-1.691-1.602-5.503-1.623-5.615-.052-.28.183-.555.475-.555.145 0 .905.423 6.341 3.529",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime92 = require("react/jsx-runtime");
    var Settings = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
        "path",
        {
          d: "M9.782 3.059c-.37.134-.49.303-.705.997-.387 1.252-.439 1.386-.596 1.543-.145.145-.446.281-.622.281-.047 0-.504-.081-1.015-.18-.51-.099-1.019-.18-1.131-.18a.92.92 0 0 0-.711.378c-.167.245-1.843 3.099-1.927 3.282a.823.823 0 0 0 .015.704c.05.098.369.489.71.868.719.8.8.927.8 1.248 0 .321-.081.448-.8 1.248-.341.379-.66.77-.71.868a.82.82 0 0 0-.031.669c.128.306 1.93 3.32 2.069 3.461.102.103.22.172.375.216l.225.066 1.065-.207c1.119-.217 1.211-.222 1.491-.079.26.132.372.318.599.992.38 1.13.463 1.328.622 1.491.268.275.272.275 2.492.275 1.166 0 2.039-.016 2.119-.039a.906.906 0 0 0 .498-.373c.055-.085.228-.536.385-1.002.156-.466.325-.919.374-1.006.111-.201.406-.402.639-.437.134-.02.433.024 1.218.18l1.04.206.224-.066a.898.898 0 0 0 .378-.214c.15-.145 1.877-3.033 2.055-3.435a.907.907 0 0 0-.021-.722c-.033-.064-.368-.439-.744-.834-.376-.395-.719-.791-.763-.881a.942.942 0 0 1 .001-.754c.044-.09.384-.5.755-.912.372-.411.696-.805.721-.876a1.101 1.101 0 0 0-.032-.695c-.139-.3-1.889-3.24-1.996-3.354a1.074 1.074 0 0 0-.228-.176c-.265-.14-.39-.134-1.46.073-.561.108-1.057.197-1.103.197-.18 0-.449-.129-.607-.291-.148-.152-.195-.257-.468-1.049a69.51 69.51 0 0 0-.35-.995.908.908 0 0 0-.407-.437c-.163-.087-.186-.088-2.225-.097-1.697-.007-2.088.001-2.218.048m3.573 2.38c.26.776.414 1.05.809 1.444.242.242.379.34.68.487.709.346 1.162.383 2.207.176l.671-.133.273.463.584.992.309.529-.094.116c-.052.064-.244.282-.426.484-.619.685-.839 1.157-.878 1.888-.026.485.056.879.272 1.306.162.323.295.497.808 1.059.171.186.31.35.31.362 0 .036-1.083 1.881-1.14 1.942-.041.044-.153.032-.662-.07-1.236-.25-2.053-.102-2.758.5-.481.41-.685.751-.987 1.647l-.193.57-1.177-.01-1.177-.011-.204-.62a7.461 7.461 0 0 0-.319-.83c-.318-.579-.906-1.057-1.571-1.275-.498-.163-1.072-.158-1.892.015-.319.068-.582.12-.584.117l-.595-.995-.59-.989.174-.197.44-.491c.339-.378.517-.66.652-1.035a2.615 2.615 0 0 0 .007-1.765c-.143-.41-.308-.658-.814-1.22-.247-.275-.45-.508-.45-.517 0-.023 1.12-1.912 1.153-1.945.015-.015.288.026.607.091.771.158 1.101.181 1.5.104a2.647 2.647 0 0 0 1.081-.434c.569-.38.837-.768 1.161-1.678l.237-.666c.014-.038.289-.05 1.19-.05h1.171l.215.639M11.4 8.444a3.678 3.678 0 0 0-2.936 2.508c-.579 1.848.468 3.854 2.322 4.448.514.164.878.214 1.374.188a3.654 3.654 0 0 0 3.034-1.908 3.483 3.483 0 0 0 .083-3.194A3.644 3.644 0 0 0 12.8 8.502c-.366-.083-1.049-.112-1.4-.058m1.146 1.854c.481.147.943.591 1.138 1.093.117.302.127.853.022 1.16-.442 1.284-2.1 1.665-3.05.7-.963-.979-.51-2.619.824-2.981a2.134 2.134 0 0 1 1.066.028",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime93 = require("react/jsx-runtime");
    var Shape = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
        "path",
        {
          d: "M9.34 2.039c-.36.082-.37.09-2.113 1.817-.521.516-.987.959-1.037.983-.26.131-.231.129-1.79.159l-1.48.03-.176.082a.87.87 0 0 0-.518.68c-.022.151.04.412.139.583.041.071.672.725 1.551 1.607l1.483 1.487-1.564 1.567c-1.511 1.513-1.565 1.571-1.606 1.711-.052.179-.052.198-.001.372a.739.739 0 0 0 .344.411c.142.075.438.08.575.009.051-.027.792-.746 1.646-1.599l1.553-1.551 1.527 1.522c1.694 1.689 1.627 1.633 2.007 1.658a.792.792 0 0 0 .779-.438c.045-.086.095-.222.111-.302.015-.083.035-.727.044-1.48.018-1.409.024-1.478.151-1.733.034-.067.535-.59 1.327-1.387 1.411-1.419 1.396-1.399 1.485-1.84.057-.275.023-.517-.111-.808-.093-.201-.127-.237-1.621-1.734-.839-.84-1.585-1.567-1.658-1.616-.297-.196-.7-.27-1.047-.19m1.897 5.354c-.676.679-1.265 1.288-1.31 1.354a2.973 2.973 0 0 0-.329.695c-.099.295-.129.657-.13 1.571l-.001.627L6.827 9a251.472 251.472 0 0 1-2.64-2.66c0-.011.378-.02.841-.02.921 0 1.056-.015 1.464-.163.486-.175.525-.208 1.895-1.573l1.253-1.25 1.413 1.413 1.413 1.412-1.229 1.234",
          fill: "inherit",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime94 = require("react/jsx-runtime");
    var Share = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 7.91452V7.50475C12 5.39196 14.4584 4.23181 16.0893 5.57493L20.8209 9.47154C21.9835 10.429 22.0418 12.1896 20.945 13.2219L16.2134 17.6751C14.618 19.1767 12 18.0456 12 15.8546V14.9188C8.32841 15.2784 5.7479 16.6997 3.81376 19.4075C3.55283 19.7728 3.08045 19.9195 2.65852 19.7662C2.2366 19.6129 1.96854 19.1972 2.00297 18.7496C2.26218 15.3798 3.18166 12.5968 5.18089 10.6689C6.82728 9.08134 9.08969 8.1849 12 7.91452ZM14 7.50475C14 7.0822 14.4917 6.85017 14.8179 7.11879L19.5495 11.0154C19.782 11.2069 19.7937 11.559 19.5743 11.7655L14.8427 16.2187C14.5236 16.5191 14 16.2928 14 15.8546V14C14 13 13.338 12.8191 12.5 12.8728C9.30395 13.0777 6.67367 13.9682 4.53377 15.7142C4.96822 14.1948 5.64032 13.0043 6.56916 12.1086C7.84499 10.8784 9.73012 10.2055 12.5 10C13.5925 9.91894 14 9.5 14 9V7.50475Z"
        }
      ) }));
    };
    var import_jsx_runtime95 = require("react/jsx-runtime");
    var SimpleAnswer = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
        "path",
        {
          d: "M5.503 3.042c-1.013.17-1.947.934-2.301 1.883-.208.556-.201.308-.201 7.067-.001 6.886-.012 6.558.233 7.159a3.046 3.046 0 0 0 1.615 1.615c.6.245.274.234 7.151.234 6.876 0 6.551.011 7.15-.233a3.08 3.08 0 0 0 1.617-1.617c.233-.573.233-.573.233-4.081 0-3.623.013-3.458-.3-3.771a.987.987 0 0 0-1.169-.172 1.065 1.065 0 0 0-.489.585c-.027.097-.042 1.25-.042 3.292 0 3.541.012 3.387-.299 3.698-.322.322.202.299-6.701.299s-6.379.023-6.701-.299C4.977 18.379 5 18.903 5 12s-.023-6.379.299-6.701C5.61 4.987 5.456 5 9 5s3.39.013 3.701-.299a.984.984 0 0 0 0-1.402c-.312-.313-.146-.3-3.778-.294-1.773.002-3.312.019-3.42.037m12.652.011c-.261.074-.531.259-.854.586l-.28.282 1.531 1.53 1.531 1.529.331-.34c.456-.47.566-.699.566-1.182 0-.56-.1-.724-.939-1.555-.769-.761-.924-.858-1.411-.886a1.654 1.654 0 0 0-.475.036M12.937 8.01l-3.563 3.57-.192 1.383c-.167 1.201-.186 1.403-.144 1.531.071.214.218.37.425.449.178.068.197.067 1.569-.124l1.388-.193 3.57-3.563L19.56 7.5l-1.53-1.53-1.53-1.53-3.563 3.57m2.043 2.03-2.54 2.54-.51-.51-.51-.51 2.54-2.54 2.539-2.54.511.51.511.509-2.541 2.541",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime96 = require("react/jsx-runtime");
    var Sort = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(
        "path",
        {
          d: "M4.252 6.078C4.03 6.213 4 6.325 4 7s.03.787.252.922C4.378 7.998 4.513 8 12 8s7.622-.002 7.748-.078C19.97 7.787 20 7.675 20 7s-.03-.787-.252-.922C19.622 6.002 19.487 6 12 6s-7.622.002-7.748.078m2 5C6.03 11.213 6 11.325 6 12s.03.787.252.922c.125.076.244.078 5.748.078 5.504 0 5.623-.002 5.748-.078.222-.135.252-.247.252-.922s-.03-.787-.252-.922C17.623 11.002 17.504 11 12 11c-5.504 0-5.623.002-5.748.078m2 5C8.03 16.213 8 16.325 8 17s.03.787.252.922c.124.076.228.078 3.74.078 3.987 0 3.767.014 3.93-.252.068-.112.078-.203.078-.748 0-.545-.01-.636-.078-.748-.163-.266.057-.252-3.93-.252-3.512 0-3.616.002-3.74.078",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime97 = require("react/jsx-runtime");
    var Stroke = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
        "path",
        {
          d: "M11.38 3.158c-1.944.226-3.602 1.306-4.386 2.856a4.4 4.4 0 0 0-.487 2.066c.001.94.281 1.812.84 2.62l.194.28 2.02.007c1.767.005 1.983 0 1.732-.046-1.264-.23-2.237-.984-2.647-2.051-.094-.245-.103-.322-.103-.83.001-.479.014-.595.09-.8.364-.979 1.22-1.709 2.352-2.006.542-.141 1.391-.15 1.875-.019 1.456.394 2.493 1.61 2.613 3.064l.027.321.977.011c.538.006.991-.003 1.008-.02.05-.05-.039-.838-.144-1.278a5.507 5.507 0 0 0-3.513-3.888c-.713-.251-1.73-.371-2.448-.287M4 12.5v.5h16v-1H4v.5m10.748 1.63c.22.231.447.593.581.926.125.312.13.345.129.884 0 .515-.009.582-.109.835-.343.865-1.045 1.526-1.979 1.864-1.793.649-3.709-.09-4.51-1.739-.21-.432-.293-.73-.327-1.17l-.025-.33H6.475l.021.17c.012.093.033.294.046.445.059.642.333 1.478.685 2.085a5.663 5.663 0 0 0 2.316 2.193 6.91 6.91 0 0 0 1.437.491c.534.111 1.612.102 2.17-.018 2.035-.436 3.565-1.711 4.128-3.44a4.559 4.559 0 0 0-.076-2.996l-.128-.33h-2.45l.124.13",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime98 = require("react/jsx-runtime");
    var Soundoff = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
        "path",
        {
          d: "M12.795 3.036a1.1 1.1 0 0 0-.28.11c-.074.045-1.132.85-2.351 1.789-1.219.94-2.29 1.751-2.38 1.803-.351.202-.515.232-1.444.265-.554.019-.954.052-1.08.088-1.148.329-1.964 1.193-2.198 2.328-.091.44-.091 4.722 0 5.162a3 3 0 0 0 2.357 2.357c.196.041.521.062.949.063.708 0 1.018.05 1.343.214.104.053 1.206.881 2.449 1.84 1.243.959 2.337 1.782 2.431 1.828.21.105.565.113.791.019.216-.09.409-.283.523-.522l.094-.2.001-8.163c0-9.058.021-8.38-.265-8.674a1.027 1.027 0 0 0-.94-.307M12 12.002c0 4.727-.01 5.917-.05 5.893-.028-.016-.663-.501-1.412-1.078-1.462-1.125-1.688-1.283-2.094-1.467-.528-.24-.942-.317-1.804-.337-.919-.022-1.091-.062-1.34-.311-.303-.303-.3-.273-.3-2.702 0-2.427-.003-2.399.299-2.701C5.551 9.047 5.736 9 6.482 9c.927 0 1.478-.114 2.134-.443.32-.16.804-.514 2.424-1.773.495-.385.914-.701.93-.702.017-.001.03 2.663.03 5.92",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime99 = require("react/jsx-runtime");
    var SoundOn = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(
        "path",
        {
          d: "M12.795 3.036a1.1 1.1 0 0 0-.28.11c-.074.045-1.132.85-2.351 1.789-1.219.94-2.29 1.751-2.38 1.803-.351.202-.515.232-1.444.265-.554.019-.954.052-1.08.088-1.148.329-1.964 1.193-2.198 2.328-.091.44-.091 4.722 0 5.162a3 3 0 0 0 2.357 2.357c.196.041.521.062.949.063.708 0 1.018.05 1.343.214.104.053 1.206.881 2.449 1.84 1.243.959 2.337 1.782 2.431 1.828.21.105.565.113.791.019.216-.09.409-.283.523-.522l.094-.2.001-8.163c0-9.058.021-8.38-.265-8.674a1.027 1.027 0 0 0-.94-.307m5.865 2.399c-.209.095-.483.397-.537.591-.06.218-.053.535.017.734.033.094.148.29.256.435a8.187 8.187 0 0 1 1.427 3.157 8.064 8.064 0 0 1-1.427 6.453c-.231.313-.316.53-.316.81.001.308.068.494.253.695.211.23.423.328.707.328.447 0 .681-.203 1.29-1.118a9.99 9.99 0 0 0 0-11.04c-.428-.644-.691-.946-.909-1.045a1.052 1.052 0 0 0-.761 0M12 12.002c0 4.727-.01 5.917-.05 5.893-.028-.016-.663-.501-1.412-1.078-1.462-1.125-1.688-1.283-2.094-1.467-.528-.24-.942-.317-1.804-.337-.919-.022-1.091-.062-1.34-.311-.303-.303-.3-.273-.3-2.702 0-2.427-.003-2.399.299-2.701C5.551 9.047 5.736 9 6.482 9c.927 0 1.478-.114 2.134-.443.32-.16.804-.514 2.424-1.773.495-.385.914-.701.93-.702.017-.001.03 2.663.03 5.92m3.797-3.723c-.37.196-.58.593-.548 1.038.017.238.058.357.284.832.36.753.443 1.1.443 1.851 0 .751-.083 1.098-.443 1.851-.226.475-.267.594-.284.832-.024.336.054.574.264.806.337.374.833.441 1.201.162.393-.297.954-1.482 1.175-2.481.117-.53.127-1.736.019-2.25a6.336 6.336 0 0 0-.751-1.981c-.248-.421-.369-.563-.56-.661-.205-.104-.602-.104-.8.001",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime100 = require("react/jsx-runtime");
    var Speaker = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(
        "path",
        {
          d: "M3.58 2.047c-.733.14-1.4.821-1.537 1.57-.067.371-.055 1.989.019 2.299a2.042 2.042 0 0 0 1.433 1.468c.307.082 2.164.078 2.484-.006a2.027 2.027 0 0 0 1.399-1.399c.084-.32.088-2.177.006-2.484a2.042 2.042 0 0 0-1.468-1.433c-.295-.07-1.991-.081-2.336-.015m7.28 0c-.719.137-1.405.827-1.54 1.548-.066.358-.051 2.065.021 2.343a2.02 2.02 0 0 0 1.439 1.448c.28.074 2.16.074 2.44 0a2.02 2.02 0 0 0 1.439-1.448c.072-.278.087-1.985.021-2.343-.138-.739-.824-1.414-1.577-1.552-.287-.052-1.963-.049-2.243.004m7.205.016c-.677.164-1.267.747-1.449 1.432-.082.307-.078 2.164.006 2.484.17.656.743 1.229 1.399 1.399.32.084 2.177.088 2.484.006a2.042 2.042 0 0 0 1.433-1.468c.074-.31.086-1.928.019-2.299-.141-.768-.806-1.433-1.574-1.574-.354-.064-2.027-.05-2.318.02M3.58 9.047c-.733.14-1.4.821-1.537 1.57-.06.331-.06 9.435 0 9.766.141.768.806 1.433 1.574 1.574.334.061 16.432.061 16.766 0 .768-.141 1.433-.806 1.574-1.574.06-.331.06-9.435 0-9.766-.141-.768-.806-1.433-1.574-1.574-.308-.056-16.508-.052-16.803.004",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime101 = require("react/jsx-runtime");
    var Sun = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(
        "path",
        {
          d: "M11 1.5V3h2V0h-2v1.5M3.51 3.51l-.71.711L3.86 5.28l1.06 1.06.71-.71.71-.71-1.06-1.06L4.219 2.8l-.709.71m15.21.35-1.06 1.06.71.71.71.71 1.06-1.06 1.06-1.061-.71-.709-.711-.71-1.059 1.06m-7.46 1.184c-1.757.183-3.484 1.096-4.593 2.428-1.208 1.451-1.792 3.266-1.634 5.078.085.975.276 1.676.685 2.51a6.88 6.88 0 0 0 2.058 2.515 7.002 7.002 0 0 0 8.448 0 7.08 7.08 0 0 0 2.617-4.104 7.272 7.272 0 0 0-.201-3.682 7.243 7.243 0 0 0-2.008-3.028 7.036 7.036 0 0 0-5.372-1.717m1.734 2.052c.938.206 1.74.623 2.414 1.256.74.695 1.205 1.496 1.461 2.517.097.387.108.503.108 1.131s-.011.744-.108 1.131c-.255 1.015-.713 1.807-1.453 2.511A5.047 5.047 0 0 1 13 16.905c-.475.102-1.525.102-2 0a5.045 5.045 0 0 1-3.754-3.37c-.182-.562-.226-.86-.226-1.535 0-.675.044-.973.226-1.535a5.006 5.006 0 0 1 1.666-2.391 5.14 5.14 0 0 1 2.389-1.032c.344-.054 1.346-.022 1.693.054M0 12v1h3v-2H0v1m21 0v1h3v-2h-3v1M3.85 18.73 2.8 19.781l.71.709.711.71 1.059-1.06 1.059-1.06-.699-.7c-.384-.385-.708-.7-.72-.7-.011 0-.493.473-1.07 1.05m14.51-.35-.699.7 1.059 1.06 1.059 1.06.711-.71.71-.709-1.05-1.051a40.692 40.692 0 0 0-1.07-1.05c-.012 0-.336.315-.72.7M11 22.5V24h2v-3h-2v1.5",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime102 = require("react/jsx-runtime");
    var Task = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
        "path",
        {
          d: "M7.58 3.025c-.714.088-1.273.241-1.76.484a5.054 5.054 0 0 0-2.73 3.569c-.064.314-.07.724-.07 4.922 0 4.198.006 4.608.07 4.922a5.058 5.058 0 0 0 2.731 3.57c.32.16.945.36 1.359.436.407.075 9.233.075 9.64 0 2.129-.391 3.717-1.979 4.108-4.108.075-.407.075-9.233 0-9.64-.379-2.064-1.838-3.583-3.908-4.071-.355-.084-.428-.085-4.84-.092-2.464-.004-4.534 0-4.6.008m9.28 2.089c.991.332 1.722 1.07 2.026 2.046l.094.3v9.08l-.094.3a3.086 3.086 0 0 1-2.046 2.046l-.3.094H7.46l-.3-.094a3.086 3.086 0 0 1-2.046-2.046l-.094-.3V7.46l.094-.3a3.085 3.085 0 0 1 2.329-2.117c.097-.019 2.193-.032 4.657-.029l4.48.006.28.094m-2.84 3.867a1.656 1.656 0 0 1-.178.058c-.01.001-.694.676-1.521 1.501l-1.503 1.5-.399-.403c-.493-.498-.624-.573-.999-.575-.316-.002-.507.072-.709.273a1.06 1.06 0 0 0-.213 1.087c.089.211 1.697 1.837 1.922 1.942.237.11.594.101.842-.023.15-.074.657-.558 2.083-1.99 1.766-1.772 1.889-1.905 1.955-2.106.261-.801-.495-1.547-1.28-1.264",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime103 = require("react/jsx-runtime");
    var TaskFile = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime103.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime103.jsx)(
        "path",
        {
          d: "M7.503 3.042A3.128 3.128 0 0 0 5.67 4.127c-.225.28-.511.853-.596 1.193-.08.326-.08 13.034 0 13.36.085.34.371.913.596 1.193.28.347.642.628 1.07.831.645.305.484.296 5.26.296 4.777 0 4.616.009 5.26-.296a2.847 2.847 0 0 0 1.42-1.404c.34-.695.32-.228.32-7.3 0-7.007.017-6.599-.296-7.26a2.94 2.94 0 0 0-1.408-1.428c-.647-.311-.245-.288-5.176-.297-2.431-.003-4.509.008-4.617.027m8.837 2.024c.115.039.263.135.361.233.322.322.299-.202.299 6.701 0 6.905.024 6.379-.3 6.702-.318.318-.033.3-4.763.289l-4.199-.011-.199-.102c-.226-.117-.437-.369-.498-.596-.029-.104-.039-2.161-.031-6.368L7.02 5.7l.111-.189c.125-.213.318-.375.539-.454.122-.043.94-.054 4.313-.055 3.773-.002 4.181.004 4.357.064M8.66 6.652c-.165.165-.193.328-.174.997.015.536.051.642.263.78.1.066.315.071 3.251.071s3.151-.005 3.251-.071c.212-.138.248-.244.263-.78.019-.669-.009-.832-.174-.997l-.132-.132H8.792l-.132.132m-.004 3.004-.136.136v1.416l.136.136.136.136h6.416l.136-.136.136-.136V9.792l-.136-.136-.136-.136H8.792l-.136.136m0 3-.136.136v1.416l.136.136.136.136h6.416l.136-.136.136-.136v-1.416l-.136-.136-.136-.136H8.792l-.136.136m0 3-.136.136v1.416l.136.136.136.136h3.416l.136-.136.136-.136v-1.416l-.136-.136-.136-.136H8.792l-.136.136",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime104 = require("react/jsx-runtime");
    var ThinArrowRight = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M6.91073 16.9225C6.5853 16.5971 6.5853 16.0694 6.91073 15.744L12.1548 10.4999L6.91073 5.25584C6.5853 4.9304 6.5853 4.40277 6.91073 4.07733C7.23617 3.75189 7.76381 3.75189 8.08925 4.07733L13.9226 9.91066C14.0789 10.0669 14.1667 10.2789 14.1667 10.4999C14.1667 10.7209 14.0789 10.9329 13.9226 11.0892L8.08925 16.9225C7.76381 17.2479 7.23617 17.2479 6.91073 16.9225Z"
        }
      ) }));
    };
    var import_jsx_runtime105 = require("react/jsx-runtime");
    var Telegram = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(
        "path",
        {
          d: "M21.2 2.549c-.389.144-19.106 8.044-19.231 8.116-.326.189-.525.645-.444 1.02.056.26.257.553.455.661.088.049 1.285.496 2.66.995 1.375.499 2.52.928 2.545.953.025.025.455 1.279.956 2.786.5 1.507.942 2.803.981 2.88.095.188.303.381.496.462.225.094.581.085.791-.018.094-.046.711-.536 1.371-1.088a48.466 48.466 0 0 1 1.246-1.023c.026-.01 1.041.678 2.256 1.529 1.216.851 2.274 1.574 2.353 1.607.192.08.549.078.745-.005.198-.084.402-.276.504-.473.095-.185 3.602-17.162 3.605-17.451a.963.963 0 0 0-.987-.977 1.478 1.478 0 0 0-.302.026m-2.459 9.394a807.328 807.328 0 0 1-1.411 6.783c-.025.054-.38-.179-1.954-1.282-1.122-.785-1.992-1.368-2.085-1.396-.408-.122-.674-.03-1.209.418-.224.188-.417.332-.428.321-.012-.011.044-.311.123-.667l.145-.646 2.944-3.187c3.229-3.495 3.163-3.413 3.124-3.845a.995.995 0 0 0-.354-.697c-.219-.186-.384-.237-.71-.217l-.266.016-4.373 2.431-4.373 2.431-1.287-.468c-.708-.256-1.3-.479-1.317-.494-.016-.015 3.305-1.433 7.38-3.15 4.076-1.717 7.415-3.11 7.421-3.095.006.014-.611 3.049-1.37 6.744m-7.63 1.459c-.49.529-.932 1.038-.981 1.13-.05.093-.139.389-.198.658-.059.27-.118.49-.13.49-.013 0-.151-.384-.307-.853l-.284-.853 1.365-.763c.75-.42 1.378-.765 1.395-.767.018-.002-.369.429-.86.958",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime106 = require("react/jsx-runtime");
    var TelegramFilled2 = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime106.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime106.jsx)(
        "path",
        {
          fillRule: "evenodd",
          d: "M2.3744 11.39C7.74118 9.0518 11.3199 7.51031 13.1105 6.76553C18.223 4.63904 19.2854 4.26965 19.9778 4.25745C20.1301 4.25477 20.4706 4.29251 20.6912 4.47149C21.0214 4.73942 21.0204 5.31215 20.984 5.69477C20.7069 8.60577 19.5081 15.67 18.8982 18.9304C18.6402 20.3099 18.132 20.7725 17.6401 20.8178C16.571 20.9162 15.7592 20.1113 14.7238 19.4325C13.1035 18.3704 12.1881 17.7092 10.6153 16.6728C8.79774 15.475 9.97602 14.8167 11.0119 13.7408C11.283 13.4592 15.9934 9.17477 16.0845 8.7861C16.0959 8.7375 16.1065 8.5563 15.9989 8.46063C15.8912 8.36495 15.7323 8.39767 15.6177 8.42369C15.4552 8.46057 12.8668 10.1714 7.85241 13.5563C7.1177 14.0608 6.45221 14.3066 5.85596 14.2937C5.19864 14.2795 3.93423 13.922 2.99426 13.6165C1.84136 13.2417 0.925054 13.0436 1.00484 12.4071C1.0464 12.0756 1.50292 11.7366 2.3744 11.39Z"
        }
      ) }));
    };
    var import_jsx_runtime107 = require("react/jsx-runtime");
    var Text = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(
        "path",
        {
          d: "M2.56 7.38V8.4h3.56V18h2.44V8.4h3.56V6.36H2.56v1.02m10.24 2.839v.94l1.39.01 1.39.011.01 3.41.01 3.41h2.28l.01-3.41.01-3.41 1.39-.011 1.39-.01V9.28H12.8v.939",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime108 = require("react/jsx-runtime");
    var Trash = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime108.jsx)("path", { d: "M10.665 2.041c-1.245.141-2.231.984-2.549 2.181-.065.246-.089.484-.105 1.048L7.989 6H5.92c-2.243 0-2.257.001-2.546.222a1.19 1.19 0 0 0-.243.289c-.095.161-.111.233-.111.489s.016.328.111.489c.24.409.5.511 1.294.511H5v4.39c0 2.742.016 4.563.042 4.85.079.859.239 1.364.62 1.949.407.624 1.108 1.218 1.741 1.475.767.312 1.298.347 4.977.326 3.244-.018 3.345-.024 4.05-.267.983-.338 1.955-1.31 2.293-2.293.258-.748.252-.619.267-5.76L19.004 8h.571c.684 0 .879-.052 1.126-.299a.984.984 0 0 0 0-1.402C20.4 5.998 20.418 6 18.078 6h-2.067l-.022-.73c-.024-.827-.092-1.169-.33-1.648-.358-.722-1.155-1.343-1.959-1.526-.33-.075-2.509-.114-3.035-.055M13.4 4.086a.963.963 0 0 1 .482.459c.077.157.092.27.109.819l.02.636H10l.001-.45c.001-.85.096-1.148.438-1.374.227-.15.448-.171 1.701-.161.91.007 1.146.021 1.26.071m3.588 8.524c-.012 3.291-.03 4.679-.064 4.85-.095.488-.449.984-.893 1.251-.448.269-.446.269-4.031.269-2.913 0-3.248-.007-3.517-.069a1.902 1.902 0 0 1-1.407-1.451c-.034-.172-.052-1.548-.064-4.85L6.996 8h10.009l-.017 4.61" }) }));
    };
    var import_jsx_runtime109 = require("react/jsx-runtime");
    var Ul = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(
        "path",
        {
          d: "M11.503 9.04a3.076 3.076 0 0 0-.907.325c-1.365.708-1.952 2.338-1.362 3.786a3.046 3.046 0 0 0 1.615 1.615 2.982 2.982 0 0 0 3.266-.651 2.982 2.982 0 0 0 .131-4.095c-.349-.396-.97-.781-1.49-.923-.265-.073-.986-.106-1.253-.057",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime110 = require("react/jsx-runtime");
    var Underline = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(
        "path",
        {
          d: "M7 8.131c0 2.613.015 4.256.042 4.47.1.817.464 1.729.95 2.38.302.404.785.867 1.188 1.139 1.723 1.163 3.907 1.162 5.644-.001.405-.271 1.024-.89 1.295-1.295a5.2 5.2 0 0 0 .839-2.223c.027-.214.042-1.857.042-4.47V4h-2v4.142c0 3.572-.008 4.182-.062 4.439-.336 1.628-1.918 2.688-3.519 2.357a2.993 2.993 0 0 1-2.357-2.357C9.008 12.324 9 11.714 9 8.142V4H7v4.131M6 19v1h12v-2H6v1",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime111 = require("react/jsx-runtime");
    var Unlocked = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(
        "path",
        {
          d: "M11.34 2.046a4.934 4.934 0 0 0-1.52.471c-1.414.694-2.36 1.899-2.723 3.47-.042.181-.07.565-.085 1.143L6.99 8h2.001l.02-.77c.024-.875.055-1.026.325-1.57a2.85 2.85 0 0 1 1.404-1.362c.481-.226.714-.277 1.26-.277s.779.051 1.26.277a2.905 2.905 0 0 1 1.444 1.442c.285.602.296.72.296 3.144V11H9.925c-5.528 0-5.245-.011-5.551.222a1.19 1.19 0 0 0-.243.289l-.111.189v9.6l.111.189c.061.103.17.234.243.289.309.236-.173.222 7.624.222 8.025 0 7.379.025 7.703-.299.319-.318.299.022.299-5.201s.02-4.883-.299-5.201c-.278-.278-.393-.299-1.626-.299h-1.07l-.015-2.37-.015-2.37-.107-.412c-.199-.761-.502-1.385-.942-1.936a5.04 5.04 0 0 0-4.586-1.866M18 16.5V20H6v-7h12v3.5m-7 0V18h2v-3h-2v1.5",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime112 = require("react/jsx-runtime");
    var Upload = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(
        "path",
        {
          d: "M11.64 3.068c-.153.053-.45.331-1.973 1.847-.986.982-1.838 1.861-1.894 1.955-.297.501-.07 1.175.476 1.41.244.105.603.097.833-.019.076-.039.538-.468 1.028-.954l.89-.885v3.862c0 4.345-.016 4.102.299 4.417a.984.984 0 0 0 1.402 0c.315-.315.299-.072.299-4.417V6.422l.89.885c.49.486.952.915 1.028.954.23.116.589.124.833.019.546-.235.773-.909.476-1.41-.056-.094-.908-.973-1.894-1.955-1.609-1.601-1.813-1.791-1.99-1.85a1.053 1.053 0 0 0-.703.003m-8.997 7.001a1.118 1.118 0 0 0-.343.229c-.309.309-.3.209-.3 3.26 0 1.626.017 2.839.042 3.043.1.817.464 1.729.95 2.38a5.084 5.084 0 0 0 3.407 1.977c.464.057 10.738.057 11.202 0a5.2 5.2 0 0 0 2.223-.839c.405-.271 1.024-.89 1.295-1.295a5.2 5.2 0 0 0 .839-2.223c.025-.204.042-1.417.042-3.043 0-3.05.009-2.951-.299-3.259a.984.984 0 0 0-1.402 0c-.308.308-.299.207-.299 3.27 0 2.961-.004 3.017-.233 3.581a3.08 3.08 0 0 1-1.617 1.617c-.594.241-.373.233-6.15.233-5.779 0-5.556.008-6.151-.234a3.046 3.046 0 0 1-1.615-1.615C4.004 16.586 4 16.53 4 13.569c0-3.063.009-2.962-.299-3.27a.998.998 0 0 0-1.058-.23",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime113 = require("react/jsx-runtime");
    var Updates = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(
        "path",
        {
          d: "M4.53 3.061c-.352.076-.628.236-.931.538-.308.309-.462.579-.54.95-.086.407-.087 12.486-.001 13.051a4.007 4.007 0 0 0 3.435 3.358c.42.056 11.627.058 11.974.001.677-.11 1.114-.34 1.633-.859.519-.519.749-.956.859-1.633.026-.157.04-2.326.04-5.947 0-6.212.007-6.014-.227-6.451-.143-.268-.573-.698-.841-.841-.359-.192-.638-.227-1.834-.227L17.014 5l-.047-.31a1.847 1.847 0 0 0-.564-1.091c-.312-.308-.582-.462-.952-.54-.391-.083-10.539-.081-10.921.002m10.48 8.709c.011 6.261.017 6.787.08 6.99.038.121.069.225.07.23 0 .005-1.895.01-4.212.01-4.583 0-4.419.008-4.878-.225-.269-.136-.709-.576-.845-.845-.237-.467-.225-.115-.225-6.798V5h9.998l.012 6.77M7.59 7.064c-.478.147-.708.725-.528 1.329.08.271.274.465.545.545.31.092 4.476.092 4.786 0a.784.784 0 0 0 .545-.545c.183-.615-.05-1.184-.545-1.331-.3-.089-4.512-.087-4.803.002m11.401 5.589-.011 5.653-.121.197a.998.998 0 0 1-1.718 0l-.121-.197-.011-5.653L16.999 7h2.002l-.01 5.653M7.59 11.064c-.478.147-.708.725-.528 1.329.08.271.274.465.545.545.31.092 4.476.092 4.786 0 .495-.147.728-.716.545-1.331a.784.784 0 0 0-.545-.545c-.3-.089-4.512-.087-4.803.002m0 4c-.478.147-.708.725-.528 1.329.08.271.274.465.545.545.31.092 4.476.092 4.786 0 .495-.147.728-.716.545-1.331a.784.784 0 0 0-.545-.545c-.3-.089-4.512-.087-4.803.002",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime114 = require("react/jsx-runtime");
    var Users = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime114.jsx)("path", { d: "M8.34 3.046a4.934 4.934 0 0 0-1.52.471C5.374 4.226 4.39 5.51 4.075 7.1c-.073.368-.073 1.432 0 1.8.192.965.635 1.83 1.295 2.525.155.163.275.303.266.311-.009.008-.15.082-.315.164-1.497.75-2.771 2.046-3.538 3.599-.222.449-.536 1.337-.769 2.168-.28 1.004-.03 1.933.709 2.629.349.328.677.508 1.133.624.31.078.447.08 6.144.08s5.834-.002 6.144-.08a2.394 2.394 0 0 0 1.133-.624c.543-.512.813-1.118.815-1.836.002-.438-.018-.531-.339-1.56-.234-.75-.476-1.328-.785-1.871-.738-1.294-1.973-2.47-3.289-3.129a5.142 5.142 0 0 1-.317-.166c-.01-.009.092-.128.225-.265.649-.666 1.043-1.385 1.282-2.338.097-.387.108-.503.108-1.131s-.011-.744-.108-1.131c-.192-.767-.496-1.396-.943-1.957A5.04 5.04 0 0 0 8.34 3.046m5.82-.005c-.49.068-.479.034-.148.433.334.401.679.911.863 1.276.069.138.13.251.136.251.841.125 1.344.361 1.871.879.347.341.582.712.745 1.18.104.297.112.364.112.94s-.008.643-.112.94c-.378 1.083-1.244 1.821-2.367 2.018-.21.037-.34.114-.34.201 0 .014.094.096.209.183 1.721 1.306 3.214 2.62 3.95 3.478.889 1.037 1.242 1.666 1.615 2.886.206.672.222.815.108 1.002-.158.258-.207.27-1.18.292l-.882.02-.013.12c-.044.422-.338 1.227-.598 1.64l-.125.2 1.278.011c1.474.012 1.66-.012 2.197-.276a2.518 2.518 0 0 0 1.115-1.116c.239-.49.3-.769.276-1.279-.018-.364-.05-.516-.243-1.14a24.179 24.179 0 0 0-.321-.98 8.08 8.08 0 0 0-3.766-4.261 12.244 12.244 0 0 1-.375-.205c-.009-.006.084-.119.206-.251.832-.899 1.268-1.851 1.392-3.042.101-.962-.147-2.085-.651-2.941a5.02 5.02 0 0 0-3.272-2.383c-.397-.089-1.296-.13-1.68-.076M9.756 5.097c.337.092.839.35 1.117.574C11.554 6.219 12 7.14 12 8c0 1.17-.775 2.329-1.849 2.766-1.509.614-3.162-.032-3.853-1.506-.226-.481-.277-.714-.277-1.26s.051-.779.277-1.26a3.033 3.033 0 0 1 2.205-1.7c.267-.049.988-.016 1.253.057m.404 8.022a5.964 5.964 0 0 1 3.1 1.66c.808.809 1.22 1.53 1.62 2.838.217.707.242.934.125 1.126-.168.275.256.257-6.005.257s-5.837.018-6.005-.257c-.118-.195-.093-.427.124-1.129.412-1.331.821-2.044 1.638-2.854.993-.986 2.214-1.561 3.683-1.736.344-.041 1.315.013 1.72.095" }) }));
    };
    var import_jsx_runtime115 = require("react/jsx-runtime");
    var VariantSelect = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(
        "path",
        {
          d: "M6.875 4.062c-1.307.237-2.342 1.175-2.742 2.486-.095.315-.107.415-.107.952 0 .537.012.637.107.952.368 1.204 1.211 2.047 2.415 2.415.315.095.415.107.952.107.537 0 .637-.012.952-.107 1.204-.368 2.047-1.211 2.415-2.415.095-.315.107-.415.107-.952 0-.537-.012-.637-.107-.952a3.45 3.45 0 0 0-.999-1.612 3.492 3.492 0 0 0-2.993-.874m9 0a3.563 3.563 0 0 0-1.143.422c-.425.24-1.008.823-1.248 1.248-.64 1.137-.64 2.399 0 3.536.24.425.823 1.008 1.248 1.248 1.137.64 2.399.64 3.536 0 .425-.24 1.008-.823 1.248-1.248.64-1.137.64-2.399 0-3.536-.24-.425-.823-1.008-1.248-1.248-.757-.426-1.574-.57-2.393-.422M8.11 6.139c.305.139.615.45.756.757.096.209.112.295.112.604.001.31-.015.393-.111.6a1.687 1.687 0 0 1-.763.767c-.21.098-.293.113-.604.113-.31 0-.393-.015-.6-.112a1.682 1.682 0 0 1-.766-.764c-.096-.209-.112-.295-.112-.604-.001-.31.015-.393.111-.6a1.618 1.618 0 0 1 1.017-.859c.257-.065.702-.019.96.098m8.991-.004c.313.143.622.45.766.761.098.21.113.293.113.604 0 .31-.015.393-.112.6a1.698 1.698 0 0 1-.764.767c-.21.098-.293.113-.604.113-.31 0-.393-.015-.6-.112a1.698 1.698 0 0 1-.767-.764c-.098-.21-.113-.293-.113-.604 0-.32.014-.389.124-.62.273-.573.795-.893 1.417-.867.223.009.362.041.54.122M6.875 13.062a3.563 3.563 0 0 0-1.143.422c-.425.24-1.008.823-1.248 1.248-.64 1.137-.64 2.399 0 3.536.24.425.823 1.008 1.248 1.248 1.137.64 2.399.64 3.536 0 .425-.24 1.008-.823 1.248-1.248.426-.757.567-1.542.424-2.36-.131-.755-.424-1.312-.98-1.868-.837-.837-1.937-1.185-3.085-.978m8.893.005a.493.493 0 0 0-.18.149c-.032.056-.055.393-.068 1.006-.029 1.323.025 1.269-1.298 1.298-.616.013-.95.036-1.007.069-.172.099-.215.279-.215.911s.043.812.215.911c.057.033.391.056 1.007.069 1.323.029 1.269-.025 1.298 1.298.013.616.036.95.069 1.007.099.172.279.215.911.215s.812-.043.911-.215c.033-.057.056-.391.069-1.007.029-1.323-.025-1.269 1.298-1.298.616-.013.95-.036 1.007-.069.172-.099.215-.279.215-.911s-.043-.812-.215-.911c-.057-.033-.391-.056-1.007-.069-1.323-.029-1.269.025-1.298-1.298-.013-.616-.036-.95-.069-1.007-.099-.173-.278-.215-.917-.214-.466.001-.622.015-.726.066m-7.667 2.068c.313.143.622.45.766.761.098.21.113.293.113.604 0 .31-.015.393-.112.6a1.698 1.698 0 0 1-.764.767c-.21.098-.293.113-.604.113-.31 0-.393-.015-.6-.112a1.698 1.698 0 0 1-.767-.764c-.098-.21-.113-.293-.113-.604 0-.32.014-.389.124-.62.273-.573.795-.893 1.417-.867.223.009.362.041.54.122",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime116 = require("react/jsx-runtime");
    var Video = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(
        "path",
        {
          d: "M4.503 5.042c-1.016.172-1.947.934-2.301 1.883-.203.545-.201.472-.201 5.067-.001 4.69-.006 4.572.233 5.159a3.046 3.046 0 0 0 1.615 1.615c.604.246.175.234 8.151.234 6.4 0 7.32-.007 7.581-.062a3.003 3.003 0 0 0 2.357-2.357c.093-.448.093-8.714 0-9.162a2.96 2.96 0 0 0-1.642-2.107c-.66-.318.116-.289-8.176-.297-4.081-.003-7.509.009-7.617.027M19.34 7.066c.115.039.263.135.361.233.317.317.299.038.299 4.701 0 4.663.018 4.384-.299 4.701-.324.324.322.299-7.701.299s-7.377.025-7.701-.299C3.982 16.384 4 16.663 4 12c0-4.664-.018-4.384.3-4.702.316-.316-.325-.291 7.683-.295 6.567-.003 7.179.003 7.357.063M10.803 9.83a.734.734 0 0 0-.22.183c-.081.109-.083.165-.095 1.89-.007 1.123.004 1.833.03 1.929a.692.692 0 0 0 .164.27c.102.097.156.118.311.116.169-.002.331-.086 1.727-.894.847-.491 1.581-.93 1.63-.975a.505.505 0 0 0 .127-.482.526.526 0 0 0-.127-.215c-.101-.091-2.969-1.751-3.176-1.837-.169-.071-.206-.069-.371.015",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime117 = require("react/jsx-runtime");
    var Window = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(
        "path",
        {
          d: "M4.503 4.042c-1.016.172-1.947.934-2.301 1.883-.206.552-.201.39-.201 6.067-.001 5.788-.01 5.564.233 6.159a3.046 3.046 0 0 0 1.615 1.615c.604.246.175.234 8.151.234 7.974 0 7.547.012 8.15-.233a3.08 3.08 0 0 0 1.617-1.617c.241-.594.233-.373.233-6.15 0-5.779.008-5.556-.234-6.151a2.99 2.99 0 0 0-1.47-1.537c-.66-.318.116-.289-8.176-.297-4.081-.003-7.509.009-7.617.027M20 12.573c0 5.141.019 4.81-.299 5.128-.324.324.322.299-7.701.299s-7.377.025-7.701-.299c-.318-.318-.299.013-.299-5.128V8h16v4.573",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime118 = require("react/jsx-runtime");
    var SoundTwo = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime118.jsxs)(Svg, __spreadProps2(__spreadValues2({}, props), { children: [
        /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.7362 2.72074C13.3923 2.63344 14.0491 2.87641 14.4905 3.3697C14.8576 3.77996 14.932 4.32411 14.9645 4.70078C15 5.11368 15 5.65051 15 6.27919V18.1829C15 18.7497 15 19.2411 14.9661 19.6237C14.9343 19.9836 14.8599 20.4876 14.5208 20.8847C14.105 21.3715 13.4813 21.6299 12.8431 21.5796C12.3225 21.5387 11.9135 21.2348 11.6365 21.0029C11.3421 20.7563 10.9946 20.4088 10.5938 20.0081L7.76152 17.1757C7.66889 17.0831 7.62249 17.0371 7.58737 17.005L7.58472 17.0026L7.58113 17.0024C7.53364 17.0003 7.46826 17 7.33726 17H5V15H7.33726C7.35383 15 7.37086 15 7.3883 14.9999C7.57821 14.9994 7.81735 14.9988 8.05268 15.0553C8.25675 15.1043 8.45184 15.1851 8.63078 15.2947C8.83714 15.4212 9.00578 15.5907 9.13971 15.7254C9.15201 15.7377 9.16402 15.7498 9.17574 15.7615L11.9757 18.5615C12.4181 19.0039 12.7024 19.2869 12.9204 19.4693C12.9374 19.4836 12.9533 19.4965 12.9679 19.5082C12.9699 19.4896 12.972 19.4693 12.974 19.4472C12.999 19.164 13 18.7629 13 18.1373V6.32523C13 5.63775 12.9991 5.18871 12.9718 4.87247C12.9695 4.84563 12.9671 4.82116 12.9646 4.79889C12.9483 4.81419 12.9305 4.83119 12.9113 4.85005C12.6848 5.07243 12.3919 5.41278 11.9444 5.93475L9.23817 9.09207C9.22621 9.10602 9.21397 9.1204 9.20142 9.13512C9.06539 9.29477 8.89415 9.49574 8.67515 9.6467C8.48538 9.77751 8.27444 9.87453 8.05162 9.93349C7.79448 10.0015 7.53045 10.0007 7.32071 10.0001C7.30136 10.0001 7.28248 10 7.2641 10H5V8.00001H7.2641C7.40897 8.00001 7.48172 7.99973 7.53453 7.9971L7.53863 7.99688L7.54146 7.99391C7.57782 7.95553 7.62538 7.90048 7.71966 7.79049L10.4559 4.5982C10.865 4.12086 11.2144 3.71327 11.5101 3.42293C11.7799 3.15805 12.1905 2.79335 12.7362 2.72074Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 11C2 9.34316 3.34315 8.00001 5 8.00001H6V10H5C4.44772 10 4 10.4477 4 11V14C4 14.5523 4.44772 15 5 15H6V17H5C3.34315 17 2 15.6569 2 14V11Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M15.7929 14.7929C17.4024 13.1834 17.4024 10.8166 15.7929 9.20712L17.2071 7.79291C19.5976 10.1834 19.5976 13.8166 17.2071 16.2071L15.7929 14.7929Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.2929 18.2929C21.9024 14.6834 21.9024 9.3166 18.2929 5.70712L19.7071 4.29291C24.0976 8.68343 24.0976 15.3166 19.7071 19.7071L18.2929 18.2929Z"
          }
        )
      ] }));
    };
    var import_jsx_runtime119 = require("react/jsx-runtime");
    var Plus = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(Svg, __spreadProps2(__spreadValues2({}, props), { children: [
        /* @__PURE__ */ (0, import_jsx_runtime119.jsx)("path", { d: "M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5Z" }),
        /* @__PURE__ */ (0, import_jsx_runtime119.jsx)("path", { d: "M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" })
      ] }));
    };
    var import_jsx_runtime120 = require("react/jsx-runtime");
    var CaretUp = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11.2929 9.29289C11.6834 8.90237 12.3166 8.90237 12.7071 9.29289L16.7071 13.2929C17.0976 13.6834 17.0976 14.3166 16.7071 14.7071C16.3166 15.0976 15.6834 15.0976 15.2929 14.7071L12 11.4142L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L11.2929 9.29289Z"
        }
      ) }));
    };
    var import_jsx_runtime121 = require("react/jsx-runtime");
    var Conference = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(Svg, __spreadProps2(__spreadValues2({}, props), { children: [
        /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13 7H7C5.89543 7 5 7.89543 5 9V15C5 16.1046 5.89543 17 7 17H13C14.1046 17 15 16.1046 15 15V9C15 7.89543 14.1046 7 13 7ZM7 5C4.79086 5 3 6.79086 3 9V15C3 17.2091 4.79086 19 7 19H13C15.2091 19 17 17.2091 17 15V9C17 6.79086 15.2091 5 13 5H7Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16 10.5524L19 8.64335V15.3567L16 13.4476V15.8182L17.9262 17.044C19.2577 17.8913 21 16.9348 21 15.3567V8.64335C21 7.06517 19.2577 6.10874 17.9262 6.95603L16 8.18182V10.5524Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime121.jsx)("path", { d: "M7 10C7 9.44772 7.44772 9 8 9H10C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11H8C7.44772 11 7 10.5523 7 10Z" })
      ] }));
    };
    var import_jsx_runtime122 = require("react/jsx-runtime");
    var Group = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime122.jsxs)(Svg, __spreadProps2(__spreadValues2({}, props), { children: [
        /* @__PURE__ */ (0, import_jsx_runtime122.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.0001 11C11.657 11 13.0001 9.65685 13.0001 8C13.0001 6.34315 11.657 5 10.0001 5C8.3433 5 7.00015 6.34315 7.00015 8C7.00015 9.65685 8.3433 11 10.0001 11ZM10.0001 13C12.7616 13 15.0001 10.7614 15.0001 8C15.0001 5.23858 12.7616 3 10.0001 3C7.23873 3 5.00015 5.23858 5.00015 8C5.00015 10.7614 7.23873 13 10.0001 13Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime122.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.89004 16.5048C3.08136 13.9283 5.64972 11 10.0001 11C14.3506 11 16.9189 13.9283 18.1103 16.5048C18.1162 16.5175 18.1221 16.5304 18.1282 16.5435C18.2367 16.7778 18.3684 17.0619 18.4408 17.3741C18.526 17.7415 18.5226 18.0985 18.4542 18.5018C18.3868 18.899 18.1853 19.299 17.9946 19.5972C17.804 19.8953 17.5255 20.2462 17.1933 20.474C16.423 21.0023 15.6945 21.0013 14.9107 21.0001C14.874 21.0001 14.8371 21 14.8002 21H5.20015C5.16318 21 5.12633 21.0001 5.08961 21.0001C4.30576 21.0013 3.57731 21.0023 2.80701 20.474C2.47481 20.2462 2.1963 19.8953 2.00567 19.5972C1.81505 19.299 1.61349 18.899 1.54611 18.5018C1.47768 18.0985 1.47426 17.7415 1.55949 17.3741C1.63189 17.0619 1.76355 16.7778 1.87211 16.5435C1.87817 16.5304 1.88414 16.5175 1.89004 16.5048ZM10.0001 13C6.71608 13 4.70993 15.1717 3.70536 17.3442C3.57074 17.6353 3.52853 17.7364 3.50777 17.8259C3.49579 17.8776 3.48266 17.9594 3.51793 18.1673C3.51768 18.1663 3.51783 18.1667 3.51793 18.1673C3.51948 18.1733 3.52903 18.2104 3.5587 18.2775C3.59071 18.3498 3.63589 18.4341 3.69072 18.5199C3.74556 18.6056 3.80306 18.682 3.85529 18.7414C3.90372 18.7965 3.93296 18.8203 3.9378 18.8243C3.9383 18.8246 3.93858 18.8249 3.9378 18.8243C4.15394 18.9725 4.27137 19 5.20015 19H14.8002C15.7289 19 15.8459 18.9729 16.0621 18.8247C16.0613 18.8253 16.0616 18.825 16.0621 18.8247C16.0669 18.8207 16.0966 18.7965 16.145 18.7414C16.1972 18.682 16.2547 18.6056 16.3096 18.5199C16.3644 18.4341 16.4096 18.3498 16.4416 18.2775C16.4713 18.2104 16.4806 18.1739 16.4822 18.1678C16.4823 18.1672 16.4824 18.1669 16.4822 18.1678C16.5174 17.96 16.5045 17.8776 16.4925 17.8259C16.4718 17.7364 16.4296 17.6353 16.2949 17.3442C15.2904 15.1716 13.2842 13 10.0001 13Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime122.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20.0622 18.8247C19.901 18.9352 19.795 18.9784 19.3664 18.9932C19.2374 19.4486 19.0186 19.852 18.8372 20.1358C18.6742 20.3907 18.4362 20.7135 18.1291 21L18.9108 21.0001C19.6947 21.0013 20.4231 21.0023 21.1934 20.474C21.5256 20.2462 21.8041 19.8953 21.9948 19.5972C22.1854 19.299 22.3869 18.899 22.4543 18.5018C22.5227 18.0985 22.5262 17.7415 22.4409 17.3741C22.3685 17.0619 22.2369 16.7778 22.1283 16.5435L22.1104 16.5048C21.2696 14.6865 19.7431 12.693 17.3883 11.6772C18.3794 10.7635 19.0003 9.45427 19.0003 8C19.0003 5.23858 16.7617 3 14.0003 3C13.7886 3 13.58 3.01315 13.3753 3.03868C14.2238 3.61706 14.9163 4.40743 15.3765 5.33359C16.341 5.83242 17.0003 6.83922 17.0003 8C17.0003 9.16078 16.341 10.1676 15.3765 10.6664C15.2547 10.9116 15.1165 11.1473 14.9635 11.3721C16.2846 12.1892 17.3124 13.285 18.0768 14.4166C19.0762 15.2241 19.8049 16.284 20.2951 17.3442C20.4297 17.6353 20.4719 17.7364 20.4927 17.8259C20.5046 17.8776 20.5178 17.9594 20.4825 18.1673C20.4826 18.1667 20.4827 18.1663 20.4825 18.1673C20.4809 18.1733 20.4714 18.2104 20.4417 18.2775C20.4097 18.3498 20.3645 18.4341 20.3097 18.5199C20.2549 18.6056 20.1974 18.682 20.1451 18.7414C20.0967 18.7965 20.067 18.8207 20.0622 18.8247C20.0617 18.825 20.0614 18.8253 20.0622 18.8247Z"
          }
        )
      ] }));
    };
    var import_jsx_runtime123 = require("react/jsx-runtime");
    var WhiteBoard = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime123.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime123.jsx)(
        "path",
        {
          d: "M6.579 5.041c-1.72.172-3.114 1.439-3.488 3.172-.065.298-.071.632-.071 3.787s.006 3.489.071 3.787c.35 1.623 1.59 2.836 3.209 3.14.41.078 10.99.078 11.4 0a4.015 4.015 0 0 0 3.072-2.647c.208-.607.208-.612.208-4.28 0-2.659-.012-3.482-.053-3.7a4.025 4.025 0 0 0-2.545-3.038c-.665-.25-.326-.237-6.162-.245-2.926-.004-5.465.007-5.641.024m10.897 2.001c.664.154 1.328.818 1.482 1.482.055.239.055 6.713 0 6.952-.154.664-.818 1.328-1.482 1.482-.242.055-10.71.055-10.952 0-.342-.079-.615-.242-.927-.555-.469-.469-.594-.792-.596-1.543L5 14.419l1.051-1.05 1.052-1.051 1.389 1.041c.765.572 1.499 1.096 1.632 1.163.516.26 1.189.253 1.733-.018.201-.1.914-.646 2.463-1.885 1.199-.96 2.249-1.811 2.333-1.892.229-.219.314-.412.318-.723.005-.396-.196-.714-.571-.907-.214-.109-.623-.096-.846.029-.096.053-1.161.887-2.368 1.853-2.023 1.619-2.2 1.751-2.276 1.704a93.731 93.731 0 0 1-1.348-1.002 60.459 60.459 0 0 0-1.431-1.054c-.581-.367-1.418-.375-2.041-.02-.116.066-.409.309-.65.541l-.44.421.001-1.435c.001-.821.018-1.509.041-1.61.151-.654.818-1.328 1.466-1.48.218-.052 10.745-.053 10.968-.002",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime124 = require("react/jsx-runtime");
    var Crown = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime124.jsxs)(Svg, __spreadProps2(__spreadValues2({}, props), { children: [
        /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(
          "path",
          {
            d: "M10.1275 4.14574C10.7764 2.41541 13.2239 2.41541 13.8728 4.14575L15.3912 8.19475L17.9155 5.67042C19.3219 4.26398 21.6962 5.5497 21.2869 7.49615L19.4124 16.4115C19.2178 17.3372 18.4012 18 17.4552 18H6.79566C5.86434 18 5.05629 17.3572 4.84687 16.4497L2.80979 7.62235C2.35796 5.66443 4.75194 4.33758 6.17279 5.75842L8.60911 8.19474L10.1275 4.14574ZM12.0001 4.84799L10.4818 8.89699C9.97103 10.259 8.22344 10.6375 7.1949 9.60896L4.75857 7.17263L6.79566 16L17.4552 16L19.3297 7.08464L16.8054 9.60896C15.7768 10.6375 14.0293 10.259 13.5185 8.89699L12.0001 4.84799Z",
            fillRule: "evenodd"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(
          "path",
          {
            d: "M5.50014 20C5.50014 19.4477 5.94786 19 6.50014 19H17.5001C18.0524 19 18.5001 19.4477 18.5001 20C18.5001 20.5523 18.0524 21 17.5001 21H6.50014C5.94786 21 5.50014 20.5523 5.50014 20Z",
            fillRule: "evenodd"
          }
        )
      ] }));
    };
    var import_jsx_runtime125 = require("react/jsx-runtime");
    var MicrophoneOff = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime125.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime125.jsx)(
        "path",
        {
          d: "M11.433 3.04c-.59.094-1.212.34-1.702.672-.775.527-1.335 1.322-1.602 2.277l-.109.391v2.6c0 2.539.002 2.608.087 2.94.1.391.313.916.458 1.129l.1.147.735-.736.735-.736-.056-.152c-.074-.203-.108-4.531-.038-4.932a2.048 2.048 0 0 1 1.084-1.433 1.98 1.98 0 0 1 2.279.389c.457.458.596.868.596 1.761v.502l.935-.934.936-.935-.037-.132c-.213-.774-.863-1.669-1.549-2.135a4.851 4.851 0 0 0-1.325-.601c-.387-.097-1.166-.139-1.527-.082m2.172 9.494c-1.562 1.563-2.358 2.386-2.326 2.406.027.016.277.038.555.049a3.972 3.972 0 0 0 1.646-.274 4.054 4.054 0 0 0 2.383-2.677c.088-.317.108-.488.126-1.058.011-.374.014-.712.006-.751-.011-.05-.695.61-2.39 2.305m-7.962-1.465c-.351.124-.643.545-.643.928 0 .192.165.86.322 1.303.223.63.669 1.451 1.028 1.894l.142.174.711-.711.711-.71-.162-.238a5.737 5.737 0 0 1-.651-1.429c-.213-.781-.221-.802-.397-.978a1 1 0 0 0-1.061-.233m12 0a1.136 1.136 0 0 0-.346.232c-.177.177-.188.203-.397.979-.13.484-.504 1.248-.812 1.66a5.096 5.096 0 0 1-5.362 1.894l-.335-.085-.764.764-.764.764.239.106a8.97 8.97 0 0 0 1.528.482l.37.071v1.105c0 1.27.02 1.381.299 1.66a.984.984 0 0 0 1.402 0c.279-.279.299-.39.299-1.66v-1.105l.37-.071c2.413-.462 4.487-2.246 5.308-4.565.157-.443.322-1.111.322-1.303 0-.681-.7-1.16-1.357-.928",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime126 = require("react/jsx-runtime");
    var CameraOff = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime126.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime126.jsx)(
        "path",
        {
          d: "M6.433 5.042a4.328 4.328 0 0 0-1.702.67c-.775.527-1.335 1.322-1.602 2.277l-.109.391v7.24l.111.398a4.36 4.36 0 0 0 .716 1.438l.244.312.709-.708.709-.708-.156-.232a2.896 2.896 0 0 1-.244-.466c-.088-.234-.088-.238-.101-3.494-.008-2.271.002-3.339.033-3.52A2.006 2.006 0 0 1 6.64 7.041c.181-.031 1.249-.041 3.52-.033 3.256.013 3.26.013 3.494.101.128.049.338.159.466.244l.232.156.707-.708.706-.707-.172-.14a4.65 4.65 0 0 0-1.635-.841c-.337-.089-.353-.09-3.818-.097-1.914-.004-3.582.007-3.707.026m10.794 3.871L15 11.14v2.003c0 1.265-.016 2.09-.043 2.24-.138.755-.787 1.414-1.549 1.573-.139.029-.914.044-2.24.044H9.139l-.999 1.001-1 1.001 3.24-.013c3.167-.012 3.247-.014 3.56-.098.926-.249 1.704-.76 2.241-1.474a5.1 5.1 0 0 0 .564-1.009c.035-.089.054-.08.675.318.352.224.757.452.9.505.728.27 1.514.093 2.084-.47.286-.284.474-.622.552-.993.062-.296.062-7.24 0-7.536a2.032 2.032 0 0 0-1.279-1.463l-.223-.083-2.227 2.227m1.763 4.76-.01 1.673-.98-.624-.98-.625V9.906l.98-.624.98-.625.01 1.672c.006.919.006 2.424 0 3.344M7.664 9.063a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489c.129.22.306.365.547.45.263.093 2.386.089 2.662-.005.369-.126.66-.538.66-.934s-.291-.808-.66-.934c-.267-.091-2.43-.093-2.676-.003",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime127 = require("react/jsx-runtime");
    var RedLine = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(
        "path",
        {
          d: "M19.8 3.288c-.171.036-.569.427-8.326 8.185-7.969 7.97-8.148 8.151-8.186 8.338-.074.363.078.707.376.848.199.095.484.09.679-.012.199-.104 16.222-16.132 16.318-16.324a.81.81 0 0 0-.015-.672c-.12-.235-.257-.323-.606-.39a.958.958 0 0 0-.24.027",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime128 = require("react/jsx-runtime");
    var SpeakerHorizontal = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime128.jsxs)(Svg, __spreadProps2(__spreadValues2({}, props), { children: [
        /* @__PURE__ */ (0, import_jsx_runtime128.jsx)("path", { d: "M19 2.5C19.4647 2.5 19.697 2.5 19.8902 2.53843C20.6836 2.69624 21.3038 3.31644 21.4616 4.10982C21.5 4.30302 21.5 4.53534 21.5 5C21.5 5.46466 21.5 5.69698 21.4616 5.89018C21.3038 6.68356 20.6836 7.30376 19.8902 7.46157C19.697 7.5 19.4647 7.5 19 7.5C18.5353 7.5 18.303 7.5 18.1098 7.46157C17.3164 7.30376 16.6962 6.68356 16.5384 5.89018C16.5 5.69698 16.5 5.46465 16.5 5C16.5 4.53534 16.5 4.30302 16.5384 4.10982C16.6962 3.31644 17.3164 2.69624 18.1098 2.53843C18.303 2.5 18.5353 2.5 19 2.5Z" }),
        /* @__PURE__ */ (0, import_jsx_runtime128.jsx)("path", { d: "M11.3 2.5C12.4201 2.5 12.9802 2.5 13.408 2.71799C13.7843 2.90973 14.0903 3.21569 14.282 3.59202C14.5 4.01984 14.5 4.57989 14.5 5.7L14.5 18.3C14.5 19.4201 14.5 19.9802 14.282 20.408C14.0903 20.7843 13.7843 21.0903 13.408 21.282C12.9802 21.5 12.4201 21.5 11.3 21.5L5.7 21.5C4.57989 21.5 4.01984 21.5 3.59202 21.282C3.21569 21.0903 2.90973 20.7843 2.71799 20.408C2.5 19.9802 2.5 19.4201 2.5 18.3L2.5 5.7C2.5 4.57989 2.5 4.01984 2.71799 3.59202C2.90973 3.21569 3.21569 2.90973 3.59202 2.71799C4.01984 2.5 4.5799 2.5 5.7 2.5L11.3 2.5Z" }),
        /* @__PURE__ */ (0, import_jsx_runtime128.jsx)("path", { d: "M19 9.5C19.4647 9.5 19.697 9.5 19.8902 9.53843C20.6836 9.69624 21.3038 10.3164 21.4616 11.1098C21.5 11.303 21.5 11.5353 21.5 12C21.5 12.4647 21.5 12.697 21.4616 12.8902C21.3038 13.6836 20.6836 14.3038 19.8902 14.4616C19.697 14.5 19.4647 14.5 19 14.5C18.5353 14.5 18.303 14.5 18.1098 14.4616C17.3164 14.3038 16.6962 13.6836 16.5384 12.8902C16.5 12.697 16.5 12.4647 16.5 12C16.5 11.5353 16.5 11.303 16.5384 11.1098C16.6962 10.3164 17.3164 9.69624 18.1098 9.53843C18.303 9.5 18.5353 9.5 19 9.5Z" }),
        /* @__PURE__ */ (0, import_jsx_runtime128.jsx)("path", { d: "M19 16.5C19.4647 16.5 19.697 16.5 19.8902 16.5384C20.6836 16.6962 21.3038 17.3164 21.4616 18.1098C21.5 18.303 21.5 18.5353 21.5 19C21.5 19.4647 21.5 19.697 21.4616 19.8902C21.3038 20.6836 20.6836 21.3038 19.8902 21.4616C19.697 21.5 19.4647 21.5 19 21.5C18.5353 21.5 18.303 21.5 18.1098 21.4616C17.3164 21.3038 16.6962 20.6836 16.5384 19.8902C16.5 19.697 16.5 19.4647 16.5 19C16.5 18.5353 16.5 18.303 16.5384 18.1098C16.6962 17.3164 17.3164 16.6962 18.1098 16.5384C18.303 16.5 18.5353 16.5 19 16.5Z" })
      ] }));
    };
    var import_jsx_runtime129 = require("react/jsx-runtime");
    var Minus = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime129.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime129.jsx)("path", { d: "M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" }) }));
    };
    var import_jsx_runtime130 = require("react/jsx-runtime");
    var Cursor = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(
        "path",
        {
          xmlns: "http://www.w3.org/2000/svg",
          d: "M9 10.819v4.439l.31-.301c.84-.817 1.814-1.727 1.831-1.71.01.011.269.639.574 1.396.796 1.973.924 2.269 1.039 2.406.365.434 1.218.22 1.407-.353.076-.229.029-.4-.303-1.121-.172-.371-.523-1.152-.78-1.735l-.469-1.06 1.355-.011c.746-.005 1.356-.023 1.356-.04 0-.016-1.422-1.451-3.16-3.189L9 6.38v4.439",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime131 = require("react/jsx-runtime");
    var Sticker = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
        "path",
        {
          d: "M5.929.041C3.541.15 2.341.552 1.375 1.569.526 2.463.157 3.638.04 5.82c-.052.972-.051 11.432.001 12.38.096 1.754.342 2.787.864 3.633.247.4.862 1.015 1.262 1.262.609.376 1.437.639 2.393.76.998.127 2.173.149 7.3.137l5.04-.012.291-.106c.16-.059.385-.165.5-.237.127-.08 1.282-1.2 2.961-2.874 2.873-2.863 3.056-3.064 3.203-3.534.04-.126.089-.229.109-.229.05 0 .046-10.175-.005-11.16-.092-1.775-.337-2.816-.863-3.673-.243-.395-.9-1.049-1.278-1.27-.803-.47-1.597-.682-3.078-.822C18.17.021 7.017-.008 5.929.041M18.68 2.074c.231.025.6.074.82.109 1.45.232 2.085.867 2.317 2.317.141.878.152 1.248.172 5.38l.019 4.14h-2.734c-2.151 0-2.781.011-2.954.054-.327.08-.991.414-1.232.621-.579.498-.922 1.097-1.047 1.827-.03.175-.04 1.094-.033 2.868L14.02 22l-3.72-.001c-4.596-.001-5.471-.042-6.371-.303-1.231-.357-1.665-1.071-1.857-3.061-.075-.773-.075-12.497 0-13.27.11-1.136.263-1.721.572-2.183.506-.757 1.362-1.05 3.336-1.141 1.078-.05 12.201-.021 12.7.033",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime132 = require("react/jsx-runtime");
    var TText = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(
        "path",
        {
          d: "M2.503.042C1.488.214.556.976.202 1.925c-.177.474-.201.709-.201 1.995 0 .719.016 1.281.041 1.369.061.22.273.473.489.585A.987.987 0 0 0 1.7 5.702C1.982 5.42 2 5.317 2 4c0-1.316.018-1.421.299-1.701C2.615 1.983 2.346 2 6.927 2H11v20H9.925c-1.161 0-1.283.017-1.551.222a1.19 1.19 0 0 0-.243.289c-.095.161-.111.233-.111.489s.016.328.111.489c.061.103.17.234.243.289.298.228.204.222 3.624.222 3.547 0 3.392.013 3.703-.299a.984.984 0 0 0 0-1.402c-.278-.278-.393-.299-1.628-.299H13V2h4.073c4.581 0 4.312-.017 4.628.299.28.28.299.386.299 1.698 0 .664.018 1.205.042 1.292.099.358.48.664.875.702.43.041.879-.246 1.017-.651.094-.275.097-2.473.004-2.921A2.96 2.96 0 0 0 22.296.312c-.664-.32.357-.29-10.176-.297C6.939.012 2.611.024 2.503.042",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime133 = require("react/jsx-runtime");
    var Figures = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(
        "path",
        {
          xmlns: "http://www.w3.org/2000/svg",
          d: "M14.2 3.058a5.92 5.92 0 0 0-2.54.967 6.01 6.01 0 0 0-2.645 4.564l-.027.409-2.625.011-2.625.011-.199.102c-.226.117-.437.369-.498.596-.029.105-.039 1.846-.032 5.368L3.02 20.3l.111.189c.061.103.17.234.243.289.306.233.016.222 5.624.222 5.785 0 5.383.021 5.703-.299.307-.307.299-.225.299-3.122v-2.567l.395-.026c2.695-.176 4.895-2.104 5.492-4.812.126-.571.126-1.777 0-2.348-.546-2.475-2.413-4.297-4.846-4.729-.489-.087-1.381-.106-1.841-.039m1.605 1.521c1.809.316 3.3 1.807 3.616 3.616.121.688.057 1.607-.154 2.225a4.552 4.552 0 0 1-2.927 2.871 5.494 5.494 0 0 1-1.11.207l-.23.023v-1.834c0-2.079-.001-2.091-.299-2.388-.297-.297-.312-.299-2.368-.299H10.52v-.235c0-.976.528-2.171 1.301-2.944.617-.617 1.511-1.089 2.352-1.242.394-.071 1.225-.071 1.632 0M13.48 15.02v4.5H4.52v-9h8.96v4.5",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime134 = require("react/jsx-runtime");
    var Arrow = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(
        "path",
        {
          xmlns: "http://www.w3.org/2000/svg",
          d: "M12.407 3.846c-.258.127-.387.346-.387.654 0 .311.13.529.39.655.173.084.208.085 2.733.085H17.7l-6.906 6.91c-3.799 3.8-6.935 6.968-6.97 7.038-.127.255-.049.669.163.86a.799.799 0 0 0 .804.131c.106-.044 2.13-2.042 7.059-6.97L18.76 6.3v2.557c0 2.525.001 2.56.085 2.733.126.26.344.39.655.39.311 0 .529-.13.655-.39.085-.175.085-.19.085-3.704 0-3.085-.008-3.547-.062-3.676a.61.61 0 0 0-.358-.375c-.151-.069-.351-.073-3.7-.074-3.54-.001-3.54-.001-3.713.085",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime135 = require("react/jsx-runtime");
    var Image = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
        "path",
        {
          xmlns: "http://www.w3.org/2000/svg",
          d: "M5.84 3.043c-1.14.078-1.953.424-2.663 1.134-.505.505-.876 1.164-1.015 1.803-.142.654-.161 1.373-.161 6.02 0 4.633.02 5.37.159 6.009.187.862.803 1.762 1.552 2.267.646.435 1.213.611 2.208.682.783.056 11.377.056 12.16 0 .995-.071 1.562-.247 2.208-.682.745-.503 1.365-1.405 1.55-2.256.142-.653.161-1.373.161-6.02 0-4.647-.019-5.367-.161-6.02-.185-.851-.805-1.753-1.55-2.256-.646-.435-1.234-.617-2.219-.684-.676-.046-11.549-.043-12.229.003m12.695 2.048a1.902 1.902 0 0 1 1.373 1.372c.06.248.069.72.081 4.477.012 3.599.006 4.191-.041 4.14-.031-.033-.417-.51-.858-1.06-.88-1.097-1.066-1.266-1.567-1.422-.523-.163-1.213-.078-1.663.205-.11.069-.56.482-1 .919l-.8.793-1.8-2.162c-.99-1.19-1.875-2.229-1.966-2.309a2.01 2.01 0 0 0-1.742-.44 2.35 2.35 0 0 0-.898.466c-.092.082-.927 1.041-1.856 2.13a625.648 625.648 0 0 1-1.745 2.04c-.049.052-.055-.47-.042-3.72.013-3.347.022-3.811.081-4.055.112-.467.403-.865.838-1.148.249-.161.471-.228.921-.276.159-.017 3.016-.028 6.349-.024 5.516.006 6.085.013 6.335.074M15.58 7.047c-.721.138-1.381.801-1.536 1.545C13.789 9.816 14.751 11 16 11c1.08 0 2-.92 2-2 0-.523-.21-1.017-.596-1.404-.491-.49-1.127-.682-1.824-.549m-4.788 6.663c.986 1.183 1.882 2.229 1.99 2.326a2.004 2.004 0 0 0 1.616.447c.557-.099.766-.242 1.692-1.157.49-.485.845-.806.865-.784.019.021.649.808 1.401 1.75l1.368 1.712-.082.132c-.109.178-.421.465-.648.598-.102.06-.318.139-.48.177-.271.064-.774.069-6.514.069-6.925 0-6.56.014-7.031-.269-.447-.269-.825-.796-.875-1.221l-.024-.204 2.453-2.863a432.938 432.938 0 0 1 2.465-2.863c.006 0 .818.967 1.804 2.15",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime136 = require("react/jsx-runtime");
    var Eraser = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime136.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime136.jsx)(
        "path",
        {
          xmlns: "http://www.w3.org/2000/svg",
          d: "M14.167 4.601c-.374.098-.709.267-1.087.55-.377.281-8.055 7.948-8.397 8.384a3.034 3.034 0 0 0-.569 1.066c-.134.431-.134 1.207 0 1.638.218.695.465 1.023 1.723 2.288.963.966 1.164 1.123 1.67 1.302l.313.111 5.36.013c3.951.009 5.416 0 5.574-.034a.887.887 0 0 0 .685-.856.865.865 0 0 0-.596-.817c-.108-.033-1.024-.046-3.166-.046h-3.014l3.203-3.21c1.761-1.766 3.312-3.349 3.446-3.52.278-.353.496-.773.597-1.15.108-.404.097-1.172-.024-1.559-.221-.71-.468-1.033-1.821-2.382-1.329-1.323-1.702-1.599-2.407-1.78-.414-.106-1.081-.105-1.49.002m1.256 1.763c.234.109.84.662 1.737 1.584.856.88 1.032 1.122 1.068 1.464.058.568-.073.786-1.106 1.838l-.742.754-1.94-1.944-1.94-1.945.762-.748c.856-.838 1.111-1.036 1.402-1.085.26-.043.559-.011.759.082M12.72 15.66c-1.331 1.331-2.477 2.447-2.546 2.48-.192.091-2.004.087-2.198-.004-.198-.094-1.886-1.833-2.056-2.118-.132-.222-.14-.254-.14-.598 0-.343.008-.376.14-.602.105-.178.798-.899 2.739-2.849l2.599-2.611 1.941 1.941 1.941 1.941-2.42 2.42",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime137 = require("react/jsx-runtime");
    var Pen = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(
        "path",
        {
          xmlns: "http://www.w3.org/2000/svg",
          d: "M11.607 4.342c-.431.116-.77.4-.951.795-.056.123-.252.932-.48 1.985L9.79 8.9l-1.125 2.92-1.125 2.92-.01 4.63L7.519 24H9v-8.861l.96-2.499a226.11 226.11 0 0 1 1.019-2.63l.06-.13h1.922l.06.13c.033.072.492 1.255 1.019 2.63l.96 2.499V24H16.481l-.011-4.63-.01-4.63-1.125-2.92L14.21 8.9l-.386-1.778c-.228-1.053-.424-1.862-.48-1.985a1.427 1.427 0 0 0-.969-.797 1.356 1.356 0 0 0-.768.002"
        }
      ) }));
    };
    var import_jsx_runtime138 = require("react/jsx-runtime");
    var Undo = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime138.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime138.jsx)(
        "path",
        {
          d: "M4.813 2.043a.87.87 0 0 0-.541.309c-.259.287-.252.194-.252 3.148 0 3.034-.012 2.91.315 3.212.302.278.189.268 3.165.268 2.957 0 2.86.008 3.152-.255a.935.935 0 0 0 .316-.722.96.96 0 0 0-.568-.898c-.172-.081-.247-.086-1.748-.098l-1.568-.012.26-.235c1.119-1.015 2.599-1.638 4.168-1.755 1.837-.137 3.777.522 5.135 1.743a7.124 7.124 0 0 1 2.26 3.992c.084.45.116 1.654.055 2.112-.15 1.125-.509 2.1-1.102 2.992-.315.472-.45.638-.893 1.091a6.457 6.457 0 0 1-1.93 1.382c-1.936.924-4.109.926-6.06.005-1.129-.532-1.977-1.257-2.771-2.37-.205-.287-.284-.364-.457-.447-.296-.142-.465-.164-.716-.09-.566.166-.874.808-.636 1.33.172.379.88 1.257 1.431 1.775a8.983 8.983 0 0 0 7.94 2.277c3.985-.809 6.925-4.161 7.189-8.197a8.998 8.998 0 0 0-.898-4.54c-1.352-2.764-3.956-4.606-7.039-4.982-.805-.098-1.979-.046-2.819.126-1.384.283-2.794.951-3.85 1.821-.169.14-.316.255-.327.255-.01 0-.024-.562-.031-1.25-.012-1.168-.018-1.262-.097-1.43a.995.995 0 0 0-1.083-.557",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime139 = require("react/jsx-runtime");
    var Redo = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(
        "path",
        {
          xmlns: "http://www.w3.org/2000/svg",
          d: "M18.673 2.063c-.244.075-.523.351-.609.603-.053.156-.064.394-.064 1.404v1.216l-.23-.185a16.74 16.74 0 0 0-.61-.456c-2.793-1.989-6.576-2.177-9.576-.478C4.348 6 2.557 9.651 3.103 13.3a8.777 8.777 0 0 0 1.2 3.345c2.833 4.673 9.106 5.768 13.368 2.335.87-.701 1.904-1.949 2.005-2.418.139-.648-.403-1.258-1.057-1.19-.399.041-.547.158-.999.791-.456.638-1.28 1.398-1.96 1.805-.852.51-1.91.874-2.887.994-.49.06-1.531.028-1.973-.061-.738-.149-1.569-.435-2.103-.725a7.052 7.052 0 0 1-3.598-4.996 7.673 7.673 0 0 1 .044-2.612c.408-2.009 1.831-3.877 3.644-4.784 1.013-.507 1.92-.74 3.013-.773a6.786 6.786 0 0 1 3.325.73c.595.294 1.409.859 1.691 1.174l.076.085h-1.499c-1.734 0-1.796.009-2.087.3a.96.96 0 0 0 0 1.4c.308.307.23.3 3.194.3 2.968 0 2.886.008 3.197-.303.311-.311.303-.229.303-3.197s.008-2.886-.303-3.197c-.279-.279-.63-.361-1.024-.24",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime140 = require("react/jsx-runtime");
    var Pin = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime140.jsxs)(Svg, __spreadProps2(__spreadValues2({}, props), { children: [
        /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.9142 4.64268C14.3047 5.0332 14.3047 5.66637 13.9142 6.05689L12.6984 7.27267C12.6942 7.27685 12.6894 7.28171 12.684 7.28716C12.6312 7.3406 12.5223 7.45083 12.3891 7.53865C12.2763 7.61305 12.1539 7.67187 12.0253 7.71349C11.8735 7.76262 11.7194 7.77883 11.6447 7.78668C11.6371 7.78748 11.6303 7.7882 11.6244 7.78885L7.60724 8.23521L15.9785 16.6065L16.4249 12.5893C16.4255 12.5834 16.4262 12.5766 16.427 12.569C16.4349 12.4943 16.4511 12.3402 16.5002 12.1884C16.5418 12.0598 16.6007 11.9374 16.6751 11.8246C16.7629 11.6914 16.8731 11.5825 16.9266 11.5297C16.932 11.5243 16.9369 11.5195 16.9411 11.5153L18.1568 10.2995C18.5474 9.909 19.1805 9.909 19.571 10.2995C19.9616 10.69 19.9616 11.3232 19.571 11.7137L18.4049 12.8799L17.9164 17.2761C17.8905 17.51 17.864 17.7483 17.8246 17.9417C17.7869 18.1266 17.7028 18.4741 17.4224 18.7552C17.0997 19.0785 16.6473 19.2372 16.1933 19.1863C15.7988 19.142 15.516 18.9231 15.371 18.8023C15.2194 18.676 15.0499 18.5064 14.8836 18.34L5.89878 9.35518C5.89044 9.34684 5.88208 9.33848 5.87371 9.33012C5.70733 9.1638 5.53773 8.99427 5.4114 8.84269C5.29057 8.69772 5.0717 8.41492 5.02743 8.02041C4.97649 7.56645 5.1352 7.11402 5.45856 6.79135C5.73957 6.51095 6.08714 6.42685 6.27206 6.38912C6.4654 6.34968 6.70374 6.32324 6.93757 6.29731C6.94932 6.296 6.96107 6.2947 6.9728 6.2934L11.3338 5.80883L12.5 4.64267C12.8905 4.25214 13.5237 4.25215 13.9142 4.64268Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.271 4.75684L19.4569 5.94272C19.8296 6.31546 20.1512 6.63701 20.3944 6.92351C20.6512 7.2259 20.8788 7.55438 21.01 7.95826C21.2058 8.56079 21.2058 9.20983 21.01 9.81236C20.8788 10.2162 20.6512 10.5447 20.3944 10.8471C20.1512 11.1336 19.8296 11.4552 19.4569 11.8279L18.8639 12.4208C18.4734 12.8114 17.8403 12.8114 17.4497 12.4208C17.0592 12.0303 17.0592 11.3972 17.4497 11.0066L18.0154 10.4409C18.4231 10.0333 18.6858 9.76947 18.8698 9.55276C19.0462 9.34497 19.0907 9.2471 19.1079 9.19433C19.1731 8.99349 19.1731 8.77714 19.1079 8.57629C19.0907 8.52352 19.0462 8.42566 18.8698 8.21787C18.6858 8.00115 18.4231 7.73736 18.0154 7.32968L16.884 6.19831C16.4764 5.79062 16.2126 5.52793 15.9959 5.34395C15.7881 5.16755 15.6902 5.12298 15.6374 5.10583C15.4366 5.04057 15.2202 5.04057 15.0194 5.10583C14.9666 5.12298 14.8688 5.16755 14.661 5.34395C14.4442 5.52793 14.1805 5.79062 13.7728 6.19831L13.2071 6.76399C12.8166 7.15452 12.1834 7.15452 11.7929 6.76399C11.4023 6.37347 11.4023 5.7403 11.7929 5.34978L12.3858 4.75684C12.7586 4.38407 13.0801 4.0625 13.3666 3.81927C13.669 3.56256 13.9975 3.33494 14.4014 3.20372C15.0039 3.00794 15.6529 3.00794 16.2555 3.20372C16.6593 3.33494 16.9878 3.56256 17.2902 3.81927C17.5767 4.0625 17.8983 4.38407 18.271 4.75684Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.7929 12.4208C12.1834 12.8114 12.1834 13.4445 11.7929 13.8351L6.84313 18.7848C6.4526 19.1753 5.81944 19.1753 5.42891 18.7848C5.03839 18.3943 5.03839 17.7611 5.42891 17.3706L10.3787 12.4208C10.7692 12.0303 11.4023 12.0303 11.7929 12.4208Z"
          }
        )
      ] }));
    };
    var import_jsx_runtime141 = require("react/jsx-runtime");
    var Hint = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(
        "path",
        {
          xmlns: "http://www.w3.org/2000/svg",
          d: "M11.52 5.363a6.491 6.491 0 0 0-2.803.841A6.955 6.955 0 0 0 6.14 8.819a7.341 7.341 0 0 0-.745 2.241c-.065.412-.065 1.468 0 1.88.118.759.4 1.607.745 2.241.577 1.062 1.617 2.102 2.679 2.679a7.341 7.341 0 0 0 2.241.745c.414.065 1.47.064 1.88 0 1.055-.167 2.078-.575 2.9-1.156.487-.345 1.264-1.122 1.609-1.609.581-.822.989-1.845 1.156-2.9.065-.412.065-1.468 0-1.88-.167-1.055-.576-2.08-1.156-2.899-.33-.466-1.036-1.188-1.479-1.514-1.292-.948-2.82-1.389-4.45-1.284m.88 3.4c.39.177.578.468.578.897 0 .332-.088.529-.333.751-.484.437-1.221.289-1.538-.31-.118-.225-.118-.658.001-.881.178-.335.515-.538.892-.538.136 0 .289.031.4.081m-.084 2.657c.175.103.28.246.326.443.02.086.037.603.037 1.147l.001.99h1v1.32h-3.36V14h1v-1.32h-.64v-1.367l.75.013c.663.012.766.023.886.094",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime142 = require("react/jsx-runtime");
    var DoubleBottomArrows = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime142.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime142.jsx)(
        "path",
        {
          xmlns: "http://www.w3.org/2000/svg",
          d: "M6.699 6.195a1.099 1.099 0 0 0-.504.504c-.1.22-.097.589.008.821.062.138.68.779 2.669 2.766 1.423 1.422 2.65 2.617 2.726 2.655.076.038.248.078.382.089.47.038.357.134 3.269-2.781 2.541-2.546 2.627-2.636 2.688-2.846.078-.27.078-.337.002-.594a.971.971 0 0 0-.436-.563c-.144-.094-.203-.106-.503-.106-.301 0-.358.012-.5.107-.088.058-1.123 1.07-2.3 2.249l-2.139 2.143L9.88 8.462C8.224 6.808 7.657 6.265 7.52 6.203c-.232-.105-.6-.108-.821-.008m.188 4.888c-.41.08-.767.514-.767.932.001.462-.142.296 2.713 3.158 1.478 1.48 2.693 2.667 2.777 2.711a.949.949 0 0 0 .734.058c.235-.068.242-.074 2.847-2.675 1.884-1.881 2.636-2.657 2.7-2.787.242-.493.001-1.129-.509-1.342a1.122 1.122 0 0 0-.787.014c-.13.059-.735.641-2.335 2.244-1.188 1.19-2.177 2.164-2.199 2.164-.022 0-1.021-.978-2.22-2.174-1.353-1.348-2.234-2.197-2.321-2.235a1.109 1.109 0 0 0-.633-.068",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime143 = require("react/jsx-runtime");
    var DoubleUpArrows = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime143.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime143.jsx)(
        "path",
        {
          xmlns: "http://www.w3.org/2000/svg",
          d: "M11.62 6.064c-.185.058-.397.259-2.811 2.669-1.884 1.881-2.636 2.657-2.7 2.787-.242.493-.001 1.129.509 1.342.219.091.571.085.787-.014.13-.059.735-.641 2.335-2.244 1.188-1.19 2.177-2.164 2.199-2.164.022 0 1.021.978 2.22 2.174 1.465 1.46 2.232 2.197 2.338 2.245.173.079.579.095.743.029.367-.147.64-.534.64-.906-.001-.459.14-.295-2.713-3.155-1.544-1.547-2.691-2.666-2.782-2.713a1.075 1.075 0 0 0-.765-.05m-.06 4.976c-.136.063-.824.726-2.791 2.692-2.369 2.367-2.618 2.628-2.69 2.82A1.284 1.284 0 0 0 6 16.9c0 .209.144.55.29.685.263.244.344.275.71.275.301 0 .358-.012.5-.107.088-.058 1.123-1.07 2.3-2.249l2.139-2.143 2.181 2.177c1.656 1.654 2.223 2.197 2.36 2.259.37.167.833.084 1.117-.2a1.02 1.02 0 0 0 .2-1.117c-.062-.138-.68-.779-2.669-2.766-1.423-1.422-2.651-2.617-2.728-2.656-.219-.11-.622-.119-.84-.018",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime144 = require("react/jsx-runtime");
    var SimpleAnswertTest = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime144.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime144.jsx)(
        "path",
        {
          xmlns: "http://www.w3.org/2000/svg",
          d: "M6.991 3.045c-1.317.079-2.094.4-2.851 1.175-.537.55-.864 1.164-1 1.874C3.02 6.723 3 7.537 3 12c0 5.277.019 5.687.294 6.479.318.912 1.312 1.91 2.213 2.221.817.282 1.205.3 6.493.3s5.676-.018 6.493-.3c.895-.309 1.898-1.312 2.207-2.207.282-.817.3-1.205.3-6.493s-.018-5.676-.3-6.493c-.207-.601-.841-1.401-1.415-1.786-.662-.444-1.247-.61-2.385-.679-.806-.049-9.094-.046-9.909.003m9.81 1.995c.341.022.723.066.85.099.553.144 1.065.656 1.209 1.209.114.437.14 1.474.14 5.652s-.026 5.215-.14 5.652c-.144.553-.686 1.093-1.229 1.223-.435.105-1.308.124-5.631.124s-5.196-.019-5.631-.124c-.543-.13-1.085-.67-1.229-1.223C5.026 17.215 5 16.178 5 12s.026-5.215.14-5.652c.103-.397.416-.8.811-1.044.239-.148.575-.225 1.142-.261.73-.047 8.984-.049 9.708-.003M7.78 7.037c-.75.185-1.017 1.115-.475 1.658.063.062.186.152.274.199l.161.086h8.52l.161-.086c.366-.196.553-.498.553-.894s-.187-.698-.553-.894l-.161-.086-4.18-.006c-2.299-.004-4.234.007-4.3.023m0 4c-.751.188-1.017 1.115-.475 1.658.063.062.186.152.274.199.159.085.185.086 2.421.086 2.236 0 2.262-.001 2.421-.086.366-.196.553-.498.553-.894s-.187-.698-.553-.894c-.159-.085-.193-.086-2.341-.093-1.199-.003-2.234.007-2.3.024",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime145 = require("react/jsx-runtime");
    var DetailedAnswerTest = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime145.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime145.jsx)(
        "path",
        {
          xmlns: "http://www.w3.org/2000/svg",
          d: "M7.32 3.041c-1.344.058-1.884.201-2.587.686-.772.533-1.336 1.33-1.533 2.165-.172.731-.18 1.006-.18 6.108 0 5.102.008 5.377.18 6.108.201.853.787 1.665 1.581 2.194.576.383 1.013.527 1.899.626.663.075 9.977.075 10.64 0 .885-.099 1.323-.243 1.899-.626a4.043 4.043 0 0 0 1.083-1.083c.383-.576.527-1.014.626-1.899.075-.663.075-9.977 0-10.64-.099-.885-.243-1.323-.626-1.899-.388-.582-1.032-1.133-1.641-1.402-.296-.131-.769-.243-1.281-.302-.478-.056-8.9-.086-10.06-.036M17.531 5.09c.149.037.361.115.47.174.265.144.659.561.778.824.202.445.201.405.201 5.912s.001 5.467-.201 5.912c-.134.296-.535.702-.836.848-.462.223-.369.22-5.943.22s-5.481.003-5.943-.22c-.301-.146-.702-.552-.836-.848-.202-.445-.201-.405-.201-5.912s-.001-5.467.201-5.912c.188-.412.703-.853 1.131-.966.381-.102.987-.113 5.848-.105 4.55.007 5.087.014 5.331.073M7.78 7.037c-.75.185-1.017 1.115-.475 1.658.063.062.186.152.274.199l.161.086h8.52l.161-.086c.366-.196.553-.498.553-.894s-.187-.698-.553-.894l-.161-.086-4.18-.006c-2.299-.004-4.234.007-4.3.023m-.116 4.026a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489c.061.103.17.234.243.289.298.228.204.222 3.624.222 3.547 0 3.392.013 3.703-.299a.984.984 0 0 0 0-1.402c-.312-.312-.154-.299-3.718-.296-2.641.002-3.189.012-3.319.06m.116 3.974c-.751.188-1.017 1.115-.475 1.658.063.062.186.152.274.199.159.085.185.086 2.421.086 2.236 0 2.262-.001 2.421-.086.366-.196.553-.498.553-.894s-.187-.698-.553-.894c-.159-.085-.193-.086-2.341-.093-1.199-.003-2.234.007-2.3.024",
          fillRule: "evenodd"
        }
      ) }));
    };
    var import_jsx_runtime146 = require("react/jsx-runtime");
    var OptionSelectionTest = (_a) => {
      var props = __objRest2(_a, []);
      return /* @__PURE__ */ (0, import_jsx_runtime146.jsx)(Svg, __spreadProps2(__spreadValues2({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime146.jsx)(
        "path",
        {
          xmlns: "http://www.w3.org/2000/svg",
          d: "M6.875 4.062c-1.307.237-2.342 1.175-2.742 2.486-.095.315-.107.415-.107.952 0 .537.012.637.107.952.368 1.204 1.211 2.047 2.415 2.415.315.095.415.107.952.107.537 0 .637-.012.952-.107 1.204-.368 2.047-1.211 2.415-2.415.095-.315.107-.415.107-.952 0-.537-.012-.637-.107-.952a3.45 3.45 0 0 0-.999-1.612 3.492 3.492 0 0 0-2.993-.874m9.15-.017c-1.273.164-2.408 1.105-2.821 2.337a3.452 3.452 0 0 0 .837 3.577c1.199 1.198 3.043 1.36 4.473.393.286-.193.768-.709.949-1.015.362-.613.507-1.138.507-1.837 0-.976-.328-1.775-1.011-2.458a3.45 3.45 0 0 0-2.038-1 2.778 2.778 0 0 0-.896.003M8.11 6.139c.305.139.615.45.756.757.096.209.112.295.112.604.001.31-.015.393-.111.6a1.687 1.687 0 0 1-.763.767c-.21.098-.293.113-.604.113-.31 0-.393-.015-.6-.112a1.682 1.682 0 0 1-.766-.764c-.096-.209-.112-.295-.112-.604-.001-.31.015-.393.111-.6a1.618 1.618 0 0 1 1.017-.859c.257-.065.702-.019.96.098m9.033.001c.301.147.57.416.719.721.107.216.118.277.118.639s-.011.423-.118.639a1.872 1.872 0 0 1-.3.423 1.872 1.872 0 0 1-.423.3c-.216.107-.277.118-.639.118s-.423-.011-.639-.118a1.507 1.507 0 0 1-.592-2.222c.173-.247.501-.495.77-.581.116-.037.304-.054.524-.047.283.01.385.032.58.128M7.025 13.045c-1.273.164-2.408 1.105-2.821 2.337a3.452 3.452 0 0 0 .837 3.577c1.199 1.198 3.043 1.36 4.473.393.286-.193.768-.709.949-1.015.362-.613.507-1.138.507-1.837 0-.976-.328-1.775-1.011-2.458a3.45 3.45 0 0 0-2.038-1 2.778 2.778 0 0 0-.896.003m9.204.01a.95.95 0 0 0-.599.504l-.11.215v1.746h-1.746l-.217.11a.971.971 0 0 0 0 1.74l.217.11h1.746v1.746l.11.217a.971.971 0 0 0 1.74 0l.11-.217V17.48h1.746l.217-.11a.971.971 0 0 0 0-1.74l-.217-.11H17.48v-.87c-.001-.829-.005-.88-.095-1.072a.978.978 0 0 0-1.156-.523M8.143 15.14c.301.147.57.416.719.721.107.216.118.277.118.639s-.011.423-.118.639a1.611 1.611 0 0 1-.723.723c-.216.107-.277.118-.639.118s-.423-.011-.639-.118a1.507 1.507 0 0 1-.592-2.222c.173-.247.501-.495.77-.581.116-.037.304-.054.524-.047.283.01.385.032.58.128",
          fillRule: "evenodd"
        }
      ) }));
    };
    var icons = [
      "Account",
      "Activity",
      "Add",
      "Announce",
      "ArrowBottom",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "Bold",
      "Brush",
      "Burger",
      "Calendar",
      "Camera",
      "CategoryAdd",
      "ChannelAdd",
      "Chat",
      "Check",
      "ChevronRight",
      "ChevronBottom",
      "ChevronLeft",
      "ChevronUp",
      "ChevronSmallRight",
      "ChevronSmallBottom",
      "ChevronSmallLeft",
      "ChevronSmallTop",
      "Cite",
      "Clip",
      "Clock",
      "Close",
      "Code",
      "Collapse",
      "ColorPicker",
      "Copy",
      "Crown",
      "CrossCircle",
      "Divider",
      "Download",
      "Edit",
      "Emotions",
      "Endcall",
      "Exit",
      "External",
      "Eyeoff",
      "Eyeon",
      "File",
      "FileSmall",
      "Filter",
      "Flag",
      "Folder",
      "Food",
      "Grid",
      "H1",
      "H2",
      "H3",
      "Hand",
      "Heart",
      "Home",
      "Italic",
      "Key",
      "Laptop",
      "Link",
      "Locked",
      "LongAnswer",
      "Mail",
      "Maximize",
      "MenuDots",
      "Microphone",
      "Minimize",
      "Moon",
      "MoreVert",
      "Movie",
      "Music",
      "Move",
      "Nature",
      "Notification",
      "Objects",
      "Ol",
      "Palette",
      "PeopleInvite",
      "Photo",
      "Picture",
      "Places",
      "Play",
      "Presentation",
      "PushPin",
      "Reply",
      "Screenshare",
      "Search",
      "Section",
      "Send",
      "Settings",
      "SimpleAnswer",
      "Sort",
      "Soundoff",
      "SoundOn",
      "Speaker",
      "Stroke",
      "Sun",
      "Task",
      "TaskFile",
      "Telegram",
      "Text",
      "Trash",
      "Ul",
      "Underline",
      "Unlocked",
      "Updates",
      "Upload",
      "Users",
      "VariantSelect",
      "Video",
      "Window",
      "Share",
      "SoundTwo",
      "Plus",
      "CaretUp",
      "Conference",
      "Group",
      "ThinArrowRight",
      "TelegramFilled",
      "WhiteBoard",
      "MicrophoneOff",
      "RedLine",
      "SpeakerHorizontal",
      "Minimize",
      "Minus",
      "Cursor",
      "Sticker",
      "TText",
      "Figures",
      "Arrow",
      "Image",
      "Eraser",
      "Pen",
      "Undo",
      "Redo",
      "Pin"
    ];
  }
});

// index.ts
var index_exports = {};
__export(index_exports, {
  ErrorPage: () => ErrorPage
});
module.exports = __toCommonJS(index_exports);

// ErrorPage.tsx
var import_link = __toESM(require_dist());
var import_icons = __toESM(require_dist3());
var import_jsx_runtime = require("react/jsx-runtime");
var ErrorPage = ({
  children,
  title,
  errorCode,
  text,
  tgLink,
  emailLink,
  additionalText
}) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { className: "3xl:mx-[360px] mx-8 flex h-[100vh] md:mx-[60px] lg:mx-[120px]", children: [
  children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[64px] xl:top-[100px]", children }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "flex flex-col-reverse sm:flex-row sm:gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "text-gray-90 mb-4 text-[40px] font-bold sm:text-[48px] xl:text-[64px]", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-gray-30 text-[28px] font-bold xl:text-[40px]", children: errorCode })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-gray-90 mb-16 text-[20px] font-normal sm:text-[24px] xl:text-[30px]", children: text }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "text-gray-80 text-[16px]", children: [
      "\u0415\u0441\u043B\u0438 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0435\u0442\u0441\u044F \u2014 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 ",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden sm:inline", children: "\u043D\u0430\u043C \u043E\u0431 \u044D\u0442\u043E\u043C" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "flex flex-col sm:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "flex items-center", children: [
          "\u0432\xA0",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_icons.TelegramFilled, { size: "s", className: "fill-brand-80 mr-1" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.Link, { theme: "brand", size: "l", href: tgLink, target: "_blank", children: "\u0447\u0430\u0442 Telegram" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "flex items-center", children: [
          "\xA0\u0438\u043B\u0438\xA0",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_icons.MailRounded, { size: "s", className: "fill-brand-80 mr-1" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.Link, { theme: "brand", size: "l", href: `mailto:${emailLink}`, children: "\u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443" })
        ] })
      ] })
    ] }),
    additionalText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-gray-80 mt-[64px] text-[16px]", children: additionalText })
  ] })
] });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ErrorPage
});
