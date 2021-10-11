import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router';
import { v4 } from 'uuid';

import { createGarment, editGarment, getGarmentById } from './mock';

import { ICreateClothesValues } from '.';

import { ROUTE_PATHS } from 'routes/constants';

interface ISendGarment {
  values: ICreateClothesValues;
  imageUrl: string;
}

export const useCreateClothes = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const { mutate, status } = useMutation(createGarment);
  const { mutate: editGarmentMutate } = useMutation(editGarment);
  const { data } = useQuery(['garments', id], () => getGarmentById(id));

  console.log(data);

  const { control, handleSubmit, watch, register, setValue } = useForm<ICreateClothesValues>({
    defaultValues: {
      description: '',
      price: '',
      title: '',
      imageUrl: '',
      image: [],
    },
  });

  useEffect(() => {
    if (data) {
      setValue('description', data.description);
      setValue('imageUrl', data.imageUrl);
      setValue('price', data.price);
      setValue('title', data.title);
    }
  }, [data]);

  const sendGarment = ({ imageUrl, values }: ISendGarment) =>
    (data ? editGarmentMutate : mutate)(
      {
        ...values,
        id: data?.id || v4(),
        imageUrl,
        wearingAmount: data?.wearingAmount || 0,
        isFavorite: data?.isFavorite || false,
      },
      {
        onSuccess: () => {
          history.push(ROUTE_PATHS.main);
        },
      }
    );

  const onSubmit = handleSubmit(values => {
    if (values.image[0]) {
      const reader = new FileReader();

      reader.onloadend = () => {
        sendGarment({
          values,
          imageUrl: reader.result?.toString() || '',
        });
      };

      reader.readAsDataURL(values.image[0]);

      return;
    }

    if (values.imageUrl) {
      sendGarment({
        values,
        imageUrl: values.imageUrl,
      });

      return;
    }

    sendGarment({
      values,
      imageUrl: '',
    });
  });

  return {
    status,
    control,
    onSubmit,
    watch,
    register,
    setValue,
  };
};
