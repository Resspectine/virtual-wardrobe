import { InputLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Dispatch, FC, SetStateAction } from 'react';

import { TagFilterWrapper } from './styled';

import { ITag } from 'types/tag';

interface TagFilter {
  tags: ITag[];
  setValue: Dispatch<SetStateAction<string[]>>;
  value: string[];
}

const TagFilter: FC<TagFilter> = ({ tags, setValue, value }) => {
  const handleChange = (event: SelectChangeEvent<typeof value>): void => {
    const {
      target: { value: newValue },
    } = event;

    if (typeof newValue === 'string') {
      return;
    }

    setValue(newValue);
  };

  return (
    <TagFilterWrapper>
      <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={value}
        onChange={handleChange}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected): string => selected.map(id => tags.find(tag => tag.id === id)?.title || '').join(', ')}
      >
        {tags.map(tag => (
          <MenuItem key={tag.id} value={tag.id}>
            <Checkbox checked={!!value.find(id => tag.id === id)} />
            <ListItemText primary={tag.title} />
          </MenuItem>
        ))}
      </Select>
    </TagFilterWrapper>
  );
};

export default TagFilter;
