import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@xipkg/input';
import { Search, Eyeoff, Eyeon } from '@xipkg/icons';
import { useState } from 'react';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Input placeholder="Введите текст" />,
};

export const WithIcons: Story = {
  render: () => <Input placeholder="Поиск" before={<Search className="text-gray-60 h-4 w-4" />} />,
};

export const WithPassword: Story = {
  render: function WithPasswordStory() {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <Input
        type={showPassword ? 'text' : 'password'}
        placeholder="Введите пароль"
        after={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-60 hover:text-gray-80 dark:text-gray-60 dark:hover:text-gray-0"
          >
            {showPassword ? <Eyeoff className="h-4 w-4" /> : <Eyeon className="h-4 w-4" />}
          </button>
        }
      />
    );
  },
};

export const WithError: Story = {
  render: () => <Input placeholder="Введите email" error defaultValue="invalid-email" />,
};

export const WithWarning: Story = {
  render: () => <Input placeholder="Введите пароль" warning defaultValue="weak" />,
};

export const Disabled: Story = {
  render: () => <Input placeholder="Отключенное поле" disabled defaultValue="Нельзя изменить" />,
};

export const Small: Story = {
  render: () => <Input placeholder="Маленький размер" variant="s" />,
};
