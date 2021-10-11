import { TextField, TextFieldProps } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { UseControllerProps, useController, FieldValues } from 'react-hook-form';

export interface IControlledTextField<T extends FieldValues> {
  textFieldProps: TextFieldProps;
  controlProps: UseControllerProps<T>;
  className?: string;
}

function ControlledTextField<T extends FieldValues>({
  controlProps,
  textFieldProps,
  className,
}: IControlledTextField<T>): ReactElement | null {
  const { field, fieldState } = useController(controlProps);

  return (
    <TextField
      {...textFieldProps}
      {...field}
      className={className}
      error={!!fieldState.error}
      helperText={(fieldState.error as { message: string } | undefined)?.message}
    />
  );
}

export default ControlledTextField;
