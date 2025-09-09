import type { Meta, StoryObj } from '@storybook/react';
import { useMaskInput } from '@xipkg/inputmask';
import { Input } from '@xipkg/input';
import { useState } from 'react';

const meta = {
  title: 'Components/InputMask',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const MaskedInput = ({
  mask,
}: {
  mask:
    | 'phone'
    | 'card'
    | 'date'
    | 'time'
    | 'passport'
    | 'inviteCode'
    | 'inviteCodeUrl'
    | 'dateRange'
    | 'any';
}) => {
  const [value, setValue] = useState('');
  const maskRef = useMaskInput(mask);

  return (
    <Input
      ref={maskRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={`Введите ${mask}`}
      className="w-64"
    />
  );
};

export const Phone: Story = {
  render: () => <MaskedInput mask="phone" />,
};

export const Card: Story = {
  render: () => <MaskedInput mask="card" />,
};

export const Date: Story = {
  render: () => <MaskedInput mask="date" />,
};

export const Time: Story = {
  render: () => <MaskedInput mask="time" />,
};

export const Passport: Story = {
  render: () => <MaskedInput mask="passport" />,
};

export const InviteCode: Story = {
  render: () => <MaskedInput mask="inviteCode" />,
};

export const InviteCodeUrl: Story = {
  render: () => <MaskedInput mask="inviteCodeUrl" />,
};

export const DateRange: Story = {
  render: () => <MaskedInput mask="dateRange" />,
};
