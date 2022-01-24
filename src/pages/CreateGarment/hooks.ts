import { omit } from 'lodash';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router';

import { createGarment, getGarmentById } from './mock';

import { ICreateClothesValues } from '.';

import { AnyTag, isCustomTag } from 'components/Autocomplete';
import { loadTags } from 'pages/TagsList/mock';
import { ROUTE_PATHS } from 'routes/constants';
import { useAppNotification } from 'store/appNotification';

interface ISendGarment {
  values: ICreateClothesValues;
  imageUrl: string;
}

export const useCreateClothes = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const addNotification = useAppNotification(state => state.addNotification);
  const { data: tags } = useQuery('tags', loadTags);
  const { mutate } = useMutation(createGarment);
  // const { mutate: editGarmentMutate } = useMutation(editGarment);
  const { data } = useQuery(['garments', id], () => getGarmentById(id));
  const [autocompleteValue, setAutocompleteValue] = useState<AnyTag[]>([]);

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

      if (data.tags) {
        setAutocompleteValue(data.tags);
      }
    }
  }, [data]);

  const sendGarment = ({ imageUrl, values }: ISendGarment) =>
    mutate(
      {
        ...values,
        imageUrl,
        wearingAmount: data?.wearingAmount || 0,
        isFavorite: data?.isFavorite || false,
        tags: autocompleteValue.map(tag =>
          isCustomTag(tag)
            ? {
                title: tag.inputValue,
              }
            : omit(tag, 'id')
        ),
      },
      {
        onSuccess: () => {
          addNotification({ message: 'Login success', type: 'error' });
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
    tags,
    control,
    onSubmit,
    watch,
    register,
    setValue,
    autocompleteValue,
    setAutocompleteValue,
  };
};
