import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@xipkg/input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'warning', 'beforeBool', 'afterBool'],
      description: 'Определяет стиль поля ввода',
      defaultValue: 'default',
    },
    size: {
      control: 'select',
      options: ['m', 's'],
      description: 'Определяет размер поля ввода',
      defaultValue: 'm',
    },
  },
  args: {
    variant: 'm',
    error: false,
    warning: false,
    beforeBool: false,
    afterBool: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'm',
    error: false,
    warning: false,
    beforeBool: false,
    afterBool: false,
  },
};

export const Error: Story = {
  args: {
    variant: 'm',
    error: true,
    warning: false,
    beforeBool: false,
    afterBool: false,
  },
};

export const Warning: Story = {
  args: {
    variant: 'm',
    error: false,
    warning: true,
    beforeBool: false,
    afterBool: false,
  },
};

export const BeforeBool: Story = {
  args: {
    variant: 'm',
    error: false,
    warning: false,
    beforeBool: true,
    afterBool: false,
    className: 'pl-11',
  },
};

export const AfterBool: Story = {
  parameters: {
    docs: {
      description: { story: 'AfterBool' },
    },
  },
  args: {
    variant: 'm',
    error: false,
    warning: false,
    beforeBool: false,
    afterBool: true,
    className: 'pr-11',
  },
};
