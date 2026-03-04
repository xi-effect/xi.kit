import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@xipkg/toggle';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Toggle />,
};

export const Checked: Story = {
  render: () => <Toggle defaultChecked />,
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle disabled />
      <Toggle disabled defaultChecked />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle id="airplane-mode" />
      <label htmlFor="airplane-mode" className="text-sm font-medium">
        Режим полета
      </label>
    </div>
  ),
};

export const Small: Story = {
  render: () => <Toggle size="s" />,
};
