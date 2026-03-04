import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  Switcher,
  SwitcherList,
  SwitcherTrigger,
} from '@xipkg/switcher';

const meta = {
  title: 'Components/Switcher',
  component: Switcher,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Switcher defaultValue="one">
      <SwitcherList>
        <SwitcherTrigger value="one">Один</SwitcherTrigger>
        <SwitcherTrigger value="two">Два</SwitcherTrigger>
        <SwitcherTrigger value="three">Три</SwitcherTrigger>
      </SwitcherList>
    </Switcher>
  ),
};

export const VariantLine: Story = {
  render: () => (
    <Switcher defaultValue="one">
      <SwitcherList variant="line">
        <SwitcherTrigger value="one">Один</SwitcherTrigger>
        <SwitcherTrigger value="two">Два</SwitcherTrigger>
        <SwitcherTrigger value="three">Три</SwitcherTrigger>
      </SwitcherList>
    </Switcher>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Switcher defaultValue="one" orientation="vertical">
      <SwitcherList>
        <SwitcherTrigger value="one">Один</SwitcherTrigger>
        <SwitcherTrigger value="two">Два</SwitcherTrigger>
        <SwitcherTrigger value="three">Три</SwitcherTrigger>
      </SwitcherList>
    </Switcher>
  ),
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [value, setValue] = React.useState('two');
    return (
      <Switcher value={value} onValueChange={setValue}>
        <SwitcherList>
          <SwitcherTrigger value="one">Один</SwitcherTrigger>
          <SwitcherTrigger value="two">Два</SwitcherTrigger>
          <SwitcherTrigger value="three">Три</SwitcherTrigger>
        </SwitcherList>
      </Switcher>
    );
  },
};
