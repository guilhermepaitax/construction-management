import React, { useMemo } from 'react';
import { createMuiTheme, ThemeProvider, useMediaQuery, StylesProvider } from '@material-ui/core';

const Theme: React.FC = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: 'light',
          primary: {
            main: '#5875EE',
          },
          background: {
            default: '#F9F9F9',
          },
          text: {
            primary: '#24292E',
            secondary: '#6a737d',
          }
        },
      }),
    [prefersDarkMode],
  );

  return (
    <StylesProvider injectFirst>
      <ThemeProvider  theme={theme}>
        { children }
      </ThemeProvider>
    </StylesProvider>
  );
}

export { Theme };
