'use client';

import * as React from 'react';
import { MultipleSelector, Option } from '@xipkg/inputtoken';

const OPTIONS: Option[] = [
  { label: 'nextjs', value: 'nextjs' },
  { label: 'React', value: 'react' },
  { label: 'Remix', value: 'remix' },
  { label: 'Vite', value: 'vite' },
  { label: 'Nuxt', value: 'nuxt' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Angular', value: 'angular' },
  { label: 'Ember', value: 'ember', disable: true },
  { label: 'Gatsby', value: 'gatsby', disable: true },
  { label: 'Astro', value: 'astro' },
];

export default function InputTokenPage() {
  console.log('123');
  return (
    <>
      <div className="w-full px-10">
        <MultipleSelector
          defaultOptions={OPTIONS}
          placeholder="Выберите фреймворк который вам нравится..."
          emptyIndicator={
            <p className="text-center rounded-md text-xl leading-10 text-gray-30 dark:text-gray-400 h-8">
              Не найдено
            </p>
          }
        />
      </div>
    </>
  );
}
