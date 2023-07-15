import { ComponentProps } from 'react';

export type ButtonProps = {} & ComponentProps<'button'>;

export const Button = ({ type = 'button' }: ButtonProps) => {
  console.log('Button');
  return <button type={type}>Button</button>;
};
