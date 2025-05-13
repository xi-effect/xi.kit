import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '@xipkg/tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs.Root defaultValue="tab1" className="w-[600px]">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Первая вкладка</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Вторая вкладка</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Третья вкладка</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <div className="p-4">Содержимое первой вкладки</div>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <div className="p-4">Содержимое второй вкладки</div>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <div className="p-4">Содержимое третьей вкладки</div>
      </Tabs.Content>
    </Tabs.Root>
  ),
};

export const WithCustomStyles: Story = {
  render: () => (
    <Tabs.Root defaultValue="tab1" className="w-[600px]">
      <Tabs.List className="bg-gray-10 rounded-lg p-1" classNameShadow="bg-brand-100">
        <Tabs.Trigger value="tab1" className="rounded-md px-4 py-2">
          Первая вкладка
        </Tabs.Trigger>
        <Tabs.Trigger value="tab2" className="rounded-md px-4 py-2">
          Вторая вкладка
        </Tabs.Trigger>
        <Tabs.Trigger value="tab3" className="rounded-md px-4 py-2">
          Третья вкладка
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <div className="p-4">Содержимое первой вкладки</div>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <div className="p-4">Содержимое второй вкладки</div>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <div className="p-4">Содержимое третьей вкладки</div>
      </Tabs.Content>
    </Tabs.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tabs.Root defaultValue="tab1" className="w-[600px]">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Первая вкладка</Tabs.Trigger>
        <Tabs.Trigger value="tab2" disabled>
          Вторая вкладка (отключена)
        </Tabs.Trigger>
        <Tabs.Trigger value="tab3">Третья вкладка</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <div className="p-4">Содержимое первой вкладки</div>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <div className="p-4">Содержимое второй вкладки</div>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <div className="p-4">Содержимое третьей вкладки</div>
      </Tabs.Content>
    </Tabs.Root>
  ),
}; 
