/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useCallback, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';

// import Worker from '../../lib/workers/test.worker';
// import WorkerBuilder from '../../lib/workers/worker-builder';

import { loadGarments, removeGarment, triggerFavorite, wearGarment } from './mock';

import { useDoubleClick } from 'lib/hooks/useDoubleClick';
import { useHoldClick } from 'lib/hooks/useHoldClick';
import { ROUTE_PATHS } from 'routes/constants';
import { IGarment } from 'types/garment';

export const useMain = () => {
  const history = useHistory();
  // const workerRef = useRef<Worker | undefined>(undefined);
  const queryClient = useQueryClient();
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [activeGarmentId, setActiveGarmentId] = useState<string>('');
  const [anchorPosition, setAnchorPosition] = useState<{ top: number; left: number }>({
    left: 0,
    top: 0,
  });
  const { data } = useQuery('garments', loadGarments);
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

  // useEffect(() => {
  //   workerRef.current = new WorkerBuilder(Worker);
  // }, []);

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

        // if (workerRef.current) {
        //   workerRef.current.postMessage(2500000000);
        // }
      },
    200
  );
  const toggleFavorite = useCallback((garmentId: string): void => mutateFavorite(garmentId), []);

  return {
    data,
    hold,
    onClick,
    isOpened,
    setIsOpened,
    popoverList,
    toggleFavorite,
    anchorPosition,
  };
};
