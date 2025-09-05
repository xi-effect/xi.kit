import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from '@xipkg/breadcrumbs';

const meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary'],
      description: 'Определяет стиль хлебных крошек',
      defaultValue: 'default',
    },
    size: {
      control: 'select',
      options: ['l', 'm', 's'],
      description: 'Определяет размер хлебных крошек',
      defaultValue: 'm',
    },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultBreadcrumbs = [
  { name: 'Главная' },
  { name: 'Каталог' },
  { name: 'Электроника' },
  { name: 'Смартфоны' },
];

export const Default: Story = {
  args: {
    breadcrumbs: defaultBreadcrumbs,
  },
};

export const Secondary: Story = {
  args: {
    breadcrumbs: defaultBreadcrumbs,
    variant: 'secondary',
  },
};

export const Large: Story = {
  args: {
    breadcrumbs: defaultBreadcrumbs,
    size: 'l',
  },
};

export const Medium: Story = {
  args: {
    breadcrumbs: defaultBreadcrumbs,
    size: 'm',
  },
};

export const Small: Story = {
  args: {
    breadcrumbs: defaultBreadcrumbs,
    size: 's',
  },
};

export const LongPath: Story = {
  args: {
    breadcrumbs: [
      { name: 'Главная' },
      { name: 'Каталог' },
      { name: 'Электроника' },
      { name: 'Смартфоны' },
      { name: 'Apple' },
      { name: 'iPhone' },
      { name: 'iPhone 15 Pro Max' },
    ],
  },
};
