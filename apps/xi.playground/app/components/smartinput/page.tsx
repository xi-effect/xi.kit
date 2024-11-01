'use client';

import React from "react";

import { SmartInput, MarkdownPreview, slateToMarkdown, markdownToSlate } from "@xipkg/inputsmart";

const initialValue = [
  {
    type: 'paragraph',
    children: [ { text: 'Slate' }
    ],
  },
  {
    type: 'paragraph',
    children: [
      { text: 'жирным', bold: true },
      { text: ' ', },
      { text: 'курсивом', italic: true },
      { text: ' ', },
      { text: 'зачёркнуто', strikethrough: true },
      { text: ' ', },
      { text: 'подчёркнутый', underline: true },
    ],
  },
  {
    type: 'paragraph',
    children: [
      { text: ' ' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      { text: 'Markdown' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      { text: '**жирным**' },
      { text: ' ', },
      { text: '*курсивом*' },
      { text: ' ', },
      { text: '~~зачёркнуто~~' },
      { text: ' ', },
      { text: '__подчёркнутый__' },
    ],
  },
  // {
  //   type: 'link',
  //   url: 'https://example.com',
  //   children: [{ text: 'экзапмл ссылки' }],
  // },
  // {
  //   type: 'paragraph',
  //   children: [
  //     { text: '[Пример ссылки](https://example.com)' }
  //   ]
  // }
];


const SmartInputDemo = () => {
  const [value, setValue] = React.useState([]);
  const [markdown, setMarkdown] = React.useState('');

  const [showMarkdownToSlate, setShowMarkdownToSlate] = React.useState(false);

  const handleChange = (value) => {
    setValue(value);
    console.log('value', value);
    setMarkdown(slateToMarkdown(value))
  }

  console.log('markdown', markdown);

  return (
    <>
      <SmartInput initialValue={initialValue} onChange={handleChange} />
      <div className="my-12">
        {JSON.stringify(value)}
      </div>
      <MarkdownPreview markdown={markdown} />
      <button onClick={() => setShowMarkdownToSlate(prev => !prev)} className="mt-6 mb-2"> Toggle </button>
      {showMarkdownToSlate && <div className="my-12">
        {JSON.stringify(markdownToSlate(markdown))}
        <SmartInput initialValue={markdownToSlate(markdown)} />
      </div>}
    </>
  )
};

export default SmartInputDemo;
