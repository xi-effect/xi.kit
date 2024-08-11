import type { MaskitoOptions } from '@maskito/core';
import {
  maskitoDateOptionsGenerator,
  maskitoWithPlaceholder,
  maskitoTimeOptionsGenerator,
  maskitoDateRangeOptionsGenerator,
} from '@maskito/kit';
import { MaskTypeT } from './types';
import { maskPresets } from './maskPresets';

const additionalOptions: Partial<Record<MaskTypeT, MaskitoOptions>> = {
  date: maskitoDateOptionsGenerator({ mode: 'dd/mm/yyyy' }),
  time: maskitoTimeOptionsGenerator({ mode: 'HH:MM' }),
  dateRange: maskitoDateRangeOptionsGenerator({ mode: 'dd/mm/yyyy', rangeSeparator: '.' }),
};

export const options = (maskType: MaskTypeT) => {
  return {
    ...(additionalOptions[maskType] || {}),
    ...maskitoWithPlaceholder(maskPresets[maskType].placeholder, true),
    mask: maskPresets[maskType].mask,
  } as MaskitoOptions;
};
