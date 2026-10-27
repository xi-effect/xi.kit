import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { EMOJI } from '@astronautlabs/emoji';
import type { EmojiT } from '../types';
import { getEmojiIconId } from '../utils/getEmojiIconId';

interface RuEmojiEntry {
  hexcode: string;
  emoji: string;
  label?: string;
  tags?: string[];
}

interface CategoryData {
  name: string;
  nameRus: string;
  emojis: EmojiT[];
}

interface AstronautEmoji {
  unicodeString?: string;
  unicode?: number[];
  string?: string;
  char?: string;
  description?: string;
  shortcut?: string;
  keywords?: string[];
  excludeFromPicker?: boolean;
}

interface CategoryOrder {
  id: string;
  name: string;
  nameRus: string;
}

// Загружаем данные локализации эмодзи на русском. Это жёсткий сбой, а не мягкая деградация:
// единственная проверка, которая выполняется дальше в скрипте, — покрытие по символам,
// а не по локализации, так что проглоченная ошибка загрузки молча выпустила бы
// англоязычный "русский" пикер.
const require = createRequire(import.meta.url);
let ruEmojiData: RuEmojiEntry[];
try {
  ruEmojiData = require('emojibase-data/ru/data.json');
} catch (error) {
  console.error('Failed to load emojibase-data/ru/data.json:', error);
  process.exit(1);
}

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const packageRoot = resolve(__dirname, '..');
const outputPath = resolve(packageRoot, 'emojis.json');

/**
 * Сравниваем с последним *закоммиченным* датасетом, а не с файлом на диске: как только
 * emojis.json был перегенерирован, копия в рабочей директории — это собственный
 * (возможно, всё ещё сломанный) результат этого же скрипта, так что использовать её
 * как базу для проверки совместимости позволило бы плохой записи одного прогона
 * молча "унаследоваться" в каждом следующем прогоне.
 */
// Форсируем англоязычный вывод git, чтобы проверка "does not exist" ниже не зависела
// от локали/языка сообщений на машине, где запускается скрипт.
const GIT_ENV = { ...process.env, LC_ALL: 'C' };

const readCommittedEmojis = (): CategoryData[] => {
  const repoRoot = execFileSync('git', ['rev-parse', '--show-toplevel'], {
    encoding: 'utf8',
    env: GIT_ENV,
  }).trim();
  const relativePath = relative(repoRoot, outputPath);

  try {
    return JSON.parse(
      execFileSync('git', ['show', `HEAD:${relativePath}`], {
        cwd: repoRoot,
        encoding: 'utf8',
        env: GIT_ENV,
      }),
    );
  } catch (error) {
    // Откатываемся на файл с диска только в одном ожидаемом случае: файл новый
    // и ещё не имеет закоммиченной версии. Любая другая ошибка git (временный сбой,
    // shallow-clone, detached HEAD) должна проявляться явно, а не молча доверять
    // тому, что оставил на диске предыдущий (возможно, сломанный) прогон этого скрипта.
    const message = error instanceof Error ? error.message : String(error);
    if (!message.includes('does not exist in')) {
      throw error;
    }
    return JSON.parse(readFileSync(outputPath, 'utf8'));
  }
};

/**
 * Не попадают в пикер. Сверяем и по iconId, и по нормализованному имени:
 * у составных эмодзи char может отличаться вариационным селектором FE0F,
 * а имя стабильно после formatEmojiName.
 *
 * Здесь символы идентичности и однополых пар, гендерно-инвертированные роли
 * и то, что не подходит детской аудитории: мат, алкоголь, курение, азартные
 * игры, оружие и взрывчатка.
 */
const EXCLUDED_EMOJIS: { iconId: string; name: string }[] = [
  { iconId: '1f3f3-fe0f-200d-1f308', name: 'rainbow flag' },
  { iconId: '1f3f3-fe0f-200d-26a7-fe0f', name: 'transgender flag' },
  { iconId: '26a7', name: 'transgender sign' },
  { iconId: '1f469-200d-2764-fe0f-200d-1f469', name: 'couple with heart woman woman' },
  { iconId: '1f468-200d-2764-fe0f-200d-1f468', name: 'couple with heart man man' },
  { iconId: '1f491', name: 'couple with heart' },
  { iconId: '1f469-200d-2764-fe0f-200d-1f48b-200d-1f469', name: 'kiss woman woman' },
  { iconId: '1f468-200d-2764-fe0f-200d-1f48b-200d-1f468', name: 'kiss man man' },
  { iconId: '1f48f', name: 'kiss' },
  { iconId: '1f46d', name: 'women holding hands' },
  { iconId: '1f46c', name: 'men holding hands' },
  { iconId: '1fac3', name: 'pregnant man' },
  { iconId: '1fac4', name: 'pregnant person' },
  { iconId: '1f470-200d-2642-fe0f', name: 'man with veil' },
  { iconId: '1f9d1-200d-1f384', name: 'mx claus' },
  { iconId: '1f595', name: 'reversed hand with middle finger extended' },
  { iconId: '1f92c', name: 'face with symbols over mouth' },
  { iconId: '1fae6', name: 'biting lip' },
  { iconId: '1f51e', name: 'no one under eighteen symbol' },
  { iconId: '1f3e9', name: 'love hotel' },
  { iconId: '1f6ac', name: 'smoking symbol' },
  { iconId: '1f37a', name: 'beer mug' },
  { iconId: '1f37b', name: 'clinking beer mugs' },
  { iconId: '1f377', name: 'wine glass' },
  { iconId: '1f942', name: 'clinking glasses' },
  { iconId: '1f943', name: 'tumbler glass' },
  { iconId: '1f378', name: 'cocktail glass' },
  { iconId: '1f379', name: 'tropical drink' },
  { iconId: '1f37e', name: 'bottle with popping cork' },
  { iconId: '1f376', name: 'sake bottle and cup' },
  { iconId: '1f3b0', name: 'slot machine' },
  { iconId: '1f52b', name: 'water pistol' },
  { iconId: '1f9e8', name: 'firecracker' },
  { iconId: '1f4a3', name: 'bomb' },
  { iconId: '1f52a', name: 'hocho' },
  { iconId: '1f5e1', name: 'dagger knife' },
  { iconId: '2694', name: 'crossed swords' },
  { iconId: '1fa93', name: 'axe' },
];

const EXCLUDED_ICON_IDS = new Set(EXCLUDED_EMOJIS.map((emoji) => emoji.iconId));
const EXCLUDED_NAMES = new Set(EXCLUDED_EMOJIS.map((emoji) => emoji.name));

const isExcludedEmoji = (emoji: { iconId: string; name: string }): boolean =>
  EXCLUDED_ICON_IDS.has(emoji.iconId) || EXCLUDED_NAMES.has(emoji.name);

const categoryOrder: CategoryOrder[] = [
  { id: 'people', name: 'emotions', nameRus: 'лица и эмоции' },
  { id: 'nature', name: 'nature', nameRus: 'природа' },
  { id: 'food', name: 'food', nameRus: 'еда и напитки' },
  { id: 'activity', name: 'activity', nameRus: 'активности' },
  { id: 'travel', name: 'places', nameRus: 'путешествия и места' },
  { id: 'objects', name: 'objects', nameRus: 'объекты' },
  { id: 'symbols', name: 'symbols', nameRus: 'символы' },
  { id: 'flags', name: 'flags', nameRus: 'флаги' },
];

const formatEmojiName = (value: string | undefined): string => {
  if (!value) return 'emoji';

  return (
    String(value)
      .normalize('NFKC')
      .toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[^\p{L}\p{N}]+/gu, ' ')
      .replace(/\s+/g, ' ')
      .trim() || 'emoji'
  );
};

const getEmojiUnicode = (item: AstronautEmoji): string => {
  if (typeof item.unicodeString === 'string' && item.unicodeString.length > 0) {
    return item.unicodeString;
  }

  if (Array.isArray(item.unicode)) {
    return item.unicode.map((code) => code.toString(16).padStart(4, '0')).join('-');
  }

  return '';
};

const getEmojiChar = (item: AstronautEmoji): string => {
  if (typeof item.string === 'string' && item.string.length > 0) {
    return item.string;
  }

  if (typeof item.char === 'string' && item.char.length > 0) {
    return item.char;
  }

  return '';
};

/**
 * emojibase-data индексирует свои русские названия/теги по unicode hexcode, в большинстве
 * случаев совпадающему с нашим полем `unicode` 1:1 (без учёта регистра). Часть записей
 * совпадает только после того, как с обеих сторон убран вариационный селектор FE0F
 * (например, символы copyright/registered, "голые" keycap-эмодзи) — для них используется
 * запасной поиск.
 */
const stripVariationSelector = (value: string): string => value.replace(/\u{FE0F}/gu, '');

const ruByHexcode = new Map(ruEmojiData.map((entry) => [entry.hexcode.toLowerCase(), entry]));
const ruByCharWithoutVariation = new Map(
  ruEmojiData.map((entry) => [stripVariationSelector(entry.emoji), entry]),
);

const findRuEntry = (emoji: EmojiT): RuEmojiEntry | undefined =>
  ruByHexcode.get(emoji.unicode.toLowerCase()) ??
  ruByCharWithoutVariation.get(stripVariationSelector(emoji.char));

const addRuLocalization = (
  emoji: EmojiT,
): EmojiT & { nameRus?: string; keywordsRus?: string[] } => {
  const ruEntry = findRuEntry(emoji);
  if (!ruEntry) return emoji;

  return {
    ...emoji,
    ...(ruEntry.label ? { nameRus: ruEntry.label } : {}),
    ...(ruEntry.tags?.length ? { keywordsRus: ruEntry.tags } : {}),
  };
};

const legacyData = readCommittedEmojis();
const legacyChars = new Set(
  legacyData.flatMap((category) => category.emojis.map((emoji) => emoji.char)),
);

// Часть старых символов побайтово отличается от того, что @astronautlabs/emoji генерирует
// для "того же" эмодзи сегодня (например, старые keycap-эмодзи хранили вариационный
// селектор FE0F — "0️⃣" — а item.string библиотеки его опускает — "0⃣"). Оба варианта
// указывают на один и тот же файл картинки, так что вместо того, чтобы выводить оба
// (как раньше происходило через список исключений, поддерживаемый вручную, который уже
// разошёлся с реальностью), предпочитаем тот точный char/unicode, что уже использовался
// в старом датасете, сопоставляя по идентичности ассета, а не по точному равенству строк.
// Это также позволяет любому будущему изменению такого рода в @astronautlabs/emoji
// самоисправляться, а не молча плодить дубликаты записей снова.
const legacyByIconId = new Map(
  legacyData
    .flatMap((category) => category.emojis)
    .map((emoji) => [getEmojiIconId(emoji.char), emoji]),
);

const categoryMap = new Map(EMOJI.categories.map((category) => [category.id, category]));
const generated: CategoryData[] = categoryOrder.map(({ id, name, nameRus }) => {
  const sourceCategory = categoryMap.get(id);

  if (!sourceCategory) {
    throw new Error(`Missing source category for id "${id}" in @astronautlabs/emoji`);
  }

  const emojis = (sourceCategory.items ?? [])
    .filter((item) => !item.excludeFromPicker || legacyChars.has(getEmojiChar(item)))
    .map((item) => {
      const char = getEmojiChar(item);
      const iconId = getEmojiIconId(char);
      const legacyEquivalent = legacyByIconId.get(iconId);

      if (legacyEquivalent && legacyEquivalent.char !== char) {
        return addRuLocalization({ ...legacyEquivalent, iconId });
      }

      const description = item.description ?? item.shortcut ?? item.keywords?.[0] ?? 'emoji';

      return addRuLocalization({
        name: formatEmojiName(description),
        unicode: getEmojiUnicode(item),
        char,
        iconId,
      });
    })
    .filter((emoji) => !isExcludedEmoji(emoji));

  return { name, nameRus, emojis };
});

const generatedChars = new Set(
  generated.flatMap((category) => category.emojis.map((emoji) => emoji.char)),
);
const excludedChars = new Set(
  legacyData
    .flatMap((category) => category.emojis)
    .filter((emoji) => isExcludedEmoji(emoji))
    .map((emoji) => emoji.char),
);
const missingFromNew = [...legacyChars].filter(
  (char) => !generatedChars.has(char) && !excludedChars.has(char),
);

if (missingFromNew.length > 0) {
  console.error(
    `Compatibility check failed: ${missingFromNew.length} legacy emoji characters are missing in the generated dataset.`,
  );
  console.error(missingFromNew.slice(0, 25).join(', '));
  process.exit(1);
}

const allEmojis = generated.flatMap((category) => category.emojis);
const totalEmojis = allEmojis.length;
const localizedCount = allEmojis.filter((emoji) => (emoji as any).nameRus).length;
writeFileSync(outputPath, `${JSON.stringify(generated, null, 2)}\n`, 'utf8');

console.log(`Generated ${generated.length} categories with ${totalEmojis} emoji entries.`);
console.log(`Excluded from picker: ${excludedChars.size} legacy entries.`);
console.log(
  `Backward compatibility check passed: ${legacyChars.size} legacy chars remain available.`,
);
console.log(
  `Russian localization: ${localizedCount}/${totalEmojis} entries matched (${totalEmojis - localizedCount} without a Russian name).`,
);
