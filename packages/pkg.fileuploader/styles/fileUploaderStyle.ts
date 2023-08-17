import { SizeType } from '../types';

export const containerStyle = {
  default: {
    width: '100%',
    alignItems: 'center',
    borderRadius: '8px',
    border: '1px dashed',
    borderColor: 'var(--xi-gray-40)',
    backgroundColor: 'var(--xi-gray-0)',
    transition: 'all 0.1s ease-in',
    padding: '0 8px',
    maxWidth: '500px',
  },

  large: {
    height: '92px',
    padding: '24px',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '8px',
    borderColor: 'brand.60',
    backgroundColor: 'brand.0',
  },

  medium: {
    minHeight: '48px',
    padding: '0 12px',
    flexDirection: 'row',
  },

  small: {
    minHeight: '32px',
    padding: '0 8px',
    borderRadius: '6px',
    flexDirection: 'row',
  },
};

const actionContainerStyle = {
  dragOver: {
    boxShadow: '0px 0px 0px 4px #B4BDFF',
    border: '4px solid',
    borderColor: 'var(--xi-brand-80)',
  },

  hover: {
    large: { borderColor: 'var(--xi-brand-80)' },
    medium: { borderColor: 'transparent', backgroundColor: 'var(--xi-gray-5)' },
    small: { borderColor: 'transparent', backgroundColor: 'var(--xi-gray-5)' },
  },

  focus: {
    border: '2px solid',
    borderColor: 'var(--xi-gray-80)',
  },

  warning: {
    border: '2px solid',
    borderColor: 'var(--xi-orange-80)',
  },

  error: {
    border: '2px solid',
    borderColor: 'var(--xi-red-60)',
  },

  disabled: {
    borderColor: 'var(--xi-gray-40)',
    backgroundColor: 'var(--xi-gray-10)',
    pointerEvents: 'none',
    borderWidth: '2px',
  },
};

export const getActionContainerStyle = (
  size: SizeType,
  isDragOver: boolean,
  isHover: boolean,
  isFocus: boolean,
  isError: boolean,
  isWarning: boolean,
  isDisabled: boolean,
) => {
  if (isDisabled) return actionContainerStyle.disabled;

  if (isDragOver) return actionContainerStyle.dragOver;

  if (isHover) return actionContainerStyle.hover[size];

  if (isFocus) return actionContainerStyle.focus;

  if (isError) return actionContainerStyle.error;

  if (isWarning) return actionContainerStyle.warning;

  return {};
};

export const textVariants = {
  large: 'xs' as 'xs',
  medium: 'm' as 'm',
  small: 's' as 's',
};

export const buttonTextVariants = {
  large: 's' as 's',
  medium: 'm' as 'm',
  small: 's' as 's',
};

export const getActionTextStyle = (
  size: SizeType,
  isDragOver: boolean,
  isHover: boolean,
  isFocus: boolean,
  isError: boolean,
  isWarning: boolean,
  isDisabled: boolean,
) => {
  if (isDisabled) return textColorStyle.disabled;

  if (isDragOver || isHover || isError || isWarning || isFocus) {
    return textColorStyle.active[size];
  }

  return textColorStyle.default[size];
};

const textColorStyle = {
  default: {
    large: { button: { color: 'brand.60' }, description: { color: 'brand.20' } },
    medium: { button: { color: 'var(--xi-gray-90)' }, description: { color: 'var(--xi-gray-40)' } },
    small: { button: { color: 'var(--xi-gray-90)' }, description: { color: 'var(--xi-gray-40)' } },
  },

  active: {
    large: { button: { color: 'var(--xi-brand-80)' }, description: { color: 'brand.60' } },
    medium: { description: { color: 'var(--xi-gray-80)' }, button: { color: 'var(--xi-gray-10)0' } },
    small: { description: { color: 'var(--xi-gray-80)' }, button: { color: 'var(--xi-gray-10)0' } },
  },

  disabled: { button: { color: 'var(--xi-gray-40)' }, description: { color: 'var(--xi-gray-40)' } },
};
