import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/styles' {
  export interface TypographyVariants {
    xl: React.CSSProperties;
    l: React.CSSProperties;
    m: React.CSSProperties;
    s: React.CSSProperties;
    xs: React.CSSProperties;
    xxs: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  export interface TypographyVariantsOptions {
    xl?: React.CSSProperties;
    l?: React.CSSProperties;
    m?: React.CSSProperties;
    s?: React.CSSProperties;
    xs?: React.CSSProperties;
    xxs?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  export interface TypographyPropsVariantOverrides {
    xl: true;
    l: true;
    m: true;
    s: true;
    xs: true;
    xxs: true;
  }
}

export const typography: TypographyOptions = {
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
};
