import { ComponentProps } from 'react';

export type ButtonColors = 'primary' | 'success' | 'error';
export type ButtonProps = {
  color?: ButtonColors;
} & ComponentProps<'button'>;

export const Button = ({ type = 'button', color = 'primary' }: ButtonProps) => {
  const colorClass =
    (color === 'primary' && 'btn-primary') ||
    (color === 'success' && 'btn-success') ||
    (color === 'error' && 'btn-error');
  return (
    <button type={type} className={`btn ${colorClass}`}>
      Button
    </button>
  );
};
