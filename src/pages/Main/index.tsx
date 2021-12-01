import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Popover from '@mui/material/Popover';
import { Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';

import Garment from './components/Garment';
import { useMain } from './hooks';

const Main: FC = () => {
  const { data, hold, onClick, isOpened, setIsOpened, popoverList, anchorPosition } = useMain();

  return (
    <Box
      sx={{
        margin: '0 -15px',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <Popover anchorReference="anchorPosition" anchorPosition={anchorPosition} open={isOpened}>
        <ClickAwayListener onClickAway={(): void => setIsOpened(false)} mouseEvent="onMouseDown">
          <Box
            sx={{
              padding: '5px',
            }}
          >
            {popoverList.map((listItem, index) => (
              <Typography
                sx={{
                  cursor: 'pointer',
                  fontSize: 16,
                  padding: '0px 10px',
                  margin: '0 -5px 5px',
                  '&:hover': {
                    backgroundColor: (theme: Theme) => theme.palette.background.default,
                  },
                  '&:last-child': {
                    marginBottom: 0,
                  },
                }}
                key={index}
                {...listItem}
              />
            ))}
          </Box>
        </ClickAwayListener>
      </Popover>
      {data?.map(garment => (
        <Garment key={garment.id} garment={garment} onClick={(): void => onClick(garment.id)} {...hold(garment.id)} />
      ))}
    </Box>
  );
};

export default Main;
