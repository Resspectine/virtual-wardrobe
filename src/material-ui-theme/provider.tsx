import { ThemeProvider as MaterialThemeProvider, Theme } from '@material-ui/core/styles';
import React, { FC, createContext } from 'react';

import { COLOR_SCHEME } from './constants';

import { materialTheme } from 'material-ui-theme';

export const PortalThemeContext = createContext<{ theme: Theme | null }>({ theme: null });

export const ThemeProvider: FC = ({ children }) => {
  const currentTheme = materialTheme(COLOR_SCHEME);

  return (
    <PortalThemeContext.Provider value={{ theme: currentTheme }}>
      {currentTheme ? <MaterialThemeProvider theme={currentTheme}>{children}</MaterialThemeProvider> : children}
    </PortalThemeContext.Provider>
  );
};
