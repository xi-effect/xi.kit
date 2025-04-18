# Дизайн-система команды xi.team

Привет! Вы находитесь в репозитории дизайн-системы и React-компонентов, созданных для команды xi.team и платформы xieffect.

## Для начала работы

Выполните установку зависимостей, запустив команду в корне репозитория:

```bash
npm i
```

> Если зависимости не устанавливаются, возможно, потребуется использовать флаг --legacy-peer-deps.

Запустите следующую команду в корне репозитория для начала локальной разработки компонентов:

```bash
npm run dev
```

> Запустится Storybook из xi.storybook на порту 6006 и среда тестирования компонентов из xi.playground на порту 3600, а также все компоненты перейдут в режим HMR.

## Добавление новых иконок

Процесс добавления новых иконок в проект:

1. Выбор иконок из дизайна в [Figma](https://www.figma.com/design/NDbE4wRVNcWSNxWoivaOGe/%F0%9F%96%8D%EF%B8%8F-Icons?node-id=741-510&t=Z53rXGxjYQWqN2jG-4)
2. Экспорт в формате SVG из фрейма 24×24 пикселя
3. Оптимизация через SVGO для удаления лишних атрибутов и конвертации из stroke в fill
4. Создание нового файла в директории `packages/pkg.icons/icons/` с названием иконки в формате PascalCase (например, `NewIcon.tsx`)
5. Использование базового шаблона для компонента иконки:
   ```tsx
   import { Svg, IconProps } from '../Svg';

   export const NewIcon = ({ ...props }: IconProps) => (
     <Svg {...props}>
       <path d="..." /> // SVG-путь из оптимизированного файла
     </Svg>
   );
   ```
6. Добавление названия иконки в массив `icons` в файле `packages/pkg.icons/config.ts`
7. Сборка пакета иконок командой `npm run build` в директории `packages/pkg.icons/`
8. Проверка отображения иконки в Storybook

Все компоненты иконок имеют единый интерфейс и поддерживают настройку размера и темы через пропсы.

## Публикация пакетов

Пакеты публикуются автоматически с помощью GitHub Actions. Перед публикацией убедитесь, что версия пакета в файле package.json обновлена в соответствии с внесёнными изменениями (соблюдая SemVer). Перед отправкой изменений не забудьте выполнить npm i в корне репозитория.
