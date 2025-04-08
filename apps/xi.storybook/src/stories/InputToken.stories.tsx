import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MultipleSelector } from '@xipkg/inputtoken';
import type { Option } from '@xipkg/inputtoken';

const OPTIONS: Option[] = [
  { label: 'nextjs', value: 'nextjs' },
  { label: 'React', value: 'react' },
  { label: 'Remix', value: 'remix' },
  { label: 'Vite', value: 'vite' },
  { label: 'Nuxt', value: 'nuxt' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Angular', value: 'angular' },
  { label: 'Ember', value: 'ember', disable: true },
  { label: 'Gatsby', value: 'gatsby', disable: true },
  { label: 'Astro', value: 'astro' },
];

const meta = {
  title: 'Components/InputToken',
  component: MultipleSelector,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['m', 's'],
      description: 'Определяет размер поля ввода',
      defaultValue: 'm',
    },
    error: {
      control: 'boolean',
      description: 'Состояние ошибки',
    },
    creatable: {
      control: 'boolean',
      description: 'Состояние создания нового элемента',
    },
    placeholder: {
      control: 'text',
      description: 'Текст плейсхолдера',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключенное состояние',
    },
    maxSelected: {
      control: 'number',
      description: 'Максимальное количество выбранных элементов',
    },
  },
} satisfies Meta<typeof MultipleSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'm',
    error: false,
    creatable: true,
    placeholder: 'Выберите фреймворк...',
    emptyIndicator: React.createElement(
      'p',
      { className: 'text-center text-sm text-gray-30' },
      'Не найдено',
    ),
    defaultOptions: OPTIONS,
  },
};

export const Small: Story = {
  args: {
    variant: 's',
    error: false,
    creatable: true,
    placeholder: 'Выберите фреймворк...',
    emptyIndicator: React.createElement(
      'p',
      { className: 'text-center text-sm text-gray-30' },
      'Не найдено',
    ),
    defaultOptions: OPTIONS,
  },
};

export const WithError: Story = {
  args: {
    variant: 'm',
    error: true,
    creatable: true,
    placeholder: 'Выберите фреймворк...',
    emptyIndicator: React.createElement(
      'p',
      { className: 'text-center text-sm text-gray-30' },
      'Не найдено',
    ),
    defaultOptions: OPTIONS,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'm',
    disabled: true,
    placeholder: 'Выберите фреймворк...',
    defaultOptions: OPTIONS,
    value: [OPTIONS[0], OPTIONS[1]],
  },
};

export const WithMaxSelected: Story = {
  args: {
    variant: 'm',
    creatable: true,
    placeholder: 'Выберите максимум 2 фреймворка...',
    emptyIndicator: React.createElement(
      'p',
      { className: 'text-center text-sm text-gray-30' },
      'Не найдено',
    ),
    defaultOptions: OPTIONS,
    maxSelected: 2,
    onMaxSelected: (maxLimit: number) => {
      console.log(`Достигнут лимит: ${maxLimit}`);
    },
  },
};
