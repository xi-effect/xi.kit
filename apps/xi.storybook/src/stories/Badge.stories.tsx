import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@xipkg/badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'success', 'warning', 'outline'],
      description: 'Определяет стиль бейджа',
      defaultValue: 'default',
    },
    size: {
      control: 'select',
      options: ['l', 'm', 's'],
      description: 'Определяет размер бейджа',
      defaultValue: 'm',
    },
  },
  args: {
    children: 'Badge',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Large: Story = {
  args: {
    size: 'l',
  },
};

export const Medium: Story = {
  args: {
    size: 'm',
  },
};

export const Small: Story = {
  args: {
    size: 's',
  },
}; 
