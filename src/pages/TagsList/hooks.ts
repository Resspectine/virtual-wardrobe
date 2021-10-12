import { useState } from 'react';
import { useQuery } from 'react-query';

import { loadTags } from './mock';

export const useTagsList = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const { data } = useQuery('tags', loadTags);

  return {
    data,
    isModalOpened,
    setIsModalOpened,
  };
};
