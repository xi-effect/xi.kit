// Определяем типы узлов Slate
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
};

// Функция для преобразования Slate в Markdown
export const slateToMarkdown = (value: CustomElement[]): string => {
  return value.map(node => {
    switch (node.type) {
      case 'paragraph':
        return node.children.map(child => applyInlineStyles(child)).join('') + '\n\n';
      // case 'heading':
      //   return `${'#'.repeat(node.level)} ${node.children.map(child => applyInlineStyles(child)).join('')}\n\n`;
      // case 'codeBlock':
      //   return `\`\`\`${node.language || ''}\n${node.children.map(child => child.text).join('')}\n\`\`\`\n\n`;
      default:
        return '';
    }
  }).join('');
};

// Функция для применения инлайн-стилей
const applyInlineStyles = (child: CustomText): string => {
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
    text = `__${text}__`; // Используем подчеркивание для Markdown
  }

  return text;
};
