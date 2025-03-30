import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@xipkg/checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Checkbox',
  },
};

export const Checked: Story = {
  args: {
    children: 'Checked checkbox',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled checkbox',
    disabled: true,
  },
};

export const WithWarning: Story = {
  args: {
    children: 'Checkbox with warning',
    state: 'warning',
  },
};

export const WithError: Story = {
  args: {
    children: 'Checkbox with error',
    state: 'error',
  },
};

export const Large: Story = {
  args: {
    children: 'Large checkbox',
    size: 'l',
  },
};

export const Small: Story = {
  args: {
    children: 'Small checkbox',
    size: 's',
  },
}; 
