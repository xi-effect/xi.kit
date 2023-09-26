import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../packages/pkg.button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: { control: 'select', options: ['default', 'secondary', 'ghost', 'error', 'success'] },
    size: { control: 'select', options: ['l', 'm', 's'] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Кнопка',
    variant: 'default',
    size: 'm',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Кнопка',
    variant: 'secondary',
    size: 'm',
  },
};

export const Large: Story = {
  args: {
    children: 'Кнопка',
    variant: 'default',
    size: 'l',
  },
};

export const Small: Story = {
  args: {
    children: 'Кнопка',
    variant: 'default',
    size: 's',
  },
};
