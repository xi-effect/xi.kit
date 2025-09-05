import type { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverContent, PopoverTrigger } from '@xipkg/popover';
import { Button } from '@xipkg/button';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Открыть</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-4">
          <h4 className="leading-none font-medium">Заголовок</h4>
          <p className="text-gray-60 dark:text-gray-40 text-sm">
            Это содержимое попапа. Здесь может быть любой контент.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithCustomPosition: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Открыть</Button>
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={8}>
        <div className="space-y-4">
          <h4 className="leading-none font-medium">Заголовок</h4>
          <p className="text-gray-60 dark:text-gray-40 text-sm">
            Попап с выравниванием по правому краю и отступом 8px.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Открыть</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="leading-none font-medium">Уведомление</h4>
            <span className="text-gray-60 dark:text-gray-40 text-xs">2 мин назад</span>
          </div>
          <div className="space-y-2">
            <p className="text-gray-60 dark:text-gray-40 text-sm">
              Это пример попапа с более сложной структурой контента.
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Отмена
              </Button>
              <Button size="sm">Подтвердить</Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
