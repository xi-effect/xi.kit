import { Theme } from '@mui/material';

export const iconConfig = {
  defaultProps: {
    fontSize: 'inherit',
  },
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) =>
      theme.unstable_sx({
        fill: theme.palette.petersburg[100],

        '&:hover': {
          fill: theme.palette.petersburg[100],
        },

        '&:active': {
          fill: theme.palette.petersburg[100],
        },
      }),
  },
  variants: [
    {
      props: { fontSize: 'large' },
      style: {
        fontSize: '32px',
      },
    },
    {
      props: { fontSize: 'inherit' },
      style: {
        fontSize: '24px',
      },
    },
    {
      props: { fontSize: 'medium' },
      style: {
        fontSize: '20px',
      },
    },
    {
      props: { fontSize: 'small' },
      style: {
        fontSize: '16px',
      },
    },
  ],
};
