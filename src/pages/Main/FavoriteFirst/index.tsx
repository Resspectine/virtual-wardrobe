import { FormControlLabel, FormGroup } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { Dispatch, FC, SetStateAction } from 'react';

interface FavoriteFirst {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
}

const FavoriteFirst: FC<FavoriteFirst> = ({ setValue, value }) => (
  <FormGroup>
    <FormControlLabel
      control={<Checkbox checked={value} onChange={(_, checked): void => setValue(checked)} />}
      label="Favorite first"
    />
  </FormGroup>
);

export default FavoriteFirst;
