import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker, type DatePickerProps } from '@xipkg/datepicker';
import { Button } from '@xipkg/button';
import { addDays } from 'date-fns';

const meta: Meta<DatePickerProps> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Date Picker',
  },
} satisfies Meta<DatePickerProps>;

export default meta;
type Story = StoryObj<DatePickerProps>;

export const Default: Story = {
  args: {
    children: (
      <Button variant="ghost" className="w-[280px] justify-start text-left font-normal">
        Выберите дату
      </Button>
    ),
    calendarProps: { mode: 'single', selected: addDays(new Date(), 2) },
  },
};

export const WithRange: Story = {
  args: {
    children: (
      <Button variant="ghost" className="w-[280px] justify-start text-left font-normal">
        Выберите дату
      </Button>
    ),
    calendarProps: {
      mode: 'range',
      selected: { from: new Date(), to: addDays(new Date(), 2) },
    },
  },
};

export const WithDisabledDates: Story = {
  args: {
    children: (
      <Button variant="ghost" className="w-[280px] justify-start text-left font-normal">
        Выберите дату
      </Button>
    ),
    calendarProps: {
      mode: 'single',
      selected: addDays(new Date(), 2),
      disabled: (date) => date > new Date() || date < new Date('1900-01-01'),
    },
  },
};
