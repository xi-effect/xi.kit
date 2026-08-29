const ZWJ = '‍'; // Символ-соединитель (Zero Width Joiner), используется в составных эмодзи
const VARIATION_SELECTOR = /️/g; // Регулярка для удаления вариационного селектора FE0F

/**
 * Вычисляет ID иконки из библиотеки @astronautlabs/emoji для любого эмодзи.
 *
 * 1. Если в эмодзи есть соединитель (ZWJ) — сохраняем вариационный селектор FE0F,
 *    он нужен для правильной сборки составных эмодзи (например, 👨‍👩‍👦)
 * 2. Если соединителя нет — удаляем FE0F, так как он не влияет на отображение
 *    одиночных эмодзи и только раздувает ID
 * 3. Преобразуем каждый символ в его шестнадцатеричный код (Unicode codepoint)
 * 4. Склеиваем коды через дефис — получается ID, который используется в URL картинки
 *
 * Преимущество: работает с любым эмодзи, даже если его нет в emojis.json.
 * Это важно, потому что на доске могут храниться эмодзи, добавленные до обновления пакета.
 */
export const getEmojiIconId = (char: string): string => {
  const normalized = char.includes(ZWJ) ? char : char.replace(VARIATION_SELECTOR, '');
  const codePoints: string[] = [];

  for (const codePoint of normalized) {
    codePoints.push((codePoint.codePointAt(0) ?? 0).toString(16));
  }

  return codePoints.join('-');
};
