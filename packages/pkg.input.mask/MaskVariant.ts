import {
  DefaultCreditCardDelimiter,
  formatDate,
  formatGeneral,
  registerCursorTracker,
  formatTime,
} from 'cleave-zen';
import { MaskType } from './types';

export const setMask = (
  maskType: MaskType | undefined,
  event: React.ChangeEvent<HTMLInputElement>,
) => {
  const value = event.target.value || '';
  registerCursorTracker({ input: event.target, delimiter: DefaultCreditCardDelimiter });

  switch (maskType) {
    case 'date':
      return formatDate(value, {
        delimiter: '.',
        datePattern: ['d', 'm', 'Y'],
        delimiterLazyShow: true,
      });
    case 'card':
      return formatGeneral(value, {
        blocks: [4, 4, 4, 4],
        delimiter: ' ',
        numericOnly: true,
      });
    case 'passport':
      return formatGeneral(value, {
        blocks: [4, 6],
        delimiter: ' ',
        numericOnly: true,
      });
    case 'time':
      return formatTime(value, {
        delimiter: ':',
        timePattern: ['h', 'm'],
      });
    case 'phone':
      return formatGeneral(value, {
        blocks: [1, 3, 3, 4],
        numericOnly: true,
        delimiters: [' (', ') ', ' '],
      });
    case 'inviteCode':
      return formatGeneral(value, {
        blocks: [12],
        uppercase: true,
      });
    default:
      return value;
  }
};
