import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React, { FC } from 'react';

import { getFormFieldConfigurations } from './helpers';
import { useCreateClothes } from './hooks';
import { useStyles } from './styles';

import ControlledTextField from 'components/ControlledTextField';
import FileUpload from 'components/FileUpload';
import FormSubmitStatus from 'components/FormSubmitStatus';

export interface ICreateClothesValues {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  image: File[];
}

const CreateClothes: FC = () => {
  const classes = useStyles();
  const { status, control, onSubmit, watch, register, setValue } = useCreateClothes();

  return (
    <Box>
      <Typography>Create clothes</Typography>
      <form onSubmit={onSubmit} className={classes.form}>
        {getFormFieldConfigurations(control, watch).map((props, index) => (
          <ControlledTextField {...props} key={index} className={classes.fieldInput} />
        ))}
        <FileUpload register={register} name="image" file={watch('image')[0]} setValue={setValue} />
        <FormSubmitStatus status={status} />
        <Button type="submit" variant="outlined" className={classes.submit}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default CreateClothes;
