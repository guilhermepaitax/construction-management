import React, { useMemo } from 'react';
import { Button, CssBaseline, createMuiTheme, ThemeProvider, useMediaQuery } from '@material-ui/core';

const App: React.FC = () => {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant="contained" color="primary">
        Olá Mundo
      </Button>
    </ThemeProvider>
  );
}

export default App;
