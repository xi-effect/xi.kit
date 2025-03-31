import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from '@xipkg/icons';
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

const iconNames = Object.keys(Icons).filter((key) => key !== 'icons') as Array<keyof typeof Icons>;

const IconsDemo = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIcons = iconNames.filter((iconName) =>
    String(iconName).toLowerCase().includes(searchQuery.toLowerCase())
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
          const Icon = Icons[iconName] as React.ComponentType<IconProps>;
          return (
            <div
              key={String(iconName)}
              className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-10 dark:hover:bg-gray-90"
            >
              <Icon className="w-6 h-6 mb-2" />
              <span className="text-xs text-center text-gray-60 dark:text-gray-40">
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
