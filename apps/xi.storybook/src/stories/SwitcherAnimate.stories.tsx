import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { SwitcherAnimate } from '@xipkg/switcher-animate';

const meta = {
  title: 'Components/SwitcherAnimate',
  component: SwitcherAnimate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'line'],
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof SwitcherAnimate>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultTabs = [
  { id: 'one', label: 'Один' },
  { id: 'two', label: 'Два' },
  { id: 'three', label: 'Три' },
];

export const Default: Story = {
  args: {
    tabs: defaultTabs,
    defaultTab: 'one',
  },
};

export const VariantLine: Story = {
  args: {
    tabs: defaultTabs,
    defaultTab: 'one',
    variant: 'line',
  },
};

export const Vertical: Story = {
  args: {
    tabs: defaultTabs,
    defaultTab: 'one',
    orientation: 'vertical',
  },
};

export const VerticalLine: Story = {
  args: {
    tabs: defaultTabs,
    defaultTab: 'one',
    variant: 'line',
    orientation: 'vertical',
  },
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [value, setValue] = React.useState('two');
    return (
      <SwitcherAnimate
        tabs={defaultTabs}
        activeTab={value}
        onChange={setValue}
      />
    );
  },
};

export const WithIcons: Story = {
  render: function WithIconsStory() {
    const [value, setValue] = React.useState('one');
    const tabs = [
      { id: 'one', label: 'Профиль', icon: <span aria-hidden>👤</span> },
      { id: 'two', label: 'Настройки', icon: <span aria-hidden>⚙️</span> },
      { id: 'three', label: 'Выход', icon: <span aria-hidden>🚪</span> },
    ];
    return (
      <SwitcherAnimate
        tabs={tabs}
        activeTab={value}
        onChange={setValue}
      />
    );
  },
};
