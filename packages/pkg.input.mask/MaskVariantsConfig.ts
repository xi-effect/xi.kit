import { formatDate, formatTime, FormatGeneralOptions } from 'cleave-zen';
import { GeneralMaskTypeT, MaskHandlersTypeT } from './types';

export const generalMaskConfigs: Record<GeneralMaskTypeT, FormatGeneralOptions> = {
  card: {
    blocks: [4, 4, 4, 4],
    delimiter: ' ',
    numericOnly: true,
  },
  passport: {
    blocks: [4, 6],
    delimiter: ' ',
    numericOnly: true,
  },
  phone: {
    blocks: [1, 3, 3, 4],
    numericOnly: true,
    delimiters: [' (', ') ', ' '],
    delimiterLazyShow: false,
  },
  inviteCode: {
    blocks: [12],
    uppercase: true,
  },
};

export const maskHandlers: Record<MaskHandlersTypeT, (value: string) => string> = {
  date: (value: string) =>
    formatDate(value, {
      delimiter: '.',
      datePattern: ['d', 'm', 'Y'],
    }),
  time: (value: string) =>
    formatTime(value, {
      delimiter: ':',
      timePattern: ['h', 'm'],
    }),
};
