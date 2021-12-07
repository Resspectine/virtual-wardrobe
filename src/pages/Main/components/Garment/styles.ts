import { SxProps, Theme } from '@mui/system';

export const garmentWrapper: SxProps<Theme> = theme => ({
  backgroundColor: theme.palette.background.paper,
  width: {
    xs: 'calc(100% - 30px)',
    sm: 'calc(100% - 30px)',
    md: 'calc(50% - 30px)',
    lg: 'calc(100% / 3 - 30px)',
    xl: 'calc(25% - 30px)',
  },
  padding: 1.25,
  borderRadius: 2.5,
  marginRight: 1.875,
  marginLeft: 1.875,
  marginBottom: 1.875,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  cursor: 'pointer',
  userSelect: 'none',
  boxShadow: 5,
});

export const image: SxProps<Theme> = {
  width: '100%',
  height: 'auto',
};
