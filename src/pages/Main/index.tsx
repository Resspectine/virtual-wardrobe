import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Popover from '@mui/material/Popover';
import { FC } from 'react';

import Garment from './Garment';
import { useMain } from './hooks';
import { MainListItem, MainWrapper } from './styled';

const Main: FC = () => {
  const { data, hold, onClick, isOpened, setIsOpened, popoverList, anchorPosition, toggleFavorite } = useMain();

  return (
    <MainWrapper>
      <Popover anchorReference="anchorPosition" anchorPosition={anchorPosition} open={isOpened}>
        <ClickAwayListener onClickAway={(): void => setIsOpened(false)} mouseEvent="onMouseDown">
          <Box p={0.625}>
            {popoverList.map((listItem, index) => (
              <MainListItem key={index} {...listItem} />
            ))}
          </Box>
        </ClickAwayListener>
      </Popover>
      {data?.map(garment => (
        <Garment
          key={garment.id}
          garment={garment}
          onClick={(): void => onClick(garment.id)}
          toggleFavorite={toggleFavorite}
          {...hold(garment.id)}
        />
      ))}
    </MainWrapper>
  );
};

export default Main;
