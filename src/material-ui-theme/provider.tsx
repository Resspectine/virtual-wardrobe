import { Theme, ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';
import { FC, createContext } from 'react';

import { materialTheme } from 'material-ui-theme';
import { useAppState } from 'store/appState';

export const PortalThemeContext = createContext<{ theme: Theme | null }>({
  theme: null,
});

export const ThemeProvider: FC = ({ children }) => {
  const themeMode = useAppState(state => state.themeMode);
  const theme = materialTheme(themeMode);

  return (
    <PortalThemeContext.Provider value={{ theme }}>
      <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
    </PortalThemeContext.Provider>
  );
};
