import { createTheme } from '@material-ui/core/styles';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

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

export enum BREAK_POINTS {
  LARGE = 'lg',
  MEDIUM = 'md',
  SMALL = 'sm',
  EXTRA_SMALL = 'xs',
}

export const boxShadow = '0 6px 20px rgba(109, 104, 139, .2)';

export const defaultBoxBorder = `1px solid ${commonColors.grayLines}`;

export const transition = '500ms all cubic-bezier(.4, 0, .2, 1)';

export const leftNavigationWidth = 200;

export const leftNavigationCollapsedWidth = 80;

export const TOP_MARGIN = 84;

export const BOTTOM_MARGIN = 25;

export const fontWeight = {
  lighter: 100,
  thin: 300,
  regular: 400,
  semiBold: 500,
  bold: 600,
};

export const modalWidth = {
  extraSmall: 340,
  small: 540,
  medium: 690,
  large: 890,
};

export const inputWidth = {
  small: 290,
  medium: 340,
  large: 400,
};

export const inputHeight = {
  small: 36,
  medium: 38,
};

export const materialTheme = (palette: PaletteOptions) =>
  createTheme({
    palette: {
      ...palette,
      background: {
        default: commonColors.backgroundGray,
      },
    },
    typography: {
      fontFamily: 'Montserrat, Times New Roman',
    },
  });
