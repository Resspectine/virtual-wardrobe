import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';

import { createNewTag } from './mock';

import { INewTag, INewTagValues } from '.';

export const useNewTag = ({ closeModal }: INewTag) => {
  const queryClient = useQueryClient();
  const { mutate, status } = useMutation(createNewTag);

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
        queryClient.invalidateQueries('tags');
        reset();

        if (!addMore) {
          closeModal();
        }
      },
    });
  });

  return {
    status,
    control,
    register,
    onSubmit,
  };
};
