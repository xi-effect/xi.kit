import { ReactRenderer } from '@storybook/react';
import React from 'react';
import { DecoratorFunction } from 'storybook/internal/types';

const updateTheme = (theme: string) => {
  const htmlElement = document.documentElement;
  htmlElement.setAttribute('data-theme', theme);
  htmlElement.style.colorScheme = theme;
};

export const themeDecorator: DecoratorFunction<ReactRenderer, { [x: string]: unknown }> = (
  Story,
  context,
) => {
  const theme = context.globals.theme;
  updateTheme(theme);
  return <Story />;
};
