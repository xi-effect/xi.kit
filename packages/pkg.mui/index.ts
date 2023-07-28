import { createTheme, experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { darkModePalette, lightModePalette } from './palette';
import { typography } from './typography';
import { spacing } from './spacing';
import { breakpoints } from './breakpoints';
import { transitions } from './transitions';
import { components } from './components';

declare module '@mui/material/styles' {
  interface Theme {
    vars: ThemeVars;
  }
}

const globalTheme = createTheme();

export const theme = () => {
  return extendTheme({
    ...globalTheme,
    cssVarPrefix: 'xi',
    colorSchemes: {
      light: { ...lightModePalette },
      dark: { ...darkModePalette },
    },
    typography,
    spacing,
    breakpoints,
    transitions,
    components,
    shape: {
      borderRadius: 8,
    }
  });
};
