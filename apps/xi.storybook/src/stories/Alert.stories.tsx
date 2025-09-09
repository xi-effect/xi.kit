import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription, AlertIcon, type AlertProps } from '@xipkg/alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'warning', 'success'],
    },
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// Базовая история
export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertIcon variant={args.variant} />
      <AlertTitle>Информация</AlertTitle>
      <AlertDescription>
        Это базовое информационное сообщение с иконкой и заголовком.
      </AlertDescription>
    </Alert>
  ),
};

// Все варианты
export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="default">
        <AlertIcon variant="default" />
        <AlertTitle>По умолчанию</AlertTitle>
        <AlertDescription>Стандартное информационное сообщение.</AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertIcon variant="destructive" />
        <AlertTitle>Ошибка</AlertTitle>
        <AlertDescription>Произошла ошибка при выполнении операции.</AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertIcon variant="warning" />
        <AlertTitle>Предупреждение</AlertTitle>
        <AlertDescription>Внимание! Эта операция может быть необратимой.</AlertDescription>
      </Alert>

      <Alert variant="success">
        <AlertIcon variant="success" />
        <AlertTitle>Успех</AlertTitle>
        <AlertDescription>Операция выполнена успешно!</AlertDescription>
      </Alert>
    </div>
  ),
};

// Без заголовка
export const WithoutTitle: Story = {
  render: () => (
    <Alert>
      <AlertIcon />
      <AlertDescription>
        Простое сообщение без заголовка, только с иконкой и описанием.
      </AlertDescription>
    </Alert>
  ),
};

// Без иконки
export const WithoutIcon: Story = {
  render: () => (
    <Alert variant="success">
      <AlertTitle>Заголовок без иконки</AlertTitle>
      <AlertDescription>
        Сообщение успеха без иконки, только с заголовком и описанием.
      </AlertDescription>
    </Alert>
  ),
};

// Только описание
export const DescriptionOnly: Story = {
  render: () => (
    <Alert variant="warning">
      <AlertDescription>
        Минималистичное уведомление с только описанием, без заголовка и иконки.
      </AlertDescription>
    </Alert>
  ),
};

// Кастомные стили
export const CustomStyles: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="default" className="border-2 border-blue-500 bg-blue-50">
        <AlertIcon variant="default" />
        <AlertTitle className="text-blue-800">Кастомные стили</AlertTitle>
        <AlertDescription className="text-blue-700">
          Alert с пользовательскими стилями через className.
        </AlertDescription>
      </Alert>

      <Alert className="border-purple-300 bg-gradient-to-r from-purple-100 to-pink-100">
        <AlertIcon />
        <AlertTitle className="text-purple-800">Градиентный фон</AlertTitle>
        <AlertDescription className="text-purple-700">
          Alert с красивым градиентным фоном.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

// Длинный контент
export const LongContent: Story = {
  render: () => (
    <Alert variant="warning">
      <AlertIcon variant="warning" />
      <AlertTitle>Внимание: важная информация</AlertTitle>
      <AlertDescription>
        Это очень длинное сообщение, которое демонстрирует, как Alert обрабатывает многострочный
        контент. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </AlertDescription>
    </Alert>
  ),
};

// Интерактивный пример
export const Interactive: Story = {
  render: () => {
    const [variant, setVariant] = React.useState<AlertProps['variant']>('default');
    const [showIcon, setShowIcon] = React.useState(true);
    const [showTitle, setShowTitle] = React.useState(true);

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4 rounded bg-gray-50 p-4">
          <div>
            <label className="mb-2 block text-sm font-medium">Вариант:</label>
            <select
              value={variant}
              onChange={(e) => setVariant(e.target.value as AlertProps['variant'])}
              className="rounded border px-3 py-1"
            >
              <option value="default">По умолчанию</option>
              <option value="destructive">Ошибка</option>
              <option value="warning">Предупреждение</option>
              <option value="success">Успех</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={showIcon}
                onChange={(e) => setShowIcon(e.target.checked)}
              />
              Показать иконку
            </label>
          </div>

          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={showTitle}
                onChange={(e) => setShowTitle(e.target.checked)}
              />
              Показать заголовок
            </label>
          </div>
        </div>

        <Alert variant={variant}>
          {showIcon && <AlertIcon variant={variant} />}
          {showTitle && (
            <AlertTitle>
              {variant === 'default' && 'Информация'}
              {variant === 'destructive' && 'Ошибка'}
              {variant === 'warning' && 'Предупреждение'}
              {variant === 'success' && 'Успех'}
            </AlertTitle>
          )}
          <AlertDescription>
            Это интерактивный пример Alert компонента. Попробуйте изменить настройки выше, чтобы
            увидеть различные варианты отображения.
          </AlertDescription>
        </Alert>
      </div>
    );
  },
};
