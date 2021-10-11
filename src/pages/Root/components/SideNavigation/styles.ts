import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    sideNavigationWrapper: {
      padding: '20px',
      borderRadius: 10,
      backgroundColor: theme.palette.background.paper,
      marginTop: 30,
      marginRight: 15,
      display: 'flex',
      flexDirection: 'column',
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.text.primary,
      fontSize: 18,
    },
    separator: {
      height: 2,
      width: '100%',
      backgroundColor: theme.palette.background.default,
    },
    linkWrapper: {
      marginBottom: 10,
      '&:last-child': {
        marginBottom: 0,
      },
    },
  })
);
