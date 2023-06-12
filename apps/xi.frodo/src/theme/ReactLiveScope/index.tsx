import React from 'react';
import { Button as ButtonPkg } from '@mui/material';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { getScheme } from '@xipkg/theme';
import { ThemeProvider } from '@mui/material/styles';

const Button = (props) => {
  const theme = getScheme('light');
  return (
    <BrowserOnly>
      {() => (
        <ThemeProvider theme={theme}>
          <ButtonPkg type="button" {...props} />
        </ThemeProvider>
      )}
    </BrowserOnly>
  );
};

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  Button,
};

export default ReactLiveScope;
