import { Meta, StoryObj } from '@storybook/react';
import { cn } from '@xipkg/utils';
import { cva, VariantProps } from 'class-variance-authority';
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
  ModalDescription,
  ModalCloseButton,
  DialogContentProps,
  ModalHeaderProps,
  ModalFooterProps,
} from '@xipkg/modal';
import { Button } from '@xipkg/button';

const meta = {
  title: 'Components/Modal',
  component: ModalContent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'full'],
      description: 'Определяет размер окна',
      defaultValue: 'default',
      type: 'string',
    },
    headerVariant: {
      control: 'select',
      options: ['default', 'sticky'],
      description: 'Закрепляет шапку',
      defaultValue: 'default',
      type: 'string',
    },
    footerVariant: {
      control: 'select',
      options: ['default', 'sticky'],
      description: 'Закрепляет футер',
      defaultValue: 'default',
      type: 'string',
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const contentVariants = cva(
  'bg-violet-20 text-violet-100 text-opacity-40 p-4 rounded-[16px] flex items-center justify-center w-full',
  {
    variants: {
      contentHeight: {
        default: 'h-[100px]',
        scrollable: 'h-[2400px]',
      },
    },
    defaultVariants: {
      contentHeight: 'default',
    },
  },
);

type ModalStoryArgs = DialogContentProps &
  ModalHeaderProps &
  ModalFooterProps &
  VariantProps<typeof contentVariants>;

const Template = ({ contentHeight, variant, headerVariant, footerVariant }: ModalStoryArgs) => (
  <div style={{ display: 'flex', gap: '12px' }}>
    <Modal>
      <ModalTrigger asChild>
        <Button size="s">Открыть окно</Button>
      </ModalTrigger>
      <ModalContent variant={variant}>
        <ModalHeader headerVariant={headerVariant}>
          <ModalTitle>Заголовок</ModalTitle>
          <ModalDescription>Подзаголовок</ModalDescription>
          <ModalCloseButton variant={variant} />
        </ModalHeader>
        <ModalBody>
          <div className={cn(contentVariants({ contentHeight }))}>Content Area</div>
        </ModalBody>
        <ModalFooter footerVariant={footerVariant}>
          <Button type="submit">Save changes</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </div>
);

export const Default: Story = {
  render: (args) => <Template {...args} contentHeight="default" />,
  args: {},
};

export const Scrollable: Story = {
  render: (args) => <Template {...args} contentHeight="scrollable" />,
  args: {},
};
