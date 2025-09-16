import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ActionButton } from '@xipkg/actionbutton';

const meta: Meta<typeof ActionButton> = {
  title: 'Components/ActionButton',
  component: ActionButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    onClick: action('single click'),
    buttonProps: { className: 'relative' },
  },
};

export const WithMenu: Story = {
  render: (args) => (
    <ActionButton {...args} buttonProps={{ className: 'relative' }}>
      {({ MenuItem }) => (
        <>
          <MenuItem onClick={action('create')}>Создать группу</MenuItem>
          <MenuItem onClick={action('invite')}>Пригласить ученика</MenuItem>
        </>
      )}
    </ActionButton>
  ),
};
