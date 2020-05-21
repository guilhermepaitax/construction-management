import React from 'react';

import { AuthProvider } from './auth';
import { Theme } from './theme';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <Theme>{children}</Theme>
    </AuthProvider>
  );
};

export default AppProvider;
