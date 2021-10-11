import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    fieldInput: {
      '&.MuiTextField-root': {
        marginBottom: 10,
        width: '100%',
      },
    },
    submit: {
      marginTop: 10,
    },
  })
);
