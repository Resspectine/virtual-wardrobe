import Close from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FC } from 'react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { useFileUploadControl } from './hooks';
import { CloseIcon, Image } from './styled';

import { ICreateClothesValues } from 'pages/CreateGarment';

export interface IFileUpload {
  register: UseFormRegister<ICreateClothesValues>;
  name: keyof ICreateClothesValues;
  file: File;
  setValue: UseFormSetValue<ICreateClothesValues>;
  disabled?: boolean;
}

const FileUpload: FC<IFileUpload> = ({ register, name, file, setValue, disabled }) => {
  const { fileUrl, onCloseCLick } = useFileUploadControl({
    file,
    name,
    setValue,
  });

  return fileUrl ? (
    <Box position="relative">
      <Image component="img" src={fileUrl} alt="Something went wrong" />
      <CloseIcon onClick={onCloseCLick}>
        <Close />
      </CloseIcon>
    </Box>
  ) : (
    <Button variant="outlined" component="label" disabled={disabled}>
      Upload File
      <input type="file" hidden {...register(name)} />
    </Button>
  );
};

export default FileUpload;
