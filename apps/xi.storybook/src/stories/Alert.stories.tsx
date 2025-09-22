import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
  AlertContainer,
  type AlertProps,
} from '@xipkg/alert';
import { InfoCircle } from '@xipkg/icons';

interface StoryArgs extends AlertProps {
  showIcon: boolean;
  showTitle: boolean;
  showDescription: boolean;
  title: string;
  description: string;
}

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success', 'warning', 'info', 'brand'],
      description: 'Вариант внешнего вида Alert',
    },
    className: {
      control: 'text',
      description: 'Дополнительные CSS классы',
    },
    showTitle: {
      control: 'boolean',
      description: 'Показать заголовок',
      defaultValue: true,
    },
    showDescription: {
      control: 'boolean',
      description: 'Показать описание',
      defaultValue: true,
    },
    title: {
      control: 'text',
      description: 'Текст заголовка',
      defaultValue: 'Заголовок',
    },
    description: {
      control: 'text',
      description: 'Текст описания',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  },
} satisfies Meta<StoryArgs>;

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    variant: 'default',
    showTitle: true,
    showDescription: true,
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  render: (args: StoryArgs) => (
    <Alert variant={args.variant} className={args.className}>
      <AlertIcon />
      <AlertContainer>
        {args.showTitle && <AlertTitle>{args.title}</AlertTitle>}
        {args.showDescription && <AlertDescription>{args.description}</AlertDescription>}
      </AlertContainer>
    </Alert>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="default">
        <AlertIcon>
          <InfoCircle />
        </AlertIcon>
        <AlertContainer>
          <AlertTitle>Default variant</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AlertDescription>
        </AlertContainer>
      </Alert>

      <Alert variant="error">
        <AlertIcon>
          <InfoCircle />
        </AlertIcon>
        <AlertContainer>
          <AlertTitle>Error variant</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AlertDescription>
        </AlertContainer>
      </Alert>

      <Alert variant="success">
        <AlertIcon>
          <InfoCircle />
        </AlertIcon>
        <AlertContainer>
          <AlertTitle>Success variant</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AlertDescription>
        </AlertContainer>
      </Alert>

      <Alert variant="warning">
        <AlertIcon>
          <InfoCircle />
        </AlertIcon>
        <AlertContainer>
          <AlertTitle>Warning variant</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AlertDescription>
        </AlertContainer>
      </Alert>

      <Alert variant="info">
        <AlertIcon>
          <InfoCircle />
        </AlertIcon>
        <AlertContainer>
          <AlertTitle>Info variant</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AlertDescription>
        </AlertContainer>
      </Alert>

      <Alert variant="brand">
        <AlertIcon>
          <InfoCircle />
        </AlertIcon>
        <AlertContainer>
          <AlertTitle>Brand variant</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AlertDescription>
        </AlertContainer>
      </Alert>
    </div>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <Alert variant="brand">
      <AlertIcon>
        <InfoCircle />
      </AlertIcon>
      <AlertContainer>
        <AlertTitle>Without icon</AlertTitle>
        <AlertDescription>
          Alert component without icon. Use variant="none" for AlertIcon.
        </AlertDescription>
      </AlertContainer>
    </Alert>
  ),
};

export const WithoutTitle: Story = {
  render: () => (
    <Alert variant="default">
      <AlertIcon>
        <InfoCircle />
      </AlertIcon>
      <AlertContainer>
        <AlertDescription>
          Simple message without title, only with icon and description.
        </AlertDescription>
      </AlertContainer>
    </Alert>
  ),
};

export const DescriptionOnly: Story = {
  render: () => (
    <Alert variant="warning">
      <AlertIcon>
        <InfoCircle />
      </AlertIcon>
      <AlertContainer>
        <AlertDescription>Message with only description, without title and icon.</AlertDescription>
      </AlertContainer>
    </Alert>
  ),
};

export const CustomStyles: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="default" className="border-2 border-blue-500 bg-blue-50">
        <AlertIcon>
          <InfoCircle />
        </AlertIcon>
        <AlertContainer>
          <AlertTitle className="text-blue-800">Custom styles</AlertTitle>
          <AlertDescription className="text-blue-700">
            Alert with custom styles through className.
          </AlertDescription>
        </AlertContainer>
      </Alert>

      <Alert className="border-purple-300 bg-gradient-to-r from-purple-100 to-pink-100">
        <AlertIcon>
          <InfoCircle />
        </AlertIcon>

        <AlertContainer>
          <AlertTitle className="text-purple-800">Gradient background</AlertTitle>
          <AlertDescription className="text-purple-700">
            Alert with gradient background.
          </AlertDescription>
        </AlertContainer>
      </Alert>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Alert variant="warning">
      <AlertIcon>
        <InfoCircle />
      </AlertIcon>
      <AlertContainer>
        <AlertTitle>Warning variant with long content</AlertTitle>
        <AlertDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </AlertDescription>
      </AlertContainer>
    </Alert>
  ),
};
