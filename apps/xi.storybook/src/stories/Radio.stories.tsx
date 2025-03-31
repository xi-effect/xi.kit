import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioItem } from '@xipkg/radio';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Radio defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioItem value="option1" id="option1" />
        <label htmlFor="option1">Опция 1</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioItem value="option2" id="option2" />
        <label htmlFor="option2">Опция 2</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioItem value="option3" id="option3" />
        <label htmlFor="option3">Опция 3</label>
      </div>
    </Radio>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Radio defaultValue="option1">
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <RadioItem value="option1" id="option1" />
          <label htmlFor="option1">Опция 1</label>
        </div>
        <p className="text-sm text-gray-60 dark:text-gray-40 pl-6">
          Это описание для первой опции
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <RadioItem value="option2" id="option2" />
          <label htmlFor="option2">Опция 2</label>
        </div>
        <p className="text-sm text-gray-60 dark:text-gray-40 pl-6">
          Это описание для второй опции
        </p>
      </div>
    </Radio>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Radio defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioItem value="option1" id="option1" />
        <label htmlFor="option1">Опция 1</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioItem value="option2" id="option2" disabled />
        <label htmlFor="option2" className="text-gray-60 dark:text-gray-40">
          Отключенная опция
        </label>
      </div>
    </Radio>
  ),
}; 
