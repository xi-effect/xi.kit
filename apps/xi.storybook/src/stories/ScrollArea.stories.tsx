import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '@xipkg/scrollarea';

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.${a.length - i}`);

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-medium leading-none">Теги</h4>
        <div className="text-sm">
          {TAGS.map((tag) => (
            <div key={tag} className="mb-2">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <ScrollArea className="h-[300px] w-[400px] rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-medium leading-none">Длинный контент</h4>
        <div className="space-y-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <h5 className="text-sm font-medium">Заголовок {i + 1}</h5>
              <p className="text-sm text-gray-60 dark:text-gray-40">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
};

export const WithTable: Story = {
  render: () => (
    <ScrollArea className="h-[300px] w-[600px] rounded-md border">
      <div className="p-4">
        <h4 className="text-sm font-medium leading-none mb-4">Таблица с прокруткой</h4>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">ID</th>
              <th className="text-left py-2">Имя</th>
              <th className="text-left py-2">Email</th>
              <th className="text-left py-2">Статус</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 50 }).map((_, i) => (
              <tr key={i} className="border-b">
                <td className="py-2">{i + 1}</td>
                <td className="py-2">Пользователь {i + 1}</td>
                <td className="py-2">user{i + 1}@example.com</td>
                <td className="py-2">Активен</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ScrollArea>
  ),
}; 
