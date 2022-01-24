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
  const { mutate, status } = useMutation(login);

  const { control, handleSubmit } = useForm<LoginValue>({
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = handleSubmit(values => {
    mutate(values, {
      onSuccess: user => {
        setUser(user);
        addNotification({ message: 'Login success', type: 'error' });
        history.push(ROUTE_PATHS.main);
      },
    });
  });

  return {
    status,
    control,
    onSubmit,
  };
};
