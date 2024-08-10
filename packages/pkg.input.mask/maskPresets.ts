import { MaskTypeT } from './types';
import { mapToArray } from './utils';

export const maskPresets: Record<MaskTypeT, { placeholder: string; mask: (string | RegExp)[] }> = {
  phone: {
    placeholder: '+7 (000)-___-____',
    mask: mapToArray('+7 (999)-999-9999'),
  },
  inviteCode: {
    placeholder: '______',
    mask: mapToArray('AAAAAA'),
  },
  date: {
    placeholder: '__.__.____',
    mask: mapToArray('99.99.9999'),
  },
  card: {
    placeholder: '____ ____ ____ ____',
    mask: mapToArray('9999 9999 9999 9999'),
  },
  time: {
    placeholder: '__:__',
    mask: mapToArray('99:99'),
  },
  passport: {
    placeholder: '__ __ ______',
    mask: mapToArray('99 99 999999'),
  },
};
