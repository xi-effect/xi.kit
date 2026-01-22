const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'icons');
const indexFile = path.join(__dirname, 'index.ts');
const configFile = path.join(__dirname, 'config.ts');

// Получаем все файлы иконок
const iconFiles = fs
  .readdirSync(iconsDir)
  .filter((file) => file.endsWith('.tsx'))
  .map((file) => file.replace('.tsx', ''))
  .sort();

// Генерируем импорты
const imports = iconFiles
  .map((iconName) => `import { ${iconName} } from './icons/${iconName}';`)
  .join('\n');

// Генерируем экспорты
const exports = iconFiles.map((iconName) => `  ${iconName},`).join('\n');

// Генерируем конфиг
const configArray = iconFiles.map((iconName) => `  '${iconName}',`).join('\n');

// Генерируем index.ts
const indexContent = `${imports}

import { icons } from './config';

export {
${exports}
  icons,
};

export type { IconProps } from './Svg';
`;

// Генерируем config.ts
const configContent = `export const icons = [
${configArray}
] as const;
`;

// Записываем файлы
fs.writeFileSync(indexFile, indexContent, 'utf-8');
fs.writeFileSync(configFile, configContent, 'utf-8');

console.log(`✅ Сгенерировано ${iconFiles.length} иконок`);
console.log(`📝 Обновлены файлы: index.ts, config.ts`);
