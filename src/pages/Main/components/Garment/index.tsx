import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';

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
}) => (
  <Box
    sx={theme => ({
      backgroundColor: theme.palette.background.paper,
      width: {
        xs: 'calc(100% - 30px)',
        sm: 'calc(50% - 30px)',
        md: 'calc(100% / 3 - 30px)',
        lg: 'calc(25% - 30px)',
        xl: 'calc(25% - 30px)',
      },
      padding: 1.25,
      border: '1px solid',
      borderRadius: 2.5,
      marginRight: 1.875,
      marginLeft: 1.875,
      marginBottom: 1.875,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      cursor: 'pointer',
      userSelect: 'none',
      borderColor: isFavorite ? 'gold' : 'initial',
    })}
    onClick={onClick}
    {...hold}
  >
    <Box>
      {imageUrl && (
        <Box>
          <Box
            component="img"
            src={imageUrl}
            sx={{
              width: '100%',
              height: 'auto',
            }}
            alt="Something went wrong"
          />
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

export default Garment;
