import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@xipkg/input';
import { Close, Link } from '@xipkg/icons';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['m', 's'],
      description: 'Определяет размер поля ввода',
      defaultValue: 'm',
    },
    error: {
      control: 'boolean',
      description: 'Состояние ошибки',
    },
    warning: {
      control: 'boolean',
      description: 'Состояние предупреждения',
    },
    before: {
      control: 'boolean',
      description: 'До',
    },
    after: {
      control: 'boolean',
      description: 'После',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'm',
    error: false,
    warning: false,
  },
};

export const DefaultSmall: Story = {
  args: {
    variant: 's',
    error: false,
    warning: false,
  },
};

export const Error: Story = {
  args: {
    variant: 'm',
    error: true,
  },
};

export const Warning: Story = {
  args: {
    variant: 'm',
    warning: true,
  },
};

export const WithBeforeIcon: Story = {
  args: {
    variant: 'm',
    before: <Link />,
    className: 'pl-11',
  },
  parameters: {
    docs: {
      description: {
        story: 'Инпут с иконкой в начале',
      },
    },
  },
};

export const WithBeforeSmallIcon: Story = {
  args: {
    variant: 's',
    before: <Link />,
    className: 'pl-7',
  },
  parameters: {
    docs: {
      description: {
        story: 'Инпут с иконкой в начале',
      },
    },
  },
};

export const WithAfterIcon: Story = {
  args: {
    variant: 'm',
    after: <Close />,
    className: 'pr-11',
  },
  parameters: {
    docs: {
      description: {
        story: 'Инпут с иконкой в конце',
      },
    },
  },
};

export const WithAfterSmallIcon: Story = {
  args: {
    variant: 's',
    after: <Close />,
    className: 'pr-7',
  },
  parameters: {
    docs: {
      description: {
        story: 'Инпут с иконкой в конце',
      },
    },
  },
};
