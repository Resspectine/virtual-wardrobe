import { Control } from 'react-hook-form';

import { INewTagValues } from '.';

import { IControlledTextField } from 'components/ControlledTextField';

export const getFormFieldConfigurations = (control: Control<INewTagValues>): IControlledTextField<INewTagValues>[] => [
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
];
