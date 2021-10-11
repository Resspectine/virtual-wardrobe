import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    image: {
      maxWidth: 300,
      height: 'auto',
    },
    iconWrapper: {
      position: 'absolute',
      top: 5,
      right: 5,
    },
    imageWrapper: {
      position: 'relative',
    },
  })
);
