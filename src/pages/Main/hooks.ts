import { useCallback, useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';

import { loadGarments, removeGarment, triggerFavorite, wearGarment } from './mock';

import { useDoubleClick } from 'lib/hooks/useDoubleClick';
import { useHoldClick } from 'lib/hooks/useHoldClick';
import { loadTags } from 'pages/Profile/mock';
import { ROUTE_PATHS } from 'routes/constants';
import { useAppNotification } from 'store/appNotification';
import { IGarment } from 'types/garment';

export const useMain = () => {
  const history = useHistory();
  const queryClient = useQueryClient();
  const addNotification = useAppNotification(state => state.addNotification);
  const [isFavoriteFirst, setFavoriteFirst] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeGarmentId, setActiveGarmentId] = useState<string>('');
  const [anchorPosition, setAnchorPosition] = useState<{ top: number; left: number }>({
    left: 0,
    top: 0,
  });
  const loadGarmentsQueryParams = {
    filter: selectedTags.join(','),
    orderBy: (isFavoriteFirst && 'isFavorite') || undefined,
    orderDirection: (isFavoriteFirst && 'DESC') || undefined,
  };
  const { data } = useQuery(['garments', loadGarmentsQueryParams], () => loadGarments(loadGarmentsQueryParams), {
    keepPreviousData: true,
  });
  const { data: tagsData } = useQuery('tags', loadTags);
  const { mutate } = useMutation<Response, Error, string, { previousGarments: IGarment[] }>(wearGarment, {
    onMutate: async garmentId => {
      await queryClient.cancelQueries('garments');
      const previousGarments = queryClient.getQueryData<IGarment[]>('garments');
      queryClient.setQueryData(
        'garments',
        (old: IGarment[] | undefined) =>
          old?.map(garment =>
            garment.id === garmentId ? { ...garment, wearingAmount: garment.wearingAmount + 1 } : garment
          ) || []
      );

      return previousGarments && { previousGarments };
    },
    onSettled: () => {
      queryClient.invalidateQueries('garments');
    },
    onError: (_, __, context) => {
      if (context) {
        queryClient.setQueryData('garments', context.previousGarments);
      }
    },
  });

  const { mutate: mutateFavorite } = useMutation(triggerFavorite, {
    onSettled: () => {
      queryClient.invalidateQueries('garments');
    },
    onMutate: () => {
      setIsOpened(false);
    },
  });

  const { mutate: mutateRemove } = useMutation(removeGarment, {
    onSettled: () => {
      queryClient.invalidateQueries('garments');
    },
    onMutate: () => {
      setIsOpened(false);
    },
  });

  const popoverList = [
    {
      onClick: (): void => history.push(ROUTE_PATHS.editGarment(activeGarmentId)),
      children: 'Edit',
    },
    {
      onClick: (): void => mutateRemove(activeGarmentId),
      children: 'Delete',
    },
  ];

  const onClick = useDoubleClick(mutate, 400);
  const hold = useHoldClick(
    (garmentId: string) =>
      (event): void => {
        setAnchorPosition({
          left: event.clientX,
          top: event.clientY,
        });
        setIsOpened(true);
        setActiveGarmentId(garmentId);
      },
    200
  );
  const toggleFavorite = useCallback((garmentId: string): void => mutateFavorite(garmentId), []);

  useEffect(() => {
    addNotification({
      message: 'Loading garments',
      type: 'loading',
    });
  }, []);

  return {
    data,
    hold,
    onClick,
    isOpened,
    tagsData,
    setIsOpened,
    popoverList,
    selectedTags,
    anchorPosition,
    toggleFavorite,
    setSelectedTags,
    isFavoriteFirst,
    setFavoriteFirst,
  };
};
