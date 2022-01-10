import { FC } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

import { IRoute } from 'routes';
import { ROUTE_PATHS } from 'routes/constants';
import { useUser } from 'store/user';

type AuthorizedRouteProps = RouteProps & Omit<IRoute, 'requiresAuthentication'>;

export const AuthorizedRoute: FC<AuthorizedRouteProps> = routeProps => {
  const user = useUser(state => state.user);

  return user ? <Route {...routeProps} /> : <Redirect to={ROUTE_PATHS.login} />;
};
