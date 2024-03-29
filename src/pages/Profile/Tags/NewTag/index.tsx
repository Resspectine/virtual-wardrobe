import { Checkbox, FormControlLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FC, forwardRef } from 'react';

import { getFormFieldConfigurations } from './helpers';
import { useNewTag } from './hooks';
import { NewTagActionsWrapper, NewTagForm, NewTagTextField, NewTagWrapper } from './styled';

export interface INewTagValues extends Record<string, any> {
  title: string;
  addMore: boolean;
}

export interface INewTag {
  closeModal: () => void;
}

const NewTag: FC<INewTag> = forwardRef(({ closeModal }, _) => {
  const { control, onSubmit, register } = useNewTag({ closeModal });

  return (
    <NewTagWrapper>
      <Typography>Create clothes</Typography>
      <NewTagForm component="form" onSubmit={onSubmit}>
        {getFormFieldConfigurations(control).map((props, index) => (
          <NewTagTextField {...props} key={index} />
        ))}
        <FormControlLabel control={<Checkbox {...register('addMore')} />} label="Add more" />
        <NewTagActionsWrapper>
          <Button onClick={closeModal} variant="outlined">
            Close
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </NewTagActionsWrapper>
      </NewTagForm>
    </NewTagWrapper>
  );
});

export default NewTag;
