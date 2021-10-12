import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React, { forwardRef } from 'react';

import { getFormFieldConfigurations } from './helpers';
import { useNewTag } from './hooks';
import { useStyles } from './styles';

import ControlledTextField from 'components/ControlledTextField';
import FormSubmitStatus from 'components/FormSubmitStatus';

export interface INewTagValues {
  title: string;
}

export interface INewTag {
  closeModal: () => void;
}

const NewTag = forwardRef(({ closeModal }: INewTag) => {
  const classes = useStyles();
  const { status, control, onSubmit } = useNewTag();

  return (
    <Box>
      <Typography>Create clothes</Typography>
      <form onSubmit={onSubmit} className={classes.form}>
        {getFormFieldConfigurations(control).map((props, index) => (
          <ControlledTextField {...props} key={index} className={classes.fieldInput} />
        ))}
        <FormSubmitStatus status={status} />
        <Button type="submit" variant="outlined" className={classes.submit}>
          Submit
        </Button>
        <Button onClick={closeModal} variant="outlined" className={classes.submit}>
          Close
        </Button>
      </form>
    </Box>
  );
});

export default NewTag;
