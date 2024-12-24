'use client';

import { EmojiPicker } from '@xipkg/emojipicker';
import { Input } from '@xipkg/input';
import { useState } from 'react';

const EmojiPickerPage = () => {
  const [selectedEmojis, setSelectedEmojis] = useState<string>('');

  const recentEmojis = [
    { unicode: '1F600', char: '😀', name: 'grinning' },
    { unicode: '1F603', char: '😃', name: 'smiley' },
  ];

  const handleEmojiSelect = (emoji: string) => {
    setSelectedEmojis((prev) => prev + emoji);
  };
  return (
    <div className="flex w-[320px] items-end justify-center">
      <Input
        variant="m"
        value={selectedEmojis}
        onChange={(e) => setSelectedEmojis(e.target.value)}
        placeholder="Введите сообщение"
        className="border w-full"
        after={<EmojiPicker recentEmojis={recentEmojis} onEmojiSelect={handleEmojiSelect} />}
      />
    </div>
  );
};

export default EmojiPickerPage;
