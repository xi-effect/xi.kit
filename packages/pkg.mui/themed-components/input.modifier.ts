import type {} from '@mui/material/themeCssVarsAugmentation';
import { Components, Theme } from '@mui/material/styles';

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    root: ({ theme }) => {
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
        }
      };
    },
  },
};
