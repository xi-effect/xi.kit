import { ComponentProps } from 'react';

export type ButtonColors = 'primary' | 'success' | 'error';
export type ButtonSizes = 's' | 'm' | 'l';
export type ButtonVariants = 'text' | 'contained' | 'outlined';
export type ButtonProps = {
  color?: ButtonColors;
  size?: ButtonSizes;
  variant?: ButtonVariants;
  disabled?: boolean;
} & ComponentProps<'button'>;

export const Button = ({
  type = 'button',
  color = 'primary',
  size = 'm',
  variant = 'contained',
  disabled,
}: ButtonProps) => {
  const colorClass =
    (color === 'primary' && 'btn-primary') ||
    (color === 'success' && 'btn-success') ||
    (color === 'error' && 'btn-error');

  const sizeClass =
    (size === 's' && 'btn-s') || (size === 'm' && 'btn-m') || (size === 'l' && 'btn-l');

  const variantClasses =
    (variant === 'contained' && '') ||
    (variant === 'text' && 'btn-text') ||
    (variant === 'outlined' && 'btn-outlined');

  return (
    <button
      type={type}
      className={`btn ${colorClass} ${sizeClass} ${variantClasses}`}
      disabled={!!disabled}
    >
      Button
    </button>
  );
};
