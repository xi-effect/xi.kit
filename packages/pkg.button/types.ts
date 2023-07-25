import { ComponentProps } from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material';

export type ButtonColors = 'primary' | 'success' | 'error';
export type ButtonSizes = 'small' | 'medium' | 'large';
export type ButtonVariants = 'text' | 'contained' | 'outlined';
export type ButtonProps = {
  color?: ButtonColors;
  size?: ButtonSizes;
  variant?: ButtonVariants;
  disabled?: boolean;
} & ComponentProps<'button'> &
  MuiButtonProps;
