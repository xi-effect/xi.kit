import type { MaskitoOptions } from '@maskito/core';
import {
  maskitoDateOptionsGenerator,
  maskitoWithPlaceholder,
  maskitoTimeOptionsGenerator,
} from '@maskito/kit';
import { MaskTypeT } from './types';
import { maskPresets } from './maskPresets';

const additionalOptions: Partial<Record<MaskTypeT, MaskitoOptions>> = {
  date: maskitoDateOptionsGenerator({ mode: 'mm/dd/yyyy' }),
  time: maskitoTimeOptionsGenerator({ mode: 'HH:MM' }),
};

export const options = (maskType: MaskTypeT) => {
  return {
    ...maskitoWithPlaceholder(maskPresets[maskType].placeholder, true),
    ...(additionalOptions[maskType] || {}),
    mask: maskPresets[maskType].mask,
  } as MaskitoOptions;
};
