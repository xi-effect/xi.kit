import type { Meta, StoryObj } from '@storybook/react';
import { UserProfile } from '@xipkg/userprofile';

const meta = {
  title: 'Components/UserProfile',
  component: UserProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['l', '40', 'm', 's'],
      description: 'Размер аватара и текста',
    },
    userId: {
      control: 'number',
      description: 'ID пользователя для загрузки аватара',
    },
    text: {
      control: 'text',
      description: 'Основной текст (имя)',
    },
    label: {
      control: 'text',
      description: 'Подпись под именем',
    },
    src: {
      control: 'text',
      description: 'URL кастомного аватара',
    },
    withOutText: {
      control: 'boolean',
      description: 'Скрыть текст и подпись',
    },
    loading: {
      control: 'boolean',
      description: 'Состояние загрузки',
    },
    color: {
      control: 'select',
      options: ['brand'],
      description: 'Цвет фолбэка аватара',
    },
  },
  args: {
    userId: 1,
    text: 'Иван Иванов',
    label: 'Разработчик',
    size: 'm',
    withOutText: false,
    loading: false,
    color: 'brand',
  },
} satisfies Meta<typeof UserProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <UserProfile {...args} />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <UserProfile size="l" userId={1} text="Иван Иванов" label="Разработчик" />
      <UserProfile size="40" userId={2} text="Петр Петров" label="Дизайнер" />
      <UserProfile size="m" userId={3} text="Мария Сидорова" label="Менеджер" />
      <UserProfile size="s" userId={4} text="Анна Аннова" />
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <UserProfile loading size="l" userId={1} text="Иван Иванов" label="Разработчик" />
      <UserProfile loading size="40" userId={2} text="Петр Петров" label="Дизайнер" />
      <UserProfile loading size="m" userId={3} text="Мария Сидорова" label="Менеджер" />
      <UserProfile loading size="s" userId={4} text="Анна Аннова" />
    </div>
  ),
};

export const WithoutText: Story = {
  args: {
    withOutText: true,
  },
  render: (args) => <UserProfile {...args} />,
};

export const WithCustomAvatar: Story = {
  args: {
    src: 'https://example.com/avatar.jpg',
  },
  render: (args) => <UserProfile {...args} />,
};
