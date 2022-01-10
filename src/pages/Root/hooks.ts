import { useEffect } from 'react';
import { useHistory } from 'react-router';

import { useUser } from 'store/user';

export const useRoot = () => {
  const history = useHistory();
  const isLoggedIn = !!useUser(state => state.user);

  useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  return { isLoggedIn };
};
