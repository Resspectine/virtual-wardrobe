import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    loadingWrapper: {
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loadingShadow: {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      right: 0,
      bottom: 0,
      backgroundColor: '#76767614',
      borderRadius: '10px',
    },
    shadowLoadingPosition: {
      top: 80,
      position: 'absolute',
    },
  })
);
