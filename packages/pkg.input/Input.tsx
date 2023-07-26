import * as React from 'react';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';

export type InputProps = InputBaseProps & {
  warning?: boolean;
};

export const Input = ({ ...props }: InputProps) => {
  return <InputBase tabIndex={1} {...props} />;
};
