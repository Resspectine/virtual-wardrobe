import { Control, UseFormWatch } from 'react-hook-form';

import { ICreateClothesValues } from '.';

import { IControlledTextField } from 'components/ControlledTextField';

export const getFormFieldConfigurations = (
  control: Control<ICreateClothesValues>,
  watch: UseFormWatch<ICreateClothesValues>
): IControlledTextField<ICreateClothesValues>[] => [
  {
    controlProps: {
      control,
      name: 'title',
      rules: {
        required: 'Title is required',
      },
    },
    textFieldProps: {
      label: 'Title',
      variant: 'standard',
      type: 'text',
    },
  },
  {
    controlProps: {
      control,
      name: 'description',
      rules: {
        required: 'Description is required',
      },
    },
    textFieldProps: {
      label: 'Description',
      variant: 'standard',
      type: 'text',
    },
  },
  {
    controlProps: {
      control,
      name: 'price',
      rules: {
        required: 'Price is required',
      },
    },
    textFieldProps: {
      label: 'Price',
      variant: 'standard',
      type: 'number',
    },
  },
  {
    controlProps: {
      control,
      name: 'imageUrl',
    },
    textFieldProps: {
      label: 'Image',
      variant: 'standard',
      type: 'text',
      disabled: !!watch('image')[0],
    },
  },
];
