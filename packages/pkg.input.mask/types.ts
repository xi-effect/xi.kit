export type MaskTypeT = GeneralMaskTypeT | MaskHandlersTypeT;
export type GeneralMaskTypeT = 'card' | 'passport' | 'phone' | 'inviteCode';
export type MaskHandlersTypeT = 'date' | 'time';
