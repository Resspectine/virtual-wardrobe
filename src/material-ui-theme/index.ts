import { createTheme } from '@mui/material/styles';

export const commonColors = {
  mainBlack: '#1f1f2b',
  blackButton: '#545865',
  lightGray: '#f8f8fb',
  lightBlue: '#eef9ff',
  backgroundGray: '#efeff5',
  grayHover: '#e0e0ea',
  grayLines: '#cbcbdc',
  lavenderGray: '#cacadc',
  grayMedium: '#8c8ca5',
  white: '#fff',
  ghostWhite: '#f9f9fb',
  gray: '#9c9caf',
  green: '#44ab5c',
  error: '#f82417',
  errorUnderline: '#ff6a61',
  lightError: '#ffedee',
  borderError: '#ff8f8f',
  textError: '#f90c0c',
  successNotification: '#01ca69',
  warningNotification: '#f4b000',
  warningBackground: 'rgba(255, 198, 45, .3)',
  grayDisabled: '#adadc1',
  yellow: '#df7b00',
};

export const materialTheme = createTheme({
  palette: {
    background: {
      default: commonColors.backgroundGray,
    },
  },
  typography: {
    fontFamily: 'Montserrat, Times New Roman',
  },
});
