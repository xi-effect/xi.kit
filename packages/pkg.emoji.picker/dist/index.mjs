// EmojiPicker.tsx
import { useState as useState3, useRef as useRef3, useMemo as useMemo2, useCallback } from "react";
import { Button as Button2 } from "@xipkg/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@xipkg/dropdown";
import {
  Clock,
  Emotions,
  Search,
  Nature,
  Food,
  Activity,
  Places,
  Objects,
  Heart,
  Flag
} from "@xipkg/icons";
import { Input } from "@xipkg/input";
import { cn as cn2 } from "@xipkg/utils";

// EmojiCategory.tsx
import { memo, useMemo, useRef as useRef2 } from "react";
import { Button } from "@xipkg/button";

// hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState } from "react";
var useIntersectionObserver = ({
  root,
  rootMargin = "0px",
  threshold = 0,
  enabled = true,
  onChange,
  externalRef
}) => {
  const [entry, setEntry] = useState(null);
  const [element, setElement] = useState(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const ref = useRef(null);
  const currentRef = externalRef || ref;
  useEffect(() => {
    if (!enabled || !(currentRef == null ? void 0 : currentRef.current)) return;
    const observerRoot = root && "current" in root ? root.current : root || null;
    const observer = new IntersectionObserver(
      ([entry2]) => {
        var _a;
        setEntry(entry2);
        (_a = onChangeRef.current) == null ? void 0 : _a.call(onChangeRef, entry2);
      },
      { root: observerRoot, rootMargin, threshold }
    );
    observer.observe(currentRef.current);
    return () => {
      observer.disconnect();
    };
  }, [currentRef, root, rootMargin, threshold, enabled]);
  return {
    ref: setElement,
    entry,
    inView: !!(entry == null ? void 0 : entry.isIntersecting)
  };
};

// hooks/useVisibleRows.ts
import { useEffect as useEffect2, useState as useState2 } from "react";
var useVisibleRows = (containerRef, categoryRef, totalRows, rowHeight, bufferRows) => {
  const [visibleRows, setVisibleRows] = useState2([0, 0]);
  useEffect2(() => {
    const updateVisibleRows = () => {
      if (!containerRef.current || !categoryRef.current) return;
      const container2 = containerRef.current;
      const offsetTop = categoryRef.current.offsetTop;
      const scrollTop = container2.scrollTop;
      const containerHeight = container2.clientHeight;
      const visibleStart = Math.max(
        0,
        Math.floor((scrollTop - offsetTop) / rowHeight) - bufferRows
      );
      const visibleEnd = Math.min(
        totalRows,
        Math.ceil((scrollTop - offsetTop + containerHeight) / rowHeight) + bufferRows
      );
      setVisibleRows([visibleStart, visibleEnd]);
    };
    updateVisibleRows();
    const container = containerRef == null ? void 0 : containerRef.current;
    if (container) {
      container.addEventListener("scroll", updateVisibleRows);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", updateVisibleRows);
      }
    };
  }, [containerRef, totalRows, categoryRef, rowHeight, bufferRows]);
  return visibleRows;
};

// constants.ts
var ROW_SIZE = 8;
var ROW_HEIGHT = 28;
var BUFFER_ROWS = 4;
var categoryIntersections = [];

// EmojiCategory.tsx
import { cn } from "@xipkg/utils";
import { jsx, jsxs } from "react/jsx-runtime";
var EmojiCategory = memo(
  ({
    currentIndex,
    isIntersectionEnabled = true,
    category,
    handleEmojiClick,
    containerRef,
    setActiveCategory
  }) => {
    const categoryRef = useRef2(null);
    const totalRows = Math.ceil(category.emojis.length / ROW_SIZE);
    useIntersectionObserver({
      enabled: isIntersectionEnabled,
      externalRef: categoryRef,
      root: containerRef,
      threshold: 0.1,
      onChange: (entry) => {
        const index = Number(entry.target.id.replace("emoji-category-", ""));
        categoryIntersections[index] = entry.isIntersecting;
        const minIntersectingIndex = categoryIntersections.reduce(
          (lowestIndex, isIntersecting, index2) => {
            return isIntersecting && index2 < lowestIndex ? index2 : lowestIndex;
          },
          Infinity
        );
        setActiveCategory(minIntersectingIndex);
      }
    });
    const visibleRows = useVisibleRows(
      containerRef,
      categoryRef,
      totalRows,
      ROW_HEIGHT,
      BUFFER_ROWS
    );
    const visibleEmojis = useMemo(() => {
      const [startRow, endRow] = visibleRows;
      const start = Math.max(0, startRow * ROW_SIZE);
      const end = Math.min(category.emojis.length, endRow * ROW_SIZE);
      return category.emojis.slice(start, end);
    }, [visibleRows, category.emojis]);
    return /* @__PURE__ */ jsxs("div", { id: `emoji-category-${currentIndex}`, ref: categoryRef, className: "mb-4", children: [
      category.name_rus && /* @__PURE__ */ jsx("div", { className: "bg-gray-0 pb-2", children: /* @__PURE__ */ jsx("h6", { className: "text-s-base first-letter:uppercase", children: category.name_rus }) }),
      /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            height: `${totalRows * ROW_HEIGHT}px`,
            position: "relative"
          },
          children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "grid grid-cols-8 gap-1",
              style: {
                transform: `translateY(${visibleRows[0] * ROW_HEIGHT}px)`
              },
              children: visibleEmojis.map((emoji) => /* @__PURE__ */ jsx(
                Button,
                {
                  title: `:${emoji.name}:`,
                  variant: "ghost",
                  className: cn(
                    "h-6 w-6 translate-y-4 rounded-[4px] p-1 opacity-0 transition-transform duration-300",
                    "animate-fade-in"
                  ),
                  onClick: () => handleEmojiClick(emoji.unicode),
                  style: {
                    animationDelay: "10ms",
                    animationFillMode: "forwards",
                    fontFamily: "Apple Color Emoji, Twemoji Mozilla, Noto Color Emoji, Android Emoji"
                  },
                  children: emoji.char
                },
                emoji.name + emoji.unicode
              ))
            }
          )
        }
      )
    ] });
  }
);
EmojiCategory.displayName = "EmojiCategory";

// utils/unicodeToNative.ts
var unicodeToNative = (unicode) => {
  return unicode.split("-").map((u) => String.fromCodePoint(parseInt(u, 16))).join("");
};

// emojis.json
var emojis_default = [
  {
    name: "emotions",
    name_rus: "\u043B\u0438\u0446\u0430 \u0438 \u044D\u043C\u043E\u0446\u0438\u0438",
    emojis: [
      {
        name: "grinning face",
        unicode: "1f600",
        char: "\u{1F600}"
      },
      {
        name: "grinning face with smiling eyes",
        unicode: "1f601",
        char: "\u{1F601}"
      },
      {
        name: "face with tears of joy",
        unicode: "1f602",
        char: "\u{1F602}"
      },
      {
        name: "rolling on the floor laughing",
        unicode: "1f923",
        char: "\u{1F923}"
      },
      {
        name: "smiling face with open mouth",
        unicode: "1f603",
        char: "\u{1F603}"
      },
      {
        name: "smiling face with open mouth and smiling eyes",
        unicode: "1f604",
        char: "\u{1F604}"
      },
      {
        name: "smiling face with open mouth and cold sweat",
        unicode: "1f605",
        char: "\u{1F605}"
      },
      {
        name: "smiling face with open mouth and tightly-closed eyes",
        unicode: "1f606",
        char: "\u{1F606}"
      },
      {
        name: "winking face",
        unicode: "1f609",
        char: "\u{1F609}"
      },
      {
        name: "smiling face with smiling eyes",
        unicode: "1f60a",
        char: "\u{1F60A}"
      },
      {
        name: "face savouring delicious food",
        unicode: "1f60b",
        char: "\u{1F60B}"
      },
      {
        name: "smiling face with sunglasses",
        unicode: "1f60e",
        char: "\u{1F60E}"
      },
      {
        name: "smiling face with heart-shaped eyes",
        unicode: "1f60d",
        char: "\u{1F60D}"
      },
      {
        name: "face throwing a kiss",
        unicode: "1f618",
        char: "\u{1F618}"
      },
      {
        name: "kissing face",
        unicode: "1f617",
        char: "\u{1F617}"
      },
      {
        name: "kissing face with smiling eyes",
        unicode: "1f619",
        char: "\u{1F619}"
      },
      {
        name: "kissing face with closed eyes",
        unicode: "1f61a",
        char: "\u{1F61A}"
      },
      {
        name: "white smiling face",
        unicode: "263A-FE0F",
        char: "\u263A"
      },
      {
        name: "slightly smiling face",
        unicode: "1f642",
        char: "\u{1F642}"
      },
      {
        name: "hugging face",
        unicode: "1f917",
        char: "\u{1F917}"
      },
      {
        name: "thinking face",
        unicode: "1f914",
        char: "\u{1F914}"
      },
      {
        name: "neutral face",
        unicode: "1f610",
        char: "\u{1F610}"
      },
      {
        name: "expressionless face",
        unicode: "1f611",
        char: "\u{1F611}"
      },
      {
        name: "face without mouth",
        unicode: "1f636",
        char: "\u{1F636}"
      },
      {
        name: "face with rolling eyes",
        unicode: "1f644",
        char: "\u{1F644}"
      },
      {
        name: "smirking face",
        unicode: "1f60f",
        char: "\u{1F60F}"
      },
      {
        name: "persevering face",
        unicode: "1f623",
        char: "\u{1F623}"
      },
      {
        name: "disappointed but relieved face",
        unicode: "1f625",
        char: "\u{1F625}"
      },
      {
        name: "face with open mouth",
        unicode: "1f62e",
        char: "\u{1F62E}"
      },
      {
        name: "zipper-mouth face",
        unicode: "1f910",
        char: "\u{1F910}"
      },
      {
        name: "hushed face",
        unicode: "1f62f",
        char: "\u{1F62F}"
      },
      {
        name: "sleepy face",
        unicode: "1f62a",
        char: "\u{1F62A}"
      },
      {
        name: "tired face",
        unicode: "1f62b",
        char: "\u{1F62B}"
      },
      {
        name: "sleeping face",
        unicode: "1f634",
        char: "\u{1F634}"
      },
      {
        name: "relieved face",
        unicode: "1f60c",
        char: "\u{1F60C}"
      },
      {
        name: "nerd face",
        unicode: "1f913",
        char: "\u{1F913}"
      },
      {
        name: "face with stuck-out tongue",
        unicode: "1f61b",
        char: "\u{1F61B}"
      },
      {
        name: "face with stuck-out tongue and winking eye",
        unicode: "1f61c",
        char: "\u{1F61C}"
      },
      {
        name: "face with stuck-out tongue and tightly-closed eyes",
        unicode: "1f61d",
        char: "\u{1F61D}"
      },
      {
        name: "drooling face",
        unicode: "1f924",
        char: "\u{1F924}"
      },
      {
        name: "unamused face",
        unicode: "1f612",
        char: "\u{1F612}"
      },
      {
        name: "face with cold sweat",
        unicode: "1f613",
        char: "\u{1F613}"
      },
      {
        name: "pensive face",
        unicode: "1f614",
        char: "\u{1F614}"
      },
      {
        name: "confused face",
        unicode: "1f615",
        char: "\u{1F615}"
      },
      {
        name: "upside-down face",
        unicode: "1f643",
        char: "\u{1F643}"
      },
      {
        name: "money-mouth face",
        unicode: "1f911",
        char: "\u{1F911}"
      },
      {
        name: "astonished face",
        unicode: "1f632",
        char: "\u{1F632}"
      },
      {
        name: "white frowning face",
        unicode: "2639-FE0F",
        char: "\u2639"
      },
      {
        name: "slightly frowning face",
        unicode: "1f641",
        char: "\u{1F641}"
      },
      {
        name: "confounded face",
        unicode: "1f616",
        char: "\u{1F616}"
      },
      {
        name: "disappointed face",
        unicode: "1f61e",
        char: "\u{1F61E}"
      },
      {
        name: "worried face",
        unicode: "1f61f",
        char: "\u{1F61F}"
      },
      {
        name: "face with look of triumph",
        unicode: "1f624",
        char: "\u{1F624}"
      },
      {
        name: "crying face",
        unicode: "1f622",
        char: "\u{1F622}"
      },
      {
        name: "loudly crying face",
        unicode: "1f62d",
        char: "\u{1F62D}"
      },
      {
        name: "frowning face with open mouth",
        unicode: "1f626",
        char: "\u{1F626}"
      },
      {
        name: "anguished face",
        unicode: "1f627",
        char: "\u{1F627}"
      },
      {
        name: "fearful face",
        unicode: "1f628",
        char: "\u{1F628}"
      },
      {
        name: "weary face",
        unicode: "1f629",
        char: "\u{1F629}"
      },
      {
        name: "grimacing face",
        unicode: "1f62c",
        char: "\u{1F62C}"
      },
      {
        name: "face with open mouth and cold sweat",
        unicode: "1f630",
        char: "\u{1F630}"
      },
      {
        name: "face screaming in fear",
        unicode: "1f631",
        char: "\u{1F631}"
      },
      {
        name: "flushed face",
        unicode: "1f633",
        char: "\u{1F633}"
      },
      {
        name: "dizzy face",
        unicode: "1f635",
        char: "\u{1F635}"
      },
      {
        name: "pouting face",
        unicode: "1f621",
        char: "\u{1F621}"
      },
      {
        name: "angry face",
        unicode: "1f620",
        char: "\u{1F620}"
      },
      {
        name: "smiling face with halo",
        unicode: "1f607",
        char: "\u{1F607}"
      },
      {
        name: "face with cowboy hat",
        unicode: "1f920",
        char: "\u{1F920}"
      },
      {
        name: "clown face",
        unicode: "1f921",
        char: "\u{1F921}"
      },
      {
        name: "lying face",
        unicode: "1f925",
        char: "\u{1F925}"
      },
      {
        name: "face with medical mask",
        unicode: "1f637",
        char: "\u{1F637}"
      },
      {
        name: "face with thermometer",
        unicode: "1f912",
        char: "\u{1F912}"
      },
      {
        name: "face with head-bandage",
        unicode: "1f915",
        char: "\u{1F915}"
      },
      {
        name: "nauseated face",
        unicode: "1f922",
        char: "\u{1F922}"
      },
      {
        name: "sneezing face",
        unicode: "1f927",
        char: "\u{1F927}"
      },
      {
        name: "smiling face with horns",
        unicode: "1f608",
        char: "\u{1F608}"
      },
      {
        name: "imp",
        unicode: "1f47f",
        char: "\u{1F47F}"
      },
      {
        name: "japanese ogre",
        unicode: "1f479",
        char: "\u{1F479}"
      },
      {
        name: "japanese goblin",
        unicode: "1f47a",
        char: "\u{1F47A}"
      },
      {
        name: "skull",
        unicode: "1f480",
        char: "\u{1F480}"
      },
      {
        name: "ghost",
        unicode: "1f47b",
        char: "\u{1F47B}"
      },
      {
        name: "extraterrestrial alien",
        unicode: "1f47d",
        char: "\u{1F47D}"
      },
      {
        name: "robot face",
        unicode: "1f916",
        char: "\u{1F916}"
      },
      {
        name: "pile of poo",
        unicode: "1f4a9",
        char: "\u{1F4A9}"
      },
      {
        name: "smiling cat face with open mouth",
        unicode: "1f63a",
        char: "\u{1F63A}"
      },
      {
        name: "grinning cat face with smiling eyes",
        unicode: "1f638",
        char: "\u{1F638}"
      },
      {
        name: "cat face with tears of joy",
        unicode: "1f639",
        char: "\u{1F639}"
      },
      {
        name: "smiling cat face with heart-shaped eyes",
        unicode: "1f63b",
        char: "\u{1F63B}"
      },
      {
        name: "cat face with wry smile",
        unicode: "1f63c",
        char: "\u{1F63C}"
      },
      {
        name: "kissing cat face with closed eyes",
        unicode: "1f63d",
        char: "\u{1F63D}"
      },
      {
        name: "weary cat face",
        unicode: "1f640",
        char: "\u{1F640}"
      },
      {
        name: "crying cat face",
        unicode: "1f63f",
        char: "\u{1F63F}"
      },
      {
        name: "pouting cat face",
        unicode: "1f63e",
        char: "\u{1F63E}"
      },
      {
        name: "boy",
        unicode: "1f466",
        char: "\u{1F466}"
      },
      {
        name: "girl",
        unicode: "1f467",
        char: "\u{1F467}"
      },
      {
        name: "man",
        unicode: "1f468",
        char: "\u{1F468}"
      },
      {
        name: "woman",
        unicode: "1f469",
        char: "\u{1F469}"
      },
      {
        name: "older man",
        unicode: "1f474",
        char: "\u{1F474}"
      },
      {
        name: "older woman",
        unicode: "1f475",
        char: "\u{1F475}"
      },
      {
        name: "baby",
        unicode: "1f476",
        char: "\u{1F476}"
      },
      {
        name: "baby angel",
        unicode: "1f47c",
        char: "\u{1F47C}"
      },
      {
        name: "police officer",
        unicode: "1f46e",
        char: "\u{1F46E}"
      },
      {
        name: "sleuth or spy",
        unicode: "1f575",
        char: "\u{1F575}"
      },
      {
        name: "guardsman",
        unicode: "1f482",
        char: "\u{1F482}"
      },
      {
        name: "construction worker",
        unicode: "1f477",
        char: "\u{1F477}"
      },
      {
        name: "man with turban",
        unicode: "1f473",
        char: "\u{1F473}"
      },
      {
        name: "person with blond hair",
        unicode: "1f471",
        char: "\u{1F471}"
      },
      {
        name: "father christmas",
        unicode: "1f385",
        char: "\u{1F385}"
      },
      {
        name: "mother christmas",
        unicode: "1f936",
        char: "\u{1F936}"
      },
      {
        name: "princess",
        unicode: "1f478",
        char: "\u{1F478}"
      },
      {
        name: "prince",
        unicode: "1f934",
        char: "\u{1F934}"
      },
      {
        name: "bride with veil",
        unicode: "1f470",
        char: "\u{1F470}"
      },
      {
        name: "man in tuxedo",
        unicode: "1f935",
        char: "\u{1F935}"
      },
      {
        name: "pregnant woman",
        unicode: "1f930",
        char: "\u{1F930}"
      },
      {
        name: "man with gua pi mao",
        unicode: "1f472",
        char: "\u{1F472}"
      },
      {
        name: "person frowning",
        unicode: "1f64d",
        char: "\u{1F64D}"
      },
      {
        name: "person with pouting face",
        unicode: "1f64e",
        char: "\u{1F64E}"
      },
      {
        name: "face with no good gesture",
        unicode: "1f645",
        char: "\u{1F645}"
      },
      {
        name: "face with ok gesture",
        unicode: "1f646",
        char: "\u{1F646}"
      },
      {
        name: "information desk person",
        unicode: "1f481",
        char: "\u{1F481}"
      },
      {
        name: "happy person raising one hand",
        unicode: "1f64b",
        char: "\u{1F64B}"
      },
      {
        name: "person bowing deeply",
        unicode: "1f647",
        char: "\u{1F647}"
      },
      {
        name: "face palm",
        unicode: "1f926",
        char: "\u{1F926}"
      },
      {
        name: "shrug",
        unicode: "1f937",
        char: "\u{1F937}"
      },
      {
        name: "face massage",
        unicode: "1f486",
        char: "\u{1F486}"
      },
      {
        name: "haircut",
        unicode: "1f487",
        char: "\u{1F487}"
      },
      {
        name: "pedestrian",
        unicode: "1f6b6",
        char: "\u{1F6B6}"
      },
      {
        name: "runner",
        unicode: "1f3c3",
        char: "\u{1F3C3}"
      },
      {
        name: "dancer",
        unicode: "1f483",
        char: "\u{1F483}"
      },
      {
        name: "man dancing",
        unicode: "1f57a",
        char: "\u{1F57A}"
      },
      {
        name: "woman with bunny ears",
        unicode: "1f46f",
        char: "\u{1F46F}"
      },
      {
        name: "speaking head in silhouette",
        unicode: "1f5e3",
        char: "\u{1F5E3}"
      },
      {
        name: "bust in silhouette",
        unicode: "1f464",
        char: "\u{1F464}"
      },
      {
        name: "busts in silhouette",
        unicode: "1f465",
        char: "\u{1F465}"
      },
      {
        name: "man and woman holding hands",
        unicode: "1f46b",
        char: "\u{1F46B}"
      },
      {
        name: "two men holding hands",
        unicode: "1f46c",
        char: "\u{1F46C}"
      },
      {
        name: "two women holding hands",
        unicode: "1f46d",
        char: "\u{1F46D}"
      },
      {
        name: "kiss",
        unicode: "1f48f",
        char: "\u{1F48F}"
      },
      {
        name: "couple with heart",
        unicode: "1f491",
        char: "\u{1F491}"
      },
      {
        name: "family",
        unicode: "1f46a",
        char: "\u{1F46A}"
      },
      {
        name: "flexed biceps",
        unicode: "1f4aa",
        char: "\u{1F4AA}"
      },
      {
        name: "selfie",
        unicode: "1f933",
        char: "\u{1F933}"
      },
      {
        name: "white left pointing backhand index",
        unicode: "1f448",
        char: "\u{1F448}"
      },
      {
        name: "white right pointing backhand index",
        unicode: "1f449",
        char: "\u{1F449}"
      },
      {
        name: "white up pointing index",
        unicode: "261d",
        char: "\u261D"
      },
      {
        name: "white up pointing backhand index",
        unicode: "1f446",
        char: "\u{1F446}"
      },
      {
        name: "reversed hand with middle finger extended",
        unicode: "1f595",
        char: "\u{1F595}"
      },
      {
        name: "white down pointing backhand index",
        unicode: "1f447",
        char: "\u{1F447}"
      },
      {
        name: "victory hand",
        unicode: "270c",
        char: "\u270C"
      },
      {
        name: "hand with first and index finger crossed",
        unicode: "1f91e",
        char: "\u{1F91E}"
      },
      {
        name: "raised hand with part between middle and ring fingers",
        unicode: "1f596",
        char: "\u{1F596}"
      },
      {
        name: "sign of the horns",
        unicode: "1f918",
        char: "\u{1F918}"
      },
      {
        name: "call me hand",
        unicode: "1f919",
        char: "\u{1F919}"
      },
      {
        name: "raised hand with fingers splayed",
        unicode: "1f590",
        char: "\u{1F590}"
      },
      {
        name: "raised hand",
        unicode: "270b",
        char: "\u270B"
      },
      {
        name: "ok hand sign",
        unicode: "1f44c",
        char: "\u{1F44C}"
      },
      {
        name: "thumbs up sign",
        unicode: "1f44d",
        char: "\u{1F44D}"
      },
      {
        name: "thumbs down sign",
        unicode: "1f44e",
        char: "\u{1F44E}"
      },
      {
        name: "raised fist",
        unicode: "270a",
        char: "\u270A"
      },
      {
        name: "fisted hand sign",
        unicode: "1f44a",
        char: "\u{1F44A}"
      },
      {
        name: "left-facing fist",
        unicode: "1f91b",
        char: "\u{1F91B}"
      },
      {
        name: "right-facing fist",
        unicode: "1f91c",
        char: "\u{1F91C}"
      },
      {
        name: "raised back of hand",
        unicode: "1f91a",
        char: "\u{1F91A}"
      },
      {
        name: "waving hand sign",
        unicode: "1f44b",
        char: "\u{1F44B}"
      },
      {
        name: "clapping hands sign",
        unicode: "1f44f",
        char: "\u{1F44F}"
      },
      {
        name: "writing hand",
        unicode: "270d",
        char: "\u270D"
      },
      {
        name: "open hands sign",
        unicode: "1f450",
        char: "\u{1F450}"
      },
      {
        name: "person raising both hands in celebration",
        unicode: "1f64c",
        char: "\u{1F64C}"
      },
      {
        name: "person with folded hands",
        unicode: "1f64f",
        char: "\u{1F64F}"
      },
      {
        name: "handshake",
        unicode: "1f91d",
        char: "\u{1F91D}"
      },
      {
        name: "nail polish",
        unicode: "1f485",
        char: "\u{1F485}"
      },
      {
        name: "ear",
        unicode: "1f442",
        char: "\u{1F442}"
      },
      {
        name: "nose",
        unicode: "1f443",
        char: "\u{1F443}"
      },
      {
        name: "footprints",
        unicode: "1f463",
        char: "\u{1F463}"
      },
      {
        name: "eyes",
        unicode: "1f440",
        char: "\u{1F440}"
      },
      {
        name: "eye",
        unicode: "1f441",
        char: "\u{1F441}"
      },
      {
        name: "tongue",
        unicode: "1f445",
        char: "\u{1F445}"
      },
      {
        name: "mouth",
        unicode: "1f444",
        char: "\u{1F444}"
      },
      {
        name: "kiss mark",
        unicode: "1f48b",
        char: "\u{1F48B}"
      },
      {
        name: "sleeping symbol",
        unicode: "1f4a4",
        char: "\u{1F4A4}"
      },
      {
        name: "eyeglasses",
        unicode: "1f453",
        char: "\u{1F453}"
      },
      {
        name: "dark sunglasses",
        unicode: "1f576",
        char: "\u{1F576}"
      },
      {
        name: "necktie",
        unicode: "1f454",
        char: "\u{1F454}"
      },
      {
        name: "t-shirt",
        unicode: "1f455",
        char: "\u{1F455}"
      },
      {
        name: "jeans",
        unicode: "1f456",
        char: "\u{1F456}"
      },
      {
        name: "dress",
        unicode: "1f457",
        char: "\u{1F457}"
      },
      {
        name: "kimono",
        unicode: "1f458",
        char: "\u{1F458}"
      },
      {
        name: "bikini",
        unicode: "1f459",
        char: "\u{1F459}"
      },
      {
        name: "womans clothes",
        unicode: "1f45a",
        char: "\u{1F45A}"
      },
      {
        name: "purse",
        unicode: "1f45b",
        char: "\u{1F45B}"
      },
      {
        name: "handbag",
        unicode: "1f45c",
        char: "\u{1F45C}"
      },
      {
        name: "pouch",
        unicode: "1f45d",
        char: "\u{1F45D}"
      },
      {
        name: "school satchel",
        unicode: "1f392",
        char: "\u{1F392}"
      },
      {
        name: "mans shoe",
        unicode: "1f45e",
        char: "\u{1F45E}"
      },
      {
        name: "athletic shoe",
        unicode: "1f45f",
        char: "\u{1F45F}"
      },
      {
        name: "high-heeled shoe",
        unicode: "1f460",
        char: "\u{1F460}"
      },
      {
        name: "womans sandal",
        unicode: "1f461",
        char: "\u{1F461}"
      },
      {
        name: "womans boots",
        unicode: "1f462",
        char: "\u{1F462}"
      },
      {
        name: "crown",
        unicode: "1f451",
        char: "\u{1F451}"
      },
      {
        name: "womans hat",
        unicode: "1f452",
        char: "\u{1F452}"
      },
      {
        name: "top hat",
        unicode: "1f3a9",
        char: "\u{1F3A9}"
      },
      {
        name: "graduation cap",
        unicode: "1f393",
        char: "\u{1F393}"
      },
      {
        name: "helmet with white cross",
        unicode: "26d1",
        char: "\u26D1"
      },
      {
        name: "lipstick",
        unicode: "1f484",
        char: "\u{1F484}"
      },
      {
        name: "ring",
        unicode: "1f48d",
        char: "\u{1F48D}"
      },
      {
        name: "closed umbrella",
        unicode: "1f302",
        char: "\u{1F302}"
      },
      {
        name: "briefcase",
        unicode: "1f4bc",
        char: "\u{1F4BC}"
      }
    ]
  },
  {
    name: "nature",
    name_rus: "\u043F\u0440\u0438\u0440\u043E\u0434\u0430",
    emojis: [
      {
        name: "see-no-evil monkey",
        unicode: "1f648",
        char: "\u{1F648}"
      },
      {
        name: "hear-no-evil monkey",
        unicode: "1f649",
        char: "\u{1F649}"
      },
      {
        name: "speak-no-evil monkey",
        unicode: "1f64a",
        char: "\u{1F64A}"
      },
      {
        name: "splashing sweat symbol",
        unicode: "1f4a6",
        char: "\u{1F4A6}"
      },
      {
        name: "dash symbol",
        unicode: "1f4a8",
        char: "\u{1F4A8}"
      },
      {
        name: "monkey face",
        unicode: "1f435",
        char: "\u{1F435}"
      },
      {
        name: "monkey",
        unicode: "1f412",
        char: "\u{1F412}"
      },
      {
        name: "gorilla",
        unicode: "1f98d",
        char: "\u{1F98D}"
      },
      {
        name: "dog face",
        unicode: "1f436",
        char: "\u{1F436}"
      },
      {
        name: "dog",
        unicode: "1f415",
        char: "\u{1F415}"
      },
      {
        name: "poodle",
        unicode: "1f429",
        char: "\u{1F429}"
      },
      {
        name: "wolf face",
        unicode: "1f43a",
        char: "\u{1F43A}"
      },
      {
        name: "fox face",
        unicode: "1f98a",
        char: "\u{1F98A}"
      },
      {
        name: "cat face",
        unicode: "1f431",
        char: "\u{1F431}"
      },
      {
        name: "cat",
        unicode: "1f408",
        char: "\u{1F408}"
      },
      {
        name: "lion face",
        unicode: "1f981",
        char: "\u{1F981}"
      },
      {
        name: "tiger face",
        unicode: "1f42f",
        char: "\u{1F42F}"
      },
      {
        name: "tiger",
        unicode: "1f405",
        char: "\u{1F405}"
      },
      {
        name: "leopard",
        unicode: "1f406",
        char: "\u{1F406}"
      },
      {
        name: "horse face",
        unicode: "1f434",
        char: "\u{1F434}"
      },
      {
        name: "horse",
        unicode: "1f40e",
        char: "\u{1F40E}"
      },
      {
        name: "deer",
        unicode: "1f98c",
        char: "\u{1F98C}"
      },
      {
        name: "unicorn face",
        unicode: "1f984",
        char: "\u{1F984}"
      },
      {
        name: "cow face",
        unicode: "1f42e",
        char: "\u{1F42E}"
      },
      {
        name: "ox",
        unicode: "1f402",
        char: "\u{1F402}"
      },
      {
        name: "water buffalo",
        unicode: "1f403",
        char: "\u{1F403}"
      },
      {
        name: "cow",
        unicode: "1f404",
        char: "\u{1F404}"
      },
      {
        name: "pig face",
        unicode: "1f437",
        char: "\u{1F437}"
      },
      {
        name: "pig",
        unicode: "1f416",
        char: "\u{1F416}"
      },
      {
        name: "boar",
        unicode: "1f417",
        char: "\u{1F417}"
      },
      {
        name: "pig nose",
        unicode: "1f43d",
        char: "\u{1F43D}"
      },
      {
        name: "ram",
        unicode: "1f40f",
        char: "\u{1F40F}"
      },
      {
        name: "sheep",
        unicode: "1f411",
        char: "\u{1F411}"
      },
      {
        name: "goat",
        unicode: "1f410",
        char: "\u{1F410}"
      },
      {
        name: "dromedary camel",
        unicode: "1f42a",
        char: "\u{1F42A}"
      },
      {
        name: "bactrian camel",
        unicode: "1f42b",
        char: "\u{1F42B}"
      },
      {
        name: "elephant",
        unicode: "1f418",
        char: "\u{1F418}"
      },
      {
        name: "rhinoceros",
        unicode: "1f98f",
        char: "\u{1F98F}"
      },
      {
        name: "mouse face",
        unicode: "1f42d",
        char: "\u{1F42D}"
      },
      {
        name: "mouse",
        unicode: "1f401",
        char: "\u{1F401}"
      },
      {
        name: "rat",
        unicode: "1f400",
        char: "\u{1F400}"
      },
      {
        name: "hamster face",
        unicode: "1f439",
        char: "\u{1F439}"
      },
      {
        name: "rabbit face",
        unicode: "1f430",
        char: "\u{1F430}"
      },
      {
        name: "rabbit",
        unicode: "1f407",
        char: "\u{1F407}"
      },
      {
        name: "chipmunk",
        unicode: "1f43f",
        char: "\u{1F43F}"
      },
      {
        name: "bat",
        unicode: "1f987",
        char: "\u{1F987}"
      },
      {
        name: "bear face",
        unicode: "1f43b",
        char: "\u{1F43B}"
      },
      {
        name: "koala",
        unicode: "1f428",
        char: "\u{1F428}"
      },
      {
        name: "panda face",
        unicode: "1f43c",
        char: "\u{1F43C}"
      },
      {
        name: "paw prints",
        unicode: "1f43e",
        char: "\u{1F43E}"
      },
      {
        name: "turkey",
        unicode: "1f983",
        char: "\u{1F983}"
      },
      {
        name: "chicken",
        unicode: "1f414",
        char: "\u{1F414}"
      },
      {
        name: "rooster",
        unicode: "1f413",
        char: "\u{1F413}"
      },
      {
        name: "hatching chick",
        unicode: "1f423",
        char: "\u{1F423}"
      },
      {
        name: "baby chick",
        unicode: "1f424",
        char: "\u{1F424}"
      },
      {
        name: "front-facing baby chick",
        unicode: "1f425",
        char: "\u{1F425}"
      },
      {
        name: "bird",
        unicode: "1f426",
        char: "\u{1F426}"
      },
      {
        name: "penguin",
        unicode: "1f427",
        char: "\u{1F427}"
      },
      {
        name: "dove of peace",
        unicode: "1f54a",
        char: "\u{1F54A}"
      },
      {
        name: "eagle",
        unicode: "1f985",
        char: "\u{1F985}"
      },
      {
        name: "duck",
        unicode: "1f986",
        char: "\u{1F986}"
      },
      {
        name: "owl",
        unicode: "1f989",
        char: "\u{1F989}"
      },
      {
        name: "frog face",
        unicode: "1f438",
        char: "\u{1F438}"
      },
      {
        name: "crocodile",
        unicode: "1f40a",
        char: "\u{1F40A}"
      },
      {
        name: "turtle",
        unicode: "1f422",
        char: "\u{1F422}"
      },
      {
        name: "lizard",
        unicode: "1f98e",
        char: "\u{1F98E}"
      },
      {
        name: "snake",
        unicode: "1f40d",
        char: "\u{1F40D}"
      },
      {
        name: "dragon face",
        unicode: "1f432",
        char: "\u{1F432}"
      },
      {
        name: "dragon",
        unicode: "1f409",
        char: "\u{1F409}"
      },
      {
        name: "spouting whale",
        unicode: "1f433",
        char: "\u{1F433}"
      },
      {
        name: "whale",
        unicode: "1f40b",
        char: "\u{1F40B}"
      },
      {
        name: "dolphin",
        unicode: "1f42c",
        char: "\u{1F42C}"
      },
      {
        name: "fish",
        unicode: "1f41f",
        char: "\u{1F41F}"
      },
      {
        name: "tropical fish",
        unicode: "1f420",
        char: "\u{1F420}"
      },
      {
        name: "blowfish",
        unicode: "1f421",
        char: "\u{1F421}"
      },
      {
        name: "shark",
        unicode: "1f988",
        char: "\u{1F988}"
      },
      {
        name: "octopus",
        unicode: "1f419",
        char: "\u{1F419}"
      },
      {
        name: "spiral shell",
        unicode: "1f41a",
        char: "\u{1F41A}"
      },
      {
        name: "crab",
        unicode: "1f980",
        char: "\u{1F980}"
      },
      {
        name: "shrimp",
        unicode: "1f990",
        char: "\u{1F990}"
      },
      {
        name: "squid",
        unicode: "1f991",
        char: "\u{1F991}"
      },
      {
        name: "butterfly",
        unicode: "1f98b",
        char: "\u{1F98B}"
      },
      {
        name: "snail",
        unicode: "1f40c",
        char: "\u{1F40C}"
      },
      {
        name: "bug",
        unicode: "1f41b",
        char: "\u{1F41B}"
      },
      {
        name: "ant",
        unicode: "1f41c",
        char: "\u{1F41C}"
      },
      {
        name: "honeybee",
        unicode: "1f41d",
        char: "\u{1F41D}"
      },
      {
        name: "lady beetle",
        unicode: "1f41e",
        char: "\u{1F41E}"
      },
      {
        name: "spider",
        unicode: "1f577",
        char: "\u{1F577}"
      },
      {
        name: "spider web",
        unicode: "1f578",
        char: "\u{1F578}"
      },
      {
        name: "scorpion",
        unicode: "1f982",
        char: "\u{1F982}"
      },
      {
        name: "bouquet",
        unicode: "1f490",
        char: "\u{1F490}"
      },
      {
        name: "cherry blossom",
        unicode: "1f338",
        char: "\u{1F338}"
      },
      {
        name: "rosette",
        unicode: "1f3f5",
        char: "\u{1F3F5}"
      },
      {
        name: "rose",
        unicode: "1f339",
        char: "\u{1F339}"
      },
      {
        name: "wilted flower",
        unicode: "1f940",
        char: "\u{1F940}"
      },
      {
        name: "hibiscus",
        unicode: "1f33a",
        char: "\u{1F33A}"
      },
      {
        name: "sunflower",
        unicode: "1f33b",
        char: "\u{1F33B}"
      },
      {
        name: "blossom",
        unicode: "1f33c",
        char: "\u{1F33C}"
      },
      {
        name: "tulip",
        unicode: "1f337",
        char: "\u{1F337}"
      },
      {
        name: "seedling",
        unicode: "1f331",
        char: "\u{1F331}"
      },
      {
        name: "evergreen tree",
        unicode: "1f332",
        char: "\u{1F332}"
      },
      {
        name: "deciduous tree",
        unicode: "1f333",
        char: "\u{1F333}"
      },
      {
        name: "palm tree",
        unicode: "1f334",
        char: "\u{1F334}"
      },
      {
        name: "cactus",
        unicode: "1f335",
        char: "\u{1F335}"
      },
      {
        name: "ear of rice",
        unicode: "1f33e",
        char: "\u{1F33E}"
      },
      {
        name: "herb",
        unicode: "1f33f",
        char: "\u{1F33F}"
      },
      {
        name: "shamrock",
        unicode: "2618",
        char: "\u2618"
      },
      {
        name: "four leaf clover",
        unicode: "1f340",
        char: "\u{1F340}"
      },
      {
        name: "maple leaf",
        unicode: "1f341",
        char: "\u{1F341}"
      },
      {
        name: "fallen leaf",
        unicode: "1f342",
        char: "\u{1F342}"
      },
      {
        name: "leaf fluttering in wind",
        unicode: "1f343",
        char: "\u{1F343}"
      },
      {
        name: "mushroom",
        unicode: "1f344",
        char: "\u{1F344}"
      },
      {
        name: "chestnut",
        unicode: "1f330",
        char: "\u{1F330}"
      },
      {
        name: "earth globe europe-africa",
        unicode: "1f30d",
        char: "\u{1F30D}"
      },
      {
        name: "earth globe americas",
        unicode: "1f30e",
        char: "\u{1F30E}"
      },
      {
        name: "earth globe asia-australia",
        unicode: "1f30f",
        char: "\u{1F30F}"
      },
      {
        name: "new moon symbol",
        unicode: "1f311",
        char: "\u{1F311}"
      },
      {
        name: "waxing crescent moon symbol",
        unicode: "1f312",
        char: "\u{1F312}"
      },
      {
        name: "first quarter moon symbol",
        unicode: "1f313",
        char: "\u{1F313}"
      },
      {
        name: "waxing gibbous moon symbol",
        unicode: "1f314",
        char: "\u{1F314}"
      },
      {
        name: "full moon symbol",
        unicode: "1f315",
        char: "\u{1F315}"
      },
      {
        name: "waning gibbous moon symbol",
        unicode: "1f316",
        char: "\u{1F316}"
      },
      {
        name: "last quarter moon symbol",
        unicode: "1f317",
        char: "\u{1F317}"
      },
      {
        name: "waning crescent moon symbol",
        unicode: "1f318",
        char: "\u{1F318}"
      },
      {
        name: "crescent moon",
        unicode: "1f319",
        char: "\u{1F319}"
      },
      {
        name: "new moon with face",
        unicode: "1f31a",
        char: "\u{1F31A}"
      },
      {
        name: "first quarter moon with face",
        unicode: "1f31b",
        char: "\u{1F31B}"
      },
      {
        name: "last quarter moon with face",
        unicode: "1f31c",
        char: "\u{1F31C}"
      },
      {
        name: "black sun with rays",
        unicode: "2600",
        char: "\u2600"
      },
      {
        name: "full moon with face",
        unicode: "1f31d",
        char: "\u{1F31D}"
      },
      {
        name: "sun with face",
        unicode: "1f31e",
        char: "\u{1F31E}"
      },
      {
        name: "white medium star",
        unicode: "2b50",
        char: "\u2B50"
      },
      {
        name: "glowing star",
        unicode: "1f31f",
        char: "\u{1F31F}"
      },
      {
        name: "cloud",
        unicode: "2601",
        char: "\u2601"
      },
      {
        name: "sun behind cloud",
        unicode: "26c5",
        char: "\u26C5"
      },
      {
        name: "thunder cloud and rain",
        unicode: "26c8",
        char: "\u26C8"
      },
      {
        name: "white sun with small cloud",
        unicode: "1f324",
        char: "\u{1F324}"
      },
      {
        name: "white sun behind cloud",
        unicode: "1f325",
        char: "\u{1F325}"
      },
      {
        name: "white sun behind cloud with rain",
        unicode: "1f326",
        char: "\u{1F326}"
      },
      {
        name: "cloud with rain",
        unicode: "1f327",
        char: "\u{1F327}"
      },
      {
        name: "cloud with snow",
        unicode: "1f328",
        char: "\u{1F328}"
      },
      {
        name: "cloud with lightning",
        unicode: "1f329",
        char: "\u{1F329}"
      },
      {
        name: "cloud with tornado",
        unicode: "1f32a",
        char: "\u{1F32A}"
      },
      {
        name: "fog",
        unicode: "1f32b",
        char: "\u{1F32B}"
      },
      {
        name: "wind blowing face",
        unicode: "1f32c",
        char: "\u{1F32C}"
      },
      {
        name: "umbrella",
        unicode: "2602",
        char: "\u2602"
      },
      {
        name: "umbrella with rain drops",
        unicode: "2614",
        char: "\u2614"
      },
      {
        name: "high voltage sign",
        unicode: "26a1",
        char: "\u26A1"
      },
      {
        name: "snowflake",
        unicode: "2744",
        char: "\u2744"
      },
      {
        name: "snowman",
        unicode: "2603",
        char: "\u2603"
      },
      {
        name: "snowman without snow",
        unicode: "26c4",
        char: "\u26C4"
      },
      {
        name: "comet",
        unicode: "2604",
        char: "\u2604"
      },
      {
        name: "fire",
        unicode: "1f525",
        char: "\u{1F525}"
      },
      {
        name: "droplet",
        unicode: "1f4a7",
        char: "\u{1F4A7}"
      },
      {
        name: "water wave",
        unicode: "1f30a",
        char: "\u{1F30A}"
      },
      {
        name: "jack-o-lantern",
        unicode: "1f383",
        char: "\u{1F383}"
      },
      {
        name: "christmas tree",
        unicode: "1f384",
        char: "\u{1F384}"
      },
      {
        name: "sparkles",
        unicode: "2728",
        char: "\u2728"
      },
      {
        name: "tanabata tree",
        unicode: "1f38b",
        char: "\u{1F38B}"
      },
      {
        name: "pine decoration",
        unicode: "1f38d",
        char: "\u{1F38D}"
      }
    ]
  },
  {
    name: "food",
    name_rus: "\u0435\u0434\u0430 \u0438 \u043D\u0430\u043F\u0438\u0442\u043A\u0438",
    emojis: [
      {
        name: "grapes",
        unicode: "1f347",
        char: "\u{1F347}"
      },
      {
        name: "melon",
        unicode: "1f348",
        char: "\u{1F348}"
      },
      {
        name: "watermelon",
        unicode: "1f349",
        char: "\u{1F349}"
      },
      {
        name: "tangerine",
        unicode: "1f34a",
        char: "\u{1F34A}"
      },
      {
        name: "lemon",
        unicode: "1f34b",
        char: "\u{1F34B}"
      },
      {
        name: "banana",
        unicode: "1f34c",
        char: "\u{1F34C}"
      },
      {
        name: "pineapple",
        unicode: "1f34d",
        char: "\u{1F34D}"
      },
      {
        name: "red apple",
        unicode: "1f34e",
        char: "\u{1F34E}"
      },
      {
        name: "green apple",
        unicode: "1f34f",
        char: "\u{1F34F}"
      },
      {
        name: "pear",
        unicode: "1f350",
        char: "\u{1F350}"
      },
      {
        name: "peach",
        unicode: "1f351",
        char: "\u{1F351}"
      },
      {
        name: "cherries",
        unicode: "1f352",
        char: "\u{1F352}"
      },
      {
        name: "strawberry",
        unicode: "1f353",
        char: "\u{1F353}"
      },
      {
        name: "kiwifruit",
        unicode: "1f95d",
        char: "\u{1F95D}"
      },
      {
        name: "tomato",
        unicode: "1f345",
        char: "\u{1F345}"
      },
      {
        name: "avocado",
        unicode: "1f951",
        char: "\u{1F951}"
      },
      {
        name: "aubergine",
        unicode: "1f346",
        char: "\u{1F346}"
      },
      {
        name: "potato",
        unicode: "1f954",
        char: "\u{1F954}"
      },
      {
        name: "carrot",
        unicode: "1f955",
        char: "\u{1F955}"
      },
      {
        name: "ear of maize",
        unicode: "1f33d",
        char: "\u{1F33D}"
      },
      {
        name: "hot pepper",
        unicode: "1f336",
        char: "\u{1F336}"
      },
      {
        name: "cucumber",
        unicode: "1f952",
        char: "\u{1F952}"
      },
      {
        name: "peanuts",
        unicode: "1f95c",
        char: "\u{1F95C}"
      },
      {
        name: "bread",
        unicode: "1f35e",
        char: "\u{1F35E}"
      },
      {
        name: "croissant",
        unicode: "1f950",
        char: "\u{1F950}"
      },
      {
        name: "baguette bread",
        unicode: "1f956",
        char: "\u{1F956}"
      },
      {
        name: "pancakes",
        unicode: "1f95e",
        char: "\u{1F95E}"
      },
      {
        name: "cheese wedge",
        unicode: "1f9c0",
        char: "\u{1F9C0}"
      },
      {
        name: "meat on bone",
        unicode: "1f356",
        char: "\u{1F356}"
      },
      {
        name: "poultry leg",
        unicode: "1f357",
        char: "\u{1F357}"
      },
      {
        name: "bacon",
        unicode: "1f953",
        char: "\u{1F953}"
      },
      {
        name: "hamburger",
        unicode: "1f354",
        char: "\u{1F354}"
      },
      {
        name: "french fries",
        unicode: "1f35f",
        char: "\u{1F35F}"
      },
      {
        name: "slice of pizza",
        unicode: "1f355",
        char: "\u{1F355}"
      },
      {
        name: "hot dog",
        unicode: "1f32d",
        char: "\u{1F32D}"
      },
      {
        name: "taco",
        unicode: "1f32e",
        char: "\u{1F32E}"
      },
      {
        name: "burrito",
        unicode: "1f32f",
        char: "\u{1F32F}"
      },
      {
        name: "stuffed flatbread",
        unicode: "1f959",
        char: "\u{1F959}"
      },
      {
        name: "egg",
        unicode: "1f95a",
        char: "\u{1F95A}"
      },
      {
        name: "cooking",
        unicode: "1f373",
        char: "\u{1F373}"
      },
      {
        name: "shallow pan of food",
        unicode: "1f958",
        char: "\u{1F958}"
      },
      {
        name: "pot of food",
        unicode: "1f372",
        char: "\u{1F372}"
      },
      {
        name: "green salad",
        unicode: "1f957",
        char: "\u{1F957}"
      },
      {
        name: "popcorn",
        unicode: "1f37f",
        char: "\u{1F37F}"
      },
      {
        name: "bento box",
        unicode: "1f371",
        char: "\u{1F371}"
      },
      {
        name: "rice cracker",
        unicode: "1f358",
        char: "\u{1F358}"
      },
      {
        name: "rice ball",
        unicode: "1f359",
        char: "\u{1F359}"
      },
      {
        name: "cooked rice",
        unicode: "1f35a",
        char: "\u{1F35A}"
      },
      {
        name: "curry and rice",
        unicode: "1f35b",
        char: "\u{1F35B}"
      },
      {
        name: "steaming bowl",
        unicode: "1f35c",
        char: "\u{1F35C}"
      },
      {
        name: "spaghetti",
        unicode: "1f35d",
        char: "\u{1F35D}"
      },
      {
        name: "roasted sweet potato",
        unicode: "1f360",
        char: "\u{1F360}"
      },
      {
        name: "oden",
        unicode: "1f362",
        char: "\u{1F362}"
      },
      {
        name: "sushi",
        unicode: "1f363",
        char: "\u{1F363}"
      },
      {
        name: "fried shrimp",
        unicode: "1f364",
        char: "\u{1F364}"
      },
      {
        name: "fish cake with swirl design",
        unicode: "1f365",
        char: "\u{1F365}"
      },
      {
        name: "dango",
        unicode: "1f361",
        char: "\u{1F361}"
      },
      {
        name: "soft ice cream",
        unicode: "1f366",
        char: "\u{1F366}"
      },
      {
        name: "shaved ice",
        unicode: "1f367",
        char: "\u{1F367}"
      },
      {
        name: "ice cream",
        unicode: "1f368",
        char: "\u{1F368}"
      },
      {
        name: "doughnut",
        unicode: "1f369",
        char: "\u{1F369}"
      },
      {
        name: "cookie",
        unicode: "1f36a",
        char: "\u{1F36A}"
      },
      {
        name: "birthday cake",
        unicode: "1f382",
        char: "\u{1F382}"
      },
      {
        name: "shortcake",
        unicode: "1f370",
        char: "\u{1F370}"
      },
      {
        name: "chocolate bar",
        unicode: "1f36b",
        char: "\u{1F36B}"
      },
      {
        name: "candy",
        unicode: "1f36c",
        char: "\u{1F36C}"
      },
      {
        name: "lollipop",
        unicode: "1f36d",
        char: "\u{1F36D}"
      },
      {
        name: "custard",
        unicode: "1f36e",
        char: "\u{1F36E}"
      },
      {
        name: "honey pot",
        unicode: "1f36f",
        char: "\u{1F36F}"
      },
      {
        name: "baby bottle",
        unicode: "1f37c",
        char: "\u{1F37C}"
      },
      {
        name: "glass of milk",
        unicode: "1f95b",
        char: "\u{1F95B}"
      },
      {
        name: "hot beverage",
        unicode: "2615",
        char: "\u2615"
      },
      {
        name: "teacup without handle",
        unicode: "1f375",
        char: "\u{1F375}"
      },
      {
        name: "sake bottle and cup",
        unicode: "1f376",
        char: "\u{1F376}"
      },
      {
        name: "bottle with popping cork",
        unicode: "1f37e",
        char: "\u{1F37E}"
      },
      {
        name: "wine glass",
        unicode: "1f377",
        char: "\u{1F377}"
      },
      {
        name: "cocktail glass",
        unicode: "1f378",
        char: "\u{1F378}"
      },
      {
        name: "tropical drink",
        unicode: "1f379",
        char: "\u{1F379}"
      },
      {
        name: "beer mug",
        unicode: "1f37a",
        char: "\u{1F37A}"
      },
      {
        name: "clinking beer mugs",
        unicode: "1f37b",
        char: "\u{1F37B}"
      },
      {
        name: "clinking glasses",
        unicode: "1f942",
        char: "\u{1F942}"
      },
      {
        name: "tumbler glass",
        unicode: "1f943",
        char: "\u{1F943}"
      },
      {
        name: "fork and knife with plate",
        unicode: "1f37d",
        char: "\u{1F37D}"
      },
      {
        name: "fork and knife",
        unicode: "1f374",
        char: "\u{1F374}"
      },
      {
        name: "spoon",
        unicode: "1f944",
        char: "\u{1F944}"
      }
    ]
  },
  {
    name: "activity",
    name_rus: "\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438",
    emojis: [
      {
        name: "alien monster",
        unicode: "1f47e",
        char: "\u{1F47E}"
      },
      {
        name: "man in business suit levitating",
        unicode: "1f574",
        char: "\u{1F574}"
      },
      {
        name: "fencer",
        unicode: "1f93a",
        char: "\u{1F93A}"
      },
      {
        name: "horse racing",
        unicode: "1f3c7",
        char: "\u{1F3C7}"
      },
      {
        name: "skier",
        unicode: "26f7",
        char: "\u26F7"
      },
      {
        name: "snowboarder",
        unicode: "1f3c2",
        char: "\u{1F3C2}"
      },
      {
        name: "golfer",
        unicode: "1f3cc",
        char: "\u{1F3CC}"
      },
      {
        name: "surfer",
        unicode: "1f3c4",
        char: "\u{1F3C4}"
      },
      {
        name: "rowboat",
        unicode: "1f6a3",
        char: "\u{1F6A3}"
      },
      {
        name: "swimmer",
        unicode: "1f3ca",
        char: "\u{1F3CA}"
      },
      {
        name: "person with ball",
        unicode: "26f9",
        char: "\u26F9"
      },
      {
        name: "weight lifter",
        unicode: "1f3cb",
        char: "\u{1F3CB}"
      },
      {
        name: "bicyclist",
        unicode: "1f6b4",
        char: "\u{1F6B4}"
      },
      {
        name: "mountain bicyclist",
        unicode: "1f6b5",
        char: "\u{1F6B5}"
      },
      {
        name: "person doing cartwheel",
        unicode: "1f938",
        char: "\u{1F938}"
      },
      {
        name: "wrestlers",
        unicode: "1f93c",
        char: "\u{1F93C}"
      },
      {
        name: "water polo",
        unicode: "1f93d",
        char: "\u{1F93D}"
      },
      {
        name: "handball",
        unicode: "1f93e",
        char: "\u{1F93E}"
      },
      {
        name: "juggling",
        unicode: "1f939",
        char: "\u{1F939}"
      },
      {
        name: "circus tent",
        unicode: "1f3aa",
        char: "\u{1F3AA}"
      },
      {
        name: "performing arts",
        unicode: "1f3ad",
        char: "\u{1F3AD}"
      },
      {
        name: "artist palette",
        unicode: "1f3a8",
        char: "\u{1F3A8}"
      },
      {
        name: "slot machine",
        unicode: "1f3b0",
        char: "\u{1F3B0}"
      },
      {
        name: "bath",
        unicode: "1f6c0",
        char: "\u{1F6C0}"
      },
      {
        name: "reminder ribbon",
        unicode: "1f397",
        char: "\u{1F397}"
      },
      {
        name: "admission tickets",
        unicode: "1f39f",
        char: "\u{1F39F}"
      },
      {
        name: "ticket",
        unicode: "1f3ab",
        char: "\u{1F3AB}"
      },
      {
        name: "military medal",
        unicode: "1f396",
        char: "\u{1F396}"
      },
      {
        name: "trophy",
        unicode: "1f3c6",
        char: "\u{1F3C6}"
      },
      {
        name: "sports medal",
        unicode: "1f3c5",
        char: "\u{1F3C5}"
      },
      {
        name: "first place medal",
        unicode: "1f947",
        char: "\u{1F947}"
      },
      {
        name: "second place medal",
        unicode: "1f948",
        char: "\u{1F948}"
      },
      {
        name: "third place medal",
        unicode: "1f949",
        char: "\u{1F949}"
      },
      {
        name: "soccer ball",
        unicode: "26bd",
        char: "\u26BD"
      },
      {
        name: "baseball",
        unicode: "26be",
        char: "\u26BE"
      },
      {
        name: "basketball and hoop",
        unicode: "1f3c0",
        char: "\u{1F3C0}"
      },
      {
        name: "volleyball",
        unicode: "1f3d0",
        char: "\u{1F3D0}"
      },
      {
        name: "american football",
        unicode: "1f3c8",
        char: "\u{1F3C8}"
      },
      {
        name: "rugby football",
        unicode: "1f3c9",
        char: "\u{1F3C9}"
      },
      {
        name: "tennis racquet and ball",
        unicode: "1f3be",
        char: "\u{1F3BE}"
      },
      {
        name: "billiards",
        unicode: "1f3b1",
        char: "\u{1F3B1}"
      },
      {
        name: "bowling",
        unicode: "1f3b3",
        char: "\u{1F3B3}"
      },
      {
        name: "cricket bat and ball",
        unicode: "1f3cf",
        char: "\u{1F3CF}"
      },
      {
        name: "field hockey stick and ball",
        unicode: "1f3d1",
        char: "\u{1F3D1}"
      },
      {
        name: "ice hockey stick and puck",
        unicode: "1f3d2",
        char: "\u{1F3D2}"
      },
      {
        name: "table tennis paddle and ball",
        unicode: "1f3d3",
        char: "\u{1F3D3}"
      },
      {
        name: "badminton racquet",
        unicode: "1f3f8",
        char: "\u{1F3F8}"
      },
      {
        name: "boxing glove",
        unicode: "1f94a",
        char: "\u{1F94A}"
      },
      {
        name: "martial arts uniform",
        unicode: "1f94b",
        char: "\u{1F94B}"
      },
      {
        name: "goal net",
        unicode: "1f945",
        char: "\u{1F945}"
      },
      {
        name: "direct hit",
        unicode: "1f3af",
        char: "\u{1F3AF}"
      },
      {
        name: "flag in hole",
        unicode: "26f3",
        char: "\u26F3"
      },
      {
        name: "ice skate",
        unicode: "26f8",
        char: "\u26F8"
      },
      {
        name: "fishing pole and fish",
        unicode: "1f3a3",
        char: "\u{1F3A3}"
      },
      {
        name: "running shirt with sash",
        unicode: "1f3bd",
        char: "\u{1F3BD}"
      },
      {
        name: "ski and ski boot",
        unicode: "1f3bf",
        char: "\u{1F3BF}"
      },
      {
        name: "video game",
        unicode: "1f3ae",
        char: "\u{1F3AE}"
      },
      {
        name: "game die",
        unicode: "1f3b2",
        char: "\u{1F3B2}"
      },
      {
        name: "musical score",
        unicode: "1f3bc",
        char: "\u{1F3BC}"
      },
      {
        name: "microphone",
        unicode: "1f3a4",
        char: "\u{1F3A4}"
      },
      {
        name: "headphone",
        unicode: "1f3a7",
        char: "\u{1F3A7}"
      },
      {
        name: "saxophone",
        unicode: "1f3b7",
        char: "\u{1F3B7}"
      },
      {
        name: "guitar",
        unicode: "1f3b8",
        char: "\u{1F3B8}"
      },
      {
        name: "musical keyboard",
        unicode: "1f3b9",
        char: "\u{1F3B9}"
      },
      {
        name: "trumpet",
        unicode: "1f3ba",
        char: "\u{1F3BA}"
      },
      {
        name: "violin",
        unicode: "1f3bb",
        char: "\u{1F3BB}"
      },
      {
        name: "drum with drumsticks",
        unicode: "1f941",
        char: "\u{1F941}"
      },
      {
        name: "clapper board",
        unicode: "1f3ac",
        char: "\u{1F3AC}"
      },
      {
        name: "bow and arrow",
        unicode: "1f3f9",
        char: "\u{1F3F9}"
      }
    ]
  },
  {
    name: "places",
    name_rus: "\u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F \u0438 \u043C\u0435\u0441\u0442\u0430",
    emojis: [
      {
        name: "racing car",
        unicode: "1f3ce",
        char: "\u{1F3CE}"
      },
      {
        name: "racing motorcycle",
        unicode: "1f3cd",
        char: "\u{1F3CD}"
      },
      {
        name: "silhouette of japan",
        unicode: "1f5fe",
        char: "\u{1F5FE}"
      },
      {
        name: "snow capped mountain",
        unicode: "1f3d4",
        char: "\u{1F3D4}"
      },
      {
        name: "mountain",
        unicode: "26f0",
        char: "\u26F0"
      },
      {
        name: "volcano",
        unicode: "1f30b",
        char: "\u{1F30B}"
      },
      {
        name: "mount fuji",
        unicode: "1f5fb",
        char: "\u{1F5FB}"
      },
      {
        name: "camping",
        unicode: "1f3d5",
        char: "\u{1F3D5}"
      },
      {
        name: "beach with umbrella",
        unicode: "1f3d6",
        char: "\u{1F3D6}"
      },
      {
        name: "desert",
        unicode: "1f3dc",
        char: "\u{1F3DC}"
      },
      {
        name: "desert island",
        unicode: "1f3dd",
        char: "\u{1F3DD}"
      },
      {
        name: "national park",
        unicode: "1f3de",
        char: "\u{1F3DE}"
      },
      {
        name: "stadium",
        unicode: "1f3df",
        char: "\u{1F3DF}"
      },
      {
        name: "classical building",
        unicode: "1f3db",
        char: "\u{1F3DB}"
      },
      {
        name: "building construction",
        unicode: "1f3d7",
        char: "\u{1F3D7}"
      },
      {
        name: "house buildings",
        unicode: "1f3d8",
        char: "\u{1F3D8}"
      },
      {
        name: "cityscape",
        unicode: "1f3d9",
        char: "\u{1F3D9}"
      },
      {
        name: "derelict house building",
        unicode: "1f3da",
        char: "\u{1F3DA}"
      },
      {
        name: "house building",
        unicode: "1f3e0",
        char: "\u{1F3E0}"
      },
      {
        name: "house with garden",
        unicode: "1f3e1",
        char: "\u{1F3E1}"
      },
      {
        name: "office building",
        unicode: "1f3e2",
        char: "\u{1F3E2}"
      },
      {
        name: "japanese post office",
        unicode: "1f3e3",
        char: "\u{1F3E3}"
      },
      {
        name: "european post office",
        unicode: "1f3e4",
        char: "\u{1F3E4}"
      },
      {
        name: "hospital",
        unicode: "1f3e5",
        char: "\u{1F3E5}"
      },
      {
        name: "bank",
        unicode: "1f3e6",
        char: "\u{1F3E6}"
      },
      {
        name: "hotel",
        unicode: "1f3e8",
        char: "\u{1F3E8}"
      },
      {
        name: "love hotel",
        unicode: "1f3e9",
        char: "\u{1F3E9}"
      },
      {
        name: "convenience store",
        unicode: "1f3ea",
        char: "\u{1F3EA}"
      },
      {
        name: "school",
        unicode: "1f3eb",
        char: "\u{1F3EB}"
      },
      {
        name: "department store",
        unicode: "1f3ec",
        char: "\u{1F3EC}"
      },
      {
        name: "factory",
        unicode: "1f3ed",
        char: "\u{1F3ED}"
      },
      {
        name: "japanese castle",
        unicode: "1f3ef",
        char: "\u{1F3EF}"
      },
      {
        name: "european castle",
        unicode: "1f3f0",
        char: "\u{1F3F0}"
      },
      {
        name: "wedding",
        unicode: "1f492",
        char: "\u{1F492}"
      },
      {
        name: "tokyo tower",
        unicode: "1f5fc",
        char: "\u{1F5FC}"
      },
      {
        name: "statue of liberty",
        unicode: "1f5fd",
        char: "\u{1F5FD}"
      },
      {
        name: "church",
        unicode: "26ea",
        char: "\u26EA"
      },
      {
        name: "mosque",
        unicode: "1f54c",
        char: "\u{1F54C}"
      },
      {
        name: "synagogue",
        unicode: "1f54d",
        char: "\u{1F54D}"
      },
      {
        name: "shinto shrine",
        unicode: "26e9",
        char: "\u26E9"
      },
      {
        name: "kaaba",
        unicode: "1f54b",
        char: "\u{1F54B}"
      },
      {
        name: "fountain",
        unicode: "26f2",
        char: "\u26F2"
      },
      {
        name: "tent",
        unicode: "26fa",
        char: "\u26FA"
      },
      {
        name: "foggy",
        unicode: "1f301",
        char: "\u{1F301}"
      },
      {
        name: "night with stars",
        unicode: "1f303",
        char: "\u{1F303}"
      },
      {
        name: "sunrise over mountains",
        unicode: "1f304",
        char: "\u{1F304}"
      },
      {
        name: "sunrise",
        unicode: "1f305",
        char: "\u{1F305}"
      },
      {
        name: "cityscape at dusk",
        unicode: "1f306",
        char: "\u{1F306}"
      },
      {
        name: "sunset over buildings",
        unicode: "1f307",
        char: "\u{1F307}"
      },
      {
        name: "bridge at night",
        unicode: "1f309",
        char: "\u{1F309}"
      },
      {
        name: "milky way",
        unicode: "1f30c",
        char: "\u{1F30C}"
      },
      {
        name: "carousel horse",
        unicode: "1f3a0",
        char: "\u{1F3A0}"
      },
      {
        name: "ferris wheel",
        unicode: "1f3a1",
        char: "\u{1F3A1}"
      },
      {
        name: "roller coaster",
        unicode: "1f3a2",
        char: "\u{1F3A2}"
      },
      {
        name: "steam locomotive",
        unicode: "1f682",
        char: "\u{1F682}"
      },
      {
        name: "railway car",
        unicode: "1f683",
        char: "\u{1F683}"
      },
      {
        name: "high-speed train",
        unicode: "1f684",
        char: "\u{1F684}"
      },
      {
        name: "high-speed train with bullet nose",
        unicode: "1f685",
        char: "\u{1F685}"
      },
      {
        name: "train",
        unicode: "1f686",
        char: "\u{1F686}"
      },
      {
        name: "metro",
        unicode: "1f687",
        char: "\u{1F687}"
      },
      {
        name: "light rail",
        unicode: "1f688",
        char: "\u{1F688}"
      },
      {
        name: "station",
        unicode: "1f689",
        char: "\u{1F689}"
      },
      {
        name: "tram",
        unicode: "1f68a",
        char: "\u{1F68A}"
      },
      {
        name: "monorail",
        unicode: "1f69d",
        char: "\u{1F69D}"
      },
      {
        name: "mountain railway",
        unicode: "1f69e",
        char: "\u{1F69E}"
      },
      {
        name: "tram car",
        unicode: "1f68b",
        char: "\u{1F68B}"
      },
      {
        name: "bus",
        unicode: "1f68c",
        char: "\u{1F68C}"
      },
      {
        name: "oncoming bus",
        unicode: "1f68d",
        char: "\u{1F68D}"
      },
      {
        name: "trolleybus",
        unicode: "1f68e",
        char: "\u{1F68E}"
      },
      {
        name: "minibus",
        unicode: "1f690",
        char: "\u{1F690}"
      },
      {
        name: "ambulance",
        unicode: "1f691",
        char: "\u{1F691}"
      },
      {
        name: "fire engine",
        unicode: "1f692",
        char: "\u{1F692}"
      },
      {
        name: "police car",
        unicode: "1f693",
        char: "\u{1F693}"
      },
      {
        name: "oncoming police car",
        unicode: "1f694",
        char: "\u{1F694}"
      },
      {
        name: "taxi",
        unicode: "1f695",
        char: "\u{1F695}"
      },
      {
        name: "oncoming taxi",
        unicode: "1f696",
        char: "\u{1F696}"
      },
      {
        name: "automobile",
        unicode: "1f697",
        char: "\u{1F697}"
      },
      {
        name: "oncoming automobile",
        unicode: "1f698",
        char: "\u{1F698}"
      },
      {
        name: "recreational vehicle",
        unicode: "1f699",
        char: "\u{1F699}"
      },
      {
        name: "delivery truck",
        unicode: "1f69a",
        char: "\u{1F69A}"
      },
      {
        name: "articulated lorry",
        unicode: "1f69b",
        char: "\u{1F69B}"
      },
      {
        name: "tractor",
        unicode: "1f69c",
        char: "\u{1F69C}"
      },
      {
        name: "bicycle",
        unicode: "1f6b2",
        char: "\u{1F6B2}"
      },
      {
        name: "scooter",
        unicode: "1f6f4",
        char: "\u{1F6F4}"
      },
      {
        name: "motor scooter",
        unicode: "1f6f5",
        char: "\u{1F6F5}"
      },
      {
        name: "bus stop",
        unicode: "1f68f",
        char: "\u{1F68F}"
      },
      {
        name: "motorway",
        unicode: "1f6e3",
        char: "\u{1F6E3}"
      },
      {
        name: "railway track",
        unicode: "1f6e4",
        char: "\u{1F6E4}"
      },
      {
        name: "fuel pump",
        unicode: "26fd",
        char: "\u26FD"
      },
      {
        name: "police cars revolving light",
        unicode: "1f6a8",
        char: "\u{1F6A8}"
      },
      {
        name: "horizontal traffic light",
        unicode: "1f6a5",
        char: "\u{1F6A5}"
      },
      {
        name: "vertical traffic light",
        unicode: "1f6a6",
        char: "\u{1F6A6}"
      },
      {
        name: "construction sign",
        unicode: "1f6a7",
        char: "\u{1F6A7}"
      },
      {
        name: "anchor",
        unicode: "2693",
        char: "\u2693"
      },
      {
        name: "sailboat",
        unicode: "26f5",
        char: "\u26F5"
      },
      {
        name: "canoe",
        unicode: "1f6f6",
        char: "\u{1F6F6}"
      },
      {
        name: "speedboat",
        unicode: "1f6a4",
        char: "\u{1F6A4}"
      },
      {
        name: "passenger ship",
        unicode: "1f6f3",
        char: "\u{1F6F3}"
      },
      {
        name: "ferry",
        unicode: "26f4",
        char: "\u26F4"
      },
      {
        name: "motorboat",
        unicode: "1f6e5",
        char: "\u{1F6E5}"
      },
      {
        name: "ship",
        unicode: "1f6a2",
        char: "\u{1F6A2}"
      },
      {
        name: "airplane",
        unicode: "2708",
        char: "\u2708"
      },
      {
        name: "small airplane",
        unicode: "1f6e9",
        char: "\u{1F6E9}"
      },
      {
        name: "airplane departure",
        unicode: "1f6eb",
        char: "\u{1F6EB}"
      },
      {
        name: "airplane arriving",
        unicode: "1f6ec",
        char: "\u{1F6EC}"
      },
      {
        name: "seat",
        unicode: "1f4ba",
        char: "\u{1F4BA}"
      },
      {
        name: "helicopter",
        unicode: "1f681",
        char: "\u{1F681}"
      },
      {
        name: "suspension railway",
        unicode: "1f69f",
        char: "\u{1F69F}"
      },
      {
        name: "mountain cableway",
        unicode: "1f6a0",
        char: "\u{1F6A0}"
      },
      {
        name: "aerial tramway",
        unicode: "1f6a1",
        char: "\u{1F6A1}"
      },
      {
        name: "rocket",
        unicode: "1f680",
        char: "\u{1F680}"
      },
      {
        name: "satellite",
        unicode: "1f6f0",
        char: "\u{1F6F0}"
      },
      {
        name: "shooting star",
        unicode: "1f320",
        char: "\u{1F320}"
      },
      {
        name: "rainbow",
        unicode: "1f308",
        char: "\u{1F308}"
      },
      {
        name: "fireworks",
        unicode: "1f386",
        char: "\u{1F386}"
      },
      {
        name: "firework sparkler",
        unicode: "1f387",
        char: "\u{1F387}"
      },
      {
        name: "moon viewing ceremony",
        unicode: "1f391",
        char: "\u{1F391}"
      },
      {
        name: "chequered flag",
        unicode: "1f3c1",
        char: "\u{1F3C1}"
      }
    ]
  },
  {
    name: "objects",
    name_rus: "\u043E\u0431\u044A\u0435\u043A\u0442\u044B",
    emojis: [
      {
        name: "skull and crossbones",
        unicode: "2620",
        char: "\u2620"
      },
      {
        name: "love letter",
        unicode: "1f48c",
        char: "\u{1F48C}"
      },
      {
        name: "bomb",
        unicode: "1f4a3",
        char: "\u{1F4A3}"
      },
      {
        name: "hole",
        unicode: "1f573",
        char: "\u{1F573}"
      },
      {
        name: "shopping bags",
        unicode: "1f6cd",
        char: "\u{1F6CD}"
      },
      {
        name: "prayer beads",
        unicode: "1f4ff",
        char: "\u{1F4FF}"
      },
      {
        name: "gem stone",
        unicode: "1f48e",
        char: "\u{1F48E}"
      },
      {
        name: "hocho",
        unicode: "1f52a",
        char: "\u{1F52A}"
      },
      {
        name: "amphora",
        unicode: "1f3fa",
        char: "\u{1F3FA}"
      },
      {
        name: "world map",
        unicode: "1f5fa",
        char: "\u{1F5FA}"
      },
      {
        name: "barber pole",
        unicode: "1f488",
        char: "\u{1F488}"
      },
      {
        name: "frame with picture",
        unicode: "1f5bc",
        char: "\u{1F5BC}"
      },
      {
        name: "bellhop bell",
        unicode: "1f6ce",
        char: "\u{1F6CE}"
      },
      {
        name: "door",
        unicode: "1f6aa",
        char: "\u{1F6AA}"
      },
      {
        name: "sleeping accommodation",
        unicode: "1f6cc",
        char: "\u{1F6CC}"
      },
      {
        name: "bed",
        unicode: "1f6cf",
        char: "\u{1F6CF}"
      },
      {
        name: "couch and lamp",
        unicode: "1f6cb",
        char: "\u{1F6CB}"
      },
      {
        name: "toilet",
        unicode: "1f6bd",
        char: "\u{1F6BD}"
      },
      {
        name: "shower",
        unicode: "1f6bf",
        char: "\u{1F6BF}"
      },
      {
        name: "bathtub",
        unicode: "1f6c1",
        char: "\u{1F6C1}"
      },
      {
        name: "hourglass",
        unicode: "231b",
        char: "\u231B"
      },
      {
        name: "hourglass with flowing sand",
        unicode: "23f3",
        char: "\u23F3"
      },
      {
        name: "watch",
        unicode: "231a",
        char: "\u231A"
      },
      {
        name: "alarm clock",
        unicode: "23f0",
        char: "\u23F0"
      },
      {
        name: "stopwatch",
        unicode: "23f1",
        char: "\u23F1"
      },
      {
        name: "timer clock",
        unicode: "23f2",
        char: "\u23F2"
      },
      {
        name: "mantlepiece clock",
        unicode: "1f570",
        char: "\u{1F570}"
      },
      {
        name: "thermometer",
        unicode: "1f321",
        char: "\u{1F321}"
      },
      {
        name: "umbrella on ground",
        unicode: "26f1",
        char: "\u26F1"
      },
      {
        name: "balloon",
        unicode: "1f388",
        char: "\u{1F388}"
      },
      {
        name: "party popper",
        unicode: "1f389",
        char: "\u{1F389}"
      },
      {
        name: "confetti ball",
        unicode: "1f38a",
        char: "\u{1F38A}"
      },
      {
        name: "japanese dolls",
        unicode: "1f38e",
        char: "\u{1F38E}"
      },
      {
        name: "carp streamer",
        unicode: "1f38f",
        char: "\u{1F38F}"
      },
      {
        name: "wind chime",
        unicode: "1f390",
        char: "\u{1F390}"
      },
      {
        name: "ribbon",
        unicode: "1f380",
        char: "\u{1F380}"
      },
      {
        name: "wrapped present",
        unicode: "1f381",
        char: "\u{1F381}"
      },
      {
        name: "joystick",
        unicode: "1f579",
        char: "\u{1F579}"
      },
      {
        name: "postal horn",
        unicode: "1f4ef",
        char: "\u{1F4EF}"
      },
      {
        name: "studio microphone",
        unicode: "1f399",
        char: "\u{1F399}"
      },
      {
        name: "level slider",
        unicode: "1f39a",
        char: "\u{1F39A}"
      },
      {
        name: "control knobs",
        unicode: "1f39b",
        char: "\u{1F39B}"
      },
      {
        name: "radio",
        unicode: "1f4fb",
        char: "\u{1F4FB}"
      },
      {
        name: "mobile phone",
        unicode: "1f4f1",
        char: "\u{1F4F1}"
      },
      {
        name: "mobile phone with rightwards arrow at left",
        unicode: "1f4f2",
        char: "\u{1F4F2}"
      },
      {
        name: "black telephone",
        unicode: "260e",
        char: "\u260E"
      },
      {
        name: "telephone receiver",
        unicode: "1f4de",
        char: "\u{1F4DE}"
      },
      {
        name: "pager",
        unicode: "1f4df",
        char: "\u{1F4DF}"
      },
      {
        name: "fax machine",
        unicode: "1f4e0",
        char: "\u{1F4E0}"
      },
      {
        name: "battery",
        unicode: "1f50b",
        char: "\u{1F50B}"
      },
      {
        name: "electric plug",
        unicode: "1f50c",
        char: "\u{1F50C}"
      },
      {
        name: "personal computer",
        unicode: "1f4bb",
        char: "\u{1F4BB}"
      },
      {
        name: "desktop computer",
        unicode: "1f5a5",
        char: "\u{1F5A5}"
      },
      {
        name: "printer",
        unicode: "1f5a8",
        char: "\u{1F5A8}"
      },
      {
        name: "keyboard",
        unicode: "2328",
        char: "\u2328"
      },
      {
        name: "three button mouse",
        unicode: "1f5b1",
        char: "\u{1F5B1}"
      },
      {
        name: "trackball",
        unicode: "1f5b2",
        char: "\u{1F5B2}"
      },
      {
        name: "minidisc",
        unicode: "1f4bd",
        char: "\u{1F4BD}"
      },
      {
        name: "floppy disk",
        unicode: "1f4be",
        char: "\u{1F4BE}"
      },
      {
        name: "optical disc",
        unicode: "1f4bf",
        char: "\u{1F4BF}"
      },
      {
        name: "dvd",
        unicode: "1f4c0",
        char: "\u{1F4C0}"
      },
      {
        name: "movie camera",
        unicode: "1f3a5",
        char: "\u{1F3A5}"
      },
      {
        name: "film frames",
        unicode: "1f39e",
        char: "\u{1F39E}"
      },
      {
        name: "film projector",
        unicode: "1f4fd",
        char: "\u{1F4FD}"
      },
      {
        name: "television",
        unicode: "1f4fa",
        char: "\u{1F4FA}"
      },
      {
        name: "camera",
        unicode: "1f4f7",
        char: "\u{1F4F7}"
      },
      {
        name: "camera with flash",
        unicode: "1f4f8",
        char: "\u{1F4F8}"
      },
      {
        name: "video camera",
        unicode: "1f4f9",
        char: "\u{1F4F9}"
      },
      {
        name: "videocassette",
        unicode: "1f4fc",
        char: "\u{1F4FC}"
      },
      {
        name: "left-pointing magnifying glass",
        unicode: "1f50d",
        char: "\u{1F50D}"
      },
      {
        name: "right-pointing magnifying glass",
        unicode: "1f50e",
        char: "\u{1F50E}"
      },
      {
        name: "microscope",
        unicode: "1f52c",
        char: "\u{1F52C}"
      },
      {
        name: "telescope",
        unicode: "1f52d",
        char: "\u{1F52D}"
      },
      {
        name: "satellite antenna",
        unicode: "1f4e1",
        char: "\u{1F4E1}"
      },
      {
        name: "candle",
        unicode: "1f56f",
        char: "\u{1F56F}"
      },
      {
        name: "electric light bulb",
        unicode: "1f4a1",
        char: "\u{1F4A1}"
      },
      {
        name: "electric torch",
        unicode: "1f526",
        char: "\u{1F526}"
      },
      {
        name: "izakaya lantern",
        unicode: "1f3ee",
        char: "\u{1F3EE}"
      },
      {
        name: "notebook with decorative cover",
        unicode: "1f4d4",
        char: "\u{1F4D4}"
      },
      {
        name: "closed book",
        unicode: "1f4d5",
        char: "\u{1F4D5}"
      },
      {
        name: "open book",
        unicode: "1f4d6",
        char: "\u{1F4D6}"
      },
      {
        name: "green book",
        unicode: "1f4d7",
        char: "\u{1F4D7}"
      },
      {
        name: "blue book",
        unicode: "1f4d8",
        char: "\u{1F4D8}"
      },
      {
        name: "orange book",
        unicode: "1f4d9",
        char: "\u{1F4D9}"
      },
      {
        name: "books",
        unicode: "1f4da",
        char: "\u{1F4DA}"
      },
      {
        name: "notebook",
        unicode: "1f4d3",
        char: "\u{1F4D3}"
      },
      {
        name: "ledger",
        unicode: "1f4d2",
        char: "\u{1F4D2}"
      },
      {
        name: "page with curl",
        unicode: "1f4c3",
        char: "\u{1F4C3}"
      },
      {
        name: "scroll",
        unicode: "1f4dc",
        char: "\u{1F4DC}"
      },
      {
        name: "page facing up",
        unicode: "1f4c4",
        char: "\u{1F4C4}"
      },
      {
        name: "newspaper",
        unicode: "1f4f0",
        char: "\u{1F4F0}"
      },
      {
        name: "rolled-up newspaper",
        unicode: "1f5de",
        char: "\u{1F5DE}"
      },
      {
        name: "bookmark tabs",
        unicode: "1f4d1",
        char: "\u{1F4D1}"
      },
      {
        name: "bookmark",
        unicode: "1f516",
        char: "\u{1F516}"
      },
      {
        name: "label",
        unicode: "1f3f7",
        char: "\u{1F3F7}"
      },
      {
        name: "money bag",
        unicode: "1f4b0",
        char: "\u{1F4B0}"
      },
      {
        name: "banknote with yen sign",
        unicode: "1f4b4",
        char: "\u{1F4B4}"
      },
      {
        name: "banknote with dollar sign",
        unicode: "1f4b5",
        char: "\u{1F4B5}"
      },
      {
        name: "banknote with euro sign",
        unicode: "1f4b6",
        char: "\u{1F4B6}"
      },
      {
        name: "banknote with pound sign",
        unicode: "1f4b7",
        char: "\u{1F4B7}"
      },
      {
        name: "money with wings",
        unicode: "1f4b8",
        char: "\u{1F4B8}"
      },
      {
        name: "credit card",
        unicode: "1f4b3",
        char: "\u{1F4B3}"
      },
      {
        name: "envelope",
        unicode: "2709",
        char: "\u2709"
      },
      {
        name: "e-mail symbol",
        unicode: "1f4e7",
        char: "\u{1F4E7}"
      },
      {
        name: "incoming envelope",
        unicode: "1f4e8",
        char: "\u{1F4E8}"
      },
      {
        name: "envelope with downwards arrow above",
        unicode: "1f4e9",
        char: "\u{1F4E9}"
      },
      {
        name: "outbox tray",
        unicode: "1f4e4",
        char: "\u{1F4E4}"
      },
      {
        name: "inbox tray",
        unicode: "1f4e5",
        char: "\u{1F4E5}"
      },
      {
        name: "package",
        unicode: "1f4e6",
        char: "\u{1F4E6}"
      },
      {
        name: "closed mailbox with raised flag",
        unicode: "1f4eb",
        char: "\u{1F4EB}"
      },
      {
        name: "closed mailbox with lowered flag",
        unicode: "1f4ea",
        char: "\u{1F4EA}"
      },
      {
        name: "open mailbox with raised flag",
        unicode: "1f4ec",
        char: "\u{1F4EC}"
      },
      {
        name: "open mailbox with lowered flag",
        unicode: "1f4ed",
        char: "\u{1F4ED}"
      },
      {
        name: "postbox",
        unicode: "1f4ee",
        char: "\u{1F4EE}"
      },
      {
        name: "ballot box with ballot",
        unicode: "1f5f3",
        char: "\u{1F5F3}"
      },
      {
        name: "pencil",
        unicode: "270f",
        char: "\u270F"
      },
      {
        name: "black nib",
        unicode: "2712",
        char: "\u2712"
      },
      {
        name: "lower left fountain pen",
        unicode: "1f58b",
        char: "\u{1F58B}"
      },
      {
        name: "lower left ballpoint pen",
        unicode: "1f58a",
        char: "\u{1F58A}"
      },
      {
        name: "lower left paintbrush",
        unicode: "1f58c",
        char: "\u{1F58C}"
      },
      {
        name: "lower left crayon",
        unicode: "1f58d",
        char: "\u{1F58D}"
      },
      {
        name: "memo",
        unicode: "1f4dd",
        char: "\u{1F4DD}"
      },
      {
        name: "file folder",
        unicode: "1f4c1",
        char: "\u{1F4C1}"
      },
      {
        name: "open file folder",
        unicode: "1f4c2",
        char: "\u{1F4C2}"
      },
      {
        name: "card index dividers",
        unicode: "1f5c2",
        char: "\u{1F5C2}"
      },
      {
        name: "calendar",
        unicode: "1f4c5",
        char: "\u{1F4C5}"
      },
      {
        name: "tear-off calendar",
        unicode: "1f4c6",
        char: "\u{1F4C6}"
      },
      {
        name: "spiral note pad",
        unicode: "1f5d2",
        char: "\u{1F5D2}"
      },
      {
        name: "spiral calendar pad",
        unicode: "1f5d3",
        char: "\u{1F5D3}"
      },
      {
        name: "card index",
        unicode: "1f4c7",
        char: "\u{1F4C7}"
      },
      {
        name: "chart with upwards trend",
        unicode: "1f4c8",
        char: "\u{1F4C8}"
      },
      {
        name: "chart with downwards trend",
        unicode: "1f4c9",
        char: "\u{1F4C9}"
      },
      {
        name: "bar chart",
        unicode: "1f4ca",
        char: "\u{1F4CA}"
      },
      {
        name: "clipboard",
        unicode: "1f4cb",
        char: "\u{1F4CB}"
      },
      {
        name: "pushpin",
        unicode: "1f4cc",
        char: "\u{1F4CC}"
      },
      {
        name: "round pushpin",
        unicode: "1f4cd",
        char: "\u{1F4CD}"
      },
      {
        name: "paperclip",
        unicode: "1f4ce",
        char: "\u{1F4CE}"
      },
      {
        name: "linked paperclips",
        unicode: "1f587",
        char: "\u{1F587}"
      },
      {
        name: "straight ruler",
        unicode: "1f4cf",
        char: "\u{1F4CF}"
      },
      {
        name: "triangular ruler",
        unicode: "1f4d0",
        char: "\u{1F4D0}"
      },
      {
        name: "black scissors",
        unicode: "2702",
        char: "\u2702"
      },
      {
        name: "card file box",
        unicode: "1f5c3",
        char: "\u{1F5C3}"
      },
      {
        name: "file cabinet",
        unicode: "1f5c4",
        char: "\u{1F5C4}"
      },
      {
        name: "wastebasket",
        unicode: "1f5d1",
        char: "\u{1F5D1}"
      },
      {
        name: "lock",
        unicode: "1f512",
        char: "\u{1F512}"
      },
      {
        name: "open lock",
        unicode: "1f513",
        char: "\u{1F513}"
      },
      {
        name: "lock with ink pen",
        unicode: "1f50f",
        char: "\u{1F50F}"
      },
      {
        name: "closed lock with key",
        unicode: "1f510",
        char: "\u{1F510}"
      },
      {
        name: "key",
        unicode: "1f511",
        char: "\u{1F511}"
      },
      {
        name: "old key",
        unicode: "1f5dd",
        char: "\u{1F5DD}"
      },
      {
        name: "hammer",
        unicode: "1f528",
        char: "\u{1F528}"
      },
      {
        name: "pick",
        unicode: "26cf",
        char: "\u26CF"
      },
      {
        name: "hammer and pick",
        unicode: "2692",
        char: "\u2692"
      },
      {
        name: "hammer and wrench",
        unicode: "1f6e0",
        char: "\u{1F6E0}"
      },
      {
        name: "dagger knife",
        unicode: "1f5e1",
        char: "\u{1F5E1}"
      },
      {
        name: "crossed swords",
        unicode: "2694",
        char: "\u2694"
      },
      {
        name: "pistol",
        unicode: "1f52b",
        char: "\u{1F52B}"
      },
      {
        name: "shield",
        unicode: "1f6e1",
        char: "\u{1F6E1}"
      },
      {
        name: "wrench",
        unicode: "1f527",
        char: "\u{1F527}"
      },
      {
        name: "nut and bolt",
        unicode: "1f529",
        char: "\u{1F529}"
      },
      {
        name: "gear",
        unicode: "2699",
        char: "\u2699"
      },
      {
        name: "compression",
        unicode: "1f5dc",
        char: "\u{1F5DC}"
      },
      {
        name: "alembic",
        unicode: "2697",
        char: "\u2697"
      },
      {
        name: "scales",
        unicode: "2696",
        char: "\u2696"
      },
      {
        name: "link symbol",
        unicode: "1f517",
        char: "\u{1F517}"
      },
      {
        name: "chains",
        unicode: "26d3",
        char: "\u26D3"
      },
      {
        name: "syringe",
        unicode: "1f489",
        char: "\u{1F489}"
      },
      {
        name: "pill",
        unicode: "1f48a",
        char: "\u{1F48A}"
      },
      {
        name: "smoking symbol",
        unicode: "1f6ac",
        char: "\u{1F6AC}"
      },
      {
        name: "coffin",
        unicode: "26b0",
        char: "\u26B0"
      },
      {
        name: "funeral urn",
        unicode: "26b1",
        char: "\u26B1"
      },
      {
        name: "moyai",
        unicode: "1f5ff",
        char: "\u{1F5FF}"
      },
      {
        name: "oil drum",
        unicode: "1f6e2",
        char: "\u{1F6E2}"
      },
      {
        name: "crystal ball",
        unicode: "1f52e",
        char: "\u{1F52E}"
      },
      {
        name: "shopping trolley",
        unicode: "1f6d2",
        char: "\u{1F6D2}"
      },
      {
        name: "triangular flag on post",
        unicode: "1f6a9",
        char: "\u{1F6A9}"
      },
      {
        name: "crossed flags",
        unicode: "1f38c",
        char: "\u{1F38C}"
      },
      {
        name: "waving black flag",
        unicode: "1f3f4",
        char: "\u{1F3F4}"
      },
      {
        name: "waving white flag",
        unicode: "1f3f3",
        char: "\u{1F3F3}"
      }
    ]
  },
  {
    name: "symbols",
    name_rus: "\u0441\u0438\u043C\u0432\u043E\u043B\u044B",
    unicode: "2764",
    emojis: [
      {
        name: "heart with arrow",
        unicode: "1f498",
        char: "\u{1F498}"
      },
      {
        name: "heavy black heart",
        unicode: "2764",
        char: "\u2764"
      },
      {
        name: "beating heart",
        unicode: "1f493",
        char: "\u{1F493}"
      },
      {
        name: "broken heart",
        unicode: "1f494",
        char: "\u{1F494}"
      },
      {
        name: "two hearts",
        unicode: "1f495",
        char: "\u{1F495}"
      },
      {
        name: "sparkling heart",
        unicode: "1f496",
        char: "\u{1F496}"
      },
      {
        name: "growing heart",
        unicode: "1f497",
        char: "\u{1F497}"
      },
      {
        name: "blue heart",
        unicode: "1f499",
        char: "\u{1F499}"
      },
      {
        name: "green heart",
        unicode: "1f49a",
        char: "\u{1F49A}"
      },
      {
        name: "yellow heart",
        unicode: "1f49b",
        char: "\u{1F49B}"
      },
      {
        name: "purple heart",
        unicode: "1f49c",
        char: "\u{1F49C}"
      },
      {
        name: "black heart",
        unicode: "1f5a4",
        char: "\u{1F5A4}"
      },
      {
        name: "heart with ribbon",
        unicode: "1f49d",
        char: "\u{1F49D}"
      },
      {
        name: "revolving hearts",
        unicode: "1f49e",
        char: "\u{1F49E}"
      },
      {
        name: "heart decoration",
        unicode: "1f49f",
        char: "\u{1F49F}"
      },
      {
        name: "heavy heart exclamation mark ornament",
        unicode: "2763",
        char: "\u2763"
      },
      {
        name: "anger symbol",
        unicode: "1f4a2",
        char: "\u{1F4A2}"
      },
      {
        name: "collision symbol",
        unicode: "1f4a5",
        char: "\u{1F4A5}"
      },
      {
        name: "dizzy symbol",
        unicode: "1f4ab",
        char: "\u{1F4AB}"
      },
      {
        name: "speech balloon",
        unicode: "1f4ac",
        char: "\u{1F4AC}"
      },
      {
        name: "left speech bubble",
        unicode: "1f5e8",
        char: "\u{1F5E8}"
      },
      {
        name: "right anger bubble",
        unicode: "1f5ef",
        char: "\u{1F5EF}"
      },
      {
        name: "thought balloon",
        unicode: "1f4ad",
        char: "\u{1F4AD}"
      },
      {
        name: "white flower",
        unicode: "1f4ae",
        char: "\u{1F4AE}"
      },
      {
        name: "globe with meridians",
        unicode: "1f310",
        char: "\u{1F310}"
      },
      {
        name: "hot springs",
        unicode: "2668",
        char: "\u2668"
      },
      {
        name: "octagonal sign",
        unicode: "1f6d1",
        char: "\u{1F6D1}"
      },
      {
        name: "clock face twelve oclock",
        unicode: "1f55b",
        char: "\u{1F55B}"
      },
      {
        name: "clock face twelve-thirty",
        unicode: "1f567",
        char: "\u{1F567}"
      },
      {
        name: "clock face one oclock",
        unicode: "1f550",
        char: "\u{1F550}"
      },
      {
        name: "clock face one-thirty",
        unicode: "1f55c",
        char: "\u{1F55C}"
      },
      {
        name: "clock face two oclock",
        unicode: "1f551",
        char: "\u{1F551}"
      },
      {
        name: "clock face two-thirty",
        unicode: "1f55d",
        char: "\u{1F55D}"
      },
      {
        name: "clock face three oclock",
        unicode: "1f552",
        char: "\u{1F552}"
      },
      {
        name: "clock face three-thirty",
        unicode: "1f55e",
        char: "\u{1F55E}"
      },
      {
        name: "clock face four oclock",
        unicode: "1f553",
        char: "\u{1F553}"
      },
      {
        name: "clock face four-thirty",
        unicode: "1f55f",
        char: "\u{1F55F}"
      },
      {
        name: "clock face five oclock",
        unicode: "1f554",
        char: "\u{1F554}"
      },
      {
        name: "clock face five-thirty",
        unicode: "1f560",
        char: "\u{1F560}"
      },
      {
        name: "clock face six oclock",
        unicode: "1f555",
        char: "\u{1F555}"
      },
      {
        name: "clock face six-thirty",
        unicode: "1f561",
        char: "\u{1F561}"
      },
      {
        name: "clock face seven oclock",
        unicode: "1f556",
        char: "\u{1F556}"
      },
      {
        name: "clock face seven-thirty",
        unicode: "1f562",
        char: "\u{1F562}"
      },
      {
        name: "clock face eight oclock",
        unicode: "1f557",
        char: "\u{1F557}"
      },
      {
        name: "clock face eight-thirty",
        unicode: "1f563",
        char: "\u{1F563}"
      },
      {
        name: "clock face nine oclock",
        unicode: "1f558",
        char: "\u{1F558}"
      },
      {
        name: "clock face nine-thirty",
        unicode: "1f564",
        char: "\u{1F564}"
      },
      {
        name: "clock face ten oclock",
        unicode: "1f559",
        char: "\u{1F559}"
      },
      {
        name: "clock face ten-thirty",
        unicode: "1f565",
        char: "\u{1F565}"
      },
      {
        name: "clock face eleven oclock",
        unicode: "1f55a",
        char: "\u{1F55A}"
      },
      {
        name: "clock face eleven-thirty",
        unicode: "1f566",
        char: "\u{1F566}"
      },
      {
        name: "cyclone",
        unicode: "1f300",
        char: "\u{1F300}"
      },
      {
        name: "black spade suit",
        unicode: "2660",
        char: "\u2660"
      },
      {
        name: "black heart suit",
        unicode: "2665",
        char: "\u2665"
      },
      {
        name: "black diamond suit",
        unicode: "2666",
        char: "\u2666"
      },
      {
        name: "black club suit",
        unicode: "2663",
        char: "\u2663"
      },
      {
        name: "playing card black joker",
        unicode: "1f0cf",
        char: "\u{1F0CF}"
      },
      {
        name: "mahjong tile red dragon",
        unicode: "1f004",
        char: "\u{1F004}"
      },
      {
        name: "flower playing cards",
        unicode: "1f3b4",
        char: "\u{1F3B4}"
      },
      {
        name: "speaker with cancellation stroke",
        unicode: "1f507",
        char: "\u{1F507}"
      },
      {
        name: "speaker",
        unicode: "1f508",
        char: "\u{1F508}"
      },
      {
        name: "speaker with one sound wave",
        unicode: "1f509",
        char: "\u{1F509}"
      },
      {
        name: "speaker with three sound waves",
        unicode: "1f50a",
        char: "\u{1F50A}"
      },
      {
        name: "public address loudspeaker",
        unicode: "1f4e2",
        char: "\u{1F4E2}"
      },
      {
        name: "cheering megaphone",
        unicode: "1f4e3",
        char: "\u{1F4E3}"
      },
      {
        name: "bell",
        unicode: "1f514",
        char: "\u{1F514}"
      },
      {
        name: "bell with cancellation stroke",
        unicode: "1f515",
        char: "\u{1F515}"
      },
      {
        name: "musical note",
        unicode: "1f3b5",
        char: "\u{1F3B5}"
      },
      {
        name: "multiple musical notes",
        unicode: "1f3b6",
        char: "\u{1F3B6}"
      },
      {
        name: "chart with upwards trend and yen sign",
        unicode: "1f4b9",
        char: "\u{1F4B9}"
      },
      {
        name: "currency exchange",
        unicode: "1f4b1",
        char: "\u{1F4B1}"
      },
      {
        name: "heavy dollar sign",
        unicode: "1f4b2",
        char: "\u{1F4B2}"
      },
      {
        name: "automated teller machine",
        unicode: "1f3e7",
        char: "\u{1F3E7}"
      },
      {
        name: "put litter in its place symbol",
        unicode: "1f6ae",
        char: "\u{1F6AE}"
      },
      {
        name: "potable water symbol",
        unicode: "1f6b0",
        char: "\u{1F6B0}"
      },
      {
        name: "wheelchair symbol",
        unicode: "267f",
        char: "\u267F"
      },
      {
        name: "mens symbol",
        unicode: "1f6b9",
        char: "\u{1F6B9}"
      },
      {
        name: "womens symbol",
        unicode: "1f6ba",
        char: "\u{1F6BA}"
      },
      {
        name: "restroom",
        unicode: "1f6bb",
        char: "\u{1F6BB}"
      },
      {
        name: "baby symbol",
        unicode: "1f6bc",
        char: "\u{1F6BC}"
      },
      {
        name: "water closet",
        unicode: "1f6be",
        char: "\u{1F6BE}"
      },
      {
        name: "passport control",
        unicode: "1f6c2",
        char: "\u{1F6C2}"
      },
      {
        name: "customs",
        unicode: "1f6c3",
        char: "\u{1F6C3}"
      },
      {
        name: "baggage claim",
        unicode: "1f6c4",
        char: "\u{1F6C4}"
      },
      {
        name: "left luggage",
        unicode: "1f6c5",
        char: "\u{1F6C5}"
      },
      {
        name: "warning sign",
        unicode: "26a0",
        char: "\u26A0"
      },
      {
        name: "children crossing",
        unicode: "1f6b8",
        char: "\u{1F6B8}"
      },
      {
        name: "no entry",
        unicode: "26d4",
        char: "\u26D4"
      },
      {
        name: "no entry sign",
        unicode: "1f6ab",
        char: "\u{1F6AB}"
      },
      {
        name: "no bicycles",
        unicode: "1f6b3",
        char: "\u{1F6B3}"
      },
      {
        name: "no smoking symbol",
        unicode: "1f6ad",
        char: "\u{1F6AD}"
      },
      {
        name: "do not litter symbol",
        unicode: "1f6af",
        char: "\u{1F6AF}"
      },
      {
        name: "non-potable water symbol",
        unicode: "1f6b1",
        char: "\u{1F6B1}"
      },
      {
        name: "no pedestrians",
        unicode: "1f6b7",
        char: "\u{1F6B7}"
      },
      {
        name: "no mobile phones",
        unicode: "1f4f5",
        char: "\u{1F4F5}"
      },
      {
        name: "no one under eighteen symbol",
        unicode: "1f51e",
        char: "\u{1F51E}"
      },
      {
        name: "radioactive sign",
        unicode: "2622",
        char: "\u2622"
      },
      {
        name: "biohazard sign",
        unicode: "2623",
        char: "\u2623"
      },
      {
        name: "upwards black arrow",
        unicode: "2b06",
        char: "\u2B06"
      },
      {
        name: "north east arrow",
        unicode: "2197",
        char: "\u2197"
      },
      {
        name: "black rightwards arrow",
        unicode: "27a1",
        char: "\u27A1"
      },
      {
        name: "south east arrow",
        unicode: "2198",
        char: "\u2198"
      },
      {
        name: "downwards black arrow",
        unicode: "2b07",
        char: "\u2B07"
      },
      {
        name: "south west arrow",
        unicode: "2199",
        char: "\u2199"
      },
      {
        name: "leftwards black arrow",
        unicode: "2b05",
        char: "\u2B05"
      },
      {
        name: "north west arrow",
        unicode: "2196",
        char: "\u2196"
      },
      {
        name: "up down arrow",
        unicode: "2195",
        char: "\u2195"
      },
      {
        name: "left right arrow",
        unicode: "2194",
        char: "\u2194"
      },
      {
        name: "leftwards arrow with hook",
        unicode: "21a9",
        char: "\u21A9"
      },
      {
        name: "rightwards arrow with hook",
        unicode: "21aa",
        char: "\u21AA"
      },
      {
        name: "arrow pointing rightwards then curving upwards",
        unicode: "2934",
        char: "\u2934"
      },
      {
        name: "arrow pointing rightwards then curving downwards",
        unicode: "2935",
        char: "\u2935"
      },
      {
        name: "clockwise downwards and upwards open circle arrows",
        unicode: "1f503",
        char: "\u{1F503}"
      },
      {
        name: "anticlockwise downwards and upwards open circle arrows",
        unicode: "1f504",
        char: "\u{1F504}"
      },
      {
        name: "back with leftwards arrow above",
        unicode: "1f519",
        char: "\u{1F519}"
      },
      {
        name: "end with leftwards arrow above",
        unicode: "1f51a",
        char: "\u{1F51A}"
      },
      {
        name: "on with exclamation mark with left right arrow abo",
        unicode: "1f51b",
        char: "\u{1F51B}"
      },
      {
        name: "soon with rightwards arrow above",
        unicode: "1f51c",
        char: "\u{1F51C}"
      },
      {
        name: "top with upwards arrow above",
        unicode: "1f51d",
        char: "\u{1F51D}"
      },
      {
        name: "place of worship",
        unicode: "1f6d0",
        char: "\u{1F6D0}"
      },
      {
        name: "atom symbol",
        unicode: "269b",
        char: "\u269B"
      },
      {
        name: "om symbol",
        unicode: "1f549",
        char: "\u{1F549}"
      },
      {
        name: "star of david",
        unicode: "2721",
        char: "\u2721"
      },
      {
        name: "wheel of dharma",
        unicode: "2638",
        char: "\u2638"
      },
      {
        name: "yin yang",
        unicode: "262f",
        char: "\u262F"
      },
      {
        name: "latin cross",
        unicode: "271d",
        char: "\u271D"
      },
      {
        name: "orthodox cross",
        unicode: "2626",
        char: "\u2626"
      },
      {
        name: "star and crescent",
        unicode: "262a",
        char: "\u262A"
      },
      {
        name: "peace symbol",
        unicode: "262e",
        char: "\u262E"
      },
      {
        name: "menorah with nine branches",
        unicode: "1f54e",
        char: "\u{1F54E}"
      },
      {
        name: "six pointed star with middle dot",
        unicode: "1f52f",
        char: "\u{1F52F}"
      },
      {
        name: "aries",
        unicode: "2648",
        char: "\u2648"
      },
      {
        name: "taurus",
        unicode: "2649",
        char: "\u2649"
      },
      {
        name: "gemini",
        unicode: "264a",
        char: "\u264A"
      },
      {
        name: "cancer",
        unicode: "264b",
        char: "\u264B"
      },
      {
        name: "leo",
        unicode: "264c",
        char: "\u264C"
      },
      {
        name: "virgo",
        unicode: "264d",
        char: "\u264D"
      },
      {
        name: "libra",
        unicode: "264e",
        char: "\u264E"
      },
      {
        name: "scorpius",
        unicode: "264f",
        char: "\u264F"
      },
      {
        name: "sagittarius",
        unicode: "2650",
        char: "\u2650"
      },
      {
        name: "capricorn",
        unicode: "2651",
        char: "\u2651"
      },
      {
        name: "aquarius",
        unicode: "2652",
        char: "\u2652"
      },
      {
        name: "pisces",
        unicode: "2653",
        char: "\u2653"
      },
      {
        name: "ophiuchus",
        unicode: "26ce",
        char: "\u26CE"
      },
      {
        name: "twisted rightwards arrows",
        unicode: "1f500",
        char: "\u{1F500}"
      },
      {
        name: "clockwise rightwards and leftwards open circle arrows",
        unicode: "1f501",
        char: "\u{1F501}"
      },
      {
        name: "clockwise rightwards and leftwards open circle arrows with circled one overlay",
        unicode: "1f502",
        char: "\u{1F502}"
      },
      {
        name: "black right-pointing triangle",
        unicode: "25b6",
        char: "\u25B6"
      },
      {
        name: "black right-pointing double triangle",
        unicode: "23e9",
        char: "\u23E9"
      },
      {
        name: "black right-pointing double triangle with vertical bar",
        unicode: "23ed",
        char: "\u23ED"
      },
      {
        name: "black right-pointing double triangle with double vertical bar",
        unicode: "23ef",
        char: "\u23EF"
      },
      {
        name: "black left-pointing triangle",
        unicode: "25c0",
        char: "\u25C0"
      },
      {
        name: "black left-pointing double triangle",
        unicode: "23ea",
        char: "\u23EA"
      },
      {
        name: "black left-pointing double triangle with vertical bar",
        unicode: "23ee",
        char: "\u23EE"
      },
      {
        name: "up-pointing small red triangle",
        unicode: "1f53c",
        char: "\u{1F53C}"
      },
      {
        name: "black up-pointing double triangle",
        unicode: "23eb",
        char: "\u23EB"
      },
      {
        name: "down-pointing small red triangle",
        unicode: "1f53d",
        char: "\u{1F53D}"
      },
      {
        name: "black down-pointing double triangle",
        unicode: "23ec",
        char: "\u23EC"
      },
      {
        name: "double vertical bar",
        unicode: "23f8",
        char: "\u23F8"
      },
      {
        name: "black square for stop",
        unicode: "23f9",
        char: "\u23F9"
      },
      {
        name: "black circle for record",
        unicode: "23fa",
        char: "\u23FA"
      },
      {
        name: "eject symbol",
        unicode: "23cf",
        char: "\u23CF"
      },
      {
        name: "cinema",
        unicode: "1f3a6",
        char: "\u{1F3A6}"
      },
      {
        name: "low brightness symbol",
        unicode: "1f505",
        char: "\u{1F505}"
      },
      {
        name: "high brightness symbol",
        unicode: "1f506",
        char: "\u{1F506}"
      },
      {
        name: "antenna with bars",
        unicode: "1f4f6",
        char: "\u{1F4F6}"
      },
      {
        name: "vibration mode",
        unicode: "1f4f3",
        char: "\u{1F4F3}"
      },
      {
        name: "mobile phone off",
        unicode: "1f4f4",
        char: "\u{1F4F4}"
      },
      {
        name: "black universal recycling symbol",
        unicode: "267b",
        char: "\u267B"
      },
      {
        name: "name badge",
        unicode: "1f4db",
        char: "\u{1F4DB}"
      },
      {
        name: "fleur-de-lis",
        unicode: "269c",
        char: "\u269C"
      },
      {
        name: "japanese symbol for beginner",
        unicode: "1f530",
        char: "\u{1F530}"
      },
      {
        name: "trident emblem",
        unicode: "1f531",
        char: "\u{1F531}"
      },
      {
        name: "heavy large circle",
        unicode: "2b55",
        char: "\u2B55"
      },
      {
        name: "white heavy check mark",
        unicode: "2705",
        char: "\u2705"
      },
      {
        name: "ballot box with check",
        unicode: "2611",
        char: "\u2611"
      },
      {
        name: "heavy check mark",
        unicode: "2714",
        char: "\u2714"
      },
      {
        name: "heavy multiplication x",
        unicode: "2716",
        char: "\u2716"
      },
      {
        name: "cross mark",
        unicode: "274c",
        char: "\u274C"
      },
      {
        name: "negative squared cross mark",
        unicode: "274e",
        char: "\u274E"
      },
      {
        name: "heavy plus sign",
        unicode: "2795",
        char: "\u2795"
      },
      {
        name: "heavy minus sign",
        unicode: "2796",
        char: "\u2796"
      },
      {
        name: "heavy division sign",
        unicode: "2797",
        char: "\u2797"
      },
      {
        name: "curly loop",
        unicode: "27b0",
        char: "\u27B0"
      },
      {
        name: "double curly loop",
        unicode: "27bf",
        char: "\u27BF"
      },
      {
        name: "part alternation mark",
        unicode: "303d",
        char: "\u303D"
      },
      {
        name: "eight spoked asterisk",
        unicode: "2733",
        char: "\u2733"
      },
      {
        name: "eight pointed black star",
        unicode: "2734",
        char: "\u2734"
      },
      {
        name: "sparkle",
        unicode: "2747",
        char: "\u2747"
      },
      {
        name: "double exclamation mark",
        unicode: "203c",
        char: "\u203C"
      },
      {
        name: "exclamation question mark",
        unicode: "2049",
        char: "\u2049"
      },
      {
        name: "black question mark ornament",
        unicode: "2753",
        char: "\u2753"
      },
      {
        name: "white question mark ornament",
        unicode: "2754",
        char: "\u2754"
      },
      {
        name: "white exclamation mark ornament",
        unicode: "2755",
        char: "\u2755"
      },
      {
        name: "heavy exclamation mark symbol",
        unicode: "2757",
        char: "\u2757"
      },
      {
        name: "wavy dash",
        unicode: "3030",
        char: "\u3030"
      },
      {
        name: "trade mark sign",
        unicode: "2122",
        char: "\u2122"
      },
      { unicode: "0023-FE0F-20E3", char: "#\uFE0F\u20E3", name: "hash" },
      { unicode: "002A-FE0F-20E3", char: "*\uFE0F\u20E3", name: "keycap_star" },
      { unicode: "0030-FE0F-20E3", char: "0\uFE0F\u20E3", name: "zero" },
      { unicode: "0031-FE0F-20E3", char: "1\uFE0F\u20E3", name: "one" },
      { unicode: "0032-FE0F-20E3", char: "2\uFE0F\u20E3", name: "two" },
      { unicode: "0033-FE0F-20E3", char: "3\uFE0F\u20E3", name: "three" },
      { unicode: "0034-FE0F-20E3", char: "4\uFE0F\u20E3", name: "four" },
      { unicode: "0035-FE0F-20E3", char: "5\uFE0F\u20E3", name: "five" },
      { unicode: "0036-FE0F-20E3", char: "6\uFE0F\u20E3", name: "six" },
      { unicode: "0037-FE0F-20E3", char: "7\uFE0F\u20E3", name: "seven" },
      { unicode: "0038-FE0F-20E3", char: "8\uFE0F\u20E3", name: "eight" },
      { unicode: "0039-FE0F-20E3", char: "9\uFE0F\u20E3", name: "nine" },
      {
        name: "keycap ten",
        unicode: "1f51f",
        char: "\u{1F51F}"
      },
      {
        name: "hundred points symbol",
        unicode: "1f4af",
        char: "\u{1F4AF}"
      },
      {
        name: "input symbol for latin capital letters",
        unicode: "1f520",
        char: "\u{1F520}"
      },
      {
        name: "input symbol for latin small letters",
        unicode: "1f521",
        char: "\u{1F521}"
      },
      {
        name: "input symbol for numbers",
        unicode: "1f522",
        char: "\u{1F522}"
      },
      {
        name: "input symbol for symbols",
        unicode: "1f523",
        char: "\u{1F523}"
      },
      {
        name: "input symbol for latin letters",
        unicode: "1f524",
        char: "\u{1F524}"
      },
      {
        name: "negative squared latin capital letter a",
        unicode: "1f170",
        char: "\u{1F170}"
      },
      {
        name: "negative squared ab",
        unicode: "1f18e",
        char: "\u{1F18E}"
      },
      {
        name: "negative squared latin capital letter b",
        unicode: "1f171",
        char: "\u{1F171}"
      },
      {
        name: "squared cl",
        unicode: "1f191",
        char: "\u{1F191}"
      },
      {
        name: "squared cool",
        unicode: "1f192",
        char: "\u{1F192}"
      },
      {
        name: "squared free",
        unicode: "1f193",
        char: "\u{1F193}"
      },
      {
        name: "information source",
        unicode: "2139",
        char: "\u2139"
      },
      {
        name: "squared id",
        unicode: "1f194",
        char: "\u{1F194}"
      },
      {
        name: "circled latin capital letter m",
        unicode: "24c2",
        char: "\u24C2"
      },
      {
        name: "squared new",
        unicode: "1f195",
        char: "\u{1F195}"
      },
      {
        name: "squared ng",
        unicode: "1f196",
        char: "\u{1F196}"
      },
      {
        name: "negative squared latin capital letter o",
        unicode: "1f17e",
        char: "\u{1F17E}"
      },
      {
        name: "squared ok",
        unicode: "1f197",
        char: "\u{1F197}"
      },
      {
        name: "negative squared latin capital letter p",
        unicode: "1f17f",
        char: "\u{1F17F}"
      },
      {
        name: "squared sos",
        unicode: "1f198",
        char: "\u{1F198}"
      },
      {
        name: "squared up with exclamation mark",
        unicode: "1f199",
        char: "\u{1F199}"
      },
      {
        name: "squared vs",
        unicode: "1f19a",
        char: "\u{1F19A}"
      },
      {
        name: "squared katakana koko",
        unicode: "1f201",
        char: "\u{1F201}"
      },
      {
        name: "squared katakana sa",
        unicode: "1f202",
        char: "\u{1F202}"
      },
      {
        name: "squared cjk unified ideograph-6708",
        unicode: "1f237",
        char: "\u{1F237}"
      },
      {
        name: "squared cjk unified ideograph-6709",
        unicode: "1f236",
        char: "\u{1F236}"
      },
      {
        name: "squared cjk unified ideograph-6307",
        unicode: "1f22f",
        char: "\u{1F22F}"
      },
      {
        name: "circled ideograph advantage",
        unicode: "1f250",
        char: "\u{1F250}"
      },
      {
        name: "squared cjk unified ideograph-5272",
        unicode: "1f239",
        char: "\u{1F239}"
      },
      {
        name: "squared cjk unified ideograph-7121",
        unicode: "1f21a",
        char: "\u{1F21A}"
      },
      {
        name: "squared cjk unified ideograph-7981",
        unicode: "1f232",
        char: "\u{1F232}"
      },
      {
        name: "circled ideograph accept",
        unicode: "1f251",
        char: "\u{1F251}"
      },
      {
        name: "squared cjk unified ideograph-7533",
        unicode: "1f238",
        char: "\u{1F238}"
      },
      {
        name: "squared cjk unified ideograph-5408",
        unicode: "1f234",
        char: "\u{1F234}"
      },
      {
        name: "squared cjk unified ideograph-7a7a",
        unicode: "1f233",
        char: "\u{1F233}"
      },
      {
        name: "circled ideograph congratulation",
        unicode: "3297",
        char: "\u3297"
      },
      {
        name: "circled ideograph secret",
        unicode: "3299",
        char: "\u3299"
      },
      {
        name: "squared cjk unified ideograph-55b6",
        unicode: "1f23a",
        char: "\u{1F23A}"
      },
      {
        name: "squared cjk unified ideograph-6e80",
        unicode: "1f235",
        char: "\u{1F235}"
      },
      {
        name: "black small square",
        unicode: "25aa",
        char: "\u25AA"
      },
      {
        name: "white small square",
        unicode: "25ab",
        char: "\u25AB"
      },
      {
        name: "white medium square",
        unicode: "25fb",
        char: "\u25FB"
      },
      {
        name: "black medium square",
        unicode: "25fc",
        char: "\u25FC"
      },
      {
        name: "white medium small square",
        unicode: "25fd",
        char: "\u25FD"
      },
      {
        name: "black medium small square",
        unicode: "25fe",
        char: "\u25FE"
      },
      {
        name: "black large square",
        unicode: "2b1b",
        char: "\u2B1B"
      },
      {
        name: "white large square",
        unicode: "2b1c",
        char: "\u2B1C"
      },
      {
        name: "large orange diamond",
        unicode: "1f536",
        char: "\u{1F536}"
      },
      {
        name: "large blue diamond",
        unicode: "1f537",
        char: "\u{1F537}"
      },
      {
        name: "small orange diamond",
        unicode: "1f538",
        char: "\u{1F538}"
      },
      {
        name: "small blue diamond",
        unicode: "1f539",
        char: "\u{1F539}"
      },
      {
        name: "up-pointing red triangle",
        unicode: "1f53a",
        char: "\u{1F53A}"
      },
      {
        name: "down-pointing red triangle",
        unicode: "1f53b",
        char: "\u{1F53B}"
      },
      {
        name: "diamond shape with a dot inside",
        unicode: "1f4a0",
        char: "\u{1F4A0}"
      },
      {
        name: "radio button",
        unicode: "1f518",
        char: "\u{1F518}"
      },
      {
        name: "black square button",
        unicode: "1f532",
        char: "\u{1F532}"
      },
      {
        name: "white square button",
        unicode: "1f533",
        char: "\u{1F533}"
      },
      {
        name: "white circle",
        unicode: "26aa",
        char: "\u26AA"
      },
      {
        name: "black circle",
        unicode: "26ab",
        char: "\u26AB"
      },
      {
        name: "red circle",
        unicode: "1f534",
        char: "\u{1F534}"
      },
      {
        name: "blue circle",
        unicode: "1f535",
        char: "\u{1F535}"
      },
      {
        name: "regional indicator symbol letter a",
        unicode: "1f1e6",
        char: "\u{1F1E6}"
      },
      {
        name: "regional indicator symbol letter b",
        unicode: "1f1e7",
        char: "\u{1F1E7}"
      },
      {
        name: "regional indicator symbol letter c",
        unicode: "1f1e8",
        char: "\u{1F1E8}"
      },
      {
        name: "regional indicator symbol letter d",
        unicode: "1f1e9",
        char: "\u{1F1E9}"
      },
      {
        name: "regional indicator symbol letter e",
        unicode: "1f1ea",
        char: "\u{1F1EA}"
      },
      {
        name: "regional indicator symbol letter f",
        unicode: "1f1eb",
        char: "\u{1F1EB}"
      },
      {
        name: "regional indicator symbol letter g",
        unicode: "1f1ec",
        char: "\u{1F1EC}"
      },
      {
        name: "regional indicator symbol letter h",
        unicode: "1f1ed",
        char: "\u{1F1ED}"
      },
      {
        name: "regional indicator symbol letter i",
        unicode: "1f1ee",
        char: "\u{1F1EE}"
      },
      {
        name: "regional indicator symbol letter j",
        unicode: "1f1ef",
        char: "\u{1F1EF}"
      },
      {
        name: "regional indicator symbol letter k",
        unicode: "1f1f0",
        char: "\u{1F1F0}"
      },
      {
        name: "regional indicator symbol letter l",
        unicode: "1f1f1",
        char: "\u{1F1F1}"
      },
      {
        name: "regional indicator symbol letter m",
        unicode: "1f1f2",
        char: "\u{1F1F2}"
      },
      {
        name: "regional indicator symbol letter n",
        unicode: "1f1f3",
        char: "\u{1F1F3}"
      },
      {
        name: "regional indicator symbol letter o",
        unicode: "1f1f4",
        char: "\u{1F1F4}"
      },
      {
        name: "regional indicator symbol letter p",
        unicode: "1f1f5",
        char: "\u{1F1F5}"
      },
      {
        name: "regional indicator symbol letter q",
        unicode: "1f1f6",
        char: "\u{1F1F6}"
      },
      {
        name: "regional indicator symbol letter r",
        unicode: "1f1f7",
        char: "\u{1F1F7}"
      },
      {
        name: "regional indicator symbol letter s",
        unicode: "1f1f8",
        char: "\u{1F1F8}"
      },
      {
        name: "regional indicator symbol letter t",
        unicode: "1f1f9",
        char: "\u{1F1F9}"
      },
      {
        name: "regional indicator symbol letter u",
        unicode: "1f1fa",
        char: "\u{1F1FA}"
      },
      {
        name: "regional indicator symbol letter v",
        unicode: "1f1fb",
        char: "\u{1F1FB}"
      },
      {
        name: "regional indicator symbol letter w",
        unicode: "1f1fc",
        char: "\u{1F1FC}"
      },
      {
        name: "regional indicator symbol letter x",
        unicode: "1f1fd",
        char: "\u{1F1FD}"
      },
      {
        name: "regional indicator symbol letter y",
        unicode: "1f1fe",
        char: "\u{1F1FE}"
      },
      {
        name: "regional indicator symbol letter z",
        unicode: "1f1ff",
        char: "\u{1F1FF}"
      }
    ]
  },
  {
    name: "flags",
    name_rus: "\u0444\u043B\u0430\u0433\u0438",
    emojis: [
      {
        name: "ascension",
        unicode: "1f1e6-1f1e8",
        char: "\u{1F1E6}\u{1F1E8}"
      },
      {
        name: "andorra",
        unicode: "1f1e6-1f1e9",
        char: "\u{1F1E6}\u{1F1E9}"
      },
      {
        name: "the united arab emirates",
        unicode: "1f1e6-1f1ea",
        char: "\u{1F1E6}\u{1F1EA}"
      },
      {
        name: "afghanistan",
        unicode: "1f1e6-1f1eb",
        char: "\u{1F1E6}\u{1F1EB}"
      },
      {
        name: "antigua and barbuda",
        unicode: "1f1e6-1f1ec",
        char: "\u{1F1E6}\u{1F1EC}"
      },
      {
        name: "anguilla",
        unicode: "1f1e6-1f1ee",
        char: "\u{1F1E6}\u{1F1EE}"
      },
      {
        name: "albania",
        unicode: "1f1e6-1f1f1",
        char: "\u{1F1E6}\u{1F1F1}"
      },
      {
        name: "armenia",
        unicode: "1f1e6-1f1f2",
        char: "\u{1F1E6}\u{1F1F2}"
      },
      {
        name: "angola",
        unicode: "1f1e6-1f1f4",
        char: "\u{1F1E6}\u{1F1F4}"
      },
      {
        name: "antarctica",
        unicode: "1f1e6-1f1f6",
        char: "\u{1F1E6}\u{1F1F6}"
      },
      {
        name: "argentina",
        unicode: "1f1e6-1f1f7",
        char: "\u{1F1E6}\u{1F1F7}"
      },
      {
        name: "american samoa",
        unicode: "1f1e6-1f1f8",
        char: "\u{1F1E6}\u{1F1F8}"
      },
      {
        name: "austria",
        unicode: "1f1e6-1f1f9",
        char: "\u{1F1E6}\u{1F1F9}"
      },
      {
        name: "australia",
        unicode: "1f1e6-1f1fa",
        char: "\u{1F1E6}\u{1F1FA}"
      },
      {
        name: "aruba",
        unicode: "1f1e6-1f1fc",
        char: "\u{1F1E6}\u{1F1FC}"
      },
      {
        name: "\xE5land islands",
        unicode: "1f1e6-1f1fd",
        char: "\u{1F1E6}\u{1F1FD}"
      },
      {
        name: "azerbaijan",
        unicode: "1f1e6-1f1ff",
        char: "\u{1F1E6}\u{1F1FF}"
      },
      {
        name: "bosnia and herzegovina",
        unicode: "1f1e7-1f1e6",
        char: "\u{1F1E7}\u{1F1E6}"
      },
      {
        name: "barbados",
        unicode: "1f1e7-1f1e7",
        char: "\u{1F1E7}\u{1F1E7}"
      },
      {
        name: "bangladesh",
        unicode: "1f1e7-1f1e9",
        char: "\u{1F1E7}\u{1F1E9}"
      },
      {
        name: "belgium",
        unicode: "1f1e7-1f1ea",
        char: "\u{1F1E7}\u{1F1EA}"
      },
      {
        name: "burkina faso",
        unicode: "1f1e7-1f1eb",
        char: "\u{1F1E7}\u{1F1EB}"
      },
      {
        name: "bulgaria",
        unicode: "1f1e7-1f1ec",
        char: "\u{1F1E7}\u{1F1EC}"
      },
      {
        name: "bahrain",
        unicode: "1f1e7-1f1ed",
        char: "\u{1F1E7}\u{1F1ED}"
      },
      {
        name: "burundi",
        unicode: "1f1e7-1f1ee",
        char: "\u{1F1E7}\u{1F1EE}"
      },
      {
        name: "benin",
        unicode: "1f1e7-1f1ef",
        char: "\u{1F1E7}\u{1F1EF}"
      },
      {
        name: "saint barth\xE9lemy",
        unicode: "1f1e7-1f1f1",
        char: "\u{1F1E7}\u{1F1F1}"
      },
      {
        name: "bermuda",
        unicode: "1f1e7-1f1f2",
        char: "\u{1F1E7}\u{1F1F2}"
      },
      {
        name: "brunei",
        unicode: "1f1e7-1f1f3",
        char: "\u{1F1E7}\u{1F1F3}"
      },
      {
        name: "bolivia",
        unicode: "1f1e7-1f1f4",
        char: "\u{1F1E7}\u{1F1F4}"
      },
      {
        name: "caribbean netherlands",
        unicode: "1f1e7-1f1f6",
        char: "\u{1F1E7}\u{1F1F6}"
      },
      {
        name: "brazil",
        unicode: "1f1e7-1f1f7",
        char: "\u{1F1E7}\u{1F1F7}"
      },
      {
        name: "the bahamas",
        unicode: "1f1e7-1f1f8",
        char: "\u{1F1E7}\u{1F1F8}"
      },
      {
        name: "bhutan",
        unicode: "1f1e7-1f1f9",
        char: "\u{1F1E7}\u{1F1F9}"
      },
      {
        name: "bouvet island",
        unicode: "1f1e7-1f1fb",
        char: "\u{1F1E7}\u{1F1FB}"
      },
      {
        name: "botswana",
        unicode: "1f1e7-1f1fc",
        char: "\u{1F1E7}\u{1F1FC}"
      },
      {
        name: "belarus",
        unicode: "1f1e7-1f1fe",
        char: "\u{1F1E7}\u{1F1FE}"
      },
      {
        name: "belize",
        unicode: "1f1e7-1f1ff",
        char: "\u{1F1E7}\u{1F1FF}"
      },
      {
        name: "canada",
        unicode: "1f1e8-1f1e6",
        char: "\u{1F1E8}\u{1F1E6}"
      },
      {
        name: "cocos (keeling) islands",
        unicode: "1f1e8-1f1e8",
        char: "\u{1F1E8}\u{1F1E8}"
      },
      {
        name: "the democratic republic of the congo",
        unicode: "1f1e8-1f1e9",
        char: "\u{1F1E8}\u{1F1E9}"
      },
      {
        name: "central african republic",
        unicode: "1f1e8-1f1eb",
        char: "\u{1F1E8}\u{1F1EB}"
      },
      {
        name: "the republic of the congo",
        unicode: "1f1e8-1f1ec",
        char: "\u{1F1E8}\u{1F1EC}"
      },
      {
        name: "switzerland",
        unicode: "1f1e8-1f1ed",
        char: "\u{1F1E8}\u{1F1ED}"
      },
      {
        name: "c\xF4te d\u2019ivoire",
        unicode: "1f1e8-1f1ee",
        char: "\u{1F1E8}\u{1F1EE}"
      },
      {
        name: "cook islands",
        unicode: "1f1e8-1f1f0",
        char: "\u{1F1E8}\u{1F1F0}"
      },
      {
        name: "chile",
        unicode: "1f1e8-1f1f1",
        char: "\u{1F1E8}\u{1F1F1}"
      },
      {
        name: "cameroon",
        unicode: "1f1e8-1f1f2",
        char: "\u{1F1E8}\u{1F1F2}"
      },
      {
        name: "china",
        unicode: "1f1e8-1f1f3",
        char: "\u{1F1E8}\u{1F1F3}"
      },
      {
        name: "colombia",
        unicode: "1f1e8-1f1f4",
        char: "\u{1F1E8}\u{1F1F4}"
      },
      {
        name: "clipperton island",
        unicode: "1f1e8-1f1f5",
        char: "\u{1F1E8}\u{1F1F5}"
      },
      {
        name: "costa rica",
        unicode: "1f1e8-1f1f7",
        char: "\u{1F1E8}\u{1F1F7}"
      },
      {
        name: "cuba",
        unicode: "1f1e8-1f1fa",
        char: "\u{1F1E8}\u{1F1FA}"
      },
      {
        name: "cape verde",
        unicode: "1f1e8-1f1fb",
        char: "\u{1F1E8}\u{1F1FB}"
      },
      {
        name: "cura\xE7ao",
        unicode: "1f1e8-1f1fc",
        char: "\u{1F1E8}\u{1F1FC}"
      },
      {
        name: "christmas island",
        unicode: "1f1e8-1f1fd",
        char: "\u{1F1E8}\u{1F1FD}"
      },
      {
        name: "cyprus",
        unicode: "1f1e8-1f1fe",
        char: "\u{1F1E8}\u{1F1FE}"
      },
      {
        name: "the czech republic",
        unicode: "1f1e8-1f1ff",
        char: "\u{1F1E8}\u{1F1FF}"
      },
      {
        name: "germany",
        unicode: "1f1e9-1f1ea",
        char: "\u{1F1E9}\u{1F1EA}"
      },
      {
        name: "diego garcia",
        unicode: "1f1e9-1f1ec",
        char: "\u{1F1E9}\u{1F1EC}"
      },
      {
        name: "djibouti",
        unicode: "1f1e9-1f1ef",
        char: "\u{1F1E9}\u{1F1EF}"
      },
      {
        name: "denmark",
        unicode: "1f1e9-1f1f0",
        char: "\u{1F1E9}\u{1F1F0}"
      },
      {
        name: "dominica",
        unicode: "1f1e9-1f1f2",
        char: "\u{1F1E9}\u{1F1F2}"
      },
      {
        name: "the dominican republic",
        unicode: "1f1e9-1f1f4",
        char: "\u{1F1E9}\u{1F1F4}"
      },
      {
        name: "algeria",
        unicode: "1f1e9-1f1ff",
        char: "\u{1F1E9}\u{1F1FF}"
      },
      {
        name: "ceuta, melilla",
        unicode: "1f1ea-1f1e6",
        char: "\u{1F1EA}\u{1F1E6}"
      },
      {
        name: "ecuador",
        unicode: "1f1ea-1f1e8",
        char: "\u{1F1EA}\u{1F1E8}"
      },
      {
        name: "estonia",
        unicode: "1f1ea-1f1ea",
        char: "\u{1F1EA}\u{1F1EA}"
      },
      {
        name: "egypt",
        unicode: "1f1ea-1f1ec",
        char: "\u{1F1EA}\u{1F1EC}"
      },
      {
        name: "western sahara",
        unicode: "1f1ea-1f1ed",
        char: "\u{1F1EA}\u{1F1ED}"
      },
      {
        name: "eritrea",
        unicode: "1f1ea-1f1f7",
        char: "\u{1F1EA}\u{1F1F7}"
      },
      {
        name: "spain",
        unicode: "1f1ea-1f1f8",
        char: "\u{1F1EA}\u{1F1F8}"
      },
      {
        name: "ethiopia",
        unicode: "1f1ea-1f1f9",
        char: "\u{1F1EA}\u{1F1F9}"
      },
      {
        name: "european union",
        unicode: "1f1ea-1f1fa",
        char: "\u{1F1EA}\u{1F1FA}"
      },
      {
        name: "finland",
        unicode: "1f1eb-1f1ee",
        char: "\u{1F1EB}\u{1F1EE}"
      },
      {
        name: "fiji",
        unicode: "1f1eb-1f1ef",
        char: "\u{1F1EB}\u{1F1EF}"
      },
      {
        name: "falkland islands",
        unicode: "1f1eb-1f1f0",
        char: "\u{1F1EB}\u{1F1F0}"
      },
      {
        name: "micronesia",
        unicode: "1f1eb-1f1f2",
        char: "\u{1F1EB}\u{1F1F2}"
      },
      {
        name: "faroe islands",
        unicode: "1f1eb-1f1f4",
        char: "\u{1F1EB}\u{1F1F4}"
      },
      {
        name: "france",
        unicode: "1f1eb-1f1f7",
        char: "\u{1F1EB}\u{1F1F7}"
      },
      {
        name: "gabon",
        unicode: "1f1ec-1f1e6",
        char: "\u{1F1EC}\u{1F1E6}"
      },
      {
        name: "great britain",
        unicode: "1f1ec-1f1e7",
        char: "\u{1F1EC}\u{1F1E7}"
      },
      {
        name: "grenada",
        unicode: "1f1ec-1f1e9",
        char: "\u{1F1EC}\u{1F1E9}"
      },
      {
        name: "georgia",
        unicode: "1f1ec-1f1ea",
        char: "\u{1F1EC}\u{1F1EA}"
      },
      {
        name: "french guiana",
        unicode: "1f1ec-1f1eb",
        char: "\u{1F1EC}\u{1F1EB}"
      },
      {
        name: "guernsey",
        unicode: "1f1ec-1f1ec",
        char: "\u{1F1EC}\u{1F1EC}"
      },
      {
        name: "ghana",
        unicode: "1f1ec-1f1ed",
        char: "\u{1F1EC}\u{1F1ED}"
      },
      {
        name: "gibraltar",
        unicode: "1f1ec-1f1ee",
        char: "\u{1F1EC}\u{1F1EE}"
      },
      {
        name: "greenland",
        unicode: "1f1ec-1f1f1",
        char: "\u{1F1EC}\u{1F1F1}"
      },
      {
        name: "the gambia",
        unicode: "1f1ec-1f1f2",
        char: "\u{1F1EC}\u{1F1F2}"
      },
      {
        name: "guinea",
        unicode: "1f1ec-1f1f3",
        char: "\u{1F1EC}\u{1F1F3}"
      },
      {
        name: "guadeloupe",
        unicode: "1f1ec-1f1f5",
        char: "\u{1F1EC}\u{1F1F5}"
      },
      {
        name: "equatorial guinea",
        unicode: "1f1ec-1f1f6",
        char: "\u{1F1EC}\u{1F1F6}"
      },
      {
        name: "greece",
        unicode: "1f1ec-1f1f7",
        char: "\u{1F1EC}\u{1F1F7}"
      },
      {
        name: "south georgia",
        unicode: "1f1ec-1f1f8",
        char: "\u{1F1EC}\u{1F1F8}"
      },
      {
        name: "guatemala",
        unicode: "1f1ec-1f1f9",
        char: "\u{1F1EC}\u{1F1F9}"
      },
      {
        name: "guam",
        unicode: "1f1ec-1f1fa",
        char: "\u{1F1EC}\u{1F1FA}"
      },
      {
        name: "guinea-bissau",
        unicode: "1f1ec-1f1fc",
        char: "\u{1F1EC}\u{1F1FC}"
      },
      {
        name: "guyana",
        unicode: "1f1ec-1f1fe",
        char: "\u{1F1EC}\u{1F1FE}"
      },
      {
        name: "hong kong",
        unicode: "1f1ed-1f1f0",
        char: "\u{1F1ED}\u{1F1F0}"
      },
      {
        name: "heard island and mcdonald islands",
        unicode: "1f1ed-1f1f2",
        char: "\u{1F1ED}\u{1F1F2}"
      },
      {
        name: "honduras",
        unicode: "1f1ed-1f1f3",
        char: "\u{1F1ED}\u{1F1F3}"
      },
      {
        name: "croatia",
        unicode: "1f1ed-1f1f7",
        char: "\u{1F1ED}\u{1F1F7}"
      },
      {
        name: "haiti",
        unicode: "1f1ed-1f1f9",
        char: "\u{1F1ED}\u{1F1F9}"
      },
      {
        name: "hungary",
        unicode: "1f1ed-1f1fa",
        char: "\u{1F1ED}\u{1F1FA}"
      },
      {
        name: "canary islands",
        unicode: "1f1ee-1f1e8",
        char: "\u{1F1EE}\u{1F1E8}"
      },
      {
        name: "indonesia",
        unicode: "1f1ee-1f1e9",
        char: "\u{1F1EE}\u{1F1E9}"
      },
      {
        name: "ireland",
        unicode: "1f1ee-1f1ea",
        char: "\u{1F1EE}\u{1F1EA}"
      },
      {
        name: "israel",
        unicode: "1f1ee-1f1f1",
        char: "\u{1F1EE}\u{1F1F1}"
      },
      {
        name: "isle of man",
        unicode: "1f1ee-1f1f2",
        char: "\u{1F1EE}\u{1F1F2}"
      },
      {
        name: "india",
        unicode: "1f1ee-1f1f3",
        char: "\u{1F1EE}\u{1F1F3}"
      },
      {
        name: "british indian ocean territory",
        unicode: "1f1ee-1f1f4",
        char: "\u{1F1EE}\u{1F1F4}"
      },
      {
        name: "iraq",
        unicode: "1f1ee-1f1f6",
        char: "\u{1F1EE}\u{1F1F6}"
      },
      {
        name: "iran",
        unicode: "1f1ee-1f1f7",
        char: "\u{1F1EE}\u{1F1F7}"
      },
      {
        name: "iceland",
        unicode: "1f1ee-1f1f8",
        char: "\u{1F1EE}\u{1F1F8}"
      },
      {
        name: "italy",
        unicode: "1f1ee-1f1f9",
        char: "\u{1F1EE}\u{1F1F9}"
      },
      {
        name: "jersey",
        unicode: "1f1ef-1f1ea",
        char: "\u{1F1EF}\u{1F1EA}"
      },
      {
        name: "jamaica",
        unicode: "1f1ef-1f1f2",
        char: "\u{1F1EF}\u{1F1F2}"
      },
      {
        name: "jordan",
        unicode: "1f1ef-1f1f4",
        char: "\u{1F1EF}\u{1F1F4}"
      },
      {
        name: "japan",
        unicode: "1f1ef-1f1f5",
        char: "\u{1F1EF}\u{1F1F5}"
      },
      {
        name: "kenya",
        unicode: "1f1f0-1f1ea",
        char: "\u{1F1F0}\u{1F1EA}"
      },
      {
        name: "kyrgyzstan",
        unicode: "1f1f0-1f1ec",
        char: "\u{1F1F0}\u{1F1EC}"
      },
      {
        name: "cambodia",
        unicode: "1f1f0-1f1ed",
        char: "\u{1F1F0}\u{1F1ED}"
      },
      {
        name: "kiribati",
        unicode: "1f1f0-1f1ee",
        char: "\u{1F1F0}\u{1F1EE}"
      },
      {
        name: "the comoros",
        unicode: "1f1f0-1f1f2",
        char: "\u{1F1F0}\u{1F1F2}"
      },
      {
        name: "saint kitts and nevis",
        unicode: "1f1f0-1f1f3",
        char: "\u{1F1F0}\u{1F1F3}"
      },
      {
        name: "north korea",
        unicode: "1f1f0-1f1f5",
        char: "\u{1F1F0}\u{1F1F5}"
      },
      {
        name: "korea",
        unicode: "1f1f0-1f1f7",
        char: "\u{1F1F0}\u{1F1F7}"
      },
      {
        name: "kuwait",
        unicode: "1f1f0-1f1fc",
        char: "\u{1F1F0}\u{1F1FC}"
      },
      {
        name: "cayman islands",
        unicode: "1f1f0-1f1fe",
        char: "\u{1F1F0}\u{1F1FE}"
      },
      {
        name: "kazakhstan",
        unicode: "1f1f0-1f1ff",
        char: "\u{1F1F0}\u{1F1FF}"
      },
      {
        name: "laos",
        unicode: "1f1f1-1f1e6",
        char: "\u{1F1F1}\u{1F1E6}"
      },
      {
        name: "lebanon",
        unicode: "1f1f1-1f1e7",
        char: "\u{1F1F1}\u{1F1E7}"
      },
      {
        name: "saint lucia",
        unicode: "1f1f1-1f1e8",
        char: "\u{1F1F1}\u{1F1E8}"
      },
      {
        name: "liechtenstein",
        unicode: "1f1f1-1f1ee",
        char: "\u{1F1F1}\u{1F1EE}"
      },
      {
        name: "sri lanka",
        unicode: "1f1f1-1f1f0",
        char: "\u{1F1F1}\u{1F1F0}"
      },
      {
        name: "liberia",
        unicode: "1f1f1-1f1f7",
        char: "\u{1F1F1}\u{1F1F7}"
      },
      {
        name: "lesotho",
        unicode: "1f1f1-1f1f8",
        char: "\u{1F1F1}\u{1F1F8}"
      },
      {
        name: "lithuania",
        unicode: "1f1f1-1f1f9",
        char: "\u{1F1F1}\u{1F1F9}"
      },
      {
        name: "luxembourg",
        unicode: "1f1f1-1f1fa",
        char: "\u{1F1F1}\u{1F1FA}"
      },
      {
        name: "latvia",
        unicode: "1f1f1-1f1fb",
        char: "\u{1F1F1}\u{1F1FB}"
      },
      {
        name: "libya",
        unicode: "1f1f1-1f1fe",
        char: "\u{1F1F1}\u{1F1FE}"
      },
      {
        name: "morocco",
        unicode: "1f1f2-1f1e6",
        char: "\u{1F1F2}\u{1F1E6}"
      },
      {
        name: "monaco",
        unicode: "1f1f2-1f1e8",
        char: "\u{1F1F2}\u{1F1E8}"
      },
      {
        name: "moldova",
        unicode: "1f1f2-1f1e9",
        char: "\u{1F1F2}\u{1F1E9}"
      },
      {
        name: "montenegro",
        unicode: "1f1f2-1f1ea",
        char: "\u{1F1F2}\u{1F1EA}"
      },
      {
        name: "saint martin",
        unicode: "1f1f2-1f1eb",
        char: "\u{1F1F2}\u{1F1EB}"
      },
      {
        name: "madagascar",
        unicode: "1f1f2-1f1ec",
        char: "\u{1F1F2}\u{1F1EC}"
      },
      {
        name: "the marshall islands",
        unicode: "1f1f2-1f1ed",
        char: "\u{1F1F2}\u{1F1ED}"
      },
      {
        name: "macedonia",
        unicode: "1f1f2-1f1f0",
        char: "\u{1F1F2}\u{1F1F0}"
      },
      {
        name: "mali",
        unicode: "1f1f2-1f1f1",
        char: "\u{1F1F2}\u{1F1F1}"
      },
      {
        name: "myanmar",
        unicode: "1f1f2-1f1f2",
        char: "\u{1F1F2}\u{1F1F2}"
      },
      {
        name: "mongolia",
        unicode: "1f1f2-1f1f3",
        char: "\u{1F1F2}\u{1F1F3}"
      },
      {
        name: "macau",
        unicode: "1f1f2-1f1f4",
        char: "\u{1F1F2}\u{1F1F4}"
      },
      {
        name: "northern mariana islands",
        unicode: "1f1f2-1f1f5",
        char: "\u{1F1F2}\u{1F1F5}"
      },
      {
        name: "martinique",
        unicode: "1f1f2-1f1f6",
        char: "\u{1F1F2}\u{1F1F6}"
      },
      {
        name: "mauritania",
        unicode: "1f1f2-1f1f7",
        char: "\u{1F1F2}\u{1F1F7}"
      },
      {
        name: "montserrat",
        unicode: "1f1f2-1f1f8",
        char: "\u{1F1F2}\u{1F1F8}"
      },
      {
        name: "malta",
        unicode: "1f1f2-1f1f9",
        char: "\u{1F1F2}\u{1F1F9}"
      },
      {
        name: "mauritius",
        unicode: "1f1f2-1f1fa",
        char: "\u{1F1F2}\u{1F1FA}"
      },
      {
        name: "maldives",
        unicode: "1f1f2-1f1fb",
        char: "\u{1F1F2}\u{1F1FB}"
      },
      {
        name: "malawi",
        unicode: "1f1f2-1f1fc",
        char: "\u{1F1F2}\u{1F1FC}"
      },
      {
        name: "mexico",
        unicode: "1f1f2-1f1fd",
        char: "\u{1F1F2}\u{1F1FD}"
      },
      {
        name: "malaysia",
        unicode: "1f1f2-1f1fe",
        char: "\u{1F1F2}\u{1F1FE}"
      },
      {
        name: "mozambique",
        unicode: "1f1f2-1f1ff",
        char: "\u{1F1F2}\u{1F1FF}"
      },
      {
        name: "namibia",
        unicode: "1f1f3-1f1e6",
        char: "\u{1F1F3}\u{1F1E6}"
      },
      {
        name: "new caledonia",
        unicode: "1f1f3-1f1e8",
        char: "\u{1F1F3}\u{1F1E8}"
      },
      {
        name: "niger",
        unicode: "1f1f3-1f1ea",
        char: "\u{1F1F3}\u{1F1EA}"
      },
      {
        name: "norfolk island",
        unicode: "1f1f3-1f1eb",
        char: "\u{1F1F3}\u{1F1EB}"
      },
      {
        name: "nigeria",
        unicode: "1f1f3-1f1ec",
        char: "\u{1F1F3}\u{1F1EC}"
      },
      {
        name: "nicaragua",
        unicode: "1f1f3-1f1ee",
        char: "\u{1F1F3}\u{1F1EE}"
      },
      {
        name: "the netherlands",
        unicode: "1f1f3-1f1f1",
        char: "\u{1F1F3}\u{1F1F1}"
      },
      {
        name: "norway",
        unicode: "1f1f3-1f1f4",
        char: "\u{1F1F3}\u{1F1F4}"
      },
      {
        name: "nepal",
        unicode: "1f1f3-1f1f5",
        char: "\u{1F1F3}\u{1F1F5}"
      },
      {
        name: "nauru",
        unicode: "1f1f3-1f1f7",
        char: "\u{1F1F3}\u{1F1F7}"
      },
      {
        name: "niue",
        unicode: "1f1f3-1f1fa",
        char: "\u{1F1F3}\u{1F1FA}"
      },
      {
        name: "new zealand",
        unicode: "1f1f3-1f1ff",
        char: "\u{1F1F3}\u{1F1FF}"
      },
      {
        name: "oman",
        unicode: "1f1f4-1f1f2",
        char: "\u{1F1F4}\u{1F1F2}"
      },
      {
        name: "panama",
        unicode: "1f1f5-1f1e6",
        char: "\u{1F1F5}\u{1F1E6}"
      },
      {
        name: "peru",
        unicode: "1f1f5-1f1ea",
        char: "\u{1F1F5}\u{1F1EA}"
      },
      {
        name: "french polynesia",
        unicode: "1f1f5-1f1eb",
        char: "\u{1F1F5}\u{1F1EB}"
      },
      {
        name: "papua new guinea",
        unicode: "1f1f5-1f1ec",
        char: "\u{1F1F5}\u{1F1EC}"
      },
      {
        name: "the philippines",
        unicode: "1f1f5-1f1ed",
        char: "\u{1F1F5}\u{1F1ED}"
      },
      {
        name: "pakistan",
        unicode: "1f1f5-1f1f0",
        char: "\u{1F1F5}\u{1F1F0}"
      },
      {
        name: "poland",
        unicode: "1f1f5-1f1f1",
        char: "\u{1F1F5}\u{1F1F1}"
      },
      {
        name: "saint pierre and miquelon",
        unicode: "1f1f5-1f1f2",
        char: "\u{1F1F5}\u{1F1F2}"
      },
      {
        name: "pitcairn",
        unicode: "1f1f5-1f1f3",
        char: "\u{1F1F5}\u{1F1F3}"
      },
      {
        name: "puerto rico",
        unicode: "1f1f5-1f1f7",
        char: "\u{1F1F5}\u{1F1F7}"
      },
      {
        name: "palestinian authority",
        unicode: "1f1f5-1f1f8",
        char: "\u{1F1F5}\u{1F1F8}"
      },
      {
        name: "portugal",
        unicode: "1f1f5-1f1f9",
        char: "\u{1F1F5}\u{1F1F9}"
      },
      {
        name: "palau",
        unicode: "1f1f5-1f1fc",
        char: "\u{1F1F5}\u{1F1FC}"
      },
      {
        name: "paraguay",
        unicode: "1f1f5-1f1fe",
        char: "\u{1F1F5}\u{1F1FE}"
      },
      {
        name: "qatar",
        unicode: "1f1f6-1f1e6",
        char: "\u{1F1F6}\u{1F1E6}"
      },
      {
        name: "r\xE9union",
        unicode: "1f1f7-1f1ea",
        char: "\u{1F1F7}\u{1F1EA}"
      },
      {
        name: "romania",
        unicode: "1f1f7-1f1f4",
        char: "\u{1F1F7}\u{1F1F4}"
      },
      {
        name: "serbia",
        unicode: "1f1f7-1f1f8",
        char: "\u{1F1F7}\u{1F1F8}"
      },
      {
        name: "russia",
        unicode: "1f1f7-1f1fa",
        char: "\u{1F1F7}\u{1F1FA}"
      },
      {
        name: "rwanda",
        unicode: "1f1f7-1f1fc",
        char: "\u{1F1F7}\u{1F1FC}"
      },
      {
        name: "saudi arabia",
        unicode: "1f1f8-1f1e6",
        char: "\u{1F1F8}\u{1F1E6}"
      },
      {
        name: "the solomon islands",
        unicode: "1f1f8-1f1e7",
        char: "\u{1F1F8}\u{1F1E7}"
      },
      {
        name: "the seychelles",
        unicode: "1f1f8-1f1e8",
        char: "\u{1F1F8}\u{1F1E8}"
      },
      {
        name: "sudan",
        unicode: "1f1f8-1f1e9",
        char: "\u{1F1F8}\u{1F1E9}"
      },
      {
        name: "sweden",
        unicode: "1f1f8-1f1ea",
        char: "\u{1F1F8}\u{1F1EA}"
      },
      {
        name: "singapore",
        unicode: "1f1f8-1f1ec",
        char: "\u{1F1F8}\u{1F1EC}"
      },
      {
        name: "saint helena",
        unicode: "1f1f8-1f1ed",
        char: "\u{1F1F8}\u{1F1ED}"
      },
      {
        name: "slovenia",
        unicode: "1f1f8-1f1ee",
        char: "\u{1F1F8}\u{1F1EE}"
      },
      {
        name: "svalbard and jan mayen",
        unicode: "1f1f8-1f1ef",
        char: "\u{1F1F8}\u{1F1EF}"
      },
      {
        name: "slovakia",
        unicode: "1f1f8-1f1f0",
        char: "\u{1F1F8}\u{1F1F0}"
      },
      {
        name: "sierra leone",
        unicode: "1f1f8-1f1f1",
        char: "\u{1F1F8}\u{1F1F1}"
      },
      {
        name: "san marino",
        unicode: "1f1f8-1f1f2",
        char: "\u{1F1F8}\u{1F1F2}"
      },
      {
        name: "senegal",
        unicode: "1f1f8-1f1f3",
        char: "\u{1F1F8}\u{1F1F3}"
      },
      {
        name: "somalia",
        unicode: "1f1f8-1f1f4",
        char: "\u{1F1F8}\u{1F1F4}"
      },
      {
        name: "suriname",
        unicode: "1f1f8-1f1f7",
        char: "\u{1F1F8}\u{1F1F7}"
      },
      {
        name: "south sudan",
        unicode: "1f1f8-1f1f8",
        char: "\u{1F1F8}\u{1F1F8}"
      },
      {
        name: "s\xE3o tom\xE9 and pr\xEDncipe",
        unicode: "1f1f8-1f1f9",
        char: "\u{1F1F8}\u{1F1F9}"
      },
      {
        name: "el salvador",
        unicode: "1f1f8-1f1fb",
        char: "\u{1F1F8}\u{1F1FB}"
      },
      {
        name: "sint maarten",
        unicode: "1f1f8-1f1fd",
        char: "\u{1F1F8}\u{1F1FD}"
      },
      {
        name: "syria",
        unicode: "1f1f8-1f1fe",
        char: "\u{1F1F8}\u{1F1FE}"
      },
      {
        name: "swaziland",
        unicode: "1f1f8-1f1ff",
        char: "\u{1F1F8}\u{1F1FF}"
      },
      {
        name: "tristan da cunha",
        unicode: "1f1f9-1f1e6",
        char: "\u{1F1F9}\u{1F1E6}"
      },
      {
        name: "turks and caicos islands",
        unicode: "1f1f9-1f1e8",
        char: "\u{1F1F9}\u{1F1E8}"
      },
      {
        name: "chad",
        unicode: "1f1f9-1f1e9",
        char: "\u{1F1F9}\u{1F1E9}"
      },
      {
        name: "french southern territories",
        unicode: "1f1f9-1f1eb",
        char: "\u{1F1F9}\u{1F1EB}"
      },
      {
        name: "togo",
        unicode: "1f1f9-1f1ec",
        char: "\u{1F1F9}\u{1F1EC}"
      },
      {
        name: "thailand",
        unicode: "1f1f9-1f1ed",
        char: "\u{1F1F9}\u{1F1ED}"
      },
      {
        name: "tajikistan",
        unicode: "1f1f9-1f1ef",
        char: "\u{1F1F9}\u{1F1EF}"
      },
      {
        name: "tokelau",
        unicode: "1f1f9-1f1f0",
        char: "\u{1F1F9}\u{1F1F0}"
      },
      {
        name: "timor-leste",
        unicode: "1f1f9-1f1f1",
        char: "\u{1F1F9}\u{1F1F1}"
      },
      {
        name: "turkmenistan",
        unicode: "1f1f9-1f1f2",
        char: "\u{1F1F9}\u{1F1F2}"
      },
      {
        name: "tunisia",
        unicode: "1f1f9-1f1f3",
        char: "\u{1F1F9}\u{1F1F3}"
      },
      {
        name: "tonga",
        unicode: "1f1f9-1f1f4",
        char: "\u{1F1F9}\u{1F1F4}"
      },
      {
        name: "turkey",
        unicode: "1f1f9-1f1f7",
        char: "\u{1F1F9}\u{1F1F7}"
      },
      {
        name: "trinidad and tobago",
        unicode: "1f1f9-1f1f9",
        char: "\u{1F1F9}\u{1F1F9}"
      },
      {
        name: "tuvalu",
        unicode: "1f1f9-1f1fb",
        char: "\u{1F1F9}\u{1F1FB}"
      },
      {
        name: "the republic of china",
        unicode: "1f1f9-1f1fc",
        char: "\u{1F1F9}\u{1F1FC}"
      },
      {
        name: "tanzania",
        unicode: "1f1f9-1f1ff",
        char: "\u{1F1F9}\u{1F1FF}"
      },
      {
        name: "ukraine",
        unicode: "1f1fa-1f1e6",
        char: "\u{1F1FA}\u{1F1E6}"
      },
      {
        name: "uganda",
        unicode: "1f1fa-1f1ec",
        char: "\u{1F1FA}\u{1F1EC}"
      },
      {
        name: "united states minor outlying islands",
        unicode: "1f1fa-1f1f2",
        char: "\u{1F1FA}\u{1F1F2}"
      },
      {
        name: "united states",
        unicode: "1f1fa-1f1f8",
        char: "\u{1F1FA}\u{1F1F8}"
      },
      {
        name: "uruguay",
        unicode: "1f1fa-1f1fe",
        char: "\u{1F1FA}\u{1F1FE}"
      },
      {
        name: "uzbekistan",
        unicode: "1f1fa-1f1ff",
        char: "\u{1F1FA}\u{1F1FF}"
      },
      {
        name: "the vatican city",
        unicode: "1f1fb-1f1e6",
        char: "\u{1F1FB}\u{1F1E6}"
      },
      {
        name: "saint vincent and the grenadines",
        unicode: "1f1fb-1f1e8",
        char: "\u{1F1FB}\u{1F1E8}"
      },
      {
        name: "venezuela",
        unicode: "1f1fb-1f1ea",
        char: "\u{1F1FB}\u{1F1EA}"
      },
      {
        name: "british virgin islands",
        unicode: "1f1fb-1f1ec",
        char: "\u{1F1FB}\u{1F1EC}"
      },
      {
        name: "u.s. virgin islands",
        unicode: "1f1fb-1f1ee",
        char: "\u{1F1FB}\u{1F1EE}"
      },
      {
        name: "vietnam",
        unicode: "1f1fb-1f1f3",
        char: "\u{1F1FB}\u{1F1F3}"
      },
      {
        name: "vanuatu",
        unicode: "1f1fb-1f1fa",
        char: "\u{1F1FB}\u{1F1FA}"
      },
      {
        name: "wallis and futuna",
        unicode: "1f1fc-1f1eb",
        char: "\u{1F1FC}\u{1F1EB}"
      },
      {
        name: "samoa",
        unicode: "1f1fc-1f1f8",
        char: "\u{1F1FC}\u{1F1F8}"
      },
      {
        name: "kosovo",
        unicode: "1f1fd-1f1f0",
        char: "\u{1F1FD}\u{1F1F0}"
      },
      {
        name: "yemen",
        unicode: "1f1fe-1f1ea",
        char: "\u{1F1FE}\u{1F1EA}"
      },
      {
        name: "mayotte",
        unicode: "1f1fe-1f1f9",
        char: "\u{1F1FE}\u{1F1F9}"
      },
      {
        name: "south africa",
        unicode: "1f1ff-1f1e6",
        char: "\u{1F1FF}\u{1F1E6}"
      },
      {
        name: "zambia",
        unicode: "1f1ff-1f1f2",
        char: "\u{1F1FF}\u{1F1F2}"
      },
      {
        name: "zimbabwe",
        unicode: "1f1ff-1f1fc",
        char: "\u{1F1FF}\u{1F1FC}"
      }
    ]
  }
];

// EmojiPicker.tsx
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@xipkg/tooltip";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var recentIcon = { icon: Clock, name: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435" };
var categoryIcons = [
  { icon: Emotions, name: "\u041B\u0438\u0446\u0430 \u0438\xA0\u044D\u043C\u043E\u0446\u0438\u0438" },
  { icon: Nature, name: "\u041F\u0440\u0438\u0440\u043E\u0434\u0430" },
  { icon: Food, name: "\u0415\u0434\u0430\xA0\u0438\xA0\u043D\u0430\u043F\u0438\u0442\u043A\u0438" },
  { icon: Activity, name: "\u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438" },
  { icon: Places, name: "\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F \u0438\xA0\u043C\u0435\u0441\u0442\u0430" },
  { icon: Objects, name: "\u041E\u0431\u044A\u0435\u043A\u0442\u044B" },
  { icon: Heart, name: "\u0421\u0438\u043C\u0432\u043E\u043B\u044B" },
  { icon: Flag, name: "\u0424\u043B\u0430\u0433\u0438" }
];
var EmojiPicker = ({ recentEmojis, onEmojiSelect }) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState3(0);
  const scrollContainerRef = useRef3(null);
  const [searchQuery, setSearchQuery] = useState3("");
  const categories = emojis_default;
  const handleSearchEmoji = (e) => {
    setActiveCategoryIndex(0);
    setSearchQuery(e.target.value);
  };
  const filteredCategories = useMemo2(() => {
    if (!categories) return { name: "empty", emojis: [] };
    return {
      name: "search",
      emojis: categories.map((category) => category.emojis).flat().filter((emoji) => emoji.name.toLowerCase().includes(searchQuery.toLowerCase()))
    };
  }, [categories, searchQuery]);
  const matchedEmojis = useMemo2(() => {
    if (!categories || !recentEmojis) return [];
    return categories.flatMap(
      (category) => category.emojis.filter((emoji) => recentEmojis.includes(emoji.unicode))
    );
  }, [categories, recentEmojis]);
  const emojiCategoriesIcons = matchedEmojis.length > 0 ? [recentIcon, ...categoryIcons] : categoryIcons;
  const emojiCategories = useMemo2(() => {
    if (!categories) {
      return [];
    }
    return matchedEmojis.length > 0 ? [{ emojis: matchedEmojis, name: "recent" }, ...categories] : categories;
  }, [categories, matchedEmojis]);
  const scrollToCategory = (target) => {
    target.scrollIntoView({
      block: "start",
      inline: "nearest"
    });
  };
  const selectCategory = (index) => {
    setSearchQuery("");
    setTimeout(() => {
      setActiveCategoryIndex(index);
    }, 50);
    const container = scrollContainerRef.current;
    if (!container) return;
    const categoryEl = container.querySelector(`#emoji-category-${index}`);
    if (categoryEl) {
      scrollToCategory(categoryEl);
    }
  };
  const handleEmojiClick = useCallback(
    (emoji) => {
      const char = unicodeToNative(emoji);
      onEmojiSelect(char);
    },
    [onEmojiSelect]
  );
  return /* @__PURE__ */ jsxs2(DropdownMenu, { children: [
    /* @__PURE__ */ jsx2(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx2(Button2, { variant: "ghost", className: "bg-gray-0 h-auto rounded-[4px] p-1", children: /* @__PURE__ */ jsx2(Emotions, {}) }) }),
    /* @__PURE__ */ jsx2(DropdownMenuContent, { className: "p-0", align: "end", sideOffset: 8, children: /* @__PURE__ */ jsxs2("div", { className: "flex h-[296px] w-[276px] rounded-lg", children: [
      /* @__PURE__ */ jsx2("div", { className: "bg-gray-5 flex flex-col gap-2 p-2", children: /* @__PURE__ */ jsx2(TooltipProvider, { children: emojiCategoriesIcons.map(({ icon: Icon, name }, index) => {
        return /* @__PURE__ */ jsxs2(Tooltip, { children: [
          /* @__PURE__ */ jsx2(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx2(
            Button2,
            {
              variant: "ghost",
              className: cn2(
                "hover:bg-brand-0 group h-auto rounded-none bg-transparent p-1",
                index === activeCategoryIndex ? "bg-brand-0 text-brand-100 focus:bg-brand-0" : "text-brand-50"
              ),
              onClick: () => selectCategory(index),
              children: /* @__PURE__ */ jsx2(
                Icon,
                {
                  size: "s",
                  className: "fill-current group-hover:fill-current group-focus:fill-current"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx2(TooltipContent, { side: "right", className: "z-[99]", children: /* @__PURE__ */ jsx2("p", { children: name }) })
        ] }, index);
      }) }) }),
      /* @__PURE__ */ jsxs2("div", { className: "bg-gray-0 flex w-full flex-col gap-2 p-2", children: [
        /* @__PURE__ */ jsx2(
          Input,
          {
            variant: "s",
            before: /* @__PURE__ */ jsx2(Search, { size: "s" }),
            placeholder: "\u041F\u043E\u0438\u0441\u043A",
            className: "border",
            value: searchQuery,
            onChange: handleSearchEmoji
          }
        ),
        /* @__PURE__ */ jsx2(
          "div",
          {
            className: "h-full overflow-y-auto",
            ref: scrollContainerRef,
            style: { scrollbarWidth: "none", msOverflowStyle: "none" },
            children: filteredCategories && searchQuery ? /* @__PURE__ */ jsx2(
              EmojiCategory,
              {
                setActiveCategory: setActiveCategoryIndex,
                category: filteredCategories,
                currentIndex: 0,
                handleEmojiClick,
                containerRef: scrollContainerRef,
                isIntersectionEnabled: false
              }
            ) : emojiCategories.length > 0 && emojiCategories.map((emojis, index) => /* @__PURE__ */ jsx2(
              EmojiCategory,
              {
                setActiveCategory: setActiveCategoryIndex,
                category: emojis,
                currentIndex: index,
                handleEmojiClick,
                containerRef: scrollContainerRef
              },
              index
            ))
          }
        )
      ] })
    ] }) })
  ] });
};
export {
  EmojiPicker
};
