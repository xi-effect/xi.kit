import type {} from '@mui/material/themeCssVarsAugmentation';
// import { Components, Theme } from '@mui/material/styles';

// declare module '@mui/material/Button' {
//   export interface ButtonPropsVariantsOverrides {
//     primary: true;
//     secondary: true;
//   }
// }

// export const MuiButton: Components<Theme>['MuiButton'] = {
//   defaultProps: {
//     type: 'button',
//     variant: 'contained',
//     size: 'medium',
//     color: 'primary',
//   },
//   styleOverrides: {
//     root: ({ theme }) => {
//       return {
//         boxShadow: 'none !important',
//         minWidth: '8px',
//         borderRadius: '12px',

//         '&:hover': {
//           boxShadow: 'none !important',
//         },

//         '&:active': {
//           boxShadow: 'none !important',
//         },

//         '&:disabled': {
//           backgroundColor: theme.vars.gray[10],
//           color: theme.vars.gray[30],
//         },
//       };
//     },
//   },
//   variants: [
//     {
//       props: { size: 'large' },
//       style: {
//         fontSize: '20px',
//         lineHeight: '28px',
//         height: '56px',
//         borderRadius: '12px',
//         padding: '0px  16px 0px 16px',
//       },
//     },
//     {
//       props: { size: 'medium' },
//       style: {
//         fontSize: '16px',
//         lineHeight: '22px',
//         height: '48px',
//         borderRadius: '8px',
//         padding: '0px  12px 0px 12px',
//       },
//     },
//     {
//       props: { size: 'small' },
//       style: {
//         fontSize: '14px',
//         lineHeight: '20px',
//         height: '32px',
//         borderRadius: '6px',
//         padding: '0px  8px 0px 8px',
//       },
//     },
//     {
//       props: { variant: 'contained' },
//       style: ({ theme }: { theme: Theme }) => ({
//         boxShadow: 'none !important',
//         backgroundColor: theme.vars.brand[80],
//         color: theme.vars.gray[0],

//         '&:hover': {
//           boxShadow: 'none !important',
//           backgroundColor: theme.vars.brand[100],
//           color: theme.vars.gray[0],
//         },

//         '&:active': {
//           boxShadow: 'none !important',
//           backgroundColor: theme.vars.brand[100],
//           color: theme.vars.gray[0],
//         },
//       }),
//     },
//     {
//       props: { variant: 'outlined' },
//       style: ({ theme }: { theme: Theme }) => ({
//         border: '2px solid',
//         borderColor: theme.vars.gray['30'],

//         backgroundColor: theme.vars.gray['0'],
//         color: theme.vars.gray['100'],

//         '&:hover': {
//           border: '2px solid',
//           borderColor: theme.vars.gray['30'],
//           backgroundColor: theme.vars.gray['5'],
//           color: theme.vars.gray['100'],
//         },

//         '&:active': {
//           border: '2px solid',
//           borderColor: theme.vars.gray['30'],
//           backgroundColor: theme.vars.gray['5'],
//           color: theme.vars.gray['100'],
//         },
//       }),
//     },
//     {
//       props: { variant: 'text' },
//       style: ({ theme }: { theme: Theme }) => ({
//         backgroundColor: theme.vars.gray['0'],
//         color: theme.vars.gray['100'],

//         '&:hover': {
//           backgroundColor: theme.vars.gray['5'],
//           color: theme.vars.gray['100'],
//         },

//         '&:active': {
//           backgroundColor: theme.vars.gray['5'],
//           color: theme.vars.gray['100'],
//         },
//       }),
//     },
//     {
//       props: { color: 'error' },
//       style: ({ theme }: { theme: Theme }) => ({
//         backgroundColor: theme.vars.red['80'],
//         color: theme.vars.gray['0'],

//         '&:hover': {
//           backgroundColor: theme.vars.red['100'],
//           color: theme.vars.gray['0'],
//         },

//         '&:active': {
//           backgroundColor: theme.vars.red['100'],
//           color: theme.vars.gray['0'],
//         },
//       }),
//     },
//     {
//       props: { color: 'success' },
//       style: ({ theme }: { theme: Theme }) => ({
//         backgroundColor: theme.vars.green['80'],
//         color: theme.vars.gray['0'],

//         '&:hover': {
//           backgroundColor: theme.vars.green['100'],
//           color: theme.vars.gray['0'],
//         },

//         '&:active': {
//           backgroundColor: theme.vars.green['100'],
//           color: theme.vars.gray['0'],
//         },
//       }),
//     },
//   ],
// };
