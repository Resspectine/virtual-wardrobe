import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    listWrapper: {
      margin: '0 -15px',
      display: 'flex',
      flexWrap: 'wrap',
    },
    popoverWrapper: {
      padding: '5px',
    },
    popoverItem: {
      cursor: 'pointer',
      fontSize: 16,
      padding: '0px 10px',
      margin: '0 -5px 5px',
      '&:hover': {
        backgroundColor: theme.palette.background.default,
      },
      '&:last-child': {
        marginBottom: 0,
      },
    },
  })
);
