import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import React, { FC } from 'react';

import { useStyles } from './styles';

const CreateClothes: FC = () => {
  const classes = useStyles();

  console.log('create');

  return (
    <Box>
      <Box>LOGIN</Box>
    </Box>
  );
};

export default CreateClothes;
