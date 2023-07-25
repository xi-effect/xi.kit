import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

export type LinkProps = {
  href?: string;
} & MuiLinkProps;

export const Link = ({ children, href }: LinkProps) => {
  return <MuiLink href={href}>{children}</MuiLink>;
};
