import Gesture from '@mui/icons-material/Gesture';
import StarBorder from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { image } from './styles';

interface StarButtonProps {
  isFavorite: boolean;
  toggleFavorite: (id: string) => void;
  id: string;
}

export const StarButton: FC<StarButtonProps> = ({ isFavorite, toggleFavorite, id }) => (
  <Tooltip title={isFavorite ? 'Remove from favorite' : 'Add to favorite'}>
    <Box
      sx={{
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: theme => (isFavorite ? theme.palette.text.secondary : theme.palette.common.white),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0.625,
        borderRadius: 2,
      }}
      onClick={(): void => toggleFavorite(id)}
    >
      <StarBorder
        sx={theme => ({
          fill: isFavorite ? theme.palette.common.white : 'initial',
        })}
      />
    </Box>
  </Tooltip>
);

interface ImageSectionProps {
  imageUrl: string | null;
}

export const ImageSection: FC<ImageSectionProps> = ({ imageUrl }) =>
  (imageUrl && (
    <>
      <Box>
        <Box component="img" src={imageUrl} sx={image} alt="Something went wrong" />
      </Box>
      <Box
        sx={{
          height: '1px',
          width: '90%',
          borderRadius: 0.25,
          backgroundColor: '#e8e8e8',
          margin: '10px auto',
        }}
      />
    </>
  )) ||
  null;

interface DataSectionProps {
  title: string;
  description: string;
}

export const DataSection: FC<DataSectionProps> = ({ description, title }) => (
  <Box>
    <Typography
      sx={{
        fontSize: 20,
        lineHeight: '20px',
        marginBottom: 2,
        fontWeight: 500,
      }}
    >
      {title}
    </Typography>
    <Typography
      sx={{
        fontSize: 16,
        lineHeight: '16px',
        marginBottom: 2,
      }}
    >
      {description}
    </Typography>
  </Box>
);

interface PriceSectionProps {
  wearingAmount: number;
  price: string;
}

export const PriceSection: FC<PriceSectionProps> = ({ wearingAmount, price }) => (
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <Tooltip title="The number of times you have worn this garment. Double click on garment to wear">
      <Typography
        sx={{
          fontSize: 18,
          lineHeight: '18px',
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Gesture />
        {wearingAmount}
      </Typography>
    </Tooltip>
    <Typography
      sx={{
        fontSize: 18,
        lineHeight: '18px',
        fontWeight: 500,
      }}
    >
      ${price}
    </Typography>
  </Box>
);
