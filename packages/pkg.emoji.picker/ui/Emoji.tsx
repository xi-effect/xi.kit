import { useLayoutEffect, useMemo, useState } from 'react';
import { cn } from '@xipkg/utils';

import { getEmojiIconId } from '../utils/getEmojiIconId';
import { DEFAULT_EMOJI_IMAGE_BASE_URL } from '../constants';

// Используется только в том случае, если не удалось загрузить SVG—изображение, и мы возвращаемся к исходному символу.
const FALLBACK_FONT_FAMILY = 'Apple Color Emoji, Twemoji Mozilla, Noto Color Emoji, Android Emoji';

type EmojiPropsT = {
  char: string;
  iconId?: string;
  size?: number;
  baseUrl?: string;
  className?: string;
};

export const Emoji = ({
  char,
  iconId,
  size = 20,
  baseUrl = DEFAULT_EMOJI_IMAGE_BASE_URL,
  className,
}: EmojiPropsT) => {
  const [failed, setFailed] = useState(false);
  const resolvedIconId = useMemo(() => iconId ?? getEmojiIconId(char), [iconId, char]);

  // На доске фигуры переиспользуют один и тот же экземпляр React-компонента,когда меняются их props.
  // Это происходит потому, что React использует key по ID фигуры, а не по её содержимому (символу эмодзи).
  // Из-за этого возникает баг: если у фигуры сначала не загрузилась картинка эмодзи (состояние failed = true),
  // то при смене символа на другой, который загружается нормально, компонент всё равно показывает текстовый вариант -
  // (запасной char), потому что состояние failed осталось true от предыдущего символа.

  // Используем useLayoutEffect, который сбрасывает состояние failed в false каждый раз, когда меняется char или baseUrl.
  // Это гарантирует, что при смене символа компонент снова попытается загрузить картинку, а не останется в "сломанном" состоянии.
  useLayoutEffect(() => {
    setFailed(false);
  }, [char, baseUrl]);

  if (failed) {
    return (
      <span
        className={cn('inline-block leading-none', className)}
        style={{ fontSize: size, fontFamily: FALLBACK_FONT_FAMILY }}
      >
        {char}
      </span>
    );
  }

  return (
    <img
      src={`${baseUrl}/${resolvedIconId}.svg`}
      alt={char}
      width={size}
      height={size}
      draggable={false}
      loading="lazy"
      onError={() => setFailed(true)}
      className={cn('inline-block select-none', className)}
    />
  );
};
