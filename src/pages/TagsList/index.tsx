import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import React, { FC } from 'react';

import NewTag from './components/NewTag';
import { useTagsList } from './hooks';
import { useStyles } from './styles';

export interface ICreateClothesValues {
  title: string;
  description: string;
  price: string;
}

const TagsList: FC = () => {
  const classes = useStyles();
  const { data, isModalOpened, setIsModalOpened } = useTagsList();

  return (
    <Box className={classes.listWrapper}>
      <Modal open={isModalOpened}>
        <NewTag closeModal={() => setIsModalOpened(false)} />
      </Modal>
      <Box>
        <Button variant="contained" onClick={() => setIsModalOpened(true)}>
          Add new tag
        </Button>
      </Box>
      <Box>
        {data?.map(({ id, title }) => (
          <Typography key={id}>{title}</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default TagsList;
