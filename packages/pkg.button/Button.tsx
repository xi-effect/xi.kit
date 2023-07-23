import { ComponentProps, ReactNode } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

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

export const Button = ({
  type = 'button',
  color = 'primary',
  size = 'medium',
  variant = 'contained',
  disabled,
  children,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton
      type={type}
      disabled={!!disabled}
      color={color}
      size={size}
      variant={variant}
      {...props}
    >
      {children}
    </MuiButton>
  );
};
