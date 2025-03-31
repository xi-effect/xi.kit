import { Meta, StoryObj } from '@storybook/react';
import {
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalTitle,
    ModalTrigger,
    ModalDescription,
    ModalCloseButton
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
      outsideClose: {
        connstrol: 'boolean',
        description: 'Закрывает окно по клику на оверлей',
        defaultValue: 'false',
        type: 'boolean',
      }
    },
  } as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story['render'] = (args) => {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Modal>
        <ModalTrigger asChild>
          <Button size="s">Открыть окно</Button>
        </ModalTrigger>
        <ModalContent variant={args.variant} outsideClose={args.outsideClose}>
          <ModalHeader headerVariant={args.headerVariant}>
            <ModalTitle>Заголовок</ModalTitle>
            <ModalDescription>Подзаголовок</ModalDescription>
            <ModalCloseButton variant={args.variant} />
          </ModalHeader>
          <ModalBody>
              <div className="bg-violet-20 h-[2200px] text-violet-100 text-opacity-40 p-4 rounded-[16px] flex items-center justify-center w-full">
                  Content Area
              </div>
          </ModalBody>
          <ModalFooter footerVariant={args.footerVariant}>
            <Button type="submit">Save changes</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export const Default: Story = {
  render: Template,
  args: {},
};