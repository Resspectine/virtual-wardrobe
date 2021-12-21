import { Route } from 'react-router-dom';

import { AuthorizedRoute } from './Components';

import routes from 'routes';

export const renderRoutes = (): JSX.Element[] =>
  routes.map(({ requiresAuthentication, ...route }) => {
    const routeProps = {
      ...route,
      key: route.path?.toString(),
    };

    return requiresAuthentication ? <AuthorizedRoute {...routeProps} /> : <Route {...routeProps} />;
  });
