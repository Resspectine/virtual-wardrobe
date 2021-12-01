import Close from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React, { FC, useEffect, useState } from 'react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { ICreateClothesValues } from 'pages/CreateClothes';

export interface IFileUpload {
  register: UseFormRegister<ICreateClothesValues>;
  name: keyof ICreateClothesValues;
  file: File;
  setValue: UseFormSetValue<ICreateClothesValues>;
}

const FileUpload: FC<IFileUpload> = ({ register, name, file, setValue }) => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();

      reader.onloadend = (): void => {
        setFileUrl(reader.result?.toString() || '');
      };

      reader.readAsDataURL(file);
    }
  }, [file]);

  return fileUrl ? (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Box
        component="img"
        src={fileUrl}
        alt="Something went wrong"
        sx={{
          maxWidth: 300,
          height: 'auto',
        }}
      />
      <Box
        onClick={(): void => {
          setFileUrl(null);
          setValue(name, []);
        }}
        sx={{
          position: 'absolute',
          top: 5,
          right: 5,
        }}
      >
        <Close />
      </Box>
    </Box>
  ) : (
    <Button variant="outlined" component="label">
      Upload File
      <input type="file" hidden {...register(name)} />
    </Button>
  );
};

export default FileUpload;
