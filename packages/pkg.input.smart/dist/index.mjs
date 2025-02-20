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

// SmartInput.tsx
import React5, {
  useMemo as useMemo2,
  useCallback,
  useEffect as useEffect2,
  useRef as useRef2,
  useImperativeHandle
} from "react";
import { Slate, Editable, withReact, ReactEditor as ReactEditor2 } from "slate-react";
import { createEditor, Text, Transforms as Transforms2, Editor as Editor2 } from "slate";
import { withHistory } from "slate-history";

// components/Leaf.tsx
import React from "react";
var Leaf = ({ attributes, children, leaf }) => {
  let modifiedChildren = children;
  if (leaf.bold) {
    modifiedChildren = /* @__PURE__ */ React.createElement("strong", null, modifiedChildren);
  }
  if (leaf.italic) {
    modifiedChildren = /* @__PURE__ */ React.createElement("em", null, modifiedChildren);
  }
  if (leaf.underline) {
    modifiedChildren = /* @__PURE__ */ React.createElement("u", null, modifiedChildren);
  }
  if (leaf.strikethrough) {
    modifiedChildren = /* @__PURE__ */ React.createElement("span", { style: { textDecoration: "line-through" } }, modifiedChildren);
  }
  if (leaf.code) {
    modifiedChildren = /* @__PURE__ */ React.createElement(
      "code",
      {
        className: "bg-gray-10",
        style: {
          backgroundColor: "",
          fontFamily: "monospace",
          padding: "0.2em 0.4em",
          borderRadius: "4px"
        }
      },
      modifiedChildren
    );
  }
  return /* @__PURE__ */ React.createElement("span", __spreadValues({}, attributes), modifiedChildren);
};

// components/InlineToolbar.tsx
import React3, { useEffect, useState as useState2 } from "react";
import { useSlate } from "slate-react";
import { Bold, Italic, Underline, Stroke } from "@xipkg/icons";
import { Button } from "@xipkg/button";
import {
  useFloating as useFloating2,
  useDismiss as useDismiss2,
  useInteractions as useInteractions2,
  autoUpdate as autoUpdate2,
  inline,
  shift as shift2,
  FloatingFocusManager,
  flip as flip2,
  FloatingDelayGroup
} from "@floating-ui/react";

// components/Tooltip.tsx
import * as React2 from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  FloatingArrow,
  useDelayGroup,
  useDelayGroupContext,
  useMergeRefs,
  useTransitionStyles,
  arrow
} from "@floating-ui/react";
import { useRef } from "react";
function useTooltip({
  initialOpen = false,
  placement = "top",
  open: controlledOpen,
  onOpenChange: setControlledOpen
}) {
  const arrowRef = useRef(null);
  const [uncontrolledOpen, setUncontrolledOpen] = React2.useState(initialOpen);
  const open = controlledOpen != null ? controlledOpen : uncontrolledOpen;
  const setOpen = setControlledOpen != null ? setControlledOpen : setUncontrolledOpen;
  const { delay } = useDelayGroupContext();
  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(10),
      flip(),
      shift(),
      arrow({
        element: arrowRef
      })
    ]
  });
  const { context } = data;
  const hover = useHover(context, {
    move: false,
    enabled: controlledOpen == null,
    delay
  });
  const focus = useFocus(context, {
    enabled: controlledOpen == null
  });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });
  const interactions = useInteractions([hover, focus, dismiss, role]);
  return React2.useMemo(
    () => __spreadValues(__spreadValues({
      open,
      setOpen,
      arrowRef
    }, interactions), data),
    [open, setOpen, arrowRef, interactions, data]
  );
}
var TooltipContext = React2.createContext(null);
var useTooltipState = () => {
  const context = React2.useContext(TooltipContext);
  if (context == null) {
    throw new Error("Tooltip components must be wrapped in <Tooltip />");
  }
  return context;
};
function Tooltip(_a) {
  var _b = _a, { children } = _b, options = __objRest(_b, ["children"]);
  const tooltip = useTooltip(options);
  return /* @__PURE__ */ React2.createElement(TooltipContext.Provider, { value: tooltip }, children);
}
var TooltipTrigger = React2.forwardRef((_a, propRef) => {
  var _b = _a, { children, asChild = false } = _b, props = __objRest(_b, ["children", "asChild"]);
  const state = useTooltipState();
  const childrenRef = children.ref;
  const ref = useMergeRefs([state.refs.setReference, propRef, childrenRef]);
  if (asChild && React2.isValidElement(children)) {
    return React2.cloneElement(
      children,
      state.getReferenceProps(__spreadProps(__spreadValues(__spreadValues({
        ref
      }, props), children.props), {
        "data-state": state.open ? "open" : "closed"
      }))
    );
  }
  return /* @__PURE__ */ React2.createElement(
    "span",
    __spreadProps(__spreadValues({
      ref,
      "data-state": state.open ? "open" : "closed"
    }, state.getReferenceProps(props)), {
      style: { background: "transparent" }
    }),
    children
  );
});
TooltipTrigger.displayName = "TooltipTrigger";
var TooltipContent = React2.forwardRef(
  (props, propRef) => {
    const state = useTooltipState();
    const { isInstantPhase, currentId } = useDelayGroupContext();
    const ref = useMergeRefs([state.refs.setFloating, propRef]);
    useDelayGroup(state.context, { id: state.context.floatingId });
    const instantDuration = 0;
    const duration = 250;
    const { isMounted, styles } = useTransitionStyles(state.context, {
      duration: isInstantPhase ? {
        open: instantDuration,
        close: currentId === state.context.floatingId ? duration : instantDuration
      } : duration,
      initial: {
        opacity: 0
      }
    });
    if (!isMounted) return null;
    return /* @__PURE__ */ React2.createElement(FloatingPortal, null, /* @__PURE__ */ React2.createElement(
      "div",
      __spreadValues({
        ref,
        className: "bg-gray-0 rounded-md px-3 py-1.5 text-sm font-semibold text-gray-100 shadow-[rgba(100,100,111,0.3)_0px_7px_29px_0px]",
        style: __spreadValues(__spreadValues(__spreadValues({}, state.floatingStyles), props.style), styles)
      }, state.getFloatingProps(props)),
      props.children,
      /* @__PURE__ */ React2.createElement(
        FloatingArrow,
        {
          tipRadius: 5,
          ref: state.arrowRef,
          context: state.context,
          width: 12,
          className: "fill-gray-0"
        }
      )
    ));
  }
);
TooltipContent.displayName = "TooltipContent";

// config.ts
import Prism from "prismjs";
var prismMarkdown = {
  // Жирный текст
  bold: {
    pattern: /\*\*([^*]+)\*\*/g,
    alias: "strong",
    inside: {
      text: {
        pattern: /[^*]+/,
        // Не оборачиваем сами звёздочки
        inside: Prism.languages.markdown
      }
    }
  },
  // Курсив
  italic: {
    pattern: /\*([^*]+)\*/g,
    alias: "em",
    inside: {
      text: {
        pattern: /[^*]+/,
        // Не оборачиваем сами звёздочки
        inside: Prism.languages.markdown
      }
    }
  },
  // Подчёркнутый текст
  underline: {
    pattern: /__([^_]+)__/g,
    alias: "u",
    inside: {
      text: {
        pattern: /[^_]+/,
        // Не оборачиваем сами нижние подчеркивания
        inside: Prism.languages.markdown
      }
    }
  },
  // Перечёркнутый текст
  strikethrough: {
    pattern: /~~([^~]+)~~/g,
    alias: "s",
    inside: {
      text: {
        pattern: /[^~]+/,
        // Не оборачиваем сами тильды
        inside: Prism.languages.markdown
      }
    }
  }
};

// utils/slateToMarkdown.ts
var slateToMarkdown = (value, withLinebreak = true) => {
  const linebreak = withLinebreak ? "\n\n" : "";
  return value.map((node) => {
    switch (node.type) {
      case "paragraph":
        return node.children.map((child) => applyInlineStyles(child)).join("") + linebreak;
      case "heading":
        return `${"#".repeat(node.level)} ${node.children.map((child) => applyInlineStyles(child)).join("")}` + linebreak;
      default:
        return "";
    }
  }).join("");
};
var applyInlineStyles = (child) => {
  let text = child.text;
  if (child.bold) {
    text = `**${text}**`;
  }
  if (child.italic) {
    text = `*${text}*`;
  }
  if (child.strikethrough) {
    text = `~~${text}~~`;
  }
  if (child.underline) {
    text = `__${text}__`;
  }
  return text;
};

// utils/markdownToSlate.ts
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";

// ../../node_modules/unist-util-is/lib/index.js
var convert = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(test) {
    if (test === null || test === void 0) {
      return ok;
    }
    if (typeof test === "function") {
      return castFactory(test);
    }
    if (typeof test === "object") {
      return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
    }
    if (typeof test === "string") {
      return typeFactory(test);
    }
    throw new Error("Expected function, string, or object as test");
  }
);
function anyFactory(tests) {
  const checks = [];
  let index = -1;
  while (++index < tests.length) {
    checks[index] = convert(tests[index]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index2 = -1;
    while (++index2 < checks.length) {
      if (checks[index2].apply(this, parameters)) return true;
    }
    return false;
  }
}
function propsFactory(check) {
  const checkAsRecord = (
    /** @type {Record<string, unknown>} */
    check
  );
  return castFactory(all);
  function all(node) {
    const nodeAsRecord = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      node
    );
    let key;
    for (key in check) {
      if (nodeAsRecord[key] !== checkAsRecord[key]) return false;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node) {
    return node && node.type === check;
  }
}
function castFactory(testFunction) {
  return check;
  function check(value, index, parent) {
    return Boolean(
      looksLikeANode(value) && testFunction.call(
        this,
        value,
        typeof index === "number" ? index : void 0,
        parent || void 0
      )
    );
  }
}
function ok() {
  return true;
}
function looksLikeANode(value) {
  return value !== null && typeof value === "object" && "type" in value;
}

// ../../node_modules/unist-util-visit-parents/lib/color.node.js
function color(d) {
  return "\x1B[33m" + d + "\x1B[39m";
}

// ../../node_modules/unist-util-visit-parents/lib/index.js
var empty = [];
var CONTINUE = true;
var EXIT = false;
var SKIP = "skip";
function visitParents(tree, test, visitor, reverse) {
  let check;
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
  } else {
    check = test;
  }
  const is2 = convert(check);
  const step = reverse ? -1 : 1;
  factory(tree, void 0, [])();
  function factory(node, index, parents) {
    const value = (
      /** @type {Record<string, unknown>} */
      node && typeof node === "object" ? node : {}
    );
    if (typeof value.type === "string") {
      const name = (
        // `hast`
        typeof value.tagName === "string" ? value.tagName : (
          // `xast`
          typeof value.name === "string" ? value.name : void 0
        )
      );
      Object.defineProperty(visit2, "name", {
        value: "node (" + color(node.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit2;
    function visit2() {
      let result = empty;
      let subresult;
      let offset2;
      let grandparents;
      if (!test || is2(node, index, parents[parents.length - 1] || void 0)) {
        result = toResult(visitor(node, parents));
        if (result[0] === EXIT) {
          return result;
        }
      }
      if ("children" in node && node.children) {
        const nodeAsParent = (
          /** @type {UnistParent} */
          node
        );
        if (nodeAsParent.children && result[0] !== SKIP) {
          offset2 = (reverse ? nodeAsParent.children.length : -1) + step;
          grandparents = parents.concat(nodeAsParent);
          while (offset2 > -1 && offset2 < nodeAsParent.children.length) {
            const child = nodeAsParent.children[offset2];
            subresult = factory(child, offset2, grandparents)();
            if (subresult[0] === EXIT) {
              return subresult;
            }
            offset2 = typeof subresult[1] === "number" ? subresult[1] : offset2 + step;
          }
        }
      }
      return result;
    }
  }
}
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return value === null || value === void 0 ? empty : [value];
}

// ../../node_modules/unist-util-visit/lib/index.js
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
  let reverse;
  let test;
  let visitor;
  if (typeof testOrVisitor === "function" && typeof visitorOrReverse !== "function") {
    test = void 0;
    visitor = testOrVisitor;
    reverse = visitorOrReverse;
  } else {
    test = testOrVisitor;
    visitor = visitorOrReverse;
    reverse = maybeReverse;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    const parent = parents[parents.length - 1];
    const index = parent ? parent.children.indexOf(node) : void 0;
    return visitor(node, index, parent);
  }
}

// utils/markdownToSlate.ts
var mergeTextWithFlags = (slateObjects) => {
  for (let i = 0; i < slateObjects.length; i++) {
    const obj = slateObjects[i];
    if (obj.type === "paragraph") {
      let beforeText = "";
      let afterText = "";
      let shouldMerge = false;
      for (let j = 0; j < obj.children.length; j++) {
        const child = obj.children[j];
        if (child.beforeUnderline) {
          beforeText += child.text;
          shouldMerge = true;
        } else if (child.afterUnderline) {
          afterText = child.text;
          shouldMerge = false;
        } else if (shouldMerge) {
          beforeText += child.text;
        }
      }
      if (beforeText || afterText) {
        obj.children = obj.children.filter(
          (child) => !child.beforeUnderline && !child.afterUnderline && child.text !== "\u043F\u043E\u0434\u0447\u0451\u0440\u043A\u043D\u0443\u0442\u044B\u0439"
        );
        obj.children.push({ text: `${beforeText}${afterText}` });
      }
    }
  }
  return slateObjects;
};
var formatMarkdown = (markdown) => {
  return markdown.replace(/__(.*?)__/g, "<u>$1</u>");
};
var markdownToSlate = (markdown) => {
  const ast = unified().use(remarkParse).use(remarkGfm).parse(formatMarkdown(markdown));
  const slateElements = [];
  visit(ast, (node) => {
    if (node.type === "paragraph") {
      slateElements.push({
        type: "paragraph",
        children: node.children.map((child) => convertMarkdownNodeToSlateText(child)).flat()
      });
    } else if (node.type === "heading") {
      slateElements.push({
        type: "heading",
        level: node.depth,
        children: node.children.map((child) => convertMarkdownNodeToSlateText(child)).flat()
      });
    } else if (node.type === "code") {
      slateElements.push({
        type: "codeBlock",
        children: [{ text: node.value || "" }]
      });
    }
  });
  const result = mergeTextWithFlags(slateElements);
  return result;
};
var convertMarkdownNodeToSlateText = (node) => {
  if (node.type === "text") {
    return [{ text: node.value || "" }];
  }
  const children = [];
  if (node.children) {
    node.children.forEach((child) => {
      const childText = convertMarkdownNodeToSlateText(child);
      children.push(...childText);
    });
  }
  let text = children.map((child) => child.text).join("");
  if (node.type === "html" && node.value === "<u>") {
    text = `__`;
    return [{ text, beforeUnderline: true }];
  }
  if (node.type === "html" && node.value === "</u>") {
    text = `__`;
    return [{ text, afterUnderline: true }];
  }
  switch (node.type) {
    case "strong":
      text = `**${text}**`;
      break;
    case "emphasis":
      text = `*${text}*`;
      break;
    case "delete":
      text = `~~${text}~~`;
      break;
    case "underline":
      text = `__${text}__`;
      break;
    default:
      break;
  }
  return [{ text }];
};

// utils/toggleMarkdownInlineStyle.ts
import { Editor, Transforms, Range } from "slate";
import { ReactEditor } from "slate-react";
var toggleMarkdownInlineStyle = (editor, marker, debug = process.env.ENABLE_SLATE_TESTING === "true") => {
  const { selection } = editor;
  if (!selection || Range.isCollapsed(selection) || !marker) {
    return;
  }
  const currentSelection = __spreadValues({}, selection);
  if (debug) {
    console.log("currentSelection", currentSelection);
  }
  const [start, end] = selection.anchor.offset < selection.focus.offset ? [selection.anchor, selection.focus] : [selection.focus, selection.anchor];
  const rangeBefore = {
    anchor: __spreadProps(__spreadValues({}, start), { offset: start.offset - marker.length }),
    focus: start
  };
  const rangeAfter = {
    anchor: end,
    focus: __spreadProps(__spreadValues({}, end), { offset: end.offset + marker.length })
  };
  const textBefore = Editor.string(editor, rangeBefore);
  const textAfter = Editor.string(editor, rangeAfter);
  if (debug) {
    console.log("textAfter", textAfter);
    console.log("textBefore", textBefore);
  }
  if (textBefore === marker && textAfter === marker) {
    if (debug) {
      console.log("rangeAfter", rangeAfter);
      console.log("rangeBefore", rangeBefore);
    }
    Transforms.delete(editor, { at: rangeAfter });
    Transforms.delete(editor, { at: rangeBefore });
    const newSelection = {
      anchor: __spreadProps(__spreadValues({}, currentSelection.anchor), {
        offset: currentSelection.anchor.offset - marker.length
      }),
      focus: __spreadProps(__spreadValues({}, currentSelection.focus), { offset: currentSelection.focus.offset - marker.length })
    };
    if (debug) {
      console.log("1", newSelection);
    }
    Transforms.select(editor, newSelection);
  } else {
    const selectedText = Editor.string(editor, selection);
    const startMarkerIdx = selectedText.indexOf(marker);
    const endMarkerIdx = selectedText.lastIndexOf(marker);
    if (startMarkerIdx !== -1 && endMarkerIdx !== -1 && startMarkerIdx !== endMarkerIdx) {
      const textWithoutMarkers = selectedText.slice(startMarkerIdx + marker.length, endMarkerIdx);
      Transforms.delete(editor, { at: selection });
      if (debug) {
        console.log("editor", editor);
        console.log("textWithoutMarkers", textWithoutMarkers);
        console.log("start", start);
      }
      Transforms.insertText(editor, textWithoutMarkers, { at: start });
      const needRevers = currentSelection.anchor.offset > currentSelection.focus.offset;
      const anchorOffset = needRevers ? currentSelection.focus.offset : currentSelection.anchor.offset;
      const focusOffset = needRevers ? currentSelection.anchor.offset : currentSelection.focus.offset;
      const correctedSelection = {
        anchor: __spreadProps(__spreadValues({}, currentSelection.anchor), { offset: anchorOffset }),
        focus: __spreadProps(__spreadValues({}, currentSelection.focus), { offset: focusOffset - marker.length * 2 })
      };
      if (debug) {
        console.log("2", correctedSelection);
      }
      Transforms.select(editor, correctedSelection);
    } else {
      Transforms.insertText(editor, marker, { at: end });
      Transforms.insertText(editor, marker, { at: start });
      const correctedSelection = {
        anchor: __spreadProps(__spreadValues({}, currentSelection.anchor), {
          offset: currentSelection.anchor.offset + marker.length
        }),
        focus: __spreadProps(__spreadValues({}, currentSelection.focus), { offset: currentSelection.focus.offset + marker.length })
      };
      if (debug) {
        console.log("3", correctedSelection);
      }
      Transforms.select(editor, correctedSelection);
    }
  }
  ReactEditor.focus(editor);
};

// utils/getLength.ts
var getLength = (token) => {
  if (typeof token === "string") {
    return token.length;
  } else if (typeof token.content === "string") {
    return token.content.length;
  } else if (Array.isArray(token.content)) {
    return token.content.reduce((length, t) => length + getLength(t), 0);
  }
  return 0;
};

// components/InlineToolbar.tsx
var keyToMd = {
  b: "**" /* Bold */,
  u: "__" /* Underline */,
  i: "*" /* Italic */,
  s: "~~" /* Strikethrough */
};
var InlineToolbar = ({ editableRef }) => {
  const editor = useSlate();
  const [isOpen, setIsOpen] = useState2(false);
  const [initialPosition, setInitialPosition] = useState2(null);
  const { refs, floatingStyles, context } = useFloating2({
    placement: "top",
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [flip2(), shift2(), inline()],
    whileElementsMounted: autoUpdate2
  });
  const dismiss = useDismiss2(context);
  const { getFloatingProps } = useInteractions2([dismiss]);
  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      if (selection && !selection.isCollapsed && (editableRef == null ? void 0 : editableRef.current) && editableRef.current.contains(selection.anchorNode)) {
        const range = selection.getRangeAt(0);
        const boundingRect = range.getBoundingClientRect();
        if (!isOpen) {
          setInitialPosition(boundingRect);
        }
        refs.setReference({
          getBoundingClientRect: () => initialPosition || boundingRect,
          getClientRects: () => initialPosition ? [initialPosition] : range.getClientRects()
        });
        setIsOpen(true);
      } else {
        setIsOpen(false);
        setInitialPosition(null);
      }
    };
    const handleClickOutside = (event) => {
      if (refs.floating.current && !refs.floating.current.contains(event.target) && (editableRef == null ? void 0 : editableRef.current) && !editableRef.current.contains(event.target)) {
        setIsOpen(false);
        setInitialPosition(null);
      }
    };
    document.addEventListener("selectionchange", handleSelectionChange);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, editableRef, isOpen, initialPosition]);
  const handleKeyDown = (event) => {
    if (!(event.metaKey || event.ctrlKey)) return;
    const selection = window.getSelection();
    if (typeof (selection == null ? void 0 : selection.rangeCount) === "number") {
      toggleMarkdownInlineStyle(editor, keyToMd[event.key]);
    }
  };
  useEffect(() => {
    const handleDocumentKeyDown = (event) => {
      if ((event.key === "s" || event.key === "b") && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
      }
      handleKeyDown(event);
    };
    document.addEventListener("keydown", handleDocumentKeyDown);
    return () => {
      document.removeEventListener("keydown", handleDocumentKeyDown);
    };
  }, []);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, isOpen && /* @__PURE__ */ React3.createElement(FloatingFocusManager, { initialFocus: -1, context }, /* @__PURE__ */ React3.createElement(
    "div",
    __spreadProps(__spreadValues({
      ref: refs.setFloating,
      style: __spreadProps(__spreadValues({}, floatingStyles), {
        zIndex: 1e3
      })
    }, getFloatingProps()), {
      className: "bg-gray-0 border-gray-10 box-border flex h-[40px] flex-row items-center justify-center gap-1 rounded-lg border px-2 drop-shadow-md"
    }),
    /* @__PURE__ */ React3.createElement(FloatingDelayGroup, { delay: { open: 1500, close: 0 } }, /* @__PURE__ */ React3.createElement(Tooltip, { placement: "bottom" }, /* @__PURE__ */ React3.createElement(TooltipTrigger, null, /* @__PURE__ */ React3.createElement(
      FormatButton,
      {
        format: "**" /* Bold */,
        icon: /* @__PURE__ */ React3.createElement(Bold, { className: "group-hover:fill-brand-100 h-4 w-4 fill-gray-100" })
      }
    )), /* @__PURE__ */ React3.createElement(TooltipContent, null, /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("p", null, /* @__PURE__ */ React3.createElement("b", null, "Bold")), /* @__PURE__ */ React3.createElement("p", null, "Ctrl+B")))), /* @__PURE__ */ React3.createElement(Tooltip, { placement: "bottom" }, /* @__PURE__ */ React3.createElement(TooltipTrigger, null, /* @__PURE__ */ React3.createElement(
      FormatButton,
      {
        format: "*" /* Italic */,
        icon: /* @__PURE__ */ React3.createElement(Italic, { className: "group-hover:fill-brand-100 h-4 w-4 fill-gray-100" })
      }
    )), /* @__PURE__ */ React3.createElement(TooltipContent, null, /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("p", null, /* @__PURE__ */ React3.createElement("i", null, "Italicize")), /* @__PURE__ */ React3.createElement("p", null, "Ctrl+I")))), /* @__PURE__ */ React3.createElement(Tooltip, { placement: "bottom" }, /* @__PURE__ */ React3.createElement(TooltipTrigger, null, /* @__PURE__ */ React3.createElement(
      FormatButton,
      {
        format: "__" /* Underline */,
        icon: /* @__PURE__ */ React3.createElement(Underline, { className: "group-hover:fill-brand-100 h-4 w-4 fill-gray-100" })
      }
    )), /* @__PURE__ */ React3.createElement(TooltipContent, null, /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("p", null, /* @__PURE__ */ React3.createElement("u", null, "Underline")), /* @__PURE__ */ React3.createElement("p", null, "Ctrl+U")))), /* @__PURE__ */ React3.createElement(Tooltip, { placement: "bottom" }, /* @__PURE__ */ React3.createElement(TooltipTrigger, null, /* @__PURE__ */ React3.createElement(
      FormatButton,
      {
        format: "~~" /* Strikethrough */,
        icon: /* @__PURE__ */ React3.createElement(Stroke, { className: "group-hover:fill-brand-100 h-4 w-4 fill-gray-100" })
      }
    )), /* @__PURE__ */ React3.createElement(TooltipContent, null, /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("p", null, /* @__PURE__ */ React3.createElement("s", null, "Strike-through")), /* @__PURE__ */ React3.createElement("p", null, "Ctrl+S")))))
  )));
};
var FormatButton = ({
  format,
  icon,
  onClick
}) => {
  const editor = useSlate();
  return /* @__PURE__ */ React3.createElement(
    Button,
    {
      className: "bg-gray-0 hover:bg-brand-0 hover:fill-brand-100 group h-6 w-6 rounded-sm p-0",
      variant: "ghost",
      onMouseDown: (event) => {
        event.preventDefault();
        if (onClick) {
          onClick();
        }
        toggleMarkdownInlineStyle(editor, format);
      }
    },
    icon
  );
};

// components/MarkdownPreview.tsx
import React4 from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm2 from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";
var CustomLink = (_a) => {
  var _b = _a, { href, children } = _b, props = __objRest(_b, ["href", "children"]);
  if (!href) {
    return null;
  }
  return /* @__PURE__ */ React4.createElement(
    "a",
    __spreadValues({
      href,
      className: "text-brand-60 no-underline transition duration-300 hover:underline"
    }, props),
    children
  );
};
var formatMarkdown2 = (markdown) => {
  return markdown.replace(/__(.*?)__/g, "<u>$1</u>");
};
var MarkdownPreview = ({ markdown }) => {
  const formattedMarkdown = formatMarkdown2(markdown);
  return /* @__PURE__ */ React4.createElement(
    ReactMarkdown,
    {
      remarkPlugins: [remarkGfm2],
      rehypePlugins: [rehypeRaw, [rehypeReact, { createElement: React4.createElement }]],
      components: {
        a(props) {
          const _a = props, { node } = _a, rest = __objRest(_a, ["node"]);
          return /* @__PURE__ */ React4.createElement(CustomLink, __spreadValues({}, rest));
        },
        u({ children }) {
          return /* @__PURE__ */ React4.createElement("u", null, children);
        },
        strong({ children }) {
          return /* @__PURE__ */ React4.createElement("strong", null, children);
        }
      }
    },
    formattedMarkdown
  );
};

// SmartInput.tsx
import Prism2 from "prismjs";
import "prismjs/components/prism-markdown";
import { cn } from "@xipkg/utils";
Prism2.languages.markdown = prismMarkdown;
var SmartInput = ({
  editorRef,
  initialValue,
  onChange,
  editableClassName,
  editableProps,
  slateProps
}) => {
  const editor = useMemo2(() => withHistory(withReact(createEditor())), []);
  const decorate = useCallback(([node, path]) => {
    const ranges = [];
    if (!Text.isText(node)) {
      return ranges;
    }
    const tokens = Prism2.tokenize(node.text, Prism2.languages.markdown);
    let start = 0;
    for (const token of tokens) {
      const length = typeof token === "string" ? token.length : getLength(token);
      const end = start + length;
      if (typeof token === "string") {
        start = end;
        continue;
      }
      if (token.type) {
        const { type } = token;
        const tokenLength = token.content ? getLength(token.content) : length;
        if (type === "bold") {
          ranges.push({
            bold: true,
            anchor: { path, offset: start + 2 },
            // Пропускаем 2 символа для '**'
            focus: { path, offset: end - 2 }
            // Пропускаем 2 символа для '**'
          });
        } else if (type === "italic") {
          ranges.push({
            italic: true,
            anchor: { path, offset: start + 1 },
            // Пропускаем 1 символ для '*'
            focus: { path, offset: end - 1 }
            // Пропускаем 1 символ для '*'
          });
        } else if (type === "underline") {
          ranges.push({
            underline: true,
            anchor: { path, offset: start + 2 },
            // Пропускаем 2 символа для '__'
            focus: { path, offset: end - 2 }
            // Пропускаем 2 символа для '__'
          });
        } else if (type === "strikethrough") {
          ranges.push({
            strikethrough: true,
            anchor: { path, offset: start + 2 },
            // Пропускаем 2 символа для '~~'
            focus: { path, offset: end - 2 }
            // Пропускаем 2 символа для '~~'
          });
        } else if (type === "code") {
          ranges.push({
            code: true,
            anchor: { path, offset: start + 1 },
            // Пропускаем 1 символ для '`'
            focus: { path, offset: end - 1 }
            // Пропускаем 1 символ для '`'
          });
        }
      }
      start = end;
    }
    return ranges;
  }, []);
  const handleChange = (value) => {
    if (onChange) {
      onChange(value);
    }
  };
  const handleCopy = useCallback(
    (event) => {
      const { selection } = editor;
      if (!event || !event.clipboardData) return;
      if (selection) {
        const value = Editor2.fragment(editor, selection);
        const markdownText = slateToMarkdown(value, false);
        event.clipboardData.setData("text/plain", markdownText);
        event.preventDefault();
      }
    },
    [editor]
  );
  const handlePaste = useCallback(
    (event) => {
      if (!event || !event.clipboardData || !editor.selection) return;
      const pastedText = event.clipboardData.getData("text/plain");
      Transforms2.insertText(editor, pastedText, { at: editor.selection });
      event.preventDefault();
    },
    [editor]
  );
  useEffect2(() => {
    document.addEventListener("copy", handleCopy);
    document.addEventListener("paste", handlePaste);
    return () => {
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("paste", handlePaste);
    };
  }, [handleCopy, handlePaste]);
  const editableRef = useRef2(null);
  useImperativeHandle(editorRef, () => __spreadProps(__spreadValues({}, editor), {
    resetContent: () => {
      editor.children = [
        {
          type: "paragraph",
          children: [{ text: "" }]
        }
      ];
      editor.normalizeNode([editor, []]);
      editor.deselect();
      editor.onChange();
    },
    setContent: (nodes) => {
      editor.children = nodes;
      editor.normalizeNode([editor, []]);
      editor.deselect();
      editor.onChange();
    },
    focus: () => {
      ReactEditor2.focus(editor);
      if (!editor.selection) {
        const end = Editor2.end(editor, []);
        Transforms2.select(editor, end);
      }
    }
  }));
  const userKeyDownHandler = editableProps == null ? void 0 : editableProps.onKeyDown;
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Enter") {
        if (!event.shiftKey) {
          event.preventDefault();
        } else {
          event.preventDefault();
          Transforms2.insertNodes(editor, {
            type: "paragraph",
            children: [{ text: "" }]
          });
        }
      }
      if (userKeyDownHandler) {
        userKeyDownHandler(event);
      }
    },
    [editor, userKeyDownHandler]
  );
  return /* @__PURE__ */ React5.createElement(
    Slate,
    __spreadValues({
      editor,
      initialValue: initialValue != null ? initialValue : [],
      onChange: handleChange
    }, slateProps),
    /* @__PURE__ */ React5.createElement(InlineToolbar, { editableRef }),
    /* @__PURE__ */ React5.createElement(
      Editable,
      __spreadValues({
        ref: editableRef,
        decorate,
        className: cn(
          "text-gray-100 focus-visible:outline-none focus-visible:[&_*]:outline-none",
          editableClassName
        ),
        renderLeaf: (_a) => {
          var _b = _a, { leaf } = _b, props = __objRest(_b, ["leaf"]);
          return /* @__PURE__ */ React5.createElement(Leaf, __spreadValues({ leaf }, props));
        },
        onKeyDown: handleKeyDown
      }, editableProps)
    )
  );
};
export {
  MarkdownPreview,
  SmartInput,
  markdownToSlate,
  slateToMarkdown
};
