import type {} from '@mui/material/themeCssVarsAugmentation';
import { Components, Theme } from '@mui/material/styles';

declare module '@mui/material/Link' {
  export interface LinkPropsSizeOverrides {
    size: true;
  }
  export interface LinkPropsColorOverrides {
    default: true;
    success: true;
    primary: true;
    error: true;
  }
}

export const MuiLink: Components<Theme>['MuiLink'] = {
  defaultProps: {
    color: 'success',
  },
  styleOverrides: {
    root: () => {
      return {
        cursor: 'pointer',
        // color: 'red',
        background: 'green',
      };
    },
  },
  variants: [
    /* colors */
    // {
    //   props: { color: 'default' },
    //   style: ({ theme }: { theme: Theme }) => ({
    //     color: theme.vars.gray['90'],
    //   }),
    // },
    // {
    //   props: { color: 'primary' },
    //   style: ({ theme }: { theme: Theme }) => ({
    //     color: theme.vars.brand['80'],
    //   }),
    // },
    // {
    //   props: { color: 'success' },
    //   style: ({ theme }: { theme: Theme }) => ({
    //     color: theme.vars.green['80'],
    //   }),
    // },
    // {
    //   props: { color: 'error' },
    //   style: ({ theme }: { theme: Theme }) => ({
    //     color: theme.vars.red['80'],
    //   }),
    // },
  ],
};
