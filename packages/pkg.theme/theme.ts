import { createTheme } from '@mui/material/styles';
import { getPalette } from './palette';
import { buttonConfig } from './components/button';

export const getScheme = (mode: 'light' | 'dark') =>
  createTheme({
    components: {
      MuiButton: {
        ...(buttonConfig as any),
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            marginTop: '4px',
            marginLeft: 0,
            fontSize: '14px',
            lineHeight: '16px',
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            boxShadow: 'none',

            '&:hover': {
              boxShadow: 'none',
            },
          },
        },
        variants: [
          {
            // @ts-ignore
            props: { variant: 'filled' },
            style: {
              height: '56px',
              width: '356px',
              borderRadius: '8px',
              backgroundColor: '#FFFFFF',
              padding: '19px 20px 17px 20px',
              '&:hover': {
                backgroundColor: '#FFFFFF',
              },
            },
          },
        ],
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
        },
      },
    },
    typography: {
      htmlFontSize: 10,
      fontFamily: 'Inter, Arial',
      h1: {
        fontSize: '56px',
        lineHeight: '64px',
        fontWeight: 500,
      },
      h2: {
        fontSize: '48px',
        lineHeight: '56px',
        fontWeight: 500,
      },
      h3: {
        fontSize: '40px',
        lineHeight: '48px',
        fontWeight: 500,
      },
      h4: {
        fontSize: '36px',
        lineHeight: '44px',
        fontWeight: 500,
      },
      h5: {
        fontSize: '32px',
        lineHeight: '40px',
        fontWeight: 500,
      },
      h6: {
        fontSize: '28px',
        lineHeight: '36px',
        fontWeight: 500,
      },
      xl: {
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: 500,
      },
      l: {
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: 500,
      },
      m: {
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 500,
      },
      s: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 500,
      },
      xs: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 500,
      },
      xxs: {
        fontSize: '10px',
        lineHeight: '14px',
        fontWeight: 500,
      },
      button: {
        textTransform: 'none',
      },
    },
    breakpoints: {
      keys: ['xs', 'sm', 'md', 'lg', 'xl'],
      values: {
        xs: 0,
        sm: 350,
        md: 700,
        lg: 1440,
        xl: 1920,
      },
    },
    palette: {
      ...getPalette(mode),
    },
  });
