import { Button } from '@mui/material';
import { styled } from '@mui/system';

export const LogoutButton = styled(Button)(({ theme }) => ({
  '&:hover': {
    color: theme.palette.text.secondary,
  },
  color: theme.palette.text.secondary,
}));
