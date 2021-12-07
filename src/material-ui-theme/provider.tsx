import { Theme, ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';
import { FC, createContext } from 'react';

import { materialTheme } from 'material-ui-theme';

export const PortalThemeContext = createContext<{ theme: Theme | null }>({ theme: null });

export const ThemeProvider: FC = ({ children }) => (
  <PortalThemeContext.Provider value={{ theme: materialTheme }}>
    <MaterialThemeProvider theme={materialTheme}>{children}</MaterialThemeProvider>
  </PortalThemeContext.Provider>
);
