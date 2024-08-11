import { MaskTypeT } from './types';
import { useMaskito } from '@maskito/react';
import { options } from './maskConfig';

export const useMaskInput = (mask: MaskTypeT = 'any') => {
  return useMaskito({ options: options(mask) });
};
