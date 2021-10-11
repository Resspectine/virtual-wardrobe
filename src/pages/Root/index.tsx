import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { FC } from 'react';
import { Switch } from 'react-router-dom';

import SideNavigation from './components/SideNavigation';
import { renderRoutes } from './helpers';
import { useRoot } from './hooks';
import { useStyles } from './styles';

const Root: FC = () => {
  const classes = useStyles();

  useRoot();

  return (
    <Box className={classes.pageWrapper}>
      <CssBaseline />
      <SideNavigation />
      <Box className={classes.contentWrapper}>
        <Switch>{renderRoutes()}</Switch>
      </Box>
    </Box>
  );
};

export default Root;
