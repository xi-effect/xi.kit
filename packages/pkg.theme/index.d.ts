type Colors = { [key in 100 | 80 | 60 | 40 | 20 | 0]: string };
type ColorsShort = { [key in 100 | 60 | 40 | 20]: string };
type ColorsPeterburg = {
  [key in 100 | 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10 | 5 | 0]: string;
};

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

  export interface Palette {
    bg: {
      [key in 'main' | 'block']: string;
    };
    brand: Colors;
    petersburg: ColorsPeterburg;
    moscow: Colors;
    ekaterinburg: Colors;
    kungur: Colors;
    arkhangelsk: ColorsShort;
    vladivostok: ColorsShort;
    volgograd: ColorsShort;
    saratov: ColorsShort;
  }

  export interface PaletteOptions {
    bg: {
      [key in 'main' | 'block']: string;
    };
    brand: Colors;
    petersburg: ColorsPeterburg;
    moscow: Colors;
    ekaterinburg: Colors;
    kungur: Colors;
    arkhangelsk: ColorsShort;
    vladivostok: ColorsShort;
    volgograd: ColorsShort;
    saratov: ColorsShort;
  }

  export interface PaletteColor {
    100?: string;
    90?: string;
    80?: string;
    70?: string;
    60?: string;
    50?: string;
    40?: string;
    30?: string;
    20?: string;
    10?: string;
    5?: string;
    0?: string;
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

declare module '@mui/material/Button' {
  export interface ButtonPropsVariantsOverrides {
    primary: string;
    secondary: string;
    ghost: string;
    moscow: string;
    ekaterinburg: string;
  }
}
