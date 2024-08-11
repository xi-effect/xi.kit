import { MaskTypeT } from './types';
import { stringToMaskExpression } from './utils';

export const maskPresets: Record<
  MaskTypeT,
  { placeholder: string; mask: (string | RegExp)[] | RegExp }
> = {
  phone: {
    placeholder: '+7 (___)-___-____',
    mask: stringToMaskExpression('+7 (999)-999-9999'),
  },
  inviteCodeUrl: {
    placeholder: 'https://xieffect.ru/invite/______',
    mask: stringToMaskExpression('https://xieffect.ru/invite/AAAAAAAAAAAA'),
  },
  inviteCode: {
    placeholder: '____________',
    mask: stringToMaskExpression('AAAAAAAAAAAA'),
  },
  date: {
    placeholder: '__.__.____',
    mask: stringToMaskExpression('99.99.9999'),
  },
  dateRange: {
    placeholder: '__.__.____ – __.__.____',
    mask: stringToMaskExpression('99.99.9999 – 99.99.9999'),
  },
  card: {
    placeholder: '____ ____ ____ ____',
    mask: stringToMaskExpression('9999 9999 9999 9999'),
  },
  time: {
    placeholder: '__:__',
    mask: stringToMaskExpression('99:99'),
  },
  passport: {
    placeholder: '__ __ ______',
    mask: stringToMaskExpression('99 99 999999'),
  },
  any: {
    placeholder: '',
    mask: /^.+$/,
  },
};
