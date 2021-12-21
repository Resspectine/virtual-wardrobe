import Gesture from '@mui/icons-material/Gesture';
import StarBorder from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { FC } from 'react';

import {
  GarmentDataDescription,
  GarmentDataTitle,
  GarmentImage,
  GarmentImageDivider,
  GarmentPrice,
  GarmentStarButton,
  GarmentWearingAmount,
} from './styled';

interface StarButtonProps {
  isFavorite: boolean;
  toggleFavorite: (id: string) => void;
  id: string;
}

export const StarButton: FC<StarButtonProps> = ({ isFavorite, toggleFavorite, id }) => (
  <Tooltip title={isFavorite ? 'Remove from favorite' : 'Add to favorite'}>
    <GarmentStarButton isFavorite={isFavorite} onClick={(): void => toggleFavorite(id)}>
      <StarBorder
        sx={theme => ({
          fill: isFavorite ? theme.palette.common.white : 'initial',
        })}
      />
    </GarmentStarButton>
  </Tooltip>
);

interface ImageSectionProps {
  imageUrl: string | null;
}

export const ImageSection: FC<ImageSectionProps> = ({ imageUrl }) =>
  (imageUrl && (
    <>
      <Box>
        <GarmentImage component="img" src={imageUrl} alt="Something went wrong" />
      </Box>
      <GarmentImageDivider />
    </>
  )) ||
  null;

interface DataSectionProps {
  title: string;
  description: string;
}

export const DataSection: FC<DataSectionProps> = ({ description, title }) => (
  <Box>
    <GarmentDataTitle>{title}</GarmentDataTitle>
    <GarmentDataDescription>{description}</GarmentDataDescription>
  </Box>
);

interface PriceSectionProps {
  wearingAmount: number;
  price: string;
}

export const PriceSection: FC<PriceSectionProps> = ({ wearingAmount, price }) => (
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <Tooltip title="The number of times you have worn this garment. Double click on garment to wear">
      <GarmentWearingAmount>
        <Gesture />
        {wearingAmount}
      </GarmentWearingAmount>
    </Tooltip>
    <GarmentPrice>${price}</GarmentPrice>
  </Box>
);
