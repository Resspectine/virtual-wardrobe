import { matchPath, useHistory, useLocation } from 'react-router';

export const useNavigationControl = () => {
  const history = useHistory();
  const location = useLocation();

  const goTo = (link: string): void => {
    history.push(link);
  };

  const isCurrentPage = (route: string): boolean => !!matchPath(location.pathname, route);

  return {
    isCurrentPage,
    goTo,
  };
};
