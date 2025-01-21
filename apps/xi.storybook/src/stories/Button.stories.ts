import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@xipkg/button';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    size: 'l',
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    disabled: false,
    onClick: action('default click'),
  },
};

export const DefaultSpiner: Story = {
  args: {
    variant: 'default-spinner',
    children: '',
    disabled: false,
    onClick: action('default click'),
    className: 'w-32',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    disabled: false,
    onClick: action('default click'),
  },
};

export const SecondarySpinner: Story = {
  args: {
    variant: 'secondary-spinner',
    children: '',
    disabled: false,
    onClick: action('default click'),
    className: 'w-32',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    disabled: false,
    onClick: action('default click'),
  },
};

export const GhostSpiner: Story = {
  args: {
    variant: 'ghost-spinner',
    children: '',
    disabled: false,
    onClick: action('default click'),
    className: 'w-32',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    disabled: false,
    onClick: action('default click'),
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    disabled: false,
    onClick: action('default click'),
  },
};

export const SecondaryError: Story = {
  args: {
    variant: 'secondary-error',
    disabled: false,
    onClick: action('default click'),
  },
};
