import { Theme } from '@mui/material';

export const buttonConfig = {
  defaultProps: {
    variant: 'contained',
    size: 'medium',
  },
  styleOverrides: ({ ownerState, theme }: { ownerState: any; theme: Theme }) => ({
    root: {
      boxShadow: 'none !important',
      minWidth: '8px',
      borderRadius: '12px',

      '&:hover': {
        boxShadow: 'none !important',
      },

      '&:active': {
        boxShadow: 'none !important',
      },

      '&:disabled': {
        backgroundColor: theme.palette.petersburg[10],
        color: theme.palette.petersburg[30],
      },
    },
  }),
  variants: [
    {
      props: { size: 'large' },
      style: {
        fontSize: '20px',
        lineHeight: '28px',
        height: '56px',
        borderRadius: '12px',
        padding: '0px  16px 0px 16px',
      },
    },
    {
      props: { size: 'medium' },
      style: {
        fontSize: '16px',
        lineHeight: '22px',
        height: '48px',
        borderRadius: '8px',
        padding: '0px  12px 0px 12px',
      },
    },
    {
      props: { size: 'small' },
      style: {
        fontSize: '14px',
        lineHeight: '20px',
        height: '32px',
        borderRadius: '6px',
        padding: '0px  8px 0px 8px',
      },
    },
    {
      props: { variant: 'contained' },
      style: ({ theme }: { theme: Theme }) => ({
        boxShadow: 'none !important',
        backgroundColor: theme.palette.brand[80],
        color: theme.palette.petersburg[0],

        '&:hover': {
          boxShadow: 'none !important',
          backgroundColor: theme.palette.brand[100],
          color: theme.palette.petersburg[0],
        },

        '&:active': {
          boxShadow: 'none !important',
          backgroundColor: theme.palette.brand[100],
          color: theme.palette.petersburg[0],
        },
      }),
    },
    {
      props: { variant: 'outlined' },
      style: ({ theme }: { theme: Theme }) => ({
        border: '2px solid',
        borderColor: theme.palette.petersburg['30'],

        backgroundColor: theme.palette.petersburg['0'],
        color: theme.palette.petersburg['100'],

        '&:hover': {
          border: '2px solid',
          borderColor: theme.palette.petersburg['30'],
          backgroundColor: theme.palette.petersburg['5'],
          color: theme.palette.petersburg['100'],
        },

        '&:active': {
          border: '2px solid',
          borderColor: theme.palette.petersburg['30'],
          backgroundColor: theme.palette.petersburg['5'],
          color: theme.palette.petersburg['100'],
        },
      }),
    },
    {
      props: { variant: 'text' },
      style: ({ theme }: { theme: Theme }) => ({
        backgroundColor: theme.palette.petersburg['0'],
        color: theme.palette.petersburg['100'],

        '&:hover': {
          backgroundColor: theme.palette.petersburg['5'],
          color: theme.palette.petersburg['100'],
        },

        '&:active': {
          backgroundColor: theme.palette.petersburg['5'],
          color: theme.palette.petersburg['100'],
        },
      }),
    },
    {
      props: { color: 'error' },
      style: ({ theme }: { theme: Theme }) => ({
        backgroundColor: theme.palette.moscow['80'],
        color: theme.palette.petersburg['0'],

        '&:hover': {
          backgroundColor: theme.palette.moscow['100'],
          color: theme.palette.petersburg['0'],
        },

        '&:active': {
          backgroundColor: theme.palette.moscow['100'],
          color: theme.palette.petersburg['0'],
        },
      }),
    },
    {
      props: { color: 'success' },
      style: ({ theme }: { theme: Theme }) => ({
        backgroundColor: theme.palette.ekaterinburg['80'],
        color: theme.palette.petersburg['0'],

        '&:hover': {
          backgroundColor: theme.palette.ekaterinburg['100'],
          color: theme.palette.petersburg['0'],
        },

        '&:active': {
          backgroundColor: theme.palette.ekaterinburg['100'],
          color: theme.palette.petersburg['0'],
        },
      }),
    },
  ],
};
