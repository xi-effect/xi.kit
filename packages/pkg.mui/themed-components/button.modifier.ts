import type {} from '@mui/material/themeCssVarsAugmentation';
import { Components, Theme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  export interface ButtonPropsVariantsOverrides {
    primary: true;
    secondary: true;
  }
}

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    type: 'button',
    variant: 'contained',
    size: 'medium',
    color: 'primary',
  },
  styleOverrides: {
    root: () => {
      return {
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
          backgroundColor: 'var(--xi-gray-10)',
          color: 'var(--xi-gray-30)',
        },
      };
    },
  },
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
      style: () => ({
        boxShadow: 'none !important',
        backgroundColor: 'var(--xi-brand-80)',
        color: 'var(--xi-gray-0)',

        '&:hover': {
          boxShadow: 'none !important',
          backgroundColor: 'var(--xi-brand-100)',
          color: 'var(--xi-gray-0)',
        },

        '&:active': {
          boxShadow: 'none !important',
          backgroundColor: 'var(--xi-brand-100)',
          color: 'var(--xi-gray-0)',
        },
      }),
    },
    {
      props: { variant: 'outlined' },
      style: () => ({
        border: '2px solid',
        borderColor: 'var(--xi-gray-30)',

        backgroundColor: 'var(--xi-gray-0)',
        color: 'var(--xi-gray-100)',

        '&:hover': {
          border: '2px solid',
          borderColor: 'var(--xi-gray-30)',
          backgroundColor: 'var(--xi-gray-5)',
          color: 'var(--xi-gray-100)',
        },

        '&:active': {
          border: '2px solid',
          borderColor: 'var(--xi-gray-30)',
          backgroundColor: 'var(--xi-gray-5)',
          color: 'var(--xi-gray-100)',
        },
      }),
    },
    {
      props: { variant: 'text' },
      style: () => ({
        backgroundColor: 'var(--xi-gray-0)',
        color: 'var(--xi-gray-100)',

        '&:hover': {
          backgroundColor: 'var(--xi-gray-5)',
          color: 'var(--xi-gray-100)',
        },

        '&:active': {
          backgroundColor: 'var(--xi-gray-5)',
          color: 'var(--xi-gray-100)',
        },
      }),
    },
    {
      props: { color: 'error' },
      style: () => ({
        backgroundColor: 'var(--xi-red-80)',
        color: 'var(--xi-gray-0)',

        '&:hover': {
          backgroundColor: 'var(--xi-red-100)',
          color: 'var(--xi-gray-0)',
        },

        '&:active': {
          backgroundColor: 'var(--xi-red-100)',
          color: 'var(--xi-gray-0)',
        },
      }),
    },
    {
      props: { color: 'success' },
      style: () => ({
        backgroundColor: 'var(--xi-green-80)',
        color: 'var(--xi-gray-0)',

        '&:hover': {
          backgroundColor: 'var(--xi-green-100)',
          color: 'var(--xi-gray-0)',
        },

        '&:active': {
          backgroundColor: 'var(--xi-green-100)',
          color: 'var(--xi-gray-0)',
        },
      }),
    },
  ],
};
