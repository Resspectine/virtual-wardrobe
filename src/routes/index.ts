import { RouteProps } from 'react-router';

import { ROUTE_PATHS } from './constants';

import CreateClothes from 'pages/CreateClothes';
import Login from 'pages/Login';

export interface IRoute extends RouteProps {
  requiresAuthentication: boolean;
}

const routes: IRoute[] = [
  {
    path: ROUTE_PATHS.login,
    component: Login,
    exact: true,
    requiresAuthentication: false,
  },
  {
    path: ROUTE_PATHS.createClothes,
    component: CreateClothes,
    exact: true,
    requiresAuthentication: false,
  },
  {
    path: ROUTE_PATHS[404],
    component: Login,
    exact: true,
    requiresAuthentication: false,
  },
];

export default routes;
