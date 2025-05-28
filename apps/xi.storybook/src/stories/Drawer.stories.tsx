import { Meta, StoryObj } from '@storybook/react';
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
    DrawerHeader,
    DrawerFooter,
    DrawerTitle,
} from "@xipkg/drawer";
import { Button } from "@xipkg/button";

// type DrawerStoryArgs = DrawerContentProps &
//   ModalHeaderProps &
//   ModalFooterProps &
//   VariantProps<typeof contentVariants>;

const meta = {
  title: 'Components/Drawer',
  component: DrawerContent,
  tags: ['autodocs'],
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => (
  <div style={{ display: 'flex', gap: '12px' }}>
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="s">Открыть дровер</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Заголовок</DrawerTitle>
        </DrawerHeader>
        <div className="bg-violet-20 h-[449px] text-violet-100 text-opacity-40 rounded-[8px] flex items-center justify-center w-full">Content area</div>
        <DrawerFooter className="flex flex-row gap-4">
          <Button type="submit">Кнопка</Button>
          <Button variant="ghost">Кнопка</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </div>
);

export const Default: Story = {
  render: () => <Template />,
  args: {},
};