import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FC } from 'react';

import { useTagsList } from './hooks';
import NewTag from './NewTag';
import { TagsWrapper } from './styled';

import TagItem from 'components/TagItem';

const TagsList: FC = () => {
  const { data, isModalOpened, setIsModalOpened, onDelete } = useTagsList();

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
      <TagsWrapper>
        {data?.map(tag => (
          <TagItem tag={tag} key={tag.id} onDelete={onDelete} />
        ))}
      </TagsWrapper>
    </Box>
  );
};

export default TagsList;
