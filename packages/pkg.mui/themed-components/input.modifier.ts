import type {} from '@mui/material/themeCssVarsAugmentation';
import { Components, Theme } from '@mui/material/styles';

declare module '@mui/material/InputBase' {
  export interface InputBasePropsVariantsOverrides {
    warning: true;
  }
}

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      return {
        borderRadius: 8,
        border: '2px solid',
        height: '48px',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: '22px',
        padding: '12px',
        backgroundColor: 'var(--xi-gray-0)',
        borderColor: 'var(--xi-gray-30)',

        transition: 'border 0.3s',

        ':hover': {
          borderColor: 'var(--xi-gray-50)',
        },

        ':focus': {
          borderColor: 'var(--xi-gray-80)',
        },

        ':active': {
          borderColor: 'var(--xi-gray-80)',
        },

        ':visited': {
          borderColor: 'var(--xi-gray-80)',
        },

        ...(!!ownerState.warning && {
          borderColor: 'var(--xi-orange-80)',

          ':hover': {
            borderColor: 'var(--xi-orange-80)',
          },

          ':focus': {
            borderColor: 'var(--xi-orange-80)',
          },

          ':active': {
            borderColor: 'var(--xi-orange-80)',
          },

          ':visited': {
            borderColor: 'var(--xi-orange-80)',
          },
        }),

        '&.Mui-error': {
          borderColor: 'var(--xi-red-80)',

          ':hover': {
            borderColor: 'var(--xi-red-80)',
          },

          ':focus': {
            borderColor: 'var(--xi-red-80)',
          },

          ':active': {
            borderColor: 'var(--xi-red-80)',
          },

          ':visited': {
            borderColor: 'var(--xi-red-80)',
          },
        },

        '&.Mui-disabled': {
          border: 'none',
          borderColor: 'none',
          color: 'var(--xi-gray-30)',
          backgroundColor: 'var(--xi-gray-10)',

          cursor: 'not-allowed',

          ':hover': {
            borderColor: 'none',
          },

          ':focus': {
            borderColor: 'none',
          },

          ':active': {
            borderColor: 'none',
          },

          ':visited': {
            borderColor: 'none',
          },
        },
      };
    },
    input: {
      '&.Mui-disabled': {
        cursor: 'not-allowed',
      },
      padding: '1px 0 0 0',
    },
    sizeSmall: {
      height: '32px',
      borderRadius: '6px',
      padding: '8px',
      fontSize: '14px',
      lineHeight: '20px',
    },
    inputAdornedStart: {
      marginLeft: '8px',
    },
  },
};
