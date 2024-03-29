import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { getFormFieldConfigurations } from './helpers';
import { useCreateClothes } from './hooks';
import { CreateGarmentForm, CreateGarmentSubmit, CreateGarmentTextField } from './styled';

import Autocomplete from 'components/Autocomplete';
import FileUpload from 'components/FileUpload';

export interface ICreateClothesValues {
  title: string;
  description: string;
  price: string;
  image: File[];
}

const CreateGarment: FC = () => {
  const { control, onSubmit, watch, register, setValue, setAutocompleteValue, autocompleteValue, tags, errors } =
    useCreateClothes();

  return (
    <Box>
      <Typography>Create clothes</Typography>
      <CreateGarmentForm component="form" onSubmit={onSubmit}>
        {getFormFieldConfigurations(control).map((props, index) => (
          <CreateGarmentTextField {...props} key={index} />
        ))}
        {tags && <Autocomplete autocompleteOptions={tags} setValue={setAutocompleteValue} value={autocompleteValue} />}
        <FileUpload register={register} name="image" file={watch('image')[0]} setValue={setValue} errors={errors} />
        <CreateGarmentSubmit type="submit" variant="contained" color="primary">
          Submit
        </CreateGarmentSubmit>
      </CreateGarmentForm>
    </Box>
  );
};

export default CreateGarment;
