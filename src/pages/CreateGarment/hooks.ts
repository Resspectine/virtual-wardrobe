import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router';

import { createGarment, editGarment, getGarmentById } from './mock';

import { ICreateClothesValues } from '.';

import { AnyTag, isCustomTag } from 'components/Autocomplete';
import { fileFetch } from 'lib/controller/file';
import { getFileFromStream } from 'lib/helpers/files';
import { loadTags } from 'pages/Profile/mock';
import { ROUTE_PATHS } from 'routes/constants';
import { useAppNotification } from 'store/appNotification';
import { File as PictureFile } from 'types/file';

interface ISendGarment {
  values: ICreateClothesValues;
  file?: PictureFile;
}

export async function getFileFromUrl(url: string, name: string, defaultType = 'image/jpeg') {
  const response = await fetch(url);
  const data = await response.blob();

  return new File([data], name, {
    type: data.type || defaultType,
  });
}

export const useCreateClothes = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string | undefined }>();
  const addNotification = useAppNotification(state => state.addNotification);
  const { data: tags } = useQuery('tags', loadTags);
  const { mutate: createGarmentMutate } = useMutation(createGarment);
  const { mutate: editGarmentMutate } = useMutation(editGarment);
  const { data } = useQuery(['garments', id], () => getGarmentById(id));
  const [autocompleteValue, setAutocompleteValue] = useState<AnyTag[]>([]);

  const {
    control,
    handleSubmit,
    watch,
    register,
    setValue,
    formState: { errors },
  } = useForm<ICreateClothesValues>({
    defaultValues: {
      description: '',
      price: '',
      title: '',
      image: [],
    },
  });

  useEffect(() => {
    const setPicture = async () => {
      if (data?.picture) {
        const file = await getFileFromStream(data.picture, data?.picture?.filename);
        setValue('image', [file]);
      }
    };

    if (data) {
      setValue('description', data.description);
      setValue('price', data.price);
      setValue('title', data.title);

      if (data.tags) {
        setAutocompleteValue(data.tags);
      }

      setPicture();
    }
  }, [data]);

  const sendGarment = ({ values: { image: _, ...values }, file }: ISendGarment) =>
    (!data ? createGarmentMutate : editGarmentMutate)(
      {
        ...values,
        id: data?.id,
        picture: file || data?.picture,
        wearingAmount: data?.wearingAmount || 0,
        isFavorite: data?.isFavorite || false,
        tags: autocompleteValue.map(tag =>
          isCustomTag(tag)
            ? {
                title: tag.inputValue,
              }
            : tag
        ),
      },
      {
        onSuccess: () => {
          addNotification({ message: 'Garment created successfully', type: 'success' });
          history.push(ROUTE_PATHS.main);
        },
      }
    );

  const onSubmit = handleSubmit(async values => {
    if (!data) {
      const file = await (await fileFetch(values.image[0])).json();

      sendGarment({
        values,
        file,
      });

      return;
    }

    if (watch('image')[0].name === data?.picture?.filename) {
      sendGarment({
        values,
      });

      return;
    }

    const file = await (await fileFetch(values.image[0])).json();

    sendGarment({
      values,
      file,
    });
  });

  return {
    tags,
    errors,
    control,
    onSubmit,
    watch,
    register,
    setValue,
    autocompleteValue,
    setAutocompleteValue,
  };
};
