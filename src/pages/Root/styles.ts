import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    pageWrapper: {
      [theme.breakpoints.up('xs')]: {
        maxWidth: '100%',
        marginRight: 20,
        marginLeft: 20,
      },
      [theme.breakpoints.up('sm')]: {
        maxWidth: 560,
        marginRight: 'auto',
        marginLeft: 'auto',
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: 720,
        marginRight: 'auto',
        marginLeft: 'auto',
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: 1160,
        marginRight: 'auto',
        marginLeft: 'auto',
      },
      [theme.breakpoints.up('xl')]: {
        maxWidth: 1800,
        marginRight: 'auto',
        marginLeft: 'auto',
      },
      display: 'flex',
      alignItems: 'flex-start',
    },
    contentWrapper: {
      backgroundColor: theme.palette.background.paper,
      padding: '20px',
      marginTop: 30,
      borderRadius: 10,
      flex: 1,
    },
  })
);
