import { deleteGarment, updateFavoriteStatus } from 'localStorage';
import { IGarment } from 'types/garment';

export const loadGarments = async (): Promise<IGarment[]> =>
  (
    await fetch('http://localhost:3000/api/garment', {
      method: 'GET',
    })
  ).json();

export const wearGarment = (garmentId: string): Promise<Response> =>
  fetch(`http://localhost:3000/api/garment/wear/${garmentId}`, {
    method: 'PATCH',
  });

export const triggerFavorite = (garmentId: string): Promise<void> =>
  new Promise(resolve => {
    setTimeout(() => {
      updateFavoriteStatus(garmentId);
      resolve();
    }, 500);
  });

export const removeGarment = (garmentId: string): Promise<void> =>
  new Promise(resolve => {
    setTimeout(() => {
      deleteGarment(garmentId);
      resolve();
    }, 500);
  });
