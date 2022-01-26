import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router';

import { login, LoginUser } from './mock';

import { ROUTE_PATHS } from 'routes/constants';
import { useAppNotification } from 'store/appNotification';
import { useUser } from 'store/user';

export type LoginValue = LoginUser;

export const useCreateClothes = () => {
  const history = useHistory();
  const addNotification = useAppNotification(state => state.addNotification);
  const setUser = useUser(state => state.setUser);
  const { mutate } = useMutation(login);

  const { control, handleSubmit, setValue } = useForm<LoginValue>({
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = handleSubmit(values => {
    mutate(values, {
      onSuccess: user => {
        setUser(user);
        addNotification({ message: 'Login success', type: 'success' });
        history.push(ROUTE_PATHS.main);
      },
      onError: () => {
        addNotification({
          message: 'Error ocurred, try again please',
          type: 'error',
        });
        setValue('password', '');
      },
    });
  });

  return {
    control,
    onSubmit,
  };
};
