import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { FC, useEffect } from 'react';
import { Switch } from 'react-router-dom';

import { renderRoutes } from './helpers';
import { useRoot } from './hooks';

import Header from 'components/Header';

const Root: FC = () => {
  const { history } = useRoot();

  useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <Box>
      <CssBaseline />
      <Header />
      <Box>
        <Switch>{renderRoutes()}</Switch>
      </Box>
    </Box>
  );
};

export default Root;
