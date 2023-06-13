import { Theme } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantsOverrides {
    primary: string;
    secondary: string;
    ghost: string;
    moscow: string;
    ekaterinburg: string;
  }
}

export const buttonConfig = {
  defaultProps: {
    variant: 'primary',
  },
  styleOverrides: ({ theme }: { theme: Theme }) => ({
    root: {
      boxShadow: 'none',
      minWidth: '8px',
      borderRadius: '12px',
      paddingLeft: '16px',
      paddingRight: '16px',

      '&:hover': {
        boxShadow: 'none',
      },

      '&:disabled': {
        backgroundColor: theme.palette.petersburg['10'],
        color: theme.palette.petersburg['30'],
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
      },
    },
    {
      props: { size: 'medium' },
      style: {
        fontSize: '16px',
        lineHeight: '22px',
        height: '48px',
        borderRadius: '8px',
      },
    },
    {
      props: { size: 'small' },
      style: {
        fontSize: '14px',
        lineHeight: '20px',
        height: '32px',
        borderRadius: '6px',
      },
    },
    {
      props: { variant: 'primary' },
      style: ({ theme }: { theme: Theme }) => ({
        backgroundColor: theme.palette.brand['0'],
        color: theme.palette.petersburg['0'],

        '&:hover': {
          backgroundColor: theme.palette.brand['100'],
          color: theme.palette.petersburg['0'],
        },

        '&:active': {
          backgroundColor: theme.palette.brand['100'],
          color: theme.palette.petersburg['0'],
        },
      }),
    },
    {
      props: { variant: 'secondary' },
      style: ({ theme }: { theme: Theme }) => ({
        border: '2px solid',
        borderColor: theme.palette.petersburg['30'],

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
      props: { variant: 'ghost' },
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
      props: { variant: 'moscow' },
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
      props: { variant: 'ekaterinburg' },
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
