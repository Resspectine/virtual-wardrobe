import Gesture from '@mui/icons-material/Gesture';
import StarBorder from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { garmentWrapper, image } from './styles';

import { IHoldClickProps } from 'lib/hooks/useHoldClick';
import TagItem from 'pages/TagsList/components/TagItem';
import { IGarment } from 'types/garment';

export interface IGarmentProps extends Partial<IHoldClickProps> {
  garment: IGarment;
  onClick: () => void;
  toggleFavorite: (id: string) => void;
}

const Garment: FC<IGarmentProps> = ({
  garment: { description, imageUrl, isFavorite, price, title, wearingAmount, id, tags },
  onClick,
  toggleFavorite,
  ...hold
}) => (
  <Box sx={garmentWrapper} onClick={onClick} {...hold}>
    <Tooltip title={isFavorite ? 'Remove from favorite' : 'Add to favorite'}>
      <Box
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          backgroundColor: isFavorite ? 'gold' : 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0.625,
          borderRadius: 2,
        }}
        onClick={(): void => toggleFavorite(id)}
      >
        <StarBorder
          sx={{
            fill: isFavorite ? 'white' : 'initial',
          }}
        />
      </Box>
    </Tooltip>
    <Box>
      {imageUrl && (
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
      )}
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
    </Box>
    <Box display="flex" mx={-0.625}>
      {tags.map(tag => (
        <TagItem tag={tag} key={tag.id} />
      ))}
    </Box>
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
  </Box>
);

export default Garment;
