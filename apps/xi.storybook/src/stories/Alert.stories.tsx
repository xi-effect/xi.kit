import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
  AlertContainer,
  type AlertProps,
} from '@xipkg/alert';

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
      options: ['default', 'Moscow', 'Ekaterinburg', 'Kungur', 'Petersburg', 'Brand'],
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
    <>
      <Alert {...args}>
        <AlertIcon variant={args.variant || 'default'} />

        <AlertContainer>
          <AlertTitle>Заголовок</AlertTitle>

          <AlertDescription>Lorem ipsum dolor sit amet</AlertDescription>
        </AlertContainer>
      </Alert>

      <Alert {...args}>
        <AlertIcon variant={args.variant || 'default'} />

        <AlertContainer>
          <AlertTitle>Заголовок</AlertTitle>

          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </AlertDescription>
        </AlertContainer>
      </Alert>
    </>
  ),
};

// Все варианты
export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="default">
        <AlertIcon variant="default" />
        <AlertContainer>
          <AlertTitle>Default</AlertTitle>
          <AlertDescription>Стандартное информационное сообщение.</AlertDescription>
        </AlertContainer>
      </Alert>

      <Alert variant="Moscow">
        <AlertIcon variant="Moscow" />
        <AlertContainer>
          <AlertTitle>Moscow</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AlertDescription>
        </AlertContainer>
      </Alert>

      <Alert variant="Ekaterinburg">
        <AlertIcon variant="Ekaterinburg" />
        <AlertContainer>
          <AlertTitle>Ekaterinburg</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </AlertDescription>
        </AlertContainer>
      </Alert>

      <Alert variant="Kungur">
        <AlertIcon variant="Kungur" />
        <AlertContainer>
          <AlertTitle>Kungur</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AlertDescription>
        </AlertContainer>
      </Alert>

      <Alert variant="Petersburg">
        <AlertIcon variant="Petersburg" />
        <AlertContainer>
          <AlertTitle>Petersburg</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AlertDescription>
        </AlertContainer>
      </Alert>

      <Alert variant="Brand">
        <AlertIcon variant="Brand" />
        <AlertContainer>
          <AlertTitle>Brand</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </AlertDescription>
        </AlertContainer>
      </Alert>
    </div>
  ),
};

// Без иконки
export const WithoutIcon: Story = {
  render: () => (
    <Alert variant="Brand">
      <AlertIcon variant="none" />
      <AlertContainer>
        <AlertTitle>Без иконки</AlertTitle>
        <AlertDescription>
          Alert компонент без иконки. Используйте variant="none" для AlertIcon.
        </AlertDescription>
      </AlertContainer>
    </Alert>
  ),
};

// Без заголовка
export const WithoutTitle: Story = {
  render: () => (
    <Alert variant="default">
      <AlertIcon variant="default" />
      <AlertContainer>
        <AlertDescription>
          Простое сообщение без заголовка, только с иконкой и описанием.
        </AlertDescription>
      </AlertContainer>
    </Alert>
  ),
};

// Только описание
export const DescriptionOnly: Story = {
  render: () => (
    <Alert variant="Kungur">
      <AlertIcon variant="none" />
      <AlertContainer>
        <AlertDescription>
          Минималистичное уведомление с только описанием, без заголовка и иконки.
        </AlertDescription>
      </AlertContainer>
    </Alert>
  ),
};

// Кастомные стили
export const CustomStyles: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="default" className="border-2 border-blue-500 bg-blue-50">
        <AlertIcon variant="default" />
        <AlertContainer>
          <AlertTitle className="text-blue-800">Кастомные стили</AlertTitle>
          <AlertDescription className="text-blue-700">
            Alert с пользовательскими стилями через className.
          </AlertDescription>
        </AlertContainer>
      </Alert>

      <Alert className="border-purple-300 bg-gradient-to-r from-purple-100 to-pink-100">
        <AlertIcon />

        <AlertContainer>
          <AlertTitle className="text-purple-800">Градиентный фон</AlertTitle>
          <AlertDescription className="text-purple-700">
            Alert с градиентным фоном.
          </AlertDescription>
        </AlertContainer>
      </Alert>
    </div>
  ),
};

// Длинный контент
export const LongContent: Story = {
  render: () => (
    <Alert variant="Kungur">
      <AlertIcon variant="Kungur" />
      <AlertContainer>
        <AlertTitle>Внимание: важная информация</AlertTitle>
        <AlertDescription>
          Это очень длинное сообщение, которое демонстрирует, как Alert обрабатывает многострочный
          контент. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </AlertDescription>
      </AlertContainer>
    </Alert>
  ),
};

// Интерактивный компонент для демонстрации
const InteractiveAlertDemo = () => {
  const [variant, setVariant] = React.useState<AlertProps['variant']>('default');
  const [showIcon, setShowIcon] = React.useState(true);
  const [showTitle, setShowTitle] = React.useState(true);
  const [showDescription, setShowDescription] = React.useState(true);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4 rounded bg-gray-50 p-4">
        <div>
          <label className="mb-2 block text-sm font-medium">Вариант:</label>
          <select
            value={variant || 'default'}
            onChange={(e) => setVariant(e.target.value as AlertProps['variant'])}
            className="rounded border px-3 py-1"
            aria-label="Выбор варианта Alert"
          >
            <option value="default">Default</option>
            <option value="Moscow">Moscow</option>
            <option value="Ekaterinburg">Ekaterinburg</option>
            <option value="Kungur">Kungur</option>
            <option value="Petersburg">Petersburg</option>
            <option value="Brand">Brand</option>
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

        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={showDescription}
              onChange={(e) => setShowDescription(e.target.checked)}
            />
            Показать описание
          </label>
        </div>
      </div>

      <Alert variant={variant}>
        <AlertIcon variant={showIcon ? variant || 'default' : 'none'} />
        <AlertContainer>
          {showTitle && (
            <AlertTitle>
              {variant === 'default' && 'Default'}
              {variant === 'Moscow' && 'Moscow'}
              {variant === 'Ekaterinburg' && 'Ekaterinburg'}
              {variant === 'Kungur' && 'Kungur'}
              {variant === 'Petersburg' && 'Petersburg'}
              {variant === 'Brand' && 'Brand'}
            </AlertTitle>
          )}
          {showDescription && (
            <AlertDescription>
              Это интерактивный пример Alert компонента. Попробуйте изменить настройки выше, чтобы
              увидеть различные варианты отображения с иконками и без них.
            </AlertDescription>
          )}
        </AlertContainer>
      </Alert>
    </div>
  );
};

// Интерактивный пример
export const Interactive: Story = {
  render: () => <InteractiveAlertDemo />,
};
