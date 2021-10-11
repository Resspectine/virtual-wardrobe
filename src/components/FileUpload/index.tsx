import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Close from '@material-ui/icons/Close';
import React, { FC, useEffect, useState } from 'react';
import { UseFormRegister, FieldValues, UseFormSetValue } from 'react-hook-form';

import { useStyles } from './styles';

export interface IFileUpload {
  register: UseFormRegister<FieldValues>;
  name: string;
  file: File;
  setValue: UseFormSetValue<FieldValues>;
}

const FileUpload: FC<IFileUpload> = ({ register, name, file, setValue }) => {
  const classes = useStyles();
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
    <Box className={classes.imageWrapper}>
      <img src={fileUrl} alt="Something went wrong" className={classes.image} />
      <Box
        onClick={(): void => {
          setFileUrl(null);
          setValue(name, []);
        }}
        className={classes.iconWrapper}
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
