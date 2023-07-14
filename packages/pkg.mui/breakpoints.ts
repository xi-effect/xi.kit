import { BreakpointsOptions } from "@mui/material";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

export const breakpoints: BreakpointsOptions = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  values: {
    xs: 0,
    sm: 350,
    md: 700,
    lg: 1440,
    xl: 1920,
  },
};
