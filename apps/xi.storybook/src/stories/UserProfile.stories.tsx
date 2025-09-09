import type { Meta, StoryObj } from '@storybook/react';
import { UserProfile } from '@xipkg/userprofile';

const meta = {
  title: 'Components/UserProfile',
  component: UserProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <UserProfile userId={1} text="Иван Иванов" label="Разработчик" />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <UserProfile size="l" userId={1} text="Иван Иванов" label="Разработчик" />
      <UserProfile size="m" userId={2} text="Петр Петров" label="Дизайнер" />
      <UserProfile size="s" userId={3} text="Анна Аннова" />
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <UserProfile loading size="l" userId={1} text="Иван Иванов" label="Разработчик" />
      <UserProfile loading size="m" userId={2} text="Петр Петров" label="Дизайнер" />
      <UserProfile loading size="s" userId={3} text="Анна Аннова" />
    </div>
  ),
};

export const WithoutText: Story = {
  render: () => <UserProfile withOutText userId={1} text="Иван Иванов" label="Разработчик" />,
};

export const WithCustomAvatar: Story = {
  render: () => (
    <UserProfile
      userId={1}
      text="Иван Иванов"
      label="Разработчик"
      src="https://example.com/avatar.jpg"
    />
  ),
};
