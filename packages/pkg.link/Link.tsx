import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

export type LinkProps = {} & MuiLinkProps;

export const Link = ({ children }: LinkProps) => {
  return <MuiLink>{children}</MuiLink>;
};
