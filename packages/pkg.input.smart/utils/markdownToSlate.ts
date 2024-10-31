import { unified } from 'unified';
import parse from 'remark-parse';
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
  underlined?: boolean;
};

// Обновлённая функция для разбора и применения инлайн-стилей
const parseInlineStyles = (text: string): CustomText[] => {
  const result: CustomText[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|~~[^~]+~~|_[^_]+_)/g;
  let lastIndex = 0;

  text.replace(regex, (match, _, offset) => {
    if (offset > lastIndex) {
      result.push({ text: text.slice(lastIndex, offset) });
    }

    const styledText = match.replace(/^\*\*|\*\*$|^\*|\*$|^~~|~~$|^_|_$/g, '');
    const styledNode: CustomText = { text: styledText };

    if (match.startsWith('**')) styledNode.bold = true;
    if (match.startsWith('*') && !match.startsWith('**')) styledNode.italic = true;
    if (match.startsWith('~~')) styledNode.strikethrough = true;
    if (match.startsWith('_') && !match.startsWith('**')) styledNode.underlined = true;

    result.push(styledNode);
    lastIndex = offset + match.length;
    return '';
  });

  if (lastIndex < text.length) {
    result.push({ text: text.slice(lastIndex) });
  }

  return result;
};

// Основная функция для преобразования Markdown в Slate
export const markdownToSlate = (markdown: string): CustomElement[] => {
  const tree = unified().use(parse).parse(markdown);
  const slateNodes: CustomElement[] = [];

  visit(tree, 'root', (node) => {
    node.children.forEach((child) => {
      switch (child.type) {
        case 'paragraph':
          const paragraphChildren: CustomText[] = [];
          child.children.forEach((textNode: any) => {
            paragraphChildren.push(...parseInlineStyles(textNode.value || ''));
          });
          slateNodes.push({ type: 'paragraph', children: paragraphChildren });
          break;

        case 'heading':
          slateNodes.push({
            type: 'heading',
            level: child.depth,
            children: child.children.map((textNode: any) => ({ text: textNode.value || '' })),
          });
          break;

        case 'code':
          slateNodes.push({
            type: 'codeBlock',
            language: child.lang || undefined,
            children: [{ text: child.value || '' }],
          });
          break;

        default:
          break;
      }
    });
  });

  return slateNodes;
};
