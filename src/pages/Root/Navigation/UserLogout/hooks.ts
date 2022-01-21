import { useMutation } from 'react-query';

import { appFetch } from 'lib/controller';
import { useUser } from 'store/user';

export const useLogoutControl = () => {
  const removeUser = useUser(state => state.removeUser);
  const { mutate } = useMutation(() => appFetch('authentication/log-out', { method: 'POST' }), {
    onMutate: () => {
      removeUser();
    },
  });

  const onClick = () => {
    mutate();
  };

  return { onClick };
};
