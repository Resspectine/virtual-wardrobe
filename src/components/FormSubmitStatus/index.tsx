import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import React, { FC } from 'react';

import { TEXT_BY_STATUS } from './constants';
import { useStyles } from './styles';

export interface IFormSubmitStatus {
  status: 'error' | 'idle' | 'loading' | 'success';
}

const FormSubmitStatus: FC<IFormSubmitStatus> = ({ status }) => {
  const classes = useStyles();

  if (status === 'idle') {
    return null;
  }

  return (
    <Box className={clsx(classes.root, classes[status])}>
      <Typography>{TEXT_BY_STATUS[status]}</Typography>
    </Box>
  );
};

export default FormSubmitStatus;
