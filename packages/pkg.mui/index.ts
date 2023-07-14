import { createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';
import { darkModePalette, lightModePalette } from './palette';
import { typography } from './typography';
import { spacing } from './spacing';
import { breakpoints } from './breakpoints';
import { transitions } from './transitions';
import { components } from './components';
export { ThemeRegistry } from './provider';

export enum ThemeVariantsProps {
  light = 'light',
  dark = 'dark',
}

export const theme = (mode: ThemeVariantsProps) => {
  return createTheme({
    palette: {
      mode,
      ...(mode === 'light' ? lightModePalette : darkModePalette),
    },
    typography,
    spacing,
    breakpoints,
    transitions,
    components
  });
};
