import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import React, { FC } from 'react';

import { useStyles } from './styles';

import { IHoldClickProps } from 'lib/hooks/useHoldClick';
import { IGarment } from 'types/garment';

export interface IGarmentProps extends Partial<IHoldClickProps> {
  garment: IGarment;
  onClick: () => void;
}

const Garment: FC<IGarmentProps> = ({
  garment: { description, imageUrl, isFavorite, price, title, wearingAmount },
  onClick,
  ...hold
}) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.wrapper, isFavorite && classes.favorite)} onClick={onClick} {...hold}>
      <Box>
        {imageUrl && (
          <Box>
            <img src={imageUrl} className={classes.image} alt="Something went wrong" />
          </Box>
        )}
        <Box>
          <Typography>{title}</Typography>
          <Typography>{description}</Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography>{wearingAmount}</Typography>
        <Typography>${price}</Typography>
      </Box>
    </Box>
  );
};

export default Garment;
