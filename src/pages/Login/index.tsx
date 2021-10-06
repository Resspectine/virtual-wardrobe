import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import React, { FC } from 'react';

import { useStyles } from './styles';

const Login: FC = () => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.loginRootWithoutBottomLogo, classes.root)}>
      <Grid container justifyContent="center" className={classes.logoWrapperSmallOffset} />
      <section>
        <Box>LOGIN</Box>
      </section>
    </div>
  );
};

export default Login;
