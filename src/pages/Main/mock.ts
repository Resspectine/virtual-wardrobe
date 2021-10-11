import { getGarments, updateFavoriteStatus, updateWearingAmount } from 'localStorage';
import { IGarment } from 'types/garment';

export const loadGarments = (): Promise<IGarment[]> => Promise.resolve(getGarments() || []);

export const wearGarment = (garmentId: string): Promise<void> =>
  new Promise(resolve => {
    setTimeout(() => {
      updateWearingAmount(garmentId);
      resolve();
    }, 500);
  });

export const triggerFavorite = (garmentId: string): Promise<void> =>
  new Promise(resolve => {
    setTimeout(() => {
      updateFavoriteStatus(garmentId);
      resolve();
    }, 500);
  });
