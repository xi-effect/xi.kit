import { DefaultCreditCardDelimiter, formatGeneral, registerCursorTracker } from 'cleave-zen';
import { GeneralMaskTypeT, MaskTypeT } from './types';
import { generalMaskConfigs, maskHandlers } from './MaskVariantsConfig';

export const useMask = (maskType: MaskTypeT | undefined) => {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value || '';
    registerCursorTracker({ input: event.target, delimiter: DefaultCreditCardDelimiter });

    if (maskType && maskType in generalMaskConfigs) {
      return formatGeneral(value, generalMaskConfigs[maskType as GeneralMaskTypeT]);
    }

    const handler = maskHandlers[maskType as keyof typeof maskHandlers] || ((val: string) => val);
    return handler(value);
  };
};
