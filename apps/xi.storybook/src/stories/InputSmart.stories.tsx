import type { Meta, StoryObj } from '@storybook/react';
import { SmartInput } from '@xipkg/inputsmart';
import { useState } from 'react';

const meta = {
  title: 'Components/InputSmart',
  component: SmartInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SmartInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const SmartInputDemo = () => {
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ]);

  return (
    <div className="w-full max-w-2xl">
      <div className="text-gray-60 dark:text-gray-40 mb-4 text-sm">
        Используйте следующие сочетания клавиш для форматирования:
        <ul className="mt-2 list-disc pl-4">
          <li>Ctrl/Cmd + B для жирного текста</li>
          <li>Ctrl/Cmd + I для курсива</li>
          <li>Ctrl/Cmd + U для подчеркнутого текста</li>
          <li>Ctrl/Cmd + S для зачеркнутого текста</li>
        </ul>
      </div>
      <SmartInput
        value={value}
        onChange={setValue}
        className="min-h-[200px] rounded-lg border bg-white p-4 dark:bg-gray-100"
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <SmartInputDemo />,
};

export const WithInitialValue: Story = {
  render: () => (
    <SmartInput
      initialValue={[
        {
          type: 'paragraph',
          children: [
            { text: 'Это пример текста с ' },
            { text: 'жирным', bold: true },
            { text: ' и ' },
            { text: 'курсивом', italic: true },
            { text: ' и ' },
            { text: 'подчеркнутым', underline: true },
            { text: ' и ' },
            { text: 'зачеркнутым', strikethrough: true },
            { text: ' текстом.' },
          ],
        },
      ]}
      className="min-h-[200px] rounded-lg border bg-white p-4 dark:bg-gray-100"
    />
  ),
};
