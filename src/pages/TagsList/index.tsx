import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import React, { FC } from 'react';

import NewTag from './components/NewTag';
import TagItem from './components/TagItem';
import { useTagsList } from './hooks';

const TagsList: FC = () => {
  const { data, mutate, queryClient, isModalOpened, setIsModalOpened } = useTagsList();

  return (
    <Box>
      <Modal open={isModalOpened}>
        <NewTag closeModal={(): void => setIsModalOpened(false)} />
      </Modal>
      <Box>
        <Button variant="contained" color="primary" onClick={(): void => setIsModalOpened(true)}>
          Add new tag
        </Button>
      </Box>
      <Box display="flex" mt={2} ml={-0.625} mr={-0.625} mb={-1.25} flexWrap="wrap">
        {data?.map(tag => (
          <TagItem
            tag={tag}
            key={tag.id}
            onDelete={(): void =>
              mutate(tag.id, {
                onSuccess: () => {
                  queryClient.invalidateQueries('tags');
                },
              })
            }
          />
        ))}
      </Box>
    </Box>
  );
};

export default TagsList;
