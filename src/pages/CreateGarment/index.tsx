import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { getFormFieldConfigurations } from './helpers';
import { useCreateClothes } from './hooks';

import Autocomplete from 'components/Autocomplete';
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

const CreateGarment: FC = () => {
  const { status, control, onSubmit, watch, register, setValue, autocompleteSetValue, autocompleteValue, tags } =
    useCreateClothes();

  return (
    <Box>
      <Typography>Create clothes</Typography>
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {getFormFieldConfigurations(control, watch).map((props, index) => (
          <ControlledTextField
            {...props}
            key={index}
            sx={{
              '&.MuiTextField-root': {
                marginBottom: 1.25,
                width: '100%',
              },
            }}
          />
        ))}
        {tags && <Autocomplete autocompleteOptions={tags} setValue={autocompleteSetValue} value={autocompleteValue} />}
        <FileUpload register={register} name="image" file={watch('image')[0]} setValue={setValue} />
        <FormSubmitStatus status={status} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            marginTop: 1.25,
            color: '#fff',
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default CreateGarment;
