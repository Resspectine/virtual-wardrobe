import { Theme, ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';
import { FC, createContext, useEffect } from 'react';
import { atom, useRecoilValue } from 'recoil';

import { materialTheme, Mode } from 'material-ui-theme';

const THEME_MODE_KEY = 'THEME_MODE';

export const themeModeState = atom<Mode>({
  key: 'themeModeState',
  default: JSON.parse(localStorage.getItem(THEME_MODE_KEY) || '"red"') as Mode,
});

export const PortalThemeContext = createContext<{ theme: Theme | null }>({
  theme: null,
});

export const ThemeProvider: FC = ({ children }) => {
  const themeMode = useRecoilValue(themeModeState);
  const theme = materialTheme(themeMode);

  useEffect(() => {
    localStorage.setItem(THEME_MODE_KEY, JSON.stringify(themeMode));
  }, [themeMode]);

  return (
    <PortalThemeContext.Provider value={{ theme }}>
      <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
    </PortalThemeContext.Provider>
  );
};
