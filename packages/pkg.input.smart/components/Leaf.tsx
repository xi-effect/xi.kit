import React from 'react';
import { RenderLeafProps } from 'slate-react';

export const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  // console.log('children', children);
  let modifiedChildren = children;

  if (leaf.bold) {
    modifiedChildren = <strong>{modifiedChildren}</strong>;
  }

  if (leaf.italic) {
    modifiedChildren = <em>{modifiedChildren}</em>;
  }

  if (leaf.underline) {
    modifiedChildren = <u>{modifiedChildren}</u>;
  }

  if (leaf.strikethrough) {
    modifiedChildren = <span style={{ textDecoration: 'line-through' }}>{modifiedChildren}</span>;
  }

  if (leaf.code) {
    modifiedChildren = <code className='bg-gray-10' style={{ backgroundColor: '', fontFamily: 'monospace', padding: '0.2em 0.4em', borderRadius: '4px' }}>{modifiedChildren}</code>;
  }

  // if (leaf.link) {
  //   return (
  //     <a href={leaf.link} target="_blank" rel="noopener noreferrer" {...attributes}>
  //       {children}
  //     </a>
  //   );
  // }

  // // Проверяем, является ли узел ссылкой
  // if (leaf.type === 'link') {
  //   const { url } = leaf; // Получаем URL
  //   return (
  //     <a href={url} target="_blank" rel="noopener noreferrer" {...attributes}>
  //       {children}
  //     </a>
  //   );
  // }

  return <span {...attributes}>{modifiedChildren}</span>;
};
