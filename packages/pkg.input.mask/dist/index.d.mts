import * as react from 'react';

type MaskTypeT = 'card' | 'passport' | 'phone' | 'inviteCode' | 'inviteCodeUrl' | 'date' | 'time' | 'dateRange' | 'any';

declare const useMaskInput: (mask?: MaskTypeT) => react.RefCallback<HTMLElement>;

export { useMaskInput };
