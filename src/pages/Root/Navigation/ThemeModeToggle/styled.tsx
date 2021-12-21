import { Button } from '@mui/material';
import { styled } from '@mui/system';

export const ThemeModeToggleButton = styled(Button)(({ theme }) => ({
  width: '1rem',
  height: '1rem',
  minWidth: 'unset',
  position: 'absolute',
  right: 20,
  top: '50%',
  transform: 'translateY(-50%)',
  '&:hover': {
    backgroundColor: theme.palette.text.secondary,
  },
  backgroundColor: theme.palette.text.secondary,
}));
