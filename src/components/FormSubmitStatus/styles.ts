import { Theme } from '@mui/material/styles';

export const styles = (theme: Theme) => ({
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  loading: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
  },
  success: {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.contrastText,
  },
});
