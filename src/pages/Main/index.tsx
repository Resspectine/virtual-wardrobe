import Box from '@material-ui/core/Box';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import React, { FC } from 'react';

import Garment from './components/Garment';
import { useMain } from './hooks';
import { useStyles } from './styles';

export interface ICreateClothesValues {
  title: string;
  description: string;
  price: string;
}

const Main: FC = () => {
  const classes = useStyles();
  const { data, hold, onClick, isOpened, setIsOpened, popoverList, anchorPosition } = useMain();

  return (
    <Box className={classes.listWrapper}>
      <Popover anchorReference="anchorPosition" anchorPosition={anchorPosition} open={isOpened}>
        <ClickAwayListener onClickAway={(): void => setIsOpened(false)}>
          <Box className={classes.popoverWrapper}>
            {popoverList.map((listItem, index) => (
              <Typography className={classes.popoverItem} key={index} {...listItem} />
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
