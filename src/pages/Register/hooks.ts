import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router';

import { RegisterUser, register } from './mock';

import { ROUTE_PATHS } from 'routes/constants';
import { useAppNotification } from 'store/appNotification';

export type RegisterValue = RegisterUser;

export const useCreateClothes = () => {
  const history = useHistory();
  const addNotification = useAppNotification(state => state.addNotification);
  const { mutate } = useMutation(register);

  const { control, handleSubmit } = useForm<RegisterValue>({
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = handleSubmit(values => {
    mutate(values, {
      onSuccess: () => {
        addNotification({ message: 'Register success', type: 'success' });
        history.push(ROUTE_PATHS.login);
      },
    });
  });

  return {
    control,
    onSubmit,
  };
};
