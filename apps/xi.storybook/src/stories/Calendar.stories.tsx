import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@xipkg/calendar';
import { addDays } from 'date-fns';

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Selected: Story = {
  args: {
    selected: new Date(),
  },
};

export const WithRange: Story = {
  args: {
    mode: 'range',
    selected: {
      from: new Date(),
      to: addDays(new Date(), 7),
    },
  },
};

export const WithDisabledDays: Story = {
  args: {
    disabled: [
      { from: new Date(), to: addDays(new Date(), 5) },
      { from: addDays(new Date(), 10), to: addDays(new Date(), 15) },
    ],
  },
};

export const WithFooter: Story = {
  args: {
    mode: 'range',
    selected: {
      from: new Date(),
      to: addDays(new Date(), 7),
    },
    footer: 'Выберите диапазон дат',
  },
}; 
