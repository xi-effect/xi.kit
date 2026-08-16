import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts'],
  format: ['esm'],
  dts: true,

  // Принудительно используем UTF-8 для сохранения компактного размера
  // (избегаем преобразования эмодзи в \uXXXX-последовательности)
  esbuildOptions(options) {
    options.charset = 'utf8';
  },
});
