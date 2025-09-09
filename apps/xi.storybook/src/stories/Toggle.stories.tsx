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

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle size="l" />
      <Toggle size="m" />
      <Toggle size="s" />
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

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle disabled />
      <Toggle disabled defaultChecked />
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Toggle id="notifications" />
        <label htmlFor="notifications" className="text-sm font-medium">
          Уведомления
        </label>
      </div>
      <p className="text-gray-60 dark:text-gray-40 text-sm">
        Включите уведомления, чтобы получать обновления о новых сообщениях.
      </p>
    </div>
  ),
};
