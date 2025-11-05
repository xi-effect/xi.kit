import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@xipkg/textarea';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Textarea placeholder="Введите текст..." />,
};

export const WithMaxLength: Story = {
  render: () => (
    <Textarea
      placeholder="Введите текст..."
      maxLength={100}
      threshold={50}
      className="min-h-[100px]"
    />
  ),
};

export const WithMaxRows: Story = {
  render: () => <Textarea placeholder="Введите текст длиннее 4 строк..." maxRows={4} />,
};

export const WithError: Story = {
  render: () => <Textarea placeholder="Введите текст..." error className="min-h-[100px]" />,
};

export const WithWarning: Story = {
  render: () => <Textarea placeholder="Введите текст..." warning className="min-h-[100px]" />,
};

export const Small: Story = {
  render: () => <Textarea placeholder="Введите текст..." variant="s" className="min-h-[100px]" />,
};

export const Disabled: Story = {
  render: () => <Textarea placeholder="Введите текст..." disabled className="min-h-[100px]" />,
};

export const WithValue: Story = {
  render: () => (
    <Textarea
      placeholder="Введите текст..."
      defaultValue="Это пример текста в текстовом поле. Текст автоматически переносится на новую строку при достижении максимальной ширины."
      className="min-h-[100px]"
    />
  ),
};
