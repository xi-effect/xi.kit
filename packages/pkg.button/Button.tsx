import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from './types';

export const Button = ({ style, children, ...props }: ButtonProps) => {
  return (
    <MuiButton sx={{ ...style }} {...props}>
      {children}
    </MuiButton>
  );
};
