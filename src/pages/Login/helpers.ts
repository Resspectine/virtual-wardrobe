import { Control } from 'react-hook-form';

import { LoginValue } from './hooks';

import { IControlledTextField } from 'components/ControlledTextField';

export const getFormFieldConfigurations = (control: Control<LoginValue>): IControlledTextField<LoginValue>[] => [
  {
    controlProps: {
      control,
      name: 'email',
      rules: {
        required: 'Email is required',
      },
    },
    textFieldProps: {
      label: 'Email',
      variant: 'outlined',
      type: 'text',
    },
  },
  {
    controlProps: {
      control,
      name: 'password',
      rules: {
        required: 'Password is required',
      },
    },
    textFieldProps: {
      label: 'Password',
      variant: 'outlined',
      type: 'password',
    },
  },
];
