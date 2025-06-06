import { Meta, StoryObj } from '@storybook/react';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
} from '@xipkg/drawer';
import { Button } from '@xipkg/button';

const meta = {
  title: 'Components/Drawer',
  component: DrawerContent,
  tags: ['autodocs'],
  argTypes: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button size="s">Открыть дровер</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Заголовок</DrawerTitle>
      </DrawerHeader>
      <div className="bg-violet-20 text-opacity-40 flex h-[449px] w-full items-center justify-center rounded-[8px] text-violet-100">
        Content area
      </div>
      <DrawerFooter className="flex flex-row gap-4">
        <Button type="submit">Кнопка</Button>
        <Button variant="ghost">Кнопка</Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export const Default: Story = {
  render: () => <Template />,
  args: {},
};
