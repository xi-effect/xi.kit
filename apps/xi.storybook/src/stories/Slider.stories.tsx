import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@xipkg/slider';
import { useState } from 'react';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[300px]">
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  ),
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState([50]);

    return (
      <div className="w-[300px] space-y-4">
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
        <div className="text-gray-60 dark:text-gray-40 text-sm">Значение: {value[0]}</div>
      </div>
    );
  },
};

export const Range: Story = {
  render: () => (
    <div className="w-[300px]">
      <Slider defaultValue={[25, 75]} max={100} step={1} />
    </div>
  ),
};

export const CustomSteps: Story = {
  render: () => (
    <div className="w-[300px]">
      <Slider defaultValue={[50]} max={100} step={10} />
    </div>
  ),
};

export const RestrictedMin: Story = {
  render: () => {
    const [value, setValue] = useState([40]);

    return (
      <div className="w-[300px] space-y-4">
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
          restrictedMin={20}
        />
        <div className="text-gray-60 dark:text-gray-40 text-sm">
          Значение: {value[0]} (минимум: 20)
        </div>
      </div>
    );
  },
};

export const RestrictedMax: Story = {
  render: () => {
    const [value, setValue] = useState([60]);

    return (
      <div className="w-[300px] space-y-4">
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
          restrictedMax={80}
        />
        <div className="text-gray-60 dark:text-gray-40 text-sm">
          Значение: {value[0]} (максимум: 80)
        </div>
      </div>
    );
  },
};

export const RestrictedMinMax: Story = {
  render: () => {
    const [value, setValue] = useState([50]);

    return (
      <div className="w-[300px] space-y-4">
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
          restrictedMin={20}
          restrictedMax={80}
        />
        <div className="text-gray-60 dark:text-gray-40 text-sm">
          Значение: {value[0]} (от 20 до 80)
        </div>
      </div>
    );
  },
};

export const RestrictedUncontrolled: Story = {
  render: () => (
    <div className="w-[300px]">
      <Slider defaultValue={[50]} max={100} step={1} restrictedMin={20} restrictedMax={80} />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-[300px]">
      <Slider defaultValue={[50]} max={100} step={1} disabled />
    </div>
  ),
};
