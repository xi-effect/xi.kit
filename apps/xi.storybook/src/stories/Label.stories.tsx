import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@xipkg/label';
import { Input } from '@xipkg/input';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Enter your email" />
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="password">Password</Label>
      <Input type="password" id="password" placeholder="Enter your password" />
      <p className="text-sm text-gray-60 dark:text-gray-40">
        Your password must be at least 8 characters long.
      </p>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="disabled" className="text-gray-60 dark:text-gray-40">
        Disabled Input
      </Label>
      <Input type="text" id="disabled" disabled placeholder="This input is disabled" />
    </div>
  ),
}; 
