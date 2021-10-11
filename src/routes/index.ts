import { RouteProps } from 'react-router';

import { ROUTE_PATHS } from './constants';

import CreateClothes from 'pages/CreateClothes';
import Main from 'pages/Main';

export interface IRoute extends RouteProps {
  requiresAuthentication: boolean;
}

const routes: IRoute[] = [
  {
    path: ROUTE_PATHS.createGarment,
    component: CreateClothes,
    exact: true,
    requiresAuthentication: false,
  },
  {
    path: ROUTE_PATHS.editGarment(),
    component: CreateClothes,
    exact: true,
    requiresAuthentication: false,
  },
  {
    path: ROUTE_PATHS.main,
    component: Main,
    exact: true,
    requiresAuthentication: false,
  },
  {
    path: ROUTE_PATHS[404],
    component: CreateClothes,
    exact: true,
    requiresAuthentication: false,
  },
];

export default routes;
