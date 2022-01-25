import { RouteProps } from 'react-router';

import { ROUTE_PATHS } from './constants';

import CreateGarment from 'pages/CreateGarment';
import Login from 'pages/Login';
import Main from 'pages/Main';
import Register from 'pages/Register';
import TagsList from 'pages/TagsList';

export interface IRoute extends RouteProps {
  requiresAuthentication: boolean;
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
    path: ROUTE_PATHS.tagsList,
    component: TagsList,
    exact: true,
    requiresAuthentication: true,
  },
  {
    path: ROUTE_PATHS.login,
    component: Login,
    exact: true,
    requiresAuthentication: false,
  },
  {
    path: ROUTE_PATHS.login,
    component: Login,
    exact: true,
    requiresAuthentication: false,
  },
  {
    path: ROUTE_PATHS.register,
    component: Register,
    exact: true,
    requiresAuthentication: false,
  },
  {
    path: ROUTE_PATHS[404],
    component: Main,
    exact: true,
    requiresAuthentication: true,
  },
];

export default routes;
