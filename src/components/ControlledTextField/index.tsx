import TextField, { TextFieldProps } from '@mui/material/TextField';
import { SxProps, Theme } from '@mui/system';
import { ReactElement } from 'react';
import { UseControllerProps, useController, FieldValues } from 'react-hook-form';

export interface IControlledTextField<T extends FieldValues> {
  textFieldProps: TextFieldProps;
  controlProps: UseControllerProps<T>;
  sx?: SxProps<Theme>;
}

function ControlledTextField<T extends FieldValues>({
  controlProps,
  textFieldProps,
  sx,
}: IControlledTextField<T>): ReactElement | null {
  const { field, fieldState } = useController(controlProps);

  return (
    <TextField
      {...textFieldProps}
      {...field}
      sx={sx}
      error={!!fieldState.error}
      helperText={(fieldState.error as { message: string } | undefined)?.message}
    />
  );
}

export default ControlledTextField;
