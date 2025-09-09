import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@xipkg/tooltip';
import { Button } from '@xipkg/button';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Наведите курсор</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Это подсказка</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Наведите курсор</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>
          Это длинная подсказка с дополнительной информацией, которая может занимать несколько
          строк.
        </p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const DifferentPositions: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Сверху</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Подсказка сверху</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Снизу</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Подсказка снизу</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Слева</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Подсказка слева</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Справа</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Подсказка справа</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};
