import { ComponentProps } from 'react';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

export type LinkColorsT = 'default' | 'primary' | 'success' | 'error';

export type LinkProps = {
  href?: string;
  action?: () => any | Promise<any>;
  color?: LinkColorsT;
} & ComponentProps<'link'> &
  MuiLinkProps;

export const Link = ({ href, action, style, children }: LinkProps) => {
  return (
    <MuiLink href={href} onClick={action} target={href !== '#' ? '_blank' : ''} sx={{ ...style }}>
      {children}
    </MuiLink>
  );
};
