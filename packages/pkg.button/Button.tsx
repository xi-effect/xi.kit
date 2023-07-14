import { ComponentProps } from 'react';

export type ButtonColors = 'primary' | 'success' | 'error';
export type ButtonSizes = 's' | 'm' | 'l';
export type ButtonProps = {
  color?: ButtonColors;
  size?: ButtonSizes;
} & ComponentProps<'button'>;

export const Button = ({ type = 'button', color = 'primary', size = 'm' }: ButtonProps) => {
  const colorClass =
    (color === 'primary' && 'btn-primary') ||
    (color === 'success' && 'btn-success') ||
    (color === 'error' && 'btn-error');

  const sizeClass =
    (size === 's' && 'btn-s') || (size === 'm' && 'btn-m') || (size === 'l' && 'btn-l');

  return (
    <button type={type} className={`btn ${colorClass} ${sizeClass}`}>
      Button
    </button>
  );
};
