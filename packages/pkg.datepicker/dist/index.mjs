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

// DatePicker.tsx
import { cn } from "@xipkg/utils";
import { Calendar } from "@xipkg/calendar";

// ../../node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

// ../../node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = (options == null ? void 0 : options.context) ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = (options == null ? void 0 : options.width) ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = (options == null ? void 0 : options.width) ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}

// ../../node_modules/date-fns/locale/_lib/buildMatchFn.js
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // [TODO] -- I challenge you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

// ../../node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}

// ../../node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;
var constructFromSymbol = Symbol.for("constructDateFrom");

// ../../node_modules/date-fns/constructFrom.js
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);
  if (date instanceof Date) return new date.constructor(value);
  return new Date(value);
}

// ../../node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize);
}

// ../../node_modules/date-fns/_lib/defaultOptions.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

// ../../node_modules/date-fns/toDate.js
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}

// ../../node_modules/date-fns/startOfWeek.js
function startOfWeek(date, options) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = (_h = (_g = (_d = (_c = options == null ? void 0 : options.weekStartsOn) != null ? _c : (_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.weekStartsOn) != null ? _d : defaultOptions2.weekStartsOn) != null ? _g : (_f = (_e = defaultOptions2.locale) == null ? void 0 : _e.options) == null ? void 0 : _f.weekStartsOn) != null ? _h : 0;
  const _date = toDate(date, options == null ? void 0 : options.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// ../../node_modules/date-fns/isSameWeek.js
function isSameWeek(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options == null ? void 0 : options.in,
    laterDate,
    earlierDate
  );
  return +startOfWeek(laterDate_, options) === +startOfWeek(earlierDate_, options);
}

// ../../node_modules/date-fns/locale/ru/_lib/formatDistance.js
function declension(scheme, count) {
  if (scheme.one !== void 0 && count === 1) {
    return scheme.one;
  }
  const rem10 = count % 10;
  const rem100 = count % 100;
  if (rem10 === 1 && rem100 !== 11) {
    return scheme.singularNominative.replace("{{count}}", String(count));
  } else if (rem10 >= 2 && rem10 <= 4 && (rem100 < 10 || rem100 > 20)) {
    return scheme.singularGenitive.replace("{{count}}", String(count));
  } else {
    return scheme.pluralGenitive.replace("{{count}}", String(count));
  }
}
function buildLocalizeTokenFn(scheme) {
  return (count, options) => {
    if (options == null ? void 0 : options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        if (scheme.future) {
          return declension(scheme.future, count);
        } else {
          return "\u0447\u0435\u0440\u0435\u0437 " + declension(scheme.regular, count);
        }
      } else {
        if (scheme.past) {
          return declension(scheme.past, count);
        } else {
          return declension(scheme.regular, count) + " \u043D\u0430\u0437\u0430\u0434";
        }
      }
    } else {
      return declension(scheme.regular, count);
    }
  };
}
var formatDistanceLocale = {
  lessThanXSeconds: buildLocalizeTokenFn({
    regular: {
      one: "\u043C\u0435\u043D\u044C\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
      singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
      singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
      pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
    },
    future: {
      one: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
      singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
      singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
      pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
    }
  }),
  xSeconds: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0430",
      singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
      pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
    },
    past: {
      singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443 \u043D\u0430\u0437\u0430\u0434",
      singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u043D\u0430\u0437\u0430\u0434",
      pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434"
    },
    future: {
      singularNominative: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
      singularGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
      pluralGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
    }
  }),
  halfAMinute: (_count, options) => {
    if (options == null ? void 0 : options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "\u0447\u0435\u0440\u0435\u0437 \u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B";
      } else {
        return "\u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434";
      }
    }
    return "\u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B";
  },
  lessThanXMinutes: buildLocalizeTokenFn({
    regular: {
      one: "\u043C\u0435\u043D\u044C\u0448\u0435 \u043C\u0438\u043D\u0443\u0442\u044B",
      singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B",
      singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442",
      pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442"
    },
    future: {
      one: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u043C\u0438\u043D\u0443\u0442\u0443",
      singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u0443",
      singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B",
      pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442"
    }
  }),
  xMinutes: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0430",
      singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u044B",
      pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442"
    },
    past: {
      singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0443 \u043D\u0430\u0437\u0430\u0434",
      singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434",
      pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434"
    },
    future: {
      singularNominative: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u0443",
      singularGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B",
      pluralGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442"
    }
  }),
  aboutXHours: buildLocalizeTokenFn({
    regular: {
      singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u0430",
      singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u043E\u0432",
      pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u043E\u0432"
    },
    future: {
      singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441",
      singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441\u0430",
      pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441\u043E\u0432"
    }
  }),
  xHours: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} \u0447\u0430\u0441",
      singularGenitive: "{{count}} \u0447\u0430\u0441\u0430",
      pluralGenitive: "{{count}} \u0447\u0430\u0441\u043E\u0432"
    }
  }),
  xDays: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} \u0434\u0435\u043D\u044C",
      singularGenitive: "{{count}} \u0434\u043D\u044F",
      pluralGenitive: "{{count}} \u0434\u043D\u0435\u0439"
    }
  }),
  aboutXWeeks: buildLocalizeTokenFn({
    regular: {
      singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u0438",
      singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u044C",
      pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u044C"
    },
    future: {
      singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u044E",
      singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u0438",
      pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u044C"
    }
  }),
  xWeeks: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} \u043D\u0435\u0434\u0435\u043B\u044F",
      singularGenitive: "{{count}} \u043D\u0435\u0434\u0435\u043B\u0438",
      pluralGenitive: "{{count}} \u043D\u0435\u0434\u0435\u043B\u044C"
    }
  }),
  aboutXMonths: buildLocalizeTokenFn({
    regular: {
      singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0430",
      singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432",
      pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432"
    },
    future: {
      singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446",
      singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u0430",
      pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432"
    }
  }),
  xMonths: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} \u043C\u0435\u0441\u044F\u0446",
      singularGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u0430",
      pluralGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432"
    }
  }),
  aboutXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0433\u043E\u0434\u0430",
      singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043B\u0435\u0442",
      pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043B\u0435\u0442"
    },
    future: {
      singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434",
      singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430",
      pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442"
    }
  }),
  xYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} \u0433\u043E\u0434",
      singularGenitive: "{{count}} \u0433\u043E\u0434\u0430",
      pluralGenitive: "{{count}} \u043B\u0435\u0442"
    }
  }),
  overXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u0433\u043E\u0434\u0430",
      singularGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u043B\u0435\u0442",
      pluralGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u043B\u0435\u0442"
    },
    future: {
      singularNominative: "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434",
      singularGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430",
      pluralGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442"
    }
  }),
  almostXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u0433\u043E\u0434",
      singularGenitive: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u0433\u043E\u0434\u0430",
      pluralGenitive: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u043B\u0435\u0442"
    },
    future: {
      singularNominative: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434",
      singularGenitive: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430",
      pluralGenitive: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442"
    }
  })
};
var formatDistance = (token, count, options) => {
  return formatDistanceLocale[token](count, options);
};

// ../../node_modules/date-fns/locale/ru/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, d MMMM y '\u0433.'",
  long: "d MMMM y '\u0433.'",
  medium: "d MMM y '\u0433.'",
  short: "dd.MM.y"
};
var timeFormats = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
};
var dateTimeFormats = {
  any: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "any"
  })
};

// ../../node_modules/date-fns/locale/ru/_lib/formatRelative.js
var accusativeWeekdays = [
  "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435",
  "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A",
  "\u0432\u0442\u043E\u0440\u043D\u0438\u043A",
  "\u0441\u0440\u0435\u0434\u0443",
  "\u0447\u0435\u0442\u0432\u0435\u0440\u0433",
  "\u043F\u044F\u0442\u043D\u0438\u0446\u0443",
  "\u0441\u0443\u0431\u0431\u043E\u0442\u0443"
];
function lastWeek(day) {
  const weekday = accusativeWeekdays[day];
  switch (day) {
    case 0:
      return "'\u0432 \u043F\u0440\u043E\u0448\u043B\u043E\u0435 " + weekday + " \u0432' p";
    case 1:
    case 2:
    case 4:
      return "'\u0432 \u043F\u0440\u043E\u0448\u043B\u044B\u0439 " + weekday + " \u0432' p";
    case 3:
    case 5:
    case 6:
      return "'\u0432 \u043F\u0440\u043E\u0448\u043B\u0443\u044E " + weekday + " \u0432' p";
  }
}
function thisWeek(day) {
  const weekday = accusativeWeekdays[day];
  if (day === 2) {
    return "'\u0432\u043E " + weekday + " \u0432' p";
  } else {
    return "'\u0432 " + weekday + " \u0432' p";
  }
}
function nextWeek(day) {
  const weekday = accusativeWeekdays[day];
  switch (day) {
    case 0:
      return "'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 " + weekday + " \u0432' p";
    case 1:
    case 2:
    case 4:
      return "'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 " + weekday + " \u0432' p";
    case 3:
    case 5:
    case 6:
      return "'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E " + weekday + " \u0432' p";
  }
}
var formatRelativeLocale = {
  lastWeek: (date, baseDate, options) => {
    const day = date.getDay();
    if (isSameWeek(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return lastWeek(day);
    }
  },
  yesterday: "'\u0432\u0447\u0435\u0440\u0430 \u0432' p",
  today: "'\u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0432' p",
  tomorrow: "'\u0437\u0430\u0432\u0442\u0440\u0430 \u0432' p",
  nextWeek: (date, baseDate, options) => {
    const day = date.getDay();
    if (isSameWeek(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return nextWeek(day);
    }
  },
  other: "P"
};
var formatRelative = (token, date, baseDate, options) => {
  const format = formatRelativeLocale[token];
  if (typeof format === "function") {
    return format(date, baseDate, options);
  }
  return format;
};

// ../../node_modules/date-fns/locale/ru/_lib/localize.js
var eraValues = {
  narrow: ["\u0434\u043E \u043D.\u044D.", "\u043D.\u044D."],
  abbreviated: ["\u0434\u043E \u043D. \u044D.", "\u043D. \u044D."],
  wide: ["\u0434\u043E \u043D\u0430\u0448\u0435\u0439 \u044D\u0440\u044B", "\u043D\u0430\u0448\u0435\u0439 \u044D\u0440\u044B"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-\u0439 \u043A\u0432.", "2-\u0439 \u043A\u0432.", "3-\u0439 \u043A\u0432.", "4-\u0439 \u043A\u0432."],
  wide: ["1-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "2-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "3-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "4-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B"]
};
var monthValues = {
  narrow: ["\u042F", "\u0424", "\u041C", "\u0410", "\u041C", "\u0418", "\u0418", "\u0410", "\u0421", "\u041E", "\u041D", "\u0414"],
  abbreviated: [
    "\u044F\u043D\u0432.",
    "\u0444\u0435\u0432.",
    "\u043C\u0430\u0440\u0442",
    "\u0430\u043F\u0440.",
    "\u043C\u0430\u0439",
    "\u0438\u044E\u043D\u044C",
    "\u0438\u044E\u043B\u044C",
    "\u0430\u0432\u0433.",
    "\u0441\u0435\u043D\u0442.",
    "\u043E\u043A\u0442.",
    "\u043D\u043E\u044F\u0431.",
    "\u0434\u0435\u043A."
  ],
  wide: [
    "\u044F\u043D\u0432\u0430\u0440\u044C",
    "\u0444\u0435\u0432\u0440\u0430\u043B\u044C",
    "\u043C\u0430\u0440\u0442",
    "\u0430\u043F\u0440\u0435\u043B\u044C",
    "\u043C\u0430\u0439",
    "\u0438\u044E\u043D\u044C",
    "\u0438\u044E\u043B\u044C",
    "\u0430\u0432\u0433\u0443\u0441\u0442",
    "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C",
    "\u043E\u043A\u0442\u044F\u0431\u0440\u044C",
    "\u043D\u043E\u044F\u0431\u0440\u044C",
    "\u0434\u0435\u043A\u0430\u0431\u0440\u044C"
  ]
};
var formattingMonthValues = {
  narrow: ["\u042F", "\u0424", "\u041C", "\u0410", "\u041C", "\u0418", "\u0418", "\u0410", "\u0421", "\u041E", "\u041D", "\u0414"],
  abbreviated: [
    "\u044F\u043D\u0432.",
    "\u0444\u0435\u0432.",
    "\u043C\u0430\u0440.",
    "\u0430\u043F\u0440.",
    "\u043C\u0430\u044F",
    "\u0438\u044E\u043D.",
    "\u0438\u044E\u043B.",
    "\u0430\u0432\u0433.",
    "\u0441\u0435\u043D\u0442.",
    "\u043E\u043A\u0442.",
    "\u043D\u043E\u044F\u0431.",
    "\u0434\u0435\u043A."
  ],
  wide: [
    "\u044F\u043D\u0432\u0430\u0440\u044F",
    "\u0444\u0435\u0432\u0440\u0430\u043B\u044F",
    "\u043C\u0430\u0440\u0442\u0430",
    "\u0430\u043F\u0440\u0435\u043B\u044F",
    "\u043C\u0430\u044F",
    "\u0438\u044E\u043D\u044F",
    "\u0438\u044E\u043B\u044F",
    "\u0430\u0432\u0433\u0443\u0441\u0442\u0430",
    "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F",
    "\u043E\u043A\u0442\u044F\u0431\u0440\u044F",
    "\u043D\u043E\u044F\u0431\u0440\u044F",
    "\u0434\u0435\u043A\u0430\u0431\u0440\u044F"
  ]
};
var dayValues = {
  narrow: ["\u0412", "\u041F", "\u0412", "\u0421", "\u0427", "\u041F", "\u0421"],
  short: ["\u0432\u0441", "\u043F\u043D", "\u0432\u0442", "\u0441\u0440", "\u0447\u0442", "\u043F\u0442", "\u0441\u0431"],
  abbreviated: ["\u0432\u0441\u043A", "\u043F\u043D\u0434", "\u0432\u0442\u0440", "\u0441\u0440\u0434", "\u0447\u0442\u0432", "\u043F\u0442\u043D", "\u0441\u0443\u0431"],
  wide: [
    "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435",
    "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A",
    "\u0432\u0442\u043E\u0440\u043D\u0438\u043A",
    "\u0441\u0440\u0435\u0434\u0430",
    "\u0447\u0435\u0442\u0432\u0435\u0440\u0433",
    "\u043F\u044F\u0442\u043D\u0438\u0446\u0430",
    "\u0441\u0443\u0431\u0431\u043E\u0442\u0430"
  ]
};
var dayPeriodValues = {
  narrow: {
    am: "\u0414\u041F",
    pm: "\u041F\u041F",
    midnight: "\u043F\u043E\u043B\u043D.",
    noon: "\u043F\u043E\u043B\u0434.",
    morning: "\u0443\u0442\u0440\u043E",
    afternoon: "\u0434\u0435\u043D\u044C",
    evening: "\u0432\u0435\u0447.",
    night: "\u043D\u043E\u0447\u044C"
  },
  abbreviated: {
    am: "\u0414\u041F",
    pm: "\u041F\u041F",
    midnight: "\u043F\u043E\u043B\u043D.",
    noon: "\u043F\u043E\u043B\u0434.",
    morning: "\u0443\u0442\u0440\u043E",
    afternoon: "\u0434\u0435\u043D\u044C",
    evening: "\u0432\u0435\u0447.",
    night: "\u043D\u043E\u0447\u044C"
  },
  wide: {
    am: "\u0414\u041F",
    pm: "\u041F\u041F",
    midnight: "\u043F\u043E\u043B\u043D\u043E\u0447\u044C",
    noon: "\u043F\u043E\u043B\u0434\u0435\u043D\u044C",
    morning: "\u0443\u0442\u0440\u043E",
    afternoon: "\u0434\u0435\u043D\u044C",
    evening: "\u0432\u0435\u0447\u0435\u0440",
    night: "\u043D\u043E\u0447\u044C"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "\u0414\u041F",
    pm: "\u041F\u041F",
    midnight: "\u043F\u043E\u043B\u043D.",
    noon: "\u043F\u043E\u043B\u0434.",
    morning: "\u0443\u0442\u0440\u0430",
    afternoon: "\u0434\u043D\u044F",
    evening: "\u0432\u0435\u0447.",
    night: "\u043D\u043E\u0447\u0438"
  },
  abbreviated: {
    am: "\u0414\u041F",
    pm: "\u041F\u041F",
    midnight: "\u043F\u043E\u043B\u043D.",
    noon: "\u043F\u043E\u043B\u0434.",
    morning: "\u0443\u0442\u0440\u0430",
    afternoon: "\u0434\u043D\u044F",
    evening: "\u0432\u0435\u0447.",
    night: "\u043D\u043E\u0447\u0438"
  },
  wide: {
    am: "\u0414\u041F",
    pm: "\u041F\u041F",
    midnight: "\u043F\u043E\u043B\u043D\u043E\u0447\u044C",
    noon: "\u043F\u043E\u043B\u0434\u0435\u043D\u044C",
    morning: "\u0443\u0442\u0440\u0430",
    afternoon: "\u0434\u043D\u044F",
    evening: "\u0432\u0435\u0447\u0435\u0440\u0430",
    night: "\u043D\u043E\u0447\u0438"
  }
};
var ordinalNumber = (dirtyNumber, options) => {
  const number = Number(dirtyNumber);
  const unit = options == null ? void 0 : options.unit;
  let suffix;
  if (unit === "date") {
    suffix = "-\u0435";
  } else if (unit === "week" || unit === "minute" || unit === "second") {
    suffix = "-\u044F";
  } else {
    suffix = "-\u0439";
  }
  return number + suffix;
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide",
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "any",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};

// ../../node_modules/date-fns/locale/ru/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^((до )?н\.?\s?э\.?)/i,
  abbreviated: /^((до )?н\.?\s?э\.?)/i,
  wide: /^(до нашей эры|нашей эры|наша эра)/i
};
var parseEraPatterns = {
  any: [/^д/i, /^н/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
  wide: /^[1234](-?[ыои]?й?)? квартал/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[яфмаисонд]/i,
  abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
  wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
};
var parseMonthPatterns = {
  narrow: [
    /^я/i,
    /^ф/i,
    /^м/i,
    /^а/i,
    /^м/i,
    /^и/i,
    /^и/i,
    /^а/i,
    /^с/i,
    /^о/i,
    /^н/i,
    /^я/i
  ],
  any: [
    /^я/i,
    /^ф/i,
    /^мар/i,
    /^ап/i,
    /^ма[йя]/i,
    /^июн/i,
    /^июл/i,
    /^ав/i,
    /^с/i,
    /^о/i,
    /^н/i,
    /^д/i
  ]
};
var matchDayPatterns = {
  narrow: /^[впсч]/i,
  short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
  abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
  wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
};
var parseDayPatterns = {
  narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]
};
var matchDayPeriodPatterns = {
  narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^дп/i,
    pm: /^пп/i,
    midnight: /^полн/i,
    noon: /^полд/i,
    morning: /^у/i,
    afternoon: /^д[ен]/i,
    evening: /^в/i,
    night: /^н/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};

// ../../node_modules/date-fns/locale/ru.js
var ru = {
  code: "ru",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};

// DatePicker.tsx
import { Popover, PopoverContent, PopoverTrigger } from "@xipkg/popover";
import { jsx, jsxs } from "react/jsx-runtime";
var DatePicker = (_a) => {
  var _b = _a, {
    children,
    classNamePopoverTrigger,
    classNamePopoverContent,
    popoverProps,
    popoverTriggerProps,
    popoverContentProps
  } = _b, calendarProps = __objRest(_b, [
    "children",
    "classNamePopoverTrigger",
    "classNamePopoverContent",
    "popoverProps",
    "popoverTriggerProps",
    "popoverContentProps"
  ]);
  return /* @__PURE__ */ jsxs(Popover, __spreadProps(__spreadValues({}, popoverProps), { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, __spreadProps(__spreadValues({ className: classNamePopoverTrigger, asChild: true }, popoverTriggerProps), { children })),
    /* @__PURE__ */ jsx(
      PopoverContent,
      __spreadProps(__spreadValues({
        className: cn("w-auto p-0", classNamePopoverContent)
      }, popoverContentProps), {
        children: /* @__PURE__ */ jsx(Calendar, __spreadProps(__spreadValues({}, calendarProps), { locale: ru }))
      })
    )
  ] }));
};
export {
  DatePicker
};
