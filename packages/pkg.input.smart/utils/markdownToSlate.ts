import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';

type CustomElement =
  | { type: 'paragraph'; children: CustomText[] }
  | { type: 'heading'; level: 1 | 2 | 3 | 4 | 5 | 6; children: CustomText[] }
  | { type: 'codeBlock'; language?: string; children: CustomText[] };

type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
  beforeUnderline?: boolean;
  afterUnderline?: boolean;
};

const mergeTextWithFlags = (slateObjects: CustomElement[]): CustomElement[] => {
  for (let i = 0; i < slateObjects.length; i++) {
    const obj = slateObjects[i];

    if (obj.type === "paragraph") {
      let beforeText = '';
      let afterText = '';
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
        // Удаляем старые флаги и текст "подчёркнутый"
        obj.children = obj.children.filter(child => 
          !child.beforeUnderline && 
          !child.afterUnderline && 
          child.text !== "подчёркнутый"
        );

        // Добавляем объединенный текст
        obj.children.push({ text: `${beforeText}${afterText}` });
      }
    }
  }

  return slateObjects;
}


// Плагин для замены `__текста__` на <u>текст</u>
const formatMarkdown = (markdown: string) => {
  return markdown.replace(/__(.*?)__/g, '<u>$1</u>');
};

// Функция для создания Markdown AST с учетом подчеркивания
export const markdownToSlate = (markdown: string): CustomElement[] => {
  const ast = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .parse(formatMarkdown(markdown));

  const slateElements: CustomElement[] = [];

  visit(ast, (node) => {
    if (node.type === 'paragraph') {
      slateElements.push({
        type: 'paragraph',
        children: node.children.map((child) => convertMarkdownNodeToSlateText(child)).flat(),
      });
    } else if (node.type === 'heading') {
      slateElements.push({
        type: 'heading',
        level: node.depth as 1 | 2 | 3 | 4 | 5 | 6,
        children: node.children.map((child) => convertMarkdownNodeToSlateText(child)).flat(),
      });
    } else if (node.type === 'code') {
      slateElements.push({
        type: 'codeBlock',
        children: [{ text: node.value || '' }],
      });
    }
  });

  const result = mergeTextWithFlags(slateElements);

  return result;
};

const convertMarkdownNodeToSlateText = (node: any): CustomText[] => {
  if (node.type === 'text') {
    return [{ text: node.value || '' }];
  }

  const children: CustomText[] = [];

  if (node.children) {
    node.children.forEach((child: any) => {
      const childText = convertMarkdownNodeToSlateText(child);
      children.push(...childText);
    });
  }

  let text = children.map((child) => child.text).join('');

  if (node.type === 'html' && node.value === '<u>') {
    text = `__`;
    return [{ text, beforeUnderline: true }];
  }

  if (node.type === 'html' && node.value === '</u>') {
    text = `__`;
    return [{ text, afterUnderline: true }];
  }


  switch (node.type) {
    case 'strong':
      text = `**${text}**`;
      break;
    case 'emphasis':
      text = `*${text}*`;
      break;
    case 'delete':
      text = `~~${text}~~`;
      break;
    case 'underline':
      text = `__${text}__`; // Markdown для подчеркивания
      break;
    default:
      break;
  }

  return [{ text }];
};
