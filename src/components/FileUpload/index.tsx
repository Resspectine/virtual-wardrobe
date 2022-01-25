import Close from '@mui/icons-material/Close';
import { FormHelperText } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FC } from 'react';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { useFileUploadControl } from './hooks';
import { CloseIcon, Image } from './styled';

import { ICreateClothesValues } from 'pages/CreateGarment';

export interface IFileUpload {
  register: UseFormRegister<ICreateClothesValues>;
  name: keyof ICreateClothesValues;
  file: File;
  setValue: UseFormSetValue<ICreateClothesValues>;
  disabled?: boolean;
  errors: FieldErrors<ICreateClothesValues>;
}

const FileUpload: FC<IFileUpload> = ({ register, name, file, setValue, disabled, errors }) => {
  const { fileUrl, onCloseCLick } = useFileUploadControl({
    file,
    name,
    setValue,
  });

  const error = errors?.[name];

  return fileUrl ? (
    <Box position="relative">
      <Image component="img" src={fileUrl} alt="Something went wrong" />
      <CloseIcon onClick={onCloseCLick}>
        <Close />
      </CloseIcon>
    </Box>
  ) : (
    <>
      <Button variant="outlined" component="label" disabled={disabled}>
        Upload File
        <input
          type="file"
          hidden
          {...register(name, {
            required: 'Image is required',
          })}
        />
      </Button>
      {error && (
        <FormHelperText error>
          {Array.isArray(error) ? error.map(({ message }) => message).join(', ') : error.message}
        </FormHelperText>
      )}
    </>
  );
};

export default FileUpload;
