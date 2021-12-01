import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';

import { loadTags, removeTag } from './mock';

export const useTagsList = () => {
  const queryClient = useQueryClient();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const { data } = useQuery('tags', loadTags);
  const { mutate } = useMutation(removeTag);

  return {
    data,
    mutate,
    queryClient,
    isModalOpened,
    setIsModalOpened,
  };
};
