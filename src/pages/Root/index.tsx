import { CssBaseline } from '@mui/material';
import { FC } from 'react';
import { Switch } from 'react-router-dom';

import { renderRoutes } from './helpers';
import { useRoot } from './hooks';
import Navigation from './Navigation';
import { RootWrapper, RoutesWrapper } from './styled';

const Root: FC = () => {
  const { isLoggedIn } = useRoot();

  return (
    <RootWrapper isLoggedIn={isLoggedIn}>
      <CssBaseline />
      {isLoggedIn && <Navigation />}
      <RoutesWrapper>
        <Switch>{renderRoutes()}</Switch>
      </RoutesWrapper>
    </RootWrapper>
  );
};

export default Root;
