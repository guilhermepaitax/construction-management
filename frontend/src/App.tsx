import React from 'react';
import { Button, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';

const App: React.FC = () => {

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });


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
