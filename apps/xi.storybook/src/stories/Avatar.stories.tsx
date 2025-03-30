import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from '@xipkg/avatar';

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
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="User avatar"
        size={args.size}
      />
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
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="User avatar"
        size="xxl"
      />
      <AvatarFallback size="xxl">CN</AvatarFallback>
    </Avatar>
  ),
};

export const XL: Story = {
  render: (args) => (
    <Avatar {...args} size="xl">
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="User avatar"
        size="xl"
      />
      <AvatarFallback size="xl">CN</AvatarFallback>
    </Avatar>
  ),
};

export const Large: Story = {
  render: (args) => (
    <Avatar {...args} size="l">
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="User avatar"
        size="l"
      />
      <AvatarFallback size="l">CN</AvatarFallback>
    </Avatar>
  ),
};

export const Medium: Story = {
  render: (args) => (
    <Avatar {...args} size="m">
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="User avatar"
        size="m"
      />
      <AvatarFallback size="m">CN</AvatarFallback>
    </Avatar>
  ),
};

export const Small: Story = {
  render: (args) => (
    <Avatar {...args} size="s">
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="User avatar"
        size="s"
      />
      <AvatarFallback size="s">CN</AvatarFallback>
    </Avatar>
  ),
}; 
