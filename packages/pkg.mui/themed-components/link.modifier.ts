import type {} from '@mui/material/themeCssVarsAugmentation';
import { Components, Theme } from '@mui/material/styles';

export const MuiLink: Components<Theme>['MuiLink'] = {
  defaultProps: {
    href: '#',
    color: 'default',
  },
  styleOverrides: {
    root: ({ theme }) => {
      return {
        cursor: 'pointer',
        color: 'red',
      };
    },
  },
};
