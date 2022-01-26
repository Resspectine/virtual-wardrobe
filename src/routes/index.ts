import { RouteProps } from 'react-router';

import { ROUTE_PATHS } from './constants';

import CreateGarment from 'pages/CreateGarment';
import Login from 'pages/Login';
import Main from 'pages/Main';
import Profile from 'pages/Profile';
import Register from 'pages/Register';

export interface IRoute extends RouteProps {
  requiresAuthentication: boolean;
  onlyUnAuthorized?: boolean;
}

const routes: IRoute[] = [
  {
    path: ROUTE_PATHS.createGarment,
    component: CreateGarment,
    exact: true,
    requiresAuthentication: true,
  },
  {
    path: ROUTE_PATHS.editGarment(),
    component: CreateGarment,
    exact: true,
    requiresAuthentication: true,
  },
  {
    path: ROUTE_PATHS.main,
    component: Main,
    exact: true,
    requiresAuthentication: true,
  },
  {
    path: ROUTE_PATHS.profile,
    component: Profile,
    exact: true,
    requiresAuthentication: true,
  },
  {
    path: ROUTE_PATHS.login,
    component: Login,
    exact: true,
    requiresAuthentication: false,
    onlyUnAuthorized: true,
  },
  {
    path: ROUTE_PATHS.register,
    component: Register,
    exact: true,
    requiresAuthentication: false,
    onlyUnAuthorized: true,
  },
  {
    path: ROUTE_PATHS[404],
    component: Main,
    exact: true,
    requiresAuthentication: true,
  },
];

export default routes;
