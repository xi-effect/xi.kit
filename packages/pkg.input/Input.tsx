import * as React from 'react';
import { Input as MuiInput, InputProps as MuiInputProps } from '@mui/material';

export type InputProps = MuiInputProps & {
  warning?: boolean;
};

export const Input = ({ ...props }: InputProps) => {
  return <MuiInput tabIndex={1} {...props} />;
};
