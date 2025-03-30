import type { Meta, StoryObj } from '@storybook/react';
import { EmojiPicker } from '@xipkg/emojipicker';
import { useState } from 'react';

const meta = {
  title: 'Components/EmojiPicker',
  component: EmojiPicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EmojiPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [selectedEmoji, setSelectedEmoji] = useState<string>('');

    return (
      <div className="flex flex-col items-center gap-4">
        <EmojiPicker onEmojiSelect={setSelectedEmoji} />
        {selectedEmoji && (
          <div className="text-2xl">
            Выбранный эмодзи: {selectedEmoji}
          </div>
        )}
      </div>
    );
  },
};

export const WithRecentEmojis: Story = {
  render: () => {
    const [selectedEmoji, setSelectedEmoji] = useState<string>('');
    const recentEmojis = ['1f600', '1f601', '1f602', '1f603', '1f604'];

    return (
      <div className="flex flex-col items-center gap-4">
        <EmojiPicker
          onEmojiSelect={setSelectedEmoji}
          recentEmojis={recentEmojis}
        />
        {selectedEmoji && (
          <div className="text-2xl">
            Выбранный эмодзи: {selectedEmoji}
          </div>
        )}
      </div>
    );
  },
}; 
