import { Route } from 'react-router-dom';

import { AuthorizedRoute, OnlyUnAuthorizedRoute } from './Components';

import routes from 'routes';

export const renderRoutes = (): JSX.Element[] =>
  routes.map(({ requiresAuthentication, onlyUnAuthorized, ...route }) => {
    const routeProps = {
      ...route,
      key: route.path?.toString(),
    };

    if (onlyUnAuthorized) {
      return <OnlyUnAuthorizedRoute {...routeProps} />;
    }

    return requiresAuthentication ? <AuthorizedRoute {...routeProps} /> : <Route {...routeProps} />;
  });
