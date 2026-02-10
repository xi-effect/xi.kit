import { Button } from '@xipkg/button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'error', 'success', 'none'],
      description: 'Определяет стиль кнопки',
      defaultValue: 'primary',
    },
    size: {
      control: 'select',
      options: ['l', 'm', 's'],
      description: 'Определяет размер кнопки',
      defaultValue: 'm',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает кнопку',
      defaultValue: false,
    },
    loading: {
      control: 'boolean',
      description: 'Состояние загрузки кнопки',
      defaultValue: false,
    },
  },
  args: {
    size: 'm',
    children: 'Кнопка',
    disabled: false,
    loading: false,
    className: 'w-48',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};
