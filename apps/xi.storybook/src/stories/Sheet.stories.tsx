import type { Meta, StoryObj } from '@storybook/react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@xipkg/sheet';
import { Button } from '@xipkg/button';

const meta = {
  title: 'Components/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Открыть</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Заголовок</SheetTitle>
          <SheetDescription>
            Это описание для боковой панели. Здесь может быть любой контент.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};

export const WithContent: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Открыть</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Настройки</SheetTitle>
          <SheetDescription>
            Управляйте настройками вашего аккаунта и предпочтениями.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Профиль</h4>
            <p className="text-gray-60 dark:text-gray-40 text-sm">
              Настройте информацию о вашем профиле и как другие пользователи видят вас в системе.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Уведомления</h4>
            <p className="text-gray-60 dark:text-gray-40 text-sm">
              Выберите, какие уведомления вы хотите получать.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Открыть</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Подтверждение</SheetTitle>
          <SheetDescription>Вы уверены, что хотите выполнить это действие?</SheetDescription>
        </SheetHeader>
        <div className="mt-4 flex justify-end space-x-2">
          <Button variant="outline">Отмена</Button>
          <Button>Подтвердить</Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
};
