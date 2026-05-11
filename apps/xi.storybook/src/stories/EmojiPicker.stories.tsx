import type { Meta, StoryObj } from '@storybook/react';
import { EmojiPicker, EmojiPickerPopup } from '@xipkg/emojipicker';
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
        {selectedEmoji && <div className="text-2xl">Выбранный эмодзи: {selectedEmoji}</div>}
      </div>
    );
  },
};

export const WithRecentEmojis: Story = {
  render: () => {
    const [selectedEmoji, setSelectedEmoji] = useState<string>('');
    const [recentEmojis, setRecentEmojis] = useState(['😂', '👽']);
    const onEmojiSelectHandler = (emoji: string) => {
      setSelectedEmoji(emoji);
      setRecentEmojis([emoji, ...recentEmojis]);
    };

    return (
      <div className="flex flex-col items-center gap-4">
        <EmojiPicker onEmojiSelect={onEmojiSelectHandler} recentEmojis={recentEmojis} />
        {selectedEmoji && <div className="text-2xl">Выбранный эмодзи: {selectedEmoji}</div>}
      </div>
    );
  },
};

export const WithCustomTriggerComponent: Story = {
  render: () => {
    const [selectedEmoji, setSelectedEmoji] = useState<string>('');
    const [open, setOpen] = useState(false);

    const setOpenHandle = () => setOpen(!open);

    return (
      <div className="flex flex-col items-center gap-4">
        <span onClick={setOpenHandle}>Trigger</span>
        {open && <EmojiPickerPopup onEmojiSelect={setSelectedEmoji} />}
        {selectedEmoji && <div className="text-2xl">Выбранный эмодзи: {selectedEmoji}</div>}
      </div>
    );
  },
};
