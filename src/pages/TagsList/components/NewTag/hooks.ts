import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { v4 } from 'uuid';

import { createNewTag } from './mock';

import { INewTagValues } from '.';

export const useNewTag = () => {
  const queryClient = useQueryClient();
  const { mutate, status } = useMutation(createNewTag);

  const { control, handleSubmit, reset } = useForm<INewTagValues>({
    defaultValues: {
      title: '',
    },
  });

  const onSubmit = handleSubmit(values => {
    mutate(
      {
        ...values,
        id: v4(),
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries('tags');
          reset();
        },
      }
    );
  });

  return {
    status,
    control,
    onSubmit,
  };
};
