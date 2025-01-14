import React from 'react';
import { RenderLeafProps } from 'slate-react';
import { CustomTextSI } from '@xipkg/slatetypes';

type LeafPropsT = {
  leaf: CustomTextSI;
  children: React.ReactNode;
  attributes: RenderLeafProps['attributes'];
};

export const Leaf = ({ attributes, children, leaf }: LeafPropsT) => {
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
    modifiedChildren = (
      <code
        className="bg-gray-10"
        style={{
          backgroundColor: '',
          fontFamily: 'monospace',
          padding: '0.2em 0.4em',
          borderRadius: '4px',
        }}
      >
        {modifiedChildren}
      </code>
    );
  }

  return <span {...attributes}>{modifiedChildren}</span>;
};
