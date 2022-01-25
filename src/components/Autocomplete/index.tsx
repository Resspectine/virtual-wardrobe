import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { isEqual } from 'lodash';
import { Dispatch, FC, ReactNode, SetStateAction } from 'react';

import { ITag } from 'types/tag';

type CustomTag = { inputValue: string } & Omit<ITag, 'id'>;

export type AnyTag = ITag | CustomTag;

const filter = createFilterOptions<AnyTag>();

export const isCustomTag = (tag: AnyTag): tag is CustomTag => !!(tag as CustomTag).inputValue;

const isNoStringsInArray = (tags: (AnyTag | string)[]): tags is AnyTag[] => tags.every(tag => typeof tag !== 'string');

interface ICustomAutocompleteProps {
  autocompleteOptions: AnyTag[];
  value: AnyTag[];
  setValue: Dispatch<SetStateAction<AnyTag[]>>;
}

const CustomAutocomplete: FC<ICustomAutocompleteProps> = ({ autocompleteOptions, setValue, value }) => (
  <Autocomplete
    value={value}
    multiple
    onChange={(_, newValue): void => {
      if (!isNoStringsInArray(newValue)) {
        return;
      }

      setValue(newValue);
    }}
    filterOptions={(options, params): AnyTag[] => {
      const filtered = filter(options, params);

      const { inputValue } = params;
      const isExisting = options.some(option => inputValue === option.title);

      if (inputValue !== '' && !isExisting) {
        return [
          ...filtered,
          {
            inputValue,
            title: `Add "${inputValue}"`,
          },
        ];
      }

      return filtered;
    }}
    selectOnFocus
    handleHomeEndKeys
    isOptionEqualToValue={isEqual}
    options={autocompleteOptions}
    getOptionLabel={(option): string => {
      if (isCustomTag(option)) {
        return option.inputValue;
      }

      return option.title;
    }}
    renderOption={(props, option): ReactNode => <li {...props}>{option.title}</li>}
    sx={{
      width: '50%',
      margin: '10px 0',
    }}
    freeSolo
    renderInput={(params): ReactNode => (
      <TextField
        {...params}
        sx={{
          padding: 0,
        }}
        InputLabelProps={{
          sx: {
            transform: (!value.length && 'translate(14px, 10px) scale(1)') || undefined,
            '&.Mui-focused': {
              transform: (!value.length && 'translate(14px, -9px) scale(0.75)') || undefined,
            },
          },
        }}
        InputProps={{
          ...params.InputProps,
          sx: {
            '&.MuiOutlinedInput-root': {
              padding: 0.5,
            },
          },
        }}
        label="Add tags"
      />
    )}
  />
);

export default CustomAutocomplete;
