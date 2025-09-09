import type { Meta, StoryObj } from '@storybook/react';
import { File } from '@xipkg/file';

const meta = {
  title: 'Components/File',
  component: File,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof File>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'document.pdf',
    url: 'https://example.com/document.pdf',
    size: 1024 * 1024, // 1MB
  },
};

export const WithIcon: Story = {
  args: {
    name: 'image.jpg',
    url: 'https://example.com/image.jpg',
    size: 2 * 1024 * 1024, // 2MB
    icon: 'https://picsum.photos/48/48',
  },
};

export const WithDelete: Story = {
  args: {
    name: 'document.docx',
    url: 'https://example.com/document.docx',
    size: 512 * 1024, // 512KB
    onDelete: (name) => console.log('Delete file:', name),
  },
};

export const LongFileName: Story = {
  args: {
    name: 'very_long_file_name_that_should_be_truncated.pdf',
    url: 'https://example.com/very_long_file_name_that_should_be_truncated.pdf',
    size: 3 * 1024 * 1024, // 3MB
  },
};
