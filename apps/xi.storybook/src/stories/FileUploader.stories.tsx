import type { Meta, StoryObj } from '@storybook/react';
import { FileUploader } from '@xipkg/fileuploader';

const meta: Meta<typeof FileUploader> = {
  title: 'Components/FileUploader',
  component: FileUploader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FileUploader>;

export const Default: Story = {
  args: {
    onChange: (files) => console.log('Selected files:', files),
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    onChange: (files) => console.log('Selected files:', files),
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    onChange: (files) => console.log('Selected files:', files),
  },
};

export const WithFileTypes: Story = {
  args: {
    fileTypesHint: ['pdf', 'doc', 'docx'],
    onChange: (files) => console.log('Selected files:', files),
  },
};

export const WithError: Story = {
  args: {
    withError: true,
    onChange: (files) => console.log('Selected files:', files),
  },
};

export const WithWarning: Story = {
  args: {
    isWarning: true,
    onChange: (files) => console.log('Selected files:', files),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    onChange: (files) => console.log('Selected files:', files),
  },
};
