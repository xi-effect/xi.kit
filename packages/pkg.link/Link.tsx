import { ComponentProps } from 'react';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

export type LinkColorsT = 'default' | 'primary' | 'success' | 'error';

export type LinkProps = {
  color?: LinkColorsT;
} & ComponentProps<'link'> &
  MuiLinkProps;

export const Link = ({ ...props }: LinkProps) => {
  return (
    <MuiLink {...props}>
      {props.children}
    </MuiLink>
  );
};
