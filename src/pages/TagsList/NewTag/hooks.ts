import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';

import { createNewTag } from './mock';

import { INewTag, INewTagValues } from '.';

import { useAppNotification } from 'components/AppNotification';

export const useNewTag = ({ closeModal }: INewTag) => {
  const queryClient = useQueryClient();
  const addNotification = useAppNotification(state => state.addNotification);
  const { mutate } = useMutation(createNewTag);

  const { control, handleSubmit, reset, register } = useForm<INewTagValues>({
    defaultValues: {
      title: '',
      addMore: false,
    },
  });

  const onSubmit = handleSubmit(values => {
    const { addMore, ...restValues } = values;

    mutate(restValues, {
      onSuccess: () => {
        addNotification({ message: 'Login success', type: 'error' });
        queryClient.invalidateQueries('tags');
        reset();

        if (!addMore) {
          closeModal();
        }
      },
    });
  });

  return {
    control,
    register,
    onSubmit,
  };
};
