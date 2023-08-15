import TextField, { TextFieldProps } from '@mui/material/TextField';
import React from 'react';

type InputProps = TextFieldProps;

export const Input = (props: InputProps) => {
  return (
    <TextField
      sx={{
        '& .MuiInputBase-root': {
          borderRadius: '8px',
          height: '56px',
          fontWeight: 400,
          fontSize: 16,
          lineHeight: '20px',
        },
        '& .MuiInputBase-input::placeholder': {
          opacity: 1,
          color: `${props.error ? 'red.80' : 'gray.30'}`,
        },
        '& .MuiFormHelperText-root': {
          fontSize: 14,
          marginLeft: 0,
          fontWeight: 400,
          color: 'red.80',
          marginTop: '4px',
          lineHeight: '16px',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: `1px solid ${props.error ? 'red.80' : 'gray.50'}`,
        },
        ...props.sx,
      }}
      {...props}
    />
  );
};
