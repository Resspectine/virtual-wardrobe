import Box from '@mui/material/Box';
import { FC } from 'react';

import { StarButton, DataSection, ImageSection, PriceSection } from './Components';
import { GarmentWrapper } from './styled';

import TagItem from 'components/TagItem';
import { IHoldClickProps } from 'lib/hooks/useHoldClick';
import { IGarment } from 'types/garment';

export interface IGarmentProps extends Partial<IHoldClickProps> {
  garment: IGarment;
  onClick: () => void;
  toggleFavorite: (id: string) => void;
}

const Garment: FC<IGarmentProps> = ({
  garment: { description, picture, isFavorite, price, title, wearingAmount, id, tags },
  onClick,
  toggleFavorite,
  ...hold
}) => (
  <GarmentWrapper onClick={onClick} {...hold}>
    <StarButton id={id} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
    <Box>
      <ImageSection image={picture || null} />
      <DataSection description={description} title={title} />
    </Box>
    <Box display="flex" mx={-0.625} flexWrap="wrap" flex="1" alignItems="flex-start">
      {tags?.map(tag => (
        <TagItem tag={tag} key={tag.id} />
      ))}
    </Box>
    <PriceSection price={price} wearingAmount={wearingAmount} />
  </GarmentWrapper>
);

export default Garment;
