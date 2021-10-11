import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '5px 10px',
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
    },
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
  })
);
