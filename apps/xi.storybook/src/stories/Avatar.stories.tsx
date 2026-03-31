import type { Meta, StoryObj } from '@storybook/react';
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
  AvatarFallback,
  AvatarImage,
} from '@xipkg/avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xxl', 'xl', 'l', 'm', 's'],
      description: 'Определяет размер аватара',
      defaultValue: 'l',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" size={args.size} />
      <AvatarFallback size={args.size}>CN</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback size={args.size}>JD</AvatarFallback>
    </Avatar>
  ),
};

export const Loading: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback size={args.size} loading>
        Loading...
      </AvatarFallback>
    </Avatar>
  ),
};

export const XXL: Story = {
  render: (args) => (
    <Avatar {...args} size="xxl">
      <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" size="xxl" />
      <AvatarFallback size="xxl">CN</AvatarFallback>
    </Avatar>
  ),
};

export const XL: Story = {
  render: (args) => (
    <Avatar {...args} size="xl">
      <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" size="xl" />
      <AvatarFallback size="xl">CN</AvatarFallback>
    </Avatar>
  ),
};

export const Large: Story = {
  render: (args) => (
    <Avatar {...args} size="l">
      <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" size="l" />
      <AvatarFallback size="l">CN</AvatarFallback>
    </Avatar>
  ),
};

export const Medium: Story = {
  render: (args) => (
    <Avatar {...args} size="m">
      <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" size="m" />
      <AvatarFallback size="m">CN</AvatarFallback>
    </Avatar>
  ),
};

export const Small: Story = {
  render: (args) => (
    <Avatar {...args} size="s">
      <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" size="s" />
      <AvatarFallback size="s">CN</AvatarFallback>
    </Avatar>
  ),
};

export const WithOnlineBadge: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" size={args.size} />
      <AvatarFallback size={args.size}>CN</AvatarFallback>
      <AvatarBadge className="bg-green-80 dark:bg-green-60" title="В сети" aria-hidden />
    </Avatar>
  ),
};

export const Group: Story = {
  render: (args) => (
    <AvatarGroup>
      <Avatar {...args}>
        <AvatarImage src="https://github.com/shadcn.png" alt="User 1" size={args.size} />
        <AvatarFallback size={args.size}>A</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarImage src="https://avatars.githubusercontent.com/u/67109487?v=4" alt="User 2" size={args.size} />
        <AvatarFallback size={args.size}>B</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarFallback size={args.size}>C</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
};

export const GroupWithOverflowCount: Story = {
  render: (args) => (
    <AvatarGroup>
      <Avatar {...args}>
        <AvatarImage src="https://github.com/shadcn.png" alt="User 1" size={args.size} />
        <AvatarFallback size={args.size}>A</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarImage src="https://avatars.githubusercontent.com/u/67109487?v=4" alt="User 2" size={args.size} />
        <AvatarFallback size={args.size}>B</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+5</AvatarGroupCount>
    </AvatarGroup>
  ),
};

/** Три аватара, счётчик «ещё N», бейдж только на первом */
export const GroupThreeWithCountAndBadge: Story = {
  render: (args) => (
    <AvatarGroup>
      <Avatar {...args}>
        <AvatarImage src="https://github.com/shadcn.png" alt="User 1" size={args.size} />
        <AvatarFallback size={args.size}>A</AvatarFallback>
        <AvatarBadge align="start" className="bg-green-80 dark:bg-green-60" title="В сети" aria-hidden />
      </Avatar>
      <Avatar {...args}>
        <AvatarImage src="https://avatars.githubusercontent.com/u/67109487?v=4" alt="User 2" size={args.size} />
        <AvatarFallback size={args.size}>B</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarFallback size={args.size}>C</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+12</AvatarGroupCount>
    </AvatarGroup>
  ),
};

export const GroupSmall: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar size="s">
        <AvatarImage src="https://github.com/shadcn.png" alt="User 1" size="s" />
        <AvatarFallback size="s">A</AvatarFallback>
      </Avatar>
      <Avatar size="s">
        <AvatarFallback size="s">B</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  ),
};

export const GroupWithBadges: Story = {
  render: (args) => (
    <AvatarGroup>
      <Avatar {...args}>
        <AvatarImage src="https://github.com/shadcn.png" alt="User 1" size={args.size} />
        <AvatarFallback size={args.size}>A</AvatarFallback>
        <AvatarBadge align="start" className="bg-green-80 dark:bg-green-60" title="В сети" aria-hidden />
      </Avatar>
      <Avatar {...args}>
        <AvatarImage src="https://avatars.githubusercontent.com/u/67109487?v=4" alt="User 2" size={args.size} />
        <AvatarFallback size={args.size}>B</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarFallback size={args.size}>C</AvatarFallback>
        <AvatarBadge className="bg-orange-80 dark:bg-orange-60" title="Не беспокоить" aria-hidden />
      </Avatar>
    </AvatarGroup>
  ),
};
