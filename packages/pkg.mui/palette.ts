import { PaletteOptions, SimplePaletteColorOptions } from '@mui/material';

type Colors = { [key in 100 | 80 | 60 | 40 | 20 | 0]: string };
type ColorsShort = { [key in 100 | 60 | 40 | 20]: string };
type ColorsGray = {
  [key in 100 | 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10 | 5 | 0]: string;
};

declare module '@mui/material/styles' {
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

  export interface Palette {
    bkgd: {
      [key in 'main' | 'block']: string;
    };
    brand: Colors;
    gray: ColorsGray;
    red: Colors;
    green: Colors;
    orange: Colors;
    yellow: ColorsShort;
    violet: ColorsShort;
    pink: ColorsShort;
    cyan: ColorsShort;
  }

  export interface PaletteOptions {
    bkgd: {
      [key in 'main' | 'block']: string;
    };
    brand: Colors;
    gray: ColorsGray;
    red: Colors;
    green: Colors;
    orange: Colors;
    yellow: ColorsShort;
    violet: ColorsShort;
    pink: ColorsShort;
    cyan: ColorsShort;
  }
}

export const lightModePalette: PaletteOptions = {
  gray: {
    100: '#101010',
    90: '#282828',
    80: '#404040',
    70: '#585858',
    60: '#707070',
    50: '#888888',
    40: '#9F9F9F',
    30: '#B8B8B8',
    20: '#CFCFCF',
    10: '#E8E8E8',
    5: '#F7F7F7',
    0: '#FFFFFF',
  },
  brand: {
    100: '#3546BD',
    80: '#445AFF',
    60: '#697BFF',
    40: '#8F9CFF',
    20: '#B4BDFF',
    0: '#EDEFFF',
  },
  bkgd: {
    main: '#EDEFFF',
    block: '#FFFFFF',
  },
  red: {
    100: '#BE0D0C',
    80: '#DD0D0C',
    60: '#E43D3D',
    40: '#EB6E6D',
    20: '#F19E9E',
    0: '#FCE9E9',
  },
  green: {
    100: '#029127',
    80: '#00A82C',
    60: '#33B956',
    40: '#66CB80',
    20: '#99DCAB',
    0: '#E4F6E9',
  },
  orange: {
    100: '#CB4C0E',
    80: '#EC570E',
    60: '#F0793E',
    40: '#F49A6E',
    20: '#F7BC9E',
    0: '#FCE8DE',
  },
  yellow: {
    100: '#FFCD37',
    60: '#FFE187',
    40: '#FFEBAF',
    20: '#FFF5D7',
  },
  violet: {
    100: '#8208E1',
    60: '#B46BED',
    40: '#CD9CF3',
    20: '#EFDFFB',
  },
  pink: {
    100: '#DD09C8',
    60: '#EB6BDE',
    40: '#F19DE9',
    20: '#FBE0F8',
  },
  cyan: {
    100: '#09AEE8',
    60: '#6BCEF1',
    40: '#9CDEF6',
    20: '#DFF4FC',
  },
};

export const darkModePalette: PaletteOptions = {
  gray: {
    100: '#E6E6E6',
    90: '#D1D1D1',
    80: '#BCBCBC',
    70: '#A7A7A7',
    60: '#929292',
    50: '#7E7E7E',
    40: '#696969',
    30: '#545454',
    20: '#3F3F3F',
    10: '#2A2A2A',
    5: '#1F1F1F',
    0: '#151515',
  },
  brand: {
    100: '#B1BAFB',
    80: '#8B98F9',
    60: '#737ECB',
    40: '#5B639D',
    20: '#393D5A',
    0: '#21222C',
  },
  bkgd: {
    main: '#151515',
    block: '#1F1F1F',
  },
  red: {
    100: '#E15251',
    80: '#BD4C4C',
    60: '#9B4141',
    40: '#793636',
    20: '#482626',
    0: '#261B1B',
  },
  green: {
    100: '#51E177',
    80: '#4CBD69',
    60: '#419B58',
    40: '#367947',
    20: '#26482E',
    0: '#1B261D',
  },
  orange: {
    100: '#EA7D47',
    80: '#C66E43',
    60: '#A25C3A',
    40: '#7F4A30',
    20: '#462515',
    0: '#271E1A',
  },
  yellow: {
    100: '#C2940A',
    60: '#7D610F',
    40: '#5A4811',
    20: '#262214',
  },
  violet: {
    100: '#8933CC',
    60: '#5A2782',
    40: '#44215F',
    20: '#211827',
  },
  pink: {
    100: '#CC33BD',
    60: '#822779',
    40: '#5F2158',
    20: '#271826',
  },
  cyan: {
    100: '#33A4CC',
    60: '#276B82',
    40: '#214F5F',
    20: '#182327',
  },
};
