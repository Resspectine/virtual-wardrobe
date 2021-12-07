import { FC } from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { IRoute } from 'routes';

type AuthorizedRouteProps = RouteProps & Omit<IRoute, 'requiresAuthentication'>;

const AuthorizedRoute: FC<AuthorizedRouteProps> = routeProps => <Route {...routeProps} />;

export default AuthorizedRoute;
