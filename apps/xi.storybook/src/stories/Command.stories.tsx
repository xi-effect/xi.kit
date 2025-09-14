import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from '@xipkg/command';
import { Button } from '@xipkg/button';
import { 
  Calendar, 
  Settings, 
  Users, 
  File, 
  Search, 
  Home, 
  Mail,
  Plus,
  Trash,
  Edit
} from '@xipkg/icons';

const meta = {
  title: 'Components/Command',
  component: Command,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Дополнительные CSS классы',
    },
  },
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый пример Command компонента
export const Default: Story = {
  render: () => (
    <div className="w-[350px]">
      <Command>
        <CommandInput placeholder="Поиск команды..." />
        <CommandList>
          <CommandEmpty>Команда не найдена.</CommandEmpty>
          <CommandGroup heading="Предложения">
            <CommandItem onSelect={action('selected-calendar')}>
              <Calendar className="h-4 w-4" />
              <span>Календарь</span>
            </CommandItem>
            <CommandItem onSelect={action('selected-search')}>
              <Search className="h-4 w-4" />
              <span>Поиск</span>
            </CommandItem>
            <CommandItem onSelect={action('selected-settings')}>
              <Settings className="h-4 w-4" />
              <span>Настройки</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Навигация">
            <CommandItem onSelect={action('selected-home')}>
              <Home className="h-4 w-4" />
              <span>Главная</span>
            </CommandItem>
            <CommandItem onSelect={action('selected-mail')}>
              <Mail className="h-4 w-4" />
              <span>Почта</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
};

// Command с горячими клавишами
export const WithShortcuts: Story = {
  render: () => (
    <div className="w-[350px]">
      <Command>
        <CommandInput placeholder="Поиск команды..." />
        <CommandList>
          <CommandEmpty>Команда не найдена.</CommandEmpty>
          <CommandGroup heading="Действия">
            <CommandItem onSelect={action('selected-new')}>
              <Plus className="h-4 w-4" />
              <span>Создать новый</span>
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={action('selected-edit')}>
              <Edit className="h-4 w-4" />
              <span>Редактировать</span>
              <CommandShortcut>⌘E</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={action('selected-delete')}>
              <Trash className="h-4 w-4" />
              <span>Удалить</span>
              <CommandShortcut>⌘D</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Файлы">
            <CommandItem onSelect={action('selected-file')}>
              <File className="h-4 w-4" />
              <span>Открыть файл</span>
              <CommandShortcut>⌘O</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
};

// Command Dialog
export const Dialog: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>
          Открыть Command Palette
        </Button>
        <CommandDialog 
          open={open} 
          onOpenChange={setOpen}
          title="Command Palette"
          description="Поиск и выполнение команд"
        >
          <CommandInput placeholder="Поиск команды..." />
          <CommandList>
            <CommandEmpty>Команда не найдена.</CommandEmpty>
            <CommandGroup heading="Приложения">
              <CommandItem onSelect={() => { action('selected-calendar')(); setOpen(false); }}>
                <Calendar className="h-4 w-4" />
                <span>Календарь</span>
              </CommandItem>
              <CommandItem onSelect={() => { action('selected-settings')(); setOpen(false); }}>
                <Settings className="h-4 w-4" />
                <span>Настройки</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Пользователь">
              <CommandItem onSelect={() => { action('selected-profile')(); setOpen(false); }}>
                <Users className="h-4 w-4" />
                <span>Профиль</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    );
  },
};

// Command с отключенными элементами
export const WithDisabledItems: Story = {
  render: () => (
    <div className="w-[350px]">
      <Command>
        <CommandInput placeholder="Поиск команды..." />
        <CommandList>
          <CommandEmpty>Команда не найдена.</CommandEmpty>
          <CommandGroup heading="Действия">
            <CommandItem onSelect={action('selected-new')}>
              <Plus className="h-4 w-4" />
              <span>Создать новый</span>
            </CommandItem>
            <CommandItem disabled onSelect={action('selected-edit')}>
              <Edit className="h-4 w-4" />
              <span>Редактировать (недоступно)</span>
            </CommandItem>
            <CommandItem onSelect={action('selected-delete')}>
              <Trash className="h-4 w-4" />
              <span>Удалить</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
};

// Command с множественными группами
export const MultipleGroups: Story = {
  render: () => (
    <div className="w-[400px]">
      <Command>
        <CommandInput placeholder="Поиск команды..." />
        <CommandList>
          <CommandEmpty>Команда не найдена.</CommandEmpty>
          <CommandGroup heading="Быстрые действия">
            <CommandItem onSelect={action('selected-new')}>
              <Plus className="h-4 w-4" />
              <span>Создать</span>
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={action('selected-search')}>
              <Search className="h-4 w-4" />
              <span>Поиск</span>
              <CommandShortcut>⌘K</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Навигация">
            <CommandItem onSelect={action('selected-home')}>
              <Home className="h-4 w-4" />
              <span>Главная</span>
            </CommandItem>
            <CommandItem onSelect={action('selected-mail')}>
              <Mail className="h-4 w-4" />
              <span>Почта</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Настройки">
            <CommandItem onSelect={action('selected-settings')}>
              <Settings className="h-4 w-4" />
              <span>Настройки</span>
            </CommandItem>
            <CommandItem onSelect={action('selected-profile')}>
              <Users className="h-4 w-4" />
              <span>Профиль</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
};
