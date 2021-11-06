import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    tagWrapper: {
      maxHeight: 40,
      padding: theme.spacing(0.625, 2),
      backgroundColor: '#f5f5f5',
      borderRadius: 20,
    },
    tagTitle: {
      fontSize: 14,
      lineHeight: '14px',
    },
  })
);
