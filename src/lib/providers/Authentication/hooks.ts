import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { authenticate } from './request';

import { useUser } from 'store/user';

export const useAuthentication = () => {
  const user = useUser(state => state.user);
  const setUser = useUser(state => state.setUser);
  const removeUser = useUser(state => state.removeUser);
  const { data, error } = useQuery('authentication', authenticate, { retry: 0 });

  useEffect(() => {
    if (data) {
      setUser(data);
    }

    if (error) {
      removeUser();
    }
  }, [data, error]);

  return { isLoading: user === undefined };
};
