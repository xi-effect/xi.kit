import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

export type LinkProps = {
  href?: string;
  action?: () => any | Promise<any>;
} & MuiLinkProps;

export const Link = ({ href, action, children }: LinkProps) => {
  return (
    <MuiLink
      href={href}
      onClick={action}
      target={href !== '#' ? '_blank' : ''}
      sx={{ cursor: 'pointer' }}
    >
      {children}
    </MuiLink>
  );
};
