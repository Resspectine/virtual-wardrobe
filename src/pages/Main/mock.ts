import { createQueryParams } from 'lib/helpers/queryParams';
import { deleteGarment } from 'localStorage';
import { IGarment } from 'types/garment';

interface LoadGarmentsQueryParams {
  filter?: string;
  orderBy?: string;
  orderDirection?: string;
}

export const loadGarments = async (params: LoadGarmentsQueryParams): Promise<IGarment[]> => {
  const queryParams = createQueryParams(params);

  return (
    await fetch(`http://localhost:3000/api/garment?${queryParams}`, {
      method: 'GET',
    })
  ).json();
};

export const wearGarment = (garmentId: string): Promise<Response> =>
  fetch(`http://localhost:3000/api/garment/wear/${garmentId}`, {
    method: 'PATCH',
  });

export const triggerFavorite = async (garmentId: string): Promise<void> =>
  (
    await fetch(`http://localhost:3000/api/garment/favorite/${garmentId}`, {
      method: 'PATCH',
    })
  ).json();

export const removeGarment = (garmentId: string): Promise<void> =>
  new Promise(resolve => {
    setTimeout(() => {
      deleteGarment(garmentId);
      resolve();
    }, 500);
  });
