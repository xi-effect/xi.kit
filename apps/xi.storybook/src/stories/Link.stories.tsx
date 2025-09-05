import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '@xipkg/link';

const meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Link href="https://xieffect.ru">Перейти на xi.effect</Link>,
};

export const Brand: Story = {
  render: () => (
    <Link href="https://xieffect.ru" theme="brand">
      Brand Link
    </Link>
  ),
};

export const Hover: Story = {
  render: () => (
    <Link href="https://xieffect.ru" variant="hover">
      Hover Link
    </Link>
  ),
};

export const None: Story = {
  render: () => (
    <Link href="https://xieffect.ru" variant="none">
      No Underline Link
    </Link>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link href="https://xieffect.ru" size="l">
        Large Link
      </Link>
      <Link href="https://xieffect.ru" size="m">
        Medium Link
      </Link>
      <Link href="https://xieffect.ru" size="s">
        Small Link
      </Link>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Link href="https://xieffect.ru" disabled>
      Disabled Link
    </Link>
  ),
};
