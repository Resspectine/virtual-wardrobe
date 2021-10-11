import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      backgroundColor: theme.palette.background.paper,
      width: 'calc(50% - 30px)',
      padding: 10,
      border: '1px solid',
      borderRadius: 10,
      marginRight: 15,
      marginLeft: 15,
      marginBottom: 15,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      cursor: 'pointer',
      userSelect: 'none',
      [theme.breakpoints.down('lg')]: {
        width: 'calc(25% - 30px)',
      },
      [theme.breakpoints.down('md')]: {
        width: 'calc(50% - 30px)',
      },
      [theme.breakpoints.down('sm')]: {
        width: 'calc(100% - 30px)',
      },
    },
    favorite: {
      borderColor: 'gold',
    },
    image: {
      width: '100%',
      height: 'auto',
    },
  })
);
