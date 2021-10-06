import { makeStyles, createStyles, Theme } from '@material-ui/core';

import { commonColors, boxShadow } from 'material-ui-theme';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 590,
      width: '80%',
      backgroundColor: commonColors.white,
      borderRadius: '20px',
      boxShadow,
      margin: '45px auto 95px',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        margin: 0,
        height: '100vh',
        maxWidth: 'unset',
        borderRadius: 'unset',
        boxShadow: 'unset',
        padding: '40px 30px',
      },
    },
    loginRoot: {
      padding: '40px 5% 60px',
      [theme.breakpoints.up('xs')]: {
        padding: '40px 30px',
      },
    },
    loginRootWithoutBottomLogo: {
      padding: '40px 5% 40px',
      [theme.breakpoints.up('xs')]: {
        padding: '40px 30px',
      },
    },
    logoWrapper: {
      marginBottom: 80,
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(5.75),
      },
    },
    logoWrapperSmallOffset: {
      marginBottom: 50,
    },
    logoIconTop: {
      height: 60,
      width: 200,
    },
    logoBottomIcon: {
      height: 50,
      width: 160,
      display: 'block',
      margin: '60px auto 0',
    },
  })
);
