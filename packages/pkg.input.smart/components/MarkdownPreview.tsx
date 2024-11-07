import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'; // Импортируем rehype-raw для обработки HTML
import rehypeReact from 'rehype-react'; // Импортируем rehype-react для рендеринга React-компонентов

type MarkdownPreviewProps = {
  markdown: string;
};

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
};

const CustomLink = ({ href, children, ...props }: CustomLinkProps) => {
  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      className="text-brand-60 no-underline transition duration-300 hover:underline"
      {...props}
    >
      {children}
    </a>
  );
};

// Плагин для замены `__текста__` на <u>текст</u>
const formatMarkdown = (markdown: string) => {
  return markdown.replace(/__(.*?)__/g, '<u>$1</u>');
};

export const MarkdownPreview = ({ markdown }: MarkdownPreviewProps) => {
  // Форматируем Markdown
  const formattedMarkdown = formatMarkdown(markdown);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, [rehypeReact, { createElement: React.createElement }]]} // Добавляем rehype-плагины
      components={{
        a(props) {
          const { node, ...rest } = props;
          return <CustomLink {...(rest as CustomLinkProps)} />;
        },
        u({ children }) {
          return <u>{children}</u>; // Рендерим как подчеркивание
        },
        strong({ children }) {
          return <strong>{children}</strong>; // Оставляем <strong> для жирного текста
        },
      }}
    >
      {formattedMarkdown}
    </ReactMarkdown>
  );
};
