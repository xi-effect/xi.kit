import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '@xipkg/datepicker';
import { Button } from '@xipkg/button';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useState } from 'react';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date>();

    return (
      <DatePicker date={date} onSelect={setDate}>
        <Button variant="outline" className="w-[280px] justify-start text-left font-normal">
          {date ? (
            format(date, 'PPP', { locale: ru })
          ) : (
            <span className="text-gray-60">Выберите дату</span>
          )}
        </Button>
      </DatePicker>
    );
  },
};

export const WithRange: Story = {
  render: () => {
    const [date, setDate] = useState<Date>();

    return (
      <DatePicker
        date={date}
        onSelect={setDate}
        mode="range"
        numberOfMonths={2}
      >
        <Button variant="outline" className="w-[280px] justify-start text-left font-normal">
          {date ? (
            format(date, 'PPP', { locale: ru })
          ) : (
            <span className="text-gray-60">Выберите диапазон дат</span>
          )}
        </Button>
      </DatePicker>
    );
  },
};

export const WithDisabledDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date>();

    return (
      <DatePicker
        date={date}
        onSelect={setDate}
        disabled={(date) =>
          date > new Date() || date < new Date('1900-01-01')
        }
      >
        <Button variant="outline" className="w-[280px] justify-start text-left font-normal">
          {date ? (
            format(date, 'PPP', { locale: ru })
          ) : (
            <span className="text-gray-60">Выберите дату</span>
          )}
        </Button>
      </DatePicker>
    );
  },
}; 
