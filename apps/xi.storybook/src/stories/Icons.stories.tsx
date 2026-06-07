import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from '@xipkg/icons';
import { icons } from '@xipkg/icons';
import { useState } from 'react';
import { Input } from '@xipkg/input';
import type { IconProps } from '@xipkg/icons';

const meta = {
  title: 'Components/Icons',
  component: Icons.Account,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icons.Account>;

export default meta;
type Story = StoryObj<typeof meta>;

const IconsDemo = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIcons = icons.filter((iconName) =>
    iconName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="w-full max-w-4xl">
      <div className="mb-4">
        <Input
          placeholder="Поиск иконок..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-6 gap-4">
        {filteredIcons.map((iconName) => {
          const Icon = Icons[iconName as keyof typeof Icons] as React.ComponentType<IconProps>;
          return (
            <div
              key={String(iconName)}
              className="hover:bg-gray-10 flex flex-col items-center justify-center rounded-lg border border-gray-20 p-4"
            >
              <Icon className="mb-2 h-6 w-6" />
              <span className="text-gray-60 text-center text-xs">
                {String(iconName)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <IconsDemo />,
};

const themeLabels: Record<NonNullable<IconProps['theme']>, string> = {
  default: 'default',
  muted: 'muted',
  strong: 'strong',
  brand: 'brand',
  destructive: 'destructive',
  onBrand: 'onBrand',
};

export const Themes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {(Object.keys(themeLabels) as Array<NonNullable<IconProps['theme']>>).map((theme) => (
        <div key={theme} className="flex items-center gap-4">
          <span className="text-gray-60 w-24 text-sm">{themeLabels[theme]}</span>
          <Icons.Home theme={theme} />
          <Icons.Search theme={theme} />
          <Icons.Settings theme={theme} />
        </div>
      ))}
      <div className="bg-brand-80 flex items-center gap-4 rounded-lg p-4">
        <span className="text-brand-0 w-24 text-sm">onBrand</span>
        <Icons.Home theme="onBrand" />
        <Icons.Search theme="onBrand" />
        <Icons.Settings theme="onBrand" />
      </div>
    </div>
  ),
};
