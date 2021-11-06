import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import React, { FC } from 'react';

import NewTag from './components/NewTag';
import TagItem from './components/TagItem';
import { useTagsList } from './hooks';
import { useStyles } from './styles';

const TagsList: FC = () => {
  const classes = useStyles();
  const { data, isModalOpened, setIsModalOpened } = useTagsList();

  return (
    <Box className={classes.listWrapper}>
      <Modal open={isModalOpened}>
        <NewTag closeModal={(): void => setIsModalOpened(false)} />
      </Modal>
      <Box>
        <Button variant="contained" onClick={(): void => setIsModalOpened(true)}>
          Add new tag
        </Button>
      </Box>
      <Box display="flex" mt={2}>
        {data?.map(tag => (
          <TagItem tag={tag} />
        ))}
      </Box>
    </Box>
  );
};

export default TagsList;
